const VALID_TAGS = new Set(['ol', 'ul']);

export function Timeline({ children, card = false, alternate = false, horizontal = false, labelCol = false, icon = false, iconSize = 'md', size = 'md', tag = 'ol', className = '', ...props }) {
  const Root = VALID_TAGS.has(tag) ? tag : 'ol';
  const classes = [
    'timeline', card && 'timeline_card', alternate && 'timeline_alternate', horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col', icon && 'timeline_icon', icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm', size === 'lg' && 'timeline_lg', className
  ].filter(Boolean).join(' ');
  return <Root {...props} className={classes} data-component="Timeline">{children}</Root>;
}

export function TimelineItem({ color = 'primary', title, description, time, datetime, label, labelDatetime, active = false, pending = false, outline = false, dot, meta, children, className = '', ...props }) {
  const itemClasses = ['timeline_item', active && 'is-active', pending && 'is-pending', className].filter(Boolean).join(' ');
  const dotClasses = ['timeline_dot', outline && 'timeline_dot-outline', color && `color_${color}`].filter(Boolean).join(' ');
  return (
    <li {...props} className={itemClasses} data-component="TimelineItem">
      {label ? <time className="timeline_label" dateTime={labelDatetime}>{label}</time> : null}
      {dot ? <span className="timeline_dot" aria-hidden="true">{dot}</span> : <span className={dotClasses} aria-hidden="true" />}
      <div className="timeline_content">
        {children ?? <>{time ? <time className="timeline_time" dateTime={datetime}>{time}</time> : null}{title ? <p className="timeline_title">{title}</p> : null}{description ? <p className="timeline_desc">{description}</p> : null}</>}
        {meta ? <div className="timeline_meta">{meta}</div> : null}
      </div>
    </li>
  );
}

export default Timeline;
