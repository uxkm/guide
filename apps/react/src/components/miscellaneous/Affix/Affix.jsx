export function Affix({ children = 'Affix', className = '', ...props }) {
  const classes = ['uxkm-affix', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Affix" {...props}>{children}</div>;
}

export default Affix;
