import{_ as e,a as E}from"./Space-BcoWVJS9.js";import{w as n,s as w}from"./story-renders-DjeoaiCa.js";import"./iframe-CAswI7Qe.js";import"./preload-helper-PMqzWbAN.js";const P=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],F=[{name:"dashed",type:"boolean",default:"false",description:"점선 스타일 (divider_dashed)"},{name:"plain",type:"boolean",default:"false",description:"레이블 보조 톤 (divider_plain)"},{name:"vertical",type:"boolean",default:"false",description:"세로 구분선 (divider_vertical)"},{name:"orient",type:"'left' | 'right'",default:"—",description:"레이블 정렬. 생략 시 가운데"},{name:"label",type:"string",default:"—",description:"가운데 레이블 텍스트. default 슬롯으로 대체 가능"},{name:"tag",type:"'auto' | 'hr' | 'div' | 'span'",default:"auto",description:"루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택"}],R=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],T=[{name:"default",description:"레이블 텍스트 (label prop 대체)"}],O=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],V=[{name:"divider",description:"가로·세로 구분선 루트"},{name:"divider_dashed",description:"점선 스타일"},{name:"divider_plain",description:"보조 톤 레이블"},{name:"divider_vertical",description:"세로 구분선 (인라인·flex 행)"},{name:"divider_orient-left · divider_orient-right",description:"레이블 좌·우 정렬"}],I=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],H=[{name:"--divider-color",default:"var(--color-border-subtle)",description:"선 색상"},{name:"--divider-thickness",default:"1px",description:"선 두께"},{name:"--divider-margin-y",default:"var(--space-md)",description:"가로 구분선 상하 여백"},{name:"--divider-margin-x",default:"var(--space-sm)",description:"세로 구분선 좌우 여백"},{name:"--divider-text-gap",default:"var(--space-md)",description:"레이블·선 사이 간격"},{name:"--divider-orient-inset",default:"5%",description:"orient-left · orient-right 선 길이"}],L=[{title:"API · Props",tables:[{columns:P,rows:F,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:R,rows:T,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:O,rows:V,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:I,rows:H,codeColumn:"name"}]}],G={title:"Components/레이아웃/Divider",id:"components-divider",component:e,tags:["autodocs"],argTypes:{dashed:{control:"boolean",type:{name:"boolean",summary:"boolean"}},plain:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},orient:{control:"select",options:["","left","right"],labels:{"":"가운데",left:"left",right:"right"},description:"레이블 정렬. 가운데는 orient를 생략한 기본값입니다.",type:{name:"enum",summary:"'left' | 'right' (기본: 가운데)"}},label:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["auto","hr","div","span"],type:{name:"enum",summary:"'auto' | 'hr' | 'div' | 'span'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:L}},r={dashed:!1,plain:!1,vertical:!1,orient:"",label:"",tag:"auto"},a={parameters:{controls:{disable:!1}},args:{dashed:!1,plain:!1,vertical:!1,orient:"",label:"라벨",tag:"auto"},render:(M,_)=>({components:{Divider:e},setup(){return{args:w(_)}},template:'<Divider v-bind="args" />'})},i={name:"기본",args:{...r},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider />
  <p>아래 콘텐츠</p>
</template>`,language:"vue"}}},render:n(()=>({components:{Divider:e},template:`<p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>`}))},t={name:"점선",args:{...r,dashed:!0},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_dashed로 점선 스타일을 적용합니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider dashed />
  <p>아래 콘텐츠</p>
</template>`,language:"vue"}}},render:n(()=>({components:{Divider:e},template:`<p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>`}))},s={name:"텍스트 레이블",args:{...r,label:"섹션 제목"},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <Divider label="섹션 제목" />
  <Divider plain label="보조 설명" />
</template>`,language:"vue"}}},render:n(()=>({components:{Divider:e},template:`<Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />`}))},o={name:"레이블 정렬",args:{...r,orient:"",label:"가운데"},parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."},source:{code:`<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
<\/script>

<template>
  <Divider orient="left" label="왼쪽" />
  <Divider label="가운데" />
  <Divider orient="right" label="오른쪽" />
</template>`,language:"vue"}}},render:n(()=>({components:{Divider:e},template:`<Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />`}))},u={name:"세로",args:{...r,vertical:!0},parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:n(()=>({components:{Divider:e,Space:E},template:`<Space>
        <span>항목 A</span>
        <Divider vertical />
        <span>항목 B</span>
        <Divider vertical dashed />
        <span>항목 C</span>
      </Space>`}))};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    dashed: false,
    plain: false,
    vertical: false,
    orient: '',
    label: "라벨",
    tag: "auto"
  },
  render: (_args, context) => ({
    components: {
      Divider
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Divider v-bind="args" />'
  })
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,v;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "기본",
  args: {
    ...defaultArgs
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
        story: "divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <p>위 콘텐츠</p>\\n  <Divider />\\n  <p>아래 콘텐츠</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Divider
    },
    template: \`<p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>\`
  }))
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var C,D,B;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "점선",
  args: {
    ...defaultArgs,
    dashed: true
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
        story: "divider_dashed로 점선 스타일을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <p>위 콘텐츠</p>\\n  <Divider dashed />\\n  <p>아래 콘텐츠</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Divider
    },
    template: \`<p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>\`
  }))
}`,...(B=(D=t.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "텍스트 레이블",
  args: {
    ...defaultArgs,
    label: '섹션 제목'
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
        story: "요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <Divider label=\\"섹션 제목\\" />\\n  <Divider plain label=\\"보조 설명\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Divider
    },
    template: \`<Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />\`
  }))
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var A,h,y;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "레이블 정렬",
  args: {
    ...defaultArgs,
    orient: '',
    label: '가운데'
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
        story: "divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."
      },
      source: {
        code: "<script setup>\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\n<\/script>\\n\\n<template>\\n  <Divider orient=\\"left\\" label=\\"왼쪽\\" />\\n  <Divider label=\\"가운데\\" />\\n  <Divider orient=\\"right\\" label=\\"오른쪽\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Divider
    },
    template: \`<Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />\`
  }))
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,x,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "세로",
  args: {
    ...defaultArgs,
    vertical: true
  },
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const J=["Playground","Basic","Dashed","Text","Orient","Vertical"];export{i as Basic,t as Dashed,o as Orient,a as Playground,s as Text,u as Vertical,J as __namedExportsOrder,G as default};
