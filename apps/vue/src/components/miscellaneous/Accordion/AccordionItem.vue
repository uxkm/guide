<!--
  AccordionItem 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, ref, toRef, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmAccordionItem' });

const props = defineProps({
  label: { type: String, default: '' },
  content: String,
  open: Boolean,
  disabled: Boolean,
  headingLevel: { type: Number, default: 3 },
  ripple: { type: Boolean, default: true },
});
const accordion = inject('uxkmAccordion', null);
const uid = useId().replaceAll(':', '');
const triggerId = `accordion-trigger-${uid}`;
const panelId = `accordion-panel-${uid}`;
const panelRef = ref(null);
const isOpen = ref(Boolean(props.open));
const disabled = toRef(props, 'disabled');
const slide = computed(() => accordion?.effect.value === 'slide');
const classes = computed(() =>
  ['accordion_item', isOpen.value && 'is-open', props.disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

watch(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(panelRef.value, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMounted(() => {
  unregister = accordion?.registerItem({ id: triggerId, open: isOpen, disabled });
  if (slide.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
onUnmounted(() => unregister?.());
</script>

<template>
  <div :class="classes">
    <div class="accordion_heading" role="heading" :aria-level="headingLevel">
      <Button
        :id="triggerId"
        variant="text"
        color="default"
        class="accordion_trigger"
        :expanded="isOpen"
        :aria-controls="panelId"
        :disabled="disabled"
        :ripple="ripple"
        @click="accordion?.toggleItem(triggerId)"
        @keydown="handleKeydown"
      >
        <span class="accordion_label"
          ><slot name="title">{{ label }}</slot></span
        >
        <span v-if="$slots.extra" class="accordion_extra"><slot name="extra" /></span>
        <template #icon-after><Icon name="chevron-down" class="accordion_icon" /></template>
      </Button>
    </div>
    <div
      :id="panelId"
      ref="panelRef"
      class="accordion_panel"
      role="region"
      :aria-labelledby="triggerId"
      :hidden="slide ? undefined : !isOpen"
    >
      <div class="accordion_content">
        <slot
          ><p v-if="content">{{ content }}</p></slot
        >
      </div>
    </div>
  </div>
</template>
