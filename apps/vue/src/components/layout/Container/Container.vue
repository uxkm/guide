<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmContainer', inheritAttrs: false });

const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  size: { type: String, default: '' },
  fluid: Boolean
});

const attrs = useAttrs();
const sizes = new Set(['', 'sm', 'md', 'lg', 'xl']);
const resolvedSize = computed(() => sizes.has(props.size) ? props.size : '');
const classes = computed(() => [
  'container',
  resolvedSize.value && `container_${resolvedSize.value}`,
  props.fluid && 'container_fluid',
  attrs.class
].filter(Boolean));
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="Container">
    <slot>Container</slot>
  </component>
</template>
