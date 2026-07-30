<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
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
    validator: (v) => ['primary', 'muted', 'success', 'warning', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: '',
    validator: (v) => ['', 'sm', 'lg', 'xl'].includes(v),
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

const formatCode = createComponentFormatter('Link', {
  defaults: { color: 'primary' },
  booleanProps: new Set(['underline',
    'noUnderline',
    'standalone',
    'nav',
    'block',
    'back',
    'iconOnly',
    'active',
    'disabled',, 'ripple']),
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['link', `color_${props.color}`];
  if (props.size === 'sm') classes.push('size_sm');
  if (props.size === 'lg') classes.push('size_lg');
  if (props.size === 'xl') classes.push('size_xl');
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

const showLabel = computed(() => !props.iconOnly && (props.label || slots.default));

function onClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const resolvedHref = props.href || attrs.href;
  if (!resolvedHref || resolvedHref === '#') {
    event.preventDefault();
  }
}
</script>

<template>
  <a
    ref="rootRef"
    v-bind="rippleAttrs"
    :class="rootClass"
    :href="href || '#'"
    :target="target"
    :rel="rel"
    :aria-label="ariaLabel"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
    @click="onClick"
  >
    <slot name="icon" />
    <template v-if="showLabel">
      <slot>{{ label }}</slot>
    </template>
  </a>
</template>
