import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useUploadDemoCode } from '@/hooks/useDemoCode';

export default function Upload({
  ripple,
  variant = 'button',
  disabled = false,
  fit = false,
  size = 'md',
  multiple = false,
  accept,
  inputId,
  hint,
  dragover = false,
  error = false,
  trigger,
  hintSlot,
  cards,
  children,
  className,
  ...rest
}) {
  const props = {
    ripple,
    variant,
    disabled,
    fit,
    size,
    multiple,
    accept,
    inputId,
    hint,
    dragover,
    error,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, trigger, hint: hintSlot, cards }),
    [children, trigger, hintSlot, cards],
  );

  useUploadDemoCode(props, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'upload',
    fit && 'upload_fit',
    size === 'sm' && 'upload_sm',
    size === 'lg' && 'upload_lg',
    disabled && 'is-disabled',
    className,
  );

  const triggerClass = cn(
    variant === 'drag' && ['upload_dropzone', dragover && 'is-dragover', error && 'is-error'].filter(Boolean),
    variant === 'picture-card' && ['upload_card', 'upload_card-trigger'],
    variant === 'avatar' && 'upload_avatar',
    variant !== 'drag' && variant !== 'picture-card' && variant !== 'avatar' && 'upload_trigger',
  );

  return (
    <div ref={rootRef} {...rippleAttrs} className={rootClass}>
      {variant !== 'list' && (
        <label {...childRippleAttrs} className={triggerClass} data-demo-slot="trigger">
          <input
            id={inputId}
            type="file"
            className="upload_input"
            tabIndex={-1}
            disabled={disabled}
            multiple={multiple || undefined}
            accept={accept}
            aria-invalid={error ? 'true' : undefined}
          />
          {trigger}
        </label>
      )}

      {(variant === 'button' || variant === 'drag') && (
        <div data-demo-slot="hint">
          {hintSlot ?? (hint && <p className="upload_hint">{hint}</p>)}
        </div>
      )}

      {(variant === 'list' || children) && <div data-demo-slot="default">{children}</div>}

      {variant === 'picture-card' && (
        <div className="upload_cards" data-demo-slot="cards">
          {cards}
        </div>
      )}
    </div>
  );
}
