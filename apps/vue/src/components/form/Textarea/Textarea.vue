<!--
  Textarea 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, useId, watch } from 'vue';

defineOptions({ name: 'UxkmTextarea', inheritAttrs: false });
// 크기, resize, 상태와 글자 수 옵션을 하나의 Textarea API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  resize: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'vertical', 'horizontal', 'both'].includes(value),
  },
  disabled: Boolean,
  error: Boolean,
  fit: Boolean,
  showCount: Boolean,
  modelValue: { type: [String, Number], default: '' },
  maxLength: { type: [String, Number], default: undefined },
  wrapperClass: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();
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
const countId = computed(() => `${textareaId.value}-count`);
const describedBy = computed(
  () =>
    [attrs['aria-describedby'], props.showCount && countId.value].filter(Boolean).join(' ') ||
    undefined,
);
const count = computed(() => String(inputValue.value).length);
const hasLimit = computed(
  () =>
    props.maxLength !== undefined &&
    Number.isFinite(Number(props.maxLength)) &&
    Number(props.maxLength) >= 0,
);
const textareaClasses = computed(() =>
  [
    'textarea',
    props.size === 'sm' && 'textarea_sm',
    props.size === 'lg' && 'textarea_lg',
    `textarea_resize_${props.resize}`,
    !props.showCount && props.fit && 'textarea_fit',
    props.error && 'is-error',
    attrs.class,
  ].filter(Boolean),
);
const textareaAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function handleInput(event) {
  // 입력값을 내부 상태와 v-model에 같은 순서로 반영합니다.
  inputValue.value = event.target.value;
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <!-- showCount일 때만 textarea와 접근 가능한 카운터를 wrapper로 묶습니다. -->
  <div
    v-if="showCount"
    class="textarea_wrap textarea_show-count"
    :class="[fit && 'textarea_wrap_fit', wrapperClass]"
  >
    <textarea
      v-bind="textareaAttrs"
      :id="textareaId"
      :class="textareaClasses"
      :disabled="disabled"
      :maxlength="maxLength"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      :aria-describedby="describedBy"
      data-component="Textarea"
      @input="handleInput"
    />
    <span
      :id="countId"
      class="textarea_count"
      :class="{ 'is-limit': hasLimit && count >= Number(maxLength) }"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="textarea_count_visual" aria-hidden="true">
        {{ count }}{{ hasLimit ? `/${maxLength}` : '' }}
      </span>
      <span class="textarea_count_announcer">
        {{ count }}자 입력{{ hasLimit ? `, 최대 ${maxLength}자` : '' }}
      </span>
    </span>
  </div>
  <!-- 카운터가 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다. -->
  <textarea
    v-else
    v-bind="textareaAttrs"
    :class="textareaClasses"
    :disabled="disabled"
    :maxlength="maxLength"
    :value="inputValue"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Textarea"
    @input="handleInput"
  />
</template>
