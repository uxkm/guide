export function Spin({ children = 'Spin', className = '', ...props }) {
  const classes = ['uxkm-spin', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Spin" {...props}>{children}</div>;
}

export default Spin;
