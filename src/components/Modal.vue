<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useModalDemoCode } from '@/composables/useDemoCode';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'fullscreen']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  id: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'fullscreen'].includes(v),
  },
  scrollable: Boolean,
  /** 백드롭 표시. false 시 data-modal-backdrop="false" */
  backdrop: {
    type: Boolean,
    default: true,
  },
  title: String,
  open: Boolean,
  /** 푸터 버튼 정렬 (modal_footer-*) */
  footerAlign: {
    type: String,
    default: 'end',
    validator: (v) => ['start', 'center', 'end', 'between', 'even'].includes(v),
  },
  /** 균등 정렬(even)일 때 좌·우 비율 (modal_footer-even-*) */
  footerRatio: {
    type: String,
    default: '1-1',
    validator: (v) => ['1-1', '1-2', '2-1'].includes(v),
  },
  /** 푸터 하단 패딩 제거 (modal_footer-no-pad-b) */
  footerNoPadBottom: Boolean,
});
const { rippleAttrs } = useRipple(props);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const titleId = computed(() => `${props.id}-title`);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);

useModalDemoCode(
  () => ({
    ...props,
    size: resolvedSize.value,
  }),
  rootRef,
  attrs
);

const showHeader = computed(() => Boolean(slots.header || props.title));
const ariaLabelledby = computed(() => {
  if (attrs['aria-labelledby']) return attrs['aria-labelledby'];
  return !slots.header && props.title ? titleId.value : undefined;
});
const isDemoStatic = computed(
  () => typeof attrs.class === 'string' && attrs.class.includes('modal_demo-static')
);

const rootClass = computed(() => {
  const classes = ['modal'];
  if (resolvedSize.value === 'sm') classes.push('modal_sm');
  if (resolvedSize.value === 'lg') classes.push('modal_lg');
  if (resolvedSize.value === 'fullscreen') classes.push('modal_fullscreen');
  if (props.scrollable) classes.push('modal_scrollable');
  if (props.open) classes.push('is-open');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const footerClass = computed(() => {
  const classes = ['modal_footer'];
  if (props.footerAlign && props.footerAlign !== 'end') {
    classes.push(`modal_footer-${props.footerAlign}`);
  }
  if (props.footerAlign === 'even' && props.footerRatio && props.footerRatio !== '1-1') {
    classes.push(`modal_footer-even-${props.footerRatio}`);
  }
  if (props.footerNoPadBottom) {
    classes.push('modal_footer-no-pad-b');
  }
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, 'aria-labelledby': _ariaLabelledby, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    :id="id"
    :class="rootClass"
    data-modal
    :data-modal-backdrop="backdrop ? undefined : 'false'"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="ariaLabelledby"
    tabindex="-1"
    :hidden="isDemoStatic || open ? undefined : true"
    v-bind="fallthroughAttrs"
  >
    <div class="modal_backdrop" data-modal-close aria-hidden="true" />
    <div class="modal_dialog">
      <div v-if="showHeader" class="modal_header" data-demo-slot="header">
        <slot name="header">
          <div class="modal_title" :id="titleId" role="heading" aria-level="2">
            {{ title }}
          </div>
        </slot>
        <Button
          variant="ghost"
          icon-only
          class="modal_close"
          data-modal-close
          aria-label="닫기"
          v-bind="rippleAttrs"
        >
          <template #icon-before>
            <Icon name="close" size="sm" class="modal_close-icon" />
          </template>
        </Button>
      </div>
      <div class="modal_body" data-demo-slot="default">
        <slot />
      </div>
      <div v-if="$slots.footer" :class="footerClass" data-demo-slot="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
