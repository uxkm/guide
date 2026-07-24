import React from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import BreadcrumbItem from './BreadcrumbItem.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  breadcrumbClassColumns,
  breadcrumbClasses,
  breadcrumbItemPropColumns,
  breadcrumbItemProps,
  breadcrumbPropColumns,
  breadcrumbProps,
  breadcrumbTokenColumns,
  breadcrumbTokens,
} from '@doc-data/breadcrumb-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const breadcrumbChildren = [
  { name: 'children', description: 'BreadcrumbItem 나열 (items prop 대체)' },
];

const breadcrumbItemChildren = [
  { name: 'children', description: '링크 텍스트·아이콘 (label 대체)' },
];

const apiSections = [
  {
    title: 'API · Breadcrumb Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.',
    tables: [{ columns: breadcrumbPropColumns, rows: breadcrumbProps, codeColumn: 'name' }],
  },
  {
    title: 'API · BreadcrumbItem Props',
    tables: [{ columns: breadcrumbItemPropColumns, rows: breadcrumbItemProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Breadcrumb Children',
    tables: [{ columns: childColumns, rows: breadcrumbChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · BreadcrumbItem Children',
    tables: [{ columns: childColumns, rows: breadcrumbItemChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: breadcrumbClassColumns, rows: breadcrumbClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: breadcrumbTokenColumns, rows: breadcrumbTokens, codeColumn: 'name' }],
  },
];

const HomeIcon = (
  <svg
    className="breadcrumb_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

const playgroundArgs = {
  items: [],
  ariaLabel: '경로',
  separator: 'chevron',
  size: 'md',
};

export default {
  title: 'Components/네비게이션/Breadcrumb',
  id: 'components-breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'dot'],
      type: { name: 'enum', summary: "'chevron' | 'slash' | 'dot'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '현재 위치까지의 경로를 표시하는 Breadcrumb 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function BasicExample() {
  return (
    <Breadcrumb
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Breadcrumb
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />,
  ),
};

export const Separator = {
  name: '구분자',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'separator로 구분자 스타일을 변경합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SeparatorExample() {
  return (
    <>
      <Breadcrumb
        ariaLabel="경로 — chevron"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Chevron', current: true },
        ]}
      />
      <Breadcrumb
        separator="slash"
        ariaLabel="경로 — slash"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Slash', current: true },
        ]}
      />
      <Breadcrumb
        separator="dot"
        ariaLabel="경로 — dot"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Dot', current: true },
        ]}
      />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Breadcrumb
        ariaLabel="경로 — chevron"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Chevron', current: true },
        ]}
      />
      <Breadcrumb
        separator="slash"
        ariaLabel="경로 — slash"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Slash', current: true },
        ]}
      />
      <Breadcrumb
        separator="dot"
        ariaLabel="경로 — dot"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Dot', current: true },
        ]}
      />
    </>,
  ),
};

export const Icon = {
  name: '홈 아이콘',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'icon으로 아이콘만 있는 첫 항목을 표시합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function IconExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {HomeIcon}
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'size로 텍스트 크기를 조절합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SizeExample() {
  return (
    <>
      <Breadcrumb
        size="sm"
        ariaLabel="경로 — small"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Small', current: true },
        ]}
      />
      <Breadcrumb
        ariaLabel="경로 — medium"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Medium', current: true },
        ]}
      />
      <Breadcrumb
        size="lg"
        ariaLabel="경로 — large"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Large', current: true },
        ]}
      />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Breadcrumb
        size="sm"
        ariaLabel="경로 — small"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Small', current: true },
        ]}
      />
      <Breadcrumb
        ariaLabel="경로 — medium"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Medium', current: true },
        ]}
      />
      <Breadcrumb
        size="lg"
        ariaLabel="경로 — large"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Large', current: true },
        ]}
      />
    </>,
  ),
};

export const Ellipsis = {
  name: '경로 생략',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function EllipsisExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {/* home icon */}
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button
          type="button"
          className="breadcrumb_ellipsis"
          data-ripple=""
          aria-label="숨겨진 경로 보기"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {HomeIcon}
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button
          type="button"
          className="breadcrumb_ellipsis"
          data-ripple=""
          aria-label="숨겨진 경로 보기"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '비활성 링크는 disabled를 사용합니다.',
      },
      source: {
        code: `import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function StateExample() {
  return (
    <>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>,
  ),
};
