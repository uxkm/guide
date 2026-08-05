<script setup>
import Button from '@/components/Button.vue';
import Calendar from '@/components/Calendar.vue';
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  title: String,
  shadow: Boolean,
  borderless: Boolean,
  footer: Boolean,
  toolbar: {
    type: Boolean,
    default: true,
  },
  cancelLabel: String,
  confirmLabel: String,
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarWheel', {
  booleanProps: new Set(['shadow', 'borderless', 'footer', 'toolbar']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const showToolbar = computed(
  () => props.toolbar && (slots.toolbar || props.title || props.cancelLabel || props.confirmLabel),
);
</script>

<template>
  <Calendar
    ref="rootRef"
    wheel
    :shadow="shadow"
    :borderless="borderless"
    role="group"
    :aria-label="ariaLabel"
  >
    <div v-if="showToolbar" class="calendar_wheel-toolbar" data-demo-slot="toolbar">
      <slot name="toolbar">
        <Button v-if="cancelLabel" variant="text" size="sm" :label="cancelLabel" />
        <span v-if="title" class="calendar_wheel-title">{{ title }}</span>
        <Button
          v-if="confirmLabel"
          variant="text"
          color="primary"
          size="sm"
          :label="confirmLabel"
        />
      </slot>
    </div>
    <div class="calendar_wheel-body">
      <div class="calendar_wheel-highlight" aria-hidden="true" />
      <div class="calendar_wheel-columns">
        <slot />
      </div>
      <div class="calendar_wheel-fade" aria-hidden="true" />
    </div>
    <div v-if="footer || $slots.footer" class="calendar_wheel-footer" data-demo-slot="footer">
      <slot name="footer" />
    </div>
  </Calendar>
</template>
