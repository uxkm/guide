import{k as la,l as ia,a as Na,aA as Ca,c as b,d,p as A,z as ma,s as N,r as o,m as fa,w as Ba,q as x,f,g as z,o as i,e as va,t as ba,h as S,_ as E,i as w,aB as Ia,aC as ga}from"./iframe-CAswI7Qe.js";import{w as l,s as ka}from"./story-renders-DjeoaiCa.js";import{_ as La}from"./Badge-C0poPfcI.js";import{_ as Da}from"./Input-D5JJcvl9.js";import{h as ya,r as _a,a as ha}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Aa=["data-navbar"],xa={class:"navbar_container"},za=["id"],Ea={class:"navbar_nav","aria-label":"주요 메뉴"},wa={key:0,class:"navbar_list"},Sa={key:0,class:"navbar_search"},Pa={key:1,class:"navbar_actions"},t=Object.assign({inheritAttrs:!1},{__name:"Navbar",props:{ripple:la,brand:String,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},borderless:Boolean,dark:Boolean,sticky:Boolean,responsive:Boolean,collapseId:String},setup(n){const e=n,{rippleAttrs:u,childRippleAttrs:m}=ia(e,{mode:"container"}),v=Na(),c=w(null),p=e.collapseId||`navbar-collapse-${Math.random().toString(36).slice(2,9)}`;Ca(e,c,v);const pa=z(()=>{const a=["navbar"];return e.size==="sm"&&a.push("navbar_sm"),e.size==="lg"&&a.push("navbar_lg"),e.borderless&&a.push("navbar_borderless"),e.dark&&a.push("navbar_dark"),e.sticky&&a.push("navbar_sticky"),v.class&&a.push(v.class),a}),da=z(()=>{const{class:a,...C}=v;return{...C,...u.value}});return(a,C)=>(i(),b("header",A({ref_key:"rootRef",ref:c,class:pa.value,"data-navbar":n.responsive||void 0},da.value),[d("div",xa,[d("a",A(N(m),{href:"#",class:"navbar_brand",onClick:C[0]||(C[0]=ma(()=>{},["prevent"]))}),[o(a.$slots,"brand",{},()=>[o(a.$slots,"brand-icon"),va(" "+ba(n.brand),1)])],16),n.responsive?(i(),fa(x,A({key:0},N(m),{variant:"ghost","icon-only":"",class:"navbar_toggle","data-navbar-toggle":"","aria-expanded":"false","aria-controls":N(p),"aria-label":"메뉴 열기"}),{"icon-before":Ba(()=>[S(E,{name:"menu",size:"sm",class:"navbar_toggle-icon-open"}),S(E,{name:"close",size:"sm",class:"navbar_toggle-icon-close"})]),_:1},16,["aria-controls"])):f("",!0),d("div",{class:"navbar_collapse",id:N(p)},[d("nav",Ea,[o(a.$slots,"items",{},()=>[a.$slots.default?(i(),b("ul",wa,[o(a.$slots,"default")])):f("",!0)])]),a.$slots.search?(i(),b("div",Sa,[o(a.$slots,"search")])):f("",!0),a.$slots.actions?(i(),b("div",Pa,[o(a.$slots,"actions")])):f("",!0)],8,za)])],16,Aa))}}),Fa=["href","aria-current"],r={__name:"NavbarItem",props:{ripple:la,label:String,href:{type:String,default:"#"},active:Boolean},setup(n){const e=n,{rippleAttrs:u}=ia(e),m=w(null);Ia(e,m);const v=z(()=>["navbar_link",{"is-active":e.active}]);return(c,p)=>(i(),b("li",{ref_key:"rootRef",ref:m,class:"navbar_item"},[d("a",A(N(u),{href:n.href,class:v.value,"aria-current":n.active?"page":void 0,onClick:p[0]||(p[0]=ma(()=>{},["prevent"]))}),[o(c.$slots,"default",{},()=>[va(ba(n.label),1)]),o(c.$slots,"badge")],16,Fa)],512))}},s={__name:"NavbarList",setup(n){const e=w(null);return ga(e),(u,m)=>(i(),b("ul",{ref_key:"rootRef",ref:e,class:"navbar_list"},[o(u.$slots,"default")],512))}},ua=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ma=[{name:"brand",type:"string",default:"—",description:"브랜드 텍스트. brand 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"navbar_sm · navbar_lg"},{name:"borderless",type:"boolean",default:"false",description:"하단 테두리 제거"},{name:"dark",type:"boolean",default:"false",description:"어두운 배경 (navbar_dark)"},{name:"sticky",type:"boolean",default:"false",description:"상단 고정 (navbar_sticky)"},{name:"responsive",type:"boolean",default:"false",description:"모바일 토글·data-navbar"},{name:"collapse-id",type:"string",default:"—",description:"navbar_collapse id (토글 aria-controls)"},ya],Ra=ua,$a=[{name:"label",type:"string",default:"—",description:"링크 텍스트. default 슬롯으로 대체"},{name:"href",type:"string",default:"#",description:"링크 URL"},{name:"active",type:"boolean",default:"false",description:'is-active · aria-current="page"'},_a],ca=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ta=[{name:"brand",description:"브랜드 영역 (brand prop 대체)"},{name:"brand-icon",description:"브랜드 아이콘 (Icon)"},{name:"items",description:"메뉴 목록 (NavbarList)"},{name:"default",description:"items 대체 — NavbarItem 나열"},{name:"search",description:"검색 필드 (navbar_search)"},{name:"actions",description:"우측 액션 (navbar_actions)"}],Ha=ca,Va=[{name:"default",description:"링크 텍스트 (label 대체)"},{name:"badge",description:"링크 옆 배지"}],Ua=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ga=[{name:"navbar · navbar_container · navbar_brand",description:"루트·컨테이너·브랜드"},{name:"navbar_toggle · navbar_collapse · navbar_nav · navbar_list",description:"토글·접힘 영역·내비"},{name:"navbar_item · navbar_link",description:"항목·링크 (is-active)"},{name:"navbar_search · navbar_actions",description:"검색·액션 영역"},{name:"navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark",description:"크기·변형"},{name:"data-navbar · data-navbar-toggle",description:"반응형 JS 연동"},...ha],Ka=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Oa=[{name:"--navbar-height · --navbar-height-sm · --navbar-height-lg",default:"—",description:"높이 변형"},{name:"--navbar-padding-x · --navbar-gap",default:"—",description:"패딩·간격"},{name:"--navbar-z-index",default:"—",description:"sticky 레이어"}],Xa=[{title:"API · Navbar Props",tables:[{columns:ua,rows:Ma,codeColumn:"name"}]},{title:"API · NavbarItem Props",tables:[{columns:Ra,rows:$a,codeColumn:"name"}]},{title:"API · Navbar Slots",tables:[{columns:ca,rows:Ta,codeColumn:"name"}]},{title:"API · NavbarItem Slots",tables:[{columns:Ha,rows:Va,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ua,rows:Ga,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ka,rows:Oa,codeColumn:"name"}]}],Za={title:"Components/네비게이션/Navbar",id:"components-navbar",component:t,subcomponents:{NavbarItem:r,NavbarList:s},tags:["autodocs"],argTypes:{brand:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},borderless:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},sticky:{control:"boolean",type:{name:"boolean",summary:"boolean"}},responsive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},collapseId:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:Xa}},B={parameters:{controls:{disable:!1}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:(n,e)=>({components:{Navbar:t,NavbarItem:r,NavbarList:s},setup(){return{args:ka(e)}},template:`<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>`})},I={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."},source:{code:`<script setup>
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
<\/script>

<template>
  <div class="navbar_demo">
    <Navbar brand="UXKM">
      <template #items>
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>
      </template>
    </Navbar>
  </div>
</template>`,language:"vue"}}},args:{brand:"값",size:"md",collapseId:"값"},render:l(()=>({components:{Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
        <Navbar brand="UXKM">
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="컴포넌트" />
        <NavbarItem label="토큰" />
        <NavbarItem label="접근성" />
        </NavbarList>
        </template>
        </Navbar>
        </div>`}))},g={name:"브랜드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Icon:E,Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},k={name:"액션 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Button:x,Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},L={name:"검색",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Button:x,Input:Da,Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},D={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_sm · navbar_lg로 높이를 조절합니다."},source:{code:`<script setup>
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},y={name:"스타일 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."},source:{code:`<script setup>
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},_={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Badge:La,Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))},h={name:"반응형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
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
</template>`,language:"vue"}}},args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:l(()=>({components:{Button:x,Navbar:t,NavbarItem:r,NavbarList:s},template:`        <div class="navbar_demo">
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
        </div>`}))};var P,F,M;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: (_args, context) => ({
    components: {
      Navbar,
      NavbarItem,
      NavbarList
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>\`
  })
}`,...(M=(F=B.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,$,T;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"UXKM\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"홈\\" active />\\n          <NavbarItem label=\\"컴포넌트\\" />\\n          <NavbarItem label=\\"토큰\\" />\\n          <NavbarItem label=\\"접근성\\" />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
        <Navbar brand="UXKM">
        <template #items>
        <NavbarList>
        <NavbarItem label="홈" active />
        <NavbarItem label="컴포넌트" />
        <NavbarItem label="토큰" />
        <NavbarItem label="접근성" />
        </NavbarList>
        </template>
        </Navbar>
        </div>\`
  }))
}`,...(T=($=I.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var H,V,U;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "브랜드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"HTML Components\\">\\n      <template #brand-icon>\\n        <Icon class=\\"navbar_brand-icon\\">\\n          <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"/>\\n          <path d=\\"M9 3v18\\"/>\\n        </Icon>\\n      </template>\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"가이드\\" active />\\n          <NavbarItem label=\\"리소스\\" />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(U=(V=g.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var G,K,O;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "액션 영역",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Dashboard\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"개요\\" active />\\n          <NavbarItem label=\\"분석\\" />\\n          <NavbarItem label=\\"설정\\" />\\n        </NavbarList>\\n      </template>\\n      <template #actions>\\n        <Button variant=\\"ghost\\" size=\\"sm\\" aria-label=\\"알림\\">\\n          <template #icon-before>\\n            <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <path d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\\"/>\\n              <path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/>\\n            </svg>\\n          </template>\\n        </Button>\\n        <Button variant=\\"outline\\" size=\\"sm\\" label=\\"로그인\\" />\\n        <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"가입\\" />\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(O=(K=k.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var X,j,q;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "검색",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Docs\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"시작하기\\" />\\n          <NavbarItem label=\\"컴포넌트\\" active />\\n          <NavbarItem label=\\"패턴\\" />\\n        </NavbarList>\\n      </template>\\n      <template #search>\\n        <Input type=\\"search\\" id=\\"navbar-search-demo\\" size=\\"sm\\" placeholder=\\"문서 검색…\\" autocomplete=\\"off\\" aria-label=\\"문서 검색\\" />\\n      </template>\\n      <template #actions>\\n        <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"GitHub\\" />\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Input,
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(q=(j=L.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,W;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: "navbar_sm · navbar_lg로 높이를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Small\\" size=\\"sm\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"메뉴\\" active />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Default\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"메뉴\\" active />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Large\\" size=\\"lg\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"메뉴\\" active />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(W=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,aa;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "스타일 변형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."
      },
      source: {
        code: "<script setup>\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Borderless\\" borderless>\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"홈\\" active />\\n          <NavbarItem label=\\"소개\\" />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Dark Surface\\" dark>\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"홈\\" active />\\n          <NavbarItem label=\\"소개\\" />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n  <div class=\\"navbar_demo navbar_demo-scroll\\">\\n    <Navbar brand=\\"Sticky\\" sticky>\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"고정\\" active />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n    <div style=\\"padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);\\">\\n      <p style=\\"margin: 0 0 var(--space-md);\\">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>\\n      <p style=\\"margin: 0;\\">콘텐츠 영역 예시입니다.</p>\\n      <p style=\\"margin: var(--space-md) 0 0;\\">추가 콘텐츠…</p>\\n      <p style=\\"margin: var(--space-md) 0 0;\\">추가 콘텐츠…</p>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(aa=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};var ea,na,ta;_.parameters={..._.parameters,docs:{...(ea=_.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Inbox\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"받은편지함\\" active />\\n          <NavbarItem label=\\"알림\\">\\n            <template #badge>\\n              <Badge color=\\"danger\\">3</Badge>\\n            </template>\\n          </NavbarItem>\\n          <NavbarItem label=\\"보관함\\" />\\n        </NavbarList>\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge,
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(ta=(na=_.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var ra,sa,oa;h.parameters={...h.parameters,docs:{...(ra=h.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: "반응형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Navbar from '@uxkm/ui/components/Navbar.vue';\\nimport NavbarItem from '@uxkm/ui/components/NavbarItem.vue';\\nimport NavbarList from '@uxkm/ui/components/NavbarList.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"navbar_demo\\">\\n    <Navbar brand=\\"Mobile\\" responsive collapse-id=\\"navbar-responsive-demo\\">\\n      <template #items>\\n        <NavbarList>\\n          <NavbarItem label=\\"홈\\" active />\\n          <NavbarItem label=\\"제품\\" />\\n          <NavbarItem label=\\"가격\\" />\\n          <NavbarItem label=\\"문의\\" />\\n        </NavbarList>\\n      </template>\\n      <template #actions>\\n        <Button variant=\\"outline\\" size=\\"sm\\" label=\\"로그인\\" />\\n        <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"시작하기\\" />\\n      </template>\\n    </Navbar>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Navbar,
      NavbarItem,
      NavbarList
    },
    template: \`        <div class="navbar_demo">
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
        </div>\`
  }))
}`,...(oa=(sa=h.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};const ae=["Playground","Basic","Brand","Actions","Search","Size","Variant","BadgeDemo","Responsive"];export{k as Actions,_ as BadgeDemo,I as Basic,g as Brand,B as Playground,h as Responsive,L as Search,D as Size,y as Variant,ae as __namedExportsOrder,Za as default};
