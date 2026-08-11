import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualFlex from '../../react/src/components/layout/Flex/Flex.jsx';
import ActualFlexItem from '../../react/src/components/layout/Flex/FlexItem.jsx';

const Flex = ActualFlex as React.ComponentType<any>;
const FlexItem = ActualFlexItem as React.ComponentType<any>;
const meta = {
  title: '레이아웃/Flex', component: Flex, parameters: { layout: 'fullscreen' },
  args: { direction: 'row', cols: 3, gap: 'sm', align: 'stretch', wrap: false, equal: false, autoFit: false }
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const cells = (count: number, label: string | ((index: number) => string) = (index) => String(index + 1)) =>
  Array.from({ length: count }, (_, index) => <div className="flex_demo-cell" key={index}>{typeof label === 'function' ? label(index) : label}</div>);

export const Playground: Story = { name: 'Playground', render: (args) => <Demo><Flex {...args}>{cells(3)}</Flex></Demo> };
export const PageLayout: Story = { name: '기본 페이지 레이아웃', render: () => <Demo><Flex wrap gap="sm"><FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem><FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">Main content</FlexItem><FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem></Flex></Demo> };
export const ContentLayout: Story = { name: '콘텐츠가 있는 페이지 레이아웃', render: () => <Demo><Flex wrap gap="sm" align="stretch"><FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem><FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell"><h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p><Flex cols={1} colsLg={2} gap="sm"><article className="component_stub">Content section</article><article className="component_stub">Content section</article></Flex></FlexItem><FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem></Flex></Demo> };
export const Parent: Story = { name: '부모 클래스로 제어', render: () => <Demo><Flex cols={3}>{cells(3, 'flex_cols-3')}</Flex><Flex ratio="2-1">{cells(2, 'flex_ratio-2-1')}</Flex><Flex itemSpan={4}>{cells(6, 'flex_items-span-4')}</Flex></Demo> };
export const TwelveColumns: Story = { name: '12열 전체 활용', render: () => <Demo><Flex itemSpan={1} gap="sm">{cells(12)}</Flex></Demo> };
export const Equal: Story = { name: '균등 항목', render: () => <Demo><Flex cols={2}>{cells(2, 'cols 2')}</Flex><Flex cols={4}>{cells(4, 'cols 4')}</Flex></Demo> };
export const Ratio: Story = { name: '비율 항목', render: () => <Demo><Flex ratio="1-2"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div></Flex><Flex ratio="1-2-1"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div></Flex></Demo> };
export const ItemSpan: Story = { name: '자식 일괄 span (12단위)', render: () => <Demo><Flex itemSpan={6}>{cells(4, 'span 6')}</Flex><Flex itemSpan={3}>{cells(4, 'span 3')}</Flex></Demo> };
export const ChildSpan: Story = { name: '자식별 span (혼합 레이아웃)', render: () => <Demo><Flex wrap><FlexItem span={8} className="flex_demo-cell">span 8</FlexItem><FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>{Array.from({ length: 3 }, (_, index) => <FlexItem span={4} className="flex_demo-cell" key={index}>span 4</FlexItem>)}</Flex></Demo> };
export const Gap: Story = { name: '간격', render: () => <Demo><Flex cols={3} gap="sm">{cells(3, 'gap sm')}</Flex><Flex cols={3} gap="lg">{cells(3, 'gap lg')}</Flex></Demo> };
export const Responsive: Story = { name: '반응형', render: () => <Demo><Flex cols={1} colsMd={2} colsLg={3} gap="sm">{cells(3, '1 → md 2 → lg 3개')}</Flex><Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>{cells(3, 'span 12 → md 6 → lg 4')}</Flex><Flex wrap><FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem><FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem></Flex></Demo> };
export const Auto: Story = { name: '자동 배치', render: () => <Demo><Flex autoFit>{cells(6, 'auto-fit')}</Flex></Demo> };
export const AlignmentAndRatio: Story = { name: '정렬과 비율', render: () => <Demo><Flex justify="between" gap="sm"><div className="flex_demo-cell">Start</div><div className="flex_demo-cell">End</div></Flex><Flex ratio="2-1" gap="sm"><div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div></Flex></Demo> };
