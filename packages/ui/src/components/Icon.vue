<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useIconDemoCode } from '@/composables/useDemoCode';
import { commonIconPaths } from '@/data/common-icons';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** common-icons 갤러리 키. 지정 시 기본 슬롯 대신 해당 경로를 렌더합니다 */
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
const namedElements = computed(() => (props.name ? commonIconPaths[props.name] ?? [] : []));
const useNamedPaths = computed(() => Boolean(props.name) && !slots.default);

const buttonRippleAttrs = computed(() => {
  if (!props.button) return {};
  if (props.ripple === false) return { 'data-ripple': 'false' };
  return { 'data-ripple': 'true' };
});


const attrs = useAttrs();
const rootRef = ref(null);

useIconDemoCode(props, rootRef, attrs);

const rootTag = computed(() => (props.button ? 'button' : props.circle || props.square ? 'span' : null));

const innerSvgClass = computed(() => {
  const classes = ['icon'];
  if (!props.circle && props.size === 'sm') classes.push('icon_sm');
  if (!props.circle && props.size === 'lg') classes.push('icon_lg');
  if (!props.circle && props.size === 'xl') classes.push('icon_xl');
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
</script>

<template>
  <component
    v-if="rootTag"
    :is="rootTag"
    ref="rootRef"
    v-bind="buttonRippleAttrs"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :aria-label="button ? ariaLabel : undefined"
    :aria-hidden="!button && !ariaLabel ? 'true' : undefined"
  >
    <svg
      :class="innerSvgClass"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      <slot v-else />
    </svg>
  </component>
  <svg
    v-else
    ref="rootRef"
    :class="svgClass"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
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
    <slot v-else />
  </svg>
</template>
