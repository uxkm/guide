import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useOverlayArrowAnchor } from '@/hooks/useOverlayArrowAnchor';
import { useTooltipDemoCode } from '@/hooks/useDemoCode';
import { overlayOffsetClasses } from '@/utils/overlay-offset';
import { panelAlignClasses } from '@/utils/overlay-panel-align';
import { partitionTooltipSlots, resolveOverlayTriggerProp } from '@/utils/overlay-slots';

const PLACEMENTS = new Set([
  'top',
  'top-start',
  'top-end',
  'left',
  'right',
  'start',
  'end',
]);

export default function Tooltip({
  content,
  placement,
  size = 'md',
  offset = 'md',
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  open = false,
  inverse = false,
  noArrow = false,
  arrowAnchor = 'content',
  panelAlign = 'center',
  arrowTargetAlign,
  disabled = false,
  trigger: triggerProp = 'hover',
  interactive = true,
  closable,
  closeLabel = '닫기',
  children,
  className,
  ...rest
}) {
  const { mode: triggerMode, slot: explicitTrigger } = useMemo(
    () => resolveOverlayTriggerProp(triggerProp, 'hover'),
    [triggerProp],
  );

  const slots = useMemo(
    () => partitionTooltipSlots(children, explicitTrigger),
    [children, explicitTrigger],
  );

  const effectiveInteractive = open ? false : interactive;

  const props = {
    content,
    placement,
    size,
    offset,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    open,
    inverse,
    noArrow,
    arrowAnchor,
    panelAlign,
    arrowTargetAlign,
    disabled,
    trigger: triggerMode,
    interactive: effectiveInteractive,
    closable,
    closeLabel,
  };
  const rootRef = useRef(null);
  const bubbleId = useId().replace(/:/g, '');

  useTooltipDemoCode(props, rootRef, { class: className, ...rest });
  useOverlayArrowAnchor(rootRef, props, 'tooltip');

  const rootClass = cn(
    'tooltip',
    size === 'sm' && 'tooltip_sm',
    size === 'lg' && 'tooltip_lg',
    ...overlayOffsetClasses('tooltip', props),
    ...panelAlignClasses('tooltip', panelAlign, 'center'),
    inverse && 'tooltip_inverse',
    noArrow && 'tooltip_no-arrow',
    arrowAnchor === 'target' && 'tooltip_arrow-anchor-target',
    arrowAnchor === 'mixed' && 'tooltip_arrow-anchor-mixed',
    placement && PLACEMENTS.has(placement) && `tooltip_placement-${placement}`,
    open && 'is-open',
    disabled && 'is-disabled',
    className,
  );

  const rootAttrs = {};
  if (effectiveInteractive) rootAttrs['data-tooltip'] = '';
  if (triggerMode === 'click') rootAttrs['data-tooltip-trigger'] = 'click';
  if (arrowAnchor === 'mixed') {
    rootAttrs['data-panel-align'] = panelAlign;
  } else if (panelAlign !== 'center') {
    rootAttrs['data-panel-align'] = panelAlign;
  }
  if (
    (arrowAnchor === 'target' || arrowAnchor === 'mixed') &&
    arrowTargetAlign !== 'center'
  ) {
    rootAttrs['data-arrow-target-align'] = arrowTargetAlign;
  }

  const bubbleHidden = open ? undefined : true;
  const showCloseButton = closable ?? triggerMode === 'click';
  const bubbleContent = slots.content ?? content;

  return (
    <span ref={rootRef} className={rootClass} {...rootAttrs}>
      <span className="tooltip_trigger" aria-describedby={bubbleId}>
        {slots.trigger}
      </span>
      <span
        id={bubbleId}
        className={cn('tooltip_bubble', showCloseButton && 'tooltip_bubble-closable')}
        role="tooltip"
        hidden={bubbleHidden}
      >
        <span className="tooltip_arrow" aria-hidden="true" />
        {showCloseButton && (
          <Button
            variant="ghost"
            iconOnly
            className="tooltip_close tooltip_close-floating"
            data-tooltip-close
            aria-label={closeLabel}
            iconBefore={<Icon name="close" size="sm" className="tooltip_close-icon" />}
          />
        )}
        <span className="tooltip_bubble_body">{bubbleContent}</span>
      </span>
    </span>
  );
}
