<script setup>
import { computed, useAttrs, useSlots } from 'vue';
defineOptions({ name: 'UxkmRadio', inheritAttrs: false });
const props = defineProps({ label: String, name: String, value: String, checked: Boolean, disabled: Boolean, labelEnd: Boolean, button: Boolean, ripple: { type: Boolean, default: true }, ariaLabel: String });
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default));
const rootClass = computed(() => ['radio', props.labelEnd && 'radio_label-end', props.button && 'radio_button', attrs.class].filter(Boolean));
const inputAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template>
  <label v-if="!hasLabel" class="radio_control" :class="attrs.class" :aria-label="ariaLabel" :data-ripple="ripple ? 'true' : 'false'"><input v-bind="inputAttrs" type="radio" class="radio_input" :name="name" :value="value" :checked="checked" :disabled="disabled" data-component="Radio"><span class="radio_box" aria-hidden="true" /></label>
  <label v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'"><input v-if="button" v-bind="inputAttrs" type="radio" class="radio_input" :name="name" :value="value" :checked="checked" :disabled="disabled" data-component="Radio"><span v-if="labelEnd && !button" class="radio_label"><slot>{{ label }}</slot></span><span v-if="!button" class="radio_control"><input v-bind="inputAttrs" type="radio" class="radio_input" :name="name" :value="value" :checked="checked" :disabled="disabled" data-component="Radio"><span class="radio_box" aria-hidden="true" /></span><span v-if="button || !labelEnd" class="radio_label"><slot>{{ label }}</slot></span></label>
</template>
