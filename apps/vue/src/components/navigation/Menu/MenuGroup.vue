<!--
  MenuGroup 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmMenuGroup' }); // 컴포넌트 표시 이름을 등록합니다.

// 그룹 제목을 prop으로 받습니다.
defineProps({
  title: { type: String, required: true }, // 그룹을 구분하는 제목 텍스트입니다.
});
</script>
<template>
  <!-- 그룹 제목만 표시하는 비상호작용 목록 항목입니다. -->
  <li class="menu_group" role="presentation">
    <span class="menu_group-title">{{ title }}</span>
  </li>
</template>
