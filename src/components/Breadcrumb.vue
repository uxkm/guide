<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';

defineOptions({ inheritAttrs: false });

const VALID_SEPARATORS = new Set(['chevron', 'slash', 'dot']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  ariaLabel: {
    type: String,
    default: '경로',
  },
  separator: {
    type: String,
    default: 'chevron',
    validator: (v) => ['chevron', 'slash', 'dot'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedSeparator = computed(() =>
  VALID_SEPARATORS.has(props.separator) ? props.separator : 'chevron'
);
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : 'md'));
const hasItems = computed(() => Array.isArray(props.items) && props.items.length > 0);

const formatCode = createComponentFormatter('Breadcrumb', {
  defaults: { ariaLabel: '경로', separator: 'chevron', size: 'md' },
  skipProps: ['items'],
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    separator: resolvedSeparator.value,
    size: resolvedSize.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['breadcrumb'];
  if (resolvedSeparator.value === 'slash') classes.push('breadcrumb_sep-slash');
  if (resolvedSeparator.value === 'dot') classes.push('breadcrumb_sep-dot');
  if (resolvedSize.value === 'sm') classes.push('breadcrumb_sm');
  if (resolvedSize.value === 'lg') classes.push('breadcrumb_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <nav ref="rootRef" :class="rootClass" :aria-label="ariaLabel" v-bind="fallthroughAttrs">
    <ol class="breadcrumb_list">
      <template v-if="hasItems">
        <BreadcrumbItem
          v-for="(item, index) in items"
          :key="index"
          :label="item.label"
          :href="item.href"
          :current="item.current ?? index === items.length - 1"
          :disabled="item.disabled"
          :icon="item.icon"
          :aria-label="item.ariaLabel"
          :as="item.as"
          @click="item.onClick"
        />
      </template>
      <slot v-else />
    </ol>
  </nav>
</template>
