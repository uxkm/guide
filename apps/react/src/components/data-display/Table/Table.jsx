export function Table({ children = 'Table', className = '', ...props }) {
  const classes = ['uxkm-table', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Table" {...props}>{children}</div>;
}

export default Table;
