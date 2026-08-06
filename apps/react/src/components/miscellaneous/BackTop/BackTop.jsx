export function BackTop({ children = 'BackTop', className = '', ...props }) {
  const classes = ['uxkm-back-top', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="BackTop" {...props}>{children}</div>;
}

export default BackTop;
