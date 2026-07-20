import{k as Re,l as De,u as he,a as we,b as Ae,c as r,d as e,F as M,a7 as N,t as C,f as d,n as T,p as E,s as p,g as f,o as t,i as ke,j as ze}from"./iframe-CAswI7Qe.js";import{w as u,s as Ee}from"./story-renders-DjeoaiCa.js";import{_ as xe}from"./FormLayout-B-M4dP74.js";import{h as Pe,a as Se}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Fe=["aria-label"],He={class:"rate_stars"},Le={class:"rate_star-graphic","aria-hidden":"true"},Ve={key:0,class:"rate_star-icon-half"},Me={key:0,class:"rate_value"},Ne=["disabled"],Te={key:0,class:"rate_legend"},$e={class:"rate_control"},Oe={class:"rate_stars"},je=["name","value","checked","disabled","onChange"],Ie=["name","value","checked","disabled","onChange"],qe={class:"rate_star-graphic","aria-hidden":"true"},Ge={key:0,class:"rate_star-icon-half"},Je={class:"rate_star-label"},Ke={key:1,class:"rate_value"},i="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",o=Object.assign({inheritAttrs:!1},{__name:"Rate",props:{ripple:Re,value:Number,count:{type:Number,default:5},allowHalf:Boolean,clearable:Boolean,readonly:Boolean,disabled:Boolean,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},legend:String,name:String,modelValue:Number},emits:["update:modelValue"],setup(n,{emit:A}){const l=n,{rippleAttrs:ge,childRippleAttrs:x}=De(l,{mode:"container"}),P=A,ve=he(),k=we(),z=ke(null),S=l.name||`rate-${Math.random().toString(36).slice(2,9)}`,be=ze("Rate",{defaults:{count:5,size:"md"},booleanProps:new Set(["allowHalf","clearable","readonly","disabled"]),skipProps:["modelValue","name"],selfClosing:!0});Ae(be,l,ve,z,k);const c=f(()=>l.modelValue??l.value),F=f(()=>{const a=["rate"];return l.size==="sm"&&a.push("rate_sm"),l.size==="lg"&&a.push("rate_lg"),l.allowHalf&&a.push("rate_allow-half"),l.clearable&&a.push("rate_clearable"),l.readonly&&a.push("is-readonly"),k.class&&a.push(k.class),a}),H=f(()=>Array.from({length:l.count},(a,m)=>m+1));function L(a){P("update:modelValue",a)}function ye(){P("update:modelValue",void 0)}const Be=f(()=>{const a=c.value??0;return`${l.count}점 만점 중 ${a}점`});function V(a){const m=c.value??0;return m>=a?"is-filled":l.allowHalf&&m>=a-.5?"is-half":""}return(a,m)=>n.readonly?(t(),r("div",{key:0,ref_key:"rootRef",ref:z,class:T(F.value),role:"img","aria-label":Be.value},[e("div",He,[(t(!0),r(M,null,N(H.value,s=>(t(),r("span",{key:s,class:T(["rate_star-readonly",V(s)])},[e("span",Le,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})]),e("svg",{class:"rate_star-icon rate_star-icon-filled",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})]),V(s)==="is-half"?(t(),r("span",Ve,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})])])):d("",!0)])],2))),128))]),c.value?(t(),r("span",Me,C(c.value),1)):d("",!0)],10,Fe)):(t(),r("fieldset",E({key:1,ref_key:"rootRef",ref:z},p(ge),{class:F.value,disabled:n.disabled}),[n.legend?(t(),r("legend",Te,C(n.legend),1)):d("",!0),e("div",$e,[e("div",Oe,[(t(!0),r(M,null,N(H.value,s=>(t(),r("label",E({key:s},{ref_for:!0},p(x),{class:"rate_star"}),[n.allowHalf?(t(),r("input",{key:0,type:"radio",class:"rate_input rate_input-half",name:p(S),value:s-.5,checked:c.value===s-.5,disabled:n.disabled,onChange:_e=>L(s-.5)},null,40,je)):d("",!0),e("input",{type:"radio",class:"rate_input",name:p(S),value:s,checked:c.value===s,disabled:n.disabled,onChange:_e=>L(s)},null,40,Ie),e("span",qe,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})]),e("svg",{class:"rate_star-icon rate_star-icon-filled",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})]),n.allowHalf?(t(),r("span",Ge,[e("svg",{class:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:i})])])):d("",!0)]),e("span",Je,C(s)+"점",1)],16))),128))]),n.clearable?(t(),r("button",E({key:0},p(x),{type:"button",class:"rate_clear","aria-label":"별점 초기화",title:"초기화",onClick:ye}),[...m[0]||(m[0]=[e("svg",{class:"rate_clear-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[e("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],16)):d("",!0),c.value?(t(),r("output",Ke,C(c.value)+"점",1)):d("",!0)])],16,Ne))}}),Qe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ue=[{name:"model-value",type:"number",default:"—",description:"v-model 별점 값"},{name:"value",type:"number",default:"—",description:"model-value 없을 때 표시값"},{name:"count",type:"number",default:"5",description:"별 개수"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"rate_sm · rate_lg"},{name:"allow-half",type:"boolean",default:"false",description:"0.5점 단위 (rate_allow-half)"},{name:"clearable",type:"boolean",default:"false",description:"초기화 버튼 (rate_clearable)"},{name:"readonly",type:"boolean",default:"false",description:"읽기 전용 표시 (is-readonly)"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"legend",type:"string",default:"—",description:"fieldset legend"},{name:"name",type:"string",default:"—",description:"radio name (그룹)"},Pe],We=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Xe=[{name:"rate",description:"별점 루트"},{name:"rate_sm · rate_lg · rate_allow-half · rate_clearable",description:"크기·기능"},{name:"rate_stars · rate_star · rate_star-graphic",description:"별 아이콘"},{name:"rate_input · rate_star-label · rate_value · rate_clear",description:"입력·값·초기화"},{name:"rate_legend · rate_control",description:"fieldset 구조"},{name:"is-readonly · is-filled · is-half",description:"상태"},...Se],Ye=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Ze=[{name:"update:modelValue",description:"별점 변경·초기화 시 (v-model)"}],ea=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],aa=[{name:"--rate-star-size · --rate-star-size-sm · --rate-star-size-lg",default:"1.25rem · 1rem · 1.5rem",description:"별 크기"},{name:"--rate-star-gap · --rate-clear-size",default:"0.125rem · 1.5rem",description:"별 간격·초기화 버튼"}],na=[{title:"API · Props",tables:[{columns:Qe,rows:Ue,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Ye,rows:Ze,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:We,rows:Xe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ea,rows:aa,codeColumn:"name"}]}],ua={title:"Components/폼/Rate",id:"components-rate",component:o,tags:["autodocs"],argTypes:{value:{control:"number",type:{name:"number",summary:"number"}},count:{control:"number",type:{name:"number",summary:"number"}},allowHalf:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},readonly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},legend:{control:"text",type:{name:"string",summary:"string"}},name:{control:"text",type:{name:"string",summary:"string"}},modelValue:{control:"number",type:{name:"number",summary:"number"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:na}},g={parameters:{controls:{disable:!1}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:(n,A)=>({components:{Rate:o},setup(){return{args:Ee(A)}},template:'<Rate v-bind="args" />'})},v={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
  <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
  <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
</template>`,language:"vue"}}},args:{value:1,count:5,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
      <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />`}))},b={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate legend="배송 속도" :value="3" name="rate-basic" />
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:'<Rate legend="배송 속도" :value="3" name="rate-basic" />'}))},y={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
  <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
  <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
      <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />`}))},B={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
  <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
  <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
      <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
      <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />`}))},_={name:"반별",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`와 `rate_star-half` 버튼을 배치합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
  <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
      <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>`}))},R={name:"선택 해제",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_clearable`을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:'<Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />'}))},D={name:"읽기 전용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate readonly allow-half :value="4.5" />
  <Rate readonly size="sm" :value="2" />
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate readonly allow-half :value="4.5" />
      <Rate readonly size="sm" :value="2" />`}))},h={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"비활성·오류(is-error) 상태를 지원합니다."},source:{code:`<script setup>
import Rate from '@uxkm/ui/components/Rate.vue';
<\/script>

<template>
  <Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
  <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
  <p class="form_field-error">별점을 선택해 주세요.</p>
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{Rate:o},template:`<Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
      <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p class="form_field-error">별점을 선택해 주세요.</p>`}))},w={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field · form_vertical과 함께 사용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},render:u(()=>({components:{FormLayout:xe,Rate:o},template:`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="rate-form-label">상품 만족도</span>
          <Rate name="rate-form" aria-labelledby="rate-form-label" />
          <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
        </div>
      </FormLayout>`}))};var $,O,j;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: (_args, context) => ({
    components: {
      Rate
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Rate v-bind="args" />'
  })
}`,...(j=(O=g.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var I,q,G;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "접근 가능한 이름 지정 방식별 예시입니다. \`legend\` · \`aria-labelledby\` · \`aria-label\`을 상황에 맞게 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate legend=\\"legend — 상품 만족도\\" :value=\\"3\\" name=\\"rate-type-legend\\" />\\n  <Rate :value=\\"4\\" name=\\"rate-type-labelledby\\" legend=\\"aria-labelledby — 서비스 평가\\" />\\n  <Rate legend=\\"aria-label — 단독\\" name=\\"rate-type-aria\\" aria-label=\\"별점 5점 만점\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
      <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />\`
  }))
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: "rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate legend=\\"배송 속도\\" :value=\\"3\\" name=\\"rate-basic\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate legend="배송 속도" :value="3" name="rate-basic" />\`
  }))
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
      <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />\`
  }))
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        story: "기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate class=\\"color_primary\\" legend=\\"Primary\\" :value=\\"4\\" name=\\"rate-color-primary\\" />\\n  <Rate class=\\"color_success\\" legend=\\"Success\\" :value=\\"5\\" name=\\"rate-color-success\\" />\\n  <Rate class=\\"color_danger\\" legend=\\"Danger\\" :value=\\"2\\" name=\\"rate-color-danger\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
      <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
      <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />\`
  }))
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,le;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "반별",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`rate_allow-half\`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 \`rate_input-half\`와 \`rate_star-half\` 버튼을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate allow-half legend=\\"정밀 평가 — rate_allow-half\\" :value=\\"3.5\\" name=\\"rate-half\\" />\\n  <p class=\\"rate_hint\\">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
      <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>\`
  }))
}`,...(le=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,te,se;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "선택 해제",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`rate_clearable\`을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate clearable legend=\\"만족도 — rate_clearable\\" :value=\\"4\\" name=\\"rate-clear\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />\`
  }))
}`,...(se=(te=R.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ue,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "읽기 전용",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`is-readonly\`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate readonly allow-half :value=\\"4.5\\" />\\n  <Rate readonly size=\\"sm\\" :value=\\"2\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate readonly allow-half :value="4.5" />
      <Rate readonly size="sm" :value="2" />\`
  }))
}`,...(ce=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,de,ie;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        story: "비활성·오류(is-error) 상태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Rate from '@uxkm/ui/components/Rate.vue';\\n<\/script>\\n\\n<template>\\n  <Rate disabled legend=\\"비활성\\" :value=\\"3\\" name=\\"rate-state-disabled\\" />\\n  <Rate class=\\"is-error\\" legend=\\"오류 — is-error\\" name=\\"rate-state-error\\" />\\n  <p class=\\"form_field-error\\">별점을 선택해 주세요.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Rate
    },
    template: \`<Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
      <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p class="form_field-error">별점을 선택해 주세요.</p>\`
  }))
}`,...(ie=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var pe,Ce,fe;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: "md",
    legend: "값",
    name: "search"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      FormLayout,
      Rate
    },
    template: \`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="rate-form-label">상품 만족도</span>
          <Rate name="rate-form" aria-labelledby="rate-form-label" />
          <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
        </div>
      </FormLayout>\`
  }))
}`,...(fe=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};const ca=["Playground","Type","Basic","Size","Color","Half","Clear","Readonly","State","Form"];export{b as Basic,R as Clear,B as Color,w as Form,_ as Half,g as Playground,D as Readonly,y as Size,h as State,v as Type,ca as __namedExportsOrder,ua as default};
