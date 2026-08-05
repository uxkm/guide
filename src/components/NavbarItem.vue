<script setup>
import { computed, ref, resolveComponent, useAttrs } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useNavbarItemDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  href: {
    type: String,
    default: '#',
  },
  /** 링크 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트를 지정할 수 있습니다. */
  as: {
    type: [String, Object, Function],
    default: 'a',
  },
  active: Boolean,
});
const { rippleAttrs } = useRipple(props);


const rootRef = ref(null);
const attrs = useAttrs();
const NuxtLinkComponent = resolveComponent('NuxtLink');

useNavbarItemDemoCode(
  () => ({
    ...props,
    as: typeof props.as === 'string' ? props.as : undefined,
  }),
  rootRef
);

const linkClass = computed(() => [
  'navbar_link',
  { 'is-active': props.active },
]);
const resolvedAs = computed(() =>
  props.as === 'NuxtLink' ? NuxtLinkComponent : props.as || 'a'
);
const acceptsHref = computed(
  () => resolvedAs.value === 'a' || typeof resolvedAs.value !== 'string'
);
const itemAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});

function invokeListener(listener, event) {
  if (Array.isArray(listener)) {
    listener.forEach((handler) => handler?.(event));
    return;
  }
  listener?.(event);
}

function onClick(event) {
  if (!props.href || props.href === '#') event.preventDefault();
  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <li ref="rootRef" v-bind="itemAttrs" :class="['navbar_item', attrs.class]">
    <component
      :is="resolvedAs"
      v-bind="rippleAttrs"
      :href="acceptsHref ? href : undefined"
      :type="resolvedAs === 'button' ? 'button' : undefined"
      :class="linkClass"
      :aria-current="active ? 'page' : undefined"
      @click="onClick"
    >
      <slot>{{ label }}</slot>
      <slot name="badge" />
    </component>
  </li>
</template>
