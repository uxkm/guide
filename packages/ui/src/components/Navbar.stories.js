import Navbar from './Navbar.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Badge from './Badge.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Input from './Input.vue';
import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';
import NavbarItem from './NavbarItem.vue';
import NavbarList from './NavbarList.vue';
import {
  navbarClassColumns,
  navbarClasses,
  navbarItemPropColumns,
  navbarItemProps,
  navbarItemSlotColumns,
  navbarItemSlots,
  navbarPropColumns,
  navbarProps,
  navbarSlotColumns,
  navbarSlots,
  navbarTokenColumns,
  navbarTokens,
} from '@doc-data/navbar-api';
const apiSections = [
  {
    title: "API · Navbar Props",
    tables: [
      { columns: navbarPropColumns, rows: navbarProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · NavbarItem Props",
    tables: [
      { columns: navbarItemPropColumns, rows: navbarItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Navbar Slots",
    tables: [
      { columns: navbarSlotColumns, rows: navbarSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · NavbarItem Slots",
    tables: [
      { columns: navbarItemSlotColumns, rows: navbarItemSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: navbarClassColumns, rows: navbarClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: navbarTokenColumns, rows: navbarTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Navbar',
  id: 'components-navbar',
  component: Navbar,
  subcomponents: { NavbarItem, NavbarList },
  tags: ['autodocs'],
  argTypes: {
    brand: { control: 'text', type: { name: 'string', summary: "string" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    borderless: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    dark: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    sticky: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    responsive: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    collapseId: { control: 'text', type: { name: 'string', summary: "string" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값",
  },
  render: (_args, context) => ({
    components: { Navbar, NavbarItem, NavbarList },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"UXKM\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"홈\" active />\n          <NavbarItem label=\"컴포넌트\" />\n          <NavbarItem label=\"토큰\" />\n          <NavbarItem label=\"접근성\" />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="UXKM">
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="컴포넌트" />
        <NavbarItem label="토큰" />
        <NavbarItem label="접근성" />
        </NavbarList>
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Brand = {
  name: "브랜드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"HTML Components\">\n      <template #brand-icon>\n        <Icon class=\"navbar_brand-icon\">\n          <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>\n          <path d=\"M9 3v18\"/>\n        </Icon>\n      </template>\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"가이드\" active />\n          <NavbarItem label=\"리소스\" />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="HTML Components">
        <template #brand-icon>
        <Icon class="navbar_brand-icon">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18"/>
        </Icon>
        </template>
        <template #items>
        <NavbarList>
        <NavbarItem label="가이드" active />
        <NavbarItem label="리소스" />
        </NavbarList>
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Actions = {
  name: "액션 영역",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Dashboard\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"개요\" active />\n          <NavbarItem label=\"분석\" />\n          <NavbarItem label=\"설정\" />\n        </NavbarList>\n      </template>\n      <template #actions>\n        <Button variant=\"ghost\" size=\"sm\" aria-label=\"알림\">\n          <template #icon-before>\n            <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n              <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/>\n              <path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/>\n            </svg>\n          </template>\n        </Button>\n        <Button variant=\"outline\" size=\"sm\" label=\"로그인\" />\n        <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"가입\" />\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Dashboard">
        <template #items>
        <NavbarList>
        <NavbarItem label="개요" active />
        <NavbarItem label="분석" />
        <NavbarItem label="설정" />
        </NavbarList>
        </template>
        <template #actions>
        <Button variant="ghost" size="sm" aria-label="알림">
        <template #icon-before>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        </template>
        </Button>
        <Button variant="outline" size="sm" label="로그인" />
        <Button variant="filled" color="primary" size="sm" label="가입" />
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Search = {
  name: "검색",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Docs\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"시작하기\" />\n          <NavbarItem label=\"컴포넌트\" active />\n          <NavbarItem label=\"패턴\" />\n        </NavbarList>\n      </template>\n      <template #search>\n        <Input type=\"search\" id=\"navbar-search-demo\" size=\"sm\" placeholder=\"문서 검색…\" autocomplete=\"off\" aria-label=\"문서 검색\" />\n      </template>\n      <template #actions>\n        <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"GitHub\" />\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Input, Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Docs">
        <template #items>
        <NavbarList>
        <NavbarItem label="시작하기" />
        <NavbarItem label="컴포넌트" active />
        <NavbarItem label="패턴" />
        </NavbarList>
        </template>
        <template #search>
        <Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" />
        </template>
        <template #actions>
        <Button variant="filled" color="primary" size="sm" label="GitHub" />
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "navbar_sm · navbar_lg로 높이를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Small\" size=\"sm\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"메뉴\" active />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Default\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"메뉴\" active />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Large\" size=\"lg\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"메뉴\" active />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Small" size="sm">
        <template #items>
        <NavbarList>
        <NavbarItem label="메뉴" active />
        </NavbarList>
        </template>
        </Navbar>
        </div>
        <div class="navbar_demo">
        <Navbar brand="Default">
        <template #items>
        <NavbarList>
        <NavbarItem label="메뉴" active />
        </NavbarList>
        </template>
        </Navbar>
        </div>
        <div class="navbar_demo">
        <Navbar brand="Large" size="lg">
        <template #items>
        <NavbarList>
        <NavbarItem label="메뉴" active />
        </NavbarList>
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Variant = {
  name: "스타일 변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다.",
      },
      source: {
        code: "<script setup>\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Borderless\" borderless>\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"홈\" active />\n          <NavbarItem label=\"소개\" />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Dark Surface\" dark>\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"홈\" active />\n          <NavbarItem label=\"소개\" />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n  <div class=\"navbar_demo navbar_demo-scroll\">\n    <Navbar brand=\"Sticky\" sticky>\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"고정\" active />\n        </NavbarList>\n      </template>\n    </Navbar>\n    <div style=\"padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);\">\n      <p style=\"margin: 0 0 var(--space-md);\">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>\n      <p style=\"margin: 0;\">콘텐츠 영역 예시입니다.</p>\n      <p style=\"margin: var(--space-md) 0 0;\">추가 콘텐츠…</p>\n      <p style=\"margin: var(--space-md) 0 0;\">추가 콘텐츠…</p>\n    </div>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Borderless" borderless>
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="소개" />
        </NavbarList>
        </template>
        </Navbar>
        </div>
        <div class="navbar_demo">
        <Navbar brand="Dark Surface" dark>
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="소개" />
        </NavbarList>
        </template>
        </Navbar>
        </div>
        <div class="navbar_demo navbar_demo-scroll">
        <Navbar brand="Sticky" sticky>
        <template #items>
        <NavbarList>
        <NavbarItem label="고정" active />
        </NavbarList>
        </template>
        </Navbar>
        <div style="padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);">
        <p style="margin: 0 0 var(--space-md);">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
        <p style="margin: 0;">콘텐츠 영역 예시입니다.</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
        </div>
        </div>`,
  })),
};


export const BadgeDemo = {
  name: "배지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Inbox\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"받은편지함\" active />\n          <NavbarItem label=\"알림\">\n            <template #badge>\n              <Badge color=\"danger\">3</Badge>\n            </template>\n          </NavbarItem>\n          <NavbarItem label=\"보관함\" />\n        </NavbarList>\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge, Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Inbox">
        <template #items>
        <NavbarList>
        <NavbarItem label="받은편지함" active />
        <NavbarItem label="알림">
        <template #badge>
        <Badge color="danger">3</Badge>
        </template>
        </NavbarItem>
        <NavbarItem label="보관함" />
        </NavbarList>
        </template>
        </Navbar>
        </div>`,
  })),
};


export const Responsive = {
  name: "반응형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\n</script>\n\n<template>\n  <div class=\"navbar_demo\">\n    <Navbar brand=\"Mobile\" responsive collapse-id=\"navbar-responsive-demo\">\n      <template #items>\n        <NavbarList>\n          <NavbarItem label=\"홈\" active />\n          <NavbarItem label=\"제품\" />\n          <NavbarItem label=\"가격\" />\n          <NavbarItem label=\"문의\" />\n        </NavbarList>\n      </template>\n      <template #actions>\n        <Button variant=\"outline\" size=\"sm\" label=\"로그인\" />\n        <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"시작하기\" />\n      </template>\n    </Navbar>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  brand: "값",
  size: "md",
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Navbar, NavbarItem, NavbarList },
    template: `        <div class="navbar_demo">
        <Navbar brand="Mobile" responsive collapse-id="navbar-responsive-demo">
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="제품" />
        <NavbarItem label="가격" />
        <NavbarItem label="문의" />
        </NavbarList>
        </template>
        <template #actions>
        <Button variant="outline" size="sm" label="로그인" />
        <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </template>
        </Navbar>
        </div>`,
  })),
};

