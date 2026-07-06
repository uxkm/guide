<script setup>
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  ariaLabel: String,
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('BadgeWrap', { selfClosing: false });

useComponentDemoCode(formatCode, props, {}, rootRef, {});
</script>

<template>
  <span ref="rootRef" class="badge_wrap">
    <slot />
  </span>
</template>
