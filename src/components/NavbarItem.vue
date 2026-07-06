<script setup>
import { computed, ref } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useNavbarItemDemoCode } from '@/composables/useDemoCode';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  href: {
    type: String,
    default: '#',
  },
  active: Boolean,
});
const { rippleAttrs } = useRipple(props);


const rootRef = ref(null);

useNavbarItemDemoCode(props, rootRef);

const linkClass = computed(() => [
  'navbar_link',
  { 'is-active': props.active },
]);
</script>

<template>
  <li ref="rootRef" class="navbar_item">
    <a
      v-bind="rippleAttrs"
      :href="href"
      :class="linkClass"
      :aria-current="active ? 'page' : undefined"
      @click.prevent
    >
      <slot>{{ label }}</slot>
      <slot name="badge" />
    </a>
  </li>
</template>
