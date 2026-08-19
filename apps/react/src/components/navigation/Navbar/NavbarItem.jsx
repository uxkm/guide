export function NavbarItem({ label, href = '#', active = false, badge, children, className = '', onClick, ...props }) {
  return <li {...props} className={['navbar_item', className].filter(Boolean).join(' ')}><a href={href} className={['navbar_link', active && 'is-active'].filter(Boolean).join(' ')} aria-current={active ? 'page' : undefined} onClick={(event) => { event.preventDefault(); onClick?.(event); }}>{children ?? label}{badge}</a></li>;
}
export default NavbarItem;
