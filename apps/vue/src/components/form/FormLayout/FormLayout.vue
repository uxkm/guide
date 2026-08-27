<!--
  FormLayout 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFormLayout', inheritAttrs: false });

// 루트 요소와 배치·간격·레이블 열 옵션을 하나의 FormLayout API로 제공합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'form' }, // FormLayout의 루트 요소 또는 컴포넌트를 지정합니다.
  layout: { type: String, default: 'vertical' }, // 필드 배치 방향입니다.
  fit: Boolean, // 입력 영역을 공통 최대 너비로 제한합니다.
  compact: Boolean, // 필드 사이 간격을 줄입니다.
  labelAlign: { type: String, default: 'end' }, // 가로 레이아웃의 레이블 정렬입니다.
  labelWidth: { type: String, default: '' }, // 가로 레이아웃의 레이블 열 너비입니다.
});
const attrs = useAttrs();
const layouts = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 배치 방향입니다.
const labelWidths = new Set(['', 'sm', 'lg']); // 가로 레이아웃에서 허용하는 레이블 너비입니다.

// 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
const resolvedLayout = computed(() => (layouts.has(props.layout) ? props.layout : 'vertical'));

// 폼 단위 옵션과 사용자가 전달한 클래스를 공통 form_* 클래스로 변환합니다.
const classes = computed(() =>
  [
    'form', // 폼 레이아웃을 활성화하는 필수 클래스입니다.
    `form_${resolvedLayout.value}`, // 세로·가로·인라인 배치 클래스입니다.
    props.fit && 'form_fit', // 입력 최대 너비 제한입니다.
    props.compact && 'form_compact', // 조밀한 간격 변형입니다.
    resolvedLayout.value === 'horizontal' &&
      props.labelAlign === 'start' &&
      'form_label-align-start', // 가로 배치에서 레이블 시작 정렬입니다.
    resolvedLayout.value === 'horizontal' &&
      labelWidths.has(props.labelWidth) &&
      props.labelWidth &&
      `form_label-width-${props.labelWidth}`, // 검증된 레이블 열 너비입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
</script>

<template>
  <!-- as에 지정한 시맨틱 루트로 렌더링하고 나머지 form 속성을 그대로 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="FormLayout">
    <slot />
  </component>
</template>
