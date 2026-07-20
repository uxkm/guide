<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

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

const formatCode = createComponentFormatter('Progress', {
  defaults: { percent: 0, size: 'md', color: 'primary' },
  booleanProps: new Set(['showInfo', 'striped', 'animated', 'indeterminate', 'inside', 'block']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const statusColor = computed(() => {
  if (props.status === 'success') return 'color_success';
  if (props.status === 'exception') return 'color_danger';
  if (props.color === 'danger') return 'color_danger';
  return `color_${props.color}`;
});

const rootClass = computed(() => {
  const classes = ['progress', statusColor.value];
  if (props.block) classes.push('progress_block');
  else classes.push('progress_fit');
  if (props.size === 'sm') classes.push('progress_sm');
  if (props.size === 'lg') classes.push('progress_lg');
  if (props.striped) classes.push('progress_striped');
  if (props.animated) classes.push('progress_animated');
  if (props.indeterminate) classes.push('is-indeterminate');
  if (props.inside) classes.push('progress_inside');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const barStyle = computed(() => ({ width: `${props.percent}%` }));
const displayValue = computed(() => `${props.percent}%`);
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <div v-if="showInfo || label" class="progress_header">
      <span v-if="label" class="progress_label">{{ label }}</span>
      <span v-if="showInfo" class="progress_value">{{ displayValue }}</span>
    </div>
    <div
      class="progress_track"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : percent"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="ariaLabel"
      :aria-busy="indeterminate ? 'true' : undefined"
    >
      <span class="progress_bar" :style="barStyle">{{ inside ? displayValue : '' }}</span>
    </div>
  </div>
</template>
