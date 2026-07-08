import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

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
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { target, offsetTop, offsetBottom, skin, interactive };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootAttrs = {};
  if (interactive) rootAttrs['data-affix'] = '';
  if (target) rootAttrs['data-target'] = target;
  if (offsetTop && Number(offsetTop) !== 0) {
    rootAttrs['data-offset-top'] = String(offsetTop);
  }
  if (offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== '') {
    rootAttrs['data-offset-bottom'] = String(offsetBottom);
  }

  const targetClass = cn(
    'affix_target',
    skin === 'bar' && 'affix_bar',
    skin === 'anchor' && 'affix_anchor',
  );

  return (
    <div ref={rootRef} className={cn('affix', className)} {...rest} {...rootAttrs}>
      <div className="affix_placeholder" aria-hidden="true" hidden />
      <div className={targetClass}>{children}</div>
    </div>
  );
}
