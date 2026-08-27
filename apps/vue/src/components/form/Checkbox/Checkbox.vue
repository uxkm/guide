<!--
  Checkbox 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, onMounted, ref, useAttrs, useId, useSlots, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmCheckbox', inheritAttrs: false });

// 체크 상태, 레이블 배치, 버튼형과 접근성 옵션을 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  checked: Boolean, // 제어 컴포넌트의 체크 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  indeterminate: Boolean, // 부분 선택 상태를 네이티브 indeterminate로 반영합니다.
  labelEnd: Boolean, // 레이블을 입력보다 앞에 배치합니다.
  button: Boolean, // 버튼형 체크박스 변형을 사용합니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const inputRef = ref(null);
const inputId = useId();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'checkbox', // 체크박스 루트 필수 클래스입니다.
    props.labelEnd && 'checkbox_label-end', // 레이블 우선 배치 변형입니다.
    props.button && 'checkbox_button', // 버튼형 변형입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

// indeterminate는 Vue prop이 아니므로 DOM에 직접 동기화합니다.
function syncIndeterminate() {
  if (inputRef.value) inputRef.value.indeterminate = props.indeterminate;
}
onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);
</script>

<template>
  <!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  <label
    v-if="!hasLabel"
    class="checkbox_control"
    :class="attrs.class"
    :aria-label="ariaLabel"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <input
      ref="inputRef"
      v-bind="inputAttrs"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      data-component="Checkbox"
    />
    <span class="checkbox_box" aria-hidden="true" />
  </label>
  <!-- 버튼형은 입력과 레이블을 하나의 label로 감쌉니다. -->
  <label v-else-if="button" :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <input
      :id="inputId"
      ref="inputRef"
      v-bind="inputAttrs"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      data-component="Checkbox"
    />
    <span class="checkbox_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
  <!-- 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다. -->
  <div v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <label v-if="labelEnd" class="checkbox_label" :for="inputId"
      ><slot>{{ label }}</slot></label
    >
    <span class="checkbox_control">
      <input
        :id="inputId"
        ref="inputRef"
        v-bind="inputAttrs"
        type="checkbox"
        class="checkbox_input"
        :checked="checked"
        :disabled="disabled"
        data-component="Checkbox"
      />
      <span class="checkbox_box" aria-hidden="true" />
    </span>
    <label v-if="!labelEnd" class="checkbox_label" :for="inputId"
      ><slot>{{ label }}</slot></label
    >
  </div>
</template>
