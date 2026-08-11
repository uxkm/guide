<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmGrid', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  cols: [String, Number], colsMd: [String, Number], colsLg: [String, Number],
  columns: [String, Number], columnsMd: [String, Number], columnsLg: [String, Number],
  gap: { type: String, default: '' }, ratio: { type: String, default: '' },
  itemSpan: [String, Number], itemSpanMd: [String, Number], itemSpanLg: [String, Number],
  autoFit: Boolean, autoFill: Boolean, equalColumns: Boolean, align: { type: String, default: '' }
});
const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const gaps = new Set(['', 'sm', 'lg', 'none']);
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const aligns = new Set(['', 'center', 'end']);
const resolvedCols = computed(() => props.cols ?? props.columns);
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd);
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg);
const classes = computed(() => [
  'grid', range(resolvedCols.value) && `grid_cols-${range(resolvedCols.value)}`,
  range(resolvedColsMd.value) && `grid_cols-md-${range(resolvedColsMd.value)}`,
  range(resolvedColsLg.value) && `grid_cols-lg-${range(resolvedColsLg.value)}`,
  gaps.has(props.gap) && props.gap && `grid_gap-${props.gap}`,
  ratios.has(props.ratio) && props.ratio && `grid_ratio-${props.ratio}`,
  range(props.itemSpan) && `grid_item-span-${range(props.itemSpan)}`,
  range(props.itemSpanMd) && `grid_item-span-md-${range(props.itemSpanMd)}`,
  range(props.itemSpanLg) && `grid_item-span-lg-${range(props.itemSpanLg)}`,
  props.autoFit && 'grid_auto-fit', props.autoFill && 'grid_auto-fill',
  props.equalColumns && 'grid_equal-columns', aligns.has(props.align) && props.align && `grid_align-${props.align}`,
  attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="Grid"><slot>Grid</slot></component>
</template>
