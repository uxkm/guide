export function Tree({ children = 'Tree', className = '', ...props }) {
  const classes = ['uxkm-tree', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Tree" {...props}>{children}</div>;
}

export default Tree;
