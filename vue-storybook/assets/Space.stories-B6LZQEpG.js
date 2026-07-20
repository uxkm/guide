import{a as e,_ as P}from"./Space-BcoWVJS9.js";import{w as a,s as F}from"./story-renders-DjeoaiCa.js";import{q as R}from"./iframe-CAswI7Qe.js";import"./preload-helper-PMqzWbAN.js";const T=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],O=[{name:"vertical",type:"boolean",default:"false",description:"세로 방향 배치 (space_vertical)"},{name:"wrap",type:"boolean",default:"false",description:"줄바꿈 허용 (space_wrap)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% flex (space_block)"},{name:"gap",type:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"자식 간 간격. md는 클래스 없이 --space-gap 사용"},{name:"align",type:"'start' | 'center' | 'end' | 'baseline' | 'stretch'",default:"—",description:"교차축 정렬 (space_align-*)"},{name:"justify",type:"'start' | 'center' | 'end' | 'between'",default:"—",description:"주축 정렬 (space_justify-*)"}],V=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],G=[{name:"default",description:"간격을 둘 자식 요소"}],I=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],W=[{name:"space",description:"inline-flex 루트, 기본 가로 배치"},{name:"space_vertical",description:"세로 방향"},{name:"space_wrap",description:"줄바꿈"},{name:"space_block",description:"display flex + width 100%"},{name:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl",description:"간격 변형 (md는 기본)"},{name:"space_align-start · space_align-center · space_align-end · space_align-baseline · space_align-stretch",description:"교차축 정렬"},{name:"space_justify-start · space_justify-center · space_justify-end · space_justify-between",description:"주축 정렬"}],$=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],q=[{name:"--space-gap",default:"var(--space-md)",description:"기본 자식 간 간격 (gap md)"}],H=[{title:"API · Props",tables:[{columns:T,rows:O,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:V,rows:G,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:I,rows:W,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:$,rows:q,codeColumn:"name"}]}],N={title:"Components/레이아웃/Space",id:"components-space",component:e,tags:["autodocs"],argTypes:{vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},gap:{control:"select",options:["xs","sm","md","lg","xl"],type:{name:"enum",summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"}},align:{control:"select",options:["start","center","end","baseline","stretch"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'baseline' | 'stretch'"}},justify:{control:"select",options:["start","center","end","between"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:H}},s={parameters:{controls:{disable:!1}},args:{vertical:!1,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},render:(L,E)=>({components:{Space:e},setup(){return{args:F(E)}},template:`<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>`})},n={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`,language:"vue"}}},args:{gap:"md",align:"값",justify:"값"},render:a(()=>({components:{Space:e},template:`<Space>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>`}))},c={name:"세로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"space_vertical로 세로 방향 배치를 지정합니다."},source:{code:`<script setup>
import Space from '@uxkm/ui/components/Space.vue';
<\/script>

<template>
  <Space vertical>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`,language:"vue"}}},args:{vertical:!0,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},render:a(()=>({components:{Space:e},template:`<Space vertical>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>`}))},o={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{vertical:!1,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},render:a(()=>({components:{Space:e},template:`<Space gap="xs">
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
      </Space>`}))},d={name:"줄바꿈",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{vertical:!1,wrap:!0,block:!0,gap:"md",align:"값",justify:"값"},render:a(()=>({components:{Space:e},template:`<Space block wrap>
        <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
      </Space>`}))},i={name:"정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{vertical:!1,wrap:!1,block:!0,gap:"md",align:"center",justify:"값"},render:a(()=>({components:{Space:e},template:`<Space
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
      </Space>`}))},p={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{vertical:!1,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},render:a(()=>({components:{Button:R,Divider:P,Space:e},template:`<Space>
        <Button variant="outline" label="취소" />
        <Button variant="filled" color="primary" label="저장" />
        <Divider vertical />
        <Button variant="text" label="더보기" />
      </Space>`}))};var t,r,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    vertical: false,
    wrap: false,
    block: false,
    gap: "md",
    align: "값",
    justify: "값"
  },
  render: (_args, context) => ({
    components: {
      Space
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>\`
  })
}`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    gap: "md",
    align: "값",
    justify: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Space
    },
    template: \`<Space>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>\`
  }))
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,x,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "세로",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    vertical: true,
    wrap: false,
    block: false,
    gap: 'md',
    align: '값',
    justify: '값'
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Space
    },
    template: \`<Space vertical>
        <div class="space_demo-box">항목 1</div>
        <div class="space_demo-box">항목 2</div>
        <div class="space_demo-box">항목 3</div>
      </Space>\`
  }))
}`,...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var _,S,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    vertical: false,
    wrap: false,
    block: false,
    gap: "md",
    align: "값",
    justify: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Space
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
  }))
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,y,B;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "줄바꿈",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    vertical: false,
    wrap: true,
    block: true,
    gap: 'md',
    align: '값',
    justify: '값'
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Space
    },
    template: \`<Space block wrap>
        <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
        <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
      </Space>\`
  }))
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var A,D,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "정렬",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    vertical: false,
    wrap: false,
    block: true,
    gap: 'md',
    align: 'center',
    justify: '값'
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Space
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
  }))
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var w,h,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "조합 예시",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    vertical: false,
    wrap: false,
    block: false,
    gap: "md",
    align: "값",
    justify: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Divider,
      Space
    },
    template: \`<Space>
        <Button variant="outline" label="취소" />
        <Button variant="filled" color="primary" label="저장" />
        <Divider vertical />
        <Button variant="text" label="더보기" />
      </Space>\`
  }))
}`,...(j=(h=p.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const Q=["Playground","Basic","Vertical","Gap","Wrap","Align","Combo"];export{i as Align,n as Basic,p as Combo,o as Gap,s as Playground,c as Vertical,d as Wrap,Q as __namedExportsOrder,N as default};
