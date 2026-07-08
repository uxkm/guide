import { isValidElement, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Calendar from '@/components/Calendar.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('CalendarWheel', {
  booleanProps: new Set(['shadow', 'borderless', 'footer', 'toolbar']),
  selfClosing: false,
});

function resolveToolbar(toolbar) {
  if (toolbar === false) {
    return { enabled: false, content: null };
  }

  if (typeof toolbar === 'boolean' || toolbar == null) {
    return { enabled: true, content: null };
  }

  return { enabled: true, content: toolbar };
}

function resolveFooter(footer) {
  if (footer == null || footer === false) {
    return { enabled: false, content: null };
  }

  if (typeof footer === 'boolean') {
    return { enabled: true, content: null };
  }

  return { enabled: true, content: footer };
}

export default function CalendarWheel({
  title,
  shadow,
  borderless,
  footer,
  toolbar = true,
  cancelLabel,
  confirmLabel,
  ariaLabel,
  children,
}) {
  const rootRef = useRef(null);
  const { enabled: toolbarEnabled, content: toolbarContent } = useMemo(
    () => resolveToolbar(toolbar),
    [toolbar],
  );
  const { enabled: footerEnabled, content: footerContent } = useMemo(
    () => resolveFooter(footer),
    [footer],
  );

  useComponentDemoCode(
    formatCode,
    { title, shadow, borderless, footer, toolbar, cancelLabel, confirmLabel, ariaLabel },
    {
      default: () => children,
      toolbar: toolbarContent ? () => toolbarContent : undefined,
      footer: footerContent ? () => footerContent : undefined,
    },
    rootRef,
    {},
  );

  const showToolbar = useMemo(
    () => toolbarEnabled && (toolbarContent || title || cancelLabel || confirmLabel),
    [toolbarEnabled, toolbarContent, title, cancelLabel, confirmLabel],
  );

  const defaultToolbar = (
    <>
      {cancelLabel ? <Button variant="text" size="sm" label={cancelLabel} /> : null}
      {title ? <span className="calendar_wheel-title">{title}</span> : null}
      {confirmLabel ? (
        <Button variant="text" color="primary" size="sm" label={confirmLabel} />
      ) : null}
    </>
  );

  const resolvedToolbar = isValidElement(toolbarContent) ? toolbarContent : defaultToolbar;

  return (
    <div ref={rootRef} style={{ display: 'contents' }}>
      <Calendar wheel shadow={shadow} borderless={borderless} role="group" ariaLabel={ariaLabel}>
        {showToolbar ? <div className="calendar_wheel-toolbar">{resolvedToolbar}</div> : null}
        <div className="calendar_wheel-body">
          <div className="calendar_wheel-highlight" aria-hidden="true" />
          <div className="calendar_wheel-columns">{children}</div>
          <div className="calendar_wheel-fade" aria-hidden="true" />
        </div>
        {footerEnabled ? <div className="calendar_wheel-footer">{footerContent}</div> : null}
      </Calendar>
    </div>
  );
}
