<script setup>
import { computed } from 'vue';
defineOptions({ name: 'UxkmProgress' });
const props = defineProps({ percent: { type: Number, default: 0 }, status: { type: String, default: '' }, size: { type: String, default: 'md' }, showInfo: Boolean, label: String, color: { type: String, default: 'primary' }, striped: Boolean, animated: Boolean, indeterminate: Boolean, inside: Boolean, block: Boolean, ariaLabel: { type: String, default: '진행률' } });
const value = computed(() => Math.min(100, Math.max(0, Number(props.percent) || 0)));
const colorClass = computed(() => props.status === 'success' ? 'color_success' : props.status === 'exception' ? 'color_danger' : `color_${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}`);
const classes = computed(() => ['progress', colorClass.value, props.block ? 'progress_block' : 'progress_fit', props.size !== 'md' && `progress_${props.size}`, props.striped && 'progress_striped', props.animated && 'progress_animated', props.indeterminate && 'is-indeterminate', props.inside && 'progress_inside'].filter(Boolean));
</script>

<template>
  <div :class="classes" data-component="Progress">
    <div v-if="showInfo || label" class="progress_header"><span v-if="label" class="progress_label">{{ label }}</span><span v-if="showInfo" class="progress_value">{{ value }}%</span></div>
    <div class="progress_track" role="progressbar" :aria-valuenow="indeterminate ? undefined : value" aria-valuemin="0" aria-valuemax="100" :aria-label="ariaLabel" :aria-busy="indeterminate || undefined" :style="inside ? { background: 'var(--color-border-subtle)' } : undefined"><span class="progress_bar" :style="{ width: `${value}%` }">{{ inside ? `${value}%` : '' }}</span></div>
  </div>
</template>
