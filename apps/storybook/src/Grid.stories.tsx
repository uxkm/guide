import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualGrid from '../../react/src/components/layout/Grid/Grid.jsx';
import ActualGridCol from '../../react/src/components/layout/Grid/GridCol.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
} from './shared/storyArgTypes';

const Grid = ActualGrid as React.ComponentType<any>;
const GridCol = ActualGridCol as React.ComponentType<any>;

type GridStoryArgs = {
  as?: string;
  cols?: number;
  colsMd?: number;
  colsLg?: number;
  gap?: '' | 'sm' | 'lg' | 'none';
  gapRem?: number;
  ratio?: '' | '1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1';
  align?: '' | 'center' | 'end';
  itemSpan?: number;
  itemSpanMd?: number;
  itemSpanLg?: number;
  autoFit?: boolean;
  autoFill?: boolean;
  equalColumns?: boolean;
};

function optionalRange(value: unknown) {
  return typeof value === 'number' && value >= 1 && value <= 12 ? value : undefined;
}

function resolveStoryGap(args: Record<string, unknown>) {
  const gapRem = typeof args.gapRem === 'number' && args.gapRem > 0 ? args.gapRem : 0;
  if (gapRem > 0) return gapRem;
  return args.gap;
}

function gridPropsFromArgs(args: Record<string, unknown>) {
  const cols = optionalRange(args.cols);
  const colsMd = optionalRange(args.colsMd);
  const colsLg = optionalRange(args.colsLg);
  const itemSpan = optionalRange(args.itemSpan);
  const itemSpanMd = optionalRange(args.itemSpanMd);
  const itemSpanLg = optionalRange(args.itemSpanLg);

  return {
    as: typeof args.as === 'string' && args.as ? args.as : 'div',
    gap: resolveStoryGap(args),
    ratio: args.ratio,
    align: args.align,
    autoFit: args.autoFit === true,
    autoFill: args.autoFill === true,
    equalColumns: args.equalColumns === true,
    ...(cols != null ? { cols } : {}),
    ...(colsMd != null ? { colsMd } : {}),
    ...(colsLg != null ? { colsLg } : {}),
    ...(itemSpan != null ? { itemSpan } : {}),
    ...(itemSpanMd != null ? { itemSpanMd } : {}),
    ...(itemSpanLg != null ? { itemSpanLg } : {}),
  };
}

const gridControlKeys = [
  'as',
  'cols',
  'colsMd',
  'colsLg',
  'gap',
  'gapRem',
  'ratio',
  'align',
  'itemSpan',
  'itemSpanMd',
  'itemSpanLg',
  'autoFit',
  'autoFill',
  'equalColumns',
] as const;

const meta = {
  title: '레이아웃/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [...gridControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    as: 'div',
    cols: 3,
    colsMd: 0,
    colsLg: 0,
    gap: 'sm',
    gapRem: 0,
    ratio: '',
    align: '',
    itemSpan: 0,
    itemSpanMd: 0,
    itemSpanLg: 0,
    autoFit: false,
    autoFill: false,
    equalColumns: false,
  },
  argTypes: {
    ...hiddenArgTypes,
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'],
      type: 'string',
      description: '루트 요소',
    },
    cols: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: '균등 열 수 (1~12). 0이면 미적용',
    },
    colsMd: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: 'md 이상 균등 열 수. 0이면 미적용',
    },
    colsLg: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: 'lg 이상 균등 열 수. 0이면 미적용',
    },
    gap: {
      control: 'select',
      options: ['', 'sm', 'lg', 'none'],
      labels: { '': '기본(md)', sm: 'sm', lg: 'lg', none: '없음' },
      type: 'string',
      description: '간격 프리셋 (gapRem이 0일 때)',
    },
    gapRem: {
      control: { type: 'number', min: 0, max: 8, step: 0.25 },
      type: 'number',
      description: '간격 (rem). 0보다 크면 프리셋 대신 사용',
    },
    ratio: {
      control: 'select',
      options: ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'],
      labels: { '': '없음' },
      type: 'string',
      description: '열 너비 비율',
    },
    align: {
      control: 'select',
      options: ['', 'center', 'end'],
      labels: { '': '기본(stretch)' },
      type: 'string',
      description: '교차축 정렬',
    },
    itemSpan: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: '모든 직계 자식의 기본 span. 0이면 미적용',
    },
    itemSpanMd: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: 'md 이상 모든 직계 자식 span. 0이면 미적용',
    },
    itemSpanLg: {
      control: { type: 'number', min: 0, max: 12 },
      type: 'number',
      description: 'lg 이상 모든 직계 자식 span. 0이면 미적용',
    },
    autoFit: { ...booleanControlArg, description: '빈 트랙을 접으며 자동 열 배치' },
    autoFill: { ...booleanControlArg, description: '빈 트랙을 유지하며 자동 열 생성' },
    equalColumns: { ...booleanControlArg, description: '자식 수만큼 동일 너비 열 생성' },
  },
} satisfies Meta<GridStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

const cells = (
  count: number,
  label: string | ((index: number) => string) = (index) => String(index + 1),
) =>
  Array.from({ length: count }, (_, index) => (
    <div className="grid_demo-cell" key={index}>
      {typeof label === 'function' ? label(index) : label}
    </div>
  ));

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const props = gridPropsFromArgs(args);
    const count = props.cols ?? (props.ratio ? String(props.ratio).split('-').length : 3);
    return (
      <Demo>
        <Grid {...props}>{cells(count)}</Grid>
      </Demo>
    );
  },
};

export const BasicLayout: Story = {
  name: '기본 페이지 레이아웃',
  render: () => (
    <Demo>
      <Grid gap="sm">
        <GridCol as="header" span={12} className="grid_demo-cell">
          Header
        </GridCol>
        <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
          Sidebar
        </GridCol>
        <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">
          Main content
        </GridCol>
        <GridCol as="footer" span={12} className="grid_demo-cell">
          Footer
        </GridCol>
      </Grid>
    </Demo>
  ),
};

export const ContentLayout: Story = {
  name: '콘텐츠가 있는 페이지 레이아웃',
  render: () => (
    <Demo>
      <Grid gap="sm">
        <GridCol as="header" span={12} className="grid_demo-cell">
          Header
        </GridCol>
        <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
          Sidebar
        </GridCol>
        <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">
          <h3>Main content</h3>
          <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
          <Grid cols={1} colsLg={2} gap="sm">
            <article className="component_stub">Content section</article>
            <article className="component_stub">Content section</article>
          </Grid>
        </GridCol>
        <GridCol as="footer" span={12} className="grid_demo-cell">
          Footer
        </GridCol>
      </Grid>
    </Demo>
  ),
};

export const TwelveColumns: Story = {
  name: '12열 전체 활용',
  render: () => (
    <Demo>
      <Grid itemSpan={1} gap="sm">
        {cells(12)}
      </Grid>
    </Demo>
  ),
};

export const Parent: Story = {
  name: '부모 클래스로 제어',
  render: () => (
    <Demo>
      <Grid cols={3}>{cells(3, 'grid_cols-3')}</Grid>
      <Grid ratio="2-1">{cells(2, 'grid_ratio-2-1')}</Grid>
      <Grid itemSpan={4}>
        {cells(6, (index) => (index === 0 ? 'grid_item-span-4 (12열 기준 3개/행)' : 'grid_item-span-4'))}
      </Grid>
    </Demo>
  ),
};

export const Equal: Story = {
  name: '균등 열',
  render: () => (
    <Demo>
      <Grid cols={2}>{cells(2, 'cols 2')}</Grid>
      <Grid cols={4}>{cells(4, 'cols 4')}</Grid>
    </Demo>
  ),
};

export const Ratio: Story = {
  name: '비율 열',
  render: () => (
    <Demo>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </Demo>
  ),
};

export const ItemSpan: Story = {
  name: '자식 일괄 span (12열)',
  render: () => (
    <Demo>
      <Grid itemSpan={6}>{cells(4, 'span 6')}</Grid>
      <Grid itemSpan={3}>{cells(4, 'span 3')}</Grid>
    </Demo>
  ),
};

export const Child: Story = {
  name: '자식별 span (혼합 레이아웃)',
  render: () => (
    <Demo>
      <Grid>
        <GridCol span={8}>
          <div className="grid_demo-cell">span 8</div>
        </GridCol>
        <GridCol span={4}>
          <div className="grid_demo-cell">span 4</div>
        </GridCol>
        {Array.from({ length: 3 }, (_, index) => (
          <GridCol span={4} key={index}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>
        ))}
      </Grid>
    </Demo>
  ),
};

export const Gap: Story = {
  name: '간격',
  render: () => (
    <Demo>
      <Grid cols={3} gap="sm">
        {cells(3, 'gap sm')}
      </Grid>
      <Grid cols={3} gap="lg">
        {cells(3, 'gap lg')}
      </Grid>
      <Grid cols={3} gap={1.5}>
        {cells(3, 'gap 1.5rem')}
      </Grid>
    </Demo>
  ),
};

export const Responsive: Story = {
  name: '반응형 (부모)',
  render: () => (
    <Demo>
      <Grid cols={1} colsMd={2} colsLg={3}>
        {cells(3, '1 → md 2 → lg 3열')}
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        {cells(3, 'span 12 → md 6 → lg 4')}
      </Grid>
      <Grid>
        <GridCol span={12} spanMd={8} spanLg={9}>
          <div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
        </GridCol>
        <GridCol span={12} spanMd={4} spanLg={3}>
          <div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
        </GridCol>
      </Grid>
    </Demo>
  ),
};

export const Auto: Story = {
  name: '자동 배치',
  render: () => (
    <Demo>
      <Grid autoFit>{cells(6, 'auto-fit')}</Grid>
      <Grid autoFill>{cells(3, 'auto-fill')}</Grid>
      <Grid equalColumns>{cells(3, 'equal')}</Grid>
    </Demo>
  ),
};
