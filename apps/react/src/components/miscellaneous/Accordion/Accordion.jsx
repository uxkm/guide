export function Accordion({ children = 'Accordion', className = '', ...props }) {
  const classes = ['uxkm-accordion', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Accordion" {...props}>{children}</div>;
}

export default Accordion;
