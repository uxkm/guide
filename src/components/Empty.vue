<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useEmptyDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  description: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  simple: Boolean,
  block: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useEmptyDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['empty'];
  if (props.size === 'sm') classes.push('empty_sm');
  if (props.size === 'lg') classes.push('empty_lg');
  if (props.simple) classes.push('empty_simple');
  if (props.block) classes.push('empty_block');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasImage = computed(() => !props.simple);
const hasFooter = computed(() => Boolean(slots.footer));
</script>

<template>
  <div ref="rootRef" :class="rootClass" role="status">
    <div v-if="hasImage" class="empty_image" aria-hidden="true" data-demo-slot="image">
      <slot name="image">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12" />
          <path
            d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </slot>
    </div>
    <p v-if="description || slots.description" class="empty_desc">
      <slot name="description">{{ description }}</slot>
    </p>
    <div v-if="hasFooter" class="empty_footer" data-demo-slot="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
