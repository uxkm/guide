export function Icon({ children = 'Icon', className = '', ...props }) {
  const classes = ['uxkm-icon', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Icon" {...props}>{children}</div>;
}

export default Icon;
