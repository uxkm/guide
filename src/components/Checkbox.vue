<script setup>
import { computed, nextTick, onMounted, ref, useAttrs, useId, useSlots, watch } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  checked: {
    type: Boolean,
    default: undefined,
  },
  defaultChecked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean,
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
const generatedId = useId();
const inputId = computed(() => attrs.id ?? generatedId);
const internalChecked = ref(Boolean(props.checked ?? props.defaultChecked));
const currentChecked = computed(() =>
  props.checked === undefined ? internalChecked.value : Boolean(props.checked)
);

const formatCode = createComponentFormatter('Checkbox', {
  booleanProps: new Set([
    'checked',
    'defaultChecked',
    'disabled',
    'indeterminate',
    'labelEnd',
    'button',
    'ripple',
  ]),
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
const standaloneClass = computed(() => ['checkbox_control', attrs.class]);
const inputAttrs = computed(() => {
  const { class: _class, id: _id, ...rest } = attrs;
  return rest;
});

watch(
  () => props.checked,
  (checked) => {
    if (checked !== undefined) internalChecked.value = Boolean(checked);
  }
);

function syncIndeterminate() {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.indeterminate;
  }
}

onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);

function onChange(event) {
  const nextChecked = event.currentTarget.checked;

  if (props.checked === undefined) {
    internalChecked.value = nextChecked;
  } else {
    nextTick(() => {
      if (inputRef.value) inputRef.value.checked = Boolean(props.checked);
    });
  }

  emit('update:checked', nextChecked);
  emit('change', event);
  nextTick(syncIndeterminate);
}
</script>

<template>
  <label v-if="isStandalone" ref="rootRef"
    v-bind="interactiveRippleAttrs" :class="standaloneClass" :aria-label="ariaLabel">
    <input
      :id="attrs.id"
      ref="inputRef"
      type="checkbox"
      class="checkbox_input"
      :checked="currentChecked"
      :disabled="disabled"
      v-bind="inputAttrs"
      @change="onChange"
    />
    <span class="checkbox_box" aria-hidden="true" />
  </label>
  <label v-else-if="button" ref="rootRef" v-bind="interactiveRippleAttrs" :class="rootClass">
    <input
      :id="inputId"
      ref="inputRef"
      type="checkbox"
      class="checkbox_input"
      :checked="currentChecked"
      :disabled="disabled"
      v-bind="inputAttrs"
      @change="onChange"
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
        :checked="currentChecked"
        :disabled="disabled"
        v-bind="inputAttrs"
        @change="onChange"
      />
      <span class="checkbox_box" aria-hidden="true" />
    </span>
    <label v-if="!labelEnd" class="checkbox_label" :for="inputId">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>
