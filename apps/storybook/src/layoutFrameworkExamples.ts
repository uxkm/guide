import type { FrameworkExample } from './FrameworkCode';

const gridHtmlComponent = `<!-- grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. -->
<div class="grid grid_cols-3" data-component="Grid">
  <!-- 모든 자식은 부모가 만든 Grid 트랙에 자동으로 배치됩니다. -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- 자식마다 폭이 다를 때만 grid_col-span-* 클래스를 지정합니다. -->
<div class="grid" data-component="Grid">
  <div class="grid_col-span-8" data-component="GridCol">8 columns</div>
  <div class="grid_col-span-4" data-component="GridCol">4 columns</div>
</div>`;

const gridReactComponent = `// 12열 Grid에서 사용할 수 있도록 숫자를 1~12 범위로 제한합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const GAPS = new Set(['', 'sm', 'lg', 'none']); // 지원하는 간격 이름입니다.
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 열 비율입니다.
const ALIGNS = new Set(['', 'center', 'end']); // 기본 stretch 외에 선택할 수 있는 정렬입니다.

export function Grid({
  as: Root = 'div', // Grid의 루트 요소 또는 컴포넌트를 지정합니다.

  cols, // 기본 화면의 균등 열 수를 1~12로 지정합니다.
  colsMd, // md 이상에서 적용할 균등 열 수입니다.
  colsLg, // lg 이상에서 적용할 균등 열 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // Grid 항목 사이의 간격을 지정합니다.
  ratio = '', // 미리 정의된 열 너비 비율을 선택합니다.
  align = '', // 교차축에서 항목의 정렬 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12열 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  autoFit = false, // 빈 트랙을 접으며 가능한 수만큼 열을 자동 배치합니다.
  autoFill = false, // 빈 트랙을 유지하며 가능한 수만큼 열을 자동 생성합니다.
  equalColumns = false, // 자식 수만큼 동일한 너비의 열을 생성합니다.

  children = 'Grid', // Grid 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns; // 기본 구간의 최종 열 수입니다.
  const resolvedColsMd = colsMd ?? columnsMd; // md 구간의 최종 열 수입니다.
  const resolvedColsLg = colsLg ?? columnsLg; // lg 구간의 최종 열 수입니다.

  // 기본·반응형 열, 간격, 비율, span, 자동 배치, 정렬 클래스를 조합합니다.
  const classes = [
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols) && \`grid_cols-\${range(resolvedCols)}\`, // 기본 균등 열 수입니다.
    range(resolvedColsMd) && \`grid_cols-md-\${range(resolvedColsMd)}\`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg) && \`grid_cols-lg-\${range(resolvedColsLg)}\`, // lg 이상 균등 열 수입니다.

    GAPS.has(gap) && gap && \`grid_gap-\${gap}\`, // 검증된 간격 클래스입니다.
    RATIOS.has(ratio) && ratio && \`grid_ratio-\${ratio}\`, // 검증된 열 비율 클래스입니다.

    range(itemSpan) && \`grid_item-span-\${range(itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && \`grid_item-span-md-\${range(itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && \`grid_item-span-lg-\${range(itemSpanLg)}\`, // 모든 자식의 lg span입니다.

    autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    ALIGNS.has(align) && align && \`grid_align-\${align}\`, // 검증된 항목 정렬 클래스입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="Grid" {...props}>{children}</Root>;
}

export function GridCol({
  as: Root = 'div', // GridCol의 루트 요소 또는 컴포넌트를 지정합니다.

  span, // 기본 화면에서 차지할 열 수를 1~12로 지정합니다.
  spanMd, // md 이상에서 차지할 열 수입니다.
  spanLg, // lg 이상에서 차지할 열 수입니다.

  children, // GridCol 내부에 배치할 콘텐츠입니다.
  className = '', // span 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 기본·md·lg 구간의 개별 span 클래스와 사용자 클래스를 조합합니다.
  const classes = [
    range(span) && \`grid_col-span-\${range(span)}\`, // 기본 구간에서 차지할 열 수입니다.
    range(spanMd) && \`grid_col-span-md-\${range(spanMd)}\`, // md 이상에서 차지할 열 수입니다.
    range(spanLg) && \`grid_col-span-lg-\${range(spanLg)}\`, // lg 이상에서 차지할 열 수입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="GridCol" {...props}>{children}</Root>;
}`;

const gridVueComponent = `<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Grid 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmGrid', inheritAttrs: false });

// 열, 간격, 비율, span, 자동 배치와 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Grid의 루트 요소 또는 컴포넌트를 지정합니다.

  cols: [String, Number], // 기본 화면의 균등 열 수를 1~12로 지정합니다.
  colsMd: [String, Number], // md 이상에서 적용할 균등 열 수입니다.
  colsLg: [String, Number], // lg 이상에서 적용할 균등 열 수입니다.
  columns: [String, Number], // cols의 이전 호환 이름입니다.
  columnsMd: [String, Number], // colsMd의 이전 호환 이름입니다.
  columnsLg: [String, Number], // colsLg의 이전 호환 이름입니다.

  gap: { type: String, default: '' }, // Grid 항목 사이의 간격을 지정합니다.
  ratio: { type: String, default: '' }, // 미리 정의된 열 너비 비율을 선택합니다.
  align: { type: String, default: '' }, // 교차축에서 항목의 정렬 방식을 지정합니다.

  itemSpan: [String, Number], // 모든 직계 자식에 적용할 기본 12열 span입니다.
  itemSpanMd: [String, Number], // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg: [String, Number], // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  autoFit: Boolean, // 빈 트랙을 접으며 가능한 수만큼 열을 자동 배치합니다.
  autoFill: Boolean, // 빈 트랙을 유지하며 가능한 수만큼 열을 자동 생성합니다.
  equalColumns: Boolean // 자식 수만큼 동일한 너비의 열을 생성합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 간격 이름입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 열 비율입니다.
const aligns = new Set(['', 'center', 'end']); // 기본 stretch 외에 선택할 수 있는 정렬입니다.

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns); // 기본 구간의 최종 열 수입니다.
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd); // md 구간의 최종 열 수입니다.
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg); // lg 구간의 최종 열 수입니다.

// 상태에 맞는 기본·반응형 Grid 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() => [
  'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
  range(resolvedCols.value) && \`grid_cols-\${range(resolvedCols.value)}\`, // 기본 균등 열 수입니다.
  range(resolvedColsMd.value) && \`grid_cols-md-\${range(resolvedColsMd.value)}\`, // md 이상 균등 열 수입니다.
  range(resolvedColsLg.value) && \`grid_cols-lg-\${range(resolvedColsLg.value)}\`, // lg 이상 균등 열 수입니다.

  gaps.has(props.gap) && props.gap && \`grid_gap-\${props.gap}\`, // 검증된 간격 클래스입니다.
  ratios.has(props.ratio) && props.ratio && \`grid_ratio-\${props.ratio}\`, // 검증된 열 비율 클래스입니다.

  range(props.itemSpan) && \`grid_item-span-\${range(props.itemSpan)}\`, // 모든 자식의 기본 span입니다.
  range(props.itemSpanMd) && \`grid_item-span-md-\${range(props.itemSpanMd)}\`, // 모든 자식의 md span입니다.
  range(props.itemSpanLg) && \`grid_item-span-lg-\${range(props.itemSpanLg)}\`, // 모든 자식의 lg span입니다.

  props.autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
  props.autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
  props.equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

  aligns.has(props.align) && props.align && \`grid_align-\${props.align}\`, // 검증된 항목 정렬 클래스입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean)); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Grid">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Grid</slot>
  </component>
</template>

<!-- GridCol.vue -->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 GridCol 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmGridCol', inheritAttrs: false });

// 루트 요소와 기본·md·lg 구간의 개별 span 값을 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // GridCol의 루트 요소 또는 컴포넌트를 지정합니다.

  span: [String, Number], // 기본 화면에서 차지할 열 수를 1~12로 지정합니다.
  spanMd: [String, Number], // md 이상에서 차지할 열 수입니다.
  spanLg: [String, Number] // lg 이상에서 차지할 열 수입니다.
});

// 선언하지 않은 속성을 수집하고 span을 12열 범위로 제한합니다.
const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 반응형 span 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() => [
  range(props.span) && \`grid_col-span-\${range(props.span)}\`, // 기본 구간에서 차지할 열 수입니다.
  range(props.spanMd) && \`grid_col-span-md-\${range(props.spanMd)}\`, // md 이상에서 차지할 열 수입니다.
  range(props.spanLg) && \`grid_col-span-lg-\${range(props.spanLg)}\`, // lg 이상에서 차지할 열 수입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean)); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="GridCol">
    <!-- 호출 위치에서 전달한 GridCol 콘텐츠를 렌더링합니다. -->
    <slot />
  </component>
</template>`;

export const gridComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Grid/Grid.html', code: gridHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Grid/grid.njk', code: `{# Grid와 GridCol 구현 #}\n${gridHtmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Grid/Grid.vue · GridCol.vue', code: gridVueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/grid → Grid.vue · GridCol.vue', code: gridVueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Grid/Grid.jsx · GridCol.jsx', code: gridReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/grid → Grid.jsx · GridCol.jsx', code: gridReactComponent }
];

const flexHtmlComponent = `<!-- flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. -->
<div class="flex flex_row" data-component="Flex">
  <!-- 직계 자식은 Flex 항목으로 한 방향에 배치됩니다. -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- 자식마다 너비나 확장 방식이 다를 때만 FlexItem 클래스를 지정합니다. -->
<div class="flex flex_wrap" data-component="Flex">
  <div class="flex_item-span-8" data-component="FlexItem">8 / 12</div>
  <div class="flex_item-span-4 flex_fit" data-component="FlexItem">4 / 12</div>
</div>`;

const flexReactComponent = `// 12단위 Flex 너비와 순서에 사용할 숫자를 1~12 범위로 제한합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const DIRECTIONS = new Set(['', 'row', 'col', 'column']); // 지원하는 배치 방향입니다.
const GAPS = new Set(['', 'sm', 'lg', 'none']); // 지원하는 항목 간격입니다.
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 항목 너비 비율입니다.
const ALIGNS = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']); // 지원하는 교차축 정렬입니다.
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']); // 지원하는 주축 정렬입니다.

export function Flex({
  as: Root = 'div', // Flex의 루트 요소 또는 컴포넌트를 지정합니다.

  direction = 'row', // 기본 화면의 배치 방향을 지정합니다.
  directionMd = '', // md 이상에서 적용할 배치 방향입니다.
  directionLg = '', // lg 이상에서 적용할 배치 방향입니다.
  wrap = false, // 항목이 한 줄을 넘으면 다음 줄로 배치합니다.

  cols, // 기본 화면에서 한 행에 배치할 균등 항목 수를 지정합니다.
  colsMd, // md 이상에서 적용할 균등 항목 수입니다.
  colsLg, // lg 이상에서 적용할 균등 항목 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // Flex 항목 사이의 간격을 지정합니다.
  ratio = '', // 미리 정의된 항목 너비 비율을 선택합니다.
  align = 'stretch', // 교차축에서 항목의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 항목을 배치하는 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12단위 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  equal = false, // 모든 직계 자식을 동일한 너비로 확장합니다.
  autoFit = false, // 최소 너비를 기준으로 가능한 수만큼 항목을 자동 배치합니다.

  children = 'Flex', // Flex 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
  const directionClass = (value, breakpoint = '') => value && \`flex_\${value === 'column' ? 'col' : value}\${breakpoint}\`;

  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns;
  const resolvedColsMd = colsMd ?? columnsMd;
  const resolvedColsLg = colsLg ?? columnsLg;

  // 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
    DIRECTIONS.has(direction) && directionClass(direction), // 기본 배치 방향입니다.
    DIRECTIONS.has(directionMd) && directionClass(directionMd, '-md'), // md 이상 배치 방향입니다.
    DIRECTIONS.has(directionLg) && directionClass(directionLg, '-lg'), // lg 이상 배치 방향입니다.
    wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

    GAPS.has(gap) && gap && \`flex_gap-\${gap}\`, // 검증된 항목 간격입니다.
    range(resolvedCols) && \`flex_cols-\${range(resolvedCols)}\`, // 기본 균등 항목 수입니다.
    range(resolvedColsMd) && \`flex_cols-md-\${range(resolvedColsMd)}\`, // md 이상 균등 항목 수입니다.
    range(resolvedColsLg) && \`flex_cols-lg-\${range(resolvedColsLg)}\`, // lg 이상 균등 항목 수입니다.
    RATIOS.has(ratio) && ratio && \`flex_ratio-\${ratio}\`, // 검증된 항목 너비 비율입니다.

    range(itemSpan) && \`flex_items-span-\${range(itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && \`flex_items-span-md-\${range(itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && \`flex_items-span-lg-\${range(itemSpanLg)}\`, // 모든 자식의 lg span입니다.
    equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
    autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

    ALIGNS.has(align) && align && \`flex_align-\${align}\`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.has(justify) && justify && \`flex_justify-\${justify}\`, // 검증된 주축 정렬입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' ');

  return <Root className={classes} data-component="Flex" {...props}>{children}</Root>;
}

export function FlexItem({
  as: Root = 'div', // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.
  span, // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd, // md 이상에서 차지할 12단위 너비입니다.
  spanLg, // lg 이상에서 차지할 12단위 너비입니다.
  grow = false, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor = 1, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit = false, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align = '', // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order, // 화면에 표시할 순서를 1~12로 지정합니다.
  children, // FlexItem 내부에 배치할 콘텐츠입니다.
  className = '', // 상태 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
  const resolvedGrow = grow && Number(growFactor) === 2 ? 'flex_grow-2' : grow ? 'flex_grow' : '';
  const classes = [
    range(span) && \`flex_item-span-\${range(span)}\`, // 기본 구간에서 차지할 너비입니다.
    range(spanMd) && \`flex_item-span-md-\${range(spanMd)}\`, // md 이상에서 차지할 너비입니다.
    range(spanLg) && \`flex_item-span-lg-\${range(spanLg)}\`, // lg 이상에서 차지할 너비입니다.
    resolvedGrow, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    ALIGNS.has(align) && align && \`flex_self-\${align}\`, // 검증된 개별 교차축 정렬입니다.
    range(order) && \`flex_order-\${range(order)}\`, // 검증된 화면 표시 순서입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' ');

  return <Root className={classes} data-component="FlexItem" {...props}>{children}</Root>;
}`;

const flexVueComponent = `<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Flex 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFlex', inheritAttrs: false });

// 방향, 줄바꿈, 크기, 간격과 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Flex의 루트 요소 또는 컴포넌트를 지정합니다.

  direction: { type: String, default: 'row' }, // 기본 화면의 배치 방향을 지정합니다.
  directionMd: { type: String, default: '' }, // md 이상에서 적용할 배치 방향입니다.
  directionLg: { type: String, default: '' }, // lg 이상에서 적용할 배치 방향입니다.
  wrap: Boolean, // 항목이 한 줄을 넘으면 다음 줄로 배치합니다.

  cols: [String, Number], // 기본 화면에서 한 행에 배치할 균등 항목 수를 지정합니다.
  colsMd: [String, Number], // md 이상에서 적용할 균등 항목 수입니다.
  colsLg: [String, Number], // lg 이상에서 적용할 균등 항목 수입니다.
  columns: [String, Number], // cols의 이전 호환 이름입니다.
  columnsMd: [String, Number], // colsMd의 이전 호환 이름입니다.
  columnsLg: [String, Number], // colsLg의 이전 호환 이름입니다.

  gap: { type: String, default: '' }, // Flex 항목 사이의 간격을 지정합니다.
  ratio: { type: String, default: '' }, // 미리 정의된 항목 너비 비율을 선택합니다.
  align: { type: String, default: 'stretch' }, // 교차축에서 항목의 정렬 방식을 지정합니다.
  justify: { type: String, default: '' }, // 주축에서 항목을 배치하는 방식을 지정합니다.

  itemSpan: [String, Number], // 모든 직계 자식에 적용할 기본 12단위 span입니다.
  itemSpanMd: [String, Number], // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg: [String, Number], // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  equal: Boolean, // 모든 직계 자식을 동일한 너비로 확장합니다.
  autoFit: Boolean // 최소 너비를 기준으로 가능한 수만큼 항목을 자동 배치합니다.
});

const attrs = useAttrs(); // 선언하지 않은 class와 HTML 속성을 수집합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const directions = new Set(['', 'row', 'col', 'column']); // 지원하는 배치 방향입니다.
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 항목 간격입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 항목 너비 비율입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']); // 지원하는 주축 정렬입니다.
const directionClass = (value, breakpoint = '') => value && \`flex_\${value === 'column' ? 'col' : value}\${breakpoint}\`;

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns);
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd);
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg);

// 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
const classes = computed(() => [
  'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
  directions.has(props.direction) && directionClass(props.direction), // 기본 배치 방향입니다.
  directions.has(props.directionMd) && directionClass(props.directionMd, '-md'), // md 이상 배치 방향입니다.
  directions.has(props.directionLg) && directionClass(props.directionLg, '-lg'), // lg 이상 배치 방향입니다.
  props.wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.
  gaps.has(props.gap) && props.gap && \`flex_gap-\${props.gap}\`, // 검증된 항목 간격입니다.
  range(resolvedCols.value) && \`flex_cols-\${range(resolvedCols.value)}\`, // 기본 균등 항목 수입니다.
  range(resolvedColsMd.value) && \`flex_cols-md-\${range(resolvedColsMd.value)}\`, // md 이상 균등 항목 수입니다.
  range(resolvedColsLg.value) && \`flex_cols-lg-\${range(resolvedColsLg.value)}\`, // lg 이상 균등 항목 수입니다.
  ratios.has(props.ratio) && props.ratio && \`flex_ratio-\${props.ratio}\`, // 검증된 항목 너비 비율입니다.
  range(props.itemSpan) && \`flex_items-span-\${range(props.itemSpan)}\`, // 모든 자식의 기본 span입니다.
  range(props.itemSpanMd) && \`flex_items-span-md-\${range(props.itemSpanMd)}\`, // 모든 자식의 md span입니다.
  range(props.itemSpanLg) && \`flex_items-span-lg-\${range(props.itemSpanLg)}\`, // 모든 자식의 lg span입니다.
  props.equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
  props.autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.
  aligns.has(props.align) && props.align && \`flex_align-\${props.align}\`, // 검증된 교차축 정렬입니다.
  justifies.has(props.justify) && props.justify && \`flex_justify-\${props.justify}\`, // 검증된 주축 정렬입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean));
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Flex"><slot>Flex</slot></component>
</template>

<!-- FlexItem.vue -->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFlexItem', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.
  span: [String, Number], // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd: [String, Number], // md 이상에서 차지할 12단위 너비입니다.
  spanLg: [String, Number], // lg 이상에서 차지할 12단위 너비입니다.
  grow: Boolean, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor: { type: [String, Number], default: 1 }, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit: Boolean, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align: { type: String, default: '' }, // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order: [String, Number] // 화면에 표시할 순서를 1~12로 지정합니다.
});

const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const aligns = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);
const resolvedGrow = computed(() => props.grow && Number(props.growFactor) === 2 ? 'flex_grow-2' : props.grow ? 'flex_grow' : '');
const classes = computed(() => [
  range(props.span) && \`flex_item-span-\${range(props.span)}\`, // 기본 구간에서 차지할 너비입니다.
  range(props.spanMd) && \`flex_item-span-md-\${range(props.spanMd)}\`, // md 이상에서 차지할 너비입니다.
  range(props.spanLg) && \`flex_item-span-lg-\${range(props.spanLg)}\`, // lg 이상에서 차지할 너비입니다.
  resolvedGrow.value, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
  props.fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
  aligns.has(props.align) && props.align && \`flex_self-\${props.align}\`, // 검증된 개별 교차축 정렬입니다.
  range(props.order) && \`flex_order-\${range(props.order)}\`, // 검증된 화면 표시 순서입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="FlexItem"><slot /></component>
</template>`;

export const flexComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Flex/Flex.html', code: flexHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Flex/flex.njk', code: `{# Flex와 FlexItem 구현 #}\n${flexHtmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Flex/Flex.vue · FlexItem.vue', code: flexVueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/flex → Flex.vue · FlexItem.vue', code: flexVueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Flex/Flex.jsx · FlexItem.jsx', code: flexReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/flex → Flex.jsx · FlexItem.jsx', code: flexReactComponent }
];

const dividerHtmlComponent = `<!-- 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. -->
<hr class="divider" data-component="Divider" />

<!-- 점선은 divider_dashed를 함께 지정합니다. -->
<hr class="divider divider_dashed" data-component="Divider" />

<!-- 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. -->
<div class="divider" data-component="Divider">섹션 제목</div>

<!-- plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. -->
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

<!-- 세로 구분선은 장식용이므로 span에 aria-hidden을 지정합니다. -->
<span class="divider divider_vertical" data-component="Divider" aria-hidden="true"></span>`;

const dividerReactComponent = `// 레이블 정렬과 루트 태그로 허용하는 값만 CSS·요소 선택에 반영합니다.
const ORIENTATIONS = new Set(['', 'left', 'right']); // 지원하는 레이블 수평 위치입니다.
const TAGS = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 이름입니다.

export function Divider({
  as, // tag보다 우선하는 루트 요소 또는 컴포넌트입니다.
  tag = 'auto', // auto면 콘텐츠·방향에 따라 hr·div·span을 선택합니다.
  vertical = false, // 세로 구분선으로 렌더링합니다.
  dashed = false, // 점선 스타일을 적용합니다.
  plain = false, // 레이블 굵기를 일반 두께로 낮춥니다.
  orient, // 레이블의 수평 위치입니다.
  orientation = '', // orient의 이전 호환 이름입니다.
  label, // children 대신 사용할 레이블 텍스트입니다.

  children, // 레이블로 사용할 내부 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // children이 있으면 우선하고, 없으면 label을 레이블로 사용합니다.
  const content = children ?? label;
  // orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
  const resolvedOrient = orient ?? orientation;
  // 허용되지 않은 tag 값은 auto로 되돌립니다.
  const resolvedTag = TAGS.has(tag) ? tag : 'auto';

  // as > 명시적 tag > 세로면 span, 레이블이면 div, 그 외 hr 순으로 루트를 결정합니다.
  const Root = as || (resolvedTag !== 'auto' ? resolvedTag : vertical ? 'span' : content ? 'div' : 'hr');

  // 방향·점선·레이블 굵기·정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'divider', // Divider 스타일을 활성화하는 필수 클래스입니다.
    vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    dashed && 'divider_dashed', // 점선 변형입니다.
    plain && 'divider_plain', // 레이블 굵기를 낮춥니다.
    ORIENTATIONS.has(resolvedOrient) && resolvedOrient && \`divider_orient-\${resolvedOrient}\`, // 검증된 레이블 위치입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 세로선은 장식이므로 접근성 트리에서 제외합니다.
  const accessibility = vertical ? { 'aria-hidden': 'true' } : {};

  // hr는 자식을 두지 않고, 그 외 루트에는 레이블 콘텐츠를 전달합니다.
  return <Root className={classes} data-component="Divider" {...accessibility} {...props}>{Root === 'hr' ? null : content}</Root>;
}

export default Divider;`;

const dividerVueComponent = `<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 Divider 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDivider', inheritAttrs: false });

// 루트 태그, 방향, 점선, 레이블 굵기·위치와 텍스트를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined }, // tag보다 우선하는 루트 요소 또는 컴포넌트입니다.
  tag: { type: String, default: 'auto' }, // auto면 콘텐츠·방향에 따라 hr·div·span을 선택합니다.
  vertical: Boolean, // 세로 구분선으로 렌더링합니다.
  dashed: Boolean, // 점선 스타일을 적용합니다.
  plain: Boolean, // 레이블 굵기를 일반 두께로 낮춥니다.
  orient: { type: String, default: undefined }, // 레이블의 수평 위치입니다.
  orientation: { type: String, default: '' }, // orient의 이전 호환 이름입니다.
  label: String // 기본 slot 대신 사용할 레이블 텍스트입니다.
});

// 선언하지 않은 class와 HTML 속성, 기본 slot 유무를 수집합니다.
const attrs = useAttrs();
const slots = useSlots();

// 레이블 정렬과 루트 태그로 허용하는 값만 반영합니다.
const orientations = new Set(['', 'left', 'right']); // 지원하는 레이블 수평 위치입니다.
const tags = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 이름입니다.

// 기본 slot 또는 label이 있으면 레이블형으로 취급합니다.
const hasContent = computed(() => Boolean(slots.default) || Boolean(props.label));
// orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
const resolvedOrient = computed(() => props.orient ?? props.orientation);
// 허용되지 않은 tag 값은 auto로 되돌립니다.
const resolvedTag = computed(() => tags.has(props.tag) ? props.tag : 'auto');

// as > 명시적 tag > 세로면 span, 레이블이면 div, 그 외 hr 순으로 루트를 결정합니다.
const rootTag = computed(() => props.as || (resolvedTag.value !== 'auto' ? resolvedTag.value : props.vertical ? 'span' : hasContent.value ? 'div' : 'hr'));

// 방향·점선·레이블 굵기·정렬 상태와 사용자 정의 class를 조합합니다.
const classes = computed(() => [
  'divider', // Divider 스타일을 활성화하는 필수 클래스입니다.
  props.vertical && 'divider_vertical', // 세로 구분선 변형입니다.
  props.dashed && 'divider_dashed', // 점선 변형입니다.
  props.plain && 'divider_plain', // 레이블 굵기를 낮춥니다.
  orientations.has(resolvedOrient.value) && resolvedOrient.value && \`divider_orient-\${resolvedOrient.value}\`, // 검증된 레이블 위치입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean)); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<template>
  <!-- 루트 태그를 결정하고 속성·클래스·세로선 aria-hidden을 전달합니다. -->
  <component
    :is="rootTag" v-bind="attrs" :class="classes" data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <!-- hr에는 자식을 두지 않고, 그 외에는 slot 또는 label을 렌더링합니다. -->
    <slot v-if="rootTag !== 'hr'">{{ label }}</slot>
  </component>
</template>`;

export const dividerComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Divider/Divider.html', code: dividerHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Divider/divider.njk', code: `{# Divider 구현 #}\n${dividerHtmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Divider/Divider.vue', code: dividerVueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/divider → Divider.vue', code: dividerVueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Divider/Divider.jsx', code: dividerReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/divider → Divider.jsx', code: dividerReactComponent }
];

const spaceHtmlComponent = `<!-- space 클래스로 기본 inline-flex 간격 컨테이너를 만듭니다. 기본 간격은 md입니다. -->
<div class="space" data-component="Space">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- gap·방향·줄바꿈·너비·정렬 변형 클래스를 조합합니다. -->
<div class="space space_gap-sm space_vertical space_align-stretch" data-component="Space">
  <div>첫 번째</div>
  <div>두 번째</div>
</div>

<!-- 부모 너비를 채우고 줄바꿈하려면 space_block과 space_wrap을 함께 지정합니다. -->
<div class="space space_block space_wrap space_justify-between" data-component="Space">
  <div>시작</div>
  <div>끝</div>
</div>`;

const spaceReactComponent = `// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const SIZES = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const ALIGNS = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

export function Space({
  as: Root = 'div', // Space의 루트 요소 또는 컴포넌트를 지정합니다.

  gap, // 자식 사이 간격을 지정합니다.
  size = '', // gap의 이전 호환 이름입니다.
  vertical = false, // 자식을 세로로 배치합니다.
  wrap = false, // 자식 줄바꿈을 허용합니다.
  block = false, // 부모 너비를 채우는 block flex로 표시합니다.

  align = '', // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 자식을 배치하는 방식을 지정합니다.

  children = 'Space', // Space 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
  const resolvedSize = (gap ?? size) || 'md';

  // 간격·방향·줄바꿈·너비·정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    SIZES.has(resolvedSize) && resolvedSize !== 'md' && \`space_gap-\${resolvedSize}\`, // md가 아닐 때만 간격 클래스를 붙입니다.
    vertical && 'space_vertical', // 세로 배치 변형입니다.
    wrap && 'space_wrap', // 줄바꿈 변형입니다.
    block && 'space_block', // 전체 너비 block flex 변형입니다.
    ALIGNS.has(align) && align && \`space_align-\${align}\`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.has(justify) && justify && \`space_justify-\${justify}\`, // 검증된 주축 정렬입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="Space" {...props}>{children}</Root>;
}

export default Space;`;

const spaceVueComponent = `<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Space 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSpace', inheritAttrs: false });

// 간격, 방향, 줄바꿈, 너비와 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Space의 루트 요소 또는 컴포넌트를 지정합니다.
  gap: { type: String, default: undefined }, // 자식 사이 간격을 지정합니다.
  size: { type: String, default: '' }, // gap의 이전 호환 이름입니다.
  vertical: Boolean, // 자식을 세로로 배치합니다.
  wrap: Boolean, // 자식 줄바꿈을 허용합니다.
  block: Boolean, // 부모 너비를 채우는 block flex로 표시합니다.
  align: { type: String, default: '' }, // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify: { type: String, default: '' } // 주축에서 자식을 배치하는 방식을 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

// gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
const resolvedSize = computed(() => (props.gap ?? props.size) || 'md');

// 간격·방향·줄바꿈·너비·정렬 상태와 사용자 정의 class를 조합합니다.
const classes = computed(() => [
  'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
  sizes.has(resolvedSize.value) && resolvedSize.value !== 'md' && \`space_gap-\${resolvedSize.value}\`, // md가 아닐 때만 간격 클래스를 붙입니다.
  props.vertical && 'space_vertical', // 세로 배치 변형입니다.
  props.wrap && 'space_wrap', // 줄바꿈 변형입니다.
  props.block && 'space_block', // 전체 너비 block flex 변형입니다.
  aligns.has(props.align) && props.align && \`space_align-\${props.align}\`, // 검증된 교차축 정렬입니다.
  justifies.has(props.justify) && props.justify && \`space_justify-\${props.justify}\`, // 검증된 주축 정렬입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean)); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Space">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Space</slot>
  </component>
</template>`;

export const spaceComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Space/Space.html', code: spaceHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Space/space.njk', code: `{# Space 구현 #}\n${spaceHtmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Space/Space.vue', code: spaceVueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/space → Space.vue', code: spaceVueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Space/Space.jsx', code: spaceReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/space → Space.jsx', code: spaceReactComponent }
];

type Definition = { body: string; html?: string };

function reactBody(body: string) {
  return body
    .replace(/class=/g, 'className=')
    .replace(/columns-md=/g, 'columnsMd=')
    .replace(/columns-lg=/g, 'columnsLg=')
    .replace(/cols-md=/g, 'colsMd=')
    .replace(/cols-lg=/g, 'colsLg=')
    .replace(/item-span-md=/g, 'itemSpanMd=')
    .replace(/item-span-lg=/g, 'itemSpanLg=')
    .replace(/item-span=/g, 'itemSpan=')
    .replace(/span-md=/g, 'spanMd=')
    .replace(/span-lg=/g, 'spanLg=')
    .replace(/grow-factor=/g, 'growFactor=')
    .replace(/style="min-width: 8rem;"/g, "style={{ minWidth: '8rem' }}")
    .replace(/style="min-height: 5rem; padding: 1rem;"/g, "style={{ minHeight: '5rem', padding: '1rem' }}")
    .replace(/style="padding-block: 2rem;"/g, "style={{ paddingBlock: '2rem' }}")
    .replace(/style="padding: 1rem;"/g, "style={{ padding: '1rem' }}")
    .replace(/auto-fit/g, 'autoFit')
    .replace(/auto-fill/g, 'autoFill')
    .replace(/equal-columns/g, 'equalColumns')
    .replace(/direction-md=/g, 'directionMd=')
    .replace(/direction-lg=/g, 'directionLg=');
}

function attrs(source: string) {
  const result: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    result[key] = value ?? true;
    return '';
  });
  return result;
}

function componentHtml(body: string) {
  const stack: string[] = [];
  return body.replace(/<(\/)?(Grid|GridCol|Flex|FlexItem)\b([^>]*)>/g, (_, closing: string, name: string, source: string) => {
    if (closing) return `</${stack.pop() || 'div'}>`;
    const props = attrs(source);
    const tag = typeof props.as === 'string' ? props.as : 'div';
    const classes: Array<string | boolean> = [];
    if (name === 'Grid') classes.push('grid', props.cols && `grid_cols-${props.cols}`, props['cols-md'] && `grid_cols-md-${props['cols-md']}`, props['cols-lg'] && `grid_cols-lg-${props['cols-lg']}`, props.ratio && `grid_ratio-${props.ratio}`, props['item-span'] && `grid_item-span-${props['item-span']}`, props['item-span-md'] && `grid_item-span-md-${props['item-span-md']}`, props['item-span-lg'] && `grid_item-span-lg-${props['item-span-lg']}`, props.gap && `grid_gap-${props.gap}`, props['auto-fit'] && 'grid_auto-fit', props['auto-fill'] && 'grid_auto-fill', props['equal-columns'] && 'grid_equal-columns', props.align && `grid_align-${props.align}`);
    if (name === 'GridCol') classes.push(props.span && `grid_col-span-${props.span}`, props['span-md'] && `grid_col-span-md-${props['span-md']}`, props['span-lg'] && `grid_col-span-lg-${props['span-lg']}`);
    if (name === 'Flex') classes.push('flex', `flex_${props.direction === 'column' ? 'col' : props.direction || 'row'}`, props['direction-md'] && `flex_${props['direction-md'] === 'column' ? 'col' : props['direction-md']}-md`, props['direction-lg'] && `flex_${props['direction-lg'] === 'column' ? 'col' : props['direction-lg']}-lg`, props.wrap && 'flex_wrap', props.cols && `flex_cols-${props.cols}`, props['cols-md'] && `flex_cols-md-${props['cols-md']}`, props['cols-lg'] && `flex_cols-lg-${props['cols-lg']}`, props.ratio && `flex_ratio-${props.ratio}`, props['item-span'] && `flex_items-span-${props['item-span']}`, props['item-span-md'] && `flex_items-span-md-${props['item-span-md']}`, props['item-span-lg'] && `flex_items-span-lg-${props['item-span-lg']}`, props.gap && `flex_gap-${props.gap}`, `flex_align-${props.align || 'stretch'}`, props.justify && `flex_justify-${props.justify}`, props.equal && 'flex_equal', props['auto-fit'] && 'flex_auto-fit');
    if (name === 'FlexItem') classes.push(props.span && `flex_item-span-${props.span}`, props['span-md'] && `flex_item-span-md-${props['span-md']}`, props['span-lg'] && `flex_item-span-lg-${props['span-lg']}`, props.grow && (props['grow-factor'] === '2' ? 'flex_grow-2' : 'flex_grow'), props.fit && 'flex_fit', props.align && `flex_self-${props.align}`, props.order && `flex_order-${props.order}`);
    if (typeof props.class === 'string') classes.push(props.class);
    stack.push(tag);
    return `<${tag} class="${classes.filter(Boolean).join(' ')}" data-component="${name}">`;
  });
}

function webSquareGroups(html: string, key: string, prefix: string, components: string[]) {
  const elementStack: Array<{ name: string; component: boolean }> = [];
  let sequence = 0;
  const markup = html.replace(/<(\/)?([\w-]+)\b([^>]*)>/g, (tag, closing: string, name: string, source: string) => {
    if (closing) {
      const opened = elementStack.pop();
      return opened?.component && opened.name === name ? '</w2:group>' : tag;
    }
    const componentName = source.match(/\sdata-component="([^"]+)"/)?.[1];
    const component = Boolean(componentName && components.includes(componentName));
    elementStack.push({ name, component });
    if (!component) return tag;
    sequence += 1;
    const className = source.match(/\sclass="([^"]*)"/)?.[1] ?? '';
    const semanticTag = name === 'div' ? '' : `\n    tagname="${name}"`;
    const extraAttributes = source
      .replace(/\sclass="[^"]*"/, '')
      .replace(/\sdata-component="[^"]*"/, '')
      .trim();
    const extras = extraAttributes ? `\n    ${extraAttributes}` : '';
    return `<w2:group\n    id="${prefix}${key[0].toUpperCase()}${key.slice(1)}${sequence}"${semanticTag}\n    class="${className}"${extras}>`;
  });
  return `<w2:group
  id="${prefix}${key[0].toUpperCase()}${key.slice(1)}Example">
${markup.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

const dividerWebSquare: Record<string, string> = {
  playground: `<w2:group
  id="dividerPlayground"
  tagname="div"
  class="divider">
  <w2:textbox id="dividerPlaygroundLabel" label="라벨"></w2:textbox>
</w2:group>`,
  basic: `<w2:group
  id="dividerBasicExample">
  <p>위 콘텐츠</p>
  <hr class="divider" />
  <p>아래 콘텐츠</p>
</w2:group>`,
  dashed: `<w2:group
  id="dividerDashedExample">
  <p>위 콘텐츠</p>
  <hr class="divider divider_dashed" />
  <p>아래 콘텐츠</p>
</w2:group>`,
  text: `<w2:group
  id="dividerTextExample">
  <w2:group id="dividerTextTitle" tagname="div" class="divider">
    <w2:textbox id="dividerTextTitleLabel" label="섹션 제목"></w2:textbox>
  </w2:group>
  <w2:group id="dividerTextDescription" tagname="div" class="divider divider_plain">
    <w2:textbox id="dividerTextDescriptionLabel" label="보조 설명"></w2:textbox>
  </w2:group>
</w2:group>`,
  orient: `<w2:group
  id="dividerOrientExample">
  <w2:group id="dividerOrientLeft" tagname="div" class="divider divider_orient-left">
    <w2:textbox id="dividerOrientLeftLabel" label="왼쪽"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientCenter" tagname="div" class="divider">
    <w2:textbox id="dividerOrientCenterLabel" label="가운데"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientRight" tagname="div" class="divider divider_orient-right">
    <w2:textbox id="dividerOrientRightLabel" label="오른쪽"></w2:textbox>
  </w2:group>
</w2:group>`,
  vertical: `<w2:group
  id="dividerVerticalExample"
  class="space">
  <w2:textbox id="dividerVerticalItemA" label="항목 A"></w2:textbox>
  <span class="divider divider_vertical" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemB" label="항목 B"></w2:textbox>
  <span class="divider divider_vertical divider_dashed" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemC" label="항목 C"></w2:textbox>
</w2:group>`
};

function makeExamples(component: string, key: string, definition: Definition): FrameworkExample[] {
  const lower = component.toLowerCase();
  const child = component === 'Grid' ? 'GridCol' : component === 'Flex' ? 'FlexItem' : '';
  const usesChild = child && definition.body.includes(`<${child}`);
  const auxiliaries = ['Button', 'Divider', 'Space'].filter((name) => name !== component && definition.body.includes(`<${name}`));
  const vueImports = [`import ${component}${usesChild ? `, { ${child} }` : ''} from '@uxkm/vue/${lower}';`, ...auxiliaries.map((name) => `import ${name} from '@uxkm/vue/${name.toLowerCase()}';`)].join('\n');
  const vue = `<script setup>\n${vueImports}\n</script>\n\n<template>\n${definition.body.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`;
  const reactMarkup = reactBody(definition.body);
  const reactImports = [`import ${component}${usesChild ? `, { ${child} }` : ''} from '@uxkm/react/${lower}';`, ...auxiliaries.map((name) => `import ${name} from '@uxkm/react/${name.toLowerCase()}';`)].join('\n');
  // Fragment의 여는 태그와 닫는 태그를 맞추고 내부 예시만 한 단계 들여씁니다.
  const react = `${reactImports}\n\nexport function Example() {\n  return (\n  <>\n${reactMarkup.split('\n').map((line) => `    ${line}`).join('\n')}\n  </>\n  );\n}`;
  const html = definition.html ?? componentHtml(definition.body);
  const examples: FrameworkExample[] = [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/layout/${component}/${component}.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/layout/${component}/${lower}.njk · ${key}`, code: `{# ${component} · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/${lower} → apps/vue/src/components/layout/${component}/${component}.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${lower} → apps/vue/src/components/layout/${component}/${component}.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/${lower} → apps/react/src/components/layout/${component}/${component}.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/${lower} → apps/react/src/components/layout/${component}/${component}.jsx · ${key}`, code: react }
  ];
  if (component === 'Grid') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `screen.xml · Grid ${key}`, code: webSquareGroups(html, key, 'grid', ['Grid', 'GridCol']) });
  }
  if (component === 'Flex') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `screen.xml · Flex ${key}`, code: webSquareGroups(html, key, 'flex', ['Flex', 'FlexItem']) });
  }
  if (component === 'Divider') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Divider.xml · ${key}`, code: dividerWebSquare[key] });
  }
  if (component === 'Space') {
    const taggedHtml = html.replace(/<([a-z][\w-]*) class="(space(?:\s[^"]*)?)"/g, '<$1 class="$2" data-component="Space"');
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Space.xml · ${key}`, code: webSquareGroups(taggedHtml, key, 'space', ['Space']) });
  }
  return examples;
}

const grid = {
  playground: { body: `<Grid cols="3" gap="sm">\n  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div>\n</Grid>` },
  basicLayout: { body: `<Grid gap="sm">\n  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>\n  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>\n  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">Main content</GridCol>\n  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>\n</Grid>` },
  contentLayout: { body: `<Grid gap="sm">\n  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>\n  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>\n  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">\n    <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>\n    <Grid cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Grid>\n  </GridCol>\n  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>\n</Grid>` },
  twelveColumns: { body: `<Grid item-span="1" gap="sm">\n  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div><div class="grid_demo-cell">4</div><div class="grid_demo-cell">5</div><div class="grid_demo-cell">6</div>\n  <div class="grid_demo-cell">7</div><div class="grid_demo-cell">8</div><div class="grid_demo-cell">9</div><div class="grid_demo-cell">10</div><div class="grid_demo-cell">11</div><div class="grid_demo-cell">12</div>\n</Grid>` },
  parent: { body: `<Grid cols="3"><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div></Grid>\n<Grid ratio="2-1"><div class="grid_demo-cell">grid_ratio-2-1</div><div class="grid_demo-cell">grid_ratio-2-1</div></Grid>\n<Grid item-span="4"><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div></Grid>` },
  equal: { body: `<Grid cols="2"><div class="grid_demo-cell">cols 2</div><div class="grid_demo-cell">cols 2</div></Grid>\n<Grid cols="4"><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div></Grid>` },
  ratio: { body: `<Grid ratio="1-2"><div class="grid_demo-cell">1 : 2</div><div class="grid_demo-cell">1 : 2</div></Grid>\n<Grid ratio="1-2-1"><div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">1</div></Grid>` },
  itemSpan: { body: `<Grid item-span="6"><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div></Grid>\n<Grid item-span="3"><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div></Grid>` },
  child: { body: `<Grid>\n  <GridCol span="8"><div class="grid_demo-cell">span 8</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>\n  <GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>\n</Grid>` },
  gap: { body: `<Grid cols="3" gap="sm"><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div></Grid>\n<Grid cols="3" gap="lg"><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div></Grid>` },
  responsive: { body: `<Grid cols="1" cols-md="2" cols-lg="3"><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div></Grid>\n<Grid item-span="12" item-span-md="6" item-span-lg="4"><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div></Grid>\n<Grid><GridCol span="12" span-md="8" span-lg="9"><div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div></GridCol><GridCol span="12" span-md="4" span-lg="3"><div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div></GridCol></Grid>` },
  auto: { body: `<Grid auto-fit>\n  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>\n  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>\n</Grid>\n<Grid auto-fill>\n  <div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div>\n</Grid>\n<Grid equal-columns>\n  <div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div>\n</Grid>` }
} satisfies Record<string, Definition>;

const flex = {
  playground: { body: `<Flex direction="row" cols="3" gap="sm" align="stretch"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div></Flex>` },
  pageLayout: { body: `<Flex wrap gap="sm">\n  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>\n  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell">Main content</FlexItem><FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>\n</Flex>` },
  contentLayout: { body: `<Flex wrap gap="sm" align="stretch">\n  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>\n  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell"><h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p><Flex cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Flex></FlexItem>\n  <FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>\n</Flex>` },
  parent: { body: `<Flex cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>\n<Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>\n<Flex item-span="4"><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div></Flex>` },
  twelveColumns: { body: `<Flex item-span="1" gap="sm">\n  <div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div><div class="flex_demo-cell">4</div><div class="flex_demo-cell">5</div><div class="flex_demo-cell">6</div>\n  <div class="flex_demo-cell">7</div><div class="flex_demo-cell">8</div><div class="flex_demo-cell">9</div><div class="flex_demo-cell">10</div><div class="flex_demo-cell">11</div><div class="flex_demo-cell">12</div>\n</Flex>` },
  equal: { body: `<Flex cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>\n<Flex cols="4"><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div></Flex>` },
  ratio: { body: `<Flex ratio="1-2"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div></Flex>\n<Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>` },
  itemSpan: { body: `<Flex item-span="6"><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div></Flex>\n<Flex item-span="3"><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div></Flex>` },
  childSpan: { body: `<Flex wrap>\n  <FlexItem span="8" class="flex_demo-cell">span 8</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>\n  <FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>\n</Flex>` },
  itemSizing: { body: `<Flex gap="sm">\n  <FlexItem fit class="flex_demo-cell">fit</FlexItem>\n  <FlexItem grow class="flex_demo-cell">grow 1</FlexItem>\n  <FlexItem grow grow-factor="2" class="flex_demo-cell">grow 2</FlexItem>\n</Flex>` },
  gap: { body: `<Flex cols="3" gap="sm"><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div></Flex>\n<Flex cols="3" gap="lg"><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div></Flex>` },
  responsive: { body: `<Flex cols="1" cols-md="2" cols-lg="3" gap="sm"><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>\n<Flex item-span="12" item-span-md="6" item-span-lg="4"><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>\n<Flex wrap><FlexItem span="12" span-md="8" span-lg="9" class="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem><FlexItem span="12" span-md="4" span-lg="3" class="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem></Flex>` },
  auto: { body: `<Flex auto-fit><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div></Flex>` },
  alignmentAndRatio: { body: `<Flex justify="between" gap="sm"><div class="flex_demo-cell">Start</div><div class="flex_demo-cell">End</div></Flex>\n<Flex ratio="2-1" gap="sm"><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>` }
} satisfies Record<string, Definition>;

const divider = {
  playground: { body: `<Divider label="라벨" />`, html: `<div class="divider">라벨</div>` },
  basic: { body: `<p>위 콘텐츠</p>\n<Divider />\n<p>아래 콘텐츠</p>`, html: `<p>위 콘텐츠</p>\n<hr class="divider" />\n<p>아래 콘텐츠</p>` },
  dashed: { body: `<p>위 콘텐츠</p>\n<Divider dashed />\n<p>아래 콘텐츠</p>`, html: `<p>위 콘텐츠</p>\n<hr class="divider divider_dashed" />\n<p>아래 콘텐츠</p>` },
  text: { body: `<Divider label="섹션 제목" />\n<Divider plain label="보조 설명" />`, html: `<div class="divider">섹션 제목</div>\n<div class="divider divider_plain">보조 설명</div>` },
  orient: { body: `<Divider orient="left" label="왼쪽" />\n<Divider label="가운데" />\n<Divider orient="right" label="오른쪽" />`, html: `<div class="divider divider_orient-left">왼쪽</div>\n<div class="divider">가운데</div>\n<div class="divider divider_orient-right">오른쪽</div>` },
  vertical: { body: `<Space>\n  <span>항목 A</span><Divider vertical /><span>항목 B</span><Divider vertical dashed /><span>항목 C</span>\n</Space>`, html: `<div class="space">\n  <span>항목 A</span><span class="divider divider_vertical" aria-hidden="true"></span>\n  <span>항목 B</span><span class="divider divider_vertical divider_dashed" aria-hidden="true"></span><span>항목 C</span>\n</div>` }
} satisfies Record<string, Definition>;

const space = {
  playground: { body: `<Space gap="md"><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`, html: `<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>` },
  basic: { body: `<Space><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`, html: `<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>` },
  vertical: { body: `<Space vertical align="stretch">\n  <div class="space_demo-box">첫 번째</div><div class="space_demo-box">두 번째</div><div class="space_demo-box">세 번째</div>\n</Space>`, html: `<div class="space space_vertical space_align-stretch">\n  <div>첫 번째</div><div>두 번째</div><div>세 번째</div>\n</div>` },
  gap: { body: `<Space gap="xs"><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div></Space>\n<Space gap="sm"><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div></Space>\n<Space><div class="space_demo-box">md</div><div class="space_demo-box">md</div><div class="space_demo-box">md</div></Space>\n<Space gap="lg"><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div></Space>\n<Space gap="xl"><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div></Space>`, html: `<div class="space space_gap-xs"><div>xs</div><div>xs</div><div>xs</div></div>\n<div class="space space_gap-sm"><div>sm</div><div>sm</div><div>sm</div></div>\n<div class="space"><div>md</div><div>md</div><div>md</div></div>\n<div class="space space_gap-lg"><div>lg</div><div>lg</div><div>lg</div></div>\n<div class="space space_gap-xl"><div>xl</div><div>xl</div><div>xl</div></div>` },
  wrap: { body: `<Space block wrap>\n  <div class="space_demo-box" style="min-width: 8rem;">항목 1</div><div class="space_demo-box" style="min-width: 8rem;">항목 2</div><div class="space_demo-box" style="min-width: 8rem;">항목 3</div><div class="space_demo-box" style="min-width: 8rem;">항목 4</div><div class="space_demo-box" style="min-width: 8rem;">항목 5</div>\n</Space>`, html: `<div class="space space_block space_wrap">\n  <div style="min-width: 8rem;">항목 1</div><div style="min-width: 8rem;">항목 2</div><div style="min-width: 8rem;">항목 3</div><div style="min-width: 8rem;">항목 4</div><div style="min-width: 8rem;">항목 5</div>\n</div>` },
  align: { body: `<Space block align="center" style="min-height: 5rem; padding: 1rem;">\n  <div class="space_demo-box">align center</div><div class="space_demo-box" style="padding-block: 2rem;">높이 다름</div><div class="space_demo-box">align center</div>\n</Space>\n<Space block justify="between" style="padding: 1rem;"><div class="space_demo-box">justify between</div><div class="space_demo-box">양 끝</div></Space>`, html: `<div class="space space_block space_align-center" style="min-height: 5rem; padding: 1rem;"><div>align center</div><div style="padding-block: 2rem;">높이 다름</div><div>align center</div></div>\n<div class="space space_block space_justify-between" style="padding: 1rem;"><div>justify between</div><div>양 끝</div></div>` },
  combo: { body: `<Space>\n  <Button variant="outline" label="취소" />\n  <Button variant="filled" color="primary" label="저장" />\n  <Divider vertical />\n  <Button variant="text" label="더보기" />\n</Space>`, html: `<div class="space">\n  <button class="btn btn_outline color_primary" type="button">취소</button>\n  <button class="btn btn_filled color_primary" type="button">저장</button>\n  <span class="divider divider_vertical" aria-hidden="true"></span>\n  <button class="btn btn_text color_primary" type="button">더보기</button>\n</div>` }
} satisfies Record<string, Definition>;

function build(component: string, definitions: Record<string, Definition>) {
  return Object.fromEntries(Object.entries(definitions).map(([key, definition]) => [key, makeExamples(component, key, definition)]));
}

export const gridFrameworkExamples = build('Grid', grid) as Record<keyof typeof grid, FrameworkExample[]>;
export const flexFrameworkExamples = build('Flex', flex) as Record<keyof typeof flex, FrameworkExample[]>;
export const dividerFrameworkExamples = build('Divider', divider) as Record<keyof typeof divider, FrameworkExample[]>;
export const spaceFrameworkExamples = build('Space', space) as Record<keyof typeof space, FrameworkExample[]>;
