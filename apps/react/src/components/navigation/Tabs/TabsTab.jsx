/**
 * TabsTab 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabsTab({ active = false, disabled = false, children, className = '', ...props }) {
  return (
    <button
      {...props}
      type="button"
      className={['tabs_tab', active && 'is-active', disabled && 'is-disabled', className]
        .filter(Boolean)
        .join(' ')}
      role="tab"
      aria-selected={active}
      disabled={disabled || undefined}
    >
      {children}
    </button>
  );
}
export default TabsTab;
