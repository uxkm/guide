export function Tooltip({ children = 'Tooltip', className = '', ...props }) {
  const classes = ['uxkm-tooltip', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Tooltip" {...props}>{children}</div>;
}

export default Tooltip;
