<!--
  AvatarGroup 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
defineOptions({ name: 'UxkmAvatarGroup' });

defineProps({
  ariaLabel: String, // 그룹의 접근성 이름입니다.
});
</script>

<template>
  <!-- 관련 Avatar를 하나의 겹침 그룹으로 묶고 그룹의 접근성 이름을 전달합니다. -->
  <div class="avatar_group" :aria-label="ariaLabel" data-component="AvatarGroup"><slot /></div>
</template>
