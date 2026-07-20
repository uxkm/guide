import Skeleton from './Skeleton.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import {
  skeletonClassColumns,
  skeletonClasses,
  skeletonPropColumns,
  skeletonProps,
  skeletonSlotColumns,
  skeletonSlots,
  skeletonTokenColumns,
  skeletonTokens,
} from '@doc-data/skeleton-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: skeletonPropColumns, rows: skeletonProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: skeletonSlotColumns, rows: skeletonSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: skeletonClassColumns, rows: skeletonClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: skeletonTokenColumns, rows: skeletonTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/피드백/Skeleton',
  id: 'components-skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    avatar: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    round: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중",
  },
  render: (_args, context) => ({
    components: { Skeleton },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Skeleton v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`skeleton`에 `skeleton_text` · `skeleton_title` 형태 클래스를 조합합니다.",
      },
      source: {
        code: "<script setup>\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\n</script>\n\n<template>\n  <div style=\"max-width: var(--input-max-width); width: 100%;\">\n    <Skeleton :paragraph=\"3\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ariaLabel: "콘텐츠 로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Skeleton },
    template: `<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :paragraph="3" />
      </div>`,
  })),
};


export const Shape = {
  name: "형태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\n</script>\n\n<template>\n  <Skeleton avatar :paragraph=\"0\" />\n  <Skeleton round style=\"margin-top: var(--space-md);\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  active: true,
  avatar: false,
  paragraph: false,
  round: false,
  ariaLabel: "콘텐츠 로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Skeleton },
    template: `<Skeleton avatar :paragraph="0" />
      <Skeleton round style="margin-top: var(--space-md);" />`,
  })),
};


export const CardDemo = {
  name: "카드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Card from '@uxkm/ui/components/Card.vue';\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\n</script>\n\n<template>\n  <Card\n  variant=\"shadow\"\n  style=\"max-width: 360px; width: 100%;\"\n  role=\"status\"\n  aria-live=\"polite\"\n  aria-busy=\"true\"\n  aria-label=\"카드 콘텐츠 로딩 중\"\n  >\n  <CardBody>\n    <Skeleton :paragraph=\"0\" aria-label=\"카드 콘텐츠 로딩 중\">\n      <span class=\"skeleton skeleton_image\" aria-hidden=\"true\" />\n      <span class=\"skeleton skeleton_title skeleton_w-md\" aria-hidden=\"true\" />\n      <span class=\"skeleton skeleton_text\" aria-hidden=\"true\" />\n      <span class=\"skeleton skeleton_text skeleton_w-lg\" aria-hidden=\"true\" />\n      <div class=\"skeleton_row\" style=\"margin-top: var(--space-xs);\">\n        <span class=\"skeleton skeleton_button\" aria-hidden=\"true\" />\n        <span class=\"skeleton skeleton_button\" aria-hidden=\"true\" style=\"width: 4rem;\" />\n      </div>\n    </Skeleton>\n  </CardBody>\n  </Card>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  active: true,
  avatar: false,
  paragraph: false,
  round: false,
  ariaLabel: "콘텐츠 로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Card, CardBody, Skeleton },
    template: `<Card
      variant="shadow"
      style="max-width: 360px; width: 100%;"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
      >
      <CardBody>
        <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
          <span class="skeleton skeleton_image" aria-hidden="true" />
          <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span class="skeleton skeleton_text" aria-hidden="true" />
          <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div class="skeleton_row" style="margin-top: var(--space-xs);">
            <span class="skeleton skeleton_button" aria-hidden="true" />
            <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
          </div>
        </Skeleton>
      </CardBody>
      </Card>`,
  })),
};


export const Static = {
  name: "정적",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`skeleton_static`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. `prefers-reduced-motion` 환경에서도 애니메이션이 비활성화됩니다.",
      },
      source: {
        code: "<script setup>\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\n</script>\n\n<template>\n  <div style=\"max-width: var(--input-max-width); width: 100%;\">\n    <Skeleton :active=\"false\" :paragraph=\"3\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  active: true,
  avatar: false,
  paragraph: false,
  round: false,
  ariaLabel: "콘텐츠 로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Skeleton },
    template: `<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :active="false" :paragraph="3" />
      </div>`,
  })),
};

