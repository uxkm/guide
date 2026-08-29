/**
 * Ports components to Angular using Vue templates + React logic.
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const vueRoot = join(root, 'apps/vue/src/components');
const reactRoot = join(root, 'apps/react/src/components');
const angularRoot = join(root, 'apps/angular/src/components');

const SLOT_PROPS = new Set(['children', 'iconBefore', 'iconAfter', 'icon', 'prefix', 'suffix', 'actions']);

function toKebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function componentFileName(name) {
  return `${toKebab(name)}.component`;
}

function parseVueTemplate(vuePath) {
  try {
    const source = require ? '' : '';
  } catch {}
  return readFile(vuePath, 'utf8').then((source) => {
    const match = source.match(/<template>([\s\S]*?)<\/template>/);
    return match?.[1]?.trim() ?? '';
  });
}

function parseReactComponent(source, className) {
  const fnMatch = source.match(
    new RegExp(`export function ${className}\\(\\{([\\s\\S]*?)\\}\\)\\s*\\{`, 'm'),
  );
  if (!fnMatch) return null;

  const paramsBlock = fnMatch[1];
  const props = [];
  const outputs = [];
  for (const line of paramsBlock.split('\n')) {
    const trimmed = line.trim().replace(/,$/, '');
    if (!trimmed || trimmed.startsWith('//') || trimmed === '...props') continue;
    const m = trimmed.match(/^([\w]+)(?:\s*:\s*(\w+))?\s*(?:=\s*(.+))?(?:\s*\/\/(.*))?$/);
    if (!m) continue;
    const [, name, alias, defaultValue, comment] = m;
    const propName = alias || name;
    if (name.startsWith('on') && name[2] === name[2]?.toUpperCase()) {
      outputs.push({ name: name[2].toLowerCase() + name.slice(3), comment: comment?.trim() });
      continue;
    }
    props.push({ name: propName, defaultValue: defaultValue?.trim(), comment: comment?.trim(), isSlot: SLOT_PROPS.has(propName) });
  }

  const bodyStart = source.indexOf(fnMatch[0]) + fnMatch[0].length;
  let depth = 1;
  let i = bodyStart;
  while (i < source.length && depth > 0) {
    if (source[i] === '{') depth++;
    if (source[i] === '}') depth--;
    i++;
  }
  const body = source.slice(bodyStart, i - 1).trim();
  return { props, outputs, body };
}

function inferType(defaultValue, name) {
  if (defaultValue === 'true' || defaultValue === 'false') return 'boolean';
  if (defaultValue && /^['"]/.test(defaultValue)) return 'string';
  if (defaultValue && /^-?\d/.test(defaultValue)) return 'number';
  if (['disabled', 'loading', 'error', 'block', 'vertical', 'wrap', 'fluid', 'closable', 'showIcon', 'banner', 'clearable', 'iconOnly', 'active', 'readonly'].includes(name)) return 'boolean';
  return 'unknown';
}

function buildInputs(props) {
  return props.filter((p) => !p.isSlot).map((p) => {
    const type = inferType(p.defaultValue, p.name);
    const comment = p.comment ? ` // ${p.comment}` : '';
    if (p.defaultValue === undefined) {
      if (type === 'boolean') return `  readonly ${p.name} = input<boolean>(false);${comment}`;
      return `  readonly ${p.name} = input<${type}>();${comment}`;
    }
    return `  readonly ${p.name} = input<${type}>(${p.defaultValue});${comment}`;
  }).join('\n');
}

function buildOutputs(outputs) {
  return outputs.map((o) => `  readonly ${o.name} = output<Event>();${o.comment ? ` // ${o.comment}` : ''}`).join('\n');
}

function convertVueTemplate(template, props, hasDynamicTag = false) {
  let html = template;
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/<component\s+:is="([^"]+)"([^>]*)>/g, (_, tagExpr, attrs) => {
    const convertedAttrs = attrs.replace(/:([@\w:-]+)="([^"]+)"/g, (__, attr, expr) => `[${attr}]="${convertExpr(expr, props)}"`);
    return `@switch (${convertExpr(tagExpr, props)}) {\n@case ('a') { <a${convertedAttrs}>`;
  });

  html = html.replace(/\bv-else-if="([^"]+)"/g, (_, cond) => `} @else if (${convertExpr(cond, props)}) {`);
  html = html.replace(/\bv-else\b/g, '} @else {');
  html = html.replace(/\bv-if="([^"]+)"/g, (_, cond) => `@if (${convertExpr(cond, props)}) {`);
  html = html.replace(/\bv-for="(\w+)\s+in\s+([^"]+)"/g, (_, item, list) => `@for (${item} of ${convertExpr(list, props)}; track ${item}) {`);
  html = html.replace(/\bv-for="\((\w+),\s*(\w+)\)\s+in\s+([^"]+)"/g, (_, item, idx, list) => `@for (${item} of ${convertExpr(list, props)}; track ${item}; let ${idx} = $index) {`);

  html = html.replace(/:class="([^"]+)"/g, (_, expr) => `[class]="${convertExpr(expr, props)}"`);
  html = html.replace(/@([a-z][\w-]*)="([^"]+)"/g, (_, evt, handler) => `(${evt})="${handler}($event)"`);
  html = html.replace(/:([@\w:-]+)="([^"]+)"/g, (_, attr, expr) => `[${attr}]="${convertExpr(expr, props)}"`);

  html = html.replace(/<slot\s+name="([^"]+)"\s*\/?>/g, '<ng-content select="[$1]" />');
  html = html.replace(/<slot\s*\/>/g, '<ng-content />');
  html = html.replace(/<slot>([\s\S]*?)<\/slot>/g, '<ng-content>$1</ng-content>');
  html = html.replace(/<slot\s+name="([^"]+)">([\s\S]*?)<\/slot>/g, '<ng-content select="[$1]">$2</ng-content>');
  html = html.replace(/\$slots\.(\w+)/g, 'hasSlot("$1")');
  html = html.replace(/\{\{\s*([^}|]+)\s*\}\}/g, (_, expr) => `{{ ${convertExpr(expr.trim(), props)} }}`);

  html = html.replace(/<\/component>/g, '} }');

  return html;
}

function convertExpr(expr, props) {
  let result = expr;
  const propNames = props.filter((p) => !p.isSlot).map((p) => p.name);
  for (const name of propNames.sort((a, b) => b.length - a.length)) {
    result = result.replace(new RegExp(`\\bprops\\.${name}\\b`, 'g'), `${name}()`);
    result = result.replace(new RegExp(`(?<![.\\w])${name}\\b(?!\\()`, 'g'), `${name}()`);
  }
  const computedNames = ['classes', 'inactive', 'needsButtonSemantics', 'showClear', 'inputClasses', 'hasAddon', 'readonly', 'numericOnly', 'inputAttrs', 'resolvedSize', 'resolvedColor', 'resolvedOrient', 'resolvedTag', 'rootTag', 'hasContent', 'visible', 'wrapperClass', 'wrapperTag', 'svgClass', 'label', 'content', 'isAnchor', 'isButton', 'acceptsHref', 'showLabel', 'restAttrs', 'currentValue', 'canLoop', 'isCoverflow', 'isGrid'];
  for (const name of computedNames) {
    result = result.replace(new RegExp(`\\b${name}\\b(?!\\()`, 'g'), `${name}()`);
  }
  result = result.replace(/\.value\b/g, '()');
  result = result.replace(/attrs\[['"]class['"]\]/g, 'hostClass()');
  result = result.replace(/\battrs\.class\b/g, 'hostClass()');
  result = result.replace(/\battrs\./g, 'hostAttr.');
  return result;
}

function extractComputedAndMethods(body, props, outputs) {
  const parts = [];
  const imports = new Set(['Component', 'input', 'output']);

  if (body.includes('useState') || body.includes('signal(')) imports.add('signal');
  if (body.includes('useMemo') || body.includes('computed(') || body.includes('const classes = [')) imports.add('computed');
  if (body.includes('useEffect') || body.includes('onMounted') || body.includes('afterNextRender')) imports.add('afterNextRender');
  if (body.includes('useRef') || body.includes('viewChild')) imports.add('viewChild', 'ElementRef');
  if (body.includes('onBeforeUnmount') || body.includes('DestroyRef')) imports.add('DestroyRef', 'inject');

  const stateMatch = body.match(/const \[(\w+),\s*set\w+\]\s*=\s*useState\(([^)]*)\)/);
  if (stateMatch) {
    parts.push(`  readonly ${stateMatch[1]} = signal(${stateMatch[2]});`);
  }

  const classesArray = body.match(/const classes = \[([\s\S]*?)\]\s*\.filter\(Boolean\)\s*\.join\(' '\);/);
  if (classesArray) {
    const arr = classesArray[1].replace(/\b(\w+)\b(?!\()/g, (m, n) => {
      if (['true', 'false', 'null', 'undefined', 'filter', 'Boolean', 'btn', 'alert', 'space', 'container', 'divider', 'link', 'input'].includes(n)) return m;
      if (props.some((p) => p.name === n)) return `${n}()`;
      return m;
    });
    parts.push(`  readonly classes = computed(() => [${arr}].filter(Boolean).join(' '));`);
  }

  const computedBlocks = [...body.matchAll(/const (\w+) = computed\(\(\)\s*=>\s*([\s\S]*?)\);/g)];
  for (const [, name, expr] of computedBlocks) {
    if (name === 'classes') continue;
    let converted = expr.replace(/\bprops\.(\w+)/g, (_, p) => `${p}()`);
    for (const p of props) {
      converted = converted.replace(new RegExp(`\\b${p.name}\\b(?!\\()`, 'g'), `${p.name}()`);
    }
    parts.push(`  readonly ${name} = computed(() => ${converted.trim()});`);
  }

  const fnRegex = /function\s+(\w+)\(([^)]*)\)\s*\{([\s\S]*?)\n\}/g;
  let fnMatch;
  const methods = [];
  while ((fnMatch = fnRegex.exec(body))) {
    let fnBody = fnMatch[3];
    for (const p of props) fnBody = fnBody.replace(new RegExp(`\\b${p.name}\\b(?!\\()`, 'g'), `${p.name}()`);
    for (const o of outputs) fnBody = fnBody.replace(new RegExp(`\\bon${o.name[0].toUpperCase()}${o.name.slice(1)}\\?\\.\\(`, 'g'), `this.${o.name}.emit(`);
    fnBody = fnBody.replace(/\bsetVisible\(([^)]*)\)/g, 'this.visible.set($1)');
    fnBody = fnBody.replace(/\.value\b/g, '()');
    methods.push(`  ${fnMatch[1]}(${fnMatch[2] || 'event: Event'}) {${fnBody}\n  }`);
  }

  return { imports: [...imports], members: [...parts, ...methods].join('\n\n') };
}

function extractComponentImports(source, currentDir) {
  const imports = [];
  for (const m of source.matchAll(/import\s+(\w+)\s+from\s+['"](\.\/[^'"]+\.jsx)['"]/g)) {
    const rel = relative(angularRoot, join(currentDir.replace(reactRoot, angularRoot), dirname(m[2]), basename(m[2], '.jsx'))).replace(/\\/g, '/');
    imports.push({ name: m[1], path: `${rel.startsWith('.') ? rel : `./${rel}`}/${componentFileName(basename(m[2], '.jsx'))}` });
  }
  return imports;
}

async function portComponent(reactPath) {
  const className = basename(reactPath, '.jsx');
  const vuePath = join(vueRoot, relative(reactRoot, reactPath).replace('.jsx', '.vue'));
  const reactSource = await readFile(reactPath, 'utf8');
  const parsed = parseReactComponent(reactSource, className);
  if (!parsed) return;

  let template = '';
  try {
    const vueSource = await readFile(vuePath, 'utf8');
    const match = vueSource.match(/<template>([\s\S]*?)<\/template>/);
    template = match?.[1]?.trim() ?? '';
  } catch {
    const returnMatch = parsed.body.match(/return\s*\(([\s\S]*)\);?\s*$/m);
    template = returnMatch?.[1] ?? '<ng-content />';
    template = template.replace(/className=/g, 'class=');
  }

  template = convertVueTemplate(template, parsed.props);
  const { imports, members } = extractComputedAndMethods(parsed.body, parsed.props, parsed.outputs);
  const angularDir = join(angularRoot, relative(reactRoot, dirname(reactPath)));
  await mkdir(angularDir, { recursive: true });

  const compImports = extractComponentImports(reactSource, dirname(reactPath));
  const importLines = compImports.map((i) => `import ${i.name} from '${i.path}';`);
  const angularImportNames = compImports.map((i) => i.name);

  const fileBase = componentFileName(className);
  const ts = `${importLines.join('\n')}${importLines.length ? '\n' : ''}import { ${imports.join(', ')} } from '@angular/core';

@Component({
  selector: '${className}',
  standalone: true,${angularImportNames.length ? `\n  imports: [${angularImportNames.join(', ')}],` : ''}
  template: \`${template.replace(/`/g, '\\`')}\`,
})
export class ${className} {
  readonly hostClass = input<string>('');
${buildInputs(parsed.props)}
${parsed.outputs.length ? `\n${buildOutputs(parsed.outputs)}` : ''}

${members}
}

export default ${className};
`;

  await writeFile(join(angularDir, `${fileBase}.ts`), ts);
}

async function portIndex(indexPath) {
  const content = await readFile(indexPath, 'utf8');
  const angularDir = join(angularRoot, relative(reactRoot, dirname(indexPath)));
  await mkdir(angularDir, { recursive: true });
  const ts = content
    .replace(/from '\.\/([^']+)\.jsx'/g, (_, name) => `from './${componentFileName(name)}'`)
    .replace(/\.js';/g, ".ts';");
  await writeFile(join(angularDir, 'index.ts'), ts);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) await walk(fullPath);
    else if (entry.name.endsWith('.jsx') && !entry.name.includes('.test.')) await portComponent(fullPath);
    else if (entry.name === 'index.js') await portIndex(fullPath);
  }
}

await mkdir(angularRoot, { recursive: true });
await walk(reactRoot);
console.log('Ported components to Angular');
