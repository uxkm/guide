<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFlex', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  direction: { type: String, default: 'row' }, directionMd: { type: String, default: '' },
  directionLg: { type: String, default: '' }, wrap: Boolean, gap: { type: String, default: '' },
  cols: [String, Number], colsMd: [String, Number], colsLg: [String, Number],
  columns: [String, Number], columnsMd: [String, Number], columnsLg: [String, Number],
  ratio: { type: String, default: '' }, itemSpan: [String, Number], itemSpanMd: [String, Number],
  itemSpanLg: [String, Number], equal: Boolean, autoFit: Boolean,
  align: { type: String, default: 'stretch' }, justify: { type: String, default: '' }
});
const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const directions = new Set(['', 'row', 'col', 'column']);
const gaps = new Set(['', 'sm', 'lg', 'none']);
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const aligns = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']);
const justifies = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']);
const directionClass = (value, breakpoint = '') => value && `flex_${value === 'column' ? 'col' : value}${breakpoint}`;
const resolvedCols = computed(() => props.cols ?? props.columns);
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd);
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg);
const classes = computed(() => [
  'flex', directions.has(props.direction) && directionClass(props.direction),
  directions.has(props.directionMd) && directionClass(props.directionMd, '-md'),
  directions.has(props.directionLg) && directionClass(props.directionLg, '-lg'),
  props.wrap && 'flex_wrap', gaps.has(props.gap) && props.gap && `flex_gap-${props.gap}`,
  range(resolvedCols.value) && `flex_cols-${range(resolvedCols.value)}`,
  range(resolvedColsMd.value) && `flex_cols-md-${range(resolvedColsMd.value)}`,
  range(resolvedColsLg.value) && `flex_cols-lg-${range(resolvedColsLg.value)}`,
  ratios.has(props.ratio) && props.ratio && `flex_ratio-${props.ratio}`,
  range(props.itemSpan) && `flex_items-span-${range(props.itemSpan)}`,
  range(props.itemSpanMd) && `flex_items-span-md-${range(props.itemSpanMd)}`,
  range(props.itemSpanLg) && `flex_items-span-lg-${range(props.itemSpanLg)}`,
  props.equal && 'flex_equal', props.autoFit && 'flex_auto-fit',
  aligns.has(props.align) && props.align && `flex_align-${props.align}`,
  justifies.has(props.justify) && props.justify && `flex_justify-${props.justify}`, attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="Flex"><slot>Flex</slot></component>
</template>
