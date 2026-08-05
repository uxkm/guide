<script setup>
import { computed, nextTick, onMounted, ref, useAttrs, useSlots, watch } from 'vue';
import Button from '@/components/Button.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  error: Boolean,
  placeholder: String,
  open: Boolean,
  block: Boolean,
  custom: Boolean,
  selectText: Boolean,
  multiple: Boolean,
  /** 네이티브 select size(표시 행 수). 시각 크기 prop `size`와 구분 */
  listSize: Number,
  modelValue: [String, Number, Array],
});
useRipple(props, { defaultEnabled: false });

const triggerRippleAttrs = computed(() => {
  if (!props.custom) return {};
  if (props.ripple === false) return { 'data-ripple': 'false' };
  return { 'data-ripple': 'true' };
});

const customButtonAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...triggerRippleAttrs.value };
});


const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const hasValue = computed(() => {
  if (Array.isArray(props.modelValue)) return props.modelValue.length > 0;
  return props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '';
});

const formatCode = createComponentFormatter('Select', {
  defaults: { size: 'md' },
  booleanProps: new Set([
    'disabled',
    'error',
    'open',
    'block',
    'custom',
    'selectText',
    'multiple',
  ]),
  skipProps: ['modelValue'],
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    size: resolvedSize.value,
  }),
  slots,
  rootRef,
  attrs
);

const inputClass = computed(() => {
  const classes = ['input'];
  if (resolvedSize.value === 'sm') classes.push('input_sm');
  if (resolvedSize.value === 'lg') classes.push('input_lg');
  if (props.block) classes.push('input_block');
  if (props.error) classes.push('is-error');
  return classes;
});

const triggerClass = computed(() => {
  const classes = [];
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function getOptionValue(option) {
  return '_value' in option ? option._value : option.value;
}

function valuesMatch(left, right) {
  return Object.is(left, right) || String(left) === String(right);
}

function syncNativeSelection() {
  const select = rootRef.value;
  if (props.custom || !(select instanceof HTMLSelectElement) || props.modelValue === undefined) {
    return;
  }

  const selectedValues = props.multiple
    ? (Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue])
    : [props.modelValue];

  Array.from(select.options).forEach((option) => {
    option.selected = selectedValues.some((value) => valuesMatch(value, getOptionValue(option)));
  });
}

onMounted(syncNativeSelection);

watch(
  () => [props.modelValue, props.multiple, props.custom],
  () => nextTick(syncNativeSelection),
  { deep: true, flush: 'post' }
);

function onChange(event) {
  const select = event.currentTarget;
  const selectedOption = select.selectedOptions[0];
  const value = props.multiple
    ? Array.from(select.selectedOptions, getOptionValue)
    : (selectedOption ? getOptionValue(selectedOption) : '');
  emit('update:modelValue', value);
}
</script>

<template>
  <Button
    v-if="custom"
    ref="rootRef"
    variant="select"
    :class="triggerClass"
    :size="resolvedSize"
    :block="block"
    :select-text="selectText"
    :open="open"
    :error="error"
    :placeholder="!hasValue && !!placeholder"
    :disabled="disabled"
    haspopup="listbox"
    :expanded="open"
    :invalid="error"
    v-bind="customButtonAttrs"
  >
    <slot>{{ modelValue ?? placeholder }}</slot>
  </Button>
  <select
    v-else
    ref="rootRef"
    :class="[inputClass, attrs.class]"
    :disabled="disabled"
    :multiple="multiple"
    :size="listSize"
    :aria-invalid="error ? 'true' : undefined"
    v-bind="fallthroughAttrs"
    @change="onChange"
  >
    <option v-if="placeholder" value="" disabled hidden>{{ placeholder }}</option>
    <slot />
  </select>
</template>
