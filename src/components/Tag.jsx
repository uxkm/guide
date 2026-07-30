import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Tag', {
  defaults: { color: 'primary', variant: 'filled', size: 'md' },
  booleanProps: new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'ripple']),
});

export default function Tag({
  ripple,
  color = 'primary',
  variant = 'filled',
  size = 'md',
  round,
  checkable,
  add,
  closable,
  selected,
  disabled,
  label,
  href,
  closeLabel,
  icon,
  children,
  className,
  onClose,
  onClick,
  ...rest
}) {
  const rootRef = useRef(null);
  const { childRippleAttrs } = useRipple({ ripple }, { defaultEnabled: false });
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  const rootRippleAttrs = useMemo(() => {
    if (ripple === false) return { 'data-ripple': 'false' };
    if (ripple === true || checkable || add || href) {
      return { 'data-ripple': 'true' };
    }
    return {};
  }, [ripple, checkable, add, href]);

  const needsClosableSplit = Boolean(closable && (checkable || add || href));

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      color,
      variant: resolvedVariant,
      size: resolvedSize,
      round,
      checkable,
      add,
      closable,
      selected,
      disabled,
      label,
      href,
      closeLabel,
    },
    createDemoSlots({ default: children, icon }),
    rootRef,
    { className, onClose, onClick, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['tag', `color_${color}`];
    if (resolvedVariant === 'solid') classes.push('tag_solid');
    if (resolvedVariant === 'outline') classes.push('tag_outline');
    if (resolvedVariant === 'borderless') classes.push('tag_borderless');
    if (resolvedSize === 'sm') classes.push('tag_sm');
    if (resolvedSize === 'lg') classes.push('tag_lg');
    if (round) classes.push('tag_round');
    if (checkable) classes.push('tag_checkable');
    if (add) classes.push('tag_add');
    if (selected) classes.push('is-selected');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [color, resolvedVariant, resolvedSize, round, checkable, add, selected, disabled]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const content = (
    <>
      {icon ? (
        <span className="tag_icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children ?? label}
    </>
  );

  const closeButton = closable ? (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      iconOnly
      className="tag_close"
      ariaLabel={closeLabel || `${label ?? ''} 태그 제거`}
      iconBefore={<Icon name="close" size="sm" />}
      onClick={(event) => {
        event.stopPropagation();
        onClose?.(event);
      }}
    />
  ) : null;

  if (needsClosableSplit) {
    const ControlTag = checkable || add ? 'button' : 'a';
    return (
      <span ref={rootRef} className={cn(rootClass, className)} {...domRest}>
        <ControlTag
          className="tag_control"
          {...rootRippleAttrs}
          type={ControlTag === 'button' ? 'button' : undefined}
          href={ControlTag === 'a' ? href : undefined}
          disabled={ControlTag === 'button' ? disabled : undefined}
          aria-pressed={checkable ? String(Boolean(selected)) : undefined}
          aria-disabled={ControlTag === 'a' && disabled ? 'true' : undefined}
          tabIndex={ControlTag === 'a' && disabled ? -1 : undefined}
          onClick={(event) => {
            if (ControlTag === 'a') event.preventDefault();
            onClick?.(event);
          }}
        >
          {content}
        </ControlTag>
        {closeButton}
      </span>
    );
  }

  const RootTag = checkable || add ? 'button' : href ? 'a' : 'span';

  return (
    <RootTag
      ref={rootRef}
      className={cn(rootClass, className)}
      {...rootRippleAttrs}
      type={RootTag === 'button' ? 'button' : undefined}
      href={href || undefined}
      disabled={disabled || undefined}
      aria-pressed={checkable ? String(Boolean(selected)) : undefined}
      onClick={(event) => {
        if (!href && RootTag !== 'button') event.preventDefault();
        onClick?.(event);
      }}
      {...domRest}
    >
      {content}
      {closeButton}
    </RootTag>
  );
}
