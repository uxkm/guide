<!--
  CardFooter 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardFooter', inheritAttrs: false });
const props = defineProps({
  between: Boolean, // 양끝 정렬 변형 여부입니다.
});
const attrs = useAttrs();
// between과 사용자 class를 푸터 변형 클래스에 합칩니다.
const classes = computed(() =>
  ['card_footer', props.between && 'card_footer-between', attrs.class].filter(Boolean),
);
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- 푸터 slot을 기본 또는 양끝 정렬 레이아웃으로 렌더링합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div v-bind="rootAttrs" :class="classes"><slot /></div>
</template>
