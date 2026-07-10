import{u as ka,b as Da,c as s,k as r,m as n,r as E,q as P,e as ya,f as c,o as u,g as w,t as x,a as Aa}from"./vue.esm-bundler-BaZlnz8B.js";import{r as Ea,u as wa}from"./useRipple-oORGvIsP.js";import{u as xa,c as Fa}from"./useDemoCode-B9b0dRAo.js";import{_ as d}from"./FormLayout-CRfgE2Bq.js";import{h as za,a as La}from"./ripple-api-C5ZjLJl-.js";const Sa=["aria-label"],Pa=["name","value","checked","disabled"],Ma=["name","value","checked","disabled"],Ua={class:"radio_label"},Ta={key:0,class:"radio_label"},Ia={class:"radio_control"},Va=["name","value","checked","disabled"],Wa={key:1,class:"radio_label"},e=Object.assign({inheritAttrs:!1},{__name:"Radio",props:{ripple:Ea,label:String,name:String,checked:Boolean,disabled:Boolean,value:String,labelEnd:Boolean,button:Boolean,ariaLabel:String},setup(a){const l=a,{rippleAttrs:ga}=wa(l,{defaultEnabled:!1}),F=c(()=>l.ripple===!1?{"data-ripple":"false"}:l.ripple===!0||S.value||l.button?{"data-ripple":"true"}:{}),z=ka(),t=Da(),p=Aa(null),fa=Fa("Radio",{booleanProps:new Set(["checked","disabled","labelEnd","button","ripple"]),selfClosing:!0});xa(fa,l,z,p,t);const L=c(()=>{const i=["radio"];return l.labelEnd&&i.push("radio_label-end"),l.button&&i.push("radio_button"),t.class&&i.push(t.class),i}),Ra=c(()=>!!(l.label||z.default)),S=c(()=>!Ra.value),A=c(()=>{const{class:i,...o}=t;return o});return(i,o)=>S.value?(u(),s("label",n({key:0,ref_key:"rootRef",ref:p},F.value,{class:"radio_control","aria-label":a.ariaLabel}),[r("input",n({type:"radio",class:"radio_input",name:a.name,value:a.value,checked:a.checked,disabled:a.disabled},A.value),null,16,Pa),o[0]||(o[0]=r("span",{class:"radio_box","aria-hidden":"true"},null,-1))],16,Sa)):a.button?(u(),s("label",n({key:1,ref_key:"rootRef",ref:p},F.value,{class:L.value}),[r("input",n({type:"radio",class:"radio_input",name:a.name,value:a.value,checked:a.checked,disabled:a.disabled},A.value),null,16,Ma),r("span",Ua,[E(i.$slots,"default",{},()=>[w(x(a.label),1)])])],16)):(u(),s("label",n({key:2,ref_key:"rootRef",ref:p},ya(ga),{class:L.value}),[a.labelEnd?(u(),s("span",Ta,[E(i.$slots,"default",{},()=>[w(x(a.label),1)])])):P("",!0),r("span",Ia,[r("input",n({type:"radio",class:"radio_input",name:a.name,value:a.value,checked:a.checked,disabled:a.disabled},A.value),null,16,Va),o[1]||(o[1]=r("span",{class:"radio_box","aria-hidden":"true"},null,-1))]),a.labelEnd?P("",!0):(u(),s("span",Wa,[E(i.$slots,"default",{},()=>[w(x(a.label),1)])]))],16))}}),Oa=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xa=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"name",type:"string",default:"—",description:"radio 그룹 name 속성"},{name:"value",type:"string",default:"—",description:"radio value 속성"},{name:"checked",type:"boolean",default:"false",description:"선택 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 라디오 앞에 배치"},{name:"button",type:"boolean",default:"false",description:"버튼형 (radio_button)"},{name:"aria-label",type:"string",default:"—",description:"라벨 없는 단독 라디오 시 필수"},za],$a=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ja=[{name:"default",description:"라벨 텍스트 (label prop 대체)"}],Na=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ga=[{name:"radio",description:"라디오 래퍼"},{name:"radio_control · radio_input · radio_box",description:"입력·커스텀 원"},{name:"radio_label",description:"라벨"},{name:"radio_label-end · radio_button",description:"레이아웃 변형"},{name:"radio_group",description:"fieldset 그룹"},{name:"radio_card · radio_card-clickable",description:"카드형 — clickable은 data-ripple + JS 위임"},...La],ja=[{title:"API · Props",tables:[{columns:Oa,rows:Xa,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:$a,rows:Ja,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Na,rows:Ga,codeColumn:"name"}]}],Za={title:"Components/폼/Radio",id:"components-radio",component:e,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},name:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},value:{control:"text",type:{name:"string",summary:"string"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:ja}},m={args:{label:"라벨",name:"search",checked:!1,disabled:!1,value:"1",labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},render:a=>({components:{Radio:e},setup(){return{args:a}},template:'<Radio v-bind="args" />'})},b={name:"유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"기본은 <code>span.radio_control</code> + <code>label.radio_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.radio_control</code>로 input을 암묵 연결합니다. <code>radio_label-end</code>는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-type-basic" checked label="기본 — radio" />
  <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
    <Radio button name="radio-type-btn" value="b" label="UI" />
    <Radio button name="radio-type-btn" value="c" label="UX" />
  </fieldset>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<Radio name="radio-type-basic" checked label="기본 — radio" />
    <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
    <fieldset class="radio_group radio_group_horizontal">
      <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
      <Radio button name="radio-type-btn" value="b" label="UI" />
      <Radio button name="radio-type-btn" value="c" label="UX" />
    </fieldset>`})},C={name:"레이블 뒤",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code>radio_label-end</code>는 <code>radio_label</code> → <code>radio_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>radio_block</code> 또는 <code>radio_group_block</code>을 추가합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-label-end-pay" label-end checked label="신용카드" />
  <Radio name="radio-label-end-pay2" label-end>
    <span class="radio_content">
      <span class="radio_label">계좌이체</span>
      <span class="radio_hint">등록된 계좌로 결제합니다.</span>
    </span>
  </Radio>
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
    <Radio name="radio-label-end-ship" label-end checked value="standard" label="일반 배송" />
    <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
  </fieldset>
  <Radio class="radio_sm" name="radio-label-end-size" label-end checked label="Small — radio_sm" />
  <Radio class="radio_lg" name="radio-label-end-size2" label-end checked label="Large — radio_lg" />
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<Radio name="radio-label-end-pay" label-end checked label="신용카드" />
    <Radio name="radio-label-end-pay2" label-end>
      <span class="radio_content">
        <span class="radio_label">계좌이체</span>
        <span class="radio_hint">등록된 계좌로 결제합니다.</span>
      </span>
    </Radio>
    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
      <Radio name="radio-label-end-ship" label-end checked value="standard" label="일반 배송" />
      <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
    </fieldset>
    <Radio class="radio_sm" name="radio-label-end-size" label-end checked label="Small — radio_sm" />
    <Radio class="radio_lg" name="radio-label-end-size2" label-end checked label="Large — radio_lg" />`})},_={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="radio-pay-label">결제 수단</span>
    <fieldset class="radio_group" aria-labelledby="radio-pay-label">
      <Radio name="radio-pay" checked value="card">
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
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<div class="form_field">
      <span class="form_field-label" id="radio-pay-label">결제 수단</span>
      <fieldset class="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
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
    </div>`})},v={name:"단독 사용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio name="radio-standalone" aria-label="항목 선택" />
    <Radio name="radio-standalone" checked aria-label="선택됨" />
    <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<div class="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" aria-label="항목 선택" />
      <Radio name="radio-standalone" checked aria-label="선택됨" />
      <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
    </div>`})},B={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio class="radio_sm" name="radio-size" checked label="Small — radio_sm" />
    <Radio name="radio-size" label="Medium — 기본" />
    <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<div class="radio_group radio_group_horizontal">
      <Radio class="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>`})},h={name:"너비",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
  <Radio name="radio-width-block" class="radio_block" checked label="radio_block — 전체 너비" />
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">radio_group_block</legend>
    <Radio name="radio-width-g1" checked label="항목 1" />
    <Radio name="radio-width-g1" label="항목 2" />
  </fieldset>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
    <Radio name="radio-width-block" class="radio_block" checked label="radio_block — 전체 너비" />
    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">radio_group_block</legend>
      <Radio name="radio-width-g1" checked label="항목 1" />
      <Radio name="radio-width-g1" label="항목 2" />
    </fieldset>`})},g={name:"색상",parameters:{demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <Radio class="color_primary" name="radio-color-primary" checked label="Primary" />
  <Radio class="color_success" name="radio-color-success" checked label="Success" />
  <Radio class="color_danger" name="radio-color-danger" checked label="Danger" />
  <Radio class="color_warning" name="radio-color-warning" checked label="Warning" />
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<Radio class="color_primary" name="radio-color-primary" checked label="Primary" />
    <Radio class="color_success" name="radio-color-success" checked label="Success" />
    <Radio class="color_danger" name="radio-color-danger" checked label="Danger" />
    <Radio class="color_warning" name="radio-color-warning" checked label="Warning" />`})},f={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"선택·미선택·비활성·오류(is-error) 상태를 지원합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <Radio name="radio-state" label="미선택" />
  <Radio name="radio-state" checked label="선택됨" />
  <Radio name="radio-state-disabled" disabled label="비활성" />
  <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<Radio name="radio-state" label="미선택" />
    <Radio name="radio-state" checked label="선택됨" />
    <Radio name="radio-state-disabled" disabled label="비활성" />
    <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />`})},R={name:"그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">배송 방법 (세로)</legend>
    <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
    <Radio name="radio-group-ship" value="express" label="빠른 배송" />
    <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <legend class="radio_group-legend">크기 (가로)</legend>
    <Radio button name="radio-group-size" checked value="s" label="S" />
    <Radio button name="radio-group-size" value="m" label="M" />
    <Radio button name="radio-group-size" value="l" label="L" />
  </fieldset>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<fieldset class="radio_group">
      <legend class="radio_group-legend">배송 방법 (세로)</legend>
      <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
      <Radio name="radio-group-ship" value="express" label="빠른 배송" />
      <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
    </fieldset>
    <fieldset class="radio_group radio_group_horizontal">
      <legend class="radio_group-legend">크기 (가로)</legend>
      <Radio button name="radio-group-size" checked value="s" label="S" />
      <Radio button name="radio-group-size" value="m" label="M" />
      <Radio button name="radio-group-size" value="l" label="L" />
    </fieldset>`})},k={name:"버튼형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-btn-filter" checked value="all" label="전체" />
    <Radio button name="radio-btn-filter" value="active" label="진행 중" />
    <Radio button name="radio-btn-filter" value="done" label="완료" />
    <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button class="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
    <Radio button class="color_success" name="radio-btn-size" checked value="md" label="Medium" />
    <Radio button class="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
  </fieldset>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<fieldset class="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
    <fieldset class="radio_group radio_group_horizontal">
      <Radio button class="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
      <Radio button class="color_success" name="radio-btn-size" checked value="md" label="Medium" />
      <Radio button class="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
    </fieldset>`})},D={name:"카드형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code>div.radio_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.radio_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.radio_card.radio_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다."},source:{code:`<script setup>
import Radio from '@uxkm/ui/components/Radio.vue';
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
              <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
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
              <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
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
              <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
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
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<fieldset class="radio_group">
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
                    <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
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
                    <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
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
                    <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
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
        </fieldset>`})},y={name:"폼 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Radio from '@uxkm/ui/components/Radio.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
      <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
        <Radio name="radio-form-channel" checked value="email" label="이메일" />
        <Radio name="radio-form-channel" value="sms" label="SMS" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
      <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
        <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
        <Radio button name="radio-form-role" value="editor" label="편집자" />
      </fieldset>
    </div>
  </FormLayout>
</template>`,language:"vue"}}},render:()=>({components:{Radio:e,FormLayout:d},template:`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
        <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
          <Radio name="radio-form-channel" checked value="email" label="이메일" />
          <Radio name="radio-form-channel" value="sms" label="SMS" />
        </fieldset>
      </div>
    </FormLayout>
    <FormLayout layout="horizontal" fit>
      <div class="form_field">
        <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
        <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
          <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
          <Radio button name="radio-form-role" value="editor" label="편집자" />
        </fieldset>
      </div>
    </FormLayout>`})};var M,U,T;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "라벨",
    name: "search",
    checked: false,
    disabled: false,
    value: "1",
    labelEnd: false,
    button: false,
    ariaLabel: "접근성 라벨"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: '<Radio v-bind="args" />'
  })
}`,...(T=(U=m.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var I,V,W;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본은 <code>span.radio_control</code> + <code>label.radio_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.radio_control</code>로 input을 암묵 연결합니다. <code>radio_label-end</code>는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <Radio name=\\"radio-type-basic\\" checked label=\\"기본 — radio\\" />\\n  <Radio name=\\"radio-type-label-end\\" label-end label=\\"레이블 뒤 — radio_label-end\\" />\\n  <fieldset class=\\"radio_group radio_group_horizontal\\">\\n    <Radio button name=\\"radio-type-btn\\" checked value=\\"a\\" label=\\"버튼형\\" />\\n    <Radio button name=\\"radio-type-btn\\" value=\\"b\\" label=\\"UI\\" />\\n    <Radio button name=\\"radio-type-btn\\" value=\\"c\\" label=\\"UX\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<Radio name="radio-type-basic" checked label="기본 — radio" />
    <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
    <fieldset class="radio_group radio_group_horizontal">
      <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
      <Radio button name="radio-type-btn" value="b" label="UI" />
      <Radio button name="radio-type-btn" value="c" label="UX" />
    </fieldset>\`
  })
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var O,X,$;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "레이블 뒤",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code>radio_label-end</code>는 <code>radio_label</code> → <code>radio_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>radio_block</code> 또는 <code>radio_group_block</code>을 추가합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <Radio name=\\"radio-label-end-pay\\" label-end checked label=\\"신용카드\\" />\\n  <Radio name=\\"radio-label-end-pay2\\" label-end>\\n    <span class=\\"radio_content\\">\\n      <span class=\\"radio_label\\">계좌이체</span>\\n      <span class=\\"radio_hint\\">등록된 계좌로 결제합니다.</span>\\n    </span>\\n  </Radio>\\n  <fieldset class=\\"radio_group radio_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"radio_group-legend\\">배송 방법 — radio_group_block</legend>\\n    <Radio name=\\"radio-label-end-ship\\" label-end checked value=\\"standard\\" label=\\"일반 배송\\" />\\n    <Radio name=\\"radio-label-end-ship\\" label-end value=\\"express\\" label=\\"빠른 배송\\" />\\n  </fieldset>\\n  <Radio class=\\"radio_sm\\" name=\\"radio-label-end-size\\" label-end checked label=\\"Small — radio_sm\\" />\\n  <Radio class=\\"radio_lg\\" name=\\"radio-label-end-size2\\" label-end checked label=\\"Large — radio_lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<Radio name="radio-label-end-pay" label-end checked label="신용카드" />
    <Radio name="radio-label-end-pay2" label-end>
      <span class="radio_content">
        <span class="radio_label">계좌이체</span>
        <span class="radio_hint">등록된 계좌로 결제합니다.</span>
      </span>
    </Radio>
    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
      <Radio name="radio-label-end-ship" label-end checked value="standard" label="일반 배송" />
      <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
    </fieldset>
    <Radio class="radio_sm" name="radio-label-end-size" label-end checked label="Small — radio_sm" />
    <Radio class="radio_lg" name="radio-label-end-size2" label-end checked label="Large — radio_lg" />\`
  })
}`,...($=(X=C.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var J,N,G;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <span class=\\"form_field-label\\" id=\\"radio-pay-label\\">결제 수단</span>\\n    <fieldset class=\\"radio_group\\" aria-labelledby=\\"radio-pay-label\\">\\n      <Radio name=\\"radio-pay\\" checked value=\\"card\\">\\n        <span class=\\"radio_content\\">\\n          <span class=\\"radio_label\\">신용카드</span>\\n          <span class=\\"radio_hint\\">Visa · Mastercard · 국내 카드</span>\\n        </span>\\n      </Radio>\\n      <Radio name=\\"radio-pay\\" value=\\"bank\\">\\n        <span class=\\"radio_content\\">\\n          <span class=\\"radio_label\\">계좌이체</span>\\n          <span class=\\"radio_hint\\">등록된 계좌로 결제합니다.</span>\\n        </span>\\n      </Radio>\\n    </fieldset>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<div class="form_field">
      <span class="form_field-label" id="radio-pay-label">결제 수단</span>
      <fieldset class="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
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
    </div>\`
  })
}`,...(G=(N=_.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var j,q,H;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "단독 사용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"radio_group radio_group_horizontal\\">\\n    <Radio name=\\"radio-standalone\\" aria-label=\\"항목 선택\\" />\\n    <Radio name=\\"radio-standalone\\" checked aria-label=\\"선택됨\\" />\\n    <Radio name=\\"radio-standalone-disabled\\" disabled aria-label=\\"비활성\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<div class="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" aria-label="항목 선택" />
      <Radio name="radio-standalone" checked aria-label="선택됨" />
      <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
    </div>\`
  })
}`,...(H=(q=v.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var K,Q,Y;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"radio_group radio_group_horizontal\\">\\n    <Radio class=\\"radio_sm\\" name=\\"radio-size\\" checked label=\\"Small — radio_sm\\" />\\n    <Radio name=\\"radio-size\\" label=\\"Medium — 기본\\" />\\n    <Radio class=\\"radio_lg\\" name=\\"radio-size\\" label=\\"Large — radio_lg\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<div class="radio_group radio_group_horizontal">
      <Radio class="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>\`
  })
}`,...(Y=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,aa,ea;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <Radio name=\\"radio-width-inline\\" checked label=\\"기본 — 인라인 너비\\" />\\n  <Radio name=\\"radio-width-block\\" class=\\"radio_block\\" checked label=\\"radio_block — 전체 너비\\" />\\n  <fieldset class=\\"radio_group radio_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"radio_group-legend\\">radio_group_block</legend>\\n    <Radio name=\\"radio-width-g1\\" checked label=\\"항목 1\\" />\\n    <Radio name=\\"radio-width-g1\\" label=\\"항목 2\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
    <Radio name="radio-width-block" class="radio_block" checked label="radio_block — 전체 너비" />
    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">radio_group_block</legend>
      <Radio name="radio-width-g1" checked label="항목 1" />
      <Radio name="radio-width-g1" label="항목 2" />
    </fieldset>\`
  })
}`,...(ea=(aa=h.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var da,ia,la;g.parameters={...g.parameters,docs:{...(da=g.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <Radio class=\\"color_primary\\" name=\\"radio-color-primary\\" checked label=\\"Primary\\" />\\n  <Radio class=\\"color_success\\" name=\\"radio-color-success\\" checked label=\\"Success\\" />\\n  <Radio class=\\"color_danger\\" name=\\"radio-color-danger\\" checked label=\\"Danger\\" />\\n  <Radio class=\\"color_warning\\" name=\\"radio-color-warning\\" checked label=\\"Warning\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<Radio class="color_primary" name="radio-color-primary" checked label="Primary" />
    <Radio class="color_success" name="radio-color-success" checked label="Success" />
    <Radio class="color_danger" name="radio-color-danger" checked label="Danger" />
    <Radio class="color_warning" name="radio-color-warning" checked label="Warning" />\`
  })
}`,...(la=(ia=g.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ra,oa,na;f.parameters={...f.parameters,docs:{...(ra=f.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "선택·미선택·비활성·오류(is-error) 상태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <Radio name=\\"radio-state\\" label=\\"미선택\\" />\\n  <Radio name=\\"radio-state\\" checked label=\\"선택됨\\" />\\n  <Radio name=\\"radio-state-disabled\\" disabled label=\\"비활성\\" />\\n  <Radio name=\\"radio-state-disabled\\" checked disabled label=\\"선택됨 (비활성)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<Radio name="radio-state" label="미선택" />
    <Radio name="radio-state" checked label="선택됨" />
    <Radio name="radio-state-disabled" disabled label="비활성" />
    <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />\`
  })
}`,...(na=(oa=f.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var sa,ca,ua;R.parameters={...R.parameters,docs:{...(sa=R.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"radio_group\\">\\n    <legend class=\\"radio_group-legend\\">배송 방법 (세로)</legend>\\n    <Radio name=\\"radio-group-ship\\" checked value=\\"standard\\" label=\\"일반 배송\\" />\\n    <Radio name=\\"radio-group-ship\\" value=\\"express\\" label=\\"빠른 배송\\" />\\n    <Radio name=\\"radio-group-ship\\" value=\\"pickup\\" label=\\"매장 픽업\\" />\\n  </fieldset>\\n  <fieldset class=\\"radio_group radio_group_horizontal\\">\\n    <legend class=\\"radio_group-legend\\">크기 (가로)</legend>\\n    <Radio button name=\\"radio-group-size\\" checked value=\\"s\\" label=\\"S\\" />\\n    <Radio button name=\\"radio-group-size\\" value=\\"m\\" label=\\"M\\" />\\n    <Radio button name=\\"radio-group-size\\" value=\\"l\\" label=\\"L\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<fieldset class="radio_group">
      <legend class="radio_group-legend">배송 방법 (세로)</legend>
      <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
      <Radio name="radio-group-ship" value="express" label="빠른 배송" />
      <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
    </fieldset>
    <fieldset class="radio_group radio_group_horizontal">
      <legend class="radio_group-legend">크기 (가로)</legend>
      <Radio button name="radio-group-size" checked value="s" label="S" />
      <Radio button name="radio-group-size" value="m" label="M" />
      <Radio button name="radio-group-size" value="l" label="L" />
    </fieldset>\`
  })
}`,...(ua=(ca=R.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var ta,pa,ma;k.parameters={...k.parameters,docs:{...(ta=k.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: "버튼형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"radio_group radio_group_horizontal\\">\\n    <Radio button name=\\"radio-btn-filter\\" checked value=\\"all\\" label=\\"전체\\" />\\n    <Radio button name=\\"radio-btn-filter\\" value=\\"active\\" label=\\"진행 중\\" />\\n    <Radio button name=\\"radio-btn-filter\\" value=\\"done\\" label=\\"완료\\" />\\n    <Radio button name=\\"radio-btn-filter\\" disabled value=\\"hold\\" label=\\"보류 (비활성)\\" />\\n  </fieldset>\\n  <fieldset class=\\"radio_group radio_group_horizontal\\">\\n    <Radio button class=\\"radio_sm color_success\\" name=\\"radio-btn-size\\" checked value=\\"sm\\" label=\\"Small\\" />\\n    <Radio button class=\\"color_success\\" name=\\"radio-btn-size\\" checked value=\\"md\\" label=\\"Medium\\" />\\n    <Radio button class=\\"radio_lg color_success\\" name=\\"radio-btn-size\\" checked value=\\"lg\\" label=\\"Large\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<fieldset class="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
    <fieldset class="radio_group radio_group_horizontal">
      <Radio button class="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
      <Radio button class="color_success" name="radio-btn-size" checked value="md" label="Medium" />
      <Radio button class="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
    </fieldset>\`
  })
}`,...(ma=(pa=k.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ba,Ca,_a;D.parameters={...D.parameters,docs:{...(ba=D.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: "카드형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code>div.radio_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.radio_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.radio_card.radio_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다."
      },
      source: {
        code: "<script setup>\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"radio_group\\">\\n    <legend class=\\"radio_group-legend\\">요금제 선택</legend>\\n    <div class=\\"card_deck card_deck-2\\">\\n      <div class=\\"radio_card\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-basic-title\\">Basic</h3>\\n              <p class=\\"card_subtitle\\">월 9,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-basic\\" name=\\"radio-plan\\" value=\\"basic\\" checked aria-labelledby=\\"radio-plan-basic-title radio-plan-basic-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-basic-desc\\">개인 프로젝트에 적합합니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card color_primary\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-pro-title\\">Pro</h3>\\n              <p class=\\"card_subtitle\\">월 29,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-pro\\" name=\\"radio-plan\\" value=\\"pro\\" aria-labelledby=\\"radio-plan-pro-title radio-plan-pro-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-pro-desc\\">팀 협업과 고급 기능을 제공합니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card\\">\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-enterprise-title\\">Enterprise</h3>\\n              <p class=\\"card_subtitle\\">별도 문의</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-enterprise\\" name=\\"radio-plan\\" value=\\"enterprise\\" disabled aria-labelledby=\\"radio-plan-enterprise-title radio-plan-enterprise-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-enterprise-desc\\">대규모 조직용 맞춤 플랜입니다. (비활성)</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n  <fieldset class=\\"radio_group\\">\\n    <legend class=\\"radio_group-legend\\">기본 권한 (가로)</legend>\\n    <div class=\\"card_deck card_deck-3\\">\\n      <div class=\\"radio_card color_success\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-role-read-title\\">읽기</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-role-read\\" name=\\"radio-role\\" value=\\"read\\" checked aria-labelledby=\\"radio-role-read-title radio-role-read-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-role-read-desc\\">조회 권한</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card color_success\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-role-write-title\\">쓰기</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-role-write\\" name=\\"radio-role\\" value=\\"write\\" aria-labelledby=\\"radio-role-write-title radio-role-write-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-role-write-desc\\">수정 권한</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card\\">\\n        <article class=\\"card card_compact\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-role-admin-title\\">관리</h3>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-role-admin\\" name=\\"radio-role\\" value=\\"admin\\" aria-labelledby=\\"radio-role-admin-title radio-role-admin-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-role-admin-desc\\">전체 관리 권한</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n  <fieldset class=\\"radio_group\\">\\n    <legend class=\\"radio_group-legend\\">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>\\n    <div class=\\"card_deck card_deck-2\\">\\n      <div class=\\"radio_card radio_card-clickable\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-full-basic-title\\">Basic</h3>\\n              <p class=\\"card_subtitle\\">월 9,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-full-basic\\" name=\\"radio-plan-clickable\\" value=\\"basic\\" checked aria-labelledby=\\"radio-plan-full-basic-title radio-plan-full-basic-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-full-basic-desc\\">카드 어디를 눌러도 선택됩니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card radio_card-clickable color_primary\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-full-pro-title\\">Pro</h3>\\n              <p class=\\"card_subtitle\\">월 29,000원</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-full-pro\\" name=\\"radio-plan-clickable\\" value=\\"pro\\" aria-labelledby=\\"radio-plan-full-pro-title radio-plan-full-pro-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-full-pro-desc\\">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>\\n        </article>\\n      </div>\\n      <div class=\\"radio_card radio_card-clickable\\" data-ripple>\\n        <article class=\\"card card_compact card_shadow\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\" id=\\"radio-plan-full-enterprise-title\\">Enterprise</h3>\\n              <p class=\\"card_subtitle\\">별도 문의</p>\\n            </div>\\n            <div class=\\"card_extra\\">\\n              <Radio id=\\"radio-plan-full-enterprise\\" name=\\"radio-plan-clickable\\" value=\\"enterprise\\" disabled aria-labelledby=\\"radio-plan-full-enterprise-title radio-plan-full-enterprise-desc\\"  />\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\" id=\\"radio-plan-full-enterprise-desc\\">대규모 조직용 맞춤 플랜입니다. (비활성)</div>\\n        </article>\\n      </div>\\n    </div>\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<fieldset class="radio_group">
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
                    <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
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
                    <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
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
                    <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
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
        </fieldset>\`
  })
}`,...(_a=(Ca=D.parameters)==null?void 0:Ca.docs)==null?void 0:_a.source}}};var va,Ba,ha;y.parameters={...y.parameters,docs:{...(va=y.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_vertical · form_horizontal과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Radio from '@uxkm/ui/components/Radio.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"radio-form-vertical-label\\">수신 채널</span>\\n      <fieldset class=\\"radio_group\\" aria-labelledby=\\"radio-form-vertical-label\\">\\n        <Radio name=\\"radio-form-channel\\" checked value=\\"email\\" label=\\"이메일\\" />\\n        <Radio name=\\"radio-form-channel\\" value=\\"sms\\" label=\\"SMS\\" />\\n      </fieldset>\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"radio-form-horizontal-label\\">역할</span>\\n      <fieldset class=\\"radio_group radio_group_horizontal\\" aria-labelledby=\\"radio-form-horizontal-label\\">\\n        <Radio button name=\\"radio-form-role\\" checked value=\\"viewer\\" label=\\"뷰어\\" />\\n        <Radio button name=\\"radio-form-role\\" value=\\"editor\\" label=\\"편집자\\" />\\n      </fieldset>\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Radio,
      FormLayout
    },
    template: \`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
        <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
          <Radio name="radio-form-channel" checked value="email" label="이메일" />
          <Radio name="radio-form-channel" value="sms" label="SMS" />
        </fieldset>
      </div>
    </FormLayout>
    <FormLayout layout="horizontal" fit>
      <div class="form_field">
        <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
        <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
          <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
          <Radio button name="radio-form-role" value="editor" label="편집자" />
        </fieldset>
      </div>
    </FormLayout>\`
  })
}`,...(ha=(Ba=y.parameters)==null?void 0:Ba.docs)==null?void 0:ha.source}}};const ae=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","ButtonType","CardType","Form"];export{_ as Basic,k as ButtonType,D as CardType,g as Color,y as Form,R as Group,C as LabelEnd,m as Playground,B as Size,v as Standalone,f as State,b as Type,h as Width,ae as __namedExportsOrder,Za as default};
