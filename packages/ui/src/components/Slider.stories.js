import Slider from './Slider.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import FormLayout from './FormLayout.vue';
import {
  sliderClassColumns,
  sliderClasses,
  sliderEventColumns,
  sliderEvents,
  sliderPropColumns,
  sliderProps,
  sliderSlotColumns,
  sliderSlots,
  sliderTokenColumns,
  sliderTokens,
} from '@doc-data/slider-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: sliderPropColumns, rows: sliderProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: sliderSlotColumns, rows: sliderSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · Events",
    tables: [
      { columns: sliderEventColumns, rows: sliderEvents, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: sliderClassColumns, rows: sliderClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: sliderTokenColumns, rows: sliderTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/Slider',
  id: 'components-slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number', type: { name: 'number', summary: "number" }},
    max: { control: 'number', type: { name: 'number', summary: "number" }},
    value: { control: 'number', type: { name: 'number', summary: "number" }},
    step: { control: 'number', type: { name: 'number', summary: "number" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    vertical: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    showValue: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    stepper: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    stepperAlways: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    valueSuffix: { control: 'text', type: { name: 'string', summary: "string" }},
    hint: { control: 'text', type: { name: 'string', summary: "string" }},
    decreaseLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    increaseLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
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
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    vertical: false,
    label: "라벨",
    showValue: false,
    stepper: false,
    stepperAlways: false,
    valueSuffix: "값",
    hint: "값",
    decreaseLabel: "라벨",
    increaseLabel: "라벨",
    size: "md",
  },
  render: (_args, context) => ({
    components: { Slider },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Slider v-bind="args" />',
  }),
};


export const Type = {
  name: "유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 `label for` 또는 `aria-labelledby`를, 레이블 없이 아이콘·단독 UI만 있으면 `aria-label`을 사용합니다. 보조 설명은 `aria-describedby`, 스크린 리더용 값 표현은 `aria-valuetext`와 `output`을 조합합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider\n  id=\"slider-type-label\"\n  class=\"slider_fit\"\n  label=\"label + for — 기본\"\n  :value=\"40\"\n  show-value\n  />\n  <Slider\n  class=\"slider_fit\"\n  :value=\"55\"\n  aria-label=\"단독 슬라이더 — aria-label\"\n  />\n  <p class=\"slider_hint\">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>\n  <Slider\n  id=\"slider-type-labelledby\"\n  class=\"slider_fit\"\n  label=\"aria-labelledby — 외부 레이블\"\n  :value=\"16\"\n  :min=\"12\"\n  :max=\"24\"\n  :step=\"1\"\n  aria-describedby=\"slider-type-labelledby-hint\"\n  data-slider-valuetext-suffix=\"픽셀\"\n  show-value\n  />\n  <p class=\"slider_hint\" id=\"slider-type-labelledby-hint\">12~24px 사이 글자 크기</p>\n  <Slider\n  id=\"slider-type-describedby\"\n  class=\"slider_fit\"\n  label=\"aria-describedby — 보조 설명\"\n  :value=\"70\"\n  aria-describedby=\"slider-type-describedby-hint\"\n  data-slider-suffix=\"%\"\n  data-slider-valuetext-suffix=\"퍼센트\"\n  show-value\n  />\n  <p class=\"slider_hint\" id=\"slider-type-describedby-hint\">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>\n  <Slider\n  id=\"slider-type-valuetext\"\n  class=\"slider_fit\"\n  label=\"aria-valuetext — 읽기 쉬운 값\"\n  :value=\"3\"\n  :min=\"1\"\n  :max=\"5\"\n  :step=\"1\"\n  data-slider-valuetext-map=\"1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음\"\n  show-value\n  />\n  <p class=\"slider_hint\">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden=\"true\"</code>로 중복 낭독을 줄일 수 있습니다.</p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  label: "라벨",
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider
      id="slider-type-label"
      class="slider_fit"
      label="label + for — 기본"
      :value="40"
      show-value
      />
      <Slider
      class="slider_fit"
      :value="55"
      aria-label="단독 슬라이더 — aria-label"
      />
      <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
      <Slider
      id="slider-type-labelledby"
      class="slider_fit"
      label="aria-labelledby — 외부 레이블"
      :value="16"
      :min="12"
      :max="24"
      :step="1"
      aria-describedby="slider-type-labelledby-hint"
      data-slider-valuetext-suffix="픽셀"
      show-value
      />
      <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
      <Slider
      id="slider-type-describedby"
      class="slider_fit"
      label="aria-describedby — 보조 설명"
      :value="70"
      aria-describedby="slider-type-describedby-hint"
      data-slider-suffix="%"
      data-slider-valuetext-suffix="퍼센트"
      show-value
      />
      <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
      <Slider
      id="slider-type-valuetext"
      class="slider_fit"
      label="aria-valuetext — 읽기 쉬운 값"
      :value="3"
      :min="1"
      :max="5"
      :step="1"
      data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
      show-value
      />
      <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>`,
  })),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider class=\"slider_fit\" :value=\"30\" aria-label=\"기본 슬라이더\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />`,
  })),
};


export const Label = {
  name: "레이블 · 값 표시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider id=\"slider-volume\" class=\"slider_fit\" label=\"볼륨\" :value=\"60\" show-value />\n  <Slider\n  id=\"slider-brightness\"\n  class=\"slider_fit\"\n  label=\"밝기\"\n  :value=\"40\"\n  data-slider-suffix=\"%\"\n  show-value\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
      <Slider
      id="slider-brightness"
      class="slider_fit"
      label="밝기"
      :value="40"
      data-slider-suffix="%"
      show-value
      />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider id=\"slider-size-sm\" class=\"slider_sm slider_fit\" label=\"Small — slider_sm\" :value=\"30\" show-value />\n  <Slider id=\"slider-size-md\" class=\"slider_fit\" label=\"Medium — 기본\" :value=\"50\" show-value />\n  <Slider id=\"slider-size-lg\" class=\"slider_lg slider_fit\" label=\"Large — slider_lg\" :value=\"70\" show-value />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
      <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
      <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />`,
  })),
};


export const Width = {
  name: "너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider id=\"slider-width-fit\" class=\"slider_fit\" label=\"slider_fit — 최대 320px\" :value=\"45\" show-value />\n  <Slider\n  id=\"slider-width-block\"\n  class=\"slider_block\"\n  style=\"max-width: 480px;\"\n  label=\"slider_block — 전체 너비\"\n  :value=\"65\"\n  show-value\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
      <Slider
      id="slider-width-block"
      class="slider_block"
      style="max-width: 480px;"
      label="slider_block — 전체 너비"
      :value="65"
      show-value
      />`,
  })),
};


export const Step = {
  name: "간격 · 눈금",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider class=\"slider_fit\" label=\"step=10\" :value=\"50\" :step=\"10\" show-value />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />`,
  })),
};


export const Stepper = {
  name: "스텝 버튼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "모바일(768px 이하)에서 range 드래그가 어려운 경우 `slider_stepper`를 추가합니다. `slider_control` 안에 `slider_step-decrease` · `slider_input` · `slider_step-increase` 순으로 배치하며, 버튼 클릭 시 `step`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 `slider_stepper_always`를 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider\n  class=\"slider_fit\"\n  stepper\n  label=\"볼륨 — slider_stepper\"\n  :value=\"60\"\n  show-value\n  decrease-label=\"볼륨 줄이기\"\n  increase-label=\"볼륨 늘리기\"\n  hint=\"모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.\"\n  />\n  <Slider\n  class=\"slider_fit\"\n  stepper\n  stepper-always\n  label=\"밝기 — slider_stepper_always\"\n  :value=\"40\"\n  :step=\"5\"\n  value-suffix=\"%\"\n  show-value\n  decrease-label=\"밝기 줄이기\"\n  increase-label=\"밝기 늘리기\"\n  hint=\"모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.\"\n  />\n  <Slider\n  class=\"slider_fit\"\n  stepper\n  label=\"비활성\"\n  :value=\"30\"\n  show-value\n  disabled\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider
      class="slider_fit"
      stepper
      label="볼륨 — slider_stepper"
      :value="60"
      show-value
      decrease-label="볼륨 줄이기"
      increase-label="볼륨 늘리기"
      hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
      class="slider_fit"
      stepper
      stepper-always
      label="밝기 — slider_stepper_always"
      :value="40"
      :step="5"
      value-suffix="%"
      show-value
      decrease-label="밝기 줄이기"
      increase-label="밝기 늘리기"
      hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
      class="slider_fit"
      stepper
      label="비활성"
      :value="30"
      show-value
      disabled
      />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider id=\"slider-color-primary\" class=\"color_primary slider_fit\" label=\"Primary\" :value=\"60\" show-value />\n  <Slider id=\"slider-color-success\" class=\"color_success slider_fit\" label=\"Success\" :value=\"70\" show-value />\n  <Slider id=\"slider-color-danger\" class=\"color_danger slider_fit\" label=\"Danger\" :value=\"40\" show-value />\n  <Slider id=\"slider-color-warning\" class=\"color_warning slider_fit\" label=\"Warning\" :value=\"80\" show-value />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
      <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
      <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
      <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "비활성·오류(is-error) 상태를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <Slider class=\"slider_fit\" label=\"기본\" :value=\"50\" show-value />\n  <Slider class=\"slider_fit\" label=\"비활성\" :value=\"30\" disabled show-value />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { Slider },
    template: `<Slider class="slider_fit" label="기본" :value="50" show-value />
      <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />`,
  })),
};


export const Form = {
  name: "폼 레이아웃",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "form_field · form_vertical · form_horizontal과 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Slider from '@uxkm/ui/components/Slider.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\" fit>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"slider-form-opacity\">불투명도</label>\n      <Slider id=\"slider-form-opacity\" :value=\"85\" data-slider-suffix=\"%\" />\n      <p class=\"form_field-hint\">0~100% 사이 값</p>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"slider-form-zoom\">확대 비율</label>\n      <Slider\n      id=\"slider-form-zoom\"\n      label=\"현재 값\"\n      :value=\"125\"\n      :min=\"50\"\n      :max=\"200\"\n      :step=\"25\"\n      data-slider-suffix=\"%\"\n      show-value\n      />\n    </div>\n  </FormLayout>\n  <FormLayout layout=\"horizontal\" fit>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"slider-form-horizontal\">선 굵기</label>\n      <Slider id=\"slider-form-horizontal\" :value=\"3\" :min=\"1\" :max=\"10\" />\n      <p class=\"form_field-hint\">1~10px</p>\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: "라벨",
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: "값",
  hint: "값",
  decreaseLabel: "라벨",
  increaseLabel: "라벨",
  size: "md",
},
  render: withDocsCanvasRender(() => ({
    components: { FormLayout, Slider },
    template: `<FormLayout layout="vertical" fit>
        <div class="form_field">
          <label class="form_field-label" for="slider-form-opacity">불투명도</label>
          <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
          <p class="form_field-hint">0~100% 사이 값</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
          <Slider
          id="slider-form-zoom"
          label="현재 값"
          :value="125"
          :min="50"
          :max="200"
          :step="25"
          data-slider-suffix="%"
          show-value
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div class="form_field">
          <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
          <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
          <p class="form_field-hint">1~10px</p>
        </div>
      </FormLayout>`,
  })),
};

