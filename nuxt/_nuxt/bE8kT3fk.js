import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,v as m,wt as h,xt as g,y as _,z as v}from"./CCnt5OSV.js";import{F as y,l as b,t as x,v as S}from"./DkmWXf_S.js";import{t as C}from"./DD3RWXAt.js";import{t as w}from"./Bal4U0O22.js";import{t as T}from"./DUv9yuh62.js";import{t as E}from"./BYqKyl8G2.js";var D=[`aria-label`],O={key:0,class:`skeleton_row`},k={key:0,class:`skeleton_row-body`},A=Object.assign({inheritAttrs:!1},{__name:`Skeleton`,props:{active:{type:Boolean,default:!0},avatar:Boolean,paragraph:{type:[Boolean,Number],default:!1},round:Boolean,ariaLabel:{type:String,default:`콘텐츠 로딩 중`}},setup(i){let a=[``,`skeleton_w-md`,`skeleton_w-sm`];function f(e){return e===!0?3:typeof e!=`number`||!Number.isFinite(e)?0:Math.max(0,Math.floor(e))}let m=i,h=t(),_=r(),b=u(null),x=y(`Skeleton`,{defaults:{active:!0},booleanProps:new Set([`active`,`avatar`,`round`]),selfClosing:!1});S(x,m,h,b,_);let C=p(()=>{let e=[`skeleton_group`];return m.active||e.push(`skeleton_static`),_.class&&e.push(_.class),e}),w=p(()=>{let e=[`skeleton`];return m.active||e.push(`skeleton_static`),e}),T=p(()=>f(m.paragraph)),E=p(()=>m.paragraph===!1?3:T.value),A=p(()=>{let{class:e,...t}=_;return t});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:b,class:C.value,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":i.ariaLabel},A.value),[i.avatar||i.round?(n(),l(s,{key:0},[i.avatar?(n(),l(`div`,O,[o(`span`,{class:g([...w.value,`skeleton_circle`]),"aria-hidden":`true`},null,2),T.value?(n(),l(`div`,k,[(n(!0),l(s,null,v(T.value,e=>(n(),l(`span`,{key:e,class:g([...w.value,`skeleton_text`,a[e-1]||`skeleton_w-lg`]),"aria-hidden":`true`},null,2))),128))])):d(``,!0)])):i.round?(n(),l(`span`,{key:1,class:g([...w.value,`skeleton_circle`]),"aria-hidden":`true`},null,2)):d(``,!0)],64)):(n(),l(s,{key:1},[E.value?(n(),l(s,{key:0},[o(`span`,{class:g([...w.value,`skeleton_title`]),"aria-hidden":`true`},null,2),(n(!0),l(s,null,v(E.value,e=>(n(),l(`span`,{key:e,class:g([...w.value,`skeleton_text`,a[e-1]||``]),"aria-hidden":`true`},null,2))),128))],64)):d(``,!0)],64)),e(t.$slots,`default`)],16,D))}}),j=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],M=[{name:`active`,type:`boolean`,default:`true`,description:`쉬머 애니메이션. false면 skeleton_static`},{name:`avatar`,type:`boolean`,default:`false`,description:`아바타 + 본문 행 레이아웃`},{name:`paragraph`,type:`boolean | number`,default:`false`,description:`본문 줄 수. 기본 레이아웃은 false·true일 때 3줄이며, 0이면 자동 콘텐츠 숨김`},{name:`round`,type:`boolean`,default:`false`,description:`원형만 표시`},{name:`aria-label`,type:`string`,default:`콘텐츠 로딩 중`,description:`role=status 라벨`}],N=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],P=[{name:`default`,description:`커스텀 skeleton 막대 추가`}],F=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],I=[{name:`skeleton · skeleton_text · skeleton_title · skeleton_circle`,description:`막대·제목·원형`},{name:`skeleton_button · skeleton_image · skeleton_block`,description:`버튼·이미지·블록 형태`},{name:`skeleton_w-sm · skeleton_w-md · skeleton_w-lg`,description:`줄 너비`},{name:`skeleton_group · skeleton_row · skeleton_row-body`,description:`레이아웃`},{name:`skeleton_static · skeleton_sm · skeleton_lg`,description:`애니메이션·크기`}],L=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],R=[{name:`--skeleton-bg · --skeleton-shine`,default:`—`,description:`배경·쉬머`},{name:`--skeleton-text-height · --skeleton-title-height`,default:`0.875rem · 1.125rem`,description:`줄 높이`},{name:`--skeleton-avatar-size · --skeleton-gap · --skeleton-duration`,default:`—`,description:`아바타·간격·주기`}],z=`<!-- 문단 -->
<div class="skeleton_group" role="status"
  aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
</div>

<!-- 아바타 + 텍스트 행 -->
<div class="skeleton_row">
  <span class="skeleton skeleton_circle" aria-hidden="true"></span>
  <div class="skeleton_row-body">
    <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
    <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
  </div>
</div>`,B={style:{"max-width":`var(--input-max-width)`,width:`100%`}},V={style:{"max-width":`var(--input-max-width)`,width:`100%`}},H={class:`section`,"aria-labelledby":`usage-heading`},U={title:`Skeleton | HTML Components`,activeNav:`skeleton`,pageTitle:`Skeleton`},W={__name:`skeleton`,setup(e){return(e,t)=>(n(),l(s,null,[t[3]||=m(`<div class="page_intro"><h1>Skeleton</h1><p class="lead">콘텐츠가 로드되기 전 레이아웃을 미리 보여 주는 Skeleton 컴포넌트입니다. 텍스트·아바타·이미지·버튼 형태와 조합 레이아웃을 지원하며 <code class="typo_code">role=&quot;status&quot;</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code>로 접근성을 보장합니다.</p></div>`,1),a(C,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">skeleton</code>에 <code class="typo_code">skeleton_text</code> · <code class="typo_code">skeleton_title</code> 형태 클래스를 조합합니다.`,code:`<script setup>
import Skeleton from '@/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :paragraph="3" />
  </div>
</template>`},{default:i(()=>[o(`div`,B,[a(A,{paragraph:3})])]),_:1}),a(C,{"heading-id":`shape-heading`,title:`형태`,description:`아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다.`,code:`<script setup>
import Skeleton from '@/components/Skeleton.vue';
<\/script>

<template>
  <Skeleton avatar :paragraph="0" />
  <Skeleton round style="margin-top: var(--space-md);" />
</template>`},{default:i(()=>[a(A,{avatar:``,paragraph:0}),a(A,{round:``,style:{"margin-top":`var(--space-md)`}})]),_:1}),t[4]||=o(`section`,{class:`section`,"aria-labelledby":`size-heading`},[o(`div`,{class:`demo_section-header`},[o(`h2`,{id:`size-heading`},`크기`),o(`p`,null,[o(`code`,{class:`typo_code`},`skeleton_sm`),_(` · `),o(`code`,{class:`typo_code`},`skeleton`),_(`(기본) · `),o(`code`,{class:`typo_code`},`skeleton_lg`),_(` 세 가지 스케일을 지원합니다. 그룹 루트에 지정하면 하위 형태에 일괄 적용됩니다.`)])]),o(`div`,{class:`demo_section-preview demo_section-preview-start`,style:{"max-width":`var(--input-max-width)`,width:`100%`}},[o(`div`,{class:`skeleton_group skeleton_sm`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`Small 로딩`},[o(`span`,{class:`skeleton skeleton_title`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text`,"aria-hidden":`true`})]),o(`div`,{class:`skeleton_group`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`기본 로딩`,style:{"margin-top":`var(--space-md)`}},[o(`span`,{class:`skeleton skeleton_title`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text`,"aria-hidden":`true`})]),o(`div`,{class:`skeleton_group skeleton_lg`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`Large 로딩`,style:{"margin-top":`var(--space-md)`}},[o(`span`,{class:`skeleton skeleton_title`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text`,"aria-hidden":`true`})])])],-1),t[5]||=o(`section`,{class:`section`,"aria-labelledby":`row-heading`},[o(`div`,{class:`demo_section-header`},[o(`h2`,{id:`row-heading`},`아바타 + 텍스트`),o(`p`,null,[o(`code`,{class:`typo_code`},`skeleton_row`),_(` · `),o(`code`,{class:`typo_code`},`skeleton_row-body`),_(`로 목록·피드 항목 레이아웃을 구성합니다.`)])]),o(`div`,{class:`demo_section-preview demo_section-preview-start`,style:{"max-width":`var(--input-max-width)`,width:`100%`}},[o(`div`,{class:`skeleton_group`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`목록 로딩 중`},[o(`div`,{class:`skeleton_row`},[o(`span`,{class:`skeleton skeleton_circle`,"aria-hidden":`true`}),o(`div`,{class:`skeleton_row-body`},[o(`span`,{class:`skeleton skeleton_text skeleton_w-lg`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text skeleton_w-md`,"aria-hidden":`true`})])]),o(`div`,{class:`skeleton_row`},[o(`span`,{class:`skeleton skeleton_circle`,"aria-hidden":`true`}),o(`div`,{class:`skeleton_row-body`},[o(`span`,{class:`skeleton skeleton_text skeleton_w-lg`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text skeleton_w-sm`,"aria-hidden":`true`})])]),o(`div`,{class:`skeleton_row`},[o(`span`,{class:`skeleton skeleton_circle`,"aria-hidden":`true`}),o(`div`,{class:`skeleton_row-body`},[o(`span`,{class:`skeleton skeleton_text skeleton_w-md`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_text skeleton_w-md`,"aria-hidden":`true`})])])])])],-1),a(C,{"heading-id":`card-heading`,title:`카드`,description:`카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import Skeleton from '@/components/Skeleton.vue';
<\/script>

<template>
  <Card
  variant="shadow"
  style="max-width: 360px; width: 100%;"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="카드 콘텐츠 로딩 중"
  >
  <CardBody>
    <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
      <span class="skeleton skeleton_image" aria-hidden="true" />
      <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span class="skeleton skeleton_text" aria-hidden="true" />
      <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div class="skeleton_row" style="margin-top: var(--space-xs);">
        <span class="skeleton skeleton_button" aria-hidden="true" />
        <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
      </div>
    </Skeleton>
  </CardBody>
  </Card>
</template>`},{default:i(()=>[a(w,{variant:`shadow`,style:{"max-width":`360px`,width:`100%`},role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`카드 콘텐츠 로딩 중`},{default:i(()=>[a(T,null,{default:i(()=>[a(A,{paragraph:0,"aria-label":`카드 콘텐츠 로딩 중`},{default:i(()=>[...t[0]||=[o(`span`,{class:`skeleton skeleton_image`,"aria-hidden":`true`},null,-1),o(`span`,{class:`skeleton skeleton_title skeleton_w-md`,"aria-hidden":`true`},null,-1),o(`span`,{class:`skeleton skeleton_text`,"aria-hidden":`true`},null,-1),o(`span`,{class:`skeleton skeleton_text skeleton_w-lg`,"aria-hidden":`true`},null,-1),o(`div`,{class:`skeleton_row`,style:{"margin-top":`var(--space-xs)`}},[o(`span`,{class:`skeleton skeleton_button`,"aria-hidden":`true`}),o(`span`,{class:`skeleton skeleton_button`,"aria-hidden":`true`,style:{width:`4rem`}})],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{"heading-id":`static-heading`,title:`정적`,description:`<code class="typo_code">skeleton_static</code>을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. <code class="typo_code">prefers-reduced-motion</code> 환경에서도 애니메이션이 비활성화됩니다.`,code:`<script setup>
import Skeleton from '@/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :active="false" :paragraph="3" />
  </div>
</template>`},{default:i(()=>[o(`div`,V,[a(A,{active:!1,paragraph:3})])]),_:1}),o(`section`,H,[t[1]||=m(`<h2 id="usage-heading">마크업</h2><p>스켈레톤 그룹에 <code class="typo_code">role=&quot;status&quot;</code>와 <code class="typo_code">aria-busy=&quot;true&quot;</code>를 지정하고, 장식용 막대에는 <code class="typo_code">aria-hidden=&quot;true&quot;</code>를 추가합니다. 실제 콘텐츠가 로드되면 스켈레톤을 제거하고 <code class="typo_code">aria-busy=&quot;false&quot;</code>로 변경합니다.</p>`,2),a(E,null,{default:i(()=>[_(h(f(z)),1)]),_:1})]),a(b,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(x,{columns:f(j),rows:f(M),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(b,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(x,{columns:f(N),rows:f(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(b,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(x,{columns:f(F),rows:f(I),"code-column":`name`},null,8,[`columns`,`rows`]),t[2]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[_(` 전체 영역 스피너·오버레이는 `),o(`a`,{href:`spin.html`},`Spin`),_(` 컴포넌트를, 빈 상태 UI는 Empty 컴포넌트를 사용하세요. `)],-1)]),_:1}),a(b,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(x,{columns:f(L),rows:f(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{W as default,U as docMeta};