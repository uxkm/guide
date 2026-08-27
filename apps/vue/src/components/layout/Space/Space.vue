<!--
  Space 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Space 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSpace', inheritAttrs: false });

// 간격, 방향, 줄바꿈, 너비와 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Space의 루트 요소 또는 컴포넌트를 지정합니다.
  gap: { type: String, default: undefined }, // 자식 사이 간격을 지정합니다.
  size: { type: String, default: '' }, // gap의 이전 호환 이름입니다.
  vertical: Boolean, // 자식을 세로로 배치합니다.
  wrap: Boolean, // 자식 줄바꿈을 허용합니다.
  block: Boolean, // 부모 너비를 채우는 block flex로 표시합니다.
  align: { type: String, default: '' }, // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify: { type: String, default: '' }, // 주축에서 자식을 배치하는 방식을 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

// gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
const resolvedSize = computed(() => (props.gap ?? props.size) || 'md');

// 간격·방향·줄바꿈·너비·정렬 상태와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    sizes.has(resolvedSize.value) &&
      resolvedSize.value !== 'md' &&
      `space_gap-${resolvedSize.value}`, // md가 아닐 때만 간격 클래스를 붙입니다.
    props.vertical && 'space_vertical', // 세로 배치 변형입니다.
    props.wrap && 'space_wrap', // 줄바꿈 변형입니다.
    props.block && 'space_block', // 전체 너비 block flex 변형입니다.
    aligns.has(props.align) && props.align && `space_align-${props.align}`, // 검증된 교차축 정렬입니다.
    justifies.has(props.justify) && props.justify && `space_justify-${props.justify}`, // 검증된 주축 정렬입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Space">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Space</slot>
  </component>
</template>
