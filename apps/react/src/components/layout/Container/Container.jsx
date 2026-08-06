export function Container({ children = 'Container', className = '', ...props }) {
  const classes = ['uxkm-container', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Container" {...props}>{children}</div>;
}

export default Container;
