export function Checkbox({ children = 'Checkbox', className = '', ...props }) {
  const classes = ['uxkm-checkbox', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Checkbox" {...props}>{children}</div>;
}

export default Checkbox;
