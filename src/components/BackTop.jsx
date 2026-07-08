import { useEffect, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { initBackTop } from '@/legacy/back-top-init';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('BackTop', {
  defaults: { visibilityHeight: 400, size: 'md', ariaLabel: '맨 위로', interactive: true },
  booleanProps: new Set(['interactive', 'ripple']),
  selfClosing: false,
});

export default function BackTop({
  ripple,
  target,
  visibilityHeight = 400,
  size = 'md',
  color = '',
  label,
  ariaLabel = '맨 위로',
  interactive = true,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { ripple, target, visibilityHeight, size, color, label, ariaLabel, interactive };
  const { rippleAttrs } = useRipple(props);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    const cleanup = initBackTop(rootRef.current);
    return () => cleanup?.();
  }, [interactive]);

  const rootClass = cn(
    'back_top',
    size === 'sm' && 'back_top_sm',
    size === 'lg' && 'back_top_lg',
    color === 'primary' && 'back_top_primary',
    color === 'ghost' && 'back_top_ghost',
    className,
  );

  const rootAttrs = {};
  if (interactive) rootAttrs['data-back-top'] = '';
  if (target) rootAttrs['data-target'] = target;
  if (visibilityHeight !== 400) {
    rootAttrs['data-visibility-height'] = String(visibilityHeight);
  }

  return (
    <div ref={rootRef} className={rootClass} {...rootAttrs} {...rest}>
      <Button variant="ghost" className="back_top_btn" aria-label={ariaLabel} {...rippleAttrs}>
        {children ?? (
          <>
            <Icon name="arrow-up" className="back_top_icon" />
            {label ? <span className="back_top_label">{label}</span> : null}
          </>
        )}
      </Button>
    </div>
  );
}
