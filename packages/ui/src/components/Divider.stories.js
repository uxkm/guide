import Divider from './Divider.vue';
import Space from './Space.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import {
  dividerClassColumns,
  dividerClasses,
  dividerPropColumns,
  dividerProps,
  dividerSlotColumns,
  dividerSlots,
  dividerTokenColumns,
  dividerTokens,
} from '@doc-data/divider-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: dividerPropColumns, rows: dividerProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: dividerSlotColumns, rows: dividerSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: dividerClassColumns, rows: dividerClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: dividerTokenColumns, rows: dividerTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/레이아웃/Divider',
  id: 'components-divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    dashed: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    plain: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    vertical: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    orient: {
      control: 'select',
      options: ['', 'left', 'right'],
      labels: {
        '': '가운데',
        left: 'left',
        right: 'right',
      },
      description: '레이블 정렬. 가운데는 orient를 생략한 기본값입니다.',
      type: { name: 'enum', summary: "'left' | 'right' (기본: 가운데)" },
    },
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    tag: { control: 'select', options: ["auto","hr","div","span"], type: { name: 'enum', summary: "'auto' | 'hr' | 'div' | 'span'" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

const defaultArgs = {
  dashed: false,
  plain: false,
  vertical: false,
  orient: '',
  label: '',
  tag: 'auto',
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    dashed: false,
    plain: false,
    vertical: false,
    orient: '',
    label: "라벨",
    tag: "auto",
  },
  render: (_args, context) => ({
    components: { Divider },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Divider v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  args: { ...defaultArgs },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Divider from '@uxkm/ui/components/Divider.vue';\n</script>\n\n<template>\n  <p>위 콘텐츠</p>\n  <Divider />\n  <p>아래 콘텐츠</p>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Divider },
    template: `<p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>`,
  })),
};


export const Dashed = {
  name: "점선",
  args: { ...defaultArgs, dashed: true },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "divider_dashed로 점선 스타일을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Divider from '@uxkm/ui/components/Divider.vue';\n</script>\n\n<template>\n  <p>위 콘텐츠</p>\n  <Divider dashed />\n  <p>아래 콘텐츠</p>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Divider },
    template: `<p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>`,
  })),
};


export const Text = {
  name: "텍스트 레이블",
  args: { ...defaultArgs, label: '섹션 제목' },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다.",
      },
      source: {
        code: "<script setup>\nimport Divider from '@uxkm/ui/components/Divider.vue';\n</script>\n\n<template>\n  <Divider label=\"섹션 제목\" />\n  <Divider plain label=\"보조 설명\" />\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Divider },
    template: `<Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />`,
  })),
};


export const Orient = {
  name: "레이블 정렬",
  args: { ...defaultArgs, orient: '', label: '가운데' },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다.",
      },
      source: {
        code: "<script setup>\nimport Divider from '@uxkm/ui/components/Divider.vue';\n</script>\n\n<template>\n  <Divider orient=\"left\" label=\"왼쪽\" />\n  <Divider label=\"가운데\" />\n  <Divider orient=\"right\" label=\"오른쪽\" />\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Divider },
    template: `<Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />`,
  })),
};


export const Vertical = {
  name: "세로",
  args: { ...defaultArgs, vertical: true },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Divider from '@uxkm/ui/components/Divider.vue';\nimport Space from '@uxkm/ui/components/Space.vue';\n</script>\n\n<template>\n  <Space>\n    <span>항목 A</span>\n    <Divider vertical />\n    <span>항목 B</span>\n    <Divider vertical dashed />\n    <span>항목 C</span>\n  </Space>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Divider, Space },
    template: `<Space>
        <span>항목 A</span>
        <Divider vertical />
        <span>항목 B</span>
        <Divider vertical dashed />
        <span>항목 C</span>
      </Space>`,
  })),
};

