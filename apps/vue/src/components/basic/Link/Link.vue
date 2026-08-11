<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmLink', inheritAttrs: false });

const props = defineProps({
  as: { type: [String, Object, Function], default: 'a' },
  ripple: { type: Boolean, default: true },
  color: { type: String, default: 'primary' },
  size: { type: String, default: '' },
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
  ariaLabel: String
});

const emit = defineEmits(['click']);
const attrs = useAttrs();
const slots = useSlots();
const colors = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const sizes = new Set(['', 'sm', 'lg', 'xl']);
const resolvedColor = computed(() => colors.has(props.color) ? props.color : 'primary');
const resolvedSize = computed(() => sizes.has(props.size) ? props.size : '');
const rootTag = computed(() => props.as || 'a');
const isAnchor = computed(() => rootTag.value === 'a');
const isButton = computed(() => rootTag.value === 'button');
const acceptsHref = computed(() => isAnchor.value || typeof rootTag.value !== 'string');
const showLabel = computed(() => !props.iconOnly && (Boolean(slots.default) || Boolean(props.label)));
const classes = computed(() => [
  'link', `color_${resolvedColor.value}`, resolvedSize.value && `size_${resolvedSize.value}`,
  props.underline && 'link_underline', props.noUnderline && 'link_no-underline',
  props.standalone && 'link_standalone', props.nav && 'link_nav', props.block && 'link_block',
  props.back && 'link_back', props.iconOnly && 'link_icon-only', props.active && 'is-active',
  props.disabled && 'is-disabled', attrs.class
].filter(Boolean));

function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!props.href || props.href === '#') event.preventDefault();
  emit('click', event);
}
</script>

<template>
  <component
    :is="rootTag"
    v-bind="attrs"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    :aria-label="ariaLabel || attrs['aria-label']"
    :class="classes"
    data-component="Link"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="isButton ? disabled : undefined"
    :href="acceptsHref ? (href || '#') : undefined"
    :rel="acceptsHref ? rel : undefined"
    :tabindex="disabled ? -1 : attrs.tabindex"
    :target="acceptsHref ? target : undefined"
    :type="isButton ? 'button' : undefined"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot v-if="showLabel">{{ label }}</slot>
    <slot name="icon-after" />
  </component>
</template>
