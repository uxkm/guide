import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useDatePickerDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

function resolveAriaInvalid(ariaInvalid) {
  if (ariaInvalid === true || ariaInvalid === 'true') return 'true';
  if (ariaInvalid === false || ariaInvalid === 'false') return 'false';
  return undefined;
}

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
  panel,
  children,
  className,
  style,
  onClear,
  onCalendarClick,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const panelContent = panel ?? children;
  const showTrigger = !inline;
  const hasValue = Boolean(value);
  const isExpanded = Boolean(open);

  useDatePickerDemoCode(
    {
      ripple,
      size: resolvedSize,
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
    },
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['date_picker'];
    if (resolvedSize === 'sm') classes.push('date_picker_sm');
    if (resolvedSize === 'lg') classes.push('date_picker_lg');
    if (fit) classes.push('date_picker_fit');
    if (block) classes.push('date_picker_block');
    if (inline) classes.push('date_picker_inline');
    if (disabled) classes.push('is-disabled');
    if (error) classes.push('is-error');
    if (success) classes.push('is-success');
    if (open) classes.push('is-open');
    return classes;
  }, [resolvedSize, fit, block, inline, disabled, error, success, open]);

  const inputClass = useMemo(() => {
    const classes = ['date_picker_input'];
    if (!value && placeholder) classes.push('date_picker_placeholder');
    return classes;
  }, [value, placeholder]);

  const {
    class: _ignoredClass,
    style: _ignoredStyle,
    onClear: _ignoredOnClear,
    onCalendarClick: _ignoredOnCalendarClick,
    ...restForDom
  } = rest;
  const domRest = normalizeDomProps(restForDom);

  function handleClear(event) {
    event.preventDefault();
    event.stopPropagation();
    onClear?.(event);
  }

  return (
    <div ref={rootRef} className={cn(rootClass, className)} style={style} {...rippleAttrs}>
      {showTrigger ? (
        <div className="date_picker_trigger">
          <input
            id={inputId}
            type="text"
            className={cn(inputClass)}
            value={value ?? ''}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label={ariaLabel}
            aria-invalid={resolveAriaInvalid(ariaInvalid)}
            {...childRippleAttrs}
            {...domRest}
          />
          {clearable && hasValue ? (
            <button
              type="button"
              className="date_picker_clear"
              data-ripple="surface"
              aria-label="날짜 지우기"
              onClick={handleClear}
            >
              <Icon name="close" size="sm" />
            </button>
          ) : null}
          <Button
            variant="ghost"
            iconOnly
            className="date_picker_btn"
            disabled={disabled}
            ariaLabel={isExpanded ? '캘린더 닫기' : '캘린더 열기'}
            expanded={isExpanded}
            iconBefore={<Icon name="calendar" size="sm" />}
            onClick={onCalendarClick}
            {...childRippleAttrs}
          />
        </div>
      ) : null}
      {panelContent != null || inline ? (
        <div
          className={cn('date_picker_panel', panelWide && 'date_picker_panel-wide')}
          role="dialog"
          aria-label="날짜 선택"
          data-demo-slot="panel"
        >
          {panelContent}
        </div>
      ) : null}
    </div>
  );
}
