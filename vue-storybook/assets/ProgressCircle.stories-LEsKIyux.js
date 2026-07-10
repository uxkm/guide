import{_ as o}from"./ProgressCircle-C4dpRnb_.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const c={title:"Components/피드백/ProgressCircle",id:"components-progress-circle",component:o,tags:["autodocs"],argTypes:{percent:{control:"number",type:{name:"number",summary:"number"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}}},e={parameters:{docs:{source:{code:`<script setup>
import ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';
<\/script>

<template>
  <ProgressCircle :percent="0" color="primary" size="md" aria-label="진행률" />
</template>`,language:"vue"}}},args:{percent:0,color:"primary",size:"md",ariaLabel:"진행률"}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport ProgressCircle from '@uxkm/ui/components/ProgressCircle.vue';\\n<\/script>\\n\\n<template>\\n  <ProgressCircle :percent=\\"0\\" color=\\"primary\\" size=\\"md\\" aria-label=\\"진행률\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    percent: 0,
    color: "primary",
    size: "md",
    ariaLabel: "진행률"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,c as default};
