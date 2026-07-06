<script setup>
import { computed, ref, useAttrs, useId } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { useTooltipDemoCode } from '@/composables/useDemoCode';
import { useOverlayArrowAnchor } from '@/composables/useOverlayArrowAnchor';
import { overlayOffsetClasses, overlayOffsetProp } from '@/utils/overlay-offset';
import { arrowTargetAlignProp } from '@/utils/overlay-arrow-align';
import { panelAlignClasses, panelAlignProp } from '@/utils/overlay-panel-align';

defineOptions({ inheritAttrs: false });

const PLACEMENTS = new Set([
  'top',
  'top-start',
  'top-end',
  'left',
  'right',
  'start',
  'end',
]);

const props = defineProps({
  content: String,
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
  inverse: Boolean,
  noArrow: Boolean,
  arrowAnchor: {
    type: String,
    default: 'content',
    validator: (value) => ['content', 'target', 'mixed'].includes(value),
  },
  panelAlign: {
    type: String,
    default: 'center',
    validator: panelAlignProp.validator,
  },
  arrowTargetAlign: arrowTargetAlignProp,
  disabled: Boolean,
  trigger: {
    type: String,
    default: 'hover',
    validator: (v) => ['hover', 'click'].includes(v),
  },
  interactive: {
    type: Boolean,
    default: true,
  },
  /** 클릭 트리거 시 말풍선 닫기 버튼. 미지정이면 trigger가 click일 때 표시 */
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
const rootRef = ref(null);
const bubbleId = useId().replace(/:/g, '');

useTooltipDemoCode(props, rootRef, attrs);
useOverlayArrowAnchor(rootRef, props, 'tooltip');

const rootClass = computed(() => {
  const classes = ['tooltip'];
  if (props.size === 'sm') classes.push('tooltip_sm');
  if (props.size === 'lg') classes.push('tooltip_lg');
  classes.push(...overlayOffsetClasses('tooltip', props));
  classes.push(...panelAlignClasses('tooltip', props.panelAlign, 'center'));
  if (props.inverse) classes.push('tooltip_inverse');
  if (props.noArrow) classes.push('tooltip_no-arrow');
  if (props.arrowAnchor === 'target') classes.push('tooltip_arrow-anchor-target');
  if (props.arrowAnchor === 'mixed') classes.push('tooltip_arrow-anchor-mixed');
  if (props.placement && PLACEMENTS.has(props.placement)) {
    classes.push(`tooltip_placement-${props.placement}`);
  }
  if (props.open) classes.push('is-open');
  if (props.disabled) classes.push('is-disabled');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootAttrs = computed(() => {
  const result = {};
  if (props.interactive) result['data-tooltip'] = '';
  if (props.trigger === 'click') result['data-tooltip-trigger'] = 'click';
  if (props.arrowAnchor === 'mixed') {
    result['data-panel-align'] = props.panelAlign;
  } else if (props.panelAlign !== 'center') {
    result['data-panel-align'] = props.panelAlign;
  }
  if (
    (props.arrowAnchor === 'target' || props.arrowAnchor === 'mixed') &&
    props.arrowTargetAlign !== 'center'
  ) {
    result['data-arrow-target-align'] = props.arrowTargetAlign;
  }
  return result;
});

const bubbleHidden = computed(() => {
  if (props.interactive) return undefined;
  return !props.open || undefined;
});

const showCloseButton = computed(() => props.closable ?? props.trigger === 'click');
</script>

<template>
  <span ref="rootRef" :class="rootClass" v-bind="rootAttrs">
    <span class="tooltip_trigger" :aria-describedby="bubbleId">
      <slot name="trigger" />
    </span>
    <span
      :id="bubbleId"
      class="tooltip_bubble"
      :class="{ 'tooltip_bubble-closable': showCloseButton }"
      role="tooltip"
      :hidden="bubbleHidden"
    >
      <span class="tooltip_arrow" aria-hidden="true" />
      <Button
        v-if="showCloseButton"
        variant="ghost"
        icon-only
        class="tooltip_close tooltip_close-floating"
        data-tooltip-close
        :aria-label="closeLabel"
      >
        <template #icon-before>
          <Icon name="close" size="sm" class="tooltip_close-icon" />
        </template>
      </Button>
      <slot>{{ content }}</slot>
    </span>
  </span>
</template>
