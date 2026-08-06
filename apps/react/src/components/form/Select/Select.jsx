export function Select({ children = 'Select', className = '', ...props }) {
  const classes = ['uxkm-select', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Select" {...props}>{children}</div>;
}

export default Select;
