import React from 'react';
import Grid from './Grid.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  gridClassColumns,
  gridClasses,
  gridPropColumns,
  gridProps,
  gridTokenColumns,
  gridTokens,
} from '@doc-data/grid-api';

const gridChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const gridChildren = [
  { name: 'children', description: '그리드 자식 콘텐츠 (Vue default 슬롯 대응)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: cols-md → colsMd, item-span → itemSpan, auto-fit → autoFit)와 동일한 의미입니다.',
    tables: [{ columns: gridPropColumns, rows: gridProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: gridChildColumns, rows: gridChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: gridClassColumns, rows: gridClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: gridTokenColumns, rows: gridTokens, codeColumn: 'name' }],
  },
];

const playgroundCells = (
  <>
    <div className="grid_demo-cell">1</div>
    <div className="grid_demo-cell">2</div>
    <div className="grid_demo-cell">3</div>
  </>
);

function renderGridPlayground(_args, context) {
  return <Grid {...context.args}>{playgroundCells}</Grid>;
}

const playgroundArgs = {
  cols: 3,
  gap: 'sm',
  autoFit: false,
  autoFill: false,
};

export default {
  title: 'Components/레이아웃/Grid',
  id: 'components-grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'],
      type: { name: 'enum', summary: "'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'" },
    },
    gap: {
      control: 'select',
      options: ['sm', 'lg', 'none'],
      type: { name: 'enum', summary: "'sm' | 'lg' | 'none'" },
    },
    autoFit: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    autoFill: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 .grid에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: renderGridPlayground,
};

export const Parent = {
  name: '부모 클래스로 제어',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ParentExample() {
  return (
    <>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>,
  ),
};

export const Equal = {
  name: '균등 열',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function EqualExample() {
  return (
    <>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>,
  ),
};

export const Ratio = {
  name: '비율 열',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function RatioExample() {
  return (
    <>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>,
  ),
};

export const ItemSpan = {
  name: '자식 일괄 span (12열)',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ItemSpanExample() {
  return (
    <>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>,
  ),
};

export const Child = {
  name: '자식별 span (혼합 레이아웃)',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ChildExample() {
  return (
    <Grid>
      <div className="grid_col-span-8">
        <div className="grid_demo-cell">span 8</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
    </Grid>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Grid>
      <div className="grid_col-span-8">
        <div className="grid_demo-cell">span 8</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
    </Grid>,
  ),
};

export const Gap = {
  name: '간격',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function GapExample() {
  return (
    <>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>,
  ),
};

export const Responsive = {
  name: '반응형 (부모)',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
    </>,
  ),
};

export const Auto = {
  name: '자동 배치',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'grid_auto-fit · grid_auto-fill은 부모에 지정합니다.',
      },
      source: {
        code: `import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function AutoExample() {
  return (
    <Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>,
  ),
};
