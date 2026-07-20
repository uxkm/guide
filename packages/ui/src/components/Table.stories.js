import Table from './Table.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Badge from './Badge.vue';
import { memberTableColumns, productTableColumns } from '../data/table-demo.js';
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
    title: "API · Props",
    tables: [
      { columns: tablePropColumns, rows: tableProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: tableSlotColumns, rows: tableSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: tableClassColumns, rows: tableClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: tableTokenColumns, rows: tableTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/Table',
  id: 'components-table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    striped: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    compact: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    hover: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    wrap: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    columns: [],
  },
  render: (_args, context) => ({
    components: { Table },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { memberTableColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table :columns=\"memberTableColumns\">\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">역할</th>\n        <th scope=\"col\">상태</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>홍길동</td>\n        <td>프론트엔드</td>\n        <td>\n          <Badge dot color=\"success\" label=\"Active\" />\n        </td>\n      </tr>\n      <tr>\n        <td>김철수</td>\n        <td>백엔드</td>\n        <td>\n          <Badge dot color=\"success\" label=\"Active\" />\n        </td>\n      </tr>\n      <tr>\n        <td>이영희</td>\n        <td>디자이너</td>\n        <td>\n          <Badge dot color=\"warning\" label=\"Away\" />\n        </td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  columns: []
},
  render: withDocsCanvasRender(() => ({
    components: { Badge, Table },
    setup() {
      return { memberTableColumns };
    },
    template: `<Table :columns="memberTableColumns">
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
      </Table>`,
  })),
};


export const Striped = {
  name: "줄무늬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "striped로 짝수 행에 배경색을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { productTableColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table striped :columns=\"productTableColumns\">\n    <thead>\n      <tr>\n        <th scope=\"col\">제품</th>\n        <th scope=\"col\">가격</th>\n        <th scope=\"col\">재고</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>노트북</td>\n        <td>1,200,000원</td>\n        <td>24</td>\n      </tr>\n      <tr>\n        <td>키보드</td>\n        <td>89,000원</td>\n        <td>156</td>\n      </tr>\n      <tr>\n        <td>마우스</td>\n        <td>45,000원</td>\n        <td>89</td>\n      </tr>\n      <tr>\n        <td>모니터</td>\n        <td>350,000원</td>\n        <td>12</td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  striped: false,
  compact: false,
  hover: false,
  wrap: true,
  columns: []
},
  render: withDocsCanvasRender(() => ({
    components: { Table },
    setup() {
      return { productTableColumns };
    },
    template: `<Table striped :columns="productTableColumns">
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
      </Table>`,
  })),
};


export const Variant = {
  name: "변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "bordered · compact · hover를 조합할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\n</script>\n\n<template>\n  <Table bordered compact hover>\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">항목</th>\n        <th scope=\"col\">수량</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>001</td>\n        <td>사과</td>\n        <td>10</td>\n      </tr>\n      <tr>\n        <td>002</td>\n        <td>바나나</td>\n        <td>25</td>\n      </tr>\n      <tr>\n        <td>003</td>\n        <td>오렌지</td>\n        <td>8</td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  striped: false,
  compact: false,
  hover: false,
  wrap: true,
  columns: []
},
  render: withDocsCanvasRender(() => ({
    components: { Table },
    template: `<Table bordered compact hover>
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
      </Table>`,
  })),
};

