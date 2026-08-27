<!--
  CollapseExternal 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onMounted, ref, useAttrs, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmCollapseExternal', inheritAttrs: false });

const props = defineProps({
  triggerLabel: { type: String, default: '' }, // 외부 트리거 버튼 텍스트입니다.
  open: Boolean, // 초기 열림 상태입니다.
  effect: String, // slide면 높이 애니메이션을 사용합니다.
  boxed: { type: Boolean, default: true }, // 본문을 collapse_inner로 감쌉니다.
  ripple: { type: Boolean, default: true }, // 트리거 버튼 리플 효과입니다.
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
