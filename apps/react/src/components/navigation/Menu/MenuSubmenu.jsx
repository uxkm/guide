/**
 * MenuSubmenu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { useEffect, useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
export function MenuSubmenu({
  label,
  expanded = false,
  submenuId,
  icon,
  children,
  className = '',
  ...props
}) {
  const generatedId = useId().replaceAll(':', '');
  const id = submenuId || `menu-sub-${generatedId}`;
  const [open, setOpen] = useState(Boolean(expanded));
  useEffect(() => setOpen(Boolean(expanded)), [expanded]);
  return (
    <li
      {...props}
      className={['menu_item', 'menu_item-submenu', className].filter(Boolean).join(' ')}
      aria-expanded={open}
    >
      <Button
        variant="text"
        className="menu_link"
        expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        iconBefore={icon}
        iconAfter={<Icon name="chevron-down" className="menu_arrow" />}
      >
        <span className="menu_label">{label}</span>
      </Button>
      <ul id={id} className="menu_submenu">
        {children}
      </ul>
    </li>
  );
}
export default MenuSubmenu;
