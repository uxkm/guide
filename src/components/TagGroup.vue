<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  tight: Boolean,
  ariaLabel: String,
});

const rootRef = ref(null);
const attrs = useAttrs();
const slots = useSlots();
const formatCode = createComponentFormatter('TagGroup', {
  booleanProps: new Set(['tight']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => [
  'tag_group',
  { 'tag_group-tight': props.tight },
  attrs.class,
]);

const fallthroughAttrs = computed(() => {
  const {
    class: _class,
    role: _role,
    'aria-label': _ariaLabel,
    ...rest
  } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :aria-label="ariaLabel ?? attrs['aria-label']"
    :role="attrs.role ?? 'group'"
  >
    <slot />
  </div>
</template>
