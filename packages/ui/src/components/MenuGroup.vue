<script setup>
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('MenuGroup', { selfClosing: true });

useComponentDemoCode(formatCode, props, {}, rootRef, {});
</script>

<template>
  <li ref="rootRef" class="menu_group" role="presentation">
    <span class="menu_group-title">{{ title }}</span>
  </li>
</template>
