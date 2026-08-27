<!--
  MenuDivider 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmMenuDivider' }); // 컴포넌트 표시 이름을 등록합니다.
</script>
<template>
  <!-- 장식용 구분선이므로 separator 역할만 둡니다. -->
  <li class="menu_divider" role="separator" />
</template>
