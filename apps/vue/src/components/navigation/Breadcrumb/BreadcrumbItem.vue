<!--
  BreadcrumbItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmBreadcrumbItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 현재·비활성, 아이콘, 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  label: String, // 경로 항목에 표시할 기본 텍스트입니다.
  href: String, // 지정 시 링크로 렌더할 대상 주소입니다.
  current: Boolean, // 현재 페이지 항목인지 여부입니다.
  disabled: Boolean, // 링크 이동을 막을지 여부입니다.
  icon: Boolean, // 아이콘형 링크 스타일을 적용할지 여부입니다.
  ariaLabel: String, // 링크의 접근 가능한 이름을 지정합니다.
});

// 아이콘·비활성 상태를 링크 클래스에 반영합니다.
const linkClasses = computed(() =>
  ['breadcrumb_link', props.icon && 'breadcrumb_link-icon', props.disabled && 'is-disabled'].filter(
    Boolean,
  ),
);
</script>
<template>
  <!-- 현재·비활성·링크 여부에 따라 내부 요소를 선택합니다. -->
  <li
    :class="['breadcrumb_item', current && 'is-current']"
    :aria-current="current ? 'page' : undefined"
  >
    <a
      v-if="href && !current && !disabled"
      :class="linkClasses"
      :href="href"
      :aria-label="ariaLabel"
      ><slot>{{ label }}</slot></a
    ><span v-else-if="disabled" :class="linkClasses" aria-disabled="true"
      ><slot>{{ label }}</slot></span
    ><span v-else-if="current" class="breadcrumb_current"
      ><slot>{{ label }}</slot></span
    ><slot v-else>{{ label }}</slot>
  </li>
</template>
