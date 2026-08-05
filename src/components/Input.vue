<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { useInputDemoCode } from '@/composables/useDemoCode';
import Icon from '@/components/Icon.vue';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const SEGMENTED_INPUT_SELECTOR = '[data-input-split], [data-input-otp]';

function getSegmentedInputs(input) {
  const container = input.closest(SEGMENTED_INPUT_SELECTOR);
  if (!container) return null;

  return {
    container,
    inputs: Array.from(container.querySelectorAll('input:not(:disabled)')),
  };
}

function setNativeInputValue(input, nextValue) {
  const descriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  );

  if (descriptor?.set) {
    descriptor.set.call(input, nextValue);
  } else {
    input.value = nextValue;
  }

  input.dispatchEvent(new Event('input', { bubbles: true }));
}

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
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);

useInputDemoCode(
  () => ({
    ...props,
    size: resolvedSize.value,
  }),
  rootRef,
  attrs
);

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
  if (resolvedSize.value === 'sm') classes.push('input_sm');
  if (resolvedSize.value === 'lg') classes.push('input_lg');
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
    return value.replace(/[a-zA-ZeE+-]/g, '');
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
  const next = sanitizeValue(event.currentTarget.value);
  applyValue(event, next);

  const segmented = getSegmentedInputs(event.currentTarget);
  const maxLength = event.currentTarget.maxLength;
  if (!segmented || maxLength <= 0 || String(next).length < maxLength) return;

  const index = segmented.inputs.indexOf(event.currentTarget);
  const nextInput = segmented.inputs[index + 1];
  if (nextInput) {
    nextInput.focus();
    nextInput.select();
  }
}

function onKeydown(event) {
  if (event.defaultPrevented) return;

  const segmented = getSegmentedInputs(event.currentTarget);
  if (!segmented) return;

  const index = segmented.inputs.indexOf(event.currentTarget);
  if (index < 0) return;

  if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
    segmented.inputs[index - 1].focus();
    return;
  }

  if (!segmented.container.hasAttribute('data-input-otp')) return;

  if (event.key === 'ArrowLeft' && index > 0) {
    event.preventDefault();
    segmented.inputs[index - 1].focus();
  }

  if (event.key === 'ArrowRight' && index < segmented.inputs.length - 1) {
    event.preventDefault();
    segmented.inputs[index + 1].focus();
  }
}

function onPaste(event) {
  if (event.defaultPrevented) return;

  const rawPasted = event.clipboardData?.getData('text') ?? '';
  const segmented = getSegmentedInputs(event.currentTarget);

  if (segmented) {
    const numericOnly =
      isNumericOnly.value
      || segmented.container.hasAttribute('data-input-numeric')
      || segmented.container.hasAttribute('data-input-otp');
    const pasted = numericOnly ? rawPasted.replace(/\D/g, '') : rawPasted;
    if (!pasted) return;

    event.preventDefault();

    const startIndex = segmented.inputs.indexOf(event.currentTarget);
    let offset = 0;
    let lastFilledIndex = startIndex;

    for (
      let index = startIndex;
      index < segmented.inputs.length && offset < pasted.length;
      index += 1
    ) {
      const target = segmented.inputs[index];
      const limit = target.maxLength > 0 ? target.maxLength : 1;
      const chunk = pasted.slice(offset, offset + limit);
      setNativeInputValue(target, chunk);
      offset += chunk.length;
      lastFilledIndex = index;
    }

    const focusIndex =
      offset < pasted.length
        ? segmented.inputs.length - 1
        : Math.min(lastFilledIndex + 1, segmented.inputs.length - 1);
    segmented.inputs[focusIndex]?.focus();
    segmented.inputs[focusIndex]?.select();
    return;
  }

  if (!isNumericOnly.value) return;

  event.preventDefault();

  const pasted = rawPasted.replace(/\D/g, '');
  if (!pasted) return;

  const input = event.currentTarget;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  const merged = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`;

  setNativeInputValue(input, sanitizeValue(merged));
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
        @keydown="onKeydown"
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
        @keydown="onKeydown"
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
      @keydown="onKeydown"
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
    @keydown="onKeydown"
    @paste="onPaste"
  />
</template>
