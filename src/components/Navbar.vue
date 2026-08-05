<script setup>
import { computed, ref, resolveComponent, useAttrs, useId } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useNavbarDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  brand: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  borderless: Boolean,
  dark: Boolean,
  sticky: Boolean,
  responsive: Boolean,
  collapseId: String,
  /** 브랜드 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트를 지정할 수 있습니다. */
  brandAs: {
    type: [String, Object, Function],
    default: 'a',
  },
  brandHref: {
    type: String,
    default: '#',
  },
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const attrs = useAttrs();
const rootRef = ref(null);
const generatedId = useId().replace(/:/g, '');
const NuxtLinkComponent = resolveComponent('NuxtLink');
const collapseTargetId = computed(
  () => props.collapseId || `navbar-collapse-${generatedId}`
);
const isOpen = ref(false);
const resolvedBrandAs = computed(() =>
  props.brandAs === 'NuxtLink' ? NuxtLinkComponent : props.brandAs || 'a'
);
const brandAcceptsHref = computed(
  () => resolvedBrandAs.value === 'a' || typeof resolvedBrandAs.value !== 'string'
);

useNavbarDemoCode(
  () => ({
    ...props,
    brandAs: typeof props.brandAs === 'string' ? props.brandAs : undefined,
  }),
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['navbar'];
  if (props.size === 'sm') classes.push('navbar_sm');
  if (props.size === 'lg') classes.push('navbar_lg');
  if (props.borderless) classes.push('navbar_borderless');
  if (props.dark) classes.push('navbar_dark');
  if (props.sticky) classes.push('navbar_sticky');
  if (props.responsive && isOpen.value) classes.push('is-open');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});

function onBrandClick(event) {
  if (!props.brandHref || props.brandHref === '#') event.preventDefault();
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <div class="navbar_container">
      <component
        :is="resolvedBrandAs"
        v-bind="childRippleAttrs"
        :href="brandAcceptsHref ? brandHref : undefined"
        class="navbar_brand"
        @click="onBrandClick"
      >
        <slot name="brand">
          <slot name="brand-icon" />
          {{ brand }}
        </slot>
      </component>
      <Button
        v-if="responsive"
        v-bind="childRippleAttrs"
        variant="ghost"
        icon-only
        class="navbar_toggle"
        :expanded="isOpen"
        :aria-controls="collapseTargetId"
        :aria-label="isOpen ? '메뉴 닫기' : '메뉴 열기'"
        @click="toggleMenu"
      >
        <template #icon-before>
          <Icon name="menu" size="sm" class="navbar_toggle-icon-open" />
          <Icon name="close" size="sm" class="navbar_toggle-icon-close" />
        </template>
      </Button>
      <div class="navbar_collapse" :class="{ 'is-open': responsive && isOpen }" :id="collapseTargetId">
        <nav class="navbar_nav" aria-label="주요 메뉴">
          <slot name="items">
            <ul v-if="$slots.default" class="navbar_list">
              <slot />
            </ul>
          </slot>
        </nav>
        <div v-if="$slots.search" class="navbar_search">
          <slot name="search" />
        </div>
        <div v-if="$slots.actions" class="navbar_actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </header>
</template>
