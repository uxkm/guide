export function Dropdown({ children = 'Dropdown', className = '', ...props }) {
  const classes = ['uxkm-dropdown', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Dropdown" {...props}>{children}</div>;
}

export default Dropdown;
