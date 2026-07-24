import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['', 'sm', 'lg']);

const formatCode = createComponentFormatter('Calendar', {
  defaults: { role: 'application' },
  booleanProps: new Set([
    'noHeader',
    'minimal',
    'compact',
    'borderless',
    'shadow',
    'ghost',
    'week',
    'readonly',
    'disabled',
    'weekends',
    'agenda',
    'wheel',
  ]),
  selfClosing: false,
});

export default function Calendar({
  ref,
  title,
  ariaLabel,
  noHeader,
  minimal,
  compact,
  borderless,
  shadow,
  ghost,
  week,
  readonly,
  disabled,
  weekends,
  agenda,
  wheel,
  size = '',
  role = 'application',
  header,
  weekdays,
  footer,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : '';

  function setRootRef(node) {
    rootRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref && typeof ref === 'object') ref.current = node;
  }

  useComponentDemoCode(
    formatCode,
    {
      title,
      ariaLabel,
      noHeader,
      minimal,
      compact,
      borderless,
      shadow,
      ghost,
      week,
      readonly,
      disabled,
      weekends,
      agenda,
      wheel,
      size: resolvedSize,
      role,
    },
    createDemoSlots({
      default: children,
      header,
      weekdays,
      footer,
    }),
    rootRef,
    { className, ...rest },
    {
      when: (calendarProps) => !calendarProps.wheel,
    },
  );

  const rootClass = useMemo(() => {
    const classes = ['calendar'];
    if (noHeader) classes.push('calendar_no-header');
    if (minimal) classes.push('calendar_minimal');
    if (compact) classes.push('calendar_compact');
    if (borderless) classes.push('calendar_borderless');
    if (shadow) classes.push('calendar_shadow');
    if (ghost) classes.push('calendar_ghost');
    if (week) classes.push('calendar_week');
    if (readonly) classes.push('calendar_readonly');
    if (disabled) classes.push('is-disabled');
    if (weekends) classes.push('calendar_weekends');
    if (agenda) classes.push('calendar_agenda');
    if (wheel) classes.push('calendar_wheel');
    if (resolvedSize === 'sm') classes.push('calendar_sm');
    if (resolvedSize === 'lg') classes.push('calendar_lg');
    return classes;
  }, [
    noHeader,
    minimal,
    compact,
    borderless,
    shadow,
    ghost,
    week,
    readonly,
    disabled,
    weekends,
    agenda,
    wheel,
    resolvedSize,
  ]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const defaultHeader =
    title && !noHeader && !minimal ? (
      <div className="calendar_header">
        <span className="calendar_title">{title}</span>
      </div>
    ) : null;

  return (
    <div
      ref={setRootRef}
      className={cn(rootClass, className)}
      role={role}
      aria-label={ariaLabel}
      aria-disabled={disabled ? 'true' : undefined}
      {...domRest}
    >
      {header !== undefined ? header : defaultHeader}
      {weekdays}
      {children}
      {footer}
    </div>
  );
}
