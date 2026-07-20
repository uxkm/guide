import Button from './Button.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Icon from './Icon.vue';
import {
  buttonClassColumns,
  buttonClasses,
  buttonPropColumns,
  buttonProps,
  buttonSlotColumns,
  buttonSlots,
  buttonTokenColumns,
  buttonTokens,
} from '@doc-data/button-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: buttonPropColumns, rows: buttonProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: buttonSlotColumns, rows: buttonSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: buttonClassColumns, rows: buttonClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: buttonTokenColumns, rows: buttonTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기본 요소/Button',
  id: 'components-button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ["filled","outline","ghost","text","select"], type: { name: 'enum', summary: "'filled' | 'outline' | 'ghost' | 'text' | 'select'" }},
    color: { control: 'select', options: ["primary","default","success","warning","danger","muted"], type: { name: 'enum', summary: "'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    round: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    vertical: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    iconOnly: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    fit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ariaDisabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    loading: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    open: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    error: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    placeholder: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    selectText: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    label: { control: 'text', type: { name: 'string', summary: "string" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    type: { control: 'select', options: ["button","submit","reset"], type: { name: 'enum', summary: "'button' | 'submit' | 'reset'" } },
    haspopup: { control: 'text', type: { name: 'string', summary: "string" }},
    expanded: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    invalid: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    tag: { control: 'select', options: ["button","a","div"], type: { name: 'enum', summary: "'button' | 'a' | 'div'" }},
    href: { control: 'text', type: { name: 'string', summary: "string" }},
    role: { control: 'text', type: { name: 'string', summary: "string" }},
  },
  parameters: {
    layout: 'padded',
    apiSections,
    controls: { disable: false },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    variant: "filled",
    color: "primary",
    size: "md",
    round: false,
    vertical: false,
    iconOnly: false,
    block: false,
    grow: false,
    fit: false,
    disabled: false,
    ariaDisabled: false,
    loading: false,
    open: true,
    error: false,
    placeholder: false,
    selectText: false,
    label: "라벨",
    ariaLabel: "접근성 라벨",
    type: "button",
    haspopup: "값",
    expanded: false,
    invalid: false,
    tag: "button",
    href: "#",
    role: "button",
  },
  render: (_args, context) => ({
    components: { Button },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Button v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본 유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" label=\"Filled Primary\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Filled Default\" />\n    <Button variant=\"outline\" color=\"primary\" label=\"Outline\" />\n    <Button variant=\"ghost\" label=\"Ghost\" />\n    <Button variant=\"text\" color=\"primary\" label=\"Text\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"success\" label=\"Success\" />\n    <Button variant=\"filled\" color=\"warning\" label=\"Warning\" />\n    <Button variant=\"filled\" color=\"danger\" label=\"Danger\" />\n    <Button variant=\"outline\" color=\"danger\" label=\"Outline Danger\" />\n    <Button variant=\"text\" color=\"danger\" label=\"Text Danger\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" label="Filled Primary" />
        <Button variant="filled" color="default" label="Filled Default" />
        <Button variant="outline" color="primary" label="Outline" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="text" color="primary" label="Text" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="success" label="Success" />
        <Button variant="filled" color="warning" label="Warning" />
        <Button variant="filled" color="danger" label="Danger" />
        <Button variant="outline" color="danger" label="Outline Danger" />
        <Button variant="text" color="danger" label="Text Danger" />
        </div>`,
  })),
};


export const TypeSelect = {
  name: "셀렉트 박스형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"select\" label=\"서울특별시\" haspopup=\"listbox\" />\n    <Button variant=\"select\" placeholder label=\"옵션을 선택하세요\" haspopup=\"listbox\" />\n    <Button variant=\"select\" open label=\"카테고리\" haspopup=\"listbox\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"select\" size=\"sm\" label=\"Small\" haspopup=\"listbox\" />\n    <Button variant=\"select\" label=\"Medium\" haspopup=\"listbox\" />\n    <Button variant=\"select\" size=\"lg\" label=\"Large\" haspopup=\"listbox\" />\n    <Button variant=\"select\" disabled label=\"비활성\" haspopup=\"listbox\" />\n    <Button variant=\"select\" error invalid label=\"필수 선택\" haspopup=\"listbox\" />\n  </div>\n  <Button variant=\"select\" block label=\"전체 너비 셀렉트 트리거\" haspopup=\"listbox\" />\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"select\" select-text label=\"최신순\" haspopup=\"listbox\" />\n    <Button variant=\"select\" select-text placeholder label=\"정렬 기준\" haspopup=\"listbox\" />\n    <Button variant=\"select\" select-text open label=\"필터\" haspopup=\"listbox\" />\n    <Button variant=\"select\" select-text size=\"sm\" label=\"Small\" haspopup=\"listbox\" />\n    <Button variant=\"select\" select-text disabled label=\"비활성\" haspopup=\"listbox\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="select" label="서울특별시" haspopup="listbox" />
        <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
        <Button variant="select" open label="카테고리" haspopup="listbox" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="select" size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" label="Medium" haspopup="listbox" />
        <Button variant="select" size="lg" label="Large" haspopup="listbox" />
        <Button variant="select" disabled label="비활성" haspopup="listbox" />
        <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
        </div>
        <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
        <div class="btn_row btn_row-wrap">
        <Button variant="select" select-text label="최신순" haspopup="listbox" />
        <Button variant="select" select-text placeholder label="정렬 기준" haspopup="listbox" />
        <Button variant="select" select-text open label="필터" haspopup="listbox" />
        <Button variant="select" select-text size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" select-text disabled label="비활성" haspopup="listbox" />
        </div>`,
  })),
};


export const TypeText = {
  name: "텍스트 버튼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" label=\"Primary\" />\n    <Button variant=\"text\" color=\"muted\" label=\"Muted\" />\n    <Button variant=\"text\" color=\"danger\" label=\"Danger\" />\n    <Button variant=\"text\" color=\"success\" label=\"Success\" />\n    <Button variant=\"text\" color=\"warning\" label=\"Warning\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"danger\" label=\"삭제\">\n      <template #icon-before>\n        <Icon name=\"trash\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"success\" label=\"완료\">\n      <template #icon-before>\n        <Icon name=\"check-circle\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"warning\" label=\"주의\">\n      <template #icon-after>\n        <Icon name=\"alert-triangle\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"muted\" label=\"자세히\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" label=\"더 보기\" />\n    <Button variant=\"text\" color=\"primary\" label=\"링크 복사\" />\n    <Button variant=\"text\" color=\"primary\" label=\"취소\" />\n    <Button variant=\"text\" color=\"primary\" label=\"건너뛰기\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"다운로드\">\n      <template #icon-before>\n        <Icon name=\"download\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"링크 열기\">\n      <template #icon-before>\n        <Icon name=\"external-link\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"설정\">\n      <template #icon-before>\n        <Icon name=\"settings\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" label=\"다음\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"전체 보기\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"삭제\">\n      <template #icon-after>\n        <Icon name=\"trash\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" label=\"새로고침\">\n      <template #icon-after>\n        <Icon name=\"refresh\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" size=\"sm\" label=\"Small\" />\n    <Button variant=\"text\" color=\"primary\" label=\"Medium\" />\n    <Button variant=\"text\" color=\"primary\" size=\"lg\" label=\"Large\" />\n    <Button variant=\"text\" color=\"primary\" size=\"sm\" label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" size=\"lg\" label=\"다음\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"text\" color=\"primary\" icon-only aria-label=\"검색\">\n      <template #icon-before>\n        <Icon name=\"search\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" icon-only aria-label=\"편집\">\n      <template #icon-before>\n        <Icon name=\"edit\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" icon-only size=\"sm\" aria-label=\"닫기\">\n      <template #icon-before>\n        <Icon name=\"close\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" disabled label=\"비활성\" />\n    <Button variant=\"text\" color=\"primary\" disabled label=\"비활성\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" aria-disabled label=\"is-disabled\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n  </div>\n  <Button variant=\"text\" color=\"primary\" block label=\"전체 너비 텍스트 버튼\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="Primary" />
        <Button variant="text" color="muted" label="Muted" />
        <Button variant="text" color="danger" label="Danger" />
        <Button variant="text" color="success" label="Success" />
        <Button variant="text" color="warning" label="Warning" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="danger" label="삭제">
        <template #icon-before>
        <Icon name="trash" />
        </template>
        </Button>
        <Button variant="text" color="success" label="완료">
        <template #icon-before>
        <Icon name="check-circle" />
        </template>
        </Button>
        <Button variant="text" color="warning" label="주의">
        <template #icon-after>
        <Icon name="alert-triangle" />
        </template>
        </Button>
        <Button variant="text" color="muted" label="자세히">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="더 보기" />
        <Button variant="text" color="primary" label="링크 복사" />
        <Button variant="text" color="primary" label="취소" />
        <Button variant="text" color="primary" label="건너뛰기" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="다운로드">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="링크 열기">
        <template #icon-before>
        <Icon name="external-link" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="설정">
        <template #icon-before>
        <Icon name="settings" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="다음">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="전체 보기">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="삭제">
        <template #icon-after>
        <Icon name="trash" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="새로고침">
        <template #icon-after>
        <Icon name="refresh" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" size="sm" label="Small" />
        <Button variant="text" color="primary" label="Medium" />
        <Button variant="text" color="primary" size="lg" label="Large" />
        <Button variant="text" color="primary" size="sm" label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="text" color="primary" size="lg" label="다음">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="text" color="primary" icon-only aria-label="검색">
        <template #icon-before>
        <Icon name="search" />
        </template>
        </Button>
        <Button variant="text" color="primary" icon-only aria-label="편집">
        <template #icon-before>
        <Icon name="edit" />
        </template>
        </Button>
        <Button variant="text" color="primary" icon-only size="sm" aria-label="닫기">
        <template #icon-before>
        <Icon name="close" />
        </template>
        </Button>
        <Button variant="text" color="primary" disabled label="비활성" />
        <Button variant="text" color="primary" disabled label="비활성">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        <Button variant="text" color="primary" aria-disabled label="is-disabled">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        </div>
        <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />`,
  })),
};


export const TypeIconText = {
  name: "아이콘 + 텍스트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" label=\"추가\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" label=\"다운로드\">\n    <template #icon-before>\n      <Icon name=\"download\" />\n    </template>\n  </Button>\n  <Button variant=\"outline\" color=\"primary\" label=\"새 항목\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <Button variant="filled" color="primary" label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="default" label="다운로드">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        <Button variant="outline" color="primary" label="새 항목">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>`,
  })),
};


export const TypeIconTextVertical = {
  name: "아이콘 + 텍스트 (세로)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" vertical label=\"홈\">\n      <template #icon-before>\n        <Icon name=\"home\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"default\" vertical label=\"검색\">\n      <template #icon-before>\n        <Icon name=\"search\" />\n      </template>\n    </Button>\n    <Button variant=\"ghost\" vertical label=\"마이\">\n      <template #icon-before>\n        <Icon name=\"user\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" vertical label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"outline\" color=\"primary\" vertical label=\"다운로드\">\n      <template #icon-before>\n        <Icon name=\"download\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" vertical size=\"sm\" label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"primary\" vertical label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"primary\" vertical size=\"lg\" label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"default\" vertical round label=\"가이드\">\n      <template #icon-before>\n        <Icon name=\"book\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"primary\" vertical round label=\"즐겨찾기\">\n      <template #icon-before>\n        <Icon name=\"star\" />\n      </template>\n    </Button>\n    <Button variant=\"ghost\" vertical disabled label=\"삭제\">\n      <template #icon-before>\n        <Icon name=\"trash\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"primary\" vertical loading label=\"저장 중\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical label="홈">
        <template #icon-before>
        <Icon name="home" />
        </template>
        </Button>
        <Button variant="filled" color="default" vertical label="검색">
        <template #icon-before>
        <Icon name="search" />
        </template>
        </Button>
        <Button variant="ghost" vertical label="마이">
        <template #icon-before>
        <Icon name="user" />
        </template>
        </Button>
        <Button variant="text" color="primary" vertical label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="outline" color="primary" vertical label="다운로드">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical size="sm" label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="primary" vertical label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="primary" vertical size="lg" label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="default" vertical round label="가이드">
        <template #icon-before>
        <Icon name="book" />
        </template>
        </Button>
        <Button variant="filled" color="primary" vertical round label="즐겨찾기">
        <template #icon-before>
        <Icon name="star" />
        </template>
        </Button>
        <Button variant="ghost" vertical disabled label="삭제">
        <template #icon-before>
        <Icon name="trash" />
        </template>
        </Button>
        <Button variant="filled" color="primary" vertical loading label="저장 중" />
        </div>`,
  })),
};


export const TypeIconTextVerticalEqual = {
  name: "아이콘 + 텍스트 (세로) · 균등 배분",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <div class=\"btn_row-equal\" role=\"toolbar\" aria-label=\"하단 탭 바\">\n    <Button variant=\"text\" color=\"primary\" vertical label=\"홈\">\n      <template #icon-before>\n        <Icon name=\"home\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" vertical label=\"카테고리\">\n      <template #icon-before>\n        <Icon name=\"grid\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"primary\" vertical label=\"장바구니\">\n      <template #icon-before>\n        <Icon name=\"cart\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" vertical label=\"마이\">\n      <template #icon-before>\n        <Icon name=\"user\" />\n      </template>\n    </Button>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
        <Button variant="text" color="primary" vertical label="홈">
        <template #icon-before>
        <Icon name="home" />
        </template>
        </Button>
        <Button variant="text" color="primary" vertical label="카테고리">
        <template #icon-before>
        <Icon name="grid" />
        </template>
        </Button>
        <Button variant="filled" color="primary" vertical label="장바구니">
        <template #icon-before>
        <Icon name="cart" />
        </template>
        </Button>
        <Button variant="text" color="primary" vertical label="마이">
        <template #icon-before>
        <Icon name="user" />
        </template>
        </Button>
        </div>`,
  })),
};


export const TypeTextIcon = {
  name: "텍스트 + 아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" label=\"다음\">\n    <template #icon-after>\n      <Icon name=\"chevron-right\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" label=\"자세히 보기\">\n    <template #icon-after>\n      <Icon name=\"external-link\" />\n    </template>\n  </Button>\n  <Button variant=\"text\" color=\"primary\" label=\"링크 이동\">\n    <template #icon-after>\n      <Icon name=\"chevron-right\" />\n    </template>\n  </Button>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <Button variant="filled" color="primary" label="다음">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        <Button variant="filled" color="default" label="자세히 보기">
        <template #icon-after>
        <Icon name="external-link" />
        </template>
        </Button>
        <Button variant="text" color="primary" label="링크 이동">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>`,
  })),
};


export const TypeIconOnly = {
  name: "아이콘 버튼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" icon-only aria-label=\"추가\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" icon-only aria-label=\"설정\">\n    <template #icon-before>\n      <Icon name=\"settings\" />\n    </template>\n  </Button>\n  <Button variant=\"ghost\" icon-only aria-label=\"검색\">\n    <template #icon-before>\n      <Icon name=\"search\" />\n    </template>\n  </Button>\n  <Button variant=\"outline\" color=\"primary\" icon-only aria-label=\"편집\">\n    <template #icon-before>\n      <Icon name=\"edit\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"danger\" icon-only aria-label=\"삭제\">\n    <template #icon-before>\n      <Icon name=\"trash\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"primary\" icon-only disabled aria-label=\"추가\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <Button variant="filled" color="primary" icon-only aria-label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="default" icon-only aria-label="설정">
        <template #icon-before>
        <Icon name="settings" />
        </template>
        </Button>
        <Button variant="ghost" icon-only aria-label="검색">
        <template #icon-before>
        <Icon name="search" />
        </template>
        </Button>
        <Button variant="outline" color="primary" icon-only aria-label="편집">
        <template #icon-before>
        <Icon name="edit" />
        </template>
        </Button>
        <Button variant="filled" color="danger" icon-only aria-label="삭제">
        <template #icon-before>
        <Icon name="trash" />
        </template>
        </Button>
        <Button variant="filled" color="primary" icon-only disabled aria-label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>`,
  })),
};


export const TypeIconOnlySize = {
  name: "아이콘 버튼 크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "btn_sm, medium, btn_lg 세 가지 크기를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" icon-only size=\"sm\" aria-label=\"추가 (small)\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"primary\" icon-only aria-label=\"추가 (medium)\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"primary\" icon-only size=\"lg\" aria-label=\"추가 (large)\">\n    <template #icon-before>\n      <Icon name=\"plus\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" icon-only size=\"sm\" aria-label=\"다운로드 (small)\">\n    <template #icon-before>\n      <Icon name=\"download\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" icon-only aria-label=\"다운로드 (medium)\">\n    <template #icon-before>\n      <Icon name=\"download\" />\n    </template>\n  </Button>\n  <Button variant=\"filled\" color=\"default\" icon-only size=\"lg\" aria-label=\"다운로드 (large)\">\n    <template #icon-before>\n      <Icon name=\"download\" />\n    </template>\n  </Button>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>`,
  })),
};


export const Variant = {
  name: "색상 변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "상황에 맞는 색상 변형을 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"success\" label=\"Success\" />\n  <Button variant=\"filled\" color=\"danger\" label=\"Danger\" />\n  <Button variant=\"filled\" color=\"warning\" label=\"Warning\" />\n  <Button variant=\"outline\" color=\"primary\" label=\"Outline\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <Button variant="filled" color="success" label="Success" />
        <Button variant="filled" color="danger" label="Danger" />
        <Button variant="filled" color="warning" label="Warning" />
        <Button variant="outline" color="primary" label="Outline" />`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "small, medium, large 세 가지 크기를 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"Small\" />\n  <Button variant=\"filled\" color=\"primary\" label=\"Medium\" />\n  <Button variant=\"filled\" color=\"primary\" size=\"lg\" label=\"Large\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <Button variant="filled" color="primary" size="sm" label="Small" />
        <Button variant="filled" color="primary" label="Medium" />
        <Button variant="filled" color="primary" size="lg" label="Large" />`,
  })),
};


export const ShapeRound = {
  name: "라운드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" round label=\"Primary\" />\n    <Button variant=\"filled\" color=\"default\" round label=\"Default\" />\n    <Button variant=\"ghost\" round label=\"Ghost\" />\n    <Button variant=\"outline\" color=\"primary\" round label=\"Outline\" />\n    <Button variant=\"filled\" color=\"success\" round label=\"Success\" />\n    <Button variant=\"filled\" color=\"danger\" round label=\"Danger\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" round size=\"sm\" label=\"Small\" />\n    <Button variant=\"filled\" color=\"primary\" round label=\"Medium\" />\n    <Button variant=\"filled\" color=\"primary\" round size=\"lg\" label=\"Large\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" round label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"default\" round label=\"다음\">\n      <template #icon-after>\n        <Icon name=\"chevron-right\" />\n      </template>\n    </Button>\n    <Button variant=\"text\" color=\"primary\" round label=\"더 보기\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" round icon-only aria-label=\"추가\">\n      <template #icon-before>\n        <Icon name=\"plus\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"default\" round icon-only aria-label=\"설정\">\n      <template #icon-before>\n        <Icon name=\"settings\" />\n      </template>\n    </Button>\n    <Button variant=\"outline\" color=\"primary\" round icon-only size=\"sm\" aria-label=\"검색\">\n      <template #icon-before>\n        <Icon name=\"search\" />\n      </template>\n    </Button>\n    <Button variant=\"filled\" color=\"danger\" round icon-only size=\"lg\" aria-label=\"삭제\">\n      <template #icon-before>\n        <Icon name=\"trash\" />\n      </template>\n    </Button>\n  </div>\n  <div class=\"btn_group btn_group-round btn_group-fit\" role=\"group\" aria-label=\"라운드 버튼 그룹\">\n    <Button variant=\"filled\" color=\"default\" label=\"일\" />\n    <Button variant=\"filled\" color=\"default\" label=\"주\" />\n    <Button variant=\"filled\" color=\"primary\" label=\"월\" />\n    <Button variant=\"filled\" color=\"default\" label=\"년\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="Primary" />
        <Button variant="filled" color="default" round label="Default" />
        <Button variant="ghost" round label="Ghost" />
        <Button variant="outline" color="primary" round label="Outline" />
        <Button variant="filled" color="success" round label="Success" />
        <Button variant="filled" color="danger" round label="Danger" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round size="sm" label="Small" />
        <Button variant="filled" color="primary" round label="Medium" />
        <Button variant="filled" color="primary" round size="lg" label="Large" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="default" round label="다음">
        <template #icon-after>
        <Icon name="chevron-right" />
        </template>
        </Button>
        <Button variant="text" color="primary" round label="더 보기" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round icon-only aria-label="추가">
        <template #icon-before>
        <Icon name="plus" />
        </template>
        </Button>
        <Button variant="filled" color="default" round icon-only aria-label="설정">
        <template #icon-before>
        <Icon name="settings" />
        </template>
        </Button>
        <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색">
        <template #icon-before>
        <Icon name="search" />
        </template>
        </Button>
        <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제">
        <template #icon-before>
        <Icon name="trash" />
        </template>
        </Button>
        </div>
        <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
        <Button variant="filled" color="default" label="일" />
        <Button variant="filled" color="default" label="주" />
        <Button variant="filled" color="primary" label="월" />
        <Button variant="filled" color="default" label="년" />
        </div>`,
  })),
};


export const Width = {
  name: "너비",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <Button variant=\"filled\" color=\"primary\" block label=\"전체 너비 버튼\" />\n  <div class=\"btn_row-equal\">\n    <Button variant=\"filled\" color=\"default\" label=\"취소\" />\n    <Button variant=\"filled\" color=\"primary\" label=\"확인\" />\n  </div>\n  <div class=\"btn_row\">\n    <Button variant=\"filled\" color=\"default\" grow label=\"취소\" />\n    <Button variant=\"filled\" color=\"primary\" grow label=\"확인\" />\n  </div>\n  <div class=\"btn_row\">\n    <Button variant=\"filled\" color=\"default\" grow label=\"옵션 A\" />\n    <Button variant=\"filled\" color=\"default\" grow label=\"옵션 B\" />\n    <Button variant=\"filled\" color=\"primary\" grow label=\"옵션 C\" />\n  </div>\n  <div class=\"btn_row btn_row-start\">\n    <Button variant=\"ghost\" fit label=\"뒤로\" />\n    <Button variant=\"filled\" color=\"default\" fit label=\"취소\" />\n    <Button variant=\"filled\" color=\"primary\" fit label=\"저장\" />\n  </div>\n  <div class=\"btn_row btn_row-end\">\n    <Button variant=\"ghost\" fit label=\"뒤로\" />\n    <Button variant=\"filled\" color=\"default\" fit label=\"취소\" />\n    <Button variant=\"filled\" color=\"primary\" fit label=\"저장\" />\n  </div>\n  <div class=\"btn_row\">\n    <Button variant=\"ghost\" fit label=\"뒤로\" />\n    <Button variant=\"filled\" color=\"default\" grow label=\"임시 저장\" />\n    <Button variant=\"filled\" color=\"primary\" grow label=\"제출\" />\n  </div>\n  <div class=\"btn_row\">\n    <Button variant=\"filled\" color=\"default\" grow label=\"본문 영역\" />\n    <Button variant=\"filled\" color=\"primary\" fit label=\"확인\" />\n  </div>\n  <div class=\"btn_row\">\n    <Button variant=\"filled\" color=\"default\" grow=\"2\" label=\"2배 너비\" />\n    <Button variant=\"filled\" color=\"primary\" grow label=\"1배 너비\" />\n  </div>\n  <Button variant=\"filled\" color=\"primary\" block label=\"전체 너비 다운로드\">\n    <template #icon-before>\n      <Icon name=\"download\" />\n    </template>\n  </Button>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <Button variant="filled" color="primary" block label="전체 너비 버튼" />
        <div class="btn_row-equal">
        <Button variant="filled" color="default" label="취소" />
        <Button variant="filled" color="primary" label="확인" />
        </div>
        <div class="btn_row">
        <Button variant="filled" color="default" grow label="취소" />
        <Button variant="filled" color="primary" grow label="확인" />
        </div>
        <div class="btn_row">
        <Button variant="filled" color="default" grow label="옵션 A" />
        <Button variant="filled" color="default" grow label="옵션 B" />
        <Button variant="filled" color="primary" grow label="옵션 C" />
        </div>
        <div class="btn_row btn_row-start">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
        </div>
        <div class="btn_row btn_row-end">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
        </div>
        <div class="btn_row">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" grow label="임시 저장" />
        <Button variant="filled" color="primary" grow label="제출" />
        </div>
        <div class="btn_row">
        <Button variant="filled" color="default" grow label="본문 영역" />
        <Button variant="filled" color="primary" fit label="확인" />
        </div>
        <div class="btn_row">
        <Button variant="filled" color="default" grow="2" label="2배 너비" />
        <Button variant="filled" color="primary" grow label="1배 너비" />
        </div>
        <Button variant="filled" color="primary" block label="전체 너비 다운로드">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" disabled label=\"Primary\" />\n    <Button variant=\"filled\" color=\"default\" disabled label=\"Default\" />\n    <Button variant=\"outline\" color=\"primary\" disabled label=\"Outline\" />\n    <Button variant=\"ghost\" disabled label=\"Ghost\" />\n    <Button variant=\"text\" color=\"primary\" disabled label=\"Text\" />\n    <Button variant=\"filled\" color=\"danger\" disabled label=\"Danger\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" aria-disabled label=\"is-disabled\" />\n    <Button variant=\"filled\" color=\"default\" aria-disabled label=\"is-disabled\" />\n    <Button variant=\"outline\" color=\"primary\" aria-disabled label=\"is-disabled\" />\n  </div>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" loading label=\"저장 중\" />\n    <Button variant=\"filled\" color=\"default\" loading label=\"처리 중\" />\n    <Button variant=\"outline\" color=\"primary\" loading label=\"업로드 중\" />\n    <Button variant=\"filled\" color=\"primary\" icon-only loading aria-label=\"저장 중\" />\n  </div>\n  <Button variant=\"filled\" color=\"primary\" block loading label=\"전체 너비 로딩\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" disabled label="Primary" />
        <Button variant="filled" color="default" disabled label="Default" />
        <Button variant="outline" color="primary" disabled label="Outline" />
        <Button variant="ghost" disabled label="Ghost" />
        <Button variant="text" color="primary" disabled label="Text" />
        <Button variant="filled" color="danger" disabled label="Danger" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
        <Button variant="filled" color="default" aria-disabled label="is-disabled" />
        <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
        </div>
        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" loading label="저장 중" />
        <Button variant="filled" color="default" loading label="처리 중" />
        <Button variant="outline" color="primary" loading label="업로드 중" />
        <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
        </div>
        <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />`,
  })),
};


export const Group = {
  name: "버튼 그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\n</script>\n\n<template>\n  <div class=\"btn_group btn_group-fit btn_group-align-start\" role=\"group\" aria-label=\"가로 버튼 그룹 small 좌측\">\n    <Button variant=\"filled\" color=\"default\" size=\"sm\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" size=\"sm\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" size=\"sm\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-fit btn_group-align-start\" role=\"group\" aria-label=\"가로 버튼 그룹 medium 좌측\">\n    <Button variant=\"filled\" color=\"default\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-fit btn_group-align-start\" role=\"group\" aria-label=\"가로 버튼 그룹 large 좌측\">\n    <Button variant=\"filled\" color=\"default\" size=\"lg\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" size=\"lg\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" size=\"lg\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-fit btn_group-align-center\" role=\"group\" aria-label=\"가로 버튼 그룹 medium 가운데\">\n    <Button variant=\"filled\" color=\"default\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-fit btn_group-align-end\" role=\"group\" aria-label=\"가로 버튼 그룹 medium 우측\">\n    <Button variant=\"filled\" color=\"default\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-block\" role=\"group\" aria-label=\"가로 버튼 그룹 전체 너비\">\n    <Button variant=\"filled\" color=\"default\" label=\"Left\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Middle\" />\n    <Button variant=\"filled\" color=\"default\" label=\"Right\" />\n  </div>\n  <div class=\"btn_group btn_group-vertical btn_group-fit btn_group-align-start\" role=\"group\" aria-label=\"세로 버튼 그룹 고정 너비 좌측\">\n    <Button variant=\"filled\" color=\"default\" label=\"상단\" />\n    <Button variant=\"filled\" color=\"default\" label=\"중간\" />\n    <Button variant=\"filled\" color=\"default\" label=\"하단\" />\n  </div>\n  <div class=\"btn_group btn_group-vertical btn_group-fit btn_group-align-center\" role=\"group\" aria-label=\"세로 버튼 그룹 고정 너비 가운데\">\n    <Button variant=\"filled\" color=\"default\" label=\"상단\" />\n    <Button variant=\"filled\" color=\"default\" label=\"중간\" />\n    <Button variant=\"filled\" color=\"default\" label=\"하단\" />\n  </div>\n  <div class=\"btn_group btn_group-vertical btn_group-fit btn_group-align-end\" role=\"group\" aria-label=\"세로 버튼 그룹 고정 너비 우측\">\n    <Button variant=\"filled\" color=\"default\" label=\"상단\" />\n    <Button variant=\"filled\" color=\"default\" label=\"중간\" />\n    <Button variant=\"filled\" color=\"default\" label=\"하단\" />\n  </div>\n  <div class=\"btn_group btn_group-vertical btn_group-block\" role=\"group\" aria-label=\"세로 버튼 그룹 전체 너비\">\n    <Button variant=\"filled\" color=\"default\" label=\"상단\" />\n    <Button variant=\"filled\" color=\"default\" label=\"중간\" />\n    <Button variant=\"filled\" color=\"default\" label=\"하단\" />\n  </div>\n  <div class=\"btn_stack\">\n    <Button variant=\"filled\" color=\"primary\" block label=\"로그인\" />\n    <Button variant=\"filled\" color=\"default\" block label=\"회원가입\" />\n  </div>\n  <div class=\"btn_stack\">\n    <Button variant=\"filled\" color=\"primary\" block label=\"결제하기\" />\n    <Button variant=\"text\" color=\"primary\" label=\"쿠폰 적용\" />\n  </div>\n  <div class=\"btn_stack\">\n    <Button variant=\"filled\" color=\"primary\" block label=\"다운로드\">\n      <template #icon-before>\n        <Icon name=\"download\" />\n      </template>\n    </Button>\n    <p class=\"btn_stack-text\">최신 버전 v2.0 · <a href=\"#\">릴리스 노트</a>\n    </p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon },
    template: `        <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
        <Button variant="filled" color="default" size="sm" label="Left" />
        <Button variant="filled" color="default" size="sm" label="Middle" />
        <Button variant="filled" color="default" size="sm" label="Right" />
        </div>
        <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
        </div>
        <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
        <Button variant="filled" color="default" size="lg" label="Left" />
        <Button variant="filled" color="default" size="lg" label="Middle" />
        <Button variant="filled" color="default" size="lg" label="Right" />
        </div>
        <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
        </div>
        <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
        </div>
        <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
        </div>
        <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
        </div>
        <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
        </div>
        <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
        </div>
        <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
        </div>
        <div class="btn_stack">
        <Button variant="filled" color="primary" block label="로그인" />
        <Button variant="filled" color="default" block label="회원가입" />
        </div>
        <div class="btn_stack">
        <Button variant="filled" color="primary" block label="결제하기" />
        <Button variant="text" color="primary" label="쿠폰 적용" />
        </div>
        <div class="btn_stack">
        <Button variant="filled" color="primary" block label="다운로드">
        <template #icon-before>
        <Icon name="download" />
        </template>
        </Button>
        <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a>
        </p>
        </div>`,
  })),
};


export const Tag = {
  name: "루트 태그",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\n</script>\n\n<template>\n  <div class=\"btn_row btn_row-wrap\">\n    <Button variant=\"filled\" color=\"primary\" label=\"button\" />\n    <Button tag=\"a\" href=\"/getting-started\" variant=\"outline\" color=\"primary\" label=\"a + href\" />\n    <Button tag=\"div\" variant=\"ghost\" label=\"div → role=button\" />\n    <Button tag=\"a\" role=\"link\" variant=\"text\" color=\"primary\" label=\"a, role=link\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "filled",
  color: "primary",
  size: "md",
  round: false,
  vertical: false,
  iconOnly: false,
  block: false,
  grow: false,
  fit: false,
  disabled: false,
  ariaDisabled: false,
  loading: false,
  open: true,
  error: false,
  placeholder: false,
  selectText: false,
  label: "라벨",
  ariaLabel: "접근성 라벨",
  type: "button",
  haspopup: "값",
  expanded: false,
  invalid: false,
  tag: "button",
  href: "#",
  role: "button"
},
  render: withDocsCanvasRender(() => ({
    components: { Button },
    template: `        <div class="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" label="button" />
        <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
        <Button tag="div" variant="ghost" label="div → role=button" />
        <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
        </div>`,
  })),
};

