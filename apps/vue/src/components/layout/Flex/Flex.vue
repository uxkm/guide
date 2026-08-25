<script setup>
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

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const directions = new Set(['', 'row', 'col', 'column']); // 지원하는 배치 방향입니다.
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 항목 간격입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 항목 너비 비율입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']); // 지원하는 주축 정렬입니다.

// column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
const directionClass = (value, breakpoint = '') => value && `flex_${value === 'column' ? 'col' : value}${breakpoint}`;

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns); // 기본 구간의 최종 항목 수입니다.
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd); // md 구간의 최종 항목 수입니다.
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg); // lg 구간의 최종 항목 수입니다.

// 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
const classes = computed(() => [
  'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
  directions.has(props.direction) && directionClass(props.direction), // 기본 배치 방향입니다.
  directions.has(props.directionMd) && directionClass(props.directionMd, '-md'), // md 이상 배치 방향입니다.
  directions.has(props.directionLg) && directionClass(props.directionLg, '-lg'), // lg 이상 배치 방향입니다.
  props.wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

  gaps.has(props.gap) && props.gap && `flex_gap-${props.gap}`, // 검증된 항목 간격입니다.
  range(resolvedCols.value) && `flex_cols-${range(resolvedCols.value)}`, // 기본 균등 항목 수입니다.
  range(resolvedColsMd.value) && `flex_cols-md-${range(resolvedColsMd.value)}`, // md 이상 균등 항목 수입니다.
  range(resolvedColsLg.value) && `flex_cols-lg-${range(resolvedColsLg.value)}`, // lg 이상 균등 항목 수입니다.
  ratios.has(props.ratio) && props.ratio && `flex_ratio-${props.ratio}`, // 검증된 항목 너비 비율입니다.

  range(props.itemSpan) && `flex_items-span-${range(props.itemSpan)}`, // 모든 자식의 기본 span입니다.
  range(props.itemSpanMd) && `flex_items-span-md-${range(props.itemSpanMd)}`, // 모든 자식의 md span입니다.
  range(props.itemSpanLg) && `flex_items-span-lg-${range(props.itemSpanLg)}`, // 모든 자식의 lg span입니다.
  props.equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
  props.autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

  aligns.has(props.align) && props.align && `flex_align-${props.align}`, // 검증된 교차축 정렬입니다.
  justifies.has(props.justify) && props.justify && `flex_justify-${props.justify}`, // 검증된 주축 정렬입니다.
  attrs.class // 호출 위치에서 전달한 사용자 정의 클래스입니다.
].filter(Boolean)); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Flex">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Flex</slot>
  </component>
</template>
