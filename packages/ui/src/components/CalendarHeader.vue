<script setup>
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { computed, ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  title: String,
  prevLabel: {
    type: String,
    default: '이전 달',
  },
  nextLabel: {
    type: String,
    default: '다음 달',
  },
  showNav: {
    type: Boolean,
    default: true,
  },
  showPrev: Boolean,
  showNext: Boolean,
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarHeader', { selfClosing: false });

useComponentDemoCode(formatCode, props, {}, rootRef, {});

const prevVisible = computed(() => props.showPrev ?? props.showNav);
const nextVisible = computed(() => props.showNext ?? props.showNav);
</script>

<template>
  <div ref="rootRef" class="calendar_header">
    <Button
      v-if="prevVisible"
      variant="ghost"
      size="sm"
      icon-only
      :aria-label="prevLabel"
    >
      <template #icon-before>
        <Icon name="chevron-left" size="sm" />
      </template>
    </Button>
    <span class="calendar_title">{{ title }}</span>
    <Button
      v-if="nextVisible"
      variant="ghost"
      size="sm"
      icon-only
      :aria-label="nextLabel"
    >
      <template #icon-before>
        <Icon name="chevron-right" size="sm" />
      </template>
    </Button>
    <slot />
  </div>
</template>
