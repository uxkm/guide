<!--
  BackTop 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { initBackTop } from '../../../../../html/src/components/miscellaneous/BackTop/back-top.js';
defineOptions({ name: 'UxkmBackTop', inheritAttrs: false });
const props = defineProps({
  target: String,
  visibilityHeight: { type: [Number, String], default: 400 },
  size: { type: String, default: 'md' },
  color: { type: String, default: '' },
  label: String,
  ariaLabel: { type: String, default: '맨 위로' },
  interactive: { type: Boolean, default: true },
  ripple: { type: Boolean, default: true },
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
