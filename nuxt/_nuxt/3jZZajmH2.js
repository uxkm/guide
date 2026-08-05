import{A as e,B as t,F as n,G as r,K as i,L as a,U as o,W as s,Y as c,b as l,d as u,i as d,k as f,m as p,nt as m,p as h,st as g,u as _,wt as v,y}from"./CCnt5OSV.js";import{F as b,l as x,t as S,v as C}from"./DkmWXf_S.js";import{n as w,t as T}from"./D01l-9yr.js";import{t as E}from"./DD3RWXAt.js";import{n as D,t as O}from"./D6IbhUhQ.js";import{t as k}from"./Cuo-DXMr2.js";var A=[`aria-label`],j=[`id`,`checked`,`disabled`],M=[`id`,`checked`,`disabled`],N={class:`checkbox_label`},P=[`for`],F={class:`checkbox_control`},ee=[`id`,`checked`,`disabled`],te=[`for`],I=Object.assign({inheritAttrs:!1},{__name:`Checkbox`,props:{ripple:T,label:String,checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,indeterminate:Boolean,labelEnd:Boolean,button:Boolean,ariaLabel:String},emits:[`update:checked`,`change`],setup(c,{emit:l}){let d=c,x=l,{rippleAttrs:S}=w(d,{defaultEnabled:!1}),T=_(()=>d.ripple===!1?{"data-ripple":`false`}:d.ripple===!0||U.value||d.button?{"data-ripple":`true`}:{}),E=r(),D=o(),O=m(null),k=m(null),I=s(),L=_(()=>D.id??I),R=m(!!(d.checked??d.defaultChecked)),z=_(()=>d.checked===void 0?R.value:!!d.checked),B=b(`Checkbox`,{booleanProps:new Set([`checked`,`defaultChecked`,`disabled`,`indeterminate`,`labelEnd`,`button`,`ripple`]),selfClosing:!0});C(B,d,E,O,D);let V=_(()=>{let e=[`checkbox`];return d.labelEnd&&e.push(`checkbox_label-end`),d.button&&e.push(`checkbox_button`),D.class&&e.push(D.class),e}),H=_(()=>!!(d.label||E.default)),U=_(()=>!H.value),W=_(()=>[`checkbox_control`,D.class]),G=_(()=>{let{class:e,id:t,...n}=D;return n});i(()=>d.checked,e=>{e!==void 0&&(R.value=!!e)});function K(){k.value&&(k.value.indeterminate=d.indeterminate)}n(K),i(()=>d.indeterminate,K);function q(t){let n=t.currentTarget.checked;d.checked===void 0?R.value=n:e(()=>{k.value&&(k.value.checked=!!d.checked)}),x(`update:checked`,n),x(`change`,t),e(K)}return(e,n)=>U.value?(a(),p(`label`,f({key:0,ref_key:`rootRef`,ref:O},T.value,{class:W.value,"aria-label":c.ariaLabel}),[u(`input`,f({id:g(D).id,ref_key:`inputRef`,ref:k,type:`checkbox`,class:`checkbox_input`,checked:z.value,disabled:c.disabled},G.value,{onChange:q}),null,16,j),n[0]||=u(`span`,{class:`checkbox_box`,"aria-hidden":`true`},null,-1)],16,A)):c.button?(a(),p(`label`,f({key:1,ref_key:`rootRef`,ref:O},T.value,{class:V.value}),[u(`input`,f({id:L.value,ref_key:`inputRef`,ref:k,type:`checkbox`,class:`checkbox_input`,checked:z.value,disabled:c.disabled},G.value,{onChange:q}),null,16,M),u(`span`,N,[t(e.$slots,`default`,{},()=>[y(v(c.label),1)])])],16)):(a(),p(`div`,f({key:2,ref_key:`rootRef`,ref:O},g(S),{class:V.value}),[c.labelEnd?(a(),p(`label`,{key:0,class:`checkbox_label`,for:L.value},[t(e.$slots,`default`,{},()=>[y(v(c.label),1)])],8,P)):h(``,!0),u(`span`,F,[u(`input`,f({id:L.value,ref_key:`inputRef`,ref:k,type:`checkbox`,class:`checkbox_input`,checked:z.value,disabled:c.disabled},G.value,{onChange:q}),null,16,ee),n[1]||=u(`span`,{class:`checkbox_box`,"aria-hidden":`true`},null,-1)]),c.labelEnd?h(``,!0):(a(),p(`label`,{key:1,class:`checkbox_label`,for:L.value},[t(e.$slots,`default`,{},()=>[y(v(c.label),1)])],8,te))],16))}}),L=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],R=[{name:`label`,type:`string`,default:`—`,description:`라벨 텍스트. default 슬롯으로 대체`},{name:`checked`,type:`boolean`,default:`—`,description:`제어 체크 상태. v-model:checked 지원`},{name:`default-checked`,type:`boolean`,default:`false`,description:`비제어 초기 체크 상태`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`indeterminate`,type:`boolean`,default:`false`,description:`부분 선택 (전체 선택 등)`},{name:`label-end`,type:`boolean`,default:`false`,description:`라벨을 체크박스 앞에 배치`},{name:`button`,type:`boolean`,default:`false`,description:`버튼형 토글 (checkbox_button)`},{name:`aria-label`,type:`string`,default:`—`,description:`라벨 없는 단독 체크박스 시 필수`},D],z=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],B=[{name:`default`,description:`라벨 텍스트 (label prop 대체). checkbox_content · checkbox_hint 조합 가능`}],V=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],H=[{name:`update:checked`,description:`체크 상태 변경 시. v-model:checked에 사용`},{name:`change`,description:`네이티브 input change 이벤트`}],U=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],W=[{name:`checkbox`,description:`체크박스 래퍼`},{name:`checkbox_control · checkbox_input · checkbox_box`,description:`입력·커스텀 박스`},{name:`checkbox_label`,description:`라벨`},{name:`checkbox_label-end · checkbox_button`,description:`레이아웃 변형`},{name:`checkbox_group`,description:`여러 체크박스 묶음`},{name:`checkbox_card · checkbox_card-clickable`,description:`카드형 — clickable은 data-ripple + JS 위임`},{name:`is-checked · is-disabled`,description:`상태 (CSS·JS 토글)`},...O],G=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],K=[{name:`--checkbox-size · --checkbox-size-sm · --checkbox-size-lg`,default:`1rem · 0.875rem · 1.125rem`,description:`체크박스 박스 크기`},{name:`--checkbox-border-width · --checkbox-radius`,default:`1px · 4px`,description:`테두리·모서리`},{name:`--checkbox-gap · --checkbox-gap-sm · --checkbox-gap-lg`,default:`var(--space-sm) · 0.375rem · 0.625rem`,description:`라벨 간격`},{name:`--checkbox-font-size · --checkbox-line-height`,default:`var(--text-size-base) · 1.5`,description:`라벨 타이포(md)`},{name:`--checkbox-label-weight`,default:`400`,description:`라벨 두께`},{name:`--checkbox-hint-size`,default:`var(--text-size-sm)`,description:`힌트 텍스트`},{name:`--checkbox-control-offset`,default:`0.125rem`,description:`박스 수직 정렬`},{name:`--checkbox-group-gap`,default:`var(--space-sm)`,description:`그룹 간격`},{name:`--checkbox-button-padding-y · --checkbox-button-padding-x`,default:`0.35rem · 0.75rem`,description:`버튼형 패딩`}],q={class:`checkbox_group checkbox_group_horizontal`},J={class:`checkbox_card`,style:{"max-width":`360px`}},Y={class:`card card_compact`},X={class:`card_header`},Z={class:`card_extra`},Q={class:`checkbox_group checkbox_group_block`,style:{"max-width":`360px`,width:`100%`}},ne={class:`form_field`},re={class:`checkbox_group`,"aria-labelledby":`checkbox-notify-label`},ie={class:`checkbox_group checkbox_group_block`,style:{"max-width":`360px`,width:`100%`}},ae={class:`checkbox_group`},oe={class:`checkbox_group checkbox_group_horizontal`},se={class:`checkbox_group checkbox_group_horizontal`},ce={class:`checkbox_group checkbox_group_horizontal`},le={class:`checkbox_group`},ue={class:`card_deck card_deck-2`},de={class:`checkbox_card`},fe={class:`card card_compact card_shadow`},pe={class:`card_header`},me={class:`card_extra`},he={class:`checkbox_card color_primary`},ge={class:`card card_compact card_shadow`},_e={class:`card_header`},ve={class:`card_extra`},ye={class:`checkbox_card`},be={class:`card card_compact card_shadow`},xe={class:`card_header`},Se={class:`card_extra`},Ce={class:`checkbox_group`},we={class:`card_deck card_deck-3`},Te={class:`checkbox_card color_success`},Ee={class:`card card_compact`},De={class:`card_header`},Oe={class:`card_extra`},ke={class:`checkbox_card color_success`},Ae={class:`card card_compact`},je={class:`card_header`},Me={class:`card_extra`},Ne={class:`checkbox_card`},Pe={class:`card card_compact`},Fe={class:`card_header`},Ie={class:`card_extra`},Le={class:`checkbox_group`},Re={class:`card_deck card_deck-2`},ze={class:`checkbox_card checkbox_card-clickable`,"data-ripple":``},Be={class:`card card_compact card_shadow`},Ve={class:`card_header`},$={class:`card_extra`},He={class:`checkbox_card checkbox_card-clickable color_primary`,"data-ripple":``},Ue={class:`card card_compact card_shadow`},We={class:`card_header`},Ge={class:`card_extra`},Ke={class:`checkbox_card checkbox_card-clickable`,"data-ripple":``},qe={class:`card card_compact card_shadow`},Je={class:`card_header`},Ye={class:`card_extra`},Xe={class:`form_field`},Ze={class:`checkbox_group`,"aria-labelledby":`checkbox-form-vertical-label`},Qe={class:`form_field`},$e={class:`checkbox_group checkbox_group_horizontal`,"aria-labelledby":`checkbox-form-horizontal-label`},et={title:`Checkbox | HTML Components`,activeNav:`checkbox`,pageTitle:`Checkbox`},tt={__name:`checkbox`,setup(e){return(e,t)=>(a(),p(d,null,[t[33]||=u(`div`,{class:`page_intro`},[u(`h1`,null,`Checkbox`),u(`p`,{class:`lead`},[y(`다중 선택을 위한 Checkbox 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, `),u(`strong`,null,`checkbox_block`),y(` · `),u(`strong`,null,`checkbox_group_block`),y(`으로 전체 너비를 사용합니다.`)])],-1),l(E,{"heading-id":`type-heading`,title:`유형`,description:`기본은 <code>span.checkbox_control</code> + <code>label.checkbox_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. <code>checkbox_label-end</code>는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox default-checked label="기본 — checkbox" />
  <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button default-checked label="버튼형" />
    <Checkbox button label="UI" />
    <Checkbox button label="UX" />
  </fieldset>
  <div class="checkbox_card" style="max-width: 360px;">
    <article class="card card_compact">
      <div class="card_header">
        <div class="card_header-main">
          <h3 class="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
        </div>
        <div class="card_extra">
          <Checkbox id="checkbox-type-card" default-checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
        </div>
      </div>
      <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
    </article>
  </div>
</template>`},{default:c(()=>[l(I,{"default-checked":``,label:`기본 — checkbox`}),l(I,{"label-end":``,label:`레이블 뒤 — checkbox_label-end`}),u(`fieldset`,q,[l(I,{button:``,"default-checked":``,label:`버튼형`}),l(I,{button:``,label:`UI`}),l(I,{button:``,label:`UX`})]),u(`div`,J,[u(`article`,Y,[u(`div`,X,[t[0]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-type-card-title`},`카드형 — checkbox_card`)],-1),u(`div`,Z,[l(I,{id:`checkbox-type-card`,"default-checked":``,"aria-labelledby":`checkbox-type-card-title checkbox-type-card-desc`})])]),t[1]||=u(`div`,{class:`card_body`,id:`checkbox-type-card-desc`},`card 컴포넌트와 조합해 제목·설명을 표시합니다.`,-1)])])]),_:1}),l(E,{"heading-id":`label-end-heading`,title:`레이블 뒤`,description:`<code>checkbox_label-end</code>는 <code>checkbox_label</code> → <code>checkbox_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>checkbox_block</code> 또는 <code>checkbox_group_block</code>을 추가합니다.`,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox label-end default-checked label="푸시 알림 받기" />
  <Checkbox label-end>
    <span class="checkbox_content">
      <span class="checkbox_label">마케팅 정보 수신</span>
      <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Checkbox>
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
    <Checkbox label-end default-checked label="이메일 알림" />
    <Checkbox label-end default-checked label="푸시 알림" />
    <Checkbox label-end label="SMS 알림" />
  </fieldset>
  <Checkbox class="checkbox_sm" label-end default-checked label="Small — checkbox_sm" />
  <Checkbox class="checkbox_lg" label-end default-checked label="Large — checkbox_lg" />
</template>`},{default:c(()=>[l(I,{"label-end":``,"default-checked":``,label:`푸시 알림 받기`}),l(I,{"label-end":``},{default:c(()=>[...t[2]||=[u(`span`,{class:`checkbox_content`},[u(`span`,{class:`checkbox_label`},`마케팅 정보 수신`),u(`span`,{class:`checkbox_hint`},`이벤트·할인 소식을 이메일로 받습니다.`)],-1)]]),_:1}),u(`fieldset`,Q,[t[3]||=u(`legend`,{class:`checkbox_group-legend`},`알림 설정 — checkbox_group_block`,-1),l(I,{"label-end":``,"default-checked":``,label:`이메일 알림`}),l(I,{"label-end":``,"default-checked":``,label:`푸시 알림`}),l(I,{"label-end":``,label:`SMS 알림`})]),l(I,{class:`checkbox_sm`,"label-end":``,"default-checked":``,label:`Small — checkbox_sm`}),l(I,{class:`checkbox_lg`,"label-end":``,"default-checked":``,label:`Large — checkbox_lg`})]),_:1}),l(E,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다.`,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
    <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
      <Checkbox default-checked>
        <span class="checkbox_content">
          <span class="checkbox_label">이메일 알림</span>
          <span class="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
        </span>
      </Checkbox>
      <Checkbox>
        <span class="checkbox_content">
          <span class="checkbox_label">푸시 알림</span>
          <span class="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
        </span>
      </Checkbox>
    </fieldset>
  </div>
</template>`},{default:c(()=>[u(`div`,ne,[t[6]||=u(`span`,{class:`form_field-label`,id:`checkbox-notify-label`},`알림 설정`,-1),u(`fieldset`,re,[l(I,{"default-checked":``},{default:c(()=>[...t[4]||=[u(`span`,{class:`checkbox_content`},[u(`span`,{class:`checkbox_label`},`이메일 알림`),u(`span`,{class:`checkbox_hint`},`중요 공지와 계정 관련 메일을 받습니다.`)],-1)]]),_:1}),l(I,null,{default:c(()=>[...t[5]||=[u(`span`,{class:`checkbox_content`},[u(`span`,{class:`checkbox_label`},`푸시 알림`),u(`span`,{class:`checkbox_hint`},`모바일·브라우저 푸시를 허용합니다.`)],-1)]]),_:1})])])]),_:1}),l(E,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox aria-label="항목 선택" />
  <Checkbox default-checked aria-label="선택됨" />
  <Checkbox disabled aria-label="비활성" />
</template>`},{default:c(()=>[l(I,{"aria-label":`항목 선택`}),l(I,{"default-checked":``,"aria-label":`선택됨`}),l(I,{disabled:``,"aria-label":`비활성`})]),_:1}),l(E,{"heading-id":`size-heading`,title:`크기`,description:`checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox class="checkbox_sm" default-checked label="Small — checkbox_sm" />
  <Checkbox default-checked label="Medium — 기본" />
  <Checkbox class="checkbox_lg" default-checked label="Large — checkbox_lg" />
</template>`},{default:c(()=>[l(I,{class:`checkbox_sm`,"default-checked":``,label:`Small — checkbox_sm`}),l(I,{"default-checked":``,label:`Medium — 기본`}),l(I,{class:`checkbox_lg`,"default-checked":``,label:`Large — checkbox_lg`})]),_:1}),l(E,{"heading-id":`width-heading`,title:`너비`,description:`기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다.`,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox default-checked label="기본 — 인라인 너비" />
  <Checkbox class="checkbox_block" default-checked label="checkbox_block — 전체 너비" />
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">checkbox_group_block</legend>
    <Checkbox default-checked label="항목 1" />
    <Checkbox label="항목 2" />
  </fieldset>
</template>`},{default:c(()=>[l(I,{"default-checked":``,label:`기본 — 인라인 너비`}),l(I,{class:`checkbox_block`,"default-checked":``,label:`checkbox_block — 전체 너비`}),u(`fieldset`,ie,[t[7]||=u(`legend`,{class:`checkbox_group-legend`},`checkbox_group_block`,-1),l(I,{"default-checked":``,label:`항목 1`}),l(I,{label:`항목 2`})])]),_:1}),l(E,{"heading-id":`color-heading`,title:`색상`,description:`color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox class="color_primary" default-checked label="Primary" />
  <Checkbox class="color_success" default-checked label="Success" />
  <Checkbox class="color_danger" default-checked label="Danger" />
  <Checkbox class="color_warning" default-checked label="Warning" />
</template>`},{default:c(()=>[l(I,{class:`color_primary`,"default-checked":``,label:`Primary`}),l(I,{class:`color_success`,"default-checked":``,label:`Success`}),l(I,{class:`color_danger`,"default-checked":``,label:`Danger`}),l(I,{class:`color_warning`,"default-checked":``,label:`Warning`})]),_:1}),l(E,{"heading-id":`state-heading`,title:`상태`,description:`선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox label="미선택" />
  <Checkbox default-checked label="선택됨" />
  <Checkbox default-checked indeterminate label="불확정" />
  <Checkbox disabled label="비활성" />
  <Checkbox default-checked disabled label="선택됨 (비활성)" />
</template>`},{default:c(()=>[l(I,{label:`미선택`}),l(I,{"default-checked":``,label:`선택됨`}),l(I,{"default-checked":``,indeterminate:``,label:`불확정`}),l(I,{disabled:``,label:`비활성`}),l(I,{"default-checked":``,disabled:``,label:`선택됨 (비활성)`})]),_:1}),l(E,{"heading-id":`group-heading`,title:`그룹`,description:`checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
    <Checkbox default-checked label="디자인" />
    <Checkbox label="개발" />
    <Checkbox label="기획" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <legend class="checkbox_group-legend">언어 (가로)</legend>
    <Checkbox button default-checked label="한국어" />
    <Checkbox button default-checked label="English" />
    <Checkbox button label="日本語" />
  </fieldset>
</template>`},{default:c(()=>[u(`fieldset`,ae,[t[8]||=u(`legend`,{class:`checkbox_group-legend`},`관심 분야 (세로)`,-1),l(I,{"default-checked":``,label:`디자인`}),l(I,{label:`개발`}),l(I,{label:`기획`})]),u(`fieldset`,oe,[t[9]||=u(`legend`,{class:`checkbox_group-legend`},`언어 (가로)`,-1),l(I,{button:``,"default-checked":``,label:`한국어`}),l(I,{button:``,"default-checked":``,label:`English`}),l(I,{button:``,label:`日本語`})])]),_:1}),l(E,{"heading-id":`button-type-heading`,title:`버튼형`,description:`checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button default-checked label="전체" />
    <Checkbox button label="진행 중" />
    <Checkbox button label="완료" />
    <Checkbox button disabled label="보류 (비활성)" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button class="checkbox_sm color_success" default-checked label="Small" />
    <Checkbox button class="color_success" default-checked label="Medium" />
    <Checkbox button class="checkbox_lg color_success" default-checked label="Large" />
  </fieldset>
</template>`},{default:c(()=>[u(`fieldset`,se,[l(I,{button:``,"default-checked":``,label:`전체`}),l(I,{button:``,label:`진행 중`}),l(I,{button:``,label:`완료`}),l(I,{button:``,disabled:``,label:`보류 (비활성)`})]),u(`fieldset`,ce,[l(I,{button:``,class:`checkbox_sm color_success`,"default-checked":``,label:`Small`}),l(I,{button:``,class:`color_success`,"default-checked":``,label:`Medium`}),l(I,{button:``,class:`checkbox_lg color_success`,"default-checked":``,label:`Large`})])]),_:1}),l(E,{"heading-id":`card-type-heading`,title:`카드형`,description:`<code>div.checkbox_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.checkbox_card.checkbox_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">요금제 선택 (다중)</legend>
    <div class="card_deck card_deck-2">
      <div class="checkbox_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-basic" name="plan" value="basic" default-checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
        </article>
      </div>
      <div class="checkbox_card color_primary">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
        </article>
      </div>
      <div class="checkbox_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">권한 (가로)</legend>
    <div class="card_deck card_deck-3">
      <div class="checkbox_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-read-title">읽기</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-read" default-checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-read-desc">조회 권한</div>
        </article>
      </div>
      <div class="checkbox_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-write-title">쓰기</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-write" default-checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-write-desc">수정 권한</div>
        </article>
      </div>
      <div class="checkbox_card">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-delete-title">삭제</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-delete-desc">삭제 권한</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>
    <div class="card_deck card_deck-2">
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" default-checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},{default:c(()=>[u(`fieldset`,le,[t[16]||=u(`legend`,{class:`checkbox_group-legend`},`요금제 선택 (다중)`,-1),u(`div`,ue,[u(`div`,de,[u(`article`,fe,[u(`div`,pe,[t[10]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-basic-title`},`Basic`),u(`p`,{class:`card_subtitle`},`월 9,000원`)],-1),u(`div`,me,[l(I,{id:`checkbox-plan-basic`,name:`plan`,value:`basic`,"default-checked":``,"aria-labelledby":`checkbox-plan-basic-title checkbox-plan-basic-desc`})])]),t[11]||=u(`div`,{class:`card_body`,id:`checkbox-plan-basic-desc`},`개인 프로젝트에 적합합니다.`,-1)])]),u(`div`,he,[u(`article`,ge,[u(`div`,_e,[t[12]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-pro-title`},`Pro`),u(`p`,{class:`card_subtitle`},`월 29,000원`)],-1),u(`div`,ve,[l(I,{id:`checkbox-plan-pro`,name:`plan`,value:`pro`,"aria-labelledby":`checkbox-plan-pro-title checkbox-plan-pro-desc`})])]),t[13]||=u(`div`,{class:`card_body`,id:`checkbox-plan-pro-desc`},`팀 협업과 고급 기능을 제공합니다.`,-1)])]),u(`div`,ye,[u(`article`,be,[u(`div`,xe,[t[14]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-enterprise-title`},`Enterprise`),u(`p`,{class:`card_subtitle`},`별도 문의`)],-1),u(`div`,Se,[l(I,{id:`checkbox-plan-enterprise`,name:`plan`,value:`enterprise`,disabled:``,"aria-labelledby":`checkbox-plan-enterprise-title checkbox-plan-enterprise-desc`})])]),t[15]||=u(`div`,{class:`card_body`,id:`checkbox-plan-enterprise-desc`},`대규모 조직용 맞춤 플랜입니다. (비활성)`,-1)])])])]),u(`fieldset`,Ce,[t[23]||=u(`legend`,{class:`checkbox_group-legend`},`권한 (가로)`,-1),u(`div`,we,[u(`div`,Te,[u(`article`,Ee,[u(`div`,De,[t[17]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-perm-read-title`},`읽기`)],-1),u(`div`,Oe,[l(I,{id:`checkbox-perm-read`,"default-checked":``,"aria-labelledby":`checkbox-perm-read-title checkbox-perm-read-desc`})])]),t[18]||=u(`div`,{class:`card_body`,id:`checkbox-perm-read-desc`},`조회 권한`,-1)])]),u(`div`,ke,[u(`article`,Ae,[u(`div`,je,[t[19]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-perm-write-title`},`쓰기`)],-1),u(`div`,Me,[l(I,{id:`checkbox-perm-write`,"default-checked":``,"aria-labelledby":`checkbox-perm-write-title checkbox-perm-write-desc`})])]),t[20]||=u(`div`,{class:`card_body`,id:`checkbox-perm-write-desc`},`수정 권한`,-1)])]),u(`div`,Ne,[u(`article`,Pe,[u(`div`,Fe,[t[21]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-perm-delete-title`},`삭제`)],-1),u(`div`,Ie,[l(I,{id:`checkbox-perm-delete`,"aria-labelledby":`checkbox-perm-delete-title checkbox-perm-delete-desc`})])]),t[22]||=u(`div`,{class:`card_body`,id:`checkbox-perm-delete-desc`},`삭제 권한`,-1)])])])]),u(`fieldset`,Le,[t[30]||=u(`legend`,{class:`checkbox_group-legend`},`요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)`,-1),u(`div`,Re,[u(`div`,ze,[u(`article`,Be,[u(`div`,Ve,[t[24]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-full-basic-title`},`Basic`),u(`p`,{class:`card_subtitle`},`월 9,000원`)],-1),u(`div`,$,[l(I,{id:`checkbox-plan-full-basic`,name:`plan-clickable`,value:`basic`,"default-checked":``,"aria-labelledby":`checkbox-plan-full-basic-title checkbox-plan-full-basic-desc`})])]),t[25]||=u(`div`,{class:`card_body`,id:`checkbox-plan-full-basic-desc`},`카드 어디를 눌러도 선택됩니다.`,-1)])]),u(`div`,He,[u(`article`,Ue,[u(`div`,We,[t[26]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-full-pro-title`},`Pro`),u(`p`,{class:`card_subtitle`},`월 29,000원`)],-1),u(`div`,Ge,[l(I,{id:`checkbox-plan-full-pro`,name:`plan-clickable`,value:`pro`,"aria-labelledby":`checkbox-plan-full-pro-title checkbox-plan-full-pro-desc`})])]),t[27]||=u(`div`,{class:`card_body`,id:`checkbox-plan-full-pro-desc`},`제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.`,-1)])]),u(`div`,Ke,[u(`article`,qe,[u(`div`,Je,[t[28]||=u(`div`,{class:`card_header-main`},[u(`h3`,{class:`card_title`,id:`checkbox-plan-full-enterprise-title`},`Enterprise`),u(`p`,{class:`card_subtitle`},`별도 문의`)],-1),u(`div`,Ye,[l(I,{id:`checkbox-plan-full-enterprise`,name:`plan-clickable`,value:`enterprise`,disabled:``,"aria-labelledby":`checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc`})])]),t[29]||=u(`div`,{class:`card_body`,id:`checkbox-plan-full-enterprise-desc`},`대규모 조직용 맞춤 플랜입니다. (비활성)`,-1)])])])])]),_:1}),l(E,{"heading-id":`form-heading`,title:`폼 레이아웃`,description:`form_vertical · form_horizontal과 함께 사용합니다.`,stack:``,code:`<script setup>
import Checkbox from '@/components/Checkbox.vue';
import FormLayout from '@/components/FormLayout.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
        <Checkbox default-checked label="마케팅 정보 수신" />
        <Checkbox label="뉴스레터 구독" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
      <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
        <Checkbox button default-checked label="조회" />
        <Checkbox button label="편집" />
      </fieldset>
    </div>
  </FormLayout>
</template>`},{default:c(()=>[l(k,{layout:`vertical`,fit:``},{default:c(()=>[u(`div`,Xe,[t[31]||=u(`span`,{class:`form_field-label`,id:`checkbox-form-vertical-label`},`수신 동의`,-1),u(`fieldset`,Ze,[l(I,{"default-checked":``,label:`마케팅 정보 수신`}),l(I,{label:`뉴스레터 구독`})])])]),_:1}),l(k,{layout:`horizontal`,fit:``},{default:c(()=>[u(`div`,Qe,[t[32]||=u(`span`,{class:`form_field-label`,id:`checkbox-form-horizontal-label`},`권한`,-1),u(`fieldset`,$e,[l(I,{button:``,"default-checked":``,label:`조회`}),l(I,{button:``,label:`편집`})])])]),_:1})]),_:1}),l(x,{"heading-id":`api-props-heading`,title:`API · Props`},{default:c(()=>[l(S,{columns:g(L),rows:g(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(x,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:c(()=>[l(S,{columns:g(z),rows:g(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(x,{"heading-id":`api-events-heading`,title:`API · Events`},{default:c(()=>[l(S,{columns:g(V),rows:g(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(x,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:c(()=>[l(S,{columns:g(U),rows:g(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),l(x,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:c(()=>[l(S,{columns:g(G),rows:g(K),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{tt as default,et as docMeta};