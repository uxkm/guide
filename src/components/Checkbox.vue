<script setup>
import { computed, onMounted, ref, useAttrs, useId, useSlots, watch } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean,
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
const inputRef = ref(null);
const inputId = useId();

const formatCode = createComponentFormatter('Checkbox', {
  booleanProps: new Set(['checked', 'disabled', 'indeterminate', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['checkbox'];
  if (props.labelEnd) classes.push('checkbox_label-end');
  if (props.button) classes.push('checkbox_button');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasLabel = computed(() => Boolean(props.label || slots.default));
const isStandalone = computed(() => !hasLabel.value);

function syncIndeterminate() {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.indeterminate;
  }
}

onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);
</script>

<template>
  <label v-if="isStandalone" ref="rootRef"
    v-bind="interactiveRippleAttrs" class="checkbox_control" :aria-label="ariaLabel">
    <input
      ref="inputRef"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      v-bind="attrs"
    />
    <span class="checkbox_box" aria-hidden="true" />
  </label>
  <label v-else-if="button" ref="rootRef" v-bind="interactiveRippleAttrs" :class="rootClass">
    <input
      :id="inputId"
      ref="inputRef"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      v-bind="attrs"
    />
    <span class="checkbox_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <div v-else ref="rootRef" v-bind="rippleAttrs" :class="rootClass">
    <label v-if="labelEnd" class="checkbox_label" :for="inputId">
      <slot>{{ label }}</slot>
    </label>
    <span class="checkbox_control">
      <input
        :id="inputId"
        ref="inputRef"
        type="checkbox"
        class="checkbox_input"
        :checked="checked"
        :disabled="disabled"
        v-bind="attrs"
      />
      <span class="checkbox_box" aria-hidden="true" />
    </span>
    <label v-if="!labelEnd" class="checkbox_label" :for="inputId">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>
