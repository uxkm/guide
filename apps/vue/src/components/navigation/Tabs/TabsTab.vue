<!--
  TabsTab 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineProps({ active: Boolean, disabled: Boolean });
</script>
<template>
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
