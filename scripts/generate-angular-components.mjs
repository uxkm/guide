/**
 * Generates Angular standalone components from React JSX sources.
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const reactRoot = join(root, 'apps/react/src/components');
const angularRoot = join(root, 'apps/angular/src/components');

const SKIP_FILES = new Set(['index.js']);
const SLOT_PROPS = new Set([
  'children',
  'iconBefore',
  'iconAfter',
  'icon',
  'prefix',
  'suffix',
  'actions',
]);

function toKebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function componentFileName(name) {
  return `${toKebab(name)}.component`;
}

function parseReactComponent(source, fileName) {
  const className = basename(fileName, '.jsx');
  const defaultExport = source.includes(`export default ${className}`);
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
    const destructured = trimmed.match(/^(\w+)(?:\s*:\s*(\w+))?\s*(?:=\s*(.+))?(?:\s*\/\/(.*))?$/);
    if (!destructured) continue;
    const [, name, alias, defaultValue, comment] = destructured;
    if (name.startsWith('on') && name.length > 2 && name[2] === name[2].toUpperCase()) {
      outputs.push({
        name: name[2].toLowerCase() + name.slice(3),
        reactName: name,
        comment: comment?.trim(),
      });
      continue;
    }
    props.push({
      name: alias || name,
      reactName: name,
      defaultValue: defaultValue?.trim(),
      comment: comment?.trim(),
      isSlot: SLOT_PROPS.has(alias || name),
    });
  }

  const bodyStart = source.indexOf(fnMatch[0]) + fnMatch[0].length;
  const body = extractFunctionBody(source, bodyStart);
  return { className, props, outputs, body, defaultExport, source };
}

function extractFunctionBody(source, start) {
  let depth = 1;
  let i = start;
  while (i < source.length && depth > 0) {
    const ch = source[i];
    if (ch === '{') depth += 1;
    if (ch === '}') depth -= 1;
    i += 1;
  }
  return source.slice(start, i - 1).trim();
}

function inferType(defaultValue, name) {
  if (defaultValue === 'true' || defaultValue === 'false') return 'boolean';
  if (defaultValue && /^['"]/.test(defaultValue)) return 'string';
  if (defaultValue && /^-?\d/.test(defaultValue)) return 'number';
  if (name.startsWith('is') || name.startsWith('show') || name.startsWith('has')) return 'boolean';
  return 'unknown';
}

function buildInputs(props) {
  return props
    .filter((p) => !p.isSlot)
    .map((p) => {
      const type = inferType(p.defaultValue, p.name);
      const comment = p.comment ? ` // ${p.comment}` : '';
      if (p.defaultValue === undefined) {
        if (type === 'boolean') return `  readonly ${p.name} = input<boolean>(false);${comment}`;
        return `  readonly ${p.name} = input<${type}>();${comment}`;
      }
      return `  readonly ${p.name} = input<${type}>(${p.defaultValue});${comment}`;
    })
    .join('\n');
}

function buildOutputs(outputs) {
  return outputs
    .map((o) => `  readonly ${o.name} = output<any>();${o.comment ? ` // ${o.comment}` : ''}`)
    .join('\n');
}

function transformBody(body, props, outputs) {
  let result = body;
  result = result.replace(/\buseState\(([^)]*)\)/g, 'signal($1)');
  result = result.replace(/\bsetVisible\(([^)]*)\)/g, 'this.visible.set($1)');
  result = result.replace(/\buseMemo\(\s*\(\)\s*=>\s*/g, 'computed(() => ');
  result = result.replace(/\buseMemo\(\s*\([^)]*\)\s*=>\s*/g, 'computed(() => ');
  result = result.replace(/\buseRef\(([^)]*)\)/g, 'signal($1)');
  result = result.replace(/\.current\b/g, '()');
  result = result.replace(/\buseEffect\(\(\)\s*=>\s*\{([\s\S]*?)\},\s*\[[^\]]*\]\s*\)\s*;?/g, '/* effect: $1 */');
  result = result.replace(/\bonClose\?\.\(/g, 'this.close.emit(');
  result = result.replace(/\bonClick\?\.\(/g, 'this.click.emit(');
  result = result.replace(/\bonChange\?\.\(/g, 'this.change.emit(');
  result = result.replace(/\bonKeyDown\?\.\(/g, 'this.keyDown.emit(');
  result = result.replace(/\bonClear\?\.\(/g, 'this.clear.emit(');

  for (const prop of props.filter((p) => !p.isSlot)) {
    const pattern = new RegExp(`\\b${prop.name}\\b(?!\\()`, 'g');
    result = result.replace(pattern, `${prop.name}()`);
  }

  result = result.replace(/return\s+\(/g, '/* template inlined */ return ""; //');
  result = result.replace(/return null;?/g, 'return;');
  result = result.replace(/className/g, 'class');
  return result;
}

function jsxToTemplate(jsx, className, props) {
  let template = jsx;
  const returnMatch = jsx.match(/return\s*\(([\s\S]*)\);?\s*$/m);
  if (!returnMatch) return '<ng-content />';
  template = returnMatch[1].trim();

  template = template.replace(/className=/g, 'class=');
  template = template.replace(/\{className\}/g, '[class]="classes()"');
  template = template.replace(/\{classes\}/g, '[class]="classes()"');
  template = template.replace(/\{`([^`]+)`\}/g, '[class]="$1"');
  template = template.replace(/onClick=\{handleClick\}/g, '(click)="handleClick($event)"');
  template = template.replace(/onKeyDown=\{handleKeyDown\}/g, '(keydown)="handleKeyDown($event)"');
  template = template.replace(/onClose=\{handleClose\}/g, '(click)="handleClose($event)"');
  template = template.replace(/onChange=\{handleChange\}/g, '(input)="handleChange($event)"');
  template = template.replace(/\{([^}]+)\s*\?\s*'([^']*)'\s*:\s*'([^']*)'\}/g, '[attr.$1]="$2 ? $3 : null"');
  template = template.replace(/\{([^}]+)\s*\|\|\s*undefined\}/g, '[attr.data-bind]="$1"');
  template = template.replace(/\{\.\.\.props\}/g, '');
  template = template.replace(/\{\.\.\.accessibility\}/g, '');
  template = template.replace(/\{iconBefore\}/g, '<ng-content select="[icon-before]" />');
  template = template.replace(/\{iconAfter\}/g, '<ng-content select="[icon-after]" />');
  template = template.replace(/\{icon\}/g, '<ng-content select="[icon]" />');
  template = template.replace(/\{actions\}/g, '<ng-content select="[actions]" />');
  template = template.replace(/\{prefix\}/g, '<ng-content select="[prefix]" />');
  template = template.replace(/\{suffix\}/g, '<ng-content select="[suffix]" />');
  template = template.replace(/\{children\s*\?\?\s*label\}/g, '<ng-content>{{ label() }}</ng-content>');
  template = template.replace(/\{children\s*\?\?\s*description\}/g, '<ng-content>{{ description() }}</ng-content>');
  template = template.replace(/\{children\}/g, '<ng-content />');
  template = template.replace(/\{content\}/g, '<ng-content />');
  template = template.replace(/\{label\}/g, '{{ label() }}');
  template = template.replace(/\{title\}/g, '{{ title() }}');
  template = template.replace(/\{description\}/g, '{{ description() }}');
  template = template.replace(/\{closeLabel\}/g, '[attr.aria-label]="closeLabel()"');
  template = template.replace(/\{role\}/g, '[attr.role]="role()"');
  template = template.replace(/\{type\}/g, '[attr.type]="type()"');
  template = template.replace(/\{href\}/g, '[href]="href()"');
  template = template.replace(/\{target\}/g, '[target]="target()"');
  template = template.replace(/\{rel\}/g, '[rel]="rel()"');
  template = template.replace(/\{disabled\}/g, '[disabled]="disabled()"');
  template = template.replace(/\{value\}/g, '[value]="value()"');
  template = template.replace(/\{placeholder\}/g, '[placeholder]="placeholder()"');

  template = template.replace(/\{([^}]*)\s*&&\s*\(/g, '@if ($1) {');
  template = template.replace(/\)\}/g, '}');
  template = template.replace(/\{([^}]*)\s*\?\s*\(/g, '@if ($1) {');
  template = template.replace(/:\s*\(/g, '} @else {');

  for (const prop of props.filter((p) => !p.isSlot)) {
    template = template.replace(new RegExp(`\\{${prop.name}\\}`, 'g'), `{{ ${prop.name}() }}`);
  }

  template = template.replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
    if (tag[0] === tag[0].toUpperCase() && tag !== 'Root') return match;
    return match;
  });

  return template;
}

function buildComponentFile(parsed, imports) {
  const { className, props, outputs, body, source } = parsed;
  const fileBase = componentFileName(className);
  const transformedBody = transformBody(body, props, outputs);
  const template = jsxToTemplate(body, className, props);

  const angularImports = imports.length ? `\n  imports: [${imports.join(', ')}],` : '';
  const needsComputed = transformedBody.includes('computed(') || template.includes('classes()');
  const needsSignal = transformedBody.includes('signal(');
  const coreImports = ['Component', 'input', 'output'];
  if (needsComputed) coreImports.push('computed');
  if (needsSignal) coreImports.push('signal');

  const methods = transformedBody
    .split('\n')
    .filter((line) => line.trim().startsWith('function ') || line.trim().startsWith('const handle'))
    .map((line) => line.replace(/^function /, '').replace(/^const /, ''))
    .join('\n');

  const classBody = transformedBody
    .replace(/\/\* template inlined \*\/ return ""; \/\/[\s\S]*$/m, '')
    .replace(/const classes = computed\([\s\S]*?\);/g, '')
    .replace(/const \[[^\]]+\] = signal\([^)]*\);?/g, '')
    .replace(/if \(!visible\(\)\) \{\s*return;\s*\}/g, '')
    .trim();

  const classesComputed = extractClassesComputed(body);

  return {
    ts: `import { ${coreImports.join(', ')} } from '@angular/core';

@Component({
  selector: '${className}',
  standalone: true,${angularImports}
  template: \`${template.replace(/`/g, '\\`')}\`,
})
export class ${className} {
${buildInputs(props)}
${outputs.length ? `\n${buildOutputs(outputs)}` : ''}
${classesComputed ? `\n${classesComputed}` : ''}
${formatMethods(body, props, outputs)}
}

export default ${className};
`,
    fileBase,
  };
}

function extractClassesComputed(body) {
  const match = body.match(/const classes = \[([\s\S]*?)\]\s*\.filter\(Boolean\)\s*\.join\(' '\);/);
  if (!match) {
    const computedMatch = body.match(/const classes = computed\(\(\)\s*=>\s*([\s\S]*?)\);/);
    if (!computedMatch) return '';
    return `  readonly classes = computed(() => ${computedMatch[1]});`;
  }
  const arrayBody = match[1]
    .replace(/\b(\w+)\b(?!\()/g, (m, name) => {
      if (['true', 'false', 'null', 'undefined', 'btn', 'filter', 'Boolean'].includes(name)) return m;
      return `${name}()`;
    });
  return `  readonly classes = computed(() => [${arrayBody}].filter(Boolean).join(' '));`;
}

function formatMethods(body, props, outputs) {
  const methods = [];
  const fnRegex = /function\s+(\w+)\(([^)]*)\)\s*\{([\s\S]*?)\n\}/g;
  let match;
  while ((match = fnRegex.exec(body))) {
    let fnBody = match[3];
    for (const prop of props.filter((p) => !p.isSlot)) {
      fnBody = fnBody.replace(new RegExp(`\\b${prop.name}\\b(?!\\()`, 'g'), `${prop.name}()`);
    }
    fnBody = fnBody.replace(/\bonClose\?\.\(/g, 'this.close.emit(');
    fnBody = fnBody.replace(/\bonClick\?\.\(/g, 'this.click.emit(');
    methods.push(`  ${match[1]}(${match[2] || 'event: Event'}) {${fnBody}\n  }`);
  }
  return methods.join('\n\n');
}

async function processReactFile(reactPath) {
  const source = await readFile(reactPath, 'utf8');
  if (reactPath.includes('.test.')) return;
  const parsed = parseReactComponent(source, reactPath);
  if (!parsed) return;

  const angularDir = join(angularRoot, relative(reactRoot, dirname(reactPath)));
  await mkdir(angularDir, { recursive: true });

  const imports = [];
  for (const m of source.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g)) {
    if (m[2].includes('@uxkm/html')) continue;
    const impName = m[1];
    const impPath = m[2].replace(/\.jsx$/, '.component');
    if (impPath.startsWith('.')) {
      imports.push(impName);
    }
  }

  const generated = buildComponentFile(parsed, imports);
  await writeFile(join(angularDir, `${generated.fileBase}.ts`), generated.ts);
}

async function processIndex(reactIndexPath) {
  const content = await readFile(reactIndexPath, 'utf8');
  const angularDir = join(angularRoot, relative(reactRoot, dirname(reactIndexPath)));
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
    else if (entry.name.endsWith('.jsx') && !entry.name.includes('.test.')) await processReactFile(fullPath);
    else if (entry.name === 'index.js') await processIndex(fullPath);
  }
}

await mkdir(angularRoot, { recursive: true });
await walk(reactRoot);
console.log('Generated Angular components from React sources');
