import { useMemo, useRef } from 'react';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { cn } from '@/utils/cn';

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
      size,
      role,
    },
    { default: () => children, header: header ? () => header : undefined, weekdays: weekdays ? () => weekdays : undefined, footer: footer ? () => footer : undefined },
    rootRef,
    { className, ...rest },
    { when: (p) => !p.wheel },
  );

  const rootClass = useMemo(() => {
    return cn(
      'calendar',
      noHeader && 'calendar_no-header',
      minimal && 'calendar_minimal',
      compact && 'calendar_compact',
      borderless && 'calendar_borderless',
      shadow && 'calendar_shadow',
      ghost && 'calendar_ghost',
      week && 'calendar_week',
      readonly && 'calendar_readonly',
      disabled && 'is-disabled',
      weekends && 'calendar_weekends',
      agenda && 'calendar_agenda',
      wheel && 'calendar_wheel',
      size === 'sm' && 'calendar_sm',
      size === 'lg' && 'calendar_lg',
      className,
    );
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
    size,
    className,
  ]);

  const defaultHeader =
    title && !noHeader && !minimal ? (
      <div className="calendar_header">
        <span className="calendar_title">{title}</span>
      </div>
    ) : null;

  return (
    <div
      ref={rootRef}
      className={rootClass}
      role={role}
      aria-label={ariaLabel}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {header ?? defaultHeader}
      {weekdays}
      {children}
      {footer}
    </div>
  );
}
