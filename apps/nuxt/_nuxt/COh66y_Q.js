import{B as e,H as t,L as n,U as r,W as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,wt as g,xt as _,y as v}from"./CCnt5OSV.js";import{t as y}from"./Boqzjccl.js";import{D as b,E as x,O as S,l as C,t as w}from"./DkmWXf_S.js";import{n as T,t as E}from"./D01l-9yr.js";import{t as D}from"./D5AUKneU.js";import{t as O}from"./gHQDdAlU.js";import{t as k}from"./DD3RWXAt.js";import{r as A,s as j,t as M}from"./D6IbhUhQ.js";import{t as N}from"./-gIuMC1U.js";import{t as P}from"./Bt5d3dz_2.js";var F={class:`navbar_container`},I=[`id`],L={class:`navbar_nav`,"aria-label":`주요 메뉴`},R={key:0,class:`navbar_list`},z={key:0,class:`navbar_search`},ee={key:1,class:`navbar_actions`},B=Object.assign({inheritAttrs:!1},{__name:`Navbar`,props:{ripple:E,brand:String,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},borderless:Boolean,dark:Boolean,sticky:Boolean,responsive:Boolean,collapseId:String,brandAs:{type:[String,Object,Function],default:`a`},brandHref:{type:String,default:`#`}},setup(l){let b=l,{rippleAttrs:S,childRippleAttrs:C}=T(b,{mode:`container`}),w=r(),E=f(null),k=i().replace(/:/g,``),A=y,j=h(()=>b.collapseId||`navbar-collapse-${k}`),M=f(!1),N=h(()=>b.brandAs===`NuxtLink`?A:b.brandAs||`a`),P=h(()=>N.value===`a`||typeof N.value!=`string`);x(()=>({...b,brandAs:typeof b.brandAs==`string`?b.brandAs:void 0}),E,w);let B=h(()=>{let e=[`navbar`];return b.size===`sm`&&e.push(`navbar_sm`),b.size===`lg`&&e.push(`navbar_lg`),b.borderless&&e.push(`navbar_borderless`),b.dark&&e.push(`navbar_dark`),b.sticky&&e.push(`navbar_sticky`),b.responsive&&M.value&&e.push(`is-open`),w.class&&e.push(w.class),e}),V=h(()=>{let{class:e,...t}=w;return{...t,...S.value}});function H(e){(!b.brandHref||b.brandHref===`#`)&&e.preventDefault()}function U(){M.value=!M.value}return(r,i)=>(n(),d(`header`,u({ref_key:`rootRef`,ref:E,class:B.value},V.value),[s(`div`,F,[(n(),c(t(N.value),u(m(C),{href:P.value?l.brandHref:void 0,class:`navbar_brand`,onClick:H}),{default:a(()=>[e(r.$slots,`brand`,{},()=>[e(r.$slots,`brand-icon`),v(` `+g(l.brand),1)])]),_:3},16,[`href`])),l.responsive?(n(),c(O,u({key:0},m(C),{variant:`ghost`,"icon-only":``,class:`navbar_toggle`,expanded:M.value,"aria-controls":j.value,"aria-label":M.value?`메뉴 닫기`:`메뉴 열기`,onClick:U}),{"icon-before":a(()=>[o(D,{name:`menu`,size:`sm`,class:`navbar_toggle-icon-open`}),o(D,{name:`close`,size:`sm`,class:`navbar_toggle-icon-close`})]),_:1},16,[`expanded`,`aria-controls`,`aria-label`])):p(``,!0),s(`div`,{class:_([`navbar_collapse`,{"is-open":l.responsive&&M.value}]),id:j.value},[s(`nav`,L,[e(r.$slots,`items`,{},()=>[r.$slots.default?(n(),d(`ul`,R,[e(r.$slots,`default`)])):p(``,!0)])]),r.$slots.search?(n(),d(`div`,z,[e(r.$slots,`search`)])):p(``,!0),r.$slots.actions?(n(),d(`div`,ee,[e(r.$slots,`actions`)])):p(``,!0)],10,I)])],16))}}),V=Object.assign({inheritAttrs:!1},{__name:`NavbarItem`,props:{ripple:E,label:String,href:{type:String,default:`#`},as:{type:[String,Object,Function],default:`a`},active:Boolean},setup(i){let o=i,{rippleAttrs:s}=T(o),l=f(null),p=r(),_=y;b(()=>({...o,as:typeof o.as==`string`?o.as:void 0}),l);let x=h(()=>[`navbar_link`,{"is-active":o.active}]),S=h(()=>o.as===`NuxtLink`?_:o.as||`a`),C=h(()=>S.value===`a`||typeof S.value!=`string`),w=h(()=>{let{class:e,onClick:t,...n}=p;return n});function E(e,t){if(Array.isArray(e)){e.forEach(e=>e?.(t));return}e?.(t)}function D(e){(!o.href||o.href===`#`)&&e.preventDefault(),E(p.onClick,e)}return(r,o)=>(n(),d(`li`,u({ref_key:`rootRef`,ref:l},w.value,{class:[`navbar_item`,m(p).class]}),[(n(),c(t(S.value),u(m(s),{href:C.value?i.href:void 0,type:S.value===`button`?`button`:void 0,class:x.value,"aria-current":i.active?`page`:void 0,onClick:D}),{default:a(()=>[e(r.$slots,`default`,{},()=>[v(g(i.label),1)]),e(r.$slots,`badge`)]),_:3},16,[`href`,`type`,`class`,`aria-current`]))],16))}}),H={__name:`NavbarList`,setup(t){let r=f(null);return S(r),(t,i)=>(n(),d(`ul`,{ref_key:`rootRef`,ref:r,class:`navbar_list`},[e(t.$slots,`default`)],512))}},U=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],W=[{name:`brand`,type:`string`,default:`—`,description:`브랜드 텍스트. brand 슬롯으로 대체`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`navbar_sm · navbar_lg`},{name:`borderless`,type:`boolean`,default:`false`,description:`하단 테두리 제거`},{name:`dark`,type:`boolean`,default:`false`,description:`어두운 배경 (navbar_dark)`},{name:`sticky`,type:`boolean`,default:`false`,description:`상단 고정 (navbar_sticky)`},{name:`responsive`,type:`boolean`,default:`false`,description:`모바일 토글·열림 상태 관리`},{name:`collapse-id`,type:`string`,default:`—`,description:`navbar_collapse id (토글 aria-controls)`},{name:`brand-as`,type:`string | Component`,default:`a`,description:`브랜드 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트 지정`},{name:`brand-href`,type:`string`,default:`#`,description:`브랜드 링크 URL`},A],G=U,K=[{name:`label`,type:`string`,default:`—`,description:`링크 텍스트. default 슬롯으로 대체`},{name:`href`,type:`string`,default:`#`,description:`링크 URL`},{name:`as`,type:`string | Component`,default:`a`,description:`링크 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트 지정`},{name:`active`,type:`boolean`,default:`false`,description:`is-active · aria-current="page"`},j],q=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],J=[{name:`brand`,description:`브랜드 영역 (brand prop 대체)`},{name:`brand-icon`,description:`브랜드 아이콘 (Icon)`},{name:`items`,description:`메뉴 목록 (NavbarList)`},{name:`default`,description:`items 대체 — NavbarItem 나열`},{name:`search`,description:`검색 필드 (navbar_search)`},{name:`actions`,description:`우측 액션 (navbar_actions)`}],Y=q,X=[{name:`default`,description:`링크 텍스트 (label 대체)`},{name:`badge`,description:`링크 옆 배지`}],Z=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],Q=[{name:`navbar · navbar_container · navbar_brand`,description:`루트·컨테이너·브랜드`},{name:`navbar_toggle · navbar_collapse · navbar_nav · navbar_list`,description:`토글·접힘 영역·내비`},{name:`navbar_item · navbar_link`,description:`항목·링크 (is-active)`},{name:`navbar_search · navbar_actions`,description:`검색·액션 영역`},{name:`navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark`,description:`크기·변형`},{name:`is-open`,description:`Vue 상태로 관리하는 반응형 메뉴 열림 상태`},...M],te=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],ne=[{name:`--navbar-height · --navbar-height-sm · --navbar-height-lg`,default:`—`,description:`높이 변형`},{name:`--navbar-padding-x · --navbar-gap`,default:`—`,description:`패딩·간격`},{name:`--navbar-z-index`,default:`—`,description:`sticky 레이어`}],re={class:`navbar_demo`},ie={class:`navbar_demo`},ae={class:`navbar_demo`},oe={class:`navbar_demo`},$={class:`navbar_demo`},se={class:`navbar_demo`},ce={class:`navbar_demo`},le={class:`navbar_demo`},ue={class:`navbar_demo`},de={class:`navbar_demo navbar_demo-scroll`},fe={class:`navbar_demo`},pe={class:`navbar_demo`},me={title:`Navbar | UXKM Guide`,activeNav:`navbar`,pageTitle:`Navbar`},he={__name:`navbar`,setup(e){return(e,t)=>(n(),d(l,null,[t[4]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Navbar`),s(`p`,{class:`lead`},`사이트 상단 내비게이션 바입니다. 브랜드·메뉴·검색·액션 버튼을 한 줄에 배치하며, 좁은 화면에서는 토글로 메뉴를 접습니다.`)],-1),o(k,{"heading-id":`basic-heading`,title:`기본`,description:`NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다.`,stack:``,code:`<script setup>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="UXKM" brand-as="NuxtLink" brand-href="/">
      <template #items>
        <NavbarList>
          <NavbarItem as="NuxtLink" href="/" label="홈" active />
          <NavbarItem as="NuxtLink" href="/components/button" label="컴포넌트" />
          <NavbarItem as="NuxtLink" href="/design-tokens" label="토큰" />
          <NavbarItem as="NuxtLink" href="/getting-started" label="시작하기" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,re,[o(B,{brand:`UXKM`,"brand-as":`NuxtLink`,"brand-href":`/`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{as:`NuxtLink`,href:`/`,label:`홈`,active:``}),o(V,{as:`NuxtLink`,href:`/components/button`,label:`컴포넌트`}),o(V,{as:`NuxtLink`,href:`/design-tokens`,label:`토큰`}),o(V,{as:`NuxtLink`,href:`/getting-started`,label:`시작하기`})]),_:1})]),_:1})])]),_:1}),o(k,{"heading-id":`brand-heading`,title:`브랜드`,description:`brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="HTML Components">
      <template #brand-icon>
        <Icon class="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18"/>
        </Icon>
      </template>
      <template #items>
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,ie,[o(B,{brand:`HTML Components`},{"brand-icon":a(()=>[o(D,{class:`navbar_brand-icon`},{default:a(()=>[...t[0]||=[s(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`},null,-1),s(`path`,{d:`M9 3v18`},null,-1)]]),_:1})]),items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`가이드`,active:``}),o(V,{label:`리소스`})]),_:1})]),_:1})])]),_:1}),o(k,{"heading-id":`actions-heading`,title:`액션 영역`,description:`navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Dashboard">
      <template #items>
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      </template>
      <template #actions>
        <Button variant="ghost" size="sm" aria-label="알림">
          <template #icon-before>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </template>
        </Button>
        <Button variant="outline" size="sm" label="로그인" />
        <Button variant="filled" color="primary" size="sm" label="가입" />
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,ae,[o(B,{brand:`Dashboard`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`개요`,active:``}),o(V,{label:`분석`}),o(V,{label:`설정`})]),_:1})]),actions:a(()=>[o(O,{variant:`ghost`,size:`sm`,"aria-label":`알림`},{"icon-before":a(()=>[...t[1]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[s(`path`,{d:`M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9`}),s(`path`,{d:`M13.73 21a2 2 0 0 1-3.46 0`})],-1)]]),_:1}),o(O,{variant:`outline`,size:`sm`,label:`로그인`}),o(O,{variant:`filled`,color:`primary`,size:`sm`,label:`가입`})]),_:1})])]),_:1}),o(k,{"heading-id":`search-heading`,title:`검색`,description:`navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Docs">
      <template #items>
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      </template>
      <template #search>
        <Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" />
      </template>
      <template #actions>
        <Button variant="filled" color="primary" size="sm" label="GitHub" />
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,oe,[o(B,{brand:`Docs`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`시작하기`}),o(V,{label:`컴포넌트`,active:``}),o(V,{label:`패턴`})]),_:1})]),search:a(()=>[o(P,{type:`search`,id:`navbar-search-demo`,size:`sm`,placeholder:`문서 검색…`,autocomplete:`off`,"aria-label":`문서 검색`})]),actions:a(()=>[o(O,{variant:`filled`,color:`primary`,size:`sm`,label:`GitHub`})]),_:1})])]),_:1}),o(k,{"heading-id":`size-heading`,title:`크기`,description:`navbar_sm · navbar_lg로 높이를 조절합니다.`,stack:``,code:`<script setup>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Small" size="sm">
      <template #items>
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      </template>
    </Navbar>
  </div>
  <div class="navbar_demo">
    <Navbar brand="Default">
      <template #items>
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      </template>
    </Navbar>
  </div>
  <div class="navbar_demo">
    <Navbar brand="Large" size="lg">
      <template #items>
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,$,[o(B,{brand:`Small`,size:`sm`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`메뉴`,active:``})]),_:1})]),_:1})]),s(`div`,se,[o(B,{brand:`Default`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`메뉴`,active:``})]),_:1})]),_:1})]),s(`div`,ce,[o(B,{brand:`Large`,size:`lg`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`메뉴`,active:``})]),_:1})]),_:1})])]),_:1}),o(k,{"heading-id":`variant-heading`,title:`스타일 변형`,description:`navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다.`,stack:``,code:`<script setup>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Borderless" borderless>
      <template #items>
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="소개" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
  <div class="navbar_demo">
    <Navbar brand="Dark Surface" dark>
      <template #items>
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="소개" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
  <div class="navbar_demo navbar_demo-scroll">
    <Navbar brand="Sticky" sticky>
      <template #items>
        <NavbarList>
          <NavbarItem label="고정" active />
        </NavbarList>
      </template>
    </Navbar>
    <div style="padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);">
      <p style="margin: 0 0 var(--space-md);">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
      <p style="margin: 0;">콘텐츠 영역 예시입니다.</p>
      <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
      <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
    </div>
  </div>
</template>`},{default:a(()=>[s(`div`,le,[o(B,{brand:`Borderless`,borderless:``},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`홈`,active:``}),o(V,{label:`소개`})]),_:1})]),_:1})]),s(`div`,ue,[o(B,{brand:`Dark Surface`,dark:``},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`홈`,active:``}),o(V,{label:`소개`})]),_:1})]),_:1})]),s(`div`,de,[o(B,{brand:`Sticky`,sticky:``},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`고정`,active:``})]),_:1})]),_:1}),t[2]||=s(`div`,{style:{padding:`var(--space-xl)`,color:`var(--color-text-muted)`,"font-size":`var(--text-size-sm)`}},[s(`p`,{style:{margin:`0 0 var(--space-md)`}},`스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.`),s(`p`,{style:{margin:`0`}},`콘텐츠 영역 예시입니다.`),s(`p`,{style:{margin:`var(--space-md) 0 0`}},`추가 콘텐츠…`),s(`p`,{style:{margin:`var(--space-md) 0 0`}},`추가 콘텐츠…`)],-1)])]),_:1}),o(k,{"heading-id":`badge-heading`,title:`배지`,description:`메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다.`,stack:``,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Inbox">
      <template #items>
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem label="알림">
            <template #badge>
              <Badge color="danger">3</Badge>
            </template>
          </NavbarItem>
          <NavbarItem label="보관함" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,fe,[o(B,{brand:`Inbox`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`받은편지함`,active:``}),o(V,{label:`알림`},{badge:a(()=>[o(N,{color:`danger`},{default:a(()=>[...t[3]||=[v(`3`,-1)]]),_:1})]),_:1}),o(V,{label:`보관함`})]),_:1})]),_:1})])]),_:1}),o(k,{"heading-id":`responsive-heading`,title:`반응형`,description:`768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarList from '@/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="Mobile" responsive collapse-id="navbar-responsive-demo">
      <template #items>
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      </template>
      <template #actions>
        <Button variant="outline" size="sm" label="로그인" />
        <Button variant="filled" color="primary" size="sm" label="시작하기" />
      </template>
    </Navbar>
  </div>
</template>`},{default:a(()=>[s(`div`,pe,[o(B,{brand:`Mobile`,responsive:``,"collapse-id":`navbar-responsive-demo`},{items:a(()=>[o(H,null,{default:a(()=>[o(V,{label:`홈`,active:``}),o(V,{label:`제품`}),o(V,{label:`가격`}),o(V,{label:`문의`})]),_:1})]),actions:a(()=>[o(O,{variant:`outline`,size:`sm`,label:`로그인`}),o(O,{variant:`filled`,color:`primary`,size:`sm`,label:`시작하기`})]),_:1})])]),_:1}),o(C,{"heading-id":`api-props-heading`,title:`API · Navbar Props`},{default:a(()=>[o(w,{columns:m(U),rows:m(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(C,{"heading-id":`api-item-props-heading`,title:`API · NavbarItem Props`},{default:a(()=>[o(w,{columns:m(G),rows:m(K),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(C,{"heading-id":`api-slots-heading`,title:`API · Navbar Slots`},{default:a(()=>[o(w,{columns:m(q),rows:m(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(C,{"heading-id":`api-item-slots-heading`,title:`API · NavbarItem Slots`},{default:a(()=>[o(w,{columns:m(Y),rows:m(X),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(C,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(w,{columns:m(Z),rows:m(Q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(C,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(w,{columns:m(te),rows:m(ne),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{he as default,me as docMeta};