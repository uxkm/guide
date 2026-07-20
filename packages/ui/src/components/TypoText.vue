<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VARIANT_MAP = {
  paragraph: { tag: 'p', class: 'typo_paragraph' },
  lead: { tag: 'p', class: 'typo_lead' },
  caption: { tag: 'p', class: 'typo_caption' },
  label: { tag: 'label', class: 'typo_label' },
  overline: { tag: 'p', class: 'typo_overline' },
  code: { tag: 'code', class: 'typo_code' },
  kbd: { tag: 'kbd', class: 'typo_kbd' },
  pre: { tag: 'pre', class: 'typo_pre' },
  strong: { tag: 'span', class: 'typo_strong' },
  italic: { tag: 'span', class: 'typo_italic' },
  underline: { tag: 'span', class: 'typo_underline' },
  delete: { tag: 'span', class: 'typo_delete' },
  mark: { tag: 'span', class: 'typo_mark' },
  sub: { tag: 'sub', class: 'typo_sub' },
  sup: { tag: 'sup', class: 'typo_sup' },
  small: { tag: 'small', class: 'typo_small' },
  link: { tag: 'a', class: 'typo_link' },
  blockquote: { tag: 'blockquote', class: 'typo_blockquote' },
  text: { tag: 'p', class: '' },
};

const props = defineProps({
  variant: {
    type: String,
    default: 'text',
  },
  color: String,
  size: {
    type: String,
    default: '',
    validator: (v) => ['', 'xs', 'sm', 'lg', 'xl'].includes(v),
  },
  ellipsis: {
    type: [Number, String],
    default: undefined,
    validator: (v) => v == null || [0, 1, 2, 3, '0', '1', '2', '3'].includes(v),
  },
  href: String,
  htmlFor: String,
  cite: String,
  label: String,
  tag: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('TypoText', {
  defaults: { variant: 'text', ellipsis: 0 },
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const variantConfig = computed(() => VARIANT_MAP[props.variant] || VARIANT_MAP.text);

const rootTag = computed(() => props.tag || variantConfig.value.tag);

const ellipsisLines = computed(() => {
  if (props.ellipsis == null || props.ellipsis === '') return 0;
  const lines = Number(props.ellipsis);
  return lines >= 1 && lines <= 3 ? lines : 0;
});

const rootClass = computed(() => {
  const classes = [];
  if (variantConfig.value.class) classes.push(variantConfig.value.class);
  if (props.color) classes.push(`color_${props.color}`);
  if (props.size === 'xs') classes.push('size_xs');
  if (props.size === 'sm') classes.push('size_sm');
  if (props.size === 'lg') classes.push('size_lg');
  if (props.size === 'xl') classes.push('size_xl');
  if (ellipsisLines.value === 1) classes.push('text_ellipsis');
  if (ellipsisLines.value === 2) classes.push('text_ellipsis-2');
  if (ellipsisLines.value === 3) classes.push('text_ellipsis-3');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <component
    :is="rootTag"
    ref="rootRef"
    :class="rootClass"
    :href="variant === 'link' ? (href || '#') : undefined"
    :for="variant === 'label' ? htmlFor : undefined"
    :cite="variant === 'blockquote' ? cite : undefined"
    @click="variant === 'link' && !href ? $event.preventDefault() : undefined"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
