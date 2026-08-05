<script setup>
import { computed, ref, useAttrs } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

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
  color: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  ariaLabel: {
    type: String,
    default: '진행률',
  },
});

const attrs = useAttrs();
const rootRef = ref(null);

const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedColor = computed(() =>
  VALID_COLORS.has(props.color) ? props.color : 'primary'
);
const resolvedPercent = computed(() => normalizePercent(props.percent));

const formatCode = createComponentFormatter('ProgressCircle', {
  defaults: { percent: 0, color: 'primary', size: 'md' },
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    percent: resolvedPercent.value,
    color: resolvedColor.value,
    size: resolvedSize.value,
  }),
  {},
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['progress', 'progress_circle', `color_${resolvedColor.value}`];
  if (resolvedSize.value === 'sm') classes.push('progress_sm');
  if (resolvedSize.value === 'lg') classes.push('progress_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

const circleStyle = computed(() => [
  { '--progress-percent': resolvedPercent.value },
  attrs.style,
]);
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    v-bind="fallthroughAttrs"
    role="progressbar"
    :aria-valuenow="resolvedPercent"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="ariaLabel"
    :style="circleStyle"
  >
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
    </svg>
    <span class="progress_circle-value">{{ resolvedPercent }}%</span>
  </div>
</template>
