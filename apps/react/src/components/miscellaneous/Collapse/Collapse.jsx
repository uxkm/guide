export function Collapse({ children = 'Collapse', className = '', ...props }) {
  const classes = ['uxkm-collapse', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Collapse" {...props}>{children}</div>;
}

export default Collapse;
