/**
 * Generates Angular components from Vue SFCs by preserving Vue script logic.
 */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const vueRoot = join(root, 'apps/vue/src/components');
const reactRoot = join(root, 'apps/react/src/components');
const angularRoot = join(root, 'apps/angular/src/components');
const SKIP = new Set([
  'basic/Button/Button.vue',
  'feedback/Alert/Alert.vue',
  'layout/Divider/Divider.vue',
  'layout/Space/Space.vue',
  'layout/Container/Container.vue',
]);

function toKebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function componentFileName(name) {
  return `${toKebab(name)}.component`;
}

function parseVueSfc(source) {
  return {
    script: source.match(/<script setup>([\s\S]*?)<\/script>/)?.[1]?.trim() ?? '',
    template: source.match(/<template>([\s\S]*?)<\/template>/)?.[1]?.trim() ?? '',
    comment: source.match(/<!--([\s\S]*?)-->/)?.[1]?.trim() ?? '',
  };
}

function parseProps(script) {
  const match = script.match(/defineProps\(\{([\s\S]*?)\}\s*\)/);
  if (!match) return [];
  const props = [];
  for (const line of match[1].split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//')) continue;
    const boolType = trimmed.match(/^(\w+):\s*Boolean\s*,?\s*(?:\/\/(.*))?$/);
    if (boolType) {
      props.push({ name: boolType[1], type: 'boolean', default: 'false', comment: boolType[2]?.trim() });
      continue;
    }
    const boolShorthand = trimmed.match(/^(\w+),\s*(?:\/\/(.*))?$/);
    if (boolShorthand && !trimmed.includes(':')) {
      props.push({ name: boolShorthand[1], type: 'boolean', default: 'false', comment: boolShorthand[2]?.trim() });
      continue;
    }
    const stringType = trimmed.match(/^(\w+):\s*String\s*,?\s*(?:\/\/(.*))?$/);
    if (stringType) {
      props.push({ name: stringType[1], type: 'string', default: undefined, comment: stringType[2]?.trim() });
      continue;
    }
    const propMatch = trimmed.match(/^(\w+):\s*\{([^}]*)\}\s*,?\s*(?:\/\/(.*))?$/);
    if (propMatch) {
      const config = propMatch[2];
      props.push({
        name: propMatch[1],
        type: config.match(/type:\s*([^,}]+)/)?.[1]?.trim() ?? 'unknown',
        default: config.match(/default:\s*([^,}]+)/)?.[1]?.trim(),
        comment: propMatch[3]?.trim(),
      });
    }
  }
  return props;
}

function parseEmits(script) {
  const match = script.match(/defineEmits\(\[([\s\S]*?)\]\)/);
  if (!match) return [];
  return [...match[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function mapPropType(vueType) {
  if (!vueType) return 'unknown';
  if (vueType.includes('String')) return 'string';
  if (vueType.includes('Number')) return 'number';
  if (vueType.includes('Boolean')) return 'boolean';
  if (vueType.includes('Object')) return 'Record<string, unknown>';
  if (vueType.includes('Function')) return 'Function';
  if (vueType.includes('[String, Number]')) return 'string | number';
  if (vueType.includes('[Boolean, String]')) return 'boolean | string';
  if (vueType.includes('[Number, String]')) return 'number | string';
  if (vueType.includes('String, Object, Function')) return 'string | Record<string, unknown> | Function';
  return 'unknown';
}

function mapPropName(name) {
  return name === 'modelValue' ? 'value' : name;
}

function mapEmitName(name) {
  return name === 'update:modelValue' ? 'valueChange' : name;
}

function formatDefault(value, tsType) {
  if (value === undefined) return null;
  if (value === 'undefined') return 'undefined';
  if (tsType === 'string' && /^['"].*['"]$/.test(value)) return value;
  if (tsType === 'boolean' && (value === 'true' || value === 'false')) return value;
  if (tsType === 'number' || /^-?\d+(\.\d+)?$/.test(value)) return value;
  if (['""', "''", '[]', '{}'].includes(value)) return value;
  return value;
}

function buildInputs(props) {
  const lines = ["  readonly hostClass = input<string>('');"];
  for (const prop of props) {
    const name = mapPropName(prop.name);
    const tsType = mapPropType(prop.type);
    const dv = formatDefault(prop.default, tsType);
    const comment = prop.comment ? ` // ${prop.comment}` : '';
    if (dv === null) {
      lines.push(tsType === 'boolean' ? `  readonly ${name} = input<boolean>(false);${comment}` : `  readonly ${name} = input<${tsType}>();${comment}`);
    } else {
      lines.push(`  readonly ${name} = input<${tsType}>(${dv});${comment}`);
    }
  }
  return lines.join('\n');
}

function buildOutputs(emits) {
  return emits.map((e) => `  readonly ${mapEmitName(e)} = output<Event>();`).join('\n');
}

function extractBlock(source, start) {
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  return source.slice(start);
}

function extractClassMembers(body) {
  const members = [];
  let remaining = body.replace(/^\s*\/\/.*$/gm, '').trim();

  remaining = remaining.replace(/const\s+(\w+)\s*=\s*new\s+Set\(([^)]*)\)\s*;?/g, (_, n, a) => {
    members.push(`private readonly ${n} = new Set(${a});`);
    return '';
  });

  remaining = remaining.replace(/const\s+(\w+)\s*=\s*signal\(([^)]*)\)\s*;?/g, (_, n, init) => {
    members.push(`readonly ${n} = signal(${init});`);
    return '';
  });

  remaining = remaining.replace(/const\s+(\w+)\s*=\s*computed\(\(\)\s*=>\s*([^;{]+)\)\s*;?/g, (_, n, expr) => {
    members.push(`readonly ${n} = computed(() => ${expr.trim()});`);
    return '';
  });

  const compRegex = /const\s+(\w+)\s*=\s*computed\(\(\)\s*=>\s*/g;
  let match;
  while ((match = compRegex.exec(remaining))) {
    const name = match[1];
    const braceStart = remaining.indexOf('{', match.index);
    if (braceStart === -1) continue;
    const block = extractBlock(remaining, braceStart);
    const end = braceStart + block.length;
    const tail = remaining.slice(end).match(/^\s*\)\s*;?/);
    const fullEnd = end + (tail?.[0]?.length ?? 0);
    members.push(`readonly ${name} = computed(() => ${block});`);
    remaining = remaining.slice(0, match.index) + remaining.slice(fullEnd);
    compRegex.lastIndex = 0;
  }

  const fnRegex = /function\s+(\w+)\s*\(([^)]*)\)\s*\{/g;
  while ((match = fnRegex.exec(remaining))) {
    const name = match[1];
    const params = match[2] || 'event: Event';
    const blockStart = match.index + match[0].length - 1;
    const block = extractBlock(remaining, blockStart);
    const typedParams = params.includes(':') ? params : `${params || 'event'}: Event`;
    members.push(`${name}(${typedParams}) ${block}`);
    remaining = remaining.slice(0, match.index) + remaining.slice(blockStart + block.length);
    fnRegex.lastIndex = 0;
  }

  return { members, remaining: remaining.trim() };
}

function transformScript(script, props, emits, vueFilePath, imports) {
  let body = script;
  body = body.replace(/defineOptions\(\{[\s\S]*?\}\)\s*;?/g, '');
  body = body.replace(/const\s+props\s*=\s*defineProps\(\{[\s\S]*?\}\s*\)\s*;?/g, '');
  body = body.replace(/defineProps\(\{[\s\S]*?\}\s*\)\s*;?/g, '');
  body = body.replace(/const\s+emit\s*=\s*defineEmits\(\[[\s\S]*?\]\)\s*;?/g, '');
  body = body.replace(/defineEmits\(\[[\s\S]*?\]\)\s*;?/g, '');
  body = body.replace(/import\s+\{[^}]+\}\s+from\s+['"]vue['"]\s*;?/g, '');

  body = body.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]\s*;?/g, (_, name, importPath) => {
    const resolved = join(dirname(vueFilePath), importPath);
    const baseName = basename(resolved, '.vue');
    const angularCompDir = join(angularRoot, relative(vueRoot, dirname(resolved)));
    const currentDir = join(angularRoot, relative(vueRoot, dirname(vueFilePath)));
    const rel = relative(currentDir, join(angularCompDir, componentFileName(baseName))).replace(/\\/g, '/');
    imports.set(name, rel.startsWith('.') ? rel : `./${rel}`);
    return '';
  });

  body = body.replace(/import\s+\{([^}]+)\}\s+from\s+['"]@uxkm\/html\/([^'"]+)['"]\s*;?/g, (_, imps, mod) => {
    return `import { ${imps.trim()} } from '@uxkm/html/${mod}';`;
  });

  const usesAttrs = body.includes('useAttrs');
  const usesSlots = body.includes('useSlots') || body.includes('$slots') || body.includes('slots.');
  if (usesAttrs) body = body.replace(/const\s+attrs\s*=\s*useAttrs\(\)\s*;?/g, '');
  if (usesSlots) body = body.replace(/const\s+slots\s*=\s*useSlots\(\)\s*;?/g, '');

  body = body.replace(/\bref\(/g, 'signal(');
  body = body.replace(/\bcomputed\(/g, 'computed(');
  body = body.replace(/\bprops\./g, 'this.p().');
  body = body.replace(/\bemit\(\s*'update:modelValue'\s*,/g, 'this.valueChange.emit(');
  body = body.replace(/\bemit\(\s*'([^']+)'\s*,/g, (_, e) => `this.${mapEmitName(e)}.emit(`);
  body = body.replace(/(\w+)\.value/g, 'this.$1()');
  body = body.replace(/\bthis\.this\./g, 'this.');

  if (usesAttrs) {
    body = body.replace(/\battrs\.class\b/g, 'this.hostClass()');
    body = body.replace(/\battrs\[['"]class['"]\]/g, 'this.hostClass()');
    body = body.replace(/\battrs\.(\w+)/g, 'this.hostAttr("$1")');
    body = body.replace(/\battrs\b/g, 'this.hostAttrs()');
  }
  if (usesSlots) {
    body = body.replace(/\$slots\.(\w+)/g, 'this.hasSlot("$1")');
    body = body.replace(/\bslots\.(\w+)/g, 'this.hasSlot("$1")');
  }

  body = body.replace(/\bwatch\(\s*\(\)\s*=>\s*this\.p\(\)\.(\w+)\s*,\s*\(value\)\s*=>\s*\{/g, 'effect(() => { const value = this.p().$1;');
  body = body.replace(/\}\s*,?\s*\)\s*;(\s*\/\/[^\n]*)?$/gm, '});');
  body = body.replace(/\bonMounted\(\(\)\s*=>\s*\{/g, 'afterNextRender(() => {');
  body = body.replace(/\bonBeforeUnmount\(\(\)\s*=>\s*\{/g, '/* onDestroy */ inject(DestroyRef).onDestroy(() => {');
  body = body.replace(/\bnextTick\(/g, 'afterNextRender(');

  body = body.replace(/^function\s+/gm, '');
  body = body.replace(/^const\s+(\w+)\s*=\s*\(/gm, '$1(');
  body = body.replace(/^const\s+(\w+)\s*=\s*new\s+Set/gm, 'private readonly $1 = new Set');
  body = body.replace(/^const\s+(\w+)\s*=\s*computed/gm, 'readonly $1 = computed');
  body = body.replace(/^const\s+(\w+)\s*=\s*signal/gm, 'readonly $1 = signal');

  return { body: body.trim(), usesAttrs, usesSlots };
}

function convertTemplate(template, props) {
  let html = template.replace(/<!--[\s\S]*?-->/g, '');

  html = html.replace(/<template\s+v-if="([^"]+)">/g, '@if ($1()) {');
  html = html.replace(/<template\s+v-else-if="([^"]+)">/g, '} @else if ($1()) {');
  html = html.replace(/<template\s+v-else>/g, '} @else {');
  html = html.replace(/<\/template>/g, '}');

  html = html.replace(/<(\w+)([^>]*)\s+v-if="([^"]+)"([^>]*)>/g, '@if ($3()) { <$1$2$4>');

  html = html.replace(/<component\s+:is="([^"]+)"([^>]*)>([\s\S]*?)<\/component>/g, (_, tagExpr, attrs, inner) => {
    const a = convertAttrs(attrs);
    const i = convertTemplate(inner, props);
    const t = tagExpr === 'as' || tagExpr === 'rootTag' || tagExpr === 'wrapperTag' ? `${tagExpr}()` : tagExpr;
    return `@switch (${t}) {
      @case ('a') { <a${a}>${i}</a> }
      @case ('span') { <span${a}>${i}</span> }
      @case ('hr') { <hr${a} /> }
      @case ('button') { <button${a}>${i}</button> }
      @default { <div${a}>${i}</div> }
    }`;
  });

  html = html.replace(/\bv-else-if="([^"]+)"/g, '} @else if ($1()) {');
  html = html.replace(/\bv-else\b/g, '} @else {');

  html = html.replace(/\bv-for="(\w+)\s+in\s+([^"]+)"/g, '@for ($1 of $2(); track $1) {');
  html = html.replace(/<slot\s+name="([^"]+)"\s*\/?>/g, '<ng-content select="[$1]" />');
  html = html.replace(/<slot\s*\/>/g, '<ng-content />');
  html = html.replace(/<slot>([\s\S]*?)<\/slot>/g, '<ng-content>$1</ng-content>');
  html = html.replace(/<slot\s+name="([^"]+)">([\s\S]*?)<\/slot>/g, '<ng-content select="[$1]">$2</ng-content>');
  html = html.replace(/\$slots\.(\w+)/g, 'hasSlot("$1")');
  html = html.replace(/\bv-bind="attrs"/g, '');
  html = html.replace(/\bv-bind="restAttrs"/g, '');
  html = html.replace(/\{\{\s*([^}|]+)\s*\}\}/g, (_, e) => `{{ ${e.trim()}() }}`);

  html = convertAttrsOnTags(html);

  for (const prop of props) {
    const n = mapPropName(prop.name);
    html = html.replace(new RegExp(`\\b${prop.name}\\b(?!\\()`, 'g'), `${n}()`);
  }

  const computedNames = ['classes', 'inactive', 'needsButtonSemantics', 'showClear', 'inputClasses', 'hasAddon', 'readonly', 'numericOnly', 'inputAttrs', 'resolvedSize', 'resolvedColor', 'resolvedOrient', 'resolvedTag', 'rootTag', 'hasContent', 'visible', 'wrapperClass', 'wrapperTag', 'svgClass', 'label', 'restAttrs', 'inputValue', 'showIcon', 'resolvedColor'];
  for (const n of computedNames) {
    html = html.replace(new RegExp(`\\b${n}\\b(?!\\()`, 'g'), `${n}()`);
  }

  html = html.replace(/\[class\]="([^"]+)(\(\))?"/g, '[class]="$1()"');
  html = html.replace(/\(\)\(\)/g, '()');

  return html.trim();
}

function convertAttrs(attrs) {
  return attrs
    .replace(/:class="([^"]+)"/g, '[class]="$1()"')
    .replace(/:([a-zA-Z][\w:-]*)="([^"]+)"/g, (_, attr, expr) => {
      const binding = attr.startsWith('aria-') || attr.startsWith('data-') ? `attr.${attr}` : attr;
      return `[${binding}]="${expr}()"`;
    })
    .replace(/@([a-z][\w-]*)="([^"]+)"/g, (_, evt, handler) => `(${evt})="${handler}($event)"`);
}

function convertAttrsOnTags(html) {
  return html.replace(/<([a-z][\w-]*)([^>]*)>/gi, (full, tag, attrs) => {
    if (!attrs.includes(':') && !attrs.includes('@')) return full;
    return `<${tag}${convertAttrs(attrs)}>`;
  });
}

function buildPropsHelper(props) {
  const entries = props.map((p) => `    ${mapPropName(p.name)}: this.${mapPropName(p.name)}(),`).join('\n');
  return `  private readonly p = () => ({\n${entries}\n  });`;
}

function collectCoreImports(body, usesAttrs, usesSlots) {
  const imports = new Set(['Component', 'input', 'output', 'computed']);
  if (body.includes('signal(')) imports.add('signal');
  if (body.includes('effect(')) imports.add('effect');
  if (body.includes('afterNextRender')) imports.add('afterNextRender');
  if (body.includes('DestroyRef')) imports.add('DestroyRef');
  if (body.includes('inject(')) imports.add('inject');
  if (body.includes('viewChild')) imports.add('viewChild');
  if (usesSlots) imports.add('contentChildren');
  return imports;
}

function buildHelpers(usesAttrs, usesSlots) {
  const parts = [buildPropsHelper([])];
  if (usesAttrs) {
    parts.push(`  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }`);
  }
  if (usesSlots) {
    parts.push(`  private readonly projected = contentChildren('*');
  hasSlot(_name: string): boolean { return this.projected().length > 0; }`);
  }
  return parts.join('\n\n');
}

async function generateFromVue(vueFilePath) {
  if (SKIP.has(relative(vueRoot, vueFilePath))) return;
  const source = await readFile(vueFilePath, 'utf8');
  const sfc = parseVueSfc(source);
  const className = basename(vueFilePath, '.vue');
  const props = parseProps(sfc.script);
  const emits = parseEmits(sfc.script);
  const imports = new Map();
  const { body, usesAttrs, usesSlots } = transformScript(sfc.script, props, emits, vueFilePath, imports);
  const template = convertTemplate(sfc.template, props);
  const coreImports = collectCoreImports(body, usesAttrs, usesSlots);

  const propsHelper = `  private readonly p = () => ({\n${props.map((p) => `    ${mapPropName(p.name)}: this.${mapPropName(p.name)}(),`).join('\n')}\n  });`;
  const helpers = [];
  if (usesAttrs) helpers.push(`  hostAttrs(): Record<string, unknown> { return {}; }\n  hostAttr(_name: string): unknown { return undefined; }`);
  if (usesSlots) helpers.push(`  private readonly projected = contentChildren('*');\n  hasSlot(_name: string): boolean { return this.projected().length > 0; }`);

  const componentImportLines = [...imports.entries()].map(([name, path]) => `import ${name} from '${path}';`);
  const importNames = [...imports.keys()];
  const commentBlock = sfc.comment ? `/**\n * ${sfc.comment.replace(/\n/g, '\n * ')}\n */\n` : '';

  const ts = `${commentBlock}import { ${[...coreImports].sort().join(', ')} } from '@angular/core';
${componentImportLines.join('\n')}

@Component({
  selector: '${className}',
  standalone: true,${importNames.length ? `\n  imports: [${importNames.join(', ')}],` : ''}
  template: \`${template.replace(/`/g, '\\`')}\`,
})
export class ${className} {
${buildInputs(props)}
${buildOutputs(emits) ? `\n${buildOutputs(emits)}` : ''}

${propsHelper}
${helpers.join('\n\n')}

${body.split('\n').map((l) => (l.trim() ? `  ${l}` : '')).join('\n')}
}

export default ${className};
`;

  const angularDir = join(angularRoot, relative(vueRoot, dirname(vueFilePath)));
  await mkdir(angularDir, { recursive: true });
  const fileBase = componentFileName(className);
  await writeFile(join(angularDir, `${fileBase}.ts`), ts);
  await rm(join(angularDir, `${fileBase}.html`), { force: true });
}

async function processReactIndex(indexPath) {
  const content = await readFile(indexPath, 'utf8');
  const angularDir = join(angularRoot, relative(reactRoot, dirname(indexPath)));
  await mkdir(angularDir, { recursive: true });
  const ts = content
    .replace(/from '\.\/([^']+)\.jsx'/g, (_, name) => `from './${componentFileName(name)}'`)
    .replace(/from '\.\/([^']+)'/g, (_, name) => name.includes('.component') ? `from './${name}'` : `from './${componentFileName(name)}'`);
  await writeFile(join(angularDir, 'index.ts'), ts);
}

async function processReactOnly(reactPath) {
  const vuePath = join(vueRoot, relative(reactRoot, reactPath).replace('.jsx', '.vue'));
  try { await readFile(vuePath); return; } catch { /* react only */ }
  const className = basename(reactPath, '.jsx');
  const source = await readFile(reactPath, 'utf8');
  const angularDir = join(angularRoot, relative(reactRoot, dirname(reactPath)));
  if (!source.includes('return null')) return;
  const staticProp = source.match(/(\w+)\.(\w+)\s*=\s*['"]([^'"]+)['"]/);
  await writeFile(join(angularDir, `${componentFileName(className)}.ts`), `import { Component, input } from '@angular/core';
@Component({ selector: '${className}', standalone: true, template: '' })
export class ${className} {
  static readonly ${staticProp?.[2] ?? 'tabsType'} = '${staticProp?.[3] ?? 'menu'}';
  readonly hostClass = input<string>('');
}
export default ${className};
`);
}

async function walkVue(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walkVue(p);
    else if (e.name.endsWith('.vue')) await generateFromVue(p);
  }
}

async function walkReact(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walkReact(p);
    else if (e.name.endsWith('.jsx') && !e.name.includes('.test.')) await processReactOnly(p);
    else if (e.name === 'index.js') await processReactIndex(p);
  }
}

await mkdir(angularRoot, { recursive: true });
await walkVue(vueRoot);
await walkReact(reactRoot);
console.log('Generated Angular components');
