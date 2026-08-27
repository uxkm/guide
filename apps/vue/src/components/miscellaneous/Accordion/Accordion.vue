<!--
  Accordion 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, provide, ref, toRef, useAttrs } from 'vue';

defineOptions({ name: 'UxkmAccordion', inheritAttrs: false });

const props = defineProps({
  variant: { type: String, default: 'bordered' },
  size: { type: String, default: 'md' },
  multiple: Boolean,
  effect: String,
});
const attrs = useAttrs();
const rootRef = ref(null);
const items = new Map();
const effect = toRef(props, 'effect');
const classes = computed(() =>
  [
    'accordion',
    `accordion_${['bordered', 'flush', 'card'].includes(props.variant) ? props.variant : 'bordered'}`,
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `accordion_${props.size}`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerItem(item) {
  items.set(item.id, item);
  return () => items.delete(item.id);
}

function toggleItem(id) {
  const item = items.get(id);
  if (!item || item.disabled.value) return;
  const willOpen = !item.open.value;
  if (willOpen && !props.multiple) {
    items.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled.value) other.open.value = false;
    });
  }
  item.open.value = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...items.values()].filter((item) => !item.disabled.value);
  const index = enabled.findIndex((item) => item.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef.value?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
  return true;
}

provide('uxkmAccordion', { effect, focusAdjacent, registerItem, toggleItem });
</script>

<template>
  <div
    ref="rootRef"
    v-bind="restAttrs"
    :class="classes"
    data-component="Accordion"
    data-accordion
    :data-accordion-multiple="multiple ? '' : undefined"
    :data-effect="effect === 'slide' ? 'slide' : undefined"
  >
    <slot />
  </div>
</template>
