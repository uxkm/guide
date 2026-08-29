/**
 * Spin 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 스피너 크기입니다.
const colors = new Set(['primary', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.

export function Spin({
  size = 'md', // 스피너 크기입니다.
  tip, // 표시기 아래 설명 문구입니다.
  color = 'primary', // 의미 색상입니다.
  inline = false, // 인라인 배치입니다.
  block = false, // 전체 너비 배치입니다.
  overlay = false, // SpinWrap 등에서 쓰는 오버레이 배치입니다.
  ariaLabel = '로딩 중', // status 영역의 접근성 이름입니다.
  children, // 스피너와 함께 렌더할 추가 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.has(color) ? color : 'primary'; // 검증된 색상입니다.
  // 색상·크기·배치 클래스를 조합합니다.
  const classes = [
    'spin', // Spin 루트 클래스입니다.
    `color_${resolvedColor}`, // 의미 색상 클래스입니다.
    resolvedSize !== 'md' && `spin_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    inline && 'spin_inline', // 인라인 배치입니다.
    block && 'spin_block', // 전체 너비 배치입니다.
    overlay && 'spin_overlay', // 오버레이 배치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.
  return (
    <div
      {...props}
      class={classes}
      data-component="Spin"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {/* 회전하는 시각 표시기입니다. */}
      <span class="spin_indicator" aria-hidden="true" />
      {tip && <p class="spin_tip">{tip}</p>}
      {children}
    </div>
  );
}

export default Spin;
