import{u as P,b as S,c as h,r as F,n as O,f as T,o as I,a as N}from"./vue.esm-bundler-BaZlnz8B.js";import{u as R,c as $}from"./useDemoCode-B9b0dRAo.js";const e=Object.assign({inheritAttrs:!1},{__name:"Container",props:{fluid:Boolean,size:{type:String,default:"",validator:t=>["","sm","md","lg","xl"].includes(t)}},setup(t){const o=t,D=P(),u=S(),l=N(null),E=$("Container",{booleanProps:new Set(["fluid"])});R(E,o,D,l,u);const w=T(()=>{const n=["container"];return o.fluid&&n.push("container_fluid"),o.size&&n.push(`container_${o.size}`),u.class&&n.push(u.class),n});return(n,Q)=>(I(),h("div",{ref_key:"rootRef",ref:l,class:O(w.value)},[F(n.$slots,"default")],2))}}),j=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],H=[{name:"fluid",type:"boolean",default:"false",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid)"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"—",description:"고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)"}],L=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],M=[{name:"default",description:"컨테이너 내부 콘텐츠"}],V=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],q=[{name:"container",description:"중앙 정렬·기본 max-width·좌우 패딩"},{name:"container_fluid",description:"max-width 제한 해제"},{name:"container_sm · container_md · container_lg · container_xl",description:"고정 최대 너비 변형"}],G=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],J=[{name:"--container-max-width",default:"72rem",description:"기본 최대 너비"},{name:"--container-max-width-sm",default:"36rem",description:"container_sm"},{name:"--container-max-width-md",default:"48rem",description:"container_md"},{name:"--container-max-width-lg",default:"64rem",description:"container_lg"},{name:"--container-max-width-xl",default:"80rem",description:"container_xl"},{name:"--container-padding-x",default:"var(--space-xl)",description:"좌우 패딩"}],K=[{title:"API · Props",tables:[{columns:j,rows:H,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:L,rows:M,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:V,rows:q,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:G,rows:J,codeColumn:"name"}]}],X={title:"Components/레이아웃/Container",id:"components-container",component:e,tags:["autodocs"],argTypes:{fluid:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}}},parameters:{layout:"padded",apiSections:K}},i={args:{fluid:!1,size:"md"},render:t=>({components:{Container:e},setup(){return{args:t}},template:'<Container v-bind="args"><div class="container_demo-fill">container</div></Container>'})},a={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container>
    <div class="container_demo-fill">container — 기본 최대 너비</div>
  </Container>
</template>`,language:"vue"}}},render:()=>({components:{Container:e},template:`<Container>
      <div class="container_demo-fill">container — 기본 최대 너비</div>
    </Container>`})},r={name:"Fluid",parameters:{demoPreview:{stack:!0},docs:{description:{story:"container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill">container container_fluid — 전체 너비</div>
  </Container>
</template>`,language:"vue"}}},render:()=>({components:{Container:e},template:`<Container fluid>
      <div class="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>`})},s={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Container:e},template:`<Container size="sm">
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
    </Container>`})},c={name:"중첩 사용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."},source:{code:`<script setup>
import Container from '@uxkm/ui/components/Container.vue';
<\/script>

<template>
  <Container fluid>
    <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
    <Container size="md">
      <div class="container_demo-fill">안쪽 — md</div>
    </Container>
  </Container>
</template>`,language:"vue"}}},render:()=>({components:{Container:e},template:`<Container fluid>
      <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
      <Container size="md">
        <div class="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>`})};var m,d,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fluid: false,
    size: "md"
  },
  render: args => ({
    components: {
      Container
    },
    setup() {
      return {
        args
      };
    },
    template: '<Container v-bind="args"><div class="container_demo-fill">container</div></Container>'
  })
}`,...(C=(d=i.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var p,v,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Container
    },
    template: \`<Container>
      <div class="container_demo-fill">container — 기본 최대 너비</div>
    </Container>\`
  })
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,B,g;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Fluid",
  parameters: {
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
  render: () => ({
    components: {
      Container
    },
    template: \`<Container fluid>
      <div class="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>\`
  })
}`,...(g=(B=r.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var x,y,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
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
  render: () => ({
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
  })
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var z,b,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "중첩 사용",
  parameters: {
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
  render: () => ({
    components: {
      Container
    },
    template: \`<Container fluid>
      <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
      <Container size="md">
        <div class="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>\`
  })
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const Y=["Playground","Basic","Fluid","Size","Nested"];export{a as Basic,r as Fluid,c as Nested,i as Playground,s as Size,Y as __namedExportsOrder,X as default};
