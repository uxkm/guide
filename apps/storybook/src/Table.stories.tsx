import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualTable from '../../react/src/components/data-display/Table/Table.jsx';
import ActualBadge from '../../react/src/components/data-display/Badge/Badge.jsx';

const Table = ActualTable as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;
const meta = { title: '데이터 표시/Table', component: Table, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const members = [['홍길동', 'Frontend', '활성'], ['김철수', 'Backend', '활성'], ['이영희', 'Design', '휴가']];
const products = [['Basic', '₩12,000', '120'], ['Pro', '₩29,000', '84'], ['Enterprise', '문의', '12']];
const columns = [{ width: '9rem', nowrap: true }, { minWidth: '10rem' }, { width: '7rem', nowrap: true }];
const Rows = ({ data = members, badge = false }: { data?: string[][]; badge?: boolean }) => <>{data.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>{badge && index === 2 ? <Badge color={cell === '활성' ? 'success' : 'warning'} label={cell} /> : cell}</td>)}</tr>)}</>;
const Body = ({ data = members, badge = false }: { data?: string[][]; badge?: boolean }) => <><thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead><tbody><Rows data={data} badge={badge} /></tbody></>;

export const Basic: Story = { name: '기본', render: () => <Demo><Table columns={columns}><Body badge /></Table></Demo> };
export const Striped: Story = { name: '줄무늬', render: () => <Demo><Table striped columns={columns}><Body data={products} /></Table></Demo> };
export const Bordered: Story = { name: '테두리', render: () => <Demo><Table bordered><Body /></Table></Demo> };
export const Compact: Story = { name: '컴팩트', render: () => <Demo><Table compact columns={columns}><Body data={products} /></Table></Demo> };
export const Hover: Story = { name: '호버', render: () => <Demo><Table hover columns={columns}><Body badge /></Table></Demo> };
export const Combined: Story = { name: '조합', render: () => <Demo><Table bordered compact hover><Body /></Table></Demo> };
const longRows = Array.from({ length: 12 }, (_, index) => [`사용자 ${index + 1}`, index % 2 ? 'Design' : 'Development', index % 3 ? '활성' : '대기']);
export const StickyTop: Story = { name: '상단 고정', render: () => <Demo><Table scroll scrollMaxHeight="14rem" stickyTop bordered compact><Body data={longRows} /></Table></Demo> };
const wideColumns = [{ width: '8rem', nowrap: true }, { width: '10rem', nowrap: true }, { width: '10rem' }, { width: '10rem' }, { width: '10rem' }];
const WideBody = () => <><thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead><tbody>{longRows.slice(0, 6).map((row, index) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{120 + index}</td><td>{132 + index}</td><td>{145 + index}</td></tr>)}</tbody></>;
export const StickyLeft: Story = { name: '좌측 고정', render: () => <Demo><Table scroll stickyLeft columns={wideColumns} style={{ minWidth: '48rem' }}><WideBody /></Table></Demo> };
export const StickyColumns: Story = { name: '다중 열 고정', render: () => <Demo><Table scroll stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }} columns={wideColumns} style={{ minWidth: '48rem' }}><WideBody /></Table></Demo> };
export const StickyBoth: Story = { name: '상단·좌측 고정', render: () => <Demo><Table scroll scrollMaxHeight="14rem" stickyTop stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }} bordered compact columns={wideColumns} style={{ minWidth: '48rem' }}><WideBody /></Table></Demo> };
