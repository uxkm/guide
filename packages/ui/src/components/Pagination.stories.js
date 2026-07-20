import Pagination from './Pagination.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import {
  paginationClassColumns,
  paginationClasses,
  paginationEventColumns,
  paginationEvents,
  paginationPropColumns,
  paginationProps,
  paginationTokenColumns,
  paginationTokens,
} from '@doc-data/pagination-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: paginationPropColumns, rows: paginationProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Events",
    tables: [
      { columns: paginationEventColumns, rows: paginationEvents, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: paginationClassColumns, rows: paginationClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: paginationTokenColumns, rows: paginationTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Pagination',
  id: 'components-pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', type: { name: 'number', summary: "number" }},
    total: { control: 'number', type: { name: 'number', summary: "number" }},
    pageSize: { control: 'number', type: { name: 'number', summary: "number" }},
    simple: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    minimal: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    round: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    current: 1,
    total: 1,
    pageSize: 10,
    simple: false,
    minimal: false,
    size: "md",
    round: false,
    ariaLabel: "페이지 이동",
  },
  render: (_args, context) => ({
    components: { Pagination },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Pagination v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "이전·다음 버튼과 페이지 번호로 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"1\" :total=\"50\" :page-size=\"10\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  size: "md",
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="1" :total="50" :page-size="10" />`,
  })),
};


export const Minimal = {
  name: "미니멀",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "minimal로 테두리 없는 가벼운 스타일을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"4\" :total=\"50\" :page-size=\"10\" minimal />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="4" :total="50" :page-size="10" minimal />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "size로 항목 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" size=\"sm\" />\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" />\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" size=\"lg\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="1" :total="20" :page-size="10" size="sm" />
      <Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" size="lg" />`,
  })),
};


export const Round = {
  name: "둥근",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "round로 pill 형태의 페이지 버튼을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"7\" :total=\"80\" :page-size=\"10\" round />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="7" :total="80" :page-size="10" round />`,
  })),
};


export const Ellipsis = {
  name: "페이지 생략",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "페이지가 많을 때 중간 구간을 생략합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"10\" :total=\"500\" :page-size=\"10\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="10" :total="500" :page-size="10" />`,
  })),
};


export const Simple = {
  name: "심플",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "simple로 이전·다음과 현재/전체 페이지만 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination simple :current=\"3\" :total=\"120\" :page-size=\"10\" />\n  <Pagination simple minimal :current=\"1\" :total=\"120\" :page-size=\"10\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination simple :current="3" :total="120" :page-size="10" />
      <Pagination simple minimal :current="1" :total="120" :page-size="10" />`,
  })),
};


export const Toolbar = {
  name: "툴바 조합",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <div class=\"pagination_wrap\">\n    <span class=\"pagination_total\">총 128건</span>\n    <div class=\"pagination_wrap-end\">\n      <Pagination :current=\"5\" :total=\"128\" :page-size=\"10\" minimal />\n      <label class=\"pagination_jumper\">\n        이동\n        <input type=\"number\" class=\"pagination_jumper-input\" value=\"5\" min=\"1\" max=\"13\" aria-label=\"이동할 페이지\" />\n        페이지\n      </label>\n    </div>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<div class="pagination_wrap">
        <span class="pagination_total">총 128건</span>
        <div class="pagination_wrap-end">
          <Pagination :current="5" :total="128" :page-size="10" minimal />
          <label class="pagination_jumper">
            이동
            <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
            페이지
          </label>
        </div>
      </div>`,
  })),
};


export const Align = {
  name: "정렬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" />\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" class=\"pagination_align-center\" />\n  <Pagination :current=\"1\" :total=\"20\" :page-size=\"10\" class=\"pagination_align-end\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다.",
      },
      source: {
        code: "<script setup>\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\n</script>\n\n<template>\n  <Pagination :current=\"1\" :total=\"30\" :page-size=\"10\" />\n  <Pagination :current=\"10\" :total=\"100\" :page-size=\"10\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  total: 1,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: "md",
  round: false,
  ariaLabel: "페이지 이동"
},
  render: withDocsCanvasRender(() => ({
    components: { Pagination },
    template: `<Pagination :current="1" :total="30" :page-size="10" />
      <Pagination :current="10" :total="100" :page-size="10" />`,
  })),
};

