import type { FrameworkExample } from './FrameworkCode';

function examples(key: string, html: string, reactBody: string, vueBody: string): FrameworkExample[] {
  const react = `import { Calendar, CalendarFooter, CalendarGroup, CalendarHeader, CalendarMonth, CalendarNav, CalendarWeekdays, CalendarWheel, CalendarWheelColumn } from '@uxkm/react/calendar';\n\nexport function Example() {\n  return (\n${reactBody}\n  );\n}`;
  const vue = `<script setup>\nimport Calendar from '@uxkm/vue/calendar';\n</script>\n\n<template>\n${vueBody}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Calendar/Calendar.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Calendar/calendar.njk · ${key}`, code: `{# Calendar · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/calendar · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/calendar · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/calendar · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/calendar · ${key}`, code: react }
  ];
}

function calendarGrid({ values = [26, 27, 28, 29, 30, 31, ...Array.from({ length: 30 }, (_, index) => index + 1), 1, 2, 3, 4, 5, 6], selected = [15], today = 12, rangeStart, rangeEnd, events = [], disabled = [] }: { values?: number[]; selected?: number[]; today?: number; rangeStart?: number; rangeEnd?: number; events?: number[]; disabled?: number[] } = {}) {
  return `<div class="calendar_grid">\n${values.map((day, index) => {
    const otherMonth = values.length > 14 && (index < 6 || index >= 36);
    const isSelected = !otherMonth && (selected.includes(day) || day === rangeStart || day === rangeEnd);
    const classes = ['calendar_day', otherMonth && 'is-other-month', !otherMonth && day === today && 'is-today', isSelected && 'is-selected', day === rangeStart && 'is-range-start', day === rangeEnd && 'is-range-end', !otherMonth && rangeStart != null && rangeEnd != null && day > rangeStart && day < rangeEnd && 'is-in-range', !otherMonth && events.includes(day) && 'has-event', !otherMonth && disabled.includes(day) && 'is-disabled'].filter(Boolean).join(' ');
    const attrs = [otherMonth || disabled.includes(day) ? 'disabled' : '', !otherMonth && day === today ? 'aria-current="date"' : '', isSelected ? 'aria-selected="true"' : ''].filter(Boolean).join(' ');
    return `  <button class="${classes}" type="button"${attrs ? ` ${attrs}` : ''}>${day}</button>`;
  }).join('\n')}\n</div>`;
}
const days = calendarGrid();
const weekGrid = calendarGrid({ values: [9, 10, 11, 12, 13, 14, 15], selected: [14], today: 12 });
const rangeGrid = calendarGrid({ selected: [], rangeStart: 10, rangeEnd: 18 });
const eventGrid = calendarGrid({ events: [3, 7, 12, 15, 21, 28] });
const weekdays = `<div class="calendar_weekdays" aria-hidden="true"><span class="calendar_weekday">일</span><span class="calendar_weekday">월</span><span class="calendar_weekday">화</span><span class="calendar_weekday">수</span><span class="calendar_weekday">목</span><span class="calendar_weekday">금</span><span class="calendar_weekday">토</span></div>`;
const header = (title = '2024년 6월') => `<div class="calendar_header"><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="이전 달">‹</button><span class="calendar_title">${title}</span><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="다음 달">›</button></div>`;
const month = (classes = 'calendar') => `<div class="${classes}" role="application" aria-label="2024년 6월">\n  ${header()}\n  ${weekdays}\n  ${days}\n</div>`;

export const calendarFrameworkExamples = {
  basic: examples('basic', month(), `    <Calendar ariaLabel="2024년 6월" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`, `  <Calendar aria-label="2024년 6월" title="2024년 6월" />`),
  noHeader: examples('noHeader', `<div class="calendar calendar_no-header" role="application" aria-label="2024년 6월">${weekdays}${days}</div>`, `    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`, `  <Calendar no-header aria-label="2024년 6월">
    <template #weekdays><div class="calendar_weekdays" aria-hidden="true"><span v-for="label in ['일', '월', '화', '수', '목', '금', '토']" :key="label" class="calendar_weekday">{{ label }}</span></div></template>
  </Calendar>`),
  minimal: examples('minimal', `<div class="calendar calendar_minimal calendar_compact calendar_borderless" role="application" aria-label="2024년 6월 날짜만">${days}</div>`, `    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만"><CalendarMonth /></Calendar>`, `  <Calendar minimal compact borderless aria-label="2024년 6월 날짜만" />`),
  week: examples('week', `<div class="calendar calendar_week calendar_shadow" role="application" aria-label="6월 9일~15일"><div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>${weekdays}${weekGrid}</div>`, `    <Calendar week shadow ariaLabel="2024년 6월 9일~15일">
      <CalendarNav label="6월 9일 ~ 15일" />
      <CalendarWeekdays />
      <CalendarMonth week days={[9, 10, 11, 12, 13, 14, 15].map((day) => ({ day, today: day === 12, selected: day === 14 }))} />
    </Calendar>`, `  <Calendar week shadow aria-label="2024년 6월 9일~15일">
    <template #header>
      <div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>
    </template>
  </Calendar>`),
  wheel: examples('wheel', `<div class="calendar calendar_wheel calendar_shadow" role="group" aria-label="날짜 휠 선택">
  <div class="calendar_wheel-toolbar"><button type="button">취소</button><span class="calendar_wheel-title">날짜 선택</span><button type="button">완료</button></div>
  <div class="calendar_wheel-body">
    <div class="calendar_wheel-highlight" aria-hidden="true"></div>
    <div class="calendar_wheel-columns">
      <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="년"><li><button class="calendar_wheel-item">2023년</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">2024년</button></li><li><button class="calendar_wheel-item">2025년</button></li></ul></div>
      <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="월"><li><button class="calendar_wheel-item">5월</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">6월</button></li><li><button class="calendar_wheel-item">7월</button></li></ul></div>
      <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="일"><li><button class="calendar_wheel-item">14일</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">15일</button></li><li><button class="calendar_wheel-item">16일</button></li></ul></div>
    </div>
    <div class="calendar_wheel-fade" aria-hidden="true"></div>
  </div>
</div>`, `    <CalendarWheel shadow title="날짜 선택" cancelLabel="취소" confirmLabel="완료" ariaLabel="날짜 휠 선택">
      <CalendarWheelColumn label="년" items={Array.from({ length: 11 }, (_, index) => String(2019 + index) + '년')} selected="2024년" />
      <CalendarWheelColumn label="월" items={Array.from({ length: 12 }, (_, index) => String(index + 1) + '월')} selected="6월" />
      <CalendarWheelColumn label="일" items={Array.from({ length: 31 }, (_, index) => String(index + 1) + '일')} selected="15일" />
    </CalendarWheel>`, `  <Calendar wheel shadow title="날짜 선택" aria-label="날짜 휠 선택">
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="년"><li><button class="calendar_wheel-item">2023년</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">2024년</button></li><li><button class="calendar_wheel-item">2025년</button></li></ul></div>
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="월"><li><button class="calendar_wheel-item">5월</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">6월</button></li><li><button class="calendar_wheel-item">7월</button></li></ul></div>
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="일"><li><button class="calendar_wheel-item">14일</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">15일</button></li><li><button class="calendar_wheel-item">16일</button></li></ul></div>
  </Calendar>`),
  range: examples('range', `<div class="calendar" role="application" aria-label="2024년 6월 범위 선택">${header()}${weekdays}${rangeGrid}</div>`, `    <Calendar header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={10} rangeEnd={18} /></Calendar>`, `  <Calendar title="2024년 6월" :range-start="10" :range-end="18" />`),
  event: examples('event', `<div class="calendar calendar_weekends" role="application" aria-label="2024년 6월 이벤트">${header()}${weekdays}${eventGrid}</div>`, `    <Calendar weekends header={<CalendarHeader title="2024년 6월" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth events={[3, 7, 12, 15, 21, 28]} weekends /></Calendar>`, `  <Calendar weekends title="2024년 6월" :events="[3, 7, 12, 15, 21, 28]" />`),
  skin: examples('skin', `<div class="calendar_group">${month('calendar calendar_borderless')}${month('calendar calendar_ghost')}${month('calendar calendar_shadow')}</div>`, `    <CalendarGroup>
      <Calendar borderless header={<CalendarHeader title="Borderless" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar ghost header={<CalendarHeader title="Ghost" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar shadow header={<CalendarHeader title="Shadow" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`, `  <div class="calendar_group"><Calendar borderless title="Borderless" /><Calendar ghost title="Ghost" /><Calendar shadow title="Shadow" /></div>`),
  size: examples('size', `<div class="calendar_group">${month('calendar calendar_sm')}${month('calendar calendar_compact')}${month('calendar calendar_lg')}</div>`, `    <CalendarGroup>
      <Calendar size="sm" header={<CalendarHeader title="Small" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar compact header={<CalendarHeader title="Compact" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar size="lg" header={<CalendarHeader title="Large" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`, `  <div class="calendar_group"><Calendar size="sm" title="Small" /><Calendar compact title="Compact" /><Calendar size="lg" title="Large" /></div>`),
  footer: examples('footer', `<div class="calendar calendar_shadow" role="application" aria-label="2024년 6월 푸터 포함">${header()}${weekdays}${days}<div class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm">오늘</button><div class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm">초기화</button><button type="button" class="btn btn_filled color_primary btn_sm">확인</button></div></div></div>`, `    <Calendar shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />} footer={<CalendarFooter />}><CalendarMonth /></Calendar>`, `  <Calendar shadow title="2024년 6월" footer />`),
  dual: examples('dual', `<div class="calendar_group">${month('calendar calendar_compact calendar_shadow')}${month('calendar calendar_compact calendar_shadow').replaceAll('2024년 6월', '2024년 7월')}</div>`, `    <CalendarGroup>
      <Calendar compact shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={24} rangeEnd={30} /></Calendar>
      <Calendar compact shadow header={<CalendarHeader title="2024년 7월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={1} rangeEnd={5} /></Calendar>
    </CalendarGroup>`, `  <div class="calendar_group"><Calendar compact shadow title="2024년 6월" :range-start="24" :range-end="30" /><Calendar compact shadow title="2024년 7월" :range-start="1" :range-end="5" /></div>`),
  agenda: examples('agenda', `<div class="calendar calendar_agenda calendar_shadow" role="feed" aria-label="2024년 6월 일정">${header('6월 14일 ~ 20일')}<ol class="calendar_agenda-list"><li class="calendar_agenda-day is-today"><div class="calendar_agenda-date"><span class="calendar_agenda-weekday">토</span><span class="calendar_agenda-daynum">15</span></div><div class="calendar_agenda-body"><ul class="calendar_agenda-events"><li class="calendar_agenda-event color_primary"><span class="calendar_agenda-event-time">09:00</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">팀 스탠드업</span><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li><li class="calendar_agenda-event color_warning"><span class="calendar_agenda-event-time">15:30</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">QA 일정 점검</span><span class="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span></div></li></ul></div></li></ol></div>`, `    <Calendar agenda shadow role="feed" ariaLabel="2024년 6월 일정" header={<CalendarHeader title="6월 14일 ~ 20일" />}>
      <ol className="calendar_agenda-list">
        <li className="calendar_agenda-day is-today" aria-current="date">
          <div className="calendar_agenda-date"><span className="calendar_agenda-weekday">토</span><span className="calendar_agenda-daynum">15</span></div>
          <div className="calendar_agenda-body"><ul className="calendar_agenda-events"><li className="calendar_agenda-event color_primary"><span className="calendar_agenda-event-time">09:00</span><div className="calendar_agenda-event-main"><span className="calendar_agenda-event-title">팀 스탠드업</span><span className="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li></ul></div>
        </li>
      </ol>
    </Calendar>`, `  <Calendar agenda shadow title="6월 14일 ~ 20일" role="feed" aria-label="2024년 6월 일정">
    <ol class="calendar_agenda-list">
      <li class="calendar_agenda-day is-today" aria-current="date">
        <div class="calendar_agenda-date"><span class="calendar_agenda-weekday">토</span><span class="calendar_agenda-daynum">15</span></div>
        <div class="calendar_agenda-body"><ul class="calendar_agenda-events"><li class="calendar_agenda-event color_primary"><span class="calendar_agenda-event-time">09:00</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">팀 스탠드업</span><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li></ul></div>
      </li>
    </ol>
  </Calendar>`),
  state: examples('state', `<div class="calendar_group">${month('calendar calendar_readonly')}${month('calendar is-disabled')}</div>`, `    <>
      <Calendar readonly header={<CalendarHeader title="읽기 전용" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} readonly /></Calendar>
      <Calendar disabled header={<CalendarHeader title="비활성" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} disabled={[2, 3, 4, 5]} /></Calendar>
    </>`, `  <div class="calendar_group"><Calendar readonly title="읽기 전용" partial="14" :today="7" :selected="9" /><Calendar disabled title="비활성" partial="14" :today="7" :selected="9" :disabled-days="[2, 3, 4, 5]" /></div>`)
};
