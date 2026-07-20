import{u as U,a as G,b as L,c as x,r as M,n as Y,g as y,o as _,i as W,j as q,m as J,h as g,w as I,s as A,Y as K,f as Q,aG as X,an as Z,x as nn,d as en,t as an,aH as tn,aI as on,F as rn}from"./iframe-CAswI7Qe.js";import{s as sn,w as B}from"./story-renders-DjeoaiCa.js";import"./preload-helper-PMqzWbAN.js";const l=Object.assign({inheritAttrs:!1},{__name:"Container",props:{fluid:Boolean,size:{type:String,default:"",validator:i=>["","sm","md","lg","xl"].includes(i)}},setup(i){const a=i,n=U(),t=G(),o=W(null),z=q("Container",{booleanProps:new Set(["fluid"])});L(z,a,n,o,t);const c=y(()=>{const e=["container"];return a.fluid&&e.push("container_fluid"),a.size&&e.push(`container_${a.size}`),t.class&&e.push(t.class),e});return(e,r)=>(_(),x("div",{ref_key:"rootRef",ref:o,class:Y(c.value)},[M(e.$slots,"default")],2))}}),v=W(!1);let s=null;function ln(){v.value=!0,s&&clearTimeout(s),s=setTimeout(()=>{v.value=!1},5e3)}function un(){v.value=!1,s&&clearTimeout(s),s=null}const cn={key:0,class:"sb-snackbar-hint",role:"status","aria-live":"polite"},dn={__name:"FluidHintSnack",setup(i){return(a,n)=>(_(),J(Z,{to:"body"},[g(X,{name:"sb-snackbar"},{default:I(()=>[A(v)?(_(),x("div",cn,[g(K,{color:"warning",title:"fluid는 size가 선택된 경우에만 적용됩니다",description:"sm · md · lg · xl 중 하나를 선택한 뒤 fluid를 활성화하세요.",closable:"",onClose:A(un)},null,8,["onClose"])])):Q("",!0)]),_:1})]))}},mn={class:"container_demo-fill"},Cn={__name:"ContainerPlayground",props:{fluid:Boolean,size:{type:String,default:""},label:{type:String,default:"container"}},emits:["update:fluid"],setup(i,{emit:a}){const n=i,t=a,o=y(()=>!!n.size),z=y(()=>({fluid:o.value&&n.fluid,size:n.size||void 0}));function c(){ln(),n.fluid&&t("update:fluid",!1)}return nn(()=>({fluid:n.fluid,size:n.size}),(e,r)=>{if(e.fluid&&!e.size){c();return}!e.size&&(r!=null&&r.size)&&r.fluid&&c()},{immediate:!0}),(e,r)=>(_(),x(rn,null,[g(dn),g(l,tn(on(z.value)),{default:I(()=>[en("div",mn,an(i.label),1)]),_:1},16)],64))}};function pn(i="container"){return(a,n)=>({components:{ContainerPlayground:Cn},setup(){return{args:sn(n),label:i,onFluidUpdate(o){n.updateArgs({fluid:o})}}},template:`
      <ContainerPlayground
        v-bind="args"
        :label="label"
        @update:fluid="onFluidUpdate"
      />
    `})}const fn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_n=[{name:"fluid",type:"boolean",default:"false",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid). size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다."},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"—",description:"고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)"}],gn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],vn=[{name:"default",description:"컨테이너 내부 콘텐츠"}],Bn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],zn=[{name:"container",description:"중앙 정렬·기본 max-width·좌우 패딩"},{name:"container_fluid",description:"max-width 제한 해제"},{name:"container_sm · container_md · container_lg · container_xl",description:"고정 최대 너비 변형"}],yn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xn=[{name:"--container-max-width",default:"72rem",description:"기본 최대 너비"},{name:"--container-max-width-sm",default:"36rem",description:"container_sm"},{name:"--container-max-width-md",default:"48rem",description:"container_md"},{name:"--container-max-width-lg",default:"64rem",description:"container_lg"},{name:"--container-max-width-xl",default:"80rem",description:"container_xl"},{name:"--container-padding-x",default:"var(--space-xl)",description:"좌우 패딩"}],bn=[{title:"API · Props",tables:[{columns:fn,rows:_n,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:gn,rows:vn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Bn,rows:zn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:yn,rows:xn,codeColumn:"name"}]}],u={control:{type:"select"},options:["","sm","md","lg","xl"],labels:{"":"기본",sm:"sm",md:"md",lg:"lg",xl:"xl"},description:"고정 최대 너비 변형. 기본값은 container 기본 max-width(72rem)입니다.",type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},b={control:"boolean",if:{arg:"size",truthy:!0},description:"선택한 size의 max-width 제한을 해제합니다. size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다.",type:{name:"boolean",summary:"boolean"}},j={control:"boolean",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid)",type:{name:"boolean",summary:"boolean"}},kn={title:"Components/레이아웃/Container",id:"components-container",component:l,tags:["autodocs"],argTypes:{fluid:b,size:u},parameters:{controls:{disable:!1},layout:"padded",apiSections:bn}},d={parameters:{controls:{disable:!1}},args:{fluid:!1,size:"lg"},render:pn("container")},m={name:"기본",args:{fluid:!1,size:""},argTypes:{fluid:b,size:u},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container>
    <div class="container_demo-fill">container — 기본 최대 너비</div>
  </Container>
</template>`,language:"vue"}}},render:B(()=>({components:{Container:l},template:`<Container>
        <div class="container_demo-fill">container — 기본 최대 너비</div>
      </Container>`}))},C={name:"Fluid",args:{fluid:!0,size:""},argTypes:{fluid:j,size:{...u,description:"fluid와 함께 size를 지정하면 fluid가 size max-width를 해제합니다."}},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill">container container_fluid — 전체 너비</div>
  </Container>
</template>`,language:"vue"}}},render:B(()=>({components:{Container:l},template:`<Container fluid>
        <div class="container_demo-fill">container container_fluid — 전체 너비</div>
      </Container>`}))},p={name:"크기",args:{fluid:!1,size:"lg"},argTypes:{fluid:b,size:u},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container size="sm">
    <div class="container_demo-fill">container_sm (36rem)</div>
  </Container>
  <Container size="md">
    <div class="container_demo-fill">container_md (48rem)</div>
  </Container>
  <Container size="lg">
    <div class="container_demo-fill">container_lg (64rem)</div>
  </Container>
  <Container size="xl">
    <div class="container_demo-fill">container_xl (80rem)</div>
  </Container>
</template>`,language:"vue"}}},render:B(()=>({components:{Container:l},template:`<Container size="sm">
        <div class="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div class="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div class="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div class="container_demo-fill">container_xl (80rem)</div>
      </Container>`}))},f={name:"중첩 사용",args:{fluid:!0,size:"md"},argTypes:{fluid:{...j,description:"바깥 container에 container_fluid를 적용합니다."},size:{...u,description:"안쪽 container의 size(sm · md · lg · xl)입니다."}},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
    <Container size="md">
      <div class="container_demo-fill">안쪽 — md</div>
    </Container>
  </Container>
</template>`,language:"vue"}}},render:B(()=>({components:{Container:l},template:`<Container fluid>
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
        <Container size="md">
          <div class="container_demo-fill">안쪽 — md</div>
        </Container>
      </Container>`}))};var D,h,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    fluid: false,
    size: 'lg'
  },
  render: renderContainerPlayground('container')
}`,...(k=(h=d.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,E,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "기본",
  args: {
    fluid: false,
    size: ''
  },
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType
  },
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."
      },
      source: {
        code: "<script setup>\\nimport Container from '@uxkm/ui/components/Container.vue';\\n<\/script>\\n\\n<template>\\n  <Container>\\n    <div class=\\"container_demo-fill\\">container — 기본 최대 너비</div>\\n  </Container>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Container
    },
    template: \`<Container>
        <div class="container_demo-fill">container — 기본 최대 너비</div>
      </Container>\`
  }))
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var P,S,F;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Fluid",
  args: {
    fluid: true,
    size: ''
  },
  argTypes: {
    fluid: fluidArgType,
    size: {
      ...sizeArgType,
      description: 'fluid와 함께 size를 지정하면 fluid가 size max-width를 해제합니다.'
    }
  },
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."
      },
      source: {
        code: "<script setup>\\nimport Container from '@uxkm/ui/components/Container.vue';\\n<\/script>\\n\\n<template>\\n  <Container fluid>\\n    <div class=\\"container_demo-fill\\">container container_fluid — 전체 너비</div>\\n  </Container>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Container
    },
    template: \`<Container fluid>
        <div class="container_demo-fill">container container_fluid — 전체 너비</div>
      </Container>\`
  }))
}`,...(F=(S=C.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var R,H,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "크기",
  args: {
    fluid: false,
    size: 'lg'
  },
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType
  },
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Container from '@uxkm/ui/components/Container.vue';\\n<\/script>\\n\\n<template>\\n  <Container size=\\"sm\\">\\n    <div class=\\"container_demo-fill\\">container_sm (36rem)</div>\\n  </Container>\\n  <Container size=\\"md\\">\\n    <div class=\\"container_demo-fill\\">container_md (48rem)</div>\\n  </Container>\\n  <Container size=\\"lg\\">\\n    <div class=\\"container_demo-fill\\">container_lg (64rem)</div>\\n  </Container>\\n  <Container size=\\"xl\\">\\n    <div class=\\"container_demo-fill\\">container_xl (80rem)</div>\\n  </Container>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Container
    },
    template: \`<Container size="sm">
        <div class="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div class="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div class="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div class="container_demo-fill">container_xl (80rem)</div>
      </Container>\`
  }))
}`,...($=(H=p.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var N,O,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "중첩 사용",
  args: {
    fluid: true,
    size: 'md'
  },
  argTypes: {
    fluid: {
      ...fluidArgType,
      description: '바깥 container에 container_fluid를 적용합니다.'
    },
    size: {
      ...sizeArgType,
      description: '안쪽 container의 size(sm · md · lg · xl)입니다.'
    }
  },
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Container from '@uxkm/ui/components/Container.vue';\\n<\/script>\\n\\n<template>\\n  <Container fluid>\\n    <div class=\\"container_demo-fill\\" style=\\"margin-bottom: var(--space-md);\\">바깥 — fluid</div>\\n    <Container size=\\"md\\">\\n      <div class=\\"container_demo-fill\\">안쪽 — md</div>\\n    </Container>\\n  </Container>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Container
    },
    template: \`<Container fluid>
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
        <Container size="md">
          <div class="container_demo-fill">안쪽 — md</div>
        </Container>
      </Container>\`
  }))
}`,...(V=(O=f.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const wn=["Playground","Basic","Fluid","Size","Nested"];export{m as Basic,C as Fluid,f as Nested,d as Playground,p as Size,wn as __namedExportsOrder,kn as default};
