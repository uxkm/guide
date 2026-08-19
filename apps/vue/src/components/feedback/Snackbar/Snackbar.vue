<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmSnackbar' });
const props = defineProps({
  message: { type: String, default: 'Snackbar' }, color: { type: String, default: 'info' },
  size: { type: String, default: 'md' }, motion: { type: String, default: 'fade' },
  placement: String, duration: { type: Number, default: 0 }, role: { type: String, default: 'status' },
  closable: Boolean, closeLabel: { type: String, default: '알림 닫기' },
  showIcon: { type: Boolean, default: true }, round: Boolean,
});
const emit = defineEmits(['close']);
const regionPlacement = inject('snackbarPlacement', 'bottom-center');
const visible = ref(true);
const phase = ref(props.motion === 'none' ? 'open' : 'entering');
let enterTimer;
let dismissTimer;
let startedAt = 0;
let remaining = props.duration;
let pendingClose = { reason: 'close', event: undefined };
const iconName = computed(() => ({ info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'x-circle' }[props.color] || 'info'));
const classes = computed(() => [
  'snackbar', props.color === 'danger' ? 'color_error' : `color_${props.color}`,
  props.size !== 'md' && `snackbar_${props.size}`, props.round && 'snackbar_round',
  `snackbar_motion-${props.motion}`, `snackbar_placement-${props.placement || regionPlacement}`, `is-${phase.value}`,
].filter(Boolean));
function clearDismissTimer() { window.clearTimeout(dismissTimer); dismissTimer = undefined; }
function startDismissTimer() {
  if (remaining <= 0 || dismissTimer) return;
  startedAt = Date.now();
  dismissTimer = window.setTimeout(() => close('timeout'), remaining);
}
function pauseDismissTimer() {
  if (!dismissTimer) return;
  remaining = Math.max(0, remaining - (Date.now() - startedAt));
  clearDismissTimer();
}
function finish(reason = pendingClose.reason, event = pendingClose.event) {
  window.clearTimeout(enterTimer);
  if (!visible.value) return;
  visible.value = false;
  emit('close', reason, event);
}
function close(reason = 'close', event) {
  clearDismissTimer();
  pendingClose = { reason, event };
  if (props.motion === 'none') finish(reason, event);
  else { phase.value = 'leaving'; enterTimer = window.setTimeout(() => finish(reason, event), 250); }
}
function animationEnd() {
  if (phase.value === 'entering') phase.value = 'open';
  else if (phase.value === 'leaving') finish();
}
onMounted(() => {
  if (phase.value === 'entering') enterTimer = window.setTimeout(() => { phase.value = 'open'; startDismissTimer(); }, 250);
  else startDismissTimer();
});
onBeforeUnmount(() => { window.clearTimeout(enterTimer); clearDismissTimer(); });
</script>

<template>
  <div v-if="visible" :class="classes" data-component="Snackbar" :role="role" :aria-live="role === 'alert' ? 'assertive' : 'polite'" aria-atomic="true" aria-relevant="additions text" @mouseenter="pauseDismissTimer" @mouseleave="startDismissTimer" @focusin="pauseDismissTimer" @focusout="startDismissTimer" @keydown.esc="closable && close('close', $event)" @animationend="animationEnd">
    <span v-if="showIcon" class="snackbar_icon-wrap" aria-hidden="true"><slot name="icon"><Icon :name="iconName" class="snackbar_icon" /></slot></span>
    <div class="snackbar_message"><slot>{{ message }}</slot></div>
    <div v-if="$slots.action" class="snackbar_action"><slot name="action" :close="(event) => close('action', event)" /></div>
    <Button v-if="closable" variant="ghost" icon-only class="snackbar_close" :aria-label="closeLabel" @click="close('close', $event)"><Icon name="close" size="sm" /></Button>
  </div>
</template>
