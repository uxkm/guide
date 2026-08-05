<script setup>
import { computed, inject, nextTick, onMounted, ref, useAttrs, useSlots, watch } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { TEXTAREA_SHOW_COUNT_KEY } from '@/composables/useTextareaShowCount';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

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
const showCount = inject(TEXTAREA_SHOW_COUNT_KEY, null);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);

const formatCode = createComponentFormatter('Textarea', {
  defaults: { size: 'md', rows: 3 },
  booleanProps: new Set(['disabled', 'error', 'block']),
  skipProps: ['modelValue'],
  selfClosing: true,
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
  const classes = ['textarea'];
  if (resolvedSize.value === 'sm') classes.push('textarea_sm');
  if (resolvedSize.value === 'lg') classes.push('textarea_lg');
  if (props.block) classes.push('textarea_block');
  if (props.error) classes.push('is-error');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, 'aria-describedby': _ariaDescribedby, ...rest } = attrs;
  return rest;
});

const ariaDescribedby = computed(() => {
  const ids = `${attrs['aria-describedby'] ?? ''} ${showCount?.countId.value ?? ''}`
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return ids.length ? [...new Set(ids)].join(' ') : undefined;
});

function syncCount() {
  if (!showCount || !rootRef.value) return;
  showCount.updateCount(rootRef.value.value, rootRef.value.maxLength);
}

onMounted(syncCount);

watch(
  () => [props.modelValue, attrs.maxlength, attrs.maxLength],
  () => nextTick(syncCount),
  { flush: 'post' }
);

function onInput(event) {
  emit('update:modelValue', event.target.value);
  showCount?.updateCount(event.target.value, event.target.maxLength);
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
    :aria-describedby="ariaDescribedby"
    v-bind="fallthroughAttrs"
    @input="onInput"
  ><slot>{{ modelValue }}</slot></textarea>
</template>
