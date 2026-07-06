<script setup>
import { computed, provide, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  current: Number,
  direction: {
    type: String,
    default: 'horizontal',
    validator: (v) => ['horizontal', 'vertical'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  dot: Boolean,
  iconStyle: Boolean,
  navigable: Boolean,
  align: {
    type: String,
    default: '',
    validator: (v) => ['', 'center'].includes(v),
  },
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const items = new Map();
const itemOrder = ref([]);

const formatCode = createComponentFormatter('Steps', {
  defaults: { direction: 'horizontal', size: 'md' },
  booleanProps: new Set(['dot', 'iconStyle', 'navigable']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['steps'];
  if (props.direction === 'vertical') classes.push('steps_vertical');
  if (props.size === 'sm') classes.push('steps_sm');
  if (props.size === 'lg') classes.push('steps_lg');
  if (props.dot) classes.push('steps_dot');
  if (props.iconStyle) classes.push('steps_icon-style');
  if (props.navigable) classes.push('steps_navigable');
  if (props.align === 'center') classes.push('steps_align-center');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerItem(id, itemProps) {
  items.set(id, itemProps);
  itemOrder.value = [...items.keys()];
}

function unregisterItem(id) {
  items.delete(id);
  itemOrder.value = [...items.keys()];
}

function isLastItem(id) {
  const order = itemOrder.value;
  return order.indexOf(id) === order.length - 1;
}

function getItemIndex(id) {
  return itemOrder.value.indexOf(id) + 1;
}

provide('steps', {
  registerItem,
  unregisterItem,
  isLastItem,
  getItemIndex,
  navigable: computed(() => props.navigable),
});
</script>

<template>
  <ol
    ref="rootRef"
    :class="rootClass"
    :aria-label="ariaLabel"
    v-bind="fallthroughAttrs"
  >
    <slot />
  </ol>
</template>
