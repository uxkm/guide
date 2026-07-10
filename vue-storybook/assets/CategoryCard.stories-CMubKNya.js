import{c as r,k as m,t as n,q as s,m as d,e as g,o}from"./vue.esm-bundler-BaZlnz8B.js";import{r as l,u as C}from"./useRipple-oORGvIsP.js";const y=["href"],f={key:0},h={key:1,class:"count"},B={__name:"CategoryCard",props:{ripple:l,title:{type:String,required:!0},description:String,count:String,href:{type:String,required:!0}},setup(t){const i=t,{rippleAttrs:p}=C(i);return(x,A)=>(o(),r("a",d({class:"category_card",href:t.href},g(p)),[m("h3",null,n(t.title),1),t.description?(o(),r("p",f,n(t.description),1)):s("",!0),t.count?(o(),r("span",h,n(t.count),1)):s("",!0)],16,y))}},S={title:"Components/데이터 표시/CategoryCard",id:"components-category-card",component:B,tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},count:{control:"text",type:{name:"string",summary:"string"}},href:{control:"text",type:{name:"string",summary:"string"}}}},e={parameters:{docs:{source:{code:`<script setup>
import CategoryCard from '@uxkm/ui/components/CategoryCard.vue';
<\/script>

<template>
  <CategoryCard title="제목" description="설명 텍스트입니다." :count="5" href="#" />
</template>`,language:"vue"}}},args:{title:"제목",description:"설명 텍스트입니다.",count:5,href:"#"}};var a,c,u;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport CategoryCard from '@uxkm/ui/components/CategoryCard.vue';\\n<\/script>\\n\\n<template>\\n  <CategoryCard title=\\"제목\\" description=\\"설명 텍스트입니다.\\" :count=\\"5\\" href=\\"#\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    title: "제목",
    description: "설명 텍스트입니다.",
    count: 5,
    href: "#"
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,S as default};
