<script setup>
import { computed, ref, useAttrs } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

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

const formatCode = createComponentFormatter('ProgressCircle', {
  defaults: { percent: 0, color: 'primary', size: 'md' },
});

useComponentDemoCode(formatCode, props, {}, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['progress', 'progress_circle', `color_${props.color}`];
  if (props.size === 'sm') classes.push('progress_sm');
  if (props.size === 'lg') classes.push('progress_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const circleStyle = computed(() => ({ '--progress-percent': props.percent }));
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    role="progressbar"
    :aria-valuenow="percent"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="ariaLabel"
    :style="circleStyle"
  >
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
    </svg>
    <span class="progress_circle-value">{{ percent }}%</span>
  </div>
</template>
