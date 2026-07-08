import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useRipple } from '@/hooks/useRipple';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Card', {
  defaults: { variant: 'bordered', size: 'md', tag: 'article' },
  booleanProps: new Set(['hoverable', 'ripple']),
  skipProps: ['tag'],
  selfClosing: false,
});

export default function Card({
  ripple,
  variant = 'bordered',
  size = 'md',
  hoverable,
  title,
  subtitle,
  tag = 'article',
  media,
  header,
  extra,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { ripple, variant, size, hoverable, title, subtitle, tag };
  const { rippleAttrs } = useRipple({ ripple }, { defaultEnabled: false });
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, media, header, extra }),
    [children, media, header, extra],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'card',
    variant === 'shadow' && 'card_shadow',
    variant === 'flat' && 'card_ghost',
    size === 'sm' && 'card_sm',
    size === 'lg' && 'card_lg',
    size === 'compact' && 'card_compact',
    hoverable && 'card_hover',
    className,
  );

  const hasBuiltInHeader = Boolean(title || subtitle || header || extra);
  const Tag = tag;
  const domRest = normalizeDomProps(rest);

  return (
    <Tag ref={rootRef} className={rootClass} {...domRest} {...rippleAttrs}>
      {media}
      {hasBuiltInHeader ? (
        <div className="card_header">
          <div className="card_header-main">
            {header ?? (
              <>
                {title ? <h3 className="card_title">{title}</h3> : null}
                {subtitle ? <p className="card_subtitle">{subtitle}</p> : null}
              </>
            )}
          </div>
          {extra ? <div className="card_extra">{extra}</div> : null}
        </div>
      ) : null}
      {children}
    </Tag>
  );
}
