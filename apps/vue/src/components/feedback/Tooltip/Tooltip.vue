<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmTooltip' });
const props = defineProps({
  id: String, content: String, placement: String, size: { type: String, default: 'md' }, offset: { type: String, default: 'md' },
  offsetTop: String, offsetRight: String, offsetBottom: String, offsetLeft: String,
  open: { type: Boolean, default: undefined }, defaultOpen: Boolean, inverse: Boolean, noArrow: Boolean,
  arrowAnchor: { type: String, default: 'content' }, panelAlign: { type: String, default: 'center' }, arrowTargetAlign: { type: String, default: 'center' },
  disabled: Boolean, trigger: { type: String, default: 'hover' }, closable: { type: Boolean, default: undefined }, closeLabel: { type: String, default: '닫기' },
});
const emit = defineEmits(['open-change']);
const internalOpen = ref(props.defaultOpen);
const visible = computed(() => props.open ?? internalOpen.value);
const triggerElement = ref(null);
const bubble = ref(null);
const anchor = ref(null);
const arrowPosition = ref('50%');
const bubbleId = props.id || `tooltip-${Math.random().toString(36).slice(2, 9)}`;
let hoverTimer;

function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let target = document;
  try { if (window.top?.document?.body) target = window.top.document; } catch { return document.body; }
  if (target !== document) {
    const url = new URL('styles/uxkm.css', target.baseURI); url.searchParams.set('v', 'tooltip-20260819');
    let link = target.getElementById('uxkm-tooltip-portal-styles');
    if (!link) { link = target.createElement('link'); link.id = 'uxkm-tooltip-portal-styles'; link.rel = 'stylesheet'; target.head.appendChild(link); }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = target.getElementById('uxkm-tooltip-portal-root');
  if (!root) { root = target.createElement('div'); root.id = 'uxkm-tooltip-portal-root'; root.className = 'uxkm-tooltip-portal-root'; target.body.appendChild(root); }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme = typeof document === 'undefined' ? 'light' : (document.documentElement.dataset.theme || 'light');
const showClose = computed(() => props.closable ?? props.trigger === 'click');
const classes = computed(() => ['tooltip', 'tooltip_portal', 'is-open', props.size !== 'md' && `tooltip_${props.size}`, props.placement && `tooltip_placement-${props.placement}`, props.offset !== 'md' && `tooltip_offset-${props.offset}`, ...[['top', props.offsetTop], ['right', props.offsetRight], ['bottom', props.offsetBottom], ['left', props.offsetLeft]].filter(([, value]) => value && value !== 'md').map(([side, value]) => `tooltip_offset-${side}-${value}`), props.panelAlign !== 'center' && `tooltip_panel-align-${props.panelAlign}`, props.inverse && 'tooltip_inverse', props.noArrow && 'tooltip_no-arrow', props.arrowAnchor !== 'content' && `tooltip_arrow-anchor-${props.arrowAnchor}`, props.disabled && 'is-disabled'].filter(Boolean));

function setVisible(next, reason, event) { if (props.disabled) return; if (props.open === undefined) internalOpen.value = next; emit('open-change', next, reason, event); }
function cancelClose() { clearTimeout(hoverTimer); }
function scheduleClose(event) { cancelClose(); hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100); }
function updateArrowPosition() {
  if (!anchor.value || !bubble.value || !['target', 'mixed'].includes(props.arrowAnchor)) return;
  const element = bubble.value;
  ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => { element.style[name] = ''; });
  if (props.arrowAnchor === 'mixed') {
    const initialRect = element.getBoundingClientRect();
    const side = props.placement?.startsWith('top') ? 'top' : ['left', 'right'].includes(props.placement) ? props.placement : 'bottom';
    if (side === 'top' || side === 'bottom') {
      const left = props.panelAlign === 'start' ? 0 : props.panelAlign === 'end' ? anchor.value.width - initialRect.width : (anchor.value.width - initialRect.width) / 2;
      element.style.left = `${left}px`; element.style.right = 'auto'; element.style.transform = 'none';
      if (side === 'top') { element.style.top = 'auto'; element.style.bottom = 'calc(100% + var(--tooltip-offset-top))'; }
      else { element.style.top = 'calc(100% + var(--tooltip-offset-bottom))'; element.style.bottom = 'auto'; }
    } else {
      const top = props.panelAlign === 'start' ? 0 : props.panelAlign === 'end' ? anchor.value.height - initialRect.height : (anchor.value.height - initialRect.height) / 2;
      element.style.top = `${top}px`; element.style.bottom = 'auto'; element.style.transform = 'none';
      if (side === 'left') { element.style.left = 'auto'; element.style.right = 'calc(100% + var(--tooltip-offset-left))'; }
      else { element.style.left = 'calc(100% + var(--tooltip-offset-right))'; element.style.right = 'auto'; }
    }
  }
  const rect = element.getBoundingClientRect();
  const ratio = ['left', 'top'].includes(props.arrowTargetAlign) ? 0 : ['right', 'bottom'].includes(props.arrowTargetAlign) ? 1 : 0.5;
  const value = ['left', 'right'].includes(props.placement) ? anchor.value.top + anchor.value.height * ratio - rect.top : anchor.value.left + anchor.value.width * ratio - rect.left;
  arrowPosition.value = `${value}px`;
}
const triggerControlSelector = 'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
function updatePosition() {
  const element = resolveTriggerAnchor(triggerElement.value);
  if (!element) return;
  const rect = element.getBoundingClientRect(); let frame = { top: 0, left: 0 };
  try { if (element.ownerDocument !== window.top?.document) frame = window.frameElement?.getBoundingClientRect() || frame; } catch { /* 현재 좌표 */ }
  anchor.value = { top: frame.top + rect.top, left: frame.left + rect.left, width: rect.width, height: rect.height };
  nextTick(updateArrowPosition);
}
function openFromTrigger(reason, event) { cancelClose(); updatePosition(); setVisible(true, reason, event); }
function toggle(event) { visible.value ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event); }
function outside(event) { if (!triggerElement.value?.contains(event.target) && !bubble.value?.contains(event.target)) setVisible(false, 'outside', event); }
function keydown(event) { if (event.key === 'Escape') setVisible(false, 'escape', event); }
watch(visible, async (value) => {
  const doc = portalTarget?.ownerDocument || document;
  if (value) { await nextTick(); updatePosition(); doc.addEventListener('pointerdown', outside); document.addEventListener('pointerdown', outside); doc.addEventListener('keydown', keydown); window.addEventListener('resize', updatePosition); window.addEventListener('scroll', updatePosition, true); }
  else { doc.removeEventListener('pointerdown', outside); document.removeEventListener('pointerdown', outside); doc.removeEventListener('keydown', keydown); window.removeEventListener('resize', updatePosition); window.removeEventListener('scroll', updatePosition, true); }
}, { immediate: true });
onBeforeUnmount(() => { clearTimeout(hoverTimer); const doc = portalTarget?.ownerDocument || document; doc.removeEventListener('pointerdown', outside); document.removeEventListener('pointerdown', outside); doc.removeEventListener('keydown', keydown); window.removeEventListener('resize', updatePosition); window.removeEventListener('scroll', updatePosition, true); });
</script>

<template>
  <span ref="triggerElement" class="tooltip_trigger" data-component="Tooltip" :aria-describedby="bubbleId" :aria-expanded="trigger === 'click' ? visible : undefined" @click="trigger === 'click' && toggle($event)" @mouseenter="trigger === 'hover' && openFromTrigger('hover', $event)" @mouseleave="trigger === 'hover' && scheduleClose($event)" @focusin="trigger === 'hover' && openFromTrigger('focus', $event)" @focusout="trigger === 'hover' && scheduleClose($event)"><slot name="trigger">툴팁</slot></span>
  <Teleport :to="portalTarget">
    <span v-if="visible && anchor" :class="classes" :data-theme="portalTheme" :style="{ position: 'fixed', top: `${anchor.top}px`, left: `${anchor.left}px`, width: `${anchor.width}px`, height: `${anchor.height}px`, zIndex: 10020, pointerEvents: 'none', '--tooltip-arrow-position': arrowPosition }">
      <span ref="bubble" :id="bubbleId" class="tooltip_bubble" :class="{ 'tooltip_bubble-closable': showClose }" role="tooltip" :style="{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }" @mouseenter="trigger === 'hover' && cancelClose()" @mouseleave="trigger === 'hover' && scheduleClose($event)">
        <span v-if="!noArrow" class="tooltip_arrow" aria-hidden="true" />
        <Button v-if="showClose" variant="ghost" icon-only class="tooltip_close tooltip_close-floating" :aria-label="closeLabel" @click="setVisible(false, 'close', $event)"><Icon name="close" size="sm" class="tooltip_close-icon" /></Button>
        <slot>{{ content }}</slot>
      </span>
    </span>
  </Teleport>
</template>
