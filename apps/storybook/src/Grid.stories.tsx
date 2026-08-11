import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualGrid from '../../react/src/components/layout/Grid/Grid.jsx';
import ActualGridCol from '../../react/src/components/layout/Grid/GridCol.jsx';

const Grid = ActualGrid as React.ComponentType<any>;
const GridCol = ActualGridCol as React.ComponentType<any>;
const meta = {
  title: '레이아웃/Grid', component: Grid, parameters: { layout: 'fullscreen' },
  args: { cols: 3, gap: 'sm', autoFit: false, autoFill: false }
} satisfies Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const cells = (count: number, label: string | ((index: number) => string) = (index) => String(index + 1)) =>
  Array.from({ length: count }, (_, index) => <div className="grid_demo-cell" key={index}>{typeof label === 'function' ? label(index) : label}</div>);

export const Playground: Story = { name: 'Playground', render: (args) => <Demo><Grid {...args}>{cells(3)}</Grid></Demo> };
export const BasicLayout: Story = { name: '기본 페이지 레이아웃', render: () => <Demo><Grid gap="sm"><GridCol as="header" span={12} className="grid_demo-cell">Header</GridCol><GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">Sidebar</GridCol><GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">Main content</GridCol><GridCol as="footer" span={12} className="grid_demo-cell">Footer</GridCol></Grid></Demo> };
export const ContentLayout: Story = { name: '콘텐츠가 있는 페이지 레이아웃', render: () => <Demo><Grid gap="sm"><GridCol as="header" span={12} className="grid_demo-cell">Header</GridCol><GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">Sidebar</GridCol><GridCol as="main" span={12} spanMd={9} className="grid_demo-cell"><h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p><Grid cols={1} colsLg={2} gap="sm"><article className="component_stub">Content section</article><article className="component_stub">Content section</article></Grid></GridCol><GridCol as="footer" span={12} className="grid_demo-cell">Footer</GridCol></Grid></Demo> };
export const TwelveColumns: Story = { name: '12열 전체 활용', render: () => <Demo><Grid itemSpan={1} gap="sm">{cells(12)}</Grid></Demo> };
export const Parent: Story = { name: '부모 클래스로 제어', render: () => <Demo><Grid cols={3}>{cells(3, 'grid_cols-3')}</Grid><Grid ratio="2-1">{cells(2, 'grid_ratio-2-1')}</Grid><Grid itemSpan={4}>{cells(6, (index) => index === 0 ? 'grid_item-span-4 (12열 기준 3개/행)' : 'grid_item-span-4')}</Grid></Demo> };
export const Equal: Story = { name: '균등 열', render: () => <Demo><Grid cols={2}>{cells(2, 'cols 2')}</Grid><Grid cols={4}>{cells(4, 'cols 4')}</Grid></Demo> };
export const Ratio: Story = { name: '비율 열', render: () => <Demo><Grid ratio="1-2"><div className="grid_demo-cell">1 : 2</div><div className="grid_demo-cell">1 : 2</div></Grid><Grid ratio="1-2-1"><div className="grid_demo-cell">1</div><div className="grid_demo-cell">2</div><div className="grid_demo-cell">1</div></Grid></Demo> };
export const ItemSpan: Story = { name: '자식 일괄 span (12열)', render: () => <Demo><Grid itemSpan={6}>{cells(4, 'span 6')}</Grid><Grid itemSpan={3}>{cells(4, 'span 3')}</Grid></Demo> };
export const Child: Story = { name: '자식별 span (혼합 레이아웃)', render: () => <Demo><Grid><GridCol span={8}><div className="grid_demo-cell">span 8</div></GridCol><GridCol span={4}><div className="grid_demo-cell">span 4</div></GridCol>{Array.from({ length: 3 }, (_, index) => <GridCol span={4} key={index}><div className="grid_demo-cell">span 4</div></GridCol>)}</Grid></Demo> };
export const Gap: Story = { name: '간격', render: () => <Demo><Grid cols={3} gap="sm">{cells(3, 'gap sm')}</Grid><Grid cols={3} gap="lg">{cells(3, 'gap lg')}</Grid></Demo> };
export const Responsive: Story = { name: '반응형 (부모)', render: () => <Demo><Grid cols={1} colsMd={2} colsLg={3}>{cells(3, '1 → md 2 → lg 3열')}</Grid><Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>{cells(3, 'span 12 → md 6 → lg 4')}</Grid><Grid><GridCol span={12} spanMd={8} spanLg={9}><div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div></GridCol><GridCol span={12} spanMd={4} spanLg={3}><div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div></GridCol></Grid></Demo> };
export const Auto: Story = { name: '자동 배치', render: () => <Demo><Grid autoFit>{cells(6, 'auto-fit')}</Grid></Demo> };
