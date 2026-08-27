<!--
  MenuGroup 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmMenuGroup' });
defineProps({ title: { type: String, required: true } });
</script>
<template>
  <li class="menu_group" role="presentation">
    <span class="menu_group-title">{{ title }}</span>
  </li>
</template>
