<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { useInputDemoCode } from '@/composables/useDemoCode';
import Icon from '@/components/Icon.vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  error: Boolean,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  block: Boolean,
  /** 값이 있을 때 우측 지우기 버튼 (input_clearable) */
  clearable: Boolean,
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const inputEl = ref(null);

useInputDemoCode(props, rootRef, attrs);

const hasAddon = computed(() => Boolean(slots.prefix || slots.suffix));

const inputValue = ref(props.modelValue ?? '');

watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
);

const isReadonly = computed(() => {
  if ('readonly' in attrs || 'readOnly' in attrs) {
    const value = attrs.readonly ?? attrs.readOnly;
    return value !== false && value !== null;
  }
  return false;
});

const showClear = computed(
  () =>
    props.clearable
    && !props.disabled
    && !isReadonly.value
    && String(inputValue.value ?? '').length > 0,
);

const inputClass = computed(() => {
  const classes = ['input'];
  if (props.size === 'sm') classes.push('input_sm');
  if (props.size === 'lg') classes.push('input_lg');
  if (props.block) classes.push('input_block');
  if (props.error) classes.push('is-error');
  if (props.type === 'password' && inputValue.value.length > 0) {
    classes.push('input_masked');
  }
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const isNumericOnly = computed(() => attrs.inputmode === 'numeric');

function getMaxLength() {
  const max = attrs.maxlength ?? attrs.maxLength;
  return max ? Number(max) : 0;
}

function sanitizeValue(value) {
  if (isNumericOnly.value) {
    let next = value.replace(/\D/g, '');
    const maxLength = getMaxLength();
    if (maxLength > 0) next = next.slice(0, maxLength);
    return next;
  }

  if (props.type === 'number') {
    return value.replace(/[a-zA-ZeE+]/g, '');
  }

  return value;
}

function applyValue(event, value) {
  if (value !== event.target.value) {
    event.target.value = value;
  }
  inputValue.value = value;
  emit('update:modelValue', value);
}

function onInput(event) {
  applyValue(event, sanitizeValue(event.target.value));
}

function onPaste(event) {
  if (!isNumericOnly.value) return;

  event.preventDefault();

  const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
  if (!pasted) return;

  const input = event.target;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  const merged = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`;

  applyValue(event, sanitizeValue(merged));
}

function onClear() {
  if (props.disabled || isReadonly.value) return;

  inputValue.value = '';
  emit('update:modelValue', '');
  inputEl.value?.focus();
}
</script>

<template>
  <!-- 애드온 + clearable -->
  <div v-if="hasAddon" ref="rootRef" class="input_group" :class="attrs.class">
    <span v-if="slots.prefix" class="input_group-addon" aria-hidden="true" data-demo-slot="prefix">
      <slot name="prefix" />
    </span>
    <span
      v-if="clearable"
      class="input_clearable"
      :class="{ 'is-filled': showClear }"
    >
      <input
        ref="inputEl"
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="inputValue"
        :aria-invalid="error ? 'true' : undefined"
        v-bind="fallthroughAttrs"
        @input="onInput"
        @paste="onPaste"
      />
      <button
        type="button"
        class="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        :hidden="!showClear"
        @click="onClear"
      >
        <Icon name="close" />
      </button>
    </span>
    <template v-else>
      <input
        ref="inputEl"
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="inputValue"
        :aria-invalid="error ? 'true' : undefined"
        v-bind="fallthroughAttrs"
        @input="onInput"
        @paste="onPaste"
      />
    </template>
    <span v-if="slots.suffix" class="input_group-addon" data-demo-slot="suffix">
      <slot name="suffix" />
    </span>
  </div>

  <!-- clearable만 -->
  <div
    v-else-if="clearable"
    ref="rootRef"
    class="input_clearable"
    :class="[attrs.class, { 'is-filled': showClear }]"
  >
    <input
      ref="inputEl"
      :type="type"
      :class="inputClass"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputValue"
      :aria-invalid="error ? 'true' : undefined"
      v-bind="fallthroughAttrs"
      @input="onInput"
      @paste="onPaste"
    />
    <button
      type="button"
      class="input_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      :hidden="!showClear"
      @click="onClear"
    >
      <Icon name="close" />
    </button>
  </div>

  <!-- 기본 input -->
  <input
    v-else
    ref="rootRef"
    :type="type"
    :class="[inputClass, attrs.class]"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="inputValue"
    :aria-invalid="error ? 'true' : undefined"
    v-bind="fallthroughAttrs"
    @input="onInput"
    @paste="onPaste"
  />
</template>
