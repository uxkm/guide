/**
 * Stat 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 추세 아이콘은 장식용으로 숨기고 trend 텍스트가 실제 의미를 전달합니다.
const TrendIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 15 6-6 6 6" />
  </svg>
);

// 라벨, 값, 단위, 추세와 카드 외형을 하나의 Stat API로 조합합니다.
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
  // 크기·카드 스킨과 추세 색상을 각 영역의 공통 클래스로 변환합니다.
  const classes = [
    'stat',
    resolvedSize !== 'md' && `stat_${resolvedSize}`,
    card && 'stat_card',
    shadow && 'stat_shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const trendClasses = ['stat_trend', trendColor && `color_${trendColor}`]
    .filter(Boolean)
    .join(' ');
  const descriptionClasses = ['stat_desc', description && trendColor && `color_${trendColor}`]
    .filter(Boolean)
    .join(' ');
  const showHeader = Boolean(title && trend);
  const hasValue = value != null && value !== '';
  // 접두·접미가 있으면 값 행을 분리하고, 없으면 단일 value 요소를 사용합니다.
  const valueNode =
    prefix || suffix ? (
      <div className="stat_value-row">
        {prefix ? <span className="stat_prefix">{prefix}</span> : null}
        {hasValue ? <span className="stat_value">{value}</span> : null}
        {suffix ? <span className="stat_suffix">{suffix}</span> : null}
      </div>
    ) : hasValue ? (
      <span className="stat_value">{value}</span>
    ) : null;
  const trendNode = (
    <>
      {trendIcon ?? <TrendIcon />}
      {trend}
    </>
  );
  return (
    <div {...props} className={classes} data-component="Stat">
      {showHeader ? (
        <div className="stat_header">
          <span className="stat_label">{title}</span>
          <span className={trendClasses}>{trendNode}</span>
        </div>
      ) : title ? (
        <span className="stat_label">{title}</span>
      ) : null}
      {valueNode}
      {description ? (
        <span className={descriptionClasses}>{description}</span>
      ) : trend && !showHeader ? (
        <span className={trendClasses}>{trendNode}</span>
      ) : null}
      {children}
    </div>
  );
}

export default Stat;
