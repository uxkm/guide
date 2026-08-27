<!--
  Affix 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { initAffix } from '@uxkm/html/affix';

defineOptions({ name: 'UxkmAffix', inheritAttrs: false });
const props = defineProps({
  target: String, // 고정 기준 스크롤 컨테이너 선택자입니다.
  offsetTop: { type: [Number, String], default: 0 }, // 상단 고정 오프셋(px)입니다.
  offsetBottom: [Number, String], // 하단 고정 오프셋(px)입니다.
  skin: { type: String, default: '', validator: (value) => ['', 'bar', 'anchor'].includes(value) }, // bar · anchor 스킨입니다.
  interactive: { type: Boolean, default: true }, // 스크롤 고정을 활성화합니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
let cleanup = null;
const classes = computed(() => ['affix', attrs.class].filter(Boolean));
const targetClasses = computed(() =>
  ['affix_target', props.skin && `affix_${props.skin}`].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const dataAttrs = computed(() => ({
  'data-affix': props.interactive ? '' : undefined,
  'data-target': props.target || undefined,
  'data-offset-top': Number(props.offsetTop) !== 0 ? String(props.offsetTop) : undefined,
  'data-offset-bottom':
    props.offsetBottom !== undefined && props.offsetBottom !== null && props.offsetBottom !== ''
      ? String(props.offsetBottom)
      : undefined,
}));
function init() {
  cleanup?.();
  cleanup = props.interactive && rootRef.value ? initAffix(rootRef.value) : null;
}
onMounted(init);
watch(() => [props.interactive, props.target, props.offsetTop, props.offsetBottom], init, {
  flush: 'post',
});
onBeforeUnmount(() => cleanup?.());
</script>

<template>
  <div
    ref="rootRef"
    v-bind="{ ...restAttrs, ...dataAttrs }"
    :class="classes"
    data-component="Affix"
  >
    <div class="affix_placeholder" aria-hidden="true" hidden />
    <div :class="targetClasses"><slot /></div>
  </div>
</template>
