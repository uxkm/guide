import Spin from './Spin.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import CardHeader from './CardHeader.vue';
import SpinWrap from './SpinWrap.vue';
import {
  spinClassColumns,
  spinClasses,
  spinPropColumns,
  spinProps,
  spinSlotColumns,
  spinSlots,
  spinTokenColumns,
  spinTokens,
  spinWrapPropColumns,
  spinWrapProps,
  spinWrapSlotColumns,
  spinWrapSlots,
} from '@doc-data/spin-api';
const apiSections = [
  {
    title: "API · Spin Props",
    tables: [
      { columns: spinPropColumns, rows: spinProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · SpinWrap Props",
    tables: [
      { columns: spinWrapPropColumns, rows: spinWrapProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Spin Slots",
    tables: [
      { columns: spinSlotColumns, rows: spinSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · SpinWrap Slots",
    tables: [
      { columns: spinWrapSlotColumns, rows: spinWrapSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: spinClassColumns, rows: spinClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: spinTokenColumns, rows: spinTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/피드백/Spin',
  id: 'components-spin',
  component: Spin,
  subcomponents: { SpinWrap },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    tip: { control: 'text', type: { name: 'string', summary: "string" }},
    color: { control: 'select', options: ["primary","success","warning","danger"], type: { name: 'enum', summary: "'primary' | 'success' | 'warning' | 'danger'" } },
    inline: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    overlay: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중",
  },
  render: (_args, context) => ({
    components: { Spin },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Spin v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`spin` · `spin_indicator`로 회전 스피너를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <Spin />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Spin },
    template: `<Spin />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <Spin size=\"sm\" />\n  <Spin />\n  <Spin size=\"lg\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Spin },
    template: `<Spin size="sm" />
      <Spin />
      <Spin size="lg" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "공통 `color_*` 클래스로 의미를 표현합니다.",
      },
      source: {
        code: "<script setup>\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <Spin color=\"primary\" aria-label=\"Primary 로딩\" />\n  <Spin color=\"success\" aria-label=\"Success 로딩\" />\n  <Spin color=\"warning\" aria-label=\"Warning 로딩\" />\n  <Spin color=\"danger\" aria-label=\"Danger 로딩\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Spin },
    template: `<Spin color="primary" aria-label="Primary 로딩" />
      <Spin color="success" aria-label="Success 로딩" />
      <Spin color="warning" aria-label="Warning 로딩" />
      <Spin color="danger" aria-label="Danger 로딩" />`,
  })),
};


export const Tip = {
  name: "설명 텍스트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <Spin tip=\"데이터를 불러오는 중…\" aria-label=\"데이터를 불러오는 중\" />\n  <Spin size=\"lg\" tip=\"파일 업로드 중…\" aria-label=\"파일 업로드 중\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Spin },
    template: `<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />`,
  })),
};


export const Inline = {
  name: "인라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <p>\n    <Spin size=\"sm\" inline color=\"primary\" tip=\"저장 중…\" aria-label=\"저장 중\" />\n  </p>\n  <Button variant=\"filled\" color=\"primary\" loading disabled aria-busy=\"true\" label=\"제출 중…\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Spin },
    template: `<p>
        <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`,
  })),
};


export const Block = {
  name: "블록 정렬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다.",
      },
      source: {
        code: "<script setup>\nimport Spin from '@uxkm/ui/components/Spin.vue';\n</script>\n\n<template>\n  <Spin block color=\"primary\" tip=\"잠시만 기다려 주세요…\" aria-label=\"로딩 중\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  tip: "값",
  color: "primary",
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: "로딩 중"
},
  render: withDocsCanvasRender(() => ({
    components: { Spin },
    template: `<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />`,
  })),
};


export const Overlay = {
  name: "컨테이너 오버레이",
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Card from '@uxkm/ui/components/Card.vue';\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\nimport SpinWrap from '@uxkm/ui/components/SpinWrap.vue';\n</script>\n\n<template>\n  <SpinWrap block loading tip=\"데이터 로딩 중…\" aria-label=\"데이터 로딩 중\" style=\"max-width: var(--input-max-width);\">\n    <Card variant=\"shadow\">\n      <CardHeader title=\"대시보드\" />\n      <CardBody>\n        <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>\n      </CardBody>\n    </Card>\n  </SpinWrap>\n  <SpinWrap block blur loading aria-label=\"처리 중\" style=\"max-width: var(--input-max-width); margin-top: var(--space-md);\">\n    <Card variant=\"shadow\">\n      <CardHeader title=\"블러 효과\" />\n      <CardBody>\n        <p>\n          <code class=\"typo_code\">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>\n        </CardBody>\n      </Card>\n    </SpinWrap>\n</template>",
        language: 'vue',
      },
    },
  },
  render: (() => {
    const demo = () => ({
      components: { Card, CardBody, CardHeader, SpinWrap },
      template: `<SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
        <Card variant="shadow">
          <CardHeader title="대시보드" />
          <CardBody>
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </CardBody>
        </Card>
      </SpinWrap>
      <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
        <Card variant="shadow">
          <CardHeader title="블러 효과" />
          <CardBody>
            <p>
              <code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
            </CardBody>
          </Card>
        </SpinWrap>`,
    });
    return withDocsCanvasRender(demo, demo);
  })(),
};

