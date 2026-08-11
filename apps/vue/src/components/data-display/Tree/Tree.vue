<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTree', inheritAttrs: false });
const props = defineProps({ bordered: Boolean, lines: Boolean, compact: Boolean, ariaLabel: String, multiselectable: Boolean });
const attrs = useAttrs();
const classes = computed(() => ['tree', props.bordered && 'tree_bordered', props.lines && 'tree_lines', props.compact && 'tree_compact', attrs.class].filter(Boolean));
const fallthroughAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><ul v-bind="fallthroughAttrs" :class="classes" data-component="Tree" role="tree" :aria-label="ariaLabel" :aria-multiselectable="multiselectable || undefined"><slot /></ul></template>
