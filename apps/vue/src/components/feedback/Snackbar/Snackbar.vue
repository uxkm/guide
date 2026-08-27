<!--
  Snackbar 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmSnackbar' });

// 메시지·색상·모션·자동 닫기 옵션을 prop으로 받습니다.
const props = defineProps({
  message: { type: String, default: 'Snackbar' }, // 기본 메시지입니다. default 슬롯이 우선합니다.
  color: { type: String, default: 'info' }, // 의미 색상입니다.
  size: { type: String, default: 'md' }, // Snackbar 크기입니다.
  motion: { type: String, default: 'fade' }, // 등장·퇴장 효과입니다.
  placement: String, // 위치 및 Slide 방향입니다. 없으면 Region을 따릅니다.
  duration: { type: Number, default: 0 }, // 자동 닫기 시간(ms)입니다. 0이면 유지합니다.
  role: { type: String, default: 'status' }, // 접근성 역할입니다. alert면 assertive입니다.
  closable: Boolean, // 닫기 버튼 표시 여부입니다.
  closeLabel: { type: String, default: '알림 닫기' }, // 닫기 버튼의 접근성 이름입니다.
  showIcon: { type: Boolean, default: true }, // 상태 아이콘 표시 여부입니다.
  round: Boolean, // 캡슐형 모서리입니다.
});

const emit = defineEmits(['close']); // close · action · timeout 사유로 호출됩니다.
// Region이 제공한 기본 placement입니다.
const regionPlacement = inject('snackbarPlacement', 'bottom-center');
const visible = ref(true); // DOM 유지 여부입니다.
// none이면 바로 open, 그 외에는 entering부터 시작합니다.
const phase = ref(props.motion === 'none' ? 'open' : 'entering');
let enterTimer; // entering·leaving 전환 타이머입니다.
let dismissTimer; // 자동 닫기 타이머입니다.
let startedAt = 0; // 타이머 시작 시각입니다.
let remaining = props.duration; // 남은 자동 닫기 시간(ms)입니다.
let pendingClose = { reason: 'close', event: undefined }; // 퇴장 완료 후 전달할 닫기 정보입니다.

// 색상별 기본 아이콘 이름입니다.
const iconName = computed(
  () =>
    ({ info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'x-circle' })[
      props.color
    ] || 'info',
);
// 색상·크기·모션·위치·단계 클래스를 조합합니다.
const classes = computed(() =>
  [
    'snackbar', // Snackbar 루트 클래스입니다.
    props.color === 'danger' ? 'color_error' : `color_${props.color}`, // 의미 색상입니다.
    props.size !== 'md' && `snackbar_${props.size}`, // md가 아닐 때만 크기 변형입니다.
    props.round && 'snackbar_round', // 캡슐형 모서리입니다.
    `snackbar_motion-${props.motion}`, // 등장·퇴장 모션입니다.
    `snackbar_placement-${props.placement || regionPlacement}`, // Slide 방향·배치입니다.
    `is-${phase.value}`, // entering · open · leaving 단계입니다.
  ].filter(Boolean),
);

function clearDismissTimer() {
  window.clearTimeout(dismissTimer);
  dismissTimer = undefined;
}
// 남은 시간으로 자동 닫기 타이머를 시작합니다.
function startDismissTimer() {
  if (remaining <= 0 || dismissTimer) return;
  startedAt = Date.now();
  dismissTimer = window.setTimeout(() => close('timeout'), remaining);
}
// 호버·포커스 중에는 남은 시간을 줄이고 타이머를 멈춥니다.
function pauseDismissTimer() {
  if (!dismissTimer) return;
  remaining = Math.max(0, remaining - (Date.now() - startedAt));
  clearDismissTimer();
}
// DOM을 제거하고 close 이벤트를 알립니다.
function finish(reason = pendingClose.reason, event = pendingClose.event) {
  window.clearTimeout(enterTimer);
  if (!visible.value) return;
  visible.value = false;
  emit('close', reason, event);
}
// 닫기 요청: none이면 즉시, 아니면 leaving 애니메이션을 시작합니다.
function close(reason = 'close', event) {
  clearDismissTimer();
  pendingClose = { reason, event };
  if (props.motion === 'none') finish(reason, event);
  else {
    phase.value = 'leaving';
    enterTimer = window.setTimeout(() => finish(reason, event), 250);
  }
}
// 루트 애니메이션이 끝나면 단계를 전환합니다.
function animationEnd() {
  if (phase.value === 'entering') phase.value = 'open';
  else if (phase.value === 'leaving') finish();
}
onMounted(() => {
  if (phase.value === 'entering')
    enterTimer = window.setTimeout(() => {
      phase.value = 'open';
      startDismissTimer();
    }, 250);
  else startDismissTimer();
});
onBeforeUnmount(() => {
  window.clearTimeout(enterTimer);
  clearDismissTimer();
});
</script>

<template>
  <!-- 닫힌 뒤에는 DOM에서 제거합니다. -->
  <div
    v-if="visible"
    :class="classes"
    data-component="Snackbar"
    :role="role"
    :aria-live="role === 'alert' ? 'assertive' : 'polite'"
    aria-atomic="true"
    aria-relevant="additions text"
    @mouseenter="pauseDismissTimer"
    @mouseleave="startDismissTimer"
    @focusin="pauseDismissTimer"
    @focusout="startDismissTimer"
    @keydown.esc="closable && close('close', $event)"
    @animationend="animationEnd"
  >
    <!-- 상태 아이콘 영역입니다. -->
    <span v-if="showIcon" class="snackbar_icon-wrap" aria-hidden="true"
      ><slot name="icon"><Icon :name="iconName" class="snackbar_icon" /></slot
    ></span>
    <div class="snackbar_message">
      <slot>{{ message }}</slot>
    </div>
    <div v-if="$slots.action" class="snackbar_action">
      <slot name="action" :close="(event) => close('action', event)" />
    </div>
    <Button
      v-if="closable"
      variant="ghost"
      icon-only
      class="snackbar_close"
      :aria-label="closeLabel"
      @click="close('close', $event)"
      ><Icon name="close" size="sm"
    /></Button>
  </div>
</template>
