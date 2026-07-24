import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useModalDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'fullscreen']);

export default function Modal({
  ripple,
  id,
  size = 'md',
  scrollable,
  backdrop = true,
  title,
  open,
  header,
  footer,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs } = useRipple({ ripple });
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const titleId = `${id}-title`;

  useModalDemoCode(
    {
      ripple,
      id,
      size: resolvedSize,
      scrollable,
      backdrop,
      title,
      open,
    },
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['modal'];
    if (resolvedSize === 'sm') classes.push('modal_sm');
    if (resolvedSize === 'lg') classes.push('modal_lg');
    if (resolvedSize === 'fullscreen') classes.push('modal_fullscreen');
    if (scrollable) classes.push('modal_scrollable');
    if (open) classes.push('is-open');
    return classes;
  }, [resolvedSize, scrollable, open]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const showHeader = Boolean(header || title);

  return (
    <div
      ref={rootRef}
      id={id}
      className={cn(rootClass, className)}
      data-modal=""
      data-modal-backdrop={backdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      hidden={!open || undefined}
      {...domRest}
    >
      <div className="modal_backdrop" data-modal-close="" aria-hidden="true" />
      <div className="modal_dialog">
        {showHeader ? (
          <div className="modal_header" data-demo-slot="header">
            {header ?? (
              <h2 className="modal_title" id={titleId}>
                {title}
              </h2>
            )}
            <Button
              variant="ghost"
              iconOnly
              className="modal_close"
              data-modal-close=""
              ariaLabel="닫기"
              iconBefore={<Icon name="close" size="sm" className="modal_close-icon" />}
              {...rippleAttrs}
            />
          </div>
        ) : null}
        <div className="modal_body" data-demo-slot="default">
          {children}
        </div>
        {footer ? (
          <div className="modal_footer" data-demo-slot="footer">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
