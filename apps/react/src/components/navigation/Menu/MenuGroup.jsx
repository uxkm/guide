/**
 * MenuGroup 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuGroup({ title, className = '', ...props }) {
  return (
    <li {...props} className={['menu_group', className].filter(Boolean).join(' ')}>
      <span className="menu_group-title">{title}</span>
    </li>
  );
}
export default MenuGroup;
