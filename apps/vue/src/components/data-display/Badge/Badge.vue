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
  label: String,
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  dot: Boolean,
  count: Boolean,
  dotOnly: Boolean,
  ariaLabel: String,
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
