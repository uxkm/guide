import FormLayout from './FormLayout.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Grid from './Grid.vue';
import Input from './Input.vue';
import Select from './Select.vue';
import Textarea from './Textarea.vue';
import {
  formLayoutClassColumns,
  formLayoutClasses,
  formLayoutPropColumns,
  formLayoutProps,
  formLayoutSlotColumns,
  formLayoutSlots,
  formLayoutTokenColumns,
  formLayoutTokens,
} from '@doc-data/form-layout-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: formLayoutPropColumns, rows: formLayoutProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: formLayoutSlotColumns, rows: formLayoutSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: formLayoutClassColumns, rows: formLayoutClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: formLayoutTokenColumns, rows: formLayoutTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/FormLayout',
  id: 'components-form-layout',
  component: FormLayout,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ["vertical","horizontal","inline"], type: { name: 'enum', summary: "'vertical' | 'horizontal' | 'inline'" }},
    fit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    compact: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    labelAlignStart: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    labelWidth: { control: 'select', options: ["sm","lg"], type: { name: 'enum', summary: "'sm' | 'lg'" }},
    tag: { control: 'select', options: ["form","div"], type: { name: 'enum', summary: "'form' | 'div'" } },
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
    layout: "vertical",
    fit: false,
    compact: false,
    labelAlignStart: false,
    labelWidth: "sm",
    tag: "form",
  },
  render: (_args, context) => ({
    components: { FormLayout, Input, Button },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<FormLayout v-bind="args" novalidate>
      <div class="form_field">
        <label class="form_field-label" for="pg-input">이름</label>
        <Input id="pg-input" placeholder="입력" />
      </div>
      <div class="form_actions">
        <Button type="submit" variant="filled" color="primary" label="제출" />
      </div>
    </FormLayout>`,
  }),
};


export const Vertical = {
  name: "세로",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Select from '@uxkm/ui/components/Select.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-name\">이름</label>\n      <Input id=\"fl-name\" placeholder=\"이름을 입력하세요\" />\n      <p class=\"form_field-hint\">2~20자 이내로 입력해 주세요.</p>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-email\">이메일</label>\n      <Input id=\"fl-email\" type=\"email\" placeholder=\"name@example.com\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-role\">역할</label>\n      <Select id=\"fl-role\" placeholder=\"선택하세요\">\n        <option value=\"\">선택하세요</option>\n        <option>관리자</option>\n        <option>편집자</option>\n        <option>뷰어</option>\n      </Select>\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Input, Select },
    template: `<FormLayout layout="vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-name">이름</label>
          <Input id="fl-name" placeholder="이름을 입력하세요" />
          <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-email">이메일</label>
          <Input id="fl-email" type="email" placeholder="name@example.com" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-role">역할</label>
          <Select id="fl-role" placeholder="선택하세요">
            <option value="">선택하세요</option>
            <option>관리자</option>
            <option>편집자</option>
            <option>뷰어</option>
          </Select>
        </div>
      </FormLayout>`,
  })),
};


export const Horizontal = {
  name: "가로",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"horizontal\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-h-name\">이름</label>\n      <Input id=\"fl-h-name\" placeholder=\"이름\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-h-email\">이메일</label>\n      <Input id=\"fl-h-email\" type=\"email\" placeholder=\"name@example.com\" />\n      <p class=\"form_field-hint\">업무용 이메일을 입력해 주세요.</p>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-h-bio\">소개</label>\n      <Textarea id=\"fl-h-bio\" placeholder=\"간단한 자기소개\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Input, Textarea },
    template: `<FormLayout layout="horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-h-name">이름</label>
          <Input id="fl-h-name" placeholder="이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-h-email">이메일</label>
          <Input id="fl-h-email" type="email" placeholder="name@example.com" />
          <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-h-bio">소개</label>
          <Textarea id="fl-h-bio" placeholder="간단한 자기소개" />
        </div>
      </FormLayout>`,
  })),
};


export const HorizontalAlign = {
  name: "가로 — 레이블 정렬·너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"horizontal\" label-align-start label-width=\"sm\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-hs-city\">도시</label>\n      <Input id=\"fl-hs-city\" placeholder=\"서울\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-hs-zip\">우편번호</label>\n      <Input id=\"fl-hs-zip\" placeholder=\"00000\" />\n    </div>\n  </FormLayout>\n  <FormLayout layout=\"horizontal\" label-width=\"lg\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-hl-company\">회사명</label>\n      <Input id=\"fl-hl-company\" placeholder=\"UXKM\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-hl-dept\">부서</label>\n      <Input id=\"fl-hl-dept\" placeholder=\"디자인팀\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Input },
    template: `<FormLayout layout="horizontal" label-align-start label-width="sm">
        <div class="form_field">
          <label class="form_field-label" for="fl-hs-city">도시</label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-hs-zip">우편번호</label>
          <Input id="fl-hs-zip" placeholder="00000" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" label-width="lg">
        <div class="form_field">
          <label class="form_field-label" for="fl-hl-company">회사명</label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-hl-dept">부서</label>
          <Input id="fl-hl-dept" placeholder="디자인팀" />
        </div>
      </FormLayout>`,
  })),
};


export const Inline = {
  name: "인라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Select from '@uxkm/ui/components/Select.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"inline\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-i-keyword\">키워드</label>\n      <Input id=\"fl-i-keyword\" type=\"search\" placeholder=\"검색어\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-i-status\">상태</label>\n      <Select id=\"fl-i-status\">\n        <option>전체</option>\n        <option>활성</option>\n        <option>비활성</option>\n      </Select>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-i-date\">기간</label>\n      <Input id=\"fl-i-date\" type=\"date\" />\n    </div>\n    <div class=\"form_actions\">\n      <Button variant=\"filled\" color=\"primary\" type=\"submit\" label=\"검색\" />\n      <Button variant=\"ghost\" type=\"reset\" label=\"초기화\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, FormLayout, Input, Select },
    template: `<FormLayout layout="inline">
        <div class="form_field">
          <label class="form_field-label" for="fl-i-keyword">키워드</label>
          <Input id="fl-i-keyword" type="search" placeholder="검색어" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-i-status">상태</label>
          <Select id="fl-i-status">
            <option>전체</option>
            <option>활성</option>
            <option>비활성</option>
          </Select>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-i-date">기간</label>
          <Input id="fl-i-date" type="date" />
        </div>
        <div class="form_actions">
          <Button variant="filled" color="primary" type="submit" label="검색" />
          <Button variant="ghost" type="reset" label="초기화" />
        </div>
      </FormLayout>`,
  })),
};


export const GridDemo = {
  name: "그리드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Grid from '@uxkm/ui/components/Grid.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\">\n    <Grid :item-span=\"6\">\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-g-first\">이름</label>\n        <Input id=\"fl-g-first\" placeholder=\"이름\" />\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-g-last\">성</label>\n        <Input id=\"fl-g-last\" placeholder=\"성\" />\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-g-phone\">전화번호</label>\n        <Input id=\"fl-g-phone\" type=\"tel\" placeholder=\"010-0000-0000\" />\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-g-mobile\">휴대폰</label>\n        <Input id=\"fl-g-mobile\" type=\"tel\" placeholder=\"010-0000-0000\" />\n      </div>\n      <div class=\"form_field grid_col-span-12\">\n        <label class=\"form_field-label\" for=\"fl-g-address\">주소</label>\n        <Input id=\"fl-g-address\" placeholder=\"도로명 주소\" />\n      </div>\n    </Grid>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Grid, Input },
    template: `<FormLayout layout="vertical">
        <Grid :item-span="6">
          <div class="form_field">
            <label class="form_field-label" for="fl-g-first">이름</label>
            <Input id="fl-g-first" placeholder="이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-g-last">성</label>
            <Input id="fl-g-last" placeholder="성" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-g-phone">전화번호</label>
            <Input id="fl-g-phone" type="tel" placeholder="010-0000-0000" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-g-mobile">휴대폰</label>
            <Input id="fl-g-mobile" type="tel" placeholder="010-0000-0000" />
          </div>
          <div class="form_field grid_col-span-12">
            <label class="form_field-label" for="fl-g-address">주소</label>
            <Input id="fl-g-address" placeholder="도로명 주소" />
          </div>
        </Grid>
      </FormLayout>`,
  })),
};


export const Width = {
  name: "너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-w-default\">기본 너비</label>\n      <Input id=\"fl-w-default\" placeholder=\"부모 100%\" />\n    </div>\n  </FormLayout>\n  <FormLayout layout=\"vertical\" fit>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-w-fit\">제한 너비</label>\n      <Input id=\"fl-w-fit\" placeholder=\"form_fit — 최대 320px\" />\n    </div>\n  </FormLayout>\n  <FormLayout layout=\"horizontal\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-w-h-full\">가로 레이아웃</label>\n      <Input id=\"fl-w-h-full\" placeholder=\"입력 열이 남은 공간을 채움\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Input },
    template: `<FormLayout layout="vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-default">기본 너비</label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div class="form_field">
          <label class="form_field-label" for="fl-w-fit">제한 너비</label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-h-full">가로 레이아웃</label>
          <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
        </div>
      </FormLayout>`,
  })),
};


export const Actions = {
  name: "액션 영역",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-a-title\">제목</label>\n      <Input id=\"fl-a-title\" placeholder=\"제목\" />\n    </div>\n    <div class=\"form_actions\">\n      <Button variant=\"filled\" color=\"primary\" type=\"submit\" label=\"저장\" />\n      <Button variant=\"ghost\" type=\"button\" label=\"취소\" />\n    </div>\n  </FormLayout>\n  <FormLayout layout=\"horizontal\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"fl-a2-title\">제목</label>\n      <Input id=\"fl-a2-title\" placeholder=\"제목\" />\n    </div>\n    <div class=\"form_actions\">\n      <Button variant=\"filled\" color=\"primary\" type=\"submit\" label=\"저장\" />\n      <Button variant=\"ghost\" type=\"button\" label=\"취소\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, FormLayout, Input },
    template: `<FormLayout layout="vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-a-title">제목</label>
          <Input id="fl-a-title" placeholder="제목" />
        </div>
        <div class="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-a2-title">제목</label>
          <Input id="fl-a2-title" placeholder="제목" />
        </div>
        <div class="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>`,
  })),
};


export const Example = {
  name: "전체 예시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Grid from '@uxkm/ui/components/Grid.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\" compact>\n    <Grid :item-span=\"6\">\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-ex-id\">아이디</label>\n        <Input id=\"fl-ex-id\" placeholder=\"아이디\" />\n        <p class=\"form_field-hint\">영문·숫자 4~16자</p>\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-ex-pw\">비밀번호</label>\n        <Input id=\"fl-ex-pw\" type=\"password\" placeholder=\"비밀번호\" />\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-ex-name\">이름</label>\n        <Input id=\"fl-ex-name\" placeholder=\"이름\" />\n      </div>\n      <div class=\"form_field\">\n        <label class=\"form_field-label\" for=\"fl-ex-email\">이메일</label>\n        <Input id=\"fl-ex-email\" type=\"email\" placeholder=\"name@example.com\" />\n      </div>\n      <div class=\"form_field grid_col-span-12\">\n        <label class=\"form_field-label\" for=\"fl-ex-memo\">메모</label>\n        <Textarea id=\"fl-ex-memo\" :rows=\"3\" placeholder=\"추가 정보\" />\n      </div>\n    </Grid>\n    <div class=\"form_actions\">\n      <Button variant=\"filled\" color=\"primary\" type=\"submit\" label=\"가입하기\" />\n      <Button variant=\"ghost\" type=\"button\" label=\"취소\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  layout: "vertical",
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: "sm",
  tag: "form"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, FormLayout, Grid, Input, Textarea },
    template: `<FormLayout layout="vertical" compact>
        <Grid :item-span="6">
          <div class="form_field">
            <label class="form_field-label" for="fl-ex-id">아이디</label>
            <Input id="fl-ex-id" placeholder="아이디" />
            <p class="form_field-hint">영문·숫자 4~16자</p>
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-ex-pw">비밀번호</label>
            <Input id="fl-ex-pw" type="password" placeholder="비밀번호" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-ex-name">이름</label>
            <Input id="fl-ex-name" placeholder="이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-ex-email">이메일</label>
            <Input id="fl-ex-email" type="email" placeholder="name@example.com" />
          </div>
          <div class="form_field grid_col-span-12">
            <label class="form_field-label" for="fl-ex-memo">메모</label>
            <Textarea id="fl-ex-memo" :rows="3" placeholder="추가 정보" />
          </div>
        </Grid>
        <div class="form_actions">
          <Button variant="filled" color="primary" type="submit" label="가입하기" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>`,
  })),
};

