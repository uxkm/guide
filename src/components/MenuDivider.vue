<script setup>
import { computed, ref, useAttrs } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const rootRef = ref(null);
const attrs = useAttrs();
const formatCode = createComponentFormatter('MenuDivider', { selfClosing: true });

useComponentDemoCode(formatCode, {}, {}, rootRef, attrs);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <li ref="rootRef" v-bind="fallthroughAttrs" :class="['menu_divider', attrs.class]" role="separator" />
</template>
