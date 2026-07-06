<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
  value: {
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
  modelValue: Number,
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const inputId = `slider-${Math.random().toString(36).slice(2, 9)}`;

const formatCode = createComponentFormatter('Slider', {
  defaults: { min: 0, max: 100, value: 50, size: 'md' },
  booleanProps: new Set(['disabled', 'vertical', 'showValue', 'stepper', 'stepperAlways']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const currentValue = computed(() => props.modelValue ?? props.value);

const rootClass = computed(() => {
  const classes = ['slider'];
  if (props.size === 'sm') classes.push('slider_sm');
  if (props.size === 'lg') classes.push('slider_lg');
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
  const next = Math.min(props.max, Math.max(props.min, currentValue.value + delta * step));
  emit('update:modelValue', next);
}

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function onInput(event) {
  emit('update:modelValue', Number(event.target.value));
}
</script>

<template>
  <div ref="rootRef" :class="rootClass"
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
        :id="inputId"
        type="range"
        class="slider_input"
        :min="min"
        :max="max"
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
      :id="inputId"
      type="range"
      class="slider_input"
      :min="min"
      :max="max"
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
