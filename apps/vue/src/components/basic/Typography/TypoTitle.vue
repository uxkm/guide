<!--
  TypoTitle 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmTypoTitle' });

const props = defineProps({
  level: { // 1~5 제목 단계입니다.
    type: [Number, String],
    default: 1,
    validator: (value) => [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'].includes(value),
  }, // 1~5 제목 단계입니다. 허용되지 않으면 1로 되돌립니다.
  color: String, // color_* 공통 색상 클래스입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
});

const resolvedLevel = computed(() =>
  [1, 2, 3, 4, 5].includes(Number(props.level)) ? Number(props.level) : 1,
);
const rootTag = computed(() => `h${resolvedLevel.value}`);
const classes = computed(() =>
  [`typo_title-${resolvedLevel.value}`, props.color && `color_${props.color}`].filter(Boolean),
);
</script>

<template>
  <component :is="rootTag" :class="classes" data-component="TypoTitle"
    ><slot>{{ label }}</slot></component
  >
</template>
