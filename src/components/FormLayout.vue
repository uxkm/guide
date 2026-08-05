<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_LAYOUTS = new Set(['vertical', 'horizontal', 'inline', '']);
const VALID_LABEL_WIDTHS = new Set(['', 'sm', 'lg']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  layout: {
    type: String,
    default: 'vertical',
    validator: (v) => ['vertical', 'horizontal', 'inline', ''].includes(v),
  },
  fit: Boolean,
  compact: Boolean,
  labelAlignStart: Boolean,
  labelWidth: {
    type: String,
    default: '',
    validator: (v) => ['', 'sm', 'lg'].includes(v),
  },
  tag: {
    type: String,
    default: 'form',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedLayout = computed(() =>
  VALID_LAYOUTS.has(props.layout) ? props.layout : 'vertical'
);
const resolvedLabelWidth = computed(() =>
  VALID_LABEL_WIDTHS.has(props.labelWidth) ? props.labelWidth : ''
);
const resolvedTag = computed(() => props.tag || 'form');

const formatCode = createComponentFormatter('FormLayout', {
  defaults: { layout: 'vertical', tag: 'form' },
  booleanProps: new Set(['fit', 'compact', 'labelAlignStart']),
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    layout: resolvedLayout.value,
    labelWidth: resolvedLabelWidth.value,
    tag: resolvedTag.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['form'];
  if (resolvedLayout.value === 'vertical') classes.push('form_vertical');
  if (resolvedLayout.value === 'horizontal') classes.push('form_horizontal');
  if (resolvedLayout.value === 'inline') classes.push('form_inline');
  if (props.fit) classes.push('form_fit');
  if (props.compact) classes.push('form_compact');
  if (props.labelAlignStart) classes.push('form_label-align-start');
  if (resolvedLabelWidth.value === 'sm') classes.push('form_label-width-sm');
  if (resolvedLabelWidth.value === 'lg') classes.push('form_label-width-lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component :is="resolvedTag" ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <slot />
  </component>
</template>
