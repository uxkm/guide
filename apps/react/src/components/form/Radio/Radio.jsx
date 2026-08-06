export function Radio({ children = 'Radio', className = '', ...props }) {
  const classes = ['uxkm-radio', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Radio" {...props}>{children}</div>;
}

export default Radio;
