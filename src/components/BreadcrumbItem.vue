<script setup>
import { computed, ref, resolveComponent, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  href: String,
  current: Boolean,
  disabled: Boolean,
  icon: Boolean,
  ariaLabel: String,
  /** 링크 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트를 지정할 수 있습니다. */
  as: {
    type: [String, Object, Function],
    default: undefined,
  },
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const NuxtLinkComponent = resolveComponent('NuxtLink');

const formatCode = createComponentFormatter('BreadcrumbItem', {
  booleanProps: new Set(['current', 'disabled', 'icon', 'ripple']),
  labelProp: 'label',
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    as: typeof props.as === 'string' ? props.as : undefined,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['breadcrumb_item'];
  if (props.current) classes.push('is-current');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const linkClass = computed(() => {
  const classes = ['breadcrumb_link'];
  if (props.icon) classes.push('breadcrumb_link-icon');
  if (props.disabled) classes.push('is-disabled');
  return classes;
});

const resolvedAs = computed(() =>
  props.as === 'NuxtLink' ? NuxtLinkComponent : props.as || 'a'
);
const acceptsHref = computed(
  () => resolvedAs.value === 'a' || typeof resolvedAs.value !== 'string'
);
const itemAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});

function invokeListener(listener, event) {
  if (Array.isArray(listener)) {
    listener.forEach((handler) => handler?.(event));
    return;
  }
  listener?.(event);
}

function onLinkClick(event) {
  if (!props.href || props.href === '#') event.preventDefault();
  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <li
    ref="rootRef"
    v-bind="itemAttrs"
    :class="rootClass"
    :aria-current="current ? 'page' : undefined"
  >
    <component
      v-if="href && !current && !disabled"
      :is="resolvedAs"
      v-bind="rippleAttrs"
      :class="linkClass"
      :href="acceptsHref ? href : undefined"
      :aria-label="ariaLabel || undefined"
      @click="onLinkClick"
    >
      <slot>{{ label }}</slot>
    </component>
    <span
      v-else-if="disabled"
      :class="linkClass"
      aria-disabled="true"
    >
      <slot>{{ label }}</slot>
    </span>
    <span v-else-if="current" class="breadcrumb_current">
      <slot>{{ label }}</slot>
    </span>
    <slot v-else />
  </li>
</template>
