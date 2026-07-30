import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useTooltipDemoCode } from '@/hooks/useDemoCode';
import { useOverlayArrowAnchor } from '@/hooks/useOverlayArrowAnchor';
import { overlayOffsetClasses } from '@/utils/overlay-offset';
import { panelAlignClasses } from '@/utils/overlay-panel-align';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const PLACEMENTS = new Set(['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_ARROW_ANCHORS = new Set(['content', 'target', 'mixed']);
const VALID_TRIGGERS = new Set(['hover', 'click']);

export default function Tooltip({
  content,
  placement,
  size = 'md',
  offset = 'md',
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  open,
  inverse,
  noArrow,
  arrowAnchor = 'content',
  panelAlign = 'center',
  arrowTargetAlign = 'center',
  disabled,
  /** hover | click — Vue `trigger` prop */
  trigger = 'hover',
  interactive = true,
  closable,
  closeLabel = '닫기',
  /** Vue `#trigger` 슬롯 */
  triggerContent,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const bubbleId = `tooltip-${reactId}`;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedArrowAnchor = VALID_ARROW_ANCHORS.has(arrowAnchor) ? arrowAnchor : 'content';
  const resolvedTrigger = VALID_TRIGGERS.has(trigger) ? trigger : 'hover';
  const bubbleContent = children ?? content;

  const demoProps = {
    content: typeof content === 'string' ? content : undefined,
    placement,
    size: resolvedSize,
    offset,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    open,
    inverse,
    noArrow,
    arrowAnchor: resolvedArrowAnchor,
    panelAlign,
    arrowTargetAlign,
    disabled,
    trigger: resolvedTrigger,
    interactive,
    closable,
    closeLabel,
  };

  useTooltipDemoCode(demoProps, rootRef, { className, ...rest });
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
    'tooltip',
  );

  const rootClass = useMemo(() => {
    const classes = ['tooltip'];
    if (resolvedSize === 'sm') classes.push('tooltip_sm');
    if (resolvedSize === 'lg') classes.push('tooltip_lg');
    classes.push(
      ...overlayOffsetClasses('tooltip', {
        offset,
        offsetTop,
        offsetRight,
        offsetBottom,
        offsetLeft,
      }),
    );
    classes.push(...panelAlignClasses('tooltip', panelAlign, 'center'));
    if (inverse) classes.push('tooltip_inverse');
    if (noArrow) classes.push('tooltip_no-arrow');
    if (resolvedArrowAnchor === 'target') classes.push('tooltip_arrow-anchor-target');
    if (resolvedArrowAnchor === 'mixed') classes.push('tooltip_arrow-anchor-mixed');
    if (placement && PLACEMENTS.has(placement)) {
      classes.push(`tooltip_placement-${placement}`);
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
    inverse,
    noArrow,
    resolvedArrowAnchor,
    placement,
    open,
    disabled,
  ]);

  const rootAttrs = useMemo(() => {
    const result = {};
    if (interactive) result['data-tooltip'] = '';
    if (resolvedTrigger === 'click') result['data-tooltip-trigger'] = 'click';
    if (resolvedArrowAnchor === 'mixed') {
      result['data-panel-align'] = panelAlign;
    } else if (panelAlign !== 'center') {
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

  const bubbleHidden = interactive ? undefined : !open || undefined;
  const showCloseButton = closable ?? resolvedTrigger === 'click';

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <span ref={rootRef} className={cn(rootClass, className)} {...rootAttrs} {...domRest}>
      <span className="tooltip_trigger" aria-describedby={bubbleId}>
        {triggerContent}
      </span>
      <span
        id={bubbleId}
        className={cn('tooltip_bubble', showCloseButton && 'tooltip_bubble-closable')}
        role="tooltip"
        hidden={bubbleHidden}
      >
        <span className="tooltip_arrow" aria-hidden="true" />
        {showCloseButton ? (
          <Button
            variant="ghost"
            iconOnly
            className="tooltip_close tooltip_close-floating"
            data-tooltip-close=""
            ariaLabel={closeLabel}
            iconBefore={<Icon name="close" size="sm" className="tooltip_close-icon" />}
          />
        ) : null}
        {bubbleContent}
      </span>
    </span>
  );
}
