import{a,_ as e}from"./Space-wMD1ZO64.js";import{_ as s}from"./Button-C3SXv-sJ.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const F=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],T=[{name:"vertical",type:"boolean",default:"false",description:"세로 방향 배치 (space_vertical)"},{name:"wrap",type:"boolean",default:"false",description:"줄바꿈 허용 (space_wrap)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% flex (space_block)"},{name:"gap",type:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"자식 간 간격. md는 클래스 없이 --space-gap 사용"},{name:"align",type:"'start' | 'center' | 'end' | 'baseline' | 'stretch'",default:"—",description:"교차축 정렬 (space_align-*)"},{name:"justify",type:"'start' | 'center' | 'end' | 'between'",default:"—",description:"주축 정렬 (space_justify-*)"}],O=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],V=[{name:"default",description:"간격을 둘 자식 요소"}],G=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],I=[{name:"space",description:"inline-flex 루트, 기본 가로 배치"},{name:"space_vertical",description:"세로 방향"},{name:"space_wrap",description:"줄바꿈"},{name:"space_block",description:"display flex + width 100%"},{name:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl",description:"간격 변형 (md는 기본)"},{name:"space_align-start · space_align-center · space_align-end · space_align-baseline · space_align-stretch",description:"교차축 정렬"},{name:"space_justify-start · space_justify-center · space_justify-end · space_justify-between",description:"주축 정렬"}],W=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$=[{name:"--space-gap",default:"var(--space-md)",description:"기본 자식 간 간격 (gap md)"}],H=[{title:"API · Props",tables:[{columns:F,rows:T,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:O,rows:V,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:G,rows:I,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:W,rows:$,codeColumn:"name"}]}],N={title:"Components/레이아웃/Space",id:"components-space",component:e,tags:["autodocs"],argTypes:{vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},gap:{control:"select",options:["xs","sm","md","lg","xl"],type:{name:"enum",summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"}},align:{control:"select",options:["start","center","end","baseline","stretch"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'baseline' | 'stretch'"}},justify:{control:"select",options:["start","center","end","between"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between'"}}},parameters:{layout:"padded",apiSections:H}},n={args:{vertical:!1,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},render:j=>({components:{Space:e},setup(){return{args:j}},template:`<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>`})},c={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>`})},o={name:"세로",parameters:{demoPreview:{stack:!1},docs:{description:{story:"space_vertical로 세로 방향 배치를 지정합니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space vertical>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space vertical>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>`})},d={name:"간격",parameters:{demoPreview:{stack:!0},docs:{description:{story:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space gap="xs">
    <div class="space_demo-box">xs</div>
    <div class="space_demo-box">xs</div>
    <div class="space_demo-box">xs</div>
  </Space>
  <Space gap="sm">
    <div class="space_demo-box">sm</div>
    <div class="space_demo-box">sm</div>
    <div class="space_demo-box">sm</div>
  </Space>
  <Space>
    <div class="space_demo-box">md (기본)</div>
    <div class="space_demo-box">md</div>
    <div class="space_demo-box">md</div>
  </Space>
  <Space gap="lg">
    <div class="space_demo-box">lg</div>
    <div class="space_demo-box">lg</div>
    <div class="space_demo-box">lg</div>
  </Space>
  <Space gap="xl">
    <div class="space_demo-box">xl</div>
    <div class="space_demo-box">xl</div>
    <div class="space_demo-box">xl</div>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space gap="xs">
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
    </Space>
    <Space gap="sm">
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
    </Space>
    <Space>
      <div class="space_demo-box">md (기본)</div>
      <div class="space_demo-box">md</div>
      <div class="space_demo-box">md</div>
    </Space>
    <Space gap="lg">
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
    </Space>
    <Space gap="xl">
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
    </Space>`})},i={name:"줄바꿈",parameters:{demoPreview:{stack:!0},docs:{description:{story:"space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space block wrap>
    <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space block wrap>
      <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
    </Space>`})},p={name:"정렬",parameters:{demoPreview:{stack:!0},docs:{description:{story:"space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space
  block
  align="center"
  style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
  >
  <div class="space_demo-box">align center</div>
  <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
  <div class="space_demo-box">align center</div>
  </Space>
  <Space
  block
  justify="between"
  style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
  >
  <div class="space_demo-box">justify between</div>
  <div class="space_demo-box">양 끝</div>
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space
      block
      align="center"
      style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">align center</div>
      <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
      <div class="space_demo-box">align center</div>
    </Space>
    <Space
      block
      justify="between"
      style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">justify between</div>
      <div class="space_demo-box">양 끝</div>
    </Space>`})},t={name:"조합 예시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Divider from '@uxkm/ui/components/Divider.vue';
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space>
    <Button variant="outline" label="취소" />
    <Button variant="filled" color="primary" label="저장" />
    <Divider vertical />
    <Button variant="text" label="더보기" />
  </Space>
</template>`,language:"vue"}}},render:()=>({components:{Space:e,Button:s,Divider:a},template:`<Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>`})};var r,m,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    vertical: false,
    wrap: false,
    block: false,
    gap: "md",
    align: "값",
    justify: "값"
  },
  render: args => ({
    components: {
      Space
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>\`
  })
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,v,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다."
      },
      source: {
        code: "<script setup>\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space>\\n    <div class=\\"space_demo-box\\">항목 1</div>\\n    <div class=\\"space_demo-box\\">항목 2</div>\\n    <div class=\\"space_demo-box\\">항목 3</div>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>\`
  })
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,_,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "세로",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "space_vertical로 세로 방향 배치를 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space vertical>\\n    <div class=\\"space_demo-box\\">항목 1</div>\\n    <div class=\\"space_demo-box\\">항목 2</div>\\n    <div class=\\"space_demo-box\\">항목 3</div>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space vertical>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>\`
  })
}`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var S,C,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다."
      },
      source: {
        code: "<script setup>\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space gap=\\"xs\\">\\n    <div class=\\"space_demo-box\\">xs</div>\\n    <div class=\\"space_demo-box\\">xs</div>\\n    <div class=\\"space_demo-box\\">xs</div>\\n  </Space>\\n  <Space gap=\\"sm\\">\\n    <div class=\\"space_demo-box\\">sm</div>\\n    <div class=\\"space_demo-box\\">sm</div>\\n    <div class=\\"space_demo-box\\">sm</div>\\n  </Space>\\n  <Space>\\n    <div class=\\"space_demo-box\\">md (기본)</div>\\n    <div class=\\"space_demo-box\\">md</div>\\n    <div class=\\"space_demo-box\\">md</div>\\n  </Space>\\n  <Space gap=\\"lg\\">\\n    <div class=\\"space_demo-box\\">lg</div>\\n    <div class=\\"space_demo-box\\">lg</div>\\n    <div class=\\"space_demo-box\\">lg</div>\\n  </Space>\\n  <Space gap=\\"xl\\">\\n    <div class=\\"space_demo-box\\">xl</div>\\n    <div class=\\"space_demo-box\\">xl</div>\\n    <div class=\\"space_demo-box\\">xl</div>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space gap="xs">
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
    </Space>
    <Space gap="sm">
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
    </Space>
    <Space>
      <div class="space_demo-box">md (기본)</div>
      <div class="space_demo-box">md</div>
      <div class="space_demo-box">md</div>
    </Space>
    <Space gap="lg">
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
    </Space>
    <Space gap="xl">
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
    </Space>\`
  })
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var y,D,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "줄바꿈",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다."
      },
      source: {
        code: "<script setup>\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space block wrap>\\n    <div class=\\"space_demo-box\\" style=\\"min-width: 8rem;\\">항목 1</div>\\n    <div class=\\"space_demo-box\\" style=\\"min-width: 8rem;\\">항목 2</div>\\n    <div class=\\"space_demo-box\\" style=\\"min-width: 8rem;\\">항목 3</div>\\n    <div class=\\"space_demo-box\\" style=\\"min-width: 8rem;\\">항목 4</div>\\n    <div class=\\"space_demo-box\\" style=\\"min-width: 8rem;\\">항목 5</div>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space block wrap>
      <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
    </Space>\`
  })
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var f,k,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "정렬",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space\\n  block\\n  align=\\"center\\"\\n  style=\\"min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);\\"\\n  >\\n  <div class=\\"space_demo-box\\">align center</div>\\n  <div class=\\"space_demo-box\\" style=\\"padding-block: var(--space-xl);\\">높이 다름</div>\\n  <div class=\\"space_demo-box\\">align center</div>\\n  </Space>\\n  <Space\\n  block\\n  justify=\\"between\\"\\n  style=\\"background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);\\"\\n  >\\n  <div class=\\"space_demo-box\\">justify between</div>\\n  <div class=\\"space_demo-box\\">양 끝</div>\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space
      block
      align="center"
      style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">align center</div>
      <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
      <div class="space_demo-box">align center</div>
    </Space>
    <Space
      block
      justify="between"
      style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">justify between</div>
      <div class="space_demo-box">양 끝</div>
    </Space>\`
  })
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var h,E,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "조합 예시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Divider from '@uxkm/ui/components/Divider.vue';\\nimport Space from '@uxkm/ui/components/Space.vue';\\n<\/script>\\n\\n<template>\\n  <Space>\\n    <Button variant=\\"outline\\" label=\\"취소\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"저장\\" />\\n    <Divider vertical />\\n    <Button variant=\\"text\\" label=\\"더보기\\" />\\n  </Space>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Space,
      Button,
      Divider
    },
    template: \`<Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>\`
  })
}`,...(P=(E=t.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const Q=["Playground","Basic","Vertical","Gap","Wrap","Align","Combo"];export{p as Align,c as Basic,t as Combo,d as Gap,n as Playground,o as Vertical,i as Wrap,Q as __namedExportsOrder,N as default};
