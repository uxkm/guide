import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualPagination from '../../react/src/components/navigation/Pagination/Pagination.jsx';

const Pagination = ActualPagination as React.ComponentType<any>;
const Stack = ({ children }: any) => <div className="pagination-stack-demo">{children}</div>;
function DemoPagination({ current: initial = 1, ...props }: any) { const [current, setCurrent] = useState(initial); return <Pagination {...props} current={current} onChange={setCurrent} />; }
function ToolbarDemo() { const [current, setCurrent] = useState(5); const [input, setInput] = useState('5'); const totalPages = 13; const move = () => { const next = Math.min(totalPages, Math.max(1, Number(input) || 1)); setCurrent(next); setInput(String(next)); }; return <div className="pagination_wrap"><span className="pagination_total">총 128건</span><div className="pagination_wrap-end"><Pagination current={current} total={128} pageSize={10} minimal onChange={(page: number) => { setCurrent(page); setInput(String(page)); }} /><label className="pagination_jumper">이동<input type="number" className="pagination_jumper-input" value={input} min={1} max={totalPages} aria-label="이동할 페이지" onChange={(event) => setInput(event.target.value)} onBlur={move} onKeyDown={(event) => { if (event.key === 'Enter') move(); }} />페이지</label></div></div>; }

const meta = { title: '네비게이션/Pagination', component: Pagination, decorators: [(Story) => <div className="pagination-story-demo"><Story /></div>], parameters: { layout: 'padded' }, argTypes: { current: { control: 'number' }, total: { control: 'number' }, pageSize: { control: 'number' }, simple: { control: 'boolean' }, minimal: { control: 'boolean' }, size: { control: 'select', options: ['sm', 'md', 'lg'] }, round: { control: 'boolean' }, ariaLabel: { control: 'text' } } } satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '기본', render: () => <DemoPagination current={1} total={50} pageSize={10} /> };
export const Minimal: Story = { name: '미니멀', render: () => <DemoPagination current={4} total={50} pageSize={10} minimal /> };
export const Size: Story = { name: '크기', render: () => <Stack><DemoPagination ariaLabel="작은 페이지 이동" current={1} total={20} pageSize={10} size="sm" /><DemoPagination ariaLabel="기본 페이지 이동" current={1} total={20} pageSize={10} /><DemoPagination ariaLabel="큰 페이지 이동" current={1} total={20} pageSize={10} size="lg" /></Stack> };
export const Round: Story = { name: '둥근', render: () => <DemoPagination current={7} total={80} pageSize={10} round /> };
export const Ellipsis: Story = { name: '페이지 생략', render: () => <DemoPagination current={10} total={500} pageSize={10} /> };
export const Simple: Story = { name: '심플', render: () => <Stack><DemoPagination ariaLabel="심플 페이지 이동" simple current={3} total={120} pageSize={10} /><DemoPagination ariaLabel="미니멀 심플 페이지 이동" simple minimal current={1} total={120} pageSize={10} /></Stack> };
export const Toolbar: Story = { name: '툴바 조합', render: () => <ToolbarDemo /> };
export const Align: Story = { name: '정렬', render: () => <Stack><DemoPagination ariaLabel="왼쪽 페이지 이동" current={1} total={20} pageSize={10} /><DemoPagination ariaLabel="가운데 페이지 이동" current={1} total={20} pageSize={10} className="pagination_align-center" /><DemoPagination ariaLabel="오른쪽 페이지 이동" current={1} total={20} pageSize={10} className="pagination_align-end" /></Stack> };
export const State: Story = { name: '상태', render: () => <Stack><DemoPagination ariaLabel="첫 페이지 상태" current={1} total={30} pageSize={10} /><DemoPagination ariaLabel="마지막 페이지 상태" current={10} total={100} pageSize={10} /></Stack> };
