/**
 * ProgressCircle 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 원형 크기입니다.
const colors = new Set(['primary', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.
// 진행률을 0~100 범위로 제한합니다.
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function ProgressCircle({
  percent = 0, // 0~100 진행률입니다.
  color = 'primary', // 원형 막대 의미 색상입니다.
  size = 'md', // 원형 크기입니다.
  ariaLabel = '진행률', // progressbar의 접근성 이름입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // --progress-percent와 병합할 인라인 스타일입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const value = normalizePercent(percent); // 클램프된 최종 진행률입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.has(color) ? color : 'primary'; // 검증된 색상입니다.
  // 원형 Progress 클래스와 색상·크기를 조합합니다.
  const classes = [
    'progress', // Progress 공통 루트 클래스입니다.
    'progress_circle', // 원형 변형입니다.
    `color_${resolvedColor}`, // 의미 색상 클래스입니다.
    resolvedSize !== 'md' && `progress_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.
  return (
    <div
      {...props}
      class={classes}
      data-component="ProgressCircle"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      // CSS stroke-dashoffset 계산에 쓰이는 커스텀 속성입니다.
      style={{ '--progress-percent': value, ...style }}
    >
      {/* 트랙·채움 원호를 그리는 SVG입니다. */}
      <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle class="progress_circle-track" cx="50" cy="50" r="45" />
        <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      {/* 원 중앙에 퍼센트 텍스트를 표시합니다. */}
      <span class="progress_circle-value">{value}%</span>
    </div>
  );
}

export default ProgressCircle;
