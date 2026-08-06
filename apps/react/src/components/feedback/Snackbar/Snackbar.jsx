export function Snackbar({ children = 'Snackbar', className = '', ...props }) {
  const classes = ['uxkm-snackbar', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Snackbar" {...props}>{children}</div>;
}

export default Snackbar;
