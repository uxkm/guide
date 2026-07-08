import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useModalDemoCode } from '@/hooks/useDemoCode';

export default function Modal({
  ripple,
  id,
  size = 'md',
  scrollable = false,
  backdrop = true,
  title,
  open = false,
  header,
  footer,
  children,
  className,
  ...rest
}) {
  const props = { ripple, id, size, scrollable, backdrop, title, open };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const titleId = `${id}-title`;
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, header, footer }),
    [children, header, footer],
  );

  useModalDemoCode(props, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'modal',
    size === 'sm' && 'modal_sm',
    size === 'lg' && 'modal_lg',
    size === 'fullscreen' && 'modal_fullscreen',
    scrollable && 'modal_scrollable',
    open && 'is-open',
    className,
  );

  const showHeader = header || title;

  return (
    <div
      ref={rootRef}
      id={id}
      className={rootClass}
      data-modal
      data-modal-backdrop={backdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      hidden={!open || undefined}
      {...rest}
    >
      <div className="modal_backdrop" data-modal-close aria-hidden="true" />
      <div className="modal_dialog">
        {showHeader && (
          <div className="modal_header" data-demo-slot="header">
            {header ?? <h2 className="modal_title" id={titleId}>{title}</h2>}
            <Button
              variant="ghost"
              iconOnly
              className="modal_close"
              data-modal-close
              aria-label="닫기"
              {...rippleAttrs}
              iconBefore={<Icon name="close" size="sm" className="modal_close-icon" />}
            />
          </div>
        )}
        <div className="modal_body" data-demo-slot="default">
          {children}
        </div>
        {footer && (
          <div className="modal_footer" data-demo-slot="footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
