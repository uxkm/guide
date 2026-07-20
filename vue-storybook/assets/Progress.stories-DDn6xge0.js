import{u as de,a as oe,b as te,c as u,t as k,f as A,d as l,ak as le,n as ie,g as i,o as p,i as ce,j as ue}from"./iframe-CAswI7Qe.js";import{w as a,s as ge}from"./story-renders-DjeoaiCa.js";import"./preload-helper-PMqzWbAN.js";const Ce={key:0,class:"progress_header"},fe={key:0,class:"progress_label"},be={key:1,class:"progress_value"},Be=["aria-valuenow","aria-label","aria-busy"],n=Object.assign({inheritAttrs:!1},{__name:"Progress",props:{percent:{type:Number,default:0},status:{type:String,default:"",validator:e=>["","success","exception"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},showInfo:Boolean,label:String,color:{type:String,default:"primary",validator:e=>["primary","success","warning","danger"].includes(e)},striped:Boolean,animated:Boolean,indeterminate:Boolean,inside:Boolean,block:Boolean,ariaLabel:{type:String,default:"진행률"}},setup(e){const s=e,c=de(),t=oe(),m=ce(null),_=ue("Progress",{defaults:{percent:0,size:"md",color:"primary"},booleanProps:new Set(["showInfo","striped","animated","indeterminate","inside","block"]),selfClosing:!1});te(_,s,c,m,t);const h=i(()=>s.status==="success"?"color_success":s.status==="exception"||s.color==="danger"?"color_danger":`color_${s.color}`),o=i(()=>{const r=["progress",h.value];return s.block?r.push("progress_block"):r.push("progress_fit"),s.size==="sm"&&r.push("progress_sm"),s.size==="lg"&&r.push("progress_lg"),s.striped&&r.push("progress_striped"),s.animated&&r.push("progress_animated"),s.indeterminate&&r.push("is-indeterminate"),s.inside&&r.push("progress_inside"),t.class&&r.push(t.class),r}),d=i(()=>({width:`${s.percent}%`})),z=i(()=>`${s.percent}%`);return(r,Ee)=>(p(),u("div",{ref_key:"rootRef",ref:m,class:ie(o.value)},[e.showInfo||e.label?(p(),u("div",Ce,[e.label?(p(),u("span",fe,k(e.label),1)):A("",!0),e.showInfo?(p(),u("span",be,k(z.value),1)):A("",!0)])):A("",!0),l("div",{class:"progress_track",role:"progressbar","aria-valuenow":e.indeterminate?void 0:e.percent,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.ariaLabel,"aria-busy":e.indeterminate?"true":void 0},[l("span",{class:"progress_bar",style:le(d.value)},k(e.inside?z.value:""),5)],8,Be)],2))}}),Pe=["aria-valuenow","aria-label"],ye={class:"progress_circle-value"},pe=Object.assign({inheritAttrs:!1},{__name:"ProgressCircle",props:{percent:{type:Number,default:0},color:{type:String,default:"primary",validator:e=>["primary","success","warning","danger"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},ariaLabel:{type:String,default:"진행률"}},setup(e){const s=e,c=oe(),t=ce(null),m=ue("ProgressCircle",{defaults:{percent:0,color:"primary",size:"md"}});te(m,s,{},t,c);const _=i(()=>{const o=["progress","progress_circle",`color_${s.color}`];return s.size==="sm"&&o.push("progress_sm"),s.size==="lg"&&o.push("progress_lg"),c.class&&o.push(c.class),o}),h=i(()=>({"--progress-percent":s.percent}));return(o,d)=>(p(),u("div",{ref_key:"rootRef",ref:t,class:ie(_.value),role:"progressbar","aria-valuenow":e.percent,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.ariaLabel,style:le(h.value)},[d[0]||(d[0]=l("svg",{class:"progress_circle-svg",viewBox:"0 0 100 100","aria-hidden":"true"},[l("circle",{class:"progress_circle-track",cx:"50",cy:"50",r:"45"}),l("circle",{class:"progress_circle-bar",cx:"50",cy:"50",r:"45"})],-1)),l("span",ye,k(e.percent)+"%",1)],14,Pe))}}),me=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],De=[{name:"percent",type:"number",default:"0",description:"0–100 진행률 (막대 width)"},{name:"status",type:"'success' | 'exception'",default:"—",description:"완료·오류 색상"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"막대 색상 color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"label",type:"string",default:"—",description:"헤더 라벨"},{name:"show-info",type:"boolean",default:"false",description:"퍼센트 값 표시"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 (progress_striped)"},{name:"animated",type:"boolean",default:"false",description:"흐르는 애니메이션"},{name:"indeterminate",type:"boolean",default:"false",description:"불확정 (is-indeterminate)"},{name:"inside",type:"boolean",default:"false",description:"막대 안 퍼센트 텍스트"},{name:"block",type:"boolean",default:"false",description:"전체 너비 (progress_block)"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],ve=me,we=[{name:"percent",type:"number",default:"0",description:"0–100 (--progress-percent)"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],ke=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],_e=[{name:"default",description:"추가 콘텐츠 (선택)"}],he=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ae=[{name:"progress · progress_track · progress_bar",description:"선형 진행률"},{name:"progress_circle · progress_circle-svg · progress_circle-value",description:"원형 진행률"},{name:"progress_header · progress_label · progress_value",description:"헤더"},{name:"progress_sm · progress_lg · progress_fit · progress_block",description:"크기·너비"},{name:"progress_striped · progress_animated · progress_inside",description:"스타일"},{name:"is-indeterminate",description:"불확정 상태"},{name:"color_primary · color_success · color_warning · color_danger",description:"색상"}],ze=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xe=[{name:"--progress-height · --progress-height-sm · --progress-height-lg",default:"8px · 4px · 12px",description:"선형 트랙 높이"},{name:"--progress-max-width",default:"var(--input-max-width)",description:"progress_fit 최대 너비"},{name:"--progress-circle-size · --progress-circle-stroke",default:"7.5rem · 6",description:"원형 크기·stroke"}],Se=[{title:"API · Progress Props",tables:[{columns:me,rows:De,codeColumn:"name"}]},{title:"API · ProgressCircle Props",tables:[{columns:ve,rows:we,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ke,rows:_e,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:he,rows:Ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ze,rows:xe,codeColumn:"name"}]}],Fe={title:"Components/피드백/Progress",id:"components-progress",component:n,subcomponents:{ProgressCircle:pe},tags:["autodocs"],argTypes:{percent:{control:"number",type:{name:"number",summary:"number"}},status:{control:"select",options:["success","exception"],type:{name:"enum",summary:"'success' | 'exception'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},showInfo:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},animated:{control:"boolean",type:{name:"boolean",summary:"boolean"}},indeterminate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inside:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Se}},g={parameters:{controls:{disable:!1}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:(e,s)=>({components:{Progress:n},setup(){return{args:ge(s)}},template:'<Progress v-bind="args" />'})},C={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'`progress` · `progress_track` · `progress_bar`로 트랙과 채움 막대를 구성합니다. `progress_bar`의 `style="width: …"` 또는 CSS 변수로 진행률을 제어합니다.'},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="0" />
  <Progress :percent="30" />
  <Progress :percent="60" />
  <Progress :percent="100" status="success" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",label:"라벨",color:"primary",ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="0" />
      <Progress :percent="30" />
      <Progress :percent="60" />
      <Progress :percent="100" status="success" />`}))},f={name:"레이블 · 값",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_header`에 `progress_label` · `progress_value`를 함께 배치합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
  <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
      <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />`}))},b={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"공통 `color_*` 클래스로 의미를 표현합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" color="primary" aria-label="Primary 진행률" />
  <Progress :percent="100" color="success" aria-label="Success 진행률" />
  <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
  <Progress :percent="35" color="danger" aria-label="Danger 진행률" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="50" color="primary" aria-label="Primary 진행률" />
      <Progress :percent="100" color="success" aria-label="Success 진행률" />
      <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
      <Progress :percent="35" color="danger" aria-label="Danger 진행률" />`}))},B={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_sm` · `progress`(기본) · `progress_lg` 세 가지 높이를 지원합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress size="sm" :percent="40" />
  <Progress :percent="55" />
  <Progress size="lg" :percent="70" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress size="sm" :percent="40" />
      <Progress :percent="55" />
      <Progress size="lg" :percent="70" />`}))},P={name:"줄무늬 · 애니메이션",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_striped`로 줄무늬 패턴을, `progress_animated`와 함께 사용하면 흐르는 애니메이션을 적용합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
  <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
      <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />`}))},y={name:"불확정",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'진행률을 알 수 없을 때 `is-indeterminate`를 사용합니다. `aria-valuenow`를 생략하거나 `aria-busy="true"`를 함께 지정합니다.'},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress indeterminate color="primary" aria-label="처리 중" />
  <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress indeterminate color="primary" aria-label="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />`}))},D={name:"바 안 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_inside`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="25" inside />
  <Progress :percent="80" inside size="lg" color="success" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="25" inside />
      <Progress :percent="80" inside size="lg" color="success" />`}))},v={name:"원형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'`progress_circle`로 원형 진행률을 표시합니다. `style="--progress-percent: …"`로 채움 비율을 지정합니다.'},source:{code:`<script setup>
import ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';
<\/script>

<template>
  <ProgressCircle :percent="25" />
  <ProgressCircle :percent="68" color="success" />
  <ProgressCircle :percent="50" size="sm" color="warning" />
  <ProgressCircle :percent="90" size="lg" color="danger" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{ProgressCircle:pe},template:`<ProgressCircle :percent="25" />
      <ProgressCircle :percent="68" color="success" />
      <ProgressCircle :percent="50" size="sm" color="warning" />
      <ProgressCircle :percent="90" size="lg" color="danger" />`}))},w={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_fit`은 최대 너비를 제한하고, `progress_block`은 부모 너비 전체를 사용합니다."},source:{code:`<script setup>
import Progress from '@uxkm/ui/components/Progress.vue';
<\/script>

<template>
  <Progress :percent="50" show-info label="progress_fit" />
  <Progress :percent="72" block show-info label="progress_block — 전체 너비" />
</template>`,language:"vue"}}},args:{percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},render:a(()=>({components:{Progress:n},template:`<Progress :percent="50" show-info label="progress_fit" />
      <Progress :percent="72" block show-info label="progress_block — 전체 너비" />`}))};var x,S,E;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
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
  render: (_args, context) => ({
    components: {
      Progress
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Progress v-bind="args" />'
  })
}`,...(E=(S=g.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,L,R;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: "\`progress\` · \`progress_track\` · \`progress_bar\`로 트랙과 채움 막대를 구성합니다. \`progress_bar\`의 \`style=\\"width: …\\"\` 또는 CSS 변수로 진행률을 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"0\\" />\\n  <Progress :percent=\\"30\\" />\\n  <Progress :percent=\\"60\\" />\\n  <Progress :percent=\\"100\\" status=\\"success\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    percent: 0,
    status: "success",
    size: "md",
    label: "라벨",
    color: "primary",
    ariaLabel: "진행률"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="0" />
      <Progress :percent="30" />
      <Progress :percent="60" />
      <Progress :percent="100" status="success" />\`
  }))
}`,...(R=(L=C.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,$,W;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "레이블 · 값",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`progress_header\`에 \`progress_label\` · \`progress_value\`를 함께 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"42\\" show-info label=\\"파일 업로드\\" aria-label=\\"파일 업로드 진행률\\" />\\n  <Progress :percent=\\"67\\" show-info label=\\"데이터 동기화\\" aria-label=\\"데이터 동기화 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="42" show-info label="파일 업로드" aria-label="파일 업로드 진행률" />
      <Progress :percent="67" show-info label="데이터 동기화" aria-label="데이터 동기화 진행률" />\`
  }))
}`,...(W=($=f.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var O,N,T;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "공통 \`color_*\` 클래스로 의미를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"50\\" color=\\"primary\\" aria-label=\\"Primary 진행률\\" />\\n  <Progress :percent=\\"100\\" color=\\"success\\" aria-label=\\"Success 진행률\\" />\\n  <Progress :percent=\\"75\\" color=\\"warning\\" aria-label=\\"Warning 진행률\\" />\\n  <Progress :percent=\\"35\\" color=\\"danger\\" aria-label=\\"Danger 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="50" color="primary" aria-label="Primary 진행률" />
      <Progress :percent="100" color="success" aria-label="Success 진행률" />
      <Progress :percent="75" color="warning" aria-label="Warning 진행률" />
      <Progress :percent="35" color="danger" aria-label="Danger 진행률" />\`
  }))
}`,...(T=(N=b.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,j,H;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        story: "\`progress_sm\` · \`progress\`(기본) · \`progress_lg\` 세 가지 높이를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress size=\\"sm\\" :percent=\\"40\\" />\\n  <Progress :percent=\\"55\\" />\\n  <Progress size=\\"lg\\" :percent=\\"70\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress size="sm" :percent="40" />
      <Progress :percent="55" />
      <Progress size="lg" :percent="70" />\`
  }))
}`,...(H=(j=B.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var M,q,G;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "줄무늬 · 애니메이션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`progress_striped\`로 줄무늬 패턴을, \`progress_animated\`와 함께 사용하면 흐르는 애니메이션을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"45\\" striped color=\\"primary\\" aria-label=\\"줄무늬 진행률\\" />\\n  <Progress :percent=\\"65\\" striped animated color=\\"primary\\" aria-label=\\"애니메이션 진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="45" striped color="primary" aria-label="줄무늬 진행률" />
      <Progress :percent="65" striped animated color="primary" aria-label="애니메이션 진행률" />\`
  }))
}`,...(G=(q=P.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "불확정",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "진행률을 알 수 없을 때 \`is-indeterminate\`를 사용합니다. \`aria-valuenow\`를 생략하거나 \`aria-busy=\\"true\\"\`를 함께 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress indeterminate color=\\"primary\\" aria-label=\\"처리 중\\" />\\n  <Progress indeterminate label=\\"동기화 중…\\" color=\\"success\\" aria-label=\\"동기화 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress indeterminate color="primary" aria-label="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" aria-label="동기화 중" />\`
  }))
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "바 안 텍스트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`progress_inside\`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"25\\" inside />\\n  <Progress :percent=\\"80\\" inside size=\\"lg\\" color=\\"success\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="25" inside />
      <Progress :percent="80" inside size="lg" color="success" />\`
  }))
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "원형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`progress_circle\`로 원형 진행률을 표시합니다. \`style=\\"--progress-percent: …\\"\`로 채움 비율을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';\\n<\/script>\\n\\n<template>\\n  <ProgressCircle :percent=\\"25\\" />\\n  <ProgressCircle :percent=\\"68\\" color=\\"success\\" />\\n  <ProgressCircle :percent=\\"50\\" size=\\"sm\\" color=\\"warning\\" />\\n  <ProgressCircle :percent=\\"90\\" size=\\"lg\\" color=\\"danger\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      ProgressCircle
    },
    template: \`<ProgressCircle :percent="25" />
      <ProgressCircle :percent="68" color="success" />
      <ProgressCircle :percent="50" size="sm" color="warning" />
      <ProgressCircle :percent="90" size="lg" color="danger" />\`
  }))
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ne,ae;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`progress_fit\`은 최대 너비를 제한하고, \`progress_block\`은 부모 너비 전체를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Progress from '@uxkm/ui/components/Progress.vue';\\n<\/script>\\n\\n<template>\\n  <Progress :percent=\\"50\\" show-info label=\\"progress_fit\\" />\\n  <Progress :percent=\\"72\\" block show-info label=\\"progress_block — 전체 너비\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Progress
    },
    template: \`<Progress :percent="50" show-info label="progress_fit" />
      <Progress :percent="72" block show-info label="progress_block — 전체 너비" />\`
  }))
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const $e=["Playground","Basic","Label","Color","Size","Striped","Indeterminate","Inside","Circle","Width"];export{C as Basic,v as Circle,b as Color,y as Indeterminate,D as Inside,f as Label,g as Playground,B as Size,P as Striped,w as Width,$e as __namedExportsOrder,Fe as default};
