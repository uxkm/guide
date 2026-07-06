<script setup>
import CalendarDay from '@/components/CalendarDay.vue';
import CalendarGrid from '@/components/CalendarGrid.vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { june2024Days, partialMonthDays } from '@/data/calendar-demo';
import { formatCalendarMonthCode } from '@/utils/format-calendar-month-code';
import { computed, ref } from 'vue';

const props = defineProps({
  days: Array,
  preset: {
    type: String,
    default: '',
  },
  selected: Number,
  today: Number,
  disabled: Array,
  events: Array,
  rangeStart: Number,
  rangeEnd: Number,
  weekends: Boolean,
  partial: Number,
  week: Boolean,
  readonly: Boolean,
});

const rootRef = ref(null);

useComponentDemoCode(
  (monthProps, _slots, monthAttrs) => formatCalendarMonthCode(monthProps, monthAttrs),
  props,
  {},
  rootRef,
  {},
);

const resolvedDays = computed(() => {
  if (props.days?.length) return props.days;

  if (props.partial) {
    return partialMonthDays(props.partial, {
      today: props.today,
      selected: props.selected,
    });
  }

  if (props.preset === 'june2024' || !props.preset) {
    return june2024Days({
      selected: props.selected,
      today: props.today,
      disabled: props.disabled,
      events: props.events,
      rangeStart: props.rangeStart,
      rangeEnd: props.rangeEnd,
    });
  }

  return [];
});

const displayDays = computed(() => {
  const days = resolvedDays.value;
  if (!props.weekends) return days;
  return days.map((cell, index) => ({
    ...cell,
    sunday: cell.sunday ?? index % 7 === 0,
    saturday: cell.saturday ?? index % 7 === 6,
  }));
});
</script>

<template>
  <div ref="rootRef" class="calendar_month" style="display: contents">
    <CalendarGrid :week="week">
      <CalendarDay
        v-for="(cell, index) in displayDays"
        :key="`${cell.day}-${index}`"
        v-bind="cell"
        :readonly="readonly"
      />
    </CalendarGrid>
  </div>
</template>
