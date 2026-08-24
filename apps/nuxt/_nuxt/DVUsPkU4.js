import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,f as s,i as c,k as l,m as u,nt as d,p as f,st as p,u as m,v as h,wt as g,y as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{t as S}from"./gHQDdAlU.js";import{t as C}from"./DD3RWXAt.js";import{t as w}from"./Bal4U0O22.js";import{t as T}from"./DUv9yuh62.js";import{t as E}from"./CT_IFTmY2.js";import{t as D}from"./BYqKyl8G2.js";var O=[`aria-label`],k={key:0,class:`spin_tip`},A=Object.assign({inheritAttrs:!1},{__name:`Spin`,props:{size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},tip:String,color:{type:String,default:`primary`,validator:e=>[`primary`,`success`,`warning`,`danger`].includes(e)},inline:Boolean,block:Boolean,overlay:Boolean,ariaLabel:{type:String,default:`로딩 중`}},setup(i){let a=new Set([`sm`,`md`,`lg`]),s=new Set([`primary`,`success`,`warning`,`danger`]),c=i,p=t(),h=r(),_=d(null),y=m(()=>a.has(c.size)?c.size:`md`),b=m(()=>s.has(c.color)?c.color:`primary`),S=v(`Spin`,{defaults:{size:`md`,color:`primary`},booleanProps:new Set([`inline`,`block`,`overlay`]),selfClosing:!1});x(S,()=>({...c,size:y.value,color:b.value}),p,_,h);let C=m(()=>{let e=[`spin`,`color_${b.value}`];return y.value===`sm`&&e.push(`spin_sm`),y.value===`lg`&&e.push(`spin_lg`),c.inline&&e.push(`spin_inline`),c.block&&e.push(`spin_block`),c.overlay&&e.push(`spin_overlay`),h.class&&e.push(h.class),e}),w=m(()=>{let{class:e,...t}=h;return t});return(t,r)=>(n(),u(`div`,l({ref_key:`rootRef`,ref:_,class:C.value,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":i.ariaLabel},w.value),[r[0]||=o(`span`,{class:`spin_indicator`,"aria-hidden":`true`},null,-1),i.tip?(n(),u(`p`,k,g(i.tip),1)):f(``,!0),e(t.$slots,`default`)],16,O))}}),j={class:`spin_wrap-body`},M=Object.assign({inheritAttrs:!1},{__name:`SpinWrap`,props:{loading:Boolean,block:Boolean,blur:Boolean,tip:String,ariaLabel:{type:String,default:`로딩 중`}},setup(i){let a=i,c=t(),p=r(),h=d(null),g=v(`SpinWrap`,{booleanProps:new Set([`loading`,`block`,`blur`]),selfClosing:!1});x(g,a,c,h,p);let _=m(()=>{let e=[`spin_wrap`];return a.block&&e.push(`spin_wrap-block`),a.blur&&e.push(`spin_wrap-blur`),a.loading&&e.push(`is-loading`),p.class&&e.push(p.class),e}),y=m(()=>{let{class:e,...t}=p;return t});return(t,r)=>(n(),u(`div`,l({ref_key:`rootRef`,ref:h,class:_.value},y.value),[o(`div`,j,[e(t.$slots,`default`)]),i.loading?(n(),s(A,{key:0,overlay:``,tip:i.tip,"aria-label":i.ariaLabel},null,8,[`tip`,`aria-label`])):f(``,!0)],16))}}),N=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],P=[{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`스피너 크기. sm·lg는 spin_sm · spin_lg 클래스`},{name:`color`,type:`'primary' | 'success' | 'warning' | 'danger'`,default:`primary`,description:`공통 color_* 클래스로 스피너 색상 지정`},{name:`tip`,type:`string`,default:`—`,description:`스피너 아래 설명 텍스트 (spin_tip)`},{name:`inline`,type:`boolean`,default:`false`,description:`스피너·텍스트 가로 배치 (spin_inline)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 안 가운데 정렬 (spin_block)`},{name:`overlay`,type:`boolean`,default:`false`,description:`컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)`},{name:`aria-label`,type:`string`,default:`로딩 중`,description:`스크린 리더용 로딩 설명`}],F=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],I=[{name:`loading`,type:`boolean`,default:`false`,description:`true일 때 is-loading + 오버레이 Spin 표시`},{name:`block`,type:`boolean`,default:`false`,description:`데모·빈 상태용 최소 높이 (spin_wrap-block)`},{name:`blur`,type:`boolean`,default:`false`,description:`로딩 시 콘텐츠 블러 (spin_wrap-blur)`},{name:`tip`,type:`string`,default:`—`,description:`오버레이 Spin에 전달할 설명 텍스트`},{name:`aria-label`,type:`string`,default:`로딩 중`,description:`오버레이 Spin에 전달할 접근성 라벨`}],L=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],R=[{name:`default`,description:`tip 외 추가 콘텐츠 (선택)`}],z=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],B=[{name:`default`,description:`오버레이 아래 실제 콘텐츠 (spin_wrap-body)`}],V=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],H=[{name:`spin`,description:`루트 래퍼 (인라인 flex)`},{name:`spin_indicator`,description:`회전하는 원형 스피너`},{name:`spin_tip`,description:`스피너 아래 설명 텍스트 (선택)`},{name:`spin_sm · spin_lg`,description:`크기 변형`},{name:`spin_inline`,description:`스피너·텍스트 가로 배치`},{name:`spin_block`,description:`부모 너비 안 가운데 정렬`},{name:`spin_wrap`,description:`오버레이용 상대 위치 컨테이너`},{name:`spin_wrap-body`,description:`오버레이 아래 실제 콘텐츠`},{name:`spin_overlay`,description:`컨테이너 전체를 덮는 스피너 레이어`},{name:`spin_wrap-block`,description:`데모·빈 상태용 최소 높이`},{name:`spin_wrap-blur`,description:`로딩 시 콘텐츠 블러`},{name:`is-loading`,description:`spin_wrap에 지정 — 오버레이 표시`},{name:`color_primary · color_success · color_warning · color_danger`,description:`공통 색상 변형`},{name:`role="status"`,description:`로딩 상태 시맨틱 (권장)`},{name:`aria-busy="true"`,description:`처리 중 표시`},{name:`aria-live="polite"`,description:`스크린 리더에 상태 변경 알림`},{name:`aria-label`,description:`접근 가능한 로딩 설명`}],U=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],W=[{name:`--spin-size`,default:`2rem`,description:`스피너 지름`},{name:`--spin-size-sm · --spin-size-lg`,default:`1.25rem · 3rem`,description:`크기 변형별 지름`},{name:`--spin-border`,default:`3px`,description:`스피너 테두리 두께`},{name:`--spin-border-sm · --spin-border-lg`,default:`2px · 4px`,description:`크기 변형별 테두리`},{name:`--spin-duration`,default:`0.8s`,description:`회전 애니메이션 주기`},{name:`--spin-gap`,default:`var(--space-sm)`,description:`스피너·텍스트 간격`},{name:`--spin-tip-size`,default:`var(--text-size-sm)`,description:`설명 텍스트 크기`},{name:`--spin-overlay-bg`,default:`rgba(15, 20, 25, 0.72)`,description:`오버레이 배경 (tip 명도 대비용 불투명도)`},{name:`--spin-overlay-tip-color`,default:`#ffffff`,description:`오버레이 위 tip 텍스트 색`},{name:`--spin-wrap-min-height`,default:`8rem`,description:`spin_wrap-block 최소 높이`},{name:`--spin-wrap-content-opacity`,default:`0.45`,description:`로딩 시 콘텐츠 불투명도`}],G=`<!-- 인라인 스피너 -->
<div class="spin color_primary" role="status"
  aria-live="polite" aria-busy="true" aria-label="로딩 중">
  <span class="spin_indicator" aria-hidden="true"></span>
  <p class="spin_tip">로딩 중…</p>
</div>

<!-- 컨테이너 오버레이 -->
<div class="spin_wrap is-loading">
  <div class="spin_wrap-body">
    <!-- 콘텐츠 -->
  </div>
  <div class="spin spin_overlay color_primary" role="status"
    aria-live="polite" aria-busy="true" aria-label="로딩 중">
    <span class="spin_indicator" aria-hidden="true"></span>
  </div>
</div>`,K={class:`section`,"aria-labelledby":`usage-heading`},q={title:`Spin | HTML Components`,activeNav:`spin`,pageTitle:`Spin`},J={__name:`spin`,setup(e){return(e,t)=>(n(),u(c,null,[t[4]||=h(`<div class="page_intro"><h1>Spin</h1><p class="lead">로딩·처리 중 상태를 표시하는 Spin 컴포넌트입니다. 인라인 스피너, 설명 텍스트, 컨테이너 오버레이를 지원하며 <code class="typo_code">role=&quot;status&quot;</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code>로 접근성을 보장합니다.</p></div>`,1),a(C,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">spin</code> · <code class="typo_code">spin_indicator</code>로 회전 스피너를 표시합니다.`,code:`<script setup>
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <Spin />
</template>`},{default:i(()=>[a(A)]),_:1}),a(C,{"heading-id":`size-heading`,title:`크기`,description:`<code class="typo_code">spin_sm</code> · <code class="typo_code">spin</code>(기본) · <code class="typo_code">spin_lg</code> 세 가지 크기를 지원합니다.`,code:`<script setup>
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <Spin size="sm" />
  <Spin />
  <Spin size="lg" />
</template>`},{default:i(()=>[a(A,{size:`sm`}),a(A),a(A,{size:`lg`})]),_:1}),a(C,{"heading-id":`color-heading`,title:`색상`,description:`공통 <code class="typo_code">color_*</code> 클래스로 의미를 표현합니다.`,code:`<script setup>
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <Spin color="primary" aria-label="Primary 로딩" />
  <Spin color="success" aria-label="Success 로딩" />
  <Spin color="warning" aria-label="Warning 로딩" />
  <Spin color="danger" aria-label="Danger 로딩" />
</template>`},{default:i(()=>[a(A,{color:`primary`,"aria-label":`Primary 로딩`}),a(A,{color:`success`,"aria-label":`Success 로딩`}),a(A,{color:`warning`,"aria-label":`Warning 로딩`}),a(A,{color:`danger`,"aria-label":`Danger 로딩`})]),_:1}),a(C,{"heading-id":`tip-heading`,title:`설명 텍스트`,description:`<code class="typo_code">spin_tip</code>으로 스피너 아래에 로딩 메시지를 표시합니다.`,code:`<script setup>
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
  <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />
</template>`},{default:i(()=>[a(A,{tip:`데이터를 불러오는 중…`,"aria-label":`데이터를 불러오는 중`}),a(A,{size:`lg`,tip:`파일 업로드 중…`,"aria-label":`파일 업로드 중`})]),_:1}),a(C,{"heading-id":`inline-heading`,title:`인라인`,description:`<code class="typo_code">spin_inline</code>으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <p>
    <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
  </p>
  <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
</template>`},{default:i(()=>[o(`p`,null,[a(A,{size:`sm`,inline:``,color:`primary`,tip:`저장 중…`,"aria-label":`저장 중`})]),a(S,{variant:`filled`,color:`primary`,loading:``,disabled:``,"aria-busy":`true`,label:`제출 중…`})]),_:1}),a(C,{"heading-id":`block-heading`,title:`블록 정렬`,description:`<code class="typo_code">spin_block</code>은 부모 너비 안에서 스피너를 가운데 정렬합니다.`,stack:``,code:`<script setup>
import Spin from '@/components/Spin.vue';
<\/script>

<template>
  <Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />
</template>`},{default:i(()=>[a(A,{block:``,color:`primary`,tip:`잠시만 기다려 주세요…`,"aria-label":`로딩 중`})]),_:1}),a(C,{"heading-id":`overlay-heading`,title:`컨테이너 오버레이`,description:`<code class="typo_code">spin_wrap</code>에 <code class="typo_code">is-loading</code>을 지정하면 콘텐츠 위에 <code class="typo_code">spin_overlay</code>가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다.`,stack:``,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';
import SpinWrap from '@/components/SpinWrap.vue';
<\/script>

<template>
  <SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
    <Card variant="shadow">
      <CardHeader title="대시보드" />
      <CardBody>
        <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
      </CardBody>
    </Card>
  </SpinWrap>
  <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
    <Card variant="shadow">
      <CardHeader title="블러 효과" />
      <CardBody>
        <p>
          <code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>
</template>`},{default:i(()=>[a(M,{block:``,loading:``,tip:`데이터 로딩 중…`,"aria-label":`데이터 로딩 중`,style:{"max-width":`var(--input-max-width)`}},{default:i(()=>[a(w,{variant:`shadow`},{default:i(()=>[a(E,{title:`대시보드`}),a(T,null,{default:i(()=>[...t[0]||=[o(`p`,null,`차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.`,-1)]]),_:1})]),_:1})]),_:1}),a(M,{block:``,blur:``,loading:``,"aria-label":`처리 중`,style:{"max-width":`var(--input-max-width)`,"margin-top":`var(--space-md)`}},{default:i(()=>[a(w,{variant:`shadow`},{default:i(()=>[a(E,{title:`블러 효과`}),a(T,null,{default:i(()=>[...t[1]||=[o(`p`,null,[o(`code`,{class:`typo_code`},`spin_wrap-blur`),_(`를 함께 사용하면 콘텐츠에 블러가 적용됩니다.`)],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(`section`,K,[t[2]||=h(`<h2 id="usage-heading">마크업</h2><p>독립 스피너는 <code class="typo_code">role=&quot;status&quot;</code>와 <code class="typo_code">aria-busy=&quot;true&quot;</code>를 지정합니다. 오버레이는 <code class="typo_code">spin_wrap</code>에 <code class="typo_code">is-loading</code>을 토글합니다.</p>`,2),a(D,null,{default:i(()=>[_(g(p(G)),1)]),_:1})]),a(y,{"heading-id":`api-props-heading`,title:`API · Spin Props`},{default:i(()=>[a(b,{columns:p(N),rows:p(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-wrap-props-heading`,title:`API · SpinWrap Props`},{default:i(()=>[a(b,{columns:p(F),rows:p(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-slots-heading`,title:`API · Spin Slots`},{default:i(()=>[a(b,{columns:p(L),rows:p(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-wrap-slots-heading`,title:`API · SpinWrap Slots`},{default:i(()=>[a(b,{columns:p(z),rows:p(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(b,{columns:p(V),rows:p(H),"code-column":`name`},null,8,[`columns`,`rows`]),t[3]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[_(` 버튼 내부 로딩은 `),o(`code`,{class:`typo_code`},`.btn.is-loading`),_(` + `),o(`code`,{class:`typo_code`},`.btn_spinner`),_(`를 사용합니다. 독립 스피너·영역 오버레이는 이 Spin 컴포넌트를 사용하세요. `)],-1)]),_:1}),a(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(b,{columns:p(U),rows:p(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{J as default,q as docMeta};