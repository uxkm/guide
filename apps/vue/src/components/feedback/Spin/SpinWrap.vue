<!--
  SpinWrap 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';
import Spin from './Spin.vue';

defineOptions({ name: 'UxkmSpinWrap' });

// 로딩 오버레이와 래퍼 표현 옵션을 prop으로 받습니다.
const props = defineProps({
  loading: Boolean, // 로딩 오버레이 표시 여부입니다.
  block: Boolean, // 최소 높이를 확보하는 블록 래퍼입니다.
  blur: Boolean, // 로딩 중 본문 블러 효과입니다.
  tip: String, // 오버레이 Spin에 전달할 설명 문구입니다.
  ariaLabel: { type: String, default: '로딩 중' }, // 오버레이 Spin의 접근성 이름입니다.
});

// 래퍼·블록·블러·로딩 상태 클래스를 조합합니다.
const classes = computed(() =>
  [
    'spin_wrap', // SpinWrap 루트 클래스입니다.
    props.block && 'spin_wrap-block', // 블록형 최소 높이입니다.
    props.blur && 'spin_wrap-blur', // 본문 블러 변형입니다.
    props.loading && 'is-loading', // 로딩 활성 상태입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<template>
  <!-- 콘텐츠 위 오버레이 래퍼입니다. -->
  <div :class="classes" data-component="SpinWrap" :aria-busy="loading || undefined">
    <!-- 로딩 대상 콘텐츠 영역입니다. -->
    <div class="spin_wrap-body"><slot /></div>
    <!-- loading일 때만 오버레이 Spin을 올립니다. -->
    <Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" />
  </div>
</template>
