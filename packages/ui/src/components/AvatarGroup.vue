<script setup>
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ name: 'AvatarGroup' });

const props = defineProps({
  ariaLabel: String,
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('AvatarGroup', { selfClosing: false });

useComponentDemoCode(formatCode, props, {}, rootRef, {});
</script>

<template>
  <div ref="rootRef" class="avatar_group" :aria-label="ariaLabel">
    <slot />
  </div>
</template>
