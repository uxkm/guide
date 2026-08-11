<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmTypoText' });

const VARIANTS = {
  text: { tag: 'p', className: '' }, paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' }, caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' }, overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' }, kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' }, strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' }, underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' }, mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' }, sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' }, link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' }
};

const props = defineProps({
  variant: { type: String, default: 'text' },
  tag: String,
  color: String,
  size: { type: String, default: '', validator: (value) => ['', 'xs', 'sm', 'lg', 'xl'].includes(value) },
  ellipsis: { type: [Number, String], default: undefined },
  href: String,
  htmlFor: String,
  cite: String,
  label: String
});

const emit = defineEmits(['click']);
const config = computed(() => VARIANTS[props.variant] ?? VARIANTS.text);
const rootTag = computed(() => props.tag || config.value.tag);
const classes = computed(() => {
  const lines = Number(props.ellipsis);
  return [
    config.value.className, props.color && `color_${props.color}`,
    props.size && `size_${props.size}`, lines === 1 ? 'text_ellipsis' : [2, 3].includes(lines) ? `text_ellipsis-${lines}` : ''
  ].filter(Boolean);
});

function handleClick(event) {
  if (props.variant === 'link' && !props.href) event.preventDefault();
  emit('click', event);
}
</script>

<template>
  <component
    :is="rootTag"
    :class="classes"
    :cite="variant === 'blockquote' ? cite : undefined"
    data-component="TypoText"
    :for="variant === 'label' ? htmlFor : undefined"
    :href="variant === 'link' ? (href || '#') : undefined"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
