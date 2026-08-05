<script setup>
import { computed, provide, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_MODES = new Set(['vertical', 'horizontal', 'inline']);

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
const selectedItemId = ref(null);
const resolvedMode = computed(() =>
  VALID_MODES.has(props.mode) ? props.mode : 'vertical'
);

provide('menu', {
  selectedItemId,
  selectItem(itemId) {
    selectedItemId.value = itemId;
  },
});

const formatCode = createComponentFormatter('Menu', {
  defaults: { mode: 'vertical' },
  booleanProps: new Set(['bordered', 'compact', 'dark']),
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({ ...props, mode: resolvedMode.value }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['menu', `menu_${resolvedMode.value}`];
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
  <nav ref="rootRef" :class="rootClass" :aria-label="ariaLabel" data-vue-menu v-bind="fallthroughAttrs">
    <ul class="menu_list">
      <slot />
    </ul>
  </nav>
</template>
