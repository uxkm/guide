<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormField', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  label: { type: String, default: '' },
  for: { type: String, default: '' },
  required: Boolean,
  hint: { type: String, default: '' },
  error: { type: String, default: '' },
  success: { type: String, default: '' },
  fit: Boolean
});
const attrs = useAttrs();
const classes = computed(() => ['form_field', props.fit && 'form_field_fit', attrs.class].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes">
    <label v-if="label" class="form_field-label" :for="props.for">{{ label }}<span v-if="required" class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label>
    <div class="form_field-control"><slot /></div>
    <p v-if="error" class="form_field-error" role="alert">{{ error }}</p>
    <p v-else-if="hint" class="form_field-hint">{{ hint }}</p>
    <p v-if="success" class="form_field-success">{{ success }}</p>
  </component>
</template>
