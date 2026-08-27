<!--
  FlexItem 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 FlexItem 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFlexItem', inheritAttrs: false });

// 루트 요소, 반응형 너비, 확장, 정렬과 표시 순서를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.

  span: [String, Number], // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd: [String, Number], // md 이상에서 차지할 12단위 너비입니다.
  spanLg: [String, Number], // lg 이상에서 차지할 12단위 너비입니다.

  grow: Boolean, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor: { type: [String, Number], default: 1 }, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit: Boolean, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align: { type: String, default: '' }, // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order: [String, Number], // 화면에 표시할 순서를 1~12로 지정합니다.
});

// 선언하지 않은 속성을 수집하고 숫자 prop을 1~12 범위로 제한합니다.
const attrs = useAttrs();
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 개별 교차축 정렬만 CSS 클래스로 전달합니다.
const aligns = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

// grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
const resolvedGrow = computed(() =>
  props.grow && Number(props.growFactor) === 2 ? 'flex_grow-2' : props.grow ? 'flex_grow' : '',
);

// 반응형 span, 크기, 정렬, 순서와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    range(props.span) && `flex_item-span-${range(props.span)}`, // 기본 구간에서 차지할 너비입니다.
    range(props.spanMd) && `flex_item-span-md-${range(props.spanMd)}`, // md 이상에서 차지할 너비입니다.
    range(props.spanLg) && `flex_item-span-lg-${range(props.spanLg)}`, // lg 이상에서 차지할 너비입니다.

    resolvedGrow.value, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    props.fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    aligns.has(props.align) && props.align && `flex_self-${props.align}`, // 검증된 개별 교차축 정렬입니다.
    range(props.order) && `flex_order-${range(props.order)}`, // 검증된 화면 표시 순서입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="FlexItem">
    <!-- 호출 위치에서 전달한 FlexItem 콘텐츠를 렌더링합니다. -->
    <slot />
  </component>
</template>
