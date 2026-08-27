<!--
  TagGroup 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmTagGroup', inheritAttrs: false });
const props = defineProps({
  tight: Boolean, // 태그 간격을 좁힙니다.
  ariaLabel: String, // 그룹의 접근성 이름입니다.
});
const attrs = useAttrs();
// tight과 사용자 정의 class를 그룹 클래스에 합칩니다.
const classes = computed(() =>
  ['tag_group', props.tight && 'tag_group-tight', attrs.class].filter(Boolean),
);
</script>

<template>
  <!-- 관련 Tag를 하나의 접근 가능한 그룹으로 묶습니다. -->
  <div
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    data-component="TagGroup"
    role="group"
  >
    <slot />
  </div>
</template>
