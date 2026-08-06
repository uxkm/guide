export function Tabs({ children = 'Tabs', className = '', ...props }) {
  const classes = ['uxkm-tabs', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Tabs" {...props}>{children}</div>;
}

export default Tabs;
