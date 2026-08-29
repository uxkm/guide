import { createMemo } from 'solid-js';
/**
 * Progress 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const statuses = new Set(['', 'success', 'exception']); // 지원하는 상태 이름입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 크기입니다.
const colors = new Set(['primary', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.
// 진행률을 0~100 범위로 제한합니다.
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function Progress({
  percent = 0, // 0~100 진행률입니다.
  status = '', // 완료·예외 상태 색상입니다.
  size = 'md', // 트랙 높이 크기입니다.
  showInfo = false, // 상단 퍼센트 값 표시 여부입니다.
  label, // 상단 레이블 텍스트입니다.
  color = 'primary', // status가 없을 때 사용하는 의미 색상입니다.
  striped = false, // 줄무늬 패턴입니다.
  animated = false, // 줄무늬 이동 애니메이션입니다.
  indeterminate = false, // 값을 알 수 없는 불확정 진행입니다.
  inside = false, // 바 안에 퍼센트 텍스트를 넣습니다.
  block = false, // 전체 너비 배치입니다. false면 fit입니다.
  ariaLabel = '진행률', // progressbar의 접근성 이름입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const value = normalizePercent(percent); // 클램프된 최종 진행률입니다.
  const resolvedStatus = statuses.has(status) ? status : ''; // 검증된 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.has(color) ? color : 'primary'; // 검증된 색상입니다.
  // status가 있으면 상태 색상을, 없으면 color prop을 사용합니다.
  const colorClass =
    resolvedStatus === 'success'
      ? 'color_success'
      : resolvedStatus === 'exception'
        ? 'color_danger'
        : `color_${resolvedColor}`;
  // 상태·크기·패턴·레이아웃 클래스를 조합합니다.
  const classes = createMemo(() => [
        'progress', // Progress 루트 클래스입니다.
        colorClass, // 의미·상태 색상 클래스입니다.
        block ? 'progress_block' : 'progress_fit', // 전체 너비 또는 콘텐츠 너비입니다.
        resolvedSize !== 'md' && `progress_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
        striped && 'progress_striped', // 줄무늬 패턴입니다.
        animated && 'progress_animated', // 줄무늬 애니메이션입니다.
        indeterminate && 'is-indeterminate', // 불확정 진행 상태입니다.
        inside && 'progress_inside', // 바 안 텍스트 변형입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '), // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.
    [animated, block, className, colorClass, indeterminate, inside, resolvedSize, striped],
  );
  const displayValue = `${value}%`; // 화면에 표시할 퍼센트 문자열입니다.
  return (
    <div {...props} class={classes} data-component="Progress">
      {/* 레이블·값 헤더는 showInfo 또는 label이 있을 때만 렌더합니다. */}
      {(showInfo || label) && (
        <div class="progress_header">
          {label && <span class="progress_label">{label}</span>}
          {showInfo && <span class="progress_value">{displayValue}</span>}
        </div>
      )}
      {/* 트랙이 실제 progressbar 역할을 담당합니다. */}
      <div
        class="progress_track"
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        aria-busy={indeterminate || undefined}
        style={inside ? { background: 'var(--color-border-subtle)' } : undefined}
      >
        {/* 채움 막대 너비는 진행률(%)과 같습니다. */}
        <span class="progress_bar" style={{ width: `${value}%` }}>
          {inside ? displayValue : null}
        </span>
      </div>
    </div>
  );
}

export default Progress;
