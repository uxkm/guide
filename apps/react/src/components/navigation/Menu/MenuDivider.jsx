export function MenuDivider(props) { return <li {...props} className={['menu_divider', props.className].filter(Boolean).join(' ')} aria-hidden="true" />; }
export default MenuDivider;
