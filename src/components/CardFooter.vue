<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  between: Boolean,
  justify: {
    type: String,
    default: 'start',
    validator: (v) => ['start', 'center', 'end', 'between'].includes(v),
  },
  ratio: {
    type: String,
    default: undefined,
    validator: (v) => ['1:1', '1:2', '2:1'].includes(v),
  },
  flush: Boolean,
  full: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('CardFooter', {
  defaults: { justify: 'start' },
  booleanProps: new Set(['between', 'flush', 'full']),
  selfClosing: false,
});

const resolvedJustify = computed(() => {
  if (props.between) return 'between';
  return ['start', 'center', 'end', 'between'].includes(props.justify) ? props.justify : 'start';
});
const resolvedRatio = computed(() =>
  ['1:1', '1:2', '2:1'].includes(props.ratio) ? props.ratio : undefined
);

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    justify: props.between ? undefined : resolvedJustify.value,
    ratio: resolvedRatio.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['card_footer', `card_footer-${resolvedJustify.value}`];
  if (resolvedRatio.value) {
    classes.push('card_footer-ratio', `card_footer-ratio-${resolvedRatio.value.replace(':', '-')}`);
  }
  if (props.flush) classes.push('card_footer-flush');
  if (props.full && !resolvedRatio.value) classes.push('card_footer-full');
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
