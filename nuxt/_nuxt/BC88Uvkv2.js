import{A as e,B as t,F as n,G as r,I as i,K as a,L as o,U as s,Y as c,b as l,d as u,f as d,i as f,k as p,m,nt as h,p as g,st as _,u as v,wt as y,y as b,z as ee}from"./CCnt5OSV.js";import{F as x,a as S,c as C,l as w,o as T,s as E,t as D,v as O}from"./DkmWXf_S.js";import{n as te,t as k}from"./D01l-9yr.js";import{t as A}from"./D5AUKneU.js";import{t as j}from"./gHQDdAlU.js";import{t as M}from"./DD3RWXAt.js";import{r as N,s as P}from"./D6IbhUhQ.js";import{a as F,c as I,d as L,f as R,i as z,l as B,n as V,o as H,r as ne,s as re,t as U,u as W}from"./BO8h7E8p2.js";var ie={class:`calendar_nav-label`},G={__name:`CalendarNav`,props:{label:String,prevLabel:{type:String,default:`이전 주`},nextLabel:{type:String,default:`다음 주`}},setup(e){let t=e,n=s(),i=r(),a=h(null),d=x(`CalendarNav`,{selfClosing:!1});return O(d,t,i,a,n),(t,n)=>(o(),m(`div`,{ref_key:`rootRef`,ref:a,class:`calendar_nav`},[l(j,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":e.prevLabel},{"icon-before":c(()=>[l(A,{name:`chevron-left`,size:`sm`})]),_:1},8,[`aria-label`]),u(`span`,ie,y(e.label),1),l(j,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":e.nextLabel},{"icon-before":c(()=>[l(A,{name:`chevron-right`,size:`sm`})]),_:1},8,[`aria-label`])],512))}},ae={key:0,class:`calendar_wheel-toolbar`,"data-demo-slot":`toolbar`},oe={key:1,class:`calendar_wheel-title`},se={class:`calendar_wheel-body`},ce={class:`calendar_wheel-columns`},le={key:1,class:`calendar_wheel-footer`,"data-demo-slot":`footer`},K={__name:`CalendarWheel`,props:{title:String,shadow:Boolean,borderless:Boolean,footer:Boolean,toolbar:{type:Boolean,default:!0},cancelLabel:String,confirmLabel:String,ariaLabel:String},setup(e){let n=e,i=r(),a=s(),l=h(null),f=x(`CalendarWheel`,{booleanProps:new Set([`shadow`,`borderless`,`footer`,`toolbar`]),selfClosing:!1});O(f,n,i,l,a);let p=v(()=>n.toolbar&&(i.toolbar||n.title||n.cancelLabel||n.confirmLabel));return(n,r)=>(o(),d(R,{ref_key:`rootRef`,ref:l,wheel:``,shadow:e.shadow,borderless:e.borderless,role:`group`,"aria-label":e.ariaLabel},{default:c(()=>[p.value?(o(),m(`div`,ae,[t(n.$slots,`toolbar`,{},()=>[e.cancelLabel?(o(),d(j,{key:0,variant:`text`,size:`sm`,label:e.cancelLabel},null,8,[`label`])):g(``,!0),e.title?(o(),m(`span`,oe,y(e.title),1)):g(``,!0),e.confirmLabel?(o(),d(j,{key:2,variant:`text`,color:`primary`,size:`sm`,label:e.confirmLabel},null,8,[`label`])):g(``,!0)])])):g(``,!0),u(`div`,se,[r[0]||=u(`div`,{class:`calendar_wheel-highlight`,"aria-hidden":`true`},null,-1),u(`div`,ce,[t(n.$slots,`default`)]),r[1]||=u(`div`,{class:`calendar_wheel-fade`,"aria-hidden":`true`},null,-1)]),e.footer||n.$slots.footer?(o(),m(`div`,le,[t(n.$slots,`footer`)])):g(``,!0)]),_:3},8,[`shadow`,`borderless`,`aria-label`]))}};function q(e){return[...e.querySelectorAll(`.calendar_wheel-item`)]}function J(e){let t=e.getBoundingClientRect();return t.top+t.height/2}function Y(e){let t=e.getBoundingClientRect();return t.top+t.height/2}function ue(e){let t=q(e),n=J(e),r=null,i=1/0;return t.forEach(e=>{let t=Math.abs(Y(e)-n);t<i&&(i=t,r=e)}),r}function de(t,{onSelect:r}={}){let a=!1,o;function s(e,{skipScroll:n=!1}={}){let i=t.value;if(!i||!e)return;if(!n){let t=Y(e)-J(i);Math.abs(t)>1&&(a=!0,i.scrollTop+=t,requestAnimationFrame(()=>{a=!1}))}let o=e.textContent?.trim();o&&r?.(o)}function c({skipScroll:e=!1}={}){let n=t.value;if(!n)return;let r=ue(n);r&&s(r,{skipScroll:e})}function l(){c()}function u(){a||(c({skipScroll:!0}),clearTimeout(o),o=setTimeout(l,80))}function d(){let e=t.value;if(!e)return;let n=e.querySelector(`.calendar_wheel-item.is-selected`);n&&requestAnimationFrame(()=>s(n))}function f(e){let n=t.value;if(!n)return;let r=q(n)[e];r&&s(r)}function p(e){let n=t.value;if(!n)return;let r=q(n),i=n.querySelector(`.calendar_wheel-item.is-selected`),a=r.indexOf(i)+e;a<0||a>=r.length||s(r[a])}return n(()=>{let n=t.value;n&&(n.addEventListener(`scroll`,u,{passive:!0}),e(()=>d()))}),i(()=>{let e=t.value;e&&e.removeEventListener(`scroll`,u),clearTimeout(o)}),{scrollToSelected:d,selectByIndex:f,moveSelection:p}}var fe=[`aria-label`],pe=[`aria-selected`,`onClick`],X=Object.assign({inheritAttrs:!1},{__name:`CalendarWheelColumn`,props:{ripple:k,label:String,items:{type:Array,default:()=>[]},selected:[String,Number],showSteps:{type:Boolean,default:!0},prevLabel:String,nextLabel:String},setup(t){let n=t,{rippleAttrs:i,childRippleAttrs:b}=te(n,{mode:`container`}),S=s(),C=r(),w=h(null),T=h(null),E=h(n.selected),D=x(`CalendarWheelColumn`,{booleanProps:new Set([`showSteps`]),selfClosing:!1});O(D,n,C,w,S);let k=v(()=>[`calendar_wheel-column`,S.class].filter(Boolean)),M=v(()=>{let{class:e,...t}=S;return t}),N=v(()=>({...i.value,...M.value})),{scrollToSelected:P,selectByIndex:F,moveSelection:I}=de(T,{onSelect(e){E.value=e}});a(()=>n.selected,t=>{E.value=t,e(()=>P())}),a(()=>n.items,()=>e(()=>P()),{deep:!0});let L=v(()=>n.items.map(e=>{if(typeof e==`string`||typeof e==`number`){let t=String(e);return{label:t,selected:t===String(E.value)}}return{label:e.label,selected:e.selected??e.label===String(E.value)}})),R=v(()=>L.value.findIndex(e=>e.selected)),z=v(()=>R.value<=0),B=v(()=>R.value<0||R.value>=L.value.length-1);function V(){I(-1)}function H(){I(1)}return(e,n)=>(o(),m(`div`,p({ref_key:`rootRef`,ref:w},N.value,{class:k.value}),[t.showSteps&&t.prevLabel?(o(),d(j,p({key:0},_(b),{variant:`ghost`,size:`sm`,"icon-only":``,class:`calendar_wheel-step calendar_wheel-step-prev`,"aria-label":t.prevLabel,disabled:z.value,onClick:V}),{"icon-before":c(()=>[l(A,{name:`chevron-up`,size:`sm`})]),_:1},16,[`aria-label`,`disabled`])):g(``,!0),u(`ul`,{ref_key:`listRef`,ref:T,class:`calendar_wheel-list`,role:`listbox`,"aria-label":t.label,"data-wheel":``},[(o(!0),m(f,null,ee(L.value,(e,t)=>(o(),m(`li`,{key:e.label},[u(`button`,p({ref_for:!0},_(b),{type:`button`,class:[`calendar_wheel-item`,{"is-selected":e.selected}],"aria-selected":e.selected?`true`:void 0,onClick:e=>_(F)(t)}),y(e.label),17,pe)]))),128))],8,fe),t.showSteps&&t.nextLabel?(o(),d(j,p({key:1},_(b),{variant:`ghost`,size:`sm`,"icon-only":``,class:`calendar_wheel-step calendar_wheel-step-next`,"aria-label":t.nextLabel,disabled:B.value,onClick:H}),{"icon-before":c(()=>[l(A,{name:`chevron-down`,size:`sm`})]),_:1},16,[`aria-label`,`disabled`])):g(``,!0)],16))}}),Z=T,me=E,he=Z,ge=[{name:`title`,type:`string`,default:`—`,description:`내장 헤더 제목 (header 슬롯 없을 때)`},{name:`aria-label`,type:`string`,default:`—`,description:`캘린더 접근성 라벨 (권장)`},{name:`role`,type:`string`,default:`application`,description:`루트 role 속성`},{name:`size`,type:`'sm' | 'lg'`,default:`—`,description:`calendar_sm · calendar_lg`},{name:`no-header`,type:`boolean`,default:`false`,description:`헤더 영역 숨김`},{name:`minimal`,type:`boolean`,default:`false`,description:`최소 스타일 (calendar_minimal)`},{name:`compact`,type:`boolean`,default:`false`,description:`좁은 셀 (calendar_compact)`},{name:`borderless`,type:`boolean`,default:`false`,description:`테두리 없음`},{name:`shadow`,type:`boolean`,default:`false`,description:`그림자 (calendar_shadow)`},{name:`ghost`,type:`boolean`,default:`false`,description:`투명 배경 (calendar_ghost)`},{name:`week`,type:`boolean`,default:`false`,description:`주간 뷰 레이아웃`},{name:`weekends`,type:`boolean`,default:`false`,description:`주말 강조 (calendar_weekends)`},{name:`agenda`,type:`boolean`,default:`false`,description:`아젠다 레이아웃`},{name:`wheel`,type:`boolean`,default:`false`,description:`휠 피커 레이아웃`},{name:`readonly`,type:`boolean`,default:`false`,description:`날짜 선택 불가`},{name:`disabled`,type:`boolean`,default:`false`,description:`전체 비활성 (is-disabled)`}],_e=Z,ve=[{name:`title`,type:`string`,default:`—`,description:`월·기간 제목 (calendar_title)`},{name:`prev-label`,type:`string`,default:`이전 달`,description:`이전 버튼 aria-label`},{name:`next-label`,type:`string`,default:`다음 달`,description:`다음 버튼 aria-label`},{name:`show-nav`,type:`boolean`,default:`true`,description:`이전·다음 네비게이션 표시`},{name:`show-prev`,type:`boolean`,default:`—`,description:`이전 버튼만 제어 (show-nav 대체)`},{name:`show-next`,type:`boolean`,default:`—`,description:`다음 버튼만 제어`}],ye=Z,be=[{name:`label`,type:`string`,default:`—`,description:`주간 네비 라벨`},{name:`prev-label`,type:`string`,default:`이전 주`,description:`이전 버튼 aria-label`},{name:`next-label`,type:`string`,default:`다음 주`,description:`다음 버튼 aria-label`}],xe=Z,Se=[{name:`labels`,type:`string[]`,default:`일~토`,description:`요일 라벨 배열`}],Ce=Z,we=[{name:`days`,type:`object[]`,default:`—`,description:`CalendarDay용 셀 데이터 배열`},{name:`preset`,type:`string`,default:`june2024`,description:`데모용 월 프리셋`},{name:`selected`,type:`number`,default:`—`,description:`선택일 (프리셋·partial용)`},{name:`today`,type:`number`,default:`—`,description:`오늘 날짜 (프리셋·partial용)`},{name:`disabled`,type:`number[]`,default:`—`,description:`비활성 날짜 목록`},{name:`events`,type:`number[]`,default:`—`,description:`이벤트 표시 날짜`},{name:`range-start`,type:`number`,default:`—`,description:`범위 시작일`},{name:`range-end`,type:`number`,default:`—`,description:`범위 종료일`},{name:`weekends`,type:`boolean`,default:`false`,description:`주말 셀 표시`},{name:`partial`,type:`number`,default:`—`,description:`부분 월 데모 일수`},{name:`week`,type:`boolean`,default:`false`,description:`주간 그리드`},{name:`readonly`,type:`boolean`,default:`false`,description:`날짜 버튼 비활성`}],Te=Z,Ee=[{name:`week`,type:`boolean`,default:`false`,description:`7열 주간 그리드 (calendar_grid-week)`}],De=Z,Oe=[{name:`day`,type:`number | string`,default:`—`,description:`날짜 숫자 (필수)`},{name:`other-month`,type:`boolean`,default:`false`,description:`다른 달 (is-other-month)`},{name:`today`,type:`boolean`,default:`false`,description:`오늘 (is-today)`},{name:`selected`,type:`boolean`,default:`false`,description:`선택 (is-selected)`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 (is-disabled)`},{name:`sunday`,type:`boolean`,default:`false`,description:`일요일 (is-sunday)`},{name:`saturday`,type:`boolean`,default:`false`,description:`토요일 (is-saturday)`},{name:`range-start`,type:`boolean`,default:`false`,description:`범위 시작 (is-range-start)`},{name:`range-end`,type:`boolean`,default:`false`,description:`범위 끝 (is-range-end)`},{name:`in-range`,type:`boolean`,default:`false`,description:`범위 내 (is-in-range)`},{name:`event`,type:`boolean`,default:`false`,description:`이벤트 점 (has-event)`},{name:`readonly`,type:`boolean`,default:`false`,description:`클릭 불가`},P],ke=Z,Ae=[{name:`title`,type:`string`,default:`—`,description:`툴바 제목`},{name:`aria-label`,type:`string`,default:`—`,description:`휠 피커 접근성 라벨`},{name:`shadow`,type:`boolean`,default:`false`,description:`Calendar에 전달`},{name:`borderless`,type:`boolean`,default:`false`,description:`Calendar에 전달`},{name:`footer`,type:`boolean`,default:`false`,description:`하단 푸터 영역 표시`},{name:`toolbar`,type:`boolean`,default:`true`,description:`상단 툴바 표시`},{name:`cancel-label`,type:`string`,default:`—`,description:`취소 버튼 텍스트`},{name:`confirm-label`,type:`string`,default:`—`,description:`확인 버튼 텍스트`}],je=Z,Me=[{name:`label`,type:`string`,default:`—`,description:`listbox aria-label`},{name:`items`,type:`array`,default:`[]`,description:`문자열·숫자 또는 { label, selected } 객체`},{name:`selected`,type:`string | number`,default:`—`,description:`선택 값`},{name:`show-steps`,type:`boolean`,default:`true`,description:`위·아래 스텝 버튼`},{name:`prev-label`,type:`string`,default:`—`,description:`이전 스텝 aria-label`},{name:`next-label`,type:`string`,default:`—`,description:`다음 스텝 aria-label`},N],Q=me,Ne=[{name:`header`,description:`헤더 (CalendarHeader)`},{name:`weekdays`,description:`요일 행 (CalendarWeekdays)`},{name:`default`,description:`월 그리드·휠 등 본문`},{name:`footer`,description:`푸터 (CalendarFooter)`}],Pe=[{name:`default`,description:`헤더 우측 추가 콘텐츠`}],$=[{name:`default`,description:`CalendarDay 자식`}],Fe=[{name:`default`,description:`푸터 액션 (기본: 초기화·확인)`}],Ie=[{name:`default`,description:`여러 Calendar 나란히`}],Le=[{name:`toolbar`,description:`상단 툴바 커스텀`},{name:`default`,description:`CalendarWheelColumn 목록`},{name:`footer`,description:`하단 푸터`}],Re=S,ze=[{name:`calendar`,description:`캘린더 루트`},{name:`calendar_sm · calendar_lg · calendar_compact`,description:`크기`},{name:`calendar_borderless · calendar_shadow · calendar_ghost · calendar_minimal`,description:`스킨`},{name:`calendar_week · calendar_weekends · calendar_agenda · calendar_wheel`,description:`레이아웃 모드`},{name:`calendar_header · calendar_title · calendar_nav`,description:`헤더·네비`},{name:`calendar_weekdays · calendar_weekday`,description:`요일 행`},{name:`calendar_grid · calendar_grid-week`,description:`날짜 그리드`},{name:`calendar_day`,description:`날짜 셀 버튼`},{name:`calendar_footer · calendar_group`,description:`푸터·다중 캘린더`},{name:`calendar_wheel-*`,description:`휠 피커 파트`},{name:`is-today · is-selected · is-in-range · is-range-start · is-range-end`,description:`날짜 상태`},{name:`is-other-month · is-sunday · is-saturday · is-disabled · has-event`,description:`날짜 상태`}],Be=C,Ve=[{name:`--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg`,default:`—`,description:`날짜 셀 크기`},{name:`--calendar-gap`,default:`2px`,description:`그리드 간격`},{name:`--calendar-wheel-height · --calendar-wheel-row-height`,default:`—`,description:`휠 피커 높이`},{name:`--calendar-agenda-gap · --calendar-agenda-date-width`,default:`—`,description:`아젠다 레이아웃`}],He={class:`calendar_header`},Ue={class:`calendar_header`},We={title:`Calendar | HTML Components`,activeNav:`calendar`,pageTitle:`Calendar`},Ge={__name:`calendar`,setup(e){let t=I(),n=re(),r=H(14,{today:7,selected:9}),i=Array.from({length:11},(e,t)=>`${2019+t}년`),a=Array.from({length:12},(e,t)=>`${t+1}월`),s=Array.from({length:31},(e,t)=>`${t+1}일`);return(e,d)=>(o(),m(f,null,[d[9]||=u(`div`,{class:`page_intro`},[u(`h1`,null,`Calendar`),u(`p`,{class:`lead`},`날짜를 월·주 단위 그리드, 세로 일정 목록, iOS 스타일 휠(년·월·일)로 표시하는 캘린더 컴포넌트입니다. 다양한 레이아웃과 단일·범위 선택을 지원합니다.`)],-1),l(M,{"heading-id":`basic-heading`,title:`기본`,description:`calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <Calendar aria-label="2024년 6월">
    <template #header>
      <CalendarHeader title="2024년 6월" />
    </template>
    <template #weekdays>
      <CalendarWeekdays />
    </template>
    <CalendarMonth />
  </Calendar>
</template>`},{default:c(()=>[l(R,{"aria-label":`2024년 6월`},{header:c(()=>[l(B,{title:`2024년 6월`})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V)]),_:1})]),_:1}),l(M,{"heading-id":`no-header-heading`,title:`헤더 없음`,description:`calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <Calendar no-header aria-label="2024년 6월">
    <template #weekdays>
      <CalendarWeekdays />
    </template>
    <CalendarMonth />
  </Calendar>
</template>`},{default:c(()=>[l(R,{"no-header":``,"aria-label":`2024년 6월`},{weekdays:c(()=>[l(U)]),default:c(()=>[l(V)]),_:1})]),_:1}),l(M,{"heading-id":`minimal-heading`,title:`날짜만`,description:`calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
<\/script>

<template>
  <Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
    <CalendarMonth />
  </Calendar>
</template>`},{default:c(()=>[l(R,{minimal:``,compact:``,borderless:``,"aria-label":`2024년 6월 날짜만`},{default:c(()=>[l(V)]),_:1})]),_:1}),l(M,{"heading-id":`week-heading`,title:`주간`,description:`calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다.`,stack:``,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarNav from '@/components/CalendarNav.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@/data/calendar-demo';
<\/script>

<template>
  <Calendar week shadow :aria-label="\`2024년 \${JUNE_WEEK_LABEL}\`">
    <CalendarNav :label="JUNE_WEEK_LABEL" />
    <CalendarWeekdays />
    <CalendarMonth week :days="JUNE_WEEK_DAYS" />
  </Calendar>
  <Calendar week compact borderless :aria-label="\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`">
    <CalendarNav :label="JUNE_WEEK_LABEL" />
    <CalendarMonth week :days="JUNE_WEEK_DAYS" />
  </Calendar>
</template>`},{default:c(()=>[l(R,{week:``,shadow:``,"aria-label":`2024년 ${_(F)}`},{default:c(()=>[l(G,{label:_(F)},null,8,[`label`]),l(U),l(V,{week:``,days:_(z)},null,8,[`days`])]),_:1},8,[`aria-label`]),l(R,{week:``,compact:``,borderless:``,"aria-label":`2024년 ${_(F)} (컴팩트)`},{default:c(()=>[l(G,{label:_(F)},null,8,[`label`]),l(V,{week:``,days:_(z)},null,8,[`days`])]),_:1},8,[`aria-label`])]),_:1}),l(M,{"heading-id":`wheel-heading`,title:`휠 (iOS 스타일)`,description:`calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import CalendarGroup from '@/components/CalendarGroup.vue';
import CalendarWheel from '@/components/CalendarWheel.vue';
import CalendarWheelColumn from '@/components/CalendarWheelColumn.vue';
const wheelYears = Array.from({ length: 11 }, (_, i) => \`\${2019 + i}년\`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => \`\${i + 1}월\`);
const wheelDays = Array.from({ length: 31 }, (_, i) => \`\${i + 1}일\`);
<\/script>

<template>
  <CalendarWheel
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
  </CalendarGroup>
</template>`},{default:c(()=>[l(K,{shadow:``,title:`날짜 선택`,"cancel-label":`취소`,"confirm-label":`완료`,"aria-label":`날짜 휠 선택`},{default:c(()=>[l(X,{label:`년`,items:_(i),selected:`2024년`,"prev-label":`이전 년`,"next-label":`다음 년`},null,8,[`items`]),l(X,{label:`월`,items:_(a),selected:`6월`,"prev-label":`이전 월`,"next-label":`다음 월`},null,8,[`items`]),l(X,{label:`일`,items:_(s),selected:`15일`,"prev-label":`이전 일`,"next-label":`다음 일`},null,8,[`items`])]),_:1}),l(K,{borderless:``,footer:``,"aria-label":`날짜 휠 선택 (하단 버튼)`,toolbar:!1},{footer:c(()=>[l(j,{variant:`ghost`,size:`sm`,label:`취소`}),l(j,{variant:`filled`,color:`primary`,size:`sm`,label:`확인`})]),default:c(()=>[l(X,{label:`년`,items:[`2024년`],selected:`2024년`,"prev-label":`이전 년`,"next-label":`다음 년`}),l(X,{label:`월`,items:[`6월`],selected:`6월`,"prev-label":`이전 월`,"next-label":`다음 월`}),l(X,{label:`일`,items:[`15일`],selected:`15일`,"prev-label":`이전 일`,"next-label":`다음 일`})]),_:1}),l(W,{class:`calendar_group-center`},{default:c(()=>[l(K,{shadow:``,title:`년도`,"aria-label":`년도 선택`},{default:c(()=>[l(X,{label:`년`,items:[`2024년`],selected:`2024년`,"prev-label":`이전 년`,"next-label":`다음 년`})]),_:1}),l(K,{shadow:``,title:`년·월`,"aria-label":`년·월 선택`,toolbar:!0},{toolbar:c(()=>[...d[0]||=[u(`span`,{class:`calendar_wheel-title`},`년·월`,-1)]]),default:c(()=>[l(X,{label:`년`,items:[`2024년`],selected:`2024년`,"show-steps":!1}),l(X,{label:`월`,items:[`6월`],selected:`6월`,"show-steps":!1})]),_:1}),l(K,{shadow:``,title:`월·일`,"aria-label":`월·일 선택`,toolbar:!0},{toolbar:c(()=>[...d[1]||=[u(`span`,{class:`calendar_wheel-title`},`월·일`,-1)]]),default:c(()=>[l(X,{label:`월`,items:[`6월`],selected:`6월`,"show-steps":!1}),l(X,{label:`일`,items:[`15일`],selected:`15일`,"show-steps":!1})]),_:1})]),_:1})]),_:1}),l(M,{"heading-id":`range-heading`,title:`범위 선택`,description:`is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <Calendar aria-label="2024년 6월 범위 선택">
    <template #header>
      <CalendarHeader title="2024년 6월" />
    </template>
    <template #weekdays>
      <CalendarWeekdays />
    </template>
    <CalendarMonth :range-start="10" :range-end="18" />
  </Calendar>
</template>`},{default:c(()=>[l(R,{"aria-label":`2024년 6월 범위 선택`},{header:c(()=>[l(B,{title:`2024년 6월`})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{"range-start":10,"range-end":18})]),_:1})]),_:1}),l(M,{"heading-id":`event-heading`,title:`이벤트 마커`,description:`has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import { EVENT_DAYS } from '@/data/calendar-demo';
<\/script>

<template>
  <Calendar weekends aria-label="2024년 6월 이벤트">
    <template #header>
      <CalendarHeader title="2024년 6월" :show-nav="false" />
    </template>
    <template #weekdays>
      <CalendarWeekdays />
    </template>
    <CalendarMonth :events="EVENT_DAYS" weekends />
  </Calendar>
</template>`},{default:c(()=>[l(R,{weekends:``,"aria-label":`2024년 6월 이벤트`},{header:c(()=>[l(B,{title:`2024년 6월`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{events:_(ne),weekends:``},null,8,[`events`])]),_:1})]),_:1}),l(M,{"heading-id":`skin-heading`,title:`스킨`,description:`calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarGroup from '@/components/CalendarGroup.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <CalendarGroup>
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
  </CalendarGroup>
</template>`},{default:c(()=>[l(W,null,{default:c(()=>[l(R,{borderless:``,"aria-label":`Borderless`},{header:c(()=>[l(B,{title:`Borderless`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:8,selected:10})]),_:1}),l(R,{ghost:``,"aria-label":`Ghost`},{header:c(()=>[l(B,{title:`Ghost`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:8,selected:10})]),_:1}),l(R,{shadow:``,"aria-label":`Shadow`},{header:c(()=>[l(B,{title:`Shadow`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:8,selected:10})]),_:1})]),_:1})]),_:1}),l(M,{"heading-id":`size-heading`,title:`크기`,description:`calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarGroup from '@/components/CalendarGroup.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <CalendarGroup>
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
  </CalendarGroup>
</template>`},{default:c(()=>[l(W,null,{default:c(()=>[l(R,{size:`sm`,"aria-label":`Small`},{header:c(()=>[l(B,{title:`Small`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:7,selected:9})]),_:1}),l(R,{compact:``,"aria-label":`Compact`},{header:c(()=>[l(B,{title:`Compact`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:7,selected:9})]),_:1}),l(R,{size:`lg`,"aria-label":`Large`},{header:c(()=>[l(B,{title:`Large`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:7,selected:9})]),_:1})]),_:1})]),_:1}),l(M,{"heading-id":`footer-heading`,title:`푸터`,description:`calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarFooter from '@/components/CalendarFooter.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
<\/script>

<template>
  <Calendar shadow aria-label="2024년 6월 푸터 포함">
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
  </Calendar>
</template>`},{default:c(()=>[l(R,{shadow:``,"aria-label":`2024년 6월 푸터 포함`},{header:c(()=>[l(B,{title:`2024년 6월`})]),weekdays:c(()=>[l(U)]),footer:c(()=>[l(L)]),default:c(()=>[l(V)]),_:1})]),_:1}),l(M,{"heading-id":`dual-heading`,title:`이중 패널`,description:`calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Calendar from '@/components/Calendar.vue';
import CalendarGroup from '@/components/CalendarGroup.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import { julyDualDays, juneDualDays } from '@/data/calendar-demo';
const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();
<\/script>

<template>
  <CalendarGroup>
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
  </CalendarGroup>
</template>`},{default:c(()=>[l(W,null,{default:c(()=>[l(R,{compact:``,shadow:``,weekends:``,"aria-label":`2024년 6월`},{header:c(()=>[u(`div`,He,[l(j,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`이전 달`},{"icon-before":c(()=>[...d[2]||=[u(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[u(`path`,{d:`M15 18l-6-6 6-6`})],-1)]]),_:1}),d[3]||=u(`span`,{class:`calendar_title`},`2024년 6월`,-1)])]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{days:_(t),weekends:``},null,8,[`days`])]),_:1}),l(R,{compact:``,shadow:``,weekends:``,"aria-label":`2024년 7월`},{header:c(()=>[u(`div`,Ue,[d[5]||=u(`span`,{class:`calendar_title`},`2024년 7월`,-1),l(j,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`다음 달`},{"icon-before":c(()=>[...d[4]||=[u(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[u(`path`,{d:`M9 18l6-6-6-6`})],-1)]]),_:1})])]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{days:_(n),weekends:``},null,8,[`days`])]),_:1})]),_:1})]),_:1}),l(M,{"heading-id":`agenda-heading`,title:`세로 일정`,description:`calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다.`,stack:``,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
<\/script>

<template>
  <Calendar agenda shadow role="feed" aria-label="2024년 6월 일정">
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
  </Calendar>
</template>`},{default:c(()=>[l(R,{agenda:``,shadow:``,role:`feed`,"aria-label":`2024년 6월 일정`},{header:c(()=>[l(B,{title:`6월 14일 ~ 20일`,"prev-label":`이전 주`,"next-label":`다음 주`})]),default:c(()=>[d[6]||=u(`ol`,{class:`calendar_agenda-list`},[u(`li`,{class:`calendar_agenda-day`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`금`),u(`span`,{class:`calendar_agenda-daynum`},`14`)]),u(`div`,{class:`calendar_agenda-body`},[u(`ul`,{class:`calendar_agenda-events`},[u(`li`,{class:`calendar_agenda-event color_primary`},[u(`span`,{class:`calendar_agenda-event-time`},`14:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`디자인 리뷰`),u(`span`,{class:`calendar_agenda-event-desc`},`컴포넌트 가이드 UI 시안 검토`)])])])])]),u(`li`,{class:`calendar_agenda-day is-saturday is-today`,"aria-current":`date`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`토`),u(`span`,{class:`calendar_agenda-daynum`},`15`)]),u(`div`,{class:`calendar_agenda-body`},[u(`ul`,{class:`calendar_agenda-events`},[u(`li`,{class:`calendar_agenda-event color_success`},[u(`span`,{class:`calendar_agenda-event-time`},`09:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`팀 스탠드업`),u(`span`,{class:`calendar_agenda-event-desc`},`주간 진행 상황 공유`)])]),u(`li`,{class:`calendar_agenda-event color_warning`},[u(`span`,{class:`calendar_agenda-event-time`},`15:30`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`QA 일정 점검`),u(`span`,{class:`calendar_agenda-event-desc`},`캘린더 컴포넌트 데모 확인`),u(`div`,{class:`calendar_agenda-event-meta`},[u(`span`,{class:`tag tag_sm color_warning`},`진행 중`)])])])])])]),u(`li`,{class:`calendar_agenda-day is-sunday is-empty`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`일`),u(`span`,{class:`calendar_agenda-daynum`},`16`)]),u(`div`,{class:`calendar_agenda-body`},[u(`p`,{class:`calendar_agenda-empty`},`일정 없음`)])]),u(`li`,{class:`calendar_agenda-day is-selected`,"aria-selected":`true`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`월`),u(`span`,{class:`calendar_agenda-daynum`},`17`)]),u(`div`,{class:`calendar_agenda-body`},[u(`ul`,{class:`calendar_agenda-events`},[u(`li`,{class:`calendar_agenda-event color_primary`},[u(`span`,{class:`calendar_agenda-event-time`},`10:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`기획 회의`),u(`span`,{class:`calendar_agenda-event-desc`},`3분기 로드맵 논의`)])]),u(`li`,{class:`calendar_agenda-event color_info`},[u(`span`,{class:`calendar_agenda-event-time`},`13:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`점심 미팅`),u(`span`,{class:`calendar_agenda-event-desc`},`파트너사 담당자`)])]),u(`li`,{class:`calendar_agenda-event color_danger`},[u(`span`,{class:`calendar_agenda-event-time`},`18:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`배포 마감`),u(`span`,{class:`calendar_agenda-event-desc`},`v2.4.0 릴리스`)])])])])]),u(`li`,{class:`calendar_agenda-day`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`화`),u(`span`,{class:`calendar_agenda-daynum`},`18`)]),u(`div`,{class:`calendar_agenda-body`},[u(`ul`,{class:`calendar_agenda-events`},[u(`li`,{class:`calendar_agenda-event color_success`},[u(`span`,{class:`calendar_agenda-event-time`},`종일`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`워크숍`),u(`span`,{class:`calendar_agenda-event-desc`},`디자인 시스템 심화 과정`)])])])])])],-1)]),_:1}),l(R,{agenda:``,borderless:``,class:`calendar_agenda_compact`,role:`feed`,"aria-label":`2024년 6월 15일 일정 (컴팩트)`},{header:c(()=>[l(B,{title:`6월 15일 (토)`,"show-nav":!1})]),default:c(()=>[d[7]||=u(`ol`,{class:`calendar_agenda-list`},[u(`li`,{class:`calendar_agenda-day is-saturday is-today`,"aria-current":`date`},[u(`div`,{class:`calendar_agenda-date`},[u(`span`,{class:`calendar_agenda-weekday`},`토`),u(`span`,{class:`calendar_agenda-daynum`},`15`)]),u(`div`,{class:`calendar_agenda-body`},[u(`ul`,{class:`calendar_agenda-events`},[u(`li`,{class:`calendar_agenda-event color_primary`},[u(`span`,{class:`calendar_agenda-event-time`},`09:00`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`팀 스탠드업`),u(`span`,{class:`calendar_agenda-event-desc`},`15분 · Zoom`)])]),u(`li`,{class:`calendar_agenda-event color_warning`},[u(`span`,{class:`calendar_agenda-event-time`},`15:30`),u(`div`,{class:`calendar_agenda-event-main`},[u(`span`,{class:`calendar_agenda-event-title`},`QA 점검`),u(`span`,{class:`calendar_agenda-event-desc`},`회의실 B`)])])])])])],-1)]),_:1})]),_:1}),l(M,{"heading-id":`state-heading`,title:`상태`,description:`calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다.`,stack:``,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import { disabledPartialDays } from '@/data/calendar-demo';
const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });
<\/script>

<template>
  <Calendar readonly aria-label="읽기 전용 캘린더">
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
  </Calendar>
</template>`},{default:c(()=>[l(R,{readonly:``,"aria-label":`읽기 전용 캘린더`},{header:c(()=>[l(B,{title:`읽기 전용`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{partial:14,today:7,selected:9,readonly:``})]),_:1}),l(R,{disabled:``,"aria-label":`비활성 캘린더`},{header:c(()=>[l(B,{title:`비활성`,"show-nav":!1})]),weekdays:c(()=>[l(U)]),default:c(()=>[l(V,{days:_(r)},null,8,[`days`])]),_:1})]),_:1}),l(w,{"heading-id":`api-props-heading`,title:`API · Calendar Props`},{default:c(()=>[l(D,{columns:_(he),rows:_(ge),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-header-props-heading`,title:`API · CalendarHeader Props`},{default:c(()=>[l(D,{columns:_(_e),rows:_(ve),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-nav-props-heading`,title:`API · CalendarNav Props`},{default:c(()=>[l(D,{columns:_(ye),rows:_(be),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-weekdays-props-heading`,title:`API · CalendarWeekdays Props`},{default:c(()=>[l(D,{columns:_(xe),rows:_(Se),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-month-props-heading`,title:`API · CalendarMonth Props`},{default:c(()=>[l(D,{columns:_(Ce),rows:_(we),"code-column":`name`},null,8,[`columns`,`rows`]),d[8]||=u(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[u(`code`,{class:`typo_code`},`CalendarMonth`),b(`는 `),u(`code`,{class:`typo_code`},`CalendarGrid`),b(` + `),u(`code`,{class:`typo_code`},`CalendarDay`),b(`를 묶는 편의 컴포넌트입니다. `)],-1)]),_:1}),l(w,{"heading-id":`api-grid-props-heading`,title:`API · CalendarGrid Props`},{default:c(()=>[l(D,{columns:_(Te),rows:_(Ee),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-day-props-heading`,title:`API · CalendarDay Props`},{default:c(()=>[l(D,{columns:_(De),rows:_(Oe),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-wheel-props-heading`,title:`API · CalendarWheel Props`},{default:c(()=>[l(D,{columns:_(ke),rows:_(Ae),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-wheel-col-props-heading`,title:`API · CalendarWheelColumn Props`},{default:c(()=>[l(D,{columns:_(je),rows:_(Me),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-slots-heading`,title:`API · Calendar Slots`},{default:c(()=>[l(D,{columns:_(Q),rows:_(Ne),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-header-slots-heading`,title:`API · CalendarHeader · Footer · Group Slots`},{default:c(()=>[l(D,{columns:_(Q),rows:_(Pe),"code-column":`name`},null,8,[`columns`,`rows`]),l(D,{columns:_(Q),rows:_(Fe),"code-column":`name`,style:{"margin-top":`var(--space-md)`}},null,8,[`columns`,`rows`]),l(D,{columns:_(Q),rows:_(Ie),"code-column":`name`,style:{"margin-top":`var(--space-md)`}},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-grid-slots-heading`,title:`API · CalendarGrid · CalendarWheel Slots`},{default:c(()=>[l(D,{columns:_(Q),rows:_($),"code-column":`name`},null,8,[`columns`,`rows`]),l(D,{columns:_(Q),rows:_(Le),"code-column":`name`,style:{"margin-top":`var(--space-md)`}},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:c(()=>[l(D,{columns:_(Re),rows:_(ze),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(w,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:c(()=>[l(D,{columns:_(Be),rows:_(Ve),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Ge as default,We as docMeta};