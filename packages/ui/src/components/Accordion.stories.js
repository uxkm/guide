import Accordion from './Accordion.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import AccordionItem from './AccordionItem.vue';
import {
  accordionClassColumns,
  accordionClasses,
  accordionItemPropColumns,
  accordionItemProps,
  accordionItemSlots,
  accordionPropColumns,
  accordionProps,
  accordionSlotColumns,
  accordionTokenColumns,
  accordionTokens,
} from '@doc-data/accordion-api';
const apiSections = [
  {
    title: "API · Accordion Props",
    tables: [
      { columns: accordionPropColumns, rows: accordionProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · AccordionItem Props",
    tables: [
      { columns: accordionItemPropColumns, rows: accordionItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · AccordionItem Slots",
    tables: [
      { columns: accordionSlotColumns, rows: accordionItemSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: accordionClassColumns, rows: accordionClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: accordionTokenColumns, rows: accordionTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기타/Accordion',
  id: 'components-accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ["bordered","flush","card"], type: { name: 'enum', summary: "'bordered' | 'flush' | 'card'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    multiple: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    narrow: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    variant: "card",
    size: "md",
    multiple: false,
    narrow: false,
  },
  render: (_args, context) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion variant=\"card\" narrow>\n    <AccordionItem\n    label=\"배송은 얼마나 걸리나요?\"\n    content=\"평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.\"\n    />\n    <AccordionItem\n    label=\"교환·반품은 어떻게 하나요?\"\n    open\n    content=\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\"\n    />\n    <AccordionItem\n    label=\"해외 배송이 가능한가요?\"\n    content=\"현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.\"\n    />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "card",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion variant="card" narrow>
        <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
        />
        <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
        />
        <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
        />
      </Accordion>`,
  })),
};


export const Multiple = {
  name: "다중 열기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion narrow multiple>\n    <AccordionItem label=\"알림\" open content=\"이메일·푸시 알림 수신 여부를 설정합니다.\" />\n    <AccordionItem label=\"개인정보\" open content=\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\" />\n    <AccordionItem label=\"보안\" content=\"비밀번호 변경과 2단계 인증을 설정합니다.\" />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion narrow multiple>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`,
  })),
};


export const Flush = {
  name: "플러시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion variant=\"flush\" narrow>\n    <AccordionItem label=\"일반\" open content=\"언어, 시간대, 테마 등 기본 환경 설정입니다.\" />\n    <AccordionItem label=\"접근성\" content=\"고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.\" />\n    <AccordionItem label=\"고급\" content=\"개발자 도구와 실험 기능을 켜거나 끕니다.\" />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion variant="flush" narrow>
        <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
        <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
        <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
      </Accordion>`,
  })),
};


export const Bordered = {
  name: "보더",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion variant=\"bordered\" narrow>\n    <AccordionItem label=\"알림\" open content=\"이메일·푸시 알림 수신 여부를 설정합니다.\" />\n    <AccordionItem label=\"개인정보\" content=\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\" />\n    <AccordionItem label=\"보안\" content=\"비밀번호 변경과 2단계 인증을 설정합니다.\" />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion variant="bordered" narrow>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`,
  })),
};


export const Extra = {
  name: "보조 정보",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion narrow>\n    <AccordionItem\n    label=\"미해결 문의\"\n    open\n    content=\"답변이 필요한 고객 문의 3건이 있습니다.\"\n    extra-code='<span class=\"badge badge_count color_danger badge_sm\">3</span>'\n    >\n    <template #extra>\n      <span class=\"badge badge_count color_danger badge_sm\">3</span>\n    </template>\n  </AccordionItem>\n  <AccordionItem\n  label=\"처리 완료\"\n  content=\"최근 일주일간 완료된 문의 12건입니다.\"\n  extra-code=\"지난 7일\"\n  >\n  <template #extra>지난 7일</template>\n  </AccordionItem>\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `        <Accordion narrow>
        <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extra-code='<span class="badge badge_count color_danger badge_sm">3</span>'
        >
        <template #extra>
        <span class="badge badge_count color_danger badge_sm">3</span>
        </template>
        </AccordionItem>
        <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extra-code="지난 7일"
        >
        <template #extra>지난 7일</template>
        </AccordionItem>
        </Accordion>`,
  })),
};


export const Disabled = {
  name: "비활성",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion narrow>\n    <AccordionItem label=\"공개 문서\" open content=\"누구나 열람할 수 있는 가이드 문서입니다.\" />\n    <AccordionItem\n    label=\"팀 전용 (권한 없음)\"\n    disabled\n    content=\"팀 멤버만 접근할 수 있는 내부 문서입니다.\"\n    />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion narrow>
        <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Accordion>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "size prop으로 트리거와 본문 패딩을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\n</script>\n\n<template>\n  <Accordion size=\"sm\" narrow>\n    <AccordionItem label=\"Small\" open content=\"작은 아코디언 — 좁은 패딩.\" />\n  </Accordion>\n  <Accordion size=\"lg\" narrow>\n    <AccordionItem label=\"Large\" open content=\"큰 아코디언 — 넓은 패딩과 큰 글자.\" />\n  </Accordion>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  multiple: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Accordion, AccordionItem },
    template: `<Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>`,
  })),
};

