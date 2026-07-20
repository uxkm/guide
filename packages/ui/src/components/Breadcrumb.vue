<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import BreadcrumbItem from '@/components/BreadcrumbItem.vue';

defineOptions({ inheritAttrs: false });

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

const formatCode = createComponentFormatter('Breadcrumb', {
  defaults: { ariaLabel: '경로', separator: 'chevron', size: 'md' },
  skipProps: ['items'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['breadcrumb'];
  if (props.separator === 'slash') classes.push('breadcrumb_sep-slash');
  if (props.separator === 'dot') classes.push('breadcrumb_sep-dot');
  if (props.size === 'sm') classes.push('breadcrumb_sm');
  if (props.size === 'lg') classes.push('breadcrumb_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <nav ref="rootRef" :class="rootClass" :aria-label="ariaLabel">
    <ol class="breadcrumb_list">
      <template v-if="items.length">
        <BreadcrumbItem
          v-for="(item, index) in items"
          :key="index"
          :label="item.label"
          :href="item.href"
          :current="item.current ?? index === items.length - 1"
          :disabled="item.disabled"
          :icon="item.icon"
          :aria-label="item.ariaLabel"
        />
      </template>
      <slot v-else />
    </ol>
  </nav>
</template>
