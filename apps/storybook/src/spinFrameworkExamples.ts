import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'size', 'color', 'tip', 'inline', 'block', 'overlay'] as const;
type Name = (typeof names)[number];
const react: Record<Name, string> = {
  basic: '<Spin />',
  size: '<Spin size="sm" />\n<Spin />\n<Spin size="lg" />',
  color: '<Spin color="primary" ariaLabel="Primary 로딩" />\n<Spin color="success" ariaLabel="Success 로딩" />\n<Spin color="warning" ariaLabel="Warning 로딩" />\n<Spin color="danger" ariaLabel="Danger 로딩" />',
  tip: '<Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />\n<Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />',
  inline: '<p><Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" /></p>\n<Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />',
  block: '<Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />',
  overlay: '<SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">대시보드</h3></div><div className="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></SpinWrap>\n<SpinWrap block blur loading ariaLabel="처리 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">블러 효과</h3></div><div className="card_body"><p><code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></SpinWrap>',
};
const vue: Record<Name, string> = Object.fromEntries(Object.entries(react).map(([key, value]) => [key, value.replaceAll('ariaLabel', 'aria-label').replaceAll('className=', 'class=')])) as Record<Name, string>;

function htmlSpin(classes = 'color_primary', tip = '', label = '로딩 중') { return `<div class="spin ${classes}" role="status" aria-live="polite" aria-busy="true" aria-label="${label}"><span class="spin_indicator" aria-hidden="true"></span>${tip ? `<p class="spin_tip">${tip}</p>` : ''}</div>`; }
function htmlCode(key: Name) {
  const groups: Record<Name, string[]> = {
    basic: [htmlSpin()],
    size: [htmlSpin('spin_sm color_primary'), htmlSpin(), htmlSpin('spin_lg color_primary')],
    color: [htmlSpin('color_primary', '', 'Primary 로딩'), htmlSpin('color_success', '', 'Success 로딩'), htmlSpin('color_warning', '', 'Warning 로딩'), htmlSpin('color_danger', '', 'Danger 로딩')],
    tip: [htmlSpin('color_primary', '데이터를 불러오는 중…', '데이터를 불러오는 중'), htmlSpin('spin_lg color_primary', '파일 업로드 중…', '파일 업로드 중')],
    inline: [htmlSpin('spin_sm spin_inline color_primary', '저장 중…', '저장 중'), '<button class="btn btn_filled color_primary is-loading" disabled aria-busy="true">제출 중…</button>'],
    block: [htmlSpin('spin_block color_primary', '잠시만 기다려 주세요…')],
    overlay: [`<div class="spin_wrap spin_wrap-block is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">대시보드</h3></div><div class="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></div>${htmlSpin('spin_overlay color_primary', '데이터 로딩 중…', '데이터 로딩 중')}</div>`, `<div class="spin_wrap spin_wrap-block spin_wrap-blur is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">블러 효과</h3></div><div class="card_body"><p><code>spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></div>${htmlSpin('spin_overlay color_primary', '', '처리 중')}</div>`],
  };
  return groups[key].join('\n\n');
}
function examples(key: Name): FrameworkExample[] {
  const html = htmlCode(key); const component = key === 'overlay' ? 'SpinWrap' : 'Spin';
  const reactImports = `import { ${component} } from '@uxkm/react/spin';${key === 'inline' ? "\nimport Button from '@uxkm/react/button';" : ''}`;
  const vueImports = `import { ${component} } from '@uxkm/vue/spin';${key === 'inline' ? "\nimport Button from '@uxkm/vue/button';" : ''}`;
  const reactCode = `${reactImports}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\n${vueImports}\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Spin.html · ${key}`, code: html }, { id: 'gulp', label: 'Gulp', fileName: `spin.njk · ${key}`, code: html }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/spin · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/spin · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/spin · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/spin · ${key}`, code: reactCode }];
}
export const spinFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
