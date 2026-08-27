<!--
  Stat 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmStat', inheritAttrs: false });
const props = defineProps({
  title: String, // 통계 라벨입니다.
  value: [String, Number], // 주요 수치입니다.
  prefix: String, // 수치 앞 접두어입니다.
  suffix: String, // 수치 뒤 접미어입니다.
  description: String, // 보조 설명입니다.
  trend: String, // 추세 텍스트입니다.
  trendColor: String, // 추세 색상 클래스입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  card: Boolean, // 카드형 외형입니다.
  shadow: Boolean, // 그림자 카드입니다.
});
const attrs = useAttrs();
const slots = useSlots();
// 크기·카드 스킨과 추세 색상을 각 영역의 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'stat',
    props.size !== 'md' && `stat_${props.size}`,
    props.card && 'stat_card',
    props.shadow && 'stat_shadow',
    attrs.class,
  ].filter(Boolean),
);
const trendClasses = computed(() =>
  ['stat_trend', props.trendColor && `color_${props.trendColor}`].filter(Boolean),
);
const descriptionClasses = computed(() =>
  ['stat_desc', props.description && props.trendColor && `color_${props.trendColor}`].filter(
    Boolean,
  ),
);
const showHeader = computed(() => Boolean(props.title && props.trend));
const showValueRow = computed(() => Boolean(props.prefix || props.suffix || slots.value));
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- 접두·접미가 있으면 value-row를 만들고 추세는 라벨 옆 또는 설명 위치에 한 번만 표시합니다. -->
  <div v-bind="fallthroughAttrs" :class="classes" data-component="Stat">
    <div v-if="showHeader" class="stat_header">
      <span class="stat_label">{{ title }}</span
      ><span :class="trendClasses"
        ><slot name="trend-icon"
          ><svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m6 15 6-6 6 6" /></svg></slot
        >{{ trend }}</span
      >
    </div>
    <span v-else-if="title" class="stat_label">{{ title }}</span>
    <div v-if="showValueRow" class="stat_value-row">
      <span v-if="prefix" class="stat_prefix">{{ prefix }}</span
      ><span v-if="value != null || $slots.value" class="stat_value"
        ><slot name="value">{{ value }}</slot></span
      ><span v-if="suffix" class="stat_suffix">{{ suffix }}</span>
    </div>
    <span v-else-if="value != null || $slots.value" class="stat_value"
      ><slot name="value">{{ value }}</slot></span
    >
    <span v-if="description" :class="descriptionClasses">{{ description }}</span>
    <span v-else-if="trend && !showHeader" :class="trendClasses"
      ><slot name="trend-icon"
        ><svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 15 6-6 6 6" /></svg></slot
      >{{ trend }}</span
    >
    <slot />
  </div>
</template>
