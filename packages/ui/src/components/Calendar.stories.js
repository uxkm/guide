import Calendar from './Calendar.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import CalendarDay from './CalendarDay.vue';
import CalendarFooter from './CalendarFooter.vue';
import CalendarGrid from './CalendarGrid.vue';
import CalendarGroup from './CalendarGroup.vue';
import CalendarHeader from './CalendarHeader.vue';
import CalendarMonth from './CalendarMonth.vue';
import CalendarNav from './CalendarNav.vue';
import CalendarWeekdays from './CalendarWeekdays.vue';
import CalendarWheel from './CalendarWheel.vue';
import CalendarWheelColumn from './CalendarWheelColumn.vue';
import { EVENT_DAYS, JUNE_WEEK_DAYS, JUNE_WEEK_LABEL, disabledPartialDays, julyDualDays, juneDualDays } from '../data/calendar-demo.js';
import {
  calendarClassColumns,
  calendarClasses,
  calendarDayPropColumns,
  calendarDayProps,
  calendarFooterSlots,
  calendarGridPropColumns,
  calendarGridProps,
  calendarGridSlots,
  calendarGroupSlots,
  calendarHeaderPropColumns,
  calendarHeaderProps,
  calendarHeaderSlots,
  calendarMonthPropColumns,
  calendarMonthProps,
  calendarNavPropColumns,
  calendarNavProps,
  calendarPropColumns,
  calendarProps,
  calendarSlotColumns,
  calendarSlots,
  calendarTokenColumns,
  calendarTokens,
  calendarWeekdaysPropColumns,
  calendarWeekdaysProps,
  calendarWheelColumnPropColumns,
  calendarWheelColumnProps,
  calendarWheelPropColumns,
  calendarWheelProps,
  calendarWheelSlots,
} from '@doc-data/calendar-api';
const apiSections = [
  {
    title: "API · Calendar Props",
    tables: [
      { columns: calendarPropColumns, rows: calendarProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarHeader Props",
    tables: [
      { columns: calendarHeaderPropColumns, rows: calendarHeaderProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarNav Props",
    tables: [
      { columns: calendarNavPropColumns, rows: calendarNavProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarWeekdays Props",
    tables: [
      { columns: calendarWeekdaysPropColumns, rows: calendarWeekdaysProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarMonth Props",
    tables: [
      { columns: calendarMonthPropColumns, rows: calendarMonthProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarGrid Props",
    tables: [
      { columns: calendarGridPropColumns, rows: calendarGridProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarDay Props",
    tables: [
      { columns: calendarDayPropColumns, rows: calendarDayProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarWheel Props",
    tables: [
      { columns: calendarWheelPropColumns, rows: calendarWheelProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarWheelColumn Props",
    tables: [
      { columns: calendarWheelColumnPropColumns, rows: calendarWheelColumnProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Calendar Slots",
    tables: [
      { columns: calendarSlotColumns, rows: calendarSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarHeader · Footer · Group Slots",
    tables: [
      { columns: calendarSlotColumns, rows: calendarHeaderSlots, codeColumn: "name" },
      { columns: calendarSlotColumns, rows: calendarFooterSlots, codeColumn: "name" },
      { columns: calendarSlotColumns, rows: calendarGroupSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · CalendarGrid · CalendarWheel Slots",
    tables: [
      { columns: calendarSlotColumns, rows: calendarGridSlots, codeColumn: "name" },
      { columns: calendarSlotColumns, rows: calendarWheelSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: calendarClassColumns, rows: calendarClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: calendarTokenColumns, rows: calendarTokens, codeColumn: "name" },
    ],
  },
];


/** Docs·Canvas 동일 — Controls가 빈 Calendar를 추가하지 않도록 */
function calendarDemo(docsRender) {
  return withDocsCanvasRender(docsRender, docsRender);
}

export default {
  title: 'Components/데이터 표시/Calendar',
  id: 'components-calendar',
  component: Calendar,
  subcomponents: {
    CalendarDay,
    CalendarFooter,
    CalendarGrid,
    CalendarGroup,
    CalendarHeader,
    CalendarMonth,
    CalendarNav,
    CalendarWeekdays,
    CalendarWheel,
    CalendarWheelColumn,
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', type: { name: 'string', summary: "string" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    noHeader: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    minimal: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    compact: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    borderless: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    shadow: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ghost: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    week: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    readonly: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    weekends: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    agenda: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    wheel: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    size: { control: 'select', options: ["sm","lg"], type: { name: 'enum', summary: "'sm' | 'lg'" }},
    role: { control: 'text', type: { name: 'string', summary: "string" }},
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
    title: "제목",
    ariaLabel: "접근성 라벨",
    noHeader: false,
    minimal: false,
    compact: false,
    borderless: false,
    shadow: false,
    ghost: false,
    week: false,
    readonly: false,
    disabled: false,
    weekends: false,
    agenda: false,
    wheel: false,
    size: "sm",
    role: "application",
  },
  render: (_args, context) => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    setup() {
      return { args: storyArgsRef(context) }; },
    template: `<Calendar v-bind="args" aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <Calendar aria-label=\"2024년 6월\">\n    <template #header>\n      <CalendarHeader title=\"2024년 6월\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    template: `        <Calendar aria-label="2024년 6월">
        <template #header>
        <CalendarHeader title="2024년 6월" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth />
        </Calendar>`,
  })),
};


export const NoHeader = {
  name: "헤더 없음",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <Calendar no-header aria-label=\"2024년 6월\">\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarMonth, CalendarWeekdays },
    template: `        <Calendar no-header aria-label="2024년 6월">
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth />
        </Calendar>`,
  })),
};


export const Minimal = {
  name: "날짜만",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\n</script>\n\n<template>\n  <Calendar minimal compact borderless aria-label=\"2024년 6월 날짜만\">\n    <CalendarMonth />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarMonth },
    template: `<Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
        <CalendarMonth />
      </Calendar>`,
  })),
};


export const Week = {
  name: "주간",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarNav from '@uxkm/ui/components/CalendarNav.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';\n</script>\n\n<template>\n  <Calendar week shadow :aria-label=\"`2024년 ${JUNE_WEEK_LABEL}`\">\n    <CalendarNav :label=\"JUNE_WEEK_LABEL\" />\n    <CalendarWeekdays />\n    <CalendarMonth week :days=\"JUNE_WEEK_DAYS\" />\n  </Calendar>\n  <Calendar week compact borderless :aria-label=\"`2024년 ${JUNE_WEEK_LABEL} (컴팩트)`\">\n    <CalendarNav :label=\"JUNE_WEEK_LABEL\" />\n    <CalendarMonth week :days=\"JUNE_WEEK_DAYS\" />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarMonth, CalendarNav, CalendarWeekdays },
    setup() {
      return { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL };
    },
    template: `<Calendar week shadow :aria-label="'2024년 ' + JUNE_WEEK_LABEL">
        <CalendarNav :label="JUNE_WEEK_LABEL" />
        <CalendarWeekdays />
        <CalendarMonth week :days="JUNE_WEEK_DAYS" />
      </Calendar>
      <Calendar week compact borderless :aria-label="'2024년 ' + JUNE_WEEK_LABEL + ' (컴팩트)'">
        <CalendarNav :label="JUNE_WEEK_LABEL" />
        <CalendarMonth week :days="JUNE_WEEK_DAYS" />
      </Calendar>`,
  })),
};


export const Wheel = {
  name: "휠 (iOS 스타일)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\nimport CalendarWheel from '@uxkm/ui/components/CalendarWheel.vue';\nimport CalendarWheelColumn from '@uxkm/ui/components/CalendarWheelColumn.vue';\nconst wheelYears = Array.from({ length: 11 }, (_, i) => `${2019 + i}년`);\nconst wheelMonths = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);\nconst wheelDays = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);\n</script>\n\n<template>\n  <CalendarWheel\n  shadow\n  title=\"날짜 선택\"\n  cancel-label=\"취소\"\n  confirm-label=\"완료\"\n  aria-label=\"날짜 휠 선택\"\n  >\n  <CalendarWheelColumn\n  label=\"년\"\n  :items=\"wheelYears\"\n  selected=\"2024년\"\n  prev-label=\"이전 년\"\n  next-label=\"다음 년\"\n  />\n  <CalendarWheelColumn\n  label=\"월\"\n  :items=\"wheelMonths\"\n  selected=\"6월\"\n  prev-label=\"이전 월\"\n  next-label=\"다음 월\"\n  />\n  <CalendarWheelColumn\n  label=\"일\"\n  :items=\"wheelDays\"\n  selected=\"15일\"\n  prev-label=\"이전 일\"\n  next-label=\"다음 일\"\n  />\n  </CalendarWheel>\n  <CalendarWheel borderless footer aria-label=\"날짜 휠 선택 (하단 버튼)\" :toolbar=\"false\">\n    <CalendarWheelColumn label=\"년\" :items=\"['2024년']\" selected=\"2024년\" prev-label=\"이전 년\" next-label=\"다음 년\" />\n    <CalendarWheelColumn label=\"월\" :items=\"['6월']\" selected=\"6월\" prev-label=\"이전 월\" next-label=\"다음 월\" />\n    <CalendarWheelColumn label=\"일\" :items=\"['15일']\" selected=\"15일\" prev-label=\"이전 일\" next-label=\"다음 일\" />\n    <template #footer>\n      <Button variant=\"ghost\" size=\"sm\" label=\"취소\" />\n      <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"확인\" />\n    </template>\n  </CalendarWheel>\n  <CalendarGroup class=\"calendar_group-center\">\n    <CalendarWheel shadow title=\"년도\" aria-label=\"년도 선택\">\n      <CalendarWheelColumn label=\"년\" :items=\"['2024년']\" selected=\"2024년\" prev-label=\"이전 년\" next-label=\"다음 년\" />\n    </CalendarWheel>\n    <CalendarWheel shadow title=\"년·월\" aria-label=\"년·월 선택\" :toolbar=\"true\">\n      <template #toolbar>\n        <span class=\"calendar_wheel-title\">년·월</span>\n      </template>\n      <CalendarWheelColumn label=\"년\" :items=\"['2024년']\" selected=\"2024년\" :show-steps=\"false\" />\n      <CalendarWheelColumn label=\"월\" :items=\"['6월']\" selected=\"6월\" :show-steps=\"false\" />\n    </CalendarWheel>\n    <CalendarWheel shadow title=\"월·일\" aria-label=\"월·일 선택\" :toolbar=\"true\">\n      <template #toolbar>\n        <span class=\"calendar_wheel-title\">월·일</span>\n      </template>\n      <CalendarWheelColumn label=\"월\" :items=\"['6월']\" selected=\"6월\" :show-steps=\"false\" />\n      <CalendarWheelColumn label=\"일\" :items=\"['15일']\" selected=\"15일\" :show-steps=\"false\" />\n    </CalendarWheel>\n  </CalendarGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Button, CalendarGroup, CalendarWheel, CalendarWheelColumn },
    setup() {
      const wheelYears = Array.from({ length: 11 }, (_, i) => `${2019 + i}년`);
      const wheelMonths = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
      const wheelDays = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
      return { wheelYears, wheelMonths, wheelDays };
    },
    template: `        <CalendarWheel
        shadow
        title="날짜 선택"
        cancel-label="취소"
        confirm-label="완료"
        aria-label="날짜 휠 선택"
        >
        <CalendarWheelColumn
        label="년"
        :items="wheelYears"
        selected="2024년"
        prev-label="이전 년"
        next-label="다음 년"
        />
        <CalendarWheelColumn
        label="월"
        :items="wheelMonths"
        selected="6월"
        prev-label="이전 월"
        next-label="다음 월"
        />
        <CalendarWheelColumn
        label="일"
        :items="wheelDays"
        selected="15일"
        prev-label="이전 일"
        next-label="다음 일"
        />
        </CalendarWheel>
        <CalendarWheel borderless footer aria-label="날짜 휠 선택 (하단 버튼)" :toolbar="false">
        <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" prev-label="이전 년" next-label="다음 년" />
        <CalendarWheelColumn label="월" :items="['6월']" selected="6월" prev-label="이전 월" next-label="다음 월" />
        <CalendarWheelColumn label="일" :items="['15일']" selected="15일" prev-label="이전 일" next-label="다음 일" />
        <template #footer>
        <Button variant="ghost" size="sm" label="취소" />
        <Button variant="filled" color="primary" size="sm" label="확인" />
        </template>
        </CalendarWheel>
        <CalendarGroup class="calendar_group-center">
        <CalendarWheel shadow title="년도" aria-label="년도 선택">
        <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" prev-label="이전 년" next-label="다음 년" />
        </CalendarWheel>
        <CalendarWheel shadow title="년·월" aria-label="년·월 선택" :toolbar="true">
        <template #toolbar>
        <span class="calendar_wheel-title">년·월</span>
        </template>
        <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" :show-steps="false" />
        <CalendarWheelColumn label="월" :items="['6월']" selected="6월" :show-steps="false" />
        </CalendarWheel>
        <CalendarWheel shadow title="월·일" aria-label="월·일 선택" :toolbar="true">
        <template #toolbar>
        <span class="calendar_wheel-title">월·일</span>
        </template>
        <CalendarWheelColumn label="월" :items="['6월']" selected="6월" :show-steps="false" />
        <CalendarWheelColumn label="일" :items="['15일']" selected="15일" :show-steps="false" />
        </CalendarWheel>
        </CalendarGroup>`,
  })),
};


export const Range = {
  name: "범위 선택",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <Calendar aria-label=\"2024년 6월 범위 선택\">\n    <template #header>\n      <CalendarHeader title=\"2024년 6월\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth :range-start=\"10\" :range-end=\"18\" />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    template: `        <Calendar aria-label="2024년 6월 범위 선택">
        <template #header>
        <CalendarHeader title="2024년 6월" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :range-start="10" :range-end="18" />
        </Calendar>`,
  })),
};


export const Event = {
  name: "이벤트 마커",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';\n</script>\n\n<template>\n  <Calendar weekends aria-label=\"2024년 6월 이벤트\">\n    <template #header>\n      <CalendarHeader title=\"2024년 6월\" :show-nav=\"false\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth :events=\"EVENT_DAYS\" weekends />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    setup() {
      return { EVENT_DAYS };
    },
    template: `        <Calendar weekends aria-label="2024년 6월 이벤트">
        <template #header>
        <CalendarHeader title="2024년 6월" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :events="EVENT_DAYS" weekends />
        </Calendar>`,
  })),
};


export const Skin = {
  name: "스킨",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <CalendarGroup>\n    <Calendar borderless aria-label=\"Borderless\">\n      <template #header>\n        <CalendarHeader title=\"Borderless\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"8\" :selected=\"10\" />\n    </Calendar>\n    <Calendar ghost aria-label=\"Ghost\">\n      <template #header>\n        <CalendarHeader title=\"Ghost\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"8\" :selected=\"10\" />\n    </Calendar>\n    <Calendar shadow aria-label=\"Shadow\">\n      <template #header>\n        <CalendarHeader title=\"Shadow\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"8\" :selected=\"10\" />\n    </Calendar>\n  </CalendarGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarGroup, CalendarHeader, CalendarMonth, CalendarWeekdays },
    template: `        <CalendarGroup>
        <Calendar borderless aria-label="Borderless">
        <template #header>
        <CalendarHeader title="Borderless" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
        </Calendar>
        <Calendar ghost aria-label="Ghost">
        <template #header>
        <CalendarHeader title="Ghost" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
        </Calendar>
        <Calendar shadow aria-label="Shadow">
        <template #header>
        <CalendarHeader title="Shadow" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
        </Calendar>
        </CalendarGroup>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <CalendarGroup>\n    <Calendar size=\"sm\" aria-label=\"Small\">\n      <template #header>\n        <CalendarHeader title=\"Small\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"7\" :selected=\"9\" />\n    </Calendar>\n    <Calendar compact aria-label=\"Compact\">\n      <template #header>\n        <CalendarHeader title=\"Compact\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"7\" :selected=\"9\" />\n    </Calendar>\n    <Calendar size=\"lg\" aria-label=\"Large\">\n      <template #header>\n        <CalendarHeader title=\"Large\" :show-nav=\"false\" />\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :partial=\"14\" :today=\"7\" :selected=\"9\" />\n    </Calendar>\n  </CalendarGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarGroup, CalendarHeader, CalendarMonth, CalendarWeekdays },
    template: `        <CalendarGroup>
        <Calendar size="sm" aria-label="Small">
        <template #header>
        <CalendarHeader title="Small" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
        </Calendar>
        <Calendar compact aria-label="Compact">
        <template #header>
        <CalendarHeader title="Compact" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
        </Calendar>
        <Calendar size="lg" aria-label="Large">
        <template #header>
        <CalendarHeader title="Large" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
        </Calendar>
        </CalendarGroup>`,
  })),
};


export const Footer = {
  name: "푸터",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\n</script>\n\n<template>\n  <Calendar shadow aria-label=\"2024년 6월 푸터 포함\">\n    <template #header>\n      <CalendarHeader title=\"2024년 6월\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth />\n    <template #footer>\n      <CalendarFooter />\n    </template>\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarFooter, CalendarHeader, CalendarMonth, CalendarWeekdays },
    template: `        <Calendar shadow aria-label="2024년 6월 푸터 포함">
        <template #header>
        <CalendarHeader title="2024년 6월" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth />
        <template #footer>
        <CalendarFooter />
        </template>
        </Calendar>`,
  })),
};


export const Dual = {
  name: "이중 패널",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';\nconst dualJuneDays = juneDualDays();\nconst dualJulyDays = julyDualDays();\n</script>\n\n<template>\n  <CalendarGroup>\n    <Calendar compact shadow weekends aria-label=\"2024년 6월\">\n      <template #header>\n        <div class=\"calendar_header\">\n          <Button variant=\"ghost\" size=\"sm\" icon-only aria-label=\"이전 달\">\n            <template #icon-before>\n              <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n                <path d=\"M15 18l-6-6 6-6\" />\n              </svg>\n            </template>\n          </Button>\n          <span class=\"calendar_title\">2024년 6월</span>\n        </div>\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :days=\"dualJuneDays\" weekends />\n    </Calendar>\n    <Calendar compact shadow weekends aria-label=\"2024년 7월\">\n      <template #header>\n        <div class=\"calendar_header\">\n          <span class=\"calendar_title\">2024년 7월</span>\n          <Button variant=\"ghost\" size=\"sm\" icon-only aria-label=\"다음 달\">\n            <template #icon-before>\n              <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n                <path d=\"M9 18l6-6-6-6\" />\n              </svg>\n            </template>\n          </Button>\n        </div>\n      </template>\n      <template #weekdays>\n        <CalendarWeekdays />\n      </template>\n      <CalendarMonth :days=\"dualJulyDays\" weekends />\n    </Calendar>\n  </CalendarGroup>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Button, Calendar, CalendarGroup, CalendarMonth, CalendarWeekdays },
    setup() {
      return {
        dualJuneDays: juneDualDays(),
        dualJulyDays: julyDualDays(),
      };
    },
    template: `        <CalendarGroup>
        <Calendar compact shadow weekends aria-label="2024년 6월">
        <template #header>
        <div class="calendar_header">
        <Button variant="ghost" size="sm" icon-only aria-label="이전 달">
        <template #icon-before>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M15 18l-6-6 6-6" />
        </svg>
        </template>
        </Button>
        <span class="calendar_title">2024년 6월</span>
        </div>
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJuneDays" weekends />
        </Calendar>
        <Calendar compact shadow weekends aria-label="2024년 7월">
        <template #header>
        <div class="calendar_header">
        <span class="calendar_title">2024년 7월</span>
        <Button variant="ghost" size="sm" icon-only aria-label="다음 달">
        <template #icon-before>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
        </svg>
        </template>
        </Button>
        </div>
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJulyDays" weekends />
        </Calendar>
        </CalendarGroup>`,
  })),
};


export const Agenda = {
  name: "세로 일정",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\n</script>\n\n<template>\n  <Calendar agenda shadow role=\"feed\" aria-label=\"2024년 6월 일정\">\n    <template #header>\n      <CalendarHeader title=\"6월 14일 ~ 20일\" prev-label=\"이전 주\" next-label=\"다음 주\" />\n    </template>\n    <ol class=\"calendar_agenda-list\">\n      <li class=\"calendar_agenda-day\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">금</span>\n          <span class=\"calendar_agenda-daynum\">14</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <ul class=\"calendar_agenda-events\">\n            <li class=\"calendar_agenda-event color_primary\">\n              <span class=\"calendar_agenda-event-time\">14:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">디자인 리뷰</span>\n                <span class=\"calendar_agenda-event-desc\">컴포넌트 가이드 UI 시안 검토</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"calendar_agenda-day is-saturday is-today\" aria-current=\"date\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">토</span>\n          <span class=\"calendar_agenda-daynum\">15</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <ul class=\"calendar_agenda-events\">\n            <li class=\"calendar_agenda-event color_success\">\n              <span class=\"calendar_agenda-event-time\">09:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">팀 스탠드업</span>\n                <span class=\"calendar_agenda-event-desc\">주간 진행 상황 공유</span>\n              </div>\n            </li>\n            <li class=\"calendar_agenda-event color_warning\">\n              <span class=\"calendar_agenda-event-time\">15:30</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">QA 일정 점검</span>\n                <span class=\"calendar_agenda-event-desc\">캘린더 컴포넌트 데모 확인</span>\n                <div class=\"calendar_agenda-event-meta\">\n                  <span class=\"tag tag_sm color_warning\">진행 중</span>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"calendar_agenda-day is-sunday is-empty\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">일</span>\n          <span class=\"calendar_agenda-daynum\">16</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <p class=\"calendar_agenda-empty\">일정 없음</p>\n        </div>\n      </li>\n      <li class=\"calendar_agenda-day is-selected\" aria-selected=\"true\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">월</span>\n          <span class=\"calendar_agenda-daynum\">17</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <ul class=\"calendar_agenda-events\">\n            <li class=\"calendar_agenda-event color_primary\">\n              <span class=\"calendar_agenda-event-time\">10:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">기획 회의</span>\n                <span class=\"calendar_agenda-event-desc\">3분기 로드맵 논의</span>\n              </div>\n            </li>\n            <li class=\"calendar_agenda-event color_info\">\n              <span class=\"calendar_agenda-event-time\">13:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">점심 미팅</span>\n                <span class=\"calendar_agenda-event-desc\">파트너사 담당자</span>\n              </div>\n            </li>\n            <li class=\"calendar_agenda-event color_danger\">\n              <span class=\"calendar_agenda-event-time\">18:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">배포 마감</span>\n                <span class=\"calendar_agenda-event-desc\">v2.4.0 릴리스</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"calendar_agenda-day\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">화</span>\n          <span class=\"calendar_agenda-daynum\">18</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <ul class=\"calendar_agenda-events\">\n            <li class=\"calendar_agenda-event color_success\">\n              <span class=\"calendar_agenda-event-time\">종일</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">워크숍</span>\n                <span class=\"calendar_agenda-event-desc\">디자인 시스템 심화 과정</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ol>\n  </Calendar>\n  <Calendar agenda borderless class=\"calendar_agenda_compact\" role=\"feed\" aria-label=\"2024년 6월 15일 일정 (컴팩트)\">\n    <template #header>\n      <CalendarHeader title=\"6월 15일 (토)\" :show-nav=\"false\" />\n    </template>\n    <ol class=\"calendar_agenda-list\">\n      <li class=\"calendar_agenda-day is-saturday is-today\" aria-current=\"date\">\n        <div class=\"calendar_agenda-date\">\n          <span class=\"calendar_agenda-weekday\">토</span>\n          <span class=\"calendar_agenda-daynum\">15</span>\n        </div>\n        <div class=\"calendar_agenda-body\">\n          <ul class=\"calendar_agenda-events\">\n            <li class=\"calendar_agenda-event color_primary\">\n              <span class=\"calendar_agenda-event-time\">09:00</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">팀 스탠드업</span>\n                <span class=\"calendar_agenda-event-desc\">15분 · Zoom</span>\n              </div>\n            </li>\n            <li class=\"calendar_agenda-event color_warning\">\n              <span class=\"calendar_agenda-event-time\">15:30</span>\n              <div class=\"calendar_agenda-event-main\">\n                <span class=\"calendar_agenda-event-title\">QA 점검</span>\n                <span class=\"calendar_agenda-event-desc\">회의실 B</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ol>\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarHeader },
    template: `        <Calendar agenda shadow role="feed" aria-label="2024년 6월 일정">
        <template #header>
        <CalendarHeader title="6월 14일 ~ 20일" prev-label="이전 주" next-label="다음 주" />
        </template>
        <ol class="calendar_agenda-list">
        <li class="calendar_agenda-day">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">금</span>
        <span class="calendar_agenda-daynum">14</span>
        </div>
        <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
        <li class="calendar_agenda-event color_primary">
        <span class="calendar_agenda-event-time">14:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">디자인 리뷰</span>
        <span class="calendar_agenda-event-desc">컴포넌트 가이드 UI 시안 검토</span>
        </div>
        </li>
        </ul>
        </div>
        </li>
        <li class="calendar_agenda-day is-saturday is-today" aria-current="date">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">토</span>
        <span class="calendar_agenda-daynum">15</span>
        </div>
        <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
        <li class="calendar_agenda-event color_success">
        <span class="calendar_agenda-event-time">09:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">팀 스탠드업</span>
        <span class="calendar_agenda-event-desc">주간 진행 상황 공유</span>
        </div>
        </li>
        <li class="calendar_agenda-event color_warning">
        <span class="calendar_agenda-event-time">15:30</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">QA 일정 점검</span>
        <span class="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span>
        <div class="calendar_agenda-event-meta">
        <span class="tag tag_sm color_warning">진행 중</span>
        </div>
        </div>
        </li>
        </ul>
        </div>
        </li>
        <li class="calendar_agenda-day is-sunday is-empty">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">일</span>
        <span class="calendar_agenda-daynum">16</span>
        </div>
        <div class="calendar_agenda-body">
        <p class="calendar_agenda-empty">일정 없음</p>
        </div>
        </li>
        <li class="calendar_agenda-day is-selected" aria-selected="true">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">월</span>
        <span class="calendar_agenda-daynum">17</span>
        </div>
        <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
        <li class="calendar_agenda-event color_primary">
        <span class="calendar_agenda-event-time">10:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">기획 회의</span>
        <span class="calendar_agenda-event-desc">3분기 로드맵 논의</span>
        </div>
        </li>
        <li class="calendar_agenda-event color_info">
        <span class="calendar_agenda-event-time">13:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">점심 미팅</span>
        <span class="calendar_agenda-event-desc">파트너사 담당자</span>
        </div>
        </li>
        <li class="calendar_agenda-event color_danger">
        <span class="calendar_agenda-event-time">18:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">배포 마감</span>
        <span class="calendar_agenda-event-desc">v2.4.0 릴리스</span>
        </div>
        </li>
        </ul>
        </div>
        </li>
        <li class="calendar_agenda-day">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">화</span>
        <span class="calendar_agenda-daynum">18</span>
        </div>
        <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
        <li class="calendar_agenda-event color_success">
        <span class="calendar_agenda-event-time">종일</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">워크숍</span>
        <span class="calendar_agenda-event-desc">디자인 시스템 심화 과정</span>
        </div>
        </li>
        </ul>
        </div>
        </li>
        </ol>
        </Calendar>
        <Calendar agenda borderless class="calendar_agenda_compact" role="feed" aria-label="2024년 6월 15일 일정 (컴팩트)">
        <template #header>
        <CalendarHeader title="6월 15일 (토)" :show-nav="false" />
        </template>
        <ol class="calendar_agenda-list">
        <li class="calendar_agenda-day is-saturday is-today" aria-current="date">
        <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">토</span>
        <span class="calendar_agenda-daynum">15</span>
        </div>
        <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
        <li class="calendar_agenda-event color_primary">
        <span class="calendar_agenda-event-time">09:00</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">팀 스탠드업</span>
        <span class="calendar_agenda-event-desc">15분 · Zoom</span>
        </div>
        </li>
        <li class="calendar_agenda-event color_warning">
        <span class="calendar_agenda-event-time">15:30</span>
        <div class="calendar_agenda-event-main">
        <span class="calendar_agenda-event-title">QA 점검</span>
        <span class="calendar_agenda-event-desc">회의실 B</span>
        </div>
        </li>
        </ul>
        </div>
        </li>
        </ol>
        </Calendar>`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';\nconst disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });\n</script>\n\n<template>\n  <Calendar readonly aria-label=\"읽기 전용 캘린더\">\n    <template #header>\n      <CalendarHeader title=\"읽기 전용\" :show-nav=\"false\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth :partial=\"14\" :today=\"7\" :selected=\"9\" readonly />\n  </Calendar>\n  <Calendar disabled aria-label=\"비활성 캘린더\">\n    <template #header>\n      <CalendarHeader title=\"비활성\" :show-nav=\"false\" />\n    </template>\n    <template #weekdays>\n      <CalendarWeekdays />\n    </template>\n    <CalendarMonth :days=\"disabledDays\" />\n  </Calendar>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  title: "제목",
  ariaLabel: "접근성 라벨",
  noHeader: false,
  minimal: false,
  compact: false,
  borderless: false,
  shadow: false,
  ghost: false,
  week: false,
  readonly: false,
  disabled: false,
  weekends: false,
  agenda: false,
  wheel: false,
  size: "sm",
  role: "application"
},
  render: calendarDemo(() => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    setup() {
      return { disabledDays: disabledPartialDays(14, { today: 7, selected: 9 }) };
    },
    template: `        <Calendar readonly aria-label="읽기 전용 캘린더">
        <template #header>
        <CalendarHeader title="읽기 전용" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" readonly />
        </Calendar>
        <Calendar disabled aria-label="비활성 캘린더">
        <template #header>
        <CalendarHeader title="비활성" :show-nav="false" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :days="disabledDays" />
        </Calendar>`,
  })),
};

