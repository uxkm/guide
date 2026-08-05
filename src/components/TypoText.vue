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
  strong: { tag: 'strong', class: 'typo_strong' },
  italic: { tag: 'em', class: 'typo_italic' },
  underline: { tag: 'span', class: 'typo_underline' },
  delete: { tag: 'del', class: 'typo_delete' },
  mark: { tag: 'mark', class: 'typo_mark' },
  sub: { tag: 'sub', class: 'typo_sub' },
  sup: { tag: 'sup', class: 'typo_sup' },
  small: { tag: 'small', class: 'typo_small' },
  link: { tag: 'a', class: 'typo_link' },
  blockquote: { tag: 'blockquote', class: 'typo_blockquote' },
  text: { tag: 'p', class: '' },
};

const VALID_SIZES = new Set(['', 'xs', 'sm', 'lg', 'xl']);
const VALID_COLORS = new Set([
  '',
  'default',
  'muted',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'error',
]);
const VALID_ELLIPSIS = new Set([1, 2, 3, '1', '2', '3']);
const VALID_TAGS = new Set([
  'p',
  'span',
  'div',
  'label',
  'code',
  'kbd',
  'pre',
  'strong',
  'em',
  'u',
  'del',
  'mark',
  'sub',
  'sup',
  'small',
  'a',
  'blockquote',
  'abbr',
  'cite',
  'q',
  'time',
  'address',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

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
  selfClosing: false,
});

const resolvedVariant = computed(() =>
  Object.hasOwn(VARIANT_MAP, props.variant) ? props.variant : 'text'
);
const variantConfig = computed(() => VARIANT_MAP[resolvedVariant.value]);
const resolvedColor = computed(() => (VALID_COLORS.has(props.color) ? props.color : ''));
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : ''));
const rootTag = computed(() =>
  VALID_TAGS.has(props.tag) ? props.tag : variantConfig.value.tag
);

const ellipsisLines = computed(() => {
  return VALID_ELLIPSIS.has(props.ellipsis) ? Number(props.ellipsis) : 0;
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    variant: resolvedVariant.value,
    color: resolvedColor.value,
    size: resolvedSize.value,
    ellipsis: ellipsisLines.value,
    tag: VALID_TAGS.has(props.tag) ? props.tag : undefined,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = [];
  if (variantConfig.value.class) classes.push(variantConfig.value.class);
  if (resolvedColor.value) classes.push(`color_${resolvedColor.value}`);
  if (resolvedSize.value === 'xs') classes.push('size_xs');
  if (resolvedSize.value === 'sm') classes.push('size_sm');
  if (resolvedSize.value === 'lg') classes.push('size_lg');
  if (resolvedSize.value === 'xl') classes.push('size_xl');
  if (ellipsisLines.value === 1) classes.push('text_ellipsis');
  if (ellipsisLines.value === 2) classes.push('text_ellipsis-2');
  if (ellipsisLines.value === 3) classes.push('text_ellipsis-3');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});

function invokeListener(listener, event) {
  if (typeof listener === 'function') {
    listener(event);
    return;
  }

  if (Array.isArray(listener)) {
    listener.forEach((fn) => fn(event));
  }
}

function onClick(event) {
  if (rootTag.value === 'a' && !props.href) {
    event.preventDefault();
  }

  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <component
    :is="rootTag"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :href="rootTag === 'a' ? href : undefined"
    :for="rootTag === 'label' ? htmlFor : undefined"
    :cite="rootTag === 'blockquote' ? cite : undefined"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
