export function MenuGroup({ title, className = '', ...props }) { return <li {...props} className={['menu_group', className].filter(Boolean).join(' ')} role="presentation"><span className="menu_group-title">{title}</span></li>; }
export default MenuGroup;
