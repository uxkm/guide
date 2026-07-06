<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  title: String,
  description: String,
  time: String,
  datetime: String,
  label: String,
  labelDatetime: String,
  active: Boolean,
  pending: Boolean,
  outline: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('TimelineItem', {
  defaults: { color: 'primary' },
  booleanProps: new Set(['active', 'pending', 'outline']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const itemClass = computed(() => {
  const classes = ['timeline_item'];
  if (props.active) classes.push('is-active');
  if (props.pending) classes.push('is-pending');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const dotClass = computed(() => {
  const classes = ['timeline_dot'];
  if (props.outline) classes.push('timeline_dot-outline');
  if (props.color) classes.push(`color_${props.color}`);
  return classes;
});
</script>

<template>
  <li ref="rootRef" :class="itemClass">
    <time v-if="label" class="timeline_label" :datetime="labelDatetime">{{ label }}</time>
    <span v-if="$slots.dot" class="timeline_dot" aria-hidden="true">
      <slot name="dot" />
    </span>
    <span v-else :class="dotClass" aria-hidden="true" />
    <div class="timeline_content">
      <slot>
        <time v-if="time" class="timeline_time" :datetime="datetime">{{ time }}</time>
        <p v-if="title" class="timeline_title">{{ title }}</p>
        <p v-if="description" class="timeline_desc">{{ description }}</p>
      </slot>
      <div v-if="$slots.meta" class="timeline_meta">
        <slot name="meta" />
      </div>
    </div>
  </li>
</template>
