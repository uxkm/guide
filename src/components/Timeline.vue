<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { formatTimelineCode } from '@/utils/format-timeline-code';

const VALID_ICON_SIZES = new Set(['sm', 'md']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_TAGS = new Set(['ol', 'ul']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  card: Boolean,
  alternate: Boolean,
  horizontal: Boolean,
  labelCol: Boolean,
  icon: Boolean,
  iconSize: {
    type: String,
    default: 'md',
  },
  size: {
    type: String,
    default: 'md',
  },
  tag: {
    type: String,
    default: 'ol',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedIconSize = computed(() =>
  VALID_ICON_SIZES.has(props.iconSize) ? props.iconSize : 'md',
);
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : 'md'));
const resolvedTag = computed(() => (VALID_TAGS.has(props.tag) ? props.tag : 'ol'));

useComponentDemoCode(
  formatTimelineCode,
  () => ({
    ...props,
    iconSize: resolvedIconSize.value,
    size: resolvedSize.value,
    tag: resolvedTag.value,
  }),
  slots,
  rootRef,
  attrs,
);

const rootClass = computed(() => {
  const classes = ['timeline'];
  if (props.card) classes.push('timeline_card');
  if (props.alternate) classes.push('timeline_alternate');
  if (props.horizontal) classes.push('timeline_horizontal');
  if (props.labelCol) classes.push('timeline_label-col');
  if (props.icon) classes.push('timeline_icon');
  if (props.icon && resolvedIconSize.value === 'sm') classes.push('timeline_icon-sm');
  if (resolvedSize.value === 'sm') classes.push('timeline_sm');
  if (resolvedSize.value === 'lg') classes.push('timeline_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component
    :is="resolvedTag"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
  >
    <slot />
  </component>
</template>
