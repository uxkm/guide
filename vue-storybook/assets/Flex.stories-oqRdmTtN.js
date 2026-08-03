import{u as re,a as ue,b as ce,o as de,c as Ce,r as pe,p as xe,h as fe,i as Fe,j as _,m as ve,w as ge,y as _e}from"./iframe-BHuoLYUS.js";import{s as Be}from"./story-renders-C_n8_MI3.js";import"./preload-helper-PMqzWbAN.js";const t=Object.assign({inheritAttrs:!1},{__name:"Flex",props:{direction:{type:String,default:"row",validator:l=>["row","col"].includes(l)},directionMd:{type:String,default:"",validator:l=>["","row","col"].includes(l)},directionLg:{type:String,default:"",validator:l=>["","row","col"].includes(l)},wrap:Boolean,cols:[Number,String],colsMd:[Number,String],colsLg:[Number,String],ratio:String,itemSpan:[Number,String],itemSpanMd:[Number,String],itemSpanLg:[Number,String],gap:{type:String,default:"",validator:l=>["","none","sm","lg"].includes(l)},align:{type:String,default:"stretch",validator:l=>["start","center","end","baseline","stretch"].includes(l)},equal:Boolean,autoFit:Boolean,justify:{type:String,default:"",validator:l=>["","start","center","end","between","around","evenly"].includes(l)}},setup(l){const e=l,B=re(),a=ue(),o=fe(null),y=Fe("Flex",{defaults:{direction:"row",align:"stretch"},booleanProps:new Set(["wrap","equal","autoFit"])});ce(y,e,B,o,a);const I=_(()=>{const n=["flex",`flex_${e.direction}`];return e.directionMd&&n.push(`flex_${e.directionMd}-md`),e.directionLg&&n.push(`flex_${e.directionLg}-lg`),e.wrap&&n.push("flex_wrap"),e.cols&&n.push(`flex_cols-${e.cols}`),e.colsMd&&n.push(`flex_cols-md-${e.colsMd}`),e.colsLg&&n.push(`flex_cols-lg-${e.colsLg}`),e.ratio&&n.push(`flex_ratio-${e.ratio}`),e.itemSpan&&n.push(`flex_items-span-${e.itemSpan}`),e.itemSpanMd&&n.push(`flex_items-span-md-${e.itemSpanMd}`),e.itemSpanLg&&n.push(`flex_items-span-lg-${e.itemSpanLg}`),e.gap&&n.push(`flex_gap-${e.gap}`),e.align&&n.push(`flex_align-${e.align}`),e.justify&&n.push(`flex_justify-${e.justify}`),e.equal&&n.push("flex_equal"),e.autoFit&&n.push("flex_auto-fit"),a.class&&n.push(a.class),n}),D=_(()=>{const{class:n,...m}=a;return m});return(n,m)=>(de(),Ce("div",xe({ref_key:"rootRef",ref:o},D.value,{class:I.value}),[pe(n.$slots,"default")],16))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Flex",description:"",tags:{},props:[{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","col"]},{name:"directionMd",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["row","col"]},{name:"directionLg",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["row","col"]},{name:"wrap",type:{name:"boolean"}},{name:"cols",type:{name:"number|string"}},{name:"colsMd",type:{name:"number|string"}},{name:"colsLg",type:{name:"number|string"}},{name:"ratio",type:{name:"string"}},{name:"itemSpan",type:{name:"number|string"}},{name:"itemSpanMd",type:{name:"number|string"}},{name:"itemSpanLg",type:{name:"number|string"}},{name:"gap",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["none","sm","lg"]},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:"'stretch'"},values:["start","center","end","baseline","stretch"]},{name:"equal",type:{name:"boolean"}},{name:"autoFit",type:{name:"boolean"}},{name:"justify",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","between","around","evenly"]}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Flex.vue"]});const s=Object.assign({inheritAttrs:!1},{__name:"FlexItem",props:{as:{type:String,default:"div"},span:[Number,String],spanMd:[Number,String],spanLg:[Number,String],grow:Boolean,fit:Boolean,align:{type:String,default:"",validator:l=>["","auto","start","center","end","stretch","baseline"].includes(l)},order:{type:[Number,String],validator:l=>Number(l)>=1&&Number(l)<=12}},setup(l){const e=l,B=re(),a=ue(),o=fe(null),y=Fe("FlexItem",{defaults:{as:"div"},booleanProps:new Set(["grow","fit"])});ce(y,e,B,o,a);const I=_(()=>{const n=[];return e.span&&n.push(`flex_item-span-${e.span}`),e.spanMd&&n.push(`flex_item-span-md-${e.spanMd}`),e.spanLg&&n.push(`flex_item-span-lg-${e.spanLg}`),e.grow&&n.push("flex_grow"),e.fit&&n.push("flex_fit"),e.align&&n.push(`flex_self-${e.align}`),e.order&&n.push(`flex_order-${e.order}`),a.class&&n.push(a.class),n}),D=_(()=>{const{class:n,...m}=a;return m});return(n,m)=>(de(),ve(_e(l.as),xe({ref_key:"rootRef",ref:o},D.value,{class:I.value}),{default:ge(()=>[pe(n.$slots,"default")]),_:3},16,["class"]))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"FlexItem",description:"",tags:{},props:[{name:"as",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"span",type:{name:"number|string"}},{name:"spanMd",type:{name:"number|string"}},{name:"spanLg",type:{name:"number|string"}},{name:"grow",type:{name:"boolean"}},{name:"fit",type:{name:"boolean"}},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["auto","start","center","end","stretch","baseline"]},{name:"order",type:{name:"number|string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/FlexItem.vue"]});const k=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ye=[{name:"direction",type:"'row' | 'col'",default:"row",description:"기본 배치 방향"},{name:"direction-md",type:"'row' | 'col'",default:"—",description:"md 이상 배치 방향"},{name:"direction-lg",type:"'row' | 'col'",default:"—",description:"lg 이상 배치 방향"},{name:"wrap",type:"boolean",default:"false",description:"항목 줄바꿈 (flex_wrap)"},{name:"cols",type:"number | string",default:"—",description:"균등 항목 수 (flex_cols-*)"},{name:"cols-md",type:"number | string",default:"—",description:"md 이상 균등 항목 수"},{name:"cols-lg",type:"number | string",default:"—",description:"lg 이상 균등 항목 수"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"자식 grow 비율 (flex_ratio-*)"},{name:"item-span",type:"number | string",default:"—",description:"모든 자식의 12단위 너비 (flex_items-span-*)"},{name:"item-span-md",type:"number | string",default:"—",description:"md 이상 자식 일괄 너비"},{name:"item-span-lg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 너비"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"항목 간격. 생략 시 --flex-gap"},{name:"align",type:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",default:"stretch",description:"교차축 정렬"},{name:"justify",type:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",default:"—",description:"주축 정렬"},{name:"equal",type:"boolean",default:"false",description:"모든 자식에 동일 grow 적용"},{name:"auto-fit",type:"boolean",default:"false",description:"최소 너비를 기준으로 항목 자동 배치"}],Ie=[{name:"as",type:"string",default:"div",description:"FlexItem이 렌더링할 HTML 요소 (header, aside, section, footer 등)"},{name:"span",type:"number | string",default:"—",description:"12단위 개별 너비"},{name:"span-md",type:"number | string",default:"—",description:"md 이상 개별 너비"},{name:"span-lg",type:"number | string",default:"—",description:"lg 이상 개별 너비"},{name:"grow",type:"boolean",default:"false",description:"남는 공간 채우기 (flex_grow)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 유지 (flex_fit)"},{name:"align",type:"'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'",default:"—",description:"해당 항목의 교차축 정렬"},{name:"order",type:"1–12",default:"—",description:"시각적 배치 순서"}],b=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],De=[{name:"default",description:"Flex 자식 콘텐츠"}],ke=[{name:"default",description:"FlexItem 내부 콘텐츠"}],be=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ae=[{name:"flex · flex_row · flex_col",description:"Flex 루트와 배치 방향"},{name:"flex_row-md · flex_col-md · flex_row-lg · flex_col-lg",description:"반응형 배치 방향"},{name:"flex_wrap",description:"항목 줄바꿈"},{name:"flex_cols-* · flex_cols-md-* · flex_cols-lg-*",description:"균등 항목 수"},{name:"flex_ratio-* · flex_equal",description:"자식 비율 · 균등 grow"},{name:"flex_auto-fit",description:"최소 너비 기반 자동 줄바꿈 배치"},{name:"flex_items-span-* · flex_items-span-md-* · flex_items-span-lg-*",description:"모든 자식의 12단위 너비"},{name:"flex_item-span-* · flex_item-span-md-* · flex_item-span-lg-*",description:"개별 자식의 12단위 너비"},{name:"flex_gap-sm · flex_gap-lg · flex_gap-none",description:"간격 변형"},{name:"flex_align-* · flex_justify-* · flex_self-*",description:"부모 · 자식 정렬"},{name:"flex_grow · flex_fit · flex_order-*",description:"자식 grow · 고정 너비 · 순서"}],we=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],he=[{name:"--flex-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--flex-gap-sm · --flex-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--flex-auto-min",default:"10rem",description:"자동 배치 항목의 최소 너비"}],Se=[{title:"API · Flex Props",tables:[{columns:k,rows:ye,codeColumn:"name"}]},{title:"API · FlexItem Props",tables:[{columns:k,rows:Ie,codeColumn:"name"}]},{title:"API · Flex Slots",tables:[{columns:b,rows:De,codeColumn:"name"}]},{title:"API · FlexItem Slots",tables:[{columns:b,rows:ke,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업에서도 동일하게 조합합니다.",tables:[{columns:be,rows:Ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:we,rows:he,codeColumn:"name"}]}],Le={title:"Components/레이아웃/Flex",id:"components-flex",component:t,tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","col"],type:{name:"enum",summary:"'row' | 'col'"}},directionMd:{control:"select",options:["row","col"],type:{name:"enum",summary:"'row' | 'col'"}},directionLg:{control:"select",options:["row","col"],type:{name:"enum",summary:"'row' | 'col'"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ratio:{control:"text",type:{name:"string",summary:"string"}},gap:{control:"select",options:["none","sm","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'lg'"}},align:{control:"select",options:["start","center","end","baseline","stretch"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'baseline' | 'stretch'"}},equal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoFit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},justify:{control:"select",options:["start","center","end","between","around","evenly"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'"}}},subcomponents:{FlexItem:s},parameters:{layout:"padded",apiSections:Se}},i={parameters:{controls:{disable:!1}},args:{cols:3,direction:"row",directionMd:"",directionLg:"",wrap:!1,ratio:"",gap:"sm",align:"stretch",equal:!1,autoFit:!1,justify:""},render:(l,e)=>({components:{Flex:t},setup(){return{args:Be(e)}},template:`<Flex v-bind="args">
      <div class="flex_demo-cell">항목 1</div>
      <div class="flex_demo-cell">항목 2</div>
      <div class="flex_demo-cell">항목 3</div>
    </Flex>`})},r={name:"기본 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Grid 예시와 동일하게 헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap gap="sm">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell" aria-label="Main content">Main content</FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell" aria-label="Main content">Main content</FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>`})},u={name:"콘텐츠가 있는 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap gap="sm">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
      <h3>Main content</h3>
      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
      <Flex :cols="1" :cols-lg="2" gap="sm">
        <article class="component_stub">
          <h4>Content section</h4>
          <p>주요 정보나 기능을 배치합니다.</p>
        </article>
        <article class="component_stub">
          <h4>Content section</h4>
          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
        </article>
      </Flex>
    </FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
        <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex :cols="1" :cols-lg="2" gap="sm">
          <article class="component_stub"><h4>Content section</h4><p>주요 정보나 기능을 배치합니다.</p></article>
          <article class="component_stub"><h4>Content section</h4><p>관련 정보나 보조 콘텐츠를 배치합니다.</p></article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>`})},c={name:"부모 클래스로 제어",parameters:{demoPreview:{stack:!0},docs:{description:{story:"방향·비율·자식 일괄 span은 부모 Flex에 지정합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="3">
    <div class="flex_demo-cell">flex_cols-3</div>
    <div class="flex_demo-cell">flex_cols-3</div>
    <div class="flex_demo-cell">flex_cols-3</div>
  </Flex>
  <Flex ratio="2-1">
    <div class="flex_demo-cell">flex_ratio-2-1</div>
    <div class="flex_demo-cell">flex_ratio-2-1</div>
  </Flex>
  <Flex :item-span="4">
    <div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex :cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
    <Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
    <Flex :item-span="4"><div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div></Flex>`})},d={name:"12열 전체 활용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"12열 시스템의 각 열을 하나씩 사용합니다. itemSpan=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :item-span="1" gap="sm">
    <div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:'<Flex :item-span="1" gap="sm"><div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div></Flex>'})},p={name:"균등 항목",parameters:{demoPreview:{stack:!0},docs:{description:{story:"flex_cols-*로 동일 너비 항목 수를 지정합니다. gap을 제외한 공간을 정확히 균등 분할합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="2">
    <div class="flex_demo-cell">cols 2</div>
    <div class="flex_demo-cell">cols 2</div>
  </Flex>
  <Flex :cols="4">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex :cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
    <Flex :cols="4"><div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div></Flex>`})},x={name:"비율 항목",parameters:{demoPreview:{stack:!0},docs:{description:{story:"flex_ratio-*로 2~3개 항목의 grow 비율을 부모에서 지정합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex ratio="1-2">
    <div class="flex_demo-cell">1 : 2</div>
    <div class="flex_demo-cell">1 : 2</div>
  </Flex>
  <Flex ratio="1-2-1">
    <div class="flex_demo-cell">1</div>
    <div class="flex_demo-cell">2</div>
    <div class="flex_demo-cell">1</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex ratio="1-2"><div class="flex_demo-cell">1 : 2</div><div class="flex_demo-cell">1 : 2</div></Flex>
    <Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>`})},f={name:"자식 일괄 span (12단위)",parameters:{demoPreview:{stack:!0},docs:{description:{story:"모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다. itemSpan=6이면 한 줄에 2개씩 배치됩니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :item-span="6">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div>
  </Flex>
  <Flex :item-span="3">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex :item-span="6"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div></Flex>
    <Flex :item-span="3"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div></Flex>`})},F={name:"자식별 span (혼합 레이아웃)",parameters:{demoPreview:{stack:!0},docs:{description:{story:"항목마다 너비가 다를 때 FlexItem의 span을 사용합니다. 8+4, 4+4+4처럼 개별 제어할 수 있습니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap>
    <FlexItem :span="8">
      <div class="flex_demo-cell">span 8</div>
    </FlexItem>
    <FlexItem :span="4">
      <div class="flex_demo-cell">span 4</div>
    </FlexItem>
    <FlexItem v-for="item in 3" :key="item" :span="4">
      <div class="flex_demo-cell">span 4</div>
    </FlexItem>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex wrap>
      <FlexItem :span="8"><div class="flex_demo-cell">span 8</div></FlexItem>
      <FlexItem :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
      <FlexItem v-for="item in 3" :key="item" :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
    </Flex>`})},C={name:"간격",parameters:{demoPreview:{stack:!0},docs:{description:{story:"flex_gap-sm · flex_gap-lg · flex_gap-none은 부모에 지정합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="3" gap="sm">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div>
  </Flex>
  <Flex :cols="3" gap="lg">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex :cols="3" gap="sm"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div></Flex>
    <Flex :cols="3" gap="lg"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div></Flex>`})},v={name:"반응형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"flex_cols-md-* · flex_items-span-md-* · flex_items-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="1" :cols-md="2" :cols-lg="3">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div>
  </Flex>
  <Flex :item-span="12" :item-span-md="6" :item-span-lg="4">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:`<Flex :cols="1" :cols-md="2" :cols-lg="3"><div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
    <Flex :item-span="12" :item-span-md="6" :item-span-lg="4"><div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>`})},g={name:"자동 배치",parameters:{demoPreview:{stack:!0},docs:{description:{story:"flex_auto-fit은 --flex-auto-min을 최소 너비로 사용해 항목 수를 자동 조절합니다."},source:{code:`<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex auto-fit>
    <div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div>
  </Flex>
</template>`,language:"vue"}}},render:()=>({components:{Flex:t,FlexItem:s},template:'<Flex auto-fit><div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div></Flex>'})};var A,w,h;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    cols: 3,
    direction: "row",
    directionMd: "",
    directionLg: "",
    wrap: false,
    ratio: "",
    gap: "sm",
    align: "stretch",
    equal: false,
    autoFit: false,
    justify: ""
  },
  render: (_args, context) => ({
    components: {
      Flex
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Flex v-bind="args">
      <div class="flex_demo-cell">항목 1</div>
      <div class="flex_demo-cell">항목 2</div>
      <div class="flex_demo-cell">항목 3</div>
    </Flex>\`
  })
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var S,E,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "기본 페이지 레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "Grid 예시와 동일하게 헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\\n<\/script>\\n\\n<template>\\n  <Flex wrap gap=\\"sm\\">\\n    <FlexItem as=\\"header\\" :span=\\"12\\" class=\\"flex_demo-cell\\">Header</FlexItem>\\n    <FlexItem as=\\"aside\\" :span=\\"12\\" :span-md=\\"3\\" class=\\"flex_demo-cell\\">Sidebar</FlexItem>\\n    <FlexItem as=\\"section\\" :span=\\"12\\" :span-md=\\"9\\" class=\\"flex_demo-cell\\" aria-label=\\"Main content\\">Main content</FlexItem>\\n    <FlexItem as=\\"footer\\" :span=\\"12\\" class=\\"flex_demo-cell\\">Footer</FlexItem>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell" aria-label="Main content">Main content</FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>\`
  })
}`,...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var M,L,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "콘텐츠가 있는 페이지 레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\\n<\/script>\\n\\n<template>\\n  <Flex wrap gap=\\"sm\\">\\n    <FlexItem as=\\"header\\" :span=\\"12\\" class=\\"flex_demo-cell\\">Header</FlexItem>\\n    <FlexItem as=\\"aside\\" :span=\\"12\\" :span-md=\\"3\\" class=\\"flex_demo-cell\\">Sidebar</FlexItem>\\n    <FlexItem as=\\"main\\" :span=\\"12\\" :span-md=\\"9\\" class=\\"flex_demo-cell\\">\\n      <h3>Main content</h3>\\n      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>\\n      <Flex :cols=\\"1\\" :cols-lg=\\"2\\" gap=\\"sm\\">\\n        <article class=\\"component_stub\\">\\n          <h4>Content section</h4>\\n          <p>주요 정보나 기능을 배치합니다.</p>\\n        </article>\\n        <article class=\\"component_stub\\">\\n          <h4>Content section</h4>\\n          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>\\n        </article>\\n      </Flex>\\n    </FlexItem>\\n    <FlexItem as=\\"footer\\" :span=\\"12\\" class=\\"flex_demo-cell\\">Footer</FlexItem>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
        <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex :cols="1" :cols-lg="2" gap="sm">
          <article class="component_stub"><h4>Content section</h4><p>주요 정보나 기능을 배치합니다.</p></article>
          <article class="component_stub"><h4>Content section</h4><p>관련 정보나 보조 콘텐츠를 배치합니다.</p></article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>\`
  })
}`,...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var N,j,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "부모 클래스로 제어",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "방향·비율·자식 일괄 span은 부모 Flex에 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :cols=\\"3\\">\\n    <div class=\\"flex_demo-cell\\">flex_cols-3</div>\\n    <div class=\\"flex_demo-cell\\">flex_cols-3</div>\\n    <div class=\\"flex_demo-cell\\">flex_cols-3</div>\\n  </Flex>\\n  <Flex ratio=\\"2-1\\">\\n    <div class=\\"flex_demo-cell\\">flex_ratio-2-1</div>\\n    <div class=\\"flex_demo-cell\\">flex_ratio-2-1</div>\\n  </Flex>\\n  <Flex :item-span=\\"4\\">\\n    <div v-for=\\"item in 6\\" :key=\\"item\\" class=\\"flex_demo-cell\\">flex_items-span-4</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
    <Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
    <Flex :item-span="4"><div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div></Flex>\`
  })
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,R,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "12열 전체 활용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "12열 시스템의 각 열을 하나씩 사용합니다. itemSpan=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :item-span=\\"1\\" gap=\\"sm\\">\\n    <div v-for=\\"item in 12\\" :key=\\"item\\" class=\\"flex_demo-cell\\">{{ item }}</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :item-span="1" gap="sm"><div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div></Flex>\`
  })
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var O,T,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "균등 항목",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "flex_cols-*로 동일 너비 항목 수를 지정합니다. gap을 제외한 공간을 정확히 균등 분할합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :cols=\\"2\\">\\n    <div class=\\"flex_demo-cell\\">cols 2</div>\\n    <div class=\\"flex_demo-cell\\">cols 2</div>\\n  </Flex>\\n  <Flex :cols=\\"4\\">\\n    <div v-for=\\"item in 4\\" :key=\\"item\\" class=\\"flex_demo-cell\\">cols 4</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
    <Flex :cols="4"><div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div></Flex>\`
  })
}`,...(G=(T=p.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var U,z,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "비율 항목",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "flex_ratio-*로 2~3개 항목의 grow 비율을 부모에서 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex ratio=\\"1-2\\">\\n    <div class=\\"flex_demo-cell\\">1 : 2</div>\\n    <div class=\\"flex_demo-cell\\">1 : 2</div>\\n  </Flex>\\n  <Flex ratio=\\"1-2-1\\">\\n    <div class=\\"flex_demo-cell\\">1</div>\\n    <div class=\\"flex_demo-cell\\">2</div>\\n    <div class=\\"flex_demo-cell\\">1</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex ratio="1-2"><div class="flex_demo-cell">1 : 2</div><div class="flex_demo-cell">1 : 2</div></Flex>
    <Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>\`
  })
}`,...(J=(z=x.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,W;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "자식 일괄 span (12단위)",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다. itemSpan=6이면 한 줄에 2개씩 배치됩니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :item-span=\\"6\\">\\n    <div v-for=\\"item in 4\\" :key=\\"item\\" class=\\"flex_demo-cell\\">span 6</div>\\n  </Flex>\\n  <Flex :item-span=\\"3\\">\\n    <div v-for=\\"item in 4\\" :key=\\"item\\" class=\\"flex_demo-cell\\">span 3</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :item-span="6"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div></Flex>
    <Flex :item-span="3"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div></Flex>\`
  })
}`,...(W=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "자식별 span (혼합 레이아웃)",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "항목마다 너비가 다를 때 FlexItem의 span을 사용합니다. 8+4, 4+4+4처럼 개별 제어할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\nimport FlexItem from '@uxkm/ui/components/FlexItem.vue';\\n<\/script>\\n\\n<template>\\n  <Flex wrap>\\n    <FlexItem :span=\\"8\\">\\n      <div class=\\"flex_demo-cell\\">span 8</div>\\n    </FlexItem>\\n    <FlexItem :span=\\"4\\">\\n      <div class=\\"flex_demo-cell\\">span 4</div>\\n    </FlexItem>\\n    <FlexItem v-for=\\"item in 3\\" :key=\\"item\\" :span=\\"4\\">\\n      <div class=\\"flex_demo-cell\\">span 4</div>\\n    </FlexItem>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex wrap>
      <FlexItem :span="8"><div class="flex_demo-cell">span 8</div></FlexItem>
      <FlexItem :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
      <FlexItem v-for="item in 3" :key="item" :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
    </Flex>\`
  })
}`,...(Z=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,le;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "flex_gap-sm · flex_gap-lg · flex_gap-none은 부모에 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :cols=\\"3\\" gap=\\"sm\\">\\n    <div v-for=\\"item in 3\\" :key=\\"item\\" class=\\"flex_demo-cell\\">gap sm</div>\\n  </Flex>\\n  <Flex :cols=\\"3\\" gap=\\"lg\\">\\n    <div v-for=\\"item in 3\\" :key=\\"item\\" class=\\"flex_demo-cell\\">gap lg</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :cols="3" gap="sm"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div></Flex>
    <Flex :cols="3" gap="lg"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div></Flex>\`
  })
}`,...(le=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,se,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "반응형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "flex_cols-md-* · flex_items-span-md-* · flex_items-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex :cols=\\"1\\" :cols-md=\\"2\\" :cols-lg=\\"3\\">\\n    <div v-for=\\"item in 3\\" :key=\\"item\\" class=\\"flex_demo-cell\\">1 → md 2 → lg 3개</div>\\n  </Flex>\\n  <Flex :item-span=\\"12\\" :item-span-md=\\"6\\" :item-span-lg=\\"4\\">\\n    <div v-for=\\"item in 3\\" :key=\\"item\\" class=\\"flex_demo-cell\\">span 12 → md 6 → lg 4</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex :cols="1" :cols-md="2" :cols-lg="3"><div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
    <Flex :item-span="12" :item-span-md="6" :item-span-lg="4"><div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>\`
  })
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,me,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "자동 배치",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "flex_auto-fit은 --flex-auto-min을 최소 너비로 사용해 항목 수를 자동 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Flex from '@uxkm/ui/components/Flex.vue';\\n<\/script>\\n\\n<template>\\n  <Flex auto-fit>\\n    <div v-for=\\"item in 6\\" :key=\\"item\\" class=\\"flex_demo-cell\\">auto-fit</div>\\n  </Flex>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Flex,
      FlexItem
    },
    template: \`<Flex auto-fit><div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div></Flex>\`
  })
}`,...(ie=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};const $e=["Playground","BasicLayout","ContentLayout","Parent","TwelveColumns","Equal","Ratio","ItemSpan","Child","Gap","Responsive","Auto"];export{g as Auto,r as BasicLayout,F as Child,u as ContentLayout,p as Equal,C as Gap,f as ItemSpan,c as Parent,i as Playground,x as Ratio,v as Responsive,d as TwelveColumns,$e as __namedExportsOrder,Le as default};
