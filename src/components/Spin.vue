<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  tip: String,
  color: {
    type: String,
    default: 'primary',
  },
  inline: Boolean,
  block: Boolean,
  overlay: Boolean,
  ariaLabel: {
    type: String,
    default: '로딩 중',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Spin', {
  defaults: { size: 'md', color: 'primary' },
  booleanProps: new Set(['inline', 'block', 'overlay']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['spin', `color_${props.color}`];
  if (props.size === 'sm') classes.push('spin_sm');
  if (props.size === 'lg') classes.push('spin_lg');
  if (props.inline) classes.push('spin_inline');
  if (props.block) classes.push('spin_block');
  if (props.overlay) classes.push('spin_overlay');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <span class="spin_indicator" aria-hidden="true" />
    <p v-if="tip" class="spin_tip">{{ tip }}</p>
    <slot />
  </div>
</template>
