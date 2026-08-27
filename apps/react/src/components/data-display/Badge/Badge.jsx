/**
 * Badge 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

// 텍스트, 상태 점, 카운트 형태와 접근성 이름을 하나의 Badge API로 조합합니다.
export function Badge({
  children, // 배지 텍스트입니다. 없으면 label을 사용합니다.
  label, // children 대신 표시할 텍스트입니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  size = 'md', // sm · md · lg 크기입니다.
  dot = false, // 텍스트 옆 상태 점 변형입니다.
  count = false, // 카운트형 배지 스타일입니다.
  dotOnly = false, // 텍스트 없는 독립 상태 점입니다.
  ariaLabel, // 접근성 이름입니다. 상태 점에 권장합니다.
  className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
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

export function BadgeWrap({
  children, // 기준 요소와 Badge 자식들입니다.
  ariaLabel, // 겹침 영역의 접근성 이름입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 래퍼에 전달합니다.
}) {
  // 기준 요소와 Badge를 같은 좌표 컨텍스트에 배치하는 겹침 래퍼입니다.
  const classes = ['badge_wrap', className].filter(Boolean).join(' ');
  return (
    <span {...props} aria-label={ariaLabel} className={classes} data-component="BadgeWrap">
      {children}
    </span>
  );
}

export default Badge;
