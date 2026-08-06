export function Badge({ children = 'Badge', className = '', ...props }) {
  const classes = ['uxkm-badge', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Badge" {...props}>{children}</div>;
}

export default Badge;
