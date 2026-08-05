<script setup>
import { computed, nextTick, ref, useAttrs, useId, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  defaultValue: {
    type: Number,
    default: 50,
  },
  step: Number,
  disabled: Boolean,
  vertical: Boolean,
  label: String,
  showValue: Boolean,
  stepper: Boolean,
  stepperAlways: Boolean,
  valueSuffix: String,
  hint: String,
  decreaseLabel: String,
  increaseLabel: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  modelValue: {
    type: Number,
    default: undefined,
  },
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const inputRef = ref(null);
const generatedId = useId();
const inputId = computed(() => attrs.id ?? generatedId);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedMin = computed(() => Number(props.min));
const resolvedMax = computed(() => Number(props.max));
const internalValue = ref(Number(props.defaultValue));

const formatCode = createComponentFormatter('Slider', {
  defaults: { min: 0, max: 100, defaultValue: 50, size: 'md' },
  booleanProps: new Set(['disabled', 'vertical', 'showValue', 'stepper', 'stepperAlways']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    min: resolvedMin.value,
    max: resolvedMax.value,
    size: resolvedSize.value,
  }),
  slots,
  rootRef,
  attrs
);

const isControlled = computed(() => props.modelValue !== undefined);
const currentValue = computed(() =>
  isControlled.value ? Number(props.modelValue) : internalValue.value
);

function updateValue(nextValue) {
  if (!isControlled.value) internalValue.value = nextValue;
  emit('update:modelValue', nextValue);
}

const rootClass = computed(() => {
  const classes = ['slider'];
  if (resolvedSize.value === 'sm') classes.push('slider_sm');
  if (resolvedSize.value === 'lg') classes.push('slider_lg');
  if (props.vertical) classes.push('slider_vertical');
  if (props.stepper) classes.push('slider_stepper');
  if (props.stepperAlways) classes.push('slider_stepper_always');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const displayValue = computed(() => {
  const suffix = props.valueSuffix ?? '';
  return `${currentValue.value}${suffix}`;
});

function adjustValue(delta) {
  const step = props.step ?? 1;
  const next = Math.min(
    resolvedMax.value,
    Math.max(resolvedMin.value, currentValue.value + delta * step)
  );
  updateValue(next);
}

const fallthroughAttrs = computed(() => {
  const {
    class: _class,
    id: _id,
    style: _style,
    value: _value,
    ...rest
  } = attrs;
  return rest;
});

function onInput(event) {
  updateValue(Number(event.target.value));

  if (isControlled.value) {
    nextTick(() => {
      if (inputRef.value) inputRef.value.value = String(currentValue.value);
    });
  }
}
</script>

<template>
  <div ref="rootRef" :class="rootClass" :style="attrs.style"
    v-bind="rippleAttrs"
  >
    <div v-if="label || showValue" class="slider_header">
      <label v-if="label" class="slider_label" :for="inputId">{{ label }}</label>
      <output v-if="showValue" class="slider_value" :for="inputId">{{ displayValue }}</output>
    </div>
    <div v-if="stepper" class="slider_control">
      <Button
        v-bind="childRippleAttrs"
        variant="ghost"
        size="sm"
        icon-only
        class="slider_step slider_step-decrease"
        :aria-label="decreaseLabel || '값 줄이기'"
        :disabled="disabled"
        @click="adjustValue(-1)"
      >
        <template #icon-before>
          <Icon name="minus" size="sm" class="slider_step-icon" />
        </template>
      </Button>
      <input
        ref="inputRef"
        :id="inputId"
        type="range"
        class="slider_input"
        :min="resolvedMin"
        :max="resolvedMax"
        :step="step"
        :value="currentValue"
        :disabled="disabled"
        v-bind="fallthroughAttrs"
        @input="onInput"
      />
      <Button
        v-bind="childRippleAttrs"
        variant="ghost"
        size="sm"
        icon-only
        class="slider_step slider_step-increase"
        :aria-label="increaseLabel || '값 늘리기'"
        :disabled="disabled"
        @click="adjustValue(1)"
      >
        <template #icon-before>
          <Icon name="plus" size="sm" class="slider_step-icon" />
        </template>
      </Button>
    </div>
    <input
      v-else
      ref="inputRef"
      :id="inputId"
      type="range"
      class="slider_input"
      :min="resolvedMin"
      :max="resolvedMax"
      :step="step"
      :value="currentValue"
      :disabled="disabled"
      v-bind="fallthroughAttrs"
      @input="onInput"
    />
    <p v-if="hint" class="slider_hint">{{ hint }}</p>
    <slot />
  </div>
</template>
