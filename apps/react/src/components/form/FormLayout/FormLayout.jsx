export function FormLayout({ children = 'FormLayout', className = '', ...props }) {
  const classes = ['uxkm-form-layout', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="FormLayout" {...props}>{children}</div>;
}

export default FormLayout;
