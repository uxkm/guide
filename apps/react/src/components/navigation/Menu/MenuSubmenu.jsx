import { useEffect, useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
export function MenuSubmenu({ label, expanded = false, submenuId, icon, children, className = '', ...props }) {
  const generatedId = useId().replaceAll(':', '');
  const id = submenuId || `menu-sub-${generatedId}`;
  const [open, setOpen] = useState(Boolean(expanded));
  useEffect(() => setOpen(Boolean(expanded)), [expanded]);
  return <li {...props} className={['menu_item', 'menu_item-submenu', className].filter(Boolean).join(' ')} aria-expanded={open}><Button variant="text" className="menu_link" expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)} iconBefore={icon} iconAfter={<Icon name="chevron-down" className="menu_arrow" />}><span className="menu_label">{label}</span></Button><ul id={id} className="menu_submenu">{children}</ul></li>;
}
export default MenuSubmenu;
