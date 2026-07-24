import React from 'react';
import Skeleton from './Skeleton.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  skeletonClassColumns,
  skeletonClasses,
  skeletonPropColumns,
  skeletonProps,
  skeletonTokenColumns,
  skeletonTokens,
} from '@doc-data/skeleton-api';

const skeletonChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const skeletonChildren = [
  { name: 'children', description: '커스텀 스켈레톤 조각 (Vue default 슬롯)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다. paragraph는 boolean 또는 number입니다.',
    tables: [{ columns: skeletonPropColumns, rows: skeletonProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: skeletonChildColumns, rows: skeletonChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: skeletonClassColumns, rows: skeletonClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: skeletonTokenColumns, rows: skeletonTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  active: true,
  avatar: false,
  paragraph: false,
  round: false,
  ariaLabel: '콘텐츠 로딩 중',
};

export default {
  title: 'Components/피드백/Skeleton',
  id: 'components-skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    avatar: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    paragraph: {
      control: 'number',
      type: { name: 'union', summary: 'boolean | number' },
    },
    round: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '콘텐츠 로딩 중 플레이스홀더를 표시하는 Skeleton 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Skeleton {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`skeleton`에 `skeleton_text` · `skeleton_title` 형태 클래스를 조합합니다.',
      },
      source: {
        code: `import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function BasicExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>,
  ),
};

export const Shape = {
  name: '형태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다.',
      },
      source: {
        code: `import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function ShapeExample() {
  return (
    <>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>,
  ),
};

export const CardDemo = {
  name: '카드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다.',
      },
      source: {
        code: `import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function CardExample() {
  return (
    <div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
          </div>
        </Skeleton>
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span
              className="skeleton skeleton_button"
              aria-hidden="true"
              style={{ width: '4rem' }}
            />
          </div>
        </Skeleton>
      </div>
    </div>,
  ),
};

export const Static = {
  name: '정적',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`skeleton_static`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. `prefers-reduced-motion` 환경에서도 애니메이션이 비활성화됩니다.',
      },
      source: {
        code: `import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function StaticExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>,
  ),
};
