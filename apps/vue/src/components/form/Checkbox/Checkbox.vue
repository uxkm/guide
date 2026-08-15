<script setup>
import { computed, onMounted, ref, useAttrs, useId, useSlots, watch } from 'vue';
defineOptions({ name: 'UxkmCheckbox', inheritAttrs: false });
const props = defineProps({ label: String, checked: Boolean, disabled: Boolean, indeterminate: Boolean, labelEnd: Boolean, button: Boolean, ripple: { type: Boolean, default: true }, ariaLabel: String });
const attrs = useAttrs();
const slots = useSlots();
const inputRef = ref(null);
const inputId = useId();
const hasLabel = computed(() => Boolean(props.label || slots.default));
const rootClass = computed(() => ['checkbox', props.labelEnd && 'checkbox_label-end', props.button && 'checkbox_button', attrs.class].filter(Boolean));
const inputAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
function syncIndeterminate() { if (inputRef.value) inputRef.value.indeterminate = props.indeterminate; }
onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);
</script>
<template>
  <label v-if="!hasLabel" class="checkbox_control" :class="attrs.class" :aria-label="ariaLabel" :data-ripple="ripple ? 'true' : 'false'"><input ref="inputRef" v-bind="inputAttrs" type="checkbox" class="checkbox_input" :checked="checked" :disabled="disabled" data-component="Checkbox"><span class="checkbox_box" aria-hidden="true" /></label>
  <label v-else-if="button" :class="rootClass" :data-ripple="ripple ? 'true' : 'false'"><input :id="inputId" ref="inputRef" v-bind="inputAttrs" type="checkbox" class="checkbox_input" :checked="checked" :disabled="disabled" data-component="Checkbox"><span class="checkbox_label"><slot>{{ label }}</slot></span></label>
  <div v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'"><label v-if="labelEnd" class="checkbox_label" :for="inputId"><slot>{{ label }}</slot></label><span class="checkbox_control"><input :id="inputId" ref="inputRef" v-bind="inputAttrs" type="checkbox" class="checkbox_input" :checked="checked" :disabled="disabled" data-component="Checkbox"><span class="checkbox_box" aria-hidden="true" /></span><label v-if="!labelEnd" class="checkbox_label" :for="inputId"><slot>{{ label }}</slot></label></div>
</template>
