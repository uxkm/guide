<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_COLORS = new Set(['primary', 'muted', 'success', 'warning', 'danger']);
const VALID_SIZES = new Set(['', 'sm', 'lg', 'xl']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '',
  },
  underline: Boolean,
  noUnderline: Boolean,
  standalone: Boolean,
  nav: Boolean,
  block: Boolean,
  back: Boolean,
  iconOnly: Boolean,
  active: Boolean,
  disabled: Boolean,
  /** a, button 또는 커스텀 링크 컴포넌트 */
  as: {
    type: [String, Object, Function],
    default: 'a',
  },
  label: String,
  href: String,
  target: String,
  rel: String,
  ariaLabel: String,
});

const { rippleAttrs } = useRipple(props);
const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const resolvedColor = computed(() =>
  VALID_COLORS.has(props.color) ? props.color : 'primary'
);
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : ''));
const resolvedAs = computed(() => props.as || 'a');
const isNativeAnchor = computed(() => resolvedAs.value === 'a');
const isNativeButton = computed(() => resolvedAs.value === 'button');
const acceptsHref = computed(
  () => isNativeAnchor.value || typeof resolvedAs.value !== 'string'
);
const resolvedHref = computed(() => {
  const value = props.href ?? attrs.href;
  return value != null && value !== '' ? String(value) : '#';
});
const resolvedAriaLabel = computed(() => props.ariaLabel ?? attrs['aria-label']);

const formatCode = createComponentFormatter('Link', {
  defaults: { color: 'primary', as: 'a' },
  booleanProps: new Set([
    'underline',
    'noUnderline',
    'standalone',
    'nav',
    'block',
    'back',
    'iconOnly',
    'active',
    'disabled',
    'ripple',
  ]),
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    color: resolvedColor.value,
    size: resolvedSize.value,
    as: typeof resolvedAs.value === 'string' ? resolvedAs.value : undefined,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['link', `color_${resolvedColor.value}`];
  if (resolvedSize.value === 'sm') classes.push('size_sm');
  if (resolvedSize.value === 'lg') classes.push('size_lg');
  if (resolvedSize.value === 'xl') classes.push('size_xl');
  if (props.underline) classes.push('link_underline');
  if (props.noUnderline) classes.push('link_no-underline');
  if (props.standalone) classes.push('link_standalone');
  if (props.nav) classes.push('link_nav');
  if (props.block) classes.push('link_block');
  if (props.back) classes.push('link_back');
  if (props.iconOnly) classes.push('link_icon-only');
  if (props.active) classes.push('is-active');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const showLabel = computed(() => {
  if (props.iconOnly) return false;
  return Boolean(slots.default) || (props.label != null && props.label !== '');
});

const fallthroughAttrs = computed(() => {
  const {
    class: _class,
    href: _href,
    target: _target,
    rel: _rel,
    type: _type,
    disabled: _disabled,
    tabindex: _tabindex,
    onClick: _onClick,
    'aria-label': _ariaLabel,
    'aria-current': _ariaCurrent,
    'aria-disabled': _ariaDisabled,
    ...rest
  } = attrs;
  return { ...rest, ...rippleAttrs.value };
});

function invokeListener(listener, event) {
  if (Array.isArray(listener)) {
    listener.forEach((handler) => handler?.(event));
    return;
  }
  listener?.(event);
}

function onClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const clickHref = props.href ?? attrs.href;
  if (!clickHref || clickHref === '#') event.preventDefault();

  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <component
    :is="resolvedAs"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :href="acceptsHref ? resolvedHref : undefined"
    :target="acceptsHref ? target : undefined"
    :rel="acceptsHref ? rel : undefined"
    :type="isNativeButton ? 'button' : undefined"
    :disabled="isNativeButton && disabled ? true : undefined"
    :aria-label="resolvedAriaLabel"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : attrs.tabindex"
    @click="onClick"
  >
    <slot name="icon" />
    <template v-if="showLabel">
      <slot>{{ label }}</slot>
    </template>
  </component>
</template>
