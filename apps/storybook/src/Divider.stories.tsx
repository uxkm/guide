import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualDivider from '../../react/src/components/layout/Divider/Divider.jsx';
import ActualSpace from '../../react/src/components/layout/Space/Space.jsx';

const Divider = ActualDivider as React.ComponentType<any>;
const Space = ActualSpace as React.ComponentType<any>;
const meta = {
  title: '레이아웃/Divider', component: Divider, parameters: { layout: 'fullscreen' },
  args: { dashed: false, plain: false, vertical: false, orient: '', label: '라벨', tag: 'auto' }
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = { name: 'Playground', render: (args) => <Demo><Divider {...args} /></Demo> };
export const Basic: Story = { name: '기본', render: () => <Demo><p>위 콘텐츠</p><Divider /><p>아래 콘텐츠</p></Demo> };
export const Dashed: Story = { name: '점선', render: () => <Demo><p>위 콘텐츠</p><Divider dashed /><p>아래 콘텐츠</p></Demo> };
export const Text: Story = { name: '텍스트 레이블', render: () => <Demo><Divider label="섹션 제목" /><Divider plain label="보조 설명" /></Demo> };
export const Orient: Story = { name: '레이블 정렬', render: () => <Demo><Divider orient="left" label="왼쪽" /><Divider label="가운데" /><Divider orient="right" label="오른쪽" /></Demo> };
export const Vertical: Story = { name: '세로', render: () => <Demo><Space><span>항목 A</span><Divider vertical /><span>항목 B</span><Divider vertical dashed /><span>항목 C</span></Space></Demo> };
