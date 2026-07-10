import{_ as o}from"./Calendar-CAXxqtS-.js";import{_ as i}from"./Button-C3SXv-sJ.js";import{_ as m}from"./CalendarFooter-E59ziKLC.js";import{_ as p}from"./CalendarGroup-DD19IrPD.js";import{_ as u}from"./CalendarHeader-SE3sNBJL.js";import{_ as C}from"./CalendarMonth-DDXnd0ke.js";import{_ as y}from"./CalendarNav-CIwoaY-T.js";import{_ as c}from"./CalendarWeekdays-DmHMI4Um.js";import{_ as h}from"./CalendarWheel-OgIsOGQI.js";import{_}from"./CalendarWheelColumn-DLLDeLws.js";import{j as v,a as D,d as g,J as B,b,E as w}from"./calendar-demo-C2WM4-o4.js";import{b as Ae,c as xe}from"./ripple-api-C5ZjLJl-.js";import{a as Me,b as Je,c as He,d as Ne}from"./api-table-columns-B8HBif_8.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";import"./CalendarDay-CH_cvLKl.js";import"./CalendarGrid-BNQw4DrN.js";const f=Me,$e=Je,Se=f,Ge=[{name:"title",type:"string",default:"—",description:"내장 헤더 제목 (header 슬롯 없을 때)"},{name:"aria-label",type:"string",default:"—",description:"캘린더 접근성 라벨 (권장)"},{name:"role",type:"string",default:"application",description:"루트 role 속성"},{name:"size",type:"'sm' | 'lg'",default:"—",description:"calendar_sm · calendar_lg"},{name:"no-header",type:"boolean",default:"false",description:"헤더 영역 숨김"},{name:"minimal",type:"boolean",default:"false",description:"최소 스타일 (calendar_minimal)"},{name:"compact",type:"boolean",default:"false",description:"좁은 셀 (calendar_compact)"},{name:"borderless",type:"boolean",default:"false",description:"테두리 없음"},{name:"shadow",type:"boolean",default:"false",description:"그림자 (calendar_shadow)"},{name:"ghost",type:"boolean",default:"false",description:"투명 배경 (calendar_ghost)"},{name:"week",type:"boolean",default:"false",description:"주간 뷰 레이아웃"},{name:"weekends",type:"boolean",default:"false",description:"주말 강조 (calendar_weekends)"},{name:"agenda",type:"boolean",default:"false",description:"아젠다 레이아웃"},{name:"wheel",type:"boolean",default:"false",description:"휠 피커 레이아웃"},{name:"readonly",type:"boolean",default:"false",description:"날짜 선택 불가"},{name:"disabled",type:"boolean",default:"false",description:"전체 비활성 (is-disabled)"}],Ye=f,Pe=[{name:"title",type:"string",default:"—",description:"월·기간 제목 (calendar_title)"},{name:"prev-label",type:"string",default:"이전 달",description:"이전 버튼 aria-label"},{name:"next-label",type:"string",default:"다음 달",description:"다음 버튼 aria-label"},{name:"show-nav",type:"boolean",default:"true",description:"이전·다음 네비게이션 표시"},{name:"show-prev",type:"boolean",default:"—",description:"이전 버튼만 제어 (show-nav 대체)"},{name:"show-next",type:"boolean",default:"—",description:"다음 버튼만 제어"}],Fe=f,Le=[{name:"label",type:"string",default:"—",description:"주간 네비 라벨"},{name:"prev-label",type:"string",default:"이전 주",description:"이전 버튼 aria-label"},{name:"next-label",type:"string",default:"다음 주",description:"다음 버튼 aria-label"}],Ue=f,Ke=[{name:"labels",type:"string[]",default:"일~토",description:"요일 라벨 배열"}],je=f,ze=[{name:"days",type:"object[]",default:"—",description:"CalendarDay용 셀 데이터 배열"},{name:"preset",type:"string",default:"june2024",description:"데모용 월 프리셋"},{name:"selected",type:"number",default:"—",description:"선택일 (프리셋·partial용)"},{name:"today",type:"number",default:"—",description:"오늘 날짜 (프리셋·partial용)"},{name:"disabled",type:"number[]",default:"—",description:"비활성 날짜 목록"},{name:"events",type:"number[]",default:"—",description:"이벤트 표시 날짜"},{name:"range-start",type:"number",default:"—",description:"범위 시작일"},{name:"range-end",type:"number",default:"—",description:"범위 종료일"},{name:"weekends",type:"boolean",default:"false",description:"주말 셀 표시"},{name:"partial",type:"number",default:"—",description:"부분 월 데모 일수"},{name:"week",type:"boolean",default:"false",description:"주간 그리드"},{name:"readonly",type:"boolean",default:"false",description:"날짜 버튼 비활성"}],Te=f,Ve=[{name:"week",type:"boolean",default:"false",description:"7열 주간 그리드 (calendar_grid-week)"}],Ie=f,Qe=[{name:"day",type:"number | string",default:"—",description:"날짜 숫자 (필수)"},{name:"other-month",type:"boolean",default:"false",description:"다른 달 (is-other-month)"},{name:"today",type:"boolean",default:"false",description:"오늘 (is-today)"},{name:"selected",type:"boolean",default:"false",description:"선택 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"sunday",type:"boolean",default:"false",description:"일요일 (is-sunday)"},{name:"saturday",type:"boolean",default:"false",description:"토요일 (is-saturday)"},{name:"range-start",type:"boolean",default:"false",description:"범위 시작 (is-range-start)"},{name:"range-end",type:"boolean",default:"false",description:"범위 끝 (is-range-end)"},{name:"in-range",type:"boolean",default:"false",description:"범위 내 (is-in-range)"},{name:"event",type:"boolean",default:"false",description:"이벤트 점 (has-event)"},{name:"readonly",type:"boolean",default:"false",description:"클릭 불가"},Ae],Oe=f,Ze=[{name:"title",type:"string",default:"—",description:"툴바 제목"},{name:"aria-label",type:"string",default:"—",description:"휠 피커 접근성 라벨"},{name:"shadow",type:"boolean",default:"false",description:"Calendar에 전달"},{name:"borderless",type:"boolean",default:"false",description:"Calendar에 전달"},{name:"footer",type:"boolean",default:"false",description:"하단 푸터 영역 표시"},{name:"toolbar",type:"boolean",default:"true",description:"상단 툴바 표시"},{name:"cancel-label",type:"string",default:"—",description:"취소 버튼 텍스트"},{name:"confirm-label",type:"string",default:"—",description:"확인 버튼 텍스트"}],Re=f,qe=[{name:"label",type:"string",default:"—",description:"listbox aria-label"},{name:"items",type:"array",default:"[]",description:"문자열·숫자 또는 { label, selected } 객체"},{name:"selected",type:"string | number",default:"—",description:"선택 값"},{name:"show-steps",type:"boolean",default:"true",description:"위·아래 스텝 버튼"},{name:"prev-label",type:"string",default:"—",description:"이전 스텝 aria-label"},{name:"next-label",type:"string",default:"—",description:"다음 스텝 aria-label"},xe],k=$e,Xe=[{name:"header",description:"헤더 (CalendarHeader)"},{name:"weekdays",description:"요일 행 (CalendarWeekdays)"},{name:"default",description:"월 그리드·휠 등 본문"},{name:"footer",description:"푸터 (CalendarFooter)"}],ea=[{name:"default",description:"헤더 우측 추가 콘텐츠"}],aa=[{name:"default",description:"CalendarDay 자식"}],na=[{name:"default",description:"푸터 액션 (기본: 초기화·확인)"}],la=[{name:"default",description:"여러 Calendar 나란히"}],ra=[{name:"toolbar",description:"상단 툴바 커스텀"},{name:"default",description:"CalendarWheelColumn 목록"},{name:"footer",description:"하단 푸터"}],da=He,sa=[{name:"calendar",description:"캘린더 루트"},{name:"calendar_sm · calendar_lg · calendar_compact",description:"크기"},{name:"calendar_borderless · calendar_shadow · calendar_ghost · calendar_minimal",description:"스킨"},{name:"calendar_week · calendar_weekends · calendar_agenda · calendar_wheel",description:"레이아웃 모드"},{name:"calendar_header · calendar_title · calendar_nav",description:"헤더·네비"},{name:"calendar_weekdays · calendar_weekday",description:"요일 행"},{name:"calendar_grid · calendar_grid-week",description:"날짜 그리드"},{name:"calendar_day",description:"날짜 셀 버튼"},{name:"calendar_footer · calendar_group",description:"푸터·다중 캘린더"},{name:"calendar_wheel-*",description:"휠 피커 파트"},{name:"is-today · is-selected · is-in-range · is-range-start · is-range-end",description:"날짜 상태"},{name:"is-other-month · is-sunday · is-saturday · is-disabled · has-event",description:"날짜 상태"}],ta=Ne,oa=[{name:"--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg",default:"—",description:"날짜 셀 크기"},{name:"--calendar-gap",default:"2px",description:"그리드 간격"},{name:"--calendar-wheel-height · --calendar-wheel-row-height",default:"—",description:"휠 피커 높이"},{name:"--calendar-agenda-gap · --calendar-agenda-date-width",default:"—",description:"아젠다 레이아웃"}],ua=[{title:"API · Calendar Props",tables:[{columns:Se,rows:Ge,codeColumn:"name"}]},{title:"API · CalendarHeader Props",tables:[{columns:Ye,rows:Pe,codeColumn:"name"}]},{title:"API · CalendarNav Props",tables:[{columns:Fe,rows:Le,codeColumn:"name"}]},{title:"API · CalendarWeekdays Props",tables:[{columns:Ue,rows:Ke,codeColumn:"name"}]},{title:"API · CalendarMonth Props",tables:[{columns:je,rows:ze,codeColumn:"name"}]},{title:"API · CalendarGrid Props",tables:[{columns:Te,rows:Ve,codeColumn:"name"}]},{title:"API · CalendarDay Props",tables:[{columns:Ie,rows:Qe,codeColumn:"name"}]},{title:"API · CalendarWheel Props",tables:[{columns:Oe,rows:Ze,codeColumn:"name"}]},{title:"API · CalendarWheelColumn Props",tables:[{columns:Re,rows:qe,codeColumn:"name"}]},{title:"API · Calendar Slots",tables:[{columns:k,rows:Xe,codeColumn:"name"}]},{title:"API · CalendarHeader · Footer · Group Slots",tables:[{columns:k,rows:ea,codeColumn:"name"},{columns:k,rows:na,codeColumn:"name"},{columns:k,rows:la,codeColumn:"name"}]},{title:"API · CalendarGrid · CalendarWheel Slots",tables:[{columns:k,rows:aa,codeColumn:"name"},{columns:k,rows:ra,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:da,rows:sa,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ta,rows:oa,codeColumn:"name"}]}],xa={title:"Components/데이터 표시/Calendar",id:"components-calendar",component:o,tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},noHeader:{control:"boolean",type:{name:"boolean",summary:"boolean"}},minimal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},borderless:{control:"boolean",type:{name:"boolean",summary:"boolean"}},shadow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ghost:{control:"boolean",type:{name:"boolean",summary:"boolean"}},week:{control:"boolean",type:{name:"boolean",summary:"boolean"}},readonly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},weekends:{control:"boolean",type:{name:"boolean",summary:"boolean"}},agenda:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wheel:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","lg"],type:{name:"enum",summary:"'sm' | 'lg'"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"fullscreen",apiSections:ua}},E={args:{title:"제목",ariaLabel:"접근성 라벨",noHeader:!1,minimal:!1,compact:!1,borderless:!1,shadow:!1,ghost:!1,week:!1,readonly:!1,disabled:!1,weekends:!1,agenda:!1,wheel:!1,size:"sm",role:"application"},render:n=>({components:{Calendar:o,CalendarHeader:u,CalendarMonth:C,CalendarWeekdays:c},setup(){return{args:n}},template:`<Calendar v-bind="args" aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>`})},W={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>`})},A={name:"헤더 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
<\/script>

<template>
  <Calendar no-header aria-label="2024년 6월">
    <template #weekdays>
      <CalendarWeekdays />
    </template>
    <CalendarMonth />
  </Calendar>
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar no-header aria-label="2024년 6월">
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>`})},x={name:"날짜만",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
<\/script>

<template>
  <Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
    <CalendarMonth />
  </Calendar>
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>`})},M={name:"주간",parameters:{demoPreview:{stack:!0},docs:{description:{story:"calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarNav from '@uxkm/ui/components/CalendarNav.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar week shadow :aria-label="\`2024년 \${JUNE_WEEK_LABEL}\`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarWeekdays />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>

    <Calendar week compact borderless :aria-label="\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>`})},J={name:"휠 (iOS 스타일)",parameters:{demoPreview:{stack:!0},docs:{description:{story:"calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarWheel from '@uxkm/ui/components/CalendarWheel.vue';
import CalendarWheelColumn from '@uxkm/ui/components/CalendarWheelColumn.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<CalendarWheel
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
    </CalendarGroup>`})},H={name:"범위 선택",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar aria-label="2024년 6월 범위 선택">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :range-start="10" :range-end="18" />
    </Calendar>`})},N={name:"이벤트 마커",parameters:{demoPreview:{stack:!1},docs:{description:{story:"has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar weekends aria-label="2024년 6월 이벤트">
      <template #header>
        <CalendarHeader title="2024년 6월" :show-nav="false" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :events="EVENT_DAYS" weekends />
    </Calendar>`})},$={name:"스킨",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<CalendarGroup>
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
    </CalendarGroup>`})},S={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<CalendarGroup>
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
    </CalendarGroup>`})},G={name:"푸터",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar shadow aria-label="2024년 6월 푸터 포함">
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
    </Calendar>`})},Y={name:"이중 패널",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<CalendarGroup>
      <Calendar compact shadow weekends aria-label="2024년 6월">
        <template #header>
          <div class="calendar_header">
            <Button variant="ghost" size="sm" icon-only aria-label="이전 달">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
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
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </template>
            </Button>
          </div>
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJulyDays" weekends />
      </Calendar>
    </CalendarGroup>`})},P={name:"세로 일정",parameters:{demoPreview:{stack:!0},docs:{description:{story:"calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar agenda shadow role="feed" aria-label="2024년 6월 일정">
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
    </Calendar>`})},F={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';
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
</template>`,language:"vue"}}},render:()=>({components:{Calendar:o,Button:i,CalendarFooter:m,CalendarGroup:p,CalendarHeader:u,CalendarMonth:C,CalendarNav:y,CalendarWeekdays:c,CalendarWheel:h,CalendarWheelColumn:_},setup(){const n=Array.from({length:11},(a,e)=>`${2019+e}년`),l=Array.from({length:12},(a,e)=>`${e+1}월`),r=Array.from({length:31},(a,e)=>`${e+1}일`),d=v(),s=D(),t=g(14,{today:7,selected:9});return{EVENT_DAYS:w,JUNE_WEEK_DAYS:b,JUNE_WEEK_LABEL:B,disabledDays:t,dualJulyDays:s,dualJuneDays:d,wheelDays:r,wheelMonths:l,wheelYears:n}},template:`<Calendar readonly aria-label="읽기 전용 캘린더">
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
    </Calendar>`})};var L,U,K;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      Calendar,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Calendar v-bind="args" aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>\`
  })
}`,...(K=(U=E.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var j,z,T;W.parameters={...W.parameters,docs:{...(j=W.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar aria-label=\\"2024년 6월\\">\\n    <template #header>\\n      <CalendarHeader title=\\"2024년 6월\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>\`
  })
}`,...(T=(z=W.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,I,Q;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "헤더 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar no-header aria-label=\\"2024년 6월\\">\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar no-header aria-label="2024년 6월">
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>\`
  })
}`,...(Q=(I=A.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var O,Z,R;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "날짜만",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar minimal compact borderless aria-label=\\"2024년 6월 날짜만\\">\\n    <CalendarMonth />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>\`
  })
}`,...(R=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:R.source}}};var q,X,ee;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "주간",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarNav from '@uxkm/ui/components/CalendarNav.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';\\n<\/script>\\n\\n<template>\\n  <Calendar week shadow :aria-label=\\"\`2024년 \${JUNE_WEEK_LABEL}\`\\">\\n    <CalendarNav :label=\\"JUNE_WEEK_LABEL\\" />\\n    <CalendarWeekdays />\\n    <CalendarMonth week :days=\\"JUNE_WEEK_DAYS\\" />\\n  </Calendar>\\n  <Calendar week compact borderless :aria-label=\\"\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`\\">\\n    <CalendarNav :label=\\"JUNE_WEEK_LABEL\\" />\\n    <CalendarMonth week :days=\\"JUNE_WEEK_DAYS\\" />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar week shadow :aria-label="\\\`2024년 \\\${JUNE_WEEK_LABEL}\\\`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarWeekdays />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>

    <Calendar week compact borderless :aria-label="\\\`2024년 \\\${JUNE_WEEK_LABEL} (컴팩트)\\\`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>\`
  })
}`,...(ee=(X=M.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,ne,le;J.parameters={...J.parameters,docs:{...(ae=J.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "휠 (iOS 스타일)",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\\nimport CalendarWheel from '@uxkm/ui/components/CalendarWheel.vue';\\nimport CalendarWheelColumn from '@uxkm/ui/components/CalendarWheelColumn.vue';\\nconst wheelYears = Array.from({ length: 11 }, (_, i) => \`\${2019 + i}년\`);\\nconst wheelMonths = Array.from({ length: 12 }, (_, i) => \`\${i + 1}월\`);\\nconst wheelDays = Array.from({ length: 31 }, (_, i) => \`\${i + 1}일\`);\\n<\/script>\\n\\n<template>\\n  <CalendarWheel\\n  shadow\\n  title=\\"날짜 선택\\"\\n  cancel-label=\\"취소\\"\\n  confirm-label=\\"완료\\"\\n  aria-label=\\"날짜 휠 선택\\"\\n  >\\n  <CalendarWheelColumn\\n  label=\\"년\\"\\n  :items=\\"wheelYears\\"\\n  selected=\\"2024년\\"\\n  prev-label=\\"이전 년\\"\\n  next-label=\\"다음 년\\"\\n  />\\n  <CalendarWheelColumn\\n  label=\\"월\\"\\n  :items=\\"wheelMonths\\"\\n  selected=\\"6월\\"\\n  prev-label=\\"이전 월\\"\\n  next-label=\\"다음 월\\"\\n  />\\n  <CalendarWheelColumn\\n  label=\\"일\\"\\n  :items=\\"wheelDays\\"\\n  selected=\\"15일\\"\\n  prev-label=\\"이전 일\\"\\n  next-label=\\"다음 일\\"\\n  />\\n  </CalendarWheel>\\n  <CalendarWheel borderless footer aria-label=\\"날짜 휠 선택 (하단 버튼)\\" :toolbar=\\"false\\">\\n    <CalendarWheelColumn label=\\"년\\" :items=\\"['2024년']\\" selected=\\"2024년\\" prev-label=\\"이전 년\\" next-label=\\"다음 년\\" />\\n    <CalendarWheelColumn label=\\"월\\" :items=\\"['6월']\\" selected=\\"6월\\" prev-label=\\"이전 월\\" next-label=\\"다음 월\\" />\\n    <CalendarWheelColumn label=\\"일\\" :items=\\"['15일']\\" selected=\\"15일\\" prev-label=\\"이전 일\\" next-label=\\"다음 일\\" />\\n    <template #footer>\\n      <Button variant=\\"ghost\\" size=\\"sm\\" label=\\"취소\\" />\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"확인\\" />\\n    </template>\\n  </CalendarWheel>\\n  <CalendarGroup class=\\"calendar_group-center\\">\\n    <CalendarWheel shadow title=\\"년도\\" aria-label=\\"년도 선택\\">\\n      <CalendarWheelColumn label=\\"년\\" :items=\\"['2024년']\\" selected=\\"2024년\\" prev-label=\\"이전 년\\" next-label=\\"다음 년\\" />\\n    </CalendarWheel>\\n    <CalendarWheel shadow title=\\"년·월\\" aria-label=\\"년·월 선택\\" :toolbar=\\"true\\">\\n      <template #toolbar>\\n        <span class=\\"calendar_wheel-title\\">년·월</span>\\n      </template>\\n      <CalendarWheelColumn label=\\"년\\" :items=\\"['2024년']\\" selected=\\"2024년\\" :show-steps=\\"false\\" />\\n      <CalendarWheelColumn label=\\"월\\" :items=\\"['6월']\\" selected=\\"6월\\" :show-steps=\\"false\\" />\\n    </CalendarWheel>\\n    <CalendarWheel shadow title=\\"월·일\\" aria-label=\\"월·일 선택\\" :toolbar=\\"true\\">\\n      <template #toolbar>\\n        <span class=\\"calendar_wheel-title\\">월·일</span>\\n      </template>\\n      <CalendarWheelColumn label=\\"월\\" :items=\\"['6월']\\" selected=\\"6월\\" :show-steps=\\"false\\" />\\n      <CalendarWheelColumn label=\\"일\\" :items=\\"['15일']\\" selected=\\"15일\\" :show-steps=\\"false\\" />\\n    </CalendarWheel>\\n  </CalendarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<CalendarWheel
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
    </CalendarGroup>\`
  })
}`,...(le=(ne=J.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,de,se;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "범위 선택",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar aria-label=\\"2024년 6월 범위 선택\\">\\n    <template #header>\\n      <CalendarHeader title=\\"2024년 6월\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth :range-start=\\"10\\" :range-end=\\"18\\" />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar aria-label="2024년 6월 범위 선택">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :range-start="10" :range-end="18" />
    </Calendar>\`
  })
}`,...(se=(de=H.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var te,oe,ue;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "이벤트 마커",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';\\n<\/script>\\n\\n<template>\\n  <Calendar weekends aria-label=\\"2024년 6월 이벤트\\">\\n    <template #header>\\n      <CalendarHeader title=\\"2024년 6월\\" :show-nav=\\"false\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth :events=\\"EVENT_DAYS\\" weekends />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar weekends aria-label="2024년 6월 이벤트">
      <template #header>
        <CalendarHeader title="2024년 6월" :show-nav="false" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :events="EVENT_DAYS" weekends />
    </Calendar>\`
  })
}`,...(ue=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var Ce,ce,ie;$.parameters={...$.parameters,docs:{...(Ce=$.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "스킨",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <CalendarGroup>\\n    <Calendar borderless aria-label=\\"Borderless\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Borderless\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"8\\" :selected=\\"10\\" />\\n    </Calendar>\\n    <Calendar ghost aria-label=\\"Ghost\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Ghost\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"8\\" :selected=\\"10\\" />\\n    </Calendar>\\n    <Calendar shadow aria-label=\\"Shadow\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Shadow\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"8\\" :selected=\\"10\\" />\\n    </Calendar>\\n  </CalendarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<CalendarGroup>
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
    </CalendarGroup>\`
  })
}`,...(ie=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,pe,ye;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <CalendarGroup>\\n    <Calendar size=\\"sm\\" aria-label=\\"Small\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Small\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"7\\" :selected=\\"9\\" />\\n    </Calendar>\\n    <Calendar compact aria-label=\\"Compact\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Compact\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"7\\" :selected=\\"9\\" />\\n    </Calendar>\\n    <Calendar size=\\"lg\\" aria-label=\\"Large\\">\\n      <template #header>\\n        <CalendarHeader title=\\"Large\\" :show-nav=\\"false\\" />\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :partial=\\"14\\" :today=\\"7\\" :selected=\\"9\\" />\\n    </Calendar>\\n  </CalendarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<CalendarGroup>
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
    </CalendarGroup>\`
  })
}`,...(ye=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var he,_e,ve;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "푸터",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar shadow aria-label=\\"2024년 6월 푸터 포함\\">\\n    <template #header>\\n      <CalendarHeader title=\\"2024년 6월\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth />\\n    <template #footer>\\n      <CalendarFooter />\\n    </template>\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar shadow aria-label="2024년 6월 푸터 포함">
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
    </Calendar>\`
  })
}`,...(ve=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var De,ge,Be;Y.parameters={...Y.parameters,docs:{...(De=Y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "이중 패널",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';\\nconst dualJuneDays = juneDualDays();\\nconst dualJulyDays = julyDualDays();\\n<\/script>\\n\\n<template>\\n  <CalendarGroup>\\n    <Calendar compact shadow weekends aria-label=\\"2024년 6월\\">\\n      <template #header>\\n        <div class=\\"calendar_header\\">\\n          <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"이전 달\\">\\n            <template #icon-before>\\n              <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n                <path d=\\"M15 18l-6-6 6-6\\" />\\n              </svg>\\n            </template>\\n          </Button>\\n          <span class=\\"calendar_title\\">2024년 6월</span>\\n        </div>\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :days=\\"dualJuneDays\\" weekends />\\n    </Calendar>\\n    <Calendar compact shadow weekends aria-label=\\"2024년 7월\\">\\n      <template #header>\\n        <div class=\\"calendar_header\\">\\n          <span class=\\"calendar_title\\">2024년 7월</span>\\n          <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"다음 달\\">\\n            <template #icon-before>\\n              <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n                <path d=\\"M9 18l6-6-6-6\\" />\\n              </svg>\\n            </template>\\n          </Button>\\n        </div>\\n      </template>\\n      <template #weekdays>\\n        <CalendarWeekdays />\\n      </template>\\n      <CalendarMonth :days=\\"dualJulyDays\\" weekends />\\n    </Calendar>\\n  </CalendarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<CalendarGroup>
      <Calendar compact shadow weekends aria-label="2024년 6월">
        <template #header>
          <div class="calendar_header">
            <Button variant="ghost" size="sm" icon-only aria-label="이전 달">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
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
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </template>
            </Button>
          </div>
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJulyDays" weekends />
      </Calendar>
    </CalendarGroup>\`
  })
}`,...(Be=(ge=Y.parameters)==null?void 0:ge.docs)==null?void 0:Be.source}}};var be,we,fe;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "세로 일정",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\n<\/script>\\n\\n<template>\\n  <Calendar agenda shadow role=\\"feed\\" aria-label=\\"2024년 6월 일정\\">\\n    <template #header>\\n      <CalendarHeader title=\\"6월 14일 ~ 20일\\" prev-label=\\"이전 주\\" next-label=\\"다음 주\\" />\\n    </template>\\n    <ol class=\\"calendar_agenda-list\\">\\n      <li class=\\"calendar_agenda-day\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">금</span>\\n          <span class=\\"calendar_agenda-daynum\\">14</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <ul class=\\"calendar_agenda-events\\">\\n            <li class=\\"calendar_agenda-event color_primary\\">\\n              <span class=\\"calendar_agenda-event-time\\">14:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">디자인 리뷰</span>\\n                <span class=\\"calendar_agenda-event-desc\\">컴포넌트 가이드 UI 시안 검토</span>\\n              </div>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n      <li class=\\"calendar_agenda-day is-saturday is-today\\" aria-current=\\"date\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">토</span>\\n          <span class=\\"calendar_agenda-daynum\\">15</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <ul class=\\"calendar_agenda-events\\">\\n            <li class=\\"calendar_agenda-event color_success\\">\\n              <span class=\\"calendar_agenda-event-time\\">09:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">팀 스탠드업</span>\\n                <span class=\\"calendar_agenda-event-desc\\">주간 진행 상황 공유</span>\\n              </div>\\n            </li>\\n            <li class=\\"calendar_agenda-event color_warning\\">\\n              <span class=\\"calendar_agenda-event-time\\">15:30</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">QA 일정 점검</span>\\n                <span class=\\"calendar_agenda-event-desc\\">캘린더 컴포넌트 데모 확인</span>\\n                <div class=\\"calendar_agenda-event-meta\\">\\n                  <span class=\\"tag tag_sm color_warning\\">진행 중</span>\\n                </div>\\n              </div>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n      <li class=\\"calendar_agenda-day is-sunday is-empty\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">일</span>\\n          <span class=\\"calendar_agenda-daynum\\">16</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <p class=\\"calendar_agenda-empty\\">일정 없음</p>\\n        </div>\\n      </li>\\n      <li class=\\"calendar_agenda-day is-selected\\" aria-selected=\\"true\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">월</span>\\n          <span class=\\"calendar_agenda-daynum\\">17</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <ul class=\\"calendar_agenda-events\\">\\n            <li class=\\"calendar_agenda-event color_primary\\">\\n              <span class=\\"calendar_agenda-event-time\\">10:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">기획 회의</span>\\n                <span class=\\"calendar_agenda-event-desc\\">3분기 로드맵 논의</span>\\n              </div>\\n            </li>\\n            <li class=\\"calendar_agenda-event color_info\\">\\n              <span class=\\"calendar_agenda-event-time\\">13:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">점심 미팅</span>\\n                <span class=\\"calendar_agenda-event-desc\\">파트너사 담당자</span>\\n              </div>\\n            </li>\\n            <li class=\\"calendar_agenda-event color_danger\\">\\n              <span class=\\"calendar_agenda-event-time\\">18:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">배포 마감</span>\\n                <span class=\\"calendar_agenda-event-desc\\">v2.4.0 릴리스</span>\\n              </div>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n      <li class=\\"calendar_agenda-day\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">화</span>\\n          <span class=\\"calendar_agenda-daynum\\">18</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <ul class=\\"calendar_agenda-events\\">\\n            <li class=\\"calendar_agenda-event color_success\\">\\n              <span class=\\"calendar_agenda-event-time\\">종일</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">워크숍</span>\\n                <span class=\\"calendar_agenda-event-desc\\">디자인 시스템 심화 과정</span>\\n              </div>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n    </ol>\\n  </Calendar>\\n  <Calendar agenda borderless class=\\"calendar_agenda_compact\\" role=\\"feed\\" aria-label=\\"2024년 6월 15일 일정 (컴팩트)\\">\\n    <template #header>\\n      <CalendarHeader title=\\"6월 15일 (토)\\" :show-nav=\\"false\\" />\\n    </template>\\n    <ol class=\\"calendar_agenda-list\\">\\n      <li class=\\"calendar_agenda-day is-saturday is-today\\" aria-current=\\"date\\">\\n        <div class=\\"calendar_agenda-date\\">\\n          <span class=\\"calendar_agenda-weekday\\">토</span>\\n          <span class=\\"calendar_agenda-daynum\\">15</span>\\n        </div>\\n        <div class=\\"calendar_agenda-body\\">\\n          <ul class=\\"calendar_agenda-events\\">\\n            <li class=\\"calendar_agenda-event color_primary\\">\\n              <span class=\\"calendar_agenda-event-time\\">09:00</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">팀 스탠드업</span>\\n                <span class=\\"calendar_agenda-event-desc\\">15분 · Zoom</span>\\n              </div>\\n            </li>\\n            <li class=\\"calendar_agenda-event color_warning\\">\\n              <span class=\\"calendar_agenda-event-time\\">15:30</span>\\n              <div class=\\"calendar_agenda-event-main\\">\\n                <span class=\\"calendar_agenda-event-title\\">QA 점검</span>\\n                <span class=\\"calendar_agenda-event-desc\\">회의실 B</span>\\n              </div>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n    </ol>\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar agenda shadow role="feed" aria-label="2024년 6월 일정">
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
    </Calendar>\`
  })
}`,...(fe=(we=P.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ke,Ee,We;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';\\nconst disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });\\n<\/script>\\n\\n<template>\\n  <Calendar readonly aria-label=\\"읽기 전용 캘린더\\">\\n    <template #header>\\n      <CalendarHeader title=\\"읽기 전용\\" :show-nav=\\"false\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth :partial=\\"14\\" :today=\\"7\\" :selected=\\"9\\" readonly />\\n  </Calendar>\\n  <Calendar disabled aria-label=\\"비활성 캘린더\\">\\n    <template #header>\\n      <CalendarHeader title=\\"비활성\\" :show-nav=\\"false\\" />\\n    </template>\\n    <template #weekdays>\\n      <CalendarWeekdays />\\n    </template>\\n    <CalendarMonth :days=\\"disabledDays\\" />\\n  </Calendar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Calendar,
      Button,
      CalendarFooter,
      CalendarGroup,
      CalendarHeader,
      CalendarMonth,
      CalendarNav,
      CalendarWeekdays,
      CalendarWheel,
      CalendarWheelColumn
    },
    setup() {
      const wheelYears = Array.from({
        length: 11
      }, (_, i) => \`\${2019 + i}년\`);
      const wheelMonths = Array.from({
        length: 12
      }, (_, i) => \`\${i + 1}월\`);
      const wheelDays = Array.from({
        length: 31
      }, (_, i) => \`\${i + 1}일\`);
      const dualJuneDays = juneDualDays();
      const dualJulyDays = julyDualDays();
      const disabledDays = disabledPartialDays(14, {
        today: 7,
        selected: 9
      });
      return {
        EVENT_DAYS,
        JUNE_WEEK_DAYS,
        JUNE_WEEK_LABEL,
        disabledDays,
        dualJulyDays,
        dualJuneDays,
        wheelDays,
        wheelMonths,
        wheelYears
      };
    },
    template: \`<Calendar readonly aria-label="읽기 전용 캘린더">
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
    </Calendar>\`
  })
}`,...(We=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};const Ma=["Playground","Basic","NoHeader","Minimal","Week","Wheel","Range","Event","Skin","Size","Footer","Dual","Agenda","State"];export{P as Agenda,W as Basic,Y as Dual,N as Event,G as Footer,x as Minimal,A as NoHeader,E as Playground,H as Range,S as Size,$ as Skin,F as State,M as Week,J as Wheel,Ma as __namedExportsOrder,xa as default};
