<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useDrawerDemoCode } from '@/composables/useDemoCode';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_PLACEMENTS = new Set(['left', 'right', 'top', 'bottom']);

const PLACEMENT_CLASS = {
  left: 'drawer_placement-left',
  right: 'drawer_placement-right',
  top: 'drawer_placement-top',
  bottom: 'drawer_placement-bottom',
};

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
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  placement: {
    type: String,
    default: 'right',
    validator: (v) => ['left', 'right', 'top', 'bottom'].includes(v),
  },
  noBackdrop: Boolean,
  openOnLoad: Boolean,
  /** 하단 패널 핸들·헤더 드래그로 펼침/접힘 (placement="bottom") */
  draggable: Boolean,
  title: String,
  open: Boolean,
  /** 푸터 버튼 정렬 (drawer_footer-*) */
  footerAlign: {
    type: String,
    default: 'end',
    validator: (v) => ['start', 'center', 'end', 'between', 'even'].includes(v),
  },
  /** 균등 정렬(even)일 때 좌·우 비율 (drawer_footer-even-*) */
  footerRatio: {
    type: String,
    default: '1-1',
    validator: (v) => ['1-1', '1-2', '2-1'].includes(v),
  },
  /** 푸터 하단 패딩 제거 (drawer_footer-no-pad-b) */
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
const resolvedPlacement = computed(() =>
  VALID_PLACEMENTS.has(props.placement) ? props.placement : 'right'
);
const showDragHandle = computed(
  () => props.draggable && resolvedPlacement.value === 'bottom'
);

useDrawerDemoCode(
  () => ({
    ...props,
    size: resolvedSize.value,
    placement: resolvedPlacement.value,
  }),
  rootRef,
  attrs
);

const showHeader = computed(() => Boolean(slots.header || props.title));
const isDemoStatic = computed(
  () => typeof attrs.class === 'string' && attrs.class.includes('drawer_demo-static')
);

const placementClass = computed(() => PLACEMENT_CLASS[resolvedPlacement.value]);

const panelClass = computed(() => {
  const classes = ['drawer_panel', placementClass.value];
  if (resolvedSize.value === 'sm') classes.push('drawer_sm');
  if (resolvedSize.value === 'lg') classes.push('drawer_lg');
  if (showDragHandle.value) classes.push('drawer_draggable');
  return classes;
});

const rootClass = computed(() => {
  const classes = ['drawer'];
  if (props.open) classes.push('is-open');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const footerClass = computed(() => {
  const classes = ['drawer_footer'];
  if (props.footerAlign && props.footerAlign !== 'end') {
    classes.push(`drawer_footer-${props.footerAlign}`);
  }
  if (props.footerAlign === 'even' && props.footerRatio && props.footerRatio !== '1-1') {
    classes.push(`drawer_footer-even-${props.footerRatio}`);
  }
  if (props.footerNoPadBottom) {
    classes.push('drawer_footer-no-pad-b');
  }
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    :id="id"
    :class="rootClass"
    data-drawer
    :data-drawer-backdrop="noBackdrop ? 'false' : undefined"
    :data-drawer-open-on-load="openOnLoad ? 'true' : undefined"
    :data-drawer-draggable="showDragHandle ? 'true' : undefined"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="titleId"
    tabindex="-1"
    :hidden="isDemoStatic || open ? undefined : true"
    v-bind="fallthroughAttrs"
  >
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true" />
    <div :class="panelClass">
      <div
        v-if="showDragHandle"
        class="drawer_handle"
        data-drawer-drag-handle
        role="presentation"
        aria-hidden="true"
      >
        <span class="drawer_handle-bar" />
      </div>
      <div v-if="showHeader" class="drawer_header" data-demo-slot="header">
        <slot name="header">
          <div class="drawer_title" :id="titleId" role="heading" aria-level="2">
            {{ title }}
          </div>
        </slot>
        <div v-if="$slots.extra" class="drawer_extra" data-demo-slot="extra">
          <slot name="extra" />
        </div>
        <Button
          variant="ghost"
          icon-only
          class="drawer_close"
          data-drawer-close
          aria-label="닫기"
          v-bind="rippleAttrs"
        >
          <template #icon-before>
            <Icon name="close" size="sm" class="drawer_close-icon" />
          </template>
        </Button>
      </div>
      <div class="drawer_body" data-demo-slot="default">
        <slot />
      </div>
      <div v-if="$slots.footer" :class="footerClass" data-demo-slot="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
