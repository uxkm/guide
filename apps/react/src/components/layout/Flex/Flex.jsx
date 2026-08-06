export function Flex({ children = 'Flex', className = '', ...props }) {
  const classes = ['uxkm-flex', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Flex" {...props}>{children}</div>;
}

export default Flex;
