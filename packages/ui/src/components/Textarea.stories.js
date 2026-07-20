import Textarea from './Textarea.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import FormLayout from './FormLayout.vue';
import Input from './Input.vue';
import {
  textareaClassColumns,
  textareaClasses,
  textareaEventColumns,
  textareaEvents,
  textareaPropColumns,
  textareaProps,
  textareaSlotColumns,
  textareaSlots,
  textareaTokenColumns,
  textareaTokens,
} from '@doc-data/textarea-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: textareaPropColumns, rows: textareaProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: textareaSlotColumns, rows: textareaSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · Events",
    tables: [
      { columns: textareaEventColumns, rows: textareaEvents, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: textareaClassColumns, rows: textareaClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: textareaTokenColumns, rows: textareaTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/Textarea',
  id: 'components-textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    error: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    placeholder: { control: 'text', type: { name: 'string', summary: "string" }},
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
    block: false,
    rows: 3,
    modelValue: "",
  },
  render: (_args, context) => ({
    components: { Textarea },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Textarea v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "레이블과 힌트 텍스트가 포함된 폼 필드입니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-bio\">자기소개</label>\n    <Textarea id=\"textarea-bio\" :rows=\"4\" placeholder=\"간단한 자기소개를 입력하세요\" />\n    <p class=\"form_field-hint\">500자 이내로 작성해 주세요.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  placeholder: "입력하세요",
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-bio">자기소개</label>
        <Textarea id="textarea-bio" :rows="4" placeholder="간단한 자기소개를 입력하세요" />
        <p class="form_field-hint">500자 이내로 작성해 주세요.</p>
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
        story: "form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <Textarea :rows=\"3\" placeholder=\"플레이스홀더\" />\n  <Textarea :rows=\"3\" model-value=\"입력된 내용이 여기에 표시됩니다.\" />\n  <Textarea :rows=\"3\" placeholder=\"비활성\" disabled />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<Textarea :rows="3" placeholder="플레이스홀더" />
      <Textarea :rows="3" model-value="입력된 내용이 여기에 표시됩니다." />
      <Textarea :rows="3" placeholder="비활성" disabled />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-size-sm\">Small</label>\n    <Textarea id=\"textarea-size-sm\" size=\"sm\" :rows=\"3\" placeholder=\"textarea_sm\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-size-md\">Medium</label>\n    <Textarea id=\"textarea-size-md\" :rows=\"3\" placeholder=\"기본 크기\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-size-lg\">Large</label>\n    <Textarea id=\"textarea-size-lg\" size=\"lg\" :rows=\"3\" placeholder=\"textarea_lg\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-size-sm">Small</label>
        <Textarea id="textarea-size-sm" size="sm" :rows="3" placeholder="textarea_sm" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-size-md">Medium</label>
        <Textarea id="textarea-size-md" :rows="3" placeholder="기본 크기" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-size-lg">Large</label>
        <Textarea id="textarea-size-lg" size="lg" :rows="3" placeholder="textarea_lg" />
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
        story: "크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-width-full\">전체 너비</label>\n    <Textarea id=\"textarea-width-full\" :rows=\"3\" placeholder=\"width: 100%\" />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"textarea-width-fit\">제한 너비</label>\n    <Textarea id=\"textarea-width-fit\" :rows=\"3\" placeholder=\"form_field_fit — 최대 320px\" />\n  </div>\n  <Textarea class=\"textarea_fit\" :rows=\"3\" placeholder=\"textarea_fit 단독 — 최대 320px\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-width-full">전체 너비</label>
        <Textarea id="textarea-width-full" :rows="3" placeholder="width: 100%" />
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="textarea-width-fit">제한 너비</label>
        <Textarea id="textarea-width-fit" :rows="3" placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea class="textarea_fit" :rows="3" placeholder="textarea_fit 단독 — 최대 320px" />`,
  })),
};


export const Rows = {
  name: "행 수",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-rows-2\">2행</label>\n    <Textarea id=\"textarea-rows-2\" :rows=\"2\" placeholder='rows=\"2\"' />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-rows-3\">3행</label>\n    <Textarea id=\"textarea-rows-3\" :rows=\"3\" placeholder='rows=\"3\" — 기본 권장' />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-rows-5\">5행</label>\n    <Textarea id=\"textarea-rows-5\" :rows=\"5\" placeholder='rows=\"5\"' />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-rows-8\">8행</label>\n    <Textarea id=\"textarea-rows-8\" :rows=\"8\" placeholder='rows=\"8\" — 긴 본문용' />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-rows-2">2행</label>
        <Textarea id="textarea-rows-2" :rows="2" placeholder='rows="2"' />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-rows-3">3행</label>
        <Textarea id="textarea-rows-3" :rows="3" placeholder='rows="3" — 기본 권장' />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-rows-5">5행</label>
        <Textarea id="textarea-rows-5" :rows="5" placeholder='rows="5"' />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-rows-8">8행</label>
        <Textarea id="textarea-rows-8" :rows="8" placeholder='rows="8" — 긴 본문용' />
      </div>`,
  })),
};


export const Resize = {
  name: "리사이즈",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-resize-none\">기본 (리사이즈 없음)</label>\n    <Textarea id=\"textarea-resize-none\" :rows=\"3\" placeholder=\"class 없음 — 기본\" />\n    <p class=\"form_field-hint\">고정 높이가 필요한 폼에 사용합니다.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-resize-vertical\">세로</label>\n    <Textarea id=\"textarea-resize-vertical\" class=\"textarea_resize_vertical\" :rows=\"3\" placeholder=\"textarea_resize_vertical\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-resize-horizontal\">가로</label>\n    <Textarea id=\"textarea-resize-horizontal\" class=\"textarea_resize_horizontal\" :rows=\"3\" placeholder=\"textarea_resize_horizontal\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-resize-both\">양방향</label>\n    <Textarea id=\"textarea-resize-both\" class=\"textarea_resize_both\" :rows=\"3\" placeholder=\"textarea_resize_both\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-resize-none">기본 (리사이즈 없음)</label>
        <Textarea id="textarea-resize-none" :rows="3" placeholder="class 없음 — 기본" />
        <p class="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-resize-vertical">세로</label>
        <Textarea id="textarea-resize-vertical" class="textarea_resize_vertical" :rows="3" placeholder="textarea_resize_vertical" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-resize-horizontal">가로</label>
        <Textarea id="textarea-resize-horizontal" class="textarea_resize_horizontal" :rows="3" placeholder="textarea_resize_horizontal" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-resize-both">양방향</label>
        <Textarea id="textarea-resize-both" class="textarea_resize_both" :rows="3" placeholder="textarea_resize_both" />
      </div>`,
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
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-required-content\">\n      문의 내용<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n    </label>\n    <Textarea id=\"textarea-required-content\" :rows=\"4\" placeholder=\"문의 내용을 입력해 주세요\" required aria-required=\"true\" />\n    <p class=\"form_field-hint\">최소 10자 이상 입력해 주세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-required-memo\">\n      메모<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n    </label>\n    <Textarea id=\"textarea-required-memo\" size=\"sm\" :rows=\"2\" placeholder=\"필수 메모\" required aria-required=\"true\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-required-content">
          문의 내용<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Textarea id="textarea-required-content" :rows="4" placeholder="문의 내용을 입력해 주세요" required aria-required="true" />
        <p class="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-required-memo">
          메모<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Textarea id="textarea-required-memo" size="sm" :rows="2" placeholder="필수 메모" required aria-required="true" />
      </div>`,
  })),
};


export const Count = {
  name: "글자 수 카운터",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`textarea_wrap textarea_show-count`로 textarea 우측 하단에 현재 글자 수를 표시합니다. `maxlength`와 함께 사용하면 `0/200` 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 `form_field-hint`로 글자 수 안내 문구(예: 200자 이내로 작성해 주세요.)를 함께 제공합니다. 입력 시 스크린 리더에는 `textarea_count_announcer`가 `role=\"status\"` · `aria-live=\"polite\"`로 현재·최대 글자 수를 음성 안내합니다.",
      },
      source: {
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-count-basic\">메모</label>\n    <div class=\"textarea_wrap textarea_show-count\">\n      <Textarea\n      id=\"textarea-count-basic\"\n      :rows=\"4\"\n      maxlength=\"200\"\n      placeholder=\"내용을 입력하세요\"\n      aria-describedby=\"textarea-count-basic-hint textarea-count-basic-count\"\n      />\n      <span class=\"textarea_count\" id=\"textarea-count-basic-count\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n        <span class=\"textarea_count_visual\" aria-hidden=\"true\">0/200</span>\n        <span class=\"textarea_count_announcer\">0자 입력, 최대 200자</span>\n      </span>\n    </div>\n    <p class=\"form_field-hint\" id=\"textarea-count-basic-hint\">200자 이내로 작성해 주세요.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-count-sm\">Small + 카운터</label>\n    <div class=\"textarea_wrap textarea_show-count\">\n      <Textarea\n      id=\"textarea-count-sm\"\n      size=\"sm\"\n      :rows=\"3\"\n      maxlength=\"100\"\n      placeholder=\"textarea_sm\"\n      aria-describedby=\"textarea-count-sm-hint textarea-count-sm-count\"\n      />\n      <span class=\"textarea_count\" id=\"textarea-count-sm-count\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n        <span class=\"textarea_count_visual\" aria-hidden=\"true\">0/100</span>\n        <span class=\"textarea_count_announcer\">0자 입력, 최대 100자</span>\n      </span>\n    </div>\n    <p class=\"form_field-hint\" id=\"textarea-count-sm-hint\">100자 이내로 작성해 주세요.</p>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"textarea-count-fit\">제한 너비 + 카운터</label>\n    <div class=\"textarea_wrap textarea_show-count textarea_wrap_fit\">\n      <Textarea\n      id=\"textarea-count-fit\"\n      :rows=\"3\"\n      maxlength=\"200\"\n      placeholder=\"textarea_wrap_fit\"\n      model-value=\"입력된 내용이 있습니다.\"\n      aria-describedby=\"textarea-count-fit-hint textarea-count-fit-count\"\n      />\n      <span class=\"textarea_count\" id=\"textarea-count-fit-count\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n        <span class=\"textarea_count_visual\" aria-hidden=\"true\">12/200</span>\n        <span class=\"textarea_count_announcer\">12자 입력, 최대 200자</span>\n      </span>\n    </div>\n    <p class=\"form_field-hint\" id=\"textarea-count-fit-hint\">200자 이내로 작성해 주세요.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-count-basic">메모</label>
        <div class="textarea_wrap textarea_show-count">
          <Textarea
          id="textarea-count-basic"
          :rows="4"
          maxlength="200"
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
          />
          <span class="textarea_count" id="textarea-count-basic-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">0/200</span>
            <span class="textarea_count_announcer">0자 입력, 최대 200자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-count-basic-hint">200자 이내로 작성해 주세요.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-count-sm">Small + 카운터</label>
        <div class="textarea_wrap textarea_show-count">
          <Textarea
          id="textarea-count-sm"
          size="sm"
          :rows="3"
          maxlength="100"
          placeholder="textarea_sm"
          aria-describedby="textarea-count-sm-hint textarea-count-sm-count"
          />
          <span class="textarea_count" id="textarea-count-sm-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">0/100</span>
            <span class="textarea_count_announcer">0자 입력, 최대 100자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-count-sm-hint">100자 이내로 작성해 주세요.</p>
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="textarea-count-fit">제한 너비 + 카운터</label>
        <div class="textarea_wrap textarea_show-count textarea_wrap_fit">
          <Textarea
          id="textarea-count-fit"
          :rows="3"
          maxlength="200"
          placeholder="textarea_wrap_fit"
          model-value="입력된 내용이 있습니다."
          aria-describedby="textarea-count-fit-hint textarea-count-fit-count"
          />
          <span class="textarea_count" id="textarea-count-fit-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">12/200</span>
            <span class="textarea_count_announcer">12자 입력, 최대 200자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-count-fit-hint">200자 이내로 작성해 주세요.</p>
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
        code: "<script setup>\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-state-default\">기본</label>\n    <Textarea id=\"textarea-state-default\" :rows=\"3\" placeholder=\"입력 가능\" />\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-state-disabled\">비활성</label>\n    <Textarea id=\"textarea-state-disabled\" :rows=\"3\" model-value=\"수정할 수 없는 내용입니다.\" disabled />\n    <p class=\"form_field-hint\">disabled 속성으로 편집을 막습니다.</p>\n  </div>\n  <div class=\"form_field\">\n    <label class=\"form_field-label\" for=\"textarea-state-error\">에러</label>\n    <Textarea id=\"textarea-state-error\" :rows=\"3\" error model-value=\"짧음\" aria-describedby=\"textarea-state-error-msg\" />\n    <p class=\"form_field-error\" id=\"textarea-state-error-msg\" role=\"alert\">10자 이상 입력해 주세요.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Textarea },
    template: `<div class="form_field">
        <label class="form_field-label" for="textarea-state-default">기본</label>
        <Textarea id="textarea-state-default" :rows="3" placeholder="입력 가능" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-state-disabled">비활성</label>
        <Textarea id="textarea-state-disabled" :rows="3" model-value="수정할 수 없는 내용입니다." disabled />
        <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="textarea-state-error">에러</label>
        <Textarea id="textarea-state-error" :rows="3" error model-value="짧음" aria-describedby="textarea-state-error-msg" />
        <p class="form_field-error" id="textarea-state-error-msg" role="alert">10자 이상 입력해 주세요.</p>
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
        story: "문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxlength로 접근성을 보완합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\n</script>\n\n<template>\n  <FormLayout layout=\"vertical\" compact novalidate aria-labelledby=\"example-heading\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"textarea-ex-subject\">\n        제목<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n      </label>\n      <Input id=\"textarea-ex-subject\" size=\"sm\" model-value=\"서비스 이용 문의\" required aria-required=\"true\" />\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"textarea-ex-body\">\n        문의 내용<span class=\"form_field-required\" aria-hidden=\"true\">*</span>\n      </label>\n      <div class=\"textarea_wrap textarea_show-count\">\n        <Textarea\n        id=\"textarea-ex-body\"\n        size=\"sm\"\n        :rows=\"5\"\n        maxlength=\"500\"\n        required\n        error\n        model-value=\"너무 짧아요\"\n        aria-required=\"true\"\n        aria-invalid=\"true\"\n        aria-describedby=\"textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count\"\n        />\n        <span class=\"textarea_count is-limit\" id=\"textarea-ex-body-count\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n          <span class=\"textarea_count_visual\" aria-hidden=\"true\">6/500</span>\n          <span class=\"textarea_count_announcer\">6자 입력, 최대 500자</span>\n        </span>\n      </div>\n      <p class=\"form_field-hint\" id=\"textarea-ex-body-limit\">500자 이내로 작성해 주세요.</p>\n      <p class=\"form_field-hint\" id=\"textarea-ex-body-hint\">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>\n      <p class=\"form_field-error\" id=\"textarea-ex-body-error\" role=\"alert\">10자 이상 입력해 주세요.</p>\n    </div>\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"textarea-ex-memo\">추가 메모</label>\n      <div class=\"textarea_wrap textarea_show-count\">\n        <Textarea\n        id=\"textarea-ex-memo\"\n        size=\"sm\"\n        class=\"textarea_resize_vertical is-success\"\n        :rows=\"3\"\n        maxlength=\"200\"\n        model-value=\"참고할 내용이 있습니다.\"\n        aria-invalid=\"false\"\n        aria-describedby=\"textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count\"\n        />\n        <span class=\"textarea_count\" id=\"textarea-ex-memo-count\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n          <span class=\"textarea_count_visual\" aria-hidden=\"true\">14/200</span>\n          <span class=\"textarea_count_announcer\">14자 입력, 최대 200자</span>\n        </span>\n      </div>\n      <p class=\"form_field-hint\" id=\"textarea-ex-memo-hint\">200자 이내로 작성해 주세요.</p>\n      <p class=\"form_field-success\" id=\"textarea-ex-memo-success\" role=\"status\">선택 항목이 정상적으로 저장되었습니다.</p>\n    </div>\n    <div class=\"form_actions\">\n      <Button variant=\"filled\" color=\"primary\" size=\"sm\" type=\"submit\" label=\"문의하기\" />\n      <Button variant=\"ghost\" size=\"sm\" type=\"button\" label=\"취소\" />\n    </div>\n  </FormLayout>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  placeholder: "입력하세요",
  block: false,
  rows: 3,
  modelValue: ""
},
  render: withDocsCanvasRender(() => ({
    components: { Button, FormLayout, Input, Textarea },
    template: `<FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
        <div class="form_field">
          <label class="form_field-label" for="textarea-ex-subject">
            제목<span class="form_field-required" aria-hidden="true">*</span>
          </label>
          <Input id="textarea-ex-subject" size="sm" model-value="서비스 이용 문의" required aria-required="true" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="textarea-ex-body">
            문의 내용<span class="form_field-required" aria-hidden="true">*</span>
          </label>
          <div class="textarea_wrap textarea_show-count">
            <Textarea
            id="textarea-ex-body"
            size="sm"
            :rows="5"
            maxlength="500"
            required
            error
            model-value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
            />
            <span class="textarea_count is-limit" id="textarea-ex-body-count" role="status" aria-live="polite" aria-atomic="true">
              <span class="textarea_count_visual" aria-hidden="true">6/500</span>
              <span class="textarea_count_announcer">6자 입력, 최대 500자</span>
            </span>
          </div>
          <p class="form_field-hint" id="textarea-ex-body-limit">500자 이내로 작성해 주세요.</p>
          <p class="form_field-hint" id="textarea-ex-body-hint">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>
          <p class="form_field-error" id="textarea-ex-body-error" role="alert">10자 이상 입력해 주세요.</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="textarea-ex-memo">추가 메모</label>
          <div class="textarea_wrap textarea_show-count">
            <Textarea
            id="textarea-ex-memo"
            size="sm"
            class="textarea_resize_vertical is-success"
            :rows="3"
            maxlength="200"
            model-value="참고할 내용이 있습니다."
            aria-invalid="false"
            aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"
            />
            <span class="textarea_count" id="textarea-ex-memo-count" role="status" aria-live="polite" aria-atomic="true">
              <span class="textarea_count_visual" aria-hidden="true">14/200</span>
              <span class="textarea_count_announcer">14자 입력, 최대 200자</span>
            </span>
          </div>
          <p class="form_field-hint" id="textarea-ex-memo-hint">200자 이내로 작성해 주세요.</p>
          <p class="form_field-success" id="textarea-ex-memo-success" role="status">선택 항목이 정상적으로 저장되었습니다.</p>
        </div>
        <div class="form_actions">
          <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
          <Button variant="ghost" size="sm" type="button" label="취소" />
        </div>
      </FormLayout>`,
  })),
};

