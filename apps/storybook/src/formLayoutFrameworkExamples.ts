import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const fieldHtml = (id: string, label: string, extra = '', inputAttrs = '') => `<div class="form_field">
  <label class="form_field-label" for="${id}">${label}</label>
  <div class="form_field-control"><input id="${id}" class="input" type="text"${inputAttrs}></div>${extra}
</div>`;
const fieldReact = (id: string, label: string, extra = '', inputAttrs = '') => `<FormField label="${label}" htmlFor="${id}"${extra}>
  <input id="${id}" className="input" type="text"${inputAttrs} />
</FormField>`;
const fieldVue = (id: string, label: string, extra = '', inputAttrs = '') => `<FormField label="${label}" for="${id}"${extra}>
  <input id="${id}" class="input" type="text"${inputAttrs}>
</FormField>`;
const requiredLabel = (label: string) => `${label}<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span>`;
const htmlActions = `<div class="form_actions"><button class="btn btn_filled color_primary" type="submit">저장</button><button class="btn btn_ghost" type="button">취소</button></div>`;
const reactActions = `<FormActions><button className="btn btn_filled color_primary" type="submit">저장</button><button className="btn btn_ghost" type="button">취소</button></FormActions>`;
const vueActions = `<FormActions><button class="btn btn_filled color_primary" type="submit">저장</button><button class="btn btn_ghost" type="button">취소</button></FormActions>`;

const sources: Record<string, Source> = {
  vertical: {
    html: `<form class="form form_vertical form_fit">${fieldHtml('name', requiredLabel('이름'), '\n  <p class="form_field-hint">실명을 입력해 주세요.</p>', ' required')}${fieldHtml('email', '이메일')}${htmlActions}</form>`,
    react: `<FormLayout fit>${fieldReact('name', '이름', ' required hint="실명을 입력해 주세요."', ' required')}${fieldReact('email', '이메일')}${reactActions}</FormLayout>`,
    vue: `<FormLayout fit>${fieldVue('name', '이름', ' required hint="실명을 입력해 주세요."', ' required')}${fieldVue('email', '이메일')}${vueActions}</FormLayout>`
  },
  horizontal: {
    html: `<form class="form form_horizontal">${fieldHtml('name', requiredLabel('이름'), '', ' required')}${fieldHtml('email', '이메일')}${htmlActions}</form>`,
    react: `<FormLayout layout="horizontal">${fieldReact('name', '이름', ' required', ' required')}${fieldReact('email', '이메일')}${reactActions}</FormLayout>`,
    vue: `<FormLayout layout="horizontal">${fieldVue('name', '이름', ' required', ' required')}${fieldVue('email', '이메일')}${vueActions}</FormLayout>`
  },
  horizontalAlign: {
    html: `<div class="demo-stack"><form class="form form_horizontal form_label-width-sm form_label-align-start">${fieldHtml('city', '도시')}${fieldHtml('zip', '우편번호')}</form><form class="form form_horizontal form_label-width-lg">${fieldHtml('company', '회사명')}${fieldHtml('team', '부서')}</form></div>`,
    react: `<div className="demo-stack"><FormLayout layout="horizontal" labelWidth="sm" labelAlign="start">${fieldReact('city', '도시')}${fieldReact('zip', '우편번호')}</FormLayout><FormLayout layout="horizontal" labelWidth="lg">${fieldReact('company', '회사명')}${fieldReact('team', '부서')}</FormLayout></div>`,
    vue: `<div class="demo-stack"><FormLayout layout="horizontal" label-width="sm" label-align="start">${fieldVue('city', '도시')}${fieldVue('zip', '우편번호')}</FormLayout><FormLayout layout="horizontal" label-width="lg">${fieldVue('company', '회사명')}${fieldVue('team', '부서')}</FormLayout></div>`
  },
  inline: {
    html: `<form class="form form_inline">${fieldHtml('query', '검색어')}<div class="form_field"><label class="form_field-label" for="status">상태</label><div class="form_field-control"><select id="status" class="input"><option>전체</option><option>완료</option></select></div></div><div class="form_actions"><button class="btn btn_filled color_primary" type="submit">검색</button></div></form>`,
    react: `<FormLayout layout="inline">${fieldReact('query', '검색어')}<FormField label="상태" htmlFor="status"><select id="status" className="input"><option>전체</option><option>완료</option></select></FormField><FormActions><button className="btn btn_filled color_primary" type="submit">검색</button></FormActions></FormLayout>`,
    vue: `<FormLayout layout="inline">${fieldVue('query', '검색어')}<FormField label="상태" for="status"><select id="status" class="input"><option>전체</option><option>완료</option></select></FormField><FormActions><button class="btn btn_filled color_primary" type="submit">검색</button></FormActions></FormLayout>`
  },
  grid: {
    html: `<form class="form form_vertical"><div class="grid grid_cols-1 grid_cols-md-2">${fieldHtml('name', '이름')}${fieldHtml('team', '부서')}</div>${fieldHtml('email', '이메일')}${htmlActions}</form>`,
    react: `<FormLayout><div className="grid grid_cols-1 grid_cols-md-2">${fieldReact('name', '이름')}${fieldReact('team', '부서')}</div>${fieldReact('email', '이메일')}${reactActions}</FormLayout>`,
    vue: `<FormLayout><div class="grid grid_cols-1 grid_cols-md-2">${fieldVue('name', '이름')}${fieldVue('team', '부서')}</div>${fieldVue('email', '이메일')}${vueActions}</FormLayout>`
  },
  width: {
    html: `<div class="demo-stack"><form class="form form_vertical">${fieldHtml('width-default', '기본 너비')}</form><form class="form form_vertical form_fit">${fieldHtml('width-fit', '제한 너비')}</form><form class="form form_horizontal">${fieldHtml('width-horizontal', '가로 레이아웃')}</form></div>`,
    react: `<div className="demo-stack"><FormLayout>${fieldReact('width-default', '기본 너비')}</FormLayout><FormLayout fit>${fieldReact('width-fit', '제한 너비')}</FormLayout><FormLayout layout="horizontal">${fieldReact('width-horizontal', '가로 레이아웃')}</FormLayout></div>`,
    vue: `<div class="demo-stack"><FormLayout>${fieldVue('width-default', '기본 너비')}</FormLayout><FormLayout fit>${fieldVue('width-fit', '제한 너비')}</FormLayout><FormLayout layout="horizontal">${fieldVue('width-horizontal', '가로 레이아웃')}</FormLayout></div>`
  },
  actions: {
    html: `<div class="demo-stack"><form class="form form_vertical">${fieldHtml('actions-vertical', '제목')}${htmlActions}</form><form class="form form_horizontal">${fieldHtml('actions-horizontal', '제목')}${htmlActions}</form></div>`,
    react: `<div className="demo-stack"><FormLayout>${fieldReact('actions-vertical', '제목')}${reactActions}</FormLayout><FormLayout layout="horizontal">${fieldReact('actions-horizontal', '제목')}${reactActions}</FormLayout></div>`,
    vue: `<div class="demo-stack"><FormLayout>${fieldVue('actions-vertical', '제목')}${vueActions}</FormLayout><FormLayout layout="horizontal">${fieldVue('actions-horizontal', '제목')}${vueActions}</FormLayout></div>`
  },
  example: {
    html: `<form class="form form_vertical form_compact"><div class="grid grid_cols-1 grid_cols-md-2">${fieldHtml('example-id', requiredLabel('아이디'), '\n  <p class="form_field-hint">영문·숫자 4~16자</p>', ' required')}${fieldHtml('example-password', requiredLabel('비밀번호'), '', ' required')}${fieldHtml('example-name', requiredLabel('이름'), '', ' required')}${fieldHtml('example-email', '이메일')}<div class="form_field grid_col-span-md-2"><label class="form_field-label" for="example-memo">메모</label><div class="form_field-control"><textarea id="example-memo" class="textarea" rows="3"></textarea></div></div></div>${htmlActions.replace('저장', '가입하기')}</form>`,
    react: `<FormLayout compact><div className="grid grid_cols-1 grid_cols-md-2">${fieldReact('example-id', '아이디', ' required hint="영문·숫자 4~16자"', ' required')}${fieldReact('example-password', '비밀번호', ' required', ' required')}${fieldReact('example-name', '이름', ' required', ' required')}${fieldReact('example-email', '이메일')}<FormField className="grid_col-span-md-2" label="메모" htmlFor="example-memo"><textarea id="example-memo" className="textarea" rows={3} /></FormField></div>${reactActions.replace('저장', '가입하기')}</FormLayout>`,
    vue: `<FormLayout compact><div class="grid grid_cols-1 grid_cols-md-2">${fieldVue('example-id', '아이디', ' required hint="영문·숫자 4~16자"', ' required')}${fieldVue('example-password', '비밀번호', ' required', ' required')}${fieldVue('example-name', '이름', ' required', ' required')}${fieldVue('example-email', '이메일')}<FormField class="grid_col-span-md-2" label="메모" for="example-memo"><textarea id="example-memo" class="textarea" rows="3"></textarea></FormField></div>${vueActions.replace('저장', '가입하기')}</FormLayout>`
  }
};

const formLayoutImports = `{% from "components/form/FormLayout/form-layout.njk" import formLayout, formField, formActions %}
{% from "components/form/Input/input.njk" import input %}
{% from "components/form/Textarea/textarea.njk" import textarea %}
{% from "components/form/Select/select.njk" import select %}
{% from "components/basic/Button/button.njk" import button %}
{% from "components/layout/Grid/grid.njk" import grid, gridCol %}`;

const formLayoutGulpExamples: Record<string, string> = {
  vertical: `${formLayoutImports}

{% call formLayout(fit=true) %}
  {% call formField(id='name', label='이름', required=true, hint='실명을 입력해 주세요.') %}
    {{ input(id='name', name='name', required=true) }}
  {% endcall %}
  {% call formField(id='email', label='이메일') %}
    {{ input(id='email', name='email', type='email') }}
  {% endcall %}
  {% call formActions() %}
    {{ button(type='submit', label='저장') }}
    {{ button(variant='ghost', color='', label='취소') }}
  {% endcall %}
{% endcall %}`,
  horizontal: `${formLayoutImports}

{% call formLayout(layout='horizontal') %}
  {% call formField(id='name', label='이름', required=true) %}
    {{ input(id='name', name='name', required=true) }}
  {% endcall %}
  {% call formField(id='email', label='이메일') %}
    {{ input(id='email', name='email', type='email') }}
  {% endcall %}
  {% call formActions() %}
    {{ button(type='submit', label='저장') }}
    {{ button(variant='ghost', color='', label='취소') }}
  {% endcall %}
{% endcall %}`,
  horizontalAlign: `${formLayoutImports}

<div class="demo-stack">
  {% call formLayout(layout='horizontal', labelWidth='sm', labelAlign='start') %}
    {% call formField(id='city', label='도시') %}{{ input(id='city', name='city') }}{% endcall %}
    {% call formField(id='zip', label='우편번호') %}{{ input(id='zip', name='zip') }}{% endcall %}
  {% endcall %}
  {% call formLayout(layout='horizontal', labelWidth='lg') %}
    {% call formField(id='company', label='회사명') %}{{ input(id='company', name='company') }}{% endcall %}
    {% call formField(id='team', label='부서') %}{{ input(id='team', name='team') }}{% endcall %}
  {% endcall %}
</div>`,
  inline: `${formLayoutImports}

{% set statusOptions = [
  { value: 'all', label: '전체' },
  { value: 'done', label: '완료' }
] %}
{% call formLayout(layout='inline') %}
  {% call formField(id='query', label='검색어') %}
    {{ input(id='query', name='query') }}
  {% endcall %}
  {% call formField(id='status', label='상태') %}
    {{ select(id='status', name='status', options=statusOptions, value='all') }}
  {% endcall %}
  {% call formActions() %}{{ button(type='submit', label='검색') }}{% endcall %}
{% endcall %}`,
  grid: `${formLayoutImports}

{% call formLayout() %}
  {% call grid(cols=1, colsMd=2) %}
    {% call formField(id='name', label='이름') %}{{ input(id='name', name='name') }}{% endcall %}
    {% call formField(id='team', label='부서') %}{{ input(id='team', name='team') }}{% endcall %}
  {% endcall %}
  {% call formField(id='email', label='이메일') %}{{ input(id='email', name='email', type='email') }}{% endcall %}
  {% call formActions() %}
    {{ button(type='submit', label='저장') }}
    {{ button(variant='ghost', color='', label='취소') }}
  {% endcall %}
{% endcall %}`,
  width: `${formLayoutImports}

<div class="demo-stack">
  {% call formLayout() %}
    {% call formField(id='width-default', label='기본 너비') %}{{ input(id='width-default') }}{% endcall %}
  {% endcall %}
  {% call formLayout(fit=true) %}
    {% call formField(id='width-fit', label='제한 너비') %}{{ input(id='width-fit') }}{% endcall %}
  {% endcall %}
  {% call formLayout(layout='horizontal') %}
    {% call formField(id='width-horizontal', label='가로 레이아웃') %}{{ input(id='width-horizontal') }}{% endcall %}
  {% endcall %}
</div>`,
  actions: `${formLayoutImports}

<div class="demo-stack">
  {% call formLayout() %}
    {% call formField(id='actions-vertical', label='제목') %}{{ input(id='actions-vertical') }}{% endcall %}
    {% call formActions() %}
      {{ button(type='submit', label='저장') }}
      {{ button(variant='ghost', color='', label='취소') }}
    {% endcall %}
  {% endcall %}
  {% call formLayout(layout='horizontal') %}
    {% call formField(id='actions-horizontal', label='제목') %}{{ input(id='actions-horizontal') }}{% endcall %}
    {% call formActions() %}
      {{ button(type='submit', label='저장') }}
      {{ button(variant='ghost', color='', label='취소') }}
    {% endcall %}
  {% endcall %}
</div>`,
  example: `${formLayoutImports}

{% call formLayout(compact=true) %}
  {% call grid(cols=1, colsMd=2) %}
    {% call formField(id='example-id', label='아이디', required=true, hint='영문·숫자 4~16자') %}
      {{ input(id='example-id', name='userId', required=true) }}
    {% endcall %}
    {% call formField(id='example-password', label='비밀번호', required=true) %}
      {{ input(id='example-password', name='password', type='password', required=true) }}
    {% endcall %}
    {% call formField(id='example-name', label='이름', required=true) %}
      {{ input(id='example-name', name='name', required=true) }}
    {% endcall %}
    {% call formField(id='example-email', label='이메일') %}
      {{ input(id='example-email', name='email', type='email') }}
    {% endcall %}
    {% call gridCol(spanMd=2) %}
      {% call formField(id='example-memo', label='메모') %}
        {{ textarea(id='example-memo', name='memo', rows=3) }}
      {% endcall %}
    {% endcall %}
  {% endcall %}
  {% call formActions() %}
    {{ button(type='submit', label='가입하기') }}
    {{ button(variant='ghost', color='', label='취소') }}
  {% endcall %}
{% endcall %}`
};

function indent(value: string, spaces: number) { const prefix = ' '.repeat(spaces); return value.split('\n').map((line) => `${prefix}${line}`).join('\n'); }
function examples(key: string, source: Source): FrameworkExample[] {
  const react = `import FormLayout, { FormActions, FormField } from '@uxkm/react/form-layout';\n\nexport function Example() {\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\nimport FormLayout, { FormActions, FormField } from '@uxkm/vue/form-layout';\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/form/FormLayout/FormLayout.html · ${key}`, code: source.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/form/FormLayout/form-layout.njk · ${key}`, code: formLayoutGulpExamples[key] },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/form-layout · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/form-layout · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/form-layout · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/form-layout · ${key}`, code: react }
  ];
}

export const formLayoutFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
