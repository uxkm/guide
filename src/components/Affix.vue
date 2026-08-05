<script setup>
import { computed, ref, useAttrs, useSlots, watchEffect } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { initAffix } from '@/legacy/affix-init';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_SKINS = new Set(['', 'bar', 'anchor']);

const props = defineProps({
  /** 스크롤 컨테이너 CSS 선택자. 생략 시 window */
  target: String,
  /** 상단 고정 시 상단 여백(px) */
  offsetTop: {
    type: [Number, String],
    default: 0,
  },
  /** 하단 고정 시 하단 여백(px). 지정하면 하단 고정 모드 */
  offsetBottom: [Number, String],
  /** 스킨: bar(액션 바) · anchor(앵커 내비게이션) */
  skin: {
    type: String,
    default: '',
    validator: (v) => ['', 'bar', 'anchor'].includes(v),
  },
  /** false면 data-affix 미부여(초기화 비활성) */
  interactive: {
    type: Boolean,
    default: true,
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const resolvedSkin = computed(() =>
  VALID_SKINS.has(props.skin) ? props.skin : ''
);

const formatCode = createComponentFormatter('Affix', {
  defaults: { offsetTop: 0, interactive: true },
  booleanProps: new Set(['interactive']),
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    skin: resolvedSkin.value || undefined,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['affix'];
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const targetClass = computed(() => {
  const classes = ['affix_target'];
  if (resolvedSkin.value === 'bar') classes.push('affix_bar');
  if (resolvedSkin.value === 'anchor') classes.push('affix_anchor');
  return classes;
});

const rootAttrs = computed(() => {
  const result = {};
  if (props.interactive) result['data-affix'] = '';
  if (props.target) result['data-target'] = props.target;
  if (
    props.offsetTop !== undefined &&
    props.offsetTop !== null &&
    Number(props.offsetTop) !== 0
  ) {
    result['data-offset-top'] = String(props.offsetTop);
  }
  if (props.offsetBottom !== undefined && props.offsetBottom !== null && props.offsetBottom !== '') {
    result['data-offset-bottom'] = String(props.offsetBottom);
  }
  return result;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

watchEffect(
  (onCleanup) => {
    props.target;
    props.offsetTop;
    props.offsetBottom;

    if (!props.interactive || !rootRef.value) return;
    onCleanup(initAffix(rootRef.value));
  },
  { flush: 'post' }
);
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="{ ...fallthroughAttrs, ...rootAttrs }">
    <div class="affix_placeholder" aria-hidden="true" hidden />
    <div :class="targetClass">
      <slot />
    </div>
  </div>
</template>
