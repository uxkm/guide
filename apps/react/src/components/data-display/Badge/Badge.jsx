/**
 * Badge 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

// 텍스트, 상태 점, 카운트 형태와 접근성 이름을 하나의 Badge API로 조합합니다.
export function Badge({
  children,
  label,
  color = 'primary',
  size = 'md',
  dot = false,
  count = false,
  dotOnly = false,
  ariaLabel,
  className = '',
  ...props
}) {
  // dotOnly는 독립 상태 점, 나머지는 badge 루트와 형태 클래스를 사용합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    dotOnly ? 'badge_dot-only' : 'badge',
    `color_${color}`,
    resolvedSize !== 'md' && `badge_${resolvedSize}`,
    !dotOnly && dot && 'badge_dot',
    !dotOnly && count && 'badge_count',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 텍스트 없는 상태 점은 status 역할과 aria-label로 의미를 제공합니다.
  return (
    <span
      {...props}
      aria-label={ariaLabel}
      className={classes}
      data-component="Badge"
      role={dotOnly ? 'status' : undefined}
    >
      {dotOnly ? null : (children ?? label)}
    </span>
  );
}

export function BadgeWrap({ children, ariaLabel, className = '', ...props }) {
  // 기준 요소와 Badge를 같은 좌표 컨텍스트에 배치하는 겹침 래퍼입니다.
  const classes = ['badge_wrap', className].filter(Boolean).join(' ');
  return (
    <span {...props} aria-label={ariaLabel} className={classes} data-component="BadgeWrap">
      {children}
    </span>
  );
}

export default Badge;
