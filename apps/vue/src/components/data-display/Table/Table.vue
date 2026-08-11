<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmTable', inheritAttrs: false });
const props = defineProps({
  bordered: Boolean, striped: Boolean, compact: Boolean, hover: Boolean,
  wrap: { type: Boolean, default: true }, scroll: Boolean, scrollMaxHeight: String,
  stickyTop: Boolean, stickyLeft: Boolean,
  stickyCols: { type: Number, default: 1, validator: (value) => [1, 2, 3, 4].includes(value) },
  stickyLeftOffsets: { type: Object, default: () => ({}) },
  columns: { type: Array, default: () => [] }
});
const attrs = useAttrs();
const hasColumns = computed(() => props.columns.length > 0);
const tableClasses = computed(() => [
  'table', props.bordered && 'table_bordered', props.striped && 'table_striped',
  props.compact && 'table_compact', props.hover && 'table_hover', hasColumns.value && 'table_columns',
  props.stickyTop && 'table_sticky-top', props.stickyLeft && 'table_sticky-left',
  props.stickyLeft && `table_sticky-cols-${props.stickyCols}`
].filter(Boolean));
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
const wrapStyle = computed(() => ({ ...(typeof attrs.style === 'object' ? attrs.style : {}), ...(props.scrollMaxHeight ? { '--table-scroll-max-height': props.scrollMaxHeight } : {}) }));
const fallthroughAttrs = computed(() => { const { class: _class, style: _style, ...rest } = attrs; return rest; });
const colStyle = (column) => ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
  if (column[key] != null) style[key] = typeof column[key] === 'number' ? `${column[key]}rem` : column[key];
  return style;
}, {});
</script>

<template>
  <div v-if="wrap" v-bind="fallthroughAttrs" class="table_wrap" :class="[scroll && 'table_wrap-scroll', attrs.class]" data-component="Table" :style="wrapStyle">
    <table :class="tableClasses" :style="tableStyle">
      <colgroup v-if="hasColumns"><col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" /></colgroup>
      <slot />
    </table>
  </div>
  <table v-else v-bind="fallthroughAttrs" :class="[...tableClasses, attrs.class]" data-component="Table" :style="{ ...tableStyle, ...(typeof attrs.style === 'object' ? attrs.style : {}) }">
    <colgroup v-if="hasColumns"><col v-for="(column, index) in columns" :key="index" :style="colStyle(column)" /></colgroup>
    <slot />
  </table>
</template>
