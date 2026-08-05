<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 일반 Tag의 루트 HTML 태그 또는 커스텀 컴포넌트 */
  as: {
    type: [String, Object, Function],
    default: 'span',
  },
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
  defaults: { as: 'span', color: 'primary', variant: 'filled', size: 'md' },
  booleanProps: new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'ripple']),
  slotContent: {
    icon: '<Icon name="tag" />',
  },
});

const resolvedAs = computed(() => props.as || 'span');
const resolvedVariant = computed(() =>
  VALID_VARIANTS.has(props.variant) ? props.variant : 'filled'
);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    as: typeof resolvedAs.value === 'string' ? resolvedAs.value : undefined,
    variant: resolvedVariant.value,
    size: resolvedSize.value,
  }),
  slots,
  rootRef,
  attrs
);

/** closable + button/a 루트는 interactive 중첩이 되므로 span 래퍼 + tag_control로 분리 */
const needsClosableSplit = computed(
  () => props.closable && (props.checkable || props.add || Boolean(props.href)),
);

const rootTag = computed(() => {
  if (props.checkable || props.add) return 'button';
  if (props.href) return 'a';
  return resolvedAs.value;
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
  if (resolvedVariant.value === 'solid') classes.push('tag_solid');
  if (resolvedVariant.value === 'outline') classes.push('tag_outline');
  if (resolvedVariant.value === 'borderless') classes.push('tag_borderless');
  if (resolvedSize.value === 'sm') classes.push('tag_sm');
  if (resolvedSize.value === 'lg') classes.push('tag_lg');
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

const isNativeButton = computed(() => rootTag.value === 'button');
const isNativeAnchor = computed(() => rootTag.value === 'a');
const fallthroughAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});
const rootBindAttrs = computed(() => ({
  ...wrapperRippleAttrs.value,
  ...fallthroughAttrs.value,
}));

function invokeListener(listener, event) {
  if (Array.isArray(listener)) {
    listener.forEach((handler) => handler?.(event));
    return;
  }
  listener?.(event);
}

function onControlClick(event) {
  if (controlTag.value === 'a') {
    event.preventDefault();
    if (props.disabled) {
      event.stopPropagation();
      return;
    }
  }
  invokeListener(attrs.onClick, event);
}

function onRootClick(event) {
  if (props.disabled && (isNativeButton.value || isNativeAnchor.value)) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (isNativeAnchor.value && (!props.href || props.href === '#')) {
    event.preventDefault();
  }
  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <component
    v-if="needsClosableSplit"
    :is="resolvedAs"
    ref="rootRef"
    v-bind="rootBindAttrs"
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
      @click="onControlClick"
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
      :aria-label="closeLabel || `${label ?? ''} 태그 제거`"
      @click.stop="emit('close', $event)"
    >
      <template #icon-before>
        <Icon name="close" size="sm" />
      </template>
    </Button>
  </component>
  <component
    v-else
    :is="rootTag"
    ref="rootRef"
    v-bind="rootBindAttrs"
    :class="rootClass"
    :type="buttonType"
    :href="href || undefined"
    :disabled="isNativeButton && disabled ? true : undefined"
    :aria-pressed="checkable ? String(selected) : undefined"
    :aria-disabled="isNativeAnchor && disabled ? 'true' : undefined"
    :tabindex="isNativeAnchor && disabled ? -1 : undefined"
    @click="onRootClick"
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
      :aria-label="closeLabel || `${label ?? ''} 태그 제거`"
      @click.stop="emit('close', $event)"
    >
      <template #icon-before>
        <Icon name="close" size="sm" />
      </template>
    </Button>
  </component>
</template>
