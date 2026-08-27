<!--
  Radio 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmRadio', inheritAttrs: false });

// 그룹 이름, 제출 값, 선택 상태와 레이블 배치를 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  name: String, // 같은 그룹으로 묶을 라디오 name입니다.
  value: String, // 폼 제출 시 전달할 값입니다.
  checked: Boolean, // 제어 컴포넌트의 선택 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd: Boolean, // 레이블을 입력보다 앞에 배치합니다.
  button: Boolean, // 버튼형 라디오 변형을 사용합니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'radio', // 라디오 루트 필수 클래스입니다.
    props.labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
    props.button && 'radio_button', // 버튼형 변형입니다.
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
  <!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  <label
    v-if="!hasLabel"
    class="radio_control"
    :class="attrs.class"
    :aria-label="ariaLabel"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <input
      v-bind="inputAttrs"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      data-component="Radio"
    />
    <span class="radio_box" aria-hidden="true" />
  </label>
  <!-- 레이블이 있으면 버튼형·기본형을 하나의 label로 구성합니다. -->
  <label v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <input
      v-if="button"
      v-bind="inputAttrs"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      data-component="Radio"
    />
    <span v-if="labelEnd && !button" class="radio_label"
      ><slot>{{ label }}</slot></span
    >
    <span v-if="!button" class="radio_control">
      <input
        v-bind="inputAttrs"
        type="radio"
        class="radio_input"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        data-component="Radio"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    <span v-if="button || !labelEnd" class="radio_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>
