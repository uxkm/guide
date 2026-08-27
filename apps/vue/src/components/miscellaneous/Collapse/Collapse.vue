<!--
  Collapse 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, provide, ref, toRef, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCollapse', inheritAttrs: false });

const props = defineProps({
  variant: { type: String, default: 'bordered' }, // bordered · ghost · card 스킨입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  accordion: Boolean, // 한 번에 하나의 패널만 열리게 합니다.
  effect: String, // slide면 패널 높이 애니메이션을 사용합니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
const panels = new Map();
const effect = toRef(props, 'effect');
const classes = computed(() =>
  [
    'collapse_group',
    `collapse_${['bordered', 'ghost', 'card'].includes(props.variant) ? props.variant : 'bordered'}`,
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `collapse_${props.size}`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerPanel(panel) {
  panels.set(panel.id, panel);
  return () => panels.delete(panel.id);
}

function togglePanel(id) {
  const panel = panels.get(id);
  if (!panel || panel.disabled.value) return;
  const willOpen = !panel.open.value;
  if (willOpen && props.accordion) {
    panels.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled.value) other.open.value = false;
    });
  }
  panel.open.value = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...panels.values()].filter((panel) => !panel.disabled.value);
  const index = enabled.findIndex((panel) => panel.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef.value?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
  return true;
}

provide('uxkmCollapse', { effect, focusAdjacent, registerPanel, togglePanel });
</script>

<template>
  <div
    ref="rootRef"
    v-bind="restAttrs"
    :class="classes"
    data-component="Collapse"
    data-collapse
    :data-collapse-accordion="accordion ? '' : undefined"
    :data-effect="effect === 'slide' ? 'slide' : undefined"
  >
    <slot />
  </div>
</template>
