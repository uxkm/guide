<script setup>
import { computed, useSlots } from 'vue';

defineOptions({ name: 'UxkmCalendar' });
const props = defineProps({
  title: String, ariaLabel: String, size: { type: String, default: '' },
  noHeader: Boolean, minimal: Boolean, compact: Boolean, borderless: Boolean,
  shadow: Boolean, ghost: Boolean, week: Boolean, readonly: Boolean,
  disabled: Boolean, weekends: Boolean, agenda: Boolean, wheel: Boolean,
  footer: Boolean, events: { type: Array, default: () => [] },
  disabledDays: { type: Array, default: () => [] }, rangeStart: Number, rangeEnd: Number,
  selected: { type: Number, default: 15 }, today: { type: Number, default: 12 },
  partial: Number, role: { type: String, default: 'application' }
});
const slots = useSlots();
const classes = computed(() => [
  'calendar', props.noHeader && 'calendar_no-header', props.minimal && 'calendar_minimal',
  props.compact && 'calendar_compact', props.borderless && 'calendar_borderless',
  props.shadow && 'calendar_shadow', props.ghost && 'calendar_ghost', props.week && 'calendar_week',
  props.readonly && 'calendar_readonly', props.disabled && 'is-disabled',
  props.weekends && 'calendar_weekends', props.agenda && 'calendar_agenda',
  props.wheel && 'calendar_wheel', props.size === 'sm' && 'calendar_sm', props.size === 'lg' && 'calendar_lg'
].filter(Boolean));
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
const days = computed(() => {
  const cells = [];
  if (!props.partial && !props.week) [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, other: true }));
  const values = props.week ? [9, 10, 11, 12, 13, 14, 15] : Array.from({ length: props.partial || 30 }, (_, index) => index + 1);
  values.forEach((day, index) => cells.push({ day, today: day === props.today, selected: day === props.selected || day === props.rangeStart || day === props.rangeEnd, start: day === props.rangeStart, end: day === props.rangeEnd, range: props.rangeStart != null && props.rangeEnd != null && day > props.rangeStart && day < props.rangeEnd, event: props.events.includes(day), disabled: props.disabledDays.includes(day), sunday: props.weekends && index % 7 === 0, saturday: props.weekends && index % 7 === 6 }));
  if (!props.partial && !props.week) [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, other: true }));
  return cells;
});
</script>

<template>
  <div :class="classes" data-component="Calendar" :role="role" :aria-label="ariaLabel" :aria-disabled="disabled || undefined">
    <slot v-if="!minimal && !wheel" name="header">
      <div v-if="title && !noHeader" class="calendar_header">
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">‹</button>
        <span class="calendar_title">{{ title }}</span>
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">›</button>
      </div>
    </slot>
    <template v-if="wheel">
      <div v-if="title" class="calendar_wheel-toolbar"><span class="calendar_wheel-title">{{ title }}</span></div>
      <div class="calendar_wheel-body"><div class="calendar_wheel-highlight" aria-hidden="true" /><div class="calendar_wheel-columns"><slot /></div><div class="calendar_wheel-fade" aria-hidden="true" /></div>
    </template>
    <template v-else>
      <slot v-if="!minimal && !agenda" name="weekdays">
        <div v-if="!noHeader" class="calendar_weekdays" aria-hidden="true"><span v-for="label in weekdays" :key="label" class="calendar_weekday">{{ label }}</span></div>
      </slot>
      <slot>
        <div v-if="!agenda" class="calendar_grid" :class="week && 'calendar_grid-week'">
          <button v-for="(cell, index) in days" :key="`${cell.day}-${index}`" type="button" class="calendar_day" :class="{ 'is-other-month': cell.other, 'is-today': cell.today, 'is-selected': cell.selected, 'is-range-start': cell.start, 'is-range-end': cell.end, 'is-in-range': cell.range, 'has-event': cell.event, 'is-disabled': cell.disabled, 'is-sunday': cell.sunday, 'is-saturday': cell.saturday }" :disabled="cell.disabled || (cell.other && !cell.range)" :aria-current="cell.today ? 'date' : undefined" :aria-selected="cell.selected || undefined">{{ cell.day }}</button>
        </div>
      </slot>
      <slot name="footer"><div v-if="footer" class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm">오늘</button><div class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm">초기화</button><button type="button" class="btn btn_filled color_primary btn_sm">확인</button></div></div></slot>
    </template>
  </div>
</template>
