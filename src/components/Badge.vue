<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 콘텐츠 의미에 맞는 루트 HTML 태그 또는 커스텀 컴포넌트 */
  as: {
    type: [String, Object, Function],
    default: 'span',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  dot: Boolean,
  count: Boolean,
  dotOnly: Boolean,
  label: String,
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Badge', {
  defaults: { as: 'span', color: 'primary', size: 'md' },
  booleanProps: new Set(['dot', 'count', 'dotOnly']),
  selfClosing: false,
});

const resolvedAs = computed(() => props.as || 'span');
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedAriaLabel = computed(
  () => props.ariaLabel ?? attrs['aria-label']
);
const resolvedRole = computed(
  () => attrs.role ?? (props.dotOnly ? 'status' : undefined)
);

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    as: typeof resolvedAs.value === 'string' ? resolvedAs.value : undefined,
    size: resolvedSize.value,
    ariaLabel: resolvedAriaLabel.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  if (props.dotOnly) {
    return ['badge_dot-only', `color_${props.color}`, attrs.class].filter(Boolean);
  }

  const classes = ['badge', `color_${props.color}`];
  if (resolvedSize.value === 'sm') classes.push('badge_sm');
  if (resolvedSize.value === 'lg') classes.push('badge_lg');
  if (props.dot) classes.push('badge_dot');
  if (props.count) classes.push('badge_count');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const {
    class: _class,
    role: _role,
    'aria-label': _ariaLabel,
    ...rest
  } = attrs;
  return rest;
});
</script>

<template>
  <component
    :is="resolvedAs"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :aria-label="resolvedAriaLabel"
    :role="resolvedRole"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
