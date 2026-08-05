<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  span: [Number, String],
  spanMd: [Number, String],
  spanLg: [Number, String],
  grow: Boolean,
  fit: Boolean,
  align: {
    type: String,
    validator: (value) => ['auto', 'start', 'center', 'end', 'stretch', 'baseline'].includes(value),
  },
  order: [Number, String],
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('FlexItem', {
  defaults: { as: 'div' },
  booleanProps: new Set(['grow', 'fit']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = [];
  if (props.span != null) classes.push(`flex_item-span-${props.span}`);
  if (props.spanMd != null) classes.push(`flex_item-span-md-${props.spanMd}`);
  if (props.spanLg != null) classes.push(`flex_item-span-lg-${props.spanLg}`);
  if (props.grow) classes.push('flex_grow');
  if (props.fit) classes.push('flex_fit');
  if (props.align) classes.push(`flex_self-${props.align}`);
  if (props.order != null) classes.push(`flex_order-${props.order}`);
  return classes;
});
</script>

<template>
  <component :is="props.as" ref="rootRef" v-bind="attrs" :class="rootClass">
    <slot />
  </component>
</template>
