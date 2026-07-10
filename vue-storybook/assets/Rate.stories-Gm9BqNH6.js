import{u as Re,b as De,c as r,k as e,F as H,s as M,t as C,q as i,n as N,m as F,e as p,f as g,o as l,a as he}from"./vue.esm-bundler-BaZlnz8B.js";import{r as ke,u as Ae}from"./useRipple-oORGvIsP.js";import{u as we,c as Fe}from"./useDemoCode-B9b0dRAo.js";import{_ as s}from"./FormLayout-CRfgE2Bq.js";import{c as Ee,a as xe}from"./ripple-api-C5ZjLJl-.js";const Le=["aria-label"],ze={class:"rate_stars"},Pe={class:"rate_star-graphic","aria-hidden":"true"},Se={key:0,class:"rate_star-icon-half"},Ve={key:0,class:"rate_value"},He=["disabled"],Me={key:0,class:"rate_legend"},Ne={class:"rate_control"},Te={class:"rate_stars"},$e=["name","value","checked","disabled","onChange"],Oe=["name","value","checked","disabled","onChange"],Ie={class:"rate_star-graphic","aria-hidden":"true"},je={key:0,class:"rate_star-icon-half"},qe={class:"rate_star-label"},Ge={key:1,class:"rate_value"},d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",u=Object.assign({inheritAttrs:!1},{__name:"Rate",props:{ripple:ke,value:Number,count:{type:Number,default:5},allowHalf:Boolean,clearable:Boolean,readonly:Boolean,disabled:Boolean,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},legend:String,name:String,modelValue:Number},emits:["update:modelValue"],setup(n,{emit:ge}){const t=n,{rippleAttrs:fe,childRippleAttrs:E}=Ae(t,{mode:"container"}),x=ge,ye=Re(),A=De(),w=he(null),L=t.name||`rate-${Math.random().toString(36).slice(2,9)}`,ve=Fe("Rate",{defaults:{count:5,size:"md"},booleanProps:new Set(["allowHalf","clearable","readonly","disabled"]),skipProps:["modelValue","name"],selfClosing:!0});we(ve,t,ye,w,A);const m=g(()=>t.modelValue??t.value),z=g(()=>{const a=["rate"];return t.size==="sm"&&a.push("rate_sm"),t.size==="lg"&&a.push("rate_lg"),t.allowHalf&&a.push("rate_allow-half"),t.clearable&&a.push("rate_clearable"),t.readonly&&a.push("is-readonly"),A.class&&a.push(A.class),a}),P=g(()=>Array.from({length:t.count},(a,c)=>c+1));function S(a){x("update:modelValue",a)}function Be(){x("update:modelValue",void 0)}const be=g(()=>{const a=m.value??0;return`${t.count}점 만점 중 ${a}점`});function V(a){const c=m.value??0;return c>=a?"is-filled":t.allowHalf&&c>=a-.5?"is-half":""}return(a,c)=>n.readonly?(l(),r("div",{key:0,ref_key:"rootRef",ref:w,class:N(z.value),role:"img","aria-label":be.value},[e("div",ze,[(l(!0),r(H,null,M(P.value,o=>(l(),r("span",{key:o,class:N(["rate_star-readonly",V(o)])},[e("span",Pe,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})]),e("svg",{class:"rate_star-icon rate_star-icon-filled",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})]),V(o)==="is-half"?(l(),r("span",Se,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})])])):i("",!0)])],2))),128))]),m.value?(l(),r("span",Ve,C(m.value),1)):i("",!0)],10,Le)):(l(),r("fieldset",F({key:1,ref_key:"rootRef",ref:w},p(fe),{class:z.value,disabled:n.disabled}),[n.legend?(l(),r("legend",Me,C(n.legend),1)):i("",!0),e("div",Ne,[e("div",Te,[(l(!0),r(H,null,M(P.value,o=>(l(),r("label",F({key:o},{ref_for:!0},p(E),{class:"rate_star"}),[n.allowHalf?(l(),r("input",{key:0,type:"radio",class:"rate_input rate_input-half",name:p(L),value:o-.5,checked:m.value===o-.5,disabled:n.disabled,onChange:_e=>S(o-.5)},null,40,$e)):i("",!0),e("input",{type:"radio",class:"rate_input",name:p(L),value:o,checked:m.value===o,disabled:n.disabled,onChange:_e=>S(o)},null,40,Oe),e("span",Ie,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})]),e("svg",{class:"rate_star-icon rate_star-icon-filled",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})]),n.allowHalf?(l(),r("span",je,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d})])])):i("",!0)]),e("span",qe,C(o)+"점",1)],16))),128))]),n.clearable?(l(),r("button",F({key:0},p(E),{type:"button",class:"rate_clear","aria-label":"별점 초기화",title:"초기화",onClick:Be}),[...c[0]||(c[0]=[e("svg",{class:"rate_clear-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[e("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],16)):i("",!0),m.value?(l(),r("output",Ge,C(m.value)+"점",1)):i("",!0)])],16,He))}}),Je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ke=[{name:"model-value",type:"number",default:"—",description:"v-model 별점 값"},{name:"value",type:"number",default:"—",description:"model-value 없을 때 표시값"},{name:"count",type:"number",default:"5",description:"별 개수"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"rate_sm · rate_lg"},{name:"allow-half",type:"boolean",default:"false",description:"0.5점 단위 (rate_allow-half)"},{name:"clearable",type:"boolean",default:"false",description:"초기화 버튼 (rate_clearable)"},{name:"readonly",type:"boolean",default:"false",description:"읽기 전용 표시 (is-readonly)"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"legend",type:"string",default:"—",description:"fieldset legend"},{name:"name",type:"string",default:"—",description:"radio name (그룹)"},Ee],Qe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ue=[{name:"rate",description:"별점 루트"},{name:"rate_sm · rate_lg · rate_allow-half · rate_clearable",description:"크기·기능"},{name:"rate_stars · rate_star · rate_star-graphic",description:"별 아이콘"},{name:"rate_input · rate_star-label · rate_value · rate_clear",description:"입력·값·초기화"},{name:"rate_legend · rate_control",description:"fieldset 구조"},{name:"is-readonly · is-filled · is-half",description:"상태"},...xe],We=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Xe=[{name:"update:modelValue",description:"별점 변경·초기화 시 (v-model)"}],Ye=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ze=[{name:"--rate-star-size · --rate-star-size-sm · --rate-star-size-lg",default:"1.25rem · 1rem · 1.5rem",description:"별 크기"},{name:"--rate-star-gap · --rate-clear-size",default:"0.125rem · 1.5rem",description:"별 간격·초기화 버튼"}],ea=[{title:"API · Props",tables:[{columns:Je,rows:Ke,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:We,rows:Xe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Qe,rows:Ue,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ye,rows:Ze,codeColumn:"name"}]}],oa={title:"Components/폼/Rate",id:"components-rate",component:u,tags:["autodocs"],argTypes:{value:{control:"number",type:{name:"number",summary:"number"}},count:{control:"number",type:{name:"number",summary:"number"}},allowHalf:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},readonly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},legend:{control:"text",type:{name:"string",summary:"string"}},name:{control:"text",type:{name:"string",summary:"string"}},modelValue:{control:"number",type:{name:"number",summary:"number"}}},parameters:{layout:"padded",apiSections:ea}},f={args:{value:"1",count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search",modelValue:""},render:n=>({components:{Rate:u},setup(){return{args:n}},template:'<Rate v-bind="args" />'})},y={name:"유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. <code>legend</code> · <code>aria-labelledby</code> · <code>aria-label</code>을 상황에 맞게 사용합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
  <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
  <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
    <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
    <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />`})},v={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate legend="배송 속도" :value="3" name="rate-basic" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:'<Rate legend="배송 속도" :value="3" name="rate-basic" />'})},B={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
  <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
  <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
    <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
    <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />`})},b={name:"색상",parameters:{demoPreview:{stack:!0},docs:{description:{story:"기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
  <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
  <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
    <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
    <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />`})},_={name:"반별",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code>rate_allow-half</code>를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 <code>rate_input-half</code>와 <code>rate_star-half</code> 버튼을 배치합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
  <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
    <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>`})},R={name:"선택 해제",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code>rate_clearable</code>을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:'<Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />'})},D={name:"읽기 전용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code>is-readonly</code>로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate readonly allow-half :value="4.5" />
  <Rate readonly size="sm" :value="2" />
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate readonly allow-half :value="4.5" />
    <Rate readonly size="sm" :value="2" />`})},h={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"비활성·오류(is-error) 상태를 지원합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
  <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
  <p class="form_field-error">별점을 선택해 주세요.</p>
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
    <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
    <p class="form_field-error">별점을 선택해 주세요.</p>`})},k={name:"폼 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"form_field · form_vertical과 함께 사용합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="rate-form-label">상품 만족도</span>
      <Rate name="rate-form" aria-labelledby="rate-form-label" />
      <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
    </div>
  </FormLayout>
</template>`,language:"vue"}}},render:()=>({components:{Rate:u,FormLayout:s},template:`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <span class="form_field-label" id="rate-form-label">상품 만족도</span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>`})};var T,$,O;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: "1",
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search",
    modelValue: ""
  },
  render: args => ({
    components: {
      Rate
    },
    setup() {
      return {
        args
      };
    },
    template: '<Rate v-bind="args" />'
  })
}`,...(O=($=f.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var I,j,q;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "접근 가능한 이름 지정 방식별 예시입니다. <code>legend</code> · <code>aria-labelledby</code> · <code>aria-label</code>을 상황에 맞게 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate legend=\\"legend — 상품 만족도\\" :value=\\"3\\" name=\\"rate-type-legend\\" />\\n  <Rate :value=\\"4\\" name=\\"rate-type-labelledby\\" legend=\\"aria-labelledby — 서비스 평가\\" />\\n  <Rate legend=\\"aria-label — 단독\\" name=\\"rate-type-aria\\" aria-label=\\"별점 5점 만점\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
    <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
    <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />\`
  })
}`,...(q=(j=y.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate legend=\\"배송 속도\\" :value=\\"3\\" name=\\"rate-basic\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate legend="배송 속도" :value="3" name="rate-basic" />\`
  })
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate size=\\"sm\\" legend=\\"Small — rate_sm\\" :value=\\"3\\" name=\\"rate-size-sm\\" />\\n  <Rate legend=\\"Medium — 기본\\" :value=\\"3\\" name=\\"rate-size-md\\" />\\n  <Rate size=\\"lg\\" legend=\\"Large — rate_lg\\" :value=\\"3\\" name=\\"rate-size-lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
    <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
    <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />\`
  })
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate class=\\"color_primary\\" legend=\\"Primary\\" :value=\\"4\\" name=\\"rate-color-primary\\" />\\n  <Rate class=\\"color_success\\" legend=\\"Success\\" :value=\\"5\\" name=\\"rate-color-success\\" />\\n  <Rate class=\\"color_danger\\" legend=\\"Danger\\" :value=\\"2\\" name=\\"rate-color-danger\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
    <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
    <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />\`
  })
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "반별",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code>rate_allow-half</code>를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 <code>rate_input-half</code>와 <code>rate_star-half</code> 버튼을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate allow-half legend=\\"정밀 평가 — rate_allow-half\\" :value=\\"3.5\\" name=\\"rate-half\\" />\\n  <p class=\\"rate_hint\\">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
    <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>\`
  })
}`,...(ne=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,le;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "선택 해제",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code>rate_clearable</code>을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate clearable legend=\\"만족도 — rate_clearable\\" :value=\\"4\\" name=\\"rate-clear\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />\`
  })
}`,...(le=(re=R.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,ue,se;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "읽기 전용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code>is-readonly</code>로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate readonly allow-half :value=\\"4.5\\" />\\n  <Rate readonly size=\\"sm\\" :value=\\"2\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate readonly allow-half :value="4.5" />
    <Rate readonly size="sm" :value="2" />\`
  })
}`,...(se=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};var me,ce,ie;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "비활성·오류(is-error) 상태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate disabled legend=\\"비활성\\" :value=\\"3\\" name=\\"rate-state-disabled\\" />\\n  <Rate class=\\"is-error\\" legend=\\"오류 — is-error\\" name=\\"rate-state-error\\" />\\n  <p class=\\"form_field-error\\">별점을 선택해 주세요.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
    <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
    <p class="form_field-error">별점을 선택해 주세요.</p>\`
  })
}`,...(ie=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,Ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_field · form_vertical과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"rate-form-label\\">상품 만족도</span>\\n      <Rate name=\\"rate-form\\" aria-labelledby=\\"rate-form-label\\" />\\n      <p class=\\"form_field-hint\\">1~5점 사이로 평가해 주세요.</p>\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Rate,
      FormLayout
    },
    template: \`<FormLayout layout="vertical" fit>
      <div class="form_field">
        <span class="form_field-label" id="rate-form-label">상품 만족도</span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>\`
  })
}`,...(Ce=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};const ua=["Playground","Type","Basic","Size","Color","Half","Clear","Readonly","State","Form"];export{v as Basic,R as Clear,b as Color,k as Form,_ as Half,f as Playground,D as Readonly,B as Size,h as State,y as Type,ua as __namedExportsOrder,oa as default};
