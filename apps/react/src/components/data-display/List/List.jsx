export function List({ children = 'List', className = '', ...props }) {
  const classes = ['uxkm-list', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="List" {...props}>{children}</div>;
}

export default List;
