<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmGridCol', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  span: [String, Number], spanMd: [String, Number], spanLg: [String, Number]
});
const attrs = useAttrs();
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const classes = computed(() => [
  range(props.span) && `grid_col-span-${range(props.span)}`,
  range(props.spanMd) && `grid_col-span-md-${range(props.spanMd)}`,
  range(props.spanLg) && `grid_col-span-lg-${range(props.spanLg)}`,
  attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="GridCol"><slot /></component>
</template>
