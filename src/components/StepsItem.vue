<script setup>
import { computed, inject, onMounted, onUnmounted, ref, useAttrs, useId, useSlots } from 'vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    default: 'wait',
    validator: (v) => ['finished', 'active', 'wait', 'error'].includes(v),
  },
  index: Number,
});
const { rippleAttrs } = useRipple(props);

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);

const formatCode = createComponentFormatter('StepsItem', {
  defaults: { status: 'wait' },
  booleanProps: new Set(['ripple']),
  skipProps: ['index'],
  labelProp: 'title',
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const steps = inject('steps', null);
const itemId = useId().replace(/:/g, '');

const isNavigable = computed(() => steps?.navigable?.value ?? false);

const itemClass = computed(() => [
  'steps_item',
  `is-${props.status}`,
]);

const isLast = computed(() => steps?.isLastItem(itemId) ?? false);
const stepIndex = computed(() => props.index ?? steps?.getItemIndex(itemId) ?? 0);

onMounted(() => {
  steps?.registerItem(itemId, props);
});

onUnmounted(() => {
  steps?.unregisterItem(itemId);
});
</script>

<template>
  <li
    ref="rootRef"
    :class="itemClass"
    :aria-current="!isNavigable && status === 'active' ? 'step' : undefined"
  >
    <button
      v-if="isNavigable"
      type="button"
      class="steps_trigger"
      :disabled="status === 'wait'"
      :aria-current="status === 'active' ? 'step' : undefined"
      v-bind="rippleAttrs"
    >
      <span class="steps_head">
        <span class="steps_indicator" aria-hidden="true">
          <Icon v-if="status === 'finished'" name="check" class="steps_icon" />
          <Icon v-else-if="status === 'error'" name="close" class="steps_icon" />
          <span v-else class="steps_index">{{ stepIndex }}</span>
        </span>
        <span v-if="!isLast" class="steps_tail" aria-hidden="true" />
      </span>
      <span class="steps_content">
        <span class="steps_title">{{ title }}</span>
        <span v-if="description" class="steps_desc">{{ description }}</span>
      </span>
    </button>
    <slot v-else>
      <div class="steps_head">
        <span class="steps_indicator" aria-hidden="true">
          <Icon v-if="status === 'finished'" name="check" class="steps_icon" />
          <Icon v-else-if="status === 'error'" name="close" class="steps_icon" />
          <span v-else class="steps_index">{{ stepIndex }}</span>
        </span>
        <span v-if="!isLast" class="steps_tail" aria-hidden="true" />
      </div>
      <div class="steps_content">
        <p class="steps_title">{{ title }}</p>
        <p v-if="description" class="steps_desc">{{ description }}</p>
      </div>
    </slot>
  </li>
</template>
