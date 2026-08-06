export function Popover({ children = 'Popover', className = '', ...props }) {
  const classes = ['uxkm-popover', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Popover" {...props}>{children}</div>;
}

export default Popover;
