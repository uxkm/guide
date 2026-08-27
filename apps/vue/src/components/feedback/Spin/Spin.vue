<!--
  Spin 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmSpin' });

// 크기·색상·배치와 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  size: { type: String, default: 'md' }, // 스피너 크기입니다.
  tip: String, // 표시기 아래 설명 문구입니다.
  color: { type: String, default: 'primary' }, // 의미 색상입니다.
  inline: Boolean, // 인라인 배치입니다.
  block: Boolean, // 전체 너비 배치입니다.
  overlay: Boolean, // SpinWrap 등에서 쓰는 오버레이 배치입니다.
  ariaLabel: { type: String, default: '로딩 중' }, // status 영역의 접근성 이름입니다.
});

// 색상·크기·배치 클래스를 조합합니다.
const classes = computed(() =>
  [
    'spin', // Spin 루트 클래스입니다.
    `color_${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}`, // 의미 색상입니다.
    props.size !== 'md' && `spin_${props.size}`, // md가 아닐 때만 크기 변형입니다.
    props.inline && 'spin_inline', // 인라인 배치입니다.
    props.block && 'spin_block', // 전체 너비 배치입니다.
    props.overlay && 'spin_overlay', // 오버레이 배치입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<template>
  <!-- 로딩 status 루트입니다. -->
  <div
    :class="classes"
    data-component="Spin"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <!-- 회전하는 시각 표시기입니다. -->
    <span class="spin_indicator" aria-hidden="true" />
    <p v-if="tip" class="spin_tip">{{ tip }}</p>
    <slot />
  </div>
</template>
