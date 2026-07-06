<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useCalendarWheelColumn } from '@/composables/useCalendarWheel';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  items: {
    type: Array,
    default: () => [],
  },
  selected: [String, Number],
  showSteps: {
    type: Boolean,
    default: true,
  },
  prevLabel: String,
  nextLabel: String,
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const rootRef = ref(null);
const listRef = ref(null);
const activeValue = ref(props.selected);

const formatCode = createComponentFormatter('CalendarWheelColumn', {
  booleanProps: new Set(['showSteps']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, {}, rootRef, {});

const { scrollToSelected, selectByIndex, moveSelection } = useCalendarWheelColumn(listRef, {
  onSelect(label) {
    activeValue.value = label;
  },
});

watch(
  () => props.selected,
  (value) => {
    activeValue.value = value;
    nextTick(() => scrollToSelected());
  },
);

watch(
  () => props.items,
  () => nextTick(() => scrollToSelected()),
  { deep: true },
);

const resolvedItems = computed(() =>
  props.items.map((item) => {
    if (typeof item === 'string' || typeof item === 'number') {
      const label = String(item);
      return { label, selected: label === String(activeValue.value) };
    }
    return {
      label: item.label,
      selected: item.selected ?? item.label === String(activeValue.value),
    };
  }),
);

const selectedIndex = computed(() => resolvedItems.value.findIndex((item) => item.selected));

const prevDisabled = computed(() => selectedIndex.value <= 0);
const nextDisabled = computed(
  () => selectedIndex.value < 0 || selectedIndex.value >= resolvedItems.value.length - 1,
);

function onPrevClick() {
  moveSelection(-1);
}

function onNextClick() {
  moveSelection(1);
}
</script>

<template>
  <div ref="rootRef" class="calendar_wheel-column"
    v-bind="rippleAttrs"
  >
    <Button
      v-if="showSteps && prevLabel"
      v-bind="childRippleAttrs"
      variant="ghost"
      size="sm"
      icon-only
      class="calendar_wheel-step calendar_wheel-step-prev"
      :aria-label="prevLabel"
      :disabled="prevDisabled"
      @click="onPrevClick"
    >
      <template #icon-before>
        <Icon name="chevron-up" size="sm" />
      </template>
    </Button>
    <ul ref="listRef" class="calendar_wheel-list" role="listbox" :aria-label="label" data-wheel>
      <li v-for="(item, index) in resolvedItems" :key="item.label">
        <button
          v-bind="childRippleAttrs"
          type="button"
          class="calendar_wheel-item"
          :class="{ 'is-selected': item.selected }"
          :aria-selected="item.selected ? 'true' : undefined"
          @click="selectByIndex(index)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
    <Button
      v-if="showSteps && nextLabel"
      v-bind="childRippleAttrs"
      variant="ghost"
      size="sm"
      icon-only
      class="calendar_wheel-step calendar_wheel-step-next"
      :aria-label="nextLabel"
      :disabled="nextDisabled"
      @click="onNextClick"
    >
      <template #icon-before>
        <Icon name="chevron-down" size="sm" />
      </template>
    </Button>
  </div>
</template>
