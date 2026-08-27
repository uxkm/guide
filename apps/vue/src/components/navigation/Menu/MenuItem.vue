<!--
  MenuItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';
const props = defineProps({
  label: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
  color: String,
});
defineEmits(['click']);
const tag = computed(() =>
  props.href && !props.disabled ? 'a' : props.disabled ? 'span' : 'button',
);
const classes = computed(() =>
  [
    'menu_link',
    props.active && 'is-active',
    props.disabled && 'is-disabled',
    props.color && `color_${props.color}`,
  ].filter(Boolean),
);
</script>
<template>
  <li :class="['menu_item', disabled && 'is-disabled']">
    <component
      :is="tag"
      :class="classes"
      :href="tag === 'a' ? href : undefined"
      :type="tag === 'button' ? 'button' : undefined"
      :aria-current="active ? 'page' : undefined"
      :aria-disabled="disabled || undefined"
      @click="tag === 'a' ? $event.preventDefault() : undefined"
      ><slot name="icon" /><span v-if="label || $slots.default" class="menu_label"
        ><slot>{{ label }}</slot></span
      ><span v-if="$slots.extra" class="menu_extra"><slot name="extra" /></span
    ></component>
  </li>
</template>
