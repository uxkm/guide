import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('TimelineItem', {
  defaults: { color: 'primary' },
  booleanProps: new Set(['active', 'pending', 'outline']),
  selfClosing: false,
});

export default function TimelineItem({
  color = 'primary',
  title,
  description,
  time,
  datetime,
  label,
  labelDatetime,
  active,
  pending,
  outline,
  dot,
  meta,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    {
      color,
      title,
      description,
      time,
      datetime,
      label,
      labelDatetime,
      active,
      pending,
      outline,
    },
    createDemoSlots({ default: children, dot, meta }),
    rootRef,
    { className, ...rest },
  );

  const itemClass = useMemo(() => {
    const classes = ['timeline_item'];
    if (active) classes.push('is-active');
    if (pending) classes.push('is-pending');
    return classes;
  }, [active, pending]);

  const dotClass = useMemo(() => {
    const classes = ['timeline_dot'];
    if (outline) classes.push('timeline_dot-outline');
    if (color) classes.push(`color_${color}`);
    return classes;
  }, [outline, color]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <li ref={rootRef} className={cn(itemClass, className)} {...domRest}>
      {label ? (
        <time className="timeline_label" dateTime={labelDatetime}>
          {label}
        </time>
      ) : null}
      {dot ? (
        <span className="timeline_dot" aria-hidden="true">
          {dot}
        </span>
      ) : (
        <span className={cn(dotClass)} aria-hidden="true" />
      )}
      <div className="timeline_content">
        {children ?? (
          <>
            {time ? (
              <time className="timeline_time" dateTime={datetime}>
                {time}
              </time>
            ) : null}
            {title ? <p className="timeline_title">{title}</p> : null}
            {description ? <p className="timeline_desc">{description}</p> : null}
          </>
        )}
        {meta ? <div className="timeline_meta">{meta}</div> : null}
      </div>
    </li>
  );
}
