<!--
  TimelineItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimelineItem', inheritAttrs: false });
const props = defineProps({
  color: { type: String, default: 'primary' }, // 도트 색상입니다.
  title: String, // SVG title과 접근성 이름 후보입니다.
  description: String, // 항목 설명입니다.
  time: String, // 시간 텍스트입니다.
  datetime: String, // time 요소의 datetime입니다.
  label: String, // 시간·라벨 텍스트입니다.
  labelDatetime: String, // 라벨 time의 datetime입니다.
  active: Boolean, // 현재 페이지 활성 상태입니다.
  pending: Boolean, // 대기·진행 중 항목입니다.
  outline: Boolean, // 도트 외곽선 스타일입니다.
});
const attrs = useAttrs();
// 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
const itemClasses = computed(() =>
  ['timeline_item', props.active && 'is-active', props.pending && 'is-pending', attrs.class].filter(
    Boolean,
  ),
);
const dotClasses = computed(() =>
  [
    'timeline_dot',
    props.outline && 'timeline_dot-outline',
    props.color && `color_${props.color}`,
  ].filter(Boolean),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<!-- 시간 값은 time 요소로, 장식용 도트는 접근성 트리에서 숨겨 렌더링합니다. -->
<template>
  <li v-bind="fallthroughAttrs" :class="itemClasses" data-component="TimelineItem">
    <time v-if="label" class="timeline_label" :datetime="labelDatetime">{{ label }}</time
    ><span v-if="$slots.dot" class="timeline_dot" aria-hidden="true"><slot name="dot" /></span
    ><span v-else :class="dotClasses" aria-hidden="true" />
    <div class="timeline_content">
      <slot
        ><time v-if="time" class="timeline_time" :datetime="datetime">{{ time }}</time>
        <p v-if="title" class="timeline_title">{{ title }}</p>
        <p v-if="description" class="timeline_desc">{{ description }}</p></slot
      >
      <div v-if="$slots.meta" class="timeline_meta"><slot name="meta" /></div>
    </div>
  </li>
</template>
