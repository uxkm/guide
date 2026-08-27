/**
 * NavbarItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function NavbarItem({
  label, // 링크에 표시할 기본 텍스트입니다.
  href = '#', // 항목이 가리키는 대상 주소입니다.
  active = false, // 현재 페이지 항목인지 여부입니다.
  badge, // 링크 텍스트 옆에 표시할 배지입니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 링크 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  return (
    <li {...props} className={['navbar_item', className].filter(Boolean).join(' ')}>
      <a
        href={href}
        // 활성 상태면 is-active 클래스를 함께 적용합니다.
        className={['navbar_link', active && 'is-active'].filter(Boolean).join(' ')}
        aria-current={active ? 'page' : undefined}
        onClick={(event) => {
          // 데모용으로 기본 이동을 막고 사용자 콜백만 호출합니다.
          event.preventDefault();
          onClick?.(event);
        }}
      >
        {children ?? label}
        {badge}
      </a>
    </li>
  );
}
export default NavbarItem;
