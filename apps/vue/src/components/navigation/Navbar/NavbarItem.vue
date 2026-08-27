<!--
  NavbarItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 활성 상태를 prop으로 받습니다.
defineProps({
  label: String, // 링크에 표시할 기본 텍스트입니다.
  href: { type: String, default: '#' }, // 항목이 가리키는 대상 주소입니다.
  active: Boolean, // 현재 페이지 항목인지 여부입니다.
});
defineEmits(['click']); // 링크 클릭 시 부모로 전달하는 이벤트입니다.
</script>
<template>
  <!-- 활성 상태를 링크 클래스와 aria-current에 반영합니다. -->
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
