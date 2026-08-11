import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualDivider from '../../react/src/components/layout/Divider/Divider.jsx';
import ActualSpace from '../../react/src/components/layout/Space/Space.jsx';

const Button = ActualButton as React.ComponentType<any>;
const Divider = ActualDivider as React.ComponentType<any>;
const Space = ActualSpace as React.ComponentType<any>;
const meta = {
  title: '레이아웃/Space', component: Space, parameters: { layout: 'fullscreen' },
  args: { vertical: false, wrap: false, block: false, gap: 'md', align: '', justify: '' }
} satisfies Meta<typeof Space>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const boxes = (label = '항목') => [1, 2, 3].map((number) => <div className="space_demo-box" key={number}>{label} {number}</div>);

export const Playground: Story = { name: 'Playground', render: (args) => <Demo><Space {...args}>{boxes()}</Space></Demo> };
export const Basic: Story = { name: '기본', render: () => <Demo><Space>{boxes()}</Space></Demo> };
export const Vertical: Story = { name: '세로', render: () => <Demo><Space vertical>{boxes()}</Space></Demo> };
export const Gap: Story = { name: '간격', render: () => <Demo><Space gap="xs">{boxes('xs')}</Space><Space gap="sm">{boxes('sm')}</Space><Space>{boxes('md')}</Space><Space gap="lg">{boxes('lg')}</Space><Space gap="xl">{boxes('xl')}</Space></Demo> };
export const Wrap: Story = { name: '줄바꿈', render: () => <Demo><Space block wrap>{[1, 2, 3, 4, 5].map((number) => <div className="space_demo-box" style={{ minWidth: '8rem' }} key={number}>항목 {number}</div>)}</Space></Demo> };
export const Align: Story = { name: '정렬', render: () => <Demo><Space block align="center" style={{ minHeight: '5rem', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-md)' }}><div className="space_demo-box">align center</div><div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>높이 다름</div><div className="space_demo-box">align center</div></Space><Space block justify="between" style={{ background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-md)' }}><div className="space_demo-box">justify between</div><div className="space_demo-box">양 끝</div></Space></Demo> };
export const Combo: Story = { name: '조합 예시', render: () => <Demo><Space><Button variant="outline" label="취소" /><Button variant="filled" color="primary" label="저장" /><Divider vertical /><Button variant="text" label="더보기" /></Space></Demo> };
