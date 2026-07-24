import { useEffect, useMemo, useRef } from 'react';
import { initAffix } from '@uxkm/ui/legacy/affix-init.js';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SKINS = new Set(['', 'bar', 'anchor']);

const formatCode = createComponentFormatter('Affix', {
  defaults: { offsetTop: 0, interactive: true },
  booleanProps: new Set(['interactive']),
  selfClosing: false,
});

export default function Affix({
  target,
  offsetTop = 0,
  offsetBottom,
  skin = '',
  interactive = true,
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSkin = VALID_SKINS.has(skin) ? skin : '';

  useComponentDemoCode(
    formatCode,
    {
      target,
      offsetTop,
      offsetBottom,
      skin: resolvedSkin || undefined,
      interactive,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const targetClass = useMemo(() => {
    const classes = ['affix_target'];
    if (resolvedSkin === 'bar') classes.push('affix_bar');
    if (resolvedSkin === 'anchor') classes.push('affix_anchor');
    return classes;
  }, [resolvedSkin]);

  const dataAttrs = useMemo(() => {
    const result = {};
    if (interactive) result['data-affix'] = '';
    if (target) result['data-target'] = target;
    if (offsetTop !== undefined && offsetTop !== null && Number(offsetTop) !== 0) {
      result['data-offset-top'] = String(offsetTop);
    }
    if (offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== '') {
      result['data-offset-bottom'] = String(offsetBottom);
    }
    return result;
  }, [interactive, target, offsetTop, offsetBottom]);

  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initAffix(rootRef.current);
  }, [interactive, target, offsetTop, offsetBottom]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn('affix', className)}
      style={style}
      {...dataAttrs}
      {...domRest}
    >
      <div className="affix_placeholder" aria-hidden="true" hidden />
      <div className={cn(targetClass)}>{children}</div>
    </div>
  );
}
