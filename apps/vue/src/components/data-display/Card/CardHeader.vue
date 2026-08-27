<!--
  CardHeader 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardHeader', inheritAttrs: false });
defineProps({ title: [String, Number], subtitle: [String, Number] });
const attrs = useAttrs();
// class를 제외한 전달 속성은 header 루트에 적용하고 사용자 class는 별도로 병합합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- 기본 slot이 제목·부제보다 우선하고 extra slot은 별도 액션 영역에 배치합니다. -->
<template>
  <div v-bind="rootAttrs" class="card_header" :class="attrs.class">
    <div class="card_header-main">
      <slot
        ><h3 v-if="title != null" class="card_title">{{ title }}</h3>
        <p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot
      >
    </div>
    <div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div>
  </div>
</template>
