import Container from './Container.vue';
import ContainerPlayground from '@/storybook/ContainerPlayground.vue';
import { withDocsCanvasRender } from '@/storybook/story-renders.js';
import {
  docsBasicRender,
  docsFluidRender,
  docsNestedRender,
  docsSizeRender,
  renderContainerFluid,
  renderContainerNested,
  renderContainerPlayground,
} from '@/storybook/container-story-renders.js';
import {
  containerClassColumns,
  containerClasses,
  containerPropColumns,
  containerProps,
  containerSlotColumns,
  containerSlots,
  containerTokenColumns,
  containerTokens,
} from '@doc-data/container-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: containerPropColumns, rows: containerProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: containerSlotColumns, rows: containerSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: containerClassColumns, rows: containerClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: containerTokenColumns, rows: containerTokens, codeColumn: "name" },
    ],
  },
];

const sizeArgType = {
  control: { type: 'select' },
  options: ['', 'sm', 'md', 'lg', 'xl'],
  labels: {
    '': '기본',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  },
  description: '고정 최대 너비 변형. 기본값은 container 기본 max-width(72rem)입니다.',
  type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'xl'" },
};

const fluidWithSizeArgType = {
  control: 'boolean',
  if: { arg: 'size', truthy: true },
  description: '선택한 size의 max-width 제한을 해제합니다. size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다.',
  type: { name: 'boolean', summary: 'boolean' },
};

const fluidArgType = {
  control: 'boolean',
  description: '최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid)',
  type: { name: 'boolean', summary: 'boolean' },
};

export default {
  title: 'Components/레이아웃/Container',
  id: 'components-container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType,
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
    fluid: false,
    size: 'lg',
  },
  render: renderContainerPlayground('container'),
};


export const Basic = {
  name: "기본",
  args: {
    fluid: false,
    size: '',
  },
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType,
  },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다.",
      },
      source: {
        code: "<script setup>\nimport Container from '@uxkm/ui/components/Container.vue';\n</script>\n\n<template>\n  <Container>\n    <div class=\"container_demo-fill\">container — 기본 최대 너비</div>\n  </Container>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Container },
    template: `<Container>
        <div class="container_demo-fill">container — 기본 최대 너비</div>
      </Container>`,
  })),
};


export const Fluid = {
  name: "Fluid",
  args: {
    fluid: true,
    size: '',
  },
  argTypes: {
    fluid: fluidArgType,
    size: {
      ...sizeArgType,
      description: 'fluid와 함께 size를 지정하면 fluid가 size max-width를 해제합니다.',
    },
  },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다.",
      },
      source: {
        code: "<script setup>\nimport Container from '@uxkm/ui/components/Container.vue';\n</script>\n\n<template>\n  <Container fluid>\n    <div class=\"container_demo-fill\">container container_fluid — 전체 너비</div>\n  </Container>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Container },
    template: `<Container fluid>
        <div class="container_demo-fill">container container_fluid — 전체 너비</div>
      </Container>`,
  })),
};


export const Size = {
  name: "크기",
  args: {
    fluid: false,
    size: 'lg',
  },
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType,
  },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Container from '@uxkm/ui/components/Container.vue';\n</script>\n\n<template>\n  <Container size=\"sm\">\n    <div class=\"container_demo-fill\">container_sm (36rem)</div>\n  </Container>\n  <Container size=\"md\">\n    <div class=\"container_demo-fill\">container_md (48rem)</div>\n  </Container>\n  <Container size=\"lg\">\n    <div class=\"container_demo-fill\">container_lg (64rem)</div>\n  </Container>\n  <Container size=\"xl\">\n    <div class=\"container_demo-fill\">container_xl (80rem)</div>\n  </Container>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Container },
    template: `<Container size="sm">
        <div class="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div class="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div class="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div class="container_demo-fill">container_xl (80rem)</div>
      </Container>`,
  })),
};


export const Nested = {
  name: "중첩 사용",
  args: {
    fluid: true,
    size: 'md',
  },
  argTypes: {
    fluid: {
      ...fluidArgType,
      description: '바깥 container에 container_fluid를 적용합니다.',
    },
    size: {
      ...sizeArgType,
      description: '안쪽 container의 size(sm · md · lg · xl)입니다.',
    },
  },
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Container from '@uxkm/ui/components/Container.vue';\n</script>\n\n<template>\n  <Container fluid>\n    <div class=\"container_demo-fill\" style=\"margin-bottom: var(--space-md);\">바깥 — fluid</div>\n    <Container size=\"md\">\n      <div class=\"container_demo-fill\">안쪽 — md</div>\n    </Container>\n  </Container>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Container },
    template: `<Container fluid>
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
        <Container size="md">
          <div class="container_demo-fill">안쪽 — md</div>
        </Container>
      </Container>`,
  })),
};


