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
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('GridCol', {
  defaults: { as: 'div' },
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = [];
  if (props.span != null) classes.push(`grid_col-span-${props.span}`);
  if (props.spanMd != null) classes.push(`grid_col-span-md-${props.spanMd}`);
  if (props.spanLg != null) classes.push(`grid_col-span-lg-${props.spanLg}`);
  return classes;
});
</script>

<template>
  <component :is="props.as" ref="rootRef" v-bind="attrs" :class="rootClass">
    <slot />
  </component>
</template>
