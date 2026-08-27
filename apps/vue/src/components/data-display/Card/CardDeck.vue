<!--
  CardDeck 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCardDeck', inheritAttrs: false });
const props = defineProps({
  columns: { type: [String, Number], default: undefined }, // 고정 열 수(2 또는 3)입니다.
});
const attrs = useAttrs();
// columns는 지원하는 2·3열만 고정하고 나머지는 자동 반응형 그리드를 사용합니다.
const classes = computed(() =>
  [
    'card_deck',
    [2, 3].includes(Number(props.columns)) && `card_deck-${Number(props.columns)}`,
    attrs.class,
  ].filter(Boolean),
);
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- 관련 Card 목록을 하나의 반응형 deck으로 묶습니다. -->
  <div v-bind="rootAttrs" :class="classes" data-component="CardDeck"><slot /></div>
</template>
