<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmSelect', inheritAttrs: false });
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  nativeSize: { type: [String, Number], default: undefined },
  disabled: Boolean,
  error: Boolean,
  fit: Boolean,
  placeholder: String,
  multiple: Boolean,
  modelValue: { type: [String, Number, Array], default: undefined }
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const selectClasses = computed(() => [
  'input', props.size === 'sm' && 'input_sm', props.size === 'lg' && 'input_lg',
  props.fit && 'input_fit', props.error && 'is-error', attrs.class
].filter(Boolean));
const selectAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
const selectedValue = computed({
  get: () => props.modelValue ?? (props.placeholder ? '' : undefined),
  set: (value) => emit('update:modelValue', value)
});

function handleChange(event) {
  emit('change', event);
}
</script>

<template>
  <select v-model="selectedValue" v-bind="selectAttrs" :class="selectClasses" :disabled="disabled" :multiple="multiple" :size="nativeSize" :aria-invalid="error ? 'true' : attrs['aria-invalid']" data-component="Select" @change="handleChange">
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>
