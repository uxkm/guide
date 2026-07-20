import Tag from './Tag.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import TagGroup from './TagGroup.vue';
import {
  tagClassColumns,
  tagClasses,
  tagGroupPropColumns,
  tagGroupProps,
  tagGroupSlotColumns,
  tagGroupSlots,
  tagPropColumns,
  tagProps,
  tagSlotColumns,
  tagSlots,
  tagTokenColumns,
  tagTokens,
} from '@doc-data/tag-api';
const apiSections = [
  {
    title: "API · Tag Props",
    tables: [
      { columns: tagPropColumns, rows: tagProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · TagGroup Props",
    tables: [
      { columns: tagGroupPropColumns, rows: tagGroupProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Tag Slots",
    tables: [
      { columns: tagSlotColumns, rows: tagSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · TagGroup Slots",
    tables: [
      { columns: tagGroupSlotColumns, rows: tagGroupSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: tagClassColumns, rows: tagClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: tagTokenColumns, rows: tagTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/Tag',
  id: 'components-tag',
  component: Tag,
  subcomponents: { TagGroup },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ["default","primary","success","warning","danger","info"], type: { name: 'enum', summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'" } },
    variant: { control: 'select', options: ["filled","solid","outline","borderless"], type: { name: 'enum', summary: "'filled' | 'solid' | 'outline' | 'borderless'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    round: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    checkable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    add: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    closable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    selected: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    href: { control: 'text', type: { name: 'string', summary: "string" }},
    closeLabel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    variant: "filled",
    size: "md",
    round: false,
    checkable: false,
    add: false,
    closable: false,
    selected: false,
    disabled: false,
    label: "라벨",
    href: "#",
    closeLabel: "라벨",
  },
  render: (_args, context) => ({
    components: { Tag },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Tag v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본 (Filled)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag color=\"default\" label=\"Default\" />\n  <Tag color=\"primary\" label=\"Primary\" />\n  <Tag color=\"success\" label=\"Success\" />\n  <Tag color=\"warning\" label=\"Warning\" />\n  <Tag color=\"danger\" label=\"Danger\" />\n  <Tag color=\"info\" label=\"Info\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `<Tag color="default" label="Default" />
      <Tag color="primary" label="Primary" />
      <Tag color="success" label="Success" />
      <Tag color="warning" label="Warning" />
      <Tag color="danger" label="Danger" />
      <Tag color="info" label="Info" />`,
  })),
};


export const Solid = {
  name: "솔리드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag variant=\"solid\" color=\"default\" label=\"Default\" />\n  <Tag variant=\"solid\" color=\"primary\" label=\"Primary\" />\n  <Tag variant=\"solid\" color=\"success\" label=\"Success\" />\n  <Tag variant=\"solid\" color=\"warning\" label=\"Warning\" />\n  <Tag variant=\"solid\" color=\"danger\" label=\"Danger\" />\n  <Tag variant=\"solid\" color=\"info\" label=\"Info\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `<Tag variant="solid" color="default" label="Default" />
      <Tag variant="solid" color="primary" label="Primary" />
      <Tag variant="solid" color="success" label="Success" />
      <Tag variant="solid" color="warning" label="Warning" />
      <Tag variant="solid" color="danger" label="Danger" />
      <Tag variant="solid" color="info" label="Info" />`,
  })),
};


export const Outline = {
  name: "아웃라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag_outline으로 배경 없이 테두리만 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag variant=\"outline\" color=\"default\" label=\"Default\" />\n  <Tag variant=\"outline\" color=\"primary\" label=\"Primary\" />\n  <Tag variant=\"outline\" color=\"success\" label=\"Success\" />\n  <Tag variant=\"outline\" color=\"warning\" label=\"Warning\" />\n  <Tag variant=\"outline\" color=\"danger\" label=\"Danger\" />\n  <Tag variant=\"outline\" color=\"info\" label=\"Info\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `<Tag variant="outline" color="default" label="Default" />
      <Tag variant="outline" color="primary" label="Primary" />
      <Tag variant="outline" color="success" label="Success" />
      <Tag variant="outline" color="warning" label="Warning" />
      <Tag variant="outline" color="danger" label="Danger" />
      <Tag variant="outline" color="info" label="Info" />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\n</script>\n\n<template>\n  <TagGroup tight>\n    <Tag size=\"sm\" color=\"primary\" label=\"Small\" />\n    <Tag color=\"primary\" label=\"Medium\" />\n    <Tag size=\"lg\" color=\"primary\" label=\"Large\" />\n  </TagGroup>\n  <TagGroup tight>\n    <Tag size=\"sm\" variant=\"outline\" color=\"success\" label=\"Small\" />\n    <Tag variant=\"outline\" color=\"success\" label=\"Medium\" />\n    <Tag size=\"lg\" variant=\"outline\" color=\"success\" label=\"Large\" />\n  </TagGroup>\n  <TagGroup tight>\n    <Tag size=\"sm\" variant=\"solid\" color=\"danger\" label=\"Small\" />\n    <Tag variant=\"solid\" color=\"danger\" label=\"Medium\" />\n    <Tag size=\"lg\" variant=\"solid\" color=\"danger\" label=\"Large\" />\n  </TagGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag, TagGroup },
    template: `<TagGroup tight>
        <Tag size="sm" color="primary" label="Small" />
        <Tag color="primary" label="Medium" />
        <Tag size="lg" color="primary" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </TagGroup>`,
  })),
};


export const Round = {
  name: "둥근",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag_round로 pill 형태의 모서리를 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag round color=\"primary\" label=\"Filled\" />\n  <Tag round variant=\"outline\" color=\"primary\" label=\"Outline\" />\n  <Tag round variant=\"solid\" color=\"primary\" label=\"Solid\" />\n  <Tag round variant=\"borderless\" color=\"default\" label=\"Borderless\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `<Tag round color="primary" label="Filled" />
      <Tag round variant="outline" color="primary" label="Outline" />
      <Tag round variant="solid" color="primary" label="Solid" />
      <Tag round variant="borderless" color="default" label="Borderless" />`,
  })),
};


export const Icon = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag color=\"primary\" label=\"Design\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\" />\n        <circle cx=\"7\" cy=\"7\" r=\"1\" fill=\"currentColor\" stroke=\"none\" />\n      </svg>\n    </template>\n  </Tag>\n  <Tag variant=\"outline\" color=\"success\" label=\"Verified\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n        <path d=\"M22 4L12 14.01l-3-3\" />\n      </svg>\n    </template>\n  </Tag>\n  <Tag variant=\"solid\" color=\"danger\" label=\"Error\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\" />\n        <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\n        <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" />\n      </svg>\n    </template>\n  </Tag>\n  <Tag size=\"sm\" round color=\"default\" label=\"User\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" />\n        <circle cx=\"12\" cy=\"7\" r=\"4\" />\n      </svg>\n    </template>\n  </Tag>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `        <Tag color="primary" label="Design">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
        </template>
        </Tag>
        <Tag variant="outline" color="success" label="Verified">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
        </svg>
        </template>
        </Tag>
        <Tag variant="solid" color="danger" label="Error">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        </template>
        </Tag>
        <Tag size="sm" round color="default" label="User">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        </svg>
        </template>
        </Tag>`,
  })),
};


export const Close = {
  name: "닫기 가능",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\n</script>\n\n<template>\n  <TagGroup tight>\n    <Tag closable color=\"primary\" label=\"React\" close-label=\"React 태그 제거\" />\n    <Tag closable variant=\"outline\" color=\"default\" label=\"Svelte\" close-label=\"Svelte 태그 제거\" />\n    <Tag closable variant=\"solid\" color=\"danger\" label=\"Deprecated\" close-label=\"Deprecated 태그 제거\" />\n  </TagGroup>\n  <TagGroup tight>\n    <Tag closable round color=\"success\" label=\"Frontend\" close-label=\"Frontend 태그 제거\">\n      <template #icon>\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\" />\n        </svg>\n      </template>\n    </Tag>\n  </TagGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag, TagGroup },
    template: `        <TagGroup tight>
        <Tag closable color="primary" label="React" close-label="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" close-label="Svelte 태그 제거" />
        <Tag closable variant="solid" color="danger" label="Deprecated" close-label="Deprecated 태그 제거" />
        </TagGroup>
        <TagGroup tight>
        <Tag closable round color="success" label="Frontend" close-label="Frontend 태그 제거">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        </svg>
        </template>
        </Tag>
        </TagGroup>`,
  })),
};


export const Checkable = {
  name: "선택 가능",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\n</script>\n\n<template>\n  <TagGroup aria-label=\"카테고리 필터\">\n    <Tag checkable selected color=\"default\" label=\"전체\" />\n    <Tag checkable color=\"default\" label=\"UI\" />\n    <Tag checkable color=\"default\" label=\"UX\" />\n    <Tag checkable color=\"default\" label=\"개발\" />\n  </TagGroup>\n  <TagGroup aria-label=\"상태 필터\">\n    <Tag checkable round selected color=\"primary\" label=\"진행 중\" />\n    <Tag checkable round selected color=\"success\" label=\"완료\" />\n    <Tag checkable round color=\"warning\" label=\"보류\" />\n    <Tag checkable round color=\"danger\" label=\"취소\" />\n  </TagGroup>\n  <TagGroup tight>\n    <Tag checkable size=\"sm\" selected color=\"default\" label=\"S\" />\n    <Tag checkable size=\"sm\" color=\"default\" label=\"M\" />\n    <Tag checkable size=\"sm\" color=\"default\" label=\"L\" />\n    <Tag checkable size=\"sm\" color=\"default\" label=\"XL\" />\n  </TagGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag, TagGroup },
    template: `<TagGroup aria-label="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup aria-label="상태 필터">
        <Tag checkable round selected color="primary" label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
      <TagGroup tight>
        <Tag checkable size="sm" selected color="default" label="S" />
        <Tag checkable size="sm" color="default" label="M" />
        <Tag checkable size="sm" color="default" label="L" />
        <Tag checkable size="sm" color="default" label="XL" />
      </TagGroup>`,
  })),
};


export const Add = {
  name: "추가",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag add round label=\"태그 추가\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M12 5v14M5 12h14\" />\n      </svg>\n    </template>\n  </Tag>\n  <Tag add size=\"sm\" label=\"+ New Tag\" />\n  <Tag add size=\"lg\" round label=\"+ 카테고리 추가\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `        <Tag add round label="태그 추가">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" />
        </svg>
        </template>
        </Tag>
        <Tag add size="sm" label="+ New Tag" />
        <Tag add size="lg" round label="+ 카테고리 추가" />`,
  })),
};


export const Link = {
  name: "링크",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag href=\"#\" color=\"primary\" label=\"문서 보기\" />\n  <Tag href=\"#\" variant=\"outline\" color=\"primary\" label=\"가이드\" />\n  <Tag href=\"#\" variant=\"solid\" color=\"primary\" label=\"바로가기\" />\n  <Tag href=\"#\" round variant=\"outline\" color=\"success\" label=\"외부 링크\">\n    <template #icon>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />\n        <path d=\"M15 3h6v6\" />\n        <path d=\"M10 14L21 3\" />\n      </svg>\n    </template>\n  </Tag>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `        <Tag href="#" color="primary" label="문서 보기" />
        <Tag href="#" variant="outline" color="primary" label="가이드" />
        <Tag href="#" variant="solid" color="primary" label="바로가기" />
        <Tag href="#" round variant="outline" color="success" label="외부 링크">
        <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
        </svg>
        </template>
        </Tag>`,
  })),
};


export const Disabled = {
  name: "비활성",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\n</script>\n\n<template>\n  <Tag disabled color=\"primary\" label=\"Filled\" />\n  <Tag disabled variant=\"outline\" color=\"success\" label=\"Outline\" />\n  <Tag disabled variant=\"solid\" color=\"danger\" label=\"Solid\" />\n  <Tag checkable selected disabled color=\"default\" label=\"선택됨 (비활성)\" />\n  <Tag add disabled label=\"태그 추가 (비활성)\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag },
    template: `<Tag disabled color="primary" label="Filled" />
      <Tag disabled variant="outline" color="success" label="Outline" />
      <Tag disabled variant="solid" color="danger" label="Solid" />
      <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
      <Tag add disabled label="태그 추가 (비활성)" />`,
  })),
};


export const Group = {
  name: "그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Tag from '@uxkm/ui/components/Tag.vue';\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\n</script>\n\n<template>\n  <TagGroup>\n    <Tag color=\"primary\" label=\"HTML\" />\n    <Tag color=\"primary\" label=\"CSS\" />\n    <Tag color=\"primary\" label=\"JavaScript\" />\n    <Tag color=\"default\" label=\"TypeScript\" />\n    <Tag color=\"success\" label=\"SCSS\" />\n  </TagGroup>\n  <div>\n    <p class=\"color_muted size_sm\" style=\"margin-bottom: 0.5rem;\">선택된 기술 스택</p>\n    <TagGroup tight>\n      <Tag closable round color=\"primary\" label=\"React\" close-label=\"React 태그 제거\" />\n      <Tag closable round color=\"primary\" label=\"Next.js\" close-label=\"Next.js 태그 제거\" />\n      <Tag add round size=\"sm\" label=\"+ 추가\" />\n    </TagGroup>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  variant: "filled",
  size: "md",
  round: false,
  checkable: false,
  add: false,
  closable: false,
  selected: false,
  disabled: false,
  label: "라벨",
  href: "#",
  closeLabel: "라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Tag, TagGroup },
    template: `<TagGroup>
        <Tag color="primary" label="HTML" />
        <Tag color="primary" label="CSS" />
        <Tag color="primary" label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </TagGroup>
      <div>
        <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
        <TagGroup tight>
          <Tag closable round color="primary" label="React" close-label="React 태그 제거" />
          <Tag closable round color="primary" label="Next.js" close-label="Next.js 태그 제거" />
          <Tag add round size="sm" label="+ 추가" />
        </TagGroup>
      </div>`,
  })),
};

