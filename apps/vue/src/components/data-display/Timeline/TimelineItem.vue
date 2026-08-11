<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmTimelineItem', inheritAttrs: false });
const props = defineProps({ color: { type: String, default: 'primary' }, title: String, description: String, time: String, datetime: String, label: String, labelDatetime: String, active: Boolean, pending: Boolean, outline: Boolean });
const attrs = useAttrs();
const itemClasses = computed(() => ['timeline_item', props.active && 'is-active', props.pending && 'is-pending', attrs.class].filter(Boolean));
const dotClasses = computed(() => ['timeline_dot', props.outline && 'timeline_dot-outline', props.color && `color_${props.color}`].filter(Boolean));
const fallthroughAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><li v-bind="fallthroughAttrs" :class="itemClasses" data-component="TimelineItem"><time v-if="label" class="timeline_label" :datetime="labelDatetime">{{ label }}</time><span v-if="$slots.dot" class="timeline_dot" aria-hidden="true"><slot name="dot" /></span><span v-else :class="dotClasses" aria-hidden="true" /><div class="timeline_content"><slot><time v-if="time" class="timeline_time" :datetime="datetime">{{ time }}</time><p v-if="title" class="timeline_title">{{ title }}</p><p v-if="description" class="timeline_desc">{{ description }}</p></slot><div v-if="$slots.meta" class="timeline_meta"><slot name="meta" /></div></div></li></template>
