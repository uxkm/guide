<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  dot: Boolean,
  count: Boolean,
  dotOnly: Boolean,
  label: String,
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Badge', {
  defaults: { color: 'primary', size: 'md' },
  booleanProps: new Set(['dot', 'count', 'dotOnly']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  if (props.dotOnly) {
    return ['badge_dot-only', `color_${props.color}`, attrs.class].filter(Boolean);
  }

  const classes = ['badge', `color_${props.color}`];
  if (props.size === 'sm') classes.push('badge_sm');
  if (props.size === 'lg') classes.push('badge_lg');
  if (props.dot) classes.push('badge_dot');
  if (props.count) classes.push('badge_count');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootTag = computed(() => (props.dotOnly ? 'span' : 'span'));
</script>

<template>
  <component
    :is="rootTag"
    ref="rootRef"
    :class="rootClass"
    :aria-label="ariaLabel"
    :role="dotOnly ? 'status' : undefined"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
