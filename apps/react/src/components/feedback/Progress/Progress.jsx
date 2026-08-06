export function Progress({ children = 'Progress', className = '', ...props }) {
  const classes = ['uxkm-progress', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Progress" {...props}>{children}</div>;
}

export default Progress;
