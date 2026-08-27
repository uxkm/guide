<!--
  Select 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmSelect', inheritAttrs: false });
// 크기, placeholder, 다중 선택과 상태 옵션을 하나의 Select API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  nativeSize: { type: [String, Number], default: undefined },
  disabled: Boolean,
  error: Boolean,
  fit: Boolean,
  placeholder: String,
  multiple: Boolean,
  modelValue: { type: [String, Number, Array], default: undefined },
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
// 크기·너비·오류 상태와 외부 클래스를 네이티브 select에 함께 적용합니다.
const selectClasses = computed(() =>
  [
    'input',
    props.size === 'sm' && 'input_sm',
    props.size === 'lg' && 'input_lg',
    props.fit && 'input_fit',
    props.error && 'is-error',
    attrs.class,
  ].filter(Boolean),
);
const selectAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const selectedValue = computed({
  // placeholder가 있으면 빈 값을 초기 선택값으로 사용하고 setter로 v-model을 갱신합니다.
  get: () => props.modelValue ?? (props.placeholder ? '' : undefined),
  set: (value) => emit('update:modelValue', value),
});

function handleChange(event) {
  // v-model 갱신과 별개로 네이티브 change 이벤트도 외부에 전달합니다.
  emit('change', event);
}
</script>

<template>
  <select
    v-model="selectedValue"
    v-bind="selectAttrs"
    :class="selectClasses"
    :disabled="disabled"
    :multiple="multiple"
    :size="nativeSize"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Select"
    @change="handleChange"
  >
    <!-- placeholder는 실제 값이 없는 비활성 option으로 제공합니다. -->
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>
