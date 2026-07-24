import React from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Input from './Input.jsx';
import Navbar from './Navbar.jsx';
import NavbarItem from './NavbarItem.jsx';
import NavbarList from './NavbarList.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  navbarClassColumns,
  navbarClasses,
  navbarItemPropColumns,
  navbarItemProps,
  navbarPropColumns,
  navbarProps,
  navbarTokenColumns,
  navbarTokens,
} from '@doc-data/navbar-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const navbarChildren = [
  { name: 'brandContent', description: '브랜드 영역 (brand · brandIcon 대체)' },
  { name: 'brandIcon', description: '브랜드 아이콘' },
  { name: 'items', description: '메뉴 목록 (NavbarList)' },
  { name: 'children', description: 'items 대체 — NavbarItem 나열' },
  { name: 'search', description: '검색 필드 (navbar_search)' },
  { name: 'actions', description: '우측 액션 (navbar_actions)' },
];

const navbarItemChildren = [
  { name: 'children', description: '링크 텍스트 (label 대체)' },
  { name: 'badge', description: '링크 옆 배지' },
];

const apiSections = [
  {
    title: 'API · Navbar Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 collapse-id · brand-icon 슬롯은 collapseId · brandIcon으로 다룹니다. Vue `#items` · `#search` · `#actions` · `#brand` 슬롯은 items · search · actions · brandContent prop입니다.',
    tables: [{ columns: navbarPropColumns, rows: navbarProps, codeColumn: 'name' }],
  },
  {
    title: 'API · NavbarItem Props',
    tables: [{ columns: navbarItemPropColumns, rows: navbarItemProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Navbar Children',
    tables: [{ columns: childColumns, rows: navbarChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · NavbarItem Children',
    tables: [{ columns: childColumns, rows: navbarItemChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: navbarClassColumns, rows: navbarClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: navbarTokenColumns, rows: navbarTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  brand: '브랜드',
  size: 'md',
  borderless: false,
  dark: false,
  sticky: false,
  responsive: false,
  collapseId: undefined,
};

function demo(children) {
  return withDocsCanvasRender(<div className="navbar_demo">{children}</div>);
}

export default {
  title: 'Components/네비게이션/Navbar',
  id: 'components-navbar',
  component: Navbar,
  subcomponents: { NavbarItem, NavbarList },
  tags: ['autodocs'],
  argTypes: {
    brand: { control: 'text', type: { name: 'string', summary: 'string' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    borderless: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    dark: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    sticky: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    responsive: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    collapseId: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
    docs: {
      description: {
        component: '사이트·앱 상단 내비게이션 Navbar 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Navbar
      {...args}
      brand="브랜드"
      items={
        <NavbarList>
          <NavbarItem label="메뉴 1" href="#" active />
          <NavbarItem label="메뉴 2" href="#" />
        </NavbarList>
      }
    />
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다.',
      },
      source: {
        code: `import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BasicExample() {
  return (
    <Navbar
      brand="UXKM"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="UXKM"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>
      }
    />,
  ),
};

export const Brand = {
  name: '브랜드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'brandIcon에 Icon 컴포넌트를 함께 배치할 수 있습니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BrandExample() {
  return (
    <Navbar
      brand="HTML Components"
      brandIcon={
        <Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>
      }
      items={
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="HTML Components"
      brandIcon={
        <Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>
      }
      items={
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      }
    />,
  ),
};

export const Actions = {
  name: '액션 영역',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ActionsExample() {
  return (
    <Navbar
      brand="Dashboard"
      items={
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="Dashboard"
      items={
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      }
      actions={
        <>
          <Button
            variant="ghost"
            size="sm"
            ariaLabel="알림"
            iconBefore={
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
          />
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>
      }
    />,
  ),
};

export const Search = {
  name: '검색',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SearchExample() {
  return (
    <Navbar
      brand="Docs"
      items={
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      }
      search={
        <Input
          type="search"
          id="navbar-search-demo"
          size="sm"
          placeholder="문서 검색…"
          autoComplete="off"
          ariaLabel="문서 검색"
        />
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="Docs"
      items={
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      }
      search={
        <Input
          type="search"
          id="navbar-search-demo"
          size="sm"
          placeholder="문서 검색…"
          autoComplete="off"
          ariaLabel="문서 검색"
        />
      }
      actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />}
    />,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'navbar_sm · navbar_lg로 높이를 조절합니다.',
      },
      source: {
        code: `import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SizeExample() {
  return (
    <Navbar
      brand="Small"
      size="sm"
      items={
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="navbar_demo">
        <Navbar
          brand="Small"
          size="sm"
          items={
            <NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>
          }
        />
      </div>
      <div className="navbar_demo">
        <Navbar
          brand="Default"
          items={
            <NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>
          }
        />
      </div>
      <div className="navbar_demo">
        <Navbar
          brand="Large"
          size="lg"
          items={
            <NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>
          }
        />
      </div>
    </>,
  ),
};

export const Variant = {
  name: '스타일 변형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다.',
      },
      source: {
        code: `import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function VariantExample() {
  return (
    <Navbar
      brand="Borderless"
      borderless
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="소개" />
        </NavbarList>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="navbar_demo">
        <Navbar
          brand="Borderless"
          borderless
          items={
            <NavbarList>
              <NavbarItem label="홈" active />
              <NavbarItem label="소개" />
            </NavbarList>
          }
        />
      </div>
      <div className="navbar_demo">
        <Navbar
          brand="Dark Surface"
          dark
          items={
            <NavbarList>
              <NavbarItem label="홈" active />
              <NavbarItem label="소개" />
            </NavbarList>
          }
        />
      </div>
      <div className="navbar_demo navbar_demo-scroll">
        <Navbar
          brand="Sticky"
          sticky
          items={
            <NavbarList>
              <NavbarItem label="고정" active />
            </NavbarList>
          }
        />
        <div
          style={{
            padding: 'var(--space-xl)',
            color: 'var(--color-text-muted)',
            fontSize: 'var(--text-size-sm)',
          }}
        >
          <p style={{ margin: '0 0 var(--space-md)' }}>
            스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.
          </p>
          <p style={{ margin: 0 }}>콘텐츠 영역 예시입니다.</p>
          <p style={{ margin: 'var(--space-md) 0 0' }}>추가 콘텐츠…</p>
          <p style={{ margin: 'var(--space-md) 0 0' }}>추가 콘텐츠…</p>
        </div>
      </div>
    </>,
  ),
};

export const BadgeDemo = {
  name: '배지',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다.',
      },
      source: {
        code: `import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BadgeExample() {
  return (
    <Navbar
      brand="Inbox"
      items={
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem
            label="알림"
            badge={<span className="badge color_danger">3</span>}
          />
          <NavbarItem label="보관함" />
        </NavbarList>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="Inbox"
      items={
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem label="알림" badge={<span className="badge color_danger">3</span>} />
          <NavbarItem label="보관함" />
        </NavbarList>
      }
    />,
  ),
};

export const Responsive = {
  name: '반응형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ResponsiveExample() {
  return (
    <Navbar
      brand="Mobile"
      responsive
      collapseId="navbar-responsive-demo"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: demo(
    <Navbar
      brand="Mobile"
      responsive
      collapseId="navbar-responsive-demo"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>
      }
    />,
  ),
};
