export function CarouselSlide({ children, className = '', ...props }) {
  return <div {...props} className={['swiper-slide', className].filter(Boolean).join(' ')}>{children}</div>;
}

export default CarouselSlide;
