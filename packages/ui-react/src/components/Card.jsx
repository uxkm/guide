import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_VARIANTS = new Set(['bordered', 'shadow', 'flat']);
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);

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
  const { rippleAttrs } = useRipple({ ripple }, { defaultEnabled: false });
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      variant: resolvedVariant,
      size: resolvedSize,
      hoverable,
      title,
      subtitle,
      tag,
    },
    createDemoSlots({ default: children, media, header, extra }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['card'];
    if (resolvedVariant === 'shadow') classes.push('card_shadow');
    if (resolvedVariant === 'flat') classes.push('card_ghost');
    if (resolvedSize === 'sm') classes.push('card_sm');
    if (resolvedSize === 'lg') classes.push('card_lg');
    if (resolvedSize === 'compact') classes.push('card_compact');
    if (hoverable) classes.push('card_hover');
    return classes;
  }, [resolvedVariant, resolvedSize, hoverable]);

  const hasBuiltInHeader = Boolean(title || subtitle || header || extra);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const Tag = tag || 'article';

  return (
    <Tag ref={rootRef} className={cn(rootClass, className)} {...rippleAttrs} {...domRest}>
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
