import Badge from './Badge.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Avatar from './Avatar.vue';
import BadgeWrap from './BadgeWrap.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import {
  badgeClassColumns,
  badgeClasses,
  badgePropColumns,
  badgeProps,
  badgeSlotColumns,
  badgeSlots,
  badgeTokenColumns,
  badgeTokens,
  badgeWrapPropColumns,
  badgeWrapProps,
  badgeWrapSlotColumns,
  badgeWrapSlots,
} from '@doc-data/badge-api';
const apiSections = [
  {
    title: "API · Badge Props",
    tables: [
      { columns: badgePropColumns, rows: badgeProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · BadgeWrap Props",
    tables: [
      { columns: badgeWrapPropColumns, rows: badgeWrapProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Badge Slots",
    tables: [
      { columns: badgeSlotColumns, rows: badgeSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · BadgeWrap Slots",
    tables: [
      { columns: badgeWrapSlotColumns, rows: badgeWrapSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: badgeClassColumns, rows: badgeClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: badgeTokenColumns, rows: badgeTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/Badge',
  id: 'components-badge',
  component: Badge,
  subcomponents: { BadgeWrap },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ["default","primary","success","warning","danger","info"], type: { name: 'enum', summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'" } },
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    dot: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    count: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    dotOnly: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
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
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { Badge },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Badge v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "공통 color_* 클래스로 의미에 따른 색상을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\n</script>\n\n<template>\n  <Badge color=\"default\" label=\"Default\" />\n  <Badge color=\"primary\" label=\"Primary\" />\n  <Badge color=\"success\" label=\"Success\" />\n  <Badge color=\"warning\" label=\"Warning\" />\n  <Badge color=\"danger\" label=\"Danger\" />\n  <Badge color=\"info\" label=\"Info\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "md",
  label: "라벨",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge },
    template: `<Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "badge_sm · badge_lg로 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\n</script>\n\n<template>\n  <Badge size=\"sm\" color=\"primary\" label=\"Small\" />\n  <Badge color=\"primary\" label=\"Medium\" />\n  <Badge size=\"lg\" color=\"primary\" label=\"Large\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "md",
  dot: false,
  count: false,
  dotOnly: false,
  label: "라벨",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge },
    template: `<Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />`,
  })),
};


export const Dot = {
  name: "Dot 배지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\n</script>\n\n<template>\n  <Badge dot color=\"primary\" label=\"Online\" />\n  <Badge dot color=\"success\" label=\"Active\" />\n  <Badge dot color=\"warning\" label=\"Away\" />\n  <Badge dot color=\"danger\" label=\"Offline\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "md",
  dot: false,
  count: false,
  dotOnly: false,
  label: "라벨",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge },
    template: `<Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />`,
  })),
};


export const Count = {
  name: "카운트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\n</script>\n\n<template>\n  <Badge count color=\"danger\" label=\"3\" />\n  <Badge count color=\"primary\" label=\"12\" />\n  <Badge count color=\"success\" label=\"99+\" />\n  <Badge count size=\"sm\" color=\"danger\" label=\"5\" />\n  <Badge count size=\"lg\" color=\"primary\" label=\"New\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "md",
  dot: false,
  count: false,
  dotOnly: false,
  label: "라벨",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge },
    template: `<Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />`,
  })),
};


export const Wrap = {
  name: "겹침 표시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport BadgeWrap from '@uxkm/ui/components/BadgeWrap.vue';\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <BadgeWrap>\n    <Button variant=\"filled\" color=\"primary\" label=\"알림\" />\n    <Badge count color=\"danger\" aria-label=\"읽지 않은 알림 5건\" label=\"5\" />\n  </BadgeWrap>\n  <BadgeWrap>\n    <Button variant=\"ghost\" icon-only aria-label=\"메시지\">\n      <template #icon-before>\n        <Icon>\n          <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\" />\n        </Icon>\n      </template>\n    </Button>\n    <Badge count color=\"danger\" aria-label=\"새 메시지 12건\" label=\"12\" />\n  </BadgeWrap>\n  <BadgeWrap>\n    <Avatar color=\"primary\" initials=\"홍\" aria-hidden />\n    <Badge dot-only color=\"success\" aria-label=\"온라인\" />\n  </BadgeWrap>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "md",
  dot: false,
  count: false,
  dotOnly: false,
  label: "라벨",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, Badge, BadgeWrap, Button, Icon },
    template: `        <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
        </BadgeWrap>
        <BadgeWrap>
        <Button variant="ghost" icon-only aria-label="메시지">
        <template #icon-before>
        <Icon>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Icon>
        </template>
        </Button>
        <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
        </BadgeWrap>
        <BadgeWrap>
        <Avatar color="primary" initials="홍" aria-hidden />
        <Badge dot-only color="success" aria-label="온라인" />
        </BadgeWrap>`,
  })),
};

