export function Slider({ children = 'Slider', className = '', ...props }) {
  const classes = ['uxkm-slider', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Slider" {...props}>{children}</div>;
}

export default Slider;
