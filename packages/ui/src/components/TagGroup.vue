<script setup>
import { computed, ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  tight: Boolean,
  ariaLabel: String,
});

const rootRef = ref(null);
const formatCode = createComponentFormatter('TagGroup', {
  booleanProps: new Set(['tight']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, {}, rootRef, {});

const rootClass = computed(() => [
  'tag_group',
  { 'tag_group-tight': props.tight },
]);
</script>

<template>
  <div ref="rootRef" :class="rootClass" :aria-label="ariaLabel" role="group">
    <slot />
  </div>
</template>
