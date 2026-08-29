/**
 * NavbarList 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function NavbarList({
  children, // 목록에 배치할 NavbarItem 등 자식입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 ul에 전달합니다.
}) {
  // navbar_list 클래스와 사용자 정의 클래스를 조합합니다.
  return (
    <ul {...props} class={['navbar_list', className].filter(Boolean).join(' ')}>
      {children}
    </ul>
  );
}
export default NavbarList;
