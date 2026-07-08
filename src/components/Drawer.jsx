import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { useDrawerDemoCode } from '@/hooks/useDemoCode';

export default function Drawer({
  ripple,
  id,
  size = 'md',
  placement = 'right',
  noBackdrop,
  openOnLoad,
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
  const props = { ripple, id, size, placement, noBackdrop, openOnLoad, title, open };
  const { rippleAttrs } = useRipple(props);
  const titleId = `${id}-title`;

  useDrawerDemoCode(props, rootRef, { class: className, ...rest });

  const placementClass = {
    left: 'drawer_placement-left',
    right: 'drawer_placement-right',
    top: 'drawer_placement-top',
    bottom: 'drawer_placement-bottom',
  }[placement];

  const panelClass = cn(
    'drawer_panel',
    placementClass,
    size === 'sm' && 'drawer_sm',
    size === 'lg' && 'drawer_lg',
  );

  const rootClass = cn('drawer', open && 'is-open', className);

  return (
    <div
      ref={rootRef}
      id={id}
      className={rootClass}
      data-drawer
      data-drawer-backdrop={noBackdrop ? 'false' : undefined}
      data-drawer-open-on-load={openOnLoad ? 'true' : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      hidden={!open || undefined}
      {...rest}
    >
      <div className="drawer_backdrop" data-drawer-close aria-hidden="true" />
      <div className={panelClass}>
        {header || title ? (
          <div className="drawer_header" data-demo-slot="header">
            {header ?? <h2 className="drawer_title" id={titleId}>{title}</h2>}
            {extra}
            <Button
              variant="ghost"
              iconOnly
              className="drawer_close"
              data-drawer-close
              aria-label="닫기"
              {...rippleAttrs}
              iconBefore={<Icon name="close" size="sm" className="drawer_close-icon" />}
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
