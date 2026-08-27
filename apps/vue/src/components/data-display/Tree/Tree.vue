<!--
  Tree 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTree', inheritAttrs: false });
const props = defineProps({
  bordered: Boolean,
  lines: Boolean,
  compact: Boolean,
  ariaLabel: String,
  multiselectable: Boolean,
});
const attrs = useAttrs();
// 트리 외형과 사용자 class를 tree_* 공통 클래스에 합칩니다.
const classes = computed(() =>
  [
    'tree',
    props.bordered && 'tree_bordered',
    props.lines && 'tree_lines',
    props.compact && 'tree_compact',
    attrs.class,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- tree role과 다중 선택 가능 상태를 루트 목록에 연결합니다. -->
<template>
  <ul
    v-bind="fallthroughAttrs"
    :class="classes"
    data-component="Tree"
    role="tree"
    :aria-label="ariaLabel"
    :aria-multiselectable="multiselectable || undefined"
  >
    <slot />
  </ul>
</template>
