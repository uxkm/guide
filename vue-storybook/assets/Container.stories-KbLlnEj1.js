import{u as L,a as M,b as Y,o as v,c as k,r as q,n as J,h as U,i as K,j as b,m as Q,e as B,w as W,s as D,Y as X,g as Z,aG as nn,am as en,x as an,d as tn,t as on,aH as rn,aI as sn,F as ln}from"./iframe-_Cy3TTd_.js";import{s as un,w as z}from"./story-renders-BkwSCuFa.js";import"./preload-helper-PMqzWbAN.js";const a=Object.assign({inheritAttrs:!1},{__name:"Container",props:{fluid:Boolean,size:{type:String,default:"",validator:i=>["","sm","md","lg","xl"].includes(i)}},setup(i){const t=i,n=L(),o=M(),r=U(null),x=K("Container",{booleanProps:new Set(["fluid"])});Y(x,t,n,r,o);const d=b(()=>{const e=["container"];return t.fluid&&e.push("container_fluid"),t.size&&e.push(`container_${t.size}`),o.class&&e.push(o.class),e});return(e,s)=>(v(),k("div",{ref_key:"rootRef",ref:r,class:J(d.value)},[q(e.$slots,"default")],2))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"Container",description:"",tags:{},props:[{name:"fluid",type:{name:"boolean"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["sm","md","lg","xl"]}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Container.vue"]});const y=U(!1);let l=null;function dn(){y.value=!0,l&&clearTimeout(l),l=setTimeout(()=>{y.value=!1},5e3)}function cn(){y.value=!1,l&&clearTimeout(l),l=null}const mn={key:0,class:"sb-snackbar-hint",role:"status","aria-live":"polite"},g={__name:"FluidHintSnack",setup(i){return(t,n)=>(v(),Q(en,{to:"body"},[B(nn,{name:"sb-snackbar"},{default:W(()=>[D(y)?(v(),k("div",mn,[B(X,{color:"warning",title:"fluid는 size가 선택된 경우에만 적용됩니다",description:"sm · md · lg · xl 중 하나를 선택한 뒤 fluid를 활성화하세요.",closable:"",onClose:D(cn)},null,8,["onClose"])])):Z("",!0)]),_:1})]))}};g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"FluidHintSnack",description:"",tags:{},sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/storybook/FluidHintSnack.vue"]});const Cn={class:"container_demo-fill"},_={__name:"ContainerPlayground",props:{fluid:Boolean,size:{type:String,default:""},label:{type:String,default:"container"}},emits:["update:fluid"],setup(i,{emit:t}){const n=i,o=t,r=b(()=>!!n.size),x=b(()=>({fluid:r.value&&n.fluid,size:n.size||void 0}));function d(){dn(),n.fluid&&o("update:fluid",!1)}return an(()=>({fluid:n.fluid,size:n.size}),(e,s)=>{if(e.fluid&&!e.size){d();return}!e.size&&(s!=null&&s.size)&&s.fluid&&d()},{immediate:!0}),(e,s)=>(v(),k(ln,null,[B(g),B(a,rn(sn(x.value)),{default:W(()=>[tn("div",Cn,on(i.label),1)]),_:1},16)],64))}};_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"ContainerPlayground",description:"",tags:{},props:[{name:"fluid",type:{name:"boolean"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"update:fluid"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/storybook/ContainerPlayground.vue"]});function pn(i="container"){return(t,n)=>({components:{ContainerPlayground:_},setup(){return{args:un(n),label:i,onFluidUpdate(r){n.updateArgs({fluid:r})}}},template:`
      <ContainerPlayground
        v-bind="args"
        :label="label"
        @update:fluid="onFluidUpdate"
      />
    `})}const fn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],gn=[{name:"fluid",type:"boolean",default:"false",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid). size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다."},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"—",description:"고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)"}],_n=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],vn=[{name:"default",description:"컨테이너 내부 콘텐츠"}],Bn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],yn=[{name:"container",description:"중앙 정렬·기본 max-width·좌우 패딩"},{name:"container_fluid",description:"max-width 제한 해제"},{name:"container_sm · container_md · container_lg · container_xl",description:"고정 최대 너비 변형"}],zn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xn=[{name:"--container-max-width",default:"72rem",description:"기본 최대 너비"},{name:"--container-max-width-sm",default:"36rem",description:"container_sm"},{name:"--container-max-width-md",default:"48rem",description:"container_md"},{name:"--container-max-width-lg",default:"64rem",description:"container_lg"},{name:"--container-max-width-xl",default:"80rem",description:"container_xl"},{name:"--container-padding-x",default:"var(--space-xl)",description:"좌우 패딩"}],bn=[{title:"API · Props",tables:[{columns:fn,rows:gn,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:_n,rows:vn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Bn,rows:yn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:zn,rows:xn,codeColumn:"name"}]}],u={control:{type:"select"},options:["","sm","md","lg","xl"],labels:{"":"기본",sm:"sm",md:"md",lg:"lg",xl:"xl"},description:"고정 최대 너비 변형. 기본값은 container 기본 max-width(72rem)입니다.",type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},A={control:"boolean",if:{arg:"size",truthy:!0},description:"선택한 size의 max-width 제한을 해제합니다. size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다.",type:{name:"boolean",summary:"boolean"}},G={control:"boolean",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid)",type:{name:"boolean",summary:"boolean"}},hn={title:"Components/레이아웃/Container",id:"components-container",component:a,tags:["autodocs"],argTypes:{fluid:A,size:u},parameters:{controls:{disable:!1},layout:"padded",apiSections:bn}},c={parameters:{controls:{disable:!1}},args:{fluid:!1,size:"lg"},render:pn("container")},m={name:"기본",args:{fluid:!1,size:""},argTypes:{fluid:A,size:u},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container>
    <div class="container_demo-fill">container — 기본 최대 너비</div>
  </Container>
</template>`,language:"vue"}}},render:z(()=>({components:{Container:a},template:`<Container>
        <div class="container_demo-fill">container — 기본 최대 너비</div>
      </Container>`}))},C={name:"Fluid",args:{fluid:!0,size:""},argTypes:{fluid:G,size:{...u,description:"fluid와 함께 size를 지정하면 fluid가 size max-width를 해제합니다."}},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill">container container_fluid — 전체 너비</div>
  </Container>
</template>`,language:"vue"}}},render:z(()=>({components:{Container:a},template:`<Container fluid>
        <div class="container_demo-fill">container container_fluid — 전체 너비</div>
      </Container>`}))},p={name:"크기",args:{fluid:!1,size:"lg"},argTypes:{fluid:A,size:u},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:z(()=>({components:{Container:a},template:`<Container size="sm">
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
      </Container>`}))},f={name:"중첩 사용",args:{fluid:!0,size:"md"},argTypes:{fluid:{...G,description:"바깥 container에 container_fluid를 적용합니다."},size:{...u,description:"안쪽 container의 size(sm · md · lg · xl)입니다."}},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
    <Container size="md">
      <div class="container_demo-fill">안쪽 — md</div>
    </Container>
  </Container>
</template>`,language:"vue"}}},render:z(()=>({components:{Container:a},template:`<Container fluid>
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
        <Container size="md">
          <div class="container_demo-fill">안쪽 — md</div>
        </Container>
      </Container>`}))};var h,w,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,P,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(P=m.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var F,N,H;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(N=C.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var R,O,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var I,$,j;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=($=f.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const wn=["Playground","Basic","Fluid","Size","Nested"];export{m as Basic,C as Fluid,f as Nested,c as Playground,p as Size,wn as __namedExportsOrder,hn as default};
