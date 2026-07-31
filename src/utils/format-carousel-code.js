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

function shouldSkipProp(key, value, props = {}) {
  if (value === undefined || value === null || value === '') return true;
  if (key === 'demo' && value === false) return false;
  if (key === 'navigation' && value === false) return false;
  if (key === 'pagination' && value === false) return false;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  if (key === 'autoplayToggle' && props.autoplay) return true;
  if (key === 'thumbs') return true;
  if (key === 'coverflowEffect') return true;
  return false;
}

function formatString(value) {
  return JSON.stringify(String(value));
}

function formatProp(key, value) {
  if (BOOLEAN_PROPS.has(key)) {
    return value ? key : `${key}={false}`;
  }

  if (typeof value === 'number') {
    return `${key}={${value}}`;
  }

  if (typeof value === 'boolean') {
    return value ? key : `${key}={false}`;
  }

  return `${key}=${formatString(value)}`;
}

function formatCarouselProps(props, customAttrs = {}) {
  const parts = Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (shouldSkipProp(key, value, props)) return acc;

    acc.push(formatProp(key, value));
    return acc;
  }, []);

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    if (key === 'style' || key.startsWith('on')) return;

    const propName = key === 'class' ? 'className' : key;
    parts.push(formatProp(propName, value));
  });

  return parts;
}

export function formatCarouselCode(props, slideCount = 0, customAttrs = {}) {
  const propParts = formatCarouselProps(props, customAttrs);

  const attrStr = propParts.length ? ` ${propParts.join(' ')}` : '';

  if (!slideCount) {
    return `<Carousel${attrStr} />`;
  }

  return [
    `<Carousel${attrStr}>`,
    '  {slides.map((slide) => (',
    '    <CarouselSlide key={slide.title}>',
    '      …',
    '    </CarouselSlide>',
    '  ))}',
    '</Carousel>',
  ].join('\n');
}
