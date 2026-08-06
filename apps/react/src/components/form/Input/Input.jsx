export function Input({ children = 'Input', className = '', ...props }) {
  const classes = ['uxkm-input', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Input" {...props}>{children}</div>;
}

export default Input;
