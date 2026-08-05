<script setup>
/**
 * AccordionItem — 아코디언 단일 항목
 *
 * Accordion 내부에서만 사용합니다. inject('accordion')으로 부모와 연동됩니다.
 *
 * 접근성: role="heading" 래퍼 + button 트리거 + role="region" 패널,
 * aria-expanded · aria-controls · aria-level.
 * 키보드: ↑↓ 항목 이동, Home/End 첫·마지막 항목.
 */
import { computed, inject, onMounted, onUnmounted, ref, useAttrs, useId, useSlots, watch } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { setSlideRegionOpen } from '@/utils/slide-region';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** 트리거에 표시할 제목 */
  label: {
    type: String,
    required: true,
  },
  /** 패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능 */
  content: String,
  /** 열림 상태 (제어, v-model:open) */
  open: {
    type: Boolean,
    default: undefined,
  },
  /** 초기 열림 상태 (비제어) */
  defaultOpen: Boolean,
  /** 비활성 항목 (is-disabled + trigger disabled) */
  disabled: Boolean,
  /** 코드 예시용 extra 슬롯 마크업 (데모 코드 생성) */
  extraCode: String,
});
const emit = defineEmits(['update:open', 'open-change']);
const { rippleAttrs } = useRipple(props);

const attrs = useAttrs();
const slots = useSlots();
const accordion = inject('accordion', null);
const generatedId = useId().replace(/:/g, '');
const triggerId = `accordion-trigger-${generatedId}`;
const panelId = `accordion-panel-${generatedId}`;
const internalOpen = ref(props.defaultOpen);
const panelRef = ref(null);

const controlled = computed(() => props.open != null);
const isOpen = computed(() =>
  controlled.value ? Boolean(props.open) : internalOpen.value
);
const slideEffect = computed(() => accordion?.effect?.value === 'slide');

const itemClass = computed(() => [
  'accordion_item',
  { 'is-open': isOpen.value, 'is-disabled': props.disabled },
]);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

/** slide일 때는 hidden을 Vue가 건드리지 않음 (setSlideRegionOpen이 소유) */
const panelBind = computed(() =>
  slideEffect.value ? {} : { hidden: !isOpen.value || undefined },
);

function toggle() {
  if (props.disabled || !accordion) return;
  accordion.toggleItem(triggerId);
}

function setIsOpen(nextOpen) {
  if (nextOpen === isOpen.value) return;
  if (!controlled.value) {
    internalOpen.value = nextOpen;
  }
  emit('update:open', nextOpen);
  emit('open-change', nextOpen);
}

/** 트리거 간 포커스 이동 (↑↓ Home End). Space/Enter는 네이티브 button이 처리 */
function onKeydown(event) {
  if (!accordion) return;

  const triggers = accordion.getTriggers();
  const index = triggers.indexOf(triggerId);
  if (index === -1) return;

  let nextIndex = null;

  if (event.key === 'ArrowDown') {
    nextIndex = (index + 1) % triggers.length;
  } else if (event.key === 'ArrowUp') {
    nextIndex = (index - 1 + triggers.length) % triggers.length;
  } else if (event.key === 'Home') {
    nextIndex = 0;
  } else if (event.key === 'End') {
    nextIndex = triggers.length - 1;
  }

  if (nextIndex !== null) {
    event.preventDefault();
    accordion.focusTrigger(triggers[nextIndex]);
  }
}

watch(
  [slideEffect, isOpen],
  ([slide, open], [wasSlide]) => {
    if (!slide) return;
    setSlideRegionOpen(panelRef.value, open, Boolean(wasSlide));
  },
  { flush: 'post' }
);

watch(
  () => [
    props.label,
    props.content,
    props.open,
    props.defaultOpen,
    props.disabled,
    props.extraCode,
    Boolean(slots.extra),
  ],
  () => {
    accordion?.updateItemMeta(triggerId, {
      label: props.label,
      content: props.content,
      open: controlled.value ? Boolean(props.open) : undefined,
      defaultOpen: Boolean(props.defaultOpen),
      controlled: controlled.value,
      disabled: Boolean(props.disabled),
      hasExtra: Boolean(slots.extra),
      extraCode: props.extraCode,
    });
  }
);

onMounted(() => {
  if (!accordion) return;

  accordion.registerItem({
    id: triggerId,
    label: props.label,
    content: props.content,
    open: controlled.value ? Boolean(props.open) : undefined,
    defaultOpen: Boolean(props.defaultOpen),
    controlled: controlled.value,
    disabled: Boolean(props.disabled),
    hasExtra: Boolean(slots.extra),
    extraCode: props.extraCode,
    getIsOpen: () => isOpen.value,
    setIsOpen,
  });

  if (slideEffect.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
  }
});

onUnmounted(() => {
  accordion?.unregisterItem(triggerId);
});
</script>

<template>
  <div :class="[itemClass, attrs.class]" v-bind="fallthroughAttrs">
    <div class="accordion_heading" role="heading" aria-level="3">
      <Button
        :id="triggerId"
        variant="text"
        class="accordion_trigger"
        :expanded="isOpen"
        :aria-controls="panelId"
        :disabled="disabled"
        @click="toggle"
        @keydown="onKeydown"
        v-bind="rippleAttrs"
      >
        <span class="accordion_label">{{ label }}</span>
        <span v-if="$slots.extra" class="accordion_extra">
          <slot name="extra" />
        </span>
        <template #icon-after>
          <Icon name="chevron-down" class="accordion_icon" />
        </template>
      </Button>
    </div>
    <div
      :id="panelId"
      ref="panelRef"
      class="accordion_panel"
      role="region"
      :aria-labelledby="triggerId"
      v-bind="panelBind"
    >
      <div class="accordion_content">
        <slot>
          <p v-if="content">{{ content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>
