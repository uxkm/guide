<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFlexItem', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  span: [String, Number], spanMd: [String, Number], spanLg: [String, Number],
  grow: Boolean, growFactor: { type: [String, Number], default: 1 }, fit: Boolean,
  align: { type: String, default: '' }, order: [String, Number]
});
const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const aligns = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);
const resolvedGrow = computed(() => props.grow && Number(props.growFactor) === 2 ? 'flex_grow-2' : props.grow ? 'flex_grow' : '');
const classes = computed(() => [
  range(props.span) && `flex_item-span-${range(props.span)}`,
  range(props.spanMd) && `flex_item-span-md-${range(props.spanMd)}`,
  range(props.spanLg) && `flex_item-span-lg-${range(props.spanLg)}`,
  resolvedGrow.value, props.fit && 'flex_fit', aligns.has(props.align) && props.align && `flex_self-${props.align}`,
  range(props.order) && `flex_order-${range(props.order)}`, attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="FlexItem"><slot /></component>
</template>
