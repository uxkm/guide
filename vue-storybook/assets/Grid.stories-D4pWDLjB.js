import{_ as d}from"./Grid-DFkcw--L.js";import{w as i,s as L}from"./story-renders-DjeoaiCa.js";import"./iframe-CAswI7Qe.js";import"./preload-helper-PMqzWbAN.js";const M=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],V=[{name:"cols",type:"number | string",default:"—",description:"균등 열 수 (grid_cols-*)"},{name:"cols-md",type:"number | string",default:"—",description:"md 브레이크포인트 이상 균등 열 수"},{name:"cols-lg",type:"number | string",default:"—",description:"lg 브레이크포인트 이상 균등 열 수"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"2~3열 비율 레이아웃 (grid_ratio-*)"},{name:"item-span",type:"number | string",default:"—",description:"모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)"},{name:"item-span-md",type:"number | string",default:"—",description:"md 이상 자식 일괄 span"},{name:"item-span-lg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 span"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"열·행 간격. 생략 시 --grid-gap (md)"},{name:"auto-fit",type:"boolean",default:"false",description:"auto-fit 반복 열 (grid_auto-fit)"},{name:"auto-fill",type:"boolean",default:"false",description:"auto-fill 반복 열 (grid_auto-fill)"}],j=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],z=[{name:"default",description:"그리드 자식 콘텐츠"}],J=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],K=[{name:"grid",description:"12열 CSS Grid 루트"},{name:"grid_cols-* · grid_cols-md-* · grid_cols-lg-*",description:"균등 열 수"},{name:"grid_ratio-*",description:"비율 열 (2-1, 1-2-1 등)"},{name:"grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*",description:"자식 일괄 span"},{name:"grid_col-span-* · grid_col-span-md-* · grid_col-span-lg-*",description:"자식별 개별 span (혼합 레이아웃)"},{name:"grid_gap-sm · grid_gap-lg · grid_gap-none",description:"간격 변형"},{name:"grid_auto-fit · grid_auto-fill",description:"자동 반복 열"},{name:"grid_equal-columns",description:"균등 열 자동 흐름"},{name:"grid_align-center · grid_align-end",description:"교차축 정렬"}],N=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Q=[{name:"--grid-columns",default:"12",description:"기본 열 수"},{name:"--grid-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--grid-gap-sm · --grid-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--grid-auto-min",default:"10rem",description:"auto-fit · auto-fill 최소 열 너비"}],U=[{title:"API · Grid Props",tables:[{columns:M,rows:V,codeColumn:"name"}]},{title:"API · Grid Slots",tables:[{columns:j,rows:z,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:J,rows:K,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:N,rows:Q,codeColumn:"name"}]}],dd={title:"Components/레이아웃/Grid",id:"components-grid",component:d,tags:["autodocs"],argTypes:{ratio:{control:"select",options:["1-1","2-1","1-2","3-1","1-1-1","1-2-1"],type:{name:"enum",summary:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'"}},gap:{control:"select",options:["sm","lg","none"],type:{name:"enum",summary:"'sm' | 'lg' | 'none'"}},autoFit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoFill:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:U}},e={parameters:{controls:{disable:!1}},args:{cols:3,gap:"sm",autoFit:!1,autoFill:!1},render:(W,H)=>({components:{Grid:d},setup(){return{args:L(H)}},template:`<Grid v-bind="args">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">3</div>
    </Grid>`})},s={name:"부모 클래스로 제어",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid :cols="3">
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
  </Grid>
  <Grid ratio="2-1">
    <div class="grid_demo-cell">grid_ratio-2-1</div>
    <div class="grid_demo-cell">grid_ratio-2-1</div>
  </Grid>
  <Grid :item-span="4">
    <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm"},render:i(()=>({components:{Grid:d},template:`<Grid :cols="3">
        <div class="grid_demo-cell">grid_cols-3</div>
        <div class="grid_demo-cell">grid_cols-3</div>
        <div class="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div class="grid_demo-cell">grid_ratio-2-1</div>
        <div class="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid :item-span="4">
        <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
      </Grid>`}))},l={name:"균등 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid :cols="2">
    <div class="grid_demo-cell">cols 2</div>
    <div class="grid_demo-cell">cols 2</div>
  </Grid>
  <Grid :cols="4">
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid :cols="2">
        <div class="grid_demo-cell">cols 2</div>
        <div class="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid :cols="4">
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
      </Grid>`}))},n={name:"비율 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid ratio="1-2">
    <div class="grid_demo-cell">1 : 2</div>
    <div class="grid_demo-cell">1 : 2</div>
  </Grid>
  <Grid ratio="1-2-1">
    <div class="grid_demo-cell">1</div>
    <div class="grid_demo-cell">2</div>
    <div class="grid_demo-cell">1</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid ratio="1-2">
        <div class="grid_demo-cell">1 : 2</div>
        <div class="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div class="grid_demo-cell">1</div>
        <div class="grid_demo-cell">2</div>
        <div class="grid_demo-cell">1</div>
      </Grid>`}))},a={name:"자식 일괄 span (12열)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid :item-span="6">
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
  </Grid>
  <Grid :item-span="3">
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid :item-span="6">
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
      </Grid>
      <Grid :item-span="3">
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
      </Grid>`}))},r={name:"자식별 span (혼합 레이아웃)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid>
    <div class="grid_col-span-8">
      <div class="grid_demo-cell">span 8</div>
    </div>
    <div class="grid_col-span-4">
      <div class="grid_demo-cell">span 4</div>
    </div>
    <div class="grid_col-span-4">
      <div class="grid_demo-cell">span 4</div>
    </div>
    <div class="grid_col-span-4">
      <div class="grid_demo-cell">span 4</div>
    </div>
    <div class="grid_col-span-4">
      <div class="grid_demo-cell">span 4</div>
    </div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid>
        <div class="grid_col-span-8">
          <div class="grid_demo-cell">span 8</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
      </Grid>`}))},o={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid :cols="3" gap="sm">
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
  </Grid>
  <Grid :cols="3" gap="lg">
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid :cols="3" gap="sm">
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid :cols="3" gap="lg">
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
      </Grid>`}))},c={name:"반응형 (부모)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid :cols="1" :cols-md="2" :cols-lg="3">
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
  </Grid>
  <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid :cols="1" :cols-md="2" :cols-lg="3">
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>`}))},t={name:"자동 배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_auto-fit · grid_auto-fill은 부모에 지정합니다."},source:{code:`<script setup>
import Grid from '@uxkm/ui/components/Grid.vue';
<\/script>

<template>
  <Grid auto-fit>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
  </Grid>
</template>`,language:"vue"}}},args:{ratio:"값",gap:"sm",autoFit:!1,autoFill:!1},render:i(()=>({components:{Grid:d},template:`<Grid auto-fit>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
      </Grid>`}))};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    cols: 3,
    gap: 'sm',
    autoFit: false,
    autoFill: false
  },
  render: (_args, context) => ({
    components: {
      Grid
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Grid v-bind="args">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">3</div>
    </Grid>\`
  })
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,p,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "부모 클래스로 제어",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid :cols=\\"3\\">\\n    <div class=\\"grid_demo-cell\\">grid_cols-3</div>\\n    <div class=\\"grid_demo-cell\\">grid_cols-3</div>\\n    <div class=\\"grid_demo-cell\\">grid_cols-3</div>\\n  </Grid>\\n  <Grid ratio=\\"2-1\\">\\n    <div class=\\"grid_demo-cell\\">grid_ratio-2-1</div>\\n    <div class=\\"grid_demo-cell\\">grid_ratio-2-1</div>\\n  </Grid>\\n  <Grid :item-span=\\"4\\">\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4 (12열 기준 3개/행)</div>\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4</div>\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4</div>\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4</div>\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4</div>\\n    <div class=\\"grid_demo-cell\\">grid_item-span-4</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid :cols="3">
        <div class="grid_demo-cell">grid_cols-3</div>
        <div class="grid_demo-cell">grid_cols-3</div>
        <div class="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div class="grid_demo-cell">grid_ratio-2-1</div>
        <div class="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid :item-span="4">
        <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
        <div class="grid_demo-cell">grid_item-span-4</div>
      </Grid>\`
  }))
}`,...(_=(p=s.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var C,G,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "균등 열",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid :cols=\\"2\\">\\n    <div class=\\"grid_demo-cell\\">cols 2</div>\\n    <div class=\\"grid_demo-cell\\">cols 2</div>\\n  </Grid>\\n  <Grid :cols=\\"4\\">\\n    <div class=\\"grid_demo-cell\\">cols 4</div>\\n    <div class=\\"grid_demo-cell\\">cols 4</div>\\n    <div class=\\"grid_demo-cell\\">cols 4</div>\\n    <div class=\\"grid_demo-cell\\">cols 4</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid :cols="2">
        <div class="grid_demo-cell">cols 2</div>
        <div class="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid :cols="4">
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
      </Grid>\`
  }))
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var B,D,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "비율 열",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid ratio=\\"1-2\\">\\n    <div class=\\"grid_demo-cell\\">1 : 2</div>\\n    <div class=\\"grid_demo-cell\\">1 : 2</div>\\n  </Grid>\\n  <Grid ratio=\\"1-2-1\\">\\n    <div class=\\"grid_demo-cell\\">1</div>\\n    <div class=\\"grid_demo-cell\\">2</div>\\n    <div class=\\"grid_demo-cell\\">1</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid ratio="1-2">
        <div class="grid_demo-cell">1 : 2</div>
        <div class="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div class="grid_demo-cell">1</div>
        <div class="grid_demo-cell">2</div>
        <div class="grid_demo-cell">1</div>
      </Grid>\`
  }))
}`,...(A=(D=n.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var F,y,b;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "자식 일괄 span (12열)",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid :item-span=\\"6\\">\\n    <div class=\\"grid_demo-cell\\">span 6</div>\\n    <div class=\\"grid_demo-cell\\">span 6</div>\\n    <div class=\\"grid_demo-cell\\">span 6</div>\\n    <div class=\\"grid_demo-cell\\">span 6</div>\\n  </Grid>\\n  <Grid :item-span=\\"3\\">\\n    <div class=\\"grid_demo-cell\\">span 3</div>\\n    <div class=\\"grid_demo-cell\\">span 3</div>\\n    <div class=\\"grid_demo-cell\\">span 3</div>\\n    <div class=\\"grid_demo-cell\\">span 3</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid :item-span="6">
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
        <div class="grid_demo-cell">span 6</div>
      </Grid>
      <Grid :item-span="3">
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
        <div class="grid_demo-cell">span 3</div>
      </Grid>\`
  }))
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,E,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "자식별 span (혼합 레이아웃)",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid>\\n    <div class=\\"grid_col-span-8\\">\\n      <div class=\\"grid_demo-cell\\">span 8</div>\\n    </div>\\n    <div class=\\"grid_col-span-4\\">\\n      <div class=\\"grid_demo-cell\\">span 4</div>\\n    </div>\\n    <div class=\\"grid_col-span-4\\">\\n      <div class=\\"grid_demo-cell\\">span 4</div>\\n    </div>\\n    <div class=\\"grid_col-span-4\\">\\n      <div class=\\"grid_demo-cell\\">span 4</div>\\n    </div>\\n    <div class=\\"grid_col-span-4\\">\\n      <div class=\\"grid_demo-cell\\">span 4</div>\\n    </div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid>
        <div class="grid_col-span-8">
          <div class="grid_demo-cell">span 8</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
        <div class="grid_col-span-4">
          <div class="grid_demo-cell">span 4</div>
        </div>
      </Grid>\`
  }))
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var x,P,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        story: "grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid :cols=\\"3\\" gap=\\"sm\\">\\n    <div class=\\"grid_demo-cell\\">gap sm</div>\\n    <div class=\\"grid_demo-cell\\">gap sm</div>\\n    <div class=\\"grid_demo-cell\\">gap sm</div>\\n  </Grid>\\n  <Grid :cols=\\"3\\" gap=\\"lg\\">\\n    <div class=\\"grid_demo-cell\\">gap lg</div>\\n    <div class=\\"grid_demo-cell\\">gap lg</div>\\n    <div class=\\"grid_demo-cell\\">gap lg</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid :cols="3" gap="sm">
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid :cols="3" gap="lg">
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
      </Grid>\`
  }))
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var R,h,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "반응형 (부모)",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid :cols=\\"1\\" :cols-md=\\"2\\" :cols-lg=\\"3\\">\\n    <div class=\\"grid_demo-cell\\">1 → md 2 → lg 3열</div>\\n    <div class=\\"grid_demo-cell\\">1 → md 2 → lg 3열</div>\\n    <div class=\\"grid_demo-cell\\">1 → md 2 → lg 3열</div>\\n  </Grid>\\n  <Grid :item-span=\\"12\\" :item-span-md=\\"6\\" :item-span-lg=\\"4\\">\\n    <div class=\\"grid_demo-cell\\">span 12 → md 6 → lg 4</div>\\n    <div class=\\"grid_demo-cell\\">span 12 → md 6 → lg 4</div>\\n    <div class=\\"grid_demo-cell\\">span 12 → md 6 → lg 4</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid :cols="1" :cols-md="2" :cols-lg="3">
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>\`
  }))
}`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var T,q,O;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "자동 배치",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "grid_auto-fit · grid_auto-fill은 부모에 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\n<\/script>\\n\\n<template>\\n  <Grid auto-fit>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n    <div class=\\"grid_demo-cell\\">auto-fit</div>\\n  </Grid>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ratio: "값",
    gap: "sm",
    autoFit: false,
    autoFill: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Grid
    },
    template: \`<Grid auto-fit>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
      </Grid>\`
  }))
}`,...(O=(q=t.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const id=["Playground","Parent","Equal","Ratio","ItemSpan","Child","Gap","Responsive","Auto"];export{t as Auto,r as Child,l as Equal,o as Gap,a as ItemSpan,s as Parent,e as Playground,n as Ratio,c as Responsive,id as __namedExportsOrder,dd as default};
