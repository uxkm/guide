import{A as e,B as t,G as n,K as r,L as i,U as a,Y as o,b as s,d as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,wt as g,y as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{n as S,t as C}from"./D01l-9yr.js";import{t as w}from"./DD3RWXAt.js";import{s as T,t as E}from"./D6IbhUhQ.js";import{t as D}from"./Cuo-DXMr2.js";var O=[`aria-label`],k={key:0,class:`switch_label`},A={class:`switch_control`},j=[`checked`,`disabled`,`aria-label`],M={key:1,class:`switch_label`},N=Object.assign({inheritAttrs:!1},{__name:`Switch`,props:{ripple:C,label:String,checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,labelEnd:Boolean,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},ariaLabel:String},emits:[`update:checked`,`change`],setup(o,{emit:s}){let l=new Set([`sm`,`md`,`lg`]),y=o,b=s,{rippleAttrs:C}=S(y),w=n(),T=a(),E=f(null),D=f(null),N=h(()=>l.has(y.size)?y.size:`md`),P=f(!!(y.checked??y.defaultChecked)),F=h(()=>y.checked===void 0?P.value:!!y.checked),I=v(`Switch`,{defaults:{size:`md`},booleanProps:new Set([`checked`,`defaultChecked`,`disabled`,`labelEnd`,`ripple`]),selfClosing:!1});x(I,()=>({...y,size:N.value}),w,E,T);let L=h(()=>{let e=[`switch`];return y.labelEnd&&e.push(`switch_label-end`),N.value===`sm`&&e.push(`switch_sm`),N.value===`lg`&&e.push(`switch_lg`),T.class&&e.push(T.class),e}),R=h(()=>!!(y.label||w.default)),z=h(()=>{let{class:e,...t}=T;return t});r(()=>y.checked,e=>{e!==void 0&&(P.value=!!e)});function B(t){let n=t.currentTarget.checked;y.checked===void 0?P.value=n:e(()=>{D.value&&(D.value.checked=!!y.checked)}),b(`update:checked`,n),b(`change`,t)}return(e,n)=>(i(),d(`label`,u({ref_key:`rootRef`,ref:E},m(C),{class:L.value,"aria-label":R.value?void 0:o.ariaLabel}),[R.value&&o.labelEnd?(i(),d(`span`,k,[t(e.$slots,`default`,{},()=>[_(g(o.label),1)])])):p(``,!0),c(`span`,A,[c(`input`,u({ref_key:`inputRef`,ref:D,type:`checkbox`,class:`switch_input`,role:`switch`,checked:F.value,disabled:o.disabled,"aria-label":R.value?void 0:o.ariaLabel},z.value,{onChange:B}),null,16,j),n[0]||=c(`span`,{class:`switch_track`,"aria-hidden":`true`},[c(`span`,{class:`switch_thumb`})],-1)]),R.value&&!o.labelEnd?(i(),d(`span`,M,[t(e.$slots,`default`,{},()=>[_(g(o.label),1)])])):p(``,!0)],16,O))}}),P=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`label`,type:`string`,default:`—`,description:`라벨 텍스트. default 슬롯으로 대체`},{name:`checked`,type:`boolean`,default:`—`,description:`제어 켜짐 상태. v-model:checked 지원`},{name:`default-checked`,type:`boolean`,default:`false`,description:`비제어 초기 켜짐 상태`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`label-end`,type:`boolean`,default:`false`,description:`라벨을 스위치 뒤에 배치`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`switch_sm · switch_lg`},{name:`aria-label`,type:`string`,default:`—`,description:`라벨 없을 때 접근성 라벨`},T],I=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],L=[{name:`default`,description:`라벨 텍스트 (label prop 대체). switch_content · switch_hint 조합 가능`}],R=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],z=[{name:`update:checked`,description:`켜짐 상태 변경 시. v-model:checked에 사용`},{name:`change`,description:`네이티브 input change 이벤트`}],B=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],V=[{name:`switch`,description:`스위치 루트 label`},{name:`switch_sm · switch_lg · switch_label-end`,description:`크기·레이아웃`},{name:`switch_control · switch_input · switch_track · switch_thumb`,description:`입력·트랙`},{name:`switch_label`,description:`라벨`},{name:`switch_group`,description:`여러 스위치 묶음`},...E],H=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`--switch-width · --switch-height`,default:`2.75rem · 1.5rem`,description:`트랙 크기 (md)`},{name:`--switch-width-sm · --switch-width-lg`,default:`2.25rem · 3.25rem`,description:`크기 변형`},{name:`--switch-gap · --switch-radius`,default:`—`,description:`라벨 간격·모서리`}],W={class:`switch_group switch_group_block`,style:{"max-width":`360px`,width:`100%`}},G={class:`switch_group switch_group_block`,style:{"max-width":`360px`,width:`100%`}},K={class:`switch_group switch_group_block`,style:{"max-width":`400px`,width:`100%`}},q={class:`switch_group switch_group_block switch_group_compact`,style:{"max-width":`400px`,width:`100%`}},J={class:`form_field`},Y={class:`switch_group switch_group_block`,"aria-labelledby":`switch-form-vertical-label`},X={class:`form_field`},Z={title:`Switch | HTML Components`,activeNav:`switch`,pageTitle:`Switch`},Q={__name:`switch`,setup(e){return(e,t)=>(i(),d(l,null,[t[9]||=c(`div`,{class:`page_intro`},[c(`h1`,null,`Switch`),c(`p`,{class:`lead`},[_(`켜기/끄기를 표현하는 Switch 컴포넌트입니다. `),c(`code`,null,`type="checkbox"`),_(`와 `),c(`code`,null,`role="switch"`),_(`를 사용하며, 기본 너비는 인라인(콘텐츠)이며 `),c(`strong`,null,`switch_block`),_(` · `),c(`strong`,null,`switch_group_block`),_(`으로 전체 너비를 사용합니다.`)])],-1),s(w,{"heading-id":`type-heading`,title:`유형`,description:`기본은 <code>switch_control</code> → <code>switch_label</code> 순서입니다. <code>switch_label-end</code>는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch default-checked label="기본 — switch" />
  <Switch label-end default-checked label="레이블 뒤 — switch_label-end" />
</template>`},{default:o(()=>[s(N,{"default-checked":``,label:`기본 — switch`}),s(N,{"label-end":``,"default-checked":``,label:`레이블 뒤 — switch_label-end`})]),_:1}),s(w,{"heading-id":`label-end-heading`,title:`레이블 뒤`,description:`<code>switch_label-end</code>는 <code>switch_label</code> → <code>switch_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>switch_block</code> 또는 <code>switch_group_block</code>을 추가합니다.`,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch label-end default-checked label="푸시 알림 받기" />
  <Switch label-end>
    <span class="switch_content">
      <span class="switch_label">마케팅 정보 수신</span>
      <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Switch>
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
    <Switch label-end default-checked label="이메일 알림" />
    <Switch label-end default-checked label="푸시 알림" />
    <Switch label-end label="SMS 알림" />
  </fieldset>
  <Switch label-end size="sm" default-checked label="Small — switch_sm" />
  <Switch label-end size="lg" default-checked label="Large — switch_lg" />
</template>`},{default:o(()=>[s(N,{"label-end":``,"default-checked":``,label:`푸시 알림 받기`}),s(N,{"label-end":``},{default:o(()=>[...t[0]||=[c(`span`,{class:`switch_content`},[c(`span`,{class:`switch_label`},`마케팅 정보 수신`),c(`span`,{class:`switch_hint`},`이벤트·할인 소식을 이메일로 받습니다.`)],-1)]]),_:1}),c(`fieldset`,W,[t[1]||=c(`legend`,{class:`switch_group-legend`},`알림 설정 — switch_group_block`,-1),s(N,{"label-end":``,"default-checked":``,label:`이메일 알림`}),s(N,{"label-end":``,"default-checked":``,label:`푸시 알림`}),s(N,{"label-end":``,label:`SMS 알림`})]),s(N,{"label-end":``,size:`sm`,"default-checked":``,label:`Small — switch_sm`}),s(N,{"label-end":``,size:`lg`,"default-checked":``,label:`Large — switch_lg`})]),_:1}),s(w,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다.`,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch default-checked label="다크 모드" />
  <Switch label="자동 저장" />
</template>`},{default:o(()=>[s(N,{"default-checked":``,label:`다크 모드`}),s(N,{label:`자동 저장`})]),_:1}),s(w,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`레이블 없이 스위치만 사용할 수 있습니다. <code>aria-label</code>로 접근 가능한 이름을 지정합니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch aria-label="기능 켜기" />
  <Switch default-checked aria-label="기능 끄기" />
  <Switch disabled aria-label="비활성" />
</template>`},{default:o(()=>[s(N,{"aria-label":`기능 켜기`}),s(N,{"default-checked":``,"aria-label":`기능 끄기`}),s(N,{disabled:``,"aria-label":`비활성`})]),_:1}),s(w,{"heading-id":`size-heading`,title:`크기`,description:`switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch label-end size="sm" default-checked label="Small — switch_sm" />
  <Switch label-end default-checked label="Medium — 기본" />
  <Switch label-end size="lg" default-checked label="Large — switch_lg" />
</template>`},{default:o(()=>[s(N,{"label-end":``,size:`sm`,"default-checked":``,label:`Small — switch_sm`}),s(N,{"label-end":``,"default-checked":``,label:`Medium — 기본`}),s(N,{"label-end":``,size:`lg`,"default-checked":``,label:`Large — switch_lg`})]),_:1}),s(w,{"heading-id":`width-heading`,title:`너비`,description:`기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다.`,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch label-end default-checked label="기본 — 인라인 너비" />
  <Switch label-end class="switch_block" default-checked label="switch_block — 전체 너비" />
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">switch_group_block</legend>
    <Switch label-end default-checked label="Wi-Fi" />
    <Switch label-end label="블루투스" />
  </fieldset>
</template>`},{default:o(()=>[s(N,{"label-end":``,"default-checked":``,label:`기본 — 인라인 너비`}),s(N,{"label-end":``,class:`switch_block`,"default-checked":``,label:`switch_block — 전체 너비`}),c(`fieldset`,G,[t[2]||=c(`legend`,{class:`switch_group-legend`},`switch_group_block`,-1),s(N,{"label-end":``,"default-checked":``,label:`Wi-Fi`}),s(N,{"label-end":``,label:`블루투스`})])]),_:1}),s(w,{"heading-id":`color-heading`,title:`색상`,description:`color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch class="color_primary" label-end default-checked label="Primary" />
  <Switch class="color_success" label-end default-checked label="Success" />
  <Switch class="color_danger" label-end default-checked label="Danger" />
  <Switch class="color_warning" label-end default-checked label="Warning" />
</template>`},{default:o(()=>[s(N,{class:`color_primary`,"label-end":``,"default-checked":``,label:`Primary`}),s(N,{class:`color_success`,"label-end":``,"default-checked":``,label:`Success`}),s(N,{class:`color_danger`,"label-end":``,"default-checked":``,label:`Danger`}),s(N,{class:`color_warning`,"label-end":``,"default-checked":``,label:`Warning`})]),_:1}),s(w,{"heading-id":`state-heading`,title:`상태`,description:`켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <Switch label-end label="꺼짐" />
  <Switch label-end default-checked label="켜짐" />
  <Switch label-end disabled label="비활성" />
  <Switch label-end default-checked disabled label="켜짐 (비활성)" />
</template>`},{default:o(()=>[s(N,{"label-end":``,label:`꺼짐`}),s(N,{"label-end":``,"default-checked":``,label:`켜짐`}),s(N,{"label-end":``,disabled:``,label:`비활성`}),s(N,{"label-end":``,"default-checked":``,disabled:``,label:`켜짐 (비활성)`})]),_:1}),s(w,{"heading-id":`group-heading`,title:`그룹`,description:`switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다.`,stack:``,code:`<script setup>
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">개인정보 설정</legend>
    <Switch label-end default-checked>
      <span class="switch_content">
        <span class="switch_label">프로필 공개</span>
        <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
      </span>
    </Switch>
    <Switch label-end>
      <span class="switch_content">
        <span class="switch_label">활동 기록 표시</span>
        <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
      </span>
    </Switch>
    <Switch label-end default-checked label="검색 허용" />
  </fieldset>
  <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
    <Switch label-end label="고대비 모드" />
    <Switch label-end label="애니메이션 줄이기" />
  </fieldset>
</template>`},{default:o(()=>[c(`fieldset`,K,[t[5]||=c(`legend`,{class:`switch_group-legend`},`개인정보 설정`,-1),s(N,{"label-end":``,"default-checked":``},{default:o(()=>[...t[3]||=[c(`span`,{class:`switch_content`},[c(`span`,{class:`switch_label`},`프로필 공개`),c(`span`,{class:`switch_hint`},`다른 사용자가 내 프로필을 볼 수 있습니다.`)],-1)]]),_:1}),s(N,{"label-end":``},{default:o(()=>[...t[4]||=[c(`span`,{class:`switch_content`},[c(`span`,{class:`switch_label`},`활동 기록 표시`),c(`span`,{class:`switch_hint`},`최근 활동이 타임라인에 노출됩니다.`)],-1)]]),_:1}),s(N,{"label-end":``,"default-checked":``,label:`검색 허용`})]),c(`fieldset`,q,[t[6]||=c(`legend`,{class:`switch_group-legend`},`접근성 — switch_group_compact`,-1),s(N,{"label-end":``,label:`고대비 모드`}),s(N,{"label-end":``,label:`애니메이션 줄이기`})])]),_:1}),s(w,{"heading-id":`form-heading`,title:`폼 레이아웃`,description:`form_vertical · form_horizontal과 함께 사용합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Switch from '@/components/Switch.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-vertical-label">알림</span>
      <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
        <Switch label-end default-checked label="이메일 알림" />
        <Switch label-end label="푸시 알림" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
      <Switch label-end default-checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
    </div>
  </FormLayout>
</template>`},{default:o(()=>[s(D,{layout:`vertical`,fit:``},{default:o(()=>[c(`div`,J,[t[7]||=c(`span`,{class:`form_field-label`,id:`switch-form-vertical-label`},`알림`,-1),c(`fieldset`,Y,[s(N,{"label-end":``,"default-checked":``,label:`이메일 알림`}),s(N,{"label-end":``,label:`푸시 알림`})])])]),_:1}),s(D,{layout:`horizontal`,fit:``},{default:o(()=>[c(`div`,X,[t[8]||=c(`span`,{class:`form_field-label`,id:`switch-form-horizontal-label`},`자동 저장`,-1),s(N,{"label-end":``,"default-checked":``,label:`편집 내용 자동 저장`,"aria-labelledby":`switch-form-horizontal-label`})])]),_:1})]),_:1}),s(y,{"heading-id":`api-props-heading`,title:`API · Props`},{default:o(()=>[s(b,{columns:m(P),rows:m(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:o(()=>[s(b,{columns:m(I),rows:m(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-events-heading`,title:`API · Events`},{default:o(()=>[s(b,{columns:m(R),rows:m(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:o(()=>[s(b,{columns:m(B),rows:m(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:o(()=>[s(b,{columns:m(H),rows:m(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Q as default,Z as docMeta};