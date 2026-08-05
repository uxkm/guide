<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false, name: 'AvatarGroup' });

const props = defineProps({
  ariaLabel: String,
});

const rootRef = ref(null);
const attrs = useAttrs();
const slots = useSlots();
const formatCode = createComponentFormatter('AvatarGroup', { selfClosing: false });

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => ['avatar_group', attrs.class].filter(Boolean));
const fallthroughAttrs = computed(() => {
  const { class: _class, 'aria-label': _ariaLabel, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :aria-label="ariaLabel ?? attrs['aria-label']"
  >
    <slot />
  </div>
</template>
