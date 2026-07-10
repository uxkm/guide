import{_ as r}from"./StepsItem-B0uzHP5o.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./Icon-D97OEunV.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const p={title:"Components/네비게이션/StepsItem",id:"components-steps-item",component:r,tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},status:{control:"select",options:["finished","active","wait","error"],type:{name:"enum",summary:"'finished' | 'active' | 'wait' | 'error'"}},index:{control:"number",type:{name:"number",summary:"number"}}}},t={parameters:{docs:{source:{code:`<script setup>
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <StepsItem title="제목" description="설명 텍스트입니다." status="wait" :index="1" />
</template>`,language:"vue"}}},args:{title:"제목",description:"설명 텍스트입니다.",status:"wait",index:1}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <StepsItem title=\\"제목\\" description=\\"설명 텍스트입니다.\\" status=\\"wait\\" :index=\\"1\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    title: "제목",
    description: "설명 텍스트입니다.",
    status: "wait",
    index: 1
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,p as default};
