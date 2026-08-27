<!--
  CollapsePanel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, ref, toRef, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmCollapsePanel' });

const props = defineProps({
  label: { type: String, default: '' },
  content: String,
  open: Boolean,
  disabled: Boolean,
  ripple: { type: Boolean, default: true },
});
const collapse = inject('uxkmCollapse', null);
const uid = useId().replaceAll(':', '');
const triggerId = `collapse-trigger-${uid}`;
const bodyId = `collapse-body-${uid}`;
const bodyRef = ref(null);
const isOpen = ref(Boolean(props.open));
const disabled = toRef(props, 'disabled');
const slide = computed(() => collapse?.effect.value === 'slide');
const classes = computed(() =>
  ['collapse_panel', isOpen.value && 'is-open', props.disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

watch(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(bodyRef.value, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMounted(() => {
  unregister = collapse?.registerPanel({ id: triggerId, open: isOpen, disabled });
  if (slide.value) {
    setSlideRegionOpen(bodyRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
onUnmounted(() => unregister?.());
</script>

<template>
  <div :class="classes">
    <div class="collapse_header">
      <Button
        :id="triggerId"
        variant="text"
        color="default"
        class="collapse_trigger"
        :expanded="isOpen"
        :aria-controls="bodyId"
        :disabled="disabled"
        :ripple="ripple"
        @click="collapse?.togglePanel(triggerId)"
        @keydown="handleKeydown"
      >
        <span class="collapse_label"
          ><slot name="title">{{ label }}</slot></span
        >
        <span v-if="$slots.extra" class="collapse_extra"><slot name="extra" /></span>
        <template #icon-after><Icon name="chevron-down" class="collapse_icon" /></template>
      </Button>
    </div>
    <div
      :id="bodyId"
      ref="bodyRef"
      class="collapse_body"
      role="region"
      :aria-labelledby="triggerId"
      :hidden="slide ? undefined : !isOpen"
    >
      <div class="collapse_content">
        <slot
          ><p v-if="content">{{ content }}</p></slot
        >
      </div>
    </div>
  </div>
</template>
