import React from 'react';
import Button from './Button.jsx';
import Calendar from './Calendar.jsx';
import CalendarDay from './CalendarDay.jsx';
import CalendarFooter from './CalendarFooter.jsx';
import CalendarGrid from './CalendarGrid.jsx';
import CalendarGroup from './CalendarGroup.jsx';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarMonth from './CalendarMonth.jsx';
import CalendarNav from './CalendarNav.jsx';
import CalendarWeekdays from './CalendarWeekdays.jsx';
import CalendarWheel from './CalendarWheel.jsx';
import CalendarWheelColumn from './CalendarWheelColumn.jsx';
import Icon from './Icon.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  EVENT_DAYS,
  JUNE_WEEK_DAYS,
  JUNE_WEEK_LABEL,
  disabledPartialDays,
  julyDualDays,
  juneDualDays,
} from '@/data/calendar-demo';
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
    title: 'API · Calendar Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 aria-label · no-header는 ariaLabel · noHeader로 다룹니다.',
    tables: [{ columns: calendarPropColumns, rows: calendarProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarHeader Props',
    tables: [{ columns: calendarHeaderPropColumns, rows: calendarHeaderProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarNav Props',
    tables: [{ columns: calendarNavPropColumns, rows: calendarNavProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarWeekdays Props',
    tables: [
      { columns: calendarWeekdaysPropColumns, rows: calendarWeekdaysProps, codeColumn: 'name' },
    ],
  },
  {
    title: 'API · CalendarMonth Props',
    tables: [{ columns: calendarMonthPropColumns, rows: calendarMonthProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarGrid Props',
    tables: [{ columns: calendarGridPropColumns, rows: calendarGridProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarDay Props',
    tables: [{ columns: calendarDayPropColumns, rows: calendarDayProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarWheel Props',
    description:
      'Vue toolbar · footer 슬롯은 React toolbarContent · footerContent prop에 대응합니다.',
    tables: [{ columns: calendarWheelPropColumns, rows: calendarWheelProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarWheelColumn Props',
    tables: [
      {
        columns: calendarWheelColumnPropColumns,
        rows: calendarWheelColumnProps,
        codeColumn: 'name',
      },
    ],
  },
  {
    title: 'API · Calendar Children / Slots',
    description:
      'Vue header · weekdays · footer 슬롯은 React header · weekdays · footer prop에 대응합니다.',
    tables: [{ columns: calendarSlotColumns, rows: calendarSlots, codeColumn: 'name' }],
  },
  {
    title: 'API · CalendarHeader · Footer · Group Slots',
    tables: [
      { columns: calendarSlotColumns, rows: calendarHeaderSlots, codeColumn: 'name' },
      { columns: calendarSlotColumns, rows: calendarFooterSlots, codeColumn: 'name' },
      { columns: calendarSlotColumns, rows: calendarGroupSlots, codeColumn: 'name' },
    ],
  },
  {
    title: 'API · CalendarGrid · CalendarWheel Slots',
    tables: [
      { columns: calendarSlotColumns, rows: calendarGridSlots, codeColumn: 'name' },
      { columns: calendarSlotColumns, rows: calendarWheelSlots, codeColumn: 'name' },
    ],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: calendarClassColumns, rows: calendarClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: calendarTokenColumns, rows: calendarTokens, codeColumn: 'name' }],
  },
];

/** Docs·Canvas 동일 — Controls가 빈 Calendar를 추가하지 않도록 */
const calendarDemo = (docs) => withDocsCanvasRender(docs, docs);

const wheelYears = Array.from({ length: 11 }, (_, i) => `${2019 + i}년`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const wheelDays = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();
const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });

const playgroundArgs = {
  title: '제목',
  ariaLabel: '접근성 라벨',
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
  size: 'sm',
  role: 'application',
};

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
    title: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    noHeader: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    minimal: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    compact: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    borderless: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    shadow: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ghost: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    week: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    readonly: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    weekends: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    agenda: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    wheel: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'lg'" },
    },
    role: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Calendar
      {...args}
      ariaLabel="2024년 6월"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth />
    </Calendar>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function BasicExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: {
    title: '제목',
    ariaLabel: '접근성 라벨',
    size: 'sm',
    role: 'application',
  },
  render: calendarDemo(
    <Calendar
      ariaLabel="2024년 6월"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth />
    </Calendar>,
  ),
};

export const NoHeader = {
  name: '헤더 없음',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function NoHeaderExample() {
  return (
    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>,
  ),
};

export const Minimal = {
  name: '날짜만',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';

export function MinimalExample() {
  return (
    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>,
  ),
};

export const Week = {
  name: '주간',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarNav from '@uxkm/ui-react/components/CalendarNav.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';

export function WeekExample() {
  return (
    <>
      <Calendar week shadow ariaLabel={\`2024년 \${JUNE_WEEK_LABEL}\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarWeekdays />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
      <Calendar week compact borderless ariaLabel={\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <>
      <Calendar week shadow ariaLabel={`2024년 ${JUNE_WEEK_LABEL}`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarWeekdays />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
      <Calendar week compact borderless ariaLabel={`2024년 ${JUNE_WEEK_LABEL} (컴팩트)`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
    </>,
  ),
};

export const Wheel = {
  name: '휠 (iOS 스타일)',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarWheel from '@uxkm/ui-react/components/CalendarWheel.jsx';
import CalendarWheelColumn from '@uxkm/ui-react/components/CalendarWheelColumn.jsx';

const wheelYears = Array.from({ length: 11 }, (_, i) => \`\${2019 + i}년\`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => \`\${i + 1}월\`);
const wheelDays = Array.from({ length: 31 }, (_, i) => \`\${i + 1}일\`);

export function WheelExample() {
  return (
    <>
      <CalendarWheel
        shadow
        title="날짜 선택"
        cancelLabel="취소"
        confirmLabel="완료"
        ariaLabel="날짜 휠 선택"
      >
        <CalendarWheelColumn
          label="년"
          items={wheelYears}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={wheelMonths}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={wheelDays}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarWheel
        borderless
        footer
        toolbar={false}
        ariaLabel="날짜 휠 선택 (하단 버튼)"
        footerContent={
          <>
            <Button variant="ghost" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>
        }
      >
        <CalendarWheelColumn
          label="년"
          items={['2024년']}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={['6월']}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={['15일']}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn
            label="년"
            items={['2024년']}
            selected="2024년"
            prevLabel="이전 년"
            nextLabel="다음 년"
          />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="년·월"
          ariaLabel="년·월 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">년·월</span>}
        >
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="월·일"
          ariaLabel="월·일 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">월·일</span>}
        >
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
          <CalendarWheelColumn label="일" items={['15일']} selected="15일" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <>
      <CalendarWheel
        shadow
        title="날짜 선택"
        cancelLabel="취소"
        confirmLabel="완료"
        ariaLabel="날짜 휠 선택"
      >
        <CalendarWheelColumn
          label="년"
          items={wheelYears}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={wheelMonths}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={wheelDays}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarWheel
        borderless
        footer
        toolbar={false}
        ariaLabel="날짜 휠 선택 (하단 버튼)"
        footerContent={
          <>
            <Button variant="ghost" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>
        }
      >
        <CalendarWheelColumn
          label="년"
          items={['2024년']}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={['6월']}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={['15일']}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn
            label="년"
            items={['2024년']}
            selected="2024년"
            prevLabel="이전 년"
            nextLabel="다음 년"
          />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="년·월"
          ariaLabel="년·월 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">년·월</span>}
        >
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="월·일"
          ariaLabel="월·일 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">월·일</span>}
        >
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
          <CalendarWheelColumn label="일" items={['15일']} selected="15일" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </>,
  ),
};

export const Range = {
  name: '범위 선택',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function RangeExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월 범위 선택"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth rangeStart={10} rangeEnd={18} />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <Calendar
      ariaLabel="2024년 6월 범위 선택"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth rangeStart={10} rangeEnd={18} />
    </Calendar>,
  ),
};

export const Event = {
  name: '이벤트 마커',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';

export function EventExample() {
  return (
    <Calendar
      weekends
      ariaLabel="2024년 6월 이벤트"
      header={<CalendarHeader title="2024년 6월" showNav={false} />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth events={EVENT_DAYS} weekends />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <Calendar
      weekends
      ariaLabel="2024년 6월 이벤트"
      header={<CalendarHeader title="2024년 6월" showNav={false} />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth events={EVENT_DAYS} weekends />
    </Calendar>,
  ),
};

export const Skin = {
  name: '스킨',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SkinExample() {
  return (
    <CalendarGroup>
      <Calendar
        borderless
        ariaLabel="Borderless"
        header={<CalendarHeader title="Borderless" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        ghost
        ariaLabel="Ghost"
        header={<CalendarHeader title="Ghost" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        shadow
        ariaLabel="Shadow"
        header={<CalendarHeader title="Shadow" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </CalendarGroup>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <CalendarGroup>
      <Calendar
        borderless
        ariaLabel="Borderless"
        header={<CalendarHeader title="Borderless" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        ghost
        ariaLabel="Ghost"
        header={<CalendarHeader title="Ghost" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        shadow
        ariaLabel="Shadow"
        header={<CalendarHeader title="Shadow" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </CalendarGroup>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SizeExample() {
  return (
    <CalendarGroup>
      <Calendar
        size="sm"
        ariaLabel="Small"
        header={<CalendarHeader title="Small" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        compact
        ariaLabel="Compact"
        header={<CalendarHeader title="Compact" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        size="lg"
        ariaLabel="Large"
        header={<CalendarHeader title="Large" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </CalendarGroup>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <CalendarGroup>
      <Calendar
        size="sm"
        ariaLabel="Small"
        header={<CalendarHeader title="Small" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        compact
        ariaLabel="Compact"
        header={<CalendarHeader title="Compact" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        size="lg"
        ariaLabel="Large"
        header={<CalendarHeader title="Large" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </CalendarGroup>,
  ),
};

export const Footer = {
  name: '푸터',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarFooter from '@uxkm/ui-react/components/CalendarFooter.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function FooterExample() {
  return (
    <Calendar
      shadow
      ariaLabel="2024년 6월 푸터 포함"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
      footer={<CalendarFooter />}
    >
      <CalendarMonth />
    </Calendar>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <Calendar
      shadow
      ariaLabel="2024년 6월 푸터 포함"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
      footer={<CalendarFooter />}
    >
      <CalendarMonth />
    </Calendar>,
  ),
};

export const Dual = {
  name: '이중 패널',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';

const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();

export function DualExample() {
  return (
    <CalendarGroup>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 6월"
        header={
          <div className="calendar_header">
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="이전 달"
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
            <span className="calendar_title">2024년 6월</span>
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJuneDays} weekends />
      </Calendar>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 7월"
        header={
          <div className="calendar_header">
            <span className="calendar_title">2024년 7월</span>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="다음 달"
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJulyDays} weekends />
      </Calendar>
    </CalendarGroup>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <CalendarGroup>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 6월"
        header={
          <div className="calendar_header">
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="이전 달"
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
            <span className="calendar_title">2024년 6월</span>
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJuneDays} weekends />
      </Calendar>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 7월"
        header={
          <div className="calendar_header">
            <span className="calendar_title">2024년 7월</span>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="다음 달"
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJulyDays} weekends />
      </Calendar>
    </CalendarGroup>,
  ),
};

export const Agenda = {
  name: '세로 일정',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';

export function AgendaExample() {
  return (
    <>
      <Calendar
        agenda
        shadow
        role="feed"
        ariaLabel="2024년 6월 일정"
        header={<CalendarHeader title="6월 14일 ~ 20일" prevLabel="이전 주" nextLabel="다음 주" />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
      <Calendar
        agenda
        borderless
        className="calendar_agenda_compact"
        role="feed"
        ariaLabel="2024년 6월 15일 일정 (컴팩트)"
        header={<CalendarHeader title="6월 15일 (토)" showNav={false} />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <>
      <Calendar
        agenda
        shadow
        role="feed"
        ariaLabel="2024년 6월 일정"
        header={<CalendarHeader title="6월 14일 ~ 20일" prevLabel="이전 주" nextLabel="다음 주" />}
      >
        <ol className="calendar_agenda-list">
          <li className="calendar_agenda-day">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">금</span>
              <span className="calendar_agenda-daynum">14</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">14:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">디자인 리뷰</span>
                    <span className="calendar_agenda-event-desc">컴포넌트 가이드 UI 시안 검토</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day is-saturday is-today" aria-current="date">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">토</span>
              <span className="calendar_agenda-daynum">15</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_success">
                  <span className="calendar_agenda-event-time">09:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">팀 스탠드업</span>
                    <span className="calendar_agenda-event-desc">주간 진행 상황 공유</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_warning">
                  <span className="calendar_agenda-event-time">15:30</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">QA 일정 점검</span>
                    <span className="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span>
                    <div className="calendar_agenda-event-meta">
                      <span className="tag tag_sm color_warning">진행 중</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day is-sunday is-empty">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">일</span>
              <span className="calendar_agenda-daynum">16</span>
            </div>
            <div className="calendar_agenda-body">
              <p className="calendar_agenda-empty">일정 없음</p>
            </div>
          </li>
          <li className="calendar_agenda-day is-selected" aria-selected="true">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">월</span>
              <span className="calendar_agenda-daynum">17</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">10:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">기획 회의</span>
                    <span className="calendar_agenda-event-desc">3분기 로드맵 논의</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_info">
                  <span className="calendar_agenda-event-time">13:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">점심 미팅</span>
                    <span className="calendar_agenda-event-desc">파트너사 담당자</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_danger">
                  <span className="calendar_agenda-event-time">18:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">배포 마감</span>
                    <span className="calendar_agenda-event-desc">v2.4.0 릴리스</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">화</span>
              <span className="calendar_agenda-daynum">18</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_success">
                  <span className="calendar_agenda-event-time">종일</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">워크숍</span>
                    <span className="calendar_agenda-event-desc">디자인 시스템 심화 과정</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </Calendar>
      <Calendar
        agenda
        borderless
        className="calendar_agenda_compact"
        role="feed"
        ariaLabel="2024년 6월 15일 일정 (컴팩트)"
        header={<CalendarHeader title="6월 15일 (토)" showNav={false} />}
      >
        <ol className="calendar_agenda-list">
          <li className="calendar_agenda-day is-saturday is-today" aria-current="date">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">토</span>
              <span className="calendar_agenda-daynum">15</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">09:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">팀 스탠드업</span>
                    <span className="calendar_agenda-event-desc">15분 · Zoom</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_warning">
                  <span className="calendar_agenda-event-time">15:30</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">QA 점검</span>
                    <span className="calendar_agenda-event-desc">회의실 B</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </Calendar>
    </>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다.',
      },
      source: {
        code: `import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';

const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });

export function StateExample() {
  return (
    <>
      <Calendar
        readonly
        ariaLabel="읽기 전용 캘린더"
        header={<CalendarHeader title="읽기 전용" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar
        disabled
        ariaLabel="비활성 캘린더"
        header={<CalendarHeader title="비활성" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={disabledDays} />
      </Calendar>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: calendarDemo(
    <>
      <Calendar
        readonly
        ariaLabel="읽기 전용 캘린더"
        header={<CalendarHeader title="읽기 전용" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar
        disabled
        ariaLabel="비활성 캘린더"
        header={<CalendarHeader title="비활성" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={disabledDays} />
      </Calendar>
    </>,
  ),
};
