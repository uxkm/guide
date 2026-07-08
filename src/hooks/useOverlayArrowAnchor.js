import { useEffect, useRef } from 'react';
import { updatePopoverLayout, updateTooltipLayout } from '@/legacy/overlay-layout';

export function useOverlayArrowAnchor(rootRef, props, type) {
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (props.noArrow) return;

      const root = rootRef.current;
      if (!root) return;

      if (props.arrowAnchor === 'content') return;

      if (type === 'popover') {
        updatePopoverLayout(root);
      } else {
        updateTooltipLayout(root);
      }
    };

    update();
    resizeObserverRef.current = new ResizeObserver(() => update());

    if (rootRef.current) {
      resizeObserverRef.current.observe(rootRef.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [
    props.arrowAnchor,
    props.panelAlign,
    props.arrowTargetAlign,
    props.open,
    props.placement,
    props.noArrow,
    rootRef,
    type,
  ]);
}
