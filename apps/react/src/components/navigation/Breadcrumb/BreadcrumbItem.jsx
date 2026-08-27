/**
 * BreadcrumbItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function BreadcrumbItem({
  label, // 경로 항목에 표시할 기본 텍스트입니다.
  href, // 지정 시 링크로 렌더할 대상 주소입니다.
  current = false, // 현재 페이지 항목인지 여부입니다.
  disabled = false, // 링크 이동을 막을지 여부입니다.
  icon = false, // true면 아이콘형 링크, 노드면 앞에 표시할 아이콘입니다.
  ariaLabel, // 링크의 접근 가능한 이름을 지정합니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 링크 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // children이 없으면 아이콘·레이블 조합으로 콘텐츠를 구성합니다.
  const content =
    children ??
    (icon && icon !== true ? (
      <>
        {icon}
        {label}
      </>
    ) : (
      label
    ));

  // 아이콘·비활성 상태를 링크 클래스에 반영합니다.
  const linkClasses = ['breadcrumb_link', icon && 'breadcrumb_link-icon', disabled && 'is-disabled']
    .filter(Boolean)
    .join(' ');

  // 현재·비활성·링크 여부에 따라 내부 요소를 선택합니다.
  let inner = content;
  if (href && !current && !disabled)
    inner = (
      <a className={linkClasses} href={href} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  else if (disabled)
    inner = (
      <span className={linkClasses} aria-disabled="true">
        {content}
      </span>
    );
  else if (current) inner = <span className="breadcrumb_current">{content}</span>;

  return (
    <li
      {...props}
      className={['breadcrumb_item', current && 'is-current', className].filter(Boolean).join(' ')}
      aria-current={current ? 'page' : undefined}
    >
      {inner}
    </li>
  );
}

export default BreadcrumbItem;
