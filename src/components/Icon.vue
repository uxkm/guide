<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useIconDemoCode } from '@/composables/useDemoCode';
import { commonIconPaths } from '@/data/common-icons';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** common-icons 갤러리 키. 커스텀 콘텐츠가 없을 때 stroke 경로를 렌더합니다. */
  name: String,
  /** 이미지 아이콘 경로. as 미지정 시 img로 렌더합니다. */
  src: [String, Object],
  /** 이미지 아이콘의 대체 텍스트 */
  alt: {
    type: String,
    default: '',
  },
  /** img 또는 커스텀 루트 요소 */
  as: [String, Object, Function],
  color: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  inline: Boolean,
  spin: Boolean,
  button: Boolean,
  circle: Boolean,
  square: Boolean,
  pulse: Boolean,
  ariaLabel: String,
});
useRipple(props, { defaultEnabled: false });

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useIconDemoCode(props, rootRef, attrs, slots);

const hasImageSlot = computed(() => Boolean(slots.image));
const hasDefaultContent = computed(() => Boolean(slots.default) || Boolean(slots.path));
const namedElements = computed(() => (props.name ? commonIconPaths[props.name] ?? [] : []));
const useNamedPaths = computed(
  () => Boolean(props.name) && !hasImageSlot.value && !hasDefaultContent.value,
);
const isImage = computed(() => props.as === 'img' || (Boolean(props.src) && !props.as));
const isCustom = computed(() => Boolean(props.as) && props.as !== 'img');
const isWrapped = computed(() => props.button || props.circle || props.square);
const resolvedSrc = computed(() => {
  if (typeof props.src === 'object' && props.src) return props.src.src;
  return props.src;
});

const buttonRippleAttrs = computed(() => {
  if (!props.button) return {};
  return { 'data-ripple': props.ripple === false ? 'false' : 'true' };
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const innerClass = computed(() => {
  const classes = ['icon'];
  if (!props.circle && props.size === 'sm') classes.push('icon_sm');
  if (!props.circle && props.size === 'lg') classes.push('icon_lg');
  if (!props.circle && props.size === 'xl') classes.push('icon_xl');
  if (props.spin) classes.push('icon_spin');
  return classes;
});

const rootClass = computed(() => {
  const classes = [...innerClass.value];
  if (!isWrapped.value && props.color) classes.push(`color_${props.color}`);
  if (!isWrapped.value && props.inline) classes.push('icon_inline');
  if (!isWrapped.value && attrs.class) classes.push(attrs.class);
  return classes;
});

const wrapperClass = computed(() => {
  const classes = [];

  if (props.button) classes.push('icon_button');
  else if (props.circle) {
    classes.push('icon_circle');
    if (props.pulse) classes.push('icon_pulse');
    if (props.size === 'lg') classes.push('icon_circle-lg');
    if (props.size === 'sm') classes.push('icon_circle-sm');
  } else if (props.square) {
    classes.push('icon_square');
  }

  if (props.color) classes.push(`color_${props.color}`);
  if (props.inline) classes.push('icon_inline');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const svgAttrs = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};
</script>

<template>
  <component
    v-if="isWrapped"
    :is="button ? 'button' : 'span'"
    ref="rootRef"
    v-bind="{ ...fallthroughAttrs, ...buttonRippleAttrs }"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :aria-label="button ? ariaLabel : undefined"
  >
    <img
      v-if="isImage"
      :class="rootClass"
      :src="resolvedSrc"
      :alt="alt"
      :aria-label="ariaLabel"
      :aria-hidden="!alt && !ariaLabel ? 'true' : undefined"
    >
    <span v-else-if="hasImageSlot" :class="rootClass" aria-hidden="true">
      <slot name="image" />
    </span>
    <svg
      v-else
      :class="rootClass"
      v-bind="svgAttrs"
      :role="!button && ariaLabel ? 'img' : undefined"
      :aria-hidden="button || !ariaLabel ? 'true' : undefined"
      :aria-label="!button ? ariaLabel : undefined"
    >
      <template v-if="useNamedPaths">
        <component
          :is="element.tag"
          v-for="(element, index) in namedElements"
          :key="index"
          v-bind="element.attrs"
        />
      </template>
      <slot v-else name="path">
        <slot />
      </slot>
    </svg>
  </component>

  <img
    v-else-if="isImage"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :src="resolvedSrc"
    :alt="alt"
    :aria-label="ariaLabel"
    :aria-hidden="!alt && !ariaLabel ? 'true' : undefined"
  >

  <component
    v-else-if="isCustom"
    :is="as"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :role="ariaLabel ? 'img' : undefined"
    :aria-hidden="ariaLabel ? undefined : 'true'"
    :aria-label="ariaLabel"
  >
    <slot />
  </component>

  <span
    v-else-if="hasImageSlot"
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :role="ariaLabel ? 'img' : undefined"
    :aria-hidden="ariaLabel ? undefined : 'true'"
    :aria-label="ariaLabel"
  >
    <slot name="image" />
  </span>

  <svg
    v-else
    ref="rootRef"
    v-bind="{ ...svgAttrs, ...fallthroughAttrs }"
    :class="rootClass"
    :role="ariaLabel ? 'img' : undefined"
    :aria-hidden="ariaLabel ? undefined : 'true'"
    :aria-label="ariaLabel"
  >
    <template v-if="useNamedPaths">
      <component
        :is="element.tag"
        v-for="(element, index) in namedElements"
        :key="index"
        v-bind="element.attrs"
      />
    </template>
    <slot v-else name="path">
      <slot />
    </slot>
  </svg>
</template>
