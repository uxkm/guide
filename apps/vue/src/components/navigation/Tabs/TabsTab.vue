<!--
  TabsTab 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
// 활성·비활성 상태를 prop으로 받습니다.
defineProps({
  active: Boolean, // 현재 선택된 탭인지 여부입니다.
  disabled: Boolean, // 탭 선택을 막을지 여부입니다.
});
</script>
<template>
  <!-- 활성·비활성 상태를 탭 버튼 클래스에 반영합니다. -->
  <button
    type="button"
    :class="['tabs_tab', active && 'is-active', disabled && 'is-disabled']"
    role="tab"
    :aria-selected="active"
    :disabled="disabled || undefined"
  >
    <slot />
  </button>
</template>
