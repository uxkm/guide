<script setup>
import { computed, ref, useAttrs, useId, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { usePopoverDemoCode } from '@/composables/useDemoCode';
import { useOverlayArrowAnchor } from '@/composables/useOverlayArrowAnchor';
import { overlayOffsetClasses, overlayOffsetProp } from '@/utils/overlay-offset';
import { arrowTargetAlignProp } from '@/utils/overlay-arrow-align';
import { panelAlignClasses, panelAlignProp } from '@/utils/overlay-panel-align';

defineOptions({ inheritAttrs: false });

const PLACEMENTS = new Set([
  'top',
  'top-center',
  'bottom-center',
  'left',
  'right',
  'end',
]);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_ARROW_ANCHORS = new Set(['content', 'target', 'mixed']);
const VALID_TRIGGERS = new Set(['click', 'hover']);

const props = defineProps({
  placement: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  offset: {
    type: String,
    default: 'md',
    validator: overlayOffsetProp.validator,
  },
  offsetTop: overlayOffsetProp,
  offsetRight: overlayOffsetProp,
  offsetBottom: overlayOffsetProp,
  offsetLeft: overlayOffsetProp,
  open: Boolean,
  noArrow: Boolean,
  arrowAnchor: {
    type: String,
    default: 'content',
    validator: (value) => ['content', 'target', 'mixed'].includes(value),
  },
  panelAlign: panelAlignProp,
  arrowTargetAlign: arrowTargetAlignProp,
  disabled: Boolean,
  trigger: {
    type: String,
    default: 'click',
    validator: (v) => ['click', 'hover'].includes(v),
  },
  title: String,
  panelLabel: String,
  interactive: {
    type: Boolean,
    default: true,
  },
  /** 클릭 트리거 시 패널 닫기 버튼. 미지정이면 trigger가 click일 때 표시 */
  closable: {
    type: Boolean,
    default: undefined,
  },
  closeLabel: {
    type: String,
    default: '닫기',
  },
});

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);
const panelId = `popover-${useId().replace(/:/g, '')}`;
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedArrowAnchor = computed(() =>
  VALID_ARROW_ANCHORS.has(props.arrowAnchor) ? props.arrowAnchor : 'content'
);
const resolvedTrigger = computed(() =>
  VALID_TRIGGERS.has(props.trigger) ? props.trigger : 'click'
);

usePopoverDemoCode(
  () => ({
    ...props,
    size: resolvedSize.value,
    arrowAnchor: resolvedArrowAnchor.value,
    trigger: resolvedTrigger.value,
  }),
  rootRef,
  attrs
);
useOverlayArrowAnchor(
  rootRef,
  {
    get noArrow() { return props.noArrow; },
    get arrowAnchor() { return resolvedArrowAnchor.value; },
    get panelAlign() { return props.panelAlign; },
    get arrowTargetAlign() { return props.arrowTargetAlign; },
    get open() { return props.open; },
    get placement() { return props.placement; },
  },
  'popover'
);

const rootClass = computed(() => {
  const classes = ['popover'];
  if (resolvedSize.value === 'sm') classes.push('popover_sm');
  if (resolvedSize.value === 'lg') classes.push('popover_lg');
  classes.push(...overlayOffsetClasses('popover', props));
  classes.push(...panelAlignClasses('popover', props.panelAlign, 'start'));
  if (props.noArrow) classes.push('popover_no-arrow');
  if (resolvedArrowAnchor.value === 'target') classes.push('popover_arrow-anchor-target');
  if (resolvedArrowAnchor.value === 'mixed') classes.push('popover_arrow-anchor-mixed');
  if (props.placement && PLACEMENTS.has(props.placement)) {
    classes.push(`popover_placement-${props.placement}`);
  }
  if (props.open) classes.push('is-open');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootAttrs = computed(() => {
  const result = {};
  if (props.interactive) result['data-popover'] = '';
  if (resolvedTrigger.value === 'hover') result['data-popover-trigger'] = 'hover';
  if (resolvedArrowAnchor.value === 'mixed') {
    result['data-panel-align'] = props.panelAlign;
  } else if (props.panelAlign !== 'start') {
    result['data-panel-align'] = props.panelAlign;
  }
  if (
    (resolvedArrowAnchor.value === 'target' || resolvedArrowAnchor.value === 'mixed') &&
    props.arrowTargetAlign !== 'center'
  ) {
    result['data-arrow-target-align'] = props.arrowTargetAlign;
  }
  return result;
});

const panelHidden = computed(() => {
  if (props.interactive) return undefined;
  return !props.open || undefined;
});

const showCloseButton = computed(() => props.closable ?? resolvedTrigger.value === 'click');
const hasTitle = computed(() => Boolean(props.title || slots.title));
const showHeaderWithClose = computed(
  () => showCloseButton.value && (hasTitle.value || Boolean(props.panelLabel)),
);
const useFloatingClose = computed(
  () => showCloseButton.value && !hasTitle.value && !props.panelLabel,
);
const labelledById = computed(() => {
  if (hasTitle.value || showHeaderWithClose.value) return `${panelId}-title`;
  return undefined;
});
const ariaLabel = computed(() => {
  if (labelledById.value) return undefined;
  return props.panelLabel || undefined;
});
const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const rootDomAttrs = computed(() => ({
  ...rootAttrs.value,
  ...fallthroughAttrs.value,
}));
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="rootDomAttrs">
    <slot name="trigger" />
    <div
      :id="panelId"
      class="popover_panel"
      :class="{ 'popover_panel-closable': useFloatingClose }"
      role="dialog"
      :aria-label="ariaLabel"
      :aria-labelledby="labelledById"
      :hidden="panelHidden"
    >
      <span class="popover_arrow" aria-hidden="true" />
      <div v-if="showHeaderWithClose" class="popover_header">
        <div :id="`${panelId}-title`" class="popover_title">
          <slot v-if="hasTitle" name="title">{{ title }}</slot>
          <template v-else>{{ panelLabel }}</template>
        </div>
        <Button
          variant="ghost"
          icon-only
          class="popover_close"
          data-popover-close
          :aria-label="closeLabel"
        >
          <template #icon-before>
            <Icon name="close" size="sm" class="popover_close-icon" />
          </template>
        </Button>
      </div>
      <div v-else-if="hasTitle" :id="`${panelId}-title`" class="popover_title">
        <slot name="title">{{ title }}</slot>
      </div>
      <Button
        v-if="useFloatingClose"
        variant="ghost"
        icon-only
        class="popover_close popover_close-floating"
        data-popover-close
        :aria-label="closeLabel"
      >
        <template #icon-before>
          <Icon name="close" size="sm" class="popover_close-icon" />
        </template>
      </Button>
      <div class="popover_body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="popover_footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
