<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  bordered: Boolean,
  lines: Boolean,
  compact: Boolean,
  ariaLabel: String,
  multiselectable: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Tree', {
  booleanProps: new Set(['bordered', 'lines', 'compact', 'multiselectable']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['tree'];
  if (props.bordered) classes.push('tree_bordered');
  if (props.lines) classes.push('tree_lines');
  if (props.compact) classes.push('tree_compact');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <ul
    ref="rootRef"
    :class="rootClass"
    role="tree"
    :aria-label="ariaLabel"
    :aria-multiselectable="multiselectable ? 'true' : undefined"
    v-bind="fallthroughAttrs"
  >
    <slot />
  </ul>
</template>
