<script setup>
/**
 * Collapse — 접이식 패널 그룹 컨테이너
 *
 * CollapsePanel 자식을 등록·조율합니다.
 * accordion이 true이면 한 번에 하나의 패널만 열립니다.
 *
 * provide('collapse')로 자식과 상태를 공유합니다.
 */
import { computed, provide, ref, shallowRef, useAttrs } from 'vue';
import { useCollapseDemoCode } from '@/composables/useDemoCode';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  /** 패널 그룹 스킨. bordered · ghost · card */
  variant: {
    type: String,
    default: 'bordered',
    validator: (value) => ['bordered', 'ghost', 'card'].includes(value),
  },
  /** 트리거·본문 패딩 크기. sm · md · lg */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  /** 한 번에 하나의 패널만 열기 (아코디언 모드) */
  accordion: Boolean,
  /** 데모용 최대 너비 제한 (collapse_demo-narrow) */
  narrow: Boolean,
});

const attrs = useAttrs();
const rootRef = ref(null);
const panels = new Map();
const registeredPanels = shallowRef([]);

const rootClass = computed(() => [
  'collapse_group',
  `collapse_${props.variant}`,
  props.size === 'sm' ? 'collapse_sm' : null,
  props.size === 'lg' ? 'collapse_lg' : null,
  props.narrow ? 'collapse_demo-narrow' : null,
  attrs.class,
]);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerPanel(panel) {
  panels.set(panel.id, panel);
  registeredPanels.value = [...panels.values()];
}

function unregisterPanel(id) {
  panels.delete(id);
  registeredPanels.value = [...panels.values()];
}

/** 패널 열기·닫기. accordion이면 열 때 다른 패널을 닫음 */
function togglePanel(id, isOpenRef) {
  const panel = panels.get(id);
  if (!panel || panel.disabled) return;

  const willOpen = !isOpenRef.value;

  if (props.accordion && willOpen) {
    for (const [otherId, other] of panels) {
      if (otherId !== id && !other.disabled) {
        other.isOpen.value = false;
      }
    }
  }

  isOpenRef.value = willOpen;
}

provide('collapse', {
  registerPanel,
  unregisterPanel,
  togglePanel,
});

useCollapseDemoCode(props, registeredPanels, rootRef, attrs);
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <slot />
  </div>
</template>
