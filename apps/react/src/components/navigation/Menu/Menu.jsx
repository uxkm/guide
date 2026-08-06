export function Menu({ children = 'Menu', className = '', ...props }) {
  const classes = ['uxkm-menu', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Menu" {...props}>{children}</div>;
}

export default Menu;
