import { useMemo, useRef } from 'react';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
  card = false,
  shadow = false,
  trendIcon,
  valueSlot,
  children,
  className,
  ...rest
}) {
  const props = { title, value, prefix, suffix, description, trend, trendColor, size, card, shadow };
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, 'trend-icon': trendIcon, value: valueSlot }),
    [children, trendIcon, valueSlot],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'stat',
    size === 'sm' && 'stat_sm',
    size === 'lg' && 'stat_lg',
    card && 'stat_card',
    shadow && 'stat_shadow',
    className,
  );

  const trendClass = cn('stat_trend', trendColor && `color_${trendColor}`);
  const descClass = cn('stat_desc', trendColor && description && `color_${trendColor}`);
  const showHeader = Boolean(title && trend);
  const showValueRow = Boolean(prefix || suffix || valueSlot);

  const defaultTrendIcon = trendIcon ?? <Icon name="chevron-up" />;

  return (
    <div ref={rootRef} className={rootClass}>
      {showHeader ? (
        <div className="stat_header">
          <span className="stat_label">{title}</span>
          <span className={trendClass}>
            {defaultTrendIcon}
            {trend}
          </span>
        </div>
      ) : (
        title && <span className="stat_label">{title}</span>
      )}

      {showValueRow ? (
        <div className="stat_value-row">
          {prefix && <span className="stat_prefix">{prefix}</span>}
          {(value || valueSlot) && (
            <span className="stat_value">{valueSlot ?? value}</span>
          )}
          {suffix && <span className="stat_suffix">{suffix}</span>}
        </div>
      ) : (
        (value || valueSlot) && <span className="stat_value">{valueSlot ?? value}</span>
      )}

      {description ? (
        <span className={descClass}>{description}</span>
      ) : (
        trend &&
        !showHeader && (
          <span className={trendClass}>
            {defaultTrendIcon}
            {trend}
          </span>
        )
      )}

      {children}
    </div>
  );
}
