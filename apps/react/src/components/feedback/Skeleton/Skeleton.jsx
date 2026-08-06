export function Skeleton({ children = 'Skeleton', className = '', ...props }) {
  const classes = ['uxkm-skeleton', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Skeleton" {...props}>{children}</div>;
}

export default Skeleton;
