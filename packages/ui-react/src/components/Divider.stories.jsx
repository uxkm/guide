import React from 'react';
import Divider from './Divider.jsx';
import { bindComponent, withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  dividerClassColumns,
  dividerClasses,
  dividerPropColumns,
  dividerProps,
  dividerTokenColumns,
  dividerTokens,
} from '@doc-data/divider-api';

const dividerChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const dividerChildren = [
  { name: 'label', description: '레이블 텍스트. children으로 대체 가능' },
  { name: 'children', description: '레이블 텍스트 (label prop 대체, Vue default 슬롯 대응)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: dividerPropColumns, rows: dividerProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React label·children prop입니다.',
    tables: [{ columns: dividerChildColumns, rows: dividerChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: dividerClassColumns, rows: dividerClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: dividerTokenColumns, rows: dividerTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  dashed: false,
  plain: false,
  vertical: false,
  orient: '',
  label: '라벨',
  tag: 'auto',
};

export default {
  title: 'Components/레이아웃/Divider',
  id: 'components-divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    dashed: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    plain: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    vertical: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    orient: {
      control: 'select',
      options: ['', 'left', 'right'],
      labels: {
        '': '가운데',
        left: 'left',
        right: 'right',
      },
      description: '레이블 정렬. 가운데는 orient를 생략한 기본값입니다.',
      type: { name: 'enum', summary: "'left' | 'right' (기본: 가운데)" },
    },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    tag: {
      control: 'select',
      options: ['auto', 'hr', 'div', 'span'],
      type: { name: 'enum', summary: "'auto' | 'hr' | 'div' | 'span'" },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: bindComponent(Divider),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다.',
      },
      source: {
        code: `import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function BasicExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>,
  ),
};

export const Dashed = {
  name: '점선',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'divider_dashed로 점선 스타일을 적용합니다.',
      },
      source: {
        code: `import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function DashedExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>,
  ),
};

export const Text = {
  name: '텍스트 레이블',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다.',
      },
      source: {
        code: `import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function TextExample() {
  return (
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>,
  ),
};

export const Orient = {
  name: '레이블 정렬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다.',
      },
      source: {
        code: `import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function OrientExample() {
  return (
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>,
  ),
};

export const Vertical = {
  name: '세로',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다.',
      },
      source: {
        code: `import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function VerticalExample() {
  return (
    <div className="space">
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="space">
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </div>,
  ),
};
