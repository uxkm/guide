<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (v) => ['filled', 'solid', 'outline', 'borderless'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  round: Boolean,
  checkable: Boolean,
  add: Boolean,
  closable: Boolean,
  selected: Boolean,
  disabled: Boolean,
  label: String,
  href: String,
  closeLabel: String,
});
const { childRippleAttrs } = useRipple(props, { defaultEnabled: false });

const rootRippleAttrs = computed(() => {
  if (props.ripple === false) return { 'data-ripple': 'false' };
  if (props.ripple === true || props.checkable || props.add || props.href) {
    return { 'data-ripple': 'true' };
  }
  return {};
});


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const emit = defineEmits(['close']);

const formatCode = createComponentFormatter('Tag', {
  defaults: { color: 'primary', variant: 'filled', size: 'md' },
  booleanProps: new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'ripple']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

/** closable + button/a 루트는 interactive 중첩이 되므로 span 래퍼 + tag_control로 분리 */
const needsClosableSplit = computed(
  () => props.closable && (props.checkable || props.add || Boolean(props.href)),
);

const rootTag = computed(() => {
  if (needsClosableSplit.value) return 'span';
  if (props.checkable || props.add) return 'button';
  if (props.href) return 'a';
  return 'span';
});

const controlTag = computed(() => {
  if (props.checkable || props.add) return 'button';
  return 'a';
});

const controlRippleAttrs = computed(() => {
  if (needsClosableSplit.value) return rootRippleAttrs.value;
  return {};
});

const wrapperRippleAttrs = computed(() => {
  if (needsClosableSplit.value) return {};
  return rootRippleAttrs.value;
});

const rootClass = computed(() => {
  const classes = ['tag', `color_${props.color}`];
  if (props.variant === 'solid') classes.push('tag_solid');
  if (props.variant === 'outline') classes.push('tag_outline');
  if (props.variant === 'borderless') classes.push('tag_borderless');
  if (props.size === 'sm') classes.push('tag_sm');
  if (props.size === 'lg') classes.push('tag_lg');
  if (props.round) classes.push('tag_round');
  if (props.checkable) classes.push('tag_checkable');
  if (props.add) classes.push('tag_add');
  if (props.selected) classes.push('is-selected');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const buttonType = computed(() => {
  if (needsClosableSplit.value) return undefined;
  if (props.checkable || props.add) return 'button';
  return undefined;
});
</script>

<template>
  <span
    v-if="needsClosableSplit"
    ref="rootRef"
    v-bind="wrapperRippleAttrs"
    :class="rootClass"
  >
    <component
      :is="controlTag"
      class="tag_control"
      v-bind="controlRippleAttrs"
      :type="controlTag === 'button' ? 'button' : undefined"
      :href="controlTag === 'a' ? href : undefined"
      :disabled="controlTag === 'button' ? disabled : undefined"
      :aria-pressed="checkable ? String(selected) : undefined"
      :aria-disabled="controlTag === 'a' && disabled ? 'true' : undefined"
      :tabindex="controlTag === 'a' && disabled ? -1 : undefined"
      @click="controlTag === 'a' ? $event.preventDefault() : undefined"
    >
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <slot>{{ label }}</slot>
    </component>
    <Button
      v-bind="childRippleAttrs"
      variant="ghost"
      icon-only
      class="tag_close"
      :aria-label="closeLabel || `${label} 태그 제거`"
      @click.stop="emit('close', $event)"
    >
      <template #icon-before>
        <Icon name="close" size="sm" />
      </template>
    </Button>
  </span>
  <component
    v-else
    :is="rootTag"
    ref="rootRef"
    v-bind="wrapperRippleAttrs"
    :class="rootClass"
    :type="buttonType"
    :href="href || undefined"
    :disabled="disabled || undefined"
    :aria-pressed="checkable ? String(selected) : undefined"
    @click="href ? undefined : ($event) => !href && $event.preventDefault()"
  >
    <span v-if="$slots.icon" class="tag_icon" aria-hidden="true">
      <slot name="icon" />
    </span>
    <slot>{{ label }}</slot>
    <Button
      v-if="closable"
      v-bind="childRippleAttrs"
      variant="ghost"
      icon-only
      class="tag_close"
      :aria-label="closeLabel || `${label} 태그 제거`"
      @click.stop="emit('close', $event)"
    >
      <template #icon-before>
        <Icon name="close" size="sm" />
      </template>
    </Button>
  </component>
</template>
