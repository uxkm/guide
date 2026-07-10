import{_ as s}from"./TypoText-DRTgUpaX.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const i={title:"Components/기본 요소/TypoText",id:"components-typo-text",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","paragraph","lead","caption","label","overline","code","kbd","pre","strong","italic","underline","delete","mark","sub","sup","small","link","blockquote"],type:{name:"enum",summary:"'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["xs","sm","lg","xl"],type:{name:"enum",summary:"'xs' | 'sm' | 'lg' | 'xl'"}},ellipsis:{control:"select",options:["0","1","2","3"],type:{name:"enum",summary:"'0' | '1' | '2' | '3' | '0' | '1' | '2' | '3'"}},href:{control:"text",type:{name:"string",summary:"string"}},htmlFor:{control:"text",type:{name:"string",summary:"string"}},cite:{control:"text",type:{name:"string",summary:"string"}},label:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"text",type:{name:"string",summary:"string"}}}},e={parameters:{docs:{source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <TypoText variant="text" color="값" size="xs" ellipsis="0" href="#" html-for="값" cite="값" label="라벨" tag="span" />
</template>`,language:"vue"}}},args:{variant:"text",color:"값",size:"xs",ellipsis:"0",href:"#",htmlFor:"값",cite:"값",label:"라벨",tag:"span"}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <TypoText variant=\\"text\\" color=\\"값\\" size=\\"xs\\" ellipsis=\\"0\\" href=\\"#\\" html-for=\\"값\\" cite=\\"값\\" label=\\"라벨\\" tag=\\"span\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "text",
    color: "값",
    size: "xs",
    ellipsis: "0",
    href: "#",
    htmlFor: "값",
    cite: "값",
    label: "라벨",
    tag: "span"
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,i as default};
