import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualProgress from '../../react/src/components/feedback/Progress/Progress.jsx';
import ActualProgressCircle from '../../react/src/components/feedback/Progress/ProgressCircle.jsx';

const Progress = ActualProgress as React.ComponentType<any>;
const ProgressCircle = ActualProgressCircle as React.ComponentType<any>;
const Stack = ({ children }: any) => <div className="demo-stack progress-demo-stack">{children}</div>;

const meta = { title: '피드백/Progress', component: Progress, subcomponents: { ProgressCircle }, decorators: [(Story) => <div className="progress-story-demo"><Story /></div>], parameters: { layout: 'padded' }, argTypes: { status: { control: 'select', options: ['', 'success', 'exception'] }, size: { control: 'select', options: ['sm', 'md', 'lg'] }, color: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] } } } satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '기본', render: () => <Stack><Progress percent={0} /><Progress percent={30} /><Progress percent={60} /><Progress percent={100} status="success" /></Stack> };
export const Label: Story = { name: '레이블 · 값', render: () => <Stack><Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" /><Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" /></Stack> };
export const Color: Story = { name: '색상', render: () => <Stack><Progress percent={50} color="primary" ariaLabel="Primary 진행률" /><Progress percent={100} color="success" ariaLabel="Success 진행률" /><Progress percent={75} color="warning" ariaLabel="Warning 진행률" /><Progress percent={35} color="danger" ariaLabel="Danger 진행률" /></Stack> };
export const Size: Story = { name: '크기', render: () => <Stack><Progress size="sm" percent={40} /><Progress percent={55} /><Progress size="lg" percent={70} /></Stack> };
export const Striped: Story = { name: '줄무늬 · 애니메이션', render: () => <Stack><Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" /><Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" /></Stack> };
export const Indeterminate: Story = { name: '불확정', render: () => <Stack><Progress indeterminate color="primary" ariaLabel="처리 중" /><Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" /></Stack> };
export const Inside: Story = { name: '바 안 텍스트', render: () => <Stack><Progress percent={25} inside /><Progress percent={80} inside size="lg" color="success" /></Stack> };
export const Circle: Story = { name: '원형', render: () => <div className="progress-circle-demo"><ProgressCircle percent={25} /><ProgressCircle percent={68} color="success" /><ProgressCircle percent={50} size="sm" color="warning" /><ProgressCircle percent={90} size="lg" color="danger" /></div> };
export const Width: Story = { name: '너비', render: () => <Stack><Progress percent={50} showInfo label="progress_fit" /><Progress percent={72} block showInfo label="progress_block — 전체 너비" /></Stack> };
