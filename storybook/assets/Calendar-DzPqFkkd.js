import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Calendar.stories-Bw6PUsmp.js";import{i as _,r as v}from"./react-DSvVgjCn.js";import{c as y,r as b,u as x}from"./blocks-CkHyEh4O.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-D9Q6nkXJ.js";function E(e,t,n,r){let i=`import { Calendar, CalendarFooter, CalendarGroup, CalendarHeader, CalendarMonth, CalendarNav, CalendarWeekdays, CalendarWheel, CalendarWheelColumn } from '@uxkm/react/calendar';\n\nexport function Example() {\n  return (\n${n}\n  );\n}`,a=`<script setup>\nimport Calendar from '@uxkm/vue/calendar';\n<\/script>\n\n<template>\n${r}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Calendar/Calendar.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Calendar/calendar.njk · ${e}`,code:`{# Calendar · ${e} #}\n${t}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/calendar · ${e}`,code:a},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/calendar · ${e}`,code:a},{id:`react`,label:`React`,fileName:`@uxkm/react/calendar · ${e}`,code:i},{id:`next`,label:`Next`,fileName:`@uxkm/react/calendar · ${e}`,code:i}]}function D({values:e=[26,27,28,29,30,31,...Array.from({length:30},(e,t)=>t+1),1,2,3,4,5,6],selected:t=[15],today:n=12,rangeStart:r,rangeEnd:i,events:a=[],disabled:o=[]}={}){return`<div class="calendar_grid">\n${e.map((s,c)=>{let l=e.length>14&&(c<6||c>=36),u=!l&&(t.includes(s)||s===r||s===i),d=[`calendar_day`,l&&`is-other-month`,!l&&s===n&&`is-today`,u&&`is-selected`,s===r&&`is-range-start`,s===i&&`is-range-end`,!l&&r!=null&&i!=null&&s>r&&s<i&&`is-in-range`,!l&&a.includes(s)&&`has-event`,!l&&o.includes(s)&&`is-disabled`].filter(Boolean).join(` `),f=[l||o.includes(s)?`disabled`:``,!l&&s===n?`aria-current="date"`:``,u?`aria-selected="true"`:``].filter(Boolean).join(` `);return`  <button class="${d}" type="button"${f?` ${f}`:``}>${s}</button>`}).join(`
`)}\n</div>`}var O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{O=D(),k=D({values:[9,10,11,12,13,14,15],selected:[14],today:12}),A=D({selected:[],rangeStart:10,rangeEnd:18}),j=D({events:[3,7,12,15,21,28]}),M=`<div class="calendar_weekdays" aria-hidden="true"><span class="calendar_weekday">일</span><span class="calendar_weekday">월</span><span class="calendar_weekday">화</span><span class="calendar_weekday">수</span><span class="calendar_weekday">목</span><span class="calendar_weekday">금</span><span class="calendar_weekday">토</span></div>`,N=(e=`2024년 6월`)=>`<div class="calendar_header"><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="이전 달">‹</button><span class="calendar_title">${e}</span><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="다음 달">›</button></div>`,P=(e=`calendar`)=>`<div class="${e}" role="application" aria-label="2024년 6월">\n  ${N()}\n  ${M}\n  ${O}\n</div>`,F={basic:E(`basic`,P(),`    <Calendar ariaLabel="2024년 6월" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`,`  <Calendar aria-label="2024년 6월" title="2024년 6월" />`),noHeader:E(`noHeader`,`<div class="calendar calendar_no-header" role="application" aria-label="2024년 6월">${M}${O}</div>`,`    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`,`  <Calendar no-header aria-label="2024년 6월">
    <template #weekdays><div class="calendar_weekdays" aria-hidden="true"><span v-for="label in ['일', '월', '화', '수', '목', '금', '토']" :key="label" class="calendar_weekday">{{ label }}</span></div></template>
  </Calendar>`),minimal:E(`minimal`,`<div class="calendar calendar_minimal calendar_compact calendar_borderless" role="application" aria-label="2024년 6월 날짜만">${O}</div>`,`    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만"><CalendarMonth /></Calendar>`,`  <Calendar minimal compact borderless aria-label="2024년 6월 날짜만" />`),week:E(`week`,`<div class="calendar calendar_week calendar_shadow" role="application" aria-label="6월 9일~15일"><div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>${M}${k}</div>`,`    <Calendar week shadow ariaLabel="2024년 6월 9일~15일">
      <CalendarNav label="6월 9일 ~ 15일" />
      <CalendarWeekdays />
      <CalendarMonth week days={[9, 10, 11, 12, 13, 14, 15].map((day) => ({ day, today: day === 12, selected: day === 14 }))} />
    </Calendar>`,`  <Calendar week shadow aria-label="2024년 6월 9일~15일">
    <template #header>
      <div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>
    </template>
  </Calendar>`),wheel:E(`wheel`,`<div class="calendar calendar_wheel calendar_shadow" role="group" aria-label="날짜 휠 선택">
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
</div>`,`    <CalendarWheel shadow title="날짜 선택" cancelLabel="취소" confirmLabel="완료" ariaLabel="날짜 휠 선택">
      <CalendarWheelColumn label="년" items={Array.from({ length: 11 }, (_, index) => String(2019 + index) + '년')} selected="2024년" />
      <CalendarWheelColumn label="월" items={Array.from({ length: 12 }, (_, index) => String(index + 1) + '월')} selected="6월" />
      <CalendarWheelColumn label="일" items={Array.from({ length: 31 }, (_, index) => String(index + 1) + '일')} selected="15일" />
    </CalendarWheel>`,`  <Calendar wheel shadow title="날짜 선택" aria-label="날짜 휠 선택">
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="년"><li><button class="calendar_wheel-item">2023년</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">2024년</button></li><li><button class="calendar_wheel-item">2025년</button></li></ul></div>
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="월"><li><button class="calendar_wheel-item">5월</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">6월</button></li><li><button class="calendar_wheel-item">7월</button></li></ul></div>
    <div class="calendar_wheel-column"><ul class="calendar_wheel-list" role="listbox" aria-label="일"><li><button class="calendar_wheel-item">14일</button></li><li><button class="calendar_wheel-item is-selected" aria-selected="true">15일</button></li><li><button class="calendar_wheel-item">16일</button></li></ul></div>
  </Calendar>`),range:E(`range`,`<div class="calendar" role="application" aria-label="2024년 6월 범위 선택">${N()}${M}${A}</div>`,`    <Calendar header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={10} rangeEnd={18} /></Calendar>`,`  <Calendar title="2024년 6월" :range-start="10" :range-end="18" />`),event:E(`event`,`<div class="calendar calendar_weekends" role="application" aria-label="2024년 6월 이벤트">${N()}${M}${j}</div>`,`    <Calendar weekends header={<CalendarHeader title="2024년 6월" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth events={[3, 7, 12, 15, 21, 28]} weekends /></Calendar>`,`  <Calendar weekends title="2024년 6월" :events="[3, 7, 12, 15, 21, 28]" />`),skin:E(`skin`,`<div class="calendar_group">${P(`calendar calendar_borderless`)}${P(`calendar calendar_ghost`)}${P(`calendar calendar_shadow`)}</div>`,`    <CalendarGroup>
      <Calendar borderless header={<CalendarHeader title="Borderless" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar ghost header={<CalendarHeader title="Ghost" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar shadow header={<CalendarHeader title="Shadow" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar borderless title="Borderless" /><Calendar ghost title="Ghost" /><Calendar shadow title="Shadow" /></div>`),size:E(`size`,`<div class="calendar_group">${P(`calendar calendar_sm`)}${P(`calendar calendar_compact`)}${P(`calendar calendar_lg`)}</div>`,`    <CalendarGroup>
      <Calendar size="sm" header={<CalendarHeader title="Small" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar compact header={<CalendarHeader title="Compact" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar size="lg" header={<CalendarHeader title="Large" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar size="sm" title="Small" /><Calendar compact title="Compact" /><Calendar size="lg" title="Large" /></div>`),footer:E(`footer`,`<div class="calendar calendar_shadow" role="application" aria-label="2024년 6월 푸터 포함">${N()}${M}${O}<div class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm">오늘</button><div class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm">초기화</button><button type="button" class="btn btn_filled color_primary btn_sm">확인</button></div></div></div>`,`    <Calendar shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />} footer={<CalendarFooter />}><CalendarMonth /></Calendar>`,`  <Calendar shadow title="2024년 6월" footer />`),dual:E(`dual`,`<div class="calendar_group">${P(`calendar calendar_compact calendar_shadow`)}${P(`calendar calendar_compact calendar_shadow`).replaceAll(`2024년 6월`,`2024년 7월`)}</div>`,`    <CalendarGroup>
      <Calendar compact shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={24} rangeEnd={30} /></Calendar>
      <Calendar compact shadow header={<CalendarHeader title="2024년 7월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={1} rangeEnd={5} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar compact shadow title="2024년 6월" :range-start="24" :range-end="30" /><Calendar compact shadow title="2024년 7월" :range-start="1" :range-end="5" /></div>`),agenda:E(`agenda`,`<div class="calendar calendar_agenda calendar_shadow" role="feed" aria-label="2024년 6월 일정">${N(`6월 14일 ~ 20일`)}<ol class="calendar_agenda-list"><li class="calendar_agenda-day is-today"><div class="calendar_agenda-date"><span class="calendar_agenda-weekday">토</span><span class="calendar_agenda-daynum">15</span></div><div class="calendar_agenda-body"><ul class="calendar_agenda-events"><li class="calendar_agenda-event color_primary"><span class="calendar_agenda-event-time">09:00</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">팀 스탠드업</span><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li><li class="calendar_agenda-event color_warning"><span class="calendar_agenda-event-time">15:30</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">QA 일정 점검</span><span class="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span></div></li></ul></div></li></ol></div>`,`    <Calendar agenda shadow role="feed" ariaLabel="2024년 6월 일정" header={<CalendarHeader title="6월 14일 ~ 20일" />}>
      <ol className="calendar_agenda-list">
        <li className="calendar_agenda-day is-today" aria-current="date">
          <div className="calendar_agenda-date"><span className="calendar_agenda-weekday">토</span><span className="calendar_agenda-daynum">15</span></div>
          <div className="calendar_agenda-body"><ul className="calendar_agenda-events"><li className="calendar_agenda-event color_primary"><span className="calendar_agenda-event-time">09:00</span><div className="calendar_agenda-event-main"><span className="calendar_agenda-event-title">팀 스탠드업</span><span className="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li></ul></div>
        </li>
      </ol>
    </Calendar>`,`  <Calendar agenda shadow title="6월 14일 ~ 20일" role="feed" aria-label="2024년 6월 일정">
    <ol class="calendar_agenda-list">
      <li class="calendar_agenda-day is-today" aria-current="date">
        <div class="calendar_agenda-date"><span class="calendar_agenda-weekday">토</span><span class="calendar_agenda-daynum">15</span></div>
        <div class="calendar_agenda-body"><ul class="calendar_agenda-events"><li class="calendar_agenda-event color_primary"><span class="calendar_agenda-event-time">09:00</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">팀 스탠드업</span><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li></ul></div>
      </li>
    </ol>
  </Calendar>`),state:E(`state`,`<div class="calendar_group">${P(`calendar calendar_readonly`)}${P(`calendar is-disabled`)}</div>`,`    <>
      <Calendar readonly header={<CalendarHeader title="읽기 전용" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} readonly /></Calendar>
      <Calendar disabled header={<CalendarHeader title="비활성" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} disabled={[2, 3, 4, 5]} /></Calendar>
    </>`,`  <div class="calendar_group"><Calendar readonly title="읽기 전용" partial="14" :today="7" :selected="9" /><Calendar disabled title="비활성" partial="14" :today="7" :selected="9" :disabled-days="[2, 3, 4, 5]" /></div>`)}})))()}var L,R,z,B,V,H,U;function W(){return(W=e((()=>{L=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],R=(e,t,n)=>({title:e,description:n,tables:[{columns:L,rows:t}]}),z=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),B=[{name:`title`,type:`string`,default:`—`,description:`기본 헤더 제목`},{name:`ariaLabel`,type:`string`,default:`—`,description:`캘린더 접근성 라벨`},{name:`size`,type:`'' | 'sm' | 'lg'`,default:`''`,description:`셀과 패딩 크기`},{name:`noHeader · minimal · compact`,type:`boolean`,default:`false`,description:`헤더 생략·날짜 전용·컴팩트 레이아웃`},{name:`borderless · shadow · ghost`,type:`boolean`,default:`false`,description:`외형 스킨`},{name:`week · agenda · wheel`,type:`boolean`,default:`false`,description:`주간·세로 일정·휠 레이아웃`},{name:`readonly · disabled`,type:`boolean`,default:`false`,description:`읽기 전용·전체 비활성 상태`},{name:`weekends`,type:`boolean`,default:`false`,description:`주말 색상 표시`},{name:`header · weekdays · footer · children`,type:`ReactNode · slot`,default:`—`,description:`헤더, 요일, 본문, 푸터 콘텐츠`}],V=[{name:`days`,type:`CalendarDayData[]`,default:`2024년 6월`,description:`직접 제공하는 날짜 셀 데이터`},{name:`selected · today`,type:`number`,default:`15 · 12`,description:`선택일과 오늘 날짜`},{name:`disabled · events`,type:`number[]`,default:`[]`,description:`비활성·이벤트 날짜`},{name:`rangeStart · rangeEnd`,type:`number`,default:`—`,description:`범위 시작·종료 날짜`},{name:`partial`,type:`number`,default:`—`,description:`간단 예시에 표시할 날짜 개수`},{name:`week · weekends · readonly`,type:`boolean`,default:`false`,description:`주간·주말·읽기 전용 처리`}],H=[{name:`CalendarHeader · title · showNav`,type:`string · boolean`,default:`— · true`,description:`월 제목과 이전·다음 탐색`},{name:`CalendarNav · label`,type:`string`,default:`—`,description:`주간 탐색 라벨`},{name:`CalendarWeekdays · labels`,type:`string[]`,default:`일…토`,description:`요일 라벨`},{name:`CalendarFooter · children`,type:`ReactNode · slot`,default:`기본 액션`,description:`하단 액션`},{name:`CalendarWheel · title · toolbar · footer`,type:`string · boolean`,default:`— · true · false`,description:`휠 선택기 구조`},{name:`CalendarWheelColumn · items · selected`,type:`string[] · string`,default:`[] · —`,description:`휠 열 항목과 선택 값`}],U=[R(`React · Next.js API · Calendar Props`,B,"Next.js는 `@uxkm/react/calendar`를 재사용합니다."),R(`React · Next.js API · CalendarMonth Props`,V),R(`React · Next.js API · 하위 컴포넌트`,H),R(`Vue · Nuxt API · Props / Slots`,z([...B,...V]),"Nuxt는 `@uxkm/vue/calendar`를 재사용합니다."),R(`HTML · Gulp · 공통 클래스`,[{name:`calendar · calendar_header · calendar_weekdays · calendar_grid · calendar_day`,type:`class`,default:`—`,description:`월간 캘린더 기본 구조`},{name:`calendar_no-header · calendar_minimal · calendar_week`,type:`class`,default:`—`,description:`레이아웃 변형`},{name:`calendar_borderless · calendar_shadow · calendar_ghost · calendar_sm · calendar_lg`,type:`class`,default:`—`,description:`스킨과 크기`},{name:`is-today · is-selected · is-disabled · is-other-month · is-in-range · has-event`,type:`class`,default:`—`,description:`날짜 상태`},{name:`calendar_wheel* · calendar_agenda* · calendar_group`,type:`class`,default:`—`,description:`휠·세로 일정·다중 패널 구조`}]),R(`공통 API · 디자인 토큰`,[{name:`--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg`,type:`length`,default:`2.25rem · 1.875rem · 2.75rem`,description:`날짜 셀 크기`},{name:`--calendar-gap · --calendar-font-size · --calendar-header-size`,type:`length`,default:`2px · var(--text-size-sm) · var(--text-size-base)`,description:`간격과 글자 크기`},{name:`--calendar-wheel-height · --calendar-wheel-step-height · --calendar-wheel-max-width`,type:`length`,default:`13.75rem · 2rem · 22rem`,description:`휠 선택기 치수`},{name:`--calendar-agenda-gap · --calendar-agenda-date-width`,type:`length`,default:`var(--space-md) · 3rem`,description:`세로 일정 간격과 날짜 열 너비`}])]})))()}function G(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y,{of:p}),`
`,(0,q.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,q.jsx)(t.p,{children:`날짜를 월·주 단위 그리드, 세로 일정 목록, iOS 스타일 휠로 표시하는 캘린더 컴포넌트입니다.`}),`
`,(0,q.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,q.jsx)(t.code,{children:`@uxkm/vue/calendar`}),`, `,(0,q.jsx)(t.code,{children:`@uxkm/react/calendar`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,q.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,q.jsx)(t.p,{children:`헤더·요일·날짜 그리드로 월간 뷰를 구성하고 날짜 상태를 표현합니다.`}),`
`,(0,q.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.basic,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`헤더-없음`,children:`헤더 없음`}),`
`,(0,q.jsx)(t.p,{children:`상위 UI에서 제목을 제공할 때 요일과 날짜 그리드만 표시합니다.`}),`
`,(0,q.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.noHeader,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`날짜만`,children:`날짜만`}),`
`,(0,q.jsx)(t.p,{children:`헤더와 요일 없이 날짜만 표시해 인라인 선택이나 좁은 공간에 사용합니다.`}),`
`,(0,q.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.minimal,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`주간`,children:`주간`}),`
`,(0,q.jsx)(t.p,{children:`한 주만 표시하고 이전·다음 주 탐색을 제공합니다.`}),`
`,(0,q.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.week,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`휠-ios-스타일`,children:`휠 (iOS 스타일)`}),`
`,(0,q.jsx)(t.p,{children:`년·월·일 열과 이전·다음 단계 버튼으로 휠 선택기를 구성합니다.`}),`
`,(0,q.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.wheel,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`범위-선택`,children:`범위 선택`}),`
`,(0,q.jsx)(t.p,{children:`시작일·선택 구간·종료일 상태로 기간 선택을 표현합니다.`}),`
`,(0,q.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.range,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`이벤트-마커`,children:`이벤트 마커`}),`
`,(0,q.jsx)(t.p,{children:`일정이 있는 날짜에 점 표시를 추가합니다.`}),`
`,(0,q.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.event,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`스킨`,children:`스킨`}),`
`,(0,q.jsx)(t.p,{children:`borderless·ghost·shadow로 외형을 조절합니다.`}),`
`,(0,q.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.skin,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,q.jsx)(t.p,{children:`small·compact·large로 셀 크기와 패딩을 조절합니다.`}),`
`,(0,q.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.size,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`푸터`,children:`푸터`}),`
`,(0,q.jsx)(t.p,{children:`오늘 이동·초기화·확인 같은 하단 액션을 배치합니다.`}),`
`,(0,q.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.footer,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`이중-패널`,children:`이중 패널`}),`
`,(0,q.jsx)(t.p,{children:`두 달을 나란히 배치해 기간 선택·예약 UI를 구성합니다.`}),`
`,(0,q.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.dual,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`세로-일정`,children:`세로 일정`}),`
`,(0,q.jsx)(t.p,{children:`날짜별 시간·제목·설명을 세로 일정 목록으로 표시합니다.`}),`
`,(0,q.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.agenda,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,q.jsx)(t.p,{children:`읽기 전용과 전체 비활성 상태를 제공합니다.`}),`
`,(0,q.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,q.jsx)(w,{examples:F.state,showFullCode:!0}),`
`,(0,q.jsx)(T,{sections:U})]})}function K(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;function J(){return(J=e((()=>{q=t(),v(),x(),S(),C(),I(),W(),o()})))()}J();export{K as default};