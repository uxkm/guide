'use client';

import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useButtonDemoCode } from '@/hooks/useDemoCode';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';

const VALID_VARIANTS = new Set(['filled', 'outline', 'ghost', 'text', 'select']);
const VALID_COLORS = new Set(['primary', 'default', 'success', 'warning', 'danger', 'muted']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_TAGS = new Set(['button', 'a', 'div']);

function isAriaTrue(value) {
  return value === true || value === 'true';
}

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
  selectCaret = false,
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
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled';
  const resolvedColor = VALID_COLORS.has(color) ? color : 'primary';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedTag = VALID_TAGS.has(tag) ? tag : 'button';
  const resolvedGrow = grow === true || grow === '2' ? grow : false;

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
      variant: resolvedVariant,
      color: resolvedColor,
      size: resolvedSize,
      round,
      vertical,
      iconOnly,
      block,
      grow: resolvedGrow,
      fit,
      disabled,
      ariaDisabled,
      loading,
      open,
      error,
      placeholder,
      selectText,
      selectCaret,
      label,
      ariaLabel,
      type,
      haspopup,
      expanded,
      invalid,
      tag: resolvedTag,
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

  const normalizedDomRest = normalizeDomProps(restForDom);
  const {
    'aria-label': domAriaLabel,
    'aria-disabled': domAriaDisabled,
    'aria-busy': domAriaBusy,
    'aria-haspopup': domAriaHaspopup,
    'aria-expanded': domAriaExpanded,
    'aria-invalid': domAriaInvalid,
    ...domRest
  } = normalizedDomRest;
  const resolvedAriaDisabled = ariaDisabled ?? domAriaDisabled;

  const btnClass = useMemo(() => {
    const classes = ['btn'];

    if (resolvedVariant === 'select') {
      classes.push('btn_select');
      if (selectText) classes.push('btn_select-text');
      if (placeholder) classes.push('btn_select-placeholder');
    } else {
      classes.push(`btn_${resolvedVariant}`);
    }

    if (resolvedVariant === 'text') {
      classes.push('color_primary');
      if (resolvedColor !== 'primary') classes.push(`color_${resolvedColor}`);
    } else if (resolvedVariant !== 'ghost' && resolvedColor) {
      classes.push(`color_${resolvedColor}`);
    }

    if (resolvedSize === 'sm') classes.push('btn_sm');
    if (resolvedSize === 'lg') classes.push('btn_lg');
    if (round) classes.push('btn_round');
    if (vertical) classes.push('btn_vertical');
    if (iconOnly) classes.push('btn_icon-only');
    if (block) classes.push('btn_block');
    if (resolvedGrow === true) classes.push('btn_grow');
    if (resolvedGrow === '2') classes.push('btn_grow-2');
    if (fit) classes.push('btn_fit');
    if (isAriaTrue(resolvedAriaDisabled)) classes.push('is-disabled');
    if (loading) classes.push('is-loading');
    if (open) classes.push('is-open');
    if (error) classes.push('is-error');

    return classes;
  }, [
    resolvedVariant,
    resolvedColor,
    resolvedSize,
    round,
    vertical,
    iconOnly,
    block,
    resolvedGrow,
    fit,
    resolvedAriaDisabled,
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

    if (resolvedTag === 'div') return 'button';

    if (resolvedTag === 'a') {
      if (resolvedHref) return undefined;
      return 'button';
    }

    return undefined;
  }, [role, fallthroughRole, resolvedTag, resolvedHref]);

  const isNativeButton = resolvedTag === 'button';
  const isNativeLink = resolvedTag === 'a' && Boolean(resolvedHref);
  const isDisabled = Boolean(disabled || isAriaTrue(resolvedAriaDisabled));
  const isInteractionBlocked = isDisabled || loading;
  const needsTabIndex = resolvedTag === 'div' || (resolvedTag === 'a' && !isNativeLink);

  const rootTabIndex = useMemo(() => {
    const explicit = tabindex ?? fallthroughTabIndex ?? fallthroughTabindexKebab;
    if (explicit != null && explicit !== '') {
      const numericTabIndex = Number(explicit);
      if (Number.isFinite(numericTabIndex)) return numericTabIndex;
    }
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
    if (isNativeButton && disabled && !isAriaTrue(resolvedAriaDisabled)) return undefined;
    return isDisabled ? 'true' : undefined;
  }, [isNativeButton, disabled, resolvedAriaDisabled, isDisabled]);

  const ariaExpandedAttr =
    expanded !== undefined
      ? String(expanded)
      : open
        ? 'true'
        : domAriaExpanded;
  const activatesWithSpace = resolvedRole !== 'link';

  function handleKeyDown(event) {
    onKeyDown?.(event);
    if (!needsTabIndex || isInteractionBlocked) return;

    const isEnter = event.key === 'Enter';
    const isSpace = event.key === ' ';

    if (!isEnter && !(activatesWithSpace && isSpace)) return;

    if (isSpace) event.preventDefault();
    event.currentTarget.click();
  }

  function handleClick(event) {
    if (isInteractionBlocked) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  const Tag = resolvedTag;

  return (
    <Tag
      ref={setButtonRef}
      className={cn(btnClass, className)}
      type={isNativeButton ? type : undefined}
      href={resolvedTag === 'a' ? resolvedHref : undefined}
      disabled={
        isNativeButton
          ? Boolean(disabled && !isAriaTrue(resolvedAriaDisabled))
          : undefined
      }
      role={resolvedRole}
      tabIndex={rootTabIndex}
      {...domRest}
      aria-label={ariaLabel ?? domAriaLabel}
      aria-disabled={ariaDisabledAttr}
      aria-busy={loading ? 'true' : domAriaBusy}
      aria-haspopup={haspopup ?? domAriaHaspopup}
      aria-expanded={ariaExpandedAttr}
      aria-invalid={invalid || error ? 'true' : domAriaInvalid}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      {...rippleAttrs}
    >
      {loading ? <span className="btn_spinner" aria-hidden="true" /> : null}
      {resolvedIconBefore}
      {showLabel ? <span className="btn_label">{labelContent}</span> : null}
      {iconAfter}
      {resolvedVariant === 'select' || selectCaret ? (
        <Icon name="chevron-down" className="btn_select-caret" aria-hidden="true" />
      ) : null}
    </Tag>
  );
}
