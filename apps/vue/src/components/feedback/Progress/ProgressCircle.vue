<!--
  ProgressCircle 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';
defineOptions({ name: 'UxkmProgressCircle' });
const props = defineProps({
  percent: { type: Number, default: 0 },
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  ariaLabel: { type: String, default: '진행률' },
});
const value = computed(() => Math.min(100, Math.max(0, Number(props.percent) || 0)));
const classes = computed(() =>
  [
    'progress',
    'progress_circle',
    `color_${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}`,
    props.size !== 'md' && `progress_${props.size}`,
  ].filter(Boolean),
);
</script>

<template>
  <div
    :class="classes"
    data-component="ProgressCircle"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="ariaLabel"
    :style="{ '--progress-percent': value }"
  >
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" /></svg
    ><span class="progress_circle-value">{{ value }}%</span>
  </div>
</template>
