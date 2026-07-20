import Rate from './Rate.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import FormLayout from './FormLayout.vue';
import {
  rateClassColumns,
  rateClasses,
  rateEventColumns,
  rateEvents,
  ratePropColumns,
  rateProps,
  rateTokenColumns,
  rateTokens,
} from '@doc-data/rate-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: ratePropColumns, rows: rateProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Events",
    tables: [
      { columns: rateEventColumns, rows: rateEvents, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: rateClassColumns, rows: rateClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: rateTokenColumns, rows: rateTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/Rate',
  id: 'components-rate',
  component: Rate,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', type: { name: 'number', summary: "number" }},
    count: { control: 'number', type: { name: 'number', summary: "number" }},
    allowHalf: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    clearable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    readonly: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    legend: { control: 'text', type: { name: 'string', summary: "string" }},
    name: { control: 'text', type: { name: 'string', summary: "string" }},
    modelValue: { control: 'number', type: { name: 'number', summary: "number" }},
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
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search",
  },
  render: (_args, context) => ({
    components: { Rate },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Rate v-bind="args" />',
  }),
};


export const Type = {
  name: "유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate legend=\"legend — 상품 만족도\" :value=\"3\" name=\"rate-type-legend\" />\n  <Rate :value=\"4\" name=\"rate-type-labelledby\" legend=\"aria-labelledby — 서비스 평가\" />\n  <Rate legend=\"aria-label — 단독\" name=\"rate-type-aria\" aria-label=\"별점 5점 만점\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
      <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />`,
  })),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate legend=\"배송 속도\" :value=\"3\" name=\"rate-basic\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate legend="배송 속도" :value="3" name="rate-basic" />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate size=\"sm\" legend=\"Small — rate_sm\" :value=\"3\" name=\"rate-size-sm\" />\n  <Rate legend=\"Medium — 기본\" :value=\"3\" name=\"rate-size-md\" />\n  <Rate size=\"lg\" legend=\"Large — rate_lg\" :value=\"3\" name=\"rate-size-lg\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
      <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate class=\"color_primary\" legend=\"Primary\" :value=\"4\" name=\"rate-color-primary\" />\n  <Rate class=\"color_success\" legend=\"Success\" :value=\"5\" name=\"rate-color-success\" />\n  <Rate class=\"color_danger\" legend=\"Danger\" :value=\"2\" name=\"rate-color-danger\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
      <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
      <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />`,
  })),
};


export const Half = {
  name: "반별",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`와 `rate_star-half` 버튼을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate allow-half legend=\"정밀 평가 — rate_allow-half\" :value=\"3.5\" name=\"rate-half\" />\n  <p class=\"rate_hint\">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
      <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>`,
  })),
};


export const Clear = {
  name: "선택 해제",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`rate_clearable`을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate clearable legend=\"만족도 — rate_clearable\" :value=\"4\" name=\"rate-clear\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />`,
  })),
};


export const Readonly = {
  name: "읽기 전용",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate readonly allow-half :value=\"4.5\" />\n  <Rate readonly size=\"sm\" :value=\"2\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate readonly allow-half :value="4.5" />
      <Rate readonly size="sm" :value="2" />`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "비활성·오류(is-error) 상태를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <Rate disabled legend=\"비활성\" :value=\"3\" name=\"rate-state-disabled\" />\n  <Rate class=\"is-error\" legend=\"오류 — is-error\" name=\"rate-state-error\" />\n  <p class=\"form_field-error\">별점을 선택해 주세요.</p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { Rate },
    template: `<Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
      <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p class="form_field-error">별점을 선택해 주세요.</p>`,
  })),
};


export const Form = {
  name: "폼 레이아웃",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "form_field · form_vertical과 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Rate from '@uxkm/ui/components/Rate.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\" fit>\n    <div class=\"form_field\">\n      <span class=\"form_field-label\" id=\"rate-form-label\">상품 만족도</span>\n      <Rate name=\"rate-form\" aria-labelledby=\"rate-form-label\" />\n      <p class=\"form_field-hint\">1~5점 사이로 평가해 주세요.</p>\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  value: 1,
  count: 5,
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
  size: "md",
  legend: "값",
  name: "search",
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Rate },
    template: `<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="rate-form-label">상품 만족도</span>
          <Rate name="rate-form" aria-labelledby="rate-form-label" />
          <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
        </div>
      </FormLayout>`,
  })),
};

