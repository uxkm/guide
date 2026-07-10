import{b as pa,c as N,k as C,m as A,d as ca,e as B,r as b,l as da,j as Na,q as I,f as S,o as p,g as Ca,t as Ba,h as w,a as Ia}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as t}from"./Button-C3SXv-sJ.js";import{_ as e}from"./Icon-D97OEunV.js";import{r as ga,u as fa}from"./useRipple-oORGvIsP.js";import{o as La}from"./useDemoCode-B9b0dRAo.js";import{_ as i}from"./Badge-CcXPSX6F.js";import{_ as v}from"./Input-CACUek-A.js";import{_ as l}from"./Menu-DBYlTFC4.js";import{_ as u}from"./MenuItem-DlfmWCz0.js";import{_ as r}from"./NavbarItem-JlwXE1wN.js";import{_ as s}from"./NavbarList-C7NI9fuC.js";import{c as ka,b as _a,a as Da}from"./ripple-api-C5ZjLJl-.js";const ya=["data-navbar"],ha={class:"navbar_container"},xa=["id"],Aa={class:"navbar_nav","aria-label":"주요 메뉴"},Ea={key:0,class:"navbar_list"},Ma={key:0,class:"navbar_search"},za={key:1,class:"navbar_actions"},n=Object.assign({inheritAttrs:!1},{__name:"Navbar",props:{ripple:ga,brand:String,size:{type:String,default:"md",validator:o=>["sm","md","lg"].includes(o)},borderless:Boolean,dark:Boolean,sticky:Boolean,responsive:Boolean,collapseId:String},setup(o){const m=o,{rippleAttrs:la,childRippleAttrs:E}=fa(m,{mode:"container"}),c=pa(),M=Ia(null),z=m.collapseId||`navbar-collapse-${Math.random().toString(36).slice(2,9)}`;La(m,M,c);const ua=S(()=>{const a=["navbar"];return m.size==="sm"&&a.push("navbar_sm"),m.size==="lg"&&a.push("navbar_lg"),m.borderless&&a.push("navbar_borderless"),m.dark&&a.push("navbar_dark"),m.sticky&&a.push("navbar_sticky"),c.class&&a.push(c.class),a}),ba=S(()=>{const{class:a,...d}=c;return{...d,...la.value}});return(a,d)=>(p(),N("header",A({ref_key:"rootRef",ref:M,class:ua.value,"data-navbar":o.responsive||void 0},ba.value),[C("div",ha,[C("a",A(B(E),{href:"#",class:"navbar_brand",onClick:d[0]||(d[0]=ca(()=>{},["prevent"]))}),[b(a.$slots,"brand",{},()=>[b(a.$slots,"brand-icon"),Ca(" "+Ba(o.brand),1)])],16),o.responsive?(p(),da(t,A({key:0},B(E),{variant:"ghost","icon-only":"",class:"navbar_toggle","data-navbar-toggle":"","aria-expanded":"false","aria-controls":B(z),"aria-label":"메뉴 열기"}),{"icon-before":Na(()=>[w(e,{name:"menu",size:"sm",class:"navbar_toggle-icon-open"}),w(e,{name:"close",size:"sm",class:"navbar_toggle-icon-close"})]),_:1},16,["aria-controls"])):I("",!0),C("div",{class:"navbar_collapse",id:B(z)},[C("nav",Aa,[b(a.$slots,"items",{},()=>[a.$slots.default?(p(),N("ul",Ea,[b(a.$slots,"default")])):I("",!0)])]),a.$slots.search?(p(),N("div",Ma,[b(a.$slots,"search")])):I("",!0),a.$slots.actions?(p(),N("div",za,[b(a.$slots,"actions")])):I("",!0)],8,xa)])],16,ya))}}),ia=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Sa=[{name:"brand",type:"string",default:"—",description:"브랜드 텍스트. brand 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"navbar_sm · navbar_lg"},{name:"borderless",type:"boolean",default:"false",description:"하단 테두리 제거"},{name:"dark",type:"boolean",default:"false",description:"어두운 배경 (navbar_dark)"},{name:"sticky",type:"boolean",default:"false",description:"상단 고정 (navbar_sticky)"},{name:"responsive",type:"boolean",default:"false",description:"모바일 토글·data-navbar"},{name:"collapse-id",type:"string",default:"—",description:"navbar_collapse id (토글 aria-controls)"},ka],wa=ia,Pa=[{name:"label",type:"string",default:"—",description:"링크 텍스트. default 슬롯으로 대체"},{name:"href",type:"string",default:"#",description:"링크 URL"},{name:"active",type:"boolean",default:"false",description:'is-active · aria-current="page"'},_a],va=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Fa=[{name:"brand",description:"브랜드 영역 (brand prop 대체)"},{name:"brand-icon",description:"브랜드 아이콘 (Icon)"},{name:"items",description:"메뉴 목록 (NavbarList)"},{name:"default",description:"items 대체 — NavbarItem 나열"},{name:"search",description:"검색 필드 (navbar_search)"},{name:"actions",description:"우측 액션 (navbar_actions)"}],$a=va,Ta=[{name:"default",description:"링크 텍스트 (label 대체)"},{name:"badge",description:"링크 옆 배지"}],Ha=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ra=[{name:"navbar · navbar_container · navbar_brand",description:"루트·컨테이너·브랜드"},{name:"navbar_toggle · navbar_collapse · navbar_nav · navbar_list",description:"토글·접힘 영역·내비"},{name:"navbar_item · navbar_link",description:"항목·링크 (is-active)"},{name:"navbar_search · navbar_actions",description:"검색·액션 영역"},{name:"navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark",description:"크기·변형"},{name:"data-navbar · data-navbar-toggle",description:"반응형 JS 연동"},...Da],Va=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ua=[{name:"--navbar-height · --navbar-height-sm · --navbar-height-lg",default:"—",description:"높이 변형"},{name:"--navbar-padding-x · --navbar-gap",default:"—",description:"패딩·간격"},{name:"--navbar-z-index",default:"—",description:"sticky 레이어"}],Ga=[{title:"API · Navbar Props",tables:[{columns:ia,rows:Sa,codeColumn:"name"}]},{title:"API · NavbarItem Props",tables:[{columns:wa,rows:Pa,codeColumn:"name"}]},{title:"API · Navbar Slots",tables:[{columns:va,rows:Fa,codeColumn:"name"}]},{title:"API · NavbarItem Slots",tables:[{columns:$a,rows:Ta,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ha,rows:Ra,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Va,rows:Ua,codeColumn:"name"}]}],ne={title:"Components/네비게이션/Navbar",id:"components-navbar",component:n,tags:["autodocs"],argTypes:{brand:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},borderless:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},sticky:{control:"boolean",type:{name:"boolean",summary:"boolean"}},responsive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},collapseId:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"fullscreen",apiSections:Ga}},g={args:{brand:"값",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:"값"},render:o=>({components:{Navbar:n,NavbarItem:r,NavbarList:s},setup(){return{args:o}},template:`<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>`})},f={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},L={name:"브랜드",parameters:{demoPreview:{stack:!0},docs:{description:{story:"brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},k={name:"액션 영역",parameters:{demoPreview:{stack:!0},docs:{description:{story:"navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},_={name:"검색",parameters:{demoPreview:{stack:!0},docs:{description:{story:"navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},D={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"navbar_sm · navbar_lg로 높이를 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},y={name:"스타일 변형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},h={name:"배지",parameters:{demoPreview:{stack:!0},docs:{description:{story:"메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})},x={name:"반응형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Navbar:n,Badge:i,Button:t,Icon:e,Input:v,Menu:l,MenuItem:u,NavbarItem:r,NavbarList:s},template:`<div class="navbar_demo">
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
    </div>`})};var P,F,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    brand: "값",
    size: "md",
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: "값"
  },
  render: args => ({
    components: {
      Navbar,
      NavbarItem,
      NavbarList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>\`
  })
}`,...($=(F=g.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var T,H,R;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(R=(H=f.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var V,U,G;L.parameters={...L.parameters,docs:{...(V=L.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "브랜드",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(G=(U=L.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,O,X;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "액션 영역",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(X=(O=k.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var j,q,J;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "검색",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(J=(q=_.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,W,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(Y=(W=D.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,aa,ea;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "스타일 변형",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(ea=(aa=y.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var na,ta,ra;h.parameters={...h.parameters,docs:{...(na=h.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(ra=(ta=h.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var sa,oa,ma;x.parameters={...x.parameters,docs:{...(sa=x.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: "반응형",
  parameters: {
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
  render: () => ({
    components: {
      Navbar,
      Badge,
      Button,
      Icon,
      Input,
      Menu,
      MenuItem,
      NavbarItem,
      NavbarList
    },
    template: \`<div class="navbar_demo">
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
  })
}`,...(ma=(oa=x.parameters)==null?void 0:oa.docs)==null?void 0:ma.source}}};const te=["Playground","Basic","Brand","Actions","Search","Size","Variant","BadgeDemo","Responsive"];export{k as Actions,h as BadgeDemo,f as Basic,L as Brand,g as Playground,x as Responsive,_ as Search,D as Size,y as Variant,te as __namedExportsOrder,ne as default};
