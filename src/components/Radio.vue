<script setup>
import { computed, nextTick, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  name: String,
  checked: {
    type: Boolean,
    default: undefined,
  },
  defaultChecked: Boolean,
  disabled: Boolean,
  value: String,
  labelEnd: Boolean,
  button: Boolean,
  ariaLabel: String,
});
const emit = defineEmits(['update:checked', 'change']);
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
const currentChecked = computed(() =>
  props.checked === undefined ? props.defaultChecked : Boolean(props.checked)
);

const formatCode = createComponentFormatter('Radio', {
  booleanProps: new Set([
    'checked',
    'defaultChecked',
    'disabled',
    'labelEnd',
    'button',
    'ripple',
  ]),
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
const standaloneClass = computed(() => ['radio_control', attrs.class]);

const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function onChange(event) {
  const nextChecked = event.currentTarget.checked;
  emit('update:checked', nextChecked);
  emit('change', event);

  if (props.checked !== undefined) {
    nextTick(() => {
      if (inputRef.value) inputRef.value.checked = Boolean(props.checked);
    });
  }
}
</script>

<template>
  <label v-if="isStandalone" ref="rootRef"
    v-bind="interactiveRippleAttrs" :class="standaloneClass" :aria-label="ariaLabel">
    <input
      ref="inputRef"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="currentChecked"
      :disabled="disabled"
      v-bind="inputAttrs"
      @change="onChange"
    />
    <span class="radio_box" aria-hidden="true" />
  </label>
  <label v-else-if="button" ref="rootRef" v-bind="interactiveRippleAttrs" :class="rootClass">
    <input
      ref="inputRef"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="currentChecked"
      :disabled="disabled"
      v-bind="inputAttrs"
      @change="onChange"
    />
    <span class="radio_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <label v-else ref="rootRef" v-bind="rippleAttrs" :class="rootClass">
    <span v-if="labelEnd" class="radio_label">
      <slot>{{ label }}</slot>
    </span>
    <span class="radio_control">
      <input
        ref="inputRef"
        type="radio"
        class="radio_input"
        :name="name"
        :value="value"
        :checked="currentChecked"
        :disabled="disabled"
        v-bind="inputAttrs"
        @change="onChange"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    <span v-if="!labelEnd" class="radio_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
