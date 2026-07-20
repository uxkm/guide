<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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

const formatCode = createComponentFormatter('FormLayout', {
  defaults: { layout: 'vertical', tag: 'form' },
  booleanProps: new Set(['fit', 'compact', 'labelAlignStart']),
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['form'];
  if (props.layout === 'vertical') classes.push('form_vertical');
  if (props.layout === 'horizontal') classes.push('form_horizontal');
  if (props.layout === 'inline') classes.push('form_inline');
  if (props.fit) classes.push('form_fit');
  if (props.compact) classes.push('form_compact');
  if (props.labelAlignStart) classes.push('form_label-align-start');
  if (props.labelWidth === 'sm') classes.push('form_label-width-sm');
  if (props.labelWidth === 'lg') classes.push('form_label-width-lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component :is="tag" ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <slot />
  </component>
</template>
