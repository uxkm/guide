import Avatar from './Avatar.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import AvatarGroup from './AvatarGroup.vue';
import Icon from './Icon.vue';
import { avatarSample } from '@images';
import {
  avatarClassColumns,
  avatarClasses,
  avatarGroupPropColumns,
  avatarGroupProps,
  avatarGroupSlotColumns,
  avatarGroupSlots,
  avatarPropColumns,
  avatarProps,
  avatarSlotColumns,
  avatarSlots,
  avatarTokenColumns,
  avatarTokens,
} from '@doc-data/avatar-api';
const apiSections = [
  {
    title: "API · Avatar Props",
    tables: [
      { columns: avatarPropColumns, rows: avatarProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · AvatarGroup Props",
    tables: [
      { columns: avatarGroupPropColumns, rows: avatarGroupProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Avatar Slots",
    tables: [
      { columns: avatarSlotColumns, rows: avatarSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · AvatarGroup Slots",
    tables: [
      { columns: avatarGroupSlotColumns, rows: avatarGroupSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: avatarClassColumns, rows: avatarClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: avatarTokenColumns, rows: avatarTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/Avatar',
  id: 'components-avatar',
  component: Avatar,
  subcomponents: { AvatarGroup },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', type: { name: 'string', summary: "string" }},
    alt: { control: 'text', type: { name: 'string', summary: "string" }},
    initials: { control: 'text', type: { name: 'string', summary: "string" }},
    color: { control: 'select', options: ["default","primary","success","warning","danger","info"], type: { name: 'enum', summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'" } },
    size: { control: 'select', options: ["sm","md","lg","xl"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'xl'" }},
    square: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    badgeColor: { control: 'select', options: ["success","warning","danger"], type: { name: 'enum', summary: "'success' | 'warning' | 'danger'" } },
    badgeLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    ariaHidden: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    src: avatarSample,
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    square: false,
    badgeColor: "",
    badgeLabel: "온라인",
    ariaHidden: false,
  },
  render: (_args, context) => ({
    components: { Avatar },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Avatar v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <Avatar :src=\"avatarSample\" alt=\"홍길동\" />\n  <Avatar color=\"primary\" initials=\"홍\" aria-hidden />\n  <Avatar color=\"default\" aria-hidden>\n    <template #icon>\n      <Icon name=\"user\" class=\"avatar_icon\" />\n    </template>\n  </Avatar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, Icon },
    setup() {
      return { avatarSample };
    },
    template: `<Avatar :src="avatarSample" alt="홍길동" />
      <Avatar color="primary" initials="홍" aria-hidden />
      <Avatar color="default" aria-hidden>
        <template #icon>
          <Icon name="user" class="avatar_icon" />
        </template>
      </Avatar>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\n</script>\n\n<template>\n  <Avatar size=\"sm\" color=\"primary\" initials=\"A\" aria-hidden />\n  <Avatar color=\"primary\" initials=\"B\" aria-hidden />\n  <Avatar size=\"lg\" color=\"primary\" initials=\"C\" aria-hidden />\n  <Avatar size=\"xl\" color=\"primary\" initials=\"D\" aria-hidden />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar },
    template: `<Avatar size="sm" color="primary" initials="A" aria-hidden />
      <Avatar color="primary" initials="B" aria-hidden />
      <Avatar size="lg" color="primary" initials="C" aria-hidden />
      <Avatar size="xl" color="primary" initials="D" aria-hidden />`,
  })),
};


export const Shape = {
  name: "형태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <Avatar color=\"primary\" initials=\"원\" aria-hidden />\n  <Avatar square color=\"primary\" initials=\"각\" aria-hidden />\n  <Avatar square :src=\"avatarSample\" alt=\"홍길동\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar },
    setup() {
      return { avatarSample };
    },
    template: `<Avatar color="primary" initials="원" aria-hidden />
      <Avatar square color="primary" initials="각" aria-hidden />
      <Avatar square :src="avatarSample" alt="홍길동" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\n</script>\n\n<template>\n  <Avatar color=\"default\" initials=\"D\" aria-hidden />\n  <Avatar color=\"primary\" initials=\"P\" aria-hidden />\n  <Avatar color=\"success\" initials=\"S\" aria-hidden />\n  <Avatar color=\"warning\" initials=\"W\" aria-hidden />\n  <Avatar color=\"danger\" initials=\"E\" aria-hidden />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar },
    template: `<Avatar color="default" initials="D" aria-hidden />
      <Avatar color="primary" initials="P" aria-hidden />
      <Avatar color="success" initials="S" aria-hidden />
      <Avatar color="warning" initials="W" aria-hidden />
      <Avatar color="danger" initials="E" aria-hidden />`,
  })),
};


export const Badge = {
  name: "상태 배지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\n</script>\n\n<template>\n  <Avatar color=\"primary\" initials=\"온\" badge-color=\"success\" badge-label=\"온라인\" aria-hidden />\n  <Avatar color=\"default\" initials=\"대\" badge-color=\"warning\" badge-label=\"자리 비움\" aria-hidden />\n  <Avatar color=\"default\" initials=\"오\" badge-color=\"danger\" badge-label=\"오프라인\" aria-hidden />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar },
    template: `<Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
      <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
      <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />`,
  })),
};


export const Group = {
  name: "그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "avatar_group으로 여러 아바타를 겹쳐 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <AvatarGroup aria-label=\"팀 멤버 4명\">\n    <Avatar color=\"primary\" initials=\"김\" aria-hidden />\n    <Avatar color=\"success\" initials=\"이\" aria-hidden />\n    <Avatar color=\"warning\" initials=\"박\" aria-hidden />\n    <Avatar color=\"danger\" initials=\"최\" aria-hidden />\n  </AvatarGroup>\n  <AvatarGroup aria-label=\"팀 멤버 3명\">\n    <Avatar :src=\"avatarSample\" alt=\"홍길동\" />\n    <Avatar color=\"primary\" initials=\"홍\" aria-hidden />\n    <Avatar color=\"default\" aria-hidden>\n      <template #icon>\n        <Icon name=\"plus\" class=\"avatar_icon\" />\n      </template>\n    </Avatar>\n  </AvatarGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  alt: "홍길동",
  initials: "홍",
  color: "primary",
  size: "md",
  badgeColor: "",
  badgeLabel: "온라인"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, AvatarGroup, Icon },
    setup() {
      return { avatarSample };
    },
    template: `<AvatarGroup aria-label="팀 멤버 4명">
        <Avatar color="primary" initials="김" aria-hidden />
        <Avatar color="success" initials="이" aria-hidden />
        <Avatar color="warning" initials="박" aria-hidden />
        <Avatar color="danger" initials="최" aria-hidden />
      </AvatarGroup>
      <AvatarGroup aria-label="팀 멤버 3명">
        <Avatar :src="avatarSample" alt="홍길동" />
        <Avatar color="primary" initials="홍" aria-hidden />
        <Avatar color="default" aria-hidden>
          <template #icon>
            <Icon name="plus" class="avatar_icon" />
          </template>
        </Avatar>
      </AvatarGroup>`,
  })),
};

