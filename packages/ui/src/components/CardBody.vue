<script setup>
import { ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({});
const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('CardBody', {
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);
</script>

<template>
  <div ref="rootRef" class="card_body" :class="attrs.class">
    <slot />
  </div>
</template>
