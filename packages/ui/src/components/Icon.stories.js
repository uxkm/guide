import Icon from './Icon.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import TypoText from './TypoText.vue';
import { commonIconGallery } from '../data/common-icons.js';
import { avatarSample } from '@images';
import {
  iconClassColumns,
  iconClasses,
  iconPropColumns,
  iconProps,
  iconSlotColumns,
  iconSlots,
  iconTokenColumns,
  iconTokens,
} from '@doc-data/icon-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: iconPropColumns, rows: iconProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: iconSlotColumns, rows: iconSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: iconClassColumns, rows: iconClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: iconTokenColumns, rows: iconTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기본 요소/Icon',
  id: 'components-icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: ["search","plus","minus","close","check","edit","trash","delete","copy","save","download","upload","share","link","external-link","filter","refresh","undo","redo","printer","paperclip","arrow-left","arrow-right","arrow-up","arrow-down","chevron-left","chevron-right","chevron-up","chevron-down","menu","more-vertical","more-horizontal","grid","list","home","settings","user","users","mail","phone","bell","message","send","info","help-circle","alert-circle","alert-triangle","check-circle","x-circle","star","heart","bookmark","thumb-up","eye","eye-off","lock","unlock","log-in","log-out","calendar","clock","folder","file","image","camera","map-pin","globe","cart","credit-card","tag","sun","moon","cloud","book","zoom-in","zoom-out","maximize","loader"], type: { name: 'enum', summary: "common-icons 갤러리 키" }},
    color: { control: 'select', options: ["default","primary","success","warning","danger","info"], type: { name: 'enum', summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'" } },
    size: { control: 'select', options: ["sm","md","lg","xl"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'xl'" }},
    inline: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    spin: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    button: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    circle: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    square: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    pulse: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { Icon },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Icon v-bind="args" />`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "name prop으로 common-icons 갤러리 키를 지정합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"search\" />\n  <Icon name=\"edit\" />\n  <Icon name=\"trash\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="search" />
      <Icon name="edit" />
      <Icon name="trash" />`,
  })),
};


export const Custom = {
  name: "커스텀 · 슬롯",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "우선순위는 #image > #path(또는 기본 슬롯) > name입니다. 갤러리에 없는 도형은 #path로, 이미지는 #image로 넣습니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <Icon name=\"search\" />\n  <Icon>\n    <template #path>\n      <circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"currentColor\" stroke=\"none\" />\n    </template>\n  </Icon>\n  <Icon size=\"lg\">\n    <template #image>\n      <img :src=\"avatarSample\" alt=\"\" />\n    </template>\n  </Icon>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    setup() {
      return { avatarSample };
    },
    template: `<Icon name="search" />
      <Icon>
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>
      <Icon size="lg">
        <template #image>
          <img :src="avatarSample" alt="" />
        </template>
      </Icon>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"plus\" size=\"sm\" />\n  <Icon name=\"plus\" />\n  <Icon name=\"plus\" size=\"lg\" />\n  <Icon name=\"plus\" size=\"xl\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="plus" size="sm" />
      <Icon name="plus" />
      <Icon name="plus" size="lg" />
      <Icon name="plus" size="xl" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"star\" color=\"default\" />\n  <Icon name=\"star\" color=\"primary\" />\n  <Icon name=\"check-circle\" color=\"success\" />\n  <Icon name=\"alert-triangle\" color=\"warning\" />\n  <Icon name=\"x-circle\" color=\"danger\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="star" color="default" />
      <Icon name="star" color="primary" />
      <Icon name="check-circle" color="success" />
      <Icon name="alert-triangle" color="warning" />
      <Icon name="x-circle" color="danger" />`,
  })),
};


export const Inline = {
  name: "텍스트와 함께",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\n</script>\n\n<template>\n  <p>\n    <Icon name=\"info\" inline color=\"info\" />\n    <TypoText tag=\"span\" class=\"ml_sm\">변경 사항이 자동 저장됩니다.</TypoText>\n  </p>\n  <p>\n    <Icon name=\"check-circle\" inline color=\"success\" />\n    <TypoText tag=\"span\" class=\"ml_sm\">업로드가 완료되었습니다.</TypoText>\n  </p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, TypoText },
    template: `<p>
        <Icon name="info" inline color="info" />
        <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
      </p>
      <p>
        <Icon name="check-circle" inline color="success" />
        <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
      </p>`,
  })),
};


export const Circle = {
  name: "원형 · 사각 배경",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"plus\" circle color=\"primary\" size=\"sm\" />\n  <Icon name=\"check-circle\" circle color=\"success\" size=\"sm\" />\n  <Icon name=\"trash\" circle color=\"danger\" size=\"lg\" />\n  <Icon name=\"edit\" square color=\"primary\" size=\"sm\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="plus" circle color="primary" size="sm" />
      <Icon name="check-circle" circle color="success" size="sm" />
      <Icon name="trash" circle color="danger" size="lg" />
      <Icon name="edit" square color="primary" size="sm" />`,
  })),
};


export const Button = {
  name: "아이콘 버튼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"search\" button color=\"primary\" aria-label=\"검색\" />\n  <Icon name=\"settings\" button color=\"muted\" aria-label=\"설정\" />\n  <Icon name=\"close\" button color=\"danger\" aria-label=\"삭제\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="search" button color="primary" aria-label="검색" />
      <Icon name="settings" button color="muted" aria-label="설정" />
      <Icon name="close" button color="danger" aria-label="삭제" />`,
  })),
};


export const Pulse = {
  name: "펄스",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"bell\" circle pulse color=\"primary\" size=\"sm\" />\n  <Icon circle pulse color=\"danger\" size=\"sm\">\n    <template #path>\n      <circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"currentColor\" stroke=\"none\" />\n    </template>\n  </Icon>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="bell" circle pulse color="primary" size="sm" />
      <Icon circle pulse color="danger" size="sm">
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>`,
  })),
};


export const Group = {
  name: "그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "icon_group으로 여러 아이콘을 나란히 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\n</script>\n\n<template>\n  <div class=\"icon_group\">\n    <Icon name=\"upload\" color=\"muted\" />\n    <Icon name=\"download\" color=\"muted\" />\n    <Icon name=\"trash\" color=\"muted\" />\n  </div>\n  <p>\n    <Icon name=\"user\" circle color=\"primary\" size=\"sm\" />\n    <TypoText tag=\"span\" color=\"muted\" size=\"sm\" class=\"ml_sm\">홍길동님이 댓글을 남겼습니다.</TypoText>\n  </p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, TypoText },
    template: `<div class="icon_group">
        <Icon name="upload" color="muted" />
        <Icon name="download" color="muted" />
        <Icon name="trash" color="muted" />
      </div>
      <p>
        <Icon name="user" circle color="primary" size="sm" />
        <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
      </p>`,
  })),
};


export const Spin = {
  name: "로딩",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon name=\"loader\" spin color=\"primary\" />\n  <Icon name=\"loader\" spin size=\"lg\" color=\"muted\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon },
    template: `<Icon name="loader" spin color="primary" />
      <Icon name="loader" spin size="lg" color="muted" />`,
  })),
};


export const Gallery = {
  name: "아이콘 유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\nimport { commonIconGallery } from '@uxkm/ui/data/common-icons';\n</script>\n\n<template>\n  <div class=\"icon_grid\">\n    <div\n    v-for=\"name in commonIconGallery\"\n    :key=\"name\"\n    class=\"icon_grid-item\"\n    >\n    <Icon :name=\"name\" class=\"icon_lg\" />\n    <TypoText tag=\"span\" size=\"sm\" color=\"muted\">{{ name }}</TypoText>\n  </div>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  name: "search",
  color: "값",
  size: "md",
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, TypoText },
    setup() {
      return { commonIconGallery };
    },
    template: `<div class="icon_grid">
        <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
        >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
      </div>`,
  })),
};
