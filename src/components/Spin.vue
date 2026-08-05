<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['primary', 'success', 'warning', 'danger']);

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
    validator: (v) => ['primary', 'success', 'warning', 'danger'].includes(v),
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

const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedColor = computed(() =>
  VALID_COLORS.has(props.color) ? props.color : 'primary'
);

const formatCode = createComponentFormatter('Spin', {
  defaults: { size: 'md', color: 'primary' },
  booleanProps: new Set(['inline', 'block', 'overlay']),
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    size: resolvedSize.value,
    color: resolvedColor.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['spin', `color_${resolvedColor.value}`];
  if (resolvedSize.value === 'sm') classes.push('spin_sm');
  if (resolvedSize.value === 'lg') classes.push('spin_lg');
  if (props.inline) classes.push('spin_inline');
  if (props.block) classes.push('spin_block');
  if (props.overlay) classes.push('spin_overlay');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
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
    v-bind="fallthroughAttrs"
  >
    <span class="spin_indicator" aria-hidden="true" />
    <p v-if="tip" class="spin_tip">{{ tip }}</p>
    <slot />
  </div>
</template>
