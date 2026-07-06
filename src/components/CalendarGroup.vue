<script setup>
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarGroup', { selfClosing: false });

useComponentDemoCode(formatCode, {}, {}, rootRef, {});
</script>

<template>
  <div ref="rootRef" class="calendar_group">
    <slot />
  </div>
</template>
