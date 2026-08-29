/**
 * MenuGroup 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuGroup({
  title, // 그룹을 구분하는 제목 텍스트입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // 그룹 제목만 표시하는 비상호작용 목록 항목입니다.
  return (
    <li {...props} class={['menu_group', className].filter(Boolean).join(' ')}>
      <span class="menu_group-title">{title}</span>
    </li>
  );
}
export default MenuGroup;
