import Breadcrumb from './Breadcrumb.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import BreadcrumbItem from './BreadcrumbItem.vue';
import {
  breadcrumbClassColumns,
  breadcrumbClasses,
  breadcrumbItemPropColumns,
  breadcrumbItemProps,
  breadcrumbItemSlotColumns,
  breadcrumbItemSlots,
  breadcrumbPropColumns,
  breadcrumbProps,
  breadcrumbSlotColumns,
  breadcrumbSlots,
  breadcrumbTokenColumns,
  breadcrumbTokens,
} from '@doc-data/breadcrumb-api';
const apiSections = [
  {
    title: "API · Breadcrumb Props",
    tables: [
      { columns: breadcrumbPropColumns, rows: breadcrumbProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · BreadcrumbItem Props",
    tables: [
      { columns: breadcrumbItemPropColumns, rows: breadcrumbItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Breadcrumb Slots",
    tables: [
      { columns: breadcrumbSlotColumns, rows: breadcrumbSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · BreadcrumbItem Slots",
    tables: [
      { columns: breadcrumbItemSlotColumns, rows: breadcrumbItemSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: breadcrumbClassColumns, rows: breadcrumbClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: breadcrumbTokenColumns, rows: breadcrumbTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Breadcrumb',
  id: 'components-breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    separator: { control: 'select', options: ["chevron","slash","dot"], type: { name: 'enum', summary: "'chevron' | 'slash' | 'dot'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
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
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md",
  },
  render: (_args, context) => ({
    components: { Breadcrumb, BreadcrumbItem },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\n</script>\n\n<template>\n  <Breadcrumb\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '컴포넌트', href: '#' },\n  { label: 'Breadcrumb', current: true },\n  ]\"\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb },
    template: `<Breadcrumb
      :items="[
      { label: '홈', href: '#' },
      { label: '컴포넌트', href: '#' },
      { label: 'Breadcrumb', current: true },
      ]"
      />`,
  })),
};


export const Separator = {
  name: "구분자",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "separator로 구분자 스타일을 변경합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\n</script>\n\n<template>\n  <Breadcrumb\n  aria-label=\"경로 — chevron\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '가이드', href: '#' },\n  { label: 'Chevron', current: true },\n  ]\"\n  />\n  <Breadcrumb\n  separator=\"slash\"\n  aria-label=\"경로 — slash\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '가이드', href: '#' },\n  { label: 'Slash', current: true },\n  ]\"\n  />\n  <Breadcrumb\n  separator=\"dot\"\n  aria-label=\"경로 — dot\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '가이드', href: '#' },\n  { label: 'Dot', current: true },\n  ]\"\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb },
    template: `<Breadcrumb
      aria-label="경로 — chevron"
      :items="[
      { label: '홈', href: '#' },
      { label: '가이드', href: '#' },
      { label: 'Chevron', current: true },
      ]"
      />
      <Breadcrumb
      separator="slash"
      aria-label="경로 — slash"
      :items="[
      { label: '홈', href: '#' },
      { label: '가이드', href: '#' },
      { label: 'Slash', current: true },
      ]"
      />
      <Breadcrumb
      separator="dot"
      aria-label="경로 — dot"
      :items="[
      { label: '홈', href: '#' },
      { label: '가이드', href: '#' },
      { label: 'Dot', current: true },
      ]"
      />`,
  })),
};


export const Icon = {
  name: "홈 아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "icon으로 아이콘만 있는 첫 항목을 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\n</script>\n\n<template>\n  <Breadcrumb>\n    <BreadcrumbItem href=\"#\" icon aria-label=\"홈\">\n      <svg class=\"breadcrumb_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n        <path d=\"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z\" />\n      </svg>\n    </BreadcrumbItem>\n    <BreadcrumbItem label=\"설정\" href=\"#\" />\n    <BreadcrumbItem label=\"계정\" href=\"#\" />\n    <BreadcrumbItem label=\"프로필\" current />\n  </Breadcrumb>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `<Breadcrumb>
        <BreadcrumbItem href="#" icon aria-label="홈">
          <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
          </svg>
        </BreadcrumbItem>
        <BreadcrumbItem label="설정" href="#" />
        <BreadcrumbItem label="계정" href="#" />
        <BreadcrumbItem label="프로필" current />
      </Breadcrumb>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "size로 텍스트 크기를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\n</script>\n\n<template>\n  <Breadcrumb\n  size=\"sm\"\n  aria-label=\"경로 — small\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '문서', href: '#' },\n  { label: 'Small', current: true },\n  ]\"\n  />\n  <Breadcrumb\n  aria-label=\"경로 — medium\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '문서', href: '#' },\n  { label: 'Medium', current: true },\n  ]\"\n  />\n  <Breadcrumb\n  size=\"lg\"\n  aria-label=\"경로 — large\"\n  :items=\"[\n  { label: '홈', href: '#' },\n  { label: '문서', href: '#' },\n  { label: 'Large', current: true },\n  ]\"\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb },
    template: `<Breadcrumb
      size="sm"
      aria-label="경로 — small"
      :items="[
      { label: '홈', href: '#' },
      { label: '문서', href: '#' },
      { label: 'Small', current: true },
      ]"
      />
      <Breadcrumb
      aria-label="경로 — medium"
      :items="[
      { label: '홈', href: '#' },
      { label: '문서', href: '#' },
      { label: 'Medium', current: true },
      ]"
      />
      <Breadcrumb
      size="lg"
      aria-label="경로 — large"
      :items="[
      { label: '홈', href: '#' },
      { label: '문서', href: '#' },
      { label: 'Large', current: true },
      ]"
      />`,
  })),
};


export const Ellipsis = {
  name: "경로 생략",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\n</script>\n\n<template>\n  <Breadcrumb>\n    <BreadcrumbItem href=\"#\" icon aria-label=\"홈\">\n      <svg class=\"breadcrumb_icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n        <path d=\"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z\" />\n      </svg>\n    </BreadcrumbItem>\n    <li class=\"breadcrumb_item\">\n      <button type=\"button\" class=\"breadcrumb_ellipsis\" data-ripple aria-label=\"숨겨진 경로 보기\" aria-haspopup=\"menu\" aria-expanded=\"false\">…</button>\n    </li>\n    <BreadcrumbItem label=\"컴포넌트\" href=\"#\" />\n    <BreadcrumbItem label=\"Breadcrumb\" current />\n  </Breadcrumb>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `<Breadcrumb>
        <BreadcrumbItem href="#" icon aria-label="홈">
          <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
          </svg>
        </BreadcrumbItem>
        <li class="breadcrumb_item">
          <button type="button" class="breadcrumb_ellipsis" data-ripple aria-label="숨겨진 경로 보기" aria-haspopup="menu" aria-expanded="false">…</button>
        </li>
        <BreadcrumbItem label="컴포넌트" href="#" />
        <BreadcrumbItem label="Breadcrumb" current />
      </Breadcrumb>`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "비활성 링크는 disabled를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\n</script>\n\n<template>\n  <Breadcrumb aria-label=\"경로 — 비활성\">\n    <BreadcrumbItem label=\"홈\" href=\"#\" />\n    <BreadcrumbItem label=\"삭제된 페이지\" disabled />\n    <BreadcrumbItem label=\"현재 페이지\" current />\n  </Breadcrumb>\n  <Breadcrumb separator=\"slash\" aria-label=\"경로 — 긴 레이블\">\n    <BreadcrumbItem label=\"홈\" href=\"#\" />\n    <BreadcrumbItem label=\"프로젝트 관리 및 협업 도구 설정\" href=\"#\" />\n    <BreadcrumbItem label=\"사용자 권한 및 역할 기반 접근 제어\" current />\n  </Breadcrumb>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  items: [],
  ariaLabel: "경로",
  separator: "chevron",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `<Breadcrumb aria-label="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" aria-label="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>`,
  })),
};

