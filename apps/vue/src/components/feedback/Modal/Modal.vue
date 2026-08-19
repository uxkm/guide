<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmModal' });
const props = defineProps({
  id: String, title: String, size: { type: String, default: 'md' }, scrollable: Boolean,
  backdrop: { type: Boolean, default: true }, open: { type: Boolean, default: undefined },
  defaultOpen: Boolean, footerAlign: { type: String, default: 'end' },
  footerRatio: { type: String, default: '1-1' }, footerNoPadBottom: Boolean,
  closeLabel: { type: String, default: '닫기' },
});
const emit = defineEmits(['close']);
const internalOpen = ref(props.defaultOpen);
const visible = computed(() => props.open ?? internalOpen.value);
const root = ref(null);
const modalId = props.id || `modal-${Math.random().toString(36).slice(2, 9)}`;
const titleId = `${modalId}-title`;
let previousFocus;

function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try { if (window.top?.document?.body) targetDocument = window.top.document; } catch { return document.body; }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'modal-contrast-20260819-2');
  let stylesheet = targetDocument.getElementById('uxkm-modal-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-modal-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-modal-portal-root');
  if (!portal) { portal = targetDocument.createElement('div'); portal.id = 'uxkm-modal-portal-root'; portal.className = 'uxkm-modal-portal-root'; targetDocument.body.appendChild(portal); }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();
const rootClasses = computed(() => ['modal', props.size !== 'md' && `modal_${props.size}`, props.scrollable && 'modal_scrollable', visible.value && 'is-open'].filter(Boolean));
const footerClasses = computed(() => ['modal_footer', props.footerAlign !== 'end' && `modal_footer-${props.footerAlign}`, props.footerAlign === 'even' && props.footerRatio !== '1-1' && `modal_footer-even-${props.footerRatio}`, props.footerNoPadBottom && 'modal_footer-no-pad-b'].filter(Boolean));

function close(reason = 'close', event) { if (props.open === undefined) internalOpen.value = false; emit('close', reason, event); }
function keydown(event) { if (event.key === 'Escape') close('escape', event); }
watch(visible, async (isOpen) => {
  const targetDocument = portalTarget?.ownerDocument || document;
  if (isOpen) {
    previousFocus = targetDocument.activeElement;
    targetDocument.body.classList.add('is-modal-open');
    targetDocument.addEventListener('keydown', keydown);
    await nextTick(); root.value?.focus();
  } else {
    targetDocument.body.classList.remove('is-modal-open');
    targetDocument.removeEventListener('keydown', keydown);
    previousFocus?.focus?.();
  }
}, { immediate: true });
onBeforeUnmount(() => (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown));
</script>

<template>
  <Teleport :to="portalTarget">
    <div v-if="visible" ref="root" :id="modalId" :class="rootClasses" data-component="Modal" data-modal role="dialog" aria-modal="true" :aria-labelledby="title || $slots.header ? titleId : undefined" tabindex="-1">
      <div v-if="backdrop" class="modal_backdrop" aria-hidden="true" @click="close('backdrop', $event)" />
      <div class="modal_dialog">
        <div v-if="title || $slots.header" class="modal_header"><slot name="header"><h2 :id="titleId" class="modal_title">{{ title }}</h2></slot><Button variant="ghost" icon-only class="modal_close" :aria-label="closeLabel" @click="close('close', $event)"><Icon name="close" size="sm" class="modal_close-icon" /></Button></div>
        <div class="modal_body"><slot>Modal</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
