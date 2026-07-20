<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
    validator: (v) => ['sm', 'md'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  tag: {
    type: String,
    default: 'ol',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Timeline', {
  defaults: { size: 'md', tag: 'ol', iconSize: 'md' },
  booleanProps: new Set(['card', 'alternate', 'horizontal', 'labelCol', 'icon']),
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['timeline'];
  if (props.card) classes.push('timeline_card');
  if (props.alternate) classes.push('timeline_alternate');
  if (props.horizontal) classes.push('timeline_horizontal');
  if (props.labelCol) classes.push('timeline_label-col');
  if (props.icon) classes.push('timeline_icon');
  if (props.icon && props.iconSize === 'sm') classes.push('timeline_icon-sm');
  if (props.size === 'sm') classes.push('timeline_sm');
  if (props.size === 'lg') classes.push('timeline_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <component :is="tag" ref="rootRef" :class="rootClass">
    <slot />
  </component>
</template>
