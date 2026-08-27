<!--
  NavbarItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarItem' });
defineProps({ label: String, href: { type: String, default: '#' }, active: Boolean });
defineEmits(['click']);
</script>
<template>
  <li class="navbar_item">
    <a
      :href="href"
      :class="['navbar_link', active && 'is-active']"
      :aria-current="active ? 'page' : undefined"
      @click.prevent="$emit('click', $event)"
      ><slot>{{ label }}</slot
      ><slot name="badge"
    /></a>
  </li>
</template>
