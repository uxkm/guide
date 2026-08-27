<!--
  Timeline 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimeline', inheritAttrs: false });
const props = defineProps({
  card: Boolean,
  alternate: Boolean,
  horizontal: Boolean,
  labelCol: Boolean,
  icon: Boolean,
  iconSize: { type: String, default: 'md' },
  size: { type: String, default: 'md' },
  tag: { type: String, default: 'ol', validator: (value) => ['ol', 'ul'].includes(value) },
});
const attrs = useAttrs();
// 방향·크기·도트·카드 변형을 timeline_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'timeline',
    props.card && 'timeline_card',
    props.alternate && 'timeline_alternate',
    props.horizontal && 'timeline_horizontal',
    props.labelCol && 'timeline_label-col',
    props.icon && 'timeline_icon',
    props.icon && props.iconSize === 'sm' && 'timeline_icon-sm',
    props.size === 'sm' && 'timeline_sm',
    props.size === 'lg' && 'timeline_lg',
    attrs.class,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- 시간순 여부에 맞는 ol·ul 루트에 TimelineItem 목록을 렌더링합니다. -->
<template>
  <component :is="tag" v-bind="fallthroughAttrs" :class="classes" data-component="Timeline"
    ><slot
  /></component>
</template>
