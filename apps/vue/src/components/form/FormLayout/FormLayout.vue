<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormLayout', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'form' },
  layout: { type: String, default: 'vertical' },
  fit: Boolean,
  compact: Boolean,
  labelAlign: { type: String, default: 'end' },
  labelWidth: { type: String, default: '' }
});
const attrs = useAttrs();
const layouts = new Set(['vertical', 'horizontal', 'inline']);
const labelWidths = new Set(['', 'sm', 'lg']);
const resolvedLayout = computed(() => layouts.has(props.layout) ? props.layout : 'vertical');
const classes = computed(() => [
  'form', `form_${resolvedLayout.value}`, props.fit && 'form_fit', props.compact && 'form_compact',
  resolvedLayout.value === 'horizontal' && props.labelAlign === 'start' && 'form_label-align-start',
  resolvedLayout.value === 'horizontal' && labelWidths.has(props.labelWidth) && props.labelWidth && `form_label-width-${props.labelWidth}`,
  attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="FormLayout"><slot /></component>
</template>
