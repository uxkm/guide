export function MenuDivider(props) { return <li {...props} className={['menu_divider', props.className].filter(Boolean).join(' ')} role="separator" />; }
export default MenuDivider;
