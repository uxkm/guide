import type { FrameworkExample } from './FrameworkCode';

const names = ['basic', 'label', 'color', 'size', 'striped', 'indeterminate', 'inside', 'circle', 'width'] as const;
type Name = (typeof names)[number];

const react: Record<Name, string> = {
  basic: `<Progress percent={0} />\n<Progress percent={30} />\n<Progress percent={60} />\n<Progress percent={100} status="success" />`,
  label: `<Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />\n<Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />`,
  color: `<Progress percent={50} color="primary" ariaLabel="Primary 진행률" />\n<Progress percent={100} color="success" ariaLabel="Success 진행률" />\n<Progress percent={75} color="warning" ariaLabel="Warning 진행률" />\n<Progress percent={35} color="danger" ariaLabel="Danger 진행률" />`,
  size: `<Progress size="sm" percent={40} />\n<Progress percent={55} />\n<Progress size="lg" percent={70} />`,
  striped: `<Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />\n<Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />`,
  indeterminate: `<Progress indeterminate color="primary" ariaLabel="처리 중" />\n<Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />`,
  inside: `<Progress percent={25} inside />\n<Progress percent={80} inside size="lg" color="success" />`,
  circle: `<ProgressCircle percent={25} />\n<ProgressCircle percent={68} color="success" />\n<ProgressCircle percent={50} size="sm" color="warning" />\n<ProgressCircle percent={90} size="lg" color="danger" />`,
  width: `<Progress percent={50} showInfo label="progress_fit" />\n<Progress percent={72} block showInfo label="progress_block — 전체 너비" />`,
};

const vueSource = { ...react, inside: `${react.inside}\n<Progress percent={100} inside />` };
const vue: Record<Name, string> = Object.fromEntries(Object.entries(vueSource).map(([key, value]) => [key, value.replaceAll('percent={', ':percent="').replaceAll('} ', '" ').replaceAll('} />', '" />').replaceAll('showInfo', 'show-info').replaceAll('ariaLabel', 'aria-label')])) as Record<Name, string>;

function htmlCode(key: Name) {
  const linear = (percent: number, classes = 'progress_fit color_primary', header = '', ariaLabel = '진행률') => `<div class="progress ${classes}" data-percent="${percent}">${header}<div class="progress_track" role="progressbar"${classes.includes('is-indeterminate') ? ' aria-busy="true"' : ` aria-valuenow="${percent}"`} aria-valuemin="0" aria-valuemax="100" aria-label="${ariaLabel}"><span class="progress_bar" style="width: ${percent}%">${classes.includes('progress_inside') ? `${percent}%` : ''}</span></div></div>`;
  const header = (label: string, percent?: number) => `<div class="progress_header"><span class="progress_label">${label}</span>${percent === undefined ? '' : `<span class="progress_value">${percent}%</span>`}</div>`;
  const circle = (percent: number, color = 'primary', size = '') => `<div class="progress progress_circle color_${color}${size ? ` progress_${size}` : ''}" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: ${percent}"><svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true"><circle class="progress_circle-track" cx="50" cy="50" r="45"></circle><circle class="progress_circle-bar" cx="50" cy="50" r="45"></circle></svg><span class="progress_circle-value">${percent}%</span></div>`;
  const groups: Record<Name, string[]> = {
    basic: [linear(0), linear(30), linear(60), linear(100, 'progress_fit color_success')],
    label: [linear(42, 'progress_fit color_primary', header('파일 업로드', 42), '파일 업로드 진행률'), linear(67, 'progress_fit color_primary', header('데이터 동기화', 67), '데이터 동기화 진행률')],
    color: [linear(50, 'progress_fit color_primary', '', 'Primary 진행률'), linear(100, 'progress_fit color_success', '', 'Success 진행률'), linear(75, 'progress_fit color_warning', '', 'Warning 진행률'), linear(35, 'progress_fit color_danger', '', 'Danger 진행률')],
    size: [linear(40, 'progress_fit progress_sm color_primary'), linear(55), linear(70, 'progress_fit progress_lg color_primary')],
    striped: [linear(45, 'progress_fit progress_striped color_primary', '', '줄무늬 진행률'), linear(65, 'progress_fit progress_striped progress_animated color_primary', '', '애니메이션 진행률')],
    indeterminate: [linear(0, 'progress_fit color_primary is-indeterminate', '', '처리 중'), linear(0, 'progress_fit color_success is-indeterminate', header('동기화 중…'), '동기화 중')],
    inside: [linear(25, 'progress_fit progress_inside color_primary'), linear(80, 'progress_fit progress_inside progress_lg color_success')],
    circle: [circle(25), circle(68, 'success'), circle(50, 'warning', 'sm'), circle(90, 'danger', 'lg')],
    width: [linear(50, 'progress_fit color_primary', header('progress_fit', 50)), linear(72, 'progress_block color_primary', header('progress_block — 전체 너비', 72))],
  };
  return groups[key].join('\n\n');
}

function examples(key: Name): FrameworkExample[] {
  const html = htmlCode(key); const component = key === 'circle' ? 'ProgressCircle' : 'Progress';
  const reactCode = `import { ${component} } from '@uxkm/react/progress';\n\nexport function Example() {\n  return <>${react[key]}</>;\n}`;
  const vueCode = `<script setup>\nimport { ${component} } from '@uxkm/vue/progress';\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Progress.html · ${key}`, code: html }, { id: 'gulp', label: 'Gulp', fileName: `progress.njk · ${key}`, code: html }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/progress · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/progress · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/progress · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/progress · ${key}`, code: reactCode }];
}

export const progressFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
