export function Navbar({ children = 'Navbar', className = '', ...props }) {
  const classes = ['uxkm-navbar', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Navbar" {...props}>{children}</div>;
}

export default Navbar;
