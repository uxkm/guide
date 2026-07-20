<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
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
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('BreadcrumbItem', {
  booleanProps: new Set(['current', 'disabled', 'icon', 'ripple']),
  labelProp: 'label',
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

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
</script>

<template>
  <li
    ref="rootRef"
    :class="rootClass"
    :aria-current="current ? 'page' : undefined"
  >
    <a
      v-if="href && !current && !disabled"
      v-bind="rippleAttrs"
      :class="linkClass"
      :href="href"
      :aria-label="ariaLabel || undefined"
      @click.prevent
    >
      <slot>{{ label }}</slot>
    </a>
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
