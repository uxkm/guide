import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useUploadDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_VARIANTS = new Set(['button', 'drag', 'list', 'picture-card', 'avatar']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export default function Upload({
  ripple,
  variant = 'button',
  disabled,
  fit,
  size = 'md',
  multiple,
  accept,
  inputId,
  hint,
  dragover,
  error,
  trigger,
  cards,
  children,
  className,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'button';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useUploadDemoCode(
    {
      ripple,
      variant: resolvedVariant,
      disabled,
      fit,
      size: resolvedSize,
      multiple,
      accept,
      inputId,
      hint: typeof hint === 'string' ? hint : undefined,
      dragover,
      error,
    },
    rootRef,
    { className, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['upload'];
    if (fit) classes.push('upload_fit');
    if (resolvedSize === 'sm') classes.push('upload_sm');
    if (resolvedSize === 'lg') classes.push('upload_lg');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [fit, resolvedSize, disabled]);

  const triggerClass = useMemo(() => {
    if (resolvedVariant === 'drag') {
      return cn('upload_dropzone', dragover && 'is-dragover', error && 'is-error');
    }
    if (resolvedVariant === 'picture-card') return 'upload_card upload_card-trigger';
    if (resolvedVariant === 'avatar') return 'upload_avatar';
    return 'upload_trigger';
  }, [resolvedVariant, dragover, error]);

  const {
    class: _ignoredClass,
    onChange: _ignoredOnChange,
    ...restForDom
  } = rest;
  const domRest = normalizeDomProps(restForDom);

  const showTrigger = resolvedVariant !== 'list';
  const showHint = resolvedVariant === 'button' || resolvedVariant === 'drag';
  const showDefault = resolvedVariant === 'list' || children != null;
  const showCards = resolvedVariant === 'picture-card';

  const hintNode =
    typeof hint === 'string' || hint == null
      ? hint
        ? <p className="upload_hint">{hint}</p>
        : null
      : hint;

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...rippleAttrs}>
      {showTrigger ? (
        <label className={triggerClass} data-demo-slot="trigger" {...childRippleAttrs}>
          <input
            id={inputId || undefined}
            type="file"
            className="upload_input"
            tabIndex={-1}
            disabled={disabled}
            multiple={multiple || undefined}
            accept={accept || undefined}
            aria-invalid={error ? 'true' : undefined}
            onChange={onChange}
            {...domRest}
          />
          {trigger}
        </label>
      ) : null}

      {showHint ? <div data-demo-slot="hint">{hintNode}</div> : null}

      {showDefault ? <div data-demo-slot="default">{children}</div> : null}

      {showCards ? (
        <div className="upload_cards" data-demo-slot="cards">
          {cards}
        </div>
      ) : null}
    </div>
  );
}
