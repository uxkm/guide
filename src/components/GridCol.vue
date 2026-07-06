<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  span: {
    type: [Number, String],
    required: true,
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('GridCol', { selfClosing: false });

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = [`grid_col-span-${props.span}`];
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <slot />
  </div>
</template>
