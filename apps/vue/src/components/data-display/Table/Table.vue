<!--
  Table 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class와 style을 표·wrapper 계산에 사용하고 나머지 속성만 최외곽 루트에 전달합니다.
defineOptions({ name: 'UxkmTable', inheritAttrs: false });
const props = defineProps({
  bordered: Boolean, // 테두리 표를 켭니다.
  striped: Boolean, // 줄무늬 행을 켭니다.
  compact: Boolean, // 조밀한 패딩입니다.
  hover: Boolean, // 행 호버 강조입니다.
  wrap: { type: Boolean, default: true }, // false면 wrapper 없이 table만 반환합니다.
  scroll: Boolean, // 가로 스크롤 wrapper를 켭니다.
  scrollMaxHeight: String, // 세로 스크롤 최대 높이입니다.
  stickyTop: Boolean, // 헤더 행을 상단에 고정합니다.
  stickyLeft: Boolean, // 좌측 열을 고정합니다.
  stickyCols: { type: Number, default: 1, validator: (value) => [1, 2, 3, 4].includes(value) }, // 좌측 고정 열 개수(1~4)입니다.
  stickyLeftOffsets: { type: Object, default: () => ({}) }, // 고정 열별 left 오프셋 맵입니다.
  columns: { type: Array, default: () => [] }, // 열 너비·패딩 설정 배열입니다.
});
const attrs = useAttrs();
const hasColumns = computed(() => props.columns.length > 0);
// 표 스킨과 sticky 상태를 table_* 공통 클래스로 변환합니다.
const tableClasses = computed(() =>
  [
    'table',
    props.bordered && 'table_bordered',
    props.striped && 'table_striped',
    props.compact && 'table_compact',
    props.hover && 'table_hover',
    hasColumns.value && 'table_columns',
    props.stickyTop && 'table_sticky-top',
    props.stickyLeft && 'table_sticky-left',
    props.stickyLeft && `table_sticky-cols-${props.stickyCols}`,
  ].filter(Boolean),
);
// 열 패딩·줄바꿈과 sticky offset을 위치별 CSS 변수로 전달합니다.
const tableStyle = computed(() => {
  const style = {};
  props.columns.forEach((column, index) => {
    if (column.padding != null) style[`--table-col-${index + 1}-padding`] = column.padding;
    if (column.nowrap) style[`--table-col-${index + 1}-white-space`] = 'nowrap';
  });
  Object.entries(props.stickyLeftOffsets).forEach(([key, value]) => {
    if (value != null && value !== '') style[`--table-sticky-left-${key}`] = value;
  });
  return style;
});
const wrapStyle = computed(() => ({
  ...(typeof attrs.style === 'object' ? attrs.style : {}),
  ...(props.scrollMaxHeight ? { '--table-scroll-max-height': props.scrollMaxHeight } : {}),
}));
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
const colStyle = (column) =>
  ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null)
      style[key] = typeof column[key] === 'number' ? `${column[key]}rem` : column[key];
    return style;
  }, {});
</script>

<template>
  <!-- 기본은 스크롤 wrapper를 두고 wrap=false일 때 시맨틱 table을 직접 반환합니다. -->
  <div
    v-if="wrap"
    v-bind="fallthroughAttrs"
    class="table_wrap"
    :class="[scroll && 'table_wrap-scroll', attrs.class]"
    data-component="Table"
    :style="wrapStyle"
  >
    <table :class="tableClasses" :style="tableStyle">
      <colgroup v-if="hasColumns">
        <col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" />
      </colgroup>
      <slot />
    </table>
  </div>
  <table
    v-else
    v-bind="fallthroughAttrs"
    :class="[...tableClasses, attrs.class]"
    data-component="Table"
    :style="{ ...tableStyle, ...(typeof attrs.style === 'object' ? attrs.style : {}) }"
  >
    <colgroup v-if="hasColumns">
      <col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" />
    </colgroup>
    <slot />
  </table>
</template>
