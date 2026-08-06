export function Divider({ children = 'Divider', className = '', ...props }) {
  const classes = ['uxkm-divider', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Divider" {...props}>{children}</div>;
}

export default Divider;
