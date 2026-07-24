import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Calendar from '@/components/Calendar.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';

const formatCode = createComponentFormatter('CalendarWheel', {
  booleanProps: new Set(['shadow', 'borderless', 'footer', 'toolbar']),
  selfClosing: false,
});

export default function CalendarWheel({
  title,
  shadow,
  borderless,
  footer = false,
  toolbar = true,
  cancelLabel,
  confirmLabel,
  ariaLabel,
  toolbarContent,
  footerContent,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    {
      title,
      shadow,
      borderless,
      footer,
      toolbar,
      cancelLabel,
      confirmLabel,
      ariaLabel,
    },
    createDemoSlots({
      default: children,
      toolbar: toolbarContent,
      footer: footerContent,
    }),
    rootRef,
    { className, ...rest },
  );

  const showToolbar = Boolean(toolbar && (toolbarContent || title || cancelLabel || confirmLabel));
  const showFooter = Boolean(footer || footerContent);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const defaultToolbar = (
    <>
      {cancelLabel ? <Button variant="text" size="sm" label={cancelLabel} /> : null}
      {title ? <span className="calendar_wheel-title">{title}</span> : null}
      {confirmLabel ? (
        <Button variant="text" color="primary" size="sm" label={confirmLabel} />
      ) : null}
    </>
  );

  return (
    <Calendar
      ref={rootRef}
      wheel
      shadow={shadow}
      borderless={borderless}
      role="group"
      ariaLabel={ariaLabel}
      className={className}
      {...domRest}
    >
      {showToolbar ? (
        <div className="calendar_wheel-toolbar" data-demo-slot="toolbar">
          {toolbarContent ?? defaultToolbar}
        </div>
      ) : null}
      <div className="calendar_wheel-body">
        <div className="calendar_wheel-highlight" aria-hidden="true" />
        <div className="calendar_wheel-columns">{children}</div>
        <div className="calendar_wheel-fade" aria-hidden="true" />
      </div>
      {showFooter ? (
        <div className="calendar_wheel-footer" data-demo-slot="footer">
          {footerContent}
        </div>
      ) : null}
    </Calendar>
  );
}
