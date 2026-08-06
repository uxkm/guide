export function Link({ children = 'Link', className = '', ...props }) {
  const classes = ['uxkm-link', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Link" {...props}>{children}</div>;
}

export default Link;
