export function Tag({ children = 'Tag', className = '', ...props }) {
  const classes = ['uxkm-tag', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Tag" {...props}>{children}</div>;
}

export default Tag;
