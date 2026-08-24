import{B as e,G as t,H as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,st as p,u as m,v as h,wt as g,xt as _,y as v,z as y}from"./CCnt5OSV.js";import{t as b}from"./Boqzjccl.js";import{F as x,l as S,t as C,v as w}from"./DkmWXf_S.js";import{n as T,t as E}from"./D01l-9yr.js";import{t as D}from"./DD3RWXAt.js";import{s as O,t as k}from"./D6IbhUhQ.js";var A=[`aria-current`],j={key:2,class:`breadcrumb_current`},M=Object.assign({inheritAttrs:!1},{__name:`BreadcrumbItem`,props:{ripple:E,label:String,href:String,current:Boolean,disabled:Boolean,icon:Boolean,ariaLabel:String,as:{type:[String,Object,Function],default:void 0}},setup(o){let s=o,{rippleAttrs:l}=T(s),h=t(),y=i(),S=f(null),C=b,E=x(`BreadcrumbItem`,{booleanProps:new Set([`current`,`disabled`,`icon`,`ripple`]),labelProp:`label`,selfClosing:!1});w(E,()=>({...s,as:typeof s.as==`string`?s.as:void 0}),h,S,y);let D=m(()=>{let e=[`breadcrumb_item`];return s.current&&e.push(`is-current`),y.class&&e.push(y.class),e}),O=m(()=>{let e=[`breadcrumb_link`];return s.icon&&e.push(`breadcrumb_link-icon`),s.disabled&&e.push(`is-disabled`),e}),k=m(()=>s.as===`NuxtLink`?C:s.as||`a`),M=m(()=>k.value===`a`||typeof k.value!=`string`),N=m(()=>{let{class:e,onClick:t,...n}=y;return n});function P(e,t){if(Array.isArray(e)){e.forEach(e=>e?.(t));return}e?.(t)}function F(e){(!s.href||s.href===`#`)&&e.preventDefault(),P(y.onClick,e)}return(t,i)=>(r(),d(`li`,u({ref_key:`rootRef`,ref:S},N.value,{class:D.value,"aria-current":o.current?`page`:void 0}),[o.href&&!o.current&&!o.disabled?(r(),c(n(k.value),u({key:0},p(l),{class:O.value,href:M.value?o.href:void 0,"aria-label":o.ariaLabel||void 0,onClick:F}),{default:a(()=>[e(t.$slots,`default`,{},()=>[v(g(o.label),1)])]),_:3},16,[`class`,`href`,`aria-label`])):o.disabled?(r(),d(`span`,{key:1,class:_(O.value),"aria-disabled":`true`},[e(t.$slots,`default`,{},()=>[v(g(o.label),1)])],2)):o.current?(r(),d(`span`,j,[e(t.$slots,`default`,{},()=>[v(g(o.label),1)])])):e(t.$slots,`default`,{},void 0,void 0,3)],16,A))}}),N=[`aria-label`],P={class:`breadcrumb_list`},F=Object.assign({inheritAttrs:!1},{__name:`Breadcrumb`,props:{items:{type:Array,default:()=>[]},ariaLabel:{type:String,default:`경로`},separator:{type:String,default:`chevron`,validator:e=>[`chevron`,`slash`,`dot`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)}},setup(n){let a=new Set([`chevron`,`slash`,`dot`]),o=new Set([`sm`,`md`,`lg`]),p=n,h=t(),g=i(),_=f(null),v=m(()=>a.has(p.separator)?p.separator:`chevron`),b=m(()=>o.has(p.size)?p.size:`md`),S=m(()=>Array.isArray(p.items)&&p.items.length>0),C=x(`Breadcrumb`,{defaults:{ariaLabel:`경로`,separator:`chevron`,size:`md`},skipProps:[`items`],selfClosing:!1});w(C,()=>({...p,separator:v.value,size:b.value}),h,_,g);let T=m(()=>{let e=[`breadcrumb`];return v.value===`slash`&&e.push(`breadcrumb_sep-slash`),v.value===`dot`&&e.push(`breadcrumb_sep-dot`),b.value===`sm`&&e.push(`breadcrumb_sm`),b.value===`lg`&&e.push(`breadcrumb_lg`),g.class&&e.push(g.class),e}),E=m(()=>{let{class:e,...t}=g;return t});return(t,i)=>(r(),d(`nav`,u({ref_key:`rootRef`,ref:_,class:T.value,"aria-label":n.ariaLabel},E.value),[s(`ol`,P,[S.value?(r(!0),d(l,{key:0},y(n.items,(e,t)=>(r(),c(M,{key:t,label:e.label,href:e.href,current:e.current??t===n.items.length-1,disabled:e.disabled,icon:e.icon,"aria-label":e.ariaLabel,as:e.as,onClick:e.onClick},null,8,[`label`,`href`,`current`,`disabled`,`icon`,`aria-label`,`as`,`onClick`]))),128)):e(t.$slots,`default`,{},void 0,void 0,1)])],16,N))}}),I=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],L=[{name:`items`,type:`Array<{ label, href?, current?, disabled?, as? }>`,default:`[]`,description:`경로 데이터. BreadcrumbItem 슬롯 대체`},{name:`aria-label`,type:`string`,default:`경로`,description:`nav aria-label`},{name:`separator`,type:`'chevron' | 'slash' | 'dot'`,default:`chevron`,description:`breadcrumb_sep-slash · breadcrumb_sep-dot`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`breadcrumb_sm · breadcrumb_lg`}],R=I,z=[{name:`label`,type:`string`,default:`—`,description:`항목 텍스트`},{name:`href`,type:`string`,default:`—`,description:`링크 URL`},{name:`current`,type:`boolean`,default:`false`,description:`is-current · aria-current="page"`},{name:`disabled`,type:`boolean`,default:`false`,description:`is-disabled`},{name:`icon`,type:`boolean`,default:`false`,description:`breadcrumb_link-icon`},{name:`aria-label`,type:`string`,default:`—`,description:`아이콘 전용 링크 라벨`},{name:`as`,type:`string | Component`,default:`a`,description:`링크 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트 지정`},O],B=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],V=[{name:`default`,description:`BreadcrumbItem 나열 (items prop 대체)`}],H=B,U=[{name:`default`,description:`링크 텍스트·아이콘 (label 대체)`}],W=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],G=[{name:`breadcrumb · breadcrumb_list · breadcrumb_item`,description:`루트·목록·항목`},{name:`breadcrumb_link · breadcrumb_sep`,description:`링크·구분자`},{name:`breadcrumb_ellipsis`,description:`생략 메뉴 버튼 — data-ripple`},{name:`breadcrumb_sep-slash · breadcrumb_sep-dot`,description:`구분자 스타일`},{name:`breadcrumb_sm · breadcrumb_lg`,description:`크기 변형`},{name:`is-current · is-disabled`,description:`현재·비활성`},...k],K=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],q=[{name:`--breadcrumb-gap · --breadcrumb-font-size`,default:`—`,description:`간격·글자 크기`},{name:`--breadcrumb-sep-color`,default:`—`,description:`구분자 색`}],J={title:`Breadcrumb | UXKM Guide`,activeNav:`breadcrumb`,pageTitle:`Breadcrumb`},Y={__name:`breadcrumb`,setup(e){return(e,t)=>(r(),d(l,null,[t[3]||=h(`<div class="page_intro"><h1>Breadcrumb</h1><p class="lead">현재 페이지의 위치를 계층 경로로 표시하는 내비게이션 컴포넌트입니다. <code class="typo_code">nav</code> · <code class="typo_code">ol</code> 시맨틱 구조와 <code class="typo_code">aria-current=&quot;page&quot;</code>로 접근성을 지원합니다.</p></div>`,1),o(D,{"heading-id":`basic-heading`,title:`기본`,description:`이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다.`,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbItem as="NuxtLink" label="홈" href="/" />
    <BreadcrumbItem as="NuxtLink" label="컴포넌트" href="/components/button" />
    <BreadcrumbItem label="Breadcrumb" current />
  </Breadcrumb>
</template>`},{default:a(()=>[o(F,null,{default:a(()=>[o(M,{as:`NuxtLink`,label:`홈`,href:`/`}),o(M,{as:`NuxtLink`,label:`컴포넌트`,href:`/components/button`}),o(M,{label:`Breadcrumb`,current:``})]),_:1})]),_:1}),o(D,{"heading-id":`separator-heading`,title:`구분자`,description:`separator로 구분자 스타일을 변경합니다.`,stack:``,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
<\/script>

<template>
  <Breadcrumb
  aria-label="경로 — chevron"
  :items="[
  { label: '홈', href: '#' },
  { label: '가이드', href: '#' },
  { label: 'Chevron', current: true },
  ]"
  />
  <Breadcrumb
  separator="slash"
  aria-label="경로 — slash"
  :items="[
  { label: '홈', href: '#' },
  { label: '가이드', href: '#' },
  { label: 'Slash', current: true },
  ]"
  />
  <Breadcrumb
  separator="dot"
  aria-label="경로 — dot"
  :items="[
  { label: '홈', href: '#' },
  { label: '가이드', href: '#' },
  { label: 'Dot', current: true },
  ]"
  />
</template>`},{default:a(()=>[o(F,{"aria-label":`경로 — chevron`,items:[{label:`홈`,href:`#`},{label:`가이드`,href:`#`},{label:`Chevron`,current:!0}]}),o(F,{separator:`slash`,"aria-label":`경로 — slash`,items:[{label:`홈`,href:`#`},{label:`가이드`,href:`#`},{label:`Slash`,current:!0}]}),o(F,{separator:`dot`,"aria-label":`경로 — dot`,items:[{label:`홈`,href:`#`},{label:`가이드`,href:`#`},{label:`Dot`,current:!0}]})]),_:1}),o(D,{"heading-id":`icon-heading`,title:`홈 아이콘`,description:`icon으로 아이콘만 있는 첫 항목을 표시합니다.`,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbItem href="#" icon aria-label="홈">
      <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    </BreadcrumbItem>
    <BreadcrumbItem label="설정" href="#" />
    <BreadcrumbItem label="계정" href="#" />
    <BreadcrumbItem label="프로필" current />
  </Breadcrumb>
</template>`},{default:a(()=>[o(F,null,{default:a(()=>[o(M,{href:`#`,icon:``,"aria-label":`홈`},{default:a(()=>[...t[0]||=[s(`svg`,{class:`breadcrumb_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[s(`path`,{d:`M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z`})],-1)]]),_:1}),o(M,{label:`설정`,href:`#`}),o(M,{label:`계정`,href:`#`}),o(M,{label:`프로필`,current:``})]),_:1})]),_:1}),o(D,{"heading-id":`size-heading`,title:`크기`,description:`size로 텍스트 크기를 조절합니다.`,stack:``,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
<\/script>

<template>
  <Breadcrumb
  size="sm"
  aria-label="경로 — small"
  :items="[
  { label: '홈', href: '#' },
  { label: '문서', href: '#' },
  { label: 'Small', current: true },
  ]"
  />
  <Breadcrumb
  aria-label="경로 — medium"
  :items="[
  { label: '홈', href: '#' },
  { label: '문서', href: '#' },
  { label: 'Medium', current: true },
  ]"
  />
  <Breadcrumb
  size="lg"
  aria-label="경로 — large"
  :items="[
  { label: '홈', href: '#' },
  { label: '문서', href: '#' },
  { label: 'Large', current: true },
  ]"
  />
</template>`},{default:a(()=>[o(F,{size:`sm`,"aria-label":`경로 — small`,items:[{label:`홈`,href:`#`},{label:`문서`,href:`#`},{label:`Small`,current:!0}]}),o(F,{"aria-label":`경로 — medium`,items:[{label:`홈`,href:`#`},{label:`문서`,href:`#`},{label:`Medium`,current:!0}]}),o(F,{size:`lg`,"aria-label":`경로 — large`,items:[{label:`홈`,href:`#`},{label:`문서`,href:`#`},{label:`Large`,current:!0}]})]),_:1}),o(D,{"heading-id":`ellipsis-heading`,title:`경로 생략`,description:`긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다.`,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbItem href="#" icon aria-label="홈">
      <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    </BreadcrumbItem>
    <li class="breadcrumb_item">
      <button type="button" class="breadcrumb_ellipsis" data-ripple aria-label="숨겨진 경로 보기" aria-haspopup="menu" aria-expanded="false">…</button>
    </li>
    <BreadcrumbItem label="컴포넌트" href="#" />
    <BreadcrumbItem label="Breadcrumb" current />
  </Breadcrumb>
</template>`},{default:a(()=>[o(F,null,{default:a(()=>[o(M,{href:`#`,icon:``,"aria-label":`홈`},{default:a(()=>[...t[1]||=[s(`svg`,{class:`breadcrumb_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[s(`path`,{d:`M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z`})],-1)]]),_:1}),t[2]||=s(`li`,{class:`breadcrumb_item`},[s(`button`,{type:`button`,class:`breadcrumb_ellipsis`,"data-ripple":``,"aria-label":`숨겨진 경로 보기`,"aria-haspopup":`menu`,"aria-expanded":`false`},`…`)],-1),o(M,{label:`컴포넌트`,href:`#`}),o(M,{label:`Breadcrumb`,current:``})]),_:1})]),_:1}),o(D,{"heading-id":`state-heading`,title:`상태`,description:`비활성 링크는 disabled를 사용합니다.`,stack:``,code:`<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';
<\/script>

<template>
  <Breadcrumb aria-label="경로 — 비활성">
    <BreadcrumbItem label="홈" href="#" />
    <BreadcrumbItem label="삭제된 페이지" disabled />
    <BreadcrumbItem label="현재 페이지" current />
  </Breadcrumb>
  <Breadcrumb separator="slash" aria-label="경로 — 긴 레이블">
    <BreadcrumbItem label="홈" href="#" />
    <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
    <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
  </Breadcrumb>
</template>`},{default:a(()=>[o(F,{"aria-label":`경로 — 비활성`},{default:a(()=>[o(M,{label:`홈`,href:`#`}),o(M,{label:`삭제된 페이지`,disabled:``}),o(M,{label:`현재 페이지`,current:``})]),_:1}),o(F,{separator:`slash`,"aria-label":`경로 — 긴 레이블`},{default:a(()=>[o(M,{label:`홈`,href:`#`}),o(M,{label:`프로젝트 관리 및 협업 도구 설정`,href:`#`}),o(M,{label:`사용자 권한 및 역할 기반 접근 제어`,current:``})]),_:1})]),_:1}),o(S,{"heading-id":`api-props-heading`,title:`API · Breadcrumb Props`},{default:a(()=>[o(C,{columns:p(I),rows:p(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(S,{"heading-id":`api-item-props-heading`,title:`API · BreadcrumbItem Props`},{default:a(()=>[o(C,{columns:p(R),rows:p(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(S,{"heading-id":`api-slots-heading`,title:`API · Breadcrumb Slots`},{default:a(()=>[o(C,{columns:p(B),rows:p(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(S,{"heading-id":`api-item-slots-heading`,title:`API · BreadcrumbItem Slots`},{default:a(()=>[o(C,{columns:p(H),rows:p(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(S,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(C,{columns:p(W),rows:p(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(S,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(C,{columns:p(K),rows:p(q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Y as default,J as docMeta};