import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Switch', {
  defaults: { size: 'md' },
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'ripple']),
  selfClosing: false,
});

export default function Switch({
  ripple,
  label,
  checked,
  defaultChecked,
  disabled,
  labelEnd,
  size = 'md',
  ariaLabel,
  children,
  className,
  onChange,
  id,
  name,
  value,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  const labelContent = children ?? label;
  const hasLabel = Boolean(label) || (children != null && children !== '');

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      label,
      checked,
      disabled,
      labelEnd,
      size: resolvedSize,
      ariaLabel,
    },
    createDemoSlots({ default: labelContent }),
    rootRef,
    { className, id, name, value, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['switch'];
    if (labelEnd) classes.push('switch_label-end');
    if (resolvedSize === 'sm') classes.push('switch_sm');
    if (resolvedSize === 'lg') classes.push('switch_lg');
    return classes;
  }, [labelEnd, resolvedSize]);

  const { class: _ignoredClassAttr, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const inputCheckedProps =
    onChange != null
      ? { checked: Boolean(checked), onChange }
      : checked != null
        ? { defaultChecked: Boolean(checked) }
        : defaultChecked != null
          ? { defaultChecked: Boolean(defaultChecked) }
          : {};

  const resolvedAriaLabel = !hasLabel ? ariaLabel : undefined;

  return (
    <label
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={resolvedAriaLabel}
      {...rippleAttrs}
    >
      {hasLabel && labelEnd ? <span className="switch_label">{labelContent}</span> : null}
      <span className="switch_control">
        <input
          id={id}
          type="checkbox"
          className="switch_input"
          role="switch"
          name={name}
          value={value}
          disabled={disabled}
          aria-label={resolvedAriaLabel}
          {...inputCheckedProps}
          {...domRest}
        />
        <span className="switch_track" aria-hidden="true">
          <span className="switch_thumb" />
        </span>
      </span>
      {hasLabel && !labelEnd ? <span className="switch_label">{labelContent}</span> : null}
    </label>
  );
}
