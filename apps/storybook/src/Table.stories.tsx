import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualTable from '../../react/src/components/data-display/Table/Table.jsx';
import ActualBadge from '../../react/src/components/data-display/Badge/Badge.jsx';

const Table = ActualTable as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;

const members = [['홍길동', 'Frontend', '활성'], ['김철수', 'Backend', '활성'], ['이영희', 'Design', '휴가']];
const products = [['Basic', '₩12,000', '120'], ['Pro', '₩29,000', '84'], ['Enterprise', '문의', '12']];
const columns = [{ width: '9rem', nowrap: true }, { minWidth: '10rem' }, { width: '7rem', nowrap: true }];
const longRows = Array.from({ length: 12 }, (_, index) => [`사용자 ${index + 1}`, index % 2 ? 'Design' : 'Development', index % 3 ? '활성' : '대기']);
const wideColumns = [{ width: '8rem', nowrap: true }, { width: '10rem', nowrap: true }, { width: '10rem' }, { width: '10rem' }, { width: '10rem' }];

const Rows = ({ data = members, badge = false }: { data?: string[][]; badge?: boolean }) => (
  <>
    {data.map((row) => (
      <tr key={row[0]}>
        {row.map((cell, index) => (
          <td key={cell}>{badge && index === 2 ? <Badge color={cell === '활성' ? 'success' : 'warning'} label={cell} /> : cell}</td>
        ))}
      </tr>
    ))}
  </>
);

const Body = ({ data = members, badge = false }: { data?: string[][]; badge?: boolean }) => (
  <>
    <thead>
      <tr>
        <th scope="col">이름</th>
        <th scope="col">구분</th>
        <th scope="col">상태</th>
      </tr>
    </thead>
    <tbody>
      <Rows data={data} badge={badge} />
    </tbody>
  </>
);

const WideBody = () => (
  <>
    <thead>
      <tr>
        <th>이름</th>
        <th>부서</th>
        <th>1월</th>
        <th>2월</th>
        <th>3월</th>
      </tr>
    </thead>
    <tbody>
      {longRows.slice(0, 6).map((row, index) => (
        <tr key={row[0]}>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{120 + index}</td>
          <td>{132 + index}</td>
          <td>{145 + index}</td>
        </tr>
      ))}
    </tbody>
  </>
);

const meta = {
  title: '데이터 표시/Table',
  component: Table,
  parameters: { layout: 'fullscreen' },
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    scroll: false,
    scrollMaxHeight: '',
    stickyTop: false,
    stickyLeft: false,
    stickyCols: 1,
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    bordered: {
      control: 'boolean',
      description: '셀 테두리 표시',
    },
    striped: {
      control: 'boolean',
      description: '줄무늬 행 변형',
    },
    compact: {
      control: 'boolean',
      description: '조밀한 패딩',
    },
    hover: {
      control: 'boolean',
      description: '행 호버 강조',
    },
    wrap: {
      control: 'boolean',
      description: '스크롤용 wrapper 사용',
    },
    scroll: {
      control: 'boolean',
      description: 'wrapper 스크롤 활성화',
    },
    scrollMaxHeight: {
      control: 'text',
      description: '세로 스크롤 최대 높이',
    },
    stickyTop: {
      control: 'boolean',
      description: '헤더 행 고정',
    },
    stickyLeft: {
      control: 'boolean',
      description: '왼쪽 열 고정',
    },
    stickyCols: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
      description: '좌측 고정 열 개수(1~4)',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
    children: { table: { disable: true }, description: 'thead · tbody 콘텐츠' },
    columns: { table: { disable: true }, description: '열 너비·패딩 설정' },
    stickyLeftOffsets: { table: { disable: true }, description: '고정 열별 left 오프셋' },
    style: { table: { disable: true } },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  args: { bordered: true, hover: true },
  render: (args) => (
    <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
  ),
};

export const Striped: Story = {
  name: '줄무늬',
  args: { striped: true },
  render: (args) => (
    <Demo>
      <Table {...args} columns={columns}>
        <Body data={products} />
      </Table>
    </Demo>
  ),
};

export const Bordered: Story = {
  name: '테두리',
  args: { bordered: true },
  render: (args) => (
    <Demo>
      <Table {...args}>
        <Body />
      </Table>
    </Demo>
  ),
};

export const Compact: Story = {
  name: '컴팩트',
  args: { compact: true },
  render: (args) => (
    <Demo>
      <Table {...args} columns={columns}>
        <Body data={products} />
      </Table>
    </Demo>
  ),
};

export const Hover: Story = {
  name: '호버',
  args: { hover: true },
  render: (args) => (
    <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
  ),
};

export const Combined: Story = {
  name: '조합',
  args: { bordered: true, compact: true, hover: true },
  render: (args) => (
    <Demo>
      <Table {...args}>
        <Body />
      </Table>
    </Demo>
  ),
};

export const StickyTop: Story = {
  name: '상단 고정',
  args: { scroll: true, scrollMaxHeight: '14rem', stickyTop: true, bordered: true, compact: true },
  render: (args) => (
    <Demo>
      <Table {...args}>
        <Body data={longRows} />
      </Table>
    </Demo>
  ),
};

export const StickyLeft: Story = {
  name: '좌측 고정',
  args: { scroll: true, stickyLeft: true },
  render: (args) => (
    <Demo>
      <Table {...args} columns={wideColumns} style={{ minWidth: '48rem' }}>
        <WideBody />
      </Table>
    </Demo>
  ),
};

export const StickyColumns: Story = {
  name: '다중 열 고정',
  args: { scroll: true, stickyLeft: true, stickyCols: 2 },
  render: (args) => (
    <Demo>
      <Table {...args} stickyLeftOffsets={{ 2: '8rem' }} columns={wideColumns} style={{ minWidth: '48rem' }}>
        <WideBody />
      </Table>
    </Demo>
  ),
};

export const StickyBoth: Story = {
  name: '상단·좌측 고정',
  args: { scroll: true, scrollMaxHeight: '14rem', stickyTop: true, stickyLeft: true, stickyCols: 2, bordered: true, compact: true },
  render: (args) => (
    <Demo>
      <Table {...args} stickyLeftOffsets={{ 2: '8rem' }} columns={wideColumns} style={{ minWidth: '48rem' }}>
        <WideBody />
      </Table>
    </Demo>
  ),
};
