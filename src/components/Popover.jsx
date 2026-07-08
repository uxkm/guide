import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useOverlayArrowAnchor } from '@/hooks/useOverlayArrowAnchor';
import { createDemoSlots, usePopoverDemoCode } from '@/hooks/useDemoCode';
import { overlayOffsetClasses } from '@/utils/overlay-offset';
import { panelAlignClasses } from '@/utils/overlay-panel-align';
import { partitionPopoverSlots, resolvePopoverTriggerProp } from '@/utils/overlay-slots';

const PLACEMENTS = new Set(['top', 'top-center', 'bottom-center', 'left', 'right', 'end']);

export default function Popover({
  placement,
  size = 'md',
  offset = 'md',
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  open = false,
  noArrow = false,
  arrowAnchor = 'content',
  panelAlign,
  arrowTargetAlign,
  disabled = false,
  trigger: triggerProp = 'click',
  title,
  panelLabel,
  interactive = true,
  closable,
  closeLabel = '닫기',
  title: titleSlot,
  footer: footerProp,
  children,
  className,
  ...rest
}) {
  const { mode: triggerMode, slot: explicitTrigger } = useMemo(
    () => resolvePopoverTriggerProp(triggerProp),
    [triggerProp],
  );

  const slots = useMemo(
    () => partitionPopoverSlots(children, explicitTrigger, footerProp),
    [children, explicitTrigger, footerProp],
  );

  const effectiveInteractive = open ? false : interactive;

  const props = {
    placement,
    size,
    offset,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    open,
    noArrow,
    arrowAnchor,
    panelAlign,
    arrowTargetAlign,
    disabled,
    trigger: triggerMode,
    title,
    panelLabel,
    interactive: effectiveInteractive,
    closable,
    closeLabel,
  };
  const rootRef = useRef(null);
  const panelId = useId().replace(/:/g, '');

  const demoSlots = useMemo(
    () => createDemoSlots({
      default: slots.body,
      trigger: slots.trigger,
      title: titleSlot,
      footer: slots.footer,
    }),
    [slots.body, slots.trigger, titleSlot, slots.footer],
  );

  usePopoverDemoCode(props, rootRef, { class: className, ...rest });
  useOverlayArrowAnchor(rootRef, props, 'popover');

  const rootClass = cn(
    'popover',
    size === 'sm' && 'popover_sm',
    size === 'lg' && 'popover_lg',
    ...overlayOffsetClasses('popover', props),
    ...panelAlignClasses('popover', panelAlign, 'start'),
    noArrow && 'popover_no-arrow',
    arrowAnchor === 'target' && 'popover_arrow-anchor-target',
    arrowAnchor === 'mixed' && 'popover_arrow-anchor-mixed',
    placement && PLACEMENTS.has(placement) && `popover_placement-${placement}`,
    open && 'is-open',
    disabled && 'is-disabled',
    className,
  );

  const rootAttrs = {};
  if (effectiveInteractive) rootAttrs['data-popover'] = '';
  if (triggerMode === 'hover') rootAttrs['data-popover-trigger'] = 'hover';
  if (arrowAnchor === 'mixed') {
    rootAttrs['data-panel-align'] = panelAlign;
  } else if (panelAlign !== 'start') {
    rootAttrs['data-panel-align'] = panelAlign;
  }
  if (
    (arrowAnchor === 'target' || arrowAnchor === 'mixed') &&
    arrowTargetAlign !== 'center'
  ) {
    rootAttrs['data-arrow-target-align'] = arrowTargetAlign;
  }

  const panelHidden = open ? undefined : true;
  const showCloseButton = closable ?? triggerMode === 'click';
  const hasTitle = Boolean(title || titleSlot);
  const showHeaderWithClose = showCloseButton && (hasTitle || Boolean(panelLabel));
  const useFloatingClose = showCloseButton && !hasTitle && !panelLabel;
  const labelledById = hasTitle || showHeaderWithClose ? `${panelId}-title` : undefined;
  const ariaLabel = labelledById ? undefined : panelLabel || undefined;

  return (
    <div ref={rootRef} className={rootClass} {...rootAttrs}>
      {slots.trigger}
      <div
        id={panelId}
        className={cn('popover_panel', useFloatingClose && 'popover_panel-closable')}
        role="dialog"
        aria-label={ariaLabel}
        aria-labelledby={labelledById}
        hidden={panelHidden}
      >
        <span className="popover_arrow" aria-hidden="true" />
        {showHeaderWithClose && (
          <div className="popover_header">
            <div id={`${panelId}-title`} className="popover_title">
              {hasTitle ? (titleSlot ?? title) : panelLabel}
            </div>
            <Button
              variant="ghost"
              iconOnly
              className="popover_close"
              data-popover-close
              aria-label={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="popover_close-icon" />}
            />
          </div>
        )}
        {!showHeaderWithClose && hasTitle && (
          <div id={`${panelId}-title`} className="popover_title">
            {titleSlot ?? title}
          </div>
        )}
        {useFloatingClose && (
          <Button
            variant="ghost"
            iconOnly
            className="popover_close popover_close-floating"
            data-popover-close
            aria-label={closeLabel}
            iconBefore={<Icon name="close" size="sm" className="popover_close-icon" />}
          />
        )}
        <div className="popover_body">{slots.body}</div>
        {slots.footer ? <div className="popover_footer">{slots.footer}</div> : null}
      </div>
    </div>
  );
}
