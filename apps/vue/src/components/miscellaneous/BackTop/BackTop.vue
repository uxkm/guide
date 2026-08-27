<!--
  BackTop 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { initBackTop } from '@uxkm/html/back-top';
defineOptions({ name: 'UxkmBackTop', inheritAttrs: false });
const props = defineProps({
  target: String, // 스크롤 대상 컨테이너 선택자입니다.
  visibilityHeight: { type: [Number, String], default: 400 }, // 버튼이 나타나기 시작하는 스크롤 높이입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  color: { type: String, default: '' }, // primary · ghost 색상 변형입니다.
  label: String, // 아이콘 아래 텍스트입니다.
  ariaLabel: { type: String, default: '맨 위로' }, // 버튼 접근성 이름입니다.
  interactive: { type: Boolean, default: true }, // 스크롤 감지·이동을 활성화합니다.
  ripple: { type: Boolean, default: true }, // 버튼 리플 효과입니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
let cleanup = null;
const classes = computed(() =>
  [
    'back_top',
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `back_top_${props.size}`,
    ['primary', 'ghost'].includes(props.color) && `back_top_${props.color}`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
function init() {
  cleanup?.();
  cleanup = props.interactive && rootRef.value ? initBackTop(rootRef.value) : null;
}
onMounted(init);
watch(() => [props.interactive, props.target, props.visibilityHeight], init, { flush: 'post' });
onBeforeUnmount(() => cleanup?.());
</script>
<template>
  <Teleport to="body" :disabled="Boolean(target)">
    <div
      ref="rootRef"
      v-bind="restAttrs"
      :class="classes"
      data-component="BackTop"
      :data-back-top="interactive ? '' : undefined"
      :data-target="target || undefined"
      :data-visibility-height="Number(visibilityHeight) !== 400 ? visibilityHeight : undefined"
    >
      <button
        type="button"
        class="btn btn_ghost back_top_btn"
        :aria-label="ariaLabel"
        :data-ripple="ripple ? 'surface' : 'false'"
      >
        <slot
          ><svg
            class="back_top_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="m6 15 6-6 6 6" /></svg
          ><span v-if="label" class="back_top_label">{{ label }}</span></slot
        >
      </button>
    </div>
  </Teleport>
</template>
