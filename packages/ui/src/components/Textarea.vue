<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  error: Boolean,
  placeholder: String,
  block: Boolean,
  rows: {
    type: [Number, String],
    default: 3,
  },
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Textarea', {
  defaults: { size: 'md', rows: 3 },
  booleanProps: new Set(['disabled', 'error', 'block']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['textarea'];
  if (props.size === 'sm') classes.push('textarea_sm');
  if (props.size === 'lg') classes.push('textarea_lg');
  if (props.block) classes.push('textarea_block');
  if (props.error) classes.push('is-error');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function onInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <textarea
    ref="rootRef"
    :class="rootClass"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    :aria-invalid="error ? 'true' : undefined"
    v-bind="fallthroughAttrs"
    @input="onInput"
  ><slot>{{ modelValue }}</slot></textarea>
</template>
