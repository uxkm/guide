<script setup>
import Spin from '@/components/Spin.vue';
import { computed, ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  loading: Boolean,
  block: Boolean,
  blur: Boolean,
  tip: String,
  ariaLabel: {
    type: String,
    default: '로딩 중',
  },
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('SpinWrap', {
  booleanProps: new Set(['loading', 'block', 'blur']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, {}, rootRef, {});

const rootClass = computed(() => [
  'spin_wrap',
  {
    'spin_wrap-block': props.block,
    'spin_wrap-blur': props.blur,
    'is-loading': props.loading,
  },
]);
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <div class="spin_wrap-body">
      <slot />
    </div>
    <Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" />
  </div>
</template>
