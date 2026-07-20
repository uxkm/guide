<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
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
  labelEnd: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  ariaLabel: String,
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Switch', {
  defaults: { size: 'md' },
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'ripple']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['switch'];
  if (props.labelEnd) classes.push('switch_label-end');
  if (props.size === 'sm') classes.push('switch_sm');
  if (props.size === 'lg') classes.push('switch_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasLabel = computed(() => Boolean(props.label || slots.default));
</script>

<template>
  <label ref="rootRef"
    v-bind="rippleAttrs" :class="rootClass" :aria-label="!hasLabel ? ariaLabel : undefined">
    <span v-if="hasLabel && labelEnd" class="switch_label">
      <slot>{{ label }}</slot>
    </span>
    <span class="switch_control">
      <input
        type="checkbox"
        class="switch_input"
        role="switch"
        :checked="checked"
        :disabled="disabled"
        :aria-label="!hasLabel ? ariaLabel : undefined"
        v-bind="attrs"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    <span v-if="hasLabel && !labelEnd" class="switch_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
