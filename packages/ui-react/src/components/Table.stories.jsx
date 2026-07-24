import React from 'react';
import Badge from './Badge.jsx';
import Table from './Table.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import { memberTableColumns, productTableColumns } from '@/data/table-demo';
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
    title: 'API · Children / Slots',
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

export const Variant = {
  name: '변형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'bordered · compact · hover를 조합할 수 있습니다.',
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
