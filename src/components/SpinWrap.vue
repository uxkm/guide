<script setup>
import Spin from '@/components/Spin.vue';
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  loading: Boolean,
  block: Boolean,
  blur: Boolean,
  tip: String,
  ariaLabel: {
    type: String,
    default: '로딩 중',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const formatCode = createComponentFormatter('SpinWrap', {
  booleanProps: new Set(['loading', 'block', 'blur']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['spin_wrap'];
  if (props.block) classes.push('spin_wrap-block');
  if (props.blur) classes.push('spin_wrap-blur');
  if (props.loading) classes.push('is-loading');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <div class="spin_wrap-body">
      <slot />
    </div>
    <Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" />
  </div>
</template>
