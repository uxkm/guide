export function Upload({ children = 'Upload', className = '', ...props }) {
  const classes = ['uxkm-upload', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Upload" {...props}>{children}</div>;
}

export default Upload;
