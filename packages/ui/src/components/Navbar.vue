<script setup>
import { computed, ref, useAttrs } from 'vue';
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
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const attrs = useAttrs();
const rootRef = ref(null);
const collapseTargetId = props.collapseId || `navbar-collapse-${Math.random().toString(36).slice(2, 9)}`;

useNavbarDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['navbar'];
  if (props.size === 'sm') classes.push('navbar_sm');
  if (props.size === 'lg') classes.push('navbar_lg');
  if (props.borderless) classes.push('navbar_borderless');
  if (props.dark) classes.push('navbar_dark');
  if (props.sticky) classes.push('navbar_sticky');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});
</script>

<template>
  <header ref="rootRef" :class="rootClass" :data-navbar="responsive || undefined" v-bind="fallthroughAttrs">
    <div class="navbar_container">
      <a v-bind="childRippleAttrs" href="#" class="navbar_brand" @click.prevent>
        <slot name="brand">
          <slot name="brand-icon" />
          {{ brand }}
        </slot>
      </a>
      <Button
        v-if="responsive"
        v-bind="childRippleAttrs"
        variant="ghost"
        icon-only
        class="navbar_toggle"
        data-navbar-toggle
        aria-expanded="false"
        :aria-controls="collapseTargetId"
        aria-label="메뉴 열기"
      >
        <template #icon-before>
          <Icon name="menu" size="sm" class="navbar_toggle-icon-open" />
          <Icon name="close" size="sm" class="navbar_toggle-icon-close" />
        </template>
      </Button>
      <div class="navbar_collapse" :id="collapseTargetId">
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
