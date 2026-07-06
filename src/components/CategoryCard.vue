<script setup>
import { rippleProp, useRipple } from '@/composables/useRipple';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  title: {
    type: String,
    required: true,
  },
  description: String,
  count: String,
  href: {
    type: String,
    required: true,
  },
});

const { rippleAttrs } = useRipple(props);
</script>

<template>
  <a class="category_card" :href="href" v-bind="rippleAttrs">
    <h3>{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <span v-if="count" class="count">{{ count }}</span>
  </a>
</template>
