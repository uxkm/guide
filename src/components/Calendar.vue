<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  title: String,
  ariaLabel: String,
  noHeader: Boolean,
  minimal: Boolean,
  compact: Boolean,
  borderless: Boolean,
  shadow: Boolean,
  ghost: Boolean,
  week: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  weekends: Boolean,
  agenda: Boolean,
  wheel: Boolean,
  size: {
    type: String,
    default: '',
    validator: (v) => ['', 'sm', 'lg'].includes(v),
  },
  role: {
    type: String,
    default: 'application',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Calendar', {
  defaults: { role: 'application' },
  booleanProps: new Set([
    'noHeader',
    'minimal',
    'compact',
    'borderless',
    'shadow',
    'ghost',
    'week',
    'readonly',
    'disabled',
    'weekends',
    'agenda',
    'wheel',
  ]),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs, {
  when: (calendarProps) => !calendarProps.wheel,
});

const rootClass = computed(() => {
  const classes = ['calendar'];
  if (props.noHeader) classes.push('calendar_no-header');
  if (props.minimal) classes.push('calendar_minimal');
  if (props.compact) classes.push('calendar_compact');
  if (props.borderless) classes.push('calendar_borderless');
  if (props.shadow) classes.push('calendar_shadow');
  if (props.ghost) classes.push('calendar_ghost');
  if (props.week) classes.push('calendar_week');
  if (props.readonly) classes.push('calendar_readonly');
  if (props.disabled) classes.push('is-disabled');
  if (props.weekends) classes.push('calendar_weekends');
  if (props.agenda) classes.push('calendar_agenda');
  if (props.wheel) classes.push('calendar_wheel');
  if (props.size === 'sm') classes.push('calendar_sm');
  if (props.size === 'lg') classes.push('calendar_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    :role="role"
    :aria-label="ariaLabel"
    :aria-disabled="disabled ? 'true' : undefined"
    v-bind="fallthroughAttrs"
  >
    <slot name="header">
      <div v-if="title && !noHeader && !minimal" class="calendar_header">
        <span class="calendar_title">{{ title }}</span>
      </div>
    </slot>
    <slot name="weekdays" />
    <slot />
    <slot name="footer" />
  </div>
</template>
