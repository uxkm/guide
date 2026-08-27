<!--
  Alert 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs } from 'vue';

// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({
  name: 'UxkmAlert',
  inheritAttrs: false,
});

// 색상·콘텐츠·표시 옵션을 prop으로 받습니다.
const props = defineProps({
  color: { type: String, default: 'info' }, // 의미 색상입니다. danger는 color_error를 사용합니다.
  title: String, // 알림 제목입니다.
  description: String, // 본문 설명입니다. default 슬롯이 있으면 우선합니다.
  closable: Boolean, // 닫기 버튼 표시 여부입니다.
  showIcon: { type: Boolean, default: true }, // 상태 아이콘 표시 여부입니다.
  size: { type: String, default: 'md' }, // 알림 크기입니다.
  banner: Boolean, // 배너형(전체 너비) 변형입니다.
  role: { type: String, default: 'alert' }, // 접근성 역할입니다.
  closeLabel: { type: String, default: '알림 닫기' }, // 닫기 버튼의 접근성 이름입니다.
});

const emit = defineEmits(['close']); // 닫기 이벤트입니다.
const attrs = useAttrs(); // 선언하지 않은 HTML 속성입니다.
const visible = ref(true); // 닫기 전까지 알림을 화면에 유지합니다.

// 지원하지 않는 색상은 info로 되돌립니다.
const resolvedColor = computed(() =>
  ['info', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'info',
);

// 루트·색상·크기·배너·사용자 클래스를 조합합니다.
const classes = computed(() => {
  const colorClass =
    resolvedColor.value === 'danger' ? 'color_error' : `color_${resolvedColor.value}`;

  return [
    'alert', // Alert 루트 클래스입니다.
    colorClass, // 의미 색상 클래스입니다.
    props.size !== 'md' && `alert_${props.size}`, // md가 아닐 때만 크기 변형입니다.
    props.banner && 'alert_banner', // 배너형 레이아웃입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean);
});

// class는 classes에 합쳤으므로 나머지 속성만 바인딩합니다.
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

// 내부 표시 상태를 끄고 close 이벤트를 알립니다.
function handleClose(event) {
  visible.value = false;
  emit('close', event);
}
</script>

<template>
  <!-- 닫힌 뒤에는 DOM에서 제거합니다. -->
  <div v-if="visible" v-bind="restAttrs" :class="classes" data-component="Alert" :role="role">
    <!-- 아이콘 슬롯: 없으면 색상별 기본 SVG를 사용합니다. -->
    <slot v-if="showIcon" name="icon">
      <svg
        class="alert_icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <template v-if="resolvedColor === 'info'">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </template>
        <template v-else-if="resolvedColor === 'success'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </template>
        <template v-else-if="resolvedColor === 'warning'">
          <path
            d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <path d="M12 9v4M12 17h.01" />
        </template>
        <template v-else>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6M9 9l6 6" />
        </template>
      </svg>
    </slot>

    <!-- 제목·본문·액션을 담는 본문 영역입니다. -->
    <div class="alert_body">
      <div v-if="title" class="alert_title">
        {{ title }}
      </div>
      <p v-if="$slots.default || description" class="alert_desc">
        <slot>{{ description }}</slot>
      </p>
      <slot name="actions" />
    </div>

    <!-- closable일 때만 닫기 버튼을 렌더합니다. -->
    <button
      v-if="closable"
      type="button"
      class="alert_close"
      :aria-label="closeLabel"
      @click="handleClose"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
