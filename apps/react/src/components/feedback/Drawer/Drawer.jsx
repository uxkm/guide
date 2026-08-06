export function Drawer({ children = 'Drawer', className = '', ...props }) {
  const classes = ['uxkm-drawer', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Drawer" {...props}>{children}</div>;
}

export default Drawer;
