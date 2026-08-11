<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimeline', inheritAttrs: false });
const props = defineProps({ card: Boolean, alternate: Boolean, horizontal: Boolean, labelCol: Boolean, icon: Boolean, iconSize: { type: String, default: 'md' }, size: { type: String, default: 'md' }, tag: { type: String, default: 'ol', validator: (value) => ['ol', 'ul'].includes(value) } });
const attrs = useAttrs();
const classes = computed(() => ['timeline', props.card && 'timeline_card', props.alternate && 'timeline_alternate', props.horizontal && 'timeline_horizontal', props.labelCol && 'timeline_label-col', props.icon && 'timeline_icon', props.icon && props.iconSize === 'sm' && 'timeline_icon-sm', props.size === 'sm' && 'timeline_sm', props.size === 'lg' && 'timeline_lg', attrs.class].filter(Boolean));
const fallthroughAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><component :is="tag" v-bind="fallthroughAttrs" :class="classes" data-component="Timeline"><slot /></component></template>
