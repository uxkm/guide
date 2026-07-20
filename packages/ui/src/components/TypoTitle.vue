<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  level: {
    type: [Number, String],
    default: 1,
    validator: (v) => [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'].includes(v),
  },
  color: String,
  label: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('TypoTitle', {
  defaults: { level: 1 },
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootTag = computed(() => `h${props.level}`);

const rootClass = computed(() => {
  const classes = [`typo_title-${props.level}`];
  if (props.color) classes.push(`color_${props.color}`);
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <component :is="rootTag" ref="rootRef" :class="rootClass">
    <slot>{{ label }}</slot>
  </component>
</template>
