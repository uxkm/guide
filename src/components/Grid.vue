<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  cols: [Number, String],
  colsMd: [Number, String],
  colsLg: [Number, String],
  ratio: String,
  itemSpan: [Number, String],
  itemSpanMd: [Number, String],
  itemSpanLg: [Number, String],
  gap: {
    type: String,
    default: '',
    validator: (v) => ['', 'sm', 'lg', 'none'].includes(v),
  },
  autoFit: Boolean,
  autoFill: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Grid', {
  booleanProps: new Set(['autoFit', 'autoFill']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['grid'];
  if (props.cols) classes.push(`grid_cols-${props.cols}`);
  if (props.colsMd) classes.push(`grid_cols-md-${props.colsMd}`);
  if (props.colsLg) classes.push(`grid_cols-lg-${props.colsLg}`);
  if (props.ratio) classes.push(`grid_ratio-${props.ratio}`);
  if (props.itemSpan) classes.push(`grid_item-span-${props.itemSpan}`);
  if (props.itemSpanMd) classes.push(`grid_item-span-md-${props.itemSpanMd}`);
  if (props.itemSpanLg) classes.push(`grid_item-span-lg-${props.itemSpanLg}`);
  if (props.gap === 'sm') classes.push('grid_gap-sm');
  if (props.gap === 'lg') classes.push('grid_gap-lg');
  if (props.gap === 'none') classes.push('grid_gap-none');
  if (props.autoFit) classes.push('grid_auto-fit');
  if (props.autoFill) classes.push('grid_auto-fill');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <slot />
  </div>
</template>
