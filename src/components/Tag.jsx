import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { useMemo, useRef } from 'react';

const formatCode = createComponentFormatter('Tag', {
  defaults: { color: 'primary', variant: 'filled', size: 'md' },
  booleanProps: new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'ripple']),
});

export default function Tag({
  ripple,
  color = 'primary',
  variant = 'filled',
  size = 'md',
  round = false,
  checkable = false,
  add = false,
  closable = false,
  selected = false,
  disabled = false,
  label,
  href,
  closeLabel,
  icon,
  children,
  className,
  onClose,
  ...rest
}) {
  const props = {
    ripple,
    color,
    variant,
    size,
    round,
    checkable,
    add,
    closable,
    selected,
    disabled,
    label,
    href,
    closeLabel,
  };
  const { childRippleAttrs } = useRipple(props, { defaultEnabled: false });
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label, icon }),
    [children, label, icon],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const needsClosableSplit = closable && (checkable || add || Boolean(href));

  const rootRippleAttrs =
    ripple === false
      ? { 'data-ripple': 'false' }
      : ripple === true || checkable || add || href
        ? { 'data-ripple': 'true' }
        : {};

  const rootClass = cn(
    'tag',
    `color_${color}`,
    variant === 'solid' && 'tag_solid',
    variant === 'outline' && 'tag_outline',
    variant === 'borderless' && 'tag_borderless',
    size === 'sm' && 'tag_sm',
    size === 'lg' && 'tag_lg',
    round && 'tag_round',
    checkable && 'tag_checkable',
    add && 'tag_add',
    selected && 'is-selected',
    disabled && 'is-disabled',
    className,
  );

  const closeButton = closable && (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      iconOnly
      className="tag_close"
      aria-label={closeLabel || `${label} 태그 제거`}
      onClick={(event) => {
        event.stopPropagation();
        onClose?.(event);
      }}
      iconBefore={<Icon name="close" size="sm" />}
    />
  );

  const innerContent = (
    <>
      {icon && (
        <span className="tag_icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children ?? label}
    </>
  );

  if (needsClosableSplit) {
    const ControlTag = checkable || add ? 'button' : 'a';
    return (
      <span ref={rootRef} className={rootClass}>
        <ControlTag
          className="tag_control"
          {...rootRippleAttrs}
          type={ControlTag === 'button' ? 'button' : undefined}
          href={ControlTag === 'a' ? href : undefined}
          disabled={ControlTag === 'button' ? disabled : undefined}
          aria-pressed={checkable ? String(selected) : undefined}
          aria-disabled={ControlTag === 'a' && disabled ? 'true' : undefined}
          tabIndex={ControlTag === 'a' && disabled ? -1 : undefined}
          onClick={ControlTag === 'a' ? (e) => e.preventDefault() : undefined}
        >
          {innerContent}
        </ControlTag>
        {closeButton}
      </span>
    );
  }

  const RootTag = checkable || add ? 'button' : href ? 'a' : 'span';

  return (
    <RootTag
      ref={rootRef}
      {...rootRippleAttrs}
      className={rootClass}
      type={checkable || add ? 'button' : undefined}
      href={href || undefined}
      disabled={disabled || undefined}
      aria-pressed={checkable ? String(selected) : undefined}
      onClick={href ? undefined : (e) => !href && e.preventDefault()}
      {...rest}
    >
      {innerContent}
      {closeButton}
    </RootTag>
  );
}
