import React from 'react';
import Badge from './Badge.jsx';
import Table from './Table.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  memberTableColumns,
  productTableColumns,
  stickyDeptMonthColumns,
  stickyMonthColumns,
} from '@/data/table-demo';
import {
  tableClassColumns,
  tableClasses,
  tablePropColumns,
  tableProps,
  tableSlotColumns,
  tableSlots,
  tableTokenColumns,
  tableTokens,
} from '@doc-data/table-api';

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: tablePropColumns, rows: tableProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯은 React children에 대응합니다. thead · tbody 등 네이티브 테이블 마크업을 넣습니다.',
    tables: [{ columns: tableSlotColumns, rows: tableSlots, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: tableClassColumns, rows: tableClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: tableTokenColumns, rows: tableTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  bordered: false,
  striped: false,
  compact: false,
  hover: false,
  wrap: true,
  scroll: false,
  stickyTop: false,
  stickyLeft: false,
  stickyCols: 1,
  columns: [],
};

export default {
  title: 'Components/데이터 표시/Table',
  id: 'components-table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    striped: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    compact: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    hover: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    wrap: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    scroll: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    scrollMaxHeight: { control: 'text', type: { name: 'string', summary: 'string' } },
    stickyTop: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    stickyLeft: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    stickyCols: {
      control: 'select',
      options: [1, 2, 3, 4],
      type: { name: 'enum', summary: '1 | 2 | 3 | 4' },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
    docs: {
      description: {
        component: '데이터 목록을 표시하는 테이블 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Table {...args} bordered striped hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>역할</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>개발자</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function BasicExample() {
  return (
    <Table columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const Striped = {
  name: '줄무늬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'striped로 짝수 행에 배경색을 적용합니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function StripedExample() {
  return (
    <Table striped columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table striped columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const Bordered = {
  name: '테두리',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'bordered로 모든 셀에 테두리를 적용합니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';

export function BorderedExample() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const Compact = {
  name: '컴팩트',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'compact로 셀 패딩을 줄여 밀도를 높입니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function CompactExample() {
  return (
    <Table compact columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table compact columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const Hover = {
  name: '호버',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'hover로 행에 마우스를 올리면 배경이 강조됩니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function HoverExample() {
  return (
    <Table hover columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table hover columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const Variant = {
  name: '조합',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'bordered · compact · hover를 함께 조합할 수 있습니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';

export function VariantExample() {
  return (
    <Table bordered compact hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Table bordered compact hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const StickyTop = {
  name: '상단 고정',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'scroll + stickyTop으로 헤더를 상단에 고정합니다. scrollMaxHeight로 스크롤 영역 높이를 조절합니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';

export function StickyTopExample() {
  return (
    <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const StickyLeft = {
  name: '좌측 고정',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'stickyLeft + stickyCols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const StickyLeftCols = {
  name: '좌측 고정 · 열 개수',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'stickyCols로 고정할 열 개수를 지정합니다. 2열 이상은 stickyLeftOffsets에 이전 열 너비 합을 넣습니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftColsExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={2}
      stickyLeftOffsets={{ 2: '7rem' }}
      bordered
      compact
      columns={stickyDeptMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={2}
      stickyLeftOffsets={{ 2: '7rem' }}
      bordered
      compact
      columns={stickyDeptMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>,
  ),
};

export const StickyBoth = {
  name: '상단 · 좌측 고정',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'stickyTop과 stickyLeft를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다.',
      },
      source: {
        code: `import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyBothExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="14rem"
      stickyTop
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Table
      scroll
      scrollMaxHeight="14rem"
      stickyTop
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>,
  ),
};
