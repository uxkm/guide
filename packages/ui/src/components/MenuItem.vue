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
  active: Boolean,
  disabled: Boolean,
  color: String,
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('MenuItem', {
  booleanProps: new Set(['active', 'disabled', 'ripple']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const itemClass = computed(() => [
  'menu_item',
  { 'is-disabled': props.disabled },
]);

const linkClass = computed(() => {
  const classes = ['menu_link'];
  if (props.active) classes.push('is-active');
  if (props.disabled) classes.push('is-disabled');
  if (props.color) classes.push(`color_${props.color}`);
  return classes;
});

const tag = computed(() => (props.href && !props.disabled ? 'a' : props.disabled ? 'span' : 'button'));
const buttonType = computed(() => (tag.value === 'button' ? 'button' : undefined));
</script>

<template>
  <li ref="rootRef" :class="itemClass">
    <component
      :is="tag"
      v-bind="rippleAttrs"
      :class="linkClass"
      :href="tag === 'a' ? href || '#' : undefined"
      :type="buttonType"
      :aria-current="active ? 'page' : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :disabled="tag === 'button' ? disabled : undefined"
      :tabindex="disabled && tag === 'a' ? -1 : undefined"
      @click="tag === 'a' ? $event.preventDefault() : undefined"
    >
      <slot name="icon" />
      <span v-if="label || $slots.default" class="menu_label">
        <slot>{{ label }}</slot>
      </span>
      <slot name="extra" />
    </component>
  </li>
</template>
