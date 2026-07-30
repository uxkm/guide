import { useMemo, useRef } from 'react';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Stat', {
  defaults: { size: 'md' },
  booleanProps: new Set(['card', 'shadow']),
  labelProp: 'title',
  selfClosing: false,
});

export default function Stat({
  title,
  value,
  prefix,
  suffix,
  description,
  trend,
  trendColor,
  size = 'md',
  card,
  shadow,
  trendIcon,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showHeader = Boolean(title && trend);
  const showValueRow = Boolean(prefix || suffix);
  const hasValue = value != null && value !== '';

  useComponentDemoCode(
    formatCode,
    {
      title,
      value: typeof value === 'string' || typeof value === 'number' ? value : undefined,
      prefix,
      suffix,
      description,
      trend,
      trendColor,
      size: resolvedSize,
      card,
      shadow,
    },
    createDemoSlots({
      default: children,
      value: typeof value === 'string' || typeof value === 'number' ? undefined : value,
      'trend-icon': trendIcon,
    }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['stat'];
    if (resolvedSize === 'sm') classes.push('stat_sm');
    if (resolvedSize === 'lg') classes.push('stat_lg');
    if (card) classes.push('stat_card');
    if (shadow) classes.push('stat_shadow');
    return classes;
  }, [resolvedSize, card, shadow]);

  const trendClass = useMemo(() => {
    const classes = ['stat_trend'];
    if (trendColor) classes.push(`color_${trendColor}`);
    return classes;
  }, [trendColor]);

  const descClass = useMemo(() => {
    const classes = ['stat_desc'];
    if (trendColor && description) classes.push(`color_${trendColor}`);
    return classes;
  }, [trendColor, description]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const trendNode = (
    <>
      {trendIcon ?? <Icon name="chevron-up" />}
      {trend}
    </>
  );

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {showHeader ? (
        <div className="stat_header">
          <span className="stat_label">{title}</span>
          <span className={cn(trendClass)}>{trendNode}</span>
        </div>
      ) : title ? (
        <span className="stat_label">{title}</span>
      ) : null}

      {showValueRow ? (
        <div className="stat_value-row">
          {prefix ? <span className="stat_prefix">{prefix}</span> : null}
          {hasValue ? <span className="stat_value">{value}</span> : null}
          {suffix ? <span className="stat_suffix">{suffix}</span> : null}
        </div>
      ) : hasValue ? (
        <span className="stat_value">{value}</span>
      ) : null}

      {description ? (
        <span className={cn(descClass)}>{description}</span>
      ) : trend && !showHeader ? (
        <span className={cn(trendClass)}>{trendNode}</span>
      ) : null}

      {children}
    </div>
  );
}
