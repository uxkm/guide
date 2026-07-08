import { useEffect, useId, useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { getCheckedInputProps } from '@/utils/checked-input-props';
import { useRipple } from '@/hooks/useRipple';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Checkbox', {
  booleanProps: new Set(['checked', 'disabled', 'indeterminate', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

export default function Checkbox({
  ripple,
  label,
  checked,
  disabled,
  indeterminate,
  labelEnd,
  button,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const inputId = useId();
  const props = { ripple, label, checked, disabled, indeterminate, labelEnd, button, ariaLabel };
  const { rippleAttrs } = useRipple(props, { defaultEnabled: false });
  const demoSlots = useMemo(() => createDemoSlots({ default: children ?? label }), [children, label]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const hasLabel = Boolean(label || children);
  const isStandalone = !hasLabel;

  const interactiveRippleAttrs = useMemo(() => {
    if (ripple === false) return { 'data-ripple': 'false' };
    if (ripple === true || isStandalone || button) {
      return { 'data-ripple': 'true' };
    }
    return {};
  }, [ripple, isStandalone, button]);

  const rootClass = cn(
    'checkbox',
    labelEnd && 'checkbox_label-end',
    button && 'checkbox_button',
    className,
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  const inputProps = getCheckedInputProps(checked, rest);

  if (isStandalone) {
    return (
      <label
        ref={rootRef}
        {...interactiveRippleAttrs}
        className="checkbox_control"
        aria-label={ariaLabel}
      >
        <input
          ref={inputRef}
          type="checkbox"
          className="checkbox_input"
          disabled={disabled}
          {...inputProps}
        />
        <span className="checkbox_box" aria-hidden="true" />
      </label>
    );
  }

  if (button) {
    return (
      <label ref={rootRef} {...interactiveRippleAttrs} className={rootClass}>
        <input
          id={inputId}
          ref={inputRef}
          type="checkbox"
          className="checkbox_input"
          disabled={disabled}
          {...inputProps}
        />
        <span className="checkbox_label">{children ?? label}</span>
      </label>
    );
  }

  return (
    <div ref={rootRef} {...rippleAttrs} className={rootClass}>
      {labelEnd ? (
        <label className="checkbox_label" htmlFor={inputId}>
          {children ?? label}
        </label>
      ) : null}
      <span className="checkbox_control">
        <input
          id={inputId}
          ref={inputRef}
          type="checkbox"
          className="checkbox_input"
          disabled={disabled}
          {...inputProps}
        />
        <span className="checkbox_box" aria-hidden="true" />
      </span>
      {!labelEnd ? (
        <label className="checkbox_label" htmlFor={inputId}>
          {children ?? label}
        </label>
      ) : null}
    </div>
  );
}
