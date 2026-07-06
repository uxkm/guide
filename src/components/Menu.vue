<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
    validator: (v) => ['vertical', 'horizontal', 'inline'].includes(v),
  },
  bordered: Boolean,
  compact: Boolean,
  dark: Boolean,
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Menu', {
  defaults: { mode: 'vertical' },
  booleanProps: new Set(['bordered', 'compact', 'dark']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['menu', `menu_${props.mode}`];
  if (props.bordered) classes.push('menu_bordered');
  if (props.compact) classes.push('menu_compact');
  if (props.dark) classes.push('menu_dark');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <nav ref="rootRef" :class="rootClass" :aria-label="ariaLabel" data-menu-selectable v-bind="fallthroughAttrs">
    <ul class="menu_list">
      <slot />
    </ul>
  </nav>
</template>
