import Flex from './Flex.vue';
import FlexItem from './FlexItem.vue';
import { storyArgsRef } from '@/storybook/story-renders.js';
import {
  flexClassColumns,
  flexClasses,
  flexItemProps,
  flexItemSlots,
  flexPropColumns,
  flexProps,
  flexSlotColumns,
  flexSlots,
  flexTokenColumns,
  flexTokens,
} from '@doc-data/flex-api';
const apiSections = [
  {
    title: "API · Flex Props",
    tables: [
      { columns: flexPropColumns, rows: flexProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · FlexItem Props",
    tables: [
      { columns: flexPropColumns, rows: flexItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Flex Slots",
    tables: [
      { columns: flexSlotColumns, rows: flexSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · FlexItem Slots",
    tables: [
      { columns: flexSlotColumns, rows: flexItemSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업에서도 동일하게 조합합니다.",
    tables: [
      { columns: flexClassColumns, rows: flexClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: flexTokenColumns, rows: flexTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/레이아웃/Flex',
  id: 'components-flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ["row","col"], type: { name: 'enum', summary: "'row' | 'col'" } },
    directionMd: { control: 'select', options: ["row","col"], type: { name: 'enum', summary: "'row' | 'col'" } },
    directionLg: { control: 'select', options: ["row","col"], type: { name: 'enum', summary: "'row' | 'col'" } },
    wrap: { control: 'boolean', type: { name: 'boolean', summary: "boolean" } },
    ratio: { control: 'text', type: { name: 'string', summary: "string" } },
    gap: { control: 'select', options: ["none","sm","lg"], type: { name: 'enum', summary: "'none' | 'sm' | 'lg'" } },
    align: { control: 'select', options: ["start","center","end","baseline","stretch"], type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'baseline' | 'stretch'" } },
    equal: { control: 'boolean', type: { name: 'boolean', summary: "boolean" } },
    autoFit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" } },
    justify: { control: 'select', options: ["start","center","end","between","around","evenly"], type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'" } },
  },
  subcomponents: { FlexItem },
  parameters: {
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    cols: 3,
    direction: "row",
    directionMd: "",
    directionLg: "",
    wrap: false,
    ratio: "",
    gap: "sm",
    align: "stretch",
    equal: false,
    autoFit: false,
    justify: "",
  },
  render: (_args, context) => ({
    components: { Flex },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Flex v-bind="args">
      <div class="flex_demo-cell">항목 1</div>
      <div class="flex_demo-cell">항목 2</div>
      <div class="flex_demo-cell">항목 3</div>
    </Flex>`,
  }),
};

export const BasicLayout = {
  name: "기본 페이지 레이아웃",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "Grid 예시와 동일하게 헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\n</script>\n\n<template>\n  <Flex wrap gap=\"sm\">\n    <FlexItem as=\"header\" :span=\"12\" class=\"flex_demo-cell\">Header</FlexItem>\n    <FlexItem as=\"aside\" :span=\"12\" :span-md=\"3\" class=\"flex_demo-cell\">Sidebar</FlexItem>\n    <FlexItem as=\"section\" :span=\"12\" :span-md=\"9\" class=\"flex_demo-cell\" aria-label=\"Main content\">Main content</FlexItem>\n    <FlexItem as=\"footer\" :span=\"12\" class=\"flex_demo-cell\">Footer</FlexItem>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell" aria-label="Main content">Main content</FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>`,
  }),
};

export const ContentLayout = {
  name: "콘텐츠가 있는 페이지 레이아웃",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\n</script>\n\n<template>\n  <Flex wrap gap=\"sm\">\n    <FlexItem as=\"header\" :span=\"12\" class=\"flex_demo-cell\">Header</FlexItem>\n    <FlexItem as=\"aside\" :span=\"12\" :span-md=\"3\" class=\"flex_demo-cell\">Sidebar</FlexItem>\n    <FlexItem as=\"main\" :span=\"12\" :span-md=\"9\" class=\"flex_demo-cell\">\n      <h3>Main content</h3>\n      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>\n      <Flex :cols=\"1\" :cols-lg=\"2\" gap=\"sm\">\n        <article class=\"component_stub\">\n          <h4>Content section</h4>\n          <p>주요 정보나 기능을 배치합니다.</p>\n        </article>\n        <article class=\"component_stub\">\n          <h4>Content section</h4>\n          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>\n        </article>\n      </Flex>\n    </FlexItem>\n    <FlexItem as=\"footer\" :span=\"12\" class=\"flex_demo-cell\">Footer</FlexItem>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
        <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex :cols="1" :cols-lg="2" gap="sm">
          <article class="component_stub"><h4>Content section</h4><p>주요 정보나 기능을 배치합니다.</p></article>
          <article class="component_stub"><h4>Content section</h4><p>관련 정보나 보조 콘텐츠를 배치합니다.</p></article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>`,
  }),
};

export const Parent = {
  name: "부모 클래스로 제어",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "방향·비율·자식 일괄 span은 부모 Flex에 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :cols=\"3\">\n    <div class=\"flex_demo-cell\">flex_cols-3</div>\n    <div class=\"flex_demo-cell\">flex_cols-3</div>\n    <div class=\"flex_demo-cell\">flex_cols-3</div>\n  </Flex>\n  <Flex ratio=\"2-1\">\n    <div class=\"flex_demo-cell\">flex_ratio-2-1</div>\n    <div class=\"flex_demo-cell\">flex_ratio-2-1</div>\n  </Flex>\n  <Flex :item-span=\"4\">\n    <div v-for=\"item in 6\" :key=\"item\" class=\"flex_demo-cell\">flex_items-span-4</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
    <Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
    <Flex :item-span="4"><div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div></Flex>`,
  }),
};

export const TwelveColumns = {
  name: "12열 전체 활용",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "12열 시스템의 각 열을 하나씩 사용합니다. itemSpan=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :item-span=\"1\" gap=\"sm\">\n    <div v-for=\"item in 12\" :key=\"item\" class=\"flex_demo-cell\">{{ item }}</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :item-span="1" gap="sm"><div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div></Flex>`,
  }),
};

export const Equal = {
  name: "균등 항목",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "flex_cols-*로 동일 너비 항목 수를 지정합니다. gap을 제외한 공간을 정확히 균등 분할합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :cols=\"2\">\n    <div class=\"flex_demo-cell\">cols 2</div>\n    <div class=\"flex_demo-cell\">cols 2</div>\n  </Flex>\n  <Flex :cols=\"4\">\n    <div v-for=\"item in 4\" :key=\"item\" class=\"flex_demo-cell\">cols 4</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
    <Flex :cols="4"><div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div></Flex>`,
  }),
};

export const Ratio = {
  name: "비율 항목",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "flex_ratio-*로 2~3개 항목의 grow 비율을 부모에서 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex ratio=\"1-2\">\n    <div class=\"flex_demo-cell\">1 : 2</div>\n    <div class=\"flex_demo-cell\">1 : 2</div>\n  </Flex>\n  <Flex ratio=\"1-2-1\">\n    <div class=\"flex_demo-cell\">1</div>\n    <div class=\"flex_demo-cell\">2</div>\n    <div class=\"flex_demo-cell\">1</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex ratio="1-2"><div class="flex_demo-cell">1 : 2</div><div class="flex_demo-cell">1 : 2</div></Flex>
    <Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>`,
  }),
};

export const ItemSpan = {
  name: "자식 일괄 span (12단위)",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다. itemSpan=6이면 한 줄에 2개씩 배치됩니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :item-span=\"6\">\n    <div v-for=\"item in 4\" :key=\"item\" class=\"flex_demo-cell\">span 6</div>\n  </Flex>\n  <Flex :item-span=\"3\">\n    <div v-for=\"item in 4\" :key=\"item\" class=\"flex_demo-cell\">span 3</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :item-span="6"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div></Flex>
    <Flex :item-span="3"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div></Flex>`,
  }),
};

export const Child = {
  name: "자식별 span (혼합 레이아웃)",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "항목마다 너비가 다를 때 FlexItem의 span을 사용합니다. 8+4, 4+4+4처럼 개별 제어할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\n</script>\n\n<template>\n  <Flex wrap>\n    <FlexItem :span=\"8\">\n      <div class=\"flex_demo-cell\">span 8</div>\n    </FlexItem>\n    <FlexItem :span=\"4\">\n      <div class=\"flex_demo-cell\">span 4</div>\n    </FlexItem>\n    <FlexItem v-for=\"item in 3\" :key=\"item\" :span=\"4\">\n      <div class=\"flex_demo-cell\">span 4</div>\n    </FlexItem>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex wrap>
      <FlexItem :span="8"><div class="flex_demo-cell">span 8</div></FlexItem>
      <FlexItem :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
      <FlexItem v-for="item in 3" :key="item" :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
    </Flex>`,
  }),
};

export const Gap = {
  name: "간격",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "flex_gap-sm · flex_gap-lg · flex_gap-none은 부모에 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :cols=\"3\" gap=\"sm\">\n    <div v-for=\"item in 3\" :key=\"item\" class=\"flex_demo-cell\">gap sm</div>\n  </Flex>\n  <Flex :cols=\"3\" gap=\"lg\">\n    <div v-for=\"item in 3\" :key=\"item\" class=\"flex_demo-cell\">gap lg</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :cols="3" gap="sm"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div></Flex>
    <Flex :cols="3" gap="lg"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div></Flex>`,
  }),
};

export const Responsive = {
  name: "반응형",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "flex_cols-md-* · flex_items-span-md-* · flex_items-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex :cols=\"1\" :cols-md=\"2\" :cols-lg=\"3\">\n    <div v-for=\"item in 3\" :key=\"item\" class=\"flex_demo-cell\">1 → md 2 → lg 3개</div>\n  </Flex>\n  <Flex :item-span=\"12\" :item-span-md=\"6\" :item-span-lg=\"4\">\n    <div v-for=\"item in 3\" :key=\"item\" class=\"flex_demo-cell\">span 12 → md 6 → lg 4</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex :cols="1" :cols-md="2" :cols-lg="3"><div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
    <Flex :item-span="12" :item-span-md="6" :item-span-lg="4"><div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>`,
  }),
};

export const Auto = {
  name: "자동 배치",
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "flex_auto-fit은 --flex-auto-min을 최소 너비로 사용해 항목 수를 자동 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Flex from '@uxkm/ui/components/Flex.vue';\n</script>\n\n<template>\n  <Flex auto-fit>\n    <div v-for=\"item in 6\" :key=\"item\" class=\"flex_demo-cell\">auto-fit</div>\n  </Flex>\n</template>",
        language: 'vue',
      },
    },
  },
  render: () => ({
    components: { Flex, FlexItem },

    template: `<Flex auto-fit><div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div></Flex>`,
  }),
};
