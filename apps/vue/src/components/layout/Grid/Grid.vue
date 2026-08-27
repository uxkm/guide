<!--
  Grid 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
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
  equalColumns: Boolean, // 자식 수만큼 동일한 너비의 열을 생성합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 간격 이름입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 열 비율입니다.
const aligns = new Set(['', 'center', 'end']); // 기본 stretch 외에 선택할 수 있는 정렬입니다.

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns); // 기본 구간의 최종 열 수입니다.
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd); // md 구간의 최종 열 수입니다.
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg); // lg 구간의 최종 열 수입니다.

// 상태에 맞는 기본·반응형 Grid 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols.value) && `grid_cols-${range(resolvedCols.value)}`, // 기본 균등 열 수입니다.
    range(resolvedColsMd.value) && `grid_cols-md-${range(resolvedColsMd.value)}`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg.value) && `grid_cols-lg-${range(resolvedColsLg.value)}`, // lg 이상 균등 열 수입니다.

    gaps.has(props.gap) && props.gap && `grid_gap-${props.gap}`, // 검증된 간격 클래스입니다.
    ratios.has(props.ratio) && props.ratio && `grid_ratio-${props.ratio}`, // 검증된 열 비율 클래스입니다.

    range(props.itemSpan) && `grid_item-span-${range(props.itemSpan)}`, // 모든 자식의 기본 span입니다.
    range(props.itemSpanMd) && `grid_item-span-md-${range(props.itemSpanMd)}`, // 모든 자식의 md span입니다.
    range(props.itemSpanLg) && `grid_item-span-lg-${range(props.itemSpanLg)}`, // 모든 자식의 lg span입니다.

    props.autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    props.autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    props.equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    aligns.has(props.align) && props.align && `grid_align-${props.align}`, // 검증된 항목 정렬 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Grid">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Grid</slot>
  </component>
</template>
