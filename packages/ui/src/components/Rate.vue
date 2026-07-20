<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  value: Number,
  count: {
    type: Number,
    default: 5,
  },
  allowHalf: Boolean,
  clearable: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  legend: String,
  name: String,
  modelValue: Number,
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const emit = defineEmits(['update:modelValue']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const groupName = props.name || `rate-${Math.random().toString(36).slice(2, 9)}`;

const formatCode = createComponentFormatter('Rate', {
  defaults: { count: 5, size: 'md' },
  booleanProps: new Set(['allowHalf', 'clearable', 'readonly', 'disabled']),
  skipProps: ['modelValue', 'name'],
  selfClosing: true,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const currentValue = computed(() => props.modelValue ?? props.value);

const rootClass = computed(() => {
  const classes = ['rate'];
  if (props.size === 'sm') classes.push('rate_sm');
  if (props.size === 'lg') classes.push('rate_lg');
  if (props.allowHalf) classes.push('rate_allow-half');
  if (props.clearable) classes.push('rate_clearable');
  if (props.readonly) classes.push('is-readonly');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const stars = computed(() => Array.from({ length: props.count }, (_, i) => i + 1));

const starPath =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function onChange(val) {
  emit('update:modelValue', val);
}

function onClear() {
  emit('update:modelValue', undefined);
}

const readonlyAriaLabel = computed(() => {
  const val = currentValue.value ?? 0;
  return `${props.count}점 만점 중 ${val}점`;
});

function readonlyStarClass(star) {
  const val = currentValue.value ?? 0;
  if (val >= star) return 'is-filled';
  if (props.allowHalf && val >= star - 0.5) return 'is-half';
  return '';
}
</script>

<template>
  <div
    v-if="readonly"
    ref="rootRef"
    :class="rootClass"
    role="img"
    :aria-label="readonlyAriaLabel"
  >
    <div class="rate_stars">
      <span
        v-for="star in stars"
        :key="star"
        class="rate_star-readonly"
        :class="readonlyStarClass(star)"
      >
        <span class="rate_star-graphic" aria-hidden="true">
          <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <span v-if="readonlyStarClass(star) === 'is-half'" class="rate_star-icon-half">
            <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" />
            </svg>
          </span>
        </span>
      </span>
    </div>
    <span v-if="currentValue" class="rate_value">{{ currentValue }}</span>
  </div>

  <fieldset v-else ref="rootRef" v-bind="rippleAttrs" :class="rootClass" :disabled="disabled">
    <legend v-if="legend" class="rate_legend">{{ legend }}</legend>
    <div class="rate_control">
      <div class="rate_stars">
        <label v-for="star in stars" :key="star" v-bind="childRippleAttrs" class="rate_star">
          <template v-if="allowHalf">
            <input
              type="radio"
              class="rate_input rate_input-half"
              :name="groupName"
              :value="star - 0.5"
              :checked="currentValue === star - 0.5"
              :disabled="disabled"
              @change="onChange(star - 0.5)"
            />
          </template>
          <input
            type="radio"
            class="rate_input"
            :name="groupName"
            :value="star"
            :checked="currentValue === star"
            :disabled="disabled"
            @change="onChange(star)"
          />
          <span class="rate_star-graphic" aria-hidden="true">
            <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" />
            </svg>
            <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" />
            </svg>
            <span v-if="allowHalf" class="rate_star-icon-half">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path :d="starPath" />
              </svg>
            </span>
          </span>
          <span class="rate_star-label">{{ star }}점</span>
        </label>
      </div>
      <button
        v-if="clearable"
        v-bind="childRippleAttrs"
        type="button"
        class="rate_clear"
        aria-label="별점 초기화"
        title="초기화"
        @click="onClear"
      >
        <svg
          class="rate_clear-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <output v-if="currentValue" class="rate_value">{{ currentValue }}점</output>
    </div>
  </fieldset>
</template>
