<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmTag', inheritAttrs: false });

const props = defineProps({
  label: String,
  color: { type: String, default: 'primary' },
  variant: { type: String, default: 'filled', validator: (value) => ['filled', 'solid', 'outline', 'borderless'].includes(value) },
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  round: Boolean,
  checkable: Boolean,
  add: Boolean,
  closable: Boolean,
  selected: Boolean,
  disabled: Boolean,
  ripple: { type: Boolean, default: undefined },
  href: String,
  closeLabel: String
});

const attrs = useAttrs();
const emit = defineEmits(['click', 'close']);
const interactive = computed(() => props.checkable || props.add || Boolean(props.href));
const splitControl = computed(() => props.closable && interactive.value);
const rootTag = computed(() => splitControl.value ? 'span' : props.checkable || props.add ? 'button' : props.href ? 'a' : 'span');
const controlTag = computed(() => props.checkable || props.add ? 'button' : 'a');
const classes = computed(() => [
  'tag', `color_${props.color}`, props.variant !== 'filled' && `tag_${props.variant}`,
  props.size !== 'md' && `tag_${props.size}`, props.round && 'tag_round',
  props.checkable && 'tag_checkable', props.add && 'tag_add', props.selected && 'is-selected',
  props.disabled && 'is-disabled', attrs.class
].filter(Boolean));
const rippleAttrs = computed(() => props.ripple === false
  ? { 'data-ripple': 'false' }
  : (props.ripple === true || interactive.value ? { 'data-ripple': 'true' } : {}));
const rootAttrs = computed(() => ({ ...attrs, ...(splitControl.value ? {} : rippleAttrs.value) }));

function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

function handleClose(event) {
  event.stopPropagation();
  emit('close', event);
}
</script>

<template>
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Tag"
    :type="rootTag === 'button' ? 'button' : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :aria-disabled="rootTag !== 'button' && disabled ? 'true' : undefined"
    :aria-pressed="checkable && !splitControl ? String(selected) : undefined"
    :tabindex="rootTag === 'a' && disabled ? -1 : undefined"
    @click="splitControl || handleClick($event)"
  >
    <component
      :is="controlTag"
      v-if="splitControl"
      class="tag_control"
      v-bind="rippleAttrs"
      :type="controlTag === 'button' ? 'button' : undefined"
      :href="controlTag === 'a' && !disabled ? href : undefined"
      :disabled="controlTag === 'button' ? disabled : undefined"
      :aria-disabled="controlTag === 'a' && disabled ? 'true' : undefined"
      :aria-pressed="checkable ? String(selected) : undefined"
      :tabindex="controlTag === 'a' && disabled ? -1 : undefined"
      @click="handleClick"
    >
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </component>
    <template v-else>
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </template>
    <button
      v-if="closable"
      class="tag_close"
      type="button"
      :aria-label="closeLabel || `${label || ''} 태그 제거`"
      :disabled="disabled || undefined"
      @click="handleClose"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    </button>
  </component>
</template>
