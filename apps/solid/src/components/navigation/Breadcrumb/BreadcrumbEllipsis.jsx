/**
 * BreadcrumbEllipsis 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function BreadcrumbEllipsis({
  expanded = false, // 숨겨진 경로가 펼쳐진 상태인지 여부입니다.
  label = '숨겨진 경로 보기', // 말줄임 버튼의 접근 가능한 이름입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children = '…', // 버튼 안에 표시할 말줄임 기호입니다.
  ...props // id, onClick 등 나머지 속성을 button에 전달합니다.
}) {
  // 중간 경로를 접어 두는 말줄임 버튼입니다.
  return (
    <li class="breadcrumb_item">
      <button
        {...props}
        type="button"
        class={['breadcrumb_ellipsis', className].filter(Boolean).join(' ')}
        aria-label={label}
        aria-expanded={expanded}
        data-breadcrumb-ellipsis
      >
        {children}
      </button>
    </li>
  );
}

export default BreadcrumbEllipsis;
