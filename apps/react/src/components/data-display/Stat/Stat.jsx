export function Stat({ children = 'Stat', className = '', ...props }) {
  const classes = ['uxkm-stat', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Stat" {...props}>{children}</div>;
}

export default Stat;
