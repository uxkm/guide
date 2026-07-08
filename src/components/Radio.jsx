import { useId, useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { getCheckedInputProps } from '@/utils/checked-input-props';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Radio', {
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'button', 'ripple']),
  selfClosing: true,
});

export default function Radio({
  ripple,
  label,
  name,
  checked = false,
  disabled = false,
  value,
  labelEnd = false,
  button = false,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const props = { ripple, label, name, checked, disabled, value, labelEnd, button, ariaLabel };
  useRipple(props, { defaultEnabled: false });
  const rootRef = useRef(null);
  const inputId = useId();
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label }),
    [children, label],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const hasLabel = Boolean(label || children);
  const isStandalone = !hasLabel;

  const interactiveRippleAttrs =
    ripple === false
      ? { 'data-ripple': 'false' }
      : ripple === true || isStandalone || button
        ? { 'data-ripple': 'true' }
        : {};

  const { rippleAttrs } = useRipple(props);

  const rootClass = cn(
    'radio',
    labelEnd && 'radio_label-end',
    button && 'radio_button',
    className,
  );

  const inputProps = getCheckedInputProps(checked, rest);

  if (isStandalone) {
    return (
      <label
        ref={rootRef}
        {...interactiveRippleAttrs}
        className="radio_control"
        aria-label={ariaLabel}
      >
        <input
          type="radio"
          className="radio_input"
          name={name}
          value={value}
          disabled={disabled}
          {...inputProps}
        />
        <span className="radio_box" aria-hidden="true" />
      </label>
    );
  }

  if (button) {
    return (
      <label ref={rootRef} {...interactiveRippleAttrs} className={rootClass}>
        <input
          id={inputId}
          type="radio"
          className="radio_input"
          name={name}
          value={value}
          disabled={disabled}
          {...inputProps}
        />
        <span className="radio_label">{children ?? label}</span>
      </label>
    );
  }

  return (
    <div ref={rootRef} {...rippleAttrs} className={rootClass}>
      {labelEnd && (
        <label className="radio_label" htmlFor={inputId}>
          {children ?? label}
        </label>
      )}
      <span className="radio_control">
        <input
          id={inputId}
          type="radio"
          className="radio_input"
          name={name}
          value={value}
          disabled={disabled}
          {...inputProps}
        />
        <span className="radio_box" aria-hidden="true" />
      </span>
      {!labelEnd && (
        <label className="radio_label" htmlFor={inputId}>
          {children ?? label}
        </label>
      )}
    </div>
  );
}
