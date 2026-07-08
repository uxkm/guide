#!/usr/bin/env node
/**
 * Vue doc SFC → React JSX 변환 (src/doc/ 전용)
 */
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docDir = path.resolve(__dirname, '../src/doc');

const BOOL_PROPS = new Set([
  'stack', 'open', 'narrow', 'square', 'disabled', 'accordion', 'block', 'ripple',
  'placeholder', 'invalid', 'error', 'active', 'spin', 'vertical', 'scrollable',
  'closable', 'loading', 'readonly', 'required', 'checked', 'indeterminate',
  'multiple', 'clearable', 'searchable', 'filterable', 'dismissible', 'bordered',
]);

function kebabToCamel(str) {
  return str.replace(/-([a-z0-9])/gi, (_, c) => c.toUpperCase());
}

function walkDir(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walkDir(full, files);
    else if (entry.endsWith('.vue')) files.push(full);
  }
  return files;
}

function getDocComponentName(filePath) {
  const base = path.basename(filePath, '.vue');
  return base.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Doc';
}

function extractBlocks(content) {
  const docMetaScript = content.match(/<script(?![^>]*setup)[^>]*>([\s\S]*?)<\/script>/);
  const setupScript = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/);
  const templateStart = content.indexOf('<template>');
  const templateEnd = content.lastIndexOf('</template>');
  const template =
    templateStart >= 0 && templateEnd > templateStart
      ? content.slice(templateStart + '<template>'.length, templateEnd).trim()
      : '';
  return {
    docMetaScript: docMetaScript?.[1]?.trim() || '',
    setupScript: setupScript?.[1]?.trim() || '',
    template,
  };
}

function convertImports(script) {
  return script.replace(/\.vue(['"])/g, '.jsx$1');
}

function convertStyleValue(val) {
  const rules = val.split(';').filter((r) => r.trim());
  const entries = rules.map((rule) => {
    const idx = rule.indexOf(':');
    const key = rule.slice(0, idx).trim();
    const value = rule.slice(idx + 1).trim().replace(/'/g, "\\'");
    if (key.startsWith('--')) {
      return `'${key}': '${value}'`;
    }
    return `${kebabToCamel(key)}: '${value}'`;
  });
  return `{{ ${entries.join(', ')} }}`;
}

function convertSlotContent(inner) {
  let s = inner.trim();
  s = convertVFor(s);
  s = liftComponentSlots(s);
  s = convertVIfSimple(s);
  s = convertInterpolations(s);
  s = convertHtmlTags(s);
  if (!s.trim().startsWith('<>')) {
    s = `<>\n${s}\n</>`;
  }
  return s;
}

function slotPropExpr(prop, scope, inner) {
  const body = indent(convertSlotContent(inner), 8);
  if (scope) {
    return ` ${prop}={(${scope.trim()}) => (\n${body}\n      )}`;
  }
  return ` ${prop}={(\n${body}\n      )}`;
}

function propName(name) {
  if (name.includes('-')) return kebabToCamel(name);
  return name;
}

function convertVIfLines(content) {
  const lines = content.split('\n');
  return lines
    .map((line) => {
      let l = line;
      if (/\bv-if="/.test(l)) {
        l = l.replace(/(<\w+[^>]*)\bv-if="([^"]+)"/, '$1');
        l = l.replace(/(<\w+[^>]*)(>)/, `$1$2`).replace(/>([^<]*)$/, (_, rest) => {
          const tagMatch = l.match(/^(\s*)<\w+/);
          const indent = tagMatch ? tagMatch[1] : '';
          const cond = l.match(/\bv-if="([^"]+)"/)?.[1];
          if (cond) {
            const openTag = l.replace(/\bv-if="[^"]+"/, '').trimEnd();
            if (openTag.endsWith('/>')) {
              return `${indent}{${cond} && ${openTag}}`;
            }
          }
          return `>${rest}`;
        });
        const cond = line.match(/\bv-if="([^"]+)"/)?.[1];
        const tagMatch = line.match(/^(\s*)(<\w+[^>]*)\bv-if="[^"]+"([^>]*>)(.*)$/);
        if (tagMatch) {
          const [, indent, open, close, inner] = tagMatch;
          const tag = `${open}${close}`.replace(/\s+$/, '');
          if (tag.endsWith('/>')) {
            return `${indent}{${cond} && ${tag}}`;
          }
          return `${indent}{${cond} && (${tag}${inner}`; // will close below
        }
      }
      if (/\bv-else-if="/.test(l)) {
        const cond = l.match(/\bv-else-if="([^"]+)"/)?.[1];
        const tagMatch = l.match(/^(\s*)(<\w+[^>]*)\bv-else-if="[^"]+"([^>]*>)(.*)$/);
        if (tagMatch) {
          const [, indent, open, close, inner] = tagMatch;
          return `${indent})}${'\n'}${indent}{${cond} && (${open}${close}${inner}`;
        }
      }
      if (/\bv-else\b/.test(l)) {
        const tagMatch = l.match(/^(\s*)(<\w+[^>]*)\bv-else\b([^>]*>)(.*)$/);
        if (tagMatch) {
          const [, indent, open, close, inner] = tagMatch;
          return `${indent})}${'\n'}${indent}{(${open}${close}${inner}`;
        }
        return l.replace(/\bv-else\b/, ')}{(');
      }
      return l;
    })
    .join('\n');
}

function convertVIfSimple(content) {
  return content
    .replace(/<(\w+)([^>]*)\s+v-if="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g, (_, tag, b, cond, a, inner) => {
      const attrs = convertAttrs(`${b}${a}`);
      const body = convertTemplate(inner);
      return `{${cond} && (
        <${tag}${attrs}>
${body}
        </${tag}>
      )}`;
    })
    .replace(/<(\w+)([^>]*)\s+v-else-if="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g, (_, tag, b, cond, a, inner) => {
      const attrs = convertAttrs(`${b}${a}`);
      const body = convertTemplate(inner);
      return `{${cond} ? (
        <${tag}${attrs}>
${body}
        </${tag}>
      ) : null}`;
    })
    .replace(/<(\w+)([^>]*)\s+v-else([^>]*)>([\s\S]*?)<\/\1>/g, (_, tag, b, a, inner) => {
      const attrs = convertAttrs(`${b}${a}`);
      const body = convertTemplate(inner);
      return `{(
        <${tag}${attrs}>
${body}
        </${tag}>
      )}`;
    });
}

function convertVFor(content) {
  let s = content;

  s = s.replace(
    /<(\w+)([^>]*)\s+v-for="(\w+)\s+in\s+([^"]+)"\s*:key="([^"]+)"([^>]*)\/>/g,
    (_, tag, b, item, list, key, a) => {
      const attrs = convertAttrs(`${b}${a}`);
      return `{${list.trim()}.map((${item}) => (
        <${tag}${attrs} key={${key.trim()}} />
      ))}`;
    },
  );

  s = s.replace(
    /<(\w+)([^>]*)\s+v-for="(\w+)\s+in\s+([^"]+)"\s*:key="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (_, tag, b, item, list, key, a, inner) => {
      const attrs = convertAttrs(`${b}${a}`);
      const body = convertTemplate(inner);
      return `{${list.trim()}.map((${item}) => (
        <${tag}${attrs} key={${key.trim()}}>
${body}
        </${tag}>
      ))}`;
    },
  );

  return s;
}

function convertAttrs(attrStr) {
  let s = attrStr;

  s = s.replace(/\sheading-id="/g, ' headingId="');
  s = s.replace(/\scode-column="/g, ' codeColumn="');
  s = s.replace(/\sbadge-color="/g, ' badgeColor="');
  s = s.replace(/\sbadge-label="/g, ' badgeLabel="');
  s = s.replace(/\strigger-label="/g, ' triggerLabel="');
  s = s.replace(/\sextra-code="/g, ' extraCode="');
  s = s.replace(/\sinline-label-width="/g, ' inlineLabelWidth="');
  s = s.replace(/\sinline-gap="/g, ' inlineGap="');
  s = s.replace(/\sstroke-width="/g, ' strokeWidth="');
  s = s.replace(/\saria-label="/g, ' ariaLabel="');

  s = s.replace(/\s:([a-zA-Z][\w-]*)="([^"]+)"/g, (_, n, v) => ` ${propName(n)}={${v}}`);
  s = s.replace(/\s:([a-zA-Z][\w-]*)=\{([^}]+)\}/g, (_, n, v) => ` ${propName(n)}={${v}}`);

  s = s.replace(/\s@click\.prevent="([^"]+)"/g, ' onClick={(e) => { e.preventDefault(); $1; }}');
  s = s.replace(/\s@click="([^"]+)"/g, ' onClick={() => $1}');

  s = s.replace(/\sclass="/g, ' className="');

  s = s.replace(/\saria-hidden="true"/g, ' aria-hidden={true}');
  s = s.replace(/\saria-hidden="false"/g, ' aria-hidden={false}');

  for (const bp of BOOL_PROPS) {
    s = s.replace(new RegExp(`\\s${bp}(?=\\s|/?>)`, 'g'), ` ${bp}`);
  }

  s = s.replace(/\sstyle="([^"]+)"/g, (_, val) => ` style=${convertStyleValue(val)}`);

  s = s.replace(/\s([\w-]+)="([^"]+)"/g, (match, name, val) => {
    if (name === 'class') return ` className="${val}"`;
    if (name.includes('-')) return ` ${propName(name)}="${val}"`;
    return match;
  });

  return s;
}

function liftComponentSlots(content) {
  let s = content;

  for (let i = 0; i < 50; i++) {
    const before = s;

    // One component per iteration; skip if rest contains nested templates
    const startRe = /(<([A-Z][\w]*)[^>]*>)\s*((?:<template\s+#[\w-]+(?:="\{[^"]+\}")?\s*>[\s\S]*?<\/template>\s*)+)([\s\S]*?)<\/\2>/;
    s = s.replace(startRe, (match, openTag, tagName, slotBlock, rest) => {
      if (/<template\s+#/.test(rest)) return match;

      let props = '';
      const slotRe = /<template\s+#([\w-]+)(?:="(\{[^"]+\})")?\s*>\s*([\s\S]*?)\s*<\/template>/g;
      let sm;
      while ((sm = slotRe.exec(slotBlock)) !== null) {
        props += slotPropExpr(kebabToCamel(sm[1]), sm[2], sm[3]);
      }
      const attrs = convertAttrs(openTag.slice(tagName.length + 1, -1));
      const body = rest.trim();
      return body
        ? `<${tagName}${attrs}${props}>\n${convertTemplateInner(body)}\n</${tagName}>`
        : `<${tagName}${attrs}${props} />`;
    });

    if (before === s) break;
  }

  return s.replace(/<\/?template[^>]*>/g, '');
}

function convertTemplateInner(template) {
  let s = template;
  s = convertVFor(s);
  s = convertVIfSimple(s);
  s = convertInterpolations(s);
  s = convertHtmlTags(s);
  return s;
}

function convertTemplate(template) {
  let s = template;
  s = convertVFor(s);
  s = liftComponentSlots(s);
  s = convertVIfSimple(s);
  s = convertInterpolations(s);
  s = convertHtmlTags(s);
  return s.replace(/<\/?template[^>]*>/g, '');
}

function convertInterpolations(content) {
  return content.replace(/\{\{\s*([^}]+)\s*\}\}/g, '{$1}');
}

function convertHtmlTags(content) {
  let s = content;
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<\/?template[^>]*>/g, '');
  s = s.replace(/<(\w+)([^>]*?)(\/?)>/g, (match, tag, attrs, selfClose) => {
    if (/^[A-Z]/.test(tag)) {
      return `<${tag}${convertAttrs(attrs)}${selfClose}>`;
    }
    let converted = attrs.replace(/\sclass="/g, ' className="');
    converted = converted.replace(/\sstyle="([^"]+)"/g, (_, val) => ` style=${convertStyleValue(val)}`);
    converted = converted.replace(/\sstroke-width="/g, ' strokeWidth="');
    converted = converted.replace(/\saria-hidden="true"/g, ' aria-hidden={true}');
    return `<${tag}${converted}${selfClose}>`;
  });
  return s;
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text.split('\n').map((l) => (l.trim() ? pad + l : '')).join('\n');
}

function convertDocFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const { docMetaScript, setupScript, template } = extractBlocks(content);
  const componentName = getDocComponentName(filePath);
  const jsxTemplate = convertTemplate(template);
  const imports = convertImports(setupScript);

  let output = '';
  if (docMetaScript) output += docMetaScript + '\n\n';
  if (imports) output += imports + '\n\n';
  output += `export default function ${componentName}() {\n`;
  output += `  return (\n    <>\n${indent(jsxTemplate, 6)}\n    </>\n  );\n}\n`;

  const outPath = filePath.replace(/\.vue$/, '.jsx');
  writeFileSync(outPath, output);
  unlinkSync(filePath);
  return outPath;
}

const targetFile = process.argv[2];
const files = targetFile
  ? [path.resolve(targetFile)]
  : walkDir(docDir);

let converted = 0;
for (const file of files) {
  try {
    convertDocFile(file);
    converted++;
    console.log(`✓ ${path.relative(docDir, file)}`);
  } catch (err) {
    console.error(`✗ ${path.relative(docDir, file)}: ${err.message}`);
    console.error(err.stack);
  }
}
console.log(`\nConverted ${converted}/${files.length}`);
