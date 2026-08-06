export function Carousel({ children = 'Carousel', className = '', ...props }) {
  const classes = ['uxkm-carousel', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Carousel" {...props}>{children}</div>;
}

export default Carousel;
