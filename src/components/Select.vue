<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
  modelValue: [String, Number],
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

const formatCode = createComponentFormatter('Select', {
  defaults: { size: 'md' },
  booleanProps: new Set(['disabled', 'error', 'open', 'block', 'custom', 'selectText']),
  skipProps: ['modelValue'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const inputClass = computed(() => {
  const classes = ['input'];
  if (props.size === 'sm') classes.push('input_sm');
  if (props.size === 'lg') classes.push('input_lg');
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

function onChange(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <Button
    v-if="custom"
    ref="rootRef"
    variant="select"
    :class="triggerClass"
    :size="size"
    :block="block"
    :select-text="selectText"
    :open="open"
    :error="error"
    :placeholder="!modelValue && !!placeholder"
    :disabled="disabled"
    haspopup="listbox"
    :expanded="open"
    :invalid="error"
    v-bind="customButtonAttrs"
  >
    <slot>{{ modelValue || placeholder }}</slot>
  </Button>
  <select
    v-else
    ref="rootRef"
    :class="[inputClass, attrs.class]"
    :disabled="disabled"
    :value="modelValue"
    :aria-invalid="error ? 'true' : undefined"
    v-bind="fallthroughAttrs"
    @change="onChange"
  >
    <option v-if="placeholder" value="" disabled selected hidden>{{ placeholder }}</option>
    <slot />
  </select>
</template>
