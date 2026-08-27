<!--
  BadgeWrap 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
defineOptions({ name: 'UxkmBadgeWrap' });

defineProps({
  ariaLabel: String, // 겹침 영역의 접근성 이름입니다.
});
</script>

<template>
  <!-- 기준 요소와 겹침 Badge를 같은 좌표 컨텍스트에 배치합니다. -->
  <span class="badge_wrap" :aria-label="ariaLabel" data-component="BadgeWrap"><slot /></span>
</template>
