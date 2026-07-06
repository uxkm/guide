<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { useInputDemoCode } from '@/composables/useDemoCode';

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
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useInputDemoCode(props, rootRef, attrs);

const hasAddon = computed(() => Boolean(slots.prefix || slots.suffix));

const inputValue = ref(props.modelValue ?? '');

watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
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
</script>

<template>
  <div v-if="hasAddon" ref="rootRef" class="input_group" :class="attrs.class">
    <span v-if="slots.prefix" class="input_group-addon" aria-hidden="true" data-demo-slot="prefix">
      <slot name="prefix" />
    </span>
    <input
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
    <span v-if="slots.suffix" class="input_group-addon" data-demo-slot="suffix">
      <slot name="suffix" />
    </span>
  </div>
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
