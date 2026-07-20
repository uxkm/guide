<script setup>
import { computed, useAttrs } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  day: {
    type: [Number, String],
    required: true,
  },
  otherMonth: Boolean,
  today: Boolean,
  selected: Boolean,
  disabled: Boolean,
  sunday: Boolean,
  saturday: Boolean,
  rangeStart: Boolean,
  rangeEnd: Boolean,
  inRange: Boolean,
  event: Boolean,
  readonly: Boolean,
});
const { rippleAttrs } = useRipple(props);


const attrs = useAttrs();

const dayClass = computed(() => {
  const classes = ['calendar_day'];
  if (props.otherMonth) classes.push('is-other-month');
  if (props.today) classes.push('is-today');
  if (props.selected) classes.push('is-selected');
  if (props.disabled) classes.push('is-disabled');
  if (props.sunday) classes.push('is-sunday');
  if (props.saturday) classes.push('is-saturday');
  if (props.rangeStart) classes.push('is-range-start');
  if (props.rangeEnd) classes.push('is-range-end');
  if (props.inRange) classes.push('is-in-range');
  if (props.event) classes.push('has-event');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const isPartOfRange = computed(
  () => props.selected || props.inRange || props.rangeStart || props.rangeEnd,
);

const isDisabled = computed(() => {
  if (props.disabled) return true;
  if (props.otherMonth && !isPartOfRange.value) return true;
  return false;
});
</script>

<template>
  <button
    type="button"
    v-bind="rippleAttrs"
    :class="dayClass"
    :disabled="isDisabled || undefined"
    :aria-current="today ? 'date' : undefined"
    :aria-selected="selected ? 'true' : undefined"
  >
    {{ day }}
  </button>
</template>
