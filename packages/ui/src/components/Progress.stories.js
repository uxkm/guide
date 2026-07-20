import Progress from './Progress.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import ProgressCircle from './ProgressCircle.vue';
import {
  progressCirclePropColumns,
  progressCircleProps,
  progressClassColumns,
  progressClasses,
  progressPropColumns,
  progressProps,
  progressSlotColumns,
  progressSlots,
  progressTokenColumns,
  progressTokens,
} from '@doc-data/progress-api';
const apiSections = [
  {
    title: "API · Progress Props",
    tables: [
      { columns: progressPropColumns, rows: progressProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · ProgressCircle Props",
    tables: [
      { columns: progressCirclePropColumns, rows: progressCircleProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: progressSlotColumns, rows: progressSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: progressClassColumns, rows: progressClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: progressTokenColumns, rows: progressTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/피드백/Progress',
  id: 'components-progress',
  component: Progress,
  subcomponents: { ProgressCircle },
  tags: ['autodocs'],
  argTypes: {
    percent: { control: 'number', type: { name: 'number', summary: "number" }},
    status: { control: 'select', options: ["success","exception"], type: { name: 'enum', summary: "'success' | 'exception'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    showInfo: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    color: { control: 'select', options: ["primary","success","warning","danger"], type: { name: 'enum', summary: "'primary' | 'success' | 'warning' | 'danger'" }},
    striped: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    animated: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    indeterminate: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    inside: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    percent: 0,
    status: "success",
    size: "md",
    showInfo: false,
    label: "라벨",
    color: "primary",
    striped: false,
    animated: false,
    indeterminate: false,
    inside: false,
    block: false,
    ariaLabel: "진행률",
  },
  render: (_args, context) => ({
    components: { Progress },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Progress v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress` · `progress_track` · `progress_bar`로 트랙과 채움 막대를 구성합니다. `progress_bar`의 `style=\"width: …\"` 또는 CSS 변수로 진행률을 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"0\" />\n  <Progress :percent=\"30\" />\n  <Progress :percent=\"60\" />\n  <Progress :percent=\"100\" status=\"success\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  label: "라벨",
  color: "primary",
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="0" />
      <Progress :percent="30" />
      <Progress :percent="60" />
      <Progress :percent="100" status="success" />`,
  })),
};


export const Label = {
  name: "레이블 · 값",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress_header`에 `progress_label` · `progress_value`를 함께 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"42\" show-info label=\"파일 업로드\" aria-label=\"파일 업로드 진행률\" />\n  <Progress :percent=\"67\" show-info label=\"데이터 동기화\" aria-label=\"데이터 동기화 진행률\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
      <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "공통 `color_*` 클래스로 의미를 표현합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"50\" color=\"primary\" aria-label=\"Primary 진행률\" />\n  <Progress :percent=\"100\" color=\"success\" aria-label=\"Success 진행률\" />\n  <Progress :percent=\"75\" color=\"warning\" aria-label=\"Warning 진행률\" />\n  <Progress :percent=\"35\" color=\"danger\" aria-label=\"Danger 진행률\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="50" color="primary" aria-label="Primary 진행률" />
      <Progress :percent="100" color="success" aria-label="Success 진행률" />
      <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
      <Progress :percent="35" color="danger" aria-label="Danger 진행률" />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress_sm` · `progress`(기본) · `progress_lg` 세 가지 높이를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress size=\"sm\" :percent=\"40\" />\n  <Progress :percent=\"55\" />\n  <Progress size=\"lg\" :percent=\"70\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress size="sm" :percent="40" />
      <Progress :percent="55" />
      <Progress size="lg" :percent="70" />`,
  })),
};


export const Striped = {
  name: "줄무늬 · 애니메이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress_striped`로 줄무늬 패턴을, `progress_animated`와 함께 사용하면 흐르는 애니메이션을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"45\" striped color=\"primary\" aria-label=\"줄무늬 진행률\" />\n  <Progress :percent=\"65\" striped animated color=\"primary\" aria-label=\"애니메이션 진행률\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
      <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />`,
  })),
};


export const Indeterminate = {
  name: "불확정",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "진행률을 알 수 없을 때 `is-indeterminate`를 사용합니다. `aria-valuenow`를 생략하거나 `aria-busy=\"true\"`를 함께 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress indeterminate color=\"primary\" aria-label=\"처리 중\" />\n  <Progress indeterminate label=\"동기화 중…\" color=\"success\" aria-label=\"동기화 중\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress indeterminate color="primary" aria-label="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />`,
  })),
};


export const Inside = {
  name: "바 안 텍스트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress_inside`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"25\" inside />\n  <Progress :percent=\"80\" inside size=\"lg\" color=\"success\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="25" inside />
      <Progress :percent="80" inside size="lg" color="success" />`,
  })),
};


export const Circle = {
  name: "원형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`progress_circle`로 원형 진행률을 표시합니다. `style=\"--progress-percent: …\"`로 채움 비율을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';\n</script>\n\n<template>\n  <ProgressCircle :percent=\"25\" />\n  <ProgressCircle :percent=\"68\" color=\"success\" />\n  <ProgressCircle :percent=\"50\" size=\"sm\" color=\"warning\" />\n  <ProgressCircle :percent=\"90\" size=\"lg\" color=\"danger\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { ProgressCircle },
    template: `<ProgressCircle :percent="25" />
      <ProgressCircle :percent="68" color="success" />
      <ProgressCircle :percent="50" size="sm" color="warning" />
      <ProgressCircle :percent="90" size="lg" color="danger" />`,
  })),
};


export const Width = {
  name: "너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`progress_fit`은 최대 너비를 제한하고, `progress_block`은 부모 너비 전체를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Progress from '@uxkm/ui/components/Progress.vue';\n</script>\n\n<template>\n  <Progress :percent=\"50\" show-info label=\"progress_fit\" />\n  <Progress :percent=\"72\" block show-info label=\"progress_block — 전체 너비\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  percent: 0,
  status: "success",
  size: "md",
  showInfo: false,
  label: "라벨",
  color: "primary",
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: "진행률"
},
  render: withDocsCanvasRender(() => ({
    components: { Progress },
    template: `<Progress :percent="50" show-info label="progress_fit" />
      <Progress :percent="72" block show-info label="progress_block — 전체 너비" />`,
  })),
};

