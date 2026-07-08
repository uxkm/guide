import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
  active = false,
  pending = false,
  outline = false,
  dot,
  meta,
  children,
  className,
  ...rest
}) {
  const props = {
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
  };
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, dot, meta }),
    [children, dot, meta],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const itemClass = cn('timeline_item', active && 'is-active', pending && 'is-pending', className);
  const dotClass = cn('timeline_dot', outline && 'timeline_dot-outline', color && `color_${color}`);

  return (
    <li ref={rootRef} className={itemClass}>
      {label && (
        <time className="timeline_label" dateTime={labelDatetime}>
          {label}
        </time>
      )}
      {dot ? (
        <span className="timeline_dot" aria-hidden="true">
          {dot}
        </span>
      ) : (
        <span className={dotClass} aria-hidden="true" />
      )}
      <div className="timeline_content">
        {children ?? (
          <>
            {time && (
              <time className="timeline_time" dateTime={datetime}>
                {time}
              </time>
            )}
            {title && <p className="timeline_title">{title}</p>}
            {description && <p className="timeline_desc">{description}</p>}
          </>
        )}
        {meta && <div className="timeline_meta">{meta}</div>}
      </div>
    </li>
  );
}
