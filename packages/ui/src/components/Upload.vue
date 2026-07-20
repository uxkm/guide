<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useUploadDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

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


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useUploadDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['upload'];
  if (props.fit) classes.push('upload_fit');
  if (props.size === 'sm') classes.push('upload_sm');
  if (props.size === 'lg') classes.push('upload_lg');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const triggerClass = computed(() => {
  if (props.variant === 'drag') return ['upload_dropzone', props.dragover ? 'is-dragover' : '', props.error ? 'is-error' : ''].filter(Boolean);
  if (props.variant === 'picture-card') return ['upload_card', 'upload_card-trigger'];
  if (props.variant === 'avatar') return ['upload_avatar'];
  return ['upload_trigger'];
});
</script>

<template>
  <div ref="rootRef"
    v-bind="rippleAttrs" :class="rootClass">
    <label
      v-if="variant !== 'list'"
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
      />
      <slot name="trigger" />
    </label>

    <div
      v-if="variant === 'button' || variant === 'drag'"
      data-demo-slot="hint"
    >
      <slot name="hint">
        <p v-if="hint" class="upload_hint">{{ hint }}</p>
      </slot>
    </div>

    <div
      v-if="variant === 'list' || $slots.default"
      data-demo-slot="default"
    >
      <slot name="default" />
    </div>

    <div v-if="variant === 'picture-card'" class="upload_cards" data-demo-slot="cards">
      <slot name="cards" />
    </div>
  </div>
</template>
