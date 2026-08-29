/**
 * SpinWrap 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Spin from './Spin.jsx';

export function SpinWrap({
  loading = false, // 로딩 오버레이 표시 여부입니다.
  block = false, // 최소 높이를 확보하는 블록 래퍼입니다.
  blur = false, // 로딩 중 본문 블러 효과입니다.
  tip, // 오버레이 Spin에 전달할 설명 문구입니다.
  ariaLabel = '로딩 중', // 오버레이 Spin의 접근성 이름입니다.
  children, // 로딩 대상이 되는 본문 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 래퍼·블록·블러·로딩 상태 클래스를 조합합니다.
  const classes = [
    'spin_wrap', // SpinWrap 루트 클래스입니다.
    block && 'spin_wrap-block', // 블록형 최소 높이입니다.
    blur && 'spin_wrap-blur', // 본문 블러 변형입니다.
    loading && 'is-loading', // 로딩 활성 상태입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.
  return (
    <div {...props} class={classes} data-component="SpinWrap" aria-busy={loading || undefined}>
      {/* 로딩 대상 콘텐츠 영역입니다. */}
      <div class="spin_wrap-body">{children}</div>
      {/* loading일 때만 오버레이 Spin을 올립니다. */}
      {loading && <Spin overlay tip={tip} ariaLabel={ariaLabel} />}
    </div>
  );
}

export default SpinWrap;
