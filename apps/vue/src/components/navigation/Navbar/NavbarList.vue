<!--
  NavbarList 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarList' });
</script>
<template>
  <ul class="navbar_list">
    <slot />
  </ul>
</template>
