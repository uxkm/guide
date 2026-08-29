/**
 * Port Vue SFC components from apps/vue to Svelte 5 SFC in apps/svelte.
 * Run: node scripts/vue-to-svelte.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const VUE_SRC = path.join(ROOT, 'apps/vue/src');
const SVELTE_SRC = path.join(ROOT, 'apps/svelte/src');

const VUE_IMPORTS = new Set([
  'computed',
  'ref',
  'reactive',
  'watch',
  'watchEffect',
  'onMounted',
  'onUnmounted',
  'onBeforeUnmount',
  'provide',
  'inject',
  'useAttrs',
  'useSlots',
  'useId',
  'nextTick',
  'toRef',
  'toRefs',
]);

function parseSfc(content) {
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/);
  const commentMatch = content.match(/^(\s*<!--[\s\S]*?-->\s*)/);
  return {
    comment: commentMatch?.[1] ?? '',
    script: scriptMatch?.[1]?.trim() ?? '',
    template: templateMatch?.[1]?.trim() ?? '',
  };
}

function parseDefineProps(script) {
  const match = script.match(/defineProps\s*\(\s*\{([\s\S]*?)\}\s*\)/);
  if (!match) {
    const arrMatch = script.match(/defineProps\s*\(\s*\[([\s\S]*?)\]\s*\)/);
    if (!arrMatch) return { props: [], hasProps: false, raw: '' };
    const names = arrMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/['"]/g, ''))
      .filter(Boolean);
    return {
      props: names.map((name) => ({ name, default: undefined, required: false })),
      hasProps: true,
      raw: arrMatch[0],
    };
  }

  const body = match[1];
  const props = [];
  const propRegex = /(\w+)\s*:\s*\{([^}]*)\}/g;
  let m;
  while ((m = propRegex.exec(body)) !== null) {
    const name = m[1];
    const def = m[2];
    const required = /required\s*:\s*true/.test(def);
    let defaultVal = undefined;
    const defaultMatch = def.match(/default\s*:\s*([^,}]+)/);
    if (defaultMatch) defaultVal = defaultMatch[1].trim();
    props.push({ name, default: defaultVal, required });
  }

  // Boolean shorthand props
  const boolRegex = /^\s*(\w+)\s*,?\s*$/gm;
  const remaining = body.replace(propRegex, '');
  let bm;
  while ((bm = boolRegex.exec(remaining)) !== null) {
    const name = bm[1];
    if (!['type', 'default', 'validator', 'required'].includes(name) && !props.some((p) => p.name === name)) {
      props.push({ name, default: undefined, required: false });
    }
  }

  return { props, hasProps: true, raw: match[0] };
}

function parseDefineEmits(script) {
  const match = script.match(/defineEmits\s*\(\s*\[([\s\S]*?)\]\s*\)/);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((s) => s.trim().replace(/['"]/g, ''))
    .filter(Boolean);
}

function emitToCallback(name) {
  if (name.startsWith('update:')) {
    const prop = name.slice(7);
    return `on${prop.charAt(0).toUpperCase()}${prop.slice(1)}`;
  }
  return `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function buildPropsDestructuring(props, emits) {
  const lines = [];
  const emitCallbacks = emits.map((e) => {
    const cb = emitToCallback(e);
    return { emit: e, cb };
  });

  for (const prop of props) {
    let line = prop.name;
    if (prop.default !== undefined) {
      line += ` = ${prop.default}`;
    }
    lines.push(line);
  }

  for (const { cb } of emitCallbacks) {
    if (!lines.some((l) => l.startsWith(cb))) lines.push(cb);
  }

  // Common snippet props for slots
  const snippetNames = ['children', 'iconBefore', 'iconAfter', 'prefix', 'suffix', 'panel', 'extra', 'icon', 'badge'];
  for (const sn of snippetNames) {
    if (!lines.some((l) => l.startsWith(sn))) {
      // only add if used in template - skip for now, add manually if needed
    }
  }

  if (lines.length === 0) return 'let props = $props();';
  return `let {\n  ${lines.join(',\n  ')}\n} = $props();`;
}

function transformScript(script, emits) {
  let s = script;

  // Remove defineOptions
  s = s.replace(/defineOptions\s*\(\s*\{[\s\S]*?\}\s*\)\s*;?/g, '');

  const inheritAttrsFalse = /inheritAttrs\s*:\s*false/.test(script);
  const hasUseAttrs = /\buseAttrs\b/.test(script);
  const hasUseSlots = /\buseSlots\b/.test(script);

  const propsInfo = parseDefineProps(s);
  const propsDestruct = buildPropsDestructuring(propsInfo.props, emits);

  // Replace defineProps
  if (propsInfo.hasProps) {
    s = s.replace(/const\s+props\s*=\s*defineProps[\s\S]*?\)\s*;?/, propsDestruct);
    s = s.replace(/defineProps[\s\S]*?\)\s*;?/, propsDestruct);
  }

  // Remove defineEmits
  s = s.replace(/const\s+emit\s*=\s*defineEmits[\s\S]*?\)\s*;?/g, '');
  s = s.replace(/defineEmits[\s\S]*?\)\s*;?/g, '');

  // Emit replacements
  for (const emit of emits) {
    const cb = emitToCallback(emit);
    s = s.replace(new RegExp(`emit\\(['"]${emit}['"],\\s*`, 'g'), `${cb}?.(`);
    s = s.replace(new RegExp(`emit\\(['"]${emit}['"]\\)`, 'g'), `${cb}?.()`);
  }

  // Vue imports -> Svelte
  const vueImportMatch = s.match(/import\s*\{([^}]+)\}\s*from\s*['"]vue['"]\s*;?/);
  const svelteImports = new Set();
  if (vueImportMatch) {
    const names = vueImportMatch[1].split(',').map((n) => n.trim().split(/\s+as\s+/).pop().trim());
    for (const name of names) {
      if (name === 'computed') continue;
      if (name === 'ref' || name === 'reactive') continue;
      if (name === 'watch' || name === 'watchEffect') svelteImports.add('$effect');
      if (name === 'onMounted') svelteImports.add('onMount');
      if (name === 'onUnmounted' || name === 'onBeforeUnmount') svelteImports.add('onDestroy');
      if (name === 'provide') svelteImports.add('setContext');
      if (name === 'inject') svelteImports.add('getContext');
      if (name === 'nextTick') svelteImports.add('tick');
    }
    s = s.replace(/import\s*\{[^}]*\}\s*from\s*['"]vue['"]\s*;?\n?/g, '');
  }

  // Component imports .vue -> .svelte
  s = s.replace(/from\s+(['"])([^'"]+)\.vue\1/g, 'from $1$2.svelte$1');

  // computed -> $derived
  s = s.replace(/const\s+(\w+)\s*=\s*computed\s*\(\s*\(\)\s*=>\s*/g, 'let $1 = $derived(');
  s = s.replace(/const\s+(\w+)\s*=\s*computed\s*\(\s*/g, 'let $1 = $derived(');

  // ref -> $state
  s = s.replace(/const\s+(\w+)\s*=\s*ref\s*\(/g, 'let $1 = $state(');

  // reactive -> $state
  s = s.replace(/const\s+(\w+)\s*=\s*reactive\s*\(/g, 'let $1 = $state(');

  // watchEffect -> $effect
  s = s.replace(/\bwatchEffect\s*\(/g, '$effect(');

  // watch -> $effect (simplified)
  s = s.replace(/\bwatch\s*\(/g, '$effect(');

  // lifecycle
  s = s.replace(/\bonMounted\s*\(/g, 'onMount(');
  s = s.replace(/\bonUnmounted\s*\(/g, 'onDestroy(');
  s = s.replace(/\bonBeforeUnmount\s*\(/g, 'onDestroy(');

  // provide/inject
  s = s.replace(/\bprovide\s*\(/g, 'setContext(');
  s = s.replace(/\binject\s*\(/g, 'getContext(');

  // nextTick
  s = s.replace(/\bnextTick\s*\(/g, 'tick(');

  // useId
  s = s.replace(/useId\s*\(\s*\)\.replaceAll\(['"]:['"],\s*['"]['"]\)/g, "crypto.randomUUID().replaceAll('-', '')");
  s = s.replace(/\buseId\s*\(\s*\)/g, "crypto.randomUUID()");

  // toRef
  s = s.replace(/const\s+(\w+)\s*=\s*toRef\s*\(\s*props\s*,\s*['"](\w+)['"]\s*\)/g, 'let $1 = $derived($2)');

  // props.xxx -> direct name (after destructuring)
  if (propsInfo.hasProps) {
    for (const prop of propsInfo.props) {
      s = s.replace(new RegExp(`props\\.${prop.name}`, 'g'), prop.name);
    }
  }

  // .value on derived state vars - remove .value for ref-converted vars
  s = s.replace(/(\w+)\.value/g, '$1');

  // useAttrs / useSlots
  if (hasUseAttrs) {
    s = s.replace(/const\s+attrs\s*=\s*useAttrs\s*\(\s*\)\s*;?/g, '');
    if (inheritAttrsFalse && propsInfo.hasProps) {
      // add className and rest to destructuring - handled separately
    }
  }
  if (hasUseSlots) {
    s = s.replace(/const\s+slots\s*=\s*useSlots\s*\(\s*\)\s*;?/g, '');
  }

  // SlotRenderer helper removal (Tabs)
  s = s.replace(/const SlotRenderer[\s\S]*?SlotRenderer\.props[\s\S]*?;/g, '');

  if (svelteImports.size > 0) {
    const importLine = `import { ${[...svelteImports].join(', ')} } from 'svelte';`;
    s = importLine + '\n' + s;
  }

  return s.trim();
}

function transformTemplate(template) {
  let t = template;

  // slot names mapping
  const slotMap = {
    'icon-before': 'iconBefore',
    'icon-after': 'iconAfter',
    default: 'children',
  };

  // Remove HTML comments in template (keep structure)
  // Convert <template #name> and <template v-if v-slot
  t = t.replace(/<template\s+#([\w-]+)\s*>([\s\S]*?)<\/template>/g, (_, name, content) => {
    const sn = slotMap[name] ?? name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return `{@render ${sn}?.()}`;
  });

  t = t.replace(/<template\s+v-if="([^"]+)"\s+#([\w-]+)\s*>([\s\S]*?)<\/template>/g, (_, cond, name) => {
    const sn = slotMap[name] ?? name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return `{#if ${cond}}{@render ${sn}?.()}{/if}`;
  });

  // component :is -> svelte:element
  t = t.replace(/<component\b/g, '<svelte:element');
  t = t.replace(/:is="(\w+)"/g, 'this={$1}');

  // v-bind shorthand
  t = t.replace(/v-bind="(\w+)"/g, '{...$1}');

  // Event handlers
  t = t.replace(/@([a-z]+)(?:\.([\w]+))?\s*="/g, (_, evt, mod) => {
    const svelteEvt = 'on' + evt;
    return mod ? `${svelteEvt} ` : `${svelteEvt}=`;
  });
  t = t.replace(/@click="/g, 'onclick=');
  t = t.replace(/@keydown="/g, 'onkeydown=');
  t = t.replace(/@input="/g, 'oninput=');
  t = t.replace(/@paste="/g, 'onpaste=');
  t = t.replace(/@scroll\.passive="/g, 'onscroll=');
  t = t.replace(/@scroll="/g, 'onscroll=');

  // Bindings :attr -> attr=
  t = t.replace(/:([\w-]+)="/g, '$1=');

  // ref
  t = t.replace(/ref="(\w+)"/g, 'bind:this={$1}');

  // v-if / v-else-if / v-else
  t = t.replace(/\s+v-if="([^"]+)"/g, ' data-v-if="$1"');
  t = t.replace(/\s+v-else-if="([^"]+)"/g, ' data-v-else-if="$1"');
  t = t.replace(/\s+v-else\b/g, ' data-v-else');

  // v-for
  t = t.replace(
    /v-for="(?:\((\w+)(?:,\s*(\w+))?\)|(\w+))\s+in\s+(\w+)"(?:\s+:key="([^"]+)")?/g,
    (_, item1, index1, item2, list, key) => {
      const item = item1 || item2;
      const index = index1 ? `, ${index1}` : '';
      const keyExpr = key ? ` (${key})` : '';
      return `data-each="${list} as ${item}${index}${keyExpr}"`;
    },
  );

  // Slots
  t = t.replace(/<slot\s+name="([\w-]+)"\s*\/>/g, (_, name) => {
    const sn = slotMap[name] ?? name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return `{@render ${sn}?.()}`;
  });
  t = t.replace(/<slot\s+name="([\w-]+)"\s*>([\s\S]*?)<\/slot>/g, (_, name, fallback) => {
    const sn = slotMap[name] ?? name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const fb = fallback.trim();
    if (fb) return `{@render ${sn}?.() ?? ${fb}}`;
    return `{@render ${sn}?.()}`;
  });
  t = t.replace(/<slot\s*>([\s\S]*?)<\/slot>/g, (_, fallback) => {
    const fb = fallback.trim();
    if (fb && fb !== '{{ label }}') return `{@render children?.() ?? ${fb}}`;
    return `{@render children?.()}`;
  });
  t = t.replace(/<slot\s*\/>/g, '{@render children?.()}');
  t = t.replace(/<slot\s+v-else\s*\/>/g, '{@render children?.()}');

  // $slots
  t = t.replace(/\$slots\.(\w+)/g, (_, name) => name);

  // hidden attr
  t = t.replace(/:hidden="([^"]+)"/g, 'hidden={$1}');

  // style binding
  t = t.replace(/:style="(\w+)"/g, 'style={$1}');

  // aria and data attrs already handled by : removal

  // Convert data-v-if blocks to svelte if - simplified line-based
  t = convertConditionalBlocks(t);

  // Convert data-each to {#each}
  t = convertEachBlocks(t);

  return t;
}

function convertConditionalBlocks(html) {
  const lines = html.split('\n');
  const out = [];
  const stack = [];

  for (let line of lines) {
    const ifMatch = line.match(/data-v-if="([^"]+)"/);
    const elseIfMatch = line.match(/data-v-else-if="([^"]+)"/);
    const elseMatch = line.match(/data-v-else\b/);

    if (ifMatch) {
      out.push(line.replace(/data-v-if="[^"]+"/, '').replace(/<(\w+)/, `{#if ${ifMatch[1]}}\n<$1`));
      stack.push('if');
      continue;
    }
    if (elseIfMatch) {
      out.push(line.replace(/data-v-else-if="[^"]+"/, '').replace(/<(\w+)/, `{:else if ${elseIfMatch[1]}}\n<$1`));
      continue;
    }
    if (elseMatch) {
      out.push(line.replace(/data-v-else\b/, '').replace(/<(\w+)/, `{:else}\n<$1`));
      continue;
    }

    // Close tags for if blocks - heuristic: if line is only closing tag and we have stack
    if (line.match(/^\s*<\//) && stack.length > 0) {
      stack.pop();
      out.push(line);
      out.push('{/if}');
      continue;
    }

    out.push(line);
  }

  return out.join('\n');
}

function convertEachBlocks(html) {
  return html.replace(/data-each="([^"]+)"/g, (_, expr) => `{#each ${expr}}`);
}

function convertVueToSvelte(vueContent, filePath) {
  const { comment, script, template } = parseSfc(vueContent);
  const emits = parseDefineEmits(script);
  const transformedScript = transformScript(script, emits);
  const transformedTemplate = transformTemplate(template);

  return `${comment}<script>
${transformedScript}
</script>

${transformedTemplate}
`;
}

function copyAndConvertIndexJs(srcPath, destPath) {
  let content = fs.readFileSync(srcPath, 'utf8');
  content = content.replace(/\.vue/g, '.svelte');
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}

function walkAndConvert(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      walkAndConvert(srcPath, destPath);
    } else if (entry.name.endsWith('.vue')) {
      const vueContent = fs.readFileSync(srcPath, 'utf8');
      const svelteContent = convertVueToSvelte(vueContent, srcPath);
      const sveltePath = destPath.replace(/\.vue$/, '.svelte');
      fs.mkdirSync(path.dirname(sveltePath), { recursive: true });
      fs.writeFileSync(sveltePath, svelteContent);
      console.log('Converted:', path.relative(ROOT, sveltePath));
    } else if (entry.name.endsWith('.js') && entry.name !== 'main.js') {
      copyAndConvertIndexJs(srcPath, destPath);
      console.log('Copied:', path.relative(ROOT, destPath));
    } else if (entry.name.endsWith('.spec.js')) {
      // skip spec files
    }
  }
}

// Convert components only
walkAndConvert(path.join(VUE_SRC, 'components'), path.join(SVELTE_SRC, 'components'));

console.log('Done.');
