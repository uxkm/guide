<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  fluid: Boolean,
  size: {
    type: String,
    default: '',
    validator: (v) => ['', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Container', {
  booleanProps: new Set(['fluid']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['container'];
  if (props.fluid) classes.push('container_fluid');
  if (props.size) classes.push(`container_${props.size}`);
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <slot />
  </div>
</template>
