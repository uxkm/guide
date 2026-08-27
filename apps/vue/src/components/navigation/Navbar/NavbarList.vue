<!--
  NavbarList 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarList' }); // 컴포넌트 표시 이름을 등록합니다.
</script>
<template>
  <!-- NavbarItem 등 자식을 담는 목록 루트입니다. -->
  <ul class="navbar_list">
    <slot />
  </ul>
</template>
