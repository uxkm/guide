import Menu from './Menu.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Badge from './Badge.vue';
import MenuDivider from './MenuDivider.vue';
import MenuGroup from './MenuGroup.vue';
import MenuItem from './MenuItem.vue';
import MenuSubmenu from './MenuSubmenu.vue';
import Icon from './Icon.vue';
import {
  menuClassColumns,
  menuClasses,
  menuGroupPropColumns,
  menuGroupProps,
  menuItemPropColumns,
  menuItemProps,
  menuItemSlotColumns,
  menuItemSlots,
  menuPropColumns,
  menuProps,
  menuSlotColumns,
  menuSlots,
  menuSubmenuPropColumns,
  menuSubmenuProps,
  menuSubmenuSlotColumns,
  menuSubmenuSlots,
  menuTokenColumns,
  menuTokens,
} from '@doc-data/menu-api';
const apiSections = [
  {
    title: "API · Menu Props",
    tables: [
      { columns: menuPropColumns, rows: menuProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · MenuItem Props",
    tables: [
      { columns: menuItemPropColumns, rows: menuItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · MenuSubmenu Props",
    tables: [
      { columns: menuSubmenuPropColumns, rows: menuSubmenuProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · MenuGroup Props",
    tables: [
      { columns: menuGroupPropColumns, rows: menuGroupProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Menu Slots",
    tables: [
      { columns: menuSlotColumns, rows: menuSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · MenuItem · MenuSubmenu Slots",
    tables: [
      { columns: menuItemSlotColumns, rows: menuItemSlots, codeColumn: "name" },
      { columns: menuSubmenuSlotColumns, rows: menuSubmenuSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: menuClassColumns, rows: menuClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: menuTokenColumns, rows: menuTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Menu',
  id: 'components-menu',
  component: Menu,
  subcomponents: { MenuItem, MenuGroup, MenuDivider, MenuSubmenu },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ["vertical","horizontal","inline"], type: { name: 'enum', summary: "'vertical' | 'horizontal' | 'inline'" }},
    bordered: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    compact: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    dark: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { Menu, MenuItem, MenuDivider },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current=&quot;page&quot;로 선택 항목을 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"주요 메뉴\">\n    <MenuItem label=\"대시보드\" active />\n    <MenuItem label=\"분석\" />\n    <MenuItem label=\"사용자\" />\n    <MenuItem label=\"설정\" />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem },
    template: `        <Menu mode="vertical" bordered aria-label="주요 메뉴">
        <MenuItem label="대시보드" active />
        <MenuItem label="분석" />
        <MenuItem label="사용자" />
        <MenuItem label="설정" />
        </Menu>`,
  })),
};


export const Horizontal = {
  name: "수평",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"horizontal\" bordered aria-label=\"섹션 메뉴\">\n    <MenuItem label=\"개요\" active />\n    <MenuItem label=\"컴포넌트\" />\n    <MenuItem label=\"토큰\" />\n    <MenuItem label=\"접근성\" />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem },
    template: `        <Menu mode="horizontal" bordered aria-label="섹션 메뉴">
        <MenuItem label="개요" active />
        <MenuItem label="컴포넌트" />
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>`,
  })),
};


export const IconDemo = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_icon으로 항목 앞에 아이콘을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"앱 메뉴\">\n    <MenuItem label=\"대시보드\" active>\n      <template #icon>\n        <Icon name=\"grid\" />\n      </template>\n    </MenuItem>\n    <MenuItem label=\"사용자\">\n      <template #icon>\n        <Icon name=\"user\" />\n      </template>\n    </MenuItem>\n    <MenuItem label=\"문서\">\n      <template #icon>\n        <Icon name=\"book\" />\n      </template>\n    </MenuItem>\n    <MenuItem label=\"설정\">\n      <template #icon>\n        <Icon name=\"settings\" />\n      </template>\n    </MenuItem>\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Menu, MenuItem },
    template: `        <Menu mode="vertical" bordered aria-label="앱 메뉴">
        <MenuItem label="대시보드" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuItem label="사용자">
        <template #icon>
        <Icon name="user" />
        </template>
        </MenuItem>
        <MenuItem label="문서">
        <template #icon>
        <Icon name="book" />
        </template>
        </MenuItem>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>`,
  })),
};


export const Submenu = {
  name: "서브메뉴",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"컴포넌트 메뉴\">\n    <MenuItem label=\"홈\" active>\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>\n        </svg>\n      </template>\n    </MenuItem>\n    <MenuSubmenu label=\"컴포넌트\" expanded submenu-id=\"menu-sub-components\">\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/>\n          <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/>\n          <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/>\n          <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/>\n        </svg>\n      </template>\n      <MenuItem label=\"Button\" />\n      <MenuItem label=\"Input\" />\n      <MenuItem label=\"Card\" />\n    </MenuSubmenu>\n    <MenuSubmenu label=\"패턴\" :expanded=\"false\" submenu-id=\"menu-sub-patterns\">\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <polygon points=\"12 2 2 7 12 12 22 7 12 2\"/>\n          <polyline points=\"2 17 12 22 22 17\"/>\n          <polyline points=\"2 12 12 17 22 12\"/>\n        </svg>\n      </template>\n      <MenuItem label=\"폼 레이아웃\" />\n      <MenuItem label=\"데이터 테이블\" />\n    </MenuSubmenu>\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem, MenuSubmenu },
    template: `        <Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
        <MenuItem label="홈" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
        </template>
        </MenuItem>
        <MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        </svg>
        </template>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
        </MenuSubmenu>
        <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
        </svg>
        </template>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
        </MenuSubmenu>
        </Menu>`,
  })),
};


export const Group = {
  name: "구분선 · 그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuDivider from '@uxkm/ui/components/MenuDivider.vue';\nimport MenuGroup from '@uxkm/ui/components/MenuGroup.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"설정 메뉴\">\n    <MenuGroup title=\"계정\" />\n    <MenuItem label=\"프로필\" active />\n    <MenuItem label=\"보안\" />\n    <MenuDivider />\n    <MenuGroup title=\"앱\" />\n    <MenuItem label=\"알림\" />\n    <MenuItem label=\"언어\" />\n    <MenuDivider />\n    <MenuItem label=\"로그아웃\" />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuDivider, MenuGroup, MenuItem },
    template: `        <Menu mode="vertical" bordered aria-label="설정 메뉴">
        <MenuGroup title="계정" />
        <MenuItem label="프로필" active />
        <MenuItem label="보안" />
        <MenuDivider />
        <MenuGroup title="앱" />
        <MenuItem label="알림" />
        <MenuItem label="언어" />
        <MenuDivider />
        <MenuItem label="로그아웃" />
        </Menu>`,
  })),
};


export const Disabled = {
  name: "비활성",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"권한 메뉴\">\n    <MenuItem label=\"조회\" active />\n    <MenuItem label=\"편집\" />\n    <MenuItem label=\"삭제\" disabled />\n    <MenuItem label=\"관리자 설정\" disabled />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem },
    template: `        <Menu mode="vertical" bordered aria-label="권한 메뉴">
        <MenuItem label="조회" active />
        <MenuItem label="편집" />
        <MenuItem label="삭제" disabled />
        <MenuItem label="관리자 설정" disabled />
        </Menu>`,
  })),
};


export const BadgeDemo = {
  name: "배지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered aria-label=\"알림 메뉴\">\n    <MenuItem label=\"받은편지함\" active>\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/>\n          <polyline points=\"22,6 12,13 2,6\"/>\n        </svg>\n      </template>\n      <template #extra>\n        <Badge class=\"menu_extra\" count color=\"primary\">12</Badge>\n      </template>\n    </MenuItem>\n    <MenuItem label=\"알림\">\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <path d=\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z\"/>\n        </svg>\n      </template>\n      <template #extra>\n        <Badge class=\"menu_extra\" dot-only color=\"danger\" aria-label=\"새 알림\" />\n      </template>\n    </MenuItem>\n    <MenuItem label=\"메시지\">\n      <template #icon>\n        <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>\n        </svg>\n      </template>\n      <template #extra>\n        <Badge class=\"menu_extra\" color=\"default\">Beta</Badge>\n      </template>\n    </MenuItem>\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Badge, Menu, MenuItem },
    template: `        <Menu mode="vertical" bordered aria-label="알림 메뉴">
        <MenuItem label="받은편지함" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" count color="primary">12</Badge>
        </template>
        </MenuItem>
        <MenuItem label="알림">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" dot-only color="danger" aria-label="새 알림" />
        </template>
        </MenuItem>
        <MenuItem label="메시지">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" color="default">Beta</Badge>
        </template>
        </MenuItem>
        </Menu>`,
  })),
};


export const HorizontalSubmenu = {
  name: "수평 · 서브메뉴",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\n</script>\n\n<template>\n  <Menu mode=\"horizontal\" bordered aria-label=\"상단 메뉴\">\n    <MenuItem label=\"홈\" active />\n    <MenuSubmenu label=\"컴포넌트\" :expanded=\"false\" submenu-id=\"menu-sub-h-components\">\n      <MenuItem label=\"Button\" />\n      <MenuItem label=\"Input\" />\n      <MenuItem label=\"Select\" />\n    </MenuSubmenu>\n    <MenuItem label=\"토큰\" />\n    <MenuItem label=\"접근성\" />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem, MenuSubmenu },
    template: `        <Menu mode="horizontal" bordered aria-label="상단 메뉴">
        <MenuItem label="홈" active />
        <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
        </MenuSubmenu>
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>`,
  })),
};


export const Layout = {
  name: "사이드바 레이아웃",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\n</script>\n\n<template>\n  <div class=\"menu_demo-row\">\n    <div class=\"menu_demo-sidebar\">\n      <Menu mode=\"vertical\" bordered compact aria-label=\"앱 사이드바\">\n        <MenuItem label=\"개요\" active>\n          <template #icon>\n            <Icon name=\"grid\" />\n          </template>\n        </MenuItem>\n        <MenuSubmenu label=\"문서\" expanded submenu-id=\"menu-sub-sidebar\">\n          <template #icon>\n            <svg class=\"menu_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n              <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/>\n              <path d=\"M14 2v6h6\"/>\n            </svg>\n          </template>\n          <MenuItem label=\"시작하기\" />\n          <MenuItem label=\"컴포넌트\" />\n        </MenuSubmenu>\n        <MenuItem label=\"설정\">\n          <template #icon>\n            <Icon name=\"settings\" />\n          </template>\n        </MenuItem>\n      </Menu>\n    </div>\n    <div class=\"menu_demo-content\">\n      <p style=\"margin: 0;\">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>\n    </div>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Menu, MenuItem, MenuSubmenu },
    template: `        <div class="menu_demo-row">
        <div class="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
        <MenuItem label="개요" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        </svg>
        </template>
        <MenuItem label="시작하기" />
        <MenuItem label="컴포넌트" />
        </MenuSubmenu>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>
        </div>
        <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
        </div>
        </div>`,
  })),
};


export const Variant = {
  name: "변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "menu_compact · menu_dark로 밀도와 배경을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Menu from '@uxkm/ui/components/Menu.vue';\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\n</script>\n\n<template>\n  <Menu mode=\"vertical\" bordered compact aria-label=\"컴팩트 메뉴\">\n    <MenuItem label=\"항목 A\" active />\n    <MenuItem label=\"항목 B\" />\n    <MenuItem label=\"항목 C\" />\n  </Menu>\n  <Menu mode=\"vertical\" bordered dark aria-label=\"다크 서피스 메뉴\">\n    <MenuItem label=\"항목 A\" active />\n    <MenuItem label=\"항목 B\" />\n    <MenuItem label=\"항목 C\" />\n  </Menu>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "vertical",
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Menu, MenuItem },
    template: `        <Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>
        <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>`,
  })),
};

