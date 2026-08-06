export function Timeline({ children = 'Timeline', className = '', ...props }) {
  const classes = ['uxkm-timeline', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Timeline" {...props}>{children}</div>;
}

export default Timeline;
