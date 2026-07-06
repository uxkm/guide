<script setup>
import { ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  title: String,
  subtitle: String,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('CardHeader', {
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);
</script>

<template>
  <div ref="rootRef" class="card_header" :class="attrs.class">
    <div class="card_header-main">
      <slot>
        <h3 v-if="title" class="card_title">{{ title }}</h3>
        <p v-if="subtitle" class="card_subtitle">{{ subtitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="card_extra">
      <slot name="extra" />
    </div>
  </div>
</template>
