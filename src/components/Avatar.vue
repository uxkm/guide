<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import Icon from '@/components/Icon.vue';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

defineOptions({ inheritAttrs: false, name: 'Avatar' });

const props = defineProps({
  /** 루트 HTML 태그 또는 커스텀 컴포넌트 */
  as: {
    type: [String, Object, Function],
    default: 'span',
  },
  /** common-icons 키. avatar_icon으로 렌더 */
  name: String,
  /** 이미지 URL 또는 src 필드를 가진 정적 이미지 객체 */
  src: [String, Object],
  alt: String,
  initials: String,
  color: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  square: Boolean,
  badgeColor: String,
  badgeLabel: String,
  ariaHidden: Boolean,
  ariaLabel: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const imageError = ref(false);

const formatCode = createComponentFormatter('Avatar', {
  defaults: { as: 'span', size: 'md' },
  booleanProps: new Set(['square', 'ariaHidden']),
  skipProps: ['badgeColor', 'badgeLabel'],
  slotContent: {
    default: '...',
    icon: '<Icon name="user" class="avatar_icon" />',
  },
});

const resolvedAs = computed(() => props.as || 'span');
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedSrc = computed(() =>
  typeof props.src === 'object' && props.src ? props.src.src : props.src
);
const resolvedAriaLabel = computed(
  () => props.ariaLabel ?? attrs['aria-label']
);
const hasDefault = computed(() => Boolean(slots.default));
const hasIcon = computed(() => Boolean(slots.icon));
const showImage = computed(() => Boolean(resolvedSrc.value) && !imageError.value);
const showInitials = computed(
  () =>
    !showImage.value &&
    !hasDefault.value &&
    !hasIcon.value &&
    !props.name &&
    props.initials
);
const isNativeButton = computed(() => resolvedAs.value === 'button');
const hasNativeSemantics = computed(
  () => isNativeButton.value || resolvedAs.value === 'a'
);
const resolvedType = computed(() =>
  attrs.type ?? (isNativeButton.value ? 'button' : undefined)
);
const resolvedRole = computed(() =>
  attrs.role ??
  (!hasNativeSemantics.value && !props.ariaHidden && resolvedAriaLabel.value
    ? 'img'
    : undefined)
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
  const classes = ['avatar'];
  if (props.color) classes.push(`color_${props.color}`);
  if (resolvedSize.value === 'sm') classes.push('avatar_sm');
  if (resolvedSize.value === 'lg') classes.push('avatar_lg');
  if (resolvedSize.value === 'xl') classes.push('avatar_xl');
  if (props.square) classes.push('avatar_square');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const {
    class: _class,
    type: _type,
    role: _role,
    'aria-label': _ariaLabel,
    'aria-hidden': _ariaHidden,
    ...rest
  } = attrs;
  return rest;
});

watch(
  resolvedSrc,
  () => {
    imageError.value = false;
  }
);
</script>

<template>
  <component
    :is="resolvedAs"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :type="resolvedType"
    :role="resolvedRole"
    :aria-label="!ariaHidden ? resolvedAriaLabel : undefined"
    :aria-hidden="ariaHidden ? 'true' : undefined"
  >
    <img
      v-if="showImage"
      :key="resolvedSrc"
      class="avatar_image"
      :src="resolvedSrc"
      :alt="alt || ''"
      @error="imageError = true"
    />
    <slot v-else-if="hasDefault" />
    <slot v-else-if="hasIcon" name="icon" />
    <Icon v-else-if="name" :name="name" class="avatar_icon" />
    <template v-else-if="showInitials">{{ initials }}</template>
    <span
      v-if="badgeColor"
      class="avatar_badge"
      :class="`color_${badgeColor}`"
      :aria-label="badgeLabel"
    />
  </component>
</template>
