const TrendIcon = () => <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 15 6-6 6 6" /></svg>;

export function Stat({
  title,
  value,
  prefix,
  suffix,
  description,
  trend,
  trendColor,
  trendIcon,
  size = 'md',
  card = false,
  shadow = false,
  children,
  className = '',
  ...props
}) {
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = ['stat', resolvedSize !== 'md' && `stat_${resolvedSize}`, card && 'stat_card', shadow && 'stat_shadow', className].filter(Boolean).join(' ');
  const trendClasses = ['stat_trend', trendColor && `color_${trendColor}`].filter(Boolean).join(' ');
  const descriptionClasses = ['stat_desc', description && trendColor && `color_${trendColor}`].filter(Boolean).join(' ');
  const showHeader = Boolean(title && trend);
  const hasValue = value != null && value !== '';
  const valueNode = prefix || suffix
    ? <div className="stat_value-row">{prefix ? <span className="stat_prefix">{prefix}</span> : null}{hasValue ? <span className="stat_value">{value}</span> : null}{suffix ? <span className="stat_suffix">{suffix}</span> : null}</div>
    : hasValue ? <span className="stat_value">{value}</span> : null;
  const trendNode = <>{trendIcon ?? <TrendIcon />}{trend}</>;
  return (
    <div {...props} className={classes} data-component="Stat">
      {showHeader ? <div className="stat_header"><span className="stat_label">{title}</span><span className={trendClasses}>{trendNode}</span></div> : title ? <span className="stat_label">{title}</span> : null}
      {valueNode}
      {description ? <span className={descriptionClasses}>{description}</span> : trend && !showHeader ? <span className={trendClasses}>{trendNode}</span> : null}
      {children}
    </div>
  );
}

export default Stat;
