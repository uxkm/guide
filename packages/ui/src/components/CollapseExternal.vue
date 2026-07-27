<script setup>
/**
 * CollapseExternal — 외부 트리거가 있는 독립 접힘 영역
 *
 * Collapse 없이 단독으로 사용합니다.
 * btn_ghost 트리거가 패널을 토글하며, aria-expanded · aria-controls로 연결됩니다.
 *
 * lead 슬롯: 트리거 위 안내 텍스트. default 슬롯: 접히는 본문.
 */
import { computed, onMounted, ref, useAttrs, useId, watch } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useCollapseExternalDemoCode } from '@/composables/useDemoCode';
import { setSlideRegionOpen } from '@/utils/slide-region';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** 외부 트리거 버튼 텍스트 */
  triggerLabel: {
    type: String,
    required: true,
  },
  /** 데모용 최대 너비 제한 */
  narrow: Boolean,
  /** 접힘 영역에 테두리·배경 스타일 적용 */
  boxed: {
    type: Boolean,
    default: true,
  },
  /** 펼침·접힘 높이 슬라이드. slide */
  effect: {
    type: String,
    validator: (value) => value === undefined || value === 'slide',
  },
  /** 초기 열림 상태 */
  open: Boolean,
});
const { rippleAttrs } = useRipple(props);


const attrs = useAttrs();
const rootRef = ref(null);
const panelRef = ref(null);
const panelId = useId().replace(/:/g, '');
const isOpen = ref(props.open);
const isSlide = computed(() => props.effect === 'slide');

const wrapperClass = computed(() => [
  props.narrow ? 'collapse_demo-narrow' : null,
  attrs.class,
]);

/** boxed일 때 인라인 스타일로 테두리·배경·패딩 적용 */
const panelStyle = computed(() =>
  props.boxed
    ? {
        marginTop: 'var(--space-sm)',
        padding: 'var(--space-lg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface-raised)',
      }
    : undefined
);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function toggle() {
  isOpen.value = !isOpen.value;
}

onMounted(() => {
  if (isSlide.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
  }
});

watch(isOpen, (open) => {
  if (!isSlide.value) return;
  setSlideRegionOpen(panelRef.value, open, true);
});

useCollapseExternalDemoCode(props, rootRef, attrs, isOpen);
</script>

<template>
  <div ref="rootRef" :class="wrapperClass" v-bind="fallthroughAttrs">
    <div v-if="$slots.lead" data-demo-slot="lead">
      <slot name="lead" />
    </div>
    <Button
      variant="ghost"
      size="sm"
      :expanded="isOpen"
      :aria-controls="panelId"
      @click="toggle"
      v-bind="rippleAttrs"
    >
      <span class="btn_label">{{ triggerLabel }}</span>
      <template #icon-after>
        <Icon name="chevron-down" size="sm" />
      </template>
    </Button>
    <div
      :id="panelId"
      ref="panelRef"
      class="collapse"
      data-demo-slot="default"
      :class="{ 'is-open': isOpen }"
      :data-effect="effect === 'slide' ? 'slide' : undefined"
      :style="panelStyle"
      :hidden="isSlide ? undefined : (!isOpen || undefined)"
    >
      <slot />
    </div>
  </div>
</template>
