<script setup>
import { ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { WEEKDAYS } from '@/data/calendar-demo';

const props = defineProps({
  labels: {
    type: Array,
    default: () => WEEKDAYS,
  },
});

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarWeekdays', { selfClosing: false });

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);
</script>

<template>
  <div ref="rootRef" class="calendar_weekdays" aria-hidden="true">
    <span v-for="label in labels" :key="label" class="calendar_weekday">{{ label }}</span>
  </div>
</template>
