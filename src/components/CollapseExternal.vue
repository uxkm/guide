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
  /** 열림 상태 (제어, v-model:open) */
  open: {
    type: Boolean,
    default: undefined,
  },
  /** 초기 열림 상태 (비제어) */
  defaultOpen: Boolean,
  /** 펼침·접힘 효과. slide — 높이 슬라이드 */
  effect: {
    type: String,
    default: undefined,
    validator: (value) => value === undefined || value === null || value === '' || value === 'slide',
  },
});
const emit = defineEmits(['update:open', 'open-change']);
const { rippleAttrs } = useRipple(props);


const attrs = useAttrs();
const rootRef = ref(null);
const panelRef = ref(null);
const generatedId = useId().replace(/:/g, '');
const triggerId = `collapse-ext-trigger-${generatedId}`;
const panelId = `collapse-ext-panel-${generatedId}`;
const internalOpen = ref(props.defaultOpen);

const controlled = computed(() => props.open != null);
const isOpen = computed(() =>
  controlled.value ? Boolean(props.open) : internalOpen.value
);
const resolvedEffect = computed(() => (props.effect === 'slide' ? 'slide' : undefined));
const slideEffect = computed(() => resolvedEffect.value === 'slide');

const wrapperClass = computed(() => [
  props.narrow ? 'collapse_demo-narrow' : null,
  attrs.class,
]);

/** 슬라이드 height:0일 때 패딩 박스가 먼저 보이지 않도록 바깥에는 여백만 적용 */
const panelStyle = computed(() =>
  props.boxed ? { marginTop: 'var(--space-sm)' } : undefined
);

const panelInnerStyle = computed(() =>
  props.boxed
    ? {
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

/** slide일 때는 hidden · is-open을 Vue가 건드리지 않음 (setSlideRegionOpen이 소유) */
const panelBind = computed(() =>
  slideEffect.value ? {} : { hidden: !isOpen.value || undefined },
);

const panelClass = computed(() =>
  // slide일 때 is-open · is-sliding은 setSlideRegionOpen이 classList로 관리
  slideEffect.value ? undefined : { 'is-open': isOpen.value },
);

function toggle() {
  const nextOpen = !isOpen.value;
  if (!controlled.value) {
    internalOpen.value = nextOpen;
  }
  emit('update:open', nextOpen);
  emit('open-change', nextOpen);
}

watch(
  [slideEffect, isOpen],
  ([slide, open], [wasSlide]) => {
    if (!slide) return;
    setSlideRegionOpen(panelRef.value, open, Boolean(wasSlide));
  },
  { flush: 'post' }
);

onMounted(() => {
  if (slideEffect.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
  }
});

useCollapseExternalDemoCode(
  () => ({
    ...props,
    open: controlled.value ? Boolean(props.open) : undefined,
    defaultOpen: Boolean(props.defaultOpen),
    controlled: controlled.value,
    effect: resolvedEffect.value,
  }),
  rootRef,
  attrs,
  isOpen
);
</script>

<template>
  <div ref="rootRef" :class="wrapperClass" v-bind="fallthroughAttrs">
    <div v-if="$slots.lead" data-demo-slot="lead">
      <slot name="lead" />
    </div>
    <Button
      :id="triggerId"
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
      role="region"
      :aria-labelledby="triggerId"
      data-demo-slot="default"
      :class="panelClass"
      :data-effect="resolvedEffect"
      :style="panelStyle"
      v-bind="panelBind"
    >
      <div :style="panelInnerStyle">
        <slot />
      </div>
    </div>
  </div>
</template>
