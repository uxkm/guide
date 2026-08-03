<script setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs,
  useSlots,
} from 'vue';
import Icon from '@/components/Icon.vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  message: String,
  color: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  round: Boolean,
  showIcon: {
    type: Boolean,
    default: true,
  },
  closable: Boolean,
  closeLabel: {
    type: String,
    default: '알림 닫기',
  },
  actionLabel: String,
  closeOnAction: {
    type: Boolean,
    default: true,
  },
  motion: {
    type: String,
    default: 'fade',
    validator: (value) => ['fade', 'slide', 'none'].includes(value),
  },
  placement: {
    type: String,
    default: undefined,
    validator: (value) => [
      'top-start', 'top-center', 'top-end',
      'middle-start', 'middle-end',
      'bottom-start', 'bottom-center', 'bottom-end',
      'top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right',
    ].includes(value),
  },
  duration: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: 'status',
  },
  ripple: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['action', 'close']);
const slots = useSlots();
const attrs = useAttrs();
const regionPlacement = inject('uxkm-snackbar-placement', null);
const rootRef = ref(null);
const visible = ref(true);
const motionState = ref('entering');
let timer;
let timerStartedAt = 0;
let remaining = 0;
let closeReason = 'close';
let closeEvent;

const resolvedPlacement = computed(
  () => props.placement || regionPlacement?.value || regionPlacement || 'bottom-center',
);
const colorClass = computed(() => props.color === 'danger' ? 'color_error' : `color_${props.color}`);
const rootClass = computed(() => [
  'snackbar',
  colorClass.value,
  `snackbar_motion-${props.motion}`,
  `snackbar_placement-${resolvedPlacement.value}`,
  `is-${motionState.value}`,
  {
    snackbar_sm: props.size === 'sm',
    snackbar_lg: props.size === 'lg',
    snackbar_round: props.round,
  },
  attrs.class,
]);
const resolvedRole = computed(() => props.role || 'status');
const ariaLive = computed(() => resolvedRole.value === 'alert' ? 'assertive' : 'polite');
const iconName = computed(() => ({
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'x-circle',
}[props.color] || 'info'));
const hasMessage = computed(() => Boolean(props.message || slots.default));

function clearTimer() {
  if (!timer) return;
  window.clearTimeout(timer);
  timer = undefined;
}

function startTimer(delay = remaining || props.duration) {
  clearTimer();
  if (delay <= 0 || !visible.value) return;
  remaining = delay;
  timerStartedAt = Date.now();
  timer = window.setTimeout(() => requestClose('timeout'), delay);
}

function pauseTimer() {
  if (!timer) return;
  remaining = Math.max(0, remaining - (Date.now() - timerStartedAt));
  clearTimer();
}

function resumeTimer() {
  if (!timer && remaining > 0) startTimer(remaining);
}

function requestClose(reason = 'close', event) {
  if (!visible.value) return;
  clearTimer();
  closeReason = reason;
  closeEvent = event;
  visible.value = false;
}

function onAction(event) {
  emit('action', event);
  if (props.closeOnAction) requestClose('action', event);
}

function onKeydown(event) {
  if (props.closable && event.key === 'Escape') {
    event.preventDefault();
    requestClose('close', event);
  }
}

function onBeforeEnter() {
  motionState.value = 'entering';
}

function onAfterEnter() {
  motionState.value = 'open';
}

function onBeforeLeave() {
  motionState.value = 'leaving';
}

function onAfterLeave() {
  emit('close', closeReason, closeEvent);
}

onMounted(async () => {
  remaining = props.duration;
  if (props.duration > 0) startTimer();
  await nextTick();
  if (props.motion === 'none') motionState.value = 'open';
});

onBeforeUnmount(clearTimer);
</script>

<template>
  <Transition
    :name="`snackbar-${motion}`"
    appear
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
  >
    <div
      v-if="visible"
      ref="rootRef"
      v-bind="attrs"
      :class="rootClass"
      :role="resolvedRole"
      :aria-live="ariaLive"
      aria-atomic="true"
      aria-relevant="additions text"
      @mouseenter="pauseTimer"
      @mouseleave="resumeTimer"
      @focusin="pauseTimer"
      @focusout="resumeTimer"
      @keydown="onKeydown"
    >
      <span v-if="showIcon" class="snackbar_icon-wrap" aria-hidden="true">
        <slot name="icon"><Icon :name="iconName" class="snackbar_icon" /></slot>
      </span>
      <div v-if="hasMessage" class="snackbar_message"><slot>{{ message }}</slot></div>
      <div v-if="actionLabel || slots.action" class="snackbar_action">
        <slot name="action" :close="requestClose">
          <button
            type="button"
            class="snackbar_action-btn"
            :data-ripple="ripple ? true : 'false'"
            @click="onAction"
          >{{ actionLabel }}</button>
        </slot>
      </div>
      <button
        v-if="closable"
        type="button"
        class="snackbar_close"
        :data-ripple="ripple ? 'surface' : 'false'"
        :aria-label="closeLabel"
        @click="requestClose('close', $event)"
      >
        <Icon name="close" size="sm" />
      </button>
    </div>
  </Transition>
</template>
