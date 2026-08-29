import { createMemo } from 'solid-js';
/**
 * Skeleton 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
// 문단 줄별 기본 너비 변형 클래스입니다.
const paragraphWidths = ['', 'skeleton_w-md', 'skeleton_w-sm'];

// paragraph prop을 실제 줄 수로 변환합니다.
function paragraphCount(paragraph) {
  if (paragraph === true) return 3;
  return typeof paragraph === 'number' ? Math.max(0, paragraph) : 0;
}

export function Skeleton({
  active = true, // 쉬머 애니메이션 활성 여부입니다.
  avatar = false, // 아바타 행 레이아웃 표시 여부입니다.
  paragraph = false, // 본문 줄 수입니다. true면 3줄입니다.
  round = false, // 원형 플레이스홀더만 표시합니다.
  ariaLabel = '콘텐츠 로딩 중', // 로딩 영역의 접근성 이름입니다.
  children, // 카드처럼 직접 구성하는 추가 플레이스홀더입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const count = paragraphCount(paragraph); // avatar 행에서 쓸 본문 줄 수입니다.
  // 기본 형태에서 paragraph가 false여도 제목+3줄을 보여 줍니다.
  const defaultCount = paragraph === false ? 3 : count;
  // 그룹 루트 클래스와 정적(비활성) 상태를 조합합니다.
  const groupClass = createMemo(() => ['skeleton_group', !active && 'skeleton_static', className].filter(Boolean).join(' '));
  // 개별 플레이스홀더 항목 클래스입니다.
  const itemClass = ['skeleton', !active && 'skeleton_static'].filter(Boolean).join(' ');

  return (
    <div
      {...props}
      class={groupClass}
      data-component="Skeleton"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {avatar ? (
        // 아바타(원) + 본문 줄 행 레이아웃입니다.
        <div class="skeleton_row">
          <span class={`${itemClass} skeleton_circle`} aria-hidden="true" />
          {count > 0 && (
            <div class="skeleton_row-body">
              {Array.from({ length: count }, (_, index) => (
                <span
                  key={index}
                  class={[itemClass, 'skeleton_text', paragraphWidths[index] || 'skeleton_w-lg']
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
      ) : round ? (
        // 원형 플레이스홀더만 표시합니다.
        <span class={`${itemClass} skeleton_circle`} aria-hidden="true" />
      ) : (
        // 제목 + 본문 줄 기본 형태입니다.
        <>
          <span class={`${itemClass} skeleton_title`} aria-hidden="true" />
          {Array.from({ length: defaultCount }, (_, index) => (
            <span
              key={index}
              class={[itemClass, 'skeleton_text', paragraphWidths[index]]
                .filter(Boolean)
                .join(' ')}
              aria-hidden="true"
            />
          ))}
        </>
      )}
      {children}
    </div>
  );
}

export default Skeleton;
