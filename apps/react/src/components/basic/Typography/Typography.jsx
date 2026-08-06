export function Typography({ children = 'Typography', className = '', ...props }) {
  const classes = ['uxkm-typography', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Typography" {...props}>{children}</div>;
}

export default Typography;
