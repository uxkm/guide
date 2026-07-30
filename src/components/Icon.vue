<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useIconDemoCode } from '@/composables/useDemoCode';
import { commonIconPaths } from '@/data/common-icons';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /**
   * common-icons 갤러리 키.
   * path·image 슬롯이 없을 때만 미리 정의된 stroke 경로를 렌더합니다.
   */
  name: String,
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
/** 기본 슬롯 또는 #path — SVG path·circle 등 커스텀 도형 */
const hasPathSlot = computed(() => Boolean(slots.path) || Boolean(slots.default));
const namedElements = computed(() => (props.name ? commonIconPaths[props.name] ?? [] : []));
/** name은 커스텀 슬롯이 없을 때만 사용 */
const useNamedPaths = computed(
  () => Boolean(props.name) && namedElements.value.length > 0 && !hasImageSlot.value && !hasPathSlot.value,
);

const buttonRippleAttrs = computed(() => {
  if (!props.button) return {};
  if (props.ripple === false) return { 'data-ripple': 'false' };
  return { 'data-ripple': 'true' };
});

/** button · circle · square · image 슬롯은 래퍼(또는 span)가 루트 */
const rootTag = computed(() => {
  if (props.button) return 'button';
  if (props.circle || props.square) return 'span';
  if (hasImageSlot.value) return 'span';
  return null;
});

const sizeClasses = computed(() => {
  const classes = [];
  if (props.size === 'sm') classes.push('icon_sm');
  if (props.size === 'lg') classes.push('icon_lg');
  if (props.size === 'xl') classes.push('icon_xl');
  return classes;
});

const innerSvgClass = computed(() => {
  const classes = ['icon', ...sizeClasses.value];
  if (props.spin) classes.push('icon_spin');
  return classes;
});

const svgClass = computed(() => {
  const classes = [...innerSvgClass.value];
  if (props.color) classes.push(`color_${props.color}`);
  if (props.inline) classes.push('icon_inline');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

/** image 전용 루트(래퍼 없음)용 클래스 */
const imageRootClass = computed(() => {
  const classes = ['icon', 'icon_img', ...sizeClasses.value];
  if (props.color) classes.push(`color_${props.color}`);
  if (props.inline) classes.push('icon_inline');
  if (props.spin) classes.push('icon_spin');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const wrapperClass = computed(() => {
  const withInline = (classes) => {
    if (props.inline) classes.push('icon_inline');
    return classes;
  };

  if (props.button) {
    return withInline(['icon_button', props.color ? `color_${props.color}` : null].filter(Boolean));
  }
  if (props.circle) {
    const classes = ['icon_circle'];
    if (props.color) classes.push(`color_${props.color}`);
    if (props.pulse) classes.push('icon_pulse');
    if (props.size === 'lg') classes.push('icon_circle-lg');
    if (props.size === 'sm') classes.push('icon_circle-sm');
    return withInline(classes);
  }
  if (props.square) {
    return withInline(['icon_square', props.color ? `color_${props.color}` : null].filter(Boolean));
  }
  return null;
});

const svgStrokeAttrs = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};
</script>

<template>
  <!-- button · circle · square 래퍼 -->
  <component
    v-if="rootTag && (button || circle || square)"
    :is="rootTag"
    ref="rootRef"
    v-bind="buttonRippleAttrs"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :aria-label="button ? ariaLabel : undefined"
    :aria-hidden="!button && !ariaLabel ? 'true' : undefined"
  >
    <template v-if="hasImageSlot">
      <span :class="[...innerSvgClass, 'icon_img']" aria-hidden="true">
        <slot name="image" />
      </span>
    </template>
    <svg
      v-else
      :class="innerSvgClass"
      v-bind="svgStrokeAttrs"
      aria-hidden="true"
    >
      <template v-if="useNamedPaths">
        <component
          :is="el.tag"
          v-for="(el, i) in namedElements"
          :key="i"
          v-bind="el.attrs"
        />
      </template>
      <slot v-else name="path">
        <slot />
      </slot>
    </svg>
  </component>

  <!-- image 슬롯만 (래퍼 없음) -->
  <span
    v-else-if="hasImageSlot"
    ref="rootRef"
    :class="imageRootClass"
    :aria-hidden="!ariaLabel ? 'true' : undefined"
    :aria-label="ariaLabel"
  >
    <slot name="image" />
  </span>

  <!-- name · path 슬롯 (SVG 루트) -->
  <svg
    v-else
    ref="rootRef"
    :class="svgClass"
    v-bind="svgStrokeAttrs"
    :aria-hidden="!ariaLabel ? 'true' : undefined"
    :aria-label="ariaLabel"
  >
    <template v-if="useNamedPaths">
      <component
        :is="el.tag"
        v-for="(el, i) in namedElements"
        :key="i"
        v-bind="el.attrs"
      />
    </template>
    <slot v-else name="path">
      <slot />
    </slot>
  </svg>
</template>
