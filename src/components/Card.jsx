'use client';

import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_VARIANTS = new Set(['bordered', 'shadow', 'flat']);
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);
const VALID_LAYOUTS = new Set(['default', 'webzine', 'news', 'product']);
const VALID_MEDIA_POSITIONS = new Set(['top', 'left', 'right']);

const formatCode = createComponentFormatter('Card', {
  defaults: {
    variant: 'bordered',
    size: 'md',
    layout: 'default',
    mediaPosition: 'top',
    mediaDivider: true,
    tag: 'article',
  },
  booleanProps: new Set(['hoverable', 'ripple']),
  falseExplicitProps: new Set(['mediaDivider']),
  skipProps: ['tag'],
  selfClosing: false,
});

export default function Card({
  ripple,
  variant = 'bordered',
  size = 'md',
  layout = 'default',
  mediaPosition,
  mediaDivider = true,
  hoverable,
  as,
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
  const resolvedLayout = VALID_LAYOUTS.has(layout) ? layout : 'default';
  const resolvedMediaPosition = VALID_MEDIA_POSITIONS.has(mediaPosition)
    ? mediaPosition
    : resolvedLayout === 'news' || resolvedLayout === 'product'
      ? 'left'
      : 'top';

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      variant: resolvedVariant,
      size: resolvedSize,
      layout: resolvedLayout,
      mediaPosition: resolvedMediaPosition,
      mediaDivider,
      hoverable,
      as: typeof as === 'string' ? as : undefined,
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
    if (resolvedLayout === 'webzine') classes.push('card_webzine');
    if (resolvedLayout === 'news') classes.push('card_news');
    if (resolvedLayout === 'product') classes.push('card_product');
    if (resolvedMediaPosition === 'left') classes.push('card_media-left');
    if (resolvedMediaPosition === 'right') classes.push('card_media-right');
    if (!mediaDivider) classes.push('card_media-no-divider');
    if (hoverable) classes.push('card_hover');
    return classes;
  }, [
    resolvedVariant,
    resolvedSize,
    resolvedLayout,
    resolvedMediaPosition,
    mediaDivider,
    hoverable,
  ]);

  const hasBuiltInHeader = Boolean(title || subtitle || header || extra);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const Root = as || tag || 'article';
  const headerContent = hasBuiltInHeader ? (
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
  ) : null;
  const hasSideMedia =
    Boolean(media) && (resolvedMediaPosition === 'left' || resolvedMediaPosition === 'right');

  return (
    <Root ref={rootRef} className={cn(rootClass, className)} {...rippleAttrs} {...domRest}>
      {hasSideMedia ? (
        <>
          {resolvedMediaPosition === 'left' ? media : null}
          <div className="card_inner">
            {headerContent}
            {children}
          </div>
          {resolvedMediaPosition === 'right' ? media : null}
        </>
      ) : (
        <>
          {media}
          {headerContent}
          {children}
        </>
      )}
    </Root>
  );
}
