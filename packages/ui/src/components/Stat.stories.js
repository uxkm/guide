import Stat from './Stat.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import CardFooter from './CardFooter.vue';
import CardHeader from './CardHeader.vue';
import {
  statClassColumns,
  statClasses,
  statPropColumns,
  statProps,
  statSlotColumns,
  statSlots,
  statTokenColumns,
  statTokens,
} from '@doc-data/stat-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: statPropColumns, rows: statProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: statSlotColumns, rows: statSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: statClassColumns, rows: statClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: statTokenColumns, rows: statTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/Stat',
  id: 'components-stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', type: { name: 'string', summary: "string" }},
    value: { control: 'text', type: { name: 'string', summary: "string" }},
    prefix: { control: 'text', type: { name: 'string', summary: "string" }},
    suffix: { control: 'text', type: { name: 'string', summary: "string" }},
    description: { control: 'text', type: { name: 'string', summary: "string" }},
    trend: { control: 'text', type: { name: 'string', summary: "string" }},
    trendColor: { control: 'select', options: ["success","warning","danger"], type: { name: 'enum', summary: "'success' | 'warning' | 'danger'" } },
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    card: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    shadow: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
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
    title: "제목",
    value: "1",
    prefix: "값",
    suffix: "값",
    description: "설명 텍스트입니다.",
    trend: "값",
    trendColor: "값",
    size: "md",
    card: false,
    shadow: false,
  },
  render: (_args, context) => ({
    components: { Stat },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<Stat v-bind="args" />',
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "title · value · description으로 지표를 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat\n  title=\"총 사용자\"\n  value=\"12,345\"\n  description=\"+12.5% 지난 달 대비\"\n  trend-color=\"success\"\n  />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md"
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trend-color="success"
      />`,
  })),
};


export const Prefix = {
  name: "접두 · 접미",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "prefix · suffix로 통화·단위를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat title=\"총 매출\" prefix=\"₩\" value=\"4,280,000\" description=\"+8.2%\" trend-color=\"success\" />\n  <Stat title=\"전환율\" value=\"3.6\" suffix=\"%\" description=\"-0.4%p\" trend-color=\"danger\" />\n  <Stat title=\"평균 응답 시간\" value=\"128\" suffix=\"ms\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />`,
  })),
};


export const Trend = {
  name: "추세",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "trend로 증감 방향을 아이콘과 함께 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat\n  title=\"월간 매출\"\n  prefix=\"₩\"\n  value=\"4.2M\"\n  trend=\"+8.2%\"\n  trend-color=\"success\"\n  description=\"전월 대비\"\n  card\n  shadow\n  />\n  <Stat\n  title=\"이탈률\"\n  value=\"2.4\"\n  suffix=\"%\"\n  trend=\"+0.3%p\"\n  trend-color=\"danger\"\n  card\n  shadow\n  >\n  <template #trend-icon>\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n      <path d=\"m6 9 6 6 6-6\" />\n    </svg>\n  </template>\n  </Stat>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `        <Stat
        title="월간 매출"
        prefix="₩"
        value="4.2M"
        trend="+8.2%"
        trend-color="success"
        description="전월 대비"
        card
        shadow
        />
        <Stat
        title="이탈률"
        value="2.4"
        suffix="%"
        trend="+0.3%p"
        trend-color="danger"
        card
        shadow
        >
        <template #trend-icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
        </svg>
        </template>
        </Stat>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "size로 수치 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat size=\"sm\" card title=\"Small\" value=\"1,024\" />\n  <Stat card title=\"Medium\" value=\"8,192\" />\n  <Stat size=\"lg\" card title=\"Large\" value=\"64K\" />\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />`,
  })),
};


export const Layout = {
  name: "레이아웃",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "stat_horizontal · stat_inline · stat_row로 배치를 변경합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat class=\"stat_horizontal\" card title=\"활성 세션\" value=\"342\" />\n  <Stat class=\"stat_inline\" card title=\"CPU 사용률\" value=\"68\" suffix=\"%\" />\n  <Stat class=\"stat_row\" card shadow>\n    <span class=\"stat_icon-wrap color_primary\" aria-hidden=\"true\">\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\" />\n        <circle cx=\"9\" cy=\"7\" r=\"4\" />\n        <path d=\"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\" />\n      </svg>\n    </span>\n    <div class=\"stat_body\">\n      <span class=\"stat_label\">팀 멤버</span>\n      <span class=\"stat_value\">48</span>\n      <span class=\"stat_desc color_success\">4명 신규 합류</span>\n    </div>\n  </Stat>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<Stat class="stat_horizontal" card title="활성 세션" value="342" />
      <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat class="stat_row" card shadow>
        <span class="stat_icon-wrap color_primary" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        <div class="stat_body">
          <span class="stat_label">팀 멤버</span>
          <span class="stat_value">48</span>
          <span class="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>`,
  })),
};


export const Icon = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Stat card>\n    <span class=\"stat_icon color_primary\">\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n        <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n        <polyline points=\"7 10 12 15 17 10\" />\n        <line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\" />\n      </svg>\n    </span>\n    <span class=\"stat_label\">다운로드</span>\n    <span class=\"stat_value\">2,847</span>\n    <span class=\"stat_desc color_success\">+24%</span>\n  </Stat>\n  <Stat class=\"stat_row\" card>\n    <span class=\"stat_icon-wrap color_success\" aria-hidden=\"true\">\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n        <path d=\"M22 4 12 14.01l-3-3\" />\n      </svg>\n    </span>\n    <div class=\"stat_body\">\n      <span class=\"stat_label\">완료율</span>\n      <div class=\"stat_value-row\">\n        <span class=\"stat_value\">94</span>\n        <span class=\"stat_suffix\">%</span>\n      </div>\n    </div>\n  </Stat>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<Stat card>
        <span class="stat_icon color_primary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span class="stat_label">다운로드</span>
        <span class="stat_value">2,847</span>
        <span class="stat_desc color_success">+24%</span>
      </Stat>
      <Stat class="stat_row" card>
        <span class="stat_icon-wrap color_success" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </span>
        <div class="stat_body">
          <span class="stat_label">완료율</span>
          <div class="stat_value-row">
            <span class="stat_value">94</span>
            <span class="stat_suffix">%</span>
          </div>
        </div>
      </Stat>`,
  })),
};


export const Skin = {
  name: "스킨",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "card · shadow · stat_borderless · stat_accent로 외형을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <div class=\"stat_group stat_group-2\">\n    <Stat card title=\"기본 카드\" value=\"1,200\" />\n    <Stat card shadow title=\"Shadow\" value=\"980\" />\n    <Stat card class=\"stat_borderless\" title=\"Borderless\" value=\"456\" />\n    <Stat card class=\"stat_accent color_primary\" title=\"Accent\" value=\"789\" description=\"강조 지표\" trend-color=\"primary\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<div class="stat_group stat_group-2">
        <Stat card title="기본 카드" value="1,200" />
        <Stat card shadow title="Shadow" value="980" />
        <Stat card class="stat_borderless" title="Borderless" value="456" />
        <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
      </div>`,
  })),
};


export const Group = {
  name: "그룹",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "stat_group으로 여러 지표를 그리드로 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <div class=\"stat_group\">\n    <Stat card shadow title=\"총 매출\" prefix=\"₩\" value=\"4.2M\" description=\"+8.2%\" trend-color=\"success\" />\n    <Stat card shadow title=\"신규 가입\" value=\"1,234\" description=\"+15.3%\" trend-color=\"success\" />\n    <Stat card shadow title=\"이탈률\" value=\"2.4\" suffix=\"%\" description=\"+0.3%p\" trend-color=\"danger\" />\n    <Stat card shadow title=\"활성 사용자\" value=\"8,901\" description=\"변동 없음\" trend-color=\"muted\" />\n  </div>\n  <div class=\"stat_group stat_group-4 stat_group-divider stat_card stat_shadow\" style=\"padding: var(--space-lg);\">\n    <Stat title=\"방문\" value=\"24.5K\" />\n    <Stat title=\"페이지뷰\" value=\"89.2K\" />\n    <Stat title=\"전환\" value=\"1,842\" />\n    <Stat title=\"매출\" value=\"₩12M\" />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Stat },
    template: `<div class="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
      </div>
      <div class="stat_group stat_group-4 stat_group-divider stat_card stat_shadow" style="padding: var(--space-lg);">
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
      </div>`,
  })),
};


export const Context = {
  name: "카드 혼합",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다.",
      },
      source: {
        code: "<script setup>\nimport Card from '@uxkm/ui/components/Card.vue';\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\nimport Stat from '@uxkm/ui/components/Stat.vue';\n</script>\n\n<template>\n  <Card variant=\"shadow\">\n    <CardHeader title=\"이번 달 요약\" subtitle=\"2024년 6월\" />\n    <CardBody>\n      <div class=\"stat_group stat_group-3\">\n        <Stat title=\"매출\" prefix=\"₩\" value=\"12M\" trend=\"+18%\" trend-color=\"success\" />\n        <Stat title=\"주문\" value=\"3,456\" description=\"+9.1%\" trend-color=\"success\" />\n        <Stat title=\"환불\" value=\"42\" description=\"+3건\" trend-color=\"danger\" />\n      </div>\n    </CardBody>\n    <CardFooter between>\n      <span class=\"color_muted size_sm\">실시간 갱신</span>\n      <a href=\"#\" class=\"link color_primary size_sm\" @click.prevent>상세 보기</a>\n    </CardFooter>\n  </Card>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  value: "1",
  prefix: "값",
  suffix: "값",
  description: "설명 텍스트입니다.",
  trend: "값",
  trendColor: "값",
  size: "md",
  card: false,
  shadow: false
},
  render: withDocsCanvasRender(() => ({
    components: { Card, CardBody, CardFooter, CardHeader, Stat },
    template: `<Card variant="shadow">
        <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
        <CardBody>
          <div class="stat_group stat_group-3">
            <Stat title="매출" prefix="₩" value="12M" trend="+18%" trend-color="success" />
            <Stat title="주문" value="3,456" description="+9.1%" trend-color="success" />
            <Stat title="환불" value="42" description="+3건" trend-color="danger" />
          </div>
        </CardBody>
        <CardFooter between>
          <span class="color_muted size_sm">실시간 갱신</span>
          <a href="#" class="link color_primary size_sm" @click.prevent>상세 보기</a>
        </CardFooter>
      </Card>`,
  })),
};

