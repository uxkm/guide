<!--
  Switch 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSwitch', inheritAttrs: false });

// 켜짐 상태, 크기, 레이블 배치와 접근성 옵션을 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  checked: Boolean, // 제어 컴포넌트의 켜짐 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd: Boolean, // 레이블을 스위치보다 앞에 배치합니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 트랙과 레이블 크기입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 크기·레이블 배치와 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'switch', // 스위치 루트 필수 클래스입니다.
    props.labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
    props.size === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- 레이블·트랙·손잡이를 하나의 label로 묶어 스위치 UI를 구성합니다. -->
  <label
    :class="rootClass"
    :aria-label="!hasLabel ? ariaLabel : undefined"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <span v-if="hasLabel && labelEnd" class="switch_label"
      ><slot>{{ label }}</slot></span
    >
    <span class="switch_control">
      <input
        v-bind="inputAttrs"
        type="checkbox"
        class="switch_input"
        role="switch"
        :checked="checked"
        :disabled="disabled"
        :aria-label="!hasLabel ? ariaLabel : undefined"
        data-component="Switch"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    <span v-if="hasLabel && !labelEnd" class="switch_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>
