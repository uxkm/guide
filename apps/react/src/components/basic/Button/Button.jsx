export function Button({ children = 'Button', className = '', ...props }) {
  const classes = ['uxkm-button', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Button" {...props}>{children}</div>;
}

export default Button;
