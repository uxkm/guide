<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  direction: {
    type: String,
    default: 'row',
    validator: (value) => ['row', 'column'].includes(value),
  },
  directionMd: {
    type: String,
    validator: (value) => ['row', 'column'].includes(value),
  },
  directionLg: {
    type: String,
    validator: (value) => ['row', 'column'].includes(value),
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
    validator: (value) => ['', 'sm', 'lg', 'none'].includes(value),
  },
  align: {
    type: String,
    default: 'stretch',
    validator: (value) => ['start', 'center', 'end', 'stretch', 'baseline'].includes(value),
  },
  justify: {
    type: String,
    validator: (value) => ['start', 'center', 'end', 'between', 'around', 'evenly'].includes(value),
  },
  equal: Boolean,
  autoFit: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Flex', {
  defaults: { direction: 'row', align: 'stretch' },
  booleanProps: new Set(['wrap', 'equal', 'autoFit']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const directionClass = (direction, breakpoint = '') =>
  `flex_${direction === 'column' ? 'col' : 'row'}${breakpoint}`;

const rootClass = computed(() => {
  const classes = ['flex', directionClass(props.direction)];
  if (props.directionMd) classes.push(directionClass(props.directionMd, '-md'));
  if (props.directionLg) classes.push(directionClass(props.directionLg, '-lg'));
  if (props.wrap) classes.push('flex_wrap');
  if (props.cols != null) classes.push(`flex_cols-${props.cols}`);
  if (props.colsMd != null) classes.push(`flex_cols-md-${props.colsMd}`);
  if (props.colsLg != null) classes.push(`flex_cols-lg-${props.colsLg}`);
  if (props.ratio) classes.push(`flex_ratio-${props.ratio}`);
  if (props.itemSpan != null) classes.push(`flex_items-span-${props.itemSpan}`);
  if (props.itemSpanMd != null) classes.push(`flex_items-span-md-${props.itemSpanMd}`);
  if (props.itemSpanLg != null) classes.push(`flex_items-span-lg-${props.itemSpanLg}`);
  if (props.gap) classes.push(`flex_gap-${props.gap}`);
  if (props.align) classes.push(`flex_align-${props.align}`);
  if (props.justify) classes.push(`flex_justify-${props.justify}`);
  if (props.equal) classes.push('flex_equal');
  if (props.autoFit) classes.push('flex_auto-fit');
  return classes;
});
</script>

<template>
  <div ref="rootRef" v-bind="attrs" :class="rootClass">
    <slot />
  </div>
</template>
