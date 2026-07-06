import { onMounted, onUnmounted, watch } from 'vue';
import { updatePopoverLayout, updateTooltipLayout } from '@/legacy/overlay-layout';

export function useOverlayArrowAnchor(rootRef, props, type) {
  const update = () => {
    if (props.noArrow) return;

    const root = rootRef.value;
    if (!root) return;

    if (props.arrowAnchor === 'content') return;

    if (type === 'popover') {
      updatePopoverLayout(root);
    } else {
      updateTooltipLayout(root);
    }
  };

  let resizeObserver;

  watch(
    () => [
      props.arrowAnchor,
      props.panelAlign,
      props.arrowTargetAlign,
      props.open,
      props.placement,
      props.noArrow,
      rootRef.value,
    ],
    () => update(),
    { flush: 'post' },
  );

  onMounted(() => {
    update();
    resizeObserver = new ResizeObserver(() => update());

    if (rootRef.value) {
      resizeObserver.observe(rootRef.value);
    }
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
  });
}
