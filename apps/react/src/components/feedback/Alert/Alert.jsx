export function Alert({ children = 'Alert', className = '', ...props }) {
  const classes = ['uxkm-alert', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Alert" {...props}>{children}</div>;
}

export default Alert;
