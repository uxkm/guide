import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualProgress from '../../react/src/components/feedback/Progress/Progress.jsx';
import ActualProgressCircle from '../../react/src/components/feedback/Progress/ProgressCircle.jsx';
import { hiddenArgTypes } from './shared/storyArgTypes';

const Progress = ActualProgress as React.ComponentType<any>;
const ProgressCircle = ActualProgressCircle as React.ComponentType<any>;
const Stack = ({ children }: any) => <div className="demo-stack progress-demo-stack">{children}</div>;

const meta = {
  title: '피드백/Progress',
  component: Progress,
  subcomponents: { ProgressCircle },
  decorators: [(Story) => <div className="progress-story-demo"><Story /></div>],
  parameters: {
    layout: 'padded',
    controls: { exclude: ['className', 'style', 'id', 'ref', 'key', 'children'] },
  },
  args: {
    percent: 50,
    status: '',
    size: 'md',
    color: 'primary',
    showInfo: false,
    striped: false,
    animated: false,
    indeterminate: false,
    inside: false,
    block: false,
    label: '',
    ariaLabel: '진행률',
  },
  argTypes: {
    ...hiddenArgTypes,
    status: { control: 'select', options: ['', 'success', 'exception'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    percent: { control: { type: 'range', min: 0, max: 100 } },
    showInfo: { control: 'boolean' },
    striped: { control: 'boolean' },
    animated: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    inside: { control: 'boolean' },
    block: { control: 'boolean' },
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <Progress {...args} />,
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Stack>
      <Progress percent={0} />
      <Progress {...args} percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </Stack>
  ),
};

export const Label: Story = {
  name: '레이블 · 값',
  render: (args) => (
    <Stack>
      <Progress {...args} percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </Stack>
  ),
};

export const Color: Story = {
  name: '색상',
  render: (args) => (
    <Stack>
      <Progress {...args} percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </Stack>
  ),
};

export const Size: Story = {
  name: '크기',
  render: (args) => (
    <Stack>
      <Progress {...args} size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </Stack>
  ),
};

export const Striped: Story = {
  name: '줄무늬 · 애니메이션',
  render: (args) => (
    <Stack>
      <Progress {...args} percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </Stack>
  ),
};

export const Indeterminate: Story = {
  name: '불확정',
  render: (args) => (
    <Stack>
      <Progress {...args} indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </Stack>
  ),
};

export const Inside: Story = {
  name: '바 안 텍스트',
  render: (args) => (
    <Stack>
      <Progress {...args} percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </Stack>
  ),
};

export const Circle: Story = {
  name: '원형',
  render: (args) => (
    <div className="progress-circle-demo">
      <ProgressCircle {...args} percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </div>
  ),
};

export const Width: Story = {
  name: '너비',
  render: (args) => (
    <Stack>
      <Progress {...args} percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </Stack>
  ),
};
