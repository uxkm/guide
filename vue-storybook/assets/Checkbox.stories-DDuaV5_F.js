import{k as Ee,l as we,u as Fe,a as Le,b as Se,a4 as Pe,x as ze,c as i,d as o,p as r,s,r as F,f as T,g as k,i as U,a5 as Re,o as t,e as L,t as S,j as Me}from"./iframe-CAswI7Qe.js";import{w as l,s as Ie}from"./story-renders-DjeoaiCa.js";import{_ as Te}from"./FormLayout-B-M4dP74.js";import{g as Ue,a as Je}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const We=["aria-label"],Oe=["checked","disabled"],Ve=["id","checked","disabled"],Xe={class:"checkbox_label"},$e=["for"],Ne={class:"checkbox_control"},je=["id","checked","disabled"],Ge=["for"],c=Object.assign({inheritAttrs:!1},{__name:"Checkbox",props:{ripple:Ee,label:String,checked:Boolean,disabled:Boolean,indeterminate:Boolean,labelEnd:Boolean,button:Boolean,ariaLabel:String},setup(e){const a=e,{rippleAttrs:De}=we(a,{defaultEnabled:!1}),P=k(()=>a.ripple===!1?{"data-ripple":"false"}:a.ripple===!0||M.value||a.button?{"data-ripple":"true"}:{}),z=Fe(),d=Le(),b=U(null),u=U(null),h=Re(),ye=Me("Checkbox",{booleanProps:new Set(["checked","disabled","indeterminate","labelEnd","button","ripple"]),selfClosing:!0});Se(ye,a,z,b,d);const R=k(()=>{const n=["checkbox"];return a.labelEnd&&n.push("checkbox_label-end"),a.button&&n.push("checkbox_button"),d.class&&n.push(d.class),n}),Ae=k(()=>!!(a.label||z.default)),M=k(()=>!Ae.value);function I(){u.value&&(u.value.indeterminate=a.indeterminate)}return Pe(I),ze(()=>a.indeterminate,I),(n,C)=>M.value?(t(),i("label",r({key:0,ref_key:"rootRef",ref:b},P.value,{class:"checkbox_control","aria-label":e.ariaLabel}),[o("input",r({ref_key:"inputRef",ref:u,type:"checkbox",class:"checkbox_input",checked:e.checked,disabled:e.disabled},s(d)),null,16,Oe),C[0]||(C[0]=o("span",{class:"checkbox_box","aria-hidden":"true"},null,-1))],16,We)):e.button?(t(),i("label",r({key:1,ref_key:"rootRef",ref:b},P.value,{class:R.value}),[o("input",r({id:s(h),ref_key:"inputRef",ref:u,type:"checkbox",class:"checkbox_input",checked:e.checked,disabled:e.disabled},s(d)),null,16,Ve),o("span",Xe,[F(n.$slots,"default",{},()=>[L(S(e.label),1)])])],16)):(t(),i("div",r({key:2,ref_key:"rootRef",ref:b},s(De),{class:R.value}),[e.labelEnd?(t(),i("label",{key:0,class:"checkbox_label",for:s(h)},[F(n.$slots,"default",{},()=>[L(S(e.label),1)])],8,$e)):T("",!0),o("span",Ne,[o("input",r({id:s(h),ref_key:"inputRef",ref:u,type:"checkbox",class:"checkbox_input",checked:e.checked,disabled:e.disabled},s(d)),null,16,je),C[1]||(C[1]=o("span",{class:"checkbox_box","aria-hidden":"true"},null,-1))]),e.labelEnd?T("",!0):(t(),i("label",{key:1,class:"checkbox_label",for:s(h)},[F(n.$slots,"default",{},()=>[L(S(e.label),1)])],8,Ge))],16))}}),He=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"checked",type:"boolean",default:"false",description:"체크 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"indeterminate",type:"boolean",default:"false",description:"부분 선택 (전체 선택 등)"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 체크박스 앞에 배치"},{name:"button",type:"boolean",default:"false",description:"버튼형 토글 (checkbox_button)"},{name:"aria-label",type:"string",default:"—",description:"라벨 없는 단독 체크박스 시 필수"},Ue],Ke=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Qe=[{name:"default",description:"라벨 텍스트 (label prop 대체)"}],Ye=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ze=[{name:"checkbox",description:"체크박스 래퍼"},{name:"checkbox_control · checkbox_input · checkbox_box",description:"입력·커스텀 박스"},{name:"checkbox_label",description:"라벨"},{name:"checkbox_label-end · checkbox_button",description:"레이아웃 변형"},{name:"checkbox_group",description:"여러 체크박스 묶음"},{name:"checkbox_card · checkbox_card-clickable",description:"카드형 — clickable은 data-ripple + JS 위임"},{name:"is-checked · is-disabled",description:"상태 (CSS·JS 토글)"},...Je],ec=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],cc=[{name:"--checkbox-size · --checkbox-size-sm · --checkbox-size-lg",default:"1rem · 0.875rem · 1.125rem",description:"체크박스 박스 크기"},{name:"--checkbox-border-width · --checkbox-radius",default:"1px · 4px",description:"테두리·모서리"},{name:"--checkbox-gap · --checkbox-gap-sm · --checkbox-gap-lg",default:"var(--space-sm) · 0.375rem · 0.625rem",description:"라벨 간격"},{name:"--checkbox-font-size · --checkbox-line-height",default:"var(--text-size-base) · 1.5",description:"라벨 타이포(md)"},{name:"--checkbox-label-weight",default:"400",description:"라벨 두께"},{name:"--checkbox-hint-size",default:"var(--text-size-sm)",description:"힌트 텍스트"},{name:"--checkbox-control-offset",default:"0.125rem",description:"박스 수직 정렬"},{name:"--checkbox-group-gap",default:"var(--space-sm)",description:"그룹 간격"},{name:"--checkbox-button-padding-y · --checkbox-button-padding-x",default:"0.35rem · 0.75rem",description:"버튼형 패딩"}],ac=[{title:"API · Props",tables:[{columns:He,rows:qe,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Ke,rows:Qe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ye,rows:Ze,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ec,rows:cc,codeColumn:"name"}]}],rc={title:"Components/폼/Checkbox",id:"components-checkbox",component:c,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},indeterminate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ac}},p={parameters:{controls:{disable:!1}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:(e,a)=>({components:{Checkbox:c},setup(){return{args:Ie(a)}},template:'<Checkbox v-bind="args" />'})},x={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `span.checkbox_control` + `label.checkbox_label for`(명시 연결) 순서입니다. 보이는 레이블이 없으면 `label.checkbox_control`로 input을 암묵 연결합니다. `checkbox_label-end`는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox checked label="기본 — checkbox" />
  <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="버튼형" />
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
          <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
        </div>
      </div>
      <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
    </article>
  </div>
</template>`,language:"vue"}}},args:{label:"라벨",ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox checked label="기본 — checkbox" />
      <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
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
              <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
        </article>
      </div>`}))},m={name:"레이블 뒤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`checkbox_label-end`는 `checkbox_label` → `checkbox_control` 순으로 마크업합니다. 전체 너비가 필요하면 `checkbox_block` 또는 `checkbox_group_block`을 추가합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox label-end checked label="푸시 알림 받기" />
  <Checkbox label-end>
    <span class="checkbox_content">
      <span class="checkbox_label">마케팅 정보 수신</span>
      <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Checkbox>
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
    <Checkbox label-end checked label="이메일 알림" />
    <Checkbox label-end checked label="푸시 알림" />
    <Checkbox label-end label="SMS 알림" />
  </fieldset>
  <Checkbox class="checkbox_sm" label-end checked label="Small — checkbox_sm" />
  <Checkbox class="checkbox_lg" label-end checked label="Large — checkbox_lg" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox label-end checked label="푸시 알림 받기" />
      <Checkbox label-end>
        <span class="checkbox_content">
          <span class="checkbox_label">마케팅 정보 수신</span>
          <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
        <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox label-end checked label="이메일 알림" />
        <Checkbox label-end checked label="푸시 알림" />
        <Checkbox label-end label="SMS 알림" />
      </fieldset>
      <Checkbox class="checkbox_sm" label-end checked label="Small — checkbox_sm" />
      <Checkbox class="checkbox_lg" label-end checked label="Large — checkbox_lg" />`}))},_={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
    <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
      <Checkbox checked>
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
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<div class="form_field">
        <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
        <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
          <Checkbox checked>
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
      </div>`}))},v={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox aria-label="항목 선택" />
  <Checkbox checked aria-label="선택됨" />
  <Checkbox disabled aria-label="비활성" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox aria-label="항목 선택" />
      <Checkbox checked aria-label="선택됨" />
      <Checkbox disabled aria-label="비활성" />`}))},B={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox class="checkbox_sm" checked label="Small — checkbox_sm" />
  <Checkbox checked label="Medium — 기본" />
  <Checkbox class="checkbox_lg" checked label="Large — checkbox_lg" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox class="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox class="checkbox_lg" checked label="Large — checkbox_lg" />`}))},f={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox checked label="기본 — 인라인 너비" />
  <Checkbox class="checkbox_block" checked label="checkbox_block — 전체 너비" />
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">checkbox_group_block</legend>
    <Checkbox checked label="항목 1" />
    <Checkbox label="항목 2" />
  </fieldset>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox class="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
        <legend class="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>`}))},g={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox class="color_primary" checked label="Primary" />
  <Checkbox class="color_success" checked label="Success" />
  <Checkbox class="color_danger" checked label="Danger" />
  <Checkbox class="color_warning" checked label="Warning" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox class="color_primary" checked label="Primary" />
      <Checkbox class="color_success" checked label="Success" />
      <Checkbox class="color_danger" checked label="Danger" />
      <Checkbox class="color_warning" checked label="Warning" />`}))},D={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <Checkbox label="미선택" />
  <Checkbox checked label="선택됨" />
  <Checkbox checked indeterminate label="불확정" />
  <Checkbox disabled label="비활성" />
  <Checkbox checked disabled label="선택됨 (비활성)" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />`}))},y={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
    <Checkbox checked label="디자인" />
    <Checkbox label="개발" />
    <Checkbox label="기획" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <legend class="checkbox_group-legend">언어 (가로)</legend>
    <Checkbox button checked label="한국어" />
    <Checkbox button checked label="English" />
    <Checkbox button label="日本語" />
  </fieldset>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<fieldset class="checkbox_group">
        <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <legend class="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>`}))},A={name:"버튼형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
<\/script>

<template>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="전체" />
    <Checkbox button label="진행 중" />
    <Checkbox button label="완료" />
    <Checkbox button disabled label="보류 (비활성)" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button class="checkbox_sm color_success" checked label="Small" />
    <Checkbox button class="color_success" checked label="Medium" />
    <Checkbox button class="checkbox_lg color_success" checked label="Large" />
  </fieldset>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button class="checkbox_sm color_success" checked label="Small" />
        <Checkbox button class="color_success" checked label="Medium" />
        <Checkbox button class="checkbox_lg color_success" checked label="Large" />
      </fieldset>`}))},E={name:"카드형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`div.checkbox_card` + `article.card` 조합입니다. `card_extra`에는 `label.checkbox_control`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 `div.checkbox_card.checkbox_card-clickable`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 `aria-labelledby`로 card_title · card_body에 연결합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
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
              <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
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
              <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
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
              <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
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
              <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
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
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c},template:`<fieldset class="checkbox_group">
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
                  <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
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
                  <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
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
                  <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
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
                  <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
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
      </fieldset>`}))},w={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`<script setup>
import Checkbox from '@uxkm/ui/components/Checkbox.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
        <Checkbox checked label="마케팅 정보 수신" />
        <Checkbox label="뉴스레터 구독" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
      <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
        <Checkbox button checked label="조회" />
        <Checkbox button label="편집" />
      </fieldset>
    </div>
  </FormLayout>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:l(()=>({components:{Checkbox:c,FormLayout:Te},template:`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
          <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div class="form_field">
          <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
          <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </FormLayout>`}))};var J,W,O;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Checkbox v-bind="args" />'
  })
}`,...(O=(W=p.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var V,X,$;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본은 \`span.checkbox_control\` + \`label.checkbox_label for\`(명시 연결) 순서입니다. 보이는 레이블이 없으면 \`label.checkbox_control\`로 input을 암묵 연결합니다. \`checkbox_label-end\`는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox checked label=\\"기본 — checkbox\\" />\\n  <Checkbox label-end label=\\"레이블 뒤 — checkbox_label-end\\" />\\n  <fieldset class=\\"checkbox_group checkbox_group_horizontal\\">\\n    <Checkbox button checked label=\\"버튼형\\" />\\n    <Checkbox button label=\\"UI\\" />\\n    <Checkbox button label=\\"UX\\" />\\n  </fieldset>\\n  <div class=\\"checkbox_card\\" style=\\"max-width: 360px;\\">\\n    <article class=\\"card card_compact\\">\\n      <div class=\\"card_header\\">\\n        <div class=\\"card_header-main\\">\\n          <h3 class=\\"card_title\\" id=\\"checkbox-type-card-title\\">카드형 — checkbox_card</h3>\\n        </div>\\n        <div class=\\"card_extra\\">\\n          <Checkbox id=\\"checkbox-type-card\\" checked aria-labelledby=\\"checkbox-type-card-title checkbox-type-card-desc\\" />\\n        </div>\\n      </div>\\n      <div class=\\"card_body\\" id=\\"checkbox-type-card-desc\\">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>\\n    </article>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox checked label="기본 — checkbox" />
      <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
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
              <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
        </article>
      </div>\`
  }))
}`,...($=(X=x.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var N,j,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "레이블 뒤",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`checkbox_label-end\`는 \`checkbox_label\` → \`checkbox_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`checkbox_block\` 또는 \`checkbox_group_block\`을 추가합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox label-end checked label=\\"푸시 알림 받기\\" />\\n  <Checkbox label-end>\\n    <span class=\\"checkbox_content\\">\\n      <span class=\\"checkbox_label\\">마케팅 정보 수신</span>\\n      <span class=\\"checkbox_hint\\">이벤트·할인 소식을 이메일로 받습니다.</span>\\n    </span>\\n  </Checkbox>\\n  <fieldset class=\\"checkbox_group checkbox_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"checkbox_group-legend\\">알림 설정 — checkbox_group_block</legend>\\n    <Checkbox label-end checked label=\\"이메일 알림\\" />\\n    <Checkbox label-end checked label=\\"푸시 알림\\" />\\n    <Checkbox label-end label=\\"SMS 알림\\" />\\n  </fieldset>\\n  <Checkbox class=\\"checkbox_sm\\" label-end checked label=\\"Small — checkbox_sm\\" />\\n  <Checkbox class=\\"checkbox_lg\\" label-end checked label=\\"Large — checkbox_lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox label-end checked label="푸시 알림 받기" />
      <Checkbox label-end>
        <span class="checkbox_content">
          <span class="checkbox_label">마케팅 정보 수신</span>
          <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
        <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox label-end checked label="이메일 알림" />
        <Checkbox label-end checked label="푸시 알림" />
        <Checkbox label-end label="SMS 알림" />
      </fieldset>
      <Checkbox class="checkbox_sm" label-end checked label="Small — checkbox_sm" />
      <Checkbox class="checkbox_lg" label-end checked label="Large — checkbox_lg" />\`
  }))
}`,...(G=(j=m.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,q,K;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <span class=\\"form_field-label\\" id=\\"checkbox-notify-label\\">알림 설정</span>\\n    <fieldset class=\\"checkbox_group\\" aria-labelledby=\\"checkbox-notify-label\\">\\n      <Checkbox checked>\\n        <span class=\\"checkbox_content\\">\\n          <span class=\\"checkbox_label\\">이메일 알림</span>\\n          <span class=\\"checkbox_hint\\">중요 공지와 계정 관련 메일을 받습니다.</span>\\n        </span>\\n      </Checkbox>\\n      <Checkbox>\\n        <span class=\\"checkbox_content\\">\\n          <span class=\\"checkbox_label\\">푸시 알림</span>\\n          <span class=\\"checkbox_hint\\">모바일·브라우저 푸시를 허용합니다.</span>\\n        </span>\\n      </Checkbox>\\n    </fieldset>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<div class="form_field">
        <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
        <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
          <Checkbox checked>
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
      </div>\`
  }))
}`,...(K=(q=_.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "단독 사용",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox aria-label=\\"항목 선택\\" />\\n  <Checkbox checked aria-label=\\"선택됨\\" />\\n  <Checkbox disabled aria-label=\\"비활성\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox aria-label="항목 선택" />
      <Checkbox checked aria-label="선택됨" />
      <Checkbox disabled aria-label="비활성" />\`
  }))
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ce,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox class=\\"checkbox_sm\\" checked label=\\"Small — checkbox_sm\\" />\\n  <Checkbox checked label=\\"Medium — 기본\\" />\\n  <Checkbox class=\\"checkbox_lg\\" checked label=\\"Large — checkbox_lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox class="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox class="checkbox_lg" checked label="Large — checkbox_lg" />\`
  }))
}`,...(ae=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,ne,se;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox checked label=\\"기본 — 인라인 너비\\" />\\n  <Checkbox class=\\"checkbox_block\\" checked label=\\"checkbox_block — 전체 너비\\" />\\n  <fieldset class=\\"checkbox_group checkbox_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"checkbox_group-legend\\">checkbox_group_block</legend>\\n    <Checkbox checked label=\\"항목 1\\" />\\n    <Checkbox label=\\"항목 2\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox class="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
        <legend class="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>\`
  }))
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,de,re;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox class=\\"color_primary\\" checked label=\\"Primary\\" />\\n  <Checkbox class=\\"color_success\\" checked label=\\"Success\\" />\\n  <Checkbox class=\\"color_danger\\" checked label=\\"Danger\\" />\\n  <Checkbox class=\\"color_warning\\" checked label=\\"Warning\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox class="color_primary" checked label="Primary" />
      <Checkbox class="color_success" checked label="Success" />
      <Checkbox class="color_danger" checked label="Danger" />
      <Checkbox class="color_warning" checked label="Warning" />\`
  }))
}`,...(re=(de=g.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var ue,ie,te;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <Checkbox label=\\"미선택\\" />\\n  <Checkbox checked label=\\"선택됨\\" />\\n  <Checkbox checked indeterminate label=\\"불확정\\" />\\n  <Checkbox disabled label=\\"비활성\\" />\\n  <Checkbox checked disabled label=\\"선택됨 (비활성)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />\`
  }))
}`,...(te=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var be,he,Ce;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"checkbox_group\\">\\n    <legend class=\\"checkbox_group-legend\\">관심 분야 (세로)</legend>\\n    <Checkbox checked label=\\"디자인\\" />\\n    <Checkbox label=\\"개발\\" />\\n    <Checkbox label=\\"기획\\" />\\n  </fieldset>\\n  <fieldset class=\\"checkbox_group checkbox_group_horizontal\\">\\n    <legend class=\\"checkbox_group-legend\\">언어 (가로)</legend>\\n    <Checkbox button checked label=\\"한국어\\" />\\n    <Checkbox button checked label=\\"English\\" />\\n    <Checkbox button label=\\"日本語\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<fieldset class="checkbox_group">
        <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <legend class="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>\`
  }))
}`,...(Ce=(he=y.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var ke,pe,xe;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "버튼형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"checkbox_group checkbox_group_horizontal\\">\\n    <Checkbox button checked label=\\"전체\\" />\\n    <Checkbox button label=\\"진행 중\\" />\\n    <Checkbox button label=\\"완료\\" />\\n    <Checkbox button disabled label=\\"보류 (비활성)\\" />\\n  </fieldset>\\n  <fieldset class=\\"checkbox_group checkbox_group_horizontal\\">\\n    <Checkbox button class=\\"checkbox_sm color_success\\" checked label=\\"Small\\" />\\n    <Checkbox button class=\\"color_success\\" checked label=\\"Medium\\" />\\n    <Checkbox button class=\\"checkbox_lg color_success\\" checked label=\\"Large\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset class="checkbox_group checkbox_group_horizontal">
        <Checkbox button class="checkbox_sm color_success" checked label="Small" />
        <Checkbox button class="color_success" checked label="Medium" />
        <Checkbox button class="checkbox_lg color_success" checked label="Large" />
      </fieldset>\`
  }))
}`,...(xe=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var me,_e,ve;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "카드형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`div.checkbox_card\` + \`article.card\` 조합입니다. \`card_extra\`에는 \`label.checkbox_control\`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 \`div.checkbox_card.checkbox_card-clickable\`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 \`aria-labelledby\`로 card_title · card_body에 연결합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"checkbox_group\\">\\n    <legend class=\\"checkbox_group-legend\\">요금제 선택 (다중)</legend>\\n    <div class=\\"card_deck card_deck-2\\">\\n      <div class=\\"checkbox_card\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-basic-title\\">Basic</h3>\\n              <p class=\\"card_subtitle\\">월 9,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-basic\\" name=\\"plan\\" value=\\"basic\\" checked aria-labelledby=\\"checkbox-plan-basic-title checkbox-plan-basic-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-basic-desc\\">개인 프로젝트에 적합합니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card color_primary\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-pro-title\\">Pro</h3>\\n              <p class=\\"card_subtitle\\">월 29,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-pro\\" name=\\"plan\\" value=\\"pro\\" aria-labelledby=\\"checkbox-plan-pro-title checkbox-plan-pro-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-pro-desc\\">팀 협업과 고급 기능을 제공합니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-enterprise-title\\">Enterprise</h3>\\n              <p class=\\"card_subtitle\\">별도 문의</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-enterprise\\" name=\\"plan\\" value=\\"enterprise\\" disabled aria-labelledby=\\"checkbox-plan-enterprise-title checkbox-plan-enterprise-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-enterprise-desc\\">대규모 조직용 맞춤 플랜입니다. (비활성)</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n  <fieldset class=\\"checkbox_group\\">\\n    <legend class=\\"checkbox_group-legend\\">권한 (가로)</legend>\\n    <div class=\\"card_deck card_deck-3\\">\\n      <div class=\\"checkbox_card color_success\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-perm-read-title\\">읽기</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-perm-read\\" checked aria-labelledby=\\"checkbox-perm-read-title checkbox-perm-read-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-perm-read-desc\\">조회 권한</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card color_success\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-perm-write-title\\">쓰기</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-perm-write\\" checked aria-labelledby=\\"checkbox-perm-write-title checkbox-perm-write-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-perm-write-desc\\">수정 권한</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-perm-delete-title\\">삭제</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-perm-delete\\" aria-labelledby=\\"checkbox-perm-delete-title checkbox-perm-delete-desc\\" />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-perm-delete-desc\\">삭제 권한</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n  <fieldset class=\\"checkbox_group\\">\\n    <legend class=\\"checkbox_group-legend\\">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>\\n    <div class=\\"card_deck card_deck-2\\">\\n      <div class=\\"checkbox_card checkbox_card-clickable\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-full-basic-title\\">Basic</h3>\\n              <p class=\\"card_subtitle\\">월 9,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-full-basic\\" name=\\"plan-clickable\\" value=\\"basic\\" checked aria-labelledby=\\"checkbox-plan-full-basic-title checkbox-plan-full-basic-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-full-basic-desc\\">카드 어디를 눌러도 선택됩니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card checkbox_card-clickable color_primary\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-full-pro-title\\">Pro</h3>\\n              <p class=\\"card_subtitle\\">월 29,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-full-pro\\" name=\\"plan-clickable\\" value=\\"pro\\" aria-labelledby=\\"checkbox-plan-full-pro-title checkbox-plan-full-pro-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-full-pro-desc\\">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"checkbox_card checkbox_card-clickable\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"checkbox-plan-full-enterprise-title\\">Enterprise</h3>\\n              <p class=\\"card_subtitle\\">별도 문의</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Checkbox id=\\"checkbox-plan-full-enterprise\\" name=\\"plan-clickable\\" value=\\"enterprise\\" disabled aria-labelledby=\\"checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"checkbox-plan-full-enterprise-desc\\">대규모 조직용 맞춤 플랜입니다. (비활성)</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox
    },
    template: \`<fieldset class="checkbox_group">
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
                  <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
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
                  <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
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
                  <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
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
                  <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
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
      </fieldset>\`
  }))
}`,...(ve=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var Be,fe,ge;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_vertical · form_horizontal과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Checkbox from '@uxkm/ui/components/Checkbox.vue';\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"checkbox-form-vertical-label\\">수신 동의</span>\\n      <fieldset class=\\"checkbox_group\\" aria-labelledby=\\"checkbox-form-vertical-label\\">\\n        <Checkbox checked label=\\"마케팅 정보 수신\\" />\\n        <Checkbox label=\\"뉴스레터 구독\\" />\\n      </fieldset>\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"checkbox-form-horizontal-label\\">권한</span>\\n      <fieldset class=\\"checkbox_group checkbox_group_horizontal\\" aria-labelledby=\\"checkbox-form-horizontal-label\\">\\n        <Checkbox button checked label=\\"조회\\" />\\n        <Checkbox button label=\\"편집\\" />\\n      </fieldset>\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    indeterminate: false,
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Checkbox,
      FormLayout
    },
    template: \`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
          <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div class="form_field">
          <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
          <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </FormLayout>\`
  }))
}`,...(ge=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const uc=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","ButtonType","CardType","Form"];export{_ as Basic,A as ButtonType,E as CardType,g as Color,w as Form,y as Group,m as LabelEnd,p as Playground,B as Size,v as Standalone,D as State,x as Type,f as Width,uc as __namedExportsOrder,rc as default};
