import Grid from './Grid.vue';
import { withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import {
  gridClassColumns,
  gridClasses,
  gridPropColumns,
  gridProps,
  gridSlotColumns,
  gridSlots,
  gridTokenColumns,
  gridTokens,
} from '@doc-data/grid-api';
const apiSections = [
  {
    title: "API · Grid Props",
    tables: [
      { columns: gridPropColumns, rows: gridProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Grid Slots",
    tables: [
      { columns: gridSlotColumns, rows: gridSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: gridClassColumns, rows: gridClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: gridTokenColumns, rows: gridTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/레이아웃/Grid',
  id: 'components-grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'select', options: ["1-1","2-1","1-2","3-1","1-1-1","1-2-1"], type: { name: 'enum', summary: "'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'" } },
    gap: { control: 'select', options: ["sm","lg","none"], type: { name: 'enum', summary: "'sm' | 'lg' | 'none'" }},
    autoFit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    autoFill: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    cols: 3,
    gap: 'sm',
    autoFit: false,
    autoFill: false,
  },
  render: (_args, context) => ({
    components: { Grid },
    setup() {
      return { args: storyArgsRef(context) }; },
    template: `<Grid v-bind="args">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">3</div>
    </Grid>`,
  }),
};


export const Parent = {
  name: "부모 클래스로 제어",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid :cols=\"3\">\n    <div class=\"grid_demo-cell\">grid_cols-3</div>\n    <div class=\"grid_demo-cell\">grid_cols-3</div>\n    <div class=\"grid_demo-cell\">grid_cols-3</div>\n  </Grid>\n  <Grid ratio=\"2-1\">\n    <div class=\"grid_demo-cell\">grid_ratio-2-1</div>\n    <div class=\"grid_demo-cell\">grid_ratio-2-1</div>\n  </Grid>\n  <Grid :item-span=\"4\">\n    <div class=\"grid_demo-cell\">grid_item-span-4 (12열 기준 3개/행)</div>\n    <div class=\"grid_demo-cell\">grid_item-span-4</div>\n    <div class=\"grid_demo-cell\">grid_item-span-4</div>\n    <div class=\"grid_demo-cell\">grid_item-span-4</div>\n    <div class=\"grid_demo-cell\">grid_item-span-4</div>\n    <div class=\"grid_demo-cell\">grid_item-span-4</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm"
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid :cols="3">
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
      </Grid>`,
  })),
};


export const Equal = {
  name: "균등 열",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid :cols=\"2\">\n    <div class=\"grid_demo-cell\">cols 2</div>\n    <div class=\"grid_demo-cell\">cols 2</div>\n  </Grid>\n  <Grid :cols=\"4\">\n    <div class=\"grid_demo-cell\">cols 4</div>\n    <div class=\"grid_demo-cell\">cols 4</div>\n    <div class=\"grid_demo-cell\">cols 4</div>\n    <div class=\"grid_demo-cell\">cols 4</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid :cols="2">
        <div class="grid_demo-cell">cols 2</div>
        <div class="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid :cols="4">
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
        <div class="grid_demo-cell">cols 4</div>
      </Grid>`,
  })),
};


export const Ratio = {
  name: "비율 열",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid ratio=\"1-2\">\n    <div class=\"grid_demo-cell\">1 : 2</div>\n    <div class=\"grid_demo-cell\">1 : 2</div>\n  </Grid>\n  <Grid ratio=\"1-2-1\">\n    <div class=\"grid_demo-cell\">1</div>\n    <div class=\"grid_demo-cell\">2</div>\n    <div class=\"grid_demo-cell\">1</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid ratio="1-2">
        <div class="grid_demo-cell">1 : 2</div>
        <div class="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div class="grid_demo-cell">1</div>
        <div class="grid_demo-cell">2</div>
        <div class="grid_demo-cell">1</div>
      </Grid>`,
  })),
};


export const ItemSpan = {
  name: "자식 일괄 span (12열)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid :item-span=\"6\">\n    <div class=\"grid_demo-cell\">span 6</div>\n    <div class=\"grid_demo-cell\">span 6</div>\n    <div class=\"grid_demo-cell\">span 6</div>\n    <div class=\"grid_demo-cell\">span 6</div>\n  </Grid>\n  <Grid :item-span=\"3\">\n    <div class=\"grid_demo-cell\">span 3</div>\n    <div class=\"grid_demo-cell\">span 3</div>\n    <div class=\"grid_demo-cell\">span 3</div>\n    <div class=\"grid_demo-cell\">span 3</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid :item-span="6">
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
      </Grid>`,
  })),
};


export const Child = {
  name: "자식별 span (혼합 레이아웃)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid>\n    <div class=\"grid_col-span-8\">\n      <div class=\"grid_demo-cell\">span 8</div>\n    </div>\n    <div class=\"grid_col-span-4\">\n      <div class=\"grid_demo-cell\">span 4</div>\n    </div>\n    <div class=\"grid_col-span-4\">\n      <div class=\"grid_demo-cell\">span 4</div>\n    </div>\n    <div class=\"grid_col-span-4\">\n      <div class=\"grid_demo-cell\">span 4</div>\n    </div>\n    <div class=\"grid_col-span-4\">\n      <div class=\"grid_demo-cell\">span 4</div>\n    </div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid>
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
      </Grid>`,
  })),
};


export const Gap = {
  name: "간격",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid :cols=\"3\" gap=\"sm\">\n    <div class=\"grid_demo-cell\">gap sm</div>\n    <div class=\"grid_demo-cell\">gap sm</div>\n    <div class=\"grid_demo-cell\">gap sm</div>\n  </Grid>\n  <Grid :cols=\"3\" gap=\"lg\">\n    <div class=\"grid_demo-cell\">gap lg</div>\n    <div class=\"grid_demo-cell\">gap lg</div>\n    <div class=\"grid_demo-cell\">gap lg</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid :cols="3" gap="sm">
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
        <div class="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid :cols="3" gap="lg">
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
        <div class="grid_demo-cell">gap lg</div>
      </Grid>`,
  })),
};


export const Responsive = {
  name: "반응형 (부모)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid :cols=\"1\" :cols-md=\"2\" :cols-lg=\"3\">\n    <div class=\"grid_demo-cell\">1 → md 2 → lg 3열</div>\n    <div class=\"grid_demo-cell\">1 → md 2 → lg 3열</div>\n    <div class=\"grid_demo-cell\">1 → md 2 → lg 3열</div>\n  </Grid>\n  <Grid :item-span=\"12\" :item-span-md=\"6\" :item-span-lg=\"4\">\n    <div class=\"grid_demo-cell\">span 12 → md 6 → lg 4</div>\n    <div class=\"grid_demo-cell\">span 12 → md 6 → lg 4</div>\n    <div class=\"grid_demo-cell\">span 12 → md 6 → lg 4</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid :cols="1" :cols-md="2" :cols-lg="3">
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>`,
  })),
};


export const Auto = {
  name: "자동 배치",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid_auto-fit · grid_auto-fill은 부모에 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Grid from '@uxkm/ui/components/Grid.vue';\n</script>\n\n<template>\n  <Grid auto-fit>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n    <div class=\"grid_demo-cell\">auto-fit</div>\n  </Grid>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  ratio: "값",
  gap: "sm",
  autoFit: false,
  autoFill: false
},
  render: withDocsCanvasRender(() => ({
    components: { Grid },
    template: `<Grid auto-fit>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
        <div class="grid_demo-cell">auto-fit</div>
      </Grid>`,
  })),
};

