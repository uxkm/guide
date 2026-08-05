import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,xt as m,y as h}from"./CCnt5OSV.js";import{l as g,t as _,y as v}from"./DkmWXf_S.js";import{n as ee,t as y}from"./D01l-9yr.js";import{t as b}from"./D5AUKneU.js";import{t as x}from"./gHQDdAlU.js";import{t as S}from"./DD3RWXAt.js";import{r as C,t as w}from"./D6IbhUhQ.js";import{c as T,d as E,f as D,l as O,n as k,s as A,t as j,u as M}from"./BO8h7E8p2.js";import{t as N}from"./Bt5d3dz_2.js";var P={key:0,class:`date_picker_trigger`},F=[`id`,`value`,`placeholder`,`disabled`,`aria-expanded`,`aria-label`,`aria-invalid`],I=Object.assign({inheritAttrs:!1},{__name:`DatePicker`,props:{ripple:y,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},disabled:Boolean,error:Boolean,success:Boolean,open:Boolean,placeholder:String,defaultValue:String,modelValue:{type:String,default:void 0},fit:Boolean,block:Boolean,inline:Boolean,clearable:Boolean,panelWide:Boolean,inputId:String,ariaLabel:String,ariaInvalid:[Boolean,String]},emits:[`update:modelValue`,`clear`,`calendar-click`],setup(s,{emit:h}){let g=new Set([`sm`,`md`,`lg`]);function _(e){if(e===!0||e===`true`)return`true`;if(e===!1||e===`false`)return`false`}let y=s,{rippleAttrs:S,childRippleAttrs:C}=ee(y,{mode:`container`}),w=h;t();let T=r(),E=u(null),D=p(()=>g.has(y.size)?y.size:`md`),O=u(y.defaultValue??``),k=p(()=>y.modelValue!==void 0),A=p(()=>k.value?y.modelValue??``:O.value);v(y,E,T);let j=p(()=>{let e=[`date_picker`];return D.value===`sm`&&e.push(`date_picker_sm`),D.value===`lg`&&e.push(`date_picker_lg`),y.fit&&e.push(`date_picker_fit`),y.block&&e.push(`date_picker_block`),y.inline&&e.push(`date_picker_inline`),y.disabled&&e.push(`is-disabled`),y.error&&e.push(`is-error`),y.success&&e.push(`is-success`),y.open&&e.push(`is-open`),T.class&&e.push(T.class),e}),M=p(()=>{let e=[`date_picker_input`];return!A.value&&y.placeholder&&e.push(`date_picker_placeholder`),e}),N=p(()=>{let{class:e,style:t,...n}=T;return{...C.value,...n}}),I=p(()=>!y.inline),L=p(()=>!!y.open),R=p(()=>!!A.value);function z(e){e.preventDefault(),e.stopPropagation(),k.value||(O.value=``),w(`update:modelValue`,``),w(`clear`,e)}function B(e){w(`calendar-click`,e)}return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:E,class:j.value,style:f(T).style},f(S)),[I.value?(n(),l(`div`,P,[o(`input`,c(N.value,{id:s.inputId,type:`text`,class:M.value,value:A.value,placeholder:s.placeholder,readonly:``,disabled:s.disabled,"aria-haspopup":`dialog`,"aria-expanded":L.value?`true`:`false`,"aria-label":s.ariaLabel,"aria-invalid":_(s.ariaInvalid)}),null,16,F),s.clearable&&R.value?(n(),l(`button`,{key:0,type:`button`,class:`date_picker_clear`,"data-ripple":`surface`,"aria-label":`날짜 지우기`,onClick:z},[a(b,{name:`close`,size:`sm`})])):d(``,!0),a(x,c(f(C),{variant:`ghost`,"icon-only":``,class:`date_picker_btn`,disabled:s.disabled,"aria-label":L.value?`캘린더 닫기`:`캘린더 열기`,expanded:L.value,onClick:B}),{"icon-before":i(()=>[a(b,{name:`calendar`,size:`sm`})]),_:1},16,[`disabled`,`aria-label`,`expanded`])])):d(``,!0),t.$slots.panel||s.inline?(n(),l(`div`,{key:1,class:m([`date_picker_panel`,{"date_picker_panel-wide":s.panelWide}]),role:`dialog`,"aria-label":`날짜 선택`,"data-demo-slot":`panel`},[e(t.$slots,`panel`)],2)):d(``,!0)],16))}}),L=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],R=[{name:`model-value`,type:`string`,default:`—`,description:`제어 날짜 문자열. v-model 바인딩`},{name:`default-value`,type:`string`,default:`—`,description:`비제어 초기 날짜 문자열`},{name:`placeholder`,type:`string`,default:`—`,description:`미선택 placeholder`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`date_picker_sm · date_picker_lg`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 (is-disabled)`},{name:`error`,type:`boolean`,default:`false`,description:`오류 (is-error)`},{name:`success`,type:`boolean`,default:`false`,description:`성공 (is-success)`},{name:`open`,type:`boolean`,default:`false`,description:`패널 열림 (is-open)`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비 (date_picker_fit)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100%`},{name:`inline`,type:`boolean`,default:`false`,description:`트리거 없이 패널만 (date_picker_inline)`},{name:`clearable`,type:`boolean`,default:`false`,description:`지우기 버튼`},{name:`panel-wide`,type:`boolean`,default:`false`,description:`넓은 패널 (date_picker_panel-wide)`},{name:`input-id`,type:`string`,default:`—`,description:`입력 필드 id (label for 연결)`},{name:`aria-label`,type:`string`,default:`—`,description:`입력 접근성 라벨`},{name:`aria-invalid`,type:`boolean | string`,default:`—`,description:`입력 aria-invalid`},C],z=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],B=[{name:`panel`,description:`캘린더 패널 (Calendar 등)`}],V=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],H=[{name:`update:modelValue`,description:`지우기 버튼으로 값이 초기화될 때 (v-model)`},{name:`clear`,description:`지우기 버튼 클릭 시. MouseEvent 전달`},{name:`calendar-click`,description:`캘린더 버튼 클릭 시. MouseEvent 전달`}],U=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],W=[{name:`date_picker`,description:`루트`},{name:`date_picker_sm · date_picker_lg · date_picker_fit · date_picker_block`,description:`크기·너비`},{name:`date_picker_inline`,description:`인라인 패널`},{name:`date_picker_trigger · date_picker_input · date_picker_btn`,description:`트리거 영역`},{name:`date_picker_clear · date_picker_placeholder`,description:`지우기(data-ripple="surface")·placeholder`},{name:`date_picker_panel · date_picker_panel-wide`,description:`드롭다운 패널`},{name:`is-open · is-error · is-success · is-disabled`,description:`상태`},...w],G=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],K=[{name:`--date-picker-input-padding-y · --date-picker-input-padding-x`,default:`0.5rem · 0.75rem`,description:`입력 패딩`},{name:`--date-picker-btn-size · --date-picker-icon-size`,default:`2.25rem · 1rem`,description:`캘린더 버튼·아이콘`}],q={class:`form_field form_field_fit`},J={class:`form_field form_field_fit`},Y={class:`form_field form_field_fit`},X={class:`form_field form_field_fit`},Z={class:`form_field form_field_fit`},Q={class:`form_field form_field_fit`},te={class:`form_field form_field_fit`},ne={class:`form_field form_field_fit`},re={class:`form_field`},ie={class:`date_picker_range`,role:`group`,"aria-labelledby":`dp-range-label`},ae={class:`form_field`},oe={class:`form_field form_field_fit`},$={class:`form_field form_field_fit`},se={class:`form_field form_field_fit`},ce={class:`form_field form_field_fit`},le={class:`form_field form_field_fit`},ue={class:`form form_inline`,action:`#`,method:`get`},de={class:`form_field`},fe={class:`form_field`},pe={class:`date_picker_range`,role:`group`,"aria-labelledby":`dp-example-range-label`},me={class:`form_actions`},he={title:`Date Picker | HTML Components`,activeNav:`date-picker`,pageTitle:`Date Picker`},ge={__name:`date-picker`,setup(e){let t=T(),r=A(),c=u(`2024-06-18`);return(e,u)=>(n(),l(s,null,[u[28]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Date Picker`),o(`p`,{class:`lead`},[h(`날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 `),o(`code`,null,`<input type="date">`),h(`와 커스텀 트리거·캘린더 패널 `),o(`code`,null,`date_picker`),h(` 두 가지 유형을 제공합니다. Calendar 컴포넌트와 조합해 팝오버·인라인·기간 선택 UI를 구성합니다.`)])],-1),a(S,{"heading-id":`type-heading`,title:`유형`,description:`네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.`,stack:``,code:`<script setup>
import DatePicker from '@/components/DatePicker.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
    <Input id="dp-type-native" type="date" />
    <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
    <DatePicker input-id="dp-type-custom" placeholder="날짜를 선택하세요" fit aria-label="날짜 선택" />
    <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
  </div>
</template>`},{default:i(()=>[o(`div`,q,[u[1]||=o(`label`,{class:`form_field-label`,for:`dp-type-native`},`네이티브 — input type="date"`,-1),a(N,{id:`dp-type-native`,type:`date`}),u[2]||=o(`p`,{class:`form_field-hint`},`간단한 폼·모바일 환경에 적합합니다.`,-1)]),o(`div`,J,[u[3]||=o(`label`,{class:`form_field-label`,for:`dp-type-custom`},`커스텀 — date_picker`,-1),a(I,{"input-id":`dp-type-custom`,placeholder:`날짜를 선택하세요`,fit:``,"aria-label":`날짜 선택`}),u[4]||=o(`p`,{class:`form_field-hint`},`커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.`,-1)])]),_:1}),a(S,{"heading-id":`basic-heading`,title:`기본`,description:`form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다.`,code:`<script setup>
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-basic">예약 날짜</label>
    <DatePicker input-id="dp-basic" default-value="2024-06-18" fit />
    <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
  </div>
</template>`},{default:i(()=>[o(`div`,Y,[u[5]||=o(`label`,{class:`form_field-label`,for:`dp-basic`},`예약 날짜`,-1),a(I,{"input-id":`dp-basic`,"default-value":`2024-06-18`,fit:``}),u[6]||=o(`p`,{class:`form_field-hint`},`체크인 날짜를 선택해 주세요.`,-1)])]),_:1}),a(S,{"heading-id":`size-heading`,title:`크기`,description:`date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다.`,stack:``,code:`<script setup>
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-size-sm">Small</label>
    <DatePicker input-id="dp-size-sm" size="sm" default-value="2024-06-18" fit />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-size-md">Medium</label>
    <DatePicker input-id="dp-size-md" default-value="2024-06-18" fit />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-size-lg">Large</label>
    <DatePicker input-id="dp-size-lg" size="lg" default-value="2024-06-18" fit />
  </div>
</template>`},{default:i(()=>[o(`div`,X,[u[7]||=o(`label`,{class:`form_field-label`,for:`dp-size-sm`},`Small`,-1),a(I,{"input-id":`dp-size-sm`,size:`sm`,"default-value":`2024-06-18`,fit:``})]),o(`div`,Z,[u[8]||=o(`label`,{class:`form_field-label`,for:`dp-size-md`},`Medium`,-1),a(I,{"input-id":`dp-size-md`,"default-value":`2024-06-18`,fit:``})]),o(`div`,Q,[u[9]||=o(`label`,{class:`form_field-label`,for:`dp-size-lg`},`Large`,-1),a(I,{"input-id":`dp-size-lg`,size:`lg`,"default-value":`2024-06-18`,fit:``})])]),_:1}),a(S,{"heading-id":`open-heading`,title:`패널 열림`,description:`is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-open">날짜</label>
    <DatePicker input-id="dp-open" default-value="2024-06-18" fit open>
      <template #panel>
        <Calendar no-header compact borderless aria-label="2024년 6월" weekends>
          <template #weekdays>
            <CalendarWeekdays />
          </template>
          <CalendarMonth :selected="18" :today="15" weekends />
        </Calendar>
      </template>
    </DatePicker>
  </div>
</template>`},{default:i(()=>[o(`div`,te,[u[10]||=o(`label`,{class:`form_field-label`,for:`dp-open`},`날짜`,-1),a(I,{"input-id":`dp-open`,"default-value":`2024-06-18`,fit:``,open:``},{panel:i(()=>[a(D,{"no-header":``,compact:``,borderless:``,"aria-label":`2024년 6월`,weekends:``},{weekdays:i(()=>[a(j)]),default:i(()=>[a(k,{selected:18,today:15,weekends:``})]),_:1})]),_:1})])]),_:1}),a(S,{"heading-id":`footer-heading`,title:`푸터 액션`,description:`calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarFooter from '@/components/CalendarFooter.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-footer">일정 날짜</label>
    <DatePicker input-id="dp-footer" default-value="2024-06-18" fit open>
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
  </div>
</template>`},{default:i(()=>[o(`div`,ne,[u[11]||=o(`label`,{class:`form_field-label`,for:`dp-footer`},`일정 날짜`,-1),a(I,{"input-id":`dp-footer`,"default-value":`2024-06-18`,fit:``,open:``},{panel:i(()=>[a(D,{compact:``,borderless:``,"aria-label":`2024년 6월`,weekends:``},{header:i(()=>[a(O,{title:`2024년 6월`})]),weekdays:i(()=>[a(j)]),footer:i(()=>[a(E)]),default:i(()=>[a(k,{selected:18,today:15,weekends:``})]),_:1})]),_:1})])]),_:1}),a(S,{"heading-id":`range-heading`,title:`기간 선택`,description:`date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다.`,code:`<script setup>
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="dp-range-label">조회 기간</span>
    <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
      <DatePicker default-value="2024-06-10" aria-label="시작일" />
      <span class="date_picker_sep" aria-hidden="true">~</span>
      <DatePicker default-value="2024-06-18" aria-label="종료일" />
    </div>
    <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
  </div>
</template>`},{default:i(()=>[o(`div`,re,[u[13]||=o(`span`,{class:`form_field-label`,id:`dp-range-label`},`조회 기간`,-1),o(`div`,ie,[a(I,{"default-value":`2024-06-10`,"aria-label":`시작일`}),u[12]||=o(`span`,{class:`date_picker_sep`,"aria-hidden":`true`},`~`,-1),a(I,{"default-value":`2024-06-18`,"aria-label":`종료일`})]),u[14]||=o(`p`,{class:`form_field-hint`},`최대 90일까지 조회할 수 있습니다.`,-1)])]),_:1}),a(S,{"heading-id":`range-panel-heading`,title:`이중 캘린더 패널`,description:`date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarGroup from '@/components/CalendarGroup.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import DatePicker from '@/components/DatePicker.vue';
import { julyDualDays, juneDualDays } from '@/data/calendar-demo';
const rangeJuneDays = juneDualDays();
const rangeJulyDays = julyDualDays();
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="dp-range-panel-label">숙박 기간</span>
    <DatePicker
    block
    open
    panel-wide
    input-id="dp-range-panel-label"
    default-value="2024-06-10 ~ 2024-07-06"
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
  </div>
</template>`},{default:i(()=>[o(`div`,ae,[u[15]||=o(`span`,{class:`form_field-label`,id:`dp-range-panel-label`},`숙박 기간`,-1),a(I,{block:``,open:``,"panel-wide":``,"input-id":`dp-range-panel-label`,"default-value":`2024-06-10 ~ 2024-07-06`,"aria-label":`숙박 기간`,style:{"max-width":`20rem`}},{panel:i(()=>[a(M,null,{default:i(()=>[a(D,{compact:``,borderless:``,"aria-label":`2024년 6월`},{default:i(()=>[a(O,{title:`2024년 6월`,"show-next":!1}),a(j),a(k,{days:f(t)},null,8,[`days`])]),_:1}),a(D,{compact:``,borderless:``,"aria-label":`2024년 7월`},{default:i(()=>[a(O,{title:`2024년 7월`,"show-prev":!1}),a(j),a(k,{days:f(r)},null,8,[`days`])]),_:1})]),_:1})]),_:1})])]),_:1}),a(S,{"heading-id":`inline-heading`,title:`인라인`,description:`date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다.`,code:`<script setup>
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarMonth from '@/components/CalendarMonth.vue';
import CalendarWeekdays from '@/components/CalendarWeekdays.vue';
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <DatePicker inline>
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
  </DatePicker>
</template>`},{default:i(()=>[a(I,{inline:``},{panel:i(()=>[a(D,{compact:``,"aria-label":`2024년 6월`,weekends:``},{header:i(()=>[a(O,{title:`2024년 6월`})]),weekdays:i(()=>[a(j)]),default:i(()=>[a(k,{selected:18,today:15,weekends:``})]),_:1})]),_:1})]),_:1}),a(S,{"heading-id":`clear-heading`,title:`값 초기화`,description:`date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다.`,code:`<script setup>
import { ref } from 'vue';
import DatePicker from '@/components/DatePicker.vue';
const value = ref('2024-06-18');
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-clear">필터 날짜</label>
    <DatePicker v-model="value" input-id="dp-clear" fit clearable />
  </div>
</template>`},{default:i(()=>[o(`div`,oe,[u[16]||=o(`label`,{class:`form_field-label`,for:`dp-clear`},`필터 날짜`,-1),a(I,{modelValue:c.value,"onUpdate:modelValue":u[0]||=e=>c.value=e,"input-id":`dp-clear`,fit:``,clearable:``},null,8,[`modelValue`])])]),_:1}),a(S,{"heading-id":`state-heading`,title:`상태`,description:`is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다.`,stack:``,code:`<script setup>
import DatePicker from '@/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-state-placeholder">플레이스홀더</label>
    <DatePicker input-id="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-state-disabled">비활성</label>
    <DatePicker input-id="dp-state-disabled" default-value="2024-06-18" fit disabled />
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
    default-value="2024-06-18"
    fit
    success
    :aria-invalid="false"
    aria-describedby="dp-state-success-msg"
    />
    <p class="form_field-success" id="dp-state-success-msg" role="status">예약 가능한 날짜입니다.</p>
  </div>
</template>`},{default:i(()=>[o(`div`,$,[u[17]||=o(`label`,{class:`form_field-label`,for:`dp-state-placeholder`},`플레이스홀더`,-1),a(I,{"input-id":`dp-state-placeholder`,placeholder:`날짜를 선택하세요`,fit:``})]),o(`div`,se,[u[18]||=o(`label`,{class:`form_field-label`,for:`dp-state-disabled`},`비활성`,-1),a(I,{"input-id":`dp-state-disabled`,"default-value":`2024-06-18`,fit:``,disabled:``}),u[19]||=o(`p`,{class:`form_field-hint`},`is-disabled 클래스와 disabled 속성으로 선택을 막습니다.`,-1)]),o(`div`,ce,[u[20]||=o(`label`,{class:`form_field-label`,for:`dp-state-error`},`에러`,-1),a(I,{"input-id":`dp-state-error`,placeholder:`날짜를 선택하세요`,fit:``,error:``,"aria-invalid":!0,"aria-describedby":`dp-state-error-msg`}),u[21]||=o(`p`,{class:`form_field-error`,id:`dp-state-error-msg`,role:`alert`},`날짜를 선택해 주세요.`,-1)]),o(`div`,le,[u[22]||=o(`label`,{class:`form_field-label`,for:`dp-state-success`},`성공`,-1),a(I,{"input-id":`dp-state-success`,"default-value":`2024-06-18`,fit:``,success:``,"aria-invalid":!1,"aria-describedby":`dp-state-success-msg`}),u[23]||=o(`p`,{class:`form_field-success`,id:`dp-state-success-msg`,role:`status`},`예약 가능한 날짜입니다.`,-1)])]),_:1}),a(S,{"heading-id":`example-heading`,title:`조합 예시`,description:`form_inline과 date_picker_range를 조합한 검색 필터 폼입니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import DatePicker from '@/components/DatePicker.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <form class="form form_inline" action="#" method="get">
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
  </form>
</template>`},{default:i(()=>[o(`form`,ue,[o(`div`,de,[u[24]||=o(`label`,{class:`form_field-label`,for:`dp-example-keyword`},`키워드`,-1),a(N,{id:`dp-example-keyword`,type:`search`,placeholder:`검색어`,style:{"min-width":`10rem`}})]),o(`div`,fe,[u[26]||=o(`span`,{class:`form_field-label`,id:`dp-example-range-label`},`기간`,-1),o(`div`,pe,[a(I,{size:`sm`,placeholder:`시작일`,"aria-label":`시작일`,style:{"min-width":`9rem`}}),u[25]||=o(`span`,{class:`date_picker_sep`,"aria-hidden":`true`},`~`,-1),a(I,{placeholder:`종료일`,"aria-label":`종료일`,style:{"min-width":`9rem`}})])]),o(`div`,me,[a(x,{type:`submit`,variant:`filled`,color:`primary`,label:`검색`}),a(x,{type:`reset`,variant:`ghost`,label:`초기화`})])])]),_:1}),a(g,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(_,{columns:f(L),rows:f(R),"code-column":`name`},null,8,[`columns`,`rows`]),u[27]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[o(`code`,{class:`typo_code`},`panel`),h(` 슬롯에 `),o(`code`,{class:`typo_code`},`Calendar`),h(` 컴포넌트를 배치합니다. 날짜 선택 로직은 앱에서 구현합니다. `)],-1)]),_:1}),a(g,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(_,{columns:f(z),rows:f(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(g,{"heading-id":`api-events-heading`,title:`API · Events`},{default:i(()=>[a(_,{columns:f(V),rows:f(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(g,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(_,{columns:f(U),rows:f(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(g,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(_,{columns:f(G),rows:f(K),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ge as default,he as docMeta};