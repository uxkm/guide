<script setup>
import { computed, onMounted, ref, useAttrs, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmCollapseExternal', inheritAttrs: false });

const props = defineProps({
  triggerLabel: { type: String, default: '' },
  open: Boolean,
  effect: String,
  boxed: { type: Boolean, default: true },
  ripple: { type: Boolean, default: true },
});
const attrs = useAttrs();
const panelId = `collapse-external-${useId().replaceAll(':', '')}`;
const panelRef = ref(null);
const isOpen = ref(Boolean(props.open));
const slide = computed(() => props.effect === 'slide');
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
let firstSlideSync = true;

watch([isOpen, slide], ([open, hasSlide]) => {
  if (!hasSlide) return;
  setSlideRegionOpen(panelRef.value, open, !firstSlideSync);
  firstSlideSync = false;
}, { flush: 'post' });

onMounted(() => {
  if (slide.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
</script>

<template>
  <div v-bind="restAttrs" :class="attrs.class">
    <div v-if="$slots.lead"><slot name="lead" /></div>
    <Button
      variant="ghost"
      size="sm"
      :expanded="isOpen"
      :aria-controls="panelId"
      :ripple="ripple"
      @click="isOpen = !isOpen"
    >
      {{ triggerLabel }}
      <template #icon-after><Icon name="chevron-down" size="sm" /></template>
    </Button>
    <div
      :id="panelId"
      ref="panelRef"
      class="collapse"
      :class="{ 'is-open': isOpen }"
      :data-effect="slide ? 'slide' : undefined"
      :hidden="slide ? undefined : !isOpen"
      :style="boxed ? { marginTop: 'var(--space-sm)' } : undefined"
    >
      <div :class="boxed ? 'collapse_inner' : undefined"><slot /></div>
    </div>
  </div>
</template>
