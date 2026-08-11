<script setup>
import { computed, getCurrentInstance, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmCard', inheritAttrs: false });
const props = defineProps({
  as: String,
  tag: String,
  title: [String, Number],
  subtitle: [String, Number],
  href: String,
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg', 'compact'].includes(value) },
  variant: { type: String, default: 'bordered', validator: (value) => ['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost'].includes(value) },
  horizontal: Boolean,
  compact: Boolean,
  hoverable: Boolean,
  accent: Boolean,
  color: String,
  disabled: Boolean,
  ripple: { type: Boolean, default: undefined }
});
const attrs = useAttrs();
const slots = useSlots();
const instance = getCurrentInstance();
const emit = defineEmits(['click']);
const interactive = computed(() => Boolean(props.href || instance?.vnode.props?.onClick));
const rootTag = computed(() => props.as || props.tag || (props.href ? 'a' : interactive.value ? 'button' : 'article'));
const variantClass = computed(() => props.variant === 'flat' ? 'card_ghost' : ['default', 'bordered'].includes(props.variant) ? '' : `card_${props.variant}`);
const classes = computed(() => [
  'card', variantClass.value, props.size !== 'md' && `card_${props.size}`,
  props.horizontal && 'card_horizontal', props.compact && 'card_compact', props.hoverable && 'card_hover',
  props.accent && 'card_accent', props.color && `color_${props.color}`, interactive.value && 'card_clickable',
  props.disabled && 'is-disabled', attrs.class
].filter(Boolean));
const rootAttrs = computed(() => { const { class: _class, onClick: _onClick, ...rest } = attrs; return rest; });
const hasBuiltInHeader = computed(() => props.title != null || props.subtitle != null || slots.header || slots.extra);
function handleClick(event) { if (props.disabled) { event.preventDefault(); event.stopPropagation(); return; } emit('click', event); }
</script>

<template>
  <component
    :is="rootTag" v-bind="rootAttrs" :class="classes" data-component="Card"
    :data-ripple="ripple == null ? undefined : String(ripple)"
    :type="rootTag === 'button' ? 'button' : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :aria-disabled="interactive && disabled ? 'true' : undefined"
    :tabindex="interactive && disabled ? -1 : undefined"
    @click="interactive ? handleClick($event) : undefined"
  >
    <slot name="media" />
    <div v-if="hasBuiltInHeader" class="card_header">
      <div class="card_header-main"><slot name="header"><h3 v-if="title != null" class="card_title">{{ title }}</h3><p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot></div>
      <div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div>
    </div>
    <slot />
  </component>
</template>
