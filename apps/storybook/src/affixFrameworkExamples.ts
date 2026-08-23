import type { FrameworkExample } from './FrameworkCode';
type Name = 'basic' | 'offset' | 'anchor' | 'bottom' | 'window';
const options: Record<Name, { target?: string; offsetTop?: number; offsetBottom?: number; skin: string }> = {
  basic: { target: '#affix-scroll', skin: 'bar' }, offset: { target: '#affix-scroll', offsetTop: 12, skin: 'bar' },
  anchor: { target: '#affix-scroll', skin: 'anchor' }, bottom: { target: '#affix-scroll', offsetBottom: 0, skin: 'bar' }, window: { offsetTop: 64, skin: 'bar' },
};
const content = (name: Name) => name === 'anchor' ? '<nav aria-label="설정 섹션"><a class="link color_primary" href="#profile">프로필</a><a class="link" href="#security">보안</a></nav>' : '<span class="affix_bar-label">주문 액션</span><div class="affix_bar-actions"><button class="btn btn_filled color_primary btn_sm">확인</button></div>';
function html(name: Name) {
  const item = options[name];
  return `<div id="affix-scroll" class="affix_demo-scroll">
  <div class="affix_demo-content">
    <p>스크롤하여 고정 동작을 확인하세요.</p>
    <div class="affix" data-affix${item.target ? ` data-target="${item.target}"` : ''}${item.offsetTop ? ` data-offset-top="${item.offsetTop}"` : ''}${item.offsetBottom !== undefined ? ` data-offset-bottom="${item.offsetBottom}"` : ''}>
      <div class="affix_placeholder" aria-hidden="true" hidden></div>
      <div class="affix_target affix_${item.skin}">${content(name)}</div>
    </div>
    <p>긴 콘텐츠가 이어집니다.</p>
  </div>
</div>`;
}
function component(name: Name, vue = false) {
  const item = options[name];
  const props = [item.target && `target="${item.target}"`, item.offsetTop && (vue ? `:offset-top="${item.offsetTop}"` : `offsetTop={${item.offsetTop}}`), item.offsetBottom !== undefined && (vue ? `:offset-bottom="${item.offsetBottom}"` : `offsetBottom={${item.offsetBottom}}`), `skin="${item.skin}"`].filter(Boolean).join(' ');
  return `<Affix ${props}>${content(name)}</Affix>`;
}
function examples(name: Name): FrameworkExample[] {
  const react = `import { Affix } from '@uxkm/react/affix';\n\nexport function Example() {\n  return ${component(name)};\n}`;
  const vue = `<script setup>\nimport { Affix } from '@uxkm/vue/affix';\n</script>\n\n<template>\n  ${component(name, true)}\n</template>`;
  const markup = html(name);
  return [
    { id: 'html', label: 'HTML', fileName: `Affix.html · ${name}`, code: markup }, { id: 'gulp', label: 'Gulp', fileName: `affix.njk · ${name}`, code: markup },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/affix · ${name}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/affix · ${name}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/affix · ${name}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/affix · ${name}`, code: react },
  ];
}
export const affixFrameworkExamples = Object.fromEntries((Object.keys(options) as Name[]).map((name) => [name, examples(name)])) as Record<Name, FrameworkExample[]>;
