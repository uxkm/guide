export function Avatar({ children = 'Avatar', className = '', ...props }) {
  const classes = ['uxkm-avatar', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Avatar" {...props}>{children}</div>;
}

export default Avatar;
