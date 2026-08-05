<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useUploadDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const VALID_VARIANTS = new Set(['button', 'drag', 'list', 'picture-card', 'avatar']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  variant: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'drag', 'list', 'picture-card', 'avatar'].includes(v),
  },
  disabled: Boolean,
  fit: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  multiple: Boolean,
  accept: String,
  inputId: String,
  hint: String,
  dragover: Boolean,
  error: Boolean,
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });

const emit = defineEmits(['change']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedVariant = computed(() =>
  VALID_VARIANTS.has(props.variant) ? props.variant : 'button'
);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);

useUploadDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['upload'];
  if (props.fit) classes.push('upload_fit');
  if (resolvedSize.value === 'sm') classes.push('upload_sm');
  if (resolvedSize.value === 'lg') classes.push('upload_lg');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const triggerClass = computed(() => {
  if (resolvedVariant.value === 'drag') {
    return [
      'upload_dropzone',
      props.dragover ? 'is-dragover' : '',
      props.error ? 'is-error' : '',
    ].filter(Boolean);
  }
  if (resolvedVariant.value === 'picture-card') return ['upload_card', 'upload_card-trigger'];
  if (resolvedVariant.value === 'avatar') return ['upload_avatar'];
  return ['upload_trigger'];
});

const showTrigger = computed(() => resolvedVariant.value !== 'list');
const showHint = computed(() =>
  resolvedVariant.value === 'button' || resolvedVariant.value === 'drag'
);
const showDefault = computed(() =>
  resolvedVariant.value === 'list' || Boolean(slots.default)
);
const showCards = computed(() => resolvedVariant.value === 'picture-card');

function onChange(event) {
  emit('change', event);
}
</script>

<template>
  <div ref="rootRef"
    v-bind="rippleAttrs" :class="rootClass">
    <label
      v-if="showTrigger"
      v-bind="childRippleAttrs"
      :class="triggerClass"
      data-demo-slot="trigger"
    >
      <input
        :id="inputId"
        type="file"
        class="upload_input"
        tabindex="-1"
        :disabled="disabled"
        :multiple="multiple || undefined"
        :accept="accept"
        :aria-invalid="error ? 'true' : undefined"
        v-bind="fallthroughAttrs"
        @change="onChange"
      />
      <slot name="trigger" />
    </label>

    <div
      v-if="showHint"
      data-demo-slot="hint"
    >
      <slot name="hint">
        <p v-if="hint" class="upload_hint">{{ hint }}</p>
      </slot>
    </div>

    <div
      v-if="showDefault"
      data-demo-slot="default"
    >
      <slot name="default" />
    </div>

    <div v-if="showCards" class="upload_cards" data-demo-slot="cards">
      <slot name="cards" />
    </div>
  </div>
</template>
