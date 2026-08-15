<script setup>
import { computed, useAttrs, useSlots } from 'vue';
defineOptions({ name: 'UxkmSwitch', inheritAttrs: false });
const props = defineProps({ label: String, checked: Boolean, disabled: Boolean, labelEnd: Boolean, size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, ripple: { type: Boolean, default: true }, ariaLabel: String });
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default));
const rootClass = computed(() => ['switch', props.labelEnd && 'switch_label-end', props.size === 'sm' && 'switch_sm', props.size === 'lg' && 'switch_lg', attrs.class].filter(Boolean));
const inputAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template>
  <label :class="rootClass" :aria-label="!hasLabel ? ariaLabel : undefined" :data-ripple="ripple ? 'true' : 'false'"><span v-if="hasLabel && labelEnd" class="switch_label"><slot>{{ label }}</slot></span><span class="switch_control"><input v-bind="inputAttrs" type="checkbox" class="switch_input" role="switch" :checked="checked" :disabled="disabled" :aria-label="!hasLabel ? ariaLabel : undefined" data-component="Switch"><span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span></span><span v-if="hasLabel && !labelEnd" class="switch_label"><slot>{{ label }}</slot></span></label>
</template>
