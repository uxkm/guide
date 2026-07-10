import{u as ge,b as Ee,a as M,w as N,c as i,t as E,q as p,h as C,j as $,m as t,e as k,k as ke,r as Fe,f as b,o as n}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as T}from"./Button-C3SXv-sJ.js";import{_ as W}from"./Icon-D97OEunV.js";import{r as Le,u as ze}from"./useRipple-oORGvIsP.js";import{u as Pe,c as Ve}from"./useDemoCode-B9b0dRAo.js";import{_ as u}from"./FormLayout-CRfgE2Bq.js";import{c as Ie,a as Me}from"./ripple-api-C5ZjLJl-.js";const Ne={key:0,class:"slider_header"},$e={key:1,class:"slider_control"},Te=["min","max","step","value","disabled"],We=["min","max","step","value","disabled"],Re={key:3,class:"slider_hint"},a=Object.assign({inheritAttrs:!1},{__name:"Slider",props:{ripple:Le,min:{type:Number,default:0},max:{type:Number,default:100},value:{type:Number,default:50},step:Number,disabled:Boolean,vertical:Boolean,label:String,showValue:Boolean,stepper:Boolean,stepperAlways:Boolean,valueSuffix:String,hint:String,decreaseLabel:String,increaseLabel:String,size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},modelValue:Number},emits:["update:modelValue"],setup(e,{emit:_e}){const s=e,{rippleAttrs:Se,childRippleAttrs:F}=ze(s,{mode:"container"}),he=_e,De=ge(),d=Ee(),L=M(null),o=`slider-${Math.random().toString(36).slice(2,9)}`,c=M(s.modelValue??s.value),Ae=Ve("Slider",{defaults:{min:0,max:100,value:50,size:"md"},booleanProps:new Set(["disabled","vertical","showValue","stepper","stepperAlways"]),skipProps:["modelValue"],selfClosing:!0});Pe(Ae,s,De,L,d);const m=b(()=>s.modelValue??c.value);N(()=>s.modelValue,l=>{l!=null&&(c.value=l)}),N(()=>s.value,l=>{s.modelValue==null&&(c.value=l)});function z(l){c.value=l,he("update:modelValue",l)}const xe=b(()=>{const l=["slider"];return s.size==="sm"&&l.push("slider_sm"),s.size==="lg"&&l.push("slider_lg"),s.vertical&&l.push("slider_vertical"),s.stepper&&l.push("slider_stepper"),s.stepperAlways&&l.push("slider_stepper_always"),d.class&&l.push(d.class),l}),we=b(()=>{const l=s.valueSuffix??"";return`${m.value}${l}`});function P(l){const r=s.step??1,g=Math.min(s.max,Math.max(s.min,m.value+l*r));z(g)}const V=b(()=>{const{class:l,...r}=d;return r});function I(l){z(Number(l.target.value))}return(l,r)=>(n(),i("div",t({ref_key:"rootRef",ref:L,class:xe.value},k(Se)),[e.label||e.showValue?(n(),i("div",Ne,[e.label?(n(),i("label",{key:0,class:"slider_label",for:o},E(e.label),1)):p("",!0),e.showValue?(n(),i("output",{key:1,class:"slider_value",for:o},E(we.value),1)):p("",!0)])):p("",!0),e.stepper?(n(),i("div",$e,[C(T,t(k(F),{variant:"ghost",size:"sm","icon-only":"",class:"slider_step slider_step-decrease","aria-label":e.decreaseLabel||"값 줄이기",disabled:e.disabled,onClick:r[0]||(r[0]=g=>P(-1))}),{"icon-before":$(()=>[C(W,{name:"minus",size:"sm",class:"slider_step-icon"})]),_:1},16,["aria-label","disabled"]),ke("input",t({id:o,type:"range",class:"slider_input",min:e.min,max:e.max,step:e.step,value:m.value,disabled:e.disabled},V.value,{onInput:I}),null,16,Te),C(T,t(k(F),{variant:"ghost",size:"sm","icon-only":"",class:"slider_step slider_step-increase","aria-label":e.increaseLabel||"값 늘리기",disabled:e.disabled,onClick:r[1]||(r[1]=g=>P(1))}),{"icon-before":$(()=>[C(W,{name:"plus",size:"sm",class:"slider_step-icon"})]),_:1},16,["aria-label","disabled"])])):(n(),i("input",t({key:2,id:o,type:"range",class:"slider_input",min:e.min,max:e.max,step:e.step,value:m.value,disabled:e.disabled},V.value,{onInput:I}),null,16,We)),e.hint?(n(),i("p",Re,E(e.hint),1)):p("",!0),Fe(l.$slots,"default")],16))}}),Oe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],je=[{name:"model-value",type:"number",default:"—",description:"v-model 바인딩 값"},{name:"value",type:"number",default:"50",description:"model-value 없을 때 기본값"},{name:"min",type:"number",default:"0",description:"최솟값"},{name:"max",type:"number",default:"100",description:"최댓값"},{name:"step",type:"number",default:"—",description:"증감 단위"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"slider_sm · slider_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"vertical",type:"boolean",default:"false",description:"세로 슬라이더"},{name:"label",type:"string",default:"—",description:"상단 라벨"},{name:"show-value",type:"boolean",default:"false",description:"현재 값 output 표시"},{name:"value-suffix",type:"string",default:"—",description:"값 뒤 단위 (%, px 등)"},{name:"hint",type:"string",default:"—",description:"하단 힌트 텍스트"},{name:"stepper",type:"boolean",default:"false",description:"± 스텝 버튼 (slider_stepper)"},{name:"stepper-always",type:"boolean",default:"false",description:"스텝 버튼 항상 표시"},{name:"decrease-label",type:"string",default:"값 줄이기",description:"감소 버튼 aria-label"},{name:"increase-label",type:"string",default:"값 늘리기",description:"증가 버튼 aria-label"},Ie],He=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ue=[{name:"default",description:"추가 콘텐츠 (눈금 등)"}],qe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ge=[{name:"slider",description:"슬라이더 루트"},{name:"slider_sm · slider_lg · slider_vertical",description:"크기·방향"},{name:"slider_stepper · slider_stepper_always",description:"스텝 버튼 모드"},{name:"slider_header · slider_label · slider_value · slider_hint",description:"헤더·힌트"},{name:"slider_input · slider_control · slider_step",description:"range·스텝 버튼"},{name:"slider_ticks · slider_tick",description:"눈금 (HTML 마크업)"},...Me],Je=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Ke=[{name:"update:modelValue",description:"값 변경 시 (v-model)"}],Qe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xe=[{name:"--slider-track-height · --slider-thumb-size",default:"4px · 14px",description:"트랙·썸 크기 (md)"},{name:"--slider-max-width",default:"var(--input-max-width)",description:"최대 너비"},{name:"--slider-step-size",default:"2.25rem",description:"스텝 버튼 크기"}],Ye=[{title:"API · Props",tables:[{columns:Oe,rows:je,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:He,rows:Ue,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Je,rows:Ke,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:qe,rows:Ge,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Qe,rows:Xe,codeColumn:"name"}]}],il={title:"Components/폼/Slider",id:"components-slider",component:a,tags:["autodocs"],argTypes:{min:{control:"number",type:{name:"number",summary:"number"}},max:{control:"number",type:{name:"number",summary:"number"}},value:{control:"number",type:{name:"number",summary:"number"}},step:{control:"number",type:{name:"number",summary:"number"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},showValue:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stepper:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stepperAlways:{control:"boolean",type:{name:"boolean",summary:"boolean"}},valueSuffix:{control:"text",type:{name:"string",summary:"string"}},hint:{control:"text",type:{name:"string",summary:"string"}},decreaseLabel:{control:"text",type:{name:"string",summary:"string"}},increaseLabel:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},modelValue:{control:"number",type:{name:"number",summary:"number"}}},parameters:{layout:"padded",apiSections:Ye}},f={args:{min:0,max:100,value:50,step:1,disabled:!1,vertical:!1,label:"라벨",showValue:!1,stepper:!1,stepperAlways:!1,valueSuffix:"값",hint:"값",decreaseLabel:"라벨",increaseLabel:"라벨",size:"md",modelValue:""},render:e=>({components:{Slider:a},setup(){return{args:e}},template:'<Slider v-bind="args" />'})},B={name:"유형",parameters:{demoPreview:{stack:!1},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 <code>label for</code> 또는 <code>aria-labelledby</code>를, 레이블 없이 아이콘·단독 UI만 있으면 <code>aria-label</code>을 사용합니다. 보조 설명은 <code>aria-describedby</code>, 스크린 리더용 값 표현은 <code>aria-valuetext</code>와 <code>output</code>을 조합합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider
  id="slider-type-label"
  class="slider_fit"
  label="label + for — 기본"
  :value="40"
  show-value
  />
  <Slider
  class="slider_fit"
  :value="55"
  aria-label="단독 슬라이더 — aria-label"
  />
  <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
  <Slider
  id="slider-type-labelledby"
  class="slider_fit"
  label="aria-labelledby — 외부 레이블"
  :value="16"
  :min="12"
  :max="24"
  :step="1"
  aria-describedby="slider-type-labelledby-hint"
  data-slider-valuetext-suffix="픽셀"
  show-value
  />
  <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
  <Slider
  id="slider-type-describedby"
  class="slider_fit"
  label="aria-describedby — 보조 설명"
  :value="70"
  aria-describedby="slider-type-describedby-hint"
  data-slider-suffix="%"
  data-slider-valuetext-suffix="퍼센트"
  show-value
  />
  <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
  <Slider
  id="slider-type-valuetext"
  class="slider_fit"
  label="aria-valuetext — 읽기 쉬운 값"
  :value="3"
  :min="1"
  :max="5"
  :step="1"
  data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
  show-value
  />
  <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider
      id="slider-type-label"
      class="slider_fit"
      label="label + for — 기본"
      :value="40"
      show-value
    />
    <Slider
      class="slider_fit"
      :value="55"
      aria-label="단독 슬라이더 — aria-label"
    />
    <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
    <Slider
      id="slider-type-labelledby"
      class="slider_fit"
      label="aria-labelledby — 외부 레이블"
      :value="16"
      :min="12"
      :max="24"
      :step="1"
      aria-describedby="slider-type-labelledby-hint"
      data-slider-valuetext-suffix="픽셀"
      show-value
    />
    <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
    <Slider
      id="slider-type-describedby"
      class="slider_fit"
      label="aria-describedby — 보조 설명"
      :value="70"
      aria-describedby="slider-type-describedby-hint"
      data-slider-suffix="%"
      data-slider-valuetext-suffix="퍼센트"
      show-value
    />
    <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
    <Slider
      id="slider-type-valuetext"
      class="slider_fit"
      label="aria-valuetext — 읽기 쉬운 값"
      :value="3"
      :min="1"
      :max="5"
      :step="1"
      data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
      show-value
    />
    <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>`})},v={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:'<Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />'})},y={name:"레이블 · 값 표시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
  <Slider
  id="slider-brightness"
  class="slider_fit"
  label="밝기"
  :value="40"
  data-slider-suffix="%"
  show-value
  />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
    <Slider
      id="slider-brightness"
      class="slider_fit"
      label="밝기"
      :value="40"
      data-slider-suffix="%"
      show-value
    />`})},_={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
  <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
  <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
    <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
    <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />`})},S={name:"너비",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
  <Slider
  id="slider-width-block"
  class="slider_block"
  style="max-width: 480px;"
  label="slider_block — 전체 너비"
  :value="65"
  show-value
  />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
    <Slider
      id="slider-width-block"
      class="slider_block"
      style="max-width: 480px;"
      label="slider_block — 전체 너비"
      :value="65"
      show-value
    />`})},h={name:"간격 · 눈금",parameters:{demoPreview:{stack:!1},docs:{description:{story:"step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:'<Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />'})},D={name:"스텝 버튼",parameters:{demoPreview:{stack:!0},docs:{description:{story:"모바일(768px 이하)에서 range 드래그가 어려운 경우 <code>slider_stepper</code>를 추가합니다. <code>slider_control</code> 안에 <code>slider_step-decrease</code> · <code>slider_input</code> · <code>slider_step-increase</code> 순으로 배치하며, 버튼 클릭 시 <code>step</code>만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 <code>slider_stepper_always</code>를 함께 사용합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider
  class="slider_fit"
  stepper
  label="볼륨 — slider_stepper"
  :value="60"
  show-value
  decrease-label="볼륨 줄이기"
  increase-label="볼륨 늘리기"
  hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
  />
  <Slider
  class="slider_fit"
  stepper
  stepper-always
  label="밝기 — slider_stepper_always"
  :value="40"
  :step="5"
  value-suffix="%"
  show-value
  decrease-label="밝기 줄이기"
  increase-label="밝기 늘리기"
  hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
  />
  <Slider
  class="slider_fit"
  stepper
  label="비활성"
  :value="30"
  show-value
  disabled
  />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider
      class="slider_fit"
      stepper
      label="볼륨 — slider_stepper"
      :value="60"
      show-value
      decrease-label="볼륨 줄이기"
      increase-label="볼륨 늘리기"
      hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
    />

    <Slider
      class="slider_fit"
      stepper
      stepper-always
      label="밝기 — slider_stepper_always"
      :value="40"
      :step="5"
      value-suffix="%"
      show-value
      decrease-label="밝기 줄이기"
      increase-label="밝기 늘리기"
      hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
    />

    <Slider
      class="slider_fit"
      stepper
      label="비활성"
      :value="30"
      show-value
      disabled
    />`})},A={name:"색상",parameters:{demoPreview:{stack:!1},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
  <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
  <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
  <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
    <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
    <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
    <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />`})},x={name:"상태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"비활성·오류(is-error) 상태를 지원합니다."},source:{code:`<script setup>
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" label="기본" :value="50" show-value />
  <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<Slider class="slider_fit" label="기본" :value="50" show-value />
    <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />`})},w={name:"폼 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"form_field · form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Slider from '@uxkm/ui/components/Slider.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-opacity">불투명도</label>
      <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
      <p class="form_field-hint">0~100% 사이 값</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
      <Slider
      id="slider-form-zoom"
      label="현재 값"
      :value="125"
      :min="50"
      :max="200"
      :step="25"
      data-slider-suffix="%"
      show-value
      />
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
      <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
      <p class="form_field-hint">1~10px</p>
    </div>
  </FormLayout>
</template>`,language:"vue"}}},render:()=>({components:{Slider:a,FormLayout:u},template:`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-opacity">불투명도</label>
        <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
        <p class="form_field-hint">0~100% 사이 값</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
        <Slider
          id="slider-form-zoom"
          label="현재 값"
          :value="125"
          :min="50"
          :max="200"
          :step="25"
          data-slider-suffix="%"
          show-value
        />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
        <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
        <p class="form_field-hint">1~10px</p>
      </div>
    </FormLayout>`})};var R,O,j;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    vertical: false,
    label: "라벨",
    showValue: false,
    stepper: false,
    stepperAlways: false,
    valueSuffix: "값",
    hint: "값",
    decreaseLabel: "라벨",
    increaseLabel: "라벨",
    size: "md",
    modelValue: ""
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: '<Slider v-bind="args" />'
  })
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var H,U,q;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 <code>label for</code> 또는 <code>aria-labelledby</code>를, 레이블 없이 아이콘·단독 UI만 있으면 <code>aria-label</code>을 사용합니다. 보조 설명은 <code>aria-describedby</code>, 스크린 리더용 값 표현은 <code>aria-valuetext</code>와 <code>output</code>을 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider\\n  id=\\"slider-type-label\\"\\n  class=\\"slider_fit\\"\\n  label=\\"label + for — 기본\\"\\n  :value=\\"40\\"\\n  show-value\\n  />\\n  <Slider\\n  class=\\"slider_fit\\"\\n  :value=\\"55\\"\\n  aria-label=\\"단독 슬라이더 — aria-label\\"\\n  />\\n  <p class=\\"slider_hint\\">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>\\n  <Slider\\n  id=\\"slider-type-labelledby\\"\\n  class=\\"slider_fit\\"\\n  label=\\"aria-labelledby — 외부 레이블\\"\\n  :value=\\"16\\"\\n  :min=\\"12\\"\\n  :max=\\"24\\"\\n  :step=\\"1\\"\\n  aria-describedby=\\"slider-type-labelledby-hint\\"\\n  data-slider-valuetext-suffix=\\"픽셀\\"\\n  show-value\\n  />\\n  <p class=\\"slider_hint\\" id=\\"slider-type-labelledby-hint\\">12~24px 사이 글자 크기</p>\\n  <Slider\\n  id=\\"slider-type-describedby\\"\\n  class=\\"slider_fit\\"\\n  label=\\"aria-describedby — 보조 설명\\"\\n  :value=\\"70\\"\\n  aria-describedby=\\"slider-type-describedby-hint\\"\\n  data-slider-suffix=\\"%\\"\\n  data-slider-valuetext-suffix=\\"퍼센트\\"\\n  show-value\\n  />\\n  <p class=\\"slider_hint\\" id=\\"slider-type-describedby-hint\\">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>\\n  <Slider\\n  id=\\"slider-type-valuetext\\"\\n  class=\\"slider_fit\\"\\n  label=\\"aria-valuetext — 읽기 쉬운 값\\"\\n  :value=\\"3\\"\\n  :min=\\"1\\"\\n  :max=\\"5\\"\\n  :step=\\"1\\"\\n  data-slider-valuetext-map=\\"1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음\\"\\n  show-value\\n  />\\n  <p class=\\"slider_hint\\">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden=\\"true\\"</code>로 중복 낭독을 줄일 수 있습니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider
      id="slider-type-label"
      class="slider_fit"
      label="label + for — 기본"
      :value="40"
      show-value
    />
    <Slider
      class="slider_fit"
      :value="55"
      aria-label="단독 슬라이더 — aria-label"
    />
    <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
    <Slider
      id="slider-type-labelledby"
      class="slider_fit"
      label="aria-labelledby — 외부 레이블"
      :value="16"
      :min="12"
      :max="24"
      :step="1"
      aria-describedby="slider-type-labelledby-hint"
      data-slider-valuetext-suffix="픽셀"
      show-value
    />
    <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
    <Slider
      id="slider-type-describedby"
      class="slider_fit"
      label="aria-describedby — 보조 설명"
      :value="70"
      aria-describedby="slider-type-describedby-hint"
      data-slider-suffix="%"
      data-slider-valuetext-suffix="퍼센트"
      show-value
    />
    <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
    <Slider
      id="slider-type-valuetext"
      class="slider_fit"
      label="aria-valuetext — 읽기 쉬운 값"
      :value="3"
      :min="1"
      :max="5"
      :step="1"
      data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
      show-value
    />
    <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>\`
  })
}`,...(q=(U=B.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider class=\\"slider_fit\\" :value=\\"30\\" aria-label=\\"기본 슬라이더\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />\`
  })
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "레이블 · 값 표시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider id=\\"slider-volume\\" class=\\"slider_fit\\" label=\\"볼륨\\" :value=\\"60\\" show-value />\\n  <Slider\\n  id=\\"slider-brightness\\"\\n  class=\\"slider_fit\\"\\n  label=\\"밝기\\"\\n  :value=\\"40\\"\\n  data-slider-suffix=\\"%\\"\\n  show-value\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
    <Slider
      id="slider-brightness"
      class="slider_fit"
      label="밝기"
      :value="40"
      data-slider-suffix="%"
      show-value
    />\`
  })
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,le;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider id=\\"slider-size-sm\\" class=\\"slider_sm slider_fit\\" label=\\"Small — slider_sm\\" :value=\\"30\\" show-value />\\n  <Slider id=\\"slider-size-md\\" class=\\"slider_fit\\" label=\\"Medium — 기본\\" :value=\\"50\\" show-value />\\n  <Slider id=\\"slider-size-lg\\" class=\\"slider_lg slider_fit\\" label=\\"Large — slider_lg\\" :value=\\"70\\" show-value />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
    <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
    <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />\`
  })
}`,...(le=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var se,ae,ue;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider id=\\"slider-width-fit\\" class=\\"slider_fit\\" label=\\"slider_fit — 최대 320px\\" :value=\\"45\\" show-value />\\n  <Slider\\n  id=\\"slider-width-block\\"\\n  class=\\"slider_block\\"\\n  style=\\"max-width: 480px;\\"\\n  label=\\"slider_block — 전체 너비\\"\\n  :value=\\"65\\"\\n  show-value\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
    <Slider
      id="slider-width-block"
      class="slider_block"
      style="max-width: 480px;"
      label="slider_block — 전체 너비"
      :value="65"
      show-value
    />\`
  })
}`,...(ue=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};var re,ie,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "간격 · 눈금",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider class=\\"slider_fit\\" label=\\"step=10\\" :value=\\"50\\" :step=\\"10\\" show-value />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />\`
  })
}`,...(ne=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var te,de,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "스텝 버튼",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "모바일(768px 이하)에서 range 드래그가 어려운 경우 <code>slider_stepper</code>를 추가합니다. <code>slider_control</code> 안에 <code>slider_step-decrease</code> · <code>slider_input</code> · <code>slider_step-increase</code> 순으로 배치하며, 버튼 클릭 시 <code>step</code>만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 <code>slider_stepper_always</code>를 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider\\n  class=\\"slider_fit\\"\\n  stepper\\n  label=\\"볼륨 — slider_stepper\\"\\n  :value=\\"60\\"\\n  show-value\\n  decrease-label=\\"볼륨 줄이기\\"\\n  increase-label=\\"볼륨 늘리기\\"\\n  hint=\\"모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.\\"\\n  />\\n  <Slider\\n  class=\\"slider_fit\\"\\n  stepper\\n  stepper-always\\n  label=\\"밝기 — slider_stepper_always\\"\\n  :value=\\"40\\"\\n  :step=\\"5\\"\\n  value-suffix=\\"%\\"\\n  show-value\\n  decrease-label=\\"밝기 줄이기\\"\\n  increase-label=\\"밝기 늘리기\\"\\n  hint=\\"모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.\\"\\n  />\\n  <Slider\\n  class=\\"slider_fit\\"\\n  stepper\\n  label=\\"비활성\\"\\n  :value=\\"30\\"\\n  show-value\\n  disabled\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider
      class="slider_fit"
      stepper
      label="볼륨 — slider_stepper"
      :value="60"
      show-value
      decrease-label="볼륨 줄이기"
      increase-label="볼륨 늘리기"
      hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
    />

    <Slider
      class="slider_fit"
      stepper
      stepper-always
      label="밝기 — slider_stepper_always"
      :value="40"
      :step="5"
      value-suffix="%"
      show-value
      decrease-label="밝기 줄이기"
      increase-label="밝기 늘리기"
      hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
    />

    <Slider
      class="slider_fit"
      stepper
      label="비활성"
      :value="30"
      show-value
      disabled
    />\`
  })
}`,...(oe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ce,me,pe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider id=\\"slider-color-primary\\" class=\\"color_primary slider_fit\\" label=\\"Primary\\" :value=\\"60\\" show-value />\\n  <Slider id=\\"slider-color-success\\" class=\\"color_success slider_fit\\" label=\\"Success\\" :value=\\"70\\" show-value />\\n  <Slider id=\\"slider-color-danger\\" class=\\"color_danger slider_fit\\" label=\\"Danger\\" :value=\\"40\\" show-value />\\n  <Slider id=\\"slider-color-warning\\" class=\\"color_warning slider_fit\\" label=\\"Warning\\" :value=\\"80\\" show-value />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
    <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
    <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
    <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />\`
  })
}`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var Ce,be,fe;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "비활성·오류(is-error) 상태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <Slider class=\\"slider_fit\\" label=\\"기본\\" :value=\\"50\\" show-value />\\n  <Slider class=\\"slider_fit\\" label=\\"비활성\\" :value=\\"30\\" disabled show-value />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<Slider class="slider_fit" label="기본" :value="50" show-value />
    <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />\`
  })
}`,...(fe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Be,ve,ye;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_field · form_vertical · form_horizontal과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Slider from '@uxkm/ui/components/Slider.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"slider-form-opacity\\">불투명도</label>\\n      <Slider id=\\"slider-form-opacity\\" :value=\\"85\\" data-slider-suffix=\\"%\\" />\\n      <p class=\\"form_field-hint\\">0~100% 사이 값</p>\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"slider-form-zoom\\">확대 비율</label>\\n      <Slider\\n      id=\\"slider-form-zoom\\"\\n      label=\\"현재 값\\"\\n      :value=\\"125\\"\\n      :min=\\"50\\"\\n      :max=\\"200\\"\\n      :step=\\"25\\"\\n      data-slider-suffix=\\"%\\"\\n      show-value\\n      />\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\" fit>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"slider-form-horizontal\\">선 굵기</label>\\n      <Slider id=\\"slider-form-horizontal\\" :value=\\"3\\" :min=\\"1\\" :max=\\"10\\" />\\n      <p class=\\"form_field-hint\\">1~10px</p>\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Slider,
      FormLayout
    },
    template: \`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-opacity">불투명도</label>
        <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
        <p class="form_field-hint">0~100% 사이 값</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
        <Slider
          id="slider-form-zoom"
          label="현재 값"
          :value="125"
          :min="50"
          :max="200"
          :step="25"
          data-slider-suffix="%"
          show-value
        />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
        <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
        <p class="form_field-hint">1~10px</p>
      </div>
    </FormLayout>\`
  })
}`,...(ye=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const nl=["Playground","Type","Basic","Label","Size","Width","Step","Stepper","Color","State","Form"];export{v as Basic,A as Color,w as Form,y as Label,f as Playground,_ as Size,x as State,h as Step,D as Stepper,B as Type,S as Width,nl as __namedExportsOrder,il as default};
