export function Steps({ children = 'Steps', className = '', ...props }) {
  const classes = ['uxkm-steps', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Steps" {...props}>{children}</div>;
}

export default Steps;
