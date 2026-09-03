import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualCalendar, {
  CalendarFooter as ActualCalendarFooter,
  CalendarGroup as ActualCalendarGroup,
  CalendarHeader as ActualCalendarHeader,
  CalendarMonth as ActualCalendarMonth,
  CalendarNav as ActualCalendarNav,
  CalendarWeekdays as ActualCalendarWeekdays,
  CalendarWheel as ActualCalendarWheel,
  CalendarWheelColumn as ActualCalendarWheelColumn,
} from '../../react/src/components/data-display/Calendar/Calendar.jsx';
import {
  ariaLabelArg,
  booleanControlArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Calendar = ActualCalendar as React.ComponentType<any>;
const CalendarFooter = ActualCalendarFooter as React.ComponentType<any>;
const CalendarGroup = ActualCalendarGroup as React.ComponentType<any>;
const CalendarHeader = ActualCalendarHeader as React.ComponentType<any>;
const CalendarMonth = ActualCalendarMonth as React.ComponentType<any>;
const CalendarNav = ActualCalendarNav as React.ComponentType<any>;
const CalendarWeekdays = ActualCalendarWeekdays as React.ComponentType<any>;
const CalendarWheel = ActualCalendarWheel as React.ComponentType<any>;
const CalendarWheelColumn = ActualCalendarWheelColumn as React.ComponentType<any>;

type CalendarStoryArgs = {
  size?: '' | 'sm' | 'lg';
  compact?: boolean;
  borderless?: boolean;
  shadow?: boolean;
  ghost?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  weekends?: boolean;
  noHeader?: boolean;
  minimal?: boolean;
  week?: boolean;
  agenda?: boolean;
  wheel?: boolean;
  title?: string;
  ariaLabel?: string;
};

function calendarPropsFromArgs(args: Record<string, unknown>) {
  return {
    size: args.size === 'sm' || args.size === 'lg' ? args.size : '',
    compact: args.compact === true,
    borderless: args.borderless === true,
    shadow: args.shadow === true,
    ghost: args.ghost === true,
    readonly: args.readonly === true,
    disabled: args.disabled === true,
    weekends: args.weekends === true,
    noHeader: args.noHeader === true,
    minimal: args.minimal === true,
    week: args.week === true,
    agenda: args.agenda === true,
    wheel: args.wheel === true,
    title: typeof args.title === 'string' && args.title ? args.title : undefined,
    ariaLabel: typeof args.ariaLabel === 'string' ? args.ariaLabel : undefined,
  };
}

const calendarControlKeys = [
  'size',
  'compact',
  'borderless',
  'shadow',
  'ghost',
  'readonly',
  'disabled',
  'weekends',
  'noHeader',
  'minimal',
  'week',
  'agenda',
  'wheel',
  'title',
  'ariaLabel',
] as const;

const meta = {
  title: '데이터 표시/Calendar',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [...calendarControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    size: '',
    compact: false,
    borderless: false,
    shadow: false,
    ghost: false,
    readonly: false,
    disabled: false,
    weekends: false,
    noHeader: false,
    minimal: false,
    week: false,
    agenda: false,
    wheel: false,
    title: '2024년 6월',
    ariaLabel: '2024년 6월',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['', 'sm', 'lg'],
      labels: { '': '기본', sm: 'Small', lg: 'Large' },
      type: 'string',
    },
    compact: booleanControlArg,
    borderless: booleanControlArg,
    shadow: booleanControlArg,
    ghost: booleanControlArg,
    readonly: booleanControlArg,
    disabled: booleanControlArg,
    weekends: booleanControlArg,
    noHeader: booleanControlArg,
    minimal: booleanControlArg,
    week: booleanControlArg,
    agenda: booleanControlArg,
    wheel: booleanControlArg,
    title: stringControlArg,
    ariaLabel: ariaLabelArg,
    header: { table: { disable: true } },
    weekdays: { table: { disable: true } },
    footer: { table: { disable: true } },
    role: { table: { disable: true } },
  },
} satisfies Meta<CalendarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children, stack = false }: { children: React.ReactNode; stack?: boolean }) => (
  <div className="btn-demo">
    <div className={stack ? 'demo-stack' : 'calendar_group'}>{children}</div>
  </div>
);
const header = (title = '2024년 6월', showNav = true) => <CalendarHeader title={title} showNav={showNav} />;
const weekdays = <CalendarWeekdays />;
const weekDays = [9, 10, 11, 12, 13, 14, 15].map((day, index) => ({
  day,
  today: day === 12,
  selected: day === 14,
  sunday: index === 0,
  saturday: index === 6,
}));
const years = Array.from({ length: 11 }, (_, index) => `${2019 + index}년`);
const months = Array.from({ length: 12 }, (_, index) => `${index + 1}월`);
const days = Array.from({ length: 31 }, (_, index) => `${index + 1}일`);

function CalendarPlayground({ args }: { args: Record<string, unknown> }) {
  const props = calendarPropsFromArgs(args);
  const showHeader = !props.noHeader && !props.minimal && !props.week;
  const showWeekdays = !props.minimal && !props.agenda && !props.wheel;

  return (
    <Demo>
      <Calendar
        {...props}
        ariaLabel={props.ariaLabel || '2024년 6월'}
        header={showHeader ? header(props.title || '2024년 6월') : undefined}
        weekdays={showWeekdays ? weekdays : undefined}
        title={undefined}
      >
        {props.week ? (
          <>
            <CalendarNav label="6월 9일 ~ 15일" />
            <CalendarMonth week days={weekDays} weekends={props.weekends} />
          </>
        ) : (
          <CalendarMonth weekends={props.weekends} />
        )}
      </Calendar>
    </Demo>
  );
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <CalendarPlayground args={args} />,
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Demo>
      <Calendar ariaLabel="2024년 6월" header={header()} weekdays={weekdays}>
        <CalendarMonth />
      </Calendar>
    </Demo>
  ),
};

export const NoHeader: Story = {
  name: '헤더 없음',
  render: () => (
    <Demo>
      <Calendar noHeader ariaLabel="2024년 6월" weekdays={weekdays}>
        <CalendarMonth />
      </Calendar>
    </Demo>
  ),
};

export const Minimal: Story = {
  name: '날짜만',
  render: () => (
    <Demo>
      <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
        <CalendarMonth />
      </Calendar>
    </Demo>
  ),
};

export const Week: Story = {
  name: '주간',
  render: () => (
    <Demo stack>
      <Calendar week shadow ariaLabel="2024년 6월 9일~15일">
        <CalendarNav label="6월 9일 ~ 15일" />
        <CalendarWeekdays />
        <CalendarMonth week days={weekDays} />
      </Calendar>
      <Calendar week compact borderless ariaLabel="2024년 6월 9일~15일 컴팩트">
        <CalendarNav label="6월 9일 ~ 15일" />
        <CalendarMonth week days={weekDays} />
      </Calendar>
    </Demo>
  ),
};

export const Wheel: Story = {
  name: '휠 (iOS 스타일)',
  render: () => (
    <Demo stack>
      <CalendarWheel shadow title="날짜 선택" cancelLabel="취소" confirmLabel="완료" ariaLabel="날짜 휠 선택">
        <CalendarWheelColumn label="년" items={years} selected="2024년" />
        <CalendarWheelColumn label="월" items={months} selected="6월" />
        <CalendarWheelColumn label="일" items={days} selected="15일" />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn label="년" items={years.slice(4, 7)} selected="2024년" />
        </CalendarWheel>
        <CalendarWheel shadow toolbarContent={<span className="calendar_wheel-title">년·월</span>} ariaLabel="년·월 선택">
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </Demo>
  ),
};

export const Range: Story = {
  name: '범위 선택',
  render: () => (
    <Demo>
      <Calendar ariaLabel="2024년 6월 범위 선택" header={header()} weekdays={weekdays}>
        <CalendarMonth rangeStart={10} rangeEnd={18} />
      </Calendar>
    </Demo>
  ),
};

export const Event: Story = {
  name: '이벤트 마커',
  render: () => (
    <Demo>
      <Calendar weekends ariaLabel="2024년 6월 이벤트" header={header('2024년 6월', false)} weekdays={weekdays}>
        <CalendarMonth events={[3, 7, 12, 15, 21, 28]} weekends />
      </Calendar>
    </Demo>
  ),
};

export const Skin: Story = {
  name: '스킨',
  render: () => (
    <Demo>
      <Calendar borderless ariaLabel="Borderless" header={header('Borderless', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar ghost ariaLabel="Ghost" header={header('Ghost', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar shadow ariaLabel="Shadow" header={header('Shadow', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </Demo>
  ),
};

export const Size: Story = {
  name: '크기',
  render: () => (
    <Demo>
      <Calendar size="sm" ariaLabel="Small" header={header('Small', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar compact ariaLabel="Compact" header={header('Compact', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar size="lg" ariaLabel="Large" header={header('Large', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </Demo>
  ),
};

export const Footer: Story = {
  name: '푸터',
  render: () => (
    <Demo>
      <Calendar shadow ariaLabel="2024년 6월 푸터 포함" header={header()} weekdays={weekdays} footer={<CalendarFooter />}>
        <CalendarMonth />
      </Calendar>
    </Demo>
  ),
};

export const Dual: Story = {
  name: '이중 패널',
  render: () => (
    <Demo>
      <Calendar compact shadow weekends ariaLabel="2024년 6월" header={header('2024년 6월')} weekdays={weekdays}>
        <CalendarMonth weekends rangeStart={24} rangeEnd={30} />
      </Calendar>
      <Calendar compact shadow weekends ariaLabel="2024년 7월" header={header('2024년 7월')} weekdays={weekdays}>
        <CalendarMonth weekends rangeStart={1} rangeEnd={5} />
      </Calendar>
    </Demo>
  ),
};

const EventItem = ({
  time,
  title,
  description,
  color = 'primary',
}: {
  time: string;
  title: string;
  description: string;
  color?: string;
}) => (
  <li className={`calendar_agenda-event color_${color}`}>
    <span className="calendar_agenda-event-time">{time}</span>
    <div className="calendar_agenda-event-main">
      <span className="calendar_agenda-event-title">{title}</span>
      <span className="calendar_agenda-event-desc">{description}</span>
    </div>
  </li>
);

export const Agenda: Story = {
  name: '세로 일정',
  render: () => (
    <Demo stack>
      <Calendar agenda shadow role="feed" ariaLabel="2024년 6월 일정" header={header('6월 14일 ~ 20일')}>
        <ol className="calendar_agenda-list">
          <li className="calendar_agenda-day">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">금</span>
              <span className="calendar_agenda-daynum">14</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <EventItem time="14:00" title="디자인 리뷰" description="컴포넌트 가이드 UI 시안 검토" />
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
                <EventItem time="09:00" title="팀 스탠드업" description="주간 진행 상황 공유" color="success" />
                <EventItem time="15:30" title="QA 일정 점검" description="캘린더 컴포넌트 데모 확인" color="warning" />
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
        </ol>
      </Calendar>
    </Demo>
  ),
};

export const State: Story = {
  name: '상태',
  render: () => (
    <Demo stack>
      <Calendar readonly ariaLabel="읽기 전용 캘린더" header={header('읽기 전용', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar disabled ariaLabel="비활성 캘린더" header={header('비활성', false)} weekdays={weekdays}>
        <CalendarMonth partial={14} today={7} selected={9} disabled={[2, 3, 4, 5]} />
      </Calendar>
    </Demo>
  ),
};
