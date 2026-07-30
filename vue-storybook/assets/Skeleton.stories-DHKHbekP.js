import{u as H,a as M,b as U,o as e,c as a,F as i,d as B,n as r,a6 as b,g as _,r as W,h as q,i as G,j as f}from"./iframe-3tmFy2e1.js";import{w as C,s as J}from"./story-renders-ww3py-Dw.js";import{_ as K}from"./Card-CbFVSLmz.js";import{_ as Q}from"./CardBody-DvdC0I2c.js";import"./preload-helper-PMqzWbAN.js";const X=["aria-label"],Y={key:0,class:"skeleton_row"},Z={key:0,class:"skeleton_row-body"},n=Object.assign({inheritAttrs:!1},{__name:"Skeleton",props:{active:{type:Boolean,default:!0},avatar:Boolean,paragraph:{type:[Boolean,Number],default:!1},round:Boolean,ariaLabel:{type:String,default:"콘텐츠 로딩 중"}},setup(o){const t=o,I=H(),v=M(),g=q(null),$=G("Skeleton",{defaults:{active:!0},booleanProps:new Set(["active","avatar","round"]),selfClosing:!1});U($,t,I,g,v);const z=f(()=>{const s=["skeleton_group"];return t.active||s.push("skeleton_static"),v.class&&s.push(v.class),s}),l=f(()=>{const s=["skeleton"];return t.active||s.push("skeleton_static"),s}),h=f(()=>t.paragraph===!0?3:typeof t.paragraph=="number"?t.paragraph:0),y=["","skeleton_w-md","skeleton_w-sm"];return(s,ie)=>(e(),a("div",{ref_key:"rootRef",ref:g,class:r(z.value),role:"status","aria-live":"polite","aria-busy":"true","aria-label":o.ariaLabel},[o.avatar||o.round?(e(),a(i,{key:0},[o.avatar?(e(),a("div",Y,[B("span",{class:r([...l.value,"skeleton_circle"]),"aria-hidden":"true"},null,2),h.value?(e(),a("div",Z,[(e(!0),a(i,null,b(h.value,u=>(e(),a("span",{key:u,class:r([...l.value,"skeleton_text",y[u-1]||"skeleton_w-lg"]),"aria-hidden":"true"},null,2))),128))])):_("",!0)])):o.round?(e(),a("span",{key:1,class:r([...l.value,"skeleton_circle"]),"aria-hidden":"true"},null,2)):_("",!0)],64)):(e(),a(i,{key:1},[B("span",{class:r([...l.value,"skeleton_title"]),"aria-hidden":"true"},null,2),(e(!0),a(i,null,b(h.value||3,u=>(e(),a("span",{key:u,class:r([...l.value,"skeleton_text",y[u-1]||""]),"aria-hidden":"true"},null,2))),128))],64)),W(s.$slots,"default")],10,X))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatar",type:{name:"boolean"}},{name:"paragraph",type:{name:"boolean|number"},defaultValue:{func:!1,value:"false"}},{name:"round",type:{name:"boolean"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'콘텐츠 로딩 중'"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Skeleton.vue"]});const ee=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ae=[{name:"active",type:"boolean",default:"true",description:"쉬머 애니메이션. false면 skeleton_static"},{name:"avatar",type:"boolean",default:"false",description:"아바타 + 본문 행 레이아웃"},{name:"paragraph",type:"boolean | number",default:"false",description:"본문 줄 수. true면 3줄"},{name:"round",type:"boolean",default:"false",description:"원형만 표시"},{name:"aria-label",type:"string",default:"콘텐츠 로딩 중",description:"role=status 라벨"}],ne=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],te=[{name:"default",description:"커스텀 skeleton 막대 추가"}],se=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],oe=[{name:"skeleton · skeleton_text · skeleton_title · skeleton_circle",description:"막대·제목·원형"},{name:"skeleton_button · skeleton_image · skeleton_block",description:"버튼·이미지·블록 형태"},{name:"skeleton_w-sm · skeleton_w-md · skeleton_w-lg",description:"줄 너비"},{name:"skeleton_group · skeleton_row · skeleton_row-body",description:"레이아웃"},{name:"skeleton_static · skeleton_sm · skeleton_lg",description:"애니메이션·크기"}],re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],le=[{name:"--skeleton-bg · --skeleton-shine",default:"—",description:"배경·쉬머"},{name:"--skeleton-text-height · --skeleton-title-height",default:"0.875rem · 1.125rem",description:"줄 높이"},{name:"--skeleton-avatar-size · --skeleton-gap · --skeleton-duration",default:"—",description:"아바타·간격·주기"}],ue=[{title:"API · Props",tables:[{columns:ee,rows:ae,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ne,rows:te,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:se,rows:oe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:re,rows:le,codeColumn:"name"}]}],Ce={title:"Components/피드백/Skeleton",id:"components-skeleton",component:n,tags:["autodocs"],argTypes:{active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},avatar:{control:"boolean",type:{name:"boolean",summary:"boolean"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ue}},d={parameters:{controls:{disable:!1}},args:{active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},render:(o,t)=>({components:{Skeleton:n},setup(){return{args:J(t)}},template:'<Skeleton v-bind="args" />'})},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`skeleton`에 `skeleton_text` · `skeleton_title` 형태 클래스를 조합합니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :paragraph="3" />
  </div>
</template>`,language:"vue"}}},args:{ariaLabel:"콘텐츠 로딩 중"},render:C(()=>({components:{Skeleton:n},template:`<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :paragraph="3" />
      </div>`}))},c={name:"형태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <Skeleton avatar :paragraph="0" />
  <Skeleton round style="margin-top: var(--space-md);" />
</template>`,language:"vue"}}},args:{active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},render:C(()=>({components:{Skeleton:n},template:`<Skeleton avatar :paragraph="0" />
      <Skeleton round style="margin-top: var(--space-md);" />`}))},m={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},render:C(()=>({components:{Card:K,CardBody:Q,Skeleton:n},template:`<Card
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
      </Card>`}))},k={name:"정적",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`skeleton_static`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. `prefers-reduced-motion` 환경에서도 애니메이션이 비활성화됩니다."},source:{code:`<script setup>
import Skeleton from '@uxkm/ui/components/Skeleton.vue';
<\/script>

<template>
  <div style="max-width: var(--input-max-width); width: 100%;">
    <Skeleton :active="false" :paragraph="3" />
  </div>
</template>`,language:"vue"}}},args:{active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},render:C(()=>({components:{Skeleton:n},template:`<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :active="false" :paragraph="3" />
      </div>`}))};var w,S,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: (_args, context) => ({
    components: {
      Skeleton
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Skeleton v-bind="args" />'
  })
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var D,E,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        story: "\`skeleton\`에 \`skeleton_text\` · \`skeleton_title\` 형태 클래스를 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <Skeleton :paragraph=\\"3\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Skeleton
    },
    template: \`<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :paragraph="3" />
      </div>\`
  }))
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,P,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "형태",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Skeleton
    },
    template: \`<Skeleton avatar :paragraph="0" />
      <Skeleton round style="margin-top: var(--space-md);" />\`
  }))
}`,...(L=(P=c.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,N,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "카드",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Card,
      CardBody,
      Skeleton
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
  }))
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var O,T,j;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "정적",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`skeleton_static\`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. \`prefers-reduced-motion\` 환경에서도 애니메이션이 비활성화됩니다."
      },
      source: {
        code: "<script setup>\\nimport Skeleton from '@uxkm/ui/components/Skeleton.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <Skeleton :active=\\"false\\" :paragraph=\\"3\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    active: true,
    avatar: false,
    paragraph: false,
    round: false,
    ariaLabel: "콘텐츠 로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Skeleton
    },
    template: \`<div style="max-width: var(--input-max-width); width: 100%;">
        <Skeleton :active="false" :paragraph="3" />
      </div>\`
  }))
}`,...(j=(T=k.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const ve=["Playground","Basic","Shape","CardDemo","Static"];export{p as Basic,m as CardDemo,d as Playground,c as Shape,k as Static,ve as __namedExportsOrder,Ce as default};
