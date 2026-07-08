import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { getCheckedInputProps } from '@/utils/checked-input-props';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Switch', {
  defaults: { size: 'md' },
  booleanProps: new Set(['checked', 'disabled', 'labelEnd', 'ripple']),
  selfClosing: false,
});

export default function Switch({
  ripple,
  label,
  checked = false,
  disabled = false,
  labelEnd = false,
  size = 'md',
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const props = { ripple, label, checked, disabled, labelEnd, size, ariaLabel };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label }),
    [children, label],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const hasLabel = Boolean(label || children);

  const rootClass = cn(
    'switch',
    labelEnd && 'switch_label-end',
    size === 'sm' && 'switch_sm',
    size === 'lg' && 'switch_lg',
    className,
  );

  const inputProps = getCheckedInputProps(checked, rest);

  return (
    <label
      ref={rootRef}
      {...rippleAttrs}
      className={rootClass}
      aria-label={!hasLabel ? ariaLabel : undefined}
    >
      {hasLabel && labelEnd && <span className="switch_label">{children ?? label}</span>}
      <span className="switch_control">
        <input
          type="checkbox"
          className="switch_input"
          role="switch"
          disabled={disabled}
          aria-label={!hasLabel ? ariaLabel : undefined}
          {...inputProps}
        />
        <span className="switch_track" aria-hidden="true">
          <span className="switch_thumb" />
        </span>
      </span>
      {hasLabel && !labelEnd && <span className="switch_label">{children ?? label}</span>}
    </label>
  );
}
