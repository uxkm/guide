<!--
  Slider 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({ name: 'UxkmSlider', inheritAttrs: false });
const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  modelValue: { type: Number, default: 50 },
  value: Number,
  disabled: Boolean,
  vertical: Boolean,
  label: String,
  showValue: Boolean,
  stepper: Boolean,
  stepperAlways: Boolean,
  valueSuffix: { type: String, default: '' },
  hint: String,
  decreaseLabel: { type: String, default: '값 줄이기' },
  increaseLabel: { type: String, default: '값 늘리기' },
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  id: String,
  ripple: { type: Boolean, default: true },
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const generatedId = `slider-${Math.random().toString(36).slice(2, 9)}`;
const inputId = computed(() => props.id || generatedId);
const innerValue = ref(props.value ?? props.modelValue);
watch(
  () => [props.value, props.modelValue],
  ([value, modelValue]) => {
    innerValue.value = value ?? modelValue;
  },
);
const currentValue = computed(() =>
  Math.min(props.max, Math.max(props.min, Number(innerValue.value))),
);
const progress = computed(() =>
  props.max === props.min ? 0 : ((currentValue.value - props.min) / (props.max - props.min)) * 100,
);
const classes = computed(() =>
  [
    'slider',
    props.size === 'sm' && 'slider_sm',
    props.size === 'lg' && 'slider_lg',
    props.vertical && 'slider_vertical',
    props.stepper && 'slider_stepper',
    props.stepperAlways && 'slider_stepper_always',
    attrs.class,
  ].filter(Boolean),
);
const inputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
const valueText = computed(() => {
  const map = String(attrs['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((result, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) result[item.slice(0, separator)] = item.slice(separator + 1);
      return result;
    }, {});
  return (
    map[String(currentValue.value)] ??
    (attrs['data-slider-valuetext-suffix']
      ? `${currentValue.value} ${attrs['data-slider-valuetext-suffix']}`
      : attrs['aria-valuetext'])
  );
});
function update(next) {
  innerValue.value = Math.min(props.max, Math.max(props.min, Number(next)));
  emit('update:modelValue', innerValue.value);
  emit('change', innerValue.value);
}
</script>

<template>
  <div
    :class="classes"
    data-component="Slider"
    :data-ripple="ripple ? 'true' : undefined"
    :style="[{ '--slider-progress': `${progress}%` }, attrs.style]"
  >
    <div v-if="label || showValue" class="slider_header">
      <label v-if="label" class="slider_label" :for="inputId">{{ label }}</label>
      <output v-if="showValue" class="slider_value" :for="inputId"
        >{{ currentValue }}{{ valueSuffix || attrs['data-slider-suffix'] || '' }}</output
      >
    </div>
    <div v-if="stepper" class="slider_control">
      <button
        type="button"
        class="slider_step slider_step-decrease"
        data-ripple="true"
        :aria-label="decreaseLabel"
        :disabled="disabled || currentValue <= min"
        @click="update(currentValue - step)"
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
      <input
        v-bind="inputAttrs"
        :id="inputId"
        type="range"
        class="slider_input"
        :min="min"
        :max="max"
        :step="step"
        :value="currentValue"
        :disabled="disabled"
        :aria-valuetext="valueText || undefined"
        @input="update($event.target.value)"
      />
      <button
        type="button"
        class="slider_step slider_step-increase"
        data-ripple="true"
        :aria-label="increaseLabel"
        :disabled="disabled || currentValue >= max"
        @click="update(currentValue + step)"
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
    <input
      v-else
      v-bind="inputAttrs"
      :id="inputId"
      type="range"
      class="slider_input"
      :min="min"
      :max="max"
      :step="step"
      :value="currentValue"
      :disabled="disabled"
      :aria-valuetext="valueText || undefined"
      @input="update($event.target.value)"
    />
    <p v-if="hint" class="slider_hint">{{ hint }}</p>
    <slot />
  </div>
</template>
