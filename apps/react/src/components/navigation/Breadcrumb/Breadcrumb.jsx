export function Breadcrumb({ children = 'Breadcrumb', className = '', ...props }) {
  const classes = ['uxkm-breadcrumb', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Breadcrumb" {...props}>{children}</div>;
}

export default Breadcrumb;
