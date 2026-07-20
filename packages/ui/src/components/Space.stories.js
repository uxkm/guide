import Space from './Space.vue';
import { bindArgsTemplate, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Divider from './Divider.vue';
import {
  spaceClassColumns,
  spaceClasses,
  spacePropColumns,
  spaceProps,
  spaceSlotColumns,
  spaceSlots,
  spaceTokenColumns,
  spaceTokens,
} from '@doc-data/space-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: spacePropColumns, rows: spaceProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: spaceSlotColumns, rows: spaceSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: spaceClassColumns, rows: spaceClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: spaceTokenColumns, rows: spaceTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/레이아웃/Space',
  id: 'components-space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    wrap: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    gap: { control: 'select', options: ["xs","sm","md","lg","xl"], type: { name: 'enum', summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'" }},
    align: { control: 'select', options: ["start","center","end","baseline","stretch"], type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'baseline' | 'stretch'" } },
    justify: { control: 'select', options: ["start","center","end","between"], type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'between'" } },
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
    vertical: false,
    wrap: false,
    block: false,
    gap: "md",
    align: "값",
    justify: "값",
  },
  render: (_args, context) => ({
    components: { Space },
    setup() {
      return { args: storyArgsRef(context) }; },
    template: `<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>`,
  }),
};


const spaceDemoBoxes = `
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>`;

export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다.",
      },
      source: {
        code: "<script setup>\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space>\n    <div class=\"space_demo-box\">항목 1</div>\n    <div class=\"space_demo-box\">항목 2</div>\n    <div class=\"space_demo-box\">항목 3</div>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  gap: "md",
  align: "값",
  justify: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Space },
    template: `<Space>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>`,
  })),
};


export const Vertical = {
  name: "세로",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "space_vertical로 세로 방향 배치를 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space vertical>\n    <div class=\"space_demo-box\">항목 1</div>\n    <div class=\"space_demo-box\">항목 2</div>\n    <div class=\"space_demo-box\">항목 3</div>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: { vertical: true, wrap: false, block: false, gap: 'md', align: '값', justify: '값' },
  render: withDocsCanvasRender(() => ({
    components: { Space },
    template: `<Space vertical>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>`,
  })),
};


export const Gap = {
  name: "간격",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다.",
      },
      source: {
        code: "<script setup>\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space gap=\"xs\">\n    <div class=\"space_demo-box\">xs</div>\n    <div class=\"space_demo-box\">xs</div>\n    <div class=\"space_demo-box\">xs</div>\n  </Space>\n  <Space gap=\"sm\">\n    <div class=\"space_demo-box\">sm</div>\n    <div class=\"space_demo-box\">sm</div>\n    <div class=\"space_demo-box\">sm</div>\n  </Space>\n  <Space>\n    <div class=\"space_demo-box\">md (기본)</div>\n    <div class=\"space_demo-box\">md</div>\n    <div class=\"space_demo-box\">md</div>\n  </Space>\n  <Space gap=\"lg\">\n    <div class=\"space_demo-box\">lg</div>\n    <div class=\"space_demo-box\">lg</div>\n    <div class=\"space_demo-box\">lg</div>\n  </Space>\n  <Space gap=\"xl\">\n    <div class=\"space_demo-box\">xl</div>\n    <div class=\"space_demo-box\">xl</div>\n    <div class=\"space_demo-box\">xl</div>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  vertical: false,
  wrap: false,
  block: false,
  gap: "md",
  align: "값",
  justify: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Space },
    template: `<Space gap="xs">
        <div class="space_demo-box">xs</div>
        <div class="space_demo-box">xs</div>
        <div class="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div class="space_demo-box">sm</div>
        <div class="space_demo-box">sm</div>
        <div class="space_demo-box">sm</div>
      </Space>
      <Space>
        <div class="space_demo-box">md (기본)</div>
        <div class="space_demo-box">md</div>
        <div class="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div class="space_demo-box">lg</div>
        <div class="space_demo-box">lg</div>
        <div class="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div class="space_demo-box">xl</div>
        <div class="space_demo-box">xl</div>
        <div class="space_demo-box">xl</div>
      </Space>`,
  })),
};


export const Wrap = {
  name: "줄바꿈",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.",
      },
      source: {
        code: "<script setup>\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space block wrap>\n    <div class=\"space_demo-box\" style=\"min-width: 8rem;\">항목 1</div>\n    <div class=\"space_demo-box\" style=\"min-width: 8rem;\">항목 2</div>\n    <div class=\"space_demo-box\" style=\"min-width: 8rem;\">항목 3</div>\n    <div class=\"space_demo-box\" style=\"min-width: 8rem;\">항목 4</div>\n    <div class=\"space_demo-box\" style=\"min-width: 8rem;\">항목 5</div>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: { vertical: false, wrap: true, block: true, gap: 'md', align: '값', justify: '값' },
  render: withDocsCanvasRender(() => ({
    components: { Space },
    template: `<Space block wrap>
        <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
      </Space>`,
  })),
};


export const Align = {
  name: "정렬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space\n  block\n  align=\"center\"\n  style=\"min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);\"\n  >\n  <div class=\"space_demo-box\">align center</div>\n  <div class=\"space_demo-box\" style=\"padding-block: var(--space-xl);\">높이 다름</div>\n  <div class=\"space_demo-box\">align center</div>\n  </Space>\n  <Space\n  block\n  justify=\"between\"\n  style=\"background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);\"\n  >\n  <div class=\"space_demo-box\">justify between</div>\n  <div class=\"space_demo-box\">양 끝</div>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: { vertical: false, wrap: false, block: true, gap: 'md', align: 'center', justify: '값' },
  render: withDocsCanvasRender(() => ({
    components: { Space },
    template: `<Space
      block
      align="center"
      style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
      >
      <div class="space_demo-box">align center</div>
      <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
      <div class="space_demo-box">align center</div>
      </Space>
      <Space
      block
      justify="between"
      style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
      >
      <div class="space_demo-box">justify between</div>
      <div class="space_demo-box">양 끝</div>
      </Space>`,
  })),
};


export const Combo = {
  name: "조합 예시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Divider from '@uxkm/ui/components/Divider.vue';\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space>\n    <Button variant=\"outline\" label=\"취소\" />\n    <Button variant=\"filled\" color=\"primary\" label=\"저장\" />\n    <Divider vertical />\n    <Button variant=\"text\" label=\"더보기\" />\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  vertical: false,
  wrap: false,
  block: false,
  gap: "md",
  align: "값",
  justify: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Divider, Space },
    template: `<Space>
        <Button variant="outline" label="취소" />
        <Button variant="filled" color="primary" label="저장" />
        <Divider vertical />
        <Button variant="text" label="더보기" />
      </Space>`,
  })),
};

