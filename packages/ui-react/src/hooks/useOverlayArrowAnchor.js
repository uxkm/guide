import { useEffect, useLayoutEffect } from 'react';
import { updatePopoverLayout, updateTooltipLayout } from '@uxkm/ui/legacy/overlay-layout.js';

/**
 * arrowAnchor가 target/mixed일 때 패널·화살표 위치를 JS로 갱신합니다.
 * @param {React.RefObject<HTMLElement | null>} rootRef
 * @param {{ noArrow?: boolean, arrowAnchor?: string, panelAlign?: string, arrowTargetAlign?: string, open?: boolean, placement?: string }} props
 * @param {'popover' | 'tooltip'} type
 */
export function useOverlayArrowAnchor(rootRef, props, type) {
  const {
    noArrow,
    arrowAnchor,
    panelAlign,
    arrowTargetAlign,
    open,
    placement,
  } = props;

  useLayoutEffect(() => {
    if (noArrow || arrowAnchor === 'content') return;

    const root = rootRef.current;
    if (!root) return;

    if (type === 'popover') {
      updatePopoverLayout(root);
    } else {
      updateTooltipLayout(root);
    }
  }, [
    rootRef,
    noArrow,
    arrowAnchor,
    panelAlign,
    arrowTargetAlign,
    open,
    placement,
    type,
  ]);

  useEffect(() => {
    if (noArrow || arrowAnchor === 'content') return;

    const root = rootRef.current;
    if (!root) return;

    const update = () => {
      if (type === 'popover') {
        updatePopoverLayout(root);
      } else {
        updateTooltipLayout(root);
      }
    };

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(root);
    return () => resizeObserver.disconnect();
  }, [rootRef, noArrow, arrowAnchor, type]);
}
