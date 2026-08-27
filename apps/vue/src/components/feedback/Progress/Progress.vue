<!--
  Progress 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmProgress' });

// 진행률·상태·표현 옵션을 prop으로 받습니다.
const props = defineProps({
  percent: { type: Number, default: 0 }, // 0~100 진행률입니다.
  status: { type: String, default: '' }, // 완료·예외 상태 색상입니다.
  size: { type: String, default: 'md' }, // 트랙 높이 크기입니다.
  showInfo: Boolean, // 상단 퍼센트 값 표시 여부입니다.
  label: String, // 상단 레이블 텍스트입니다.
  color: { type: String, default: 'primary' }, // status가 없을 때 사용하는 의미 색상입니다.
  striped: Boolean, // 줄무늬 패턴입니다.
  animated: Boolean, // 줄무늬 이동 애니메이션입니다.
  indeterminate: Boolean, // 값을 알 수 없는 불확정 진행입니다.
  inside: Boolean, // 바 안에 퍼센트 텍스트를 넣습니다.
  block: Boolean, // 전체 너비 배치입니다. false면 fit입니다.
  ariaLabel: { type: String, default: '진행률' }, // progressbar의 접근성 이름입니다.
});

// 진행률을 0~100 범위로 제한합니다.
const value = computed(() => Math.min(100, Math.max(0, Number(props.percent) || 0)));
// status가 있으면 상태 색상을, 없으면 color prop을 사용합니다.
const colorClass = computed(() =>
  props.status === 'success'
    ? 'color_success'
    : props.status === 'exception'
      ? 'color_danger'
      : `color_${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}`,
);
// 상태·크기·패턴·레이아웃 클래스를 조합합니다.
const classes = computed(() =>
  [
    'progress', // Progress 루트 클래스입니다.
    colorClass.value, // 의미·상태 색상 클래스입니다.
    props.block ? 'progress_block' : 'progress_fit', // 전체 너비 또는 콘텐츠 너비입니다.
    props.size !== 'md' && `progress_${props.size}`, // md가 아닐 때만 크기 변형입니다.
    props.striped && 'progress_striped', // 줄무늬 패턴입니다.
    props.animated && 'progress_animated', // 줄무늬 애니메이션입니다.
    props.indeterminate && 'is-indeterminate', // 불확정 진행 상태입니다.
    props.inside && 'progress_inside', // 바 안 텍스트 변형입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<template>
  <!-- 선형 진행률 루트입니다. -->
  <div :class="classes" data-component="Progress">
    <!-- 레이블·값 헤더는 showInfo 또는 label이 있을 때만 렌더합니다. -->
    <div v-if="showInfo || label" class="progress_header">
      <span v-if="label" class="progress_label">{{ label }}</span
      ><span v-if="showInfo" class="progress_value">{{ value }}%</span>
    </div>
    <!-- 트랙이 실제 progressbar 역할을 담당합니다. -->
    <div
      class="progress_track"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : value"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="ariaLabel"
      :aria-busy="indeterminate || undefined"
      :style="inside ? { background: 'var(--color-border-subtle)' } : undefined"
    >
      <!-- 채움 막대 너비는 진행률(%)과 같습니다. -->
      <span class="progress_bar" :style="{ width: `${value}%` }">{{
        inside ? `${value}%` : ''
      }}</span>
    </div>
  </div>
</template>
