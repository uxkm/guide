<!--
  Badge 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.
defineOptions({ name: 'UxkmBadge', inheritAttrs: false });

// 텍스트, 크기, 상태 점, 카운트와 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  label: String, // children 대신 표시할 텍스트입니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  dot: Boolean, // 텍스트 옆 상태 점을 표시합니다.
  count: Boolean, // 카운트형 배지 스타일입니다.
  dotOnly: Boolean, // 텍스트 없는 독립 상태 점입니다.
  ariaLabel: String, // 접근성 이름입니다. 상태 점에 권장합니다.
});

const attrs = useAttrs();
// prop을 badge_*와 color_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    props.dotOnly ? 'badge_dot-only' : 'badge',
    `color_${props.color}`,
    props.size !== 'md' && `badge_${props.size}`,
    !props.dotOnly && props.dot && 'badge_dot',
    !props.dotOnly && props.count && 'badge_count',
    attrs.class,
  ].filter(Boolean),
);
</script>

<template>
  <!-- dotOnly는 빈 status 요소, 나머지는 slot 또는 label 텍스트를 렌더링합니다. -->
  <span
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    :role="dotOnly ? 'status' : undefined"
    data-component="Badge"
    ><template v-if="!dotOnly"
      ><slot>{{ label }}</slot></template
    ></span
  >
</template>
