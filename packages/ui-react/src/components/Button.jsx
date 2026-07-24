import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useButtonDemoCode } from '@/hooks/useDemoCode';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';

export default function Button({
  ref,
  ripple,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  round,
  vertical,
  iconOnly,
  block,
  grow = false,
  fit,
  disabled,
  ariaDisabled,
  loading,
  open,
  error,
  placeholder,
  selectText,
  label,
  ariaLabel,
  type = 'button',
  haspopup,
  expanded,
  invalid,
  tag = 'button',
  href,
  role,
  tabindex,
  iconBefore,
  iconAfter,
  children,
  className,
  onClick,
  onKeyDown,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const buttonRef = useRef(null);

  function setButtonRef(node) {
    buttonRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref && typeof ref === 'object') ref.current = node;
  }

  const resolvedIconBefore = iconBefore ?? (iconOnly ? children : null);
  const labelContent = iconOnly ? null : (children ?? label);
  const showLabel = !iconOnly && labelContent != null && labelContent !== '';

  useButtonDemoCode(
    {
      ripple,
      variant,
      color,
      size,
      round,
      vertical,
      iconOnly,
      block,
      grow,
      fit,
      disabled,
      ariaDisabled,
      loading,
      open,
      error,
      placeholder,
      selectText,
      label,
      ariaLabel,
      type,
      haspopup,
      expanded,
      invalid,
      tag,
      href,
      role,
      tabindex,
    },
    {
      default: () => (showLabel ? labelContent : undefined),
      'icon-before': resolvedIconBefore ? () => resolvedIconBefore : undefined,
      'icon-after': iconAfter ? () => iconAfter : undefined,
    },
    buttonRef,
    { className, onClick, ...rest },
  );

  const {
    href: fallthroughHref,
    role: fallthroughRole,
    tabIndex: fallthroughTabIndex,
    tabindex: fallthroughTabindexKebab,
    onClick: _ignoredClick,
    ...restForDom
  } = rest;

  const btnClass = useMemo(() => {
    const classes = ['btn'];

    if (variant === 'select') {
      classes.push('btn_select');
      if (selectText) classes.push('btn_select-text');
      if (placeholder) classes.push('btn_select-placeholder');
    } else {
      classes.push(`btn_${variant}`);
    }

    if (variant === 'text') {
      classes.push('color_primary');
      if (color !== 'primary') classes.push(`color_${color}`);
    } else if (variant !== 'ghost' && color) {
      classes.push(`color_${color}`);
    }

    if (size === 'sm') classes.push('btn_sm');
    if (size === 'lg') classes.push('btn_lg');
    if (round) classes.push('btn_round');
    if (vertical) classes.push('btn_vertical');
    if (iconOnly) classes.push('btn_icon-only');
    if (block) classes.push('btn_block');
    if (grow === true) classes.push('btn_grow');
    if (grow === '2') classes.push('btn_grow-2');
    if (fit) classes.push('btn_fit');
    if (ariaDisabled) classes.push('is-disabled');
    if (loading) classes.push('is-loading');
    if (open) classes.push('is-open');
    if (error) classes.push('is-error');

    return classes;
  }, [
    variant,
    color,
    size,
    round,
    vertical,
    iconOnly,
    block,
    grow,
    fit,
    ariaDisabled,
    loading,
    open,
    error,
    placeholder,
    selectText,
  ]);

  const resolvedHref = useMemo(() => {
    const hrefValue = href ?? fallthroughHref;
    return hrefValue != null && hrefValue !== '' ? String(hrefValue) : undefined;
  }, [href, fallthroughHref]);

  const resolvedRole = useMemo(() => {
    if (role) return role;
    if (typeof fallthroughRole === 'string' && fallthroughRole) return fallthroughRole;

    if (tag === 'div') return 'button';

    if (tag === 'a') {
      if (resolvedHref) return undefined;
      return 'button';
    }

    return undefined;
  }, [role, fallthroughRole, tag, resolvedHref]);

  const isNativeButton = tag === 'button';
  const isNativeLink = tag === 'a' && Boolean(resolvedHref);
  const isDisabled = disabled || ariaDisabled;
  const needsTabIndex = tag === 'div' || (tag === 'a' && !isNativeLink);

  const rootTabIndex = useMemo(() => {
    const explicit = tabindex ?? fallthroughTabIndex ?? fallthroughTabindexKebab;
    if (explicit != null && explicit !== '') return Number(explicit);
    if (isNativeButton || isNativeLink) return isDisabled ? -1 : undefined;
    if (needsTabIndex) return isDisabled ? -1 : 0;
    return undefined;
  }, [
    tabindex,
    fallthroughTabIndex,
    fallthroughTabindexKebab,
    isNativeButton,
    isNativeLink,
    isDisabled,
    needsTabIndex,
  ]);

  const ariaDisabledAttr = useMemo(() => {
    if (isNativeButton && disabled && !ariaDisabled) return undefined;
    return isDisabled ? 'true' : undefined;
  }, [isNativeButton, disabled, ariaDisabled, isDisabled]);

  const ariaExpandedAttr =
    expanded !== undefined ? String(expanded) : open ? 'true' : undefined;
  const activatesWithSpace = resolvedRole !== 'link';

  function handleKeyDown(event) {
    onKeyDown?.(event);
    if (!needsTabIndex || isDisabled) return;

    const isEnter = event.key === 'Enter';
    const isSpace = event.key === ' ';

    if (!isEnter && !(activatesWithSpace && isSpace)) return;

    if (isSpace) event.preventDefault();
    event.currentTarget.click();
  }

  function handleClick(event) {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  const Tag = tag;
  const domRest = normalizeDomProps(restForDom);

  return (
    <Tag
      ref={setButtonRef}
      className={cn(btnClass, className)}
      type={isNativeButton ? type : undefined}
      href={tag === 'a' ? resolvedHref : undefined}
      disabled={isNativeButton ? disabled && !ariaDisabled : undefined}
      role={resolvedRole}
      tabIndex={rootTabIndex}
      {...domRest}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabledAttr}
      aria-busy={loading ? 'true' : undefined}
      aria-haspopup={haspopup}
      aria-expanded={ariaExpandedAttr}
      aria-invalid={invalid || error ? 'true' : undefined}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      {...rippleAttrs}
    >
      {loading ? <span className="btn_spinner" aria-hidden="true" /> : null}
      {resolvedIconBefore}
      {showLabel ? <span className="btn_label">{labelContent}</span> : null}
      {iconAfter}
      {variant === 'select' ? (
        <Icon name="chevron-down" className="btn_select-caret" aria-hidden="true" />
      ) : null}
    </Tag>
  );
}
