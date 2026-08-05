<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_STATUSES = new Set(['', 'success', 'exception']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['primary', 'success', 'warning', 'danger']);

function normalizePercent(percent) {
  const numericPercent = Number(percent);
  if (!Number.isFinite(numericPercent)) return 0;
  return Math.min(100, Math.max(0, numericPercent));
}

const props = defineProps({
  percent: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: '',
    validator: (v) => ['', 'success', 'exception'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  showInfo: Boolean,
  label: String,
  color: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'danger'].includes(v),
  },
  striped: Boolean,
  animated: Boolean,
  indeterminate: Boolean,
  inside: Boolean,
  block: Boolean,
  ariaLabel: {
    type: String,
    default: '진행률',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const resolvedStatus = computed(() =>
  VALID_STATUSES.has(props.status) ? props.status : ''
);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedColor = computed(() =>
  VALID_COLORS.has(props.color) ? props.color : 'primary'
);
const resolvedPercent = computed(() => normalizePercent(props.percent));

const formatCode = createComponentFormatter('Progress', {
  defaults: { percent: 0, size: 'md', color: 'primary' },
  booleanProps: new Set(['showInfo', 'striped', 'animated', 'indeterminate', 'inside', 'block']),
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    percent: resolvedPercent.value,
    status: resolvedStatus.value,
    size: resolvedSize.value,
    color: resolvedColor.value,
  }),
  slots,
  rootRef,
  attrs
);

const statusColor = computed(() => {
  if (resolvedStatus.value === 'success') return 'color_success';
  if (resolvedStatus.value === 'exception') return 'color_danger';
  return `color_${resolvedColor.value}`;
});

const rootClass = computed(() => {
  const classes = ['progress', statusColor.value];
  if (props.block) classes.push('progress_block');
  else classes.push('progress_fit');
  if (resolvedSize.value === 'sm') classes.push('progress_sm');
  if (resolvedSize.value === 'lg') classes.push('progress_lg');
  if (props.striped) classes.push('progress_striped');
  if (props.animated) classes.push('progress_animated');
  if (props.indeterminate) classes.push('is-indeterminate');
  if (props.inside) classes.push('progress_inside');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const trackStyle = computed(() =>
  props.inside ? { background: 'var(--color-border-subtle)' } : undefined
);
const barStyle = computed(() => ({ width: `${resolvedPercent.value}%` }));
const displayValue = computed(() => `${resolvedPercent.value}%`);
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <div v-if="showInfo || label" class="progress_header">
      <span v-if="label" class="progress_label">{{ label }}</span>
      <span v-if="showInfo" class="progress_value">{{ displayValue }}</span>
    </div>
    <div
      class="progress_track"
      :style="trackStyle"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : resolvedPercent"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="ariaLabel"
      :aria-busy="indeterminate ? 'true' : undefined"
    >
      <span class="progress_bar" :style="barStyle">{{ inside ? displayValue : '' }}</span>
    </div>
    <slot />
  </div>
</template>
