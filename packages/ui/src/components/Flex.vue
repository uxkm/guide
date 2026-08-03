<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  direction: {
    type: String,
    default: 'row',
    validator: (v) => ['row', 'col'].includes(v),
  },
  directionMd: {
    type: String,
    default: '',
    validator: (v) => ['', 'row', 'col'].includes(v),
  },
  directionLg: {
    type: String,
    default: '',
    validator: (v) => ['', 'row', 'col'].includes(v),
  },
  wrap: Boolean,
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
    validator: (v) => ['', 'none', 'sm', 'lg'].includes(v),
  },
  align: {
    type: String,
    default: 'stretch',
    validator: (v) => ['start', 'center', 'end', 'baseline', 'stretch'].includes(v),
  },
  equal: Boolean,
  autoFit: Boolean,
  justify: {
    type: String,
    default: '',
    validator: (v) => ['', 'start', 'center', 'end', 'between', 'around', 'evenly'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Flex', {
  defaults: { direction: 'row', align: 'stretch' },
  booleanProps: new Set(['wrap', 'equal', 'autoFit']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['flex', `flex_${props.direction}`];
  if (props.directionMd) classes.push(`flex_${props.directionMd}-md`);
  if (props.directionLg) classes.push(`flex_${props.directionLg}-lg`);
  if (props.wrap) classes.push('flex_wrap');
  if (props.cols) classes.push(`flex_cols-${props.cols}`);
  if (props.colsMd) classes.push(`flex_cols-md-${props.colsMd}`);
  if (props.colsLg) classes.push(`flex_cols-lg-${props.colsLg}`);
  if (props.ratio) classes.push(`flex_ratio-${props.ratio}`);
  if (props.itemSpan) classes.push(`flex_items-span-${props.itemSpan}`);
  if (props.itemSpanMd) classes.push(`flex_items-span-md-${props.itemSpanMd}`);
  if (props.itemSpanLg) classes.push(`flex_items-span-lg-${props.itemSpanLg}`);
  if (props.gap) classes.push(`flex_gap-${props.gap}`);
  if (props.align) classes.push(`flex_align-${props.align}`);
  if (props.justify) classes.push(`flex_justify-${props.justify}`);
  if (props.equal) classes.push('flex_equal');
  if (props.autoFit) classes.push('flex_auto-fit');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div ref="rootRef" v-bind="rootAttrs" :class="rootClass">
    <slot />
  </div>
</template>
