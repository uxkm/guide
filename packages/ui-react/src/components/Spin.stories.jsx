import React from 'react';
import Button from './Button.jsx';
import Spin from './Spin.jsx';
import SpinWrap from './SpinWrap.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  spinClassColumns,
  spinClasses,
  spinPropColumns,
  spinProps,
  spinTokenColumns,
  spinTokens,
  spinWrapPropColumns,
  spinWrapProps,
} from '@doc-data/spin-api';

const spinChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const spinChildren = [
  { name: 'children', description: '추가 콘텐츠 (Vue default 슬롯)' },
];

const spinWrapChildren = [
  { name: 'children', description: '감싸는 콘텐츠 (Vue default 슬롯)' },
];

const apiSections = [
  {
    title: 'API · Spin Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.',
    tables: [{ columns: spinPropColumns, rows: spinProps, codeColumn: 'name' }],
  },
  {
    title: 'API · SpinWrap Props',
    tables: [{ columns: spinWrapPropColumns, rows: spinWrapProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Spin Children',
    tables: [{ columns: spinChildColumns, rows: spinChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · SpinWrap Children',
    tables: [{ columns: spinChildColumns, rows: spinWrapChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: spinClassColumns, rows: spinClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: spinTokenColumns, rows: spinTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  size: 'md',
  tip: '값',
  color: 'primary',
  inline: false,
  block: false,
  overlay: false,
  ariaLabel: '로딩 중',
};

export default {
  title: 'Components/피드백/Spin',
  id: 'components-spin',
  component: Spin,
  subcomponents: { SpinWrap },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    tip: { control: 'text', type: { name: 'string', summary: 'string' } },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      type: { name: 'enum', summary: "'primary' | 'success' | 'warning' | 'danger'" },
    },
    inline: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    overlay: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '로딩 상태를 표시하는 Spin · SpinWrap 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Spin {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`spin` · `spin_indicator`로 회전 스피너를 표시합니다.',
      },
      source: {
        code: `import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BasicExample() {
  return <Spin />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Spin />),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다.',
      },
      source: {
        code: `import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function SizeExample() {
  return (
    <>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>,
  ),
};

export const Color = {
  name: '색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '공통 `color_*` 클래스로 의미를 표현합니다.',
      },
      source: {
        code: `import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function ColorExample() {
  return (
    <>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>,
  ),
};

export const Tip = {
  name: '설명 텍스트',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다.',
      },
      source: {
        code: `import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function TipExample() {
  return (
    <>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>,
  ),
};

export const Inline = {
  name: '인라인',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button
        variant="filled"
        color="primary"
        loading
        disabled
        aria-busy="true"
        label="제출 중…"
      />
    </>,
  ),
};

export const Block = {
  name: '블록 정렬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다.',
      },
      source: {
        code: `import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BlockExample() {
  return (
    <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />,
  ),
};

export const Overlay = {
  name: '컨테이너 오버레이',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다.',
      },
      source: {
        code: `import SpinWrap from '@uxkm/ui-react/components/SpinWrap.jsx';

export function OverlayExample() {
  return (
    <>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>
              차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를
              덮습니다.
            </p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>,
  ),
};
