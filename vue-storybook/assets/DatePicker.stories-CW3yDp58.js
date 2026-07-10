import{u as Pe,b as Ae,c as f,k as xe,m as M,e as W,h as F,q as I,j as we,n as Ee,r as Je,f as C,o as D,a as Me}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as l}from"./Button-C3SXv-sJ.js";import{_ as j}from"./Icon-D97OEunV.js";import{r as We,u as Fe}from"./useRipple-oORGvIsP.js";import{j as Ie}from"./useDemoCode-B9b0dRAo.js";import{_ as t}from"./CalendarGroup-DD19IrPD.js";import{_ as s}from"./Calendar-CAXxqtS-.js";import{_ as i}from"./CalendarFooter-E59ziKLC.js";import{_ as d}from"./CalendarHeader-SE3sNBJL.js";import{_ as u}from"./CalendarMonth-DDXnd0ke.js";import{_ as o}from"./CalendarWeekdays-DmHMI4Um.js";import{_ as p}from"./Input-CACUek-A.js";import{j as c,a as m}from"./calendar-demo-C2WM4-o4.js";import{c as ze,a as He}from"./ripple-api-C5ZjLJl-.js";import"./CalendarDay-CH_cvLKl.js";import"./CalendarGrid-BNQw4DrN.js";const je={key:0,class:"date_picker_trigger"},Ge=["id","value","placeholder","disabled","aria-expanded","aria-label","aria-invalid"],Se={key:0,type:"button",class:"date_picker_clear","data-ripple":"surface","aria-label":"날짜 지우기"},r=Object.assign({inheritAttrs:!1},{__name:"DatePicker",props:{ripple:We,size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},disabled:Boolean,error:Boolean,success:Boolean,open:Boolean,placeholder:String,value:String,fit:Boolean,block:Boolean,inline:Boolean,clearable:Boolean,panelWide:Boolean,inputId:String,ariaLabel:String,ariaInvalid:[Boolean,String]},setup(e){const a=e,{rippleAttrs:ye,childRippleAttrs:z}=Fe(a,{mode:"container"});Pe();const E=Ae(),H=Me(null);Ie(a,H,E);const ve=C(()=>{const n=["date_picker"];return a.size==="sm"&&n.push("date_picker_sm"),a.size==="lg"&&n.push("date_picker_lg"),a.fit&&n.push("date_picker_fit"),a.block&&n.push("date_picker_block"),a.inline&&n.push("date_picker_inline"),a.disabled&&n.push("is-disabled"),a.error&&n.push("is-error"),a.success&&n.push("is-success"),a.open&&n.push("is-open"),E.class&&n.push(E.class),n}),Be=C(()=>{const n=["date_picker_input"];return!a.value&&a.placeholder&&n.push("date_picker_placeholder"),n}),ge=C(()=>!a.inline),J=C(()=>a.open),he=C(()=>!!a.value);return(n,Ke)=>(D(),f("div",M({ref_key:"rootRef",ref:H,class:ve.value},W(ye)),[ge.value?(D(),f("div",je,[xe("input",M(W(z),{id:e.inputId,type:"text",class:Be.value,value:e.value,placeholder:e.placeholder,readonly:"",disabled:e.disabled,"aria-haspopup":"dialog","aria-expanded":J.value?"true":"false","aria-label":e.ariaLabel,"aria-invalid":e.ariaInvalid===!0||e.ariaInvalid==="true"?"true":e.ariaInvalid===!1||e.ariaInvalid==="false"?"false":void 0}),null,16,Ge),e.clearable&&he.value?(D(),f("button",Se,[F(j,{name:"close",size:"sm"})])):I("",!0),F(l,M(W(z),{variant:"ghost","icon-only":"",class:"date_picker_btn",disabled:e.disabled,"aria-label":J.value?"캘린더 닫기":"캘린더 열기",expanded:J.value}),{"icon-before":we(()=>[F(j,{name:"calendar",size:"sm"})]),_:1},16,["disabled","aria-label","expanded"])])):I("",!0),n.$slots.panel||e.inline?(D(),f("div",{key:1,class:Ee(["date_picker_panel",{"date_picker_panel-wide":e.panelWide}]),role:"dialog","aria-label":"날짜 선택","data-demo-slot":"panel"},[Je(n.$slots,"panel")],2)):I("",!0)],16))}}),$e=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Le=[{name:"value",type:"string",default:"—",description:"표시할 날짜 문자열"},{name:"placeholder",type:"string",default:"—",description:"미선택 placeholder"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"date_picker_sm · date_picker_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"error",type:"boolean",default:"false",description:"오류 (is-error)"},{name:"success",type:"boolean",default:"false",description:"성공 (is-success)"},{name:"open",type:"boolean",default:"false",description:"패널 열림 (is-open)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 (date_picker_fit)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"inline",type:"boolean",default:"false",description:"트리거 없이 패널만 (date_picker_inline)"},{name:"clearable",type:"boolean",default:"false",description:"지우기 버튼"},{name:"panel-wide",type:"boolean",default:"false",description:"넓은 패널 (date_picker_panel-wide)"},{name:"input-id",type:"string",default:"—",description:"입력 필드 id (label for 연결)"},{name:"aria-label",type:"string",default:"—",description:"입력 접근성 라벨"},{name:"aria-invalid",type:"boolean | string",default:"—",description:"입력 aria-invalid"},ze],qe=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Re=[{name:"panel",description:"캘린더 패널 (Calendar 등)"}],Te=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Oe=[{name:"date_picker",description:"루트"},{name:"date_picker_sm · date_picker_lg · date_picker_fit · date_picker_block",description:"크기·너비"},{name:"date_picker_inline",description:"인라인 패널"},{name:"date_picker_trigger · date_picker_input · date_picker_btn",description:"트리거 영역"},{name:"date_picker_clear · date_picker_placeholder",description:'지우기(data-ripple="surface")·placeholder'},{name:"date_picker_panel · date_picker_panel-wide",description:"드롭다운 패널"},{name:"is-open · is-error · is-success · is-disabled",description:"상태"},...He],Ue=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ve=[{name:"--date-picker-input-padding-y · --date-picker-input-padding-x",default:"0.5rem · 0.75rem",description:"입력 패딩"},{name:"--date-picker-btn-size · --date-picker-icon-size",default:"2.25rem · 1rem",description:"캘린더 버튼·아이콘"}],Ne=[{title:"API · Props",tables:[{columns:$e,rows:Le,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:qe,rows:Re,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Te,rows:Oe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ue,rows:Ve,codeColumn:"name"}]}],ca={title:"Components/폼/DatePicker",id:"components-date-picker",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},success:{control:"boolean",type:{name:"boolean",summary:"boolean"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},value:{control:"text",type:{name:"string",summary:"string"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},panelWide:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inputId:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"fullscreen",apiSections:Ne}},k={args:{size:"md",disabled:!1,error:!1,success:!1,open:!0,placeholder:"입력하세요",value:"1",fit:!1,block:!1,inline:!1,clearable:!1,panelWide:!1,inputId:"값",ariaLabel:"접근성 라벨"},render:e=>({components:{DatePicker:r},setup(){return{args:e}},template:'<DatePicker v-bind="args" />'})},_={name:"유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
import Input from '@uxkm/ui/components/Input.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
      <Input id="dp-type-native" type="date" />
      <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
      <DatePicker input-id="dp-type-custom" placeholder="날짜를 선택하세요" fit aria-label="날짜 선택" />
      <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
    </div>`})},b={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-basic">예약 날짜</label>
    <DatePicker input-id="dp-basic" value="2024-06-18" fit />
    <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-basic">예약 날짜</label>
          <DatePicker input-id="dp-basic" value="2024-06-18" fit />
          <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
        </div>`})},y={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
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
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
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
        </div>`})},v={name:"패널 열림",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
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
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
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
    </div>`})},B={name:"푸터 액션",parameters:{demoPreview:{stack:!1},docs:{description:{story:"calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
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
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
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
    </div>`})},g={name:"기간 선택",parameters:{demoPreview:{stack:!1},docs:{description:{story:"date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="dp-range-label">조회 기간</span>
    <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
      <DatePicker value="2024-06-10" aria-label="시작일" />
      <span class="date_picker_sep" aria-hidden="true">~</span>
      <DatePicker value="2024-06-18" aria-label="종료일" />
    </div>
    <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field">
      <span class="form_field-label" id="dp-range-label">조회 기간</span>
      <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" aria-label="시작일" />
        <span class="date_picker_sep" aria-hidden="true">~</span>
        <DatePicker value="2024-06-18" aria-label="종료일" />
      </div>
      <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>`})},h={name:"이중 캘린더 패널",parameters:{demoPreview:{stack:!1},docs:{description:{story:"date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
import { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';
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
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field">
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
    </div>`})},P={name:"인라인",parameters:{demoPreview:{stack:!1},docs:{description:{story:"date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."},source:{code:`<script setup>
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<DatePicker inline>
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
    </DatePicker>`})},A={name:"값 초기화",parameters:{demoPreview:{stack:!1},docs:{description:{story:"date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="dp-clear">필터 날짜</label>
    <DatePicker input-id="dp-clear" value="2024-06-18" fit clearable />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-clear">필터 날짜</label>
      <DatePicker input-id="dp-clear" value="2024-06-18" fit clearable />
    </div>`})},x={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."},source:{code:`<script setup>
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
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
  </div>
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<div class="form_field form_field_fit">
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
    </div>`})},w={name:"조합 예시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
import Input from '@uxkm/ui/components/Input.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{DatePicker:r,CalendarGroup:t,Calendar:s,CalendarFooter:i,CalendarHeader:d,CalendarMonth:u,CalendarWeekdays:o,Button:l,Input:p},setup(){const e=c();return{rangeJulyDays:m(),rangeJuneDays:e}},template:`<form class="form form_inline" action="#" method="get">
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
    </form>`})};var G,S,$;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      DatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: '<DatePicker v-bind="args" />'
  })
}`,...($=(S=k.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var L,q,R;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-type-native\\">네이티브 — input type=\\"date\\"</label>\\n    <Input id=\\"dp-type-native\\" type=\\"date\\" />\\n    <p class=\\"form_field-hint\\">간단한 폼·모바일 환경에 적합합니다.</p>\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-type-custom\\">커스텀 — date_picker</label>\\n    <DatePicker input-id=\\"dp-type-custom\\" placeholder=\\"날짜를 선택하세요\\" fit aria-label=\\"날짜 선택\\" />\\n    <p class=\\"form_field-hint\\">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
      <Input id="dp-type-native" type="date" />
      <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
      <DatePicker input-id="dp-type-custom" placeholder="날짜를 선택하세요" fit aria-label="날짜 선택" />
      <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
    </div>\`
  })
}`,...(R=(q=_.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var T,O,U;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-basic\\">예약 날짜</label>\\n    <DatePicker input-id=\\"dp-basic\\" value=\\"2024-06-18\\" fit />\\n    <p class=\\"form_field-hint\\">체크인 날짜를 선택해 주세요.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-basic">예약 날짜</label>
          <DatePicker input-id="dp-basic" value="2024-06-18" fit />
          <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
        </div>\`
  })
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var V,N,K;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-size-sm\\">Small</label>\\n    <DatePicker input-id=\\"dp-size-sm\\" size=\\"sm\\" value=\\"2024-06-18\\" fit />\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-size-md\\">Medium</label>\\n    <DatePicker input-id=\\"dp-size-md\\" value=\\"2024-06-18\\" fit />\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-size-lg\\">Large</label>\\n    <DatePicker input-id=\\"dp-size-lg\\" size=\\"lg\\" value=\\"2024-06-18\\" fit />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
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
        </div>\`
  })
}`,...(K=(N=y.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "패널 열림",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-open\\">날짜</label>\\n    <DatePicker input-id=\\"dp-open\\" value=\\"2024-06-18\\" fit open>\\n      <template #panel>\\n        <Calendar no-header compact borderless aria-label=\\"2024년 6월\\" weekends>\\n          <template #weekdays>\\n            <CalendarWeekdays />\\n          </template>\\n          <CalendarMonth :selected=\\"18\\" :today=\\"15\\" weekends />\\n        </Calendar>\\n      </template>\\n    </DatePicker>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
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
    </div>\`
  })
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "푸터 액션",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-footer\\">일정 날짜</label>\\n    <DatePicker input-id=\\"dp-footer\\" value=\\"2024-06-18\\" fit open>\\n      <template #panel>\\n        <Calendar compact borderless aria-label=\\"2024년 6월\\" weekends>\\n          <template #header>\\n            <CalendarHeader title=\\"2024년 6월\\" />\\n          </template>\\n          <template #weekdays>\\n            <CalendarWeekdays />\\n          </template>\\n          <CalendarMonth :selected=\\"18\\" :today=\\"15\\" weekends />\\n          <template #footer>\\n            <CalendarFooter />\\n          </template>\\n        </Calendar>\\n      </template>\\n    </DatePicker>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
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
    </div>\`
  })
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,le;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "기간 선택",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <span class=\\"form_field-label\\" id=\\"dp-range-label\\">조회 기간</span>\\n    <div class=\\"date_picker_range\\" role=\\"group\\" aria-labelledby=\\"dp-range-label\\">\\n      <DatePicker value=\\"2024-06-10\\" aria-label=\\"시작일\\" />\\n      <span class=\\"date_picker_sep\\" aria-hidden=\\"true\\">~</span>\\n      <DatePicker value=\\"2024-06-18\\" aria-label=\\"종료일\\" />\\n    </div>\\n    <p class=\\"form_field-hint\\">최대 90일까지 조회할 수 있습니다.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field">
      <span class="form_field-label" id="dp-range-label">조회 기간</span>
      <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" aria-label="시작일" />
        <span class="date_picker_sep" aria-hidden="true">~</span>
        <DatePicker value="2024-06-18" aria-label="종료일" />
      </div>
      <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>\`
  })
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,se,ie;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "이중 캘린더 패널",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\nimport { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';\\nconst rangeJuneDays = juneDualDays();\\nconst rangeJulyDays = julyDualDays();\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <span class=\\"form_field-label\\" id=\\"dp-range-panel-label\\">숙박 기간</span>\\n    <DatePicker\\n    block\\n    open\\n    panel-wide\\n    input-id=\\"dp-range-panel-label\\"\\n    value=\\"2024-06-10 ~ 2024-07-06\\"\\n    aria-label=\\"숙박 기간\\"\\n    style=\\"max-width: 20rem;\\"\\n    >\\n    <template #panel>\\n      <CalendarGroup>\\n        <Calendar compact borderless aria-label=\\"2024년 6월\\">\\n          <CalendarHeader title=\\"2024년 6월\\" :show-next=\\"false\\" />\\n          <CalendarWeekdays />\\n          <CalendarMonth :days=\\"rangeJuneDays\\" />\\n        </Calendar>\\n        <Calendar compact borderless aria-label=\\"2024년 7월\\">\\n          <CalendarHeader title=\\"2024년 7월\\" :show-prev=\\"false\\" />\\n          <CalendarWeekdays />\\n          <CalendarMonth :days=\\"rangeJulyDays\\" />\\n        </Calendar>\\n      </CalendarGroup>\\n    </template>\\n  </DatePicker>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field">
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
    </div>\`
  })
}`,...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,ue,oe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Calendar from '@uxkm/ui/components/Calendar.vue';\\nimport CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';\\nimport CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';\\nimport CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <DatePicker inline>\\n    <template #panel>\\n      <Calendar compact aria-label=\\"2024년 6월\\" weekends>\\n        <template #header>\\n          <CalendarHeader title=\\"2024년 6월\\" />\\n        </template>\\n        <template #weekdays>\\n          <CalendarWeekdays />\\n        </template>\\n        <CalendarMonth :selected=\\"18\\" :today=\\"15\\" weekends />\\n      </Calendar>\\n    </template>\\n  </DatePicker>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<DatePicker inline>
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
    </DatePicker>\`
  })
}`,...(oe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var pe,ce,me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "값 초기화",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-clear\\">필터 날짜</label>\\n    <DatePicker input-id=\\"dp-clear\\" value=\\"2024-06-18\\" fit clearable />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-clear">필터 날짜</label>
      <DatePicker input-id="dp-clear" value="2024-06-18" fit clearable />
    </div>\`
  })
}`,...(me=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var Ce,fe,De;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-state-placeholder\\">플레이스홀더</label>\\n    <DatePicker input-id=\\"dp-state-placeholder\\" placeholder=\\"날짜를 선택하세요\\" fit />\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-state-disabled\\">비활성</label>\\n    <DatePicker input-id=\\"dp-state-disabled\\" value=\\"2024-06-18\\" fit disabled />\\n    <p class=\\"form_field-hint\\">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-state-error\\">에러</label>\\n    <DatePicker\\n    input-id=\\"dp-state-error\\"\\n    placeholder=\\"날짜를 선택하세요\\"\\n    fit\\n    error\\n    :aria-invalid=\\"true\\"\\n    aria-describedby=\\"dp-state-error-msg\\"\\n    />\\n    <p class=\\"form_field-error\\" id=\\"dp-state-error-msg\\" role=\\"alert\\">날짜를 선택해 주세요.</p>\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"dp-state-success\\">성공</label>\\n    <DatePicker\\n    input-id=\\"dp-state-success\\"\\n    value=\\"2024-06-18\\"\\n    fit\\n    success\\n    :aria-invalid=\\"false\\"\\n    aria-describedby=\\"dp-state-success-msg\\"\\n    />\\n    <p class=\\"form_field-success\\" id=\\"dp-state-success-msg\\" role=\\"status\\">예약 가능한 날짜입니다.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<div class="form_field form_field_fit">
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
    </div>\`
  })
}`,...(De=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var ke,_e,be;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "조합 예시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport DatePicker from '@uxkm/ui/components/DatePicker.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <form class=\\"form form_inline\\" action=\\"#\\" method=\\"get\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"dp-example-keyword\\">키워드</label>\\n      <Input id=\\"dp-example-keyword\\" type=\\"search\\" placeholder=\\"검색어\\" style=\\"min-width: 10rem;\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"dp-example-range-label\\">기간</span>\\n      <div class=\\"date_picker_range\\" role=\\"group\\" aria-labelledby=\\"dp-example-range-label\\">\\n        <DatePicker size=\\"sm\\" placeholder=\\"시작일\\" aria-label=\\"시작일\\" style=\\"min-width: 9rem;\\" />\\n        <span class=\\"date_picker_sep\\" aria-hidden=\\"true\\">~</span>\\n        <DatePicker placeholder=\\"종료일\\" aria-label=\\"종료일\\" style=\\"min-width: 9rem;\\" />\\n      </div>\\n    </div>\\n    <div class=\\"form_actions\\">\\n      <Button type=\\"submit\\" variant=\\"filled\\" color=\\"primary\\" label=\\"검색\\" />\\n      <Button type=\\"reset\\" variant=\\"ghost\\" label=\\"초기화\\" />\\n    </div>\\n  </form>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      DatePicker,
      CalendarGroup,
      Calendar,
      CalendarFooter,
      CalendarHeader,
      CalendarMonth,
      CalendarWeekdays,
      Button,
      Input
    },
    setup() {
      const rangeJuneDays = juneDualDays();
      const rangeJulyDays = julyDualDays();
      return {
        rangeJulyDays,
        rangeJuneDays
      };
    },
    template: \`<form class="form form_inline" action="#" method="get">
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
    </form>\`
  })
}`,...(be=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:be.source}}};const ma=["Playground","Type","Basic","Size","Open","Footer","Range","RangePanel","Inline","Clear","State","Example"];export{b as Basic,A as Clear,w as Example,B as Footer,P as Inline,v as Open,k as Playground,g as Range,h as RangePanel,y as Size,x as State,_ as Type,ma as __namedExportsOrder,ca as default};
