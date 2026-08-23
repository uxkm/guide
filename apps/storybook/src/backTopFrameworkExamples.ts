import type { FrameworkExample } from './FrameworkCode';
type Name = 'basic' | 'visibility' | 'size' | 'custom' | 'window';
type Options = { target?: string; visibilityHeight?: number; size?: string; color?: string; label?: string };
const configs: Record<Name, Options[]> = {
  basic: [{ target: '#scroll-area', visibilityHeight: 80 }], visibility: [{ target: '#scroll-area', visibilityHeight: 200, color: 'primary' }],
  size: [{ target: '#scroll-sm', visibilityHeight: 60, size: 'sm' }, { target: '#scroll-lg', visibilityHeight: 60, size: 'lg', color: 'ghost' }],
  custom: [{ target: '#scroll-area', visibilityHeight: 100, color: 'primary', label: 'TOP' }], window: [{ color: 'primary' }],
};
const icon = '<svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 15 6-6 6 6"></path></svg>';
function html(item: Options, index: number) { const id = item.target?.slice(1) || `page-${index}`; return `${item.target ? `<div id="${id}" class="back_top_demo-scroll"><div class="back_top_demo-content"><p>긴 스크롤 콘텐츠입니다.</p></div></div>\n` : ''}<div class="back_top${item.size && item.size !== 'md' ? ` back_top_${item.size}` : ''}${item.color ? ` back_top_${item.color}` : ''}" data-back-top${item.target ? ` data-target="${item.target}"` : ''}${item.visibilityHeight && item.visibilityHeight !== 400 ? ` data-visibility-height="${item.visibilityHeight}"` : ''}><button type="button" class="btn btn_ghost back_top_btn" aria-label="맨 위로" data-ripple="surface">${icon}${item.label ? `<span class="back_top_label">${item.label}</span>` : ''}</button></div>`; }
function component(item: Options, vue = false) { const props = [item.target && `target="${item.target}"`, item.visibilityHeight && (vue ? `:visibility-height="${item.visibilityHeight}"` : `visibilityHeight={${item.visibilityHeight}}`), item.size && `size="${item.size}"`, item.color && `color="${item.color}"`, item.label && `label="${item.label}"`].filter(Boolean).join(' '); return `<BackTop${props ? ` ${props}` : ''} />`; }
function examples(name: Name): FrameworkExample[] {
  const list = configs[name]; const markup = list.map(html).join('\n\n'); const reactMarkup = list.map((item) => component(item)).join('\n  '); const vueMarkup = list.map((item) => component(item, true)).join('\n  ');
  const react = `import { BackTop } from '@uxkm/react/back-top';\n\nexport function Example() {\n  return <>\n  ${reactMarkup}\n  </>;\n}`;
  const vue = `<script setup>\nimport { BackTop } from '@uxkm/vue/back-top';\n</script>\n\n<template>\n  ${vueMarkup}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `BackTop.html · ${name}`, code: markup }, { id: 'gulp', label: 'Gulp', fileName: `back-top.njk · ${name}`, code: markup }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/back-top · ${name}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/back-top · ${name}`, code: vue }, { id: 'react', label: 'React', fileName: `@uxkm/react/back-top · ${name}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/back-top · ${name}`, code: react }];
}
export const backTopFrameworkExamples = Object.fromEntries((Object.keys(configs) as Name[]).map((name) => [name, examples(name)])) as Record<Name, FrameworkExample[]>;
