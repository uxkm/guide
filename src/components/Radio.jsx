import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('Radio', {
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

export default function Radio({
  ripple,
  label,
  name,
  checked,
  defaultChecked,
  disabled,
  value,
  labelEnd,
  button,
  ariaLabel,
  children,
  className,
  onChange,
  id,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple }, { defaultEnabled: false });
  const rootRef = useRef(null);

  const labelContent = children ?? label;
  const hasLabel = Boolean(label) || (children != null && children !== '');
  const isStandalone = !hasLabel;

  const interactiveRippleAttrs = useMemo(() => {
    if (ripple === false) return { 'data-ripple': 'false' };
    if (ripple === true || isStandalone || button) {
      return { 'data-ripple': 'true' };
    }
    return {};
  }, [ripple, isStandalone, button]);

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      label,
      name,
      checked,
      disabled,
      value,
      labelEnd,
      button,
      ariaLabel,
    },
    createDemoSlots({ default: labelContent }),
    rootRef,
    { className, id, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['radio'];
    if (labelEnd) classes.push('radio_label-end');
    if (button) classes.push('radio_button');
    return classes;
  }, [labelEnd, button]);

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

  const inputEl = (
    <input
      id={id}
      type="radio"
      className="radio_input"
      name={name}
      value={value}
      disabled={disabled}
      {...inputCheckedProps}
      {...domRest}
    />
  );

  if (isStandalone) {
    return (
      <label
        ref={rootRef}
        className={cn('radio_control', className)}
        aria-label={ariaLabel}
        {...interactiveRippleAttrs}
      >
        {inputEl}
        <span className="radio_box" aria-hidden="true" />
      </label>
    );
  }

  if (button) {
    return (
      <label
        ref={rootRef}
        className={cn(rootClass, className)}
        {...interactiveRippleAttrs}
      >
        {inputEl}
        <span className="radio_label">{labelContent}</span>
      </label>
    );
  }

  return (
    <label ref={rootRef} className={cn(rootClass, className)} {...rippleAttrs}>
      {labelEnd ? <span className="radio_label">{labelContent}</span> : null}
      <span className="radio_control">
        {inputEl}
        <span className="radio_box" aria-hidden="true" />
      </span>
      {!labelEnd ? <span className="radio_label">{labelContent}</span> : null}
    </label>
  );
}
