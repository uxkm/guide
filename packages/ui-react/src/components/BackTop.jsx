import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { initBackTop } from '@uxkm/ui/legacy/back-top-init.js';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['', 'primary', 'ghost']);

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
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs } = useRipple({ ripple });
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedColor = VALID_COLORS.has(color) ? color : '';
  const teleported = !target;

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      target,
      visibilityHeight,
      size: resolvedSize,
      color: resolvedColor || undefined,
      label,
      ariaLabel,
      interactive,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['back_top'];
    if (resolvedSize === 'sm') classes.push('back_top_sm');
    if (resolvedSize === 'lg') classes.push('back_top_lg');
    if (resolvedColor === 'primary') classes.push('back_top_primary');
    if (resolvedColor === 'ghost') classes.push('back_top_ghost');
    return classes;
  }, [resolvedSize, resolvedColor]);

  const dataAttrs = useMemo(() => {
    const result = {};
    if (interactive) result['data-back-top'] = '';
    if (target) result['data-target'] = target;
    if (Number(visibilityHeight) !== 400) {
      result['data-visibility-height'] = String(visibilityHeight);
    }
    return result;
  }, [interactive, target, visibilityHeight]);

  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initBackTop(rootRef.current);
  }, [interactive, target, visibilityHeight]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const node = (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      style={style}
      {...dataAttrs}
      {...domRest}
    >
      <Button variant="ghost" className="back_top_btn" ariaLabel={ariaLabel} {...rippleAttrs}>
        {children ?? (
          <>
            <Icon name="arrow-up" className="back_top_icon" />
            {label ? <span className="back_top_label">{label}</span> : null}
          </>
        )}
      </Button>
    </div>
  );

  if (teleported && typeof document !== 'undefined') {
    return createPortal(node, document.body);
  }

  return node;
}
