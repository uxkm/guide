<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  dashed: Boolean,
  plain: Boolean,
  vertical: Boolean,
  orient: {
    type: String,
    default: '',
    validator: (v) => ['', 'left', 'right'].includes(v),
  },
  label: String,
  tag: {
    type: String,
    default: 'auto',
    validator: (v) => ['auto', 'hr', 'div', 'span'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Divider', {
  booleanProps: new Set(['dashed', 'plain', 'vertical']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const hasLabel = computed(() => Boolean(props.label || slots.default));

const resolvedTag = computed(() => {
  if (props.tag !== 'auto') return props.tag;
  if (props.vertical) return 'span';
  return hasLabel.value ? 'div' : 'hr';
});

const rootClass = computed(() => {
  const classes = ['divider'];
  if (props.dashed) classes.push('divider_dashed');
  if (props.plain) classes.push('divider_plain');
  if (props.vertical) classes.push('divider_vertical');
  if (props.orient === 'left') classes.push('divider_orient-left');
  if (props.orient === 'right') classes.push('divider_orient-right');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <component
    :is="resolvedTag"
    ref="rootRef"
    :class="rootClass"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
