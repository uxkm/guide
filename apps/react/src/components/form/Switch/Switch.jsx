export function Switch({ children = 'Switch', className = '', ...props }) {
  const classes = ['uxkm-switch', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Switch" {...props}>{children}</div>;
}

export default Switch;
