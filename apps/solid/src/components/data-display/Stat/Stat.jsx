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
  title, // 통계 라벨입니다.
  value, // 주요 수치입니다.
  prefix, // 수치 앞 접두어입니다.
  suffix, // 수치 뒤 접미어입니다.
  description, // 보조 설명입니다.
  trend, // 추세 텍스트입니다.
  trendColor, // 추세 색상 클래스입니다.
  trendIcon, // 추세 옆 아이콘입니다.
  size = 'md', // sm · md · lg 크기입니다.
  card = false, // 카드형 외형입니다.
  shadow = false, // 그림자 카드입니다.
  children, // 커스텀 본문입니다.
  class: className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
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
      <div class="stat_value-row">
        {prefix ? <span class="stat_prefix">{prefix}</span> : null}
        {hasValue ? <span class="stat_value">{value}</span> : null}
        {suffix ? <span class="stat_suffix">{suffix}</span> : null}
      </div>
    ) : hasValue ? (
      <span class="stat_value">{value}</span>
    ) : null;
  const trendNode = (
    <>
      {trendIcon ?? <TrendIcon />}
      {trend}
    </>
  );
  return (
    <div {...props} class={classes} data-component="Stat">
      {showHeader ? (
        <div class="stat_header">
          <span class="stat_label">{title}</span>
          <span class={trendClasses}>{trendNode}</span>
        </div>
      ) : title ? (
        <span class="stat_label">{title}</span>
      ) : null}
      {valueNode}
      {description ? (
        <span class={descriptionClasses}>{description}</span>
      ) : trend && !showHeader ? (
        <span class={trendClasses}>{trendNode}</span>
      ) : null}
      {children}
    </div>
  );
}

export default Stat;
