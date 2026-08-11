export function Button({ children = 'Button', className = '', variant = 'primary', ...props }) {
  const classes = ['uxkm-button', `uxkm-button--${variant}`, className].filter(Boolean).join(' ');
  return <button className={classes} data-component="Button" type="button" {...props}>{children}</button>;
}

export default Button;
