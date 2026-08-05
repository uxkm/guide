<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  lineClamp: {
    type: [Number, String],
    default: undefined,
    validator: (v) => [1, 2, 3].includes(Number(v)),
  },
});
const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('CardBody', {
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const resolvedLineClamp = computed(() => {
  const value = Number(props.lineClamp);
  return [1, 2, 3].includes(value) ? value : undefined;
});

const rootClass = computed(() => {
  const classes = ['card_body'];
  if (resolvedLineClamp.value) {
    classes.push('card_body-clamp', `card_body-clamp-${resolvedLineClamp.value}`);
  }
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const bindAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="bindAttrs">
    <slot />
  </div>
</template>
