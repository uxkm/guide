import{u as ae,b as ce,c as t,t as b,q as f,k as q,A as ue,n as le,f as a,o as c,a as ie}from"./vue.esm-bundler-BaZlnz8B.js";import{u as pe,c as de}from"./useDemoCode-B9b0dRAo.js";import{_ as n}from"./ProgressCircle-C4dpRnb_.js";const me={key:0,class:"progress_header"},ge={key:0,class:"progress_label"},Ce={key:1,class:"progress_value"},Pe=["aria-valuenow","aria-label","aria-busy"],o=Object.assign({inheritAttrs:!1},{__name:"Progress",props:{percent:{type:Number,default:0},status:{type:String,default:"",validator:e=>["","success","exception"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},showInfo:Boolean,label:String,color:{type:String,default:"primary",validator:e=>["primary","success","warning","danger"].includes(e)},striped:Boolean,animated:Boolean,indeterminate:Boolean,inside:Boolean,block:Boolean,ariaLabel:{type:String,default:"진행률"}},setup(e){const r=e,re=ae(),y=ce(),_=ie(null),se=de("Progress",{defaults:{percent:0,size:"md",color:"primary"},booleanProps:new Set(["showInfo","striped","animated","indeterminate","inside","block"]),selfClosing:!1});pe(se,r,re,_,y);const oe=a(()=>r.status==="success"?"color_success":r.status==="exception"||r.color==="danger"?"color_danger":`color_${r.color}`),ne=a(()=>{const s=["progress",oe.value];return r.block?s.push("progress_block"):s.push("progress_fit"),r.size==="sm"&&s.push("progress_sm"),r.size==="lg"&&s.push("progress_lg"),r.striped&&s.push("progress_striped"),r.animated&&s.push("progress_animated"),r.indeterminate&&s.push("is-indeterminate"),r.inside&&s.push("progress_inside"),y.class&&s.push(y.class),s}),te=a(()=>({width:`${r.percent}%`})),D=a(()=>`${r.percent}%`);return(s,he)=>(c(),t("div",{ref_key:"rootRef",ref:_,class:le(ne.value)},[e.showInfo||e.label?(c(),t("div",me,[e.label?(c(),t("span",ge,b(e.label),1)):f("",!0),e.showInfo?(c(),t("span",Ce,b(D.value),1)):f("",!0)])):f("",!0),q("div",{class:"progress_track",role:"progressbar","aria-valuenow":e.indeterminate?void 0:e.percent,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.ariaLabel,"aria-busy":e.indeterminate?"true":void 0},[q("span",{class:"progress_bar",style:ue(te.value)},b(e.inside?D.value:""),5)],8,Pe)],2))}}),ee=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Be=[{name:"percent",type:"number",default:"0",description:"0–100 진행률 (막대 width)"},{name:"status",type:"'success' | 'exception'",default:"—",description:"완료·오류 색상"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"막대 색상 color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"label",type:"string",default:"—",description:"헤더 라벨"},{name:"show-info",type:"boolean",default:"false",description:"퍼센트 값 표시"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 (progress_striped)"},{name:"animated",type:"boolean",default:"false",description:"흐르는 애니메이션"},{name:"indeterminate",type:"boolean",default:"false",description:"불확정 (is-indeterminate)"},{name:"inside",type:"boolean",default:"false",description:"막대 안 퍼센트 텍스트"},{name:"block",type:"boolean",default:"false",description:"전체 너비 (progress_block)"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],ye=ee,be=[{name:"percent",type:"number",default:"0",description:"0–100 (--progress-percent)"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],fe=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],_e=[{name:"default",description:"추가 콘텐츠 (선택)"}],De=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],qe=[{name:"progress · progress_track · progress_bar",description:"선형 진행률"},{name:"progress_circle · progress_circle-svg · progress_circle-value",description:"원형 진행률"},{name:"progress_header · progress_label · progress_value",description:"헤더"},{name:"progress_sm · progress_lg · progress_fit · progress_block",description:"크기·너비"},{name:"progress_striped · progress_animated · progress_inside",description:"스타일"},{name:"is-indeterminate",description:"불확정 상태"},{name:"color_primary · color_success · color_warning · color_danger",description:"색상"}],ke=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ve=[{name:"--progress-height · --progress-height-sm · --progress-height-lg",default:"8px · 4px · 12px",description:"선형 트랙 높이"},{name:"--progress-max-width",default:"var(--input-max-width)",description:"progress_fit 최대 너비"},{name:"--progress-circle-size · --progress-circle-stroke",default:"7.5rem · 6",description:"원형 크기·stroke"}],we=[{title:"API · Progress Props",tables:[{columns:ee,rows:Be,codeColumn:"name"}]},{title:"API · ProgressCircle Props",tables:[{columns:ye,rows:be,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:fe,rows:_e,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:De,rows:qe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ke,rows:ve,codeColumn:"name"}]}],Se={title:"Components/피드백/Progress",id:"components-progress",component:o,tags:["autodocs"],argTypes:{percent:{control:"number",type:{name:"number",summary:"number"}},status:{control:"select",options:["success","exception"],type:{name:"enum",summary:"'success' | 'exception'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},showInfo:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},animated:{control:"boolean",type:{name:"boolean",summary:"boolean"}},indeterminate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inside:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:we}},u={args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:e=>({components:{Progress:o},setup(){return{args:e}},template:'<Progress v-bind="args" />'})},l={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress</code> · <code class=&quot;typo_code&quot;>progress_track</code> · <code class=&quot;typo_code&quot;>progress_bar</code>로 트랙과 채움 막대를 구성합니다. <code class=&quot;typo_code&quot;>progress_bar</code>의 <code class=&quot;typo_code&quot;>style=&quot;width: …&quot;</code> 또는 CSS 변수로 진행률을 제어합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="0" />
  <Progress :percent="30" />
  <Progress :percent="60" />
  <Progress :percent="100" status="success" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="0" />
    <Progress :percent="30" />
    <Progress :percent="60" />
    <Progress :percent="100" status="success" />`})},i={name:"레이블 · 값",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_header</code>에 <code class=&quot;typo_code&quot;>progress_label</code> · <code class=&quot;typo_code&quot;>progress_value</code>를 함께 배치합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
  <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
    <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />`})},p={name:"색상",parameters:{demoPreview:{stack:!0},docs:{description:{story:"공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" color="primary" aria-label="Primary 진행률" />
  <Progress :percent="100" color="success" aria-label="Success 진행률" />
  <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
  <Progress :percent="35" color="danger" aria-label="Danger 진행률" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="50" color="primary" aria-label="Primary 진행률" />
    <Progress :percent="100" color="success" aria-label="Success 진행률" />
    <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
    <Progress :percent="35" color="danger" aria-label="Danger 진행률" />`})},d={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_sm</code> · <code class=&quot;typo_code&quot;>progress</code>(기본) · <code class=&quot;typo_code&quot;>progress_lg</code> 세 가지 높이를 지원합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress size="sm" :percent="40" />
  <Progress :percent="55" />
  <Progress size="lg" :percent="70" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress size="sm" :percent="40" />
    <Progress :percent="55" />
    <Progress size="lg" :percent="70" />`})},m={name:"줄무늬 · 애니메이션",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_striped</code>로 줄무늬 패턴을, <code class=&quot;typo_code&quot;>progress_animated</code>와 함께 사용하면 흐르는 애니메이션을 적용합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
  <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
    <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />`})},g={name:"불확정",parameters:{demoPreview:{stack:!0},docs:{description:{story:"진행률을 알 수 없을 때 <code class=&quot;typo_code&quot;>is-indeterminate</code>를 사용합니다. <code class=&quot;typo_code&quot;>aria-valuenow</code>를 생략하거나 <code class=&quot;typo_code&quot;>aria-busy=&quot;true&quot;</code>를 함께 지정합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress indeterminate color="primary" aria-label="처리 중" />
  <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress indeterminate color="primary" aria-label="처리 중" />
    <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />`})},C={name:"바 안 텍스트",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_inside</code>로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="25" inside />
  <Progress :percent="80" inside size="lg" color="success" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="25" inside />
    <Progress :percent="80" inside size="lg" color="success" />`})},P={name:"원형",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_circle</code>로 원형 진행률을 표시합니다. <code class=&quot;typo_code&quot;>style=&quot;--progress-percent: …&quot;</code>로 채움 비율을 지정합니다."},source:{code:`<script setup>
import ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';
<\/script>

<template>
  <ProgressCircle :percent="25" />
  <ProgressCircle :percent="68" color="success" />
  <ProgressCircle :percent="50" size="sm" color="warning" />
  <ProgressCircle :percent="90" size="lg" color="danger" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<ProgressCircle :percent="25" />
    <ProgressCircle :percent="68" color="success" />
    <ProgressCircle :percent="50" size="sm" color="warning" />
    <ProgressCircle :percent="90" size="lg" color="danger" />`})},B={name:"너비",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>progress_fit</code>은 최대 너비를 제한하고, <code class=&quot;typo_code&quot;>progress_block</code>은 부모 너비 전체를 사용합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" show-info label="progress_fit" />
  <Progress :percent="72" block show-info label="progress_block — 전체 너비" />
</template>`,language:"vue"}}},render:()=>({components:{Progress:o,ProgressCircle:n},template:`<Progress :percent="50" show-info label="progress_fit" />
    <Progress :percent="72" block show-info label="progress_block — 전체 너비" />`})};var k,v,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    percent: 0,
    status: "success",
    size: "md",
    showInfo: false,
    label: "라벨",
    color: "primary",
    striped: false,
    animated: false,
    indeterminate: false,
    inside: false,
    block: false,
    ariaLabel: "진행률"
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: '<Progress v-bind="args" />'
  })
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var h,A,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress</code> · <code class=&quot;typo_code&quot;>progress_track</code> · <code class=&quot;typo_code&quot;>progress_bar</code>로 트랙과 채움 막대를 구성합니다. <code class=&quot;typo_code&quot;>progress_bar</code>의 <code class=&quot;typo_code&quot;>style=&quot;width: …&quot;</code> 또는 CSS 변수로 진행률을 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"0\\" />\\n  <Progress :percent=\\"30\\" />\\n  <Progress :percent=\\"60\\" />\\n  <Progress :percent=\\"100\\" status=\\"success\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="0" />
    <Progress :percent="30" />
    <Progress :percent="60" />
    <Progress :percent="100" status="success" />\`
  })
}`,...(x=(A=l.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var E,S,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "레이블 · 값",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_header</code>에 <code class=&quot;typo_code&quot;>progress_label</code> · <code class=&quot;typo_code&quot;>progress_value</code>를 함께 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"42\\" show-info label=\\"파일 업로드\\" aria-label=\\"파일 업로드 진행률\\" />\\n  <Progress :percent=\\"67\\" show-info label=\\"데이터 동기화\\" aria-label=\\"데이터 동기화 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
    <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />\`
  })
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,L,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"50\\" color=\\"primary\\" aria-label=\\"Primary 진행률\\" />\\n  <Progress :percent=\\"100\\" color=\\"success\\" aria-label=\\"Success 진행률\\" />\\n  <Progress :percent=\\"75\\" color=\\"warning\\" aria-label=\\"Warning 진행률\\" />\\n  <Progress :percent=\\"35\\" color=\\"danger\\" aria-label=\\"Danger 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="50" color="primary" aria-label="Primary 진행률" />
    <Progress :percent="100" color="success" aria-label="Success 진행률" />
    <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
    <Progress :percent="35" color="danger" aria-label="Danger 진행률" />\`
  })
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,O,T;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_sm</code> · <code class=&quot;typo_code&quot;>progress</code>(기본) · <code class=&quot;typo_code&quot;>progress_lg</code> 세 가지 높이를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress size=\\"sm\\" :percent=\\"40\\" />\\n  <Progress :percent=\\"55\\" />\\n  <Progress size=\\"lg\\" :percent=\\"70\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress size="sm" :percent="40" />
    <Progress :percent="55" />
    <Progress size="lg" :percent="70" />\`
  })
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var V,$,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "줄무늬 · 애니메이션",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_striped</code>로 줄무늬 패턴을, <code class=&quot;typo_code&quot;>progress_animated</code>와 함께 사용하면 흐르는 애니메이션을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"45\\" striped color=\\"primary\\" aria-label=\\"줄무늬 진행률\\" />\\n  <Progress :percent=\\"65\\" striped animated color=\\"primary\\" aria-label=\\"애니메이션 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
    <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />\`
  })
}`,...(N=($=m.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var R,j,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "불확정",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "진행률을 알 수 없을 때 <code class=&quot;typo_code&quot;>is-indeterminate</code>를 사용합니다. <code class=&quot;typo_code&quot;>aria-valuenow</code>를 생략하거나 <code class=&quot;typo_code&quot;>aria-busy=&quot;true&quot;</code>를 함께 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress indeterminate color=\\"primary\\" aria-label=\\"처리 중\\" />\\n  <Progress indeterminate label=\\"동기화 중…\\" color=\\"success\\" aria-label=\\"동기화 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress indeterminate color="primary" aria-label="처리 중" />
    <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />\`
  })
}`,...(H=(j=g.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var M,G,J;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "바 안 텍스트",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_inside</code>로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"25\\" inside />\\n  <Progress :percent=\\"80\\" inside size=\\"lg\\" color=\\"success\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="25" inside />
    <Progress :percent="80" inside size="lg" color="success" />\`
  })
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "원형",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_circle</code>로 원형 진행률을 표시합니다. <code class=&quot;typo_code&quot;>style=&quot;--progress-percent: …&quot;</code>로 채움 비율을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';\\n<\/script>\\n\\n<template>\\n  <ProgressCircle :percent=\\"25\\" />\\n  <ProgressCircle :percent=\\"68\\" color=\\"success\\" />\\n  <ProgressCircle :percent=\\"50\\" size=\\"sm\\" color=\\"warning\\" />\\n  <ProgressCircle :percent=\\"90\\" size=\\"lg\\" color=\\"danger\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<ProgressCircle :percent="25" />
    <ProgressCircle :percent="68" color="success" />
    <ProgressCircle :percent="50" size="sm" color="warning" />
    <ProgressCircle :percent="90" size="lg" color="danger" />\`
  })
}`,...(U=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>progress_fit</code>은 최대 너비를 제한하고, <code class=&quot;typo_code&quot;>progress_block</code>은 부모 너비 전체를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"50\\" show-info label=\\"progress_fit\\" />\\n  <Progress :percent=\\"72\\" block show-info label=\\"progress_block — 전체 너비\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Progress,
      ProgressCircle
    },
    template: \`<Progress :percent="50" show-info label="progress_fit" />
    <Progress :percent="72" block show-info label="progress_block — 전체 너비" />\`
  })
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ze=["Playground","Basic","Label","Color","Size","Striped","Indeterminate","Inside","Circle","Width"];export{l as Basic,P as Circle,p as Color,g as Indeterminate,C as Inside,i as Label,u as Playground,d as Size,m as Striped,B as Width,ze as __namedExportsOrder,Se as default};
