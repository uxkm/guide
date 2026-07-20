import Steps from './Steps.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import StepsItem from './StepsItem.vue';
import {
  stepsClassColumns,
  stepsClasses,
  stepsItemPropColumns,
  stepsItemProps,
  stepsPropColumns,
  stepsProps,
  stepsSlotColumns,
  stepsSlots,
  stepsTokenColumns,
  stepsTokens,
} from '@doc-data/steps-api';
const apiSections = [
  {
    title: "API · Steps Props",
    tables: [
      { columns: stepsPropColumns, rows: stepsProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · StepsItem Props",
    tables: [
      { columns: stepsItemPropColumns, rows: stepsItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: stepsSlotColumns, rows: stepsSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: stepsClassColumns, rows: stepsClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: stepsTokenColumns, rows: stepsTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Steps',
  id: 'components-steps',
  component: Steps,
  subcomponents: { StepsItem },
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', type: { name: 'number', summary: "number" }},
    direction: { control: 'select', options: ["horizontal","vertical"], type: { name: 'enum', summary: "'horizontal' | 'vertical'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    dot: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    iconStyle: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    navigable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    align: { control: 'select', options: ["center"], type: { name: 'enum', summary: "'center'" }},
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
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { Steps, StepsItem },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps aria-label=\"주문 진행 단계\">\n    <StepsItem title=\"장바구니\" description=\"상품 확인\" status=\"finished\" />\n    <StepsItem title=\"배송 정보\" description=\"주소 입력\" status=\"finished\" />\n    <StepsItem title=\"결제\" description=\"결제 수단 선택\" status=\"active\" />\n    <StepsItem title=\"완료\" description=\"주문 확인\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps aria-label="주문 진행 단계">
        <StepsItem title="장바구니" description="상품 확인" status="finished" />
        <StepsItem title="배송 정보" description="주소 입력" status="finished" />
        <StepsItem title="결제" description="결제 수단 선택" status="active" />
        <StepsItem title="완료" description="주문 확인" status="wait" />
      </Steps>`,
  })),
};


export const Simple = {
  name: "간단",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps aria-label=\"회원가입 단계\">\n    <StepsItem title=\"이메일 인증\" status=\"finished\" />\n    <StepsItem title=\"프로필 설정\" status=\"active\" />\n    <StepsItem title=\"완료\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps aria-label="회원가입 단계">
        <StepsItem title="이메일 인증" status="finished" />
        <StepsItem title="프로필 설정" status="active" />
        <StepsItem title="완료" status="wait" />
      </Steps>`,
  })),
};


export const Vertical = {
  name: "세로형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps direction=\"vertical\" class=\"steps_demo-narrow\" aria-label=\"프로젝트 생성 단계\">\n    <StepsItem title=\"기본 정보\" description=\"프로젝트 이름과 설명을 입력합니다.\" status=\"finished\" />\n    <StepsItem title=\"팀 구성\" description=\"멤버를 초대하고 역할을 지정합니다.\" status=\"active\" />\n    <StepsItem title=\"저장소 연결\" description=\"Git 저장소를 연동합니다.\" status=\"wait\" />\n    <StepsItem title=\"검토 및 생성\" description=\"설정을 확인하고 프로젝트를 만듭니다.\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
        <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
        <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
        <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
        <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
      </Steps>`,
  })),
};


export const Dot = {
  name: "도트",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps dot aria-label=\"배송 추적 단계\">\n    <StepsItem title=\"주문 접수\" description=\"6월 20일 09:12\" status=\"finished\" />\n    <StepsItem title=\"배송 준비\" description=\"6월 20일 14:30\" status=\"finished\" />\n    <StepsItem title=\"배송 중\" description=\"예상 도착 6월 21일\" status=\"active\" />\n    <StepsItem title=\"배송 완료\" description=\"대기 중\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps dot aria-label="배송 추적 단계">
        <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
        <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
        <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
        <StepsItem title="배송 완료" description="대기 중" status="wait" />
      </Steps>`,
  })),
};


export const Icon = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps icon-style aria-label=\"온보딩 단계\">\n    <StepsItem title=\"계정 생성\" description=\"이메일 인증 완료\" status=\"finished\" />\n    <StepsItem title=\"팀 초대\" description=\"동료를 초대하세요\" status=\"active\" />\n    <StepsItem title=\"첫 프로젝트\" description=\"프로젝트를 만드세요\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps icon-style aria-label="온보딩 단계">
        <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
        <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
        <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
      </Steps>`,
  })),
};


export const Navigable = {
  name: "탐색 가능",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps navigable aria-label=\"설정 마법사 — 탐색 가능\">\n    <StepsItem title=\"환경\" description=\"개발 · 스테이징\" status=\"finished\" />\n    <StepsItem title=\"알림\" description=\"수신 채널 설정\" status=\"active\" />\n    <StepsItem title=\"확인\" description=\"설정 검토\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps navigable aria-label="설정 마법사 — 탐색 가능">
        <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
        <StepsItem title="알림" description="수신 채널 설정" status="active" />
        <StepsItem title="확인" description="설정 검토" status="wait" />
      </Steps>`,
  })),
};


export const Error = {
  name: "오류",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps aria-label=\"결제 단계 — 오류\">\n    <StepsItem title=\"주문 확인\" description=\"상품 및 수량 확인\" status=\"finished\" />\n    <StepsItem title=\"결제 실패\" description=\"카드 승인이 거절되었습니다\" status=\"error\" />\n    <StepsItem title=\"완료\" description=\"주문 접수\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps aria-label="결제 단계 — 오류">
        <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
        <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
        <StepsItem title="완료" description="주문 접수" status="wait" />
      </Steps>`,
  })),
};


export const Align = {
  name: "가운데 정렬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps align=\"center\" aria-label=\"출시 단계\">\n    <StepsItem title=\"기획\" description=\"요구사항 정의\" status=\"finished\" />\n    <StepsItem title=\"개발\" description=\"기능 구현\" status=\"finished\" />\n    <StepsItem title=\"QA\" description=\"품질 검증\" status=\"active\" />\n    <StepsItem title=\"출시\" description=\"프로덕션 배포\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps align="center" aria-label="출시 단계">
        <StepsItem title="기획" description="요구사항 정의" status="finished" />
        <StepsItem title="개발" description="기능 구현" status="finished" />
        <StepsItem title="QA" description="품질 검증" status="active" />
        <StepsItem title="출시" description="프로덕션 배포" status="wait" />
      </Steps>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps size=\"sm\" aria-label=\"Small 단계\">\n    <StepsItem title=\"1단계\" status=\"finished\" />\n    <StepsItem title=\"2단계\" status=\"active\" />\n    <StepsItem title=\"3단계\" status=\"wait\" />\n  </Steps>\n  <Steps size=\"lg\" aria-label=\"Large 단계\">\n    <StepsItem title=\"요구사항\" description=\"범위 및 일정 확정\" status=\"finished\" />\n    <StepsItem title=\"디자인\" description=\"UI 키트 제작\" status=\"active\" />\n    <StepsItem title=\"개발\" description=\"구현 및 테스트\" status=\"wait\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps size="sm" aria-label="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" aria-label="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>`,
  })),
};


export const State = {
  name: "상태 요약",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "각 상태 클래스의 시각적 의미입니다. 현재 단계에는 `aria-current=\"step\"`을 함께 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Steps from '@uxkm/ui/components/Steps.vue';\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\n</script>\n\n<template>\n  <Steps aria-label=\"상태 예시 — 완료\">\n    <StepsItem title=\"is-finished\" description=\"완료된 단계\" status=\"finished\" />\n  </Steps>\n  <Steps aria-label=\"상태 예시 — 진행 중\">\n    <StepsItem title=\"is-active\" description=\"현재 진행 단계\" status=\"active\" />\n  </Steps>\n  <Steps aria-label=\"상태 예시 — 대기\">\n    <StepsItem title=\"is-wait\" description=\"아직 도달하지 않은 단계\" status=\"wait\" />\n  </Steps>\n  <Steps aria-label=\"상태 예시 — 오류\">\n    <StepsItem title=\"is-error\" description=\"오류가 발생한 단계\" status=\"error\" />\n  </Steps>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  current: 1,
  direction: "horizontal",
  size: "md",
  dot: false,
  iconStyle: false,
  navigable: false,
  align: "center",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Steps, StepsItem },
    template: `<Steps aria-label="상태 예시 — 완료">
        <StepsItem title="is-finished" description="완료된 단계" status="finished" />
      </Steps>
      <Steps aria-label="상태 예시 — 진행 중">
        <StepsItem title="is-active" description="현재 진행 단계" status="active" />
      </Steps>
      <Steps aria-label="상태 예시 — 대기">
        <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
      </Steps>
      <Steps aria-label="상태 예시 — 오류">
        <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
      </Steps>`,
  })),
};

