<!--
  BreadcrumbItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';
defineOptions({ name: 'UxkmBreadcrumbItem' });
const props = defineProps({
  label: String,
  href: String,
  current: Boolean,
  disabled: Boolean,
  icon: Boolean,
  ariaLabel: String,
});
const linkClasses = computed(() =>
  ['breadcrumb_link', props.icon && 'breadcrumb_link-icon', props.disabled && 'is-disabled'].filter(
    Boolean,
  ),
);
</script>
<template>
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
