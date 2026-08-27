<!--
  SpinWrap 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';
import Spin from './Spin.vue';
defineOptions({ name: 'UxkmSpinWrap' });
const props = defineProps({
  loading: Boolean,
  block: Boolean,
  blur: Boolean,
  tip: String,
  ariaLabel: { type: String, default: '로딩 중' },
});
const classes = computed(() =>
  [
    'spin_wrap',
    props.block && 'spin_wrap-block',
    props.blur && 'spin_wrap-blur',
    props.loading && 'is-loading',
  ].filter(Boolean),
);
</script>

<template>
  <div :class="classes" data-component="SpinWrap" :aria-busy="loading || undefined">
    <div class="spin_wrap-body"><slot /></div>
    <Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" />
  </div>
</template>
