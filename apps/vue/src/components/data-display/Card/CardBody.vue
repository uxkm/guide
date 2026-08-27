<!--
  CardBody 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardBody', inheritAttrs: false });
const attrs = useAttrs();
// class를 제외한 전달 속성은 body 루트에 적용하고 사용자 class는 별도로 병합합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- 본문 slot을 공통 card_body 영역에 렌더링합니다. -->
<template>
  <div v-bind="rootAttrs" class="card_body" :class="attrs.class"><slot /></div>
</template>
