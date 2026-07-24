import React from 'react';
import Button from './Button.jsx';
import Empty from './Empty.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  emptyClassColumns,
  emptyClasses,
  emptyPropColumns,
  emptyProps,
  emptyTokenColumns,
  emptyTokens,
} from '@doc-data/empty-api';

const emptyChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const emptyChildren = [
  { name: 'image', description: '일러스트·아이콘 (empty_image)' },
  { name: 'children', description: '설명 (description prop 대체, Vue description 슬롯)' },
  { name: 'footer', description: '액션 버튼·링크 (empty_footer)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: emptyPropColumns, rows: emptyProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue 슬롯에 대응하는 React prop·children입니다.',
    tables: [{ columns: emptyChildColumns, rows: emptyChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: emptyClassColumns, rows: emptyClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: emptyTokenColumns, rows: emptyTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  description: '설명 텍스트입니다.',
  size: 'md',
  simple: false,
  block: false,
};

export default {
  title: 'Components/피드백/Empty',
  id: 'components-empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    description: { control: 'text', type: { name: 'string', summary: 'string' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    simple: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '데이터·결과가 없을 때 표시하는 Empty 상태 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Empty {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`empty_image` · `empty_desc`로 아이콘과 설명을 표시합니다.',
      },
      source: {
        code: `import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BasicExample() {
  return <Empty description="데이터가 없습니다" />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Empty description="데이터가 없습니다" />),
};

export const Footer = {
  name: '액션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`empty_footer`에 버튼·링크를 배치해 다음 행동을 유도합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function FooterExample() {
  return (
    <Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />,
  ),
};

export const Custom = {
  name: '커스텀 이미지',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`empty_image`에 SVG·img를 자유롭게 넣을 수 있습니다.',
      },
      source: {
        code: `import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function CustomExample() {
  return (
    <Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`empty_sm` · `empty`(기본) · `empty_lg` 세 가지 스케일을 지원합니다.',
      },
      source: {
        code: `import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SizeExample() {
  return (
    <>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>,
  ),
};

export const Simple = {
  name: '설명만',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`empty_simple`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다.',
      },
      source: {
        code: `import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SimpleExample() {
  return <Empty simple size="sm" description="일정 없음" />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Empty simple size="sm" description="일정 없음" />),
};

export const Block = {
  name: '블록 · 컨테이너',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`empty_block`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다.',
      },
      source: {
        code: `import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BlockExample() {
  return (
    <div className="card card_shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <div className="card_header">
        <h3 className="card_title">알림 목록</h3>
      </div>
      <div className="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div
        className="card card_shadow"
        style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}
      >
        <div className="card_header">
          <h3 className="card_title">알림 목록</h3>
        </div>
        <div className="card_body">
          <Empty block description="새 알림이 없습니다" />
        </div>
      </div>
      <div
        className="table_wrap"
        style={{
          maxWidth: 'var(--input-max-width)',
          width: '100%',
          marginTop: 'var(--space-md)',
        }}
      >
        <table className="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} style={{ padding: 0, border: 'none' }}>
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>,
  ),
};
