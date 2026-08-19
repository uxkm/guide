export function NavbarList({ children, className = '', ...props }) {
  return <ul {...props} className={['navbar_list', className].filter(Boolean).join(' ')}>{children}</ul>;
}
export default NavbarList;
