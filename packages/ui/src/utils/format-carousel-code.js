const DEFAULTS = {
  demo: true,
  delay: 4000,
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  pagination: true,
  navigation: true,
  gridRows: 1,
  gridFill: 'row',
  coverflowStyle: 'tilt',
  coverflowSides: 1.5,
};

const BOOLEAN_PROPS = new Set([
  'demo',
  'multi',
  'dotsOutside',
  'autoplayToggle',
  'autoplay',
  'loop',
  'centered',
  'thumbsControl',
  'watchSlidesProgress',
  'freeMode',
]);

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipProp(key, value, props = {}) {
  if (value === undefined || value === null || value === '') return true;
  if (key === 'navigation' && value === false) return false;
  if (key === 'pagination' && value === false) return false;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  if (key === 'ariaLabel') return true;
  if (key === 'autoplayToggle' && props.autoplay) return true;
  if (key === 'thumbs') return true;
  if (key === 'coverflowEffect') return true;
  return false;
}

function formatCarouselProps(props, customAttrs = {}) {
  const parts = Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (shouldSkipProp(key, value, props)) return acc;

    if (BOOLEAN_PROPS.has(key)) {
      acc.push(toKebab(key));
      return acc;
    }

    if (key === 'slidesPerView' && typeof value === 'string') {
      acc.push(`slides-per-view="${value}"`);
      return acc;
    }

    if (
      key === 'slidesPerView' ||
      key === 'slidesPerGroup' ||
      key === 'delay' ||
      key === 'spaceBetween' ||
      key === 'gridRows' ||
      key === 'initialSlide' ||
      key === 'coverflowSides'
    ) {
      acc.push(`:${toKebab(key)}="${value}"`);
      return acc;
    }

    if (key === 'pagination' && typeof value === 'string') {
      acc.push(`pagination="${value}"`);
      return acc;
    }

    if (key === 'pagination' && value === true) return acc;
    if (key === 'pagination' && value === false) {
      acc.push(':pagination="false"');
      return acc;
    }
    if (key === 'navigation' && value === true) return acc;
    if (key === 'navigation' && value === false) {
      acc.push(':navigation="false"');
      return acc;
    }

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

  if (!slideCount) {
    return `<Carousel${attrStr} />`;
  }

  return [
    `<Carousel${attrStr}>`,
    '  <CarouselSlide v-for="slide in slides" :key="slide.title">',
    '    …',
    '  </CarouselSlide>',
    '</Carousel>',
  ].join('\n');
}
