import{B as e,Ct as t,G as n,L as r,U as i,Y as a,b as o,d as s,i as c,k as l,m as u,nt as d,p as f,st as p,u as m,v as h,wt as g,y as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{t as S}from"./DD3RWXAt.js";import{t as C}from"./BYqKyl8G2.js";var w={key:0,class:`progress_header`},T={key:0,class:`progress_label`},E={key:1,class:`progress_value`},D=[`aria-valuenow`,`aria-label`,`aria-busy`],O=Object.assign({inheritAttrs:!1},{__name:`Progress`,props:{percent:{type:Number,default:0},status:{type:String,default:``,validator:e=>[``,`success`,`exception`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},showInfo:Boolean,label:String,color:{type:String,default:`primary`,validator:e=>[`primary`,`success`,`warning`,`danger`].includes(e)},striped:Boolean,animated:Boolean,indeterminate:Boolean,inside:Boolean,block:Boolean,ariaLabel:{type:String,default:`진행률`}},setup(a){let o=new Set([``,`success`,`exception`]),c=new Set([`sm`,`md`,`lg`]),p=new Set([`primary`,`success`,`warning`,`danger`]);function h(e){let t=Number(e);return Number.isFinite(t)?Math.min(100,Math.max(0,t)):0}let _=a,y=n(),b=i(),S=d(null),C=m(()=>o.has(_.status)?_.status:``),O=m(()=>c.has(_.size)?_.size:`md`),k=m(()=>p.has(_.color)?_.color:`primary`),A=m(()=>h(_.percent)),j=v(`Progress`,{defaults:{percent:0,size:`md`,color:`primary`},booleanProps:new Set([`showInfo`,`striped`,`animated`,`indeterminate`,`inside`,`block`]),selfClosing:!1});x(j,()=>({..._,percent:A.value,status:C.value,size:O.value,color:k.value}),y,S,b);let M=m(()=>C.value===`success`?`color_success`:C.value===`exception`?`color_danger`:`color_${k.value}`),N=m(()=>{let e=[`progress`,M.value];return _.block?e.push(`progress_block`):e.push(`progress_fit`),O.value===`sm`&&e.push(`progress_sm`),O.value===`lg`&&e.push(`progress_lg`),_.striped&&e.push(`progress_striped`),_.animated&&e.push(`progress_animated`),_.indeterminate&&e.push(`is-indeterminate`),_.inside&&e.push(`progress_inside`),b.class&&e.push(b.class),e}),P=m(()=>{let{class:e,...t}=b;return t}),F=m(()=>_.inside?{background:`var(--color-border-subtle)`}:void 0),I=m(()=>({width:`${A.value}%`})),L=m(()=>`${A.value}%`);return(n,i)=>(r(),u(`div`,l({ref_key:`rootRef`,ref:S,class:N.value},P.value),[a.showInfo||a.label?(r(),u(`div`,w,[a.label?(r(),u(`span`,T,g(a.label),1)):f(``,!0),a.showInfo?(r(),u(`span`,E,g(L.value),1)):f(``,!0)])):f(``,!0),s(`div`,{class:`progress_track`,style:t(F.value),role:`progressbar`,"aria-valuenow":a.indeterminate?void 0:A.value,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-label":a.ariaLabel,"aria-busy":a.indeterminate?`true`:void 0},[s(`span`,{class:`progress_bar`,style:t(I.value)},g(a.inside?L.value:``),5)],12,D),e(n.$slots,`default`)],16))}}),k=[`aria-valuenow`,`aria-label`],A={class:`progress_circle-value`},j=Object.assign({inheritAttrs:!1},{__name:`ProgressCircle`,props:{percent:{type:Number,default:0},color:{type:String,default:`primary`,validator:e=>[`primary`,`success`,`warning`,`danger`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},ariaLabel:{type:String,default:`진행률`}},setup(e){let t=new Set([`sm`,`md`,`lg`]),n=new Set([`primary`,`success`,`warning`,`danger`]);function a(e){let t=Number(e);return Number.isFinite(t)?Math.min(100,Math.max(0,t)):0}let o=e,c=i(),f=d(null),p=m(()=>t.has(o.size)?o.size:`md`),h=m(()=>n.has(o.color)?o.color:`primary`),_=m(()=>a(o.percent)),y=v(`ProgressCircle`,{defaults:{percent:0,color:`primary`,size:`md`}});x(y,()=>({...o,percent:_.value,color:h.value,size:p.value}),{},f,c);let b=m(()=>{let e=[`progress`,`progress_circle`,`color_${h.value}`];return p.value===`sm`&&e.push(`progress_sm`),p.value===`lg`&&e.push(`progress_lg`),c.class&&e.push(c.class),e}),S=m(()=>{let{class:e,style:t,...n}=c;return n}),C=m(()=>[{"--progress-percent":_.value},c.style]);return(t,n)=>(r(),u(`div`,l({ref_key:`rootRef`,ref:f,class:b.value},S.value,{role:`progressbar`,"aria-valuenow":_.value,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-label":e.ariaLabel,style:C.value}),[n[0]||=s(`svg`,{class:`progress_circle-svg`,viewBox:`0 0 100 100`,"aria-hidden":`true`},[s(`circle`,{class:`progress_circle-track`,cx:`50`,cy:`50`,r:`45`}),s(`circle`,{class:`progress_circle-bar`,cx:`50`,cy:`50`,r:`45`})],-1),s(`span`,A,g(_.value)+`%`,1)],16,k))}}),M=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],N=[{name:`percent`,type:`number`,default:`0`,description:`0–100 진행률 (막대 width)`},{name:`status`,type:`'success' | 'exception'`,default:`—`,description:`완료·오류 색상`},{name:`color`,type:`'primary' | 'success' | 'warning' | 'danger'`,default:`primary`,description:`막대 색상 color_*`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`progress_sm · progress_lg`},{name:`label`,type:`string`,default:`—`,description:`헤더 라벨`},{name:`show-info`,type:`boolean`,default:`false`,description:`퍼센트 값 표시`},{name:`striped`,type:`boolean`,default:`false`,description:`줄무늬 (progress_striped)`},{name:`animated`,type:`boolean`,default:`false`,description:`흐르는 애니메이션`},{name:`indeterminate`,type:`boolean`,default:`false`,description:`불확정 (is-indeterminate)`},{name:`inside`,type:`boolean`,default:`false`,description:`막대 안 퍼센트 텍스트`},{name:`block`,type:`boolean`,default:`false`,description:`전체 너비 (progress_block)`},{name:`aria-label`,type:`string`,default:`진행률`,description:`progressbar 라벨`}],P=M,F=[{name:`percent`,type:`number`,default:`0`,description:`0–100 (--progress-percent)`},{name:`color`,type:`'primary' | 'success' | 'warning' | 'danger'`,default:`primary`,description:`color_*`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`progress_sm · progress_lg`},{name:`aria-label`,type:`string`,default:`진행률`,description:`progressbar 라벨`}],I=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],L=[{name:`default`,description:`추가 콘텐츠 (선택)`}],R=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],z=[{name:`progress · progress_track · progress_bar`,description:`선형 진행률`},{name:`progress_circle · progress_circle-svg · progress_circle-value`,description:`원형 진행률`},{name:`progress_header · progress_label · progress_value`,description:`헤더`},{name:`progress_sm · progress_lg · progress_fit · progress_block`,description:`크기·너비`},{name:`progress_striped · progress_animated · progress_inside`,description:`스타일`},{name:`is-indeterminate`,description:`불확정 상태`},{name:`color_primary · color_success · color_warning · color_danger`,description:`색상`}],B=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],V=[{name:`--progress-height · --progress-height-sm · --progress-height-lg`,default:`8px · 4px · 12px`,description:`선형 트랙 높이`},{name:`--progress-inside-height · --progress-inside-height-sm · --progress-inside-height-lg`,default:`1.25rem · 1rem · 1.5rem`,description:`바 안 텍스트 트랙·막대 최소 높이`},{name:`--progress-max-width`,default:`var(--input-max-width)`,description:`progress_fit 최대 너비`},{name:`--progress-circle-size · --progress-circle-stroke`,default:`7.5rem · 6`,description:`원형 크기·stroke`}],H=`<!-- 선형 기본 -->
<div class="progress progress_fit color_primary">
  <div class="progress_header">
    <span class="progress_label">업로드 중</span>
    <span class="progress_value">60%</span>
  </div>
  <div class="progress_track" role="progressbar"
    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
    aria-label="업로드 진행률">
    <span class="progress_bar" style="width: 60%"></span>
  </div>
</div>

<!-- 불확정 -->
<div class="progress progress_fit is-indeterminate color_primary">
  <div class="progress_track" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" aria-label="처리 중" aria-busy="true">
    <span class="progress_bar"></span>
  </div>
</div>

<!-- 원형 -->
<div class="progress progress_circle color_primary" role="progressbar"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  aria-label="진행률" style="--progress-percent: 75">
  <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="progress_circle-track" cx="50" cy="50" r="45" />
    <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
  </svg>
  <span class="progress_circle-value">75%</span>
</div>`,U={class:`section`,"aria-labelledby":`usage-heading`},W={title:`Progress | HTML Components`,activeNav:`progress`,pageTitle:`Progress`},G={__name:`progress`,setup(e){return(e,t)=>(r(),u(c,null,[t[2]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Progress`),s(`p`,{class:`lead`},[_(`작업 진행률을 시각적으로 표시하는 Progress 컴포넌트입니다. 선형·원형, 색상·크기 변형, 줄무늬·불확정 상태를 지원하며 `),s(`code`,{class:`typo_code`},`role="progressbar"`),_(` · `),s(`code`,{class:`typo_code`},`aria-valuenow`),_(`로 접근성을 보장합니다.`)])],-1),o(S,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">progress</code> · <code class="typo_code">progress_track</code> · <code class="typo_code">progress_bar</code>로 트랙과 채움 막대를 구성합니다. <code class="typo_code">progress_bar</code>의 <code class="typo_code">style="width: …"</code> 또는 CSS 변수로 진행률을 제어합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="0" />
  <Progress :percent="30" />
  <Progress :percent="60" />
  <Progress :percent="100" status="success" />
</template>`},{default:a(()=>[o(O,{percent:0}),o(O,{percent:30}),o(O,{percent:60}),o(O,{percent:100,status:`success`})]),_:1}),o(S,{"heading-id":`label-heading`,title:`레이블 · 값`,description:`<code class="typo_code">progress_header</code>에 <code class="typo_code">progress_label</code> · <code class="typo_code">progress_value</code>를 함께 배치합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
  <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />
</template>`},{default:a(()=>[o(O,{percent:42,"show-info":``,label:`파일 업로드`,"aria-label":`파일 업로드 진행률`}),o(O,{percent:67,"show-info":``,label:`데이터 동기화`,"aria-label":`데이터 동기화 진행률`})]),_:1}),o(S,{"heading-id":`color-heading`,title:`색상`,description:`공통 <code class="typo_code">color_*</code> 클래스로 의미를 표현합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" color="primary" aria-label="Primary 진행률" />
  <Progress :percent="100" color="success" aria-label="Success 진행률" />
  <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
  <Progress :percent="35" color="danger" aria-label="Danger 진행률" />
</template>`},{default:a(()=>[o(O,{percent:50,color:`primary`,"aria-label":`Primary 진행률`}),o(O,{percent:100,color:`success`,"aria-label":`Success 진행률`}),o(O,{percent:75,color:`warning`,"aria-label":`Warning 진행률`}),o(O,{percent:35,color:`danger`,"aria-label":`Danger 진행률`})]),_:1}),o(S,{"heading-id":`size-heading`,title:`크기`,description:`<code class="typo_code">progress_sm</code> · <code class="typo_code">progress</code>(기본) · <code class="typo_code">progress_lg</code> 세 가지 높이를 지원합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress size="sm" :percent="40" />
  <Progress :percent="55" />
  <Progress size="lg" :percent="70" />
</template>`},{default:a(()=>[o(O,{size:`sm`,percent:40}),o(O,{percent:55}),o(O,{size:`lg`,percent:70})]),_:1}),o(S,{"heading-id":`striped-heading`,title:`줄무늬 · 애니메이션`,description:`<code class="typo_code">progress_striped</code>로 줄무늬 패턴을, <code class="typo_code">progress_animated</code>와 함께 사용하면 흐르는 애니메이션을 적용합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
  <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />
</template>`},{default:a(()=>[o(O,{percent:45,striped:``,color:`primary`,"aria-label":`줄무늬 진행률`}),o(O,{percent:65,striped:``,animated:``,color:`primary`,"aria-label":`애니메이션 진행률`})]),_:1}),o(S,{"heading-id":`indeterminate-heading`,title:`불확정`,description:`진행률을 알 수 없을 때 <code class="typo_code">is-indeterminate</code>를 사용합니다. <code class="typo_code">aria-valuenow</code>를 생략하거나 <code class="typo_code">aria-busy="true"</code>를 함께 지정합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress indeterminate color="primary" aria-label="처리 중" />
  <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />
</template>`},{default:a(()=>[o(O,{indeterminate:``,color:`primary`,"aria-label":`처리 중`}),o(O,{indeterminate:``,label:`동기화 중…`,color:`success`,"aria-label":`동기화 중`})]),_:1}),o(S,{"heading-id":`inside-heading`,title:`바 안 텍스트`,description:`<code class="typo_code">progress_inside</code>로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="25" inside />
  <Progress :percent="80" inside size="lg" color="success" />
  <Progress :percent="100" inside />
</template>`},{default:a(()=>[o(O,{percent:25,inside:``}),o(O,{percent:80,inside:``,size:`lg`,color:`success`}),o(O,{percent:100,inside:``})]),_:1}),o(S,{"heading-id":`circle-heading`,title:`원형`,description:`<code class="typo_code">progress_circle</code>로 원형 진행률을 표시합니다. <code class="typo_code">style="--progress-percent: …"</code>로 채움 비율을 지정합니다.`,code:`<script setup>
import ProgressCircle from '@/components/ProgressCircle.vue';
<\/script>

<template>
  <ProgressCircle :percent="25" />
  <ProgressCircle :percent="68" color="success" />
  <ProgressCircle :percent="50" size="sm" color="warning" />
  <ProgressCircle :percent="90" size="lg" color="danger" />
</template>`},{default:a(()=>[o(j,{percent:25}),o(j,{percent:68,color:`success`}),o(j,{percent:50,size:`sm`,color:`warning`}),o(j,{percent:90,size:`lg`,color:`danger`})]),_:1}),o(S,{"heading-id":`width-heading`,title:`너비`,description:`<code class="typo_code">progress_fit</code>은 최대 너비를 제한하고, <code class="typo_code">progress_block</code>은 부모 너비 전체를 사용합니다.`,stack:``,code:`<script setup>
import Progress from '@/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" show-info label="progress_fit" />
  <Progress :percent="72" block show-info label="progress_block — 전체 너비" />
</template>`},{default:a(()=>[o(O,{percent:50,"show-info":``,label:`progress_fit`}),o(O,{percent:72,block:``,"show-info":``,label:`progress_block — 전체 너비`})]),_:1}),s(`section`,U,[t[0]||=h(`<h2 id="usage-heading">마크업</h2><p>선형 Progress는 <code class="typo_code">progress_track</code>에 <code class="typo_code">role=&quot;progressbar&quot;</code>를 지정하고, <code class="typo_code">progress_bar</code>의 <code class="typo_code">style=&quot;width: …&quot;</code>로 진행률을 제어합니다. 원형은 <code class="typo_code">--progress-percent</code> CSS 변수를 사용합니다.</p>`,2),o(C,null,{default:a(()=>[_(g(p(H)),1)]),_:1})]),o(y,{"heading-id":`api-props-heading`,title:`API · Progress Props`},{default:a(()=>[o(b,{columns:p(M),rows:p(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-circle-props-heading`,title:`API · ProgressCircle Props`},{default:a(()=>[o(b,{columns:p(P),rows:p(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:a(()=>[o(b,{columns:p(I),rows:p(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(b,{columns:p(R),rows:p(z),"code-column":`name`},null,8,[`columns`,`rows`]),t[1]||=s(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[_(` 진행률은 `),s(`code`,{class:`typo_code`},`progress_bar`),_(`의 `),s(`code`,{class:`typo_code`},`width`),_(` 또는 JS로 업데이트합니다. 시각적 값과 `),s(`code`,{class:`typo_code`},`aria-valuenow`),_(`를 함께 맞춰 주세요. `)],-1)]),_:1}),o(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(b,{columns:p(B),rows:p(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{G as default,W as docMeta};