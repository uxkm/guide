import Table from './Table.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Badge from './Badge.vue';
import { memberTableColumns, productTableColumns, stickyDeptMonthColumns, stickyMonthColumns } from '../data/table-demo.js';
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
    scroll: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    scrollMaxHeight: { control: 'text', type: { name: 'string', summary: "string" }},
    stickyTop: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    stickyLeft: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    stickyCols: { control: 'select', options: [1, 2, 3, 4], type: { name: 'enum', summary: "1 | 2 | 3 | 4" }},
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


export const Bordered = {
  name: "테두리",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "bordered로 모든 셀에 테두리를 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\n</script>\n\n<template>\n  <Table bordered>\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">항목</th>\n        <th scope=\"col\">수량</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>001</td>\n        <td>사과</td>\n        <td>10</td>\n      </tr>\n      <tr>\n        <td>002</td>\n        <td>바나나</td>\n        <td>25</td>\n      </tr>\n      <tr>\n        <td>003</td>\n        <td>오렌지</td>\n        <td>8</td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
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
    template: `<Table bordered>
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


export const Compact = {
  name: "컴팩트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "compact로 셀 패딩을 줄여 밀도를 높입니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { productTableColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table compact :columns=\"productTableColumns\">\n    <thead>\n      <tr>\n        <th scope=\"col\">제품</th>\n        <th scope=\"col\">가격</th>\n        <th scope=\"col\">재고</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>노트북</td>\n        <td>1,200,000원</td>\n        <td>24</td>\n      </tr>\n      <tr>\n        <td>키보드</td>\n        <td>89,000원</td>\n        <td>156</td>\n      </tr>\n      <tr>\n        <td>마우스</td>\n        <td>45,000원</td>\n        <td>89</td>\n      </tr>\n      <tr>\n        <td>모니터</td>\n        <td>350,000원</td>\n        <td>12</td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
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
    template: `<Table compact :columns="productTableColumns">
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


export const Hover = {
  name: "호버",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "hover로 행에 마우스를 올리면 배경이 강조됩니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { memberTableColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table hover :columns=\"memberTableColumns\">\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">역할</th>\n        <th scope=\"col\">상태</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>홍길동</td>\n        <td>프론트엔드</td>\n        <td>\n          <Badge dot color=\"success\" label=\"Active\" />\n        </td>\n      </tr>\n      <tr>\n        <td>김철수</td>\n        <td>백엔드</td>\n        <td>\n          <Badge dot color=\"success\" label=\"Active\" />\n        </td>\n      </tr>\n      <tr>\n        <td>이영희</td>\n        <td>디자이너</td>\n        <td>\n          <Badge dot color=\"warning\" label=\"Away\" />\n        </td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
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
    components: { Badge, Table },
    setup() {
      return { memberTableColumns };
    },
    template: `<Table hover :columns="memberTableColumns">
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


export const Variant = {
  name: "조합",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "bordered · compact · hover를 함께 조합할 수 있습니다.",
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


export const StickyTop = {
  name: "상단 고정",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "scroll + sticky-top으로 헤더를 상단에 고정합니다. scroll-max-height로 스크롤 영역 높이를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport Table from '@uxkm/ui/components/Table.vue';\n</script>\n\n<template>\n  <Table scroll scroll-max-height=\"14rem\" sticky-top bordered compact>\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">부서</th>\n        <th scope=\"col\">직급</th>\n        <th scope=\"col\">상태</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>홍길동</td>\n        <td>프론트엔드</td>\n        <td>시니어</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n      <tr>\n        <td>김철수</td>\n        <td>백엔드</td>\n        <td>리드</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n      <tr>\n        <td>이영희</td>\n        <td>디자인</td>\n        <td>시니어</td>\n        <td><Badge dot color=\"warning\" label=\"Away\" /></td>\n      </tr>\n      <tr>\n        <td>박민수</td>\n        <td>QA</td>\n        <td>주니어</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n      <tr>\n        <td>최지우</td>\n        <td>프론트엔드</td>\n        <td>주니어</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n      <tr>\n        <td>정수연</td>\n        <td>백엔드</td>\n        <td>시니어</td>\n        <td><Badge dot color=\"danger\" label=\"Busy\" /></td>\n      </tr>\n      <tr>\n        <td>한도윤</td>\n        <td>인프라</td>\n        <td>리드</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n      <tr>\n        <td>오세린</td>\n        <td>디자인</td>\n        <td>주니어</td>\n        <td><Badge dot color=\"success\" label=\"Active\" /></td>\n      </tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Badge, Table },
    template: `<Table scroll scroll-max-height="14rem" sticky-top bordered compact>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">직급</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>프론트엔드</td><td>시니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>이영희</td><td>디자인</td><td>시니어</td><td><Badge dot color="warning" label="Away" /></td></tr>
          <tr><td>박민수</td><td>QA</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>최지우</td><td>프론트엔드</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>정수연</td><td>백엔드</td><td>시니어</td><td><Badge dot color="danger" label="Busy" /></td></tr>
          <tr><td>한도윤</td><td>인프라</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>오세린</td><td>디자인</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
        </tbody>
      </Table>`,
  })),
};


export const StickyLeft = {
  name: "좌측 고정",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "sticky-left + sticky-cols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { stickyMonthColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table\n    scroll\n    scroll-max-height=\"none\"\n    sticky-left\n    :sticky-cols=\"1\"\n    bordered\n    compact\n    :columns=\"stickyMonthColumns\"\n  >\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">1월</th>\n        <th scope=\"col\">2월</th>\n        <th scope=\"col\">3월</th>\n        <th scope=\"col\">4월</th>\n        <th scope=\"col\">5월</th>\n        <th scope=\"col\">6월</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>\n      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>\n      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>\n      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Table },
    setup() {
      return { stickyMonthColumns };
    },
    template: `<Table
        scroll
        scroll-max-height="none"
        sticky-left
        :sticky-cols="1"
        bordered
        compact
        :columns="stickyMonthColumns"
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
          <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
          <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
          <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
          <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
        </tbody>
      </Table>`,
  })),
};


export const StickyLeftCols = {
  name: "좌측 고정 · 열 개수",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "sticky-cols로 고정할 열 개수를 지정합니다. 2열 이상은 sticky-left-offsets에 이전 열 너비 합을 넣습니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table\n    scroll\n    scroll-max-height=\"none\"\n    sticky-left\n    :sticky-cols=\"2\"\n    :sticky-left-offsets=\"{ 2: '7rem' }\"\n    bordered\n    compact\n    :columns=\"stickyDeptMonthColumns\"\n  >\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">부서</th>\n        <th scope=\"col\">1월</th>\n        <th scope=\"col\">2월</th>\n        <th scope=\"col\">3월</th>\n        <th scope=\"col\">4월</th>\n        <th scope=\"col\">5월</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>홍길동</td><td>프론트</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td></tr>\n      <tr><td>김철수</td><td>백엔드</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td></tr>\n      <tr><td>이영희</td><td>디자인</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td></tr>\n      <tr><td>박민수</td><td>QA</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td></tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Table },
    setup() {
      return { stickyDeptMonthColumns };
    },
    template: `<Table
        scroll
        scroll-max-height="none"
        sticky-left
        :sticky-cols="2"
        :sticky-left-offsets="{ 2: '7rem' }"
        bordered
        compact
        :columns="stickyDeptMonthColumns"
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
          <tr><td>홍길동</td><td>프론트</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td></tr>
          <tr><td>이영희</td><td>디자인</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td></tr>
          <tr><td>박민수</td><td>QA</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td></tr>
        </tbody>
      </Table>`,
  })),
};


export const StickyBoth = {
  name: "상단 · 좌측 고정",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "sticky-top과 sticky-left를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다.",
      },
      source: {
        code: "<script setup>\nimport Table from '@uxkm/ui/components/Table.vue';\nimport { stickyMonthColumns } from '@uxkm/ui/data/table-demo';\n</script>\n\n<template>\n  <Table\n    scroll\n    scroll-max-height=\"14rem\"\n    sticky-top\n    sticky-left\n    :sticky-cols=\"1\"\n    bordered\n    compact\n    :columns=\"stickyMonthColumns\"\n  >\n    <thead>\n      <tr>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">1월</th>\n        <th scope=\"col\">2월</th>\n        <th scope=\"col\">3월</th>\n        <th scope=\"col\">4월</th>\n        <th scope=\"col\">5월</th>\n        <th scope=\"col\">6월</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>\n      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>\n      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>\n      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>\n      <tr><td>최지우</td><td>180</td><td>162</td><td>171</td><td>144</td><td>210</td><td>250</td></tr>\n      <tr><td>정수연</td><td>240</td><td>212</td><td>181</td><td>194</td><td>260</td><td>280</td></tr>\n      <tr><td>한도윤</td><td>110</td><td>142</td><td>121</td><td>164</td><td>170</td><td>200</td></tr>\n      <tr><td>오세린</td><td>200</td><td>192</td><td>211</td><td>184</td><td>230</td><td>310</td></tr>\n    </tbody>\n  </Table>\n</template>",
        language: 'vue',
      },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: { Table },
    setup() {
      return { stickyMonthColumns };
    },
    template: `<Table
        scroll
        scroll-max-height="14rem"
        sticky-top
        sticky-left
        :sticky-cols="1"
        bordered
        compact
        :columns="stickyMonthColumns"
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
          <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
          <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
          <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
          <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
          <tr><td>최지우</td><td>180</td><td>162</td><td>171</td><td>144</td><td>210</td><td>250</td></tr>
          <tr><td>정수연</td><td>240</td><td>212</td><td>181</td><td>194</td><td>260</td><td>280</td></tr>
          <tr><td>한도윤</td><td>110</td><td>142</td><td>121</td><td>164</td><td>170</td><td>200</td></tr>
          <tr><td>오세린</td><td>200</td><td>192</td><td>211</td><td>184</td><td>230</td><td>310</td></tr>
        </tbody>
      </Table>`,
  })),
};
