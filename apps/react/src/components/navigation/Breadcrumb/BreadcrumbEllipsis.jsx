/**
 * BreadcrumbEllipsis 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function BreadcrumbEllipsis({
  expanded = false,
  label = '숨겨진 경로 보기',
  className = '',
  children = '…',
  ...props
}) {
  return (
    <li className="breadcrumb_item">
      <button
        {...props}
        type="button"
        className={['breadcrumb_ellipsis', className].filter(Boolean).join(' ')}
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
