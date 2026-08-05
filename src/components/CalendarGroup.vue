<script setup>
import { ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarGroup', { selfClosing: false });

useComponentDemoCode(formatCode, {}, slots, rootRef, attrs);
</script>

<template>
  <div ref="rootRef" class="calendar_group">
    <slot />
  </div>
</template>
