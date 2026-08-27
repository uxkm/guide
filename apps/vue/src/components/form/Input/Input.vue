<!--
  Input 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmInput', inheritAttrs: false });
// 크기, 입력 타입, 상태, 지우기와 애드온 옵션을 하나의 Input API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  disabled: Boolean,
  error: Boolean,
  placeholder: String,
  type: { type: String, default: 'text' },
  block: Boolean,
  clearable: Boolean,
  modelValue: { type: [String, Number], default: '' },
});
const emit = defineEmits(['update:modelValue', 'clear']);
const attrs = useAttrs();
const slots = useSlots();
const inputElement = ref(null);
const inputValue = ref(props.modelValue ?? '');
// 외부 v-model 값이 바뀌면 내부 표시값을 동기화합니다.
watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
);

const hasAddon = computed(() => Boolean(slots.prefix || slots.suffix));
// readonly는 속성 표기 방식과 관계없이 동일한 boolean 상태로 계산합니다.
const readonly = computed(
  () =>
    ('readonly' in attrs || 'readOnly' in attrs) && (attrs.readonly ?? attrs.readOnly) !== false,
);
const showClear = computed(
  () =>
    props.clearable && !props.disabled && !readonly.value && String(inputValue.value).length > 0,
);
const inputClasses = computed(() =>
  [
    'input',
    props.size === 'sm' && 'input_sm',
    props.size === 'lg' && 'input_lg',
    props.block && 'input_block',
    props.error && 'is-error',
    props.type === 'password' && String(inputValue.value).length > 0 && 'input_masked',
    !hasAddon.value && !props.clearable && attrs.class,
  ].filter(Boolean),
);
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const numericOnly = computed(() => attrs.inputmode === 'numeric' || attrs.inputMode === 'numeric');

// 숫자 전용·number 입력은 키보드와 붙여넣기 모두 동일한 정제 규칙을 사용합니다.
function sanitize(value) {
  if (numericOnly.value) {
    const digits = String(value).replace(/\D/g, '');
    const max = Number(attrs.maxlength ?? attrs.maxLength ?? 0);
    return max > 0 ? digits.slice(0, max) : digits;
  }
  if (props.type === 'number') return String(value).replace(/[a-zA-ZeE+\-]/g, '');
  return value;
}
function applyValue(event, value) {
  if (value !== event.target.value) event.target.value = value;
  inputValue.value = value;
  emit('update:modelValue', value);
}
function handleInput(event) {
  applyValue(event, sanitize(event.target.value));
}
function handlePaste(event) {
  if (!numericOnly.value) return;
  event.preventDefault();
  const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
  if (!pasted) return;
  const start = event.target.selectionStart ?? event.target.value.length;
  const end = event.target.selectionEnd ?? event.target.value.length;
  applyValue(
    event,
    sanitize(`${event.target.value.slice(0, start)}${pasted}${event.target.value.slice(end)}`),
  );
}
function clear() {
  // 값을 비우고 clear 이벤트를 전달한 뒤 입력으로 포커스를 복원합니다.
  if (props.disabled || readonly.value) return;
  inputValue.value = '';
  emit('update:modelValue', '');
  emit('clear');
  inputElement.value?.focus();
}
</script>

<template>
  <!-- prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다. -->
  <div v-if="hasAddon" class="input_group" :class="attrs.class" data-component="InputGroup">
    <span v-if="$slots.prefix" class="input_group-addon" aria-hidden="true">
      <slot name="prefix" />
    </span>
    <span v-if="clearable" class="input_clearable" :class="{ 'is-filled': showClear }">
      <input
        ref="inputElement"
        v-bind="inputAttrs"
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="inputValue"
        :aria-invalid="error ? 'true' : attrs['aria-invalid']"
        data-component="Input"
        @input="handleInput"
        @paste="handlePaste"
      />
      <button
        type="button"
        class="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        :hidden="!showClear"
        @click="clear"
      >
        <Icon name="close" />
      </button>
    </span>
    <input
      v-else
      ref="inputElement"
      v-bind="inputAttrs"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      data-component="Input"
      @input="handleInput"
      @paste="handlePaste"
    />
    <span v-if="$slots.suffix" class="input_group-addon">
      <slot name="suffix" />
    </span>
  </div>
  <!-- 애드온이 없고 clearable이면 입력과 지우기 버튼만 동일한 wrapper에 둡니다. -->
  <span
    v-else-if="clearable"
    class="input_clearable"
    :class="[attrs.class, { 'is-filled': showClear }]"
  >
    <input
      ref="inputElement"
      v-bind="inputAttrs"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      data-component="Input"
      @input="handleInput"
      @paste="handlePaste"
    />
    <button
      type="button"
      class="input_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      :hidden="!showClear"
      @click="clear"
    >
      <Icon name="close" />
    </button>
  </span>
  <input
    v-else
    ref="inputElement"
    v-bind="inputAttrs"
    :type="type"
    :class="inputClasses"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="inputValue"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Input"
    @input="handleInput"
    @paste="handlePaste"
  />
</template>
