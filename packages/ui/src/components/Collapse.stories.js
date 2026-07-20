import Collapse from './Collapse.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import CollapseExternal from './CollapseExternal.vue';
import CollapsePanel from './CollapsePanel.vue';
import List from './List.vue';
import ListItem from './ListItem.vue';
import {
  collapseClassColumns,
  collapseClasses,
  collapseExternalPropColumns,
  collapseExternalProps,
  collapseExternalSlots,
  collapsePropColumns,
  collapseProps,
  collapsePanelPropColumns,
  collapsePanelProps,
  collapsePanelSlots,
  collapseSlotColumns,
} from '@doc-data/collapse-api';
const apiSections = [
  {
    title: "API · CollapseExternal Props",
    tables: [
      { columns: collapseExternalPropColumns, rows: collapseExternalProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CollapseExternal Slots",
    tables: [
      { columns: collapseSlotColumns, rows: collapseExternalSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · Collapse Props",
    tables: [
      { columns: collapsePropColumns, rows: collapseProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CollapsePanel Props",
    tables: [
      { columns: collapsePanelPropColumns, rows: collapsePanelProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CollapsePanel Slots",
    tables: [
      { columns: collapseSlotColumns, rows: collapsePanelSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: collapseClassColumns, rows: collapseClasses, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기타/Collapse',
  id: 'components-collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ["bordered","ghost","card"], type: { name: 'enum', summary: "'bordered' | 'ghost' | 'card'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    accordion: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false,
  },
  render: (_args, context) => ({
    components: { Collapse, CollapsePanel },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Collapse v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>`,
  }),
};


export const Standalone = {
  name: "외부 트리거",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <CollapseExternal trigger-label=\"주문 상세 보기\" narrow>\n    <template #lead>\n      <p style=\"margin: 0 0 var(--space-md)\">\n        주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.\n      </p>\n    </template>\n    <List\n    variant=\"definition\"\n    layout=\"inline\"\n    block\n    size=\"compact\"\n    inline-label-width=\"auto\"\n    inline-gap=\"1rem\"\n    >\n    <ListItem title=\"주문번호\" description=\"ORD-2024-0815\" />\n    <ListItem title=\"결제금액\" description=\"₩42,000\" />\n    <ListItem title=\"배송지\" description=\"서울특별시 강남구 테헤란로 123\" />\n  </List>\n  </CollapseExternal>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { CollapseExternal, List, ListItem },
    template: `        <CollapseExternal trigger-label="주문 상세 보기" narrow>
        <template #lead>
        <p style="margin: 0 0 var(--space-md)">
        주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
        </template>
        <List
        variant="definition"
        layout="inline"
        block
        size="compact"
        inline-label-width="auto"
        inline-gap="1rem"
        >
        <ListItem title="주문번호" description="ORD-2024-0815" />
        <ListItem title="결제금액" description="₩42,000" />
        <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
        </List>
        </CollapseExternal>`,
  })),
};


export const Basic = {
  name: "패널 그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse narrow>\n    <CollapsePanel\n    label=\"배송 정보\"\n    open\n    content=\"평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.\"\n    />\n    <CollapsePanel\n    label=\"결제 수단\"\n    content=\"신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다.\"\n    />\n    <CollapsePanel\n    label=\"교환·반품 안내\"\n    content=\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\"\n    />\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `<Collapse narrow>
        <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
        />
        <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
        />
        <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
        />
      </Collapse>`,
  })),
};


export const Accordion = {
  name: "아코디언 모드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "accordion prop을 지정하면 한 번에 하나의 패널만 열립니다.",
      },
      source: {
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse narrow accordion>\n    <CollapsePanel label=\"알림 설정\" open content=\"이메일·푸시·SMS 알림 수신 여부를 설정합니다.\" />\n    <CollapsePanel label=\"개인정보\" content=\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\" />\n    <CollapsePanel label=\"보안\" content=\"비밀번호 변경과 2단계 인증을 설정합니다.\" />\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `<Collapse narrow accordion>
        <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
        <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Collapse>`,
  })),
};


export const Skin = {
  name: "스킨",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "collapse_ghost · collapse_card로 외형을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse variant=\"ghost\" narrow>\n    <CollapsePanel\n    label=\"Ghost\"\n    open\n    content=\"배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다.\"\n    />\n  </Collapse>\n  <Collapse variant=\"card\" narrow>\n    <CollapsePanel label=\"Card\" open content=\"패널마다 카드 형태로 분리됩니다.\" />\n    <CollapsePanel label=\"두 번째 패널\" content=\"카드 스킨의 두 번째 패널입니다.\" />\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `<Collapse variant="ghost" narrow>
        <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>`,
  })),
};


export const Extra = {
  name: "보조 텍스트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse narrow>\n    <CollapsePanel label=\"진행 중\" open content=\"현재 처리 중인 요청 3건입니다.\" extra-code=\"3건\">\n      <template #extra>3건</template>\n    </CollapsePanel>\n    <CollapsePanel\n    label=\"처리 완료\"\n    content=\"최근 일주일간 완료된 요청 12건입니다.\"\n    extra-code=\"지난 7일\"\n    >\n    <template #extra>지난 7일</template>\n  </CollapsePanel>\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `        <Collapse narrow>
        <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
        <template #extra>3건</template>
        </CollapsePanel>
        <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extra-code="지난 7일"
        >
        <template #extra>지난 7일</template>
        </CollapsePanel>
        </Collapse>`,
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
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse narrow>\n    <CollapsePanel label=\"공개 문서\" open content=\"누구나 열람할 수 있는 가이드 문서입니다.\" />\n    <CollapsePanel\n    label=\"팀 전용 (권한 없음)\"\n    disabled\n    content=\"팀 멤버만 접근할 수 있는 내부 문서입니다.\"\n    />\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `<Collapse narrow>
        <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Collapse>`,
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
        code: "<script setup>\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\n</script>\n\n<template>\n  <Collapse size=\"sm\" narrow>\n    <CollapsePanel label=\"Small\" open content=\"작은 콜랩스 — 좁은 패딩.\" />\n  </Collapse>\n  <Collapse size=\"lg\" narrow>\n    <CollapsePanel label=\"Large\" open content=\"큰 콜랩스 — 넓은 패딩과 큰 글자.\" />\n  </Collapse>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "bordered",
  size: "md",
  accordion: false,
  narrow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Collapse, CollapsePanel },
    template: `<Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>`,
  })),
};

