<script setup>
import { computed, inject, ref, resolveComponent, useAttrs, useId, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  href: String,
  /** 항목 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트를 지정할 수 있습니다. */
  as: {
    type: [String, Object, Function],
    default: undefined,
  },
  active: Boolean,
  disabled: Boolean,
  color: String,
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const menu = inject('menu', null);
const generatedId = useId().replace(/:/g, '');
const itemId = `menu-item-${generatedId}`;
const NuxtLinkComponent = resolveComponent('NuxtLink');

const formatCode = createComponentFormatter('MenuItem', {
  booleanProps: new Set(['active', 'disabled', 'ripple']),
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

const isActive = computed(() =>
  menu?.selectedItemId.value
    ? menu.selectedItemId.value === itemId
    : Boolean(props.active)
);

const itemClass = computed(() => [
  'menu_item',
  { 'is-disabled': props.disabled },
]);

const linkClass = computed(() => {
  const classes = ['menu_link'];
  if (isActive.value) classes.push('is-active');
  if (props.disabled) classes.push('is-disabled');
  if (props.color) classes.push(`color_${props.color}`);
  return classes;
});

const resolvedAs = computed(() => {
  if (props.disabled) return 'span';
  if (props.as === 'NuxtLink') return NuxtLinkComponent;
  return props.as || (props.href ? 'a' : 'button');
});
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

function onClick(event) {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  if ((!props.href || props.href === '#') && resolvedAs.value === 'a') {
    event.preventDefault();
  }
  menu?.selectItem(itemId);
  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <li ref="rootRef" v-bind="itemAttrs" :class="[itemClass, attrs.class]">
    <component
      :is="resolvedAs"
      v-bind="rippleAttrs"
      :class="linkClass"
      :href="acceptsHref ? href : undefined"
      :type="resolvedAs === 'button' ? 'button' : undefined"
      :aria-current="isActive ? 'page' : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :tabindex="disabled ? -1 : undefined"
      @click="onClick"
    >
      <slot name="icon" />
      <span v-if="label || $slots.default" class="menu_label">
        <slot>{{ label }}</slot>
      </span>
      <slot name="extra" />
    </component>
  </li>
</template>
