export function Empty({ children = 'Empty', className = '', ...props }) {
  const classes = ['uxkm-empty', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Empty" {...props}>{children}</div>;
}

export default Empty;
