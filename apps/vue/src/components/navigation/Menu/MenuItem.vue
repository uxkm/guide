<!--
  MenuItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';

// 레이블, 주소, 활성·비활성, 색상 상태를 prop으로 받습니다.
const props = defineProps({
  label: String, // 항목에 표시할 기본 텍스트입니다.
  href: String, // 지정 시 앵커로 렌더할 대상 주소입니다.
  active: Boolean, // 현재 선택된 항목인지 여부입니다.
  disabled: Boolean, // 상호작용을 막을지 여부입니다.
  color: String, // 링크 텍스트에 적용할 색상 토큰입니다.
});
defineEmits(['click']); // 항목 클릭 시 부모로 전달하는 이벤트입니다.

// href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
const tag = computed(() =>
  props.href && !props.disabled ? 'a' : props.disabled ? 'span' : 'button',
);

// 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
const classes = computed(() =>
  [
    'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
    props.active && 'is-active', // 현재 선택 상태입니다.
    props.disabled && 'is-disabled', // 비활성 상태입니다.
    props.color && `color_${props.color}`, // 색상 토큰 클래스입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
</script>
<template>
  <!-- 상태별 태그로 아이콘·레이블·보조 콘텐츠를 렌더합니다. -->
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
