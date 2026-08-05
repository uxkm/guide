<script setup>
import { computed, nextTick, ref, useAttrs, useSlots, watch } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

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
  labelEnd: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  ariaLabel: String,
});
const emit = defineEmits(['update:checked', 'change']);
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const inputRef = ref(null);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const internalChecked = ref(Boolean(props.checked ?? props.defaultChecked));
const currentChecked = computed(() =>
  props.checked === undefined ? internalChecked.value : Boolean(props.checked)
);

const formatCode = createComponentFormatter('Switch', {
  defaults: { size: 'md' },
  booleanProps: new Set(['checked', 'defaultChecked', 'disabled', 'labelEnd', 'ripple']),
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

const rootClass = computed(() => {
  const classes = ['switch'];
  if (props.labelEnd) classes.push('switch_label-end');
  if (resolvedSize.value === 'sm') classes.push('switch_sm');
  if (resolvedSize.value === 'lg') classes.push('switch_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasLabel = computed(() => Boolean(props.label || slots.default));
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

watch(
  () => props.checked,
  (checked) => {
    if (checked !== undefined) internalChecked.value = Boolean(checked);
  }
);

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
}
</script>

<template>
  <label ref="rootRef"
    v-bind="rippleAttrs" :class="rootClass" :aria-label="!hasLabel ? ariaLabel : undefined">
    <span v-if="hasLabel && labelEnd" class="switch_label">
      <slot>{{ label }}</slot>
    </span>
    <span class="switch_control">
      <input
        ref="inputRef"
        type="checkbox"
        class="switch_input"
        role="switch"
        :checked="currentChecked"
        :disabled="disabled"
        :aria-label="!hasLabel ? ariaLabel : undefined"
        v-bind="inputAttrs"
        @change="onChange"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    <span v-if="hasLabel && !labelEnd" class="switch_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
