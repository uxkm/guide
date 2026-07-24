import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { usePopoverDemoCode } from '@/hooks/useDemoCode';
import { useOverlayArrowAnchor } from '@/hooks/useOverlayArrowAnchor';
import { overlayOffsetClasses } from '@/utils/overlay-offset';
import { panelAlignClasses } from '@/utils/overlay-panel-align';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const PLACEMENTS = new Set(['top', 'top-center', 'bottom-center', 'left', 'right', 'end']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_ARROW_ANCHORS = new Set(['content', 'target', 'mixed']);
const VALID_TRIGGERS = new Set(['click', 'hover']);

export default function Popover({
  placement,
  size = 'md',
  offset = 'md',
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  open,
  noArrow,
  arrowAnchor = 'content',
  panelAlign = 'start',
  arrowTargetAlign = 'center',
  disabled,
  /** click | hover — Vue `trigger` prop */
  trigger = 'click',
  title,
  panelLabel,
  interactive = true,
  closable,
  closeLabel = '닫기',
  /** Vue `#trigger` 슬롯 */
  triggerContent,
  footer,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const panelId = `popover-${reactId}`;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedArrowAnchor = VALID_ARROW_ANCHORS.has(arrowAnchor) ? arrowAnchor : 'content';
  const resolvedTrigger = VALID_TRIGGERS.has(trigger) ? trigger : 'click';

  const demoProps = {
    placement,
    size: resolvedSize,
    offset,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    open,
    noArrow,
    arrowAnchor: resolvedArrowAnchor,
    panelAlign,
    arrowTargetAlign,
    disabled,
    trigger: resolvedTrigger,
    title: typeof title === 'string' ? title : undefined,
    panelLabel,
    interactive,
    closable,
    closeLabel,
  };

  usePopoverDemoCode(demoProps, rootRef, { className, ...rest });
  useOverlayArrowAnchor(
    rootRef,
    {
      noArrow,
      arrowAnchor: resolvedArrowAnchor,
      panelAlign,
      arrowTargetAlign,
      open,
      placement,
    },
    'popover',
  );

  const rootClass = useMemo(() => {
    const classes = ['popover'];
    if (resolvedSize === 'sm') classes.push('popover_sm');
    if (resolvedSize === 'lg') classes.push('popover_lg');
    classes.push(
      ...overlayOffsetClasses('popover', {
        offset,
        offsetTop,
        offsetRight,
        offsetBottom,
        offsetLeft,
      }),
    );
    classes.push(...panelAlignClasses('popover', panelAlign, 'start'));
    if (noArrow) classes.push('popover_no-arrow');
    if (resolvedArrowAnchor === 'target') classes.push('popover_arrow-anchor-target');
    if (resolvedArrowAnchor === 'mixed') classes.push('popover_arrow-anchor-mixed');
    if (placement && PLACEMENTS.has(placement)) {
      classes.push(`popover_placement-${placement}`);
    }
    if (open) classes.push('is-open');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [
    resolvedSize,
    offset,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    panelAlign,
    noArrow,
    resolvedArrowAnchor,
    placement,
    open,
    disabled,
  ]);

  const rootAttrs = useMemo(() => {
    const result = {};
    if (interactive) result['data-popover'] = '';
    if (resolvedTrigger === 'hover') result['data-popover-trigger'] = 'hover';
    if (resolvedArrowAnchor === 'mixed') {
      result['data-panel-align'] = panelAlign;
    } else if (panelAlign !== 'start') {
      result['data-panel-align'] = panelAlign;
    }
    if (
      (resolvedArrowAnchor === 'target' || resolvedArrowAnchor === 'mixed') &&
      arrowTargetAlign !== 'center'
    ) {
      result['data-arrow-target-align'] = arrowTargetAlign;
    }
    return result;
  }, [interactive, resolvedTrigger, resolvedArrowAnchor, panelAlign, arrowTargetAlign]);

  const panelHidden = interactive ? undefined : !open || undefined;
  const showCloseButton = closable ?? resolvedTrigger === 'click';
  const hasTitle = Boolean(title);
  const showHeaderWithClose = showCloseButton && (hasTitle || Boolean(panelLabel));
  const useFloatingClose = showCloseButton && !hasTitle && !panelLabel;
  const labelledById =
    hasTitle || showHeaderWithClose ? `${panelId}-title` : undefined;
  const ariaLabel = labelledById ? undefined : panelLabel || undefined;

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...rootAttrs} {...domRest}>
      {triggerContent}
      <div
        id={panelId}
        className={cn('popover_panel', useFloatingClose && 'popover_panel-closable')}
        role="dialog"
        aria-label={ariaLabel}
        aria-labelledby={labelledById}
        hidden={panelHidden}
      >
        <span className="popover_arrow" aria-hidden="true" />
        {showHeaderWithClose ? (
          <div className="popover_header">
            <div id={`${panelId}-title`} className="popover_title">
              {hasTitle ? title : panelLabel}
            </div>
            <Button
              variant="ghost"
              iconOnly
              className="popover_close"
              data-popover-close=""
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="popover_close-icon" />}
            />
          </div>
        ) : null}
        {!showHeaderWithClose && hasTitle ? (
          <div id={`${panelId}-title`} className="popover_title">
            {title}
          </div>
        ) : null}
        {useFloatingClose ? (
          <Button
            variant="ghost"
            iconOnly
            className="popover_close popover_close-floating"
            data-popover-close=""
            ariaLabel={closeLabel}
            iconBefore={<Icon name="close" size="sm" className="popover_close-icon" />}
          />
        ) : null}
        <div className="popover_body">{children}</div>
        {footer ? <div className="popover_footer">{footer}</div> : null}
      </div>
    </div>
  );
}
