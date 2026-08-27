import type { FrameworkExample } from './FrameworkCode';
import { inputFrameworkExamples as inputBaseExamples } from './inputFrameworkExamples';
import { selectFrameworkExamples as selectBaseExamples } from './selectFrameworkExamples';
import { textareaFrameworkExamples as textareaBaseExamples } from './textareaFrameworkExamples';

import inputHtml from '../../html/src/components/form/Input/Input.html?raw';
import inputGulp from '../../gulp/src/components/form/Input/input.njk?raw';
import inputReact from '../../react/src/components/form/Input/Input.jsx?raw';
import inputVue from '../../vue/src/components/form/Input/Input.vue?raw';
import textareaHtml from '../../html/src/components/form/Textarea/Textarea.html?raw';
import textareaGulp from '../../gulp/src/components/form/Textarea/textarea.njk?raw';
import textareaReact from '../../react/src/components/form/Textarea/Textarea.jsx?raw';
import textareaVue from '../../vue/src/components/form/Textarea/Textarea.vue?raw';
import selectHtml from '../../html/src/components/form/Select/Select.html?raw';
import selectGulp from '../../gulp/src/components/form/Select/select.njk?raw';
import selectReact from '../../react/src/components/form/Select/Select.jsx?raw';
import selectVue from '../../vue/src/components/form/Select/Select.vue?raw';

function componentExamples(
  name: string,
  slug: string,
  sources: { html: string; gulp: string; react: string; vue: string },
): FrameworkExample[] {
  return [
    {
      id: 'html',
      label: 'HTML',
      fileName: `apps/html/src/components/form/${name}/${name}.html`,
      code: sources.html,
    },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/form/${name}/${slug}.njk`,
      code: sources.gulp,
    },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `apps/vue/src/components/form/${name}/${name}.vue`,
      code: sources.vue,
    },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${slug} → ${name}.vue`, code: sources.vue },
    {
      id: 'react',
      label: 'React',
      fileName: `apps/react/src/components/form/${name}/${name}.jsx`,
      code: sources.react,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/${slug} → ${name}.jsx`,
      code: sources.react,
    },
  ];
}

export const inputComponentExamples = componentExamples('Input', 'input', {
  html: inputHtml,
  gulp: inputGulp,
  react: inputReact,
  vue: inputVue,
});
export const textareaComponentExamples = componentExamples('Textarea', 'textarea', {
  html: textareaHtml,
  gulp: textareaGulp,
  react: textareaReact,
  vue: textareaVue,
});
export const selectComponentExamples = componentExamples('Select', 'select', {
  html: selectHtml,
  gulp: selectGulp,
  react: selectReact,
  vue: selectVue,
});

const inputConfig: Record<
  string,
  { label: string; type?: string; classes?: string; attributes?: string }
> = {
  basic: { label: '이름', attributes: 'placeholder="이름을 입력하세요"' },
  standalone: {
    label: '검색어',
    type: 'search',
    classes: 'input_fit',
    attributes: 'placeholder="검색어를 입력하세요"',
  },
  type: { label: '이메일', type: 'email', attributes: 'placeholder="name@example.com"' },
  kind: {
    label: '인증번호',
    classes: 'input_otp',
    attributes: 'displayFormat="####" maxlength="4"',
  },
  size: { label: 'Large', classes: 'input_lg' },
  width: { label: '제한 너비', classes: 'input_fit' },
  group: {
    label: '도메인',
    type: 'url',
    classes: 'input_fit',
    attributes: 'placeholder="example.com"',
  },
  required: { label: '이메일', type: 'email', attributes: 'mandatory="true" aria-required="true"' },
  state: { label: '오류 입력', attributes: 'aria-invalid="true" aria-describedby="inputError"' },
  clearable: { label: '검색어', type: 'search', attributes: 'placeholder="검색어를 입력하세요"' },
  example: {
    label: '사용자 이름',
    attributes: 'mandatory="true" aria-describedby="inputExampleHint"',
  },
};

function inputWebSquare(key: string) {
  const config = inputConfig[key] ?? inputConfig.basic;
  const input = `<xf:input id="${key}Input" class="input${config.classes ? ` ${config.classes}` : ''}" type="${config.type ?? 'text'}" ref="data:${key}Value"${config.attributes ? ` ${config.attributes}` : ''}></xf:input>`;
  const control =
    key === 'group'
      ? `<w2:group id="${key}Group" class="input_group input_fit">
  <w2:textbox id="${key}Prefix" class="input_group-addon" label="https://" aria-hidden="true"></w2:textbox>
  ${input}
</w2:group>`
      : key === 'clearable'
        ? `<w2:group id="${key}Clearable" class="input_clearable is-filled">
  ${input}
  <xf:trigger id="${key}Clear" type="button" class="input_clear" ev:onclick="scwin.input_clear">
    <xf:label><![CDATA[입력 지우기]]></xf:label>
  </xf:trigger>
</w2:group>`
        : input;
  return `<w2:group id="${key}Field" class="form_field form_field_fit">
  <w2:textbox id="${key}Label" class="form_field-label" tagname="label" for="${key}Input" label="${config.label}"></w2:textbox>
  <w2:group id="${key}Control" class="form_field-control">
    ${control.replaceAll('\n', '\n    ')}
  </w2:group>
  <w2:textbox id="${key}Hint" class="form_field-hint" tagname="p" label="입력값을 확인해 주세요."></w2:textbox>
</w2:group>`;
}

const textareaConfig: Record<string, { label: string; classes?: string; attributes?: string }> = {
  basic: {
    label: '메시지',
    classes: 'textarea_resize_none',
    attributes: 'rows="4" placeholder="메시지를 입력하세요"',
  },
  standalone: { label: '자기소개', classes: 'textarea_fit', attributes: 'rows="4"' },
  size: { label: 'Large', classes: 'textarea_lg textarea_resize_none', attributes: 'rows="5"' },
  width: {
    label: '제한 너비',
    classes: 'textarea_fit textarea_resize_none',
    attributes: 'rows="4"',
  },
  resize: { label: '세로 크기 조절', classes: 'textarea_resize_vertical', attributes: 'rows="5"' },
  required: {
    label: '문의 내용',
    classes: 'textarea_resize_none',
    attributes: 'rows="4" mandatory="true"',
  },
  state: {
    label: '오류 내용',
    classes: 'textarea_resize_none is-error',
    attributes: 'rows="4" aria-invalid="true"',
  },
  count: {
    label: '자기소개',
    classes: 'textarea_resize_none',
    attributes: 'rows="5" maxlength="200"',
  },
  example: {
    label: '문의 내용',
    classes: 'textarea_resize_none is-error',
    attributes: 'rows="5" maxlength="500" mandatory="true"',
  },
};

function textareaWebSquare(key: string) {
  const config = textareaConfig[key] ?? textareaConfig.basic;
  const textarea = `<xf:textarea id="${key}Textarea" class="textarea${config.classes ? ` ${config.classes}` : ''}" ref="data:${key}Value"${config.attributes ? ` ${config.attributes}` : ''}></xf:textarea>`;
  const control =
    key === 'count' || key === 'example'
      ? `<w2:group id="${key}Wrap" class="textarea_wrap textarea_show-count">
  ${textarea}
  <w2:textbox id="${key}Count" class="textarea_count" role="status" aria-live="polite" label="0/${key === 'count' ? '200' : '500'}"></w2:textbox>
</w2:group>`
      : textarea;
  return `<w2:group id="${key}Field" class="form_field form_field_fit">
  <w2:textbox id="${key}Label" class="form_field-label" tagname="label" for="${key}Textarea" label="${config.label}"></w2:textbox>
  <w2:group id="${key}Control" class="form_field-control">
    ${control.replaceAll('\n', '\n    ')}
  </w2:group>
  <w2:textbox id="${key}Hint" class="form_field-hint" tagname="p" label="여러 줄 입력 내용을 확인해 주세요."></w2:textbox>
</w2:group>`;
}

const selectConfig: Record<string, { label: string; classes?: string; attributes?: string }> = {
  basic: { label: '지역', classes: 'input_fit', attributes: 'chooseOption="true"' },
  standalone: { label: '언어', classes: 'input_fit' },
  size: { label: 'Large', classes: 'input_lg' },
  width: { label: '제한 너비', classes: 'input_fit' },
  group: { label: '소속 팀', attributes: 'chooseOption="true"' },
  multiple: { label: '관심 분야', attributes: 'appearance="minimal" multiple="true"' },
  required: { label: '문의 유형', attributes: 'mandatory="true" chooseOption="true"' },
  state: { label: '오류 선택', classes: 'is-error', attributes: 'aria-invalid="true"' },
  example: {
    label: '배송 지역',
    classes: 'input_fit is-error',
    attributes: 'mandatory="true" chooseOption="true"',
  },
};

function selectWebSquare(key: string) {
  const config = selectConfig[key] ?? selectConfig.basic;
  return `<w2:group id="${key}Field" class="form_field form_field_fit">
  <w2:textbox id="${key}Label" class="form_field-label" tagname="label" for="${key}Select" label="${config.label}"></w2:textbox>
  <w2:group id="${key}Control" class="form_field-control">
    <xf:select1 id="${key}Select" class="input${config.classes ? ` ${config.classes}` : ''}" ref="data:${key}Value"${config.attributes ? ` ${config.attributes}` : ''} ev:onchange="scwin.select_onchange">
      <w2:itemset nodeset="data:${key}Options">
        <w2:label ref="label"></w2:label>
        <w2:value ref="value"></w2:value>
      </w2:itemset>
    </xf:select1>
  </w2:group>
  <w2:textbox id="${key}Hint" class="form_field-hint" tagname="p" label="선택값을 확인해 주세요."></w2:textbox>
</w2:group>`;
}

function withWebSquare(
  examples: Record<string, FrameworkExample[]>,
  name: string,
  createCode: (key: string) => string,
) {
  return Object.fromEntries(
    Object.entries(examples).map(([key, items]) => [
      key,
      [
        ...items,
        {
          id: 'websquare',
          label: 'WebSquare',
          fileName: `WebSquare 화면 XML · ${name} · ${key}`,
          code: `<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${createCode(key)}`,
        },
      ],
    ]),
  ) as typeof examples;
}

export const inputFrameworkExamples = withWebSquare(inputBaseExamples, 'Input', inputWebSquare);
export const textareaFrameworkExamples = withWebSquare(
  textareaBaseExamples,
  'Textarea',
  textareaWebSquare,
);
export const selectFrameworkExamples = withWebSquare(selectBaseExamples, 'Select', selectWebSquare);
