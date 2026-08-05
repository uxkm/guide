import{A as e,B as t,G as n,L as r,U as i,Y as a,b as o,d as s,i as c,k as l,m as u,nt as d,p as f,st as p,u as m,wt as h,y as g}from"./CCnt5OSV.js";import{F as _,l as v,t as y,v as b}from"./DkmWXf_S.js";import{n as x,t as S}from"./D01l-9yr.js";import{t as C}from"./DD3RWXAt.js";import{n as w,t as T}from"./D6IbhUhQ.js";import{t as E}from"./Cuo-DXMr2.js";var D=[`aria-label`],O=[`name`,`value`,`checked`,`disabled`],k=[`name`,`value`,`checked`,`disabled`],A={class:`radio_label`},ee={key:0,class:`radio_label`},te={class:`radio_control`},j=[`name`,`value`,`checked`,`disabled`],M={key:1,class:`radio_label`},N=Object.assign({inheritAttrs:!1},{__name:`Radio`,props:{ripple:S,label:String,name:String,checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,value:String,labelEnd:Boolean,button:Boolean,ariaLabel:String},emits:[`update:checked`,`change`],setup(a,{emit:o}){let c=a,v=o,{rippleAttrs:y}=x(c,{defaultEnabled:!1}),S=m(()=>c.ripple===!1?{"data-ripple":`false`}:c.ripple===!0||L.value||c.button?{"data-ripple":`true`}:{}),C=n(),w=i(),T=d(null),E=d(null),N=m(()=>c.checked===void 0?c.defaultChecked:!!c.checked),P=_(`Radio`,{booleanProps:new Set([`checked`,`defaultChecked`,`disabled`,`labelEnd`,`button`,`ripple`]),selfClosing:!0});b(P,c,C,T,w);let F=m(()=>{let e=[`radio`];return c.labelEnd&&e.push(`radio_label-end`),c.button&&e.push(`radio_button`),w.class&&e.push(w.class),e}),I=m(()=>!!(c.label||C.default)),L=m(()=>!I.value),R=m(()=>[`radio_control`,w.class]),z=m(()=>{let{class:e,...t}=w;return t});function B(t){let n=t.currentTarget.checked;v(`update:checked`,n),v(`change`,t),c.checked!==void 0&&e(()=>{E.value&&(E.value.checked=!!c.checked)})}return(e,n)=>L.value?(r(),u(`label`,l({key:0,ref_key:`rootRef`,ref:T},S.value,{class:R.value,"aria-label":a.ariaLabel}),[s(`input`,l({ref_key:`inputRef`,ref:E,type:`radio`,class:`radio_input`,name:a.name,value:a.value,checked:N.value,disabled:a.disabled},z.value,{onChange:B}),null,16,O),n[0]||=s(`span`,{class:`radio_box`,"aria-hidden":`true`},null,-1)],16,D)):a.button?(r(),u(`label`,l({key:1,ref_key:`rootRef`,ref:T},S.value,{class:F.value}),[s(`input`,l({ref_key:`inputRef`,ref:E,type:`radio`,class:`radio_input`,name:a.name,value:a.value,checked:N.value,disabled:a.disabled},z.value,{onChange:B}),null,16,k),s(`span`,A,[t(e.$slots,`default`,{},()=>[g(h(a.label),1)])])],16)):(r(),u(`label`,l({key:2,ref_key:`rootRef`,ref:T},p(y),{class:F.value}),[a.labelEnd?(r(),u(`span`,ee,[t(e.$slots,`default`,{},()=>[g(h(a.label),1)])])):f(``,!0),s(`span`,te,[s(`input`,l({ref_key:`inputRef`,ref:E,type:`radio`,class:`radio_input`,name:a.name,value:a.value,checked:N.value,disabled:a.disabled},z.value,{onChange:B}),null,16,j),n[1]||=s(`span`,{class:`radio_box`,"aria-hidden":`true`},null,-1)]),a.labelEnd?f(``,!0):(r(),u(`span`,M,[t(e.$slots,`default`,{},()=>[g(h(a.label),1)])]))],16))}}),P=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`label`,type:`string`,default:`—`,description:`라벨 텍스트. default 슬롯으로 대체`},{name:`name`,type:`string`,default:`—`,description:`radio 그룹 name 속성`},{name:`value`,type:`string`,default:`—`,description:`radio value 속성`},{name:`checked`,type:`boolean`,default:`—`,description:`제어 선택 상태. v-model:checked 지원`},{name:`default-checked`,type:`boolean`,default:`false`,description:`비제어 초기 선택 상태`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`label-end`,type:`boolean`,default:`false`,description:`라벨을 라디오 앞에 배치`},{name:`button`,type:`boolean`,default:`false`,description:`버튼형 (radio_button)`},{name:`aria-label`,type:`string`,default:`—`,description:`라벨 없는 단독 라디오 시 필수`},w],I=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],L=[{name:`default`,description:`라벨 텍스트 (label prop 대체). radio_content · radio_hint 조합 가능`}],R=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],z=[{name:`update:checked`,description:`선택 상태 변경 시. v-model:checked에 사용`},{name:`change`,description:`네이티브 input change 이벤트`}],B=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],V=[{name:`radio`,description:`라디오 래퍼`},{name:`radio_control · radio_input · radio_box`,description:`입력·커스텀 원`},{name:`radio_label`,description:`라벨`},{name:`radio_label-end · radio_button`,description:`레이아웃 변형`},{name:`radio_group`,description:`fieldset 그룹`},{name:`radio_card · radio_card-clickable`,description:`카드형 — clickable은 data-ripple + JS 위임`},...T],H=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`--radio-size · --radio-size-sm · --radio-size-lg`,default:`var(--checkbox-size) · … · …`,description:`라디오 원 크기 (checkbox 토큰 참조)`},{name:`--radio-gap · --radio-gap-sm · --radio-gap-lg`,default:`var(--checkbox-gap) · … · …`,description:`라벨 간격`},{name:`--radio-font-size · --radio-line-height`,default:`var(--checkbox-font-size) · var(--checkbox-line-height)`,description:`라벨 타이포`},{name:`--radio-label-weight · --radio-hint-size`,default:`var(--checkbox-label-weight) · var(--checkbox-hint-size)`,description:`라벨·힌트`},{name:`--radio-control-offset`,default:`var(--checkbox-control-offset)`,description:`원 수직 정렬`},{name:`--radio-group-gap`,default:`var(--checkbox-group-gap)`,description:`그룹 간격`},{name:`--radio-button-padding-y · --radio-button-padding-x`,default:`var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)`,description:`버튼형 패딩`}],W={class:`radio_group radio_group_horizontal`},G={class:`radio_group radio_group_block`,style:{"max-width":`360px`,width:`100%`}},K={class:`form_field`},q={class:`radio_group`,"aria-labelledby":`radio-pay-label`},J={class:`radio_group radio_group_horizontal`},Y={class:`radio_group radio_group_horizontal`},X={class:`radio_group radio_group_block`,style:{"max-width":`360px`,width:`100%`}},Z={class:`radio_group`},Q={class:`radio_group radio_group_horizontal`},ne={class:`radio_group radio_group_horizontal`},re={class:`radio_group radio_group_horizontal`},ie={class:`radio_group`},ae={class:`card_deck card_deck-2`},oe={class:`radio_card`},se={class:`card card_compact card_shadow`},ce={class:`card_header`},le={class:`card_extra`},ue={class:`radio_card color_primary`},de={class:`card card_compact card_shadow`},fe={class:`card_header`},pe={class:`card_extra`},me={class:`radio_card`},he={class:`card card_compact card_shadow`},ge={class:`card_header`},_e={class:`card_extra`},ve={class:`radio_group`},ye={class:`card_deck card_deck-3`},be={class:`radio_card color_success`},xe={class:`card card_compact`},Se={class:`card_header`},Ce={class:`card_extra`},we={class:`radio_card color_success`},Te={class:`card card_compact`},Ee={class:`card_header`},De={class:`card_extra`},Oe={class:`radio_card`},ke={class:`card card_compact`},Ae={class:`card_header`},je={class:`card_extra`},Me={class:`radio_group`},Ne={class:`card_deck card_deck-2`},Pe={class:`radio_card radio_card-clickable`,"data-ripple":``},Fe={class:`card card_compact card_shadow`},Ie={class:`card_header`},Le={class:`card_extra`},Re={class:`radio_card radio_card-clickable color_primary`,"data-ripple":``},ze={class:`card card_compact card_shadow`},Be={class:`card_header`},Ve={class:`card_extra`},$={class:`radio_card radio_card-clickable`,"data-ripple":``},He={class:`card card_compact card_shadow`},Ue={class:`card_header`},We={class:`card_extra`},Ge={class:`form_field`},Ke={class:`radio_group`,"aria-labelledby":`radio-form-vertical-label`},qe={class:`form_field`},Je={class:`radio_group radio_group_horizontal`,"aria-labelledby":`radio-form-horizontal-label`},Ye={title:`Radio | HTML Components`,activeNav:`radio`,pageTitle:`Radio`},Xe={__name:`radio`,setup(e){return(e,t)=>(r(),u(c,null,[t[31]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Radio`),s(`p`,{class:`lead`},[g(`단일 선택을 위한 Radio 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, `),s(`strong`,null,`radio_block`),g(` · `),s(`strong`,null,`radio_group_block`),g(`으로 전체 너비를 사용합니다.`)])],-1),o(C,{"heading-id":`type-heading`,title:`유형`,description:`기본은 <code>span.radio_control</code> + <code>label.radio_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.radio_control</code>로 input을 암묵 연결합니다. <code>radio_label-end</code>는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-type-basic" default-checked label="기본 — radio" />
  <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-type-btn" default-checked value="a" label="버튼형" />
    <Radio button name="radio-type-btn" value="b" label="UI" />
    <Radio button name="radio-type-btn" value="c" label="UX" />
  </fieldset>
</template>`},{default:a(()=>[o(N,{name:`radio-type-basic`,"default-checked":``,label:`기본 — radio`}),o(N,{name:`radio-type-label-end`,"label-end":``,label:`레이블 뒤 — radio_label-end`}),s(`fieldset`,W,[o(N,{button:``,name:`radio-type-btn`,"default-checked":``,value:`a`,label:`버튼형`}),o(N,{button:``,name:`radio-type-btn`,value:`b`,label:`UI`}),o(N,{button:``,name:`radio-type-btn`,value:`c`,label:`UX`})])]),_:1}),o(C,{"heading-id":`label-end-heading`,title:`레이블 뒤`,description:`<code>radio_label-end</code>는 <code>radio_label</code> → <code>radio_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>radio_block</code> 또는 <code>radio_group_block</code>을 추가합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-label-end-pay" label-end default-checked label="신용카드" />
  <Radio name="radio-label-end-pay2" label-end>
    <span class="radio_content">
      <span class="radio_label">계좌이체</span>
      <span class="radio_hint">등록된 계좌로 결제합니다.</span>
    </span>
  </Radio>
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
    <Radio name="radio-label-end-ship" label-end default-checked value="standard" label="일반 배송" />
    <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
  </fieldset>
  <Radio class="radio_sm" name="radio-label-end-size" label-end default-checked label="Small — radio_sm" />
  <Radio class="radio_lg" name="radio-label-end-size2" label-end default-checked label="Large — radio_lg" />
</template>`},{default:a(()=>[o(N,{name:`radio-label-end-pay`,"label-end":``,"default-checked":``,label:`신용카드`}),o(N,{name:`radio-label-end-pay2`,"label-end":``},{default:a(()=>[...t[0]||=[s(`span`,{class:`radio_content`},[s(`span`,{class:`radio_label`},`계좌이체`),s(`span`,{class:`radio_hint`},`등록된 계좌로 결제합니다.`)],-1)]]),_:1}),s(`fieldset`,G,[t[1]||=s(`legend`,{class:`radio_group-legend`},`배송 방법 — radio_group_block`,-1),o(N,{name:`radio-label-end-ship`,"label-end":``,"default-checked":``,value:`standard`,label:`일반 배송`}),o(N,{name:`radio-label-end-ship`,"label-end":``,value:`express`,label:`빠른 배송`})]),o(N,{class:`radio_sm`,name:`radio-label-end-size`,"label-end":``,"default-checked":``,label:`Small — radio_sm`}),o(N,{class:`radio_lg`,name:`radio-label-end-size2`,"label-end":``,"default-checked":``,label:`Large — radio_lg`})]),_:1}),o(C,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다.`,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="radio-pay-label">결제 수단</span>
    <fieldset class="radio_group" aria-labelledby="radio-pay-label">
      <Radio name="radio-pay" default-checked value="card">
        <span class="radio_content">
          <span class="radio_label">신용카드</span>
          <span class="radio_hint">Visa · Mastercard · 국내 카드</span>
        </span>
      </Radio>
      <Radio name="radio-pay" value="bank">
        <span class="radio_content">
          <span class="radio_label">계좌이체</span>
          <span class="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </fieldset>
  </div>
</template>`},{default:a(()=>[s(`div`,K,[t[4]||=s(`span`,{class:`form_field-label`,id:`radio-pay-label`},`결제 수단`,-1),s(`fieldset`,q,[o(N,{name:`radio-pay`,"default-checked":``,value:`card`},{default:a(()=>[...t[2]||=[s(`span`,{class:`radio_content`},[s(`span`,{class:`radio_label`},`신용카드`),s(`span`,{class:`radio_hint`},`Visa · Mastercard · 국내 카드`)],-1)]]),_:1}),o(N,{name:`radio-pay`,value:`bank`},{default:a(()=>[...t[3]||=[s(`span`,{class:`radio_content`},[s(`span`,{class:`radio_label`},`계좌이체`),s(`span`,{class:`radio_hint`},`등록된 계좌로 결제합니다.`)],-1)]]),_:1})])])]),_:1}),o(C,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio name="radio-standalone" aria-label="항목 선택" />
    <Radio name="radio-standalone" default-checked aria-label="선택됨" />
    <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
  </div>
</template>`},{default:a(()=>[s(`div`,J,[o(N,{name:`radio-standalone`,"aria-label":`항목 선택`}),o(N,{name:`radio-standalone`,"default-checked":``,"aria-label":`선택됨`}),o(N,{name:`radio-standalone-disabled`,disabled:``,"aria-label":`비활성`})])]),_:1}),o(C,{"heading-id":`size-heading`,title:`크기`,description:`radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio class="radio_sm" name="radio-size" default-checked label="Small — radio_sm" />
    <Radio name="radio-size" label="Medium — 기본" />
    <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
  </div>
</template>`},{default:a(()=>[s(`div`,Y,[o(N,{class:`radio_sm`,name:`radio-size`,"default-checked":``,label:`Small — radio_sm`}),o(N,{name:`radio-size`,label:`Medium — 기본`}),o(N,{class:`radio_lg`,name:`radio-size`,label:`Large — radio_lg`})])]),_:1}),o(C,{"heading-id":`width-heading`,title:`너비`,description:`기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다.`,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-width-inline" default-checked label="기본 — 인라인 너비" />
  <Radio name="radio-width-block" class="radio_block" default-checked label="radio_block — 전체 너비" />
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">radio_group_block</legend>
    <Radio name="radio-width-g1" default-checked label="항목 1" />
    <Radio name="radio-width-g1" label="항목 2" />
  </fieldset>
</template>`},{default:a(()=>[o(N,{name:`radio-width-inline`,"default-checked":``,label:`기본 — 인라인 너비`}),o(N,{name:`radio-width-block`,class:`radio_block`,"default-checked":``,label:`radio_block — 전체 너비`}),s(`fieldset`,X,[t[5]||=s(`legend`,{class:`radio_group-legend`},`radio_group_block`,-1),o(N,{name:`radio-width-g1`,"default-checked":``,label:`항목 1`}),o(N,{name:`radio-width-g1`,label:`항목 2`})])]),_:1}),o(C,{"heading-id":`color-heading`,title:`색상`,description:`color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <Radio class="color_primary" name="radio-color-primary" default-checked label="Primary" />
  <Radio class="color_success" name="radio-color-success" default-checked label="Success" />
  <Radio class="color_danger" name="radio-color-danger" default-checked label="Danger" />
  <Radio class="color_warning" name="radio-color-warning" default-checked label="Warning" />
</template>`},{default:a(()=>[o(N,{class:`color_primary`,name:`radio-color-primary`,"default-checked":``,label:`Primary`}),o(N,{class:`color_success`,name:`radio-color-success`,"default-checked":``,label:`Success`}),o(N,{class:`color_danger`,name:`radio-color-danger`,"default-checked":``,label:`Danger`}),o(N,{class:`color_warning`,name:`radio-color-warning`,"default-checked":``,label:`Warning`})]),_:1}),o(C,{"heading-id":`state-heading`,title:`상태`,description:`선택·미선택·비활성·오류(is-error) 상태를 지원합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-state" label="미선택" />
  <Radio name="radio-state" default-checked label="선택됨" />
  <Radio name="radio-state-disabled" disabled label="비활성" />
  <Radio name="radio-state-disabled" default-checked disabled label="선택됨 (비활성)" />
</template>`},{default:a(()=>[o(N,{name:`radio-state`,label:`미선택`}),o(N,{name:`radio-state`,"default-checked":``,label:`선택됨`}),o(N,{name:`radio-state-disabled`,disabled:``,label:`비활성`}),o(N,{name:`radio-state-disabled`,"default-checked":``,disabled:``,label:`선택됨 (비활성)`})]),_:1}),o(C,{"heading-id":`group-heading`,title:`그룹`,description:`radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">배송 방법 (세로)</legend>
    <Radio name="radio-group-ship" default-checked value="standard" label="일반 배송" />
    <Radio name="radio-group-ship" value="express" label="빠른 배송" />
    <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <legend class="radio_group-legend">크기 (가로)</legend>
    <Radio button name="radio-group-size" default-checked value="s" label="S" />
    <Radio button name="radio-group-size" value="m" label="M" />
    <Radio button name="radio-group-size" value="l" label="L" />
  </fieldset>
</template>`},{default:a(()=>[s(`fieldset`,Z,[t[6]||=s(`legend`,{class:`radio_group-legend`},`배송 방법 (세로)`,-1),o(N,{name:`radio-group-ship`,"default-checked":``,value:`standard`,label:`일반 배송`}),o(N,{name:`radio-group-ship`,value:`express`,label:`빠른 배송`}),o(N,{name:`radio-group-ship`,value:`pickup`,label:`매장 픽업`})]),s(`fieldset`,Q,[t[7]||=s(`legend`,{class:`radio_group-legend`},`크기 (가로)`,-1),o(N,{button:``,name:`radio-group-size`,"default-checked":``,value:`s`,label:`S`}),o(N,{button:``,name:`radio-group-size`,value:`m`,label:`M`}),o(N,{button:``,name:`radio-group-size`,value:`l`,label:`L`})])]),_:1}),o(C,{"heading-id":`button-type-heading`,title:`버튼형`,description:`radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-btn-filter" default-checked value="all" label="전체" />
    <Radio button name="radio-btn-filter" value="active" label="진행 중" />
    <Radio button name="radio-btn-filter" value="done" label="완료" />
    <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button class="radio_sm color_success" name="radio-btn-size" default-checked value="sm" label="Small" />
    <Radio button class="color_success" name="radio-btn-size" default-checked value="md" label="Medium" />
    <Radio button class="radio_lg color_success" name="radio-btn-size" default-checked value="lg" label="Large" />
  </fieldset>
</template>`},{default:a(()=>[s(`fieldset`,ne,[o(N,{button:``,name:`radio-btn-filter`,"default-checked":``,value:`all`,label:`전체`}),o(N,{button:``,name:`radio-btn-filter`,value:`active`,label:`진행 중`}),o(N,{button:``,name:`radio-btn-filter`,value:`done`,label:`완료`}),o(N,{button:``,name:`radio-btn-filter`,disabled:``,value:`hold`,label:`보류 (비활성)`})]),s(`fieldset`,re,[o(N,{button:``,class:`radio_sm color_success`,name:`radio-btn-size`,"default-checked":``,value:`sm`,label:`Small`}),o(N,{button:``,class:`color_success`,name:`radio-btn-size`,"default-checked":``,value:`md`,label:`Medium`}),o(N,{button:``,class:`radio_lg color_success`,name:`radio-btn-size`,"default-checked":``,value:`lg`,label:`Large`})])]),_:1}),o(C,{"heading-id":`card-type-heading`,title:`카드형`,description:`<code>div.radio_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.radio_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.radio_card.radio_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다.`,stack:``,code:`<script setup>
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">요금제 선택</legend>
    <div class="card_deck card_deck-2">
      <div class="radio_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-basic" name="radio-plan" value="basic" default-checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
        </article>
      </div>
      <div class="radio_card color_primary">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
        </article>
      </div>
      <div class="radio_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">기본 권한 (가로)</legend>
    <div class="card_deck card_deck-3">
      <div class="radio_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-read-title">읽기</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-read" name="radio-role" value="read" default-checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-read-desc">조회 권한</div>
        </article>
      </div>
      <div class="radio_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-write-title">쓰기</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-write-desc">수정 권한</div>
        </article>
      </div>
      <div class="radio_card">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-admin-title">관리</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-admin-desc">전체 관리 권한</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>
    <div class="card_deck card_deck-2">
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" default-checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},{default:a(()=>[s(`fieldset`,ie,[t[14]||=s(`legend`,{class:`radio_group-legend`},`요금제 선택`,-1),s(`div`,ae,[s(`div`,oe,[s(`article`,se,[s(`div`,ce,[t[8]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-basic-title`},`Basic`),s(`p`,{class:`card_subtitle`},`월 9,000원`)],-1),s(`div`,le,[o(N,{id:`radio-plan-basic`,name:`radio-plan`,value:`basic`,"default-checked":``,"aria-labelledby":`radio-plan-basic-title radio-plan-basic-desc`})])]),t[9]||=s(`div`,{class:`card_body`,id:`radio-plan-basic-desc`},`개인 프로젝트에 적합합니다.`,-1)])]),s(`div`,ue,[s(`article`,de,[s(`div`,fe,[t[10]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-pro-title`},`Pro`),s(`p`,{class:`card_subtitle`},`월 29,000원`)],-1),s(`div`,pe,[o(N,{id:`radio-plan-pro`,name:`radio-plan`,value:`pro`,"aria-labelledby":`radio-plan-pro-title radio-plan-pro-desc`})])]),t[11]||=s(`div`,{class:`card_body`,id:`radio-plan-pro-desc`},`팀 협업과 고급 기능을 제공합니다.`,-1)])]),s(`div`,me,[s(`article`,he,[s(`div`,ge,[t[12]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-enterprise-title`},`Enterprise`),s(`p`,{class:`card_subtitle`},`별도 문의`)],-1),s(`div`,_e,[o(N,{id:`radio-plan-enterprise`,name:`radio-plan`,value:`enterprise`,disabled:``,"aria-labelledby":`radio-plan-enterprise-title radio-plan-enterprise-desc`})])]),t[13]||=s(`div`,{class:`card_body`,id:`radio-plan-enterprise-desc`},`대규모 조직용 맞춤 플랜입니다. (비활성)`,-1)])])])]),s(`fieldset`,ve,[t[21]||=s(`legend`,{class:`radio_group-legend`},`기본 권한 (가로)`,-1),s(`div`,ye,[s(`div`,be,[s(`article`,xe,[s(`div`,Se,[t[15]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-role-read-title`},`읽기`)],-1),s(`div`,Ce,[o(N,{id:`radio-role-read`,name:`radio-role`,value:`read`,"default-checked":``,"aria-labelledby":`radio-role-read-title radio-role-read-desc`})])]),t[16]||=s(`div`,{class:`card_body`,id:`radio-role-read-desc`},`조회 권한`,-1)])]),s(`div`,we,[s(`article`,Te,[s(`div`,Ee,[t[17]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-role-write-title`},`쓰기`)],-1),s(`div`,De,[o(N,{id:`radio-role-write`,name:`radio-role`,value:`write`,"aria-labelledby":`radio-role-write-title radio-role-write-desc`})])]),t[18]||=s(`div`,{class:`card_body`,id:`radio-role-write-desc`},`수정 권한`,-1)])]),s(`div`,Oe,[s(`article`,ke,[s(`div`,Ae,[t[19]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-role-admin-title`},`관리`)],-1),s(`div`,je,[o(N,{id:`radio-role-admin`,name:`radio-role`,value:`admin`,"aria-labelledby":`radio-role-admin-title radio-role-admin-desc`})])]),t[20]||=s(`div`,{class:`card_body`,id:`radio-role-admin-desc`},`전체 관리 권한`,-1)])])])]),s(`fieldset`,Me,[t[28]||=s(`legend`,{class:`radio_group-legend`},`요금제 선택 — 카드 전체 클릭 (radio_card-clickable)`,-1),s(`div`,Ne,[s(`div`,Pe,[s(`article`,Fe,[s(`div`,Ie,[t[22]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-full-basic-title`},`Basic`),s(`p`,{class:`card_subtitle`},`월 9,000원`)],-1),s(`div`,Le,[o(N,{id:`radio-plan-full-basic`,name:`radio-plan-clickable`,value:`basic`,"default-checked":``,"aria-labelledby":`radio-plan-full-basic-title radio-plan-full-basic-desc`})])]),t[23]||=s(`div`,{class:`card_body`,id:`radio-plan-full-basic-desc`},`카드 어디를 눌러도 선택됩니다.`,-1)])]),s(`div`,Re,[s(`article`,ze,[s(`div`,Be,[t[24]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-full-pro-title`},`Pro`),s(`p`,{class:`card_subtitle`},`월 29,000원`)],-1),s(`div`,Ve,[o(N,{id:`radio-plan-full-pro`,name:`radio-plan-clickable`,value:`pro`,"aria-labelledby":`radio-plan-full-pro-title radio-plan-full-pro-desc`})])]),t[25]||=s(`div`,{class:`card_body`,id:`radio-plan-full-pro-desc`},`제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.`,-1)])]),s(`div`,$,[s(`article`,He,[s(`div`,Ue,[t[26]||=s(`div`,{class:`card_header-main`},[s(`h3`,{class:`card_title`,id:`radio-plan-full-enterprise-title`},`Enterprise`),s(`p`,{class:`card_subtitle`},`별도 문의`)],-1),s(`div`,We,[o(N,{id:`radio-plan-full-enterprise`,name:`radio-plan-clickable`,value:`enterprise`,disabled:``,"aria-labelledby":`radio-plan-full-enterprise-title radio-plan-full-enterprise-desc`})])]),t[27]||=s(`div`,{class:`card_body`,id:`radio-plan-full-enterprise-desc`},`대규모 조직용 맞춤 플랜입니다. (비활성)`,-1)])])])])]),_:1}),o(C,{"heading-id":`form-heading`,title:`폼 레이아웃`,description:`form_vertical · form_horizontal과 함께 사용합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Radio from '@/components/Radio.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
      <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
        <Radio name="radio-form-channel" default-checked value="email" label="이메일" />
        <Radio name="radio-form-channel" value="sms" label="SMS" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
      <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
        <Radio button name="radio-form-role" default-checked value="viewer" label="뷰어" />
        <Radio button name="radio-form-role" value="editor" label="편집자" />
      </fieldset>
    </div>
  </FormLayout>
</template>`},{default:a(()=>[o(E,{layout:`vertical`,fit:``},{default:a(()=>[s(`div`,Ge,[t[29]||=s(`span`,{class:`form_field-label`,id:`radio-form-vertical-label`},`수신 채널`,-1),s(`fieldset`,Ke,[o(N,{name:`radio-form-channel`,"default-checked":``,value:`email`,label:`이메일`}),o(N,{name:`radio-form-channel`,value:`sms`,label:`SMS`})])])]),_:1}),o(E,{layout:`horizontal`,fit:``},{default:a(()=>[s(`div`,qe,[t[30]||=s(`span`,{class:`form_field-label`,id:`radio-form-horizontal-label`},`역할`,-1),s(`fieldset`,Je,[o(N,{button:``,name:`radio-form-role`,"default-checked":``,value:`viewer`,label:`뷰어`}),o(N,{button:``,name:`radio-form-role`,value:`editor`,label:`편집자`})])])]),_:1})]),_:1}),o(v,{"heading-id":`api-props-heading`,title:`API · Props`},{default:a(()=>[o(y,{columns:p(P),rows:p(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:a(()=>[o(y,{columns:p(I),rows:p(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-events-heading`,title:`API · Events`},{default:a(()=>[o(y,{columns:p(R),rows:p(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(y,{columns:p(B),rows:p(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(y,{columns:p(H),rows:p(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Xe as default,Ye as docMeta};