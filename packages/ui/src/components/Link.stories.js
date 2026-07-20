import Link from './Link.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Alert from './Alert.vue';
import Icon from './Icon.vue';
import {
  linkClassColumns,
  linkClasses,
  linkPropColumns,
  linkProps,
  linkSlotColumns,
  linkSlots,
  linkTokenColumns,
  linkTokens,
} from '@doc-data/link-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: linkPropColumns, rows: linkProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: linkSlotColumns, rows: linkSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: linkClassColumns, rows: linkClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: linkTokenColumns, rows: linkTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기본 요소/Link',
  id: 'components-link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ["primary","muted","success","warning","danger"], type: { name: 'enum', summary: "'primary' | 'muted' | 'success' | 'warning' | 'danger'" }},
    size: { control: 'select', options: ["sm","lg","xl"], type: { name: 'enum', summary: "'sm' | 'lg' | 'xl'" }},
    underline: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    noUnderline: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    standalone: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    nav: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    back: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    iconOnly: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    active: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    href: { control: 'text', type: { name: 'string', summary: "string" }},
    target: { control: 'text', type: { name: 'string', summary: "string" }},
    rel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    size: "sm",
    underline: false,
    noUnderline: false,
    standalone: false,
    nav: false,
    block: false,
    back: false,
    iconOnly: false,
    active: false,
    disabled: false,
    label: "라벨",
    href: "#",
    target: "값",
    rel: "값",
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { Link },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Link v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다.",
      },
      source: {
        code: "<script setup>\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Link label=\"더 보기\" />\n  <Link label=\"가이드 문서\" />\n  <Link underline label=\"항상 밑줄\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Link },
    template: `<Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />`,
  })),
};


export const Color = {
  name: "색상",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <div class=\"link_row\">\n    <Link color=\"primary\" label=\"Primary\" />\n    <Link color=\"muted\" label=\"Muted\" />\n    <Link color=\"success\" label=\"Success\" />\n    <Link color=\"warning\" label=\"Warning\" />\n    <Link color=\"danger\" label=\"Danger\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Link },
    template: `<div class="link_row">
        <Link color="primary" label="Primary" />
        <Link color="muted" label="Muted" />
        <Link color="success" label="Success" />
        <Link color="warning" label="Warning" />
        <Link color="danger" label="Danger" />
      </div>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "공통 size_* 클래스로 텍스트 크기를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Link size=\"sm\" label=\"Small\" />\n  <Link label=\"Base\" />\n  <Link size=\"lg\" label=\"Large\" />\n  <Link size=\"xl\" label=\"Extra Large\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Link },
    template: `<Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />`,
  })),
};


export const Style = {
  name: "스타일",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <div class=\"link_row\">\n    <Link label=\"기본 (hover 밑줄)\" />\n    <Link underline label=\"항상 밑줄\" />\n    <Link no-underline label=\"밑줄 없음\" />\n    <Link standalone label=\"터치 영역 확대\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Link },
    template: `<div class="link_row">
        <Link label="기본 (hover 밑줄)" />
        <Link underline label="항상 밑줄" />
        <Link no-underline label="밑줄 없음" />
        <Link standalone label="터치 영역 확대" />
      </div>`,
  })),
};


export const Nav = {
  name: "내비게이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "link_nav · is-active로 메뉴·탭 링크를 표현합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <nav class=\"link_group-inline\" aria-label=\"섹션 내비게이션\">\n    <Link nav active label=\"개요\" />\n    <Link nav label=\"컴포넌트\" />\n    <Link nav label=\"토큰\" />\n    <Link nav label=\"접근성\" />\n  </nav>\n  <Link back label=\"이전 페이지\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <path d=\"M19 12H5M12 19l-7-7 7-7\" />\n    </Icon>\n  </template>\n  </Link>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Link },
    template: `        <nav class="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
        </nav>
        <Link back label="이전 페이지">
        <template #icon>
        <Icon class="link_icon">
        <path d="M19 12H5M12 19l-7-7 7-7" />
        </Icon>
        </template>
        </Link>`,
  })),
};


export const Block = {
  name: "블록 · 그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "link_block · link_group으로 세로 링크 목록을 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <div class=\"link_group\" style=\"max-width: 280px; width: 100%;\">\n    <Link block label=\"시작하기\">\n    <template #icon>\n      <Icon class=\"link_icon\">\n        <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\" />\n        <path d=\"M14 2v6h6\" />\n      </Icon>\n    </template>\n  </Link>\n  <Link block label=\"컴포넌트\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" />\n      <path d=\"M3 9h18M9 21V9\" />\n    </Icon>\n  </template>\n  </Link>\n  <Link block color=\"muted\" label=\"도움말\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <path d=\"M12 16v-4\" />\n      <circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"currentColor\" stroke=\"none\" />\n    </Icon>\n  </template>\n  </Link>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Link },
    template: `        <div class="link_group" style="max-width: 280px; width: 100%;">
        <Link block label="시작하기">
        <template #icon>
        <Icon class="link_icon">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        </Icon>
        </template>
        </Link>
        <Link block label="컴포넌트">
        <template #icon>
        <Icon class="link_icon">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
        </Icon>
        </template>
        </Link>
        <Link block color="muted" label="도움말">
        <template #icon>
        <Icon class="link_icon">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        </template>
        </Link>
        </div>`,
  })),
};


export const IconOnly = {
  name: "아이콘 전용",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Link icon-only aria-label=\"검색\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <circle cx=\"11\" cy=\"11\" r=\"8\" />\n      <path d=\"m21 21-4.35-4.35\" />\n    </Icon>\n  </template>\n  </Link>\n  <Link icon-only aria-label=\"편집\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" />\n      <path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\" />\n    </Icon>\n  </template>\n  </Link>\n  <Link icon-only color=\"muted\" aria-label=\"더 보기\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <circle cx=\"12\" cy=\"12\" r=\"1\" />\n      <circle cx=\"19\" cy=\"12\" r=\"1\" />\n      <circle cx=\"5\" cy=\"12\" r=\"1\" />\n    </Icon>\n  </template>\n  </Link>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Link },
    template: `        <Link icon-only aria-label="검색">
        <template #icon>
        <Icon class="link_icon">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        </Icon>
        </template>
        </Link>
        <Link icon-only aria-label="편집">
        <template #icon>
        <Icon class="link_icon">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </Icon>
        </template>
        </Link>
        <Link icon-only color="muted" aria-label="더 보기">
        <template #icon>
        <Icon class="link_icon">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
        </Icon>
        </template>
        </Link>`,
  })),
};


export const IconDemo = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <div class=\"link_row\">\n    <Link label=\"외부 링크\">\n    <template #icon>\n      <Icon class=\"link_icon\">\n        <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />\n        <polyline points=\"15 3 21 3 21 9\" />\n        <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\" />\n      </Icon>\n    </template>\n  </Link>\n  <Link>\n  다운로드\n  <Icon class=\"link_icon\">\n    <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n    <polyline points=\"7 10 12 15 17 10\" />\n    <line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\" />\n  </Icon>\n  </Link>\n  <Link label=\"다음 단계\">\n  <template #icon>\n    <Icon class=\"link_icon\">\n      <path d=\"M5 12h14M12 5l7 7-7 7\" />\n    </Icon>\n  </template>\n  </Link>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Link },
    template: `        <div class="link_row">
        <Link label="외부 링크">
        <template #icon>
        <Icon class="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
        </Icon>
        </template>
        </Link>
        <Link>
        다운로드
        <Icon class="link_icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        </Link>
        <Link label="다음 단계">
        <template #icon>
        <Icon class="link_icon">
        <path d="M5 12h14M12 5l7 7-7 7" />
        </Icon>
        </template>
        </Link>
        </div>`,
  })),
};


export const External = {
  name: "새 창 열기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Link\n  href=\"https://example.com\"\n  target=\"_blank\"\n  rel=\"noopener noreferrer\"\n  >\n  공식 문서\n  <span class=\"color_muted size_sm\">(새 창)</span>\n  <Icon class=\"link_icon\">\n    <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />\n    <polyline points=\"15 3 21 3 21 9\" />\n    <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\" />\n  </Icon>\n  </Link>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Link },
    template: `<Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      >
      공식 문서
      <span class="color_muted size_sm">(새 창)</span>
      <Icon class="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
      </Link>`,
  })),
};


export const Disabled = {
  name: "비활성",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: "<script setup>\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Link disabled label=\"비활성 링크\" />\n  <Link disabled label=\"비활성 (span)\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Link },
    template: `<Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />`,
  })),
};


export const Context = {
  name: "문맥 속 사용",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.",
      },
      source: {
        code: "<script setup>\nimport Alert from '@uxkm/ui/components/Alert.vue';\nimport Link from '@uxkm/ui/components/Link.vue';\n</script>\n\n<template>\n  <Alert title=\"업데이트 안내\">\n    새 버전이 출시되었습니다.\n    <Link size=\"sm\" label=\"릴리스 노트 보기\" />\n  </Alert>\n  <p class=\"color_muted\">\n    계정이 없으신가요?\n    <Link label=\"회원가입\" />\n  </p>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  color: "primary",
  size: "sm",
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: "라벨",
  href: "#",
  target: "값",
  rel: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Alert, Link },
    template: `<Alert title="업데이트 안내">
        새 버전이 출시되었습니다.
        <Link size="sm" label="릴리스 노트 보기" />
      </Alert>
      <p class="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>`,
  })),
};

