export function Pagination({ children = 'Pagination', className = '', ...props }) {
  const classes = ['uxkm-pagination', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Pagination" {...props}>{children}</div>;
}

export default Pagination;
