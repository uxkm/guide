<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmDrawer' });
const props = defineProps({
  id: String, title: String, size: { type: String, default: 'md' },
  placement: { type: String, default: 'right' }, backdrop: { type: Boolean, default: true },
  noBackdrop: Boolean, open: { type: Boolean, default: undefined }, defaultOpen: Boolean,
  openOnLoad: Boolean, draggable: Boolean, footerAlign: { type: String, default: 'end' },
  footerRatio: { type: String, default: '1-1' }, footerNoPadBottom: Boolean,
  closeLabel: { type: String, default: '닫기' },
});
const emit = defineEmits(['close']);
const internalOpen = ref(props.defaultOpen || props.openOnLoad);
const visible = computed(() => props.open ?? internalOpen.value);
const root = ref(null);
const panel = ref(null);
const drawerId = props.id || `drawer-${Math.random().toString(36).slice(2, 9)}`;
const titleId = `${drawerId}-title`;
let previousFocus;
let dragState;

function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try { if (window.top?.document?.body) targetDocument = window.top.document; } catch { return document.body; }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'drawer-contrast-20260819');
  let stylesheet = targetDocument.getElementById('uxkm-drawer-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-drawer-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-drawer-portal-root');
  if (!portal) { portal = targetDocument.createElement('div'); portal.id = 'uxkm-drawer-portal-root'; portal.className = 'uxkm-drawer-portal-root'; targetDocument.body.appendChild(portal); }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();
const resolvedPlacement = computed(() => ['left', 'right', 'top', 'bottom'].includes(props.placement) ? props.placement : 'right');
const resolvedSize = computed(() => ['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md');
const showDragHandle = computed(() => props.draggable && resolvedPlacement.value === 'bottom');
const rootClasses = computed(() => ['drawer', visible.value && 'is-open'].filter(Boolean));
const panelClasses = computed(() => ['drawer_panel', `drawer_placement-${resolvedPlacement.value}`, resolvedSize.value !== 'md' && `drawer_${resolvedSize.value}`, showDragHandle.value && 'drawer_draggable'].filter(Boolean));
const footerClasses = computed(() => ['drawer_footer', props.footerAlign !== 'end' && `drawer_footer-${props.footerAlign}`, props.footerAlign === 'even' && props.footerRatio !== '1-1' && `drawer_footer-even-${props.footerRatio}`, props.footerNoPadBottom && 'drawer_footer-no-pad-b'].filter(Boolean));

function close(reason = 'close', event) { if (props.open === undefined) internalOpen.value = false; emit('close', reason, event); }
function keydown(event) { if (event.key === 'Escape') close('escape', event); }
function startDrag(event) {
  if (!showDragHandle.value || (event.button != null && event.button !== 0)) return;
  if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
  const element = panel.value;
  if (!element) return;
  const stored = Number.parseFloat(element.dataset.collapsedHeight || '');
  const collapsed = element.classList.contains('is-expanded') && stored > 0 ? stored : element.getBoundingClientRect().height;
  element.dataset.collapsedHeight = String(collapsed);
  const viewportHeight = element.ownerDocument.defaultView?.innerHeight || collapsed;
  dragState = { pointerId: event.pointerId, target: event.currentTarget, startY: event.clientY, startHeight: element.getBoundingClientRect().height, collapsed, expanded: Math.max(collapsed + 48, viewportHeight * 0.9), deltaY: 0 };
  element.classList.add('is-dragging');
  event.currentTarget.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}
function moveDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  const deltaY = state.startY - event.clientY;
  state.deltaY = deltaY;
  element.style.height = `${Math.min(state.expanded, Math.max(0, state.startHeight + deltaY))}px`;
  element.style.transform = 'translateY(0)';
  event.preventDefault();
}
function endDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  dragState = null;
  element.classList.remove('is-dragging');
  try { state.target?.releasePointerCapture?.(state.pointerId); } catch { /* pointer capture가 이미 해제된 경우 */ }
  const currentHeight = element.getBoundingClientRect().height;
  const expandThreshold = (state.collapsed + state.expanded) / 2;
  const startedExpanded = state.startHeight >= expandThreshold;
  element.style.height = '';
  element.style.transform = '';
  if (currentHeight < state.collapsed * 0.55 || (!startedExpanded && state.deltaY < -state.collapsed * 0.4)) {
    element.classList.remove('is-expanded');
    close('drag', event);
  } else if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
    element.classList.add('is-expanded');
  } else {
    element.classList.remove('is-expanded');
  }
}
watch(visible, async (isOpen) => {
  const targetDocument = portalTarget?.ownerDocument || document;
  if (isOpen) {
    previousFocus = targetDocument.activeElement;
    targetDocument.body.classList.add('is-drawer-open');
    targetDocument.addEventListener('keydown', keydown);
    await nextTick(); root.value?.focus();
  } else {
    targetDocument.body.classList.remove('is-drawer-open');
    targetDocument.removeEventListener('keydown', keydown);
    previousFocus?.focus?.();
  }
}, { immediate: true });
onBeforeUnmount(() => (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown));
</script>

<template>
  <Teleport :to="portalTarget">
    <div v-if="visible" ref="root" :id="drawerId" :class="rootClasses" data-component="Drawer" data-drawer :data-drawer-draggable="showDragHandle ? 'true' : undefined" :data-drawer-backdrop="backdrop && !noBackdrop ? undefined : 'false'" role="dialog" aria-modal="true" :aria-labelledby="title || $slots.header ? titleId : undefined" tabindex="-1">
      <div class="drawer_backdrop" aria-hidden="true" @click="backdrop && !noBackdrop && close('backdrop', $event)" />
      <div ref="panel" :class="panelClasses">
        <div v-if="showDragHandle" class="drawer_handle" data-drawer-drag-handle aria-hidden="true" @pointerdown="startDrag" @pointermove="moveDrag" @pointerup="endDrag" @pointercancel="endDrag"><span class="drawer_handle-bar" /></div>
        <div v-if="title || $slots.header" class="drawer_header" @pointerdown="showDragHandle && startDrag($event)" @pointermove="showDragHandle && moveDrag($event)" @pointerup="showDragHandle && endDrag($event)" @pointercancel="showDragHandle && endDrag($event)"><slot name="header"><h2 :id="titleId" class="drawer_title">{{ title }}</h2></slot><div v-if="$slots.extra" class="drawer_extra"><slot name="extra" /></div><Button variant="ghost" icon-only class="drawer_close" :aria-label="closeLabel" @click="close('close', $event)"><Icon name="close" size="sm" class="drawer_close-icon" /></Button></div>
        <div class="drawer_body"><slot>Drawer</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
