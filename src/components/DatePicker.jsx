import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { rippleSurfaceAttrs, useRipple } from '@/hooks/useRipple';
import { useDatePickerDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';

export default function DatePicker({
  ripple,
  size = 'md',
  disabled,
  error,
  success,
  open,
  placeholder,
  value,
  fit,
  block,
  inline,
  clearable,
  panelWide,
  inputId,
  ariaLabel,
  ariaInvalid,
  ariaDescribedby,
  ariaDescribedBy,
  panel,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = {
    ripple,
    size,
    disabled,
    error,
    success,
    open,
    placeholder,
    value,
    fit,
    block,
    inline,
    clearable,
    panelWide,
    inputId,
    ariaLabel,
    ariaInvalid,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });

  useDatePickerDemoCode(props, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'date_picker',
    size === 'sm' && 'date_picker_sm',
    size === 'lg' && 'date_picker_lg',
    fit && 'date_picker_fit',
    block && 'date_picker_block',
    inline && 'date_picker_inline',
    disabled && 'is-disabled',
    error && 'is-error',
    success && 'is-success',
    open && 'is-open',
    className,
  );

  const inputClass = cn(
    'date_picker_input',
    !value && placeholder && 'date_picker_placeholder',
  );

  const showTrigger = !inline;
  const isExpanded = open;
  const hasValue = Boolean(value);

  const resolvedAriaInvalid =
    ariaInvalid === true || ariaInvalid === 'true'
      ? 'true'
      : ariaInvalid === false || ariaInvalid === 'false'
        ? 'false'
        : undefined;

  const domRest = normalizeDomProps(rest);
  const { style, 'aria-describedby': ariaDescribedByFromRest, ...inputDomRest } = domRest;
  const resolvedAriaDescribedBy =
    ariaDescribedBy ?? ariaDescribedby ?? ariaDescribedByFromRest;

  return (
    <div ref={rootRef} className={rootClass} style={style} {...rippleAttrs}>
      {showTrigger ? (
        <div className="date_picker_trigger">
          <input
            {...childRippleAttrs}
            {...inputDomRest}
            id={inputId}
            type="text"
            className={inputClass}
            value={value}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label={ariaLabel}
            aria-describedby={resolvedAriaDescribedBy}
            aria-invalid={resolvedAriaInvalid ?? inputDomRest['aria-invalid']}
          />
          {clearable && hasValue ? (
            <button
              type="button"
              className="date_picker_clear"
              aria-label="날짜 지우기"
              {...rippleSurfaceAttrs}
            >
              <Icon name="close" size="sm" />
            </button>
          ) : null}
          <Button
            {...childRippleAttrs}
            variant="ghost"
            iconOnly
            className="date_picker_btn"
            disabled={disabled}
            aria-label={isExpanded ? '캘린더 닫기' : '캘린더 열기'}
            expanded={isExpanded}
            iconBefore={<Icon name="calendar" size="sm" />}
          />
        </div>
      ) : null}
      {panel || inline ? (
        <div
          className={cn('date_picker_panel', panelWide && 'date_picker_panel-wide')}
          role="dialog"
          aria-label="날짜 선택"
          data-demo-slot="panel"
        >
          {panel}
        </div>
      ) : null}
    </div>
  );
}
