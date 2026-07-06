<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  between: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('CardFooter', {
  booleanProps: new Set(['between']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['card_footer'];
  if (props.between) classes.push('card_footer-between');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <slot />
  </div>
</template>
