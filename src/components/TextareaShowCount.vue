<script setup>
import { computed, provide, ref, useAttrs, useId, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { TEXTAREA_SHOW_COUNT_KEY } from '@/composables/useTextareaShowCount';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  countId: String,
});

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);
const generatedId = useId();
const current = ref(0);
const max = ref(0);

const resolvedTag = computed(() => props.tag || 'div');
const resolvedCountId = computed(() => props.countId || `${generatedId}-count`);
const isLimit = computed(() => max.value > 0 && current.value >= max.value);
const visualCount = computed(() =>
  max.value > 0 ? `${current.value}/${max.value}` : String(current.value)
);
const announcedCount = computed(() => {
  if (max.value <= 0) return `${current.value}자 입력`;

  const limitMessage = isLimit.value ? ', 글자 수 제한에 도달했습니다' : '';
  return `${current.value}자 입력, 최대 ${max.value}자${limitMessage}`;
});

function updateCount(value, maxLength) {
  current.value = String(value ?? '').length;
  max.value = Number(maxLength) > 0 ? Number(maxLength) : 0;
}

provide(TEXTAREA_SHOW_COUNT_KEY, {
  countId: resolvedCountId,
  updateCount,
});

const formatCode = createComponentFormatter('TextareaShowCount', {
  defaults: { tag: 'div' },
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => [
  'textarea_wrap',
  'textarea_show-count',
  attrs.class,
]);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component
    :is="resolvedTag"
    ref="rootRef"
    :class="rootClass"
    v-bind="fallthroughAttrs"
  >
    <slot />
    <span
      :id="resolvedCountId"
      class="textarea_count"
      :class="{ 'is-limit': isLimit }"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="textarea_count_visual" aria-hidden="true">{{ visualCount }}</span>
      <span class="textarea_count_announcer">{{ announcedCount }}</span>
    </span>
  </component>
</template>
