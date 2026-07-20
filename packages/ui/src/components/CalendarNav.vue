<script setup>
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  label: String,
  prevLabel: {
    type: String,
    default: '이전 주',
  },
  nextLabel: {
    type: String,
    default: '다음 주',
  },
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarNav', { selfClosing: false });

useComponentDemoCode(formatCode, props, {}, rootRef, {});
</script>

<template>
  <div ref="rootRef" class="calendar_nav">
    <Button variant="ghost" size="sm" icon-only :aria-label="prevLabel">
      <template #icon-before>
        <Icon name="chevron-left" size="sm" />
      </template>
    </Button>
    <span class="calendar_nav-label">{{ label }}</span>
    <Button variant="ghost" size="sm" icon-only :aria-label="nextLabel">
      <template #icon-before>
        <Icon name="chevron-right" size="sm" />
      </template>
    </Button>
  </div>
</template>
