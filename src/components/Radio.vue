<script setup>
import { computed, ref, useAttrs, useId, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  name: String,
  checked: Boolean,
  disabled: Boolean,
  value: String,
  labelEnd: Boolean,
  button: Boolean,
  ariaLabel: String,
});
const { rippleAttrs } = useRipple(props, { defaultEnabled: false });

const interactiveRippleAttrs = computed(() => {
  if (props.ripple === false) return { 'data-ripple': 'false' };
  if (props.ripple === true || isStandalone.value || props.button) {
    return { 'data-ripple': 'true' };
  }
  return {};
});


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const inputId = useId();

const formatCode = createComponentFormatter('Radio', {
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['radio'];
  if (props.labelEnd) classes.push('radio_label-end');
  if (props.button) classes.push('radio_button');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasLabel = computed(() => Boolean(props.label || slots.default));
const isStandalone = computed(() => !hasLabel.value);
</script>

<template>
  <label v-if="isStandalone" ref="rootRef"
    v-bind="interactiveRippleAttrs" class="radio_control" :aria-label="ariaLabel">
    <input
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      v-bind="attrs"
    />
    <span class="radio_box" aria-hidden="true" />
  </label>
  <label v-else-if="button" ref="rootRef" v-bind="interactiveRippleAttrs" :class="rootClass">
    <input
      :id="inputId"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      v-bind="attrs"
    />
    <span class="radio_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <div v-else ref="rootRef" v-bind="rippleAttrs" :class="rootClass">
    <label v-if="labelEnd" class="radio_label" :for="inputId">
      <slot>{{ label }}</slot>
    </label>
    <span class="radio_control">
      <input
        :id="inputId"
        type="radio"
        class="radio_input"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        v-bind="attrs"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    <label v-if="!labelEnd" class="radio_label" :for="inputId">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>
