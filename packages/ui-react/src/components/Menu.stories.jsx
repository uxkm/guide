import React from 'react';
import Icon from './Icon.jsx';
import Menu from './Menu.jsx';
import MenuDivider from './MenuDivider.jsx';
import MenuGroup from './MenuGroup.jsx';
import MenuItem from './MenuItem.jsx';
import MenuSubmenu from './MenuSubmenu.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  menuClassColumns,
  menuClasses,
  menuGroupPropColumns,
  menuGroupProps,
  menuItemPropColumns,
  menuItemProps,
  menuPropColumns,
  menuProps,
  menuSubmenuPropColumns,
  menuSubmenuProps,
  menuTokenColumns,
  menuTokens,
} from '@doc-data/menu-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const menuChildren = [{ name: 'children', description: 'MenuItem · MenuSubmenu 등' }];
const menuItemChildren = [
  { name: 'icon', description: 'menu_icon (prop)' },
  { name: 'children', description: '항목 텍스트 (label 대체)' },
  { name: 'extra', description: 'menu_extra (배지 등)' },
];
const menuSubmenuChildren = [
  { name: 'icon', description: 'menu_icon (prop)' },
  { name: 'children', description: '하위 MenuItem' },
];

const apiSections = [
  {
    title: 'API · Menu Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 aria-label · submenu-id는 ariaLabel · submenuId로 다룹니다.',
    tables: [{ columns: menuPropColumns, rows: menuProps, codeColumn: 'name' }],
  },
  {
    title: 'API · MenuItem Props',
    tables: [{ columns: menuItemPropColumns, rows: menuItemProps, codeColumn: 'name' }],
  },
  {
    title: 'API · MenuSubmenu Props',
    tables: [{ columns: menuSubmenuPropColumns, rows: menuSubmenuProps, codeColumn: 'name' }],
  },
  {
    title: 'API · MenuGroup Props',
    tables: [{ columns: menuGroupPropColumns, rows: menuGroupProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    tables: [
      { columns: childColumns, rows: menuChildren, codeColumn: 'name' },
      { columns: childColumns, rows: menuItemChildren, codeColumn: 'name' },
      { columns: childColumns, rows: menuSubmenuChildren, codeColumn: 'name' },
    ],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: menuClassColumns, rows: menuClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: menuTokenColumns, rows: menuTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  mode: 'vertical',
  bordered: false,
  compact: false,
  dark: false,
  ariaLabel: '접근성 라벨',
};

export default {
  title: 'Components/네비게이션/Menu',
  id: 'components-menu',
  component: Menu,
  subcomponents: { MenuItem, MenuGroup, MenuDivider, MenuSubmenu },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      type: { name: 'enum', summary: "'vertical' | 'horizontal' | 'inline'" },
    },
    bordered: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    compact: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    dark: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
    docs: {
      description: {
        component: '내비게이션·사이드바·드롭다운에 쓰는 Menu 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Menu {...args}>
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current="page"로 선택 항목을 표시합니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BasicExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>,
  ),
};

export const Horizontal = {
  name: '수평',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function HorizontalExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>,
  ),
};

export const IconDemo = {
  name: '아이콘',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_icon으로 항목 앞에 아이콘을 배치합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function IconExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>,
  ),
};

export const Submenu = {
  name: '서브메뉴',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function SubmenuExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem
        label="홈"
        active
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        }
      />
      <MenuSubmenu
        label="컴포넌트"
        expanded
        submenuId="menu-sub-components"
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        }
      >
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
      <MenuSubmenu
        label="패턴"
        expanded={false}
        submenuId="menu-sub-patterns"
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        }
      >
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
      </MenuSubmenu>
    </Menu>,
  ),
};

export const Group = {
  name: '구분선 · 그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuDivider from '@uxkm/ui-react/components/MenuDivider.jsx';
import MenuGroup from '@uxkm/ui-react/components/MenuGroup.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function GroupExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function DisabledExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>,
  ),
};

export const BadgeDemo = {
  name: '배지',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BadgeExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem
        label="받은편지함"
        active
        extra={<span className="badge badge_count color_primary menu_extra">12</span>}
      />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem
        label="받은편지함"
        active
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        }
        extra={
          <span className="badge badge_count color_primary menu_extra" aria-hidden="true">
            12
          </span>
        }
      />
      <MenuItem
        label="알림"
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
          </svg>
        }
        extra={
          <span
            className="badge_dot-only color_danger menu_extra"
            role="status"
            aria-label="새 알림"
          />
        }
      />
      <MenuItem
        label="메시지"
        icon={
          <svg
            className="menu_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        }
        extra={<span className="badge color_default menu_extra">Beta</span>}
      />
    </Menu>,
  ),
};

export const HorizontalSubmenu = {
  name: '수평 · 서브메뉴',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function HorizontalSubmenuExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>,
  ),
};

export const Layout = {
  name: '사이드바 레이아웃',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function LayoutExample() {
  return (
    <div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar">
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{ margin: 0 }}>콘텐츠 영역</p>
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu
            label="문서"
            expanded
            submenuId="menu-sub-sidebar"
            icon={
              <svg
                className="menu_icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            }
          >
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{ margin: 0 }}>
          선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때
          사용합니다.
        </p>
      </div>
    </div>,
  ),
};

export const Variant = {
  name: '변형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'menu_compact · menu_dark로 밀도와 배경을 조절합니다.',
      },
      source: {
        code: `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function VariantExample() {
  return (
    <>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>,
  ),
};
