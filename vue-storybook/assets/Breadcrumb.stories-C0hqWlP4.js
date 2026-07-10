import{u as U,b as q,c as h,k as G,F as J,s as K,r as Q,n as W,f as X,o as B,l as Y,a as Z}from"./vue.esm-bundler-BaZlnz8B.js";import{u as ee,c as re}from"./useDemoCode-B9b0dRAo.js";import{_ as a}from"./BreadcrumbItem-sSg-JBMj.js";import{b as ae,a as ue}from"./ripple-api-C5ZjLJl-.js";import"./useRipple-oORGvIsP.js";const ne=["aria-label"],te={class:"breadcrumb_list"},u=Object.assign({inheritAttrs:!1},{__name:"Breadcrumb",props:{items:{type:Array,default:()=>[]},ariaLabel:{type:String,default:"경로"},separator:{type:String,default:"chevron",validator:e=>["chevron","slash","dot"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)}},setup(e){const t=e,$=U(),i=q(),p=Z(null),j=re("Breadcrumb",{defaults:{ariaLabel:"경로",separator:"chevron",size:"md"},skipProps:["items"],selfClosing:!1});ee(j,t,$,p,i);const N=X(()=>{const r=["breadcrumb"];return t.separator==="slash"&&r.push("breadcrumb_sep-slash"),t.separator==="dot"&&r.push("breadcrumb_sep-dot"),t.size==="sm"&&r.push("breadcrumb_sm"),t.size==="lg"&&r.push("breadcrumb_lg"),i.class&&r.push(i.class),r});return(r,he)=>(B(),h("nav",{ref_key:"rootRef",ref:p,class:W(N.value),"aria-label":e.ariaLabel},[G("ol",te,[e.items.length?(B(!0),h(J,{key:0},K(e.items,(n,C)=>(B(),Y(a,{key:C,label:n.label,href:n.href,current:n.current??C===e.items.length-1,disabled:n.disabled,icon:n.icon,"aria-label":n.ariaLabel},null,8,["label","href","current","disabled","icon","aria-label"]))),128)):Q(r.$slots,"default",{key:1})])],10,ne))}}),R=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],le=[{name:"items",type:"Array<{ label, href?, current?, disabled? }>",default:"[]",description:"경로 데이터. BreadcrumbItem 슬롯 대체"},{name:"aria-label",type:"string",default:"경로",description:"nav aria-label"},{name:"separator",type:"'chevron' | 'slash' | 'dot'",default:"chevron",description:"breadcrumb_sep-slash · breadcrumb_sep-dot"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"breadcrumb_sm · breadcrumb_lg"}],me=R,se=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL"},{name:"current",type:"boolean",default:"false",description:'is-current · aria-current="page"'},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"icon",type:"boolean",default:"false",description:"breadcrumb_link-icon"},{name:"aria-label",type:"string",default:"—",description:"아이콘 전용 링크 라벨"},ae],T=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ce=[{name:"default",description:"BreadcrumbItem 나열 (items prop 대체)"}],be=T,oe=[{name:"default",description:"링크 텍스트·아이콘 (label 대체)"}],de=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ie=[{name:"breadcrumb · breadcrumb_list · breadcrumb_item",description:"루트·목록·항목"},{name:"breadcrumb_link · breadcrumb_sep",description:"링크·구분자"},{name:"breadcrumb_ellipsis",description:"생략 메뉴 버튼 — data-ripple"},{name:"breadcrumb_sep-slash · breadcrumb_sep-dot",description:"구분자 스타일"},{name:"breadcrumb_sm · breadcrumb_lg",description:"크기 변형"},{name:"is-current · is-disabled",description:"현재·비활성"},...ue],Be=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],pe=[{name:"--breadcrumb-gap · --breadcrumb-font-size",default:"—",description:"간격·글자 크기"},{name:"--breadcrumb-sep-color",default:"—",description:"구분자 색"}],Ce=[{title:"API · Breadcrumb Props",tables:[{columns:R,rows:le,codeColumn:"name"}]},{title:"API · BreadcrumbItem Props",tables:[{columns:me,rows:se,codeColumn:"name"}]},{title:"API · Breadcrumb Slots",tables:[{columns:T,rows:ce,codeColumn:"name"}]},{title:"API · BreadcrumbItem Slots",tables:[{columns:be,rows:oe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:de,rows:ie,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Be,rows:pe,codeColumn:"name"}]}],Ae={title:"Components/네비게이션/Breadcrumb",id:"components-breadcrumb",component:u,tags:["autodocs"],argTypes:{ariaLabel:{control:"text",type:{name:"string",summary:"string"}},separator:{control:"select",options:["chevron","slash","dot"],type:{name:"enum",summary:"'chevron' | 'slash' | 'dot'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}}},parameters:{layout:"padded",apiSections:Ce}},l={args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:e=>({components:{Breadcrumb:u,BreadcrumbItem:a},setup(){return{args:e}},template:`<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>`})},m={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
<\/script>

<template>
  <Breadcrumb
  :items="[
  { label: '홈', href: '#' },
  { label: '컴포넌트', href: '#' },
  { label: 'Breadcrumb', current: true },
  ]"
  />
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb
      :items="[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]"
    />`})},s={name:"구분자",parameters:{demoPreview:{stack:!0},docs:{description:{story:"separator로 구분자 스타일을 변경합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb
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
    />`})},c={name:"홈 아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"icon으로 아이콘만 있는 첫 항목을 표시합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
import BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb>
      <BreadcrumbItem href="#" icon aria-label="홈">
        <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>`})},b={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"size로 텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb
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
    />`})},o={name:"경로 생략",parameters:{demoPreview:{stack:!1},docs:{description:{story:"긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
import BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb>
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
    </Breadcrumb>`})},d={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"비활성 링크는 disabled를 사용합니다."},source:{code:`<script setup>
import Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';
import BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Breadcrumb:u,BreadcrumbItem:a},template:`<Breadcrumb aria-label="경로 — 비활성">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="삭제된 페이지" disabled />
      <BreadcrumbItem label="현재 페이지" current />
    </Breadcrumb>

    <Breadcrumb separator="slash" aria-label="경로 — 긴 레이블">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
      <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
    </Breadcrumb>`})};var f,D,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: args => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>\`
  })
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var I,g,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '컴포넌트', href: '#' },\\n  { label: 'Breadcrumb', current: true },\\n  ]\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb
      :items="[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]"
    />\`
  })
}`,...(A=(g=m.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var k,y,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "구분자",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "separator로 구분자 스타일을 변경합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb\\n  aria-label=\\"경로 — chevron\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '가이드', href: '#' },\\n  { label: 'Chevron', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  separator=\\"slash\\"\\n  aria-label=\\"경로 — slash\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '가이드', href: '#' },\\n  { label: 'Slash', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  separator=\\"dot\\"\\n  aria-label=\\"경로 — dot\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '가이드', href: '#' },\\n  { label: 'Dot', current: true },\\n  ]\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb
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
    />\`
  })
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var E,S,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "홈 아이콘",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon으로 아이콘만 있는 첫 항목을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb>\\n    <BreadcrumbItem href=\\"#\\" icon aria-label=\\"홈\\">\\n      <svg class=\\"breadcrumb_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n        <path d=\\"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z\\" />\\n      </svg>\\n    </BreadcrumbItem>\\n    <BreadcrumbItem label=\\"설정\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"계정\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"프로필\\" current />\\n  </Breadcrumb>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb>
      <BreadcrumbItem href="#" icon aria-label="홈">
        <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>\`
  })
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,z,P;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "size로 텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb\\n  size=\\"sm\\"\\n  aria-label=\\"경로 — small\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Small', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  aria-label=\\"경로 — medium\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Medium', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  size=\\"lg\\"\\n  aria-label=\\"경로 — large\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Large', current: true },\\n  ]\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb
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
    />\`
  })
}`,...(P=(z=b.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var L,F,V;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "경로 생략",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb>\\n    <BreadcrumbItem href=\\"#\\" icon aria-label=\\"홈\\">\\n      <svg class=\\"breadcrumb_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n        <path d=\\"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z\\" />\\n      </svg>\\n    </BreadcrumbItem>\\n    <li class=\\"breadcrumb_item\\">\\n      <button type=\\"button\\" class=\\"breadcrumb_ellipsis\\" data-ripple aria-label=\\"숨겨진 경로 보기\\" aria-haspopup=\\"menu\\" aria-expanded=\\"false\\">…</button>\\n    </li>\\n    <BreadcrumbItem label=\\"컴포넌트\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"Breadcrumb\\" current />\\n  </Breadcrumb>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb>
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
    </Breadcrumb>\`
  })
}`,...(V=(F=o.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var H,M,O;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "비활성 링크는 disabled를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\nimport BreadcrumbItem from '@uxkm/ui/components/BreadcrumbItem.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb aria-label=\\"경로 — 비활성\\">\\n    <BreadcrumbItem label=\\"홈\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"삭제된 페이지\\" disabled />\\n    <BreadcrumbItem label=\\"현재 페이지\\" current />\\n  </Breadcrumb>\\n  <Breadcrumb separator=\\"slash\\" aria-label=\\"경로 — 긴 레이블\\">\\n    <BreadcrumbItem label=\\"홈\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"프로젝트 관리 및 협업 도구 설정\\" href=\\"#\\" />\\n    <BreadcrumbItem label=\\"사용자 권한 및 역할 기반 접근 제어\\" current />\\n  </Breadcrumb>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    template: \`<Breadcrumb aria-label="경로 — 비활성">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="삭제된 페이지" disabled />
      <BreadcrumbItem label="현재 페이지" current />
    </Breadcrumb>

    <Breadcrumb separator="slash" aria-label="경로 — 긴 레이블">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
      <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
    </Breadcrumb>\`
  })
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ke=["Playground","Basic","Separator","Icon","Size","Ellipsis","State"];export{m as Basic,o as Ellipsis,c as Icon,l as Playground,s as Separator,b as Size,d as State,ke as __namedExportsOrder,Ae as default};
