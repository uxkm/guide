export function Rate({ children = 'Rate', className = '', ...props }) {
  const classes = ['uxkm-rate', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Rate" {...props}>{children}</div>;
}

export default Rate;
