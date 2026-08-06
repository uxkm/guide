export function Space({ children = 'Space', className = '', ...props }) {
  const classes = ['uxkm-space', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Space" {...props}>{children}</div>;
}

export default Space;
