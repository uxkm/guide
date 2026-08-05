<script setup>
/**
 * Accordion — 접이식 패널 그룹 컨테이너
 *
 * AccordionItem 자식을 등록·조율합니다.
 * multiple이 false(기본)이면 한 번에 하나의 패널만 열립니다.
 *
 * 키보드(↑↓ Home End)는 AccordionItem 트리거에서 처리합니다.
 * provide('accordion')로 자식과 상태를 공유합니다.
 */
import { computed, provide, ref, shallowRef, useAttrs } from 'vue';
import { useAccordionDemoCode } from '@/composables/useDemoCode';

defineOptions({
  inheritAttrs: false,
});

const VALID_VARIANTS = new Set(['bordered', 'flush', 'card']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const props = defineProps({
  /** 아코디언 스킨. bordered · flush · card */
  variant: {
    type: String,
    default: 'bordered',
    validator: (value) => ['bordered', 'flush', 'card'].includes(value),
  },
  /** 트리거·본문 패딩 크기. sm · md · lg */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  /** 여러 패널 동시 열기 허용 */
  multiple: Boolean,
  /** 데모용 최대 너비 제한 (accordion_demo-narrow) */
  narrow: Boolean,
  /** 펼침·접힘 효과. slide — 높이 슬라이드 */
  effect: {
    type: String,
    default: undefined,
    validator: (value) => value === undefined || value === null || value === '' || value === 'slide',
  },
});

const attrs = useAttrs();
const rootRef = ref(null);
const items = new Map();
const registeredItems = shallowRef([]);
const resolvedVariant = computed(() =>
  VALID_VARIANTS.has(props.variant) ? props.variant : 'bordered'
);
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : 'md'));
const resolvedEffect = computed(() => (props.effect === 'slide' ? 'slide' : undefined));

const rootClass = computed(() => [
  'accordion',
  `accordion_${resolvedVariant.value}`,
  resolvedSize.value === 'sm' ? 'accordion_sm' : null,
  resolvedSize.value === 'lg' ? 'accordion_lg' : null,
  props.narrow ? 'accordion_demo-narrow' : null,
  attrs.class,
]);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerItem(item) {
  items.set(item.id, item);
  registeredItems.value = [...items.values()];
}

function unregisterItem(id) {
  items.delete(id);
  registeredItems.value = [...items.values()];
}

function updateItemMeta(id, patch) {
  const item = items.get(id);
  if (!item) return;
  Object.assign(item, patch);
  registeredItems.value = [...items.values()];
}

function getTriggers() {
  return registeredItems.value.filter((item) => !item.disabled).map((item) => item.id);
}

function focusTrigger(id) {
  rootRef.value?.querySelector(`#${CSS.escape(id)}`)?.focus();
}

/** 패널 열기·닫기. multiple이 아니면 열 때 다른 패널을 닫음 */
function toggleItem(id) {
  const item = items.get(id);
  if (!item || item.disabled) return;

  const willOpen = !item.getIsOpen();

  if (!props.multiple && willOpen) {
    for (const [otherId, other] of items) {
      if (otherId !== id && !other.disabled && other.getIsOpen()) {
        other.setIsOpen(false);
      }
    }
  }

  item.setIsOpen(willOpen);
  registeredItems.value = [...items.values()];
}

provide('accordion', {
  registerItem,
  unregisterItem,
  updateItemMeta,
  toggleItem,
  getTriggers,
  focusTrigger,
  effect: resolvedEffect,
});

useAccordionDemoCode(
  () => ({
    ...props,
    variant: resolvedVariant.value,
    size: resolvedSize.value,
    effect: resolvedEffect.value,
  }),
  registeredItems,
  rootRef,
  attrs
);
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    :data-effect="resolvedEffect"
    v-bind="fallthroughAttrs"
  >
    <slot />
  </div>
</template>
