<script setup>
import { computed, provide } from 'vue';
const props = defineProps({ placement: { type: String, default: 'bottom-center' }, label: String });
const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
const resolvedPlacement = computed(() => placements.includes(props.placement) ? props.placement : 'bottom-center');
provide('snackbarPlacement', resolvedPlacement.value);

function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;

  if (!targetDocument.getElementById('uxkm-snackbar-portal-styles')) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-snackbar-portal-styles';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }
  let root = targetDocument.getElementById('uxkm-snackbar-portal-root');
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = 'uxkm-snackbar-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}

const portalTarget = getPortalTarget();
</script>

<template>
  <Teleport :to="portalTarget">
    <div :class="['snackbar_region', `snackbar_region-${resolvedPlacement}`]" :aria-label="label"><slot /></div>
  </Teleport>
</template>
