import Icon from './Icon.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import TypoText from './TypoText.vue';
import { commonIconGallery } from '../data/common-icons.js';
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
    name: { control: 'select', options: ["search","plus","minus","close","check","edit","trash","delete","copy","save","download","upload","share","link","external-link","filter","refresh","undo","redo","printer","paperclip","arrow-left","arrow-right","arrow-up","arrow-down","chevron-left","chevron-right","chevron-up","chevron-down","menu","more-vertical","more-horizontal","grid","list","home","settings","user","users","mail","phone","bell","message","send","info","help-circle","alert-circle","alert-triangle","check-circle","x-circle","star","heart","bookmark","thumb-up","eye","eye-off","lock","unlock","log-in","log-out","calendar","clock","folder","file","image","camera","map-pin","globe","cart","credit-card","tag","sun","moon","cloud","book","zoom-in","zoom-out","maximize"], type: { name: 'enum', summary: "common-icons 갤러리 키" }},
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
        story: "svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon>\n    <circle cx=\"11\" cy=\"11\" r=\"8\" />\n    <path d=\"m21 21-4.35-4.35\" />\n  </Icon>\n  <Icon>\n    <path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" />\n    <path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\" />\n  </Icon>\n  <Icon>\n    <path d=\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />\n  </Icon>\n</template>",
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
    template: `<Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon size=\"sm\">\n    <path d=\"M12 5v14M5 12h14\" />\n  </Icon>\n  <Icon>\n    <path d=\"M12 5v14M5 12h14\" />\n  </Icon>\n  <Icon size=\"lg\">\n    <path d=\"M12 5v14M5 12h14\" />\n  </Icon>\n  <Icon size=\"xl\">\n    <path d=\"M12 5v14M5 12h14\" />\n  </Icon>\n</template>",
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
    template: `<Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>`,
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon color=\"default\">\n    <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\" />\n  </Icon>\n  <Icon color=\"primary\">\n    <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\" />\n  </Icon>\n  <Icon color=\"success\">\n    <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n    <path d=\"M22 4 12 14.01l-3-3\" />\n  </Icon>\n  <Icon color=\"warning\">\n    <path d=\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\" />\n  </Icon>\n  <Icon color=\"danger\">\n    <circle cx=\"12\" cy=\"12\" r=\"10\" />\n    <path d=\"m15 9-6 6M9 9l6 6\" />\n  </Icon>\n</template>",
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
    template: `<Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>`,
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\n</script>\n\n<template>\n  <p>\n    <Icon inline color=\"info\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <path d=\"M12 16v-4\" />\n      <circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"currentColor\" stroke=\"none\" />\n    </Icon>\n    <TypoText tag=\"span\" class=\"ml_sm\">변경 사항이 자동 저장됩니다.</TypoText>\n  </p>\n  <p>\n    <Icon inline color=\"success\">\n      <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n      <path d=\"M22 4 12 14.01l-3-3\" />\n    </Icon>\n    <TypoText tag=\"span\" class=\"ml_sm\">업로드가 완료되었습니다.</TypoText>\n  </p>\n</template>",
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
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon circle color=\"primary\" size=\"sm\">\n    <path d=\"M12 5v14M5 12h14\" />\n  </Icon>\n  <Icon circle color=\"success\" size=\"sm\">\n    <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n    <path d=\"M22 4 12 14.01l-3-3\" />\n  </Icon>\n  <Icon circle color=\"danger\" size=\"lg\">\n    <path d=\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />\n  </Icon>\n  <Icon square color=\"primary\" size=\"sm\">\n    <path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" />\n    <path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\" />\n  </Icon>\n</template>",
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
    template: `<Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>`,
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon button color=\"primary\" aria-label=\"검색\">\n    <circle cx=\"11\" cy=\"11\" r=\"8\" />\n    <path d=\"m21 21-4.35-4.35\" />\n  </Icon>\n  <Icon button color=\"muted\" aria-label=\"설정\">\n    <circle cx=\"12\" cy=\"12\" r=\"3\" />\n    <path d=\"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\" />\n  </Icon>\n  <Icon button color=\"danger\" aria-label=\"삭제\">\n    <path d=\"M18 6 6 18M6 6l12 12\" />\n  </Icon>\n</template>",
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
    template: `<Icon button color="primary" aria-label="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" aria-label="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" aria-label="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>`,
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon circle pulse color=\"primary\" size=\"sm\">\n    <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" />\n    <path d=\"M13.73 21a2 2 0 0 1-3.46 0\" />\n  </Icon>\n  <Icon circle pulse color=\"danger\" size=\"sm\">\n    <circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"currentColor\" stroke=\"none\" />\n  </Icon>\n</template>",
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
    template: `<Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\n</script>\n\n<template>\n  <div class=\"icon_group\">\n    <Icon color=\"muted\">\n      <path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" />\n      <polyline points=\"16 6 12 2 8 6\" />\n      <line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\" />\n    </Icon>\n    <Icon color=\"muted\">\n      <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n      <polyline points=\"7 10 12 15 17 10\" />\n      <line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\" />\n    </Icon>\n    <Icon color=\"muted\">\n      <path d=\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />\n    </Icon>\n  </div>\n  <p>\n    <Icon circle color=\"primary\" size=\"sm\">\n      <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" />\n      <circle cx=\"12\" cy=\"7\" r=\"4\" />\n    </Icon>\n    <TypoText tag=\"span\" color=\"muted\" size=\"sm\" class=\"ml_sm\">홍길동님이 댓글을 남겼습니다.</TypoText>\n  </p>\n</template>",
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
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
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
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Icon spin color=\"primary\">\n    <path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />\n  </Icon>\n  <Icon spin size=\"lg\" color=\"muted\">\n    <path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />\n  </Icon>\n</template>",
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
    template: `<Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>`,
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

