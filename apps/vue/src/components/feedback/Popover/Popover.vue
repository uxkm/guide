<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmPopover' });
const props = defineProps({
  id: String, placement: { type: String, default: 'bottom' }, size: { type: String, default: 'md' },
  offset: { type: String, default: 'md' }, open: { type: Boolean, default: undefined }, defaultOpen: Boolean,
  offsetTop: String, offsetRight: String, offsetBottom: String, offsetLeft: String,
  trigger: { type: String, default: 'click' }, title: String, panelLabel: String, noArrow: Boolean,
  closable: { type: Boolean, default: undefined }, disabled: Boolean, closeLabel: { type: String, default: '닫기' },
  panelAlign: { type: String, default: 'start' }, arrowAnchor: { type: String, default: 'content' },
  arrowTargetAlign: { type: String, default: 'center' },
});
const emit = defineEmits(['open-change']);
const internalOpen = ref(props.defaultOpen);
const visible = computed(() => props.open ?? internalOpen.value);
const triggerElement = ref(null);
const panel = ref(null);
const anchor = ref(null);
const arrowPosition = ref('50%');
const panelId = props.id || `popover-${Math.random().toString(36).slice(2, 9)}`;
const titleId = `${panelId}-title`;
let hoverTimer;

function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try { if (window.top?.document?.body) targetDocument = window.top.document; } catch { return document.body; }
  if (targetDocument !== document) {
    const url = new URL('styles/uxkm.css', targetDocument.baseURI); url.searchParams.set('v', 'popover-20260819');
    let link = targetDocument.getElementById('uxkm-popover-portal-styles');
    if (!link) { link = targetDocument.createElement('link'); link.id = 'uxkm-popover-portal-styles'; link.rel = 'stylesheet'; targetDocument.head.appendChild(link); }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = targetDocument.getElementById('uxkm-popover-portal-root');
  if (!root) { root = targetDocument.createElement('div'); root.id = 'uxkm-popover-portal-root'; root.className = 'uxkm-popover-portal-root'; targetDocument.body.appendChild(root); }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme = typeof document === 'undefined' ? 'light' : (document.documentElement.dataset.theme || 'light');
const showClose = computed(() => props.closable ?? props.trigger === 'click');
const classes = computed(() => ['popover', 'popover_portal', 'is-open', props.size !== 'md' && `popover_${props.size}`, `popover_placement-${props.placement}`, props.offset !== 'md' && `popover_offset-${props.offset}`, ...[['top', props.offsetTop], ['right', props.offsetRight], ['bottom', props.offsetBottom], ['left', props.offsetLeft]].filter(([, value]) => value && value !== 'md').map(([side, value]) => `popover_offset-${side}-${value}`), props.panelAlign !== 'start' && `popover_panel-align-${props.panelAlign}`, props.arrowAnchor !== 'content' && `popover_arrow-anchor-${props.arrowAnchor}`, props.noArrow && 'popover_no-arrow'].filter(Boolean));
function updateArrowPosition() {
  if (!anchor.value || !panel.value || !['target', 'mixed'].includes(props.arrowAnchor)) return;
  const rect = panel.value.getBoundingClientRect();
  const ratio = props.arrowTargetAlign === 'left' ? 0 : props.arrowTargetAlign === 'right' ? 1 : 0.5;
  const value = ['left', 'right'].includes(props.placement)
    ? anchor.value.top + anchor.value.height * ratio - rect.top
    : anchor.value.left + anchor.value.width * ratio - rect.left;
  arrowPosition.value = `${value}px`;
}
function setVisible(next, reason, event) { if (props.disabled) return; if (props.open === undefined) internalOpen.value = next; emit('open-change', next, reason, event); }
const triggerControlSelector = 'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
function updatePosition() {
  const element = resolveTriggerAnchor(triggerElement.value); if (!element) return;
  const rect = element.getBoundingClientRect(); let frame = { top: 0, left: 0 };
  try { if (element.ownerDocument !== window.top?.document) frame = window.frameElement?.getBoundingClientRect() || frame; } catch { /* 현재 좌표 */ }
  anchor.value = { top: frame.top + rect.top, left: frame.left + rect.left, width: rect.width, height: rect.height };
  nextTick(updateArrowPosition);
}
function scheduleClose(event) { clearTimeout(hoverTimer); hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100); }
function cancelClose() { clearTimeout(hoverTimer); }
function openFromTrigger(reason, event) { updatePosition(); setVisible(true, reason, event); }
function toggleClick(event) { if (visible.value) setVisible(false, 'trigger', event); else openFromTrigger('trigger', event); }
function hoverEnter(event) { cancelClose(); openFromTrigger('hover', event); }
function outside(event) { if (!triggerElement.value?.contains(event.target) && !panel.value?.contains(event.target)) setVisible(false, 'outside', event); }
function keydown(event) { if (event.key === 'Escape') setVisible(false, 'escape', event); }
watch(visible, async (value) => {
  const targetDocument = portalTarget?.ownerDocument || document;
  if (value) { await nextTick(); updatePosition(); targetDocument.addEventListener('pointerdown', outside); document.addEventListener('pointerdown', outside); targetDocument.addEventListener('keydown', keydown); window.addEventListener('resize', updatePosition); window.addEventListener('scroll', updatePosition, true); }
  else { targetDocument.removeEventListener('pointerdown', outside); document.removeEventListener('pointerdown', outside); targetDocument.removeEventListener('keydown', keydown); window.removeEventListener('resize', updatePosition); window.removeEventListener('scroll', updatePosition, true); }
}, { immediate: true });
onBeforeUnmount(() => { clearTimeout(hoverTimer); const doc = portalTarget?.ownerDocument || document; doc.removeEventListener('pointerdown', outside); doc.removeEventListener('keydown', keydown); });
</script>

<template>
  <span ref="triggerElement" class="popover_trigger" :aria-controls="panelId" :aria-expanded="visible" aria-haspopup="dialog" @click="trigger === 'click' && toggleClick($event)" @mouseenter="trigger === 'hover' && hoverEnter($event)" @mouseleave="trigger === 'hover' && scheduleClose($event)" @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"><slot name="trigger">Popover 열기</slot></span>
  <Teleport :to="portalTarget">
    <div v-if="visible && anchor" :class="classes" :data-arrow-target-align="arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined" :data-theme="portalTheme" :style="{ position: 'fixed', top: `${anchor.top}px`, left: `${anchor.left}px`, width: `${anchor.width}px`, height: `${anchor.height}px`, zIndex: 10000, pointerEvents: 'none', '--popover-arrow-position': arrowPosition }">
      <div ref="panel" :id="panelId" class="popover_panel" role="dialog" :aria-label="title ? undefined : panelLabel" :aria-labelledby="title ? titleId : undefined" style="z-index:10001;pointer-events:auto" @mouseenter="trigger === 'hover' && cancelClose()" @mouseleave="trigger === 'hover' && scheduleClose($event)">
        <span v-if="!noArrow" class="popover_arrow" aria-hidden="true" />
        <div v-if="title || panelLabel" class="popover_header"><div :id="titleId" class="popover_title">{{ title || panelLabel }}</div><Button v-if="showClose" variant="ghost" icon-only class="popover_close" :aria-label="closeLabel" @click="setVisible(false, 'close', $event)"><Icon name="close" size="sm" /></Button></div>
        <div class="popover_body"><slot>Popover</slot></div>
        <div v-if="$slots.footer" class="popover_footer"><slot name="footer" :close="setVisible" /></div>
      </div>
    </div>
  </Teleport>
</template>
