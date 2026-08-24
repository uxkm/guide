import{A as e,B as t,G as n,L as r,U as i,W as a,Y as o,b as s,d as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,wt as g,y as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{n as S,t as C}from"./D01l-9yr.js";import{t as w}from"./D5AUKneU.js";import{t as T}from"./gHQDdAlU.js";import{t as E}from"./DD3RWXAt.js";import{r as D,t as O}from"./D6IbhUhQ.js";import{t as k}from"./Cuo-DXMr2.js";var A={key:0,class:`slider_header`},j=[`for`],M=[`for`],N={key:1,class:`slider_control`},P=[`id`,`min`,`max`,`step`,`value`,`disabled`],F=[`id`,`min`,`max`,`step`,`value`,`disabled`],I={key:3,class:`slider_hint`},L=Object.assign({inheritAttrs:!1},{__name:`Slider`,props:{ripple:C,min:{type:Number,default:0},max:{type:Number,default:100},defaultValue:{type:Number,default:50},step:Number,disabled:Boolean,vertical:Boolean,label:String,showValue:Boolean,stepper:Boolean,stepperAlways:Boolean,valueSuffix:String,hint:String,decreaseLabel:String,increaseLabel:String,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},modelValue:{type:Number,default:void 0}},emits:[`update:modelValue`],setup(l,{emit:_}){let y=new Set([`sm`,`md`,`lg`]),b=l,{rippleAttrs:C,childRippleAttrs:E}=S(b,{mode:`container`}),D=_,O=n(),k=i(),L=f(null),R=f(null),z=a(),B=h(()=>k.id??z),V=h(()=>y.has(b.size)?b.size:`md`),H=h(()=>Number(b.min)),U=h(()=>Number(b.max)),W=f(Number(b.defaultValue)),G=v(`Slider`,{defaults:{min:0,max:100,defaultValue:50,size:`md`},booleanProps:new Set([`disabled`,`vertical`,`showValue`,`stepper`,`stepperAlways`]),skipProps:[`modelValue`],selfClosing:!0});x(G,()=>({...b,min:H.value,max:U.value,size:V.value}),O,L,k);let K=h(()=>b.modelValue!==void 0),q=h(()=>K.value?Number(b.modelValue):W.value);function J(e){K.value||(W.value=e),D(`update:modelValue`,e)}let Y=h(()=>{let e=[`slider`];return V.value===`sm`&&e.push(`slider_sm`),V.value===`lg`&&e.push(`slider_lg`),b.vertical&&e.push(`slider_vertical`),b.stepper&&e.push(`slider_stepper`),b.stepperAlways&&e.push(`slider_stepper_always`),k.class&&e.push(k.class),e}),X=h(()=>{let e=b.valueSuffix??``;return`${q.value}${e}`});function Z(e){let t=b.step??1;J(Math.min(U.value,Math.max(H.value,q.value+e*t)))}let Q=h(()=>{let{class:e,id:t,style:n,value:r,...i}=k;return i});function $(t){J(Number(t.target.value)),K.value&&e(()=>{R.value&&(R.value.value=String(q.value))})}return(e,n)=>(r(),d(`div`,u({ref_key:`rootRef`,ref:L,class:Y.value,style:m(k).style},m(C)),[l.label||l.showValue?(r(),d(`div`,A,[l.label?(r(),d(`label`,{key:0,class:`slider_label`,for:B.value},g(l.label),9,j)):p(``,!0),l.showValue?(r(),d(`output`,{key:1,class:`slider_value`,for:B.value},g(X.value),9,M)):p(``,!0)])):p(``,!0),l.stepper?(r(),d(`div`,N,[s(T,u(m(E),{variant:`ghost`,size:`sm`,"icon-only":``,class:`slider_step slider_step-decrease`,"aria-label":l.decreaseLabel||`값 줄이기`,disabled:l.disabled,onClick:n[0]||=e=>Z(-1)}),{"icon-before":o(()=>[s(w,{name:`minus`,size:`sm`,class:`slider_step-icon`})]),_:1},16,[`aria-label`,`disabled`]),c(`input`,u({ref_key:`inputRef`,ref:R,id:B.value,type:`range`,class:`slider_input`,min:H.value,max:U.value,step:l.step,value:q.value,disabled:l.disabled},Q.value,{onInput:$}),null,16,P),s(T,u(m(E),{variant:`ghost`,size:`sm`,"icon-only":``,class:`slider_step slider_step-increase`,"aria-label":l.increaseLabel||`값 늘리기`,disabled:l.disabled,onClick:n[1]||=e=>Z(1)}),{"icon-before":o(()=>[s(w,{name:`plus`,size:`sm`,class:`slider_step-icon`})]),_:1},16,[`aria-label`,`disabled`])])):(r(),d(`input`,u({key:2,ref_key:`inputRef`,ref:R,id:B.value,type:`range`,class:`slider_input`,min:H.value,max:U.value,step:l.step,value:q.value,disabled:l.disabled},Q.value,{onInput:$}),null,16,F)),l.hint?(r(),d(`p`,I,g(l.hint),1)):p(``,!0),t(e.$slots,`default`)],16))}}),R=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],z=[{name:`model-value`,type:`number`,default:`—`,description:`제어 값. v-model 바인딩`},{name:`default-value`,type:`number`,default:`50`,description:`비제어 초기 값`},{name:`min`,type:`number`,default:`0`,description:`최솟값`},{name:`max`,type:`number`,default:`100`,description:`최댓값`},{name:`step`,type:`number`,default:`—`,description:`증감 단위`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`slider_sm · slider_lg`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`vertical`,type:`boolean`,default:`false`,description:`세로 슬라이더`},{name:`label`,type:`string`,default:`—`,description:`상단 라벨`},{name:`show-value`,type:`boolean`,default:`false`,description:`현재 값 output 표시`},{name:`value-suffix`,type:`string`,default:`—`,description:`값 뒤 단위 (%, px 등)`},{name:`hint`,type:`string`,default:`—`,description:`하단 힌트 텍스트`},{name:`stepper`,type:`boolean`,default:`false`,description:`± 스텝 버튼 (slider_stepper)`},{name:`stepper-always`,type:`boolean`,default:`false`,description:`스텝 버튼 항상 표시`},{name:`decrease-label`,type:`string`,default:`값 줄이기`,description:`감소 버튼 aria-label`},{name:`increase-label`,type:`string`,default:`값 늘리기`,description:`증가 버튼 aria-label`},D],B=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],V=[{name:`default`,description:`추가 콘텐츠 (눈금 등)`}],H=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],U=[{name:`slider`,description:`슬라이더 루트`},{name:`slider_sm · slider_lg · slider_vertical`,description:`크기·방향`},{name:`slider_stepper · slider_stepper_always`,description:`스텝 버튼 모드`},{name:`slider_header · slider_label · slider_value · slider_hint`,description:`헤더·힌트`},{name:`slider_input · slider_control · slider_step`,description:`range·스텝 버튼`},{name:`slider_ticks · slider_tick`,description:`눈금 (HTML 마크업)`},...O],W=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],G=[{name:`update:modelValue`,description:`값 변경 시 (v-model)`}],K=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],q=[{name:`--slider-track-height · --slider-thumb-size`,default:`4px · 14px`,description:`트랙·썸 크기 (md)`},{name:`--slider-max-width`,default:`var(--input-max-width)`,description:`최대 너비`},{name:`--slider-step-size`,default:`2.25rem`,description:`스텝 버튼 크기`}],J={class:`form_field`},Y={class:`form_field`},X={class:`form_field`},Z={title:`Slider | HTML Components`,activeNav:`slider`,pageTitle:`Slider`},Q={__name:`slider`,setup(e){return(e,t)=>(r(),d(l,null,[t[9]||=c(`div`,{class:`page_intro`},[c(`h1`,null,`Slider`),c(`p`,{class:`lead`},[_(`범위 값을 선택하는 Slider 컴포넌트입니다. 네이티브 `),c(`code`,null,`input type="range"`),_(`를 기반으로 하며, 모바일에서는 `),c(`strong`,null,`slider_stepper`),_(`로 증감 버튼을 제공해 드래그와 동일하게 `),c(`code`,null,`step`),_(` 단위로 값을 조절할 수 있습니다.`)])],-1),s(E,{"heading-id":`type-heading`,title:`유형`,description:`접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 <code>label for</code> 또는 <code>aria-labelledby</code>를, 레이블 없이 아이콘·단독 UI만 있으면 <code>aria-label</code>을 사용합니다. 보조 설명은 <code>aria-describedby</code>, 스크린 리더용 값 표현은 <code>aria-valuetext</code>와 <code>output</code>을 조합합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider
  id="slider-type-label"
  class="slider_fit"
  label="label + for — 기본"
  :default-value="40"
  show-value
  />
  <Slider
  class="slider_fit"
  :default-value="55"
  aria-label="단독 슬라이더 — aria-label"
  />
  <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
  <Slider
  id="slider-type-labelledby"
  class="slider_fit"
  label="aria-labelledby — 외부 레이블"
  :default-value="16"
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
  :default-value="70"
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
  :default-value="3"
  :min="1"
  :max="5"
  :step="1"
  data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
  show-value
  />
  <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
</template>`},{default:o(()=>[s(L,{id:`slider-type-label`,class:`slider_fit`,label:`label + for — 기본`,"default-value":40,"show-value":``}),s(L,{class:`slider_fit`,"default-value":55,"aria-label":`단독 슬라이더 — aria-label`}),t[0]||=c(`p`,{class:`slider_hint`},[_(`레이블 없이 사용할 때는 `),c(`code`,null,`aria-label`),_(`로 접근 가능한 이름을 지정합니다.`)],-1),s(L,{id:`slider-type-labelledby`,class:`slider_fit`,label:`aria-labelledby — 외부 레이블`,"default-value":16,min:12,max:24,step:1,"aria-describedby":`slider-type-labelledby-hint`,"data-slider-valuetext-suffix":`픽셀`,"show-value":``}),t[1]||=c(`p`,{class:`slider_hint`,id:`slider-type-labelledby-hint`},`12~24px 사이 글자 크기`,-1),s(L,{id:`slider-type-describedby`,class:`slider_fit`,label:`aria-describedby — 보조 설명`,"default-value":70,"aria-describedby":`slider-type-describedby-hint`,"data-slider-suffix":`%`,"data-slider-valuetext-suffix":`퍼센트`,"show-value":``}),t[2]||=c(`p`,{class:`slider_hint`,id:`slider-type-describedby-hint`},[_(`0%는 최소, 100%는 최대 대비입니다. 힌트 id를 `),c(`code`,null,`aria-describedby`),_(`에 연결합니다.`)],-1),s(L,{id:`slider-type-valuetext`,class:`slider_fit`,label:`aria-valuetext — 읽기 쉬운 값`,"default-value":3,min:1,max:5,step:1,"data-slider-valuetext-map":`1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음`,"show-value":``}),t[3]||=c(`p`,{class:`slider_hint`},[_(`숫자 대신 `),c(`code`,null,`aria-valuetext`),_(`로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 `),c(`code`,null,`aria-hidden="true"`),_(`로 중복 낭독을 줄일 수 있습니다.`)],-1)]),_:1}),s(E,{"heading-id":`basic-heading`,title:`기본`,description:`slider 래퍼 안에 slider_input을 배치합니다. min · max · default-value로 범위와 초기값을 지정합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" :default-value="30" aria-label="기본 슬라이더" />
</template>`},{default:o(()=>[s(L,{class:`slider_fit`,"default-value":30,"aria-label":`기본 슬라이더`})]),_:1}),s(E,{"heading-id":`label-heading`,title:`레이블 · 값 표시`,description:`slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-volume" class="slider_fit" label="볼륨" :default-value="60" show-value />
  <Slider
  id="slider-brightness"
  class="slider_fit"
  label="밝기"
  :default-value="40"
  data-slider-suffix="%"
  show-value
  />
</template>`},{default:o(()=>[s(L,{id:`slider-volume`,class:`slider_fit`,label:`볼륨`,"default-value":60,"show-value":``}),s(L,{id:`slider-brightness`,class:`slider_fit`,label:`밝기`,"default-value":40,"data-slider-suffix":`%`,"show-value":``})]),_:1}),s(E,{"heading-id":`size-heading`,title:`크기`,description:`slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-size-sm" size="sm" class="slider_fit" label="Small — slider_sm" :default-value="30" show-value />
  <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :default-value="50" show-value />
  <Slider id="slider-size-lg" size="lg" class="slider_fit" label="Large — slider_lg" :default-value="70" show-value />
</template>`},{default:o(()=>[s(L,{id:`slider-size-sm`,size:`sm`,class:`slider_fit`,label:`Small — slider_sm`,"default-value":30,"show-value":``}),s(L,{id:`slider-size-md`,class:`slider_fit`,label:`Medium — 기본`,"default-value":50,"show-value":``}),s(L,{id:`slider-size-lg`,size:`lg`,class:`slider_fit`,label:`Large — slider_lg`,"default-value":70,"show-value":``})]),_:1}),s(E,{"heading-id":`width-heading`,title:`너비`,description:`기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :default-value="45" show-value />
  <Slider
  id="slider-width-block"
  class="slider_block"
  style="max-width: 480px;"
  label="slider_block — 전체 너비"
  :default-value="65"
  show-value
  />
</template>`},{default:o(()=>[s(L,{id:`slider-width-fit`,class:`slider_fit`,label:`slider_fit — 최대 320px`,"default-value":45,"show-value":``}),s(L,{id:`slider-width-block`,class:`slider_block`,style:{"max-width":`480px`},label:`slider_block — 전체 너비`,"default-value":65,"show-value":``})]),_:1}),s(E,{"heading-id":`step-heading`,title:`간격 · 눈금`,description:`step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" label="step=10" :default-value="50" :step="10" show-value />
</template>`},{default:o(()=>[s(L,{class:`slider_fit`,label:`step=10`,"default-value":50,step:10,"show-value":``})]),_:1}),s(E,{"heading-id":`stepper-heading`,title:`스텝 버튼`,description:`모바일(768px 이하)에서 range 드래그가 어려운 경우 <code>slider_stepper</code>를 추가합니다. <code>slider_control</code> 안에 <code>slider_step-decrease</code> · <code>slider_input</code> · <code>slider_step-increase</code> 순으로 배치하며, 버튼 클릭 시 <code>step</code>만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 <code>slider_stepper_always</code>를 함께 사용합니다.`,stack:``,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider
  class="slider_fit"
  stepper
  label="볼륨 — slider_stepper"
  :default-value="60"
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
  :default-value="40"
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
  :default-value="30"
  show-value
  disabled
  />
</template>`},{default:o(()=>[s(L,{class:`slider_fit`,stepper:``,label:`볼륨 — slider_stepper`,"default-value":60,"show-value":``,"decrease-label":`볼륨 줄이기`,"increase-label":`볼륨 늘리기`,hint:`모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.`}),s(L,{class:`slider_fit`,stepper:``,"stepper-always":``,label:`밝기 — slider_stepper_always`,"default-value":40,step:5,"value-suffix":`%`,"show-value":``,"decrease-label":`밝기 줄이기`,"increase-label":`밝기 늘리기`,hint:`모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.`}),s(L,{class:`slider_fit`,stepper:``,label:`비활성`,"default-value":30,"show-value":``,disabled:``})]),_:1}),s(E,{"heading-id":`color-heading`,title:`색상`,description:`color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :default-value="60" show-value />
  <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :default-value="70" show-value />
  <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :default-value="40" show-value />
  <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :default-value="80" show-value />
</template>`},{default:o(()=>[s(L,{id:`slider-color-primary`,class:`color_primary slider_fit`,label:`Primary`,"default-value":60,"show-value":``}),s(L,{id:`slider-color-success`,class:`color_success slider_fit`,label:`Success`,"default-value":70,"show-value":``}),s(L,{id:`slider-color-danger`,class:`color_danger slider_fit`,label:`Danger`,"default-value":40,"show-value":``}),s(L,{id:`slider-color-warning`,class:`color_warning slider_fit`,label:`Warning`,"default-value":80,"show-value":``})]),_:1}),s(E,{"heading-id":`state-heading`,title:`상태`,description:`비활성·오류(is-error) 상태를 지원합니다.`,code:`<script setup>
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <Slider class="slider_fit" label="기본" :default-value="50" show-value />
  <Slider class="slider_fit" label="비활성" :default-value="30" disabled show-value />
</template>`},{default:o(()=>[s(L,{class:`slider_fit`,label:`기본`,"default-value":50,"show-value":``}),s(L,{class:`slider_fit`,label:`비활성`,"default-value":30,disabled:``,"show-value":``})]),_:1}),s(E,{"heading-id":`form-heading`,title:`폼 레이아웃`,description:`form_field · form_vertical · form_horizontal과 함께 사용합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Slider from '@/components/Slider.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-opacity">불투명도</label>
      <Slider id="slider-form-opacity" :default-value="85" data-slider-suffix="%" />
      <p class="form_field-hint">0~100% 사이 값</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
      <Slider
      id="slider-form-zoom"
      label="현재 값"
      :default-value="125"
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
      <Slider id="slider-form-horizontal" :default-value="3" :min="1" :max="10" />
      <p class="form_field-hint">1~10px</p>
    </div>
  </FormLayout>
</template>`},{default:o(()=>[s(k,{layout:`vertical`,fit:``},{default:o(()=>[c(`div`,J,[t[4]||=c(`label`,{class:`form_field-label`,for:`slider-form-opacity`},`불투명도`,-1),s(L,{id:`slider-form-opacity`,"default-value":85,"data-slider-suffix":`%`}),t[5]||=c(`p`,{class:`form_field-hint`},`0~100% 사이 값`,-1)]),c(`div`,Y,[t[6]||=c(`label`,{class:`form_field-label`,for:`slider-form-zoom`},`확대 비율`,-1),s(L,{id:`slider-form-zoom`,label:`현재 값`,"default-value":125,min:50,max:200,step:25,"data-slider-suffix":`%`,"show-value":``})])]),_:1}),s(k,{layout:`horizontal`,fit:``},{default:o(()=>[c(`div`,X,[t[7]||=c(`label`,{class:`form_field-label`,for:`slider-form-horizontal`},`선 굵기`,-1),s(L,{id:`slider-form-horizontal`,"default-value":3,min:1,max:10}),t[8]||=c(`p`,{class:`form_field-hint`},`1~10px`,-1)])]),_:1})]),_:1}),s(y,{"heading-id":`api-props-heading`,title:`API · Props`},{default:o(()=>[s(b,{columns:m(R),rows:m(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:o(()=>[s(b,{columns:m(B),rows:m(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-events-heading`,title:`API · Events`},{default:o(()=>[s(b,{columns:m(W),rows:m(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:o(()=>[s(b,{columns:m(H),rows:m(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:o(()=>[s(b,{columns:m(K),rows:m(q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Q as default,Z as docMeta};