import React from 'react';
import Button from './Button.jsx';
import Divider from './Divider.jsx';
import Space from './Space.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  spaceClassColumns,
  spaceClasses,
  spacePropColumns,
  spaceProps,
  spaceTokenColumns,
  spaceTokens,
} from '@doc-data/space-api';

const spaceChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const spaceChildren = [
  { name: 'children', description: '간격을 둘 자식 요소 (Vue default 슬롯 대응)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: spacePropColumns, rows: spaceProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: spaceChildColumns, rows: spaceChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: spaceClassColumns, rows: spaceClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: spaceTokenColumns, rows: spaceTokens, codeColumn: 'name' }],
  },
];

const spaceDemoBoxes = (
  <>
    <div className="space_demo-box">항목 1</div>
    <div className="space_demo-box">항목 2</div>
    <div className="space_demo-box">항목 3</div>
  </>
);

function renderSpaceWithDemoBoxes(_args, context) {
  return <Space {...context.args}>{spaceDemoBoxes}</Space>;
}

const playgroundArgs = {
  vertical: false,
  wrap: false,
  block: false,
  gap: 'md',
  align: '값',
  justify: '값',
};

export default {
  title: 'Components/레이아웃/Space',
  id: 'components-space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    wrap: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      type: { name: 'enum', summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'" },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'baseline' | 'stretch'" },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
      type: { name: 'enum', summary: "'start' | 'center' | 'end' | 'between'" },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: renderSpaceWithDemoBoxes,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다.',
      },
      source: {
        code: `import Space from '@uxkm/ui-react/components/Space.jsx';

export function BasicExample() {
  return (
    <Space>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Space>{spaceDemoBoxes}</Space>),
};

export const Vertical = {
  name: '세로',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'space_vertical로 세로 방향 배치를 지정합니다.',
      },
      source: {
        code: `import Space from '@uxkm/ui-react/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space vertical>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Space vertical>{spaceDemoBoxes}</Space>),
};

export const Gap = {
  name: '간격',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다.',
      },
      source: {
        code: `import Space from '@uxkm/ui-react/components/Space.jsx';

export function GapExample() {
  return (
    <>
      <Space gap="xs">
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
      </Space>
      <Space>
        <div className="space_demo-box">md (기본)</div>
        <div className="space_demo-box">md</div>
        <div className="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
      </Space>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Space gap="xs">
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
      </Space>
      <Space>
        <div className="space_demo-box">md (기본)</div>
        <div className="space_demo-box">md</div>
        <div className="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
      </Space>
    </>,
  ),
};

export const Wrap = {
  name: '줄바꿈',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.',
      },
      source: {
        code: `import Space from '@uxkm/ui-react/components/Space.jsx';

export function WrapExample() {
  return (
    <Space block wrap>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 1</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 2</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 3</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 4</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 5</div>
    </Space>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Space block wrap>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>
        항목 1
      </div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>
        항목 2
      </div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>
        항목 3
      </div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>
        항목 4
      </div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>
        항목 5
      </div>
    </Space>,
  ),
};

export const Align = {
  name: '정렬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다.',
      },
      source: {
        code: `import Space from '@uxkm/ui-react/components/Space.jsx';

export function AlignExample() {
  return (
    <>
      <Space
        block
        align="center"
        style={{
          minHeight: '5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">align center</div>
        <div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space
        block
        justify="between"
        style={{
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">justify between</div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Space
        block
        align="center"
        style={{
          minHeight: '5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">align center</div>
        <div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space
        block
        justify="between"
        style={{
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">justify between</div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </>,
  ),
};

export const Combo = {
  name: '조합 예시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Divider from '@uxkm/ui-react/components/Divider.jsx';
import Space from '@uxkm/ui-react/components/Space.jsx';

export function ComboExample() {
  return (
    <Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>,
  ),
};
