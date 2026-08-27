import type { FrameworkExample } from './FrameworkCode';
import { inputFrameworkExamples as inputBaseExamples } from './inputFrameworkExamples';
import { selectFrameworkExamples as selectBaseExamples } from './selectFrameworkExamples';
import { textareaFrameworkExamples as textareaBaseExamples } from './textareaFrameworkExamples';
import { checkboxFrameworkExamples as checkboxBaseExamples } from './checkboxFrameworkExamples';
import { radioFrameworkExamples as radioBaseExamples } from './radioFrameworkExamples';
import { switchFrameworkExamples as switchBaseExamples } from './switchFrameworkExamples';
import { sliderFrameworkExamples as sliderBaseExamples } from './sliderFrameworkExamples';
import { rateFrameworkExamples as rateBaseExamples } from './rateFrameworkExamples';
import { uploadFrameworkExamples as uploadBaseExamples } from './uploadFrameworkExamples';
import { datePickerFrameworkExamples as datePickerBaseExamples } from './datePickerFrameworkExamples';

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
import checkboxHtml from '../../html/src/components/form/Checkbox/Checkbox.html?raw';
import checkboxGulp from '../../gulp/src/components/form/Checkbox/checkbox.njk?raw';
import checkboxReact from '../../react/src/components/form/Checkbox/Checkbox.jsx?raw';
import checkboxVue from '../../vue/src/components/form/Checkbox/Checkbox.vue?raw';
import radioHtml from '../../html/src/components/form/Radio/Radio.html?raw';
import radioGulp from '../../gulp/src/components/form/Radio/radio.njk?raw';
import radioReact from '../../react/src/components/form/Radio/Radio.jsx?raw';
import radioVue from '../../vue/src/components/form/Radio/Radio.vue?raw';
import switchHtml from '../../html/src/components/form/Switch/Switch.html?raw';
import switchGulp from '../../gulp/src/components/form/Switch/switch.njk?raw';
import switchReact from '../../react/src/components/form/Switch/Switch.jsx?raw';
import switchVue from '../../vue/src/components/form/Switch/Switch.vue?raw';
import sliderHtml from '../../html/src/components/form/Slider/Slider.html?raw';
import sliderGulp from '../../gulp/src/components/form/Slider/slider.njk?raw';
import sliderReact from '../../react/src/components/form/Slider/Slider.jsx?raw';
import sliderVue from '../../vue/src/components/form/Slider/Slider.vue?raw';
import rateHtml from '../../html/src/components/form/Rate/Rate.html?raw';
import rateGulp from '../../gulp/src/components/form/Rate/rate.njk?raw';
import rateReact from '../../react/src/components/form/Rate/Rate.jsx?raw';
import rateVue from '../../vue/src/components/form/Rate/Rate.vue?raw';
import uploadHtml from '../../html/src/components/form/Upload/Upload.html?raw';
import uploadGulp from '../../gulp/src/components/form/Upload/upload.njk?raw';
import uploadReact from '../../react/src/components/form/Upload/Upload.jsx?raw';
import uploadVue from '../../vue/src/components/form/Upload/Upload.vue?raw';
import datePickerHtml from '../../html/src/components/form/DatePicker/DatePicker.html?raw';
import datePickerGulp from '../../gulp/src/components/form/DatePicker/date-picker.njk?raw';
import datePickerReact from '../../react/src/components/form/DatePicker/DatePicker.jsx?raw';
import datePickerVue from '../../vue/src/components/form/DatePicker/DatePicker.vue?raw';

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
export const checkboxComponentExamples = componentExamples('Checkbox', 'checkbox', {
  html: checkboxHtml,
  gulp: checkboxGulp,
  react: checkboxReact,
  vue: checkboxVue,
});
export const radioComponentExamples = componentExamples('Radio', 'radio', {
  html: radioHtml,
  gulp: radioGulp,
  react: radioReact,
  vue: radioVue,
});
export const switchComponentExamples = componentExamples('Switch', 'switch', {
  html: switchHtml,
  gulp: switchGulp,
  react: switchReact,
  vue: switchVue,
});
export const sliderComponentExamples = componentExamples('Slider', 'slider', {
  html: sliderHtml,
  gulp: sliderGulp,
  react: sliderReact,
  vue: sliderVue,
});
export const rateComponentExamples = componentExamples('Rate', 'rate', {
  html: rateHtml,
  gulp: rateGulp,
  react: rateReact,
  vue: rateVue,
});
export const uploadComponentExamples = componentExamples('Upload', 'upload', {
  html: uploadHtml,
  gulp: uploadGulp,
  react: uploadReact,
  vue: uploadVue,
});
export const datePickerComponentExamples = componentExamples('DatePicker', 'date-picker', {
  html: datePickerHtml,
  gulp: datePickerGulp,
  react: datePickerReact,
  vue: datePickerVue,
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

function checkboxControl(
  id: string,
  label: string,
  options: { classes?: string; attributes?: string; labelEnd?: boolean; button?: boolean } = {},
) {
  const rootClass = [
    'checkbox',
    options.labelEnd && 'checkbox_label-end',
    options.button && 'checkbox_button',
    options.classes,
  ]
    .filter(Boolean)
    .join(' ');
  const input = `<xf:checkbox id="${id}Input" class="checkbox_input" ref="data:${id}Value" trueValue="Y" falseValue="N"${options.attributes ? ` ${options.attributes}` : ''}></xf:checkbox>`;
  const box = `<w2:textbox id="${id}Box" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>`;
  const control = `<w2:group id="${id}Control" class="checkbox_control">
  ${input}
  ${box}
</w2:group>`;
  const labelEl = `<w2:textbox id="${id}Label" class="checkbox_label" tagname="label" for="${id}Input" label="${label}"></w2:textbox>`;
  if (options.button) {
    return `<w2:group id="${id}" class="${rootClass}" tagname="label">
  ${input}
  ${labelEl}
</w2:group>`;
  }
  if (options.labelEnd) {
    return `<w2:group id="${id}" class="${rootClass}">
  ${labelEl}
  ${control.replaceAll('\n', '\n  ')}
</w2:group>`;
  }
  return `<w2:group id="${id}" class="${rootClass}">
  ${control.replaceAll('\n', '\n  ')}
  ${labelEl}
</w2:group>`;
}

function checkboxWebSquare(key: string) {
  switch (key) {
    case 'standalone':
      return `<w2:group id="standaloneControl" class="checkbox_control" tagname="label" aria-label="항목 선택">
  <xf:checkbox id="standaloneInput" class="checkbox_input" ref="data:standaloneValue" trueValue="Y" falseValue="N"></xf:checkbox>
  <w2:textbox id="standaloneBox" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>
</w2:group>`;
    case 'labelEnd':
      return checkboxControl('labelEnd', '푸시 알림 받기', {
        labelEnd: true,
        attributes: 'checked="true"',
      });
    case 'size':
      return [
        checkboxControl('sizeSm', 'Small — checkbox_sm', {
          classes: 'checkbox_sm',
          attributes: 'checked="true"',
        }),
        checkboxControl('sizeMd', 'Medium — 기본', { attributes: 'checked="true"' }),
        checkboxControl('sizeLg', 'Large — checkbox_lg', {
          classes: 'checkbox_lg',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'width':
      return [
        checkboxControl('widthInline', '기본 — 인라인 너비', { attributes: 'checked="true"' }),
        checkboxControl('widthBlock', 'checkbox_block — 전체 너비', {
          classes: 'checkbox_block',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'color':
      return [
        checkboxControl('colorPrimary', 'Primary', {
          classes: 'color_primary',
          attributes: 'checked="true"',
        }),
        checkboxControl('colorSuccess', 'Success', {
          classes: 'color_success',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'state':
      return [
        checkboxControl('stateOff', '미선택'),
        checkboxControl('stateOn', '선택됨', { attributes: 'checked="true"' }),
        checkboxControl('stateDisabled', '비활성', { attributes: 'disabled="true"' }),
      ].join('\n\n');
    case 'group':
    case 'buttonType':
      return `<w2:group id="${key}Group" class="checkbox_group checkbox_group_horizontal" tagname="fieldset">
  <w2:textbox id="${key}Legend" class="checkbox_group-legend" tagname="legend" label="관심 분야"></w2:textbox>
  ${checkboxControl(`${key}A`, '디자인', { button: key === 'buttonType', attributes: 'checked="true"' }).replaceAll('\n', '\n  ')}
  ${checkboxControl(`${key}B`, '개발', { button: key === 'buttonType' }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'cardType':
      return `<w2:group id="cardTypeGroup" class="checkbox_group" tagname="fieldset">
  <w2:textbox id="cardTypeLegend" class="checkbox_group-legend" tagname="legend" label="요금제 선택 (다중)"></w2:textbox>
  <w2:group id="cardTypeCard" class="checkbox_card">
    <w2:group id="cardTypeHeader" class="card_header">
      <w2:textbox id="cardTypeTitle" class="card_title" tagname="h3" label="Basic"></w2:textbox>
      <w2:group id="cardTypeExtra" class="card_extra">
        <w2:group id="cardTypeControl" class="checkbox_control" tagname="label">
          <xf:checkbox id="cardTypeInput" class="checkbox_input" ref="data:cardTypeValue" trueValue="Y" falseValue="N" checked="true"></xf:checkbox>
          <w2:textbox id="cardTypeBox" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>
        </w2:group>
      </w2:group>
    </w2:group>
    <w2:textbox id="cardTypeBody" class="card_body" label="개인 프로젝트에 적합합니다."></w2:textbox>
  </w2:group>
</w2:group>`;
    case 'form':
      return `<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="수신 동의"></w2:textbox>
    <w2:group id="formGroup" class="checkbox_group" tagname="fieldset">
      ${checkboxControl('formMarketing', '마케팅 정보 수신', { attributes: 'checked="true"' }).replaceAll('\n', '\n      ')}
      ${checkboxControl('formNews', '뉴스레터 구독').replaceAll('\n', '\n      ')}
    </w2:group>
  </w2:group>
</w2:group>`;
    case 'type':
      return [
        checkboxControl('typeBasic', '기본 — checkbox', { attributes: 'checked="true"' }),
        checkboxControl('typeLabelEnd', '레이블 뒤 — checkbox_label-end', { labelEnd: true }),
        checkboxControl('typeButton', '버튼형', { button: true, attributes: 'checked="true"' }),
      ].join('\n\n');
    case 'basic':
    default:
      return `<w2:group id="basicField" class="form_field">
  <w2:textbox id="basicFieldLabel" class="form_field-label" label="알림 설정"></w2:textbox>
  <w2:group id="basicGroup" class="checkbox_group" tagname="fieldset">
    ${checkboxControl('basicEmail', '이메일 알림', { attributes: 'checked="true"' }).replaceAll('\n', '\n    ')}
    ${checkboxControl('basicPush', '푸시 알림').replaceAll('\n', '\n    ')}
  </w2:group>
</w2:group>`;
  }
}

function radioControl(
  id: string,
  label: string,
  options: {
    classes?: string;
    attributes?: string;
    labelEnd?: boolean;
    button?: boolean;
    name?: string;
    value?: string;
  } = {},
) {
  const rootClass = [
    'radio',
    options.labelEnd && 'radio_label-end',
    options.button && 'radio_button',
    options.classes,
  ]
    .filter(Boolean)
    .join(' ');
  const name = options.name ?? `${id}Name`;
  const value = options.value ?? id;
  const input = `<xf:input id="${id}Input" class="radio_input" type="radio" name="${name}" ref="data:${name}" value="${value}"${options.attributes ? ` ${options.attributes}` : ''}></xf:input>`;
  const box = `<w2:textbox id="${id}Box" class="radio_box" aria-hidden="true" label=""></w2:textbox>`;
  const control = `<w2:group id="${id}Control" class="radio_control">
  ${input}
  ${box}
</w2:group>`;
  const labelEl = `<w2:textbox id="${id}Label" class="radio_label" tagname="label" for="${id}Input" label="${label}"></w2:textbox>`;
  if (options.button) {
    return `<w2:group id="${id}" class="${rootClass}" tagname="label">
  ${input}
  ${labelEl}
</w2:group>`;
  }
  if (options.labelEnd) {
    return `<w2:group id="${id}" class="${rootClass}">
  ${labelEl}
  ${control.replaceAll('\n', '\n  ')}
</w2:group>`;
  }
  return `<w2:group id="${id}" class="${rootClass}">
  ${control.replaceAll('\n', '\n  ')}
  ${labelEl}
</w2:group>`;
}

function radioWebSquare(key: string) {
  switch (key) {
    case 'standalone':
      return `<w2:group id="standaloneGroup" class="radio_group radio_group_horizontal">
  <w2:group id="standaloneA" class="radio_control" tagname="label" aria-label="항목 선택">
    <xf:input id="standaloneAInput" class="radio_input" type="radio" name="standalone" ref="data:standaloneValue" value="a"></xf:input>
    <w2:textbox id="standaloneABox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
  <w2:group id="standaloneB" class="radio_control" tagname="label" aria-label="선택됨">
    <xf:input id="standaloneBInput" class="radio_input" type="radio" name="standalone" ref="data:standaloneValue" value="b" checked="true"></xf:input>
    <w2:textbox id="standaloneBBox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
</w2:group>`;
    case 'labelEnd':
      return radioControl('labelEnd', '신용카드', {
        labelEnd: true,
        name: 'labelEndPay',
        value: 'card',
        attributes: 'checked="true"',
      });
    case 'size':
      return `<w2:group id="sizeGroup" class="radio_group radio_group_horizontal">
  ${radioControl('sizeSm', 'Small — radio_sm', { classes: 'radio_sm', name: 'size', value: 'sm', attributes: 'checked="true"' }).replaceAll('\n', '\n  ')}
  ${radioControl('sizeMd', 'Medium — 기본', { name: 'size', value: 'md' }).replaceAll('\n', '\n  ')}
  ${radioControl('sizeLg', 'Large — radio_lg', { classes: 'radio_lg', name: 'size', value: 'lg' }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'width':
      return [
        radioControl('widthInline', '기본 — 인라인 너비', {
          name: 'widthInline',
          attributes: 'checked="true"',
        }),
        radioControl('widthBlock', 'radio_block — 전체 너비', {
          classes: 'radio_block',
          name: 'widthBlock',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'color':
      return radioControl('colorPrimary', 'Primary', {
        classes: 'color_primary',
        name: 'colorPrimary',
        attributes: 'checked="true"',
      });
    case 'state':
      return [
        radioControl('stateOff', '미선택', { name: 'state', value: 'off' }),
        radioControl('stateOn', '선택됨', {
          name: 'state',
          value: 'on',
          attributes: 'checked="true"',
        }),
        radioControl('stateDisabled', '비활성', {
          name: 'stateDisabled',
          attributes: 'disabled="true"',
        }),
      ].join('\n\n');
    case 'group':
    case 'buttonType':
      return `<w2:group id="${key}Group" class="radio_group${key === 'buttonType' ? ' radio_group_horizontal' : ''}" tagname="fieldset">
  <w2:textbox id="${key}Legend" class="radio_group-legend" tagname="legend" label="${key === 'buttonType' ? '필터' : '배송 방법'}"></w2:textbox>
  ${radioControl(`${key}A`, key === 'buttonType' ? '전체' : '일반 배송', { button: key === 'buttonType', name: key, value: 'a', attributes: 'checked="true"' }).replaceAll('\n', '\n  ')}
  ${radioControl(`${key}B`, key === 'buttonType' ? '진행 중' : '빠른 배송', { button: key === 'buttonType', name: key, value: 'b' }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'cardType':
      return `<w2:group id="cardTypeGroup" class="radio_group" tagname="fieldset">
  <w2:textbox id="cardTypeLegend" class="radio_group-legend" tagname="legend" label="요금제 선택"></w2:textbox>
  <w2:group id="cardTypeCard" class="radio_card">
    <w2:textbox id="cardTypeTitle" class="card_title" tagname="h3" label="Basic"></w2:textbox>
    <w2:group id="cardTypeControl" class="radio_control" tagname="label">
      <xf:input id="cardTypeInput" class="radio_input" type="radio" name="cardType" ref="data:cardTypeValue" value="basic" checked="true"></xf:input>
      <w2:textbox id="cardTypeBox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
    </w2:group>
    <w2:textbox id="cardTypeBody" class="card_body" label="개인 프로젝트에 적합합니다."></w2:textbox>
  </w2:group>
</w2:group>`;
    case 'form':
      return `<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="수신 채널"></w2:textbox>
    <w2:group id="formGroup" class="radio_group" tagname="fieldset">
      ${radioControl('formEmail', '이메일', { name: 'formChannel', value: 'email', attributes: 'checked="true"' }).replaceAll('\n', '\n      ')}
      ${radioControl('formSms', 'SMS', { name: 'formChannel', value: 'sms' }).replaceAll('\n', '\n      ')}
    </w2:group>
  </w2:group>
</w2:group>`;
    case 'type':
      return [
        radioControl('typeBasic', '기본 — radio', {
          name: 'typeBasic',
          attributes: 'checked="true"',
        }),
        radioControl('typeLabelEnd', '레이블 뒤 — radio_label-end', {
          labelEnd: true,
          name: 'typeLabelEnd',
        }),
        radioControl('typeButton', '버튼형', {
          button: true,
          name: 'typeButton',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'basic':
    default:
      return `<w2:group id="basicField" class="form_field">
  <w2:textbox id="basicFieldLabel" class="form_field-label" label="결제 수단"></w2:textbox>
  <w2:group id="basicGroup" class="radio_group" tagname="fieldset">
    ${radioControl('basicCard', '신용카드', { name: 'basicPay', value: 'card', attributes: 'checked="true"' }).replaceAll('\n', '\n    ')}
    ${radioControl('basicBank', '계좌이체', { name: 'basicPay', value: 'bank' }).replaceAll('\n', '\n    ')}
  </w2:group>
</w2:group>`;
  }
}

function switchControl(
  id: string,
  label: string,
  options: { classes?: string; attributes?: string; labelEnd?: boolean; ariaLabel?: string } = {},
) {
  const rootClass = ['switch', options.labelEnd && 'switch_label-end', options.classes]
    .filter(Boolean)
    .join(' ');
  const input = `<xf:checkbox id="${id}Input" class="switch_input" ref="data:${id}Value" trueValue="Y" falseValue="N" role="switch"${options.attributes ? ` ${options.attributes}` : ''}></xf:checkbox>`;
  const track = `<w2:group id="${id}Track" class="switch_track" aria-hidden="true">
  <w2:textbox id="${id}Thumb" class="switch_thumb" label=""></w2:textbox>
</w2:group>`;
  const control = `<w2:group id="${id}Control" class="switch_control">
  ${input}
  ${track.replaceAll('\n', '\n  ')}
</w2:group>`;
  const labelEl = label
    ? `<w2:textbox id="${id}Label" class="switch_label" label="${label}"></w2:textbox>`
    : '';
  const aria = options.ariaLabel ? ` aria-label="${options.ariaLabel}"` : '';
  if (!label) {
    return `<w2:group id="${id}" class="${rootClass}" tagname="label"${aria}>
  ${control.replaceAll('\n', '\n  ')}
</w2:group>`;
  }
  if (options.labelEnd) {
    return `<w2:group id="${id}" class="${rootClass}" tagname="label"${aria}>
  ${labelEl}
  ${control.replaceAll('\n', '\n  ')}
</w2:group>`;
  }
  return `<w2:group id="${id}" class="${rootClass}" tagname="label"${aria}>
  ${control.replaceAll('\n', '\n  ')}
  ${labelEl}
</w2:group>`;
}

function switchWebSquare(key: string) {
  switch (key) {
    case 'standalone':
      return [
        switchControl('standaloneOff', '', { ariaLabel: '기능 켜기' }),
        switchControl('standaloneOn', '', {
          ariaLabel: '기능 끄기',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'labelEnd':
      return switchControl('labelEnd', '푸시 알림 받기', {
        labelEnd: true,
        attributes: 'checked="true"',
      });
    case 'size':
      return [
        switchControl('sizeSm', 'Small — switch_sm', {
          labelEnd: true,
          classes: 'switch_sm',
          attributes: 'checked="true"',
        }),
        switchControl('sizeMd', 'Medium — 기본', { labelEnd: true, attributes: 'checked="true"' }),
        switchControl('sizeLg', 'Large — switch_lg', {
          labelEnd: true,
          classes: 'switch_lg',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'width':
      return [
        switchControl('widthInline', '기본 — 인라인 너비', {
          labelEnd: true,
          attributes: 'checked="true"',
        }),
        switchControl('widthBlock', 'switch_block — 전체 너비', {
          labelEnd: true,
          classes: 'switch_block',
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'color':
      return switchControl('colorPrimary', 'Primary', {
        labelEnd: true,
        classes: 'color_primary',
        attributes: 'checked="true"',
      });
    case 'state':
      return [
        switchControl('stateOff', '꺼짐', { labelEnd: true }),
        switchControl('stateOn', '켜짐', { labelEnd: true, attributes: 'checked="true"' }),
        switchControl('stateDisabled', '비활성', { labelEnd: true, attributes: 'disabled="true"' }),
      ].join('\n\n');
    case 'group':
      return `<w2:group id="groupRoot" class="switch_group switch_group_block" tagname="fieldset">
  <w2:textbox id="groupLegend" class="switch_group-legend" tagname="legend" label="개인정보 설정"></w2:textbox>
  ${switchControl('groupProfile', '프로필 공개', { labelEnd: true, attributes: 'checked="true"' }).replaceAll('\n', '\n  ')}
  ${switchControl('groupActivity', '활동 기록 표시', { labelEnd: true }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'form':
      return `<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="알림"></w2:textbox>
    <w2:group id="formGroup" class="switch_group switch_group_block" tagname="fieldset">
      ${switchControl('formEmail', '이메일 알림', { labelEnd: true, attributes: 'checked="true"' }).replaceAll('\n', '\n      ')}
      ${switchControl('formPush', '푸시 알림', { labelEnd: true }).replaceAll('\n', '\n      ')}
    </w2:group>
  </w2:group>
</w2:group>`;
    case 'type':
      return [
        switchControl('typeBasic', '기본 — switch', { attributes: 'checked="true"' }),
        switchControl('typeLabelEnd', '레이블 뒤 — switch_label-end', {
          labelEnd: true,
          attributes: 'checked="true"',
        }),
      ].join('\n\n');
    case 'basic':
    default:
      return [
        switchControl('basicDark', '다크 모드', { attributes: 'checked="true"' }),
        switchControl('basicAuto', '자동 저장'),
      ].join('\n\n');
  }
}

export const checkboxFrameworkExamples = withWebSquare(
  checkboxBaseExamples,
  'Checkbox',
  checkboxWebSquare,
);
export const radioFrameworkExamples = withWebSquare(radioBaseExamples, 'Radio', radioWebSquare);
export const switchFrameworkExamples = withWebSquare(switchBaseExamples, 'Switch', switchWebSquare);

function sliderControl(
  id: string,
  label: string,
  options: {
    classes?: string;
    attributes?: string;
    value?: string;
    showValue?: boolean;
    stepper?: boolean;
    hint?: string;
  } = {},
) {
  const value = options.value ?? '50';
  const rootClass = ['slider', options.classes].filter(Boolean).join(' ');
  const header = `<w2:group id="${id}Header" class="slider_header">
  <w2:textbox id="${id}Label" class="slider_label" tagname="label" for="${id}Input" label="${label}"></w2:textbox>
  ${options.showValue === false ? '' : `<w2:textbox id="${id}Value" class="slider_value" label="${value}"></w2:textbox>`}
</w2:group>`;
  const input = `<xf:input id="${id}Input" class="slider_input" type="range" ref="data:${id}Value" min="0" max="100" step="1" value="${value}"${options.attributes ? ` ${options.attributes}` : ''} ev:onchange="scwin.slider_onchange"></xf:input>`;
  const control = options.stepper
    ? `<w2:group id="${id}Control" class="slider_control slider_stepper">
  <xf:trigger id="${id}Decrease" type="button" class="slider_step" ev:onclick="scwin.slider_decrease">
    <xf:label><![CDATA[값 줄이기]]></xf:label>
  </xf:trigger>
  ${input}
  <xf:trigger id="${id}Increase" type="button" class="slider_step" ev:onclick="scwin.slider_increase">
    <xf:label><![CDATA[값 늘리기]]></xf:label>
  </xf:trigger>
</w2:group>`
    : `<w2:group id="${id}Control" class="slider_control">
  ${input}
</w2:group>`;
  const hint = options.hint
    ? `\n  <w2:textbox id="${id}Hint" class="slider_hint" tagname="p" label="${options.hint}"></w2:textbox>`
    : '';
  return `<w2:group id="${id}" class="${rootClass}">
  ${header.replaceAll('\n', '\n  ')}
  ${control.replaceAll('\n', '\n  ')}${hint}
</w2:group>`;
}

function sliderWebSquare(key: string) {
  switch (key) {
    case 'type':
      return [
        sliderControl('typeBasic', '기본 — slider', { value: '40' }),
        sliderControl('typeStepper', '스텝 버튼 — slider_stepper', {
          value: '40',
          stepper: true,
          classes: 'slider_fit',
        }),
      ].join('\n\n');
    case 'label':
      return sliderControl('labelShow', '볼륨', {
        value: '70',
        hint: '현재 값과 단위를 함께 표시합니다.',
      });
    case 'size':
      return [
        sliderControl('sizeSm', 'Small', { classes: 'slider_sm', value: '30' }),
        sliderControl('sizeMd', 'Medium', { value: '50' }),
        sliderControl('sizeLg', 'Large', { classes: 'slider_lg', value: '70' }),
      ].join('\n\n');
    case 'width':
      return [
        sliderControl('widthFit', '제한 너비', { classes: 'slider_fit', value: '45' }),
        sliderControl('widthBlock', '전체 너비', { classes: 'slider_block', value: '45' }),
      ].join('\n\n');
    case 'step':
      return sliderControl('stepTicks', '간격 · 눈금', {
        value: '40',
        attributes: 'step="10"',
        hint: 'step과 눈금으로 선택 단위를 안내합니다.',
      });
    case 'stepper':
      return sliderControl('stepperAlways', '스텝 버튼', {
        value: '55',
        stepper: true,
        classes: 'slider_stepper_always slider_fit',
      });
    case 'color':
      return sliderControl('colorPrimary', 'Primary', {
        classes: 'color_primary slider_fit',
        value: '60',
      });
    case 'state':
      return [
        sliderControl('stateDefault', '기본', { value: '50' }),
        sliderControl('stateDisabled', '비활성', {
          value: '50',
          attributes: 'disabled="true"',
          classes: 'is-disabled',
        }),
      ].join('\n\n');
    case 'form':
      return `<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    ${sliderControl('formVolume', '음량', { value: '65', classes: 'slider_fit' }).replaceAll('\n', '\n    ')}
  </w2:group>
</w2:group>`;
    case 'basic':
    default:
      return sliderControl('basic', '밝기', {
        value: '50',
        classes: 'slider_fit',
        hint: '0에서 100까지 조절합니다.',
      });
  }
}

function rateControl(
  id: string,
  legend: string,
  options: {
    classes?: string;
    value?: string;
    count?: number;
    clearable?: boolean;
    attributes?: string;
  } = {},
) {
  const count = options.count ?? 5;
  const value = options.value ?? '';
  const rootClass = [
    'rate',
    options.clearable && 'rate_clearable',
    options.classes,
  ]
    .filter(Boolean)
    .join(' ');
  const stars = Array.from({ length: count }, (_, index) => {
    const star = index + 1;
    const checked = value && Number(value) >= star ? ' checked="true"' : '';
    return `<w2:group id="${id}Star${star}" class="rate_star${Number(value) >= star ? ' is-filled' : ''}" tagname="label">
  <xf:input id="${id}Input${star}" class="rate_input" type="radio" name="${id}" ref="data:${id}Value" value="${star}"${checked}${options.attributes ? ` ${options.attributes}` : ''}></xf:input>
  <w2:textbox id="${id}Graphic${star}" class="rate_star-graphic" aria-hidden="true" label="★"></w2:textbox>
  <w2:textbox id="${id}Label${star}" class="rate_star-label" label="${star}점"></w2:textbox>
</w2:group>`;
  }).join('\n');
  const clear = options.clearable
    ? `\n  <xf:trigger id="${id}Clear" type="button" class="rate_clear" ev:onclick="scwin.rate_clear">
    <xf:label><![CDATA[선택 초기화]]></xf:label>
  </xf:trigger>`
    : '';
  return `<w2:group id="${id}" class="${rootClass}" tagname="fieldset">
  <w2:textbox id="${id}Legend" class="rate_legend" tagname="legend" label="${legend}"></w2:textbox>
  <w2:group id="${id}Control" class="rate_control">
    <w2:group id="${id}Stars" class="rate_stars">
      ${stars.replaceAll('\n', '\n      ')}
    </w2:group>${clear}
  </w2:group>
</w2:group>`;
}

function rateWebSquare(key: string) {
  switch (key) {
    case 'type':
      return [
        rateControl('typeBasic', '기본 — rate', { value: '3' }),
        rateControl('typeHalf', '반점 — rate_allow-half', {
          value: '3.5',
          classes: 'rate_allow-half',
        }),
      ].join('\n\n');
    case 'size':
      return [
        rateControl('sizeSm', 'Small', { classes: 'rate_sm', value: '4' }),
        rateControl('sizeMd', 'Medium', { value: '4' }),
        rateControl('sizeLg', 'Large', { classes: 'rate_lg', value: '4' }),
      ].join('\n\n');
    case 'color':
      return rateControl('colorWarning', '만족도', {
        classes: 'color_warning',
        value: '4',
      });
    case 'half':
      return rateControl('half', '반점 선택', {
        classes: 'rate_allow-half',
        value: '3.5',
      });
    case 'clear':
      return rateControl('clear', '선택 해제', { value: '3', clearable: true });
    case 'readonly':
      return rateControl('readonly', '평균 평점', {
        value: '4',
        classes: 'is-readonly',
        attributes: 'disabled="true"',
      });
    case 'state':
      return [
        rateControl('stateDefault', '기본', { value: '3' }),
        rateControl('stateDisabled', '비활성', {
          value: '3',
          attributes: 'disabled="true"',
          classes: 'is-disabled',
        }),
      ].join('\n\n');
    case 'form':
      return `<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    ${rateControl('formRate', '서비스 만족도', { value: '4' }).replaceAll('\n', '\n    ')}
  </w2:group>
</w2:group>`;
    case 'basic':
    default:
      return rateControl('basic', '별점', { value: '3' });
  }
}

function uploadControl(
  id: string,
  options: {
    classes?: string;
    variant?: 'button' | 'drag' | 'list' | 'picture-card' | 'avatar';
    attributes?: string;
    title?: string;
    desc?: string;
    hint?: string;
  } = {},
) {
  const variant = options.variant ?? 'button';
  const rootClass = ['upload', options.classes].filter(Boolean).join(' ');
  const input = `<xf:input id="${id}Input" class="upload_input" type="file" ref="data:${id}Files"${options.attributes ? ` ${options.attributes}` : ''}></xf:input>`;
  if (variant === 'drag') {
    return `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}Dropzone" class="upload_dropzone" tagname="label" for="${id}Input">
    ${input}
    <w2:textbox id="${id}Title" class="upload_dropzone-title" label="${options.title ?? '파일을 끌어다 놓거나 선택하세요'}"></w2:textbox>
    <w2:textbox id="${id}Desc" class="upload_dropzone-desc" label="${options.desc ?? 'PNG, JPG, PDF'}"></w2:textbox>
  </w2:group>
  <w2:group id="${id}List" class="upload_list" tagname="ul"></w2:group>
</w2:group>`;
  }
  if (variant === 'list') {
    return `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}List" class="upload_list" tagname="ul">
    <w2:textbox id="${id}Item" class="upload_item is-uploading" tagname="li" label="프로젝트_제안서_v2.pdf · 60%"></w2:textbox>
  </w2:group>
</w2:group>`;
  }
  if (variant === 'picture-card') {
    return `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}Cards" class="upload_cards">
    <w2:group id="${id}Trigger" class="upload_card upload_card-trigger" tagname="label" for="${id}Input">
      ${input}
      <w2:textbox id="${id}Label" label="업로드"></w2:textbox>
    </w2:group>
  </w2:group>
</w2:group>`;
  }
  if (variant === 'avatar') {
    return `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}Avatar" class="upload_avatar" tagname="label" for="${id}Input">
    ${input}
    <w2:textbox id="${id}Preview" class="avatar avatar_xl" label="프로필"></w2:textbox>
  </w2:group>
</w2:group>`;
  }
  return `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}Trigger" class="upload_trigger" tagname="label" for="${id}Input">
    ${input}
    <xf:trigger id="${id}Button" type="button" class="btn btn_filled color_primary">
      <xf:label><![CDATA[파일 선택]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:textbox id="${id}Hint" class="upload_hint" tagname="p" label="${options.hint ?? 'PDF 또는 문서 파일을 첨부해 주세요.'}"></w2:textbox>
  <w2:group id="${id}List" class="upload_list" tagname="ul"></w2:group>
</w2:group>`;
}

function uploadWebSquare(key: string) {
  switch (key) {
    case 'dropzone':
      return uploadControl('dropzone', {
        variant: 'drag',
        classes: 'upload_fit',
        attributes: 'accept="image/png,image/jpeg,.pdf" multiple="true"',
        desc: 'PNG, JPG, PDF · 파일당 최대 5MB',
      });
    case 'list':
      return uploadControl('list', { variant: 'list', classes: 'upload_fit' });
    case 'cards':
      return uploadControl('cards', {
        variant: 'picture-card',
        attributes: 'accept="image/*" multiple="true"',
      });
    case 'avatar':
      return uploadControl('avatar', {
        variant: 'avatar',
        attributes: 'accept="image/*"',
      });
    case 'size':
      return [
        uploadControl('sizeSm', { variant: 'drag', classes: 'upload_sm', title: 'SM 업로드' }),
        uploadControl('sizeMd', { variant: 'drag', title: 'MD 업로드' }),
        uploadControl('sizeLg', { variant: 'drag', classes: 'upload_lg', title: 'LG 업로드' }),
      ].join('\n\n');
    case 'width':
      return [
        uploadControl('widthDefault', { variant: 'drag', title: '기본 너비 업로드' }),
        uploadControl('widthFit', {
          variant: 'drag',
          classes: 'upload_fit',
          title: '제한 너비 업로드',
        }),
      ].join('\n\n');
    case 'state':
      return [
        uploadControl('stateDisabled', {
          classes: 'is-disabled',
          attributes: 'disabled="true"',
        }),
        uploadControl('stateError', {
          variant: 'drag',
          classes: 'is-error',
          title: '업로드 오류',
        }),
      ].join('\n\n');
    case 'example':
      return `<w2:group id="exampleRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="exampleField" class="form_field">
    <w2:textbox id="exampleLabel" class="form_field-label" label="첨부 파일"></w2:textbox>
    ${uploadControl('example', {
      attributes: 'accept=".pdf,.doc,.docx" multiple="true"',
      hint: 'PDF·DOC · 최대 3개 · 10MB',
    }).replaceAll('\n', '\n    ')}
  </w2:group>
</w2:group>`;
    case 'basic':
    default:
      return uploadControl('basic');
  }
}

function datePickerControl(
  id: string,
  label: string,
  options: {
    classes?: string;
    attributes?: string;
    value?: string;
    hint?: string;
    error?: string;
  } = {},
) {
  const rootClass = ['date_picker', options.classes].filter(Boolean).join(' ');
  const valueAttr = options.value ? ` value="${options.value}"` : '';
  const control = `<w2:group id="${id}" class="${rootClass}">
  <w2:group id="${id}Trigger" class="date_picker_trigger">
    <w2:inputCalendar id="${id}Input" class="date_picker_input" ref="data:${id}Value" placeholder="날짜를 선택하세요"${valueAttr}${options.attributes ? ` ${options.attributes}` : ''} calendarValueType="yearMonthDate"></w2:inputCalendar>
    <xf:trigger id="${id}Btn" type="button" class="date_picker_btn" ev:onclick="scwin.datePicker_open">
      <xf:label><![CDATA[달력 열기]]></xf:label>
    </xf:trigger>
  </w2:group>
</w2:group>`;
  const message = options.error
    ? `<w2:textbox id="${id}Error" class="form_field-error" tagname="p" role="alert" label="${options.error}"></w2:textbox>`
    : options.hint
      ? `<w2:textbox id="${id}Hint" class="form_field-hint" tagname="p" label="${options.hint}"></w2:textbox>`
      : '';
  return `<w2:group id="${id}Field" class="form_field">
  <w2:textbox id="${id}Label" class="form_field-label" tagname="label" for="${id}Input" label="${label}"></w2:textbox>
  ${control.replaceAll('\n', '\n  ')}
  ${message}
</w2:group>`;
}

function datePickerWebSquare(key: string) {
  switch (key) {
    case 'size':
      return [
        datePickerControl('sizeSm', 'Small', {
          classes: 'date_picker_sm',
          value: '2024-06-15',
        }),
        datePickerControl('sizeMd', 'Medium', { value: '2024-06-15' }),
        datePickerControl('sizeLg', 'Large', {
          classes: 'date_picker_lg',
          value: '2024-06-15',
        }),
      ].join('\n\n');
    case 'width':
      return [
        datePickerControl('widthBlock', '전체 너비', {
          classes: 'date_picker_block',
          value: '2024-06-15',
        }),
        datePickerControl('widthFit', '제한 너비', {
          classes: 'date_picker_fit',
          value: '2024-06-15',
        }),
      ].join('\n\n');
    case 'limits':
      return datePickerControl('limits', '프로모션 기간', {
        value: '2024-06-15',
        attributes: 'minYear="2024" maxYear="2024"',
        hint: '2024-06-10 ~ 2024-06-20',
      });
    case 'state':
      return [
        datePickerControl('stateDisabled', '비활성', {
          classes: 'is-disabled',
          value: '2024-06-15',
          attributes: 'disabled="true"',
        }),
        datePickerControl('stateError', '에러', {
          classes: 'is-error',
          error: '날짜를 선택해 주세요.',
        }),
      ].join('\n\n');
    case 'example':
      return `<w2:group id="exampleRoot" class="form form_vertical form_fit" tagname="form">
  ${datePickerControl('visit', '방문일', {
    classes: 'is-error',
    error: '방문일을 선택해 주세요.',
  }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'basic':
    default:
      return datePickerControl('basic', '예약일', {
        classes: 'date_picker_fit',
        value: '2024-06-15',
        hint: '달력에서 날짜를 선택해 주세요.',
      });
  }
}

export const sliderFrameworkExamples = withWebSquare(sliderBaseExamples, 'Slider', sliderWebSquare);
export const rateFrameworkExamples = withWebSquare(rateBaseExamples, 'Rate', rateWebSquare);
export const uploadFrameworkExamples = withWebSquare(uploadBaseExamples, 'Upload', uploadWebSquare);
export const datePickerFrameworkExamples = withWebSquare(
  datePickerBaseExamples,
  'DatePicker',
  datePickerWebSquare,
);
