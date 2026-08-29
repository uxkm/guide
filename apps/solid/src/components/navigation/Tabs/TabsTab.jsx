/**
 * TabsTab 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabsTab({
  active = false, // 현재 선택된 탭인지 여부입니다.
  disabled = false, // 탭 선택을 막을지 여부입니다.
  children, // 탭 버튼 안에 표시할 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 button에 전달합니다.
}) {
  // 활성·비활성 상태를 탭 버튼 클래스에 반영합니다.
  return (
    <button
      {...props}
      type="button"
      class={['tabs_tab', active && 'is-active', disabled && 'is-disabled', className]
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
