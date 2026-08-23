<script setup>
import { computed, provide, ref, toRef, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCollapse', inheritAttrs: false });

const props = defineProps({
  variant: { type: String, default: 'bordered' },
  size: { type: String, default: 'md' },
  accordion: Boolean,
  effect: String,
});
const attrs = useAttrs();
const rootRef = ref(null);
const panels = new Map();
const effect = toRef(props, 'effect');
const classes = computed(() => [
  'collapse_group',
  `collapse_${['bordered', 'ghost', 'card'].includes(props.variant) ? props.variant : 'bordered'}`,
  props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `collapse_${props.size}`,
  attrs.class,
].filter(Boolean));
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
