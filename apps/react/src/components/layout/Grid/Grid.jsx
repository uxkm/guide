export function Grid({ children = 'Grid', className = '', ...props }) {
  const classes = ['uxkm-grid', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Grid" {...props}>{children}</div>;
}

export default Grid;
