<script setup>
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const rootRef = ref(null);
const formatCode = createComponentFormatter('MenuDivider', { selfClosing: true });

useComponentDemoCode(formatCode, {}, {}, rootRef, {});
</script>

<template>
  <li ref="rootRef" class="menu_divider" role="separator" />
</template>
