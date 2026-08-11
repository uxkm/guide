import type { ElementType, KeyboardEvent, MouseEvent, ReactNode } from 'react';

type ButtonReferenceProps = {
  variant?: 'filled' | 'outline' | 'ghost' | 'text' | 'select';
  color?: 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  iconOnly?: boolean;
  vertical?: boolean;
  round?: boolean;
  block?: boolean;
  grow?: boolean | '2';
  fit?: boolean;
  loading?: boolean;
  open?: boolean;
  error?: boolean;
  placeholder?: boolean;
  selectText?: boolean;
  disabled?: boolean;
  ariaDisabled?: boolean;
  ariaLabel?: string;
  haspopup?: boolean | 'listbox' | 'menu' | 'dialog';
  invalid?: boolean;
  tag?: 'button' | 'a' | 'div';
  href?: string;
  role?: string;
};

const iconPaths: Record<string, ReactNode> = {
  plus: <><path d="M12 5v14M5 12h14" /></>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></>,
  trash: <><path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  warning: <><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 9v4m0 3h.01" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  edit: <><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M10 21v-7h4v7" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  grid: <><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></>,
  cart: <><path d="M3 4h2l2 11h10l3-8H6" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v7H4V6h7" /></>,
  refresh: <><path d="M20 7v5h-5" /><path d="M19 12a7 7 0 1 0-2 5" /></>,
  book: <><path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z" /><path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z" /></>
};

export function DemoIcon({ name }: { name: string }) {
  return <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">{iconPaths[name] ?? iconPaths.plus}</svg>;
}

export function ButtonReference({
  variant = 'filled', color = 'primary', size = 'md', label, iconBefore, iconAfter,
  iconOnly, vertical, round, block, grow, fit, loading, open, error, placeholder,
  selectText, disabled, ariaDisabled, ariaLabel, haspopup, invalid, tag = 'button',
  href, role
}: ButtonReferenceProps) {
  const Tag = tag as ElementType;
  const inactive = Boolean(disabled || ariaDisabled || loading);
  const classes = [
    'btn', variant === 'select' ? 'btn_select' : `btn_${variant}`,
    variant !== 'ghost' ? `color_${color}` : '', size !== 'md' ? `btn_${size}` : '',
    selectText ? 'btn_select-text' : '', placeholder ? 'btn_select-placeholder' : '',
    iconOnly ? 'btn_icon-only' : '', vertical ? 'btn_vertical' : '', round ? 'btn_round' : '',
    block ? 'btn_block' : '', grow === true ? 'btn_grow' : '', grow === '2' ? 'btn_grow-2' : '',
    fit ? 'btn_fit' : '', ariaDisabled ? 'is-disabled' : '', loading ? 'is-loading' : '',
    open ? 'is-open' : '', error ? 'is-error' : ''
  ].filter(Boolean).join(' ');

  function activate(event: KeyboardEvent | MouseEvent) {
    if (!inactive) return;
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <Tag
      className={classes}
      type={tag === 'button' ? 'button' : undefined}
      href={tag === 'a' ? href : undefined}
      disabled={tag === 'button' ? disabled : undefined}
      role={role ?? (tag === 'div' || (tag === 'a' && !href) ? 'button' : undefined)}
      tabIndex={tag === 'div' || (tag === 'a' && !href) ? (inactive ? -1 : 0) : undefined}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled || (tag !== 'button' && disabled) ? 'true' : undefined}
      aria-busy={loading ? 'true' : undefined}
      aria-haspopup={haspopup}
      aria-expanded={open ? 'true' : undefined}
      aria-invalid={invalid || error ? 'true' : undefined}
      onClick={activate}
    >
      {loading ? <span className="btn_spinner" aria-hidden="true" /> : null}
      {iconBefore}
      {!iconOnly ? <span className="btn_label">{label}</span> : null}
      {iconAfter}
      {variant === 'select' ? <DemoIcon name="chevron" /> : null}
    </Tag>
  );
}

export function DemoRow({ children, equal = false, align }: { children: ReactNode; equal?: boolean; align?: 'start' | 'center' | 'end' }) {
  return <div className={equal ? 'btn_row-equal' : `btn_row btn_row-wrap${align ? ` btn_row-${align}` : ''}`}>{children}</div>;
}
