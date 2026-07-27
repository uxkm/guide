import{k as ae,l as ne,u as Q,a as W,b as X,o as l,c as m,p as ue,z as te,s as le,r as d,f as y,t as k,n as w,h as Y,i as Z,j as z,d as se,F as me,a6 as ce,m as oe}from"./iframe-_Cy3TTd_.js";import{w as c,s as be}from"./story-renders-BkwSCuFa.js";import{r as de,a as ie}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const pe=["aria-current"],Be=["href","aria-label"],Ce={key:2,class:"breadcrumb_current"},t=Object.assign({inheritAttrs:!1},{__name:"BreadcrumbItem",props:{ripple:ae,label:String,href:String,current:Boolean,disabled:Boolean,icon:Boolean,ariaLabel:String},setup(e){const a=e,{rippleAttrs:g}=ne(a),o=Q(),s=W(),i=Y(null),I=Z("BreadcrumbItem",{booleanProps:new Set(["current","disabled","icon","ripple"]),labelProp:"label",selfClosing:!1});X(I,a,o,i,s);const u=z(()=>{const r=["breadcrumb_item"];return a.current&&r.push("is-current"),s.class&&r.push(s.class),r}),A=z(()=>{const r=["breadcrumb_link"];return a.icon&&r.push("breadcrumb_link-icon"),a.disabled&&r.push("is-disabled"),r});return(r,b)=>(l(),m("li",{ref_key:"rootRef",ref:i,class:w(u.value),"aria-current":e.current?"page":void 0},[e.href&&!e.current&&!e.disabled?(l(),m("a",ue({key:0},le(g),{class:A.value,href:e.href,"aria-label":e.ariaLabel||void 0,onClick:b[0]||(b[0]=te(()=>{},["prevent"]))}),[d(r.$slots,"default",{},()=>[y(k(e.label),1)])],16,Be)):e.disabled?(l(),m("span",{key:1,class:w(A.value),"aria-disabled":"true"},[d(r.$slots,"default",{},()=>[y(k(e.label),1)])],2)):e.current?(l(),m("span",Ce,[d(r.$slots,"default",{},()=>[y(k(e.label),1)])])):d(r.$slots,"default",{},void 0,void 0,3)],10,pe))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"current",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"icon",type:{name:"boolean"}},{name:"ariaLabel",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/BreadcrumbItem.vue"]});const fe=["aria-label"],he={class:"breadcrumb_list"},n=Object.assign({inheritAttrs:!1},{__name:"Breadcrumb",props:{items:{type:Array,default:()=>[]},ariaLabel:{type:String,default:"경로"},separator:{type:String,default:"chevron",validator:e=>["chevron","slash","dot"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)}},setup(e){const a=e,g=Q(),o=W(),s=Y(null),i=Z("Breadcrumb",{defaults:{ariaLabel:"경로",separator:"chevron",size:"md"},skipProps:["items"],selfClosing:!1});X(i,a,g,s,o);const I=z(()=>{const u=["breadcrumb"];return a.separator==="slash"&&u.push("breadcrumb_sep-slash"),a.separator==="dot"&&u.push("breadcrumb_sep-dot"),a.size==="sm"&&u.push("breadcrumb_sm"),a.size==="lg"&&u.push("breadcrumb_lg"),o.class&&u.push(o.class),u});return(u,A)=>(l(),m("nav",{ref_key:"rootRef",ref:s,class:w(I.value),"aria-label":e.ariaLabel},[se("ol",he,[e.items.length?(l(!0),m(me,{key:0},ce(e.items,(r,b)=>(l(),oe(t,{key:b,label:r.label,href:r.href,current:r.current??b===e.items.length-1,disabled:r.disabled,icon:r.icon,"aria-label":r.ariaLabel},null,8,["label","href","current","disabled","icon","aria-label"]))),128)):d(u.$slots,"default",{},void 0,void 0,1)])],10,fe))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'경로'"}},{name:"separator",type:{name:"string"},defaultValue:{func:!1,value:"'chevron'"},values:["chevron","slash","dot"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Breadcrumb.vue"]});const ee=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],De=[{name:"items",type:"Array<{ label, href?, current?, disabled? }>",default:"[]",description:"경로 데이터. BreadcrumbItem 슬롯 대체"},{name:"aria-label",type:"string",default:"경로",description:"nav aria-label"},{name:"separator",type:"'chevron' | 'slash' | 'dot'",default:"chevron",description:"breadcrumb_sep-slash · breadcrumb_sep-dot"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"breadcrumb_sm · breadcrumb_lg"}],ve=ee,ge=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL"},{name:"current",type:"boolean",default:"false",description:'is-current · aria-current="page"'},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"icon",type:"boolean",default:"false",description:"breadcrumb_link-icon"},{name:"aria-label",type:"string",default:"—",description:"아이콘 전용 링크 라벨"},de],re=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ie=[{name:"default",description:"BreadcrumbItem 나열 (items prop 대체)"}],Ae=re,ye=[{name:"default",description:"링크 텍스트·아이콘 (label 대체)"}],ke=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],we=[{name:"breadcrumb · breadcrumb_list · breadcrumb_item",description:"루트·목록·항목"},{name:"breadcrumb_link · breadcrumb_sep",description:"링크·구분자"},{name:"breadcrumb_ellipsis",description:"생략 메뉴 버튼 — data-ripple"},{name:"breadcrumb_sep-slash · breadcrumb_sep-dot",description:"구분자 스타일"},{name:"breadcrumb_sm · breadcrumb_lg",description:"크기 변형"},{name:"is-current · is-disabled",description:"현재·비활성"},...ie],ze=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Se=[{name:"--breadcrumb-gap · --breadcrumb-font-size",default:"—",description:"간격·글자 크기"},{name:"--breadcrumb-sep-color",default:"—",description:"구분자 색"}],xe=[{title:"API · Breadcrumb Props",tables:[{columns:ee,rows:De,codeColumn:"name"}]},{title:"API · BreadcrumbItem Props",tables:[{columns:ve,rows:ge,codeColumn:"name"}]},{title:"API · Breadcrumb Slots",tables:[{columns:re,rows:Ie,codeColumn:"name"}]},{title:"API · BreadcrumbItem Slots",tables:[{columns:Ae,rows:ye,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ke,rows:we,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ze,rows:Se,codeColumn:"name"}]}],Ve={title:"Components/네비게이션/Breadcrumb",id:"components-breadcrumb",component:n,subcomponents:{BreadcrumbItem:t},tags:["autodocs"],argTypes:{ariaLabel:{control:"text",type:{name:"string",summary:"string"}},separator:{control:"select",options:["chevron","slash","dot"],type:{name:"enum",summary:"'chevron' | 'slash' | 'dot'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:xe}},p={parameters:{controls:{disable:!1}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:(e,a)=>({components:{Breadcrumb:n,BreadcrumbItem:t},setup(){return{args:be(a)}},template:`<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>`})},B={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n},template:`<Breadcrumb
      :items="[
      { label: '홈', href: '#' },
      { label: '컴포넌트', href: '#' },
      { label: 'Breadcrumb', current: true },
      ]"
      />`}))},C={name:"구분자",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"separator로 구분자 스타일을 변경합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n},template:`<Breadcrumb
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
      />`}))},f={name:"홈 아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon으로 아이콘만 있는 첫 항목을 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n,BreadcrumbItem:t},template:`<Breadcrumb>
        <BreadcrumbItem href="#" icon aria-label="홈">
          <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
          </svg>
        </BreadcrumbItem>
        <BreadcrumbItem label="설정" href="#" />
        <BreadcrumbItem label="계정" href="#" />
        <BreadcrumbItem label="프로필" current />
      </Breadcrumb>`}))},h={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size로 텍스트 크기를 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n},template:`<Breadcrumb
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
      />`}))},D={name:"경로 생략",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n,BreadcrumbItem:t},template:`<Breadcrumb>
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
      </Breadcrumb>`}))},v={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"비활성 링크는 disabled를 사용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{items:[],ariaLabel:"경로",separator:"chevron",size:"md"},render:c(()=>({components:{Breadcrumb:n,BreadcrumbItem:t},template:`<Breadcrumb aria-label="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" aria-label="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>`}))};var S,x,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: (_args, context) => ({
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>\`
  })
}`,...(E=(x=p.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var _,L,P;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Breadcrumb
    },
    template: \`<Breadcrumb
      :items="[
      { label: '홈', href: '#' },
      { label: '컴포넌트', href: '#' },
      { label: 'Breadcrumb', current: true },
      ]"
      />\`
  }))
}`,...(P=(L=B.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var V,F,H;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "구분자",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Breadcrumb
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
  }))
}`,...(H=(F=C.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,M,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "홈 아이콘",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var $,O,j;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        story: "size로 텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Breadcrumb from '@uxkm/ui/components/Breadcrumb.vue';\\n<\/script>\\n\\n<template>\\n  <Breadcrumb\\n  size=\\"sm\\"\\n  aria-label=\\"경로 — small\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Small', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  aria-label=\\"경로 — medium\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Medium', current: true },\\n  ]\\"\\n  />\\n  <Breadcrumb\\n  size=\\"lg\\"\\n  aria-label=\\"경로 — large\\"\\n  :items=\\"[\\n  { label: '홈', href: '#' },\\n  { label: '문서', href: '#' },\\n  { label: 'Large', current: true },\\n  ]\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Breadcrumb
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
  }))
}`,...(j=(O=h.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var T,U,q;D.parameters={...D.parameters,docs:{...(T=D.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "경로 생략",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(q=(U=D.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    items: [],
    ariaLabel: "경로",
    separator: "chevron",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Fe=["Playground","Basic","Separator","Icon","Size","Ellipsis","State"];export{B as Basic,D as Ellipsis,f as Icon,p as Playground,C as Separator,h as Size,v as State,Fe as __namedExportsOrder,Ve as default};
