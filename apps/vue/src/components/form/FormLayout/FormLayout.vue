<!--
  FormLayout 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormLayout', inheritAttrs: false });
// 루트 요소와 배치·간격·레이블 열 옵션을 하나의 FormLayout API로 제공합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'form' },
  layout: { type: String, default: 'vertical' },
  fit: Boolean,
  compact: Boolean,
  labelAlign: { type: String, default: 'end' },
  labelWidth: { type: String, default: '' },
});
const attrs = useAttrs();
const layouts = new Set(['vertical', 'horizontal', 'inline']);
const labelWidths = new Set(['', 'sm', 'lg']);
// 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
const resolvedLayout = computed(() => (layouts.has(props.layout) ? props.layout : 'vertical'));
// 폼 단위 옵션과 사용자가 전달한 클래스를 공통 form_* 클래스로 변환합니다.
const classes = computed(() =>
  [
    'form',
    `form_${resolvedLayout.value}`,
    props.fit && 'form_fit',
    props.compact && 'form_compact',
    resolvedLayout.value === 'horizontal' &&
      props.labelAlign === 'start' &&
      'form_label-align-start',
    resolvedLayout.value === 'horizontal' &&
      labelWidths.has(props.labelWidth) &&
      props.labelWidth &&
      `form_label-width-${props.labelWidth}`,
    attrs.class,
  ].filter(Boolean),
);
</script>

<template>
  <!-- as에 지정한 시맨틱 루트로 렌더링하고 나머지 form 속성을 그대로 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="FormLayout">
    <slot />
  </component>
</template>
