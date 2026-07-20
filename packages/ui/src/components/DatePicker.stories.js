import DatePicker from './DatePicker.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import CalendarGroup from './CalendarGroup.vue';
import Calendar from './Calendar.vue';
import CalendarFooter from './CalendarFooter.vue';
import CalendarHeader from './CalendarHeader.vue';
import CalendarMonth from './CalendarMonth.vue';
import CalendarWeekdays from './CalendarWeekdays.vue';
import Button from './Button.vue';
import Input from './Input.vue';
import { julyDualDays, juneDualDays } from '../data/calendar-demo.js';
import {
  datePickerClassColumns,
  datePickerClasses,
  datePickerPropColumns,
  datePickerProps,
  datePickerSlotColumns,
  datePickerSlots,
  datePickerTokenColumns,
  datePickerTokens,
} from '@doc-data/date-picker-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: datePickerPropColumns, rows: datePickerProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: datePickerSlotColumns, rows: datePickerSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: datePickerClassColumns, rows: datePickerClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: datePickerTokenColumns, rows: datePickerTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/DatePicker',
  id: 'components-date-picker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    error: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    success: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    open: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    placeholder: { control: 'text', type: { name: 'string', summary: "string" }},
    value: { control: 'text', type: { name: 'string', summary: "string" }},
    fit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    inline: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    clearable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    panelWide: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    inputId: { control: 'text', type: { name: 'string', summary: "string" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    size: "md",
    disabled: false,
    error: false,
    success: false,
    open: true,
    placeholder: "입력하세요",
    value: "1",
    fit: false,
    block: false,
    inline: false,
    clearable: false,
    panelWide: false,
    inputId: "값",
    ariaLabel: "접근성 라벨",
  },
  render: (_args, context) => ({
    components: { DatePicker },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: '<DatePicker v-bind="args" />',
  }),
};


export const Type = {
  name: "유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-type-native\">네이티브 — input type=\"date\"</label>\n    <Input id=\"dp-type-native\" type=\"date\" />\n    <p class=\"form_field-hint\">간단한 폼·모바일 환경에 적합합니다.</p>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-type-custom\">커스텀 — date_picker</label>\n    <DatePicker input-id=\"dp-type-custom\" placeholder=\"날짜를 선택하세요\" fit aria-label=\"날짜 선택\" />\n    <p class=\"form_field-hint\">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  placeholder: "입력하세요",
  value: "1",
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker, Input },
    template: `<div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
        <Input id="dp-type-native" type="date" />
        <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
        <DatePicker input-id="dp-type-custom" placeholder="날짜를 선택하세요" fit aria-label="날짜 선택" />
        <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
      </div>`,
  })),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-basic\">예약 날짜</label>\n    <DatePicker input-id=\"dp-basic\" value=\"2024-06-18\" fit />\n    <p class=\"form_field-hint\">체크인 날짜를 선택해 주세요.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker },
    template: `<div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-basic">예약 날짜</label>
        <DatePicker input-id="dp-basic" value="2024-06-18" fit />
        <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
      </div>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-size-sm\">Small</label>\n    <DatePicker input-id=\"dp-size-sm\" size=\"sm\" value=\"2024-06-18\" fit />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-size-md\">Medium</label>\n    <DatePicker input-id=\"dp-size-md\" value=\"2024-06-18\" fit />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-size-lg\">Large</label>\n    <DatePicker input-id=\"dp-size-lg\" size=\"lg\" value=\"2024-06-18\" fit />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker },
    template: `<div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-size-sm">Small</label>
        <DatePicker input-id="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-size-md">Medium</label>
        <DatePicker input-id="dp-size-md" value="2024-06-18" fit />
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-size-lg">Large</label>
        <DatePicker input-id="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>`,
  })),
};


export const Open = {
  name: "패널 열림",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-open\">날짜</label>\n    <DatePicker input-id=\"dp-open\" value=\"2024-06-18\" fit open>\n      <template #panel>\n        <Calendar no-header compact borderless aria-label=\"2024년 6월\" weekends>\n          <template #weekdays>\n            <CalendarWeekdays />\n          </template>\n          <CalendarMonth :selected=\"18\" :today=\"15\" weekends />\n        </Calendar>\n      </template>\n    </DatePicker>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Calendar, CalendarMonth, CalendarWeekdays, DatePicker },
    template: `        <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-open">날짜</label>
        <DatePicker input-id="dp-open" value="2024-06-18" fit open>
        <template #panel>
        <Calendar no-header compact borderless aria-label="2024년 6월" weekends>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :selected="18" :today="15" weekends />
        </Calendar>
        </template>
        </DatePicker>
        </div>`,
  })),
};


export const Footer = {
  name: "푸터 액션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-footer\">일정 날짜</label>\n    <DatePicker input-id=\"dp-footer\" value=\"2024-06-18\" fit open>\n      <template #panel>\n        <Calendar compact borderless aria-label=\"2024년 6월\" weekends>\n          <template #header>\n            <CalendarHeader title=\"2024년 6월\" />\n          </template>\n          <template #weekdays>\n            <CalendarWeekdays />\n          </template>\n          <CalendarMonth :selected=\"18\" :today=\"15\" weekends />\n          <template #footer>\n            <CalendarFooter />\n          </template>\n        </Calendar>\n      </template>\n    </DatePicker>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Calendar, CalendarFooter, CalendarHeader, CalendarMonth, CalendarWeekdays, DatePicker },
    template: `        <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-footer">일정 날짜</label>
        <DatePicker input-id="dp-footer" value="2024-06-18" fit open>
        <template #panel>
        <Calendar compact borderless aria-label="2024년 6월" weekends>
        <template #header>
        <CalendarHeader title="2024년 6월" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :selected="18" :today="15" weekends />
        <template #footer>
        <CalendarFooter />
        </template>
        </Calendar>
        </template>
        </DatePicker>
        </div>`,
  })),
};


export const Range = {
  name: "기간 선택",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <span class=\"form_field-label\" id=\"dp-range-label\">조회 기간</span>\n    <div class=\"date_picker_range\" role=\"group\" aria-labelledby=\"dp-range-label\">\n      <DatePicker value=\"2024-06-10\" aria-label=\"시작일\" />\n      <span class=\"date_picker_sep\" aria-hidden=\"true\">~</span>\n      <DatePicker value=\"2024-06-18\" aria-label=\"종료일\" />\n    </div>\n    <p class=\"form_field-hint\">최대 90일까지 조회할 수 있습니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker },
    template: `<div class="form_field">
        <span class="form_field-label" id="dp-range-label">조회 기간</span>
        <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
          <DatePicker value="2024-06-10" aria-label="시작일" />
          <span class="date_picker_sep" aria-hidden="true">~</span>
          <DatePicker value="2024-06-18" aria-label="종료일" />
        </div>
        <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
      </div>`,
  })),
};


export const RangePanel = {
  name: "이중 캘린더 패널",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\nimport { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';\nconst rangeJuneDays = juneDualDays();\nconst rangeJulyDays = julyDualDays();\n</script>\n\n<template>\n  <div class=\"form_field\">\n    <span class=\"form_field-label\" id=\"dp-range-panel-label\">숙박 기간</span>\n    <DatePicker\n    block\n    open\n    panel-wide\n    input-id=\"dp-range-panel-label\"\n    value=\"2024-06-10 ~ 2024-07-06\"\n    aria-label=\"숙박 기간\"\n    style=\"max-width: 20rem;\"\n    >\n    <template #panel>\n      <CalendarGroup>\n        <Calendar compact borderless aria-label=\"2024년 6월\">\n          <CalendarHeader title=\"2024년 6월\" :show-next=\"false\" />\n          <CalendarWeekdays />\n          <CalendarMonth :days=\"rangeJuneDays\" />\n        </Calendar>\n        <Calendar compact borderless aria-label=\"2024년 7월\">\n          <CalendarHeader title=\"2024년 7월\" :show-prev=\"false\" />\n          <CalendarWeekdays />\n          <CalendarMonth :days=\"rangeJulyDays\" />\n        </Calendar>\n      </CalendarGroup>\n    </template>\n  </DatePicker>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Calendar, CalendarGroup, CalendarHeader, CalendarMonth, CalendarWeekdays, DatePicker },
    setup() {
      return {
        rangeJuneDays: juneDualDays(),
        rangeJulyDays: julyDualDays(),
      };
    },
    template: `        <div class="form_field">
        <span class="form_field-label" id="dp-range-panel-label">숙박 기간</span>
        <DatePicker
        block
        open
        panel-wide
        input-id="dp-range-panel-label"
        value="2024-06-10 ~ 2024-07-06"
        aria-label="숙박 기간"
        style="max-width: 20rem;"
        >
        <template #panel>
        <CalendarGroup>
        <Calendar compact borderless aria-label="2024년 6월">
        <CalendarHeader title="2024년 6월" :show-next="false" />
        <CalendarWeekdays />
        <CalendarMonth :days="rangeJuneDays" />
        </Calendar>
        <Calendar compact borderless aria-label="2024년 7월">
        <CalendarHeader title="2024년 7월" :show-prev="false" />
        <CalendarWeekdays />
        <CalendarMonth :days="rangeJulyDays" />
        </Calendar>
        </CalendarGroup>
        </template>
        </DatePicker>
        </div>`,
  })),
};


export const Inline = {
  name: "인라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <DatePicker inline>\n    <template #panel>\n      <Calendar compact aria-label=\"2024년 6월\" weekends>\n        <template #header>\n          <CalendarHeader title=\"2024년 6월\" />\n        </template>\n        <template #weekdays>\n          <CalendarWeekdays />\n        </template>\n        <CalendarMonth :selected=\"18\" :today=\"15\" weekends />\n      </Calendar>\n    </template>\n  </DatePicker>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays, DatePicker },
    template: `        <DatePicker inline>
        <template #panel>
        <Calendar compact aria-label="2024년 6월" weekends>
        <template #header>
        <CalendarHeader title="2024년 6월" />
        </template>
        <template #weekdays>
        <CalendarWeekdays />
        </template>
        <CalendarMonth :selected="18" :today="15" weekends />
        </Calendar>
        </template>
        </DatePicker>`,
  })),
};


export const Clear = {
  name: "값 초기화",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-clear\">필터 날짜</label>\n    <DatePicker input-id=\"dp-clear\" value=\"2024-06-18\" fit clearable />\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker },
    template: `<div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-clear">필터 날짜</label>
        <DatePicker input-id="dp-clear" value="2024-06-18" fit clearable />
      </div>`,
  })),
};


export const State = {
  name: "상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-state-placeholder\">플레이스홀더</label>\n    <DatePicker input-id=\"dp-state-placeholder\" placeholder=\"날짜를 선택하세요\" fit />\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-state-disabled\">비활성</label>\n    <DatePicker input-id=\"dp-state-disabled\" value=\"2024-06-18\" fit disabled />\n    <p class=\"form_field-hint\">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-state-error\">에러</label>\n    <DatePicker\n    input-id=\"dp-state-error\"\n    placeholder=\"날짜를 선택하세요\"\n    fit\n    error\n    :aria-invalid=\"true\"\n    aria-describedby=\"dp-state-error-msg\"\n    />\n    <p class=\"form_field-error\" id=\"dp-state-error-msg\" role=\"alert\">날짜를 선택해 주세요.</p>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"dp-state-success\">성공</label>\n    <DatePicker\n    input-id=\"dp-state-success\"\n    value=\"2024-06-18\"\n    fit\n    success\n    :aria-invalid=\"false\"\n    aria-describedby=\"dp-state-success-msg\"\n    />\n    <p class=\"form_field-success\" id=\"dp-state-success-msg\" role=\"status\">예약 가능한 날짜입니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { DatePicker },
    template: `<div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-state-placeholder">플레이스홀더</label>
        <DatePicker input-id="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-state-disabled">비활성</label>
        <DatePicker input-id="dp-state-disabled" value="2024-06-18" fit disabled />
        <p class="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-state-error">에러</label>
        <DatePicker
        input-id="dp-state-error"
        placeholder="날짜를 선택하세요"
        fit
        error
        :aria-invalid="true"
        aria-describedby="dp-state-error-msg"
        />
        <p class="form_field-error" id="dp-state-error-msg" role="alert">날짜를 선택해 주세요.</p>
      </div>
      <div class="form_field form_field_fit">
        <label class="form_field-label" for="dp-state-success">성공</label>
        <DatePicker
        input-id="dp-state-success"
        value="2024-06-18"
        fit
        success
        :aria-invalid="false"
        aria-describedby="dp-state-success-msg"
        />
        <p class="form_field-success" id="dp-state-success-msg" role="status">예약 가능한 날짜입니다.</p>
      </div>`,
  })),
};


export const Example = {
  name: "조합 예시",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "form_inline과 date_picker_range를 조합한 검색 필터 폼입니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\nimport Input from '@uxkm/ui/components/Input.vue';\n</script>\n\n<template>\n  <form class=\"form form_inline\" action=\"#\" method=\"get\">\n    <div class=\"form_field\">\n      <label class=\"form_field-label\" for=\"dp-example-keyword\">키워드</label>\n      <Input id=\"dp-example-keyword\" type=\"search\" placeholder=\"검색어\" style=\"min-width: 10rem;\" />\n    </div>\n    <div class=\"form_field\">\n      <span class=\"form_field-label\" id=\"dp-example-range-label\">기간</span>\n      <div class=\"date_picker_range\" role=\"group\" aria-labelledby=\"dp-example-range-label\">\n        <DatePicker size=\"sm\" placeholder=\"시작일\" aria-label=\"시작일\" style=\"min-width: 9rem;\" />\n        <span class=\"date_picker_sep\" aria-hidden=\"true\">~</span>\n        <DatePicker placeholder=\"종료일\" aria-label=\"종료일\" style=\"min-width: 9rem;\" />\n      </div>\n    </div>\n    <div class=\"form_actions\">\n      <Button type=\"submit\" variant=\"filled\" color=\"primary\" label=\"검색\" />\n      <Button type=\"reset\" variant=\"ghost\" label=\"초기화\" />\n    </div>\n  </form>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  disabled: false,
  error: false,
  success: false,
  open: true,
  placeholder: "입력하세요",
  value: "1",
  fit: false,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: "값",
  ariaLabel: "접근성 라벨"
},
  render: withDocsCanvasRender(() => ({
    components: { Button, DatePicker, Input },
    template: `<form class="form form_inline" action="#" method="get">
        <div class="form_field">
          <label class="form_field-label" for="dp-example-keyword">키워드</label>
          <Input id="dp-example-keyword" type="search" placeholder="검색어" style="min-width: 10rem;" />
        </div>
        <div class="form_field">
          <span class="form_field-label" id="dp-example-range-label">기간</span>
          <div class="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
            <DatePicker size="sm" placeholder="시작일" aria-label="시작일" style="min-width: 9rem;" />
            <span class="date_picker_sep" aria-hidden="true">~</span>
            <DatePicker placeholder="종료일" aria-label="종료일" style="min-width: 9rem;" />
          </div>
        </div>
        <div class="form_actions">
          <Button type="submit" variant="filled" color="primary" label="검색" />
          <Button type="reset" variant="ghost" label="초기화" />
        </div>
      </form>`,
  })),
};

