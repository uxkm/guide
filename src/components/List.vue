<script setup>
import { computed, provide, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VARIANT_TAG = {
  default: 'ul',
  bullet: 'ul',
  ordered: 'ol',
  definition: 'dl',
};

const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};

const props = defineProps({
  bordered: Boolean,
  split: Boolean,
  /** 부모 너비 100% (layout="inline"일 때 auto 너비를 덮어씀) */
  block: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['md', 'compact'].includes(v),
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'bullet', 'ordered', 'definition'].includes(v),
  },
  tag: {
    type: String,
    default: undefined,
    validator: (v) => v === undefined || ['ul', 'ol', 'dl', 'div'].includes(v),
  },
  layout: {
    type: String,
    default: 'block',
    validator: (v) => ['block', 'inline'].includes(v),
  },
  /** 인라인 정의 목록 — dt 열 너비 (--list-inline-label-width) */
  inlineLabelWidth: String,
  /** 인라인 정의 목록 — dt · dd 열 간격 (--list-inline-gap) */
  inlineGap: String,
  /** 정의 목록 dd 텍스트 정렬. left · right */
  descAlign: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'right'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const resolvedTag = computed(() => props.tag ?? VARIANT_TAG[props.variant] ?? 'ul');

const listContext = computed(() => ({
  tag: resolvedTag.value,
  variant: props.variant,
}));

provide('listContext', listContext);

const rootClass = computed(() => {
  const classes = ['list'];
  const variantClass = VARIANT_CLASS[props.variant];
  if (variantClass) classes.push(variantClass);
  if (props.bordered) classes.push('list_bordered');
  if (props.split) classes.push('list_divider');
  if (props.block) classes.push('list_block');
  if (props.size === 'compact') classes.push('list_compact');
  if (props.layout === 'inline') classes.push('list_inline');
  if (props.variant === 'definition' && props.descAlign === 'right') classes.push('list_desc-right');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, role, style: _style, ...rest } = attrs;
  return rest;
});

const rootStyle = computed(() => {
  const style = {};

  if (props.layout === 'inline') {
    if (props.inlineLabelWidth) {
      style['--list-inline-label-width'] = props.inlineLabelWidth;
    }
    if (props.inlineGap) {
      style['--list-inline-gap'] = props.inlineGap;
    }
  }

  if (attrs.style && typeof attrs.style === 'object' && !Array.isArray(attrs.style)) {
    Object.assign(style, attrs.style);
  }

  return Object.keys(style).length ? style : undefined;
});

const resolvedRole = computed(() => {
  if (attrs.role !== undefined) return attrs.role;
  return resolvedTag.value === 'div' ? 'list' : undefined;
});

function formatCode(listProps, listSlots, listAttrs) {
  const rootClassValue = Array.isArray(rootClass.value)
    ? rootClass.value.join(' ')
    : rootClass.value;

  return formatComponentCode('List', listProps, listSlots, { ...listAttrs, class: rootClassValue }, {
    defaults: { size: 'md', variant: 'default', layout: 'block', descAlign: 'left' },
    booleanProps: new Set(['bordered', 'split', 'block']),
    selfClosing: false,
  });
}

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);
</script>

<template>
  <component
    :is="resolvedTag"
    ref="rootRef"
    :class="rootClass"
    :style="rootStyle"
    :role="resolvedRole"
    v-bind="fallthroughAttrs"
  >
    <slot />
  </component>
</template>
