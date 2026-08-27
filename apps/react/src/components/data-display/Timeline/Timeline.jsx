/**
 * Timeline 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
const VALID_TAGS = new Set(['ol', 'ul']);

// 시간순 여부에 따라 ol·ul 루트를 선택하고 레이아웃 변형을 적용합니다.
export function Timeline({
  children,
  card = false,
  alternate = false,
  horizontal = false,
  labelCol = false,
  icon = false,
  iconSize = 'md',
  size = 'md',
  tag = 'ol',
  className = '',
  ...props
}) {
  const Root = VALID_TAGS.has(tag) ? tag : 'ol';
  const classes = [
    'timeline',
    card && 'timeline_card',
    alternate && 'timeline_alternate',
    horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col',
    icon && 'timeline_icon',
    icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm',
    size === 'lg' && 'timeline_lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Root {...props} className={classes} data-component="Timeline">
      {children}
    </Root>
  );
}

export function TimelineItem({
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
  className = '',
  ...props
}) {
  // 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
  const itemClasses = ['timeline_item', active && 'is-active', pending && 'is-pending', className]
    .filter(Boolean)
    .join(' ');
  const dotClasses = ['timeline_dot', outline && 'timeline_dot-outline', color && `color_${color}`]
    .filter(Boolean)
    .join(' ');
  // 시간 값은 time 요소로, 장식용 도트는 접근성 트리에서 숨겨 렌더링합니다.
  return (
    <li {...props} className={itemClasses} data-component="TimelineItem">
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
        <span className={dotClasses} aria-hidden="true" />
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

export default Timeline;
