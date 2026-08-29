/**
 * Port Vue SFC components to Svelte 5 runes. Run: node scripts/vue-to-svelte-v2.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const VUE_ROOT = path.join(ROOT, 'apps/vue/src/components');
const OUT_ROOT = path.join(ROOT, 'apps/svelte/src/components');

function parseSfc(content) {
  const comment = content.match(/^\s*(<!--[\s\S]*?-->\s*)/)?.[1] ?? '';
  const script = content.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1]?.trim() ?? '';
  const template = content.match(/<template>([\s\S]*?)<\/template>/)?.[1]?.trim() ?? '';
  return { comment, script, template };
}

function parsePropsObject(body) {
  const props = [];
  const regex = /(\w+)\s*:\s*(\{[^}]*\}|Boolean|String|Number|\[[^\]]+\])/g;
  let m;
  while ((m = regex.exec(body)) !== null) {
    const name = m[1];
    const def = m[2];
    let defaultVal = undefined;
    const dm = def.match(/default\s*:\s*([^,}]+)/);
    if (dm) defaultVal = dm[1].trim();
    else if (def === 'Boolean') defaultVal = 'false';
    props.push({ name, default: defaultVal });
  }
  return props;
}

function parseDefineProps(script) {
  const m = script.match(/defineProps\s*\(\s*\{([\s\S]*?)\}\s*\)/);
  if (!m) return { props: [], raw: '' };
  return { props: parsePropsObject(m[1]), raw: m[0] };
}

function parseEmits(script) {
  const m = script.match(/defineEmits\s*\(\s*\[([\s\S]*?)\]\s*\)/);
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim().replace(/['"]/g, '')).filter(Boolean);
}

function emitCallback(name) {
  if (name.startsWith('update:')) {
    const p = name.slice(7);
    return `on${p.charAt(0).toUpperCase()}${p.slice(1)}`;
  }
  return `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function buildPropsDecl(props, emits, inheritRest = false) {
  const lines = [];
  for (const p of props) {
    if (p.default !== undefined) lines.push(`${p.name} = ${p.default}`);
    else lines.push(p.name);
  }
  for (const e of emits) {
    const cb = emitCallback(e);
    if (!lines.some((l) => l.startsWith(cb))) lines.push(cb);
    // Vue click -> svelte onclick
    if (e === 'click' && !lines.some((l) => l.startsWith('onclick'))) lines.push('onclick');
    if (e === 'keydown' && !lines.some((l) => l.startsWith('onkeydown'))) lines.push('onkeydown');
  }
  const snippets = ['children', 'iconBefore', 'iconAfter', 'prefix', 'suffix', 'panel', 'extra', 'icon', 'badge'];
  for (const s of snippets) {
    if (!lines.some((l) => l.startsWith(s))) lines.push(s);
  }
  if (inheritRest) {
    lines.push('class: className');
    lines.push('...rest');
  }
  if (lines.length === 0) return 'let props = $props();';
  return `let {\n  ${lines.join(',\n  ')}\n} = $props();`;
}

function transformScript(script, emits, inheritAttrs) {
  let s = script;
  s = s.replace(/defineOptions\s*\(\s*\{[\s\S]*?\}\s*\)\s*;?/g, '');
  const propsInfo = parseDefineProps(s);
  const propsDecl = buildPropsDecl(propsInfo.props, emits, inheritAttrs);

  s = s.replace(/const\s+props\s*=\s*defineProps[\s\S]*?\)\s*;?/, propsDecl);
  s = s.replace(/defineProps[\s\S]*?\)\s*;?/, propsDecl);
  s = s.replace(/const\s+emit\s*=\s*defineEmits[\s\S]*?\)\s*;?/g, '');
  s = s.replace(/defineEmits[\s\S]*?\)\s*;?/g, '');

  for (const e of emits) {
    const cb = emitCallback(e);
    const svelteCb = e === 'click' ? 'onclick' : e === 'keydown' ? 'onkeydown' : cb;
    s = s.replaceAll(`emit('${e}', `, `${svelteCb}?.(`);
    s = s.replaceAll(`emit("${e}", `, `${svelteCb}?.(`);
    s = s.replaceAll(`emit('${e}')`, `${svelteCb}?.()`);
    s = s.replaceAll(`emit("${e}")`, `${svelteCb}?.()`);
  }

  const vueImport = s.match(/import\s*\{([^}]+)\}\s*from\s*['"]vue['"]/);
  const svelteImports = new Set();
  if (vueImport) {
    for (const part of vueImport[1].split(',')) {
      const name = part.trim().split(/\s+as\s+/).pop().trim();
      if (['onMounted', 'onBeforeUnmount', 'onUnmounted'].includes(name)) svelteImports.add('onMount');
      if (name === 'onBeforeUnmount' || name === 'onUnmounted') svelteImports.add('onDestroy');
      if (name === 'provide') svelteImports.add('setContext');
      if (name === 'inject') svelteImports.add('getContext');
      if (name === 'nextTick') svelteImports.add('tick');
    }
    s = s.replace(/import\s*\{[^}]*\}\s*from\s*['"]vue['"]\s*;?\n?/g, '');
  }

  s = s.replace(/from\s+(['"])([^'"]+)\.vue\1/g, 'from $1$2.svelte$1');

  s = s.replace(/const\s+(\w+)\s*=\s*computed\s*\(\s*\(\)\s*=>\s*/g, 'let $1 = $derived(');
  s = s.replace(/const\s+(\w+)\s*=\s*computed\s*\(\s*/g, 'let $1 = $derived(');
  s = s.replace(/const\s+(\w+)\s*=\s*ref\s*\(/g, 'let $1 = $state(');
  s = s.replace(/const\s+(\w+)\s*=\s*reactive\s*\(/g, 'let $1 = $state(');
  s = s.replace(/\bwatchEffect\s*\(/g, '$effect(');
  s = s.replace(/\bwatch\s*\(/g, '$effect(');
  s = s.replace(/\bonMounted\s*\(/g, 'onMount(');
  s = s.replace(/\bonUnmounted\s*\(/g, 'onDestroy(');
  s = s.replace(/\bonBeforeUnmount\s*\(/g, 'onDestroy(');
  s = s.replace(/\bprovide\s*\(/g, 'setContext(');
  s = s.replace(/\binject\s*\(/g, 'getContext(');
  s = s.replace(/\bnextTick\s*\(/g, 'tick(');
  s = s.replace(/useId\s*\(\s*\)\.replaceAll\(['"]:['"],\s*['"]['"]\)/g, "crypto.randomUUID().replaceAll('-', '')");
  s = s.replace(/\buseId\s*\(\s*\)/g, "crypto.randomUUID()");
  s = s.replace(/const\s+(\w+)\s*=\s*toRef\s*\(\s*props\s*,\s*['"](\w+)['"]\s*\)/g, 'let $1 = $derived($2)');
  s = s.replace(/const\s+attrs\s*=\s*useAttrs\s*\(\s*\)\s*;?/g, '');
  s = s.replace(/const\s+slots\s*=\s*useSlots\s*\(\s*\)\s*;?/g, '');

  if (inheritAttrs) {
    s = s.replace(/\battrs\.class\b/g, 'className');
    s = s.replace(/\battrs\b/g, 'rest');
    s = s.replace(/const\s*\{\s*class:\s*_class,\s*\.\.\.rest\s*\}\s*=\s*attrs/g, '');
  }

  for (const p of propsInfo.props) {
    s = s.replace(new RegExp(`props\\.${p.name}`, 'g'), p.name);
  }

  s = s.replace(/(\w+)\.value/g, '$1');
  s = s.replace(/const SlotRenderer[\s\S]*?SlotRenderer\.props[\s\S]*?;/g, '');
  s = s.replace(/slots\.(\w+)/g, '$1');

  if (svelteImports.size) {
    s = `import { ${[...svelteImports].join(', ')} } from 'svelte';\n` + s;
  }

  return s.trim();
}

function transformTemplate(tpl) {
  let t = tpl;

  t = t.replace(/<component\s+:is="(\w+)"/g, '<svelte:element this={$1}');
  t = t.replace(/<\/component>/g, '</svelte:element>');

  t = t.replace(/v-bind="(\w+)"/g, '{...$1}');

  t = t.replace(/@click="([^"]+)"/g, 'onclick={$1}');
  t = t.replace(/@keydown="([^"]+)"/g, 'onkeydown={$1}');
  t = t.replace(/@input="([^"]+)"/g, 'oninput={$1}');
  t = t.replace(/@paste="([^"]+)"/g, 'onpaste={$1}');
  t = t.replace(/@scroll\.passive="([^"]+)"/g, 'onscroll={$1}');
  t = t.replace(/@scroll="([^"]+)"/g, 'onscroll={$1}');

  t = t.replace(/:([\w-]+)="([^"]*)"/g, '$1={$2}');
  t = t.replace(/:([\w-]+)='([^']*)'/g, "$1={$2}");

  t = t.replace(/ref="(\w+)"/g, 'bind:this={$1}');

  // v-for
  t = t.replace(
    /v-for="(?:\((\w+)(?:,\s*(\w+))?\)|(\w+))\s+in\s+(\w+)"(?:\s+:key="([^"]+)")?/g,
    (_, a, b, c, list, key) => {
      const item = a || c;
      const idx = b ? `, ${b}` : '';
      const k = key ? ` (${key})` : '';
      return `{#each ${list} as ${item}${idx}${k}}`;
    },
  );

  // v-if on same element - convert to block
  t = t.replace(/<(\w+)([^>]*)\s+v-if="([^"]+)"([^>]*)>/g, '{#if $3}<$1$2$4>');
  t = t.replace(/<(\w+)([^>]*)\s+v-else-if="([^"]+)"([^>]*)>/g, '{:else if $3}<$1$2$4>');
  t = t.replace(/<(\w+)([^>]*)\s+v-else([^>]*)>/g, '{:else}<$1$2$3>');

  // Close v-if - add {/if} before closing parent - heuristic for self-contained blocks
  // Handle v-if on slot
  t = t.replace(/<slot\s+v-if="([^"]+)"([^>]*)>/g, '{#if $1}<slot$2>');
  t = t.replace(/<slot\s+v-else([^>]*)>/g, '{:else}<slot$1>');

  // Slots
  t = t.replace(/<template\s+#icon-before\s*>([\s\S]*?)<\/template>/g, '{@render iconBefore?.()}');
  t = t.replace(/<template\s+#icon-after\s*>([\s\S]*?)<\/template>/g, '{@render iconAfter?.()}');
  t = t.replace(/<template\s+v-if="([^"]+)"\s+#([\w-]+)\s*>([\s\S]*?)<\/template>/g, (_, cond, name) => {
    const sn = name === 'icon-before' ? 'iconBefore' : name === 'icon-after' ? 'iconAfter' : name;
    return `{#if ${cond}}{@render ${sn}?.()}{/if}`;
  });
  t = t.replace(/<template\s+#([\w-]+)\s*>([\s\S]*?)<\/template>/g, (_, name) => {
    const sn = name === 'icon-before' ? 'iconBefore' : name === 'icon-after' ? 'iconAfter' : name;
    return `{@render ${sn}?.()}`;
  });

  t = t.replace(/<slot\s+name="icon-before"\s*\/>/g, '{@render iconBefore?.()}');
  t = t.replace(/<slot\s+name="icon-after"\s*\/>/g, '{@render iconAfter?.()}');
  t = t.replace(/<slot\s+name="prefix"\s*\/>/g, '{@render prefix?.()}');
  t = t.replace(/<slot\s+name="suffix"\s*\/>/g, '{@render suffix?.()}');
  t = t.replace(/<slot\s+name="panel"([^>]*)>([\s\S]*?)<\/slot>/g, '{@render panel?.()}');
  t = t.replace(/<slot\s+name="extra"\s*\/>/g, '{@render extra?.()}');
  t = t.replace(/<slot\s+name="icon"\s*\/>/g, '{@render icon?.()}');
  t = t.replace(/<slot\s+name="badge"\s*\/>/g, '{@render badge?.()}');

  t = t.replace(/<slot\s*>(\s*\{\{\s*label\s*\}\}\s*)<\/slot>/g, '{@render children?.() ?? label}');
  t = t.replace(/<slot\s*>(\s*\{\{\s*(\w+)\s*\}\}\s*)<\/slot>/g, '{@render children?.() ?? $2}');
  t = t.replace(/<slot\s*\/>/g, '{@render children?.()}');
  t = t.replace(/<slot\s*>([\s\S]*?)<\/slot>/g, '{@render children?.()}');
  t = t.replace(/<slot\s+v-else\s*\/>/g, '{@render children?.()}');

  t = t.replace(/\$slots\.prefix/g, 'prefix');
  t = t.replace(/\$slots\.suffix/g, 'suffix');
  t = t.replace(/\$slots\.default/g, 'children');

  // SlotRenderer
  t = t.replace(/<SlotRenderer\s+:render="(\w+)"\s*\/>/g, '{@render $1?.()}');

  return t;
}

function convertVueFile(content) {
  const { comment, script, template } = parseSfc(content);
  const inheritAttrs = /inheritAttrs\s*:\s*false/.test(script);
  const emits = parseEmits(script);
  const transformedScript = transformScript(script, emits, inheritAttrs);
  const transformedTemplate = transformTemplate(template);
  return `${comment}<script>\n${transformedScript}\n</script>\n\n${transformedTemplate}\n`;
}

function walk(src, dest) {
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const sp = path.join(src, entry.name);
    const dp = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      walk(sp, dp);
    } else if (entry.name.endsWith('.vue')) {
      const out = convertVueFile(fs.readFileSync(sp, 'utf8'));
      const sveltePath = dp.replace(/\.vue$/, '.svelte');
      fs.mkdirSync(path.dirname(sveltePath), { recursive: true });
      fs.writeFileSync(sveltePath, out);
      console.log('OK', path.relative(ROOT, sveltePath));
    } else if (entry.name === 'index.js') {
      let c = fs.readFileSync(sp, 'utf8').replace(/\.vue/g, '.svelte');
      fs.mkdirSync(path.dirname(dp), { recursive: true });
      fs.writeFileSync(dp, c);
    }
  }
}

walk(VUE_ROOT, OUT_ROOT);
console.log('Done.');
