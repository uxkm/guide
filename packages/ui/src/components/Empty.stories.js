import Empty from './Empty.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Card from './Card.vue';
import {
  emptyClassColumns,
  emptyClasses,
  emptyPropColumns,
  emptyProps,
  emptySlotColumns,
  emptySlots,
  emptyTokenColumns,
  emptyTokens,
} from '@doc-data/empty-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: emptyPropColumns, rows: emptyProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: emptySlotColumns, rows: emptySlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: emptyClassColumns, rows: emptyClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: emptyTokenColumns, rows: emptyTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/피드백/Empty',
  id: 'components-empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    description: { control: 'text', type: { name: 'string', summary: "string" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    simple: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false,
  },
  render: (_args, context) => ({
    components: { Empty },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Empty v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_image` · `empty_desc`로 아이콘과 설명을 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Empty description=\"데이터가 없습니다\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Empty },
    template: `<Empty description="데이터가 없습니다" />`,
  })),
};


export const Footer = {
  name: "액션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_footer`에 버튼·링크를 배치해 다음 행동을 유도합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Empty description=\"등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.\">\n    <template #footer>\n      <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"프로젝트 만들기\" />\n    </template>\n  </Empty>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md",
  simple: false,
  block: false
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Empty },
    template: `        <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
        <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
        </template>
        </Empty>`,
  })),
};


export const Custom = {
  name: "커스텀 이미지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_image`에 SVG·img를 자유롭게 넣을 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Empty description=\"검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.\">\n    <template #image>\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\">\n        <circle cx=\"11\" cy=\"11\" r=\"7\" />\n        <path d=\"m20 20-3.5-3.5\" />\n        <path d=\"M8 11h6\" />\n      </svg>\n    </template>\n  </Empty>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md",
  simple: false,
  block: false
},
  render: withDocsCanvasRender(() => ({
    components: { Empty },
    template: `        <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
        <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M8 11h6" />
        </svg>
        </template>
        </Empty>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_sm` · `empty`(기본) · `empty_lg` 세 가지 스케일을 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Empty size=\"sm\" description=\"Small\" />\n  <Empty description=\"Medium (기본)\" style=\"margin-top: var(--space-md);\" />\n  <Empty size=\"lg\" description=\"Large\" style=\"margin-top: var(--space-md);\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md",
  simple: false,
  block: false
},
  render: withDocsCanvasRender(() => ({
    components: { Empty },
    template: `<Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
      <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />`,
  })),
};


export const Simple = {
  name: "설명만",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_simple`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Empty simple size=\"sm\" description=\"일정 없음\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md",
  simple: false,
  block: false
},
  render: withDocsCanvasRender(() => ({
    components: { Empty },
    template: `<Empty simple size="sm" description="일정 없음" />`,
  })),
};


export const Block = {
  name: "블록 · 컨테이너",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`empty_block`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다.",
      },
      source: {
        code: "<script setup>\nimport Card from '@uxkm/ui/components/Card.vue';\nimport Empty from '@uxkm/ui/components/Empty.vue';\n</script>\n\n<template>\n  <Card variant=\"shadow\" style=\"max-width: var(--input-max-width); width: 100%;\">\n    <div class=\"card_header\">\n      <h3 class=\"card_title\">알림 목록</h3>\n    </div>\n    <div class=\"card_body\">\n      <Empty block description=\"새 알림이 없습니다\" />\n    </div>\n  </Card>\n  <div class=\"table_wrap\" style=\"max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);\">\n    <table class=\"table table_bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">이름</th>\n          <th scope=\"col\">상태</th>\n          <th scope=\"col\">날짜</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td colspan=\"3\" style=\"padding: 0; border: none;\">\n            <Empty block simple size=\"sm\" description=\"표시할 항목이 없습니다\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  description: "설명 텍스트입니다.",
  size: "md",
  simple: false,
  block: false
},
  render: withDocsCanvasRender(() => ({
    components: { Card, Empty },
    template: `<Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
        <div class="card_header">
          <h3 class="card_title">알림 목록</h3>
        </div>
        <div class="card_body">
          <Empty block description="새 알림이 없습니다" />
        </div>
      </Card>
      <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
        <table class="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" style="padding: 0; border: none;">
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>`,
  })),
};

