import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t,n,r){let i=`import { Calendar, CalendarFooter, CalendarGroup, CalendarHeader, CalendarMonth, CalendarNav, CalendarWeekdays, CalendarWheel, CalendarWheelColumn } from '@uxkm/react/calendar';\n\nexport function Example() {\n  return (\n${n}\n  );\n}`,a=`<script setup>\nimport Calendar from '@uxkm/vue/calendar';\n<\/script>\n\n<template>\n${r}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Calendar/Calendar.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Calendar/calendar.njk · ${e}`,code:`{# Calendar · ${e} #}\n${t}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/calendar · ${e}`,code:a},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/calendar · ${e}`,code:a},{id:`react`,label:`React`,fileName:`@uxkm/react/calendar · ${e}`,code:i},{id:`next`,label:`Next`,fileName:`@uxkm/react/calendar · ${e}`,code:i}]}function n({values:e=[26,27,28,29,30,31,...Array.from({length:30},(e,t)=>t+1),1,2,3,4,5,6],selected:t=[15],today:n=12,rangeStart:r,rangeEnd:i,events:a=[],disabled:o=[]}={}){return`<div class="calendar_grid">\n${e.map((s,c)=>{let l=e.length>14&&(c<6||c>=36),u=!l&&(t.includes(s)||s===r||s===i),d=[`calendar_day`,l&&`is-other-month`,!l&&s===n&&`is-today`,u&&`is-selected`,s===r&&`is-range-start`,s===i&&`is-range-end`,!l&&r!=null&&i!=null&&s>r&&s<i&&`is-in-range`,!l&&a.includes(s)&&`has-event`,!l&&o.includes(s)&&`is-disabled`].filter(Boolean).join(` `),f=[l||o.includes(s)?`disabled`:``,!l&&s===n?`aria-current="date"`:``,u?`aria-selected="true"`:``].filter(Boolean).join(` `);return`  <button class="${d}" type="button"${f?` ${f}`:``}>${s}</button>`}).join(`
`)}\n</div>`}var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r=n(),i=n({values:[9,10,11,12,13,14,15],selected:[14],today:12}),a=n({selected:[],rangeStart:10,rangeEnd:18}),o=n({events:[3,7,12,15,21,28]}),s=`<div class="calendar_weekdays" aria-hidden="true"><span class="calendar_weekday">일</span><span class="calendar_weekday">월</span><span class="calendar_weekday">화</span><span class="calendar_weekday">수</span><span class="calendar_weekday">목</span><span class="calendar_weekday">금</span><span class="calendar_weekday">토</span></div>`,c=(e=`2024년 6월`)=>`<div class="calendar_header"><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="이전 달">‹</button><span class="calendar_title">${e}</span><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="다음 달">›</button></div>`,l=(e=`calendar`)=>`<div class="${e}" role="application" aria-label="2024년 6월">\n  ${c()}\n  ${s}\n  ${r}\n</div>`,u={basic:t(`basic`,l(),`    <Calendar ariaLabel="2024년 6월" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`,`  <Calendar aria-label="2024년 6월" title="2024년 6월" />`),noHeader:t(`noHeader`,`<div class="calendar calendar_no-header" role="application" aria-label="2024년 6월">${s}${r}</div>`,`    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}><CalendarMonth /></Calendar>`,`  <Calendar no-header aria-label="2024년 6월">
    <template #weekdays><div class="calendar_weekdays" aria-hidden="true"><span v-for="label in ['일', '월', '화', '수', '목', '금', '토']" :key="label" class="calendar_weekday">{{ label }}</span></div></template>
  </Calendar>`),minimal:t(`minimal`,`<div class="calendar calendar_minimal calendar_compact calendar_borderless" role="application" aria-label="2024년 6월 날짜만">${r}</div>`,`    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만"><CalendarMonth /></Calendar>`,`  <Calendar minimal compact borderless aria-label="2024년 6월 날짜만" />`),week:t(`week`,`<div class="calendar calendar_week calendar_shadow" role="application" aria-label="6월 9일~15일"><div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>${s}${i}</div>`,`    <Calendar week shadow ariaLabel="2024년 6월 9일~15일">
      <CalendarNav label="6월 9일 ~ 15일" />
      <CalendarWeekdays />
      <CalendarMonth week days={[9, 10, 11, 12, 13, 14, 15].map((day) => ({ day, today: day === 12, selected: day === 14 }))} />
    </Calendar>`,`  <Calendar week shadow aria-label="2024년 6월 9일~15일">
    <template #header>
      <div class="calendar_nav"><button type="button" aria-label="이전 주">‹</button><span class="calendar_nav-label">6월 9일 ~ 15일</span><button type="button" aria-label="다음 주">›</button></div>
    </template>
  </Calendar>`),wheel:t(`wheel`,`<div class="calendar calendar_wheel calendar_shadow" role="group" aria-label="날짜 휠 선택">
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
  </Calendar>`),range:t(`range`,`<div class="calendar" role="application" aria-label="2024년 6월 범위 선택">${c()}${s}${a}</div>`,`    <Calendar header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={10} rangeEnd={18} /></Calendar>`,`  <Calendar title="2024년 6월" :range-start="10" :range-end="18" />`),event:t(`event`,`<div class="calendar calendar_weekends" role="application" aria-label="2024년 6월 이벤트">${c()}${s}${o}</div>`,`    <Calendar weekends header={<CalendarHeader title="2024년 6월" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth events={[3, 7, 12, 15, 21, 28]} weekends /></Calendar>`,`  <Calendar weekends title="2024년 6월" :events="[3, 7, 12, 15, 21, 28]" />`),skin:t(`skin`,`<div class="calendar_group">${l(`calendar calendar_borderless`)}${l(`calendar calendar_ghost`)}${l(`calendar calendar_shadow`)}</div>`,`    <CalendarGroup>
      <Calendar borderless header={<CalendarHeader title="Borderless" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar ghost header={<CalendarHeader title="Ghost" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar shadow header={<CalendarHeader title="Shadow" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar borderless title="Borderless" /><Calendar ghost title="Ghost" /><Calendar shadow title="Shadow" /></div>`),size:t(`size`,`<div class="calendar_group">${l(`calendar calendar_sm`)}${l(`calendar calendar_compact`)}${l(`calendar calendar_lg`)}</div>`,`    <CalendarGroup>
      <Calendar size="sm" header={<CalendarHeader title="Small" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar compact header={<CalendarHeader title="Compact" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
      <Calendar size="lg" header={<CalendarHeader title="Large" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar size="sm" title="Small" /><Calendar compact title="Compact" /><Calendar size="lg" title="Large" /></div>`),footer:t(`footer`,`<div class="calendar calendar_shadow" role="application" aria-label="2024년 6월 푸터 포함">${c()}${s}${r}<div class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm">오늘</button><div class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm">초기화</button><button type="button" class="btn btn_filled color_primary btn_sm">확인</button></div></div></div>`,`    <Calendar shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />} footer={<CalendarFooter />}><CalendarMonth /></Calendar>`,`  <Calendar shadow title="2024년 6월" footer />`),dual:t(`dual`,`<div class="calendar_group">${l(`calendar calendar_compact calendar_shadow`)}${l(`calendar calendar_compact calendar_shadow`).replaceAll(`2024년 6월`,`2024년 7월`)}</div>`,`    <CalendarGroup>
      <Calendar compact shadow header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={24} rangeEnd={30} /></Calendar>
      <Calendar compact shadow header={<CalendarHeader title="2024년 7월" />} weekdays={<CalendarWeekdays />}><CalendarMonth rangeStart={1} rangeEnd={5} /></Calendar>
    </CalendarGroup>`,`  <div class="calendar_group"><Calendar compact shadow title="2024년 6월" :range-start="24" :range-end="30" /><Calendar compact shadow title="2024년 7월" :range-start="1" :range-end="5" /></div>`),agenda:t(`agenda`,`<div class="calendar calendar_agenda calendar_shadow" role="feed" aria-label="2024년 6월 일정">${c(`6월 14일 ~ 20일`)}<ol class="calendar_agenda-list"><li class="calendar_agenda-day is-today"><div class="calendar_agenda-date"><span class="calendar_agenda-weekday">토</span><span class="calendar_agenda-daynum">15</span></div><div class="calendar_agenda-body"><ul class="calendar_agenda-events"><li class="calendar_agenda-event color_primary"><span class="calendar_agenda-event-time">09:00</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">팀 스탠드업</span><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span></div></li><li class="calendar_agenda-event color_warning"><span class="calendar_agenda-event-time">15:30</span><div class="calendar_agenda-event-main"><span class="calendar_agenda-event-title">QA 일정 점검</span><span class="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span></div></li></ul></div></li></ol></div>`,`    <Calendar agenda shadow role="feed" ariaLabel="2024년 6월 일정" header={<CalendarHeader title="6월 14일 ~ 20일" />}>
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
  </Calendar>`),state:t(`state`,`<div class="calendar_group">${l(`calendar calendar_readonly`)}${l(`calendar is-disabled`)}</div>`,`    <>
      <Calendar readonly header={<CalendarHeader title="읽기 전용" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} readonly /></Calendar>
      <Calendar disabled header={<CalendarHeader title="비활성" showNav={false} />} weekdays={<CalendarWeekdays />}><CalendarMonth partial={14} today={7} selected={9} disabled={[2, 3, 4, 5]} /></Calendar>
    </>`,`  <div class="calendar_group"><Calendar readonly title="읽기 전용" partial="14" :today="7" :selected="9" /><Calendar disabled title="비활성" partial="14" :today="7" :selected="9" :disabled-days="[2, 3, 4, 5]" /></div>`)}})))()}function f(e,t){let n=`import { List, ListItem } from '@uxkm/react/list';
import { Avatar } from '@uxkm/react/avatar';
import Button from '@uxkm/react/button';
import Icon from '@uxkm/react/icon';

export function Example() {
  return (
${t.react}
  );
}`,r=`<script setup>
import { List, ListItem } from '@uxkm/vue/list';
import { Avatar } from '@uxkm/vue/avatar';
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
<\/script>

<template>
${t.vue}
</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/List/List.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/List/list.njk · ${e}`,code:`{# List · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/list · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/list · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/list · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/list · ${e}`,code:n}]}var ee;function te(){return(te=e((()=>{ee={basic:f(`basic`,{html:`<ul class="list">
  <li class="list_item">
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <div class="list_content"><span class="list_title">홍길동</span><span class="list_meta">프론트엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_success" aria-hidden="true">김</span>
    <div class="list_content"><span class="list_title">김철수</span><span class="list_meta">백엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_warning" aria-hidden="true">이</span>
    <div class="list_content"><span class="list_title">이영희</span><span class="list_meta">UI/UX 디자이너</span></div>
  </li>
</ul>`,react:`    <List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>`,vue:`  <List>
    <ListItem title="홍길동" meta="프론트엔드 개발자"><template #prefix><Avatar color="primary" initials="홍" aria-hidden /></template></ListItem>
    <ListItem title="김철수" meta="백엔드 개발자"><template #prefix><Avatar color="success" initials="김" aria-hidden /></template></ListItem>
    <ListItem title="이영희" meta="UI/UX 디자이너"><template #prefix><Avatar color="warning" initials="이" aria-hidden /></template></ListItem>
  </List>`}),bullet:f(`bullet`,{html:`<ul class="list list_bullet">
  <li class="list_item">디자인 토큰 정의</li>
  <li class="list_item">컴포넌트 문서화</li>
  <li class="list_item">접근성 검토</li>
</ul>`,react:`    <List variant="bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>`,vue:`  <List variant="bullet">
    <ListItem>디자인 토큰 정의</ListItem>
    <ListItem>컴포넌트 문서화</ListItem>
    <ListItem>접근성 검토</ListItem>
  </List>`}),bulletRich:f(`bulletRich`,{html:`<ul class="list list_bullet">
  <li class="list_item"><div class="list_content"><span class="list_title">HTML 마크업</span><span class="list_desc">시맨틱 태그와 ARIA 속성을 사용합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">SCSS 스타일</span><span class="list_desc">OOCSS 패턴으로 구조와 스킨을 분리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">접근성</span><span class="list_desc">WCAG 2.2 AA 기준을 준수합니다.</span></div></li>
</ul>`,react:`    <List variant="bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>`,vue:`  <List variant="bullet">
    <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
    <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
    <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
  </List>`}),bulletVariants:f(`bulletVariants`,{html:`<ul class="list list_bullet list_bullet-circle">
  <li class="list_item">원형 마커 항목 A</li><li class="list_item">원형 마커 항목 B</li>
</ul>
<ul class="list list_bullet list_bullet-square">
  <li class="list_item">사각 마커 항목 A</li><li class="list_item">사각 마커 항목 B</li>
</ul>`,react:`    <>
      <List variant="bullet" className="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
      <List variant="bullet" className="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>
    </>`,vue:`  <List variant="bullet" class="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
  <List variant="bullet" class="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>`}),ordered:f(`ordered`,{html:`<ol class="list list_ordered">
  <li class="list_item">요구사항 분석</li><li class="list_item">와이어프레임 작성</li>
  <li class="list_item">프로토타입 검증</li><li class="list_item">개발 및 배포</li>
</ol>`,react:`    <List variant="ordered">
      <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
    </List>`,vue:`  <List variant="ordered">
    <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
    <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
  </List>`}),orderedVariants:f(`orderedVariants`,{html:`<ol class="list list_ordered list_ordered-alpha"><li class="list_item">첫 번째 옵션</li><li class="list_item">두 번째 옵션</li></ol>
<ol class="list list_ordered list_ordered-roman"><li class="list_item">서론</li><li class="list_item">본론</li><li class="list_item">결론</li></ol>`,react:`    <>
      <List variant="ordered" className="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
      <List variant="ordered" className="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>
    </>`,vue:`  <List variant="ordered" class="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
  <List variant="ordered" class="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>`}),hierarchical:f(`hierarchical`,{html:`<ol class="list list_ordered list_ordered-outline">
  <li class="list_item">요구사항 정의</li>
  <li class="list_item">설계<ol class="list list_ordered list_ordered-outline"><li class="list_item">정보 구조</li><li class="list_item">UI 설계</li></ol></li>
  <li class="list_item">개발 및 배포</li>
</ol>`,react:`    <List variant="ordered" className="list_ordered-outline">
      <ListItem>요구사항 정의</ListItem>
      <ListItem>설계<List variant="ordered" className="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>`,vue:`  <List variant="ordered" class="list_ordered-outline">
    <ListItem>요구사항 정의</ListItem>
    <ListItem>설계<List variant="ordered" class="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>`}),bordered:f(`bordered`,{html:`<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">알림 설정</span><span class="list_desc">이메일 및 푸시 알림을 관리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">프로필 편집</span><span class="list_desc">이름, 사진, 소개를 변경합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">보안</span><span class="list_desc">비밀번호 및 2단계 인증을 설정합니다.</span></div></li>
</ul>`,react:`    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>`,vue:`  <List bordered>
    <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
    <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
    <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
  </List>`}),links:f(`links`,{html:`<ul class="list list_divider">
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">홈</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">프로젝트</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">설정</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
</ul>`,react:`    <List split>
      {['홈', '프로젝트', '설정'].map((label) => (
        <ListItem key={label}><a className="list_link" href="#" data-ripple="true"><span className="list_title">{label}</span><Icon className="list_action" name="chevron" /></a></ListItem>
      ))}
    </List>`,vue:`  <List split>
    <ListItem v-for="label in ['홈', '프로젝트', '설정']" :key="label"><a class="list_link" href="#" data-ripple="true"><span class="list_title">{{ label }}</span><Icon class="list_action" name="chevron" /></a></ListItem>
  </List>`}),buttons:f(`buttons`,{html:`<ul class="list list_bordered">
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_primary" aria-hidden="true">홍</span><span class="list_content"><span class="list_title">홍길동</span><span class="list_meta">멤버 선택</span></span></button></li>
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_success" aria-hidden="true">김</span><span class="list_content"><span class="list_title">김철수</span><span class="list_meta">멤버 선택</span></span></button></li>
</ul>`,react:`    <List bordered>
      {['홍길동', '김철수'].map((name, index) => (
        <ListItem key={name}><button className="list_link" type="button" data-ripple="true"><Avatar color={index ? 'success' : 'primary'} initials={name[0]} ariaHidden /><span className="list_content"><span className="list_title">{name}</span><span className="list_meta">멤버 선택</span></span></button></ListItem>
      ))}
    </List>`,vue:`  <List bordered>
    <ListItem v-for="(name, index) in ['홍길동', '김철수']" :key="name"><button class="list_link" type="button" data-ripple="true"><Avatar :color="index ? 'success' : 'primary'" :initials="name[0]" aria-hidden /><span class="list_content"><span class="list_title">{{ name }}</span><span class="list_meta">멤버 선택</span></span></button></ListItem>
  </List>`}),actions:f(`actions`,{html:`<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">디자인 시스템</span><span class="list_desc">마지막 수정 2시간 전</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
  <li class="list_item"><div class="list_content"><span class="list_title">컴포넌트 가이드</span><span class="list_desc">마지막 수정 어제</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
</ul>`,react:`    <List bordered>
      <ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} />
      <ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} />
    </List>`,vue:`  <List bordered>
    <ListItem title="디자인 시스템" description="마지막 수정 2시간 전"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
    <ListItem title="컴포넌트 가이드" description="마지막 수정 어제"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
  </List>`}),definition:f(`definition`,{html:`<dl class="list list_definition" style="max-width: 34rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">색상·간격·타이포 값을 변수로 정의한 것입니다.</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 콘텐츠 접근성 지침입니다.</dd>
</dl>`,react:`    <List variant="definition" style={{ maxWidth: '34rem' }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
    </List>`,vue:`  <List variant="definition" :style="{ maxWidth: '34rem' }">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
  </List>`}),definitionInline:f(`definitionInline`,{html:`<dl class="list list_definition list_inline" style="--list-inline-label-width: 8rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨 분리</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">디자인 값 변수화</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 접근성 지침</dd>
</dl>`,react:`    <List variant="definition" layout="inline" inlineLabelWidth="8rem">
      <ListItem title="OOCSS" description="구조와 스킨 분리" />
      <ListItem title="Design Token" description="디자인 값 변수화" />
      <ListItem title="WCAG" description="웹 접근성 지침" />
    </List>`,vue:`  <List variant="definition" layout="inline" inline-label-width="8rem">
    <ListItem title="OOCSS" description="구조와 스킨 분리" />
    <ListItem title="Design Token" description="디자인 값 변수화" />
    <ListItem title="WCAG" description="웹 접근성 지침" />
  </List>`}),definitionRight:f(`definitionRight`,{html:`<dl class="list list_definition list_inline list_desc-right list_block">
  <dt class="list_title">주문번호</dt><dd class="list_desc">ORD-2024-0815</dd>
  <dt class="list_title">결제금액</dt><dd class="list_desc">₩42,000</dd>
  <dt class="list_title">배송지</dt><dd class="list_desc">서울특별시 강남구</dd>
</dl>`,react:`    <List variant="definition" layout="inline" descAlign="right" block>
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구" />
    </List>`,vue:`  <List variant="definition" layout="inline" desc-align="right" block>
    <ListItem title="주문번호" description="ORD-2024-0815" />
    <ListItem title="결제금액" description="₩42,000" />
    <ListItem title="배송지" description="서울특별시 강남구" />
  </List>`})}})))()}function p(e,t){let n=`import { Stat } from '@uxkm/react/stat';
import Icon from '@uxkm/react/icon';

export function Example() {
  return (
${t.react}
  );
}`,r=`<script setup>
import { Stat } from '@uxkm/vue/stat';
import Icon from '@uxkm/vue/icon';
<\/script>

<template>
${t.vue}
</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Stat/Stat.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Stat/stat.njk · ${e}`,code:`{# Stat · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/stat · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/stat · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/stat · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/stat · ${e}`,code:n}]}var m,ne;function re(){return(re=e((()=>{m=e=>`<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="${e}"></path></svg>`,ne={basic:p(`basic`,{html:`<div class="stat">
  <span class="stat_label">총 사용자</span>
  <span class="stat_value">12,480</span>
  <span class="stat_desc">지난 30일 기준</span>
</div>`,react:`    <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`,vue:`  <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`}),prefixSuffix:p(`prefixSuffix`,{html:`<div class="stat_group stat_group-3">
  <div class="stat"><span class="stat_label">총 매출</span><div class="stat_value-row"><span class="stat_prefix">₩</span><span class="stat_value">4,280,000</span></div><span class="stat_desc color_success">+8.2%</span></div>
  <div class="stat"><span class="stat_label">전환율</span><div class="stat_value-row"><span class="stat_value">3.6</span><span class="stat_suffix">%</span></div><span class="stat_desc color_danger">-0.4%p</span></div>
  <div class="stat"><span class="stat_label">평균 응답 시간</span><div class="stat_value-row"><span class="stat_value">128</span><span class="stat_suffix">ms</span></div></div>
</div>`,react:`    <div className="stat_group stat_group-3">
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </div>`,vue:`  <div class="stat_group stat_group-3">
    <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
    <Stat title="평균 응답 시간" value="128" suffix="ms" />
  </div>`}),trend:p(`trend`,{html:`<div class="stat_group stat_group-2">
  <div class="stat"><div class="stat_header"><span class="stat_label">신규 가입</span><span class="stat_trend color_success">${m(`m6 15 6-6 6 6`)}+15.3%</span></div><span class="stat_value">1,234</span></div>
  <div class="stat"><div class="stat_header"><span class="stat_label">이탈률</span><span class="stat_trend color_danger">${m(`M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01`)}+0.3%p</span></div><span class="stat_value">2.4%</span></div>
</div>`,react:`    <div className="stat_group stat_group-2">
      <Stat title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" />
      <Stat title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} />
    </div>`,vue:`  <div class="stat_group stat_group-2">
    <Stat title="신규 가입" value="1,234" trend="+15.3%" trend-color="success" />
    <Stat title="이탈률" value="2.4%" trend="+0.3%p" trend-color="danger"><template #trend-icon><Icon name="warning" /></template></Stat>
  </div>`}),sizes:p(`sizes`,{html:`<div class="stat_group stat_group-3">
  <div class="stat stat_sm stat_card"><span class="stat_label">Small</span><span class="stat_value">1,024</span></div>
  <div class="stat stat_card"><span class="stat_label">Medium</span><span class="stat_value">8,192</span></div>
  <div class="stat stat_lg stat_card"><span class="stat_label">Large</span><span class="stat_value">64K</span></div>
</div>`,react:`    <div className="stat_group stat_group-3">
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </div>`,vue:`  <div class="stat_group stat_group-3">
    <Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />
  </div>`}),layouts:p(`layouts`,{html:`<div class="stat stat_horizontal stat_card"><span class="stat_label">활성 세션</span><span class="stat_value">342</span></div>
<div class="stat stat_inline stat_card"><span class="stat_label">CPU 사용률</span><div class="stat_value-row"><span class="stat_value">68</span><span class="stat_suffix">%</span></div></div>
<div class="stat stat_row stat_card stat_shadow"><span class="stat_icon-wrap color_primary">${m(`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`)}</span><div class="stat_body"><span class="stat_label">신규 사용자</span><span class="stat_value">1,284</span></div></div>`,react:`    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow><span className="stat_icon-wrap color_primary"><Icon name="user" /></span><div className="stat_body"><span className="stat_label">신규 사용자</span><span className="stat_value">1,284</span></div></Stat>
    </>`,vue:`  <Stat class="stat_horizontal" card title="활성 세션" value="342" />
  <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
  <Stat class="stat_row" card shadow><span class="stat_icon-wrap color_primary"><Icon name="user" /></span><div class="stat_body"><span class="stat_label">신규 사용자</span><span class="stat_value">1,284</span></div></Stat>`}),icon:p(`icon`,{html:`<div class="stat_group stat_group-2">
  <div class="stat stat_card"><span class="stat_icon">${m(`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z`)}</span><span class="stat_label">즐겨찾기</span><span class="stat_value">128</span></div>
  <div class="stat stat_row stat_card"><span class="stat_icon-wrap color_success">${m(`m5 12 4 4L19 6`)}</span><div class="stat_body"><span class="stat_label">완료</span><span class="stat_value">84</span></div></div>
</div>`,react:`    <div className="stat_group stat_group-2">
      <Stat card><span className="stat_icon"><Icon name="star" /></span><span className="stat_label">즐겨찾기</span><span className="stat_value">128</span></Stat>
      <Stat className="stat_row" card><span className="stat_icon-wrap color_success"><Icon name="check" /></span><div className="stat_body"><span className="stat_label">완료</span><span className="stat_value">84</span></div></Stat>
    </div>`,vue:`  <div class="stat_group stat_group-2">
    <Stat card><span class="stat_icon"><Icon name="star" /></span><span class="stat_label">즐겨찾기</span><span class="stat_value">128</span></Stat>
    <Stat class="stat_row" card><span class="stat_icon-wrap color_success"><Icon name="check" /></span><div class="stat_body"><span class="stat_label">완료</span><span class="stat_value">84</span></div></Stat>
  </div>`}),skins:p(`skins`,{html:`<div class="stat_group stat_group-4">
  <div class="stat stat_card"><span class="stat_label">기본 카드</span><span class="stat_value">1,200</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">Shadow</span><span class="stat_value">980</span></div>
  <div class="stat stat_card stat_borderless"><span class="stat_label">Borderless</span><span class="stat_value">456</span></div>
  <div class="stat stat_card stat_accent color_primary"><span class="stat_label">Accent</span><span class="stat_value">789</span><span class="stat_desc">강조 지표</span></div>
</div>`,react:`    <div className="stat_group stat_group-4">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat card className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
    </div>`,vue:`  <div class="stat_group stat_group-4">
    <Stat card title="기본 카드" value="1,200" />
    <Stat card shadow title="Shadow" value="980" />
    <Stat card class="stat_borderless" title="Borderless" value="456" />
    <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
  </div>`}),group:p(`group`,{html:`<div class="stat_group stat_group-4">
  <div class="stat stat_card stat_shadow"><span class="stat_label">총 매출</span><div class="stat_value-row"><span class="stat_prefix">₩</span><span class="stat_value">4.2M</span></div><span class="stat_desc color_success">+8.2%</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">신규 가입</span><span class="stat_value">1,234</span><span class="stat_desc color_success">+15.3%</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">이탈률</span><div class="stat_value-row"><span class="stat_value">2.4</span><span class="stat_suffix">%</span></div><span class="stat_desc color_danger">+0.3%p</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">활성 사용자</span><span class="stat_value">8,901</span><span class="stat_desc color_muted">변동 없음</span></div>
</div>
<div class="stat_group stat_group-4 stat_group-divider">
  <div class="stat"><span class="stat_label">방문</span><span class="stat_value">24.5K</span></div>
  <div class="stat"><span class="stat_label">페이지뷰</span><span class="stat_value">89.2K</span></div>
  <div class="stat"><span class="stat_label">전환</span><span class="stat_value">1,842</span></div>
  <div class="stat"><span class="stat_label">매출</span><span class="stat_value">₩12M</span></div>
</div>`,react:`    <>
      <div className="stat_group stat_group-4">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider">
        <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
      </div>
    </>`,vue:`  <div class="stat_group stat_group-4">
    <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
    <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
    <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
    <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
  </div>
  <div class="stat_group stat_group-4 stat_group-divider">
    <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
  </div>`})}})))()}function h(e,t){let n=`import { Table } from '@uxkm/react/table';
import { Badge } from '@uxkm/react/badge';

${t.react}`,r=t.vue.replace(`<script setup>`,`<script setup>
import { Table } from '@uxkm/vue/table';
import { Badge } from '@uxkm/vue/badge';`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Table/Table.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Table/table.njk · ${e}`,code:`{# Table · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/table · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/table · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/table · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/table · ${e}`,code:n}]}function g(e,t={}){let n=t.wide?[`이름`,`부서`,`1월`,`2월`,`3월`]:[`이름`,`구분`,`상태`],r=[`table_wrap`,t.scroll&&`table_wrap-scroll`].filter(Boolean).join(` `),i=[t.maxHeight&&`--table-scroll-max-height: ${t.maxHeight}`,t.wide&&`min-width: 48rem`].filter(Boolean).join(`; `),a=t.columns?.flatMap((e,t)=>[e.padding&&`--table-col-${t+1}-padding: ${e.padding}`,e.nowrap&&`--table-col-${t+1}-white-space: nowrap`]).filter(Boolean).join(`; `);return`<div class="${r}"${i?` style="${i}"`:``}>
  <table class="${t.classes??`table`}"${a?` style="${a}"`:``}>
    ${ae(t.columns)}<thead><tr>${n.map(e=>`<th scope="col">${e}</th>`).join(``)}</tr></thead>
    <tbody>
${oe(e,t.badge)}
    </tbody>
  </table>
</div>`}function ie(e,t,n,r=!1,i=!1){let a=T(e),o=JSON.stringify(S,null,2).replace(/^/gm,`  `),s=r?`{index === 2 ? <Badge color={cell === '활성' ? 'success' : 'warning'} label={cell} /> : cell}`:`{cell}`,c=r?`<Badge v-if="index === 2" :color="cell === '활성' ? 'success' : 'warning'" :label="cell" /><template v-else>{{ cell }}</template>`:`{{ cell }}`;return{react:`const data = ${a.trimStart()};${i?`\nconst columns = ${o.trimStart()};`:``}

export function Example() {
  return (
    <Table${t?` ${t}`:``}>
      <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
      <tbody>
        {data.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>${s}</td>)}</tr>)}
      </tbody>
    </Table>
  );
}`,vue:`<script setup>
const data = ${a.trimStart()};${i?`\nconst columns = ${o.trimStart()};`:``}
<\/script>

<template>
  <Table${n?` ${n}`:``}>
    <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
    <tbody>
      <tr v-for="row in data" :key="row[0]"><td v-for="(cell, index) in row" :key="cell">${c}</td></tr>
    </tbody>
  </Table>
</template>`}}function _(e,t){let n=T(x),r=JSON.stringify(C,null,2).replace(/^/gm,`  `);return{react:`const rows = ${n.trimStart()};
const columns = ${r.trimStart()};

export function Example() {
  return (
    <Table ${e} columns={columns} style={{ minWidth: '48rem' }}>
      <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
      <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
    </Table>
  );
}`,vue:`<script setup>
const rows = ${n.trimStart()};
const columns = ${r.trimStart()};
<\/script>

<template>
  <Table ${t} :columns="columns" :style="{ minWidth: '48rem' }">
    <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
    <tbody><tr v-for="row in rows" :key="row[0]"><td v-for="cell in row" :key="cell">{{ cell }}</td></tr></tbody>
  </Table>
</template>`}}var v,y,b,x,S,C,w,ae,oe,T,E,se;function ce(){return(ce=e((()=>{v=[[`홍길동`,`Frontend`,`활성`],[`김철수`,`Backend`,`활성`],[`이영희`,`Design`,`휴가`]],y=[[`Basic`,`₩12,000`,`120`],[`Pro`,`₩29,000`,`84`],[`Enterprise`,`문의`,`12`]],b=Array.from({length:12},(e,t)=>[`사용자 ${t+1}`,t%2?`Design`:`Development`,t%3?`활성`:`대기`]),x=b.slice(0,6).map((e,t)=>[e[0],e[1],String(120+t),String(132+t),String(145+t)]),S=[{width:`9rem`,nowrap:!0},{minWidth:`10rem`},{width:`7rem`,nowrap:!0}],C=[{width:`8rem`,nowrap:!0},{width:`10rem`,nowrap:!0},{width:`10rem`},{width:`10rem`},{width:`10rem`}],w=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),ae=e=>e?.length?`<colgroup>${e.map(e=>{let t=[e.width&&`width: ${e.width}`,e.minWidth&&`min-width: ${e.minWidth}`,e.maxWidth&&`max-width: ${e.maxWidth}`].filter(Boolean).join(`; `);return`<col${t?` style="${t}"`:``}>`}).join(``)}</colgroup>\n    `:``,oe=(e,t=!1)=>e.map(e=>`      <tr>${e.map((e,n)=>t&&n===2?`<td><span class="badge color_${e===`활성`?`success`:`warning`}">${w(e)}</span></td>`:`<td>${w(e)}</td>`).join(``)}</tr>`).join(`
`),T=e=>JSON.stringify(e,null,2).replace(/^/gm,`  `),E=(e,t,n)=>{let r=ie(t,n.props??``,n.vueProps??n.props??``,n.badge,n.columns);return h(e,{html:g(t,{classes:n.classes,badge:n.badge,columns:n.columns?S:void 0,scroll:n.scroll,maxHeight:n.maxHeight}),...r})},se={basic:E(`basic`,v,{props:`columns={columns}`,vueProps:`:columns="columns"`,classes:`table table_columns`,badge:!0,columns:!0}),striped:E(`striped`,y,{props:`striped columns={columns}`,vueProps:`striped :columns="columns"`,classes:`table table_striped table_columns`,columns:!0}),bordered:E(`bordered`,v,{props:`bordered`,classes:`table table_bordered`}),compact:E(`compact`,y,{props:`compact columns={columns}`,vueProps:`compact :columns="columns"`,classes:`table table_compact table_columns`,columns:!0}),hover:E(`hover`,v,{props:`hover columns={columns}`,vueProps:`hover :columns="columns"`,classes:`table table_hover table_columns`,badge:!0,columns:!0}),combined:E(`combined`,v,{props:`bordered compact hover`,classes:`table table_bordered table_compact table_hover`}),stickyTop:E(`stickyTop`,b,{props:`scroll scrollMaxHeight="14rem" stickyTop bordered compact`,vueProps:`scroll scroll-max-height="14rem" sticky-top bordered compact`,classes:`table table_sticky-top table_bordered table_compact`,scroll:!0,maxHeight:`14rem`}),stickyLeft:(()=>{let e=_(`scroll stickyLeft`,`scroll sticky-left`);return h(`stickyLeft`,{html:g(x,{classes:`table table_columns table_sticky-left table_sticky-cols-1`,columns:C,scroll:!0,wide:!0}),...e})})(),stickyColumns:(()=>{let e=_(`scroll stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }}`,`scroll sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }"`);return h(`stickyColumns`,{html:g(x,{classes:`table table_columns table_sticky-left table_sticky-cols-2`,columns:C,scroll:!0,wide:!0}).replace(`style="`,`style="--table-sticky-left-2: 8rem; `),...e})})(),stickyBoth:(()=>{let e=_(`scroll scrollMaxHeight="14rem" stickyTop stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }} bordered compact`,`scroll scroll-max-height="14rem" sticky-top sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }" bordered compact`);return h(`stickyBoth`,{html:g(x,{classes:`table table_columns table_bordered table_compact table_sticky-top table_sticky-left table_sticky-cols-2`,columns:C,scroll:!0,maxHeight:`14rem`,wide:!0}).replace(`style="`,`style="--table-sticky-left-2: 8rem; `),...e})})()}})))()}function D(e,t,n,r,i,a){let o=e===`Timeline`?`TimelineItem`:`TreeNode`,s=`import { ${e}, ${o} } from '@uxkm/react/${t}';\n\nexport function Example() {\n  return (\n${i}\n  );\n}`,c=`<script setup>\nimport { ${e}, ${o} } from '@uxkm/vue/${t}';\n<\/script>\n\n<template>\n${a}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/${e}/${e}.html · ${n}`,code:r},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/${e}/${t}.njk · ${n}`,code:`{# ${e} · ${n} #}\n${r}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/${t} · ${n}`,code:c},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} · ${n}`,code:c},{id:`react`,label:`React`,fileName:`@uxkm/react/${t} · ${n}`,code:s},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} · ${n}`,code:s}]}var O,k,le,A,j,ue;function de(){return(de=e((()=>{O=(e,t,n,r=``,i=r)=>D(`Timeline`,`timeline`,e,`<ol class="${t}">\n${n}\n</ol>`,`    <Timeline${r?` ${r}`:``}>\n${n.replace(/<li class="timeline_item">[\s\S]*?<p class="timeline_title">([^<]+)<\/p>[\s\S]*?<\/li>/g,`      <TimelineItem title="$1" />`)}\n    </Timeline>`,`  <Timeline${i?` ${i}`:``}>\n${n.replace(/<li class="timeline_item">[\s\S]*?<p class="timeline_title">([^<]+)<\/p>[\s\S]*?<\/li>/g,`    <TimelineItem title="$1" />`)}\n  </Timeline>`),k=(e,t=``,n=`primary`,r=``)=>`  <li class="timeline_item${r.includes(`active`)?` is-active`:``}${r.includes(`pending`)?` is-pending`:``}"><span class="timeline_dot${r.includes(`outline`)?` timeline_dot-outline`:``} color_${n}" aria-hidden="true"></span><div class="timeline_content">${t?`<time class="timeline_time">${t}</time>`:``}<p class="timeline_title">${e}</p></div></li>`,le={basic:O(`basic`,`timeline`,[k(`프로젝트 킥오프`,`2024-06-01 10:00`),k(`1차 릴리스 완료`,`2024-06-10 14:30`,`success`),k(`성능 이슈 발견`,`2024-06-15 09:00`,`warning`),k(`긴급 패치 배포`,`2024-06-18 16:00`,`danger`)].join(`
`)),simple:O(`simple`,`timeline`,[k(`주문 접수`,`오전 9:12`),k(`배송 준비 중`,`오전 11:45`),k(`배송 완료`,`오후 2:30`,`success`)].join(`
`)),outline:O(`outline`,`timeline`,[k(`기획 단계`,``,`primary`,`outline`),k(`디자인 단계`,``,`primary`,`outline`),k(`개발 단계`,``,`primary`,`outline active`),k(`배포 단계`,``,`primary`,`outline pending`)].join(`
`)),icon:O(`icon`,`timeline timeline_icon timeline_icon-sm`,[k(`팀원 합류`,`2024-06-01`),k(`QA 통과`,`2024-06-10`,`success`),k(`일정 지연 알림`,`2024-06-15`,`warning`),k(`배포 롤백`,`2024-06-18`,`danger`)].join(`
`),`icon iconSize="sm"`,`icon icon-size="sm"`),card:O(`card`,`timeline timeline_card`,[k(`디자인 시스템 v2.0 릴리스`,`2024-06-20 09:00`),k(`접근성 감사 완료`,`2024-06-22 14:00`,`success`),k(`문서 업데이트 예정`,`2024-06-25 11:30`,`info`)].join(`
`),`card`),label:D(`Timeline`,`timeline`,`label`,`<ol class="timeline timeline_label-col"><li class="timeline_item"><time class="timeline_label">2024 Q1</time><span class="timeline_dot color_primary"></span><div class="timeline_content"><p class="timeline_title">알파 버전 출시</p></div></li><li class="timeline_item"><time class="timeline_label">2024 Q3</time><span class="timeline_dot color_success"></span><div class="timeline_content"><p class="timeline_title">정식 출시</p></div></li></ol>`,`    <Timeline labelCol><TimelineItem label="2024 Q1" title="알파 버전 출시" /><TimelineItem label="2024 Q3" color="success" title="정식 출시" /></Timeline>`,`  <Timeline label-col><TimelineItem label="2024 Q1" title="알파 버전 출시" /><TimelineItem label="2024 Q3" color="success" title="정식 출시" /></Timeline>`),alternate:O(`alternate`,`timeline timeline_alternate`,[k(`회사 설립`,`2024년 3월`),k(`컴포넌트 가이드 오픈`,`2024년 6월`),k(`1,000 스타 달성`,`2024년 9월`,`success`),k(`v2 로드맵 공개`,`2025년 1월`,`info`)].join(`
`),`alternate`),horizontal:O(`horizontal`,`timeline timeline_horizontal`,[k(`신청`,`6/20`,`success`),k(`심사`,`6/21`,`success`),k(`승인`,`진행 중`,`primary`,`active`),k(`완료`,`예정`,`primary`,`pending`)].join(`
`),`horizontal`),size:D(`Timeline`,`timeline`,`size`,`<ol class="timeline timeline_sm">${k(`알림 발송`,`10:30`)}</ol>\n<ol class="timeline timeline_lg">${k(`연간 컨퍼런스`,`2024-11-15`)}</ol>`,`    <><Timeline size="sm"><TimelineItem title="알림 발송" time="10:30" /></Timeline><Timeline size="lg"><TimelineItem title="연간 컨퍼런스" time="2024-11-15" /></Timeline></>`,`  <Timeline size="sm"><TimelineItem title="알림 발송" time="10:30" /></Timeline>
  <Timeline size="lg"><TimelineItem title="연간 컨퍼런스" time="2024-11-15" /></Timeline>`),state:O(`state`,`timeline`,[k(`계정 생성`,`완료`,`success`),k(`프로필 설정`,`완료`,`success`),k(`팀 초대`,`진행 중`,`primary`,`active`),k(`첫 프로젝트 생성`,`대기`,`primary`,`pending`)].join(`
`))},A=(e,t,n,r,i=r)=>D(`Tree`,`tree`,e,`<ul class="${t}" role="tree">${n}</ul>`,`    <Tree${t.includes(`tree_bordered`)?` bordered`:``}${t.includes(`tree_lines`)?` lines`:``}${t.includes(`tree_compact`)?` compact`:``} ariaLabel="예시">${r}</Tree>`,`  <Tree${t.includes(`tree_bordered`)?` bordered`:``}${t.includes(`tree_lines`)?` lines`:``}${t.includes(`tree_compact`)?` compact`:``} aria-label="예시">${i}</Tree>`),j=(e,t=``)=>`<li class="tree_item" role="treeitem"><div class="tree_row${t?` ${t}`:``}"><span class="tree_toggle tree_toggle_placeholder"></span><span class="tree_label">${e}</span></div></li>`,ue={basic:A(`basic`,`tree tree_bordered`,j(`src`)+j(`components`)+j(`button.html`,`is-selected`),`<TreeNode label="src" expanded><TreeNode label="components" expanded><TreeNode label="button.html" selected /></TreeNode></TreeNode>`),simple:A(`simple`,`tree`,j(`전자기기`)+j(`노트북`)+j(`스마트폰`)+j(`의류`),`<TreeNode label="전자기기" expanded><TreeNode label="노트북" /><TreeNode label="스마트폰" /></TreeNode><TreeNode label="의류" />`),lines:A(`lines`,`tree tree_lines tree_bordered`,j(`개발본부`)+j(`프론트엔드팀`)+j(`홍길동`)+j(`김철수`),`<TreeNode label="개발본부" expanded><TreeNode label="프론트엔드팀" expanded><TreeNode label="홍길동" /><TreeNode label="김철수" /></TreeNode></TreeNode>`),compact:A(`compact`,`tree tree_compact tree_bordered`,j(`관리자`)+j(`사용자 관리`)+j(`설정 변경`)+j(`뷰어`),`<TreeNode label="관리자" expanded><TreeNode label="사용자 관리" /><TreeNode label="설정 변경" /></TreeNode><TreeNode label="뷰어" />`),plusToggle:A(`plusToggle`,`tree tree_bordered`,`<li class="tree_item"><div class="tree_row"><button class="tree_toggle tree_toggle-plus" aria-expanded="true"></button><span class="tree_label">가이드</span></div></li>`,`<TreeNode label="가이드" expanded plusToggle><TreeNode label="시작하기" plusToggle /></TreeNode>`,`<TreeNode label="가이드" expanded plus-toggle><TreeNode label="시작하기" plus-toggle /></TreeNode>`),checkbox:D(`Tree`,`tree`,`checkbox`,`<ul class="tree tree_bordered" role="tree" aria-multiselectable="true"><li class="tree_item"><div class="tree_row"><label class="tree_check"><input type="checkbox" checked /></label><span class="tree_label">대시보드</span></div></li></ul>`,`    <Tree bordered multiselectable ariaLabel="권한 선택"><TreeNode label="대시보드" prefix={<label className="tree_check"><input type="checkbox" defaultChecked /></label>} /></Tree>`,`  <Tree bordered multiselectable aria-label="권한 선택"><TreeNode label="대시보드"><template #prefix><label class="tree_check"><input type="checkbox" checked /></label></template></TreeNode></Tree>`),meta:A(`meta`,`tree tree_bordered`,`<li class="tree_item"><div class="tree_row"><span class="tree_icon">▣</span><span class="tree_label">assets</span><span class="tree_meta">3개</span></div></li>`,`<TreeNode label="assets" meta="3개" icon={<span>▣</span>} />`,`<TreeNode label="assets" meta="3개"><template #icon>▣</template></TreeNode>`),disabled:A(`disabled`,`tree tree_bordered`,j(`대시보드`)+j(`고급 분석 (Pro)`,`is-disabled`)+j(`API 연동 (Enterprise)`,`is-disabled`),`<TreeNode label="기본 기능" expanded><TreeNode label="대시보드" /><TreeNode label="고급 분석 (Pro)" disabled /></TreeNode>`),selectable:A(`selectable`,`tree tree_bordered`,j(`문서`)+j(`시작하기`,`is-selected`)+j(`컴포넌트`),`<TreeNode label="문서" expanded link><TreeNode label="시작하기" selected link /><TreeNode label="컴포넌트" link /></TreeNode>`)}})))()}var fe;function pe(){return(pe=e((()=>{fe=`<!-- Table 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Table 루트에 공통 클래스를 적용합니다. -->
<div class="table_wrap" data-component="Table">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <table class="table table_bordered table_hover">
    <thead>
      <tr>
        <th scope="col">이름</th>
        <th scope="col">직군</th>
        <th scope="col">상태</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>홍길동</td>
        <td>Frontend</td>
        <td><span class="badge color_success">활성</span></td>
      </tr>
      <tr>
        <td>김철수</td>
        <td>Backend</td>
        <td><span class="badge color_success">활성</span></td>
      </tr>
      <tr>
        <td>이영희</td>
        <td>Design</td>
        <td><span class="badge color_warning">휴가</span></td>
      </tr>
    </tbody>
  </table>
</div>
`})))()}var me;function he(){return(he=e((()=>{me=`{# Table 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<div class="table_wrap" {# Table 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="Table">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <table class="table table_bordered table_hover">
    <thead>
      <tr>
        <th scope="col">이름</th>
        <th scope="col">직군</th>
        <th scope="col">상태</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>홍길동</td>
        <td>Frontend</td>
        <td><span class="badge color_success">활성</span></td>
      </tr>
      <tr>
        <td>김철수</td>
        <td>Backend</td>
        <td><span class="badge color_success">활성</span></td>
      </tr>
      <tr>
        <td>이영희</td>
        <td>Design</td>
        <td><span class="badge color_warning">휴가</span></td>
      </tr>
    </tbody>
  </table>
</div>
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`/**
 * Table 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 고정 열 개수는 CSS에서 제공하는 1~4열 범위로 제한합니다.
const VALID_STICKY_COLS = new Set([1, 2, 3, 4]);
const toCssSize = (value) => (typeof value === 'number' ? \`\${value}rem\` : value);

// 열별 너비 prop을 col 요소의 인라인 크기 스타일로 변환합니다.
function columnStyle(column = {}) {
  return ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null) style[key] = toCssSize(column[key]);
    return style;
  }, {});
}

// 패딩과 줄바꿈 옵션은 열 위치별 CSS 변수로 전달합니다.
function columnVariables(columns) {
  return columns.reduce((style, column, index) => {
    const position = index + 1;
    if (column.padding != null) style[\`--table-col-\${position}-padding\`] = column.padding;
    if (column.nowrap) style[\`--table-col-\${position}-white-space\`] = 'nowrap';
    return style;
  }, {});
}

// 표 스킨, 스크롤, 고정 행·열과 열 설정을 하나의 Table API로 조합합니다.
export function Table({
  children, // thead · tbody 등 표 콘텐츠입니다.
  bordered = false, // 셀 테두리 표시 여부입니다.
  striped = false, // 줄무늬 행 변형 여부입니다.
  compact = false, // 조밀한 패딩입니다.
  hover = false, // 행 호버 강조입니다.
  wrap = true, // 스크롤용 wrapper로 감쌀지 여부입니다.
  scroll = false, // wrapper에 스크롤을 켤지 여부입니다.
  scrollMaxHeight, // 세로 스크롤 최대 높이입니다.
  stickyTop = false, // 헤더 행 고정 여부입니다.
  stickyLeft = false, // 왼쪽 열 고정 여부입니다.
  stickyCols = 1, // 좌측 고정 열 개수(1~4)입니다.
  stickyLeftOffsets = {}, // 고정 열별 left 오프셋 맵입니다.
  columns = [], // 열 너비·패딩 설정 배열입니다.
  className = '', // 추가 클래스입니다.
  style, // 인라인 스타일입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const hasColumns = Array.isArray(columns) && columns.length > 0;
  const resolvedStickyCols = VALID_STICKY_COLS.has(stickyCols) ? stickyCols : 1;
  // 표 자체 변형과 wrapper 변형을 분리해 클래스와 스타일을 계산합니다.
  const tableClasses = [
    'table',
    bordered && 'table_bordered',
    striped && 'table_striped',
    compact && 'table_compact',
    hover && 'table_hover',
    hasColumns && 'table_columns',
    stickyTop && 'table_sticky-top',
    stickyLeft && 'table_sticky-left',
    stickyLeft && \`table_sticky-cols-\${resolvedStickyCols}\`,
  ]
    .filter(Boolean)
    .join(' ');
  const tableStyle = { ...columnVariables(hasColumns ? columns : []) };
  Object.entries(stickyLeftOffsets ?? {}).forEach(([key, value]) => {
    if (value != null && value !== '') tableStyle[\`--table-sticky-left-\${key}\`] = value;
  });
  const colgroup = hasColumns ? (
    <colgroup>
      {columns.map((column, index) => (
        <col key={index} style={columnStyle(column)} />
      ))}
    </colgroup>
  ) : null;

  // wrap=false면 시맨틱 table을 직접 반환하고, 기본값은 스크롤 가능한 wrapper를 둡니다.
  if (!wrap) {
    return (
      <table
        {...props}
        className={[tableClasses, className].filter(Boolean).join(' ')}
        data-component="Table"
        style={{ ...tableStyle, ...style }}
      >
        {colgroup}
        {children}
      </table>
    );
  }

  const wrapStyle = { ...style };
  if (scrollMaxHeight != null && scrollMaxHeight !== '')
    wrapStyle['--table-scroll-max-height'] = scrollMaxHeight;
  return (
    <div
      {...props}
      className={['table_wrap', scroll && 'table_wrap-scroll', className].filter(Boolean).join(' ')}
      data-component="Table"
      style={wrapStyle}
      tabIndex={scroll ? 0 : props.tabIndex}
    >
      <table className={tableClasses} style={tableStyle}>
        {colgroup}
        {children}
      </table>
    </div>
  );
}

export default Table;
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`<!--
  Table 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class와 style을 표·wrapper 계산에 사용하고 나머지 속성만 최외곽 루트에 전달합니다.
defineOptions({ name: 'UxkmTable', inheritAttrs: false });
const props = defineProps({
  bordered: Boolean, // 테두리 표를 켭니다.
  striped: Boolean, // 줄무늬 행을 켭니다.
  compact: Boolean, // 조밀한 패딩입니다.
  hover: Boolean, // 행 호버 강조입니다.
  wrap: { type: Boolean, default: true }, // false면 wrapper 없이 table만 반환합니다.
  scroll: Boolean, // 가로 스크롤 wrapper를 켭니다.
  scrollMaxHeight: String, // 세로 스크롤 최대 높이입니다.
  stickyTop: Boolean, // 헤더 행을 상단에 고정합니다.
  stickyLeft: Boolean, // 좌측 열을 고정합니다.
  stickyCols: { type: Number, default: 1, validator: (value) => [1, 2, 3, 4].includes(value) }, // 좌측 고정 열 개수(1~4)입니다.
  stickyLeftOffsets: { type: Object, default: () => ({}) }, // 고정 열별 left 오프셋 맵입니다.
  columns: { type: Array, default: () => [] }, // 열 너비·패딩 설정 배열입니다.
});
const attrs = useAttrs();
const hasColumns = computed(() => props.columns.length > 0);
// 표 스킨과 sticky 상태를 table_* 공통 클래스로 변환합니다.
const tableClasses = computed(() =>
  [
    'table',
    props.bordered && 'table_bordered',
    props.striped && 'table_striped',
    props.compact && 'table_compact',
    props.hover && 'table_hover',
    hasColumns.value && 'table_columns',
    props.stickyTop && 'table_sticky-top',
    props.stickyLeft && 'table_sticky-left',
    props.stickyLeft && \`table_sticky-cols-\${props.stickyCols}\`,
  ].filter(Boolean),
);
// 열 패딩·줄바꿈과 sticky offset을 위치별 CSS 변수로 전달합니다.
const tableStyle = computed(() => {
  const style = {};
  props.columns.forEach((column, index) => {
    if (column.padding != null) style[\`--table-col-\${index + 1}-padding\`] = column.padding;
    if (column.nowrap) style[\`--table-col-\${index + 1}-white-space\`] = 'nowrap';
  });
  Object.entries(props.stickyLeftOffsets).forEach(([key, value]) => {
    if (value != null && value !== '') style[\`--table-sticky-left-\${key}\`] = value;
  });
  return style;
});
const wrapStyle = computed(() => ({
  ...(typeof attrs.style === 'object' ? attrs.style : {}),
  ...(props.scrollMaxHeight ? { '--table-scroll-max-height': props.scrollMaxHeight } : {}),
}));
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
const colStyle = (column) =>
  ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null)
      style[key] = typeof column[key] === 'number' ? \`\${column[key]}rem\` : column[key];
    return style;
  }, {});
<\/script>

<template>
  <!-- 기본은 스크롤 wrapper를 두고 wrap=false일 때 시맨틱 table을 직접 반환합니다. -->
  <div
    v-if="wrap"
    v-bind="fallthroughAttrs"
    class="table_wrap"
    :class="[scroll && 'table_wrap-scroll', attrs.class]"
    data-component="Table"
    :style="wrapStyle"
  >
    <table :class="tableClasses" :style="tableStyle">
      <colgroup v-if="hasColumns">
        <col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" />
      </colgroup>
      <slot />
    </table>
  </div>
  <table
    v-else
    v-bind="fallthroughAttrs"
    :class="[...tableClasses, attrs.class]"
    data-component="Table"
    :style="{ ...tableStyle, ...(typeof attrs.style === 'object' ? attrs.style : {}) }"
  >
    <colgroup v-if="hasColumns">
      <col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" />
    </colgroup>
    <slot />
  </table>
</template>
`})))()}var be;function xe(){return(xe=e((()=>{be=`<!-- List 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- List 루트에 공통 클래스를 적용합니다. -->
<ul class="list list_bordered" data-component="List">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <li class="list_item" data-component="ListItem">
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <div class="list_content">
      <span class="list_title">홍길동</span><span class="list_meta">프론트엔드 개발자</span>
    </div>
  </li>
  <li class="list_item" data-component="ListItem">
    <span class="avatar color_success" aria-hidden="true">김</span>
    <div class="list_content">
      <span class="list_title">김철수</span><span class="list_meta">백엔드 개발자</span>
    </div>
  </li>
</ul>
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`{# List 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<ul class="list list_bordered" {# List 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="List">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <li class="list_item" data-component="ListItem">
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <div class="list_content">
      <span class="list_title">홍길동</span><span class="list_meta">프론트엔드 개발자</span>
    </div>
  </li>
  <li class="list_item" data-component="ListItem">
    <span class="avatar color_success" aria-hidden="true">김</span>
    <div class="list_content">
      <span class="list_title">김철수</span><span class="list_meta">백엔드 개발자</span>
    </div>
  </li>
</ul>
`})))()}var we;function Te(){return(Te=e((()=>{we=`/**
 * List 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { createContext, Fragment, useContext } from 'react';

// 목록 종류마다 올바른 시맨틱 루트와 공통 변형 클래스를 선택합니다.
const VARIANT_TAG = { default: 'ul', bullet: 'ul', ordered: 'ol', definition: 'dl' };
const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
const VALID_VARIANTS = Object.keys(VARIANT_TAG);
const VALID_TAGS = ['ul', 'ol', 'dl', 'div'];

export const ListContext = createContext({ tag: 'ul', variant: 'default' });

// 목록 의미, 외형, 정의 목록 배치와 인라인 CSS 변수를 구성합니다.
export function List({
  children, // ListItem 자식들 또는 항목 콘텐츠입니다.
  bordered = false, // 테두리 목록입니다.
  split = false, // 항목 사이 구분선 표시 여부입니다.
  block = false, // 블록형 목록입니다.
  size = 'md', // compact면 조밀한 크기입니다.
  variant = 'default', // default · bullet · ordered · definition입니다.
  tag, // 명시적 루트 태그이거나 항목 태그입니다.
  layout = 'block', // block · inline 레이아웃입니다.
  inlineLabelWidth, // inline 레이아웃의 라벨 너비 CSS 값입니다.
  inlineGap, // inline 레이아웃의 간격 CSS 값입니다.
  descAlign = 'left', // 정의 목록 설명 정렬입니다.
  className = '', // 추가 클래스입니다.
  style, // 인라인 스타일입니다.
  role, // 명시적 role입니다.
  ...props // 나머지 속성을 전달합니다.
}) {
  const resolvedVariant = VALID_VARIANTS.includes(variant) ? variant : 'default';
  const Root = VALID_TAGS.includes(tag) ? tag : VARIANT_TAG[resolvedVariant];
  // variant와 layout prop을 list_* 공통 클래스로 변환합니다.
  const classes = [
    'list',
    VARIANT_CLASS[resolvedVariant],
    bordered && 'list_bordered',
    split && 'list_divider',
    block && 'list_block',
    size === 'compact' && 'list_compact',
    layout === 'inline' && 'list_inline',
    resolvedVariant === 'definition' && descAlign === 'right' && 'list_desc-right',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const rootStyle = { ...style };
  if (layout === 'inline' && inlineLabelWidth)
    rootStyle['--list-inline-label-width'] = inlineLabelWidth;
  if (layout === 'inline' && inlineGap) rootStyle['--list-inline-gap'] = inlineGap;

  // ListItem이 부모 목록 의미에 맞는 태그를 고르도록 context를 제공합니다.
  return (
    <ListContext.Provider value={{ tag: Root, variant: resolvedVariant }}>
      <Root
        {...props}
        className={classes}
        data-component="List"
        role={role ?? (Root === 'div' ? 'list' : undefined)}
        style={rootStyle}
      >
        {children}
      </Root>
    </ListContext.Provider>
  );
}

export function ListItem({
  title, // 항목 제목입니다.
  description, // 항목 설명입니다.
  meta, // 메타 정보입니다.
  tag = 'auto', // auto면 부모 목록에 맞는 태그입니다.
  prefix, // 앞쪽 부가 콘텐츠입니다.
  extra, // 뒤쪽 부가 콘텐츠입니다.
  actions, // 우측 액션 영역입니다.
  children, // ListItem 자식들 또는 항목 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  role, // 명시적 role입니다.
  ...props // 나머지 속성을 전달합니다.
}) {
  const context = useContext(ListContext);
  // 정의 목록의 title+description 조합은 형제 dt·dd 쌍으로 렌더링합니다.
  const definitionPair = tag === 'auto' && context.tag === 'dl' && Boolean(title && description);
  if (definitionPair) {
    return (
      <Fragment>
        <dt {...props} className={['list_title', className].filter(Boolean).join(' ')}>
          {title}
        </dt>
        <dd className="list_desc">{description}</dd>
      </Fragment>
    );
  }
  // 명시적 태그가 없으면 부모 ul·ol·dl·div 의미에 맞춰 항목 루트를 선택합니다.
  let Root = tag !== 'auto' && ['li', 'dt', 'dd'].includes(tag) ? tag : 'li';
  if (tag === 'auto' && context.tag === 'dl') Root = title ? 'dt' : 'dd';
  if (tag === 'auto' && context.tag === 'div') Root = 'div';
  const hasContent = Boolean(title || description || meta || children);
  return (
    <Root
      {...props}
      className={['list_item', className].filter(Boolean).join(' ')}
      data-component="ListItem"
      role={role ?? (context.tag === 'div' ? 'listitem' : undefined)}
    >
      {prefix}
      {hasContent ? (
        <div className="list_content">
          {children ?? (
            <>
              {title ? <span className="list_title">{title}</span> : null}
              {meta ? <span className="list_meta">{meta}</span> : null}
              {description ? <span className="list_desc">{description}</span> : null}
            </>
          )}
        </div>
      ) : null}
      {extra ? <span className="list_extra">{extra}</span> : null}
      {actions ? <span className="list_action">{actions}</span> : null}
    </Root>
  );
}

export default List;
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`<!--
  List 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, provide, useAttrs } from 'vue';

// 목록 종류에 맞는 시맨틱 루트와 공통 변형 클래스를 선택합니다.
defineOptions({ name: 'UxkmList', inheritAttrs: false });
const VARIANT_TAG = { default: 'ul', bullet: 'ul', ordered: 'ol', definition: 'dl' };
const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
const props = defineProps({
  bordered: Boolean, // 테두리 목록입니다.
  split: Boolean, // 항목 사이 구분선을 둡니다.
  block: Boolean, // 블록형 목록입니다.
  size: { type: String, default: 'md', validator: (value) => ['md', 'compact'].includes(value) }, // compact면 조밀한 크기입니다.
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bullet', 'ordered', 'definition'].includes(value),
  }, // default · bullet · ordered · definition 목록 변형입니다.
  tag: {
    type: String,
    default: undefined,
    validator: (value) => ['ul', 'ol', 'dl', 'div'].includes(value),
  }, // 명시적 루트 태그(ul · ol · dl · div)입니다.
  layout: {
    type: String,
    default: 'block',
    validator: (value) => ['block', 'inline'].includes(value),
  }, // block · inline 레이아웃입니다.
  inlineLabelWidth: String, // inline 레이아웃의 라벨 너비 CSS 값입니다.
  inlineGap: String, // inline 레이아웃의 간격 CSS 값입니다.
  descAlign: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  }, // 정의 목록 설명 정렬입니다.
});
const attrs = useAttrs();
const rootTag = computed(() => props.tag ?? VARIANT_TAG[props.variant]);
// ListItem이 부모 목록 의미에 맞는 태그를 고르도록 context를 제공합니다.
provide(
  'uxkmListContext',
  computed(() => ({ tag: rootTag.value, variant: props.variant })),
);
// 외형과 정의 목록 배치를 list_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'list',
    VARIANT_CLASS[props.variant],
    props.bordered && 'list_bordered',
    props.split && 'list_divider',
    props.block && 'list_block',
    props.size === 'compact' && 'list_compact',
    props.layout === 'inline' && 'list_inline',
    props.variant === 'definition' && props.descAlign === 'right' && 'list_desc-right',
    attrs.class,
  ].filter(Boolean),
);
const rootStyle = computed(() => ({
  ...(typeof attrs.style === 'object' ? attrs.style : {}),
  ...(props.layout === 'inline' && props.inlineLabelWidth
    ? { '--list-inline-label-width': props.inlineLabelWidth }
    : {}),
  ...(props.layout === 'inline' && props.inlineGap ? { '--list-inline-gap': props.inlineGap } : {}),
}));
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, role: _role, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- ul·ol·dl·div 의미와 필요한 list role을 동적 루트에 적용합니다. -->
  <component
    :is="rootTag"
    v-bind="fallthroughAttrs"
    :class="classes"
    data-component="List"
    :role="attrs.role ?? (rootTag === 'div' ? 'list' : undefined)"
    :style="rootStyle"
    ><slot
  /></component>
</template>
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`<!--
  ListItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, inject, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmListItem', inheritAttrs: false });
const props = defineProps({
  title: String, // 항목 제목입니다.
  description: String, // 항목 설명입니다.
  meta: String, // 메타 정보입니다.
  tag: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'li', 'dt', 'dd'].includes(value),
  }, // auto면 부모 목록에 맞는 태그(li · dt · dd)입니다.
});
const attrs = useAttrs();
const slots = useSlots();
const context = inject(
  'uxkmListContext',
  computed(() => ({ tag: 'ul', variant: 'default' })),
);
// 정의 목록의 title+description 조합은 형제 dt·dd 쌍으로 렌더링합니다.
const definitionPair = computed(
  () =>
    props.tag === 'auto' && context.value.tag === 'dl' && Boolean(props.title && props.description),
);
// 명시적 태그가 없으면 부모 ul·ol·dl·div 의미에 맞춰 항목 루트를 선택합니다.
const rootTag = computed(() => {
  if (props.tag !== 'auto') return props.tag;
  if (context.value.tag === 'dl') return props.title ? 'dt' : 'dd';
  if (context.value.tag === 'div') return 'div';
  return 'li';
});
const hasContent = computed(() =>
  Boolean(props.title || props.description || props.meta || slots.default),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, role: _role, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- prefix·본문·extra·actions slot을 독립 영역으로 배치합니다. -->
  <template v-if="definitionPair">
    <dt v-bind="fallthroughAttrs" class="list_title" :class="attrs.class">{{ title }}</dt>
    <dd class="list_desc">{{ description }}</dd>
  </template>
  <component
    v-else
    :is="rootTag"
    v-bind="fallthroughAttrs"
    class="list_item"
    :class="attrs.class"
    data-component="ListItem"
    :role="attrs.role ?? (context.tag === 'div' ? 'listitem' : undefined)"
  >
    <slot name="prefix" />
    <div v-if="hasContent" class="list_content">
      <slot
        ><span v-if="title" class="list_title">{{ title }}</span
        ><span v-if="meta" class="list_meta">{{ meta }}</span
        ><span v-if="description" class="list_desc">{{ description }}</span></slot
      >
    </div>
    <span v-if="$slots.extra" class="list_extra"><slot name="extra" /></span>
    <span v-if="$slots.actions" class="list_action"><slot name="actions" /></span>
  </component>
</template>
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`<!-- Stat 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<div class="stat_group stat_group-3">
  <!-- Stat 루트에 공통 클래스를 적용합니다. -->
<div class="stat stat_card stat_shadow" data-component="Stat">
    <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
    <span class="stat_label">총 매출</span>
    <div class="stat_value-row">
      <span class="stat_prefix">₩</span><span class="stat_value">4.2M</span>
    </div>
    <span class="stat_desc color_success">+8.2%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">신규 가입</span><span class="stat_value">1,234</span
    ><span class="stat_desc color_success">+15.3%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">이탈률</span>
    <div class="stat_value-row">
      <span class="stat_value">2.4</span><span class="stat_suffix">%</span>
    </div>
    <span class="stat_desc color_danger">+0.3%p</span>
  </div>
</div>
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`{# Stat 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<div class="stat_group stat_group-3">
  <div class="stat stat_card stat_shadow" {# Stat 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="Stat">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
    <span class="stat_label">총 매출</span>
    <div class="stat_value-row">
      <span class="stat_prefix">₩</span><span class="stat_value">4.2M</span>
    </div>
    <span class="stat_desc color_success">+8.2%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">신규 가입</span><span class="stat_value">1,234</span
    ><span class="stat_desc color_success">+15.3%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">이탈률</span>
    <div class="stat_value-row">
      <span class="stat_value">2.4</span><span class="stat_suffix">%</span>
    </div>
    <span class="stat_desc color_danger">+0.3%p</span>
  </div>
</div>
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`/**
 * Stat 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 추세 아이콘은 장식용으로 숨기고 trend 텍스트가 실제 의미를 전달합니다.
const TrendIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 15 6-6 6 6" />
  </svg>
);

// 라벨, 값, 단위, 추세와 카드 외형을 하나의 Stat API로 조합합니다.
export function Stat({
  title, // 통계 라벨입니다.
  value, // 주요 수치입니다.
  prefix, // 수치 앞 접두어입니다.
  suffix, // 수치 뒤 접미어입니다.
  description, // 보조 설명입니다.
  trend, // 추세 텍스트입니다.
  trendColor, // 추세 색상 클래스입니다.
  trendIcon, // 추세 옆 아이콘입니다.
  size = 'md', // sm · md · lg 크기입니다.
  card = false, // 카드형 외형입니다.
  shadow = false, // 그림자 카드입니다.
  children, // 커스텀 본문입니다.
  className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  // 크기·카드 스킨과 추세 색상을 각 영역의 공통 클래스로 변환합니다.
  const classes = [
    'stat',
    resolvedSize !== 'md' && \`stat_\${resolvedSize}\`,
    card && 'stat_card',
    shadow && 'stat_shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const trendClasses = ['stat_trend', trendColor && \`color_\${trendColor}\`]
    .filter(Boolean)
    .join(' ');
  const descriptionClasses = ['stat_desc', description && trendColor && \`color_\${trendColor}\`]
    .filter(Boolean)
    .join(' ');
  const showHeader = Boolean(title && trend);
  const hasValue = value != null && value !== '';
  // 접두·접미가 있으면 값 행을 분리하고, 없으면 단일 value 요소를 사용합니다.
  const valueNode =
    prefix || suffix ? (
      <div className="stat_value-row">
        {prefix ? <span className="stat_prefix">{prefix}</span> : null}
        {hasValue ? <span className="stat_value">{value}</span> : null}
        {suffix ? <span className="stat_suffix">{suffix}</span> : null}
      </div>
    ) : hasValue ? (
      <span className="stat_value">{value}</span>
    ) : null;
  const trendNode = (
    <>
      {trendIcon ?? <TrendIcon />}
      {trend}
    </>
  );
  return (
    <div {...props} className={classes} data-component="Stat">
      {showHeader ? (
        <div className="stat_header">
          <span className="stat_label">{title}</span>
          <span className={trendClasses}>{trendNode}</span>
        </div>
      ) : title ? (
        <span className="stat_label">{title}</span>
      ) : null}
      {valueNode}
      {description ? (
        <span className={descriptionClasses}>{description}</span>
      ) : trend && !showHeader ? (
        <span className={trendClasses}>{trendNode}</span>
      ) : null}
      {children}
    </div>
  );
}

export default Stat;
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`<!--
  Stat 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmStat', inheritAttrs: false });
const props = defineProps({
  title: String, // 통계 라벨입니다.
  value: [String, Number], // 주요 수치입니다.
  prefix: String, // 수치 앞 접두어입니다.
  suffix: String, // 수치 뒤 접미어입니다.
  description: String, // 보조 설명입니다.
  trend: String, // 추세 텍스트입니다.
  trendColor: String, // 추세 색상 클래스입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  card: Boolean, // 카드형 외형입니다.
  shadow: Boolean, // 그림자 카드입니다.
});
const attrs = useAttrs();
const slots = useSlots();
// 크기·카드 스킨과 추세 색상을 각 영역의 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'stat',
    props.size !== 'md' && \`stat_\${props.size}\`,
    props.card && 'stat_card',
    props.shadow && 'stat_shadow',
    attrs.class,
  ].filter(Boolean),
);
const trendClasses = computed(() =>
  ['stat_trend', props.trendColor && \`color_\${props.trendColor}\`].filter(Boolean),
);
const descriptionClasses = computed(() =>
  ['stat_desc', props.description && props.trendColor && \`color_\${props.trendColor}\`].filter(
    Boolean,
  ),
);
const showHeader = computed(() => Boolean(props.title && props.trend));
const showValueRow = computed(() => Boolean(props.prefix || props.suffix || slots.value));
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- 접두·접미가 있으면 value-row를 만들고 추세는 라벨 옆 또는 설명 위치에 한 번만 표시합니다. -->
  <div v-bind="fallthroughAttrs" :class="classes" data-component="Stat">
    <div v-if="showHeader" class="stat_header">
      <span class="stat_label">{{ title }}</span
      ><span :class="trendClasses"
        ><slot name="trend-icon"
          ><svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m6 15 6-6 6 6" /></svg></slot
        >{{ trend }}</span
      >
    </div>
    <span v-else-if="title" class="stat_label">{{ title }}</span>
    <div v-if="showValueRow" class="stat_value-row">
      <span v-if="prefix" class="stat_prefix">{{ prefix }}</span
      ><span v-if="value != null || $slots.value" class="stat_value"
        ><slot name="value">{{ value }}</slot></span
      ><span v-if="suffix" class="stat_suffix">{{ suffix }}</span>
    </div>
    <span v-else-if="value != null || $slots.value" class="stat_value"
      ><slot name="value">{{ value }}</slot></span
    >
    <span v-if="description" :class="descriptionClasses">{{ description }}</span>
    <span v-else-if="trend && !showHeader" :class="trendClasses"
      ><slot name="trend-icon"
        ><svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 15 6-6 6 6" /></svg></slot
      >{{ trend }}</span
    >
    <slot />
  </div>
</template>
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`<!-- Calendar 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Calendar · 기본: 헤더, 요일, 월간 날짜 그리드로 구성합니다. -->
<div class="calendar" role="application" aria-label="2024년 6월">
  <div class="calendar_header">
    <button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="이전 달">‹</button
    ><span class="calendar_title">2024년 6월</span
    ><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="다음 달">
      ›
    </button>
  </div>
  <div class="calendar_weekdays" aria-hidden="true">
    <span class="calendar_weekday">일</span><span class="calendar_weekday">월</span
    ><span class="calendar_weekday">화</span><span class="calendar_weekday">수</span
    ><span class="calendar_weekday">목</span><span class="calendar_weekday">금</span
    ><span class="calendar_weekday">토</span>
  </div>
  <div class="<!-- 요일·날짜 셀을 그리드에 배치합니다. -->
calendar_grid">
    <button class="calendar_day is-other-month" type="button" disabled>26</button
    ><button class="calendar_day" type="button">1</button
    ><button class="calendar_day is-today" type="button" aria-current="date">12</button
    ><button class="calendar_day is-selected" type="button" aria-selected="true">15</button>
  </div>
</div>

<!-- Calendar · 헤더 없음: 상위 UI에서 제목을 제공할 때 사용합니다. -->
<div class="calendar calendar_no-header" role="application" aria-label="2024년 6월">
  <div class="calendar_weekdays" aria-hidden="true">
    <span class="calendar_weekday">일</span><span class="calendar_weekday">월</span
    ><span class="calendar_weekday">화</span><span class="calendar_weekday">수</span
    ><span class="calendar_weekday">목</span><span class="calendar_weekday">금</span
    ><span class="calendar_weekday">토</span>
  </div>
  <div class="calendar_grid">
    <button class="calendar_day" type="button">1</button
    ><button class="calendar_day is-selected" type="button">15</button>
  </div>
</div>

<!-- Calendar · 날짜만: 헤더와 요일을 모두 생략합니다. -->
<div
  class="calendar calendar_minimal calendar_compact calendar_borderless"
  role="application"
  aria-label="2024년 6월 날짜만"
>
  <div class="calendar_grid">
    <button class="calendar_day" type="button">1</button
    ><button class="calendar_day is-today" type="button">12</button
    ><button class="calendar_day is-selected" type="button">15</button>
  </div>
</div>

<!-- Calendar · 주간: calendar_nav와 7열 한 행을 사용합니다. -->
<div class="calendar calendar_week calendar_shadow" role="application" aria-label="6월 9일~15일">
  <div class="calendar_nav">
    <button type="button" aria-label="이전 주">‹</button
    ><span class="calendar_nav-label">6월 9일 ~ 15일</span
    ><button type="button" aria-label="다음 주">›</button>
  </div>
  <div class="calendar_grid calendar_grid-week">
    <button class="calendar_day is-sunday" type="button">9</button
    ><button class="calendar_day is-today" type="button">12</button
    ><button class="calendar_day is-selected is-saturday" type="button">15</button>
  </div>
</div>

<!-- Calendar · 휠: 년·월·일 선택 열을 배치합니다. -->
<div class="calendar calendar_wheel calendar_shadow" role="group" aria-label="날짜 휠 선택">
  <div class="calendar_wheel-toolbar">
    <button type="button">취소</button><span class="calendar_wheel-title">날짜 선택</span
    ><button type="button">완료</button>
  </div>
  <div class="calendar_wheel-body">
    <div class="calendar_wheel-highlight" aria-hidden="true"></div>
    <div class="calendar_wheel-columns">
      <div class="calendar_wheel-column">
        <ul class="calendar_wheel-list" role="listbox" aria-label="년">
          <li>
            <button class="calendar_wheel-item is-selected" type="button" aria-selected="true">
              2024년
            </button>
          </li>
        </ul>
      </div>
      <div class="calendar_wheel-column">
        <ul class="calendar_wheel-list" role="listbox" aria-label="월">
          <li>
            <button class="calendar_wheel-item is-selected" type="button" aria-selected="true">
              6월
            </button>
          </li>
        </ul>
      </div>
      <div class="calendar_wheel-column">
        <ul class="calendar_wheel-list" role="listbox" aria-label="일">
          <li>
            <button class="calendar_wheel-item is-selected" type="button" aria-selected="true">
              15일
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Calendar · 범위 선택: 시작·구간·종료 상태를 조합합니다. -->
<div class="calendar" role="application" aria-label="2024년 6월 범위 선택">
  <div class="calendar_grid">
    <button class="calendar_day is-selected is-range-start" type="button">10</button
    ><button class="calendar_day is-in-range" type="button">11</button
    ><button class="calendar_day is-in-range" type="button">12</button
    ><button class="calendar_day is-selected is-range-end" type="button">18</button>
  </div>
</div>

<!-- Calendar · 이벤트 마커: has-event로 일정이 있는 날짜를 표시합니다. -->
<div class="calendar calendar_weekends" role="application" aria-label="2024년 6월 이벤트">
  <div class="calendar_grid">
    <button class="calendar_day has-event" type="button">3</button
    ><button class="calendar_day is-today has-event" type="button">12</button
    ><button class="calendar_day is-selected has-event" type="button">15</button>
  </div>
</div>

<!-- Calendar · 스킨: borderless, ghost, shadow 외형을 제공합니다. -->
<div class="calendar_group">
  <div class="calendar calendar_borderless" aria-label="Borderless">
    <div class="calendar_grid"><button class="calendar_day">8</button></div>
  </div>
  <div class="calendar calendar_ghost" aria-label="Ghost">
    <div class="calendar_grid"><button class="calendar_day">8</button></div>
  </div>
  <div class="calendar calendar_shadow" aria-label="Shadow">
    <div class="calendar_grid"><button class="calendar_day">8</button></div>
  </div>
</div>

<!-- Calendar · 크기: sm, compact, lg로 셀과 패딩을 조절합니다. -->
<div class="calendar_group">
  <div class="calendar calendar_sm" aria-label="Small">
    <div class="calendar_grid"><button class="calendar_day">7</button></div>
  </div>
  <div class="calendar calendar_compact" aria-label="Compact">
    <div class="calendar_grid"><button class="calendar_day">7</button></div>
  </div>
  <div class="calendar calendar_lg" aria-label="Large">
    <div class="calendar_grid"><button class="calendar_day">7</button></div>
  </div>
</div>

<!-- Calendar · 푸터: 오늘·초기화·확인 액션을 배치합니다. -->
<div class="calendar calendar_shadow" role="application" aria-label="2024년 6월 푸터 포함">
  <div class="calendar_grid"><button class="calendar_day is-selected">15</button></div>
  <div class="calendar_footer">
    <button type="button" class="btn btn_text color_primary btn_sm">오늘</button>
    <div class="calendar_footer-actions">
      <button type="button" class="btn btn_ghost btn_sm">초기화</button
      ><button type="button" class="btn btn_filled color_primary btn_sm">확인</button>
    </div>
  </div>
</div>

<!-- Calendar · 이중 패널: 두 달을 나란히 배치합니다. -->
<div class="calendar_group">
  <div class="calendar calendar_compact calendar_shadow" aria-label="2024년 6월">
    <div class="calendar_header"><span class="calendar_title">2024년 6월</span></div>
    <div class="calendar_grid">
      <button class="calendar_day is-range-start is-selected">24</button>
    </div>
  </div>
  <div class="calendar calendar_compact calendar_shadow" aria-label="2024년 7월">
    <div class="calendar_header"><span class="calendar_title">2024년 7월</span></div>
    <div class="calendar_grid">
      <button class="calendar_day is-range-end is-selected">5</button>
    </div>
  </div>
</div>

<!-- Calendar · 세로 일정: 날짜별 시간·제목·설명을 표시합니다. -->
<div class="calendar calendar_agenda calendar_shadow" role="feed" aria-label="2024년 6월 일정">
  <div class="calendar_header"><span class="calendar_title">6월 14일 ~ 20일</span></div>
  <ol class="calendar_agenda-list">
    <li class="calendar_agenda-day is-today">
      <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">토</span
        ><span class="calendar_agenda-daynum">15</span>
      </div>
      <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
          <li class="calendar_agenda-event color_primary">
            <span class="calendar_agenda-event-time">09:00</span>
            <div class="calendar_agenda-event-main">
              <span class="calendar_agenda-event-title">팀 스탠드업</span
              ><span class="calendar_agenda-event-desc">주간 진행 상황 공유</span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ol>
</div>

<!-- Calendar · 상태: 읽기 전용과 전체 비활성을 제공합니다. -->
<div class="calendar_group">
  <div class="calendar calendar_readonly" aria-label="읽기 전용 캘린더">
    <div class="calendar_grid">
      <button class="calendar_day is-selected" tabindex="-1">9</button>
    </div>
  </div>
  <div class="calendar is-disabled" aria-label="비활성 캘린더" aria-disabled="true">
    <div class="calendar_grid"><button class="calendar_day is-disabled" disabled>9</button></div>
  </div>
</div>
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`{# Calendar 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# Calendar는 HTML과 동일한 OOCSS 예시를 Nunjucks 데이터로 반복 구성할 수 있습니다. #}
{% set weekdays = ['일', '월', '화', '수', '목', '금', '토'] %}

{# Calendar · 기본 #}
<div class="calendar" role="application" aria-label="2024년 6월">
  <div class="calendar_header">
    <button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="이전 달">‹</button
    ><span class="calendar_title">2024년 6월</span
    ><button class="btn btn_ghost btn_icon-only btn_sm" type="button" aria-label="다음 달">
      ›
    </button>
  </div>
  <div class="calendar_weekdays" aria-hidden="true">
    {% for label in weekdays %}<span class="calendar_weekday">{{ label }}</span
    >{% endfor %}
  </div>
  <div class="calendar_grid">
    {% for day in range(1, 31) %}<button
      class="calendar_day{% if day == 12 %} is-today{% endif %}{% if day == 15 %} is-selected{% endif %}"
      type="button"
    >
      {{ day }}</button
    >{% endfor %}
  </div>
</div>

{# Calendar · 헤더 없음 #}
<div class="calendar calendar_no-header" role="application" aria-label="2024년 6월">
  <div class="calendar_weekdays" aria-hidden="true">
    {% for label in weekdays %}<span class="calendar_weekday">{{ label }}</span
    >{% endfor %}
  </div>
  <div class="calendar_grid">
    <button class="calendar_day">1</button><button class="calendar_day is-selected">15</button>
  </div>
</div>

{# Calendar · 날짜만 #}
<div
  class="calendar calendar_minimal calendar_compact calendar_borderless"
  role="application"
  aria-label="2024년 6월 날짜만"
>
  <div class="calendar_grid">
    <button class="calendar_day">1</button><button class="calendar_day is-today">12</button
    ><button class="calendar_day is-selected">15</button>
  </div>
</div>

{# Calendar · 주간 #}
<div class="calendar calendar_week calendar_shadow" role="application" aria-label="6월 9일~15일">
  <div class="calendar_nav">
    <button type="button" aria-label="이전 주">‹</button
    ><span class="calendar_nav-label">6월 9일 ~ 15일</span
    ><button type="button" aria-label="다음 주">›</button>
  </div>
  <div class="calendar_grid calendar_grid-week">
    {% for day in range(9, 16) %}<button class="calendar_day">{{ day }}</button
    >{% endfor %}
  </div>
</div>

{# Calendar · 휠 #}
<div class="calendar calendar_wheel calendar_shadow" role="group" aria-label="날짜 휠 선택">
  <div class="calendar_wheel-toolbar">
    <button type="button">취소</button><span class="calendar_wheel-title">날짜 선택</span
    ><button type="button">완료</button>
  </div>
  <div class="calendar_wheel-body">
    <div class="calendar_wheel-highlight"></div>
    <div class="calendar_wheel-columns">
      {% for item in ['2024년', '6월', '15일'] %}
      <div class="calendar_wheel-column">
        <ul class="calendar_wheel-list" role="listbox">
          <li>
            <button class="calendar_wheel-item is-selected" aria-selected="true">
              {{ item }}
            </button>
          </li>
        </ul>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

{# Calendar · 범위 선택 #}
<div class="calendar" aria-label="범위 선택">
  <div class="calendar_grid">
    <button class="calendar_day is-selected is-range-start">10</button
    >{% for day in range(11, 18) %}<button class="calendar_day is-in-range">
      {{ day }}</button
    >{% endfor %}<button class="calendar_day is-selected is-range-end">18</button>
  </div>
</div>

{# Calendar · 이벤트 마커 #}
<div class="calendar calendar_weekends" aria-label="이벤트">
  <div class="calendar_grid">
    <button class="calendar_day has-event">3</button
    ><button class="calendar_day is-today has-event">12</button
    ><button class="calendar_day is-selected has-event">15</button>
  </div>
</div>

{# Calendar · 스킨 #}
<div class="calendar_group">
  {% for skin in ['borderless', 'ghost', 'shadow'] %}
  <div class="calendar calendar_{{ skin }}" aria-label="{{ skin }}">
    <div class="calendar_grid"><button class="calendar_day">8</button></div>
  </div>
  {% endfor %}
</div>

{# Calendar · 크기 #}
<div class="calendar_group">
  {% for size in ['sm', 'compact', 'lg'] %}
  <div class="calendar calendar_{{ size }}" aria-label="{{ size }}">
    <div class="calendar_grid"><button class="calendar_day">7</button></div>
  </div>
  {% endfor %}
</div>

{# Calendar · 푸터 #}
<div class="calendar calendar_shadow" aria-label="푸터 포함">
  <div class="calendar_grid"><button class="calendar_day is-selected">15</button></div>
  <div class="calendar_footer">
    <button type="button">오늘</button>
    <div class="calendar_footer-actions">
      <button type="button">초기화</button><button type="button">확인</button>
    </div>
  </div>
</div>

{# Calendar · 이중 패널 #}
<div class="calendar_group">
  {% for month in ['6월', '7월'] %}
  <div class="calendar calendar_compact calendar_shadow" aria-label="2024년 {{ month }}">
    <div class="calendar_header">
      <span class="calendar_title"
        >2024년
        {{ month }}</span
      >
    </div>
    <div class="calendar_grid"><button class="calendar_day is-selected">15</button></div>
  </div>
  {% endfor %}
</div>

{# Calendar · 세로 일정 #}
<div class="calendar calendar_agenda calendar_shadow" role="feed" aria-label="2024년 6월 일정">
  <div class="calendar_header"><span class="calendar_title">6월 14일 ~ 20일</span></div>
  <ol class="calendar_agenda-list">
    <li class="calendar_agenda-day is-today">
      <div class="calendar_agenda-date">
        <span class="calendar_agenda-weekday">토</span
        ><span class="calendar_agenda-daynum">15</span>
      </div>
      <div class="calendar_agenda-body">
        <ul class="calendar_agenda-events">
          <li class="calendar_agenda-event color_primary">
            <span class="calendar_agenda-event-time">09:00</span
            ><span class="calendar_agenda-event-title">팀 스탠드업</span>
          </li>
        </ul>
      </div>
    </li>
  </ol>
</div>

{# Calendar · 상태 #}
<div class="calendar_group">
  <div class="calendar calendar_readonly" aria-label="읽기 전용">
    <div class="calendar_grid">
      <button class="calendar_day is-selected" tabindex="-1">9</button>
    </div>
  </div>
  <div class="calendar is-disabled" aria-label="비활성" aria-disabled="true">
    <div class="calendar_grid"><button class="calendar_day is-disabled" disabled>9</button></div>
  </div>
</div>
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`/**
 * Calendar 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useMemo, useRef, useState } from 'react';

const cx = (...values) => values.filter(Boolean).join(' ');
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

// 월간 그리드에 이전·현재·다음 달 셀과 선택·범위·이벤트 상태를 생성합니다.
function monthDays({
  partial, // 현재 달만 일부 일로 채울 때 일 수입니다.
  selected = 15, // 선택된 일입니다.
  today = 12, // 오늘로 표시할 일입니다.
  events = [], // 이벤트가 있는 일 목록입니다.
  rangeStart, // 범위 선택 시작일입니다.
  rangeEnd, // 범위 선택 종료일입니다.
} = {}) {
  const cells = [];
  if (!partial) [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, otherMonth: true }));
  const count = partial || 30;
  for (let day = 1; day <= count; day += 1) {
    cells.push({
      day,
      today: day === today,
      selected: day === selected || day === rangeStart || day === rangeEnd,
      rangeStart: day === rangeStart,
      rangeEnd: day === rangeEnd,
      inRange: rangeStart != null && rangeEnd != null && day > rangeStart && day < rangeEnd,
      event: events.includes(day),
    });
  }
  if (!partial) [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, otherMonth: true }));
  return cells;
}

// 월·주·휠·일정 레이아웃과 스킨·상태를 Calendar 루트에 적용합니다.
export function Calendar({
  title, // 헤더 제목입니다.
  ariaLabel, // 캘린더 접근성 이름입니다.
  header, // 커스텀 헤더 콘텐츠입니다.
  weekdays, // 요일 행 콘텐츠입니다.
  footer, // 푸터 콘텐츠입니다.
  children, // 날짜 그리드 콘텐츠입니다.
  noHeader = false, // 헤더 숨김 여부입니다.
  minimal = false, // 미니멀 스킨입니다.
  compact = false, // 조밀한 캘린더입니다.
  borderless = false, // 테두리 없는 스킨입니다.
  shadow = false, // 그림자 스킨입니다.
  ghost = false, // 고스트 스킨입니다.
  week = false, // 주 단위 보기입니다.
  readonly = false, // 읽기 전용입니다.
  disabled = false, // 비활성 상태입니다.
  weekends = false, // 주말 강조입니다.
  agenda = false, // 아젠다 레이아웃입니다.
  wheel = false, // 휠 선택 모드입니다.
  size = '', // 크기 변형 클래스입니다.
  className = '', // 추가 클래스입니다.
  role = 'application', // 루트 role입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const classes = cx(
    'calendar',
    noHeader && 'calendar_no-header',
    minimal && 'calendar_minimal',
    compact && 'calendar_compact',
    borderless && 'calendar_borderless',
    shadow && 'calendar_shadow',
    ghost && 'calendar_ghost',
    week && 'calendar_week',
    readonly && 'calendar_readonly',
    disabled && 'is-disabled',
    weekends && 'calendar_weekends',
    agenda && 'calendar_agenda',
    wheel && 'calendar_wheel',
    size === 'sm' && 'calendar_sm',
    size === 'lg' && 'calendar_lg',
    className,
  );
  const resolvedRole = role === 'feed' ? 'region' : role;
  return (
    <div
      className={classes}
      data-component="Calendar"
      role={resolvedRole}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {header ??
        (title && !noHeader && !minimal ? <CalendarHeader title={title} showNav={false} /> : null)}
      {weekdays}
      {children}
      {footer}
    </div>
  );
}

export function CalendarHeader({
  title, // 헤더 제목입니다.
  prevLabel = '이전 달', // 이전 이동 버튼의 접근성 이름입니다.
  nextLabel = '다음 달', // 다음 이동 버튼의 접근성 이름입니다.
  showNav = true, // 이전·다음 네비게이션 표시 여부입니다.
  showPrev, // 이전 버튼 표시 여부입니다.
  showNext, // 다음 버튼 표시 여부입니다.
  children, // 제목 옆 추가 헤더 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const prev = showPrev ?? showNav;
  const next = showNext ?? showNav;
  return (
    <div className={cx('calendar_header', className)} {...props}>
      {prev ? (
        <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>
          ‹
        </button>
      ) : null}
      <span className="calendar_title">{title}</span>
      {next ? (
        <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>
          ›
        </button>
      ) : null}
      {children}
    </div>
  );
}

export function CalendarNav({
  label, // 네비게이션 가운데 레이블입니다.
  prevLabel = '이전 주', // 이전 버튼의 접근성 이름입니다.
  nextLabel = '다음 주', // 다음 버튼의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_nav', className)}>
      <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>
        ‹
      </button>
      <span className="calendar_nav-label">{label}</span>
      <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>
        ›
      </button>
    </div>
  );
}

export function CalendarWeekdays({
  labels = WEEKDAYS, // 요일 레이블 배열입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_weekdays', className)} aria-hidden="true">
      {labels.map((label) => (
        <span key={label} className="calendar_weekday">
          {label}
        </span>
      ))}
    </div>
  );
}

export function CalendarDay({
  day, // 날짜 숫자입니다.
  otherMonth, // 이전·다음 달 날짜 여부입니다.
  today, // 오늘 날짜 여부입니다.
  selected, // 선택됨 여부입니다.
  disabled, // 비활성 여부입니다.
  sunday, // 일요일 스타일 여부입니다.
  saturday, // 토요일 스타일 여부입니다.
  rangeStart, // 범위 선택 시작일 여부입니다.
  rangeEnd, // 범위 선택 종료일 여부입니다.
  inRange, // 범위 안 날짜 여부입니다.
  event, // 이벤트 표시 여부입니다.
  readonly, // 읽기 전용으로 포커스를 막을지 여부입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 날짜 상태를 is-* 클래스와 현재·선택·비활성 접근성 속성에 함께 연결합니다.
  const classes = cx(
    'calendar_day',
    otherMonth && 'is-other-month',
    today && 'is-today',
    selected && 'is-selected',
    disabled && 'is-disabled',
    sunday && 'is-sunday',
    saturday && 'is-saturday',
    rangeStart && 'is-range-start',
    rangeEnd && 'is-range-end',
    inRange && 'is-in-range',
    event && 'has-event',
    className,
  );
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || (otherMonth && !(selected || inRange)) || undefined}
      aria-current={today ? 'date' : undefined}
      aria-pressed={selected || undefined}
      tabIndex={readonly ? -1 : undefined}
      {...props}
    >
      {day}
    </button>
  );
}

export function CalendarGrid({
  children, // 날짜 그리드 콘텐츠입니다.
  week = false, // 주 단위 보기입니다.
  className = '', // 추가 클래스입니다.
}) {
  return (
    <div className={cx('calendar_grid', week && 'calendar_grid-week', className)}>{children}</div>
  );
}

export function CalendarMonth({
  days, // 직접 구성한 날짜 셀 배열입니다.
  selected = 15, // 선택된 일자입니다.
  today = 12, // 오늘로 표시할 일자입니다.
  disabled = [], // 비활성 일자 배열입니다.
  events = [], // 이벤트 표시 일자 배열입니다.
  rangeStart, // 범위 시작 일자입니다.
  rangeEnd, // 범위 종료 일자입니다.
  weekends = false, // 주말 강조 여부입니다.
  partial, // 부분 월(일자 수) 모드입니다.
  week = false, // 주간 그리드로 렌더할지 여부입니다.
  readonly = false, // 읽기 전용 여부입니다.
}) {
  // 외부 days가 없으면 상태 prop으로 셀을 만들고 동일한 CalendarDay API로 반복합니다.
  const resolved = useMemo(
    () =>
      days?.length ? days : monthDays({ partial, selected, today, events, rangeStart, rangeEnd }),
    [days, partial, selected, today, events, rangeStart, rangeEnd],
  );
  return (
    <CalendarGrid week={week}>
      {resolved.map((cell, index) => (
        <CalendarDay
          key={\`\${cell.day}-\${index}\`}
          {...cell}
          disabled={cell.disabled || disabled.includes?.(cell.day)}
          sunday={cell.sunday ?? (weekends && index % 7 === 0)}
          saturday={cell.saturday ?? (weekends && index % 7 === 6)}
          readonly={readonly}
        />
      ))}
    </CalendarGrid>
  );
}

export function CalendarFooter({
  children, // 기본 액션 대신 사용할 푸터 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_footer', className)}>
      <button type="button" className="btn btn_text color_primary btn_sm">
        오늘
      </button>
      <div className="calendar_footer-actions">
        {children ?? (
          <>
            <button type="button" className="btn btn_ghost btn_sm">
              초기화
            </button>
            <button type="button" className="btn btn_filled color_primary btn_sm">
              확인
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function CalendarGroup({
  children, // 그룹에 배치할 달력들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return <div className={cx('calendar_group', className)}>{children}</div>;
}

export function CalendarWheel({
  title, // 휠 툴바 제목입니다.
  shadow, // 그림자 스킨 여부입니다.
  borderless, // 테두리 없는 스킨 여부입니다.
  footer = false, // 휠 푸터 영역 표시 여부입니다.
  toolbar = true, // 툴바 표시 여부입니다.
  cancelLabel, // 취소 버튼 레이블입니다.
  confirmLabel, // 확인 버튼 레이블입니다.
  ariaLabel, // 휠 달력의 접근 가능한 이름입니다.
  toolbarContent, // 기본 툴바 대신 사용할 콘텐츠입니다.
  footerContent, // 휠 푸터에 넣을 콘텐츠입니다.
  children, // 휠 컬럼들입니다.
}) {
  const showToolbar = toolbar && (toolbarContent || title || cancelLabel || confirmLabel);
  return (
    <Calendar wheel shadow={shadow} borderless={borderless} role="group" ariaLabel={ariaLabel}>
      {showToolbar ? (
        <div className="calendar_wheel-toolbar">
          {toolbarContent ?? (
            <>
              {cancelLabel ? (
                <button className="btn btn_text btn_sm" type="button">
                  {cancelLabel}
                </button>
              ) : null}
              <span className="calendar_wheel-title">{title}</span>
              {confirmLabel ? (
                <button className="btn btn_text color_primary btn_sm" type="button">
                  {confirmLabel}
                </button>
              ) : null}
            </>
          )}
        </div>
      ) : null}
      <div className="calendar_wheel-body">
        <div className="calendar_wheel-highlight" aria-hidden="true" />
        <div className="calendar_wheel-columns">{children}</div>
        <div className="calendar_wheel-fade" aria-hidden="true" />
      </div>
      {footer || footerContent ? (
        <div className="calendar_wheel-footer">{footerContent}</div>
      ) : null}
    </Calendar>
  );
}

export function CalendarWheelColumn({
  label, // 컬럼 listbox의 접근성 이름입니다.
  items = [], // 선택 가능한 값 배열입니다.
  selected, // 현재 선택된 값입니다.
  showSteps = true, // 이전·다음 단계 버튼 표시 여부입니다.
  prevLabel = '이전', // 이전 단계 버튼의 접근성 이름입니다.
  nextLabel = '다음', // 다음 단계 버튼의 접근성 이름입니다.
}) {
  // 휠의 선택값과 스크롤 위치를 동기화하고 이전·다음 단계 이동을 제한합니다.
  const [active, setActive] = useState(selected);
  const listRef = useRef(null);
  const index = Math.max(
    0,
    items.findIndex((item) => String(item) === String(active)),
  );
  const move = (offset) =>
    setActive(items[Math.max(0, Math.min(items.length - 1, index + offset))]);

  useEffect(() => {
    setActive(selected);
  }, [selected]);
  useEffect(() => {
    const list = listRef.current;
    const selectedItem = list?.children[index];
    if (!list || !selectedItem) return;
    const frame = requestAnimationFrame(() => {
      const rowHeight = selectedItem.getBoundingClientRect().height || selectedItem.clientHeight;
      list.scrollTop = index * rowHeight;
    });
    return () => cancelAnimationFrame(frame);
  }, [index, items]);

  return (
    <div className="calendar_wheel-column">
      {showSteps ? (
        <button
          type="button"
          className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-prev"
          aria-label={prevLabel}
          disabled={index <= 0}
          onClick={() => move(-1)}
        >
          ⌃
        </button>
      ) : null}
      <ul ref={listRef} className="calendar_wheel-list" role="listbox" aria-label={label}>
        {items.map((item) => (
          <li key={String(item)} role="presentation">
            <button
              type="button"
              role="option"
              className={cx(
                'calendar_wheel-item',
                String(item) === String(active) && 'is-selected',
              )}
              aria-selected={String(item) === String(active) || undefined}
              onClick={() => setActive(item)}
            >
              {String(item)}
            </button>
          </li>
        ))}
      </ul>
      {showSteps ? (
        <button
          type="button"
          className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-next"
          aria-label={nextLabel}
          disabled={index >= items.length - 1}
          onClick={() => move(1)}
        >
          ⌄
        </button>
      ) : null}
    </div>
  );
}

export default Calendar;
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`<!--
  Calendar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useSlots } from 'vue';

defineOptions({ name: 'UxkmCalendar' });
const props = defineProps({
  title: String, // 헤더 제목입니다.
  ariaLabel: String, // 캘린더 접근성 이름입니다.
  size: { type: String, default: '' }, // 크기 변형 클래스입니다.
  noHeader: Boolean, // 헤더를 숨깁니다.
  minimal: Boolean, // 미니멀 스킨입니다.
  compact: Boolean, // 조밀한 캘린더입니다.
  borderless: Boolean, // 테두리 없는 스킨입니다.
  shadow: Boolean, // 그림자 스킨입니다.
  ghost: Boolean, // 고스트 스킨입니다.
  week: Boolean, // 주 단위 보기입니다.
  readonly: Boolean, // 읽기 전용입니다.
  disabled: Boolean, // 비활성 상태입니다.
  weekends: Boolean, // 주말 강조입니다.
  agenda: Boolean, // 아젠다 레이아웃입니다.
  wheel: Boolean, // 휠 선택 모드입니다.
  footer: Boolean, // 휠 푸터 영역 표시 여부입니다.
  events: { type: Array, default: () => [] }, // 이벤트 표시 일자 배열입니다.
  disabledDays: { type: Array, default: () => [] }, // 비활성 일자 배열입니다.
  rangeStart: Number, // 범위 시작 일자입니다.
  rangeEnd: Number, // 범위 종료 일자입니다.
  selected: { type: Number, default: 15 }, // 선택된 상태입니다.
  today: { type: Number, default: 12 }, // 오늘로 표시할 일자입니다.
  partial: Number, // 부분 월(일자 수) 모드입니다.
  role: { type: String, default: 'application' }, // 루트 role입니다.
});
const slots = useSlots();
// 월·주·휠·일정 레이아웃과 스킨·상태를 calendar_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'calendar',
    props.noHeader && 'calendar_no-header',
    props.minimal && 'calendar_minimal',
    props.compact && 'calendar_compact',
    props.borderless && 'calendar_borderless',
    props.shadow && 'calendar_shadow',
    props.ghost && 'calendar_ghost',
    props.week && 'calendar_week',
    props.readonly && 'calendar_readonly',
    props.disabled && 'is-disabled',
    props.weekends && 'calendar_weekends',
    props.agenda && 'calendar_agenda',
    props.wheel && 'calendar_wheel',
    props.size === 'sm' && 'calendar_sm',
    props.size === 'lg' && 'calendar_lg',
  ].filter(Boolean),
);
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
// 이전·현재·다음 달 셀과 선택·범위·이벤트 상태를 하나의 날짜 배열로 생성합니다.
const days = computed(() => {
  const cells = [];
  if (!props.partial && !props.week)
    [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, other: true }));
  const values = props.week
    ? [9, 10, 11, 12, 13, 14, 15]
    : Array.from({ length: props.partial || 30 }, (_, index) => index + 1);
  values.forEach((day, index) =>
    cells.push({
      day,
      today: day === props.today,
      selected: day === props.selected || day === props.rangeStart || day === props.rangeEnd,
      start: day === props.rangeStart,
      end: day === props.rangeEnd,
      range:
        props.rangeStart != null &&
        props.rangeEnd != null &&
        day > props.rangeStart &&
        day < props.rangeEnd,
      event: props.events.includes(day),
      disabled: props.disabledDays.includes(day),
      sunday: props.weekends && index % 7 === 0,
      saturday: props.weekends && index % 7 === 6,
    }),
  );
  if (!props.partial && !props.week)
    [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, other: true }));
  return cells;
});
<\/script>

<template>
  <!-- 헤더·휠·요일·날짜 그리드·푸터는 variant와 slot 유무에 따라 필요한 구조만 렌더링합니다. -->
  <div
    :class="classes"
    data-component="Calendar"
    :role="role"
    :aria-label="ariaLabel"
    :aria-disabled="disabled || undefined"
  >
    <slot v-if="!minimal && !wheel" name="header">
      <div v-if="title && !noHeader" class="calendar_header">
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
          ‹
        </button>
        <span class="calendar_title">{{ title }}</span>
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
          ›
        </button>
      </div>
    </slot>
    <template v-if="wheel">
      <div v-if="title" class="calendar_wheel-toolbar">
        <span class="calendar_wheel-title">{{ title }}</span>
      </div>
      <div class="calendar_wheel-body">
        <div class="calendar_wheel-highlight" aria-hidden="true" />
        <div class="calendar_wheel-columns"><slot /></div>
        <div class="calendar_wheel-fade" aria-hidden="true" />
      </div>
    </template>
    <template v-else>
      <slot v-if="!minimal && !agenda" name="weekdays">
        <div v-if="!noHeader" class="calendar_weekdays" aria-hidden="true">
          <span v-for="label in weekdays" :key="label" class="calendar_weekday">{{ label }}</span>
        </div>
      </slot>
      <slot>
        <!-- 날짜 상태를 is-* 클래스와 현재·선택·비활성 접근성 속성에 함께 연결합니다. -->
        <div v-if="!agenda" class="calendar_grid" :class="week && 'calendar_grid-week'">
          <button
            v-for="(cell, index) in days"
            :key="\`\${cell.day}-\${index}\`"
            type="button"
            class="calendar_day"
            :class="{
              'is-other-month': cell.other,
              'is-today': cell.today,
              'is-selected': cell.selected,
              'is-range-start': cell.start,
              'is-range-end': cell.end,
              'is-in-range': cell.range,
              'has-event': cell.event,
              'is-disabled': cell.disabled,
              'is-sunday': cell.sunday,
              'is-saturday': cell.saturday,
            }"
            :disabled="cell.disabled || (cell.other && !cell.range)"
            :aria-current="cell.today ? 'date' : undefined"
            :aria-selected="cell.selected || undefined"
          >
            {{ cell.day }}
          </button>
        </div>
      </slot>
      <slot name="footer"
        ><div v-if="footer" class="calendar_footer">
          <button type="button" class="btn btn_text color_primary btn_sm">오늘</button>
          <div class="calendar_footer-actions">
            <button type="button" class="btn btn_ghost btn_sm">초기화</button
            ><button type="button" class="btn btn_filled color_primary btn_sm">확인</button>
          </div>
        </div></slot
      >
    </template>
  </div>
</template>
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`<!-- Timeline 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Timeline 루트에 공통 클래스를 적용합니다. -->
<ol class="timeline" data-component="Timeline">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <li class="timeline_item" data-component="TimelineItem">
    <span class="timeline_dot color_primary" aria-hidden="true"></span>
    <div class="timeline_content">
      <time class="timeline_time" datetime="2024-06-01">2024-06-01 10:00</time>
      <p class="timeline_title">프로젝트 킥오프</p>
      <p class="timeline_desc">팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다.</p>
    </div>
  </li>
  <li class="timeline_item" data-component="TimelineItem">
    <span class="timeline_dot color_success" aria-hidden="true"></span>
    <div class="timeline_content">
      <time class="timeline_time" datetime="2024-06-10">2024-06-10 14:30</time>
      <p class="timeline_title">1차 릴리스 완료</p>
      <p class="timeline_desc">MVP 기능이 프로덕션에 배포되었습니다.</p>
    </div>
  </li>
</ol>
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`{# Timeline 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<ol class="timeline" {# Timeline 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="Timeline">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <li class="timeline_item" data-component="TimelineItem">
    <span class="timeline_dot color_primary" aria-hidden="true"></span>
    <div class="timeline_content">
      <time class="timeline_time" datetime="2024-06-01">2024-06-01 10:00</time>
      <p class="timeline_title">프로젝트 킥오프</p>
      <p class="timeline_desc">팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다.</p>
    </div>
  </li>
  <li class="timeline_item" data-component="TimelineItem">
    <span class="timeline_dot color_success" aria-hidden="true"></span>
    <div class="timeline_content">
      <time class="timeline_time" datetime="2024-06-10">2024-06-10 14:30</time>
      <p class="timeline_title">1차 릴리스 완료</p>
      <p class="timeline_desc">MVP 기능이 프로덕션에 배포되었습니다.</p>
    </div>
  </li>
</ol>
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`/**
 * Timeline 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
const VALID_TAGS = new Set(['ol', 'ul']);

// 시간순 여부에 따라 ol·ul 루트를 선택하고 레이아웃 변형을 적용합니다.
export function Timeline({
  children, // TimelineItem 자식들입니다.
  card = false, // 카드형 타임라인입니다.
  alternate = false, // 좌우 교차 배치입니다.
  horizontal = false, // 가로 타임라인입니다.
  labelCol = false, // 라벨 열 레이아웃입니다.
  icon = false, // 아이콘 도트 모드입니다.
  iconSize = 'md', // 아이콘 도트 크기입니다.
  size = 'md', // sm · md · lg 크기입니다.
  tag = 'ol', // ol · ul 루트 태그입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const Root = VALID_TAGS.has(tag) ? tag : 'ol';
  const classes = [
    'timeline',
    card && 'timeline_card',
    alternate && 'timeline_alternate',
    horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col',
    icon && 'timeline_icon',
    icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm',
    size === 'lg' && 'timeline_lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Root {...props} className={classes} data-component="Timeline">
      {children}
    </Root>
  );
}

export function TimelineItem({
  color = 'primary', // 도트 색상입니다.
  title, // 항목 제목입니다.
  description, // 항목 설명입니다.
  time, // 시간 텍스트입니다.
  datetime, // time 요소의 datetime입니다.
  label, // 사이드 라벨 텍스트입니다.
  labelDatetime, // 라벨 time의 datetime입니다.
  active = false, // 활성 항목입니다.
  pending = false, // 대기·진행 중 항목입니다.
  outline = false, // 도트 외곽선 스타일입니다.
  dot, // 커스텀 도트 콘텐츠입니다.
  meta, // 메타 영역 콘텐츠입니다.
  children, // 항목 본문 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  // 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
  const itemClasses = ['timeline_item', active && 'is-active', pending && 'is-pending', className]
    .filter(Boolean)
    .join(' ');
  const dotClasses = ['timeline_dot', outline && 'timeline_dot-outline', color && \`color_\${color}\`]
    .filter(Boolean)
    .join(' ');
  // 시간 값은 time 요소로, 장식용 도트는 접근성 트리에서 숨겨 렌더링합니다.
  return (
    <li {...props} className={itemClasses} data-component="TimelineItem">
      {label ? (
        <time className="timeline_label" dateTime={labelDatetime}>
          {label}
        </time>
      ) : null}
      {dot ? (
        <span className="timeline_dot" aria-hidden="true">
          {dot}
        </span>
      ) : (
        <span className={dotClasses} aria-hidden="true" />
      )}
      <div className="timeline_content">
        {children ?? (
          <>
            {time ? (
              <time className="timeline_time" dateTime={datetime}>
                {time}
              </time>
            ) : null}
            {title ? <p className="timeline_title">{title}</p> : null}
            {description ? <p className="timeline_desc">{description}</p> : null}
          </>
        )}
        {meta ? <div className="timeline_meta">{meta}</div> : null}
      </div>
    </li>
  );
}

export default Timeline;
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`<!--
  Timeline 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimeline', inheritAttrs: false });
const props = defineProps({
  card: Boolean, // 카드형 타임라인입니다.
  alternate: Boolean, // 좌우 교차 배치입니다.
  horizontal: Boolean, // 가로 타임라인입니다.
  labelCol: Boolean, // 라벨 열 레이아웃입니다.
  icon: Boolean, // 아이콘 도트 모드입니다.
  iconSize: { type: String, default: 'md' }, // 아이콘 도트 크기입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  tag: { type: String, default: 'ol', validator: (value) => ['ol', 'ul'].includes(value) }, // ol · ul 루트 태그입니다.
});
const attrs = useAttrs();
// 방향·크기·도트·카드 변형을 timeline_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'timeline',
    props.card && 'timeline_card',
    props.alternate && 'timeline_alternate',
    props.horizontal && 'timeline_horizontal',
    props.labelCol && 'timeline_label-col',
    props.icon && 'timeline_icon',
    props.icon && props.iconSize === 'sm' && 'timeline_icon-sm',
    props.size === 'sm' && 'timeline_sm',
    props.size === 'lg' && 'timeline_lg',
    attrs.class,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- 시간순 여부에 맞는 ol·ul 루트에 TimelineItem 목록을 렌더링합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <component :is="tag" v-bind="fallthroughAttrs" :class="classes" data-component="Timeline"
    ><slot
  /></component>
</template>
`})))()}var et;function tt(){return(tt=e((()=>{et=`<!--
  TimelineItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimelineItem', inheritAttrs: false });
const props = defineProps({
  color: { type: String, default: 'primary' }, // 도트 색상입니다.
  title: String, // SVG title과 접근성 이름 후보입니다.
  description: String, // 항목 설명입니다.
  time: String, // 시간 텍스트입니다.
  datetime: String, // time 요소의 datetime입니다.
  label: String, // 시간·라벨 텍스트입니다.
  labelDatetime: String, // 라벨 time의 datetime입니다.
  active: Boolean, // 현재 페이지 활성 상태입니다.
  pending: Boolean, // 대기·진행 중 항목입니다.
  outline: Boolean, // 도트 외곽선 스타일입니다.
});
const attrs = useAttrs();
// 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
const itemClasses = computed(() =>
  ['timeline_item', props.active && 'is-active', props.pending && 'is-pending', attrs.class].filter(
    Boolean,
  ),
);
const dotClasses = computed(() =>
  [
    'timeline_dot',
    props.outline && 'timeline_dot-outline',
    props.color && \`color_\${props.color}\`,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- 시간 값은 time 요소로, 장식용 도트는 접근성 트리에서 숨겨 렌더링합니다. -->
<template>
  <li v-bind="fallthroughAttrs" :class="itemClasses" data-component="TimelineItem">
    <time v-if="label" class="timeline_label" :datetime="labelDatetime">{{ label }}</time
    ><span v-if="$slots.dot" class="timeline_dot" aria-hidden="true"><slot name="dot" /></span
    ><span v-else :class="dotClasses" aria-hidden="true" />
    <div class="timeline_content">
      <slot
        ><time v-if="time" class="timeline_time" :datetime="datetime">{{ time }}</time>
        <p v-if="title" class="timeline_title">{{ title }}</p>
        <p v-if="description" class="timeline_desc">{{ description }}</p></slot
      >
      <div v-if="$slots.meta" class="timeline_meta"><slot name="meta" /></div>
    </div>
  </li>
</template>
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`<!-- Tree 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Tree 루트에 공통 클래스를 적용합니다. -->
<ul class="tree tree_bordered" data-component="Tree" role="tree" aria-label="파일 탐색기">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <li class="tree_item" data-component="TreeNode" role="treeitem" aria-expanded="true">
    <div class="tree_row">
      <button
        type="button"
        class="tree_toggle"
        aria-expanded="true"
        aria-label="src 폴더 접기"
      ></button
      ><span class="tree_label">src</span>
    </div>
    <ul class="tree" role="group">
      <li class="tree_item" data-component="TreeNode" role="treeitem">
        <div class="tree_row is-selected">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span
          ><span class="tree_label">button.html</span>
        </div>
      </li>
    </ul>
  </li>
  <li class="tree_item" data-component="TreeNode" role="treeitem" aria-expanded="false">
    <div class="tree_row">
      <button
        type="button"
        class="tree_toggle"
        aria-expanded="false"
        aria-label="public 폴더 펼치기"
      ></button
      ><span class="tree_label">public</span>
    </div>
    <ul class="tree" role="group">
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder"></span
          ><span class="tree_label">favicon.ico</span>
        </div>
      </li>
    </ul>
  </li>
</ul>
`})))()}var it;function at(){return(at=e((()=>{it=`{# Tree 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<ul class="tree tree_bordered" {# Tree 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="Tree" role="tree" aria-label="파일 탐색기">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <li class="tree_item" data-component="TreeNode" role="treeitem" aria-expanded="true">
    <div class="tree_row">
      <button
        type="button"
        class="tree_toggle"
        aria-expanded="true"
        aria-label="src 폴더 접기"
      ></button
      ><span class="tree_label">src</span>
    </div>
    <ul class="tree" role="group">
      <li class="tree_item" data-component="TreeNode" role="treeitem">
        <div class="tree_row is-selected">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span
          ><span class="tree_label">button.html</span>
        </div>
      </li>
    </ul>
  </li>
  <li class="tree_item" data-component="TreeNode" role="treeitem" aria-expanded="false">
    <div class="tree_row">
      <button
        type="button"
        class="tree_toggle"
        aria-expanded="false"
        aria-label="public 폴더 펼치기"
      ></button
      ><span class="tree_label">public</span>
    </div>
    <ul class="tree" role="group">
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder"></span
          ><span class="tree_label">favicon.ico</span>
        </div>
      </li>
    </ul>
  </li>
</ul>
`})))()}var ot;function st(){return(st=e((()=>{ot=`/**
 * Tree 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useState } from 'react';

// 트리 루트의 외형과 다중 선택 가능 상태를 접근성 속성에 연결합니다.
export function Tree({
  children, // TreeNode 자식들입니다.
  bordered = false, // 테두리 트리입니다.
  lines = false, // 계층 연결선 표시 여부입니다.
  compact = false, // 조밀한 패딩입니다.
  ariaLabel, // 트리의 접근성 이름입니다.
  multiselectable = false, // 다중 선택 허용 여부입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const classes = [
    'tree',
    bordered && 'tree_bordered',
    lines && 'tree_lines',
    compact && 'tree_compact',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <ul
      {...props}
      className={classes}
      data-component="Tree"
      role="tree"
      aria-label={ariaLabel}
      aria-multiselectable={multiselectable || undefined}
    >
      {children}
    </ul>
  );
}

export function TreeNode({
  label, // 노드 레이블입니다.
  expanded, // 제어 펼침 상태입니다. false면 접습니다.
  selected = false, // 선택 상태입니다.
  disabled = false, // 비활성 상태입니다.
  expandable = false, // 자식이 없어도 토글을 표시할지 여부입니다.
  plusToggle = false, // +/− 토글 스타일입니다.
  toggleLabel, // 토글 버튼 접근성 이름입니다.
  link = false, // 레이블을 링크형으로 표시할지 여부입니다.
  meta, // 노드 메타 텍스트입니다.
  prefix, // 레이블 앞 부가 콘텐츠입니다.
  icon, // 노드 아이콘입니다.
  labelSlot, // 레이블 대신 렌더링할 슬롯입니다.
  metaSlot, // 메타 대신 렌더링할 슬롯입니다.
  children, // 자식 TreeNode들입니다.
  className = '', // 추가 클래스입니다.
  onExpandedChange, // 펼침 상태 변경 콜백입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  // 자식 유무와 expandable prop으로 토글 노출을 결정하고 제어·비제어 확장 상태를 지원합니다.
  const hasChildren = Boolean(children);
  const showToggle = expandable || hasChildren;
  const [isExpanded, setIsExpanded] = useState(expanded !== false);
  useEffect(() => {
    if (expanded !== undefined) setIsExpanded(expanded !== false);
  }, [expanded]);
  // 토글 시 내부 상태와 외부 onExpandedChange 콜백을 같은 값으로 갱신합니다.
  const toggle = () => {
    setIsExpanded((current) => {
      const next = !current;
      onExpandedChange?.(next);
      return next;
    });
  };
  const labelContent = labelSlot ?? <span className="tree_label">{label}</span>;
  const metaContent = metaSlot ?? meta;
  // treeitem·group 관계와 aria-expanded를 실제 하위 목록 표시 상태에 맞춥니다.
  return (
    <li
      {...props}
      className={['tree_item', className].filter(Boolean).join(' ')}
      data-component="TreeNode"
      role="treeitem"
      aria-expanded={showToggle ? isExpanded : undefined}
    >
      <div
        className={['tree_row', selected && 'is-selected', disabled && 'is-disabled']
          .filter(Boolean)
          .join(' ')}
      >
        {showToggle ? (
          <button
            type="button"
            className={['tree_toggle', plusToggle && 'tree_toggle-plus'].filter(Boolean).join(' ')}
            aria-expanded={isExpanded}
            aria-label={toggleLabel}
            disabled={disabled || undefined}
            onClick={toggle}
          />
        ) : (
          <span className="tree_toggle tree_toggle_placeholder" aria-hidden="true" />
        )}
        {prefix}
        {icon ? (
          <span className="tree_icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        {link ? (
          <button type="button" className="tree_link" disabled={disabled || undefined}>
            {labelContent}
          </button>
        ) : (
          labelContent
        )}
        {metaContent != null && metaContent !== '' ? (
          <span className="tree_meta">{metaContent}</span>
        ) : null}
      </div>
      {hasChildren ? (
        <ul className="tree" role="group" hidden={!isExpanded}>
          {children}
        </ul>
      ) : null}
    </li>
  );
}

export default Tree;
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`<!--
  Tree 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTree', inheritAttrs: false });
const props = defineProps({
  bordered: Boolean, // 테두리 트리입니다.
  lines: Boolean, // 계층 연결선을 표시합니다.
  compact: Boolean, // 조밀한 패딩입니다.
  ariaLabel: String, // 트리의 접근성 이름입니다.
  multiselectable: Boolean, // 다중 선택을 허용합니다.
});
const attrs = useAttrs();
// 트리 외형과 사용자 class를 tree_* 공통 클래스에 합칩니다.
const classes = computed(() =>
  [
    'tree',
    props.bordered && 'tree_bordered',
    props.lines && 'tree_lines',
    props.compact && 'tree_compact',
    attrs.class,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- tree role과 다중 선택 가능 상태를 루트 목록에 연결합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <ul
    v-bind="fallthroughAttrs"
    :class="classes"
    data-component="Tree"
    role="tree"
    :aria-label="ariaLabel"
    :aria-multiselectable="multiselectable || undefined"
  >
    <slot />
  </ul>
</template>
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`<!--
  TreeNode 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, ref, useSlots, watch } from 'vue';
defineOptions({ name: 'UxkmTreeNode' });
const props = defineProps({
  label: String, // title 대신 쓸 레이블입니다.
  expanded: { type: Boolean, default: undefined }, // 초기 펼침 상태입니다.
  selected: Boolean, // 선택 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  expandable: Boolean, // 자식이 없어도 토글을 표시합니다.
  plusToggle: Boolean, // +/− 토글 스타일입니다.
  toggleLabel: String, // 토글 버튼 접근성 이름입니다.
  link: Boolean, // 레이블을 링크형으로 표시합니다.
  meta: String, // 메타 영역 콘텐츠입니다.
});
const emit = defineEmits(['update:expanded']);
const slots = useSlots();
// expanded prop과 내부 상태를 동기화해 제어·비제어 사용을 모두 지원합니다.
const isExpanded = ref(props.expanded !== false);
watch(
  () => props.expanded,
  (value) => {
    if (value !== undefined) isExpanded.value = value !== false;
  },
);
const hasChildren = computed(() => Boolean(slots.default));
const showToggle = computed(() => props.expandable || hasChildren.value);
// 비활성 노드는 유지하고 토글 시 update:expanded 이벤트를 같은 값으로 전달합니다.
const toggle = () => {
  if (!props.disabled) {
    isExpanded.value = !isExpanded.value;
    emit('update:expanded', isExpanded.value);
  }
};
<\/script>
<!-- treeitem·group 관계와 aria-expanded를 실제 하위 목록 표시 상태에 맞춥니다. -->
<template>
  <li
    class="tree_item"
    data-component="TreeNode"
    role="treeitem"
    :aria-expanded="showToggle ? isExpanded : undefined"
  >
    <div :class="['tree_row', selected && 'is-selected', disabled && 'is-disabled']">
      <button
        v-if="showToggle"
        type="button"
        :class="['tree_toggle', plusToggle && 'tree_toggle-plus']"
        :aria-expanded="isExpanded"
        :aria-label="toggleLabel"
        :disabled="disabled || undefined"
        @click="toggle"
      /><span v-else class="tree_toggle tree_toggle_placeholder" aria-hidden="true" /><slot
        name="prefix"
      /><span v-if="$slots.icon" class="tree_icon" aria-hidden="true"><slot name="icon" /></span
      ><button v-if="link" type="button" class="tree_link" :disabled="disabled || undefined">
        <slot name="label"
          ><span class="tree_label">{{ label }}</span></slot
        ></button
      ><slot v-else name="label"
        ><span class="tree_label">{{ label }}</span></slot
      ><span v-if="meta || $slots.meta" class="tree_meta"
        ><slot name="meta">{{ meta }}</slot></span
      >
    </div>
    <ul v-if="hasChildren" v-show="isExpanded" class="tree" role="group">
      <slot />
    </ul>
  </li>
</template>
`})))()}function M(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/${e}/${e}*.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}*.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/${e}/${e}.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}.jsx`,code:n.react}]}function ft(e){let t={basic:`table table_columns`,striped:`table table_striped table_columns`,bordered:`table table_bordered`,compact:`table table_compact table_columns`,hover:`table table_hover table_columns`,combined:`table table_bordered table_compact table_hover`,stickyTop:`table table_sticky-top table_bordered table_compact`,stickyLeft:`table table_columns table_sticky-left table_sticky-cols-1`,stickyColumns:`table table_columns table_sticky-left table_sticky-cols-2`,stickyBoth:`table table_columns table_bordered table_compact table_sticky-top table_sticky-left table_sticky-cols-2`},n=e.startsWith(`sticky`)?` table_scroll`:``;return`<!-- 실제 행은 DataList와 w2:generator로 반복하고 열 너비는 공통 table_columns 변수에 연결합니다. -->
<w2:group id="table${P(e)}Scroll" class="${n.trim()||`table_container`}">
  <w2:group id="table${P(e)}" class="${t[e]}" tagname="table" role="table" aria-label="${F[e]} 테이블">
    <w2:group id="table${P(e)}Header" tagname="thead" role="rowgroup">
      <w2:group id="table${P(e)}HeaderRow" tagname="tr" role="row">
        <w2:textbox id="table${P(e)}Name" tagname="th" role="columnheader" label="이름"></w2:textbox>
        <w2:textbox id="table${P(e)}Status" tagname="th" role="columnheader" label="상태"></w2:textbox>
      </w2:group>
    </w2:group>
    <w2:group id="table${P(e)}Body" tagname="tbody" role="rowgroup">
      <!-- generator 반복 행: 각 셀은 w2:textbox tagname="td" role="cell"로 구성합니다. -->
    </w2:group>
  </w2:group>
</w2:group>`}function pt(e){let t=[`ordered`,`orderedVariants`,`hierarchical`].includes(e),n=e.startsWith(`definition`),r=[`list`,e===`bordered`&&`list_bordered`,e===`compact`&&`list_compact`,e===`bullet`&&`list_bullet`,t&&`list_ordered`,n&&`list_definition`].filter(Boolean).join(` `),i=n?`dl`:t?`ol`:`ul`;return`<!-- 반복 항목은 DataList와 w2:generator에 연결합니다. -->
<w2:group id="list${P(e)}" class="${r}" tagname="${i}" role="list" aria-label="${F[e]} 목록">
  <w2:group id="list${P(e)}Item1" class="list_item" tagname="${n?`div`:`li`}" role="listitem">
    <w2:textbox id="list${P(e)}Title1" tagname="span" class="list_title" label="첫 번째 항목"></w2:textbox>
    <w2:textbox id="list${P(e)}Description1" tagname="span" class="list_description" label="항목 설명"></w2:textbox>
  </w2:group>
  <w2:group id="list${P(e)}Item2" class="list_item" tagname="${n?`div`:`li`}" role="listitem">
    <w2:textbox id="list${P(e)}Title2" tagname="span" class="list_title" label="두 번째 항목"></w2:textbox>
  </w2:group>
</w2:group>`}function mt(e){return`<w2:group id="stat${P(e)}" class="${{sizes:`stat stat_lg`,layouts:`stat stat_horizontal`,skins:`stat stat_card stat_shadow`,group:`stat_group`}[e]??`stat`}" role="group" aria-label="${F[e]} 통계">
  <w2:textbox id="stat${P(e)}Label" tagname="span" class="stat_label" label="월간 활성 사용자"></w2:textbox>
  <w2:group id="stat${P(e)}ValueRow" class="stat_value-row">
    ${e===`prefixSuffix`?`<w2:textbox id="statPrefix" tagname="span" class="stat_prefix" label="₩"></w2:textbox>`:``}
    <w2:textbox id="stat${P(e)}Value" tagname="strong" class="stat_value" label="24.5K"></w2:textbox>
    ${e===`prefixSuffix`?`<w2:textbox id="statSuffix" tagname="span" class="stat_suffix" label="명"></w2:textbox>`:``}
  </w2:group>
  <w2:textbox id="stat${P(e)}Description" tagname="span" class="stat_desc color_success" label="+18.2%"></w2:textbox>
</w2:group>`}function ht(e){return`<!-- 날짜 데이터는 DataList와 w2:generator로 반복하고 선택 상태를 is-* 클래스와 동기화합니다. -->
<w2:group id="calendar${P(e)}" class="${{noHeader:`calendar calendar_no-header`,minimal:`calendar calendar_minimal calendar_compact calendar_borderless`,week:`calendar calendar_week calendar_shadow`,wheel:`calendar calendar_wheel calendar_shadow`,skin:`calendar calendar_shadow`,size:`calendar calendar_compact`,agenda:`calendar calendar_agenda calendar_shadow`,state:`calendar calendar_readonly`}[e]??`calendar`}" role="application" aria-label="${F[e]} 캘린더">
  <w2:group id="calendar${P(e)}Header" class="calendar_header">
    <xf:trigger id="calendar${P(e)}Previous" type="button" class="calendar_nav-prev" tooltip="이전" ev:onclick="scwin.calendarPrevious_onclick"><xf:label><![CDATA[‹]]></xf:label></xf:trigger>
    <w2:textbox id="calendar${P(e)}Title" tagname="strong" class="calendar_title" label="2024년 6월"></w2:textbox>
    <xf:trigger id="calendar${P(e)}Next" type="button" class="calendar_nav-next" tooltip="다음" ev:onclick="scwin.calendarNext_onclick"><xf:label><![CDATA[›]]></xf:label></xf:trigger>
  </w2:group>
  <w2:group id="calendar${P(e)}Grid" class="calendar_grid" role="grid">
    <!-- generator 날짜 셀: xf:trigger class="calendar_day"와 aria-selected를 날짜 데이터에 연결합니다. -->
  </w2:group>
</w2:group>`}function gt(e){return`<!-- 반복 이벤트는 DataList와 w2:generator에 연결합니다. -->
<w2:group id="timeline${P(e)}" class="${{outline:`timeline timeline_outline`,icon:`timeline timeline_icon timeline_icon-sm`,card:`timeline timeline_card`,label:`timeline timeline_label-col`,alternate:`timeline timeline_alternate`,horizontal:`timeline timeline_horizontal`,size:`timeline timeline_lg`}[e]??`timeline`}" tagname="ol" aria-label="${F[e]} 타임라인">
  <w2:group id="timeline${P(e)}Item" class="timeline_item" tagname="li">
    <w2:group id="timeline${P(e)}Dot" class="timeline_dot color_primary" aria-hidden="true"></w2:group>
    <w2:group id="timeline${P(e)}Content" class="timeline_content">
      <w2:textbox id="timeline${P(e)}Title" tagname="p" class="timeline_title" label="프로젝트 이벤트"></w2:textbox>
      <w2:textbox id="timeline${P(e)}Time" tagname="time" class="timeline_time" label="2024-06-01 10:00"></w2:textbox>
      <w2:textbox id="timeline${P(e)}Description" tagname="p" class="timeline_description" label="이벤트 상세 설명"></w2:textbox>
    </w2:group>
  </w2:group>
</w2:group>`}function _t(e){return`<!-- 계층 데이터는 DataList 또는 중첩 generator로 렌더링하고 expanded·selected 상태를 동기화합니다. -->
<w2:group id="tree${P(e)}" class="${{basic:`tree tree_bordered`,lines:`tree tree_lines tree_bordered`,compact:`tree tree_compact tree_bordered`,plusToggle:`tree tree_bordered`,checkbox:`tree tree_bordered`,meta:`tree tree_bordered`,disabled:`tree tree_bordered`,selectable:`tree tree_bordered`}[e]??`tree`}" role="tree" aria-label="${F[e]} 트리">
  <w2:group id="tree${P(e)}Node" class="tree_item" role="treeitem" aria-expanded="true" aria-selected="false">
    <w2:group id="tree${P(e)}Row" class="tree_row">
      <xf:trigger id="tree${P(e)}Toggle" type="button" class="tree_toggle${e===`plusToggle`?` tree_toggle-plus`:``}" tooltip="하위 항목 접기" ev:onclick="scwin.treeToggle_onclick"><xf:label><![CDATA[−]]></xf:label></xf:trigger>
      ${e===`checkbox`?`<w2:checkbox id="treeCheckbox" class="tree_check" label=""></w2:checkbox>`:``}
      <w2:textbox id="tree${P(e)}Label" tagname="span" class="tree_label" label="상위 항목"></w2:textbox>
      ${e===`meta`?`<w2:textbox id="treeMeta" tagname="span" class="tree_meta" label="3개"></w2:textbox>`:``}
    </w2:group>
    <w2:group id="tree${P(e)}Children" class="tree_children" role="group"><!-- 하위 treeitem 반복 --></w2:group>
  </w2:group>
</w2:group>`}function N(e,t,n){return Object.fromEntries(Object.entries(t).map(([t,r])=>[t,[...r,{id:`websquare`,label:`WebSquare`,fileName:`${e}.xml · ${t}`,code:n(t)}]]))}var vt,yt,bt,xt,St,Ct,P,F,wt,Tt,Et,Dt,Ot,kt;function At(){return(At=e((()=>{d(),te(),re(),ce(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),vt=M(`Table`,`table`,{html:fe,gulp:me,react:ge,vue:ve}),yt=M(`List`,`list`,{html:be,gulp:Se,react:we,vue:`${Ee}\n\n<!-- ListItem.vue -->\n${Oe}`}),bt=M(`Stat`,`stat`,{html:Ae,gulp:Me,react:Pe,vue:Ie}),xt=M(`Calendar`,`calendar`,{html:Re,gulp:Be,react:He,vue:We}),St=M(`Timeline`,`timeline`,{html:Ke,gulp:Je,react:Xe,vue:`${Qe}\n\n<!-- TimelineItem.vue -->\n${et}`}),Ct=M(`Tree`,`tree`,{html:nt,gulp:it,react:ot,vue:`${ct}\n\n<!-- TreeNode.vue -->\n${ut}`}),P=e=>e.replace(/[^a-zA-Z0-9]/g,``),F={basic:`기본`,striped:`줄무늬`,bordered:`테두리`,compact:`컴팩트`,hover:`호버`,combined:`스타일 조합`,stickyTop:`상단 헤더 고정`,stickyLeft:`왼쪽 열 고정`,stickyColumns:`다중 열 고정`,stickyBoth:`상단·왼쪽 고정`,bullet:`불릿`,bulletRich:`불릿 설명`,bulletVariants:`불릿 변형`,ordered:`번호 목록`,orderedVariants:`번호 변형`,hierarchical:`계층 번호`,links:`링크 목록`,buttons:`버튼 목록`,actions:`액션 목록`,definition:`정의 목록`,definitionInline:`인라인 정의`,definitionRight:`우측 정의`,prefixSuffix:`접두·접미`,trend:`추세`,sizes:`크기`,layouts:`레이아웃`,icon:`아이콘`,skins:`스킨`,group:`그룹`,noHeader:`헤더 없음`,minimal:`날짜만`,week:`주간`,wheel:`휠`,range:`범위 선택`,event:`이벤트`,skin:`스킨`,size:`크기`,footer:`푸터`,dual:`이중 달력`,agenda:`일정`,state:`상태`,simple:`간단`,outline:`아웃라인`,card:`카드형`,label:`날짜 레이블`,alternate:`좌우 교차`,horizontal:`가로`,lines:`연결선`,plusToggle:`+/− 토글`,checkbox:`체크박스`,meta:`메타`,disabled:`비활성`,selectable:`선택 가능`},wt=N(`Table`,se,ft),Tt=N(`List`,ee,pt),Et=N(`Stat`,ne,mt),Dt=N(`Calendar`,u,ht),Ot=N(`Timeline`,le,gt),kt=N(`Tree`,ue,_t)})))()}var jt,I,Mt,L,R,Nt,Pt;function Ft(){return(Ft=e((()=>{jt=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],I=(e,t,n)=>({title:e,description:n,tables:[{columns:jt,rows:t}]}),Mt=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),L=[{name:`title`,type:`string`,default:`—`,description:`기본 헤더 제목`},{name:`ariaLabel`,type:`string`,default:`—`,description:`캘린더 접근성 라벨`},{name:`size`,type:`'' | 'sm' | 'lg'`,default:`''`,description:`셀과 패딩 크기`},{name:`noHeader · minimal · compact`,type:`boolean`,default:`false`,description:`헤더 생략·날짜 전용·컴팩트 레이아웃`},{name:`borderless · shadow · ghost`,type:`boolean`,default:`false`,description:`외형 스킨`},{name:`week · agenda · wheel`,type:`boolean`,default:`false`,description:`주간·세로 일정·휠 레이아웃`},{name:`readonly · disabled`,type:`boolean`,default:`false`,description:`읽기 전용·전체 비활성 상태`},{name:`weekends`,type:`boolean`,default:`false`,description:`주말 색상 표시`},{name:`header · weekdays · footer · children`,type:`ReactNode · slot`,default:`—`,description:`헤더, 요일, 본문, 푸터 콘텐츠`}],R=[{name:`days`,type:`CalendarDayData[]`,default:`2024년 6월`,description:`직접 제공하는 날짜 셀 데이터`},{name:`selected · today`,type:`number`,default:`15 · 12`,description:`선택일과 오늘 날짜`},{name:`disabled · events`,type:`number[]`,default:`[]`,description:`비활성·이벤트 날짜`},{name:`rangeStart · rangeEnd`,type:`number`,default:`—`,description:`범위 시작·종료 날짜`},{name:`partial`,type:`number`,default:`—`,description:`간단 예시에 표시할 날짜 개수`},{name:`week · weekends · readonly`,type:`boolean`,default:`false`,description:`주간·주말·읽기 전용 처리`}],Nt=[{name:`CalendarHeader · title · showNav`,type:`string · boolean`,default:`— · true`,description:`월 제목과 이전·다음 탐색`},{name:`CalendarNav · label`,type:`string`,default:`—`,description:`주간 탐색 라벨`},{name:`CalendarWeekdays · labels`,type:`string[]`,default:`일…토`,description:`요일 라벨`},{name:`CalendarFooter · children`,type:`ReactNode · slot`,default:`기본 액션`,description:`하단 액션`},{name:`CalendarWheel · title · toolbar · footer`,type:`string · boolean`,default:`— · true · false`,description:`휠 선택기 구조`},{name:`CalendarWheelColumn · items · selected`,type:`string[] · string`,default:`[] · —`,description:`휠 열 항목과 선택 값`}],Pt=[I(`React · Next.js API · Calendar Props`,L,"Next.js는 `@uxkm/react/calendar`를 재사용합니다."),I(`React · Next.js API · CalendarMonth Props`,R),I(`React · Next.js API · 하위 컴포넌트`,Nt),I(`Vue · Nuxt API · Props / Slots`,Mt([...L,...R]),"Nuxt는 `@uxkm/vue/calendar`를 재사용합니다."),I(`HTML · Gulp · 공통 클래스`,[{name:`calendar · calendar_header · calendar_weekdays · calendar_grid · calendar_day`,type:`class`,default:`—`,description:`월간 캘린더 기본 구조`},{name:`calendar_no-header · calendar_minimal · calendar_week`,type:`class`,default:`—`,description:`레이아웃 변형`},{name:`calendar_borderless · calendar_shadow · calendar_ghost · calendar_sm · calendar_lg`,type:`class`,default:`—`,description:`스킨과 크기`},{name:`is-today · is-selected · is-disabled · is-other-month · is-in-range · has-event`,type:`class`,default:`—`,description:`날짜 상태`},{name:`calendar_wheel* · calendar_agenda* · calendar_group`,type:`class`,default:`—`,description:`휠·세로 일정·다중 패널 구조`}]),I(`공통 API · 디자인 토큰`,[{name:`--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg`,type:`length`,default:`2.25rem · 1.875rem · 2.75rem`,description:`날짜 셀 크기`},{name:`--calendar-gap · --calendar-font-size · --calendar-header-size`,type:`length`,default:`2px · var(--text-size-sm) · var(--text-size-base)`,description:`간격과 글자 크기`},{name:`--calendar-wheel-height · --calendar-wheel-step-height · --calendar-wheel-max-width`,type:`length`,default:`13.75rem · 2rem · 22rem`,description:`휠 선택기 치수`},{name:`--calendar-agenda-gap · --calendar-agenda-date-width`,type:`length`,default:`var(--space-md) · 3rem`,description:`세로 일정 간격과 날짜 열 너비`}])]})))()}var It,z,B,V,Lt,H,U,Rt,W,zt;function Bt(){return(Bt=e((()=>{It=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],z=(e,t,n)=>({title:e,description:n,tables:[{columns:It,rows:t}]}),B=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),V=[{name:`bordered`,type:`boolean`,default:`false`,description:`셀 테두리`},{name:`striped`,type:`boolean`,default:`false`,description:`짝수 행 배경`},{name:`compact`,type:`boolean`,default:`false`,description:`좁은 셀 패딩`},{name:`hover`,type:`boolean`,default:`false`,description:`행 호버 강조`},{name:`wrap`,type:`boolean`,default:`true`,description:`table_wrap 사용 여부`},{name:`scroll`,type:`boolean`,default:`false`,description:`sticky용 스크롤 컨테이너`},{name:`scrollMaxHeight`,type:`string`,default:`—`,description:`스크롤 영역 최대 높이`},{name:`stickyTop`,type:`boolean`,default:`false`,description:`thead 상단 고정`},{name:`stickyLeft`,type:`boolean`,default:`false`,description:`좌측 열 고정`},{name:`stickyCols`,type:`1 | 2 | 3 | 4`,default:`1`,description:`좌측 고정 열 개수`},{name:`stickyLeftOffsets`,type:`Record<number, string>`,default:`{}`,description:`각 고정 열의 left 오프셋`},{name:`columns`,type:`TableColumn[]`,default:`[]`,description:`{ width, minWidth, maxWidth, padding, nowrap } 열 설정`}],Lt=[z(`React · Next.js API · Props`,V,"Next.js는 `@uxkm/react/table`을 재사용합니다."),z(`Vue · Nuxt API · Props`,B(V),"Nuxt는 `@uxkm/vue/table`을 재사용합니다."),z(`공통 API · Children / Slot`,[{name:`children · default`,type:`ReactNode · slot`,default:`—`,description:`thead, tbody, tfoot 등 시맨틱 테이블 마크업`}]),z(`HTML · Gulp · 공통 클래스`,[{name:`table_wrap · table_wrap-scroll · table`,type:`class`,default:`—`,description:`스크롤 래퍼와 테이블 루트`},{name:`table_bordered · table_striped · table_compact · table_hover`,type:`class`,default:`—`,description:`스타일 변형`},{name:`table_columns · table_col-nowrap`,type:`class`,default:`—`,description:`열 크기·줄바꿈 제어`},{name:`table_sticky-top · table_sticky-left · table_sticky-cols-1…4`,type:`class`,default:`—`,description:`상단·좌측 고정`}]),z(`공통 API · 디자인 토큰`,[{name:`--table-cell-padding-y · --table-cell-padding-x`,type:`length`,default:`0.65rem · 1rem`,description:`기본 셀 패딩`},{name:`--table-cell-padding-y-compact · --table-cell-padding-x-compact`,type:`length`,default:`0.4rem · 0.75rem`,description:`컴팩트 셀 패딩`},{name:`--table-scroll-max-height`,type:`length`,default:`16rem`,description:`스크롤 최대 높이`},{name:`--table-sticky-left-n · --table-sticky-shadow`,type:`length · shadow`,default:`0 · 2px 0 4px -2px…`,description:`고정 열 위치와 그림자`}])],H=[{name:`bordered`,type:`boolean`,default:`false`,description:`항목 테두리`},{name:`split`,type:`boolean`,default:`false`,description:`항목 구분선`},{name:`block`,type:`boolean`,default:`false`,description:`인라인 목록을 부모 너비로 확장`},{name:`size`,type:`'md' | 'compact'`,default:`md`,description:`목록 밀도`},{name:`variant`,type:`'default' | 'bullet' | 'ordered' | 'definition'`,default:`default`,description:`목록 의미와 기본 루트`},{name:`tag`,type:`'ul' | 'ol' | 'dl' | 'div'`,default:`variant 기준`,description:`시맨틱 루트 재정의`},{name:`layout`,type:`'block' | 'inline'`,default:`block`,description:`세로 또는 인라인 정의 레이아웃`},{name:`inlineLabelWidth`,type:`string`,default:`—`,description:`인라인 정의 목록 제목 열 너비`},{name:`inlineGap`,type:`string`,default:`—`,description:`인라인 정의 목록 열 간격`},{name:`descAlign`,type:`'left' | 'right'`,default:`left`,description:`정의 설명 정렬`}],U=[{name:`title`,type:`string`,default:`—`,description:`항목 제목`},{name:`description`,type:`string`,default:`—`,description:`항목 설명`},{name:`meta`,type:`string`,default:`—`,description:`항목 보조 메타`},{name:`tag`,type:`'auto' | 'li' | 'dt' | 'dd'`,default:`auto`,description:`부모 문맥에 따른 항목 태그`},{name:`prefix · extra · actions`,type:`ReactNode · slot`,default:`—`,description:`앞 영역, 우측 보조 영역, 액션 영역`}],Rt=[z(`React · Next.js API · List Props`,H,"Next.js는 `@uxkm/react/list`를 재사용합니다."),z(`React · Next.js API · ListItem Props`,U),z(`Vue · Nuxt API · List Props`,B(H),"Nuxt는 `@uxkm/vue/list`를 재사용합니다."),z(`Vue · Nuxt API · ListItem Props / Slots`,B(U)),z(`HTML · Gulp · 공통 클래스`,[{name:`list · list_item · list_content · list_title · list_desc · list_meta`,type:`class`,default:`—`,description:`목록·항목 기본 구조`},{name:`list_bordered · list_divider · list_compact`,type:`class`,default:`—`,description:`스타일·밀도 변형`},{name:`list_bullet* · list_ordered*`,type:`class`,default:`—`,description:`불릿·번호·계층 번호 변형`},{name:`list_definition · list_inline · list_block · list_desc-right`,type:`class`,default:`—`,description:`정의 목록 레이아웃`},{name:`list_link · list_extra · list_action`,type:`class`,default:`—`,description:`인터랙티브 본문과 우측 영역`}]),z(`공통 API · 디자인 토큰`,[{name:`--list-gap · --list-item-padding-y · --list-item-padding-x`,type:`length`,default:`var(--space-xs) · 0.65rem · 1rem`,description:`목록 간격과 항목 패딩`},{name:`--list-title-size · --list-desc-size · --list-meta-size`,type:`length`,default:`—`,description:`항목 타이포 크기`},{name:`--list-inline-label-width · --list-inline-gap`,type:`length`,default:`8rem · var(--space-md)`,description:`인라인 정의 목록 열 설정`}])],W=[{name:`title`,type:`string`,default:`—`,description:`지표 라벨`},{name:`value`,type:`string | number | ReactNode`,default:`—`,description:`주요 수치`},{name:`prefix`,type:`string`,default:`—`,description:`값 앞 접두`},{name:`suffix`,type:`string`,default:`—`,description:`값 뒤 접미`},{name:`description`,type:`string`,default:`—`,description:`보조 설명`},{name:`trend`,type:`string`,default:`—`,description:`증감 텍스트`},{name:`trendColor`,type:`string`,default:`—`,description:`증감·설명 color_*`},{name:`trendIcon`,type:`ReactNode · slot`,default:`기본 상승 아이콘`,description:`증감 아이콘`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`수치 크기`},{name:`card`,type:`boolean`,default:`false`,description:`카드 스킨`},{name:`shadow`,type:`boolean`,default:`false`,description:`카드 그림자`}],zt=[z(`React · Next.js API · Props`,W,"Next.js는 `@uxkm/react/stat`을 재사용합니다."),z(`Vue · Nuxt API · Props`,B(W),"Nuxt는 `@uxkm/vue/stat`을 재사용합니다."),z(`Vue · Nuxt API · Slots`,[{name:`value`,type:`slot`,default:`—`,description:`수치 커스텀 콘텐츠`},{name:`trend-icon`,type:`slot`,default:`기본 상승 아이콘`,description:`증감 아이콘`},{name:`default`,type:`slot`,default:`—`,description:`아이콘·커스텀 레이아웃`}]),z(`HTML · Gulp · 공통 클래스`,[{name:`stat · stat_header · stat_label · stat_value-row · stat_value`,type:`class`,default:`—`,description:`지표 기본 구조`},{name:`stat_prefix · stat_suffix · stat_desc · stat_trend`,type:`class`,default:`—`,description:`값과 보조 정보`},{name:`stat_sm · stat_lg · stat_horizontal · stat_inline · stat_row`,type:`class`,default:`—`,description:`크기·레이아웃 변형`},{name:`stat_card · stat_shadow · stat_borderless · stat_accent`,type:`class`,default:`—`,description:`카드 스킨`},{name:`stat_group · stat_group-2…4 · stat_group-divider`,type:`class`,default:`—`,description:`반응형 지표 그룹`}]),z(`공통 API · 디자인 토큰`,[{name:`--stat-value-size-sm · --stat-value-size · --stat-value-size-lg`,type:`length`,default:`1.25rem · 1.75rem · 2.25rem`,description:`수치 크기`},{name:`--stat-label-size · --stat-desc-size`,type:`length`,default:`var(--text-size-sm)`,description:`라벨·설명 크기`},{name:`--stat-group-gap · --stat-card-padding`,type:`length`,default:`var(--space-lg)`,description:`그룹 간격과 카드 패딩`}])]})))()}var Vt,G,K,q,J,Ht,Y,X,Z;function Ut(){return(Ut=e((()=>{Vt=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],G=(e,t,n)=>({title:e,description:n,tables:[{columns:Vt,rows:t}]}),K=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),q=[{name:`card`,type:`boolean`,default:`false`,description:`콘텐츠 카드 스킨`},{name:`alternate`,type:`boolean`,default:`false`,description:`좌우 교차 배치`},{name:`horizontal`,type:`boolean`,default:`false`,description:`가로 프로세스 배치`},{name:`labelCol`,type:`boolean`,default:`false`,description:`왼쪽 날짜 레이블 열`},{name:`icon`,type:`boolean`,default:`false`,description:`아이콘 도트 레이아웃`},{name:`iconSize`,type:`'sm' | 'md'`,default:`md`,description:`아이콘 도트 크기`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`간격과 텍스트 크기`},{name:`tag`,type:`'ol' | 'ul'`,default:`ol`,description:`시맨틱 루트`}],J=[{name:`color`,type:`string`,default:`primary`,description:`color_* 도트 색상`},{name:`title · description`,type:`string`,default:`—`,description:`제목과 설명`},{name:`time · datetime`,type:`string`,default:`—`,description:`표시 시간과 datetime 값`},{name:`label · labelDatetime`,type:`string`,default:`—`,description:`왼쪽 레이블과 datetime 값`},{name:`active · pending · outline`,type:`boolean`,default:`false`,description:`진행·대기·아웃라인 상태`},{name:`dot · meta · children`,type:`ReactNode · slot`,default:`—`,description:`도트·메타·본문 커스텀 콘텐츠`}],Ht=[G(`React · Next.js API · Timeline Props`,q,"Next.js는 `@uxkm/react/timeline`을 재사용합니다."),G(`React · Next.js API · TimelineItem Props`,J),G(`Vue · Nuxt API · Timeline Props`,K(q),"Nuxt는 `@uxkm/vue/timeline`을 재사용합니다."),G(`Vue · Nuxt API · TimelineItem Props / Slots`,K(J)),G(`HTML · Gulp · 공통 클래스`,[{name:`timeline · timeline_item · timeline_dot · timeline_content`,type:`class`,default:`—`,description:`기본 구조`},{name:`timeline_card · timeline_alternate · timeline_horizontal · timeline_label-col`,type:`class`,default:`—`,description:`레이아웃 변형`},{name:`timeline_sm · timeline_lg · timeline_icon · timeline_icon-sm`,type:`class`,default:`—`,description:`크기와 아이콘 변형`},{name:`timeline_time · timeline_title · timeline_desc · timeline_meta · timeline_label`,type:`class`,default:`—`,description:`콘텐츠 파트`}]),G(`공통 API · 디자인 토큰`,[{name:`--timeline-gap · --timeline-dot-size · --timeline-line-width`,type:`length`,default:`—`,description:`항목 간격과 축`},{name:`--timeline-time-size · --timeline-title-size · --timeline-desc-size`,type:`length`,default:`—`,description:`타이포 크기`},{name:`--timeline-label-width`,type:`length`,default:`4.5rem`,description:`날짜 레이블 열 너비`}])],Y=[{name:`bordered`,type:`boolean`,default:`false`,description:`테두리 스킨`},{name:`lines`,type:`boolean`,default:`false`,description:`계층 연결선`},{name:`compact`,type:`boolean`,default:`false`,description:`컴팩트 밀도`},{name:`ariaLabel`,type:`string`,default:`—`,description:`트리 접근성 이름`},{name:`multiselectable`,type:`boolean`,default:`false`,description:`다중 선택 가능 상태`}],X=[{name:`label`,type:`string`,default:`—`,description:`노드 라벨`},{name:`expanded · selected · disabled · expandable`,type:`boolean`,default:`false`,description:`확장·선택·비활성·확장 가능 상태`},{name:`plusToggle`,type:`boolean`,default:`false`,description:`+/− 토글`},{name:`toggleLabel`,type:`string`,default:`—`,description:`토글 접근성 이름`},{name:`link`,type:`boolean`,default:`false`,description:`클릭 가능한 라벨`},{name:`meta`,type:`string`,default:`—`,description:`우측 보조 정보`},{name:`prefix · icon · labelSlot · metaSlot · children`,type:`ReactNode · slot`,default:`—`,description:`노드 커스텀 영역과 자식 노드`}],Z=[G(`React · Next.js API · Tree Props`,Y,"Next.js는 `@uxkm/react/tree`를 재사용합니다."),G(`React · Next.js API · TreeNode Props`,X),G(`Vue · Nuxt API · Tree Props`,K(Y),"Nuxt는 `@uxkm/vue/tree`를 재사용합니다."),G(`Vue · Nuxt API · TreeNode Props / Slots`,K(X)),G(`HTML · Gulp · 공통 클래스`,[{name:`tree · tree_item · tree_row · tree_label`,type:`class`,default:`—`,description:`기본 구조`},{name:`tree_bordered · tree_lines · tree_compact`,type:`class`,default:`—`,description:`스킨과 밀도`},{name:`tree_toggle · tree_toggle-plus · tree_toggle_placeholder`,type:`class`,default:`—`,description:`확장 토글`},{name:`tree_link · tree_icon · tree_meta · tree_check`,type:`class`,default:`—`,description:`인터랙션과 보조 파트`},{name:`is-selected · is-disabled`,type:`class`,default:`—`,description:`노드 상태`}]),G(`공통 API · 디자인 토큰`,[{name:`--tree-indent · --tree-row-height · --tree-gap`,type:`length`,default:`—`,description:`계층 들여쓰기와 행 밀도`},{name:`--tree-font-size · --tree-toggle-size`,type:`length`,default:`—`,description:`라벨과 토글 크기`},{name:`--tree-line-color`,type:`color`,default:`var(--color-border)`,description:`연결선 색상`}])]})))()}function Q(e,t,n){return[...e,{title:`WebSquare API · XML`,description:t,tables:[{columns:Wt,rows:n}]}]}var Wt,$,Gt,Kt,qt,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{Ft(),Bt(),Ut(),Wt=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],$=[{name:`w2:group · w2:textbox`,type:`component`,default:`—`,description:`구조 영역과 텍스트를 공통 CSS 클래스에 연결합니다.`},{name:`class`,type:`string`,default:`—`,description:`컴포넌트·변형·상태 공통 클래스를 조합합니다.`},{name:`role · aria-*`,type:`state`,default:`—`,description:`구조, 선택, 확장, 비활성 상태의 접근성 의미를 지정합니다.`},{name:`DataList · w2:generator`,type:`binding`,default:`선택`,description:`반복 데이터를 화면 컴포넌트와 상태 클래스에 연결합니다.`}],Gt=Q(Lt,`Table은 group과 textbox로 시맨틱 표 구조를 구성하고 반복 행을 DataList에 연결합니다.`,[...$,{name:`tagname="table|thead|tbody|tr|th|td"`,type:`semantic`,default:`—`,description:`표의 행·열 관계를 시맨틱 요소로 유지합니다.`},{name:`table_scroll · table_sticky-*`,type:`class`,default:`—`,description:`스크롤 컨테이너와 고정 행·열 상태를 적용합니다.`}]),Kt=Q(Rt,`List는 목록 종류에 맞는 tagname과 반복 item 구조를 사용합니다.`,[...$,{name:`tagname="ul|ol|dl|li"`,type:`semantic`,default:`—`,description:`불릿·번호·정의 목록의 의미를 유지합니다.`},{name:`xf:trigger · w2:anchor`,type:`component`,default:`—`,description:`버튼형·링크형 ListItem을 구성합니다.`}]),qt=Q(zt,`Stat은 label·value·description 영역을 화면 데이터와 연결합니다.`,[...$,{name:`label`,type:`string · binding`,default:`—`,description:`라벨, 값, 접두·접미, 추세 설명을 지정합니다.`},{name:`stat_* · color_*`,type:`class`,default:`—`,description:`크기·배치·카드 스킨·추세 색상을 적용합니다.`}]),Jt=Q(Pt,`Calendar는 날짜 DataList, generator 셀, 탐색 Trigger를 함께 사용합니다.`,[...$,{name:`xf:trigger`,type:`component`,default:`—`,description:`이전·다음 탐색과 선택 가능한 날짜 셀을 구성합니다.`},{name:`ev:onclick`,type:`event`,default:`—`,description:`월·주 이동과 날짜 선택을 scwin 함수에 연결합니다.`},{name:`aria-selected · is-*`,type:`state`,default:`—`,description:`선택·범위·오늘·비활성 날짜 상태를 동기화합니다.`}]),Yt=Q(Ht,`Timeline은 순서 목록과 반복 item을 시간순 데이터에 연결합니다.`,[...$,{name:`tagname="ol|li|time"`,type:`semantic`,default:`—`,description:`순서가 있는 이벤트와 시간 의미를 유지합니다.`},{name:`timeline_* · color_*`,type:`class`,default:`—`,description:`도트·방향·크기·상태 변형을 적용합니다.`}]),Xt=Q(Z,`Tree는 중첩 node 데이터와 확장·선택 상태를 동기화합니다.`,[...$,{name:`xf:trigger · w2:checkbox`,type:`component`,default:`—`,description:`노드 토글과 다중 선택 컨트롤을 구성합니다.`},{name:`role="tree|treeitem|group"`,type:`semantic`,default:`—`,description:`트리와 노드의 계층 관계를 제공합니다.`},{name:`aria-expanded · aria-selected`,type:`state`,default:`false`,description:`노드 확장·선택 상태를 화면 데이터와 동기화합니다.`}])})))()}export{St as _,Gt as a,kt as b,xt as c,yt as d,Tt as f,wt as g,vt as h,qt as i,Dt as l,Et as m,Zt as n,Yt as o,bt as p,Kt as r,Xt as s,Jt as t,At as u,Ot as v,Ct as y};