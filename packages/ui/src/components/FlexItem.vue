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
    default: '',
    validator: (v) => ['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline'].includes(v),
  },
  order: {
    type: [Number, String],
    validator: (v) => Number(v) >= 1 && Number(v) <= 12,
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('FlexItem', {
  defaults: { as: 'div' },
  booleanProps: new Set(['grow', 'fit']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = [];
  if (props.span) classes.push(`flex_item-span-${props.span}`);
  if (props.spanMd) classes.push(`flex_item-span-md-${props.spanMd}`);
  if (props.spanLg) classes.push(`flex_item-span-lg-${props.spanLg}`);
  if (props.grow) classes.push('flex_grow');
  if (props.fit) classes.push('flex_fit');
  if (props.align) classes.push(`flex_self-${props.align}`);
  if (props.order) classes.push(`flex_order-${props.order}`);
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component :is="as" ref="rootRef" v-bind="rootAttrs" :class="rootClass">
    <slot />
  </component>
</template>
