import{_ as o}from"./TimelineItem-BCA8suRK.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const l={title:"Components/데이터 표시/TimelineItem",id:"components-timeline-item",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},time:{control:"text",type:{name:"string",summary:"string"}},datetime:{control:"text",type:{name:"string",summary:"string"}},label:{control:"text",type:{name:"string",summary:"string"}},labelDatetime:{control:"text",type:{name:"string",summary:"string"}},active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},pending:{control:"boolean",type:{name:"boolean",summary:"boolean"}},outline:{control:"boolean",type:{name:"boolean",summary:"boolean"}}}},e={parameters:{docs:{source:{code:`<script setup>
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <TimelineItem color="primary" title="제목" description="설명 텍스트입니다." time="값" datetime="값" label="라벨" label-datetime="값" />
</template>`,language:"vue"}}},args:{color:"primary",title:"제목",description:"설명 텍스트입니다.",time:"값",datetime:"값",label:"라벨",labelDatetime:"값",active:!1,pending:!1,outline:!1}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <TimelineItem color=\\"primary\\" title=\\"제목\\" description=\\"설명 텍스트입니다.\\" time=\\"값\\" datetime=\\"값\\" label=\\"라벨\\" label-datetime=\\"값\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    title: "제목",
    description: "설명 텍스트입니다.",
    time: "값",
    datetime: "값",
    label: "라벨",
    labelDatetime: "값",
    active: false,
    pending: false,
    outline: false
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,l as default};
