<!--
  Textarea 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, useId, watch } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 textarea에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmTextarea', inheritAttrs: false });

// 크기, resize, 상태, 글자 수와 지우기 옵션을 하나의 Textarea API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 텍스트 영역 높이와 글자 크기입니다.
  resize: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'vertical', 'horizontal', 'both'].includes(value),
  }, // 사용자가 조절할 수 있는 방향입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  showCount: Boolean, // 글자 수 카운터를 표시합니다.
  clearable: Boolean, // 값이 있을 때 지우기 버튼을 표시합니다.
  modelValue: { type: [String, Number], default: '' }, // v-model 현재 값입니다.
  maxLength: { type: [String, Number], default: undefined }, // 최대 입력 글자 수입니다.
  wrapperClass: { type: String, default: '' }, // 카운터 래퍼에 적용할 사용자 정의 클래스입니다.
});
const emit = defineEmits(['update:modelValue', 'clear']);
const attrs = useAttrs();
const textareaElement = ref(null);
const inputValue = ref(props.modelValue ?? '');

// 외부 v-model 값이 바뀌면 내부 표시값을 동기화합니다.
watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
);

const generatedId = useId();
// 기존 설명 id를 유지하면서 접근 가능한 카운터 id를 추가합니다.
const textareaId = computed(() => attrs.id || `textarea-${generatedId.replace(/:/g, '')}`);
const countId = computed(() => `${textareaId.value}-count`); // 카운터 요소 id입니다.
const describedBy = computed(
  () =>
    [attrs['aria-describedby'], props.showCount && countId.value].filter(Boolean).join(' ') ||
    undefined,
); // 카운터를 보조 설명으로 연결합니다.
const count = computed(() => String(inputValue.value).length); // 현재 글자 수입니다.
const nativeMaxLength = computed(() => {
  const max = Number(props.maxLength);
  return Number.isFinite(max) && max > 0 ? max : undefined;
}); // 0은 제한 없음으로 두고 네이티브 maxlength에 넘기지 않습니다.
const hasLimit = computed(() => nativeMaxLength.value != null); // 최대 길이 제한이 있는지 여부입니다.
const needsWrap = computed(() => props.showCount || props.clearable); // 카운터·지우기가 있으면 wrapper가 필요합니다.
const readonly = computed(
  () =>
    ('readonly' in attrs || 'readOnly' in attrs) && (attrs.readonly ?? attrs.readOnly) !== false,
);
const showClear = computed(
  () =>
    props.clearable && !props.disabled && !readonly.value && String(inputValue.value).length > 0,
); // 지우기 버튼을 보일지 여부입니다.

// 크기, resize 방향, 제한 너비와 오류 상태를 공통 클래스로 변환합니다.
const textareaClasses = computed(() =>
  [
    'textarea', // 텍스트 영역 필수 클래스입니다.
    props.size === 'sm' && 'textarea_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'textarea_lg', // 큰 크기 변형입니다.
    `textarea_resize_${props.resize}`, // 크기 조절 방향 클래스입니다.
    !needsWrap.value && props.fit && 'textarea_fit', // wrapper 없이 fit일 때 너비 제한입니다.
    props.error && 'is-error', // 오류 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

const wrapClasses = computed(() =>
  [
    props.showCount && 'textarea_show-count',
    props.clearable && 'textarea_clearable',
    showClear.value && 'is-filled',
    props.fit && 'textarea_wrap_fit',
    props.wrapperClass,
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 textarea로 전달합니다.
const textareaAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function handleInput(event) {
  // 입력값을 내부 상태와 v-model에 같은 순서로 반영합니다.
  inputValue.value = event.target.value;
  emit('update:modelValue', event.target.value);
}

function clear() {
  // 값을 비우고 clear 이벤트를 전달한 뒤 입력으로 포커스를 복원합니다.
  if (props.disabled || readonly.value) return;
  inputValue.value = '';
  emit('update:modelValue', '');
  emit('clear');
  textareaElement.value?.focus();
}
</script>

<template>
  <!-- 카운터·지우기가 있으면 textarea와 부가 UI를 wrapper로 묶습니다. -->
  <div v-if="needsWrap" class="textarea_wrap" :class="wrapClasses">
    <textarea
      ref="textareaElement"
      v-bind="textareaAttrs"
      :id="textareaId"
      :class="textareaClasses"
      :disabled="disabled"
      :maxlength="nativeMaxLength"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      :aria-describedby="describedBy"
      data-component="Textarea"
      @input="handleInput"
    />
    <button
      v-if="clearable"
      type="button"
      class="textarea_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      :hidden="!showClear"
      @click="clear"
    >
      <Icon name="close" />
    </button>
    <span
      v-if="showCount"
      :id="countId"
      class="textarea_count"
      :class="{ 'is-limit': hasLimit && count >= nativeMaxLength }"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="textarea_count_visual" aria-hidden="true">
        {{ count }}{{ hasLimit ? `/${nativeMaxLength}` : '' }}
      </span>
      <span class="textarea_count_announcer">
        {{ count }}자 입력{{ hasLimit ? `, 최대 ${nativeMaxLength}자` : '' }}
      </span>
    </span>
  </div>
  <!-- 부가 UI가 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다. -->
  <textarea
    v-else
    ref="textareaElement"
    v-bind="textareaAttrs"
    :class="textareaClasses"
    :disabled="disabled"
    :maxlength="nativeMaxLength"
    :value="inputValue"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Textarea"
    @input="handleInput"
  />
</template>
