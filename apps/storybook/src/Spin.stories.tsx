import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualSpin from '../../react/src/components/feedback/Spin/Spin.jsx';
import ActualSpinWrap from '../../react/src/components/feedback/Spin/SpinWrap.jsx';
import {
  ariaLabelArg,
  booleanControlArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Spin = ActualSpin as React.ComponentType<any>;
const SpinWrap = ActualSpinWrap as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Row = ({ children }: any) => <div className="spin-demo-row">{children}</div>;

type SpinStoryArgs = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  tip?: string;
  inline?: boolean;
  block?: boolean;
  overlay?: boolean;
  ariaLabel?: string;
};

function spinPropsFromArgs(args: Record<string, unknown>) {
  return {
    size: args.size,
    color: args.color,
    tip: typeof args.tip === 'string' && args.tip ? args.tip : undefined,
    inline: args.inline === true,
    block: args.block === true,
    overlay: args.overlay === true,
    ariaLabel: typeof args.ariaLabel === 'string' ? args.ariaLabel : undefined,
  };
}

const spinControlKeys = [
  'size',
  'color',
  'tip',
  'inline',
  'block',
  'overlay',
  'ariaLabel',
] as const;

const meta = {
  title: '피드백/Spin',
  component: Spin,
  subcomponents: { SpinWrap },
  decorators: [(Story) => <div className="spin-story-demo"><Story /></div>],
  parameters: {
    layout: 'padded',
    controls: { include: [...spinControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    size: 'md',
    color: 'primary',
    tip: '',
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: '로딩 중',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      type: 'string',
    },
    tip: stringControlArg,
    inline: booleanControlArg,
    block: booleanControlArg,
    overlay: booleanControlArg,
    ariaLabel: ariaLabelArg,
  },
} satisfies Meta<SpinStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Row>
      <Spin {...spinPropsFromArgs(args)} />
    </Row>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Row>
      <Spin />
    </Row>
  ),
};

export const Size: Story = {
  name: '크기',
  render: () => (
    <Row>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </Row>
  ),
};

export const Color: Story = {
  name: '색상',
  render: () => (
    <Row>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </Row>
  ),
};

export const Tip: Story = {
  name: '설명 텍스트',
  render: () => (
    <Row>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </Row>
  ),
};

export const Inline: Story = {
  name: '인라인',
  render: () => (
    <div className="demo-stack">
      <div>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </div>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </div>
  ),
};

export const Block: Story = {
  name: '블록 정렬',
  render: () => <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />,
};

const Card = ({ title, children }: any) => (
  <div className="card card_shadow">
    <div className="card_header">
      <h3 className="card_title">{title}</h3>
    </div>
    <div className="card_body">{children}</div>
  </div>
);

export const Overlay: Story = {
  name: '컨테이너 오버레이',
  render: () => (
    <div className="spin-overlay-demo">
      <SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중">
        <Card title="대시보드">
          <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
        </Card>
      </SpinWrap>
      <SpinWrap block blur loading ariaLabel="처리 중">
        <Card title="블러 효과">
          <p>
            <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.
          </p>
        </Card>
      </SpinWrap>
    </div>
  ),
};
