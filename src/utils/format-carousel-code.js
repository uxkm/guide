const DEFAULTS = {
  demo: true,
  delay: 4000,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: true,
  navigation: true,
};

const BOOLEAN_PROPS = new Set(['demo', 'multi', 'dotsOutside', 'autoplayToggle', 'autoplay', 'loop', 'centered']);

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipProp(key, value) {
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  if (key === 'ariaLabel') return true;
  return false;
}

function formatCarouselProps(props, customAttrs = {}) {
  const parts = Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (shouldSkipProp(key, value)) return acc;

    if (BOOLEAN_PROPS.has(key)) {
      acc.push(toKebab(key));
      return acc;
    }

    if (key === 'slidesPerView' && typeof value === 'string') {
      acc.push(`slides-per-view="${value}"`);
      return acc;
    }

    if (key === 'slidesPerView' || key === 'delay' || key === 'spaceBetween') {
      acc.push(`:${toKebab(key)}="${value}"`);
      return acc;
    }

    if (key === 'pagination' && value === 'fraction') {
      acc.push('pagination="fraction"');
      return acc;
    }

    if (key === 'pagination' && value === true) return acc;
    if (key === 'navigation' && value === true) return acc;

    acc.push(`${toKebab(key)}="${value}"`);
    return acc;
  }, []);

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (key === 'class' || key === 'style') return;
  });

  return parts;
}

export function formatCarouselCode(props, slideCount = 0, customAttrs = {}) {
  const propParts = formatCarouselProps(props, customAttrs);
  propParts.unshift(`aria-label="${props.ariaLabel}"`);

  const attrStr = propParts.length ? ` ${propParts.join(' ')}` : '';
  const slides = Array.from({ length: slideCount }, () => '  <CarouselSlide>\n    …\n  </CarouselSlide>');

  if (!slides.length) {
    return `<Carousel${attrStr} />`;
  }

  return [`<Carousel${attrStr}>`, ...slides, '</Carousel>'].join('\n');
}
