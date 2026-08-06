export function Textarea({ children = 'Textarea', className = '', ...props }) {
  const classes = ['uxkm-textarea', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Textarea" {...props}>{children}</div>;
}

export default Textarea;
