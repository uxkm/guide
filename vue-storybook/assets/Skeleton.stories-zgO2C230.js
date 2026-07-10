import{u as H,b as M,c as e,F as i,k as f,n as s,s as w,q as S,r as W,f as B,o as t,a as G}from"./vue.esm-bundler-BaZlnz8B.js";import{u as J,c as K}from"./useDemoCode-B9b0dRAo.js";import{_ as C}from"./Card-CnKjvY8r.js";import{_ as v}from"./CardBody-Qf4M-sZS.js";import"./useRipple-oORGvIsP.js";const Q=["aria-label"],U={key:0,class:"skeleton_row"},X={key:0,class:"skeleton_row-body"},r=Object.assign({inheritAttrs:!1},{__name:"Skeleton",props:{active:{type:Boolean,default:!0},avatar:Boolean,paragraph:{type:[Boolean,Number],default:!1},round:Boolean,ariaLabel:{type:String,default:"콘텐츠 로딩 중"}},setup(n){const o=n,I=H(),h=M(),_=G(null),R=K("Skeleton",{defaults:{active:!0},booleanProps:new Set(["active","avatar","round"]),selfClosing:!1});J(R,o,I,_,h);const j=B(()=>{const a=["skeleton_group"];return o.active||a.push("skeleton_static"),h.class&&a.push(h.class),a}),l=B(()=>{const a=["skeleton"];return o.active||a.push("skeleton_static"),a}),y=B(()=>o.paragraph===!0?3:typeof o.paragraph=="number"?o.paragraph:0),g=["","skeleton_w-md","skeleton_w-sm"];return(a,le)=>(t(),e("div",{ref_key:"rootRef",ref:_,class:s(j.value),role:"status","aria-live":"polite","aria-busy":"true","aria-label":n.ariaLabel},[n.avatar||n.round?(t(),e(i,{key:0},[n.avatar?(t(),e("div",U,[f("span",{class:s([...l.value,"skeleton_circle"]),"aria-hidden":"true"},null,2),y.value?(t(),e("div",X,[(t(!0),e(i,null,w(y.value,u=>(t(),e("span",{key:u,class:s([...l.value,"skeleton_text",g[u-1]||"skeleton_w-lg"]),"aria-hidden":"true"},null,2))),128))])):S("",!0)])):n.round?(t(),e("span",{key:1,class:s([...l.value,"skeleton_circle"]),"aria-hidden":"true"},null,2)):S("",!0)],64)):(t(),e(i,{key:1},[f("span",{class:s([...l.value,"skeleton_title"]),"aria-hidden":"true"},null,2),(t(!0),e(i,null,w(y.value||3,u=>(t(),e("span",{key:u,class:s([...l.value,"skeleton_text",g[u-1]||""]),"aria-hidden":"true"},null,2))),128))],64)),W(a.$slots,"default")],10,Q))}}),Y=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Z=[{name:"active",type:"boolean",default:"true",description:"쉬머 애니메이션. false면 skeleton_static"},{name:"avatar",type:"boolean",default:"false",description:"아바타 + 본문 행 레이아웃"},{name:"paragraph",type:"boolean | number",default:"false",description:"본문 줄 수. true면 3줄"},{name:"round",type:"boolean",default:"false",description:"원형만 표시"},{name:"aria-label",type:"string",default:"콘텐츠 로딩 중",description:"role=status 라벨"}],ee=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],te=[{name:"default",description:"커스텀 skeleton 막대 추가"}],ne=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ae=[{name:"skeleton · skeleton_text · skeleton_title · skeleton_circle",description:"막대·제목·원형"},{name:"skeleton_button · skeleton_image · skeleton_block",description:"버튼·이미지·블록 형태"},{name:"skeleton_w-sm · skeleton_w-md · skeleton_w-lg",description:"줄 너비"},{name:"skeleton_group · skeleton_row · skeleton_row-body",description:"레이아웃"},{name:"skeleton_static · skeleton_sm · skeleton_lg",description:"애니메이션·크기"}],oe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],se=[{name:"--skeleton-bg · --skeleton-shine",default:"—",description:"배경·쉬머"},{name:"--skeleton-text-height · --skeleton-title-height",default:"0.875rem · 1.125rem",description:"줄 높이"},{name:"--skeleton-avatar-size · --skeleton-gap · --skeleton-duration",default:"—",description:"아바타·간격·주기"}],re=[{title:"API · Props",tables:[{columns:Y,rows:Z,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ee,rows:te,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ne,rows:ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:oe,rows:se,codeColumn:"name"}]}],me={title:"Components/피드백/Skeleton",id:"components-skeleton",component:r,tags:["autodocs"],argTypes:{active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},avatar:{control:"boolean",type:{name:"boolean",summary:"boolean"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:re}},d={args:{active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},render:n=>({components:{Skeleton:r},setup(){return{args:n}},template:'<Skeleton v-bind="args" />'})},c={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>skeleton</code>에 <code class=&quot;typo_code&quot;>skeleton_text</code> · <code class=&quot;typo_code&quot;>skeleton_title</code> 형태 클래스를 조합합니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :paragraph="3" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Skeleton:r,Card:C,CardBody:v},template:`<div style="max-width: var(--input-max-width); width: 100%;">
      <Skeleton :paragraph="3" />
    </div>`})},p={name:"형태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <Skeleton avatar :paragraph="0" />
  <Skeleton round style="margin-top: var(--space-md);" />
</template>`,language:"vue"}}},render:()=>({components:{Skeleton:r,Card:C,CardBody:v},template:`<Skeleton avatar :paragraph="0" />
    <Skeleton round style="margin-top: var(--space-md);" />`})},m={name:"카드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <Card
  variant="shadow"
  style="max-width: 360px; width: 100%;"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="카드 콘텐츠 로딩 중"
  >
  <CardBody>
    <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
      <span class="skeleton skeleton_image" aria-hidden="true" />
      <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span class="skeleton skeleton_text" aria-hidden="true" />
      <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div class="skeleton_row" style="margin-top: var(--space-xs);">
        <span class="skeleton skeleton_button" aria-hidden="true" />
        <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
      </div>
    </Skeleton>
  </CardBody>
  </Card>
</template>`,language:"vue"}}},render:()=>({components:{Skeleton:r,Card:C,CardBody:v},template:`<Card
      variant="shadow"
      style="max-width: 360px; width: 100%;"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <CardBody>
        <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
          <span class="skeleton skeleton_image" aria-hidden="true" />
          <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span class="skeleton skeleton_text" aria-hidden="true" />
          <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div class="skeleton_row" style="margin-top: var(--space-xs);">
            <span class="skeleton skeleton_button" aria-hidden="true" />
            <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
          </div>
        </Skeleton>
      </CardBody>
    </Card>`})},k={name:"정적",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>skeleton_static</code>을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. <code class=&quot;typo_code&quot;>prefers-reduced-motion</code> 환경에서도 애니메이션이 비활성화됩니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :active="false" :paragraph="3" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Skeleton:r,Card:C,CardBody:v},template:`<div style="max-width: var(--input-max-width); width: 100%;">
      <Skeleton :active="false" :paragraph="3" />
    </div>`})};var b,x,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup() {
      return {
        args
      };
    },
    template: '<Skeleton v-bind="args" />'
  })
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var E,q,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>skeleton</code>에 <code class=&quot;typo_code&quot;>skeleton_text</code> · <code class=&quot;typo_code&quot;>skeleton_title</code> 형태 클래스를 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <Skeleton :paragraph=\\"3\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Skeleton,
      Card,
      CardBody
    },
    template: \`<div style="max-width: var(--input-max-width); width: 100%;">
      <Skeleton :paragraph="3" />
    </div>\`
  })
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var P,F,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "형태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <Skeleton avatar :paragraph=\\"0\\" />\\n  <Skeleton round style=\\"margin-top: var(--space-md);\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Skeleton,
      Card,
      CardBody
    },
    template: \`<Skeleton avatar :paragraph="0" />
    <Skeleton round style="margin-top: var(--space-md);" />\`
  })
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,T,N;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "카드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <Card\\n  variant=\\"shadow\\"\\n  style=\\"max-width: 360px; width: 100%;\\"\\n  role=\\"status\\"\\n  aria-live=\\"polite\\"\\n  aria-busy=\\"true\\"\\n  aria-label=\\"카드 콘텐츠 로딩 중\\"\\n  >\\n  <CardBody>\\n    <Skeleton :paragraph=\\"0\\" aria-label=\\"카드 콘텐츠 로딩 중\\">\\n      <span class=\\"skeleton skeleton_image\\" aria-hidden=\\"true\\" />\\n      <span class=\\"skeleton skeleton_title skeleton_w-md\\" aria-hidden=\\"true\\" />\\n      <span class=\\"skeleton skeleton_text\\" aria-hidden=\\"true\\" />\\n      <span class=\\"skeleton skeleton_text skeleton_w-lg\\" aria-hidden=\\"true\\" />\\n      <div class=\\"skeleton_row\\" style=\\"margin-top: var(--space-xs);\\">\\n        <span class=\\"skeleton skeleton_button\\" aria-hidden=\\"true\\" />\\n        <span class=\\"skeleton skeleton_button\\" aria-hidden=\\"true\\" style=\\"width: 4rem;\\" />\\n      </div>\\n    </Skeleton>\\n  </CardBody>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Skeleton,
      Card,
      CardBody
    },
    template: \`<Card
      variant="shadow"
      style="max-width: 360px; width: 100%;"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <CardBody>
        <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
          <span class="skeleton skeleton_image" aria-hidden="true" />
          <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span class="skeleton skeleton_text" aria-hidden="true" />
          <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div class="skeleton_row" style="margin-top: var(--space-xs);">
            <span class="skeleton skeleton_button" aria-hidden="true" />
            <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
          </div>
        </Skeleton>
      </CardBody>
    </Card>\`
  })
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var V,$,z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "정적",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>skeleton_static</code>을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. <code class=&quot;typo_code&quot;>prefers-reduced-motion</code> 환경에서도 애니메이션이 비활성화됩니다."
      },
      source: {
        code: "<script setup>\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <Skeleton :active=\\"false\\" :paragraph=\\"3\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Skeleton,
      Card,
      CardBody
    },
    template: \`<div style="max-width: var(--input-max-width); width: 100%;">
      <Skeleton :active="false" :paragraph="3" />
    </div>\`
  })
}`,...(z=($=k.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const ke=["Playground","Basic","Shape","CardDemo","Static"];export{c as Basic,m as CardDemo,d as Playground,p as Shape,k as Static,ke as __namedExportsOrder,me as default};
