import { useEffect, useId, useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('Checkbox', {
  booleanProps: new Set(['checked', 'disabled', 'indeterminate', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

export default function Checkbox({
  ripple,
  label,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
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
  const inputRef = useRef(null);
  const generatedId = useId();
  const inputId = id ?? generatedId;

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
      checked,
      disabled,
      indeterminate,
      labelEnd,
      button,
      ariaLabel,
    },
    createDemoSlots({ default: labelContent }),
    rootRef,
    { className, id, onChange, ...rest },
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  const rootClass = useMemo(() => {
    const classes = ['checkbox'];
    if (labelEnd) classes.push('checkbox_label-end');
    if (button) classes.push('checkbox_button');
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

  const inputProps = {
    ref: inputRef,
    type: 'checkbox',
    className: 'checkbox_input',
    disabled,
    id: isStandalone ? id : inputId,
    ...inputCheckedProps,
    ...domRest,
  };

  if (isStandalone) {
    return (
      <label
        ref={rootRef}
        className={cn('checkbox_control', className)}
        aria-label={ariaLabel}
        {...interactiveRippleAttrs}
      >
        <input {...inputProps} />
        <span className="checkbox_box" aria-hidden="true" />
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
        <input {...inputProps} />
        <span className="checkbox_label">{labelContent}</span>
      </label>
    );
  }

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...rippleAttrs}>
      {labelEnd ? (
        <label className="checkbox_label" htmlFor={inputId}>
          {labelContent}
        </label>
      ) : null}
      <span className="checkbox_control">
        <input {...inputProps} />
        <span className="checkbox_box" aria-hidden="true" />
      </span>
      {!labelEnd ? (
        <label className="checkbox_label" htmlFor={inputId}>
          {labelContent}
        </label>
      ) : null}
    </div>
  );
}
