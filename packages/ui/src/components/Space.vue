<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  vertical: Boolean,
  wrap: Boolean,
  block: Boolean,
  gap: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  align: String,
  justify: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Space', {
  defaults: { gap: 'md' },
  booleanProps: new Set(['vertical', 'wrap', 'block']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['space'];
  if (props.vertical) classes.push('space_vertical');
  if (props.wrap) classes.push('space_wrap');
  if (props.block) classes.push('space_block');
  if (props.gap && props.gap !== 'md') classes.push(`space_gap-${props.gap}`);
  if (props.align) classes.push(`space_align-${props.align}`);
  if (props.justify) classes.push(`space_justify-${props.justify}`);
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <slot />
  </div>
</template>
