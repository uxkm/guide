import type { FrameworkExample } from './FrameworkCode';
import { formLayoutFrameworkExamples as baseExamples } from './formLayoutFrameworkExamples';

import formLayoutHtml from '../../html/src/components/form/FormLayout/FormLayout.html?raw';
import formLayoutGulp from '../../gulp/src/components/form/FormLayout/form-layout.njk?raw';
import formLayoutReact from '../../react/src/components/form/FormLayout/FormLayout.jsx?raw';
import formLayoutVue from '../../vue/src/components/form/FormLayout/FormLayout.vue?raw';
import formActionsVue from '../../vue/src/components/form/FormLayout/FormActions.vue?raw';
import formFieldVue from '../../vue/src/components/form/FormLayout/FormField.vue?raw';

const vueComponents = [
  formLayoutVue,
  `<!-- FormField.vue -->\n${formFieldVue}`,
  `<!-- FormActions.vue -->\n${formActionsVue}`,
].join('\n\n');

export const formLayoutComponentExamples: FrameworkExample[] = [
  {
    id: 'html',
    label: 'HTML',
    fileName: 'apps/html/src/components/form/FormLayout/FormLayout.html',
    code: formLayoutHtml,
  },
  {
    id: 'gulp',
    label: 'Gulp',
    fileName: 'apps/gulp/src/components/form/FormLayout/form-layout.njk',
    code: formLayoutGulp,
  },
  {
    id: 'vue',
    label: 'Vue',
    fileName: 'apps/vue/src/components/form/FormLayout/Form*.vue',
    code: vueComponents,
  },
  {
    id: 'nuxt',
    label: 'Nuxt',
    fileName: '@uxkm/vue/form-layout → Form*.vue',
    code: vueComponents,
  },
  {
    id: 'react',
    label: 'React',
    fileName: 'apps/react/src/components/form/FormLayout/FormLayout.jsx',
    code: formLayoutReact,
  },
  {
    id: 'next',
    label: 'Next',
    fileName: '@uxkm/react/form-layout → FormLayout.jsx',
    code: formLayoutReact,
  },
];

const indent = (source: string, spaces = 2) =>
  source
    .split('\n')
    .map((line) => `${' '.repeat(spaces)}${line}`)
    .join('\n');

function field(id: string, label: string, options: { required?: boolean; hint?: string } = {}) {
  const required = options.required
    ? `\n    <w2:group id="${id}Required" class="form_field-required" tagname="span">\n      <w2:textbox id="${id}RequiredMark" class="form_field-required-mark" label="*" aria-hidden="true"></w2:textbox>\n      <w2:textbox id="${id}RequiredText" class="form_field-required-text" label="필수 항목"></w2:textbox>\n    </w2:group>`
    : '';
  const hint = options.hint
    ? `\n  <w2:textbox id="${id}Hint" class="form_field-hint" tagname="p" label="${options.hint}"></w2:textbox>`
    : '';

  return `<w2:group id="${id}Field" class="form_field">
  <w2:group id="${id}LabelGroup" class="form_field-label" tagname="label" for="${id}">
    <w2:textbox id="${id}Label" label="${label}"></w2:textbox>${required}
  </w2:group>
  <w2:group id="${id}Control" class="form_field-control">
    <xf:input id="${id}" class="input"${options.required ? ' mandatory="true"' : ''}></xf:input>
  </w2:group>${hint}
</w2:group>`;
}

const actions = `<w2:group id="formActions" class="form_actions">
  <xf:trigger id="saveButton" type="submit" class="btn btn_filled color_primary" ev:onclick="scwin.form_save">
    <xf:label><![CDATA[저장]]></xf:label>
  </xf:trigger>
  <xf:trigger id="cancelButton" type="button" class="btn btn_ghost" ev:onclick="scwin.form_cancel">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
</w2:group>`;

function form(id: string, classes: string, children: string) {
  return `<w2:group id="${id}" class="form ${classes}" tagname="form">
${indent(children)}
</w2:group>`;
}

const webSquareExamples: Record<string, string> = {
  vertical: form(
    'verticalForm',
    'form_vertical form_fit',
    `${field('nameInput', '이름', { required: true, hint: '실명을 입력해 주세요.' })}\n${field('emailInput', '이메일')}\n${actions}`,
  ),
  horizontal: form(
    'horizontalForm',
    'form_horizontal',
    `${field('horizontalName', '이름', { required: true })}\n${field('horizontalEmail', '이메일')}\n${actions}`,
  ),
  horizontalAlign: `${form('smallLabelForm', 'form_horizontal form_label-width-sm form_label-align-start', `${field('cityInput', '도시')}\n${field('zipInput', '우편번호')}`)}
${form('largeLabelForm', 'form_horizontal form_label-width-lg', `${field('companyInput', '회사명')}\n${field('teamInput', '부서')}`)}`,
  inline: form(
    'searchForm',
    'form_inline',
    `${field('queryInput', '검색어')}\n<w2:group id="statusField" class="form_field">\n  <w2:textbox id="statusLabel" class="form_field-label" tagname="label" for="statusSelect" label="상태"></w2:textbox>\n  <w2:group id="statusControl" class="form_field-control">\n    <xf:select1 id="statusSelect" class="input" ref="data:status"></xf:select1>\n  </w2:group>\n</w2:group>\n${actions.replace('저장', '검색')}`,
  ),
  grid: form(
    'gridForm',
    'form_vertical',
    `<w2:group id="profileGrid" class="grid grid_cols-1 grid_cols-md-2">\n${indent(field('gridName', '이름'))}\n${indent(field('gridTeam', '부서'))}\n</w2:group>\n${field('gridEmail', '이메일')}\n${actions}`,
  ),
  width: `${form('defaultWidthForm', 'form_vertical', field('defaultWidthInput', '기본 너비'))}
${form('fitWidthForm', 'form_vertical form_fit', field('fitWidthInput', '제한 너비'))}
${form('fillWidthForm', 'form_horizontal', field('fillWidthInput', '가로 레이아웃'))}`,
  actions: `${form('verticalActionForm', 'form_vertical', `${field('verticalTitle', '제목')}\n${actions}`)}
${form('horizontalActionForm', 'form_horizontal', `${field('horizontalTitle', '제목')}\n${actions.replaceAll('id="', 'id="horizontal')}`)}`,
  example: form(
    'memberForm',
    'form_vertical form_compact',
    `<w2:group id="memberGrid" class="grid grid_cols-1 grid_cols-md-2">\n${indent(field('memberId', '아이디', { required: true, hint: '영문·숫자 4~16자' }))}\n${indent(field('memberPassword', '비밀번호', { required: true }))}\n${indent(field('memberName', '이름', { required: true }))}\n${indent(field('memberEmail', '이메일'))}\n</w2:group>\n${actions.replace('저장', '가입하기')}`,
  ),
};

export const formLayoutFrameworkExamples = Object.fromEntries(
  Object.entries(baseExamples).map(([key, examples]) => [
    key,
    [
      ...examples,
      {
        id: 'websquare',
        label: 'WebSquare',
        fileName: `WebSquare 화면 XML · FormLayout · ${key}`,
        code: `<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${webSquareExamples[key]}`,
      },
    ],
  ]),
) as typeof baseExamples;
