import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useDrawerDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_PLACEMENTS = new Set(['left', 'right', 'top', 'bottom']);

const PLACEMENT_CLASS = {
  left: 'drawer_placement-left',
  right: 'drawer_placement-right',
  top: 'drawer_placement-top',
  bottom: 'drawer_placement-bottom',
};

export default function Drawer({
  ripple,
  id,
  size = 'md',
  placement = 'right',
  noBackdrop,
  openOnLoad,
  draggable,
  title,
  open,
  header,
  extra,
  footer,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs } = useRipple({ ripple });
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedPlacement = VALID_PLACEMENTS.has(placement) ? placement : 'right';
  const showDragHandle = Boolean(draggable && resolvedPlacement === 'bottom');
  const titleId = `${id}-title`;

  useDrawerDemoCode(
    {
      ripple,
      id,
      size: resolvedSize,
      placement: resolvedPlacement,
      noBackdrop,
      openOnLoad,
      draggable,
      title,
      open,
    },
    rootRef,
    { className, ...rest },
  );

  const panelClass = useMemo(() => {
    const classes = ['drawer_panel', PLACEMENT_CLASS[resolvedPlacement]];
    if (resolvedSize === 'sm') classes.push('drawer_sm');
    if (resolvedSize === 'lg') classes.push('drawer_lg');
    if (showDragHandle) classes.push('drawer_draggable');
    return classes;
  }, [resolvedPlacement, resolvedSize, showDragHandle]);

  const rootClass = useMemo(() => {
    const classes = ['drawer'];
    if (open) classes.push('is-open');
    return classes;
  }, [open]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const showHeader = Boolean(header || title);

  return (
    <div
      ref={rootRef}
      id={id}
      className={cn(rootClass, className)}
      data-drawer=""
      data-drawer-backdrop={noBackdrop ? 'false' : undefined}
      data-drawer-open-on-load={openOnLoad ? 'true' : undefined}
      data-drawer-draggable={showDragHandle ? 'true' : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      hidden={!open || undefined}
      {...domRest}
    >
      <div className="drawer_backdrop" data-drawer-close="" aria-hidden="true" />
      <div className={cn(panelClass)}>
        {showDragHandle ? (
          <div
            className="drawer_handle"
            data-drawer-drag-handle=""
            role="presentation"
            aria-hidden="true"
          >
            <span className="drawer_handle-bar" />
          </div>
        ) : null}
        {showHeader ? (
          <div className="drawer_header" data-demo-slot="header">
            {header ?? (
              <h2 className="drawer_title" id={titleId}>
                {title}
              </h2>
            )}
            {extra ? (
              <div className="drawer_extra" data-demo-slot="extra">
                {extra}
              </div>
            ) : null}
            <Button
              variant="ghost"
              iconOnly
              className="drawer_close"
              data-drawer-close=""
              ariaLabel="닫기"
              iconBefore={<Icon name="close" size="sm" className="drawer_close-icon" />}
              {...rippleAttrs}
            />
          </div>
        ) : null}
        <div className="drawer_body" data-demo-slot="default">
          {children}
        </div>
        {footer ? (
          <div className="drawer_footer" data-demo-slot="footer">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
