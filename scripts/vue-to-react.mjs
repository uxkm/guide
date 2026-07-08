#!/usr/bin/env node
/**
 * Vue SFC → React JSX 변환 스크립트
 * 사용: node scripts/vue-to-react.mjs [glob-pattern]
 */
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function walkDir(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!entry.includes('node_modules') && !entry.startsWith('.')) {
        walkDir(full, files);
      }
    } else if (entry.endsWith('.vue')) {
      files.push(full);
    }
  }
  return files;
}

function extractBlocks(content) {
  const docMetaScript = content.match(/<script(?![^>]*setup)[^>]*>([\s\S]*?)<\/script>/);
  const setupScript = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/);
  const template = content.match(/<template>([\s\S]*?)<\/template>/);

  return {
    docMetaScript: docMetaScript?.[1]?.trim() || '',
    setupScript: setupScript?.[1]?.trim() || '',
    template: template?.[1]?.trim() || '',
  };
}

function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function convertImports(script) {
  let s = script;

  s = s.replace(/from\s+['"]vue['"]/g, "from 'react'");
  s = s.replace(/from\s+['"]vue-router['"]/g, "from 'react-router-dom'");

  s = s.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]react['"]/,
    (_, imports) => {
      const items = new Set(
        imports
          .split(',')
          .map((i) => i.trim())
          .filter(Boolean),
      );

      const vueToReact = {
        computed: 'useMemo',
        ref: 'useRef',
        watch: null,
        watchEffect: null,
        onMounted: null,
        onUnmounted: null,
        nextTick: null,
        inject: null,
        provide: null,
        useAttrs: null,
        useSlots: null,
        useId: 'useId',
        defineExpose: null,
      };

      for (const [vue, react] of Object.entries(vueToReact)) {
        if (items.has(vue)) {
          items.delete(vue);
          if (react) items.add(react);
        }
      }

      items.add('useEffect');
      items.add('useState');
      items.add('useCallback');
      items.add('useMemo');
      items.add('useRef');
      items.add('useId');
      items.add('forwardRef');
      items.add('useImperativeHandle');

      return `import { ${[...items].sort().join(', ')} } from 'react'`;
    },
  );

  s = s.replace(/@\/composables\//g, '@/hooks/');
  s = s.replace(/\.vue(['"])/g, '.jsx$1');

  return s;
}

function convertScript(script) {
  let s = convertImports(script);

  s = s.replace(/defineOptions\(\{[^}]*inheritAttrs:\s*false[^}]*\}\);?\n?/g, '');
  s = s.replace(/defineOptions\(\{[^}]*\}\);?\n?/g, '');

  s = s.replace(/const\s+emit\s*=\s*defineEmits\(\[[^\]]*\]\);?\n?/g, '');
  s = s.replace(/defineEmits\(\[[^\]]*\]\);?\n?/g, '');

  s = s.replace(/defineExpose\(\{([^}]+)\}\);?\n?/g, '');

  s = s.replace(/const\s+props\s*=\s*defineProps\(\{([\s\S]*?)\}\);?/g, (_, propsBody) => {
    return `const props = ${parseDefineProps(propsBody)};`;
  });

  s = s.replace(/defineProps\(\{([\s\S]*?)\}\)/g, (_, propsBody) => parseDefineProps(propsBody));

  s = s.replace(/const\s+slots\s*=\s*useSlots\(\);?\n?/g, '');
  s = s.replace(/const\s+attrs\s*=\s*useAttrs\(\);?\n?/g, '');

  s = s.replace(/\.value\b/g, (match, offset, str) => {
    const before = str.slice(Math.max(0, offset - 30), offset);
    if (/props\.|context\?\.revision\./.test(before + match)) return match;
    return '';
  });

  s = s.replace(/inject\([^)]+\)/g, 'null');

  return s;
}

function parseDefineProps(body) {
  const lines = body.split('\n').filter((l) => l.trim());
  const props = [];

  for (const line of lines) {
    const match = line.match(/^\s*(\w+|\[[^\]]+\]):\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);
    if (match) {
      const name = match[1];
      const config = match[2];
      const defaultMatch = config.match(/default:\s*([^,}\n]+)/);
      const required = config.includes('required: true');
      if (defaultMatch) {
        props.push(`${name} = ${defaultMatch[1].trim()}`);
      } else if (!required) {
        props.push(name);
      } else {
        props.push(name);
      }
      continue;
    }

    const simpleMatch = line.match(/^\s*(\w+):\s*(String|Number|Boolean|Array|Object|Function)/);
    if (simpleMatch) {
      props.push(simpleMatch[1]);
      continue;
    }

    const boolMatch = line.match(/^\s*(\w+),\s*$/);
    if (boolMatch) {
      props.push(boolMatch[1]);
    }
  }

  if (props.length === 0) return '{}';
  return `{ ${props.join(', ')} }`;
}

function convertTemplateToJsx(template) {
  let jsx = template;

  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  jsx = jsx.replace(/<template\s+#([\w-]+)>([\s\S]*?)<\/template>/g, (_, slot, content) => {
    const propName = kebabToCamel(slot);
    return `{${propName} || (${convertTemplateToJsx(content)})}`;
  });

  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/:class="/g, 'className={cn(');
  jsx = jsx.replace(/:class="([^"]+)"/g, 'className={cn($1)}');
  jsx = jsx.replace(/:class=\{([^}]+)\}/g, 'className={cn($1)}');

  jsx = jsx.replace(/@click="([^"]+)"/g, 'onClick={() => $1}');
  jsx = jsx.replace(/@click\.stop="([^"]+)"/g, 'onClick={(e) => { e.stopPropagation(); $1; }}');
  jsx = jsx.replace(/@keydown="([^"]+)"/g, 'onKeyDown={(e) => $1}');
  jsx = jsx.replace(/@input="([^"]+)"/g, 'onInput={(e) => $1}');
  jsx = jsx.replace(/@change="([^"]+)"/g, 'onChange={(e) => $1}');
  jsx = jsx.replace(/@([a-z-]+)="([^"]+)"/g, (_, event, handler) => {
    const reactEvent = 'on' + event.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
    return `${reactEvent}={() => ${handler}}`;
  });

  jsx = jsx.replace(/:([a-zA-Z][\w-]*)="([^"]+)"/g, '$1={$2}');
  jsx = jsx.replace(/:([a-zA-Z][\w-]*)=\{([^}]+)\}/g, '$1={$2}');

  jsx = jsx.replace(/v-if="([^"]+)"/g, '{$1 && (');
  jsx = jsx.replace(/v-else-if="([^"]+)"/g, ')} {$1 && (');
  jsx = jsx.replace(/v-else/g, ')} {(');
  jsx = jsx.replace(/v-show="([^"]+)"/g, 'style={{ display: $1 ? undefined : "none" }}');

  jsx = jsx.replace(
    /v-for="(\w+)\s+in\s+([^"]+)"\s*:key="([^"]+)"/g,
    '{($2).map(($1) => (',
  );
  jsx = jsx.replace(
    /v-for="\((\w+),\s*(\w+)\)\s+in\s+([^"]+)"\s*:key="([^"]+)"/g,
    '{($3).map(($1, $2) => (',
  );

  jsx = jsx.replace(/v-html="([^"]+)"/g, 'dangerouslySetInnerHTML={{ __html: $1 }}');
  jsx = jsx.replace(/v-model="([^"]+)"/g, 'value={$1} onChange={(e) => { $1 = e.target.value; }}');

  jsx = jsx.replace(/ref="(\w+)"/g, 'ref={$1}');
  jsx = jsx.replace(/<slot\s*\/>/g, '{children}');
  jsx = jsx.replace(/<slot\s*\/>/g, '{children}');
  jsx = jsx.replace(/<slot>([\s\S]*?)<\/slot>/g, '{children || ($1)}');
  jsx = jsx.replace(/<slot\s+name="([\w-]+)"\s*\/>/g, (_, name) => `{${kebabToCamel(name)}}`);

  jsx = jsx.replace(/\{\{\s*([^}]+)\s*\}\}/g, '{$1}');

  jsx = jsx.replace(/<(\w+)([^>]*)\s*\/>/g, (match, tag, attrs) => {
    const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'col', 'embed', 'source', 'track', 'wbr'];
    if (voidTags.includes(tag.toLowerCase())) return match;
    if (attrs.includes('/>') && !match.includes('</')) return match;
    return match;
  });

  jsx = jsx.replace(/(\w+)="true"/g, '$1={true}');
  jsx = jsx.replace(/(\w+)="false"/g, '$1={false}');

  jsx = jsx.replace(/aria-hidden="true"/g, 'aria-hidden={true}');
  jsx = jsx.replace(/aria-hidden="false"/g, 'aria-hidden={false}');

  jsx = jsx.replace(/@update:collapsed="([^"]+)"/g, 'onCollapsedChange={($event) => $1}');

  return jsx;
}

function getComponentName(filePath) {
  const base = path.basename(filePath, '.vue');
  return base.charAt(0).toUpperCase() + base.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function convertVueFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const { docMetaScript, setupScript, template } = extractBlocks(content);
  const componentName = getComponentName(filePath);
  const isDocPage = filePath.includes('/doc/');

  let script = convertScript(setupScript);
  const jsxTemplate = convertTemplateToJsx(template);

  const needsCn = script.includes('rootClass') || template.includes(':class') || jsxTemplate.includes('className={cn');
  const cnImport = needsCn ? "import { cn } from '@/utils/cn';\n" : '';

  const hasRef = script.includes('useRef(') || script.includes('Ref = ref');
  const hasUseMemo = script.includes('useMemo(') || script.includes('computed(');
  const hasUseEffect = script.includes('useEffect(') || script.includes('watch(') || script.includes('onMounted');

  script = script.replace(/computed\(\(\)\s*=>\s*/g, 'useMemo(() => ');
  script = script.replace(/computed\(\([^)]*\)\s*=>\s*/g, 'useMemo(() => ');
  script = script.replace(/const\s+(\w+)\s*=\s*ref\(([^)]*)\)/g, 'const $1 = useRef($2)');
  script = script.replace(/const\s+(\w+)\s*=\s*ref\(\)/g, 'const $1 = useRef(null)');

  const propsMatch = script.match(/const props = (\{[^}]+\}|defineProps[^;]+);/);
  let propsDestructuring = 'props';
  if (propsMatch) {
    propsDestructuring = propsMatch[1];
    script = script.replace(/const props = \{([^}]+)\};/, '');
  }

  let output = '';

  if (docMetaScript) {
    output += docMetaScript.replace(/export const docMeta/g, 'export const docMeta') + '\n\n';
  }

  output += `${cnImport}import React${needsCn ? '' : ', { useRef, useMemo, useEffect, useState, useCallback, useId, forwardRef, useImperativeHandle }'} from 'react';\n`;
  output += script + '\n\n';

  if (isDocPage) {
    output += `export default function ${componentName}() {\n`;
    output += `  return (\n    <>\n${indentJsx(jsxTemplate, 6)}\n    </>\n  );\n}\n`;
  } else if (script.includes('defineExpose')) {
    output += `const ${componentName} = forwardRef(function ${componentName}(${propsDestructuring === 'props' ? 'props' : `{ ${propsDestructuring.replace(/[{}]/g, '')} }`}, ref) {\n`;
    output += `  return (\n${indentJsx(jsxTemplate, 4)}\n  );\n});\n\nexport default ${componentName};\n`;
  } else {
    const params = propsDestructuring === 'props' ? 'props' : `{ ${propsDestructuring.replace(/[{}]/g, '')}, children, ...rest }`;
    output += `export default function ${componentName}(${params}) {\n`;
    if (params.includes('children')) {
      /* already has children */
    } else if (jsxTemplate.includes('{children}')) {
      output = output.replace(`(${params})`, '(props) {\n  const { children, ...rest } = props;');
    }
    output += `  return (\n${indentJsx(jsxTemplate, 4)}\n  );\n}\n`;
  }

  const outPath = filePath.replace(/\.vue$/, '.jsx');
  writeFileSync(outPath, output);
  unlinkSync(filePath);
  console.log(`Converted: ${path.relative(rootDir, filePath)} → ${path.relative(rootDir, outPath)}`);
}

function indentJsx(jsx, spaces) {
  const pad = ' '.repeat(spaces);
  return jsx
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n');
}

const srcDir = path.join(rootDir, 'src');
const files = walkDir(srcDir);
console.log(`Found ${files.length} Vue files`);

for (const file of files) {
  try {
    convertVueFile(file);
  } catch (err) {
    console.error(`Failed: ${file}`, err.message);
  }
}

console.log('Done.');
