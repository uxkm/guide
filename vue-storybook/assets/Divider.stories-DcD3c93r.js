import{_ as n,a as e}from"./Space-wMD1ZO64.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const _=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],E=[{name:"dashed",type:"boolean",default:"false",description:"점선 스타일 (divider_dashed)"},{name:"plain",type:"boolean",default:"false",description:"레이블 보조 톤 (divider_plain)"},{name:"vertical",type:"boolean",default:"false",description:"세로 구분선 (divider_vertical)"},{name:"orient",type:"'left' | 'right'",default:"—",description:"레이블 정렬. 생략 시 가운데"},{name:"label",type:"string",default:"—",description:"가운데 레이블 텍스트. default 슬롯으로 대체 가능"},{name:"tag",type:"'auto' | 'hr' | 'div' | 'span'",default:"auto",description:"루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택"}],P=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],w=[{name:"default",description:"레이블 텍스트 (label prop 대체)"}],F=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],T=[{name:"divider",description:"가로·세로 구분선 루트"},{name:"divider_dashed",description:"점선 스타일"},{name:"divider_plain",description:"보조 톤 레이블"},{name:"divider_vertical",description:"세로 구분선 (인라인·flex 행)"},{name:"divider_orient-left · divider_orient-right",description:"레이블 좌·우 정렬"}],O=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],V=[{name:"--divider-color",default:"var(--color-border-subtle)",description:"선 색상"},{name:"--divider-thickness",default:"1px",description:"선 두께"},{name:"--divider-margin-y",default:"var(--space-md)",description:"가로 구분선 상하 여백"},{name:"--divider-margin-x",default:"var(--space-sm)",description:"세로 구분선 좌우 여백"},{name:"--divider-text-gap",default:"var(--space-md)",description:"레이블·선 사이 간격"},{name:"--divider-orient-inset",default:"5%",description:"orient-left · orient-right 선 길이"}],I=[{title:"API · Props",tables:[{columns:_,rows:E,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:P,rows:w,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:F,rows:T,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:O,rows:V,codeColumn:"name"}]}],$={title:"Components/레이아웃/Divider",id:"components-divider",component:e,tags:["autodocs"],argTypes:{dashed:{control:"boolean",type:{name:"boolean",summary:"boolean"}},plain:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},orient:{control:"select",options:["left","right"],type:{name:"enum",summary:"'left' | 'right'"}},label:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["auto","hr","div","span"],type:{name:"enum",summary:"'auto' | 'hr' | 'div' | 'span'"}}},parameters:{layout:"padded",apiSections:I}},r={args:{dashed:!1,plain:!1,vertical:!1,orient:"left",label:"라벨",tag:"auto"},render:x=>({components:{Divider:e},setup(){return{args:x}},template:'<Divider v-bind="args" />'})},i={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider />
  <p>아래 콘텐츠</p>
</template>`,language:"vue"}}},render:()=>({components:{Divider:e,Space:n},template:`<p>위 콘텐츠</p>
    <Divider />
    <p>아래 콘텐츠</p>`})},a={name:"점선",parameters:{demoPreview:{stack:!0},docs:{description:{story:"divider_dashed로 점선 스타일을 적용합니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider dashed />
  <p>아래 콘텐츠</p>
</template>`,language:"vue"}}},render:()=>({components:{Divider:e,Space:n},template:`<p>위 콘텐츠</p>
    <Divider dashed />
    <p>아래 콘텐츠</p>`})},t={name:"텍스트 레이블",parameters:{demoPreview:{stack:!0},docs:{description:{story:"요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <Divider label="섹션 제목" />
  <Divider plain label="보조 설명" />
</template>`,language:"vue"}}},render:()=>({components:{Divider:e,Space:n},template:`<Divider label="섹션 제목" />
    <Divider plain label="보조 설명" />`})},u={name:"레이블 정렬",parameters:{demoPreview:{stack:!0},docs:{description:{story:"divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <Divider orient="left" label="왼쪽" />
  <Divider label="가운데" />
  <Divider orient="right" label="오른쪽" />
</template>`,language:"vue"}}},render:()=>({components:{Divider:e,Space:n},template:`<Divider orient="left" label="왼쪽" />
    <Divider label="가운데" />
    <Divider orient="right" label="오른쪽" />`})},s={name:"세로",parameters:{demoPreview:{stack:!1},docs:{description:{story:"divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space>
    <span>항목 A</span>
    <Divider vertical />
    <span>항목 B</span>
    <Divider vertical dashed />
    <span>항목 C</span>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Divider:e,Space:n},template:`<Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>`})};var o,d,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    dashed: false,
    plain: false,
    vertical: false,
    orient: "left",
    label: "라벨",
    tag: "auto"
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      return {
        args
      };
    },
    template: '<Divider v-bind="args" />'
  })
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <p>위 콘텐츠</p>\\n  <Divider />\\n  <p>아래 콘텐츠</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`<p>위 콘텐츠</p>
    <Divider />
    <p>아래 콘텐츠</p>\`
  })
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var v,C,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "점선",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "divider_dashed로 점선 스타일을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <p>위 콘텐츠</p>\\n  <Divider dashed />\\n  <p>아래 콘텐츠</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`<p>위 콘텐츠</p>
    <Divider dashed />
    <p>아래 콘텐츠</p>\`
  })
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,f,g;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "텍스트 레이블",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <Divider label=\\"섹션 제목\\" />\\n  <Divider plain label=\\"보조 설명\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`<Divider label="섹션 제목" />
    <Divider plain label="보조 설명" />\`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,A,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "레이블 정렬",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <Divider orient=\\"left\\" label=\\"왼쪽\\" />\\n  <Divider label=\\"가운데\\" />\\n  <Divider orient=\\"right\\" label=\\"오른쪽\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`<Divider orient="left" label="왼쪽" />
    <Divider label="가운데" />
    <Divider orient="right" label="오른쪽" />\`
  })
}`,...(y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var h,k,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "세로",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space>\\n    <span>항목 A</span>\\n    <Divider vertical />\\n    <span>항목 B</span>\\n    <Divider vertical dashed />\\n    <span>항목 C</span>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`<Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>\`
  })
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const j=["Playground","Basic","Dashed","Text","Orient","Vertical"];export{i as Basic,a as Dashed,u as Orient,r as Playground,t as Text,s as Vertical,j as __namedExportsOrder,$ as default};
