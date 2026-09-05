import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const selectImport = `{% from "components/form/Select/select.njk" import select, selectField %}`;
const optionsHtml = '<option value="seoul">서울</option><option value="busan">부산</option><option value="jeju">제주</option>';
const optionsReact = '<option value="seoul">서울</option><option value="busan">부산</option><option value="jeju">제주</option>';
const fieldHtml = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const fieldReact = (id: string, label: string, control: string, message = '') => `<div className="form_field"><label className="form_field-label" htmlFor="${id}">${label}</label>${control}${message}</div>`;
const fieldVue = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;

const sources: Record<string, Source> = {
  basic: {
    html: fieldHtml('select-region', '지역', `<select id="select-region" class="input input_fit" required><option value="" disabled selected>지역을 선택하세요</option>${optionsHtml}</select>`, '<p class="form_field-hint">거주 지역을 선택해 주세요.</p>'),
    react: fieldReact('select-region', '지역', `<Select id="select-region" fit required placeholder="지역을 선택하세요">${optionsReact}</Select>`, '<p className="form_field-hint">거주 지역을 선택해 주세요.</p>'),
    vue: fieldVue('select-region', '지역', `<Select id="select-region" fit required placeholder="지역을 선택하세요">${optionsHtml}</Select>`, '<p class="form_field-hint">거주 지역을 선택해 주세요.</p>')
  },
  standalone: {
    html: `<div class="input_field input_field_fit"><label class="form_field-label" for="select-language">언어</label><select id="select-language" class="input"><option value="ko">한국어</option><option value="en">English</option></select></div>
<label class="display_contents"><span class="input_group-label_hidden">정렬 기준</span><select class="input input_fit"><option value="latest">최신순</option><option value="popular">인기순</option></select></label>`,
    react: `<><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="select-language">언어</label><Select id="select-language" defaultValue="ko"><option value="ko">한국어</option><option value="en">English</option></Select></div><ImplicitSelect label="정렬 기준" fit defaultValue="latest"><option value="latest">최신순</option><option value="popular">인기순</option></ImplicitSelect></>`,
    vue: `<div class="input_field input_field_fit"><label class="form_field-label" for="select-language">언어</label><Select id="select-language" model-value="ko"><option value="ko">한국어</option><option value="en">English</option></Select></div>
<label class="display_contents"><span class="input_group-label_hidden">정렬 기준</span><Select fit model-value="latest"><option value="latest">최신순</option><option value="popular">인기순</option></Select></label>`
  },
  size: {
    html: ['sm', 'md', 'lg'].map((size) => fieldHtml(`select-${size}`, size.toUpperCase(), `<select id="select-${size}" class="input${size === 'md' ? '' : ` input_${size}`}">${optionsHtml}</select>`)).join('\n'),
    react: `<>{['sm', 'md', 'lg'].map((size) => <div className="form_field" key={size}><label className="form_field-label" htmlFor={\`select-\${size}\`}>{size.toUpperCase()}</label><Select id={\`select-\${size}\`} size={size} defaultValue="seoul">${optionsReact}</Select></div>)}</>`,
    vue: `<div v-for="size in ['sm', 'md', 'lg']" :key="size" class="form_field"><label class="form_field-label" :for="\`select-\${size}\`">{{ size.toUpperCase() }}</label><Select :id="\`select-\${size}\`" :size="size" model-value="seoul">${optionsHtml}</Select></div>`
  },
  width: {
    html: `${fieldHtml('select-full', '전체 너비', `<select id="select-full" class="input">${optionsHtml}</select>`)}<div class="form_field form_field_fit"><label class="form_field-label" for="select-fit">제한 너비</label><select id="select-fit" class="input">${optionsHtml}</select></div>`,
    react: `<>
  ${fieldReact('select-full', '전체 너비', `<Select id="select-full" defaultValue="seoul">${optionsReact}</Select>`)}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-fit">제한 너비</label><Select id="select-fit" defaultValue="busan">${optionsReact}</Select></div>
</>`,
    vue: `${fieldVue('select-full', '전체 너비', `<Select id="select-full" model-value="seoul">${optionsHtml}</Select>`)}<div class="form_field form_field_fit"><label class="form_field-label" for="select-fit">제한 너비</label><Select id="select-fit" model-value="busan">${optionsHtml}</Select></div>`
  },
  group: {
    html: fieldHtml('select-team', '소속 팀', '<select id="select-team" class="input"><option value="" disabled selected>팀을 선택하세요</option><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></select>'),
    react: fieldReact('select-team', '소속 팀', '<Select id="select-team" placeholder="팀을 선택하세요"><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></Select>'),
    vue: fieldVue('select-team', '소속 팀', '<Select id="select-team" placeholder="팀을 선택하세요"><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></Select>')
  },
  multiple: {
    html: fieldHtml('select-skills', '관심 분야', '<select id="select-skills" class="input" multiple size="4"><option value="design" selected>UI 디자인</option><option value="frontend" selected>프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></select>', '<p class="form_field-hint">여러 항목을 선택할 수 있습니다.</p>'),
    react: fieldReact('select-skills', '관심 분야', '<Select id="select-skills" multiple nativeSize={4} defaultValue={[\'design\', \'frontend\']}><option value="design">UI 디자인</option><option value="frontend">프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></Select>', '<p className="form_field-hint">여러 항목을 선택할 수 있습니다.</p>'),
    vue: fieldVue('select-skills', '관심 분야', '<Select id="select-skills" multiple :native-size="4" :model-value="[\'design\', \'frontend\']"><option value="design">UI 디자인</option><option value="frontend">프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></Select>', '<p class="form_field-hint">여러 항목을 선택할 수 있습니다.</p>')
  },
  required: {
    html: `<div class="form_field form_field_fit"><label class="form_field-label" for="select-required">문의 유형<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><select id="select-required" class="input" required><option value="" disabled selected>문의 유형을 선택하세요</option><option value="product">제품 문의</option><option value="account">계정 문의</option></select></div>`,
    react: `<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-required">문의 유형<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Select id="select-required" required placeholder="문의 유형을 선택하세요"><option value="product">제품 문의</option><option value="account">계정 문의</option></Select></div>`,
    vue: `<div class="form_field form_field_fit"><label class="form_field-label" for="select-required">문의 유형<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Select id="select-required" required placeholder="문의 유형을 선택하세요"><option value="product">제품 문의</option><option value="account">계정 문의</option></Select></div>`
  },
  state: {
    html: `${fieldHtml('select-disabled', '비활성', `<select id="select-disabled" class="input" disabled>${optionsHtml}</select>`)}${fieldHtml('select-error', '에러', `<select id="select-error" class="input is-error" required aria-invalid="true" aria-describedby="select-error-message"><option value="" disabled selected>지역을 선택하세요</option>${optionsHtml}</select>`, '<p id="select-error-message" class="form_field-error" role="alert">지역을 선택해 주세요.</p>')}`,
    react: `<>
  ${fieldReact('select-disabled', '비활성', `<Select id="select-disabled" defaultValue="busan" disabled>${optionsReact}</Select>`)}
  ${fieldReact('select-error', '에러', `<Select id="select-error" error required placeholder="지역을 선택하세요" aria-describedby="select-error-message">${optionsReact}</Select>`, '<p id="select-error-message" className="form_field-error" role="alert">지역을 선택해 주세요.</p>')}
</>`,
    vue: `${fieldVue('select-disabled', '비활성', `<Select id="select-disabled" model-value="busan" disabled>${optionsHtml}</Select>`)}${fieldVue('select-error', '에러', `<Select id="select-error" error required placeholder="지역을 선택하세요" aria-describedby="select-error-message">${optionsHtml}</Select>`, '<p id="select-error-message" class="form_field-error" role="alert">지역을 선택해 주세요.</p>')}`
  },
  example: {
    html: `<form class="form form_vertical form_fit form_compact">${fieldHtml('delivery-region', '배송 지역', `<select id="delivery-region" class="input is-error" required aria-invalid="true" aria-describedby="delivery-region-error"><option value="" disabled selected>지역을 선택하세요</option>${optionsHtml}</select>`, '<p id="delivery-region-error" class="form_field-error" role="alert">배송 지역을 선택해 주세요.</p>')}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">저장</span></button></div></form>`,
    react: `<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>${fieldReact('delivery-region', '배송 지역', `<Select id="delivery-region" value={region} onChange={(event) => setRegion(event.target.value)} required error={!region} placeholder="지역을 선택하세요" aria-describedby={!region ? 'delivery-region-error' : undefined}>${optionsReact}</Select>`, "{!region && <p id=\"delivery-region-error\" className=\"form_field-error\" role=\"alert\">배송 지역을 선택해 주세요.</p>}")}<div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">저장</span></button></div></form>`,
    vue: `<form class="form form_vertical form_fit form_compact" @submit.prevent>${fieldVue('delivery-region', '배송 지역', `<Select id="delivery-region" v-model="region" required :error="!region" placeholder="지역을 선택하세요" :aria-describedby="!region ? 'delivery-region-error' : undefined">${optionsHtml}</Select>`, '<p v-if="!region" id="delivery-region-error" class="form_field-error" role="alert">배송 지역을 선택해 주세요.</p>')}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">저장</span></button></div></form>`
  }
};

const selectGulpExamples: Record<string, string> = {
  basic: `{% set options = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'jeju', label: '제주' }
] %}
{% set control %}{{ select(id='select-region', options=options, placeholder='지역을 선택하세요', required=true, fit=true) }}{% endset %}
{{ selectField(id='select-region', label='지역', control=control, hint='거주 지역을 선택해 주세요.') }}`,
  standalone: `{% set languageOptions = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' }
] %}
{% set language %}{{ select(id='select-language', options=languageOptions, value='ko') }}{% endset %}
{{ selectField(id='select-language', label='언어', control=language, fit=true) }}

{% set sortOptions = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' }
] %}
{% set sort %}{{ select(id='select-sort', options=sortOptions, value='latest', fit=true) }}{% endset %}
{{ selectField(id='select-sort', ariaLabel='정렬 기준', control=sort) }}`,
  size: `{% set options = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'jeju', label: '제주' }
] %}
{% for size in ['sm', 'md', 'lg'] %}
  {% set id = 'select-' + size %}
  {% set control %}{{ select(id=id, options=options, value='seoul', size=size) }}{% endset %}
  {{ selectField(id=id, label=size | upper, control=control) }}
{% endfor %}`,
  width: `{% set options = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'jeju', label: '제주' }
] %}
{% set full %}{{ select(id='select-full', options=options, value='seoul') }}{% endset %}
{{ selectField(id='select-full', label='전체 너비', control=full) }}
{% set limited %}{{ select(id='select-fit', options=options, value='busan') }}{% endset %}
{{ selectField(id='select-fit', label='제한 너비', control=limited, fit=true) }}`,
  group: `{% set groups = [
  { label: '제품', options: [
    { value: 'design', label: '디자인' },
    { value: 'development', label: '개발' }
  ] },
  { label: '비즈니스', options: [
    { value: 'marketing', label: '마케팅' },
    { value: 'sales', label: '영업' }
  ] }
] %}
{% set control %}{{ select(id='select-team', options=groups, placeholder='팀을 선택하세요') }}{% endset %}
{{ selectField(id='select-team', label='소속 팀', control=control) }}`,
  multiple: `{% set options = [
  { value: 'design', label: 'UI 디자인' },
  { value: 'frontend', label: '프론트엔드' },
  { value: 'backend', label: '백엔드' },
  { value: 'data', label: '데이터' }
] %}
{% set control %}{{ select(id='select-skills', options=options, value=['design', 'frontend'], multiple=true, nativeSize=4) }}{% endset %}
{{ selectField(id='select-skills', label='관심 분야', control=control, hint='여러 항목을 선택할 수 있습니다.') }}`,
  required: `{% set options = [
  { value: 'product', label: '제품 문의' },
  { value: 'account', label: '계정 문의' }
] %}
{% set control %}{{ select(id='select-required', options=options, placeholder='문의 유형을 선택하세요', required=true) }}{% endset %}
{{ selectField(id='select-required', label='문의 유형', control=control, required=true, fit=true) }}`,
  state: `{% set options = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'jeju', label: '제주' }
] %}
{% set disabledSelect %}{{ select(id='select-disabled', options=options, value='busan', disabled=true) }}{% endset %}
{{ selectField(id='select-disabled', label='비활성', control=disabledSelect) }}

{% set errorSelect %}{{ select(id='select-error', options=options, placeholder='지역을 선택하세요', required=true, error=true, ariaDescribedby='select-error-error') }}{% endset %}
{{ selectField(id='select-error', label='에러', control=errorSelect, errorMessage='지역을 선택해 주세요.') }}`,
  example: `{% from "components/basic/Button/button.njk" import button %}
{% set options = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'jeju', label: '제주' }
] %}
<form class="form form_vertical form_fit form_compact">
  {% set control %}{{ select(id='delivery-region', options=options, placeholder='지역을 선택하세요', required=true, error=true, ariaDescribedby='delivery-region-error') }}{% endset %}
  {{ selectField(id='delivery-region', label='배송 지역', control=control, errorMessage='배송 지역을 선택해 주세요.') }}
  <div class="form_actions">{{ button(type='submit', variant='filled', color='primary', label='저장') }}</div>
</form>`
};

function indent(value: string, spaces: number) { const prefix = ' '.repeat(spaces); return value.split('\n').map((line) => `${prefix}${line}`).join('\n'); }
function examples(key: string, source: Source): FrameworkExample[] {
  const usesImplicit = source.react.includes('<ImplicitSelect');
  const usesState = source.react.includes('setRegion');
  const helper = `function ImplicitSelect({ label, ...props }) {\n  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Select {...props} /></label>;\n}`;
  const react = `${usesState ? "import { useState } from 'react';\n" : ''}import Select from '@uxkm/react/select';${usesImplicit ? `\n\n${helper}` : ''}\n\nexport function Example() {${usesState ? "\n  const [region, setRegion] = useState('');" : ''}\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\n${source.vue.includes('v-model') ? "import { ref } from 'vue';\n" : ''}import Select from '@uxkm/vue/select';${source.vue.includes('v-model') ? "\nconst region = ref('');" : ''}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  const html = source.html.replace(/<select(?![^>]*data-component=)/g, '<select data-component="Select"');
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/form/Select/Select.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/form/Select/select.njk · ${key}`, code: `${selectImport}\n\n${selectGulpExamples[key]}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/select · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/select · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/select · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/select · ${key}`, code: react }
  ];
}

export const selectFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
