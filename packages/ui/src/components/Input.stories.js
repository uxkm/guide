import Input from './Input.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Alert from './Alert.vue';
import Button from './Button.vue';
import FormLayout from './FormLayout.vue';
import Icon from './Icon.vue';
import Select from './Select.vue';
import {
  inputClassColumns,
  inputClasses,
  inputEventColumns,
  inputEvents,
  inputPropColumns,
  inputProps,
  inputSlotColumns,
  inputSlots,
  inputTokenColumns,
  inputTokens,
} from '@doc-data/input-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: inputPropColumns, rows: inputProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: inputSlotColumns, rows: inputSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · Events",
    tables: [
      { columns: inputEventColumns, rows: inputEvents, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: inputClassColumns, rows: inputClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: inputTokenColumns, rows: inputTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/Input',
  id: 'components-input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    error: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    placeholder: { control: 'text', type: { name: 'string', summary: "string" }},
    type: { control: 'select', options: ["text","email","password","number","tel","url","search"], type: { name: 'enum', summary: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'" } },
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    modelValue: { control: 'text', type: { name: 'string', summary: "string" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    type: "text",
    block: false,
    modelValue: "",
  },
  render: (_args, context) => ({
    components: { Input },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Input v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "레이블과 힌트 텍스트가 포함된 폼 필드입니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-name\">이름</label>\n    <div class=\"input_clearable\">\n      <Input id=\"input-name\" placeholder=\"이름을 입력하세요\" />\n      <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only hidden>\n        <template #icon-before>\n          <Icon name=\"close\" />\n        </template>\n      </Button>\n    </div>\n    <p class=\"form_field-hint\">2~20자 이내로 입력해 주세요.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  placeholder: "입력하세요",
  type: "text",
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon, Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-name">이름</label>
        <div class="input_clearable">
        <Input id="input-name" placeholder="이름을 입력하세요" />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only hidden>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </div>
        <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
        </div>`,
  })),
};


export const Standalone = {
  name: "단독 사용",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "form_field 래퍼 없이 `input_field`로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 `label.form_field-label` + `for`를, 아이콘만 있는 검색창·툴바 등에는 `label.input_group`으로 input을 감싸고 `input_group-label_hidden`으로 이름을 제공합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"input_field\">\n    <label class=\"form_field-label\" for=\"input-standalone-placeholder\">검색어</label>\n    <div class=\"input_clearable\">\n      <Input id=\"input-standalone-placeholder\" placeholder=\"플레이스홀더\" />\n      <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only hidden>\n        <template #icon-before>\n          <Icon name=\"close\" />\n        </template>\n      </Button>\n    </div>\n  </div>\n  <div class=\"input_field\">\n    <label class=\"form_field-label\" for=\"input-standalone-value\">닉네임</label>\n    <div class=\"input_clearable\">\n      <Input id=\"input-standalone-value\" model-value=\"입력된 값\" />\n      <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only>\n        <template #icon-before>\n          <Icon name=\"close\" />\n        </template>\n      </Button>\n    </div>\n  </div>\n  <div class=\"input_field\">\n    <label class=\"form_field-label\" for=\"input-standalone-disabled\">코드</label>\n    <Input id=\"input-standalone-disabled\" placeholder=\"비활성\" disabled />\n  </div>\n  <Input type=\"search\" placeholder=\"검색어를 입력하세요\" aria-label=\"검색\">\n    <template #prefix>\n      <Icon name=\"search\" size=\"sm\" />\n    </template>\n  </Input>\n  <p class=\"form_field-hint\">아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에 보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.</p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon, Input },
    template: `        <div class="input_field">
        <label class="form_field-label" for="input-standalone-placeholder">검색어</label>
        <div class="input_clearable">
        <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only hidden>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </div>
        </div>
        <div class="input_field">
        <label class="form_field-label" for="input-standalone-value">닉네임</label>
        <div class="input_clearable">
        <Input id="input-standalone-value" model-value="입력된 값" />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </div>
        </div>
        <div class="input_field">
        <label class="form_field-label" for="input-standalone-disabled">코드</label>
        <Input id="input-standalone-disabled" placeholder="비활성" disabled />
        </div>
        <Input type="search" placeholder="검색어를 입력하세요" aria-label="검색">
        <template #prefix>
        <Icon name="search" size="sm" />
        </template>
        </Input>
        <p class="form_field-hint">아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에 보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.</p>`,
  })),
};


export const Type = {
  name: "입력 타입",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class=&quot;input&quot;은 모든 타입에 공통으로 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-text\">텍스트</label>\n    <Input id=\"input-type-text\" placeholder=\"일반 텍스트\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-password\">비밀번호</label>\n    <Input id=\"input-type-password\" type=\"password\" placeholder=\"8자 이상\" autocomplete=\"new-password\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-email\">이메일</label>\n    <Input id=\"input-type-email\" type=\"email\" placeholder=\"name@example.com\" autocomplete=\"email\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-tel\">전화번호</label>\n    <Input id=\"input-type-tel\" type=\"tel\" placeholder=\"010-0000-0000\" autocomplete=\"tel\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-url\">URL</label>\n    <Input id=\"input-type-url\" type=\"url\" placeholder=\"https://example.com\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-search\">검색</label>\n    <Input id=\"input-type-search\" type=\"search\" placeholder=\"키워드 검색\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-number\">숫자</label>\n    <Input id=\"input-type-number\" type=\"number\" placeholder=\"0\" min=\"0\" max=\"100\" step=\"1\" />\n    <p class=\"form_field-hint\">0~100 사이 정수</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-date\">날짜</label>\n    <Input id=\"input-type-date\" type=\"date\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-type-time\">시간</label>\n    <Input id=\"input-type-time\" type=\"time\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-type-text">텍스트</label>
        <Input id="input-type-text" placeholder="일반 텍스트" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-password">비밀번호</label>
        <Input id="input-type-password" type="password" placeholder="8자 이상" autocomplete="new-password" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-email">이메일</label>
        <Input id="input-type-email" type="email" placeholder="name@example.com" autocomplete="email" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-tel">전화번호</label>
        <Input id="input-type-tel" type="tel" placeholder="010-0000-0000" autocomplete="tel" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-url">URL</label>
        <Input id="input-type-url" type="url" placeholder="https://example.com" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-search">검색</label>
        <Input id="input-type-search" type="search" placeholder="키워드 검색" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-number">숫자</label>
        <Input id="input-type-number" type="number" placeholder="0" min="0" max="100" step="1" />
        <p class="form_field-hint">0~100 사이 정수</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-date">날짜</label>
        <Input id="input-type-date" type="date" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-type-time">시간</label>
        <Input id="input-type-time" type="time" />
        </div>`,
  })),
};


export const Kind = {
  name: "입력 종류",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Select from '@uxkm/ui/components/Select.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-card-1\">카드번호</label>\n    <div class=\"input_split\" role=\"group\" aria-labelledby=\"input-kind-card-1\" data-input-split data-input-numeric>\n      <Input id=\"input-kind-card-1\" inputmode=\"numeric\" maxlength=\"4\" autocomplete=\"cc-number\" aria-label=\"카드번호 1~4자리\" placeholder=\"0000\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input inputmode=\"numeric\" maxlength=\"4\" autocomplete=\"cc-number\" aria-label=\"카드번호 5~8자리\" placeholder=\"0000\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input type=\"password\" inputmode=\"numeric\" maxlength=\"4\" autocomplete=\"cc-number\" aria-label=\"카드번호 9~12자리\" placeholder=\"0000\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input type=\"password\" inputmode=\"numeric\" maxlength=\"4\" autocomplete=\"cc-number\" aria-label=\"카드번호 13~16자리\" placeholder=\"0000\" />\n    </div>\n    <p class=\"form_field-hint\">뒤 8자리는 마스킹 처리할 수 있습니다.</p>\n  </div>\n  <div class=\"input_row\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"input-kind-exp-mm\">유효기간</label>\n      <div class=\"input_split\" role=\"group\" aria-label=\"카드 유효기간\" data-input-split data-input-numeric>\n        <Input id=\"input-kind-exp-mm\" inputmode=\"numeric\" maxlength=\"2\" autocomplete=\"cc-exp-month\" aria-label=\"월(MM)\" placeholder=\"MM\" />\n        <span class=\"input_split_sep\" aria-hidden=\"true\">/</span>\n        <Input inputmode=\"numeric\" maxlength=\"2\" autocomplete=\"cc-exp-year\" aria-label=\"년(YY)\" placeholder=\"YY\" />\n      </div>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"input-kind-cvc\">CVC</label>\n      <Input id=\"input-kind-cvc\" type=\"password\" inputmode=\"numeric\" maxlength=\"3\" autocomplete=\"cc-csc\" placeholder=\"000\" aria-describedby=\"input-kind-cvc-hint\" />\n      <p class=\"form_field-hint\" id=\"input-kind-cvc-hint\">카드 뒷면 3자리</p>\n    </div>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" id=\"input-kind-otp-label\">인증번호 (OTP)</label>\n    <div class=\"input_otp\" role=\"group\" aria-labelledby=\"input-kind-otp-label\" data-input-otp>\n      <Input inputmode=\"numeric\" maxlength=\"1\" autocomplete=\"one-time-code\" aria-label=\"인증번호 1자리\" />\n      <Input inputmode=\"numeric\" maxlength=\"1\" aria-label=\"인증번호 2자리\" />\n      <Input inputmode=\"numeric\" maxlength=\"1\" aria-label=\"인증번호 3자리\" />\n      <Input inputmode=\"numeric\" maxlength=\"1\" aria-label=\"인증번호 4자리\" />\n      <Input inputmode=\"numeric\" maxlength=\"1\" aria-label=\"인증번호 5자리\" />\n      <Input inputmode=\"numeric\" maxlength=\"1\" aria-label=\"인증번호 6자리\" />\n    </div>\n    <p class=\"form_field-hint\">문자 메시지로 받은 6자리 번호를 입력하세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-phone\">휴대폰 번호</label>\n    <div class=\"input_group\">\n      <span class=\"input_group-addon\">+82</span>\n      <Input id=\"input-kind-phone\" type=\"tel\" placeholder=\"10-0000-0000\" autocomplete=\"tel\" />\n      <Button variant=\"outline\" color=\"primary\" size=\"sm\" type=\"button\" label=\"인증요청\" />\n    </div>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-sms-code\">휴대폰 인증번호</label>\n    <div class=\"input_group\">\n      <Input id=\"input-kind-sms-code\" inputmode=\"numeric\" maxlength=\"6\" autocomplete=\"one-time-code\" placeholder=\"6자리 인증번호\" aria-describedby=\"input-kind-sms-hint\" />\n      <span class=\"input_group-addon\" aria-hidden=\"true\">03:00</span>\n      <Button variant=\"outline\" color=\"primary\" size=\"sm\" type=\"button\" label=\"확인\" />\n    </div>\n    <p class=\"form_field-hint\" id=\"input-kind-sms-hint\">인증번호가 오지 않으면 재요청해 주세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-rrn-1\">주민등록번호</label>\n    <div class=\"input_split\" role=\"group\" aria-labelledby=\"input-kind-rrn-1\" data-input-split data-input-numeric>\n      <Input id=\"input-kind-rrn-1\" inputmode=\"numeric\" maxlength=\"6\" aria-label=\"주민등록번호 앞 6자리\" placeholder=\"000000\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input type=\"password\" inputmode=\"numeric\" maxlength=\"7\" aria-label=\"주민등록번호 뒤 7자리\" placeholder=\"0000000\" />\n    </div>\n    <p class=\"form_field-hint\">뒷자리는 보안을 위해 마스킹합니다.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-biz-1\">사업자등록번호</label>\n    <div class=\"input_split\" role=\"group\" aria-labelledby=\"input-kind-biz-1\" data-input-split data-input-numeric>\n      <Input id=\"input-kind-biz-1\" inputmode=\"numeric\" maxlength=\"3\" aria-label=\"사업자등록번호 앞 3자리\" placeholder=\"000\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input inputmode=\"numeric\" maxlength=\"2\" aria-label=\"사업자등록번호 중간 2자리\" placeholder=\"00\" />\n      <span class=\"input_split_sep\" aria-hidden=\"true\">-</span>\n      <Input inputmode=\"numeric\" maxlength=\"5\" aria-label=\"사업자등록번호 뒤 5자리\" placeholder=\"00000\" />\n    </div>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-account-bank\">계좌번호</label>\n    <div class=\"input_group\">\n      <Select id=\"input-kind-account-bank\" aria-label=\"은행 선택\">\n        <option>은행 선택</option>\n        <option>국민은행</option>\n        <option>신한은행</option>\n        <option>우리은행</option>\n      </Select>\n      <Input inputmode=\"numeric\" placeholder=\"계좌번호 (- 없이)\" aria-label=\"계좌번호\" />\n    </div>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-zip\">우편번호</label>\n    <div class=\"input_group\">\n      <Input id=\"input-kind-zip\" inputmode=\"numeric\" maxlength=\"5\" placeholder=\"00000\" autocomplete=\"postal-code\" aria-label=\"우편번호\" />\n      <Button variant=\"outline\" size=\"sm\" type=\"button\" label=\"주소 검색\" />\n    </div>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-kind-amount\">결제 금액</label>\n    <Input id=\"input-kind-amount\" inputmode=\"numeric\" placeholder=\"0\" aria-label=\"결제 금액\">\n    <template #prefix>₩</template>\n    <template #suffix>원</template>\n  </Input>\n  <p class=\"form_field-hint\">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Input, Select },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-kind-card-1">카드번호</label>
        <div class="input_split" role="group" aria-labelledby="input-kind-card-1" data-input-split data-input-numeric>
        <Input id="input-kind-card-1" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 1~4자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 5~8자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 9~12자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 13~16자리" placeholder="0000" />
        </div>
        <p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
        </div>
        <div class="input_row">
        <div class="form_field">
        <label class="form_field-label" for="input-kind-exp-mm">유효기간</label>
        <div class="input_split" role="group" aria-label="카드 유효기간" data-input-split data-input-numeric>
        <Input id="input-kind-exp-mm" inputmode="numeric" maxlength="2" autocomplete="cc-exp-month" aria-label="월(MM)" placeholder="MM" />
        <span class="input_split_sep" aria-hidden="true">/</span>
        <Input inputmode="numeric" maxlength="2" autocomplete="cc-exp-year" aria-label="년(YY)" placeholder="YY" />
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-cvc">CVC</label>
        <Input id="input-kind-cvc" type="password" inputmode="numeric" maxlength="3" autocomplete="cc-csc" placeholder="000" aria-describedby="input-kind-cvc-hint" />
        <p class="form_field-hint" id="input-kind-cvc-hint">카드 뒷면 3자리</p>
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" id="input-kind-otp-label">인증번호 (OTP)</label>
        <div class="input_otp" role="group" aria-labelledby="input-kind-otp-label" data-input-otp>
        <Input inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="인증번호 1자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 2자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 3자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 4자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 5자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 6자리" />
        </div>
        <p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-phone">휴대폰 번호</label>
        <div class="input_group">
        <span class="input_group-addon">+82</span>
        <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autocomplete="tel" />
        <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-sms-code">휴대폰 인증번호</label>
        <div class="input_group">
        <Input id="input-kind-sms-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="6자리 인증번호" aria-describedby="input-kind-sms-hint" />
        <span class="input_group-addon" aria-hidden="true">03:00</span>
        <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
        </div>
        <p class="form_field-hint" id="input-kind-sms-hint">인증번호가 오지 않으면 재요청해 주세요.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-rrn-1">주민등록번호</label>
        <div class="input_split" role="group" aria-labelledby="input-kind-rrn-1" data-input-split data-input-numeric>
        <Input id="input-kind-rrn-1" inputmode="numeric" maxlength="6" aria-label="주민등록번호 앞 6자리" placeholder="000000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="7" aria-label="주민등록번호 뒤 7자리" placeholder="0000000" />
        </div>
        <p class="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-biz-1">사업자등록번호</label>
        <div class="input_split" role="group" aria-labelledby="input-kind-biz-1" data-input-split data-input-numeric>
        <Input id="input-kind-biz-1" inputmode="numeric" maxlength="3" aria-label="사업자등록번호 앞 3자리" placeholder="000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="2" aria-label="사업자등록번호 중간 2자리" placeholder="00" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="5" aria-label="사업자등록번호 뒤 5자리" placeholder="00000" />
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-account-bank">계좌번호</label>
        <div class="input_group">
        <Select id="input-kind-account-bank" aria-label="은행 선택">
        <option>은행 선택</option>
        <option>국민은행</option>
        <option>신한은행</option>
        <option>우리은행</option>
        </Select>
        <Input inputmode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-zip">우편번호</label>
        <div class="input_group">
        <Input id="input-kind-zip" inputmode="numeric" maxlength="5" placeholder="00000" autocomplete="postal-code" aria-label="우편번호" />
        <Button variant="outline" size="sm" type="button" label="주소 검색" />
        </div>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-kind-amount">결제 금액</label>
        <Input id="input-kind-amount" inputmode="numeric" placeholder="0" aria-label="결제 금액">
        <template #prefix>₩</template>
        <template #suffix>원</template>
        </Input>
        <p class="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
        </div>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-size-sm\">Small</label>\n    <Input id=\"input-size-sm\" size=\"sm\" placeholder=\"input_sm\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-size-md\">Medium</label>\n    <Input id=\"input-size-md\" placeholder=\"기본 크기\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-size-lg\">Large</label>\n    <Input id=\"input-size-lg\" size=\"lg\" placeholder=\"input_lg\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-size-sm">Small</label>
        <Input id="input-size-sm" size="sm" placeholder="input_sm" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-size-md">Medium</label>
        <Input id="input-size-md" placeholder="기본 크기" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-size-lg">Large</label>
        <Input id="input-size-lg" size="lg" placeholder="input_lg" />
        </div>`,
  })),
};


export const Width = {
  name: "너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-width-full-sm\">전체 너비 — Small</label>\n    <Input id=\"input-width-full-sm\" size=\"sm\" placeholder=\"width: 100%\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-width-full-md\">전체 너비 — Medium</label>\n    <Input id=\"input-width-full-md\" placeholder=\"width: 100%\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-width-full-lg\">전체 너비 — Large</label>\n    <Input id=\"input-width-full-lg\" size=\"lg\" placeholder=\"width: 100%\" />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-sm\">제한 너비 — Small</label>\n    <Input id=\"input-width-fit-sm\" size=\"sm\" placeholder=\"form_field_fit — 최대 320px\" />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-md\">제한 너비 — Medium</label>\n    <Input id=\"input-width-fit-md\" placeholder=\"form_field_fit — 최대 320px\" />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-lg\">제한 너비 — Large</label>\n    <Input id=\"input-width-fit-lg\" size=\"lg\" placeholder=\"form_field_fit — 최대 320px\" />\n  </div>\n  <div class=\"input_field input_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-standalone-sm\">input_field_fit — Small</label>\n    <Input id=\"input-width-fit-standalone-sm\" size=\"sm\" placeholder=\"최대 320px\" />\n  </div>\n  <div class=\"input_field input_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-standalone-md\">input_field_fit — Medium</label>\n    <Input id=\"input-width-fit-standalone-md\" placeholder=\"최대 320px\" />\n  </div>\n  <div class=\"input_field input_field_fit\">\n    <label class=\"form_field-label\" for=\"input-width-fit-standalone-lg\">input_field_fit — Large</label>\n    <Input id=\"input-width-fit-standalone-lg\" size=\"lg\" placeholder=\"최대 320px\" />\n  </div>\n  <FormLayout layout=\"vertical\" fit>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"input-width-form-fit\">form_fit</label>\n      <Input id=\"input-width-form-fit\" placeholder=\"폼 내 필드·그룹 최대 320px\" />\n    </div>\n  </FormLayout>\n  <Input class=\"input_fit\" size=\"sm\" placeholder=\"input_group input_fit — Small\" aria-label=\"아이디\">\n  <template #prefix>@</template>\n  </Input>\n  <Input class=\"input_fit\" placeholder=\"input_group input_fit — Medium\" aria-label=\"아이디\">\n  <template #prefix>@</template>\n  </Input>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-width-full-sm">전체 너비 — Small</label>
        <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-width-full-md">전체 너비 — Medium</label>
        <Input id="input-width-full-md" placeholder="width: 100%" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-width-full-lg">전체 너비 — Large</label>
        <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
        </div>
        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-width-fit-sm">제한 너비 — Small</label>
        <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
        </div>
        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-width-fit-md">제한 너비 — Medium</label>
        <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
        </div>
        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-width-fit-lg">제한 너비 — Large</label>
        <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
        </div>
        <div class="input_field input_field_fit">
        <label class="form_field-label" for="input-width-fit-standalone-sm">input_field_fit — Small</label>
        <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
        </div>
        <div class="input_field input_field_fit">
        <label class="form_field-label" for="input-width-fit-standalone-md">input_field_fit — Medium</label>
        <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
        </div>
        <div class="input_field input_field_fit">
        <label class="form_field-label" for="input-width-fit-standalone-lg">input_field_fit — Large</label>
        <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
        </div>
        <FormLayout layout="vertical" fit>
        <div class="form_field">
        <label class="form_field-label" for="input-width-form-fit">form_fit</label>
        <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
        </div>
        </FormLayout>
        <Input class="input_fit" size="sm" placeholder="input_group input_fit — Small" aria-label="아이디">
        <template #prefix>@</template>
        </Input>
        <Input class="input_fit" placeholder="input_group input_fit — Medium" aria-label="아이디">
        <template #prefix>@</template>
        </Input>`,
  })),
};


export const Group = {
  name: "Input Group",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <Input placeholder=\"example.com\" aria-label=\"도메인\">\n  <template #prefix>https://</template>\n  </Input>\n  <Input placeholder=\"username\" aria-label=\"사용자명\">\n  <template #prefix>@</template>\n  </Input>\n  <Input type=\"number\" placeholder=\"금액\" aria-label=\"금액\">\n  <template #suffix>원</template>\n  </Input>\n  <Input type=\"number\" placeholder=\"0\" aria-label=\"결제 금액\">\n  <template #prefix>₩</template>\n  <template #suffix>KRW</template>\n  </Input>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Input },
    template: `        <Input placeholder="example.com" aria-label="도메인">
        <template #prefix>https://</template>
        </Input>
        <Input placeholder="username" aria-label="사용자명">
        <template #prefix>@</template>
        </Input>
        <Input type="number" placeholder="금액" aria-label="금액">
        <template #suffix>원</template>
        </Input>
        <Input type="number" placeholder="0" aria-label="결제 금액">
        <template #prefix>₩</template>
        <template #suffix>KRW</template>
        </Input>`,
  })),
};


export const Required = {
  name: "필수 필드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "required 속성과 form_field-required로 필수 입력을 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-required-email\">\n      이메일<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n    </label>\n    <Input id=\"input-required-email\" type=\"email\" placeholder=\"name@example.com\" required aria-required=\"true\" />\n    <p class=\"form_field-hint\">업무용 이메일을 입력해 주세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-required-name\">\n      이름<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n    </label>\n    <Input id=\"input-required-name\" placeholder=\"홍길동\" required aria-required=\"true\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-required-email">
        이메일<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input id="input-required-email" type="email" placeholder="name@example.com" required aria-required="true" />
        <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-required-name">
        이름<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
        </div>`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-state-default\">기본</label>\n    <Input id=\"input-state-default\" placeholder=\"입력 가능\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-state-disabled\">비활성</label>\n    <Input id=\"input-state-disabled\" model-value=\"수정할 수 없음\" disabled />\n    <p class=\"form_field-hint\">disabled 속성으로 편집을 막습니다.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-state-error\">에러</label>\n    <Input id=\"input-state-error\" type=\"email\" error model-value=\"invalid-email\" aria-describedby=\"input-state-error-msg\" />\n    <p class=\"form_field-error\" id=\"input-state-error-msg\" role=\"alert\">올바른 이메일 형식이 아닙니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Input },
    template: `        <div class="form_field">
        <label class="form_field-label" for="input-state-default">기본</label>
        <Input id="input-state-default" placeholder="입력 가능" />
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-state-disabled">비활성</label>
        <Input id="input-state-disabled" model-value="수정할 수 없음" disabled />
        <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-state-error">에러</label>
        <Input id="input-state-error" type="email" error model-value="invalid-email" aria-describedby="input-state-error-msg" />
        <p class="form_field-error" id="input-state-error-msg" role="alert">올바른 이메일 형식이 아닙니다.</p>
        </div>`,
  })),
};


export const Clearable = {
  name: "입력 삭제",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`input_clearable` 래퍼로 값이 있을 때 우측에 지우기 버튼을 표시합니다. `readonly` · `disabled` 상태에서는 버튼이 나타나지 않습니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-clear-text\">텍스트</label>\n    <div class=\"input_clearable\">\n      <Input id=\"input-clear-text\" placeholder=\"입력 후 우측 X 버튼 확인\" />\n      <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only hidden>\n        <template #icon-before>\n          <Icon name=\"close\" />\n        </template>\n      </Button>\n    </div>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-clear-search\">검색</label>\n    <div class=\"input_group\">\n      <span class=\"input_group-addon\" aria-hidden=\"true\">\n        <Icon name=\"search\" size=\"sm\" />\n      </span>\n      <span class=\"input_clearable\">\n        <Input id=\"input-clear-search\" type=\"search\" placeholder=\"검색어 입력\" />\n        <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only hidden>\n          <template #icon-before>\n            <Icon name=\"close\" />\n          </template>\n        </Button>\n      </span>\n    </div>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"input-clear-readonly\">읽기 전용 (삭제 버튼 없음)</label>\n    <div class=\"input_clearable\">\n      <Input id=\"input-clear-readonly\" model-value=\"수정 불가\" readonly />\n      <Button class=\"input_clear\" variant=\"text\" color=\"muted\" :ripple=\"false\" aria-label=\"입력 지우기\" icon-only hidden>\n        <template #icon-before>\n          <Icon name=\"close\" />\n        </template>\n      </Button>\n    </div>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon, Input },
    template: `        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-clear-text">텍스트</label>
        <div class="input_clearable">
        <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only hidden>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </div>
        </div>
        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-clear-search">검색</label>
        <div class="input_group">
        <span class="input_group-addon" aria-hidden="true">
        <Icon name="search" size="sm" />
        </span>
        <span class="input_clearable">
        <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only hidden>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </span>
        </div>
        </div>
        <div class="form_field form_field_fit">
        <label class="form_field-label" for="input-clear-readonly">읽기 전용 (삭제 버튼 없음)</label>
        <div class="input_clearable">
        <Input id="input-clear-readonly" model-value="수정 불가" readonly />
        <Button class="input_clear" variant="text" color="muted" :ripple="false" aria-label="입력 지우기" icon-only hidden>
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        </div>
        </div>`,
  })),
};


export const Example = {
  name: "조합 예시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role=&quot;alert&quot; · role=&quot;status&quot;로 스크린 리더에 피드백을 전달합니다.",
      },
      source: {
        code: "<script setup>\nimport Alert from '@uxkm/ui/components/Alert.vue';\nimport Button from '@uxkm/ui/components/Button.vue';\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\" compact novalidate aria-labelledby=\"example-heading\">\n    <Alert\n    id=\"input-ex-form-error\"\n    color=\"danger\"\n    title=\"입력 내용을 확인해 주세요\"\n    description=\"비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.\"\n    />\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"input-ex-id\">\n        아이디<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n      </label>\n      <Input\n      id=\"input-ex-id\"\n      size=\"sm\"\n      class=\"is-success\"\n      model-value=\"uxkm_user\"\n      required\n      aria-required=\"true\"\n      autocomplete=\"username\"\n      aria-invalid=\"false\"\n      aria-describedby=\"input-ex-id-hint input-ex-id-success\"\n      >\n      <template #prefix>@</template>\n    </Input>\n    <p class=\"form_field-hint\" id=\"input-ex-id-hint\">영문·숫자 4~16자</p>\n    <p class=\"form_field-success\" id=\"input-ex-id-success\" role=\"status\">사용 가능한 아이디입니다.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-ex-pw\">\n      비밀번호<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n    </label>\n    <Input\n    id=\"input-ex-pw\"\n    type=\"password\"\n    size=\"sm\"\n    error\n    model-value=\"1234\"\n    required\n    aria-required=\"true\"\n    autocomplete=\"current-password\"\n    aria-invalid=\"true\"\n    aria-describedby=\"input-ex-pw-error\"\n    />\n    <p class=\"form_field-error\" id=\"input-ex-pw-error\" role=\"alert\">8자 이상, 영문·숫자·특수문자를 포함해 주세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"input-ex-email\">이메일</label>\n    <Input\n    id=\"input-ex-email\"\n    type=\"email\"\n    size=\"sm\"\n    error\n    model-value=\"user@\"\n    aria-invalid=\"true\"\n    aria-describedby=\"input-ex-email-error\"\n    autocomplete=\"email\"\n    />\n    <p class=\"form_field-error\" id=\"input-ex-email-error\" role=\"alert\">올바른 이메일 주소를 입력해 주세요. (예: name@example.com)</p>\n  </div>\n  <div class=\"form_actions\">\n    <Button variant=\"filled\" color=\"primary\" size=\"sm\" type=\"submit\" label=\"로그인\" />\n    <Button variant=\"ghost\" size=\"sm\" type=\"button\" label=\"취소\" />\n  </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  type: "text",
  block: false,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Alert, Button, FormLayout, Input },
    template: `        <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
        <Alert
        id="input-ex-form-error"
        color="danger"
        title="입력 내용을 확인해 주세요"
        description="비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요."
        />
        <div class="form_field">
        <label class="form_field-label" for="input-ex-id">
        아이디<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input
        id="input-ex-id"
        size="sm"
        class="is-success"
        model-value="uxkm_user"
        required
        aria-required="true"
        autocomplete="username"
        aria-invalid="false"
        aria-describedby="input-ex-id-hint input-ex-id-success"
        >
        <template #prefix>@</template>
        </Input>
        <p class="form_field-hint" id="input-ex-id-hint">영문·숫자 4~16자</p>
        <p class="form_field-success" id="input-ex-id-success" role="status">사용 가능한 아이디입니다.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-ex-pw">
        비밀번호<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input
        id="input-ex-pw"
        type="password"
        size="sm"
        error
        model-value="1234"
        required
        aria-required="true"
        autocomplete="current-password"
        aria-invalid="true"
        aria-describedby="input-ex-pw-error"
        />
        <p class="form_field-error" id="input-ex-pw-error" role="alert">8자 이상, 영문·숫자·특수문자를 포함해 주세요.</p>
        </div>
        <div class="form_field">
        <label class="form_field-label" for="input-ex-email">이메일</label>
        <Input
        id="input-ex-email"
        type="email"
        size="sm"
        error
        model-value="user@"
        aria-invalid="true"
        aria-describedby="input-ex-email-error"
        autocomplete="email"
        />
        <p class="form_field-error" id="input-ex-email-error" role="alert">올바른 이메일 주소를 입력해 주세요. (예: name@example.com)</p>
        </div>
        <div class="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
        </div>
        </FormLayout>`,
  })),
};

