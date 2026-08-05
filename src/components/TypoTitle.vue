<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);
const VALID_COLORS = new Set([
  '',
  'default',
  'muted',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'error',
]);

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

const resolvedLevel = computed(() => (VALID_LEVELS.has(props.level) ? Number(props.level) : 1));
const resolvedColor = computed(() => (VALID_COLORS.has(props.color) ? props.color : ''));
const rootTag = computed(() => `h${resolvedLevel.value}`);

useComponentDemoCode(
  formatCode,
  () => ({ ...props, level: resolvedLevel.value, color: resolvedColor.value }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = [`typo_title-${resolvedLevel.value}`];
  if (resolvedColor.value) classes.push(`color_${resolvedColor.value}`);
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component :is="rootTag" ref="rootRef" v-bind="fallthroughAttrs" :class="rootClass">
    <slot>{{ label }}</slot>
  </component>
</template>
