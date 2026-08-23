import type { FrameworkExample } from './FrameworkCode';

type Name = 'default' | 'fade' | 'autoplay' | 'loop' | 'multi' | 'space' | 'pagination' | 'fraction' | 'progress' | 'custom' | 'grid' | 'coverflow' | 'coverflowRise' | 'thumbs';
type Options = Record<string, string | number | boolean>;
const names: Name[] = ['default', 'fade', 'autoplay', 'loop', 'multi', 'space', 'pagination', 'fraction', 'progress', 'custom', 'grid', 'coverflow', 'coverflowRise', 'thumbs'];
const options: Record<Name, Options> = {
  default: {}, fade: { effect: 'fade' }, autoplay: { autoplay: true, delay: 4000, loop: true, dotsOutside: true },
  loop: { loop: true }, multi: { multi: true, slidesPerView: 'auto', spaceBetween: 16, centered: true, navigation: false },
  space: { spaceBetween: 12, loop: true }, pagination: { loop: true, navigation: false },
  fraction: { pagination: 'fraction' }, progress: { pagination: 'progressbar', loop: true },
  custom: { pagination: 'custom', loop: true, navigation: false }, grid: { slidesPerView: 3, slidesPerGroup: 6, gridRows: 2, spaceBetween: 16 },
  coverflow: { effect: 'coverflow', coverflowSides: 1, spaceBetween: 16, loop: true, pagination: false },
  coverflowRise: { effect: 'coverflow', coverflowStyle: 'rise', coverflowSides: 2, spaceBetween: 12, loop: true, pagination: false }, thumbs: {},
};

const slideData = `const slides = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  overline: 'FEATURED',
  title: \`콘텐츠 \${index + 1}\`,
  body: \`캐러셀 예시 콘텐츠 \${index + 1}입니다.\`,
  color: ['primary', 'success', 'warning', 'info'][index % 4],
}));`;

const slideCount = (name: Name) => name === 'grid' || name.startsWith('coverflow') || name === 'thumbs' ? 12 : name === 'multi' || name === 'custom' ? 4 : 3;

function htmlAttrs(config: Options) {
  return [config.effect && `data-swiper-effect="${config.effect}"`, config.coverflowStyle && `data-swiper-coverflow-style="${config.coverflowStyle}"`, config.coverflowSides && `data-swiper-coverflow-sides="${config.coverflowSides}"`, config.autoplay && 'data-swiper-autoplay', config.delay && `data-swiper-delay="${config.delay}"`, config.loop && 'data-swiper-loop', config.initialSlide && `data-swiper-initial-slide="${config.initialSlide}"`, config.centered && 'data-swiper-centered', config.slidesPerView && `data-swiper-slides-per-view="${config.slidesPerView}"`, config.slidesPerGroup && `data-swiper-slides-per-group="${config.slidesPerGroup}"`, config.spaceBetween && `data-swiper-space-between="${config.spaceBetween}"`, typeof config.pagination === 'string' && `data-swiper-pagination="${config.pagination}"`, config.gridRows && `data-swiper-grid-rows="${config.gridRows}"`].filter(Boolean).join(' ');
}

function htmlClasses(config: Options) {
  return ['carousel', config.multi && 'carousel_multi', config.effect === 'coverflow' && 'carousel_coverflow', config.coverflowStyle === 'rise' && 'carousel_coverflow-rise', Number(config.gridRows) > 1 && 'carousel_grid', config.pagination === 'custom' && 'carousel_pagination-custom', config.pagination === 'progressbar' && 'carousel_pagination-progress'].filter(Boolean).join(' ');
}

function htmlShell(config: Options, id: string, swiperAttrs = '', extraClass = '') {
  return `<div id="${id}" class="${htmlClasses(config)}${extraClass}" data-component="Carousel">
  <div class="swiper" data-swiper ${htmlAttrs(config)}${swiperAttrs ? ` ${swiperAttrs}` : ''} role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드">
    <div class="swiper-wrapper" data-carousel-slides></div>
    ${config.navigation === false ? '' : '<div class="swiper-button-prev" aria-label="이전 슬라이드" data-ripple="surface"></div>\n    <div class="swiper-button-next" aria-label="다음 슬라이드" data-ripple="surface"></div>'}
    ${config.pagination === false ? '' : '<div class="swiper-pagination"></div>'}
  </div>
</div>`;
}

function htmlExamples(name: Name, variants: Options[]) {
  const shells = name === 'thumbs'
    ? `<div id="carousel-gallery" class="carousel_gallery">
  ${htmlShell({ pagination: false }, 'carousel-main', 'data-swiper-thumbs="#carousel-thumbs-swiper"')}
  ${htmlShell({ slidesPerView: 4, spaceBetween: 8, pagination: false, navigation: false }, 'carousel-thumbs', 'id="carousel-thumbs-swiper" data-swiper-watch-slides-progress', ' carousel_thumbs')}
</div>`
    : variants.map((config, index) => htmlShell(config, `carousel-${name}-${index + 1}`)).join('\n\n');
  const selectors = name === 'thumbs'
    ? `['#carousel-main', '#carousel-thumbs']`
    : `[${variants.map((_, index) => `'#carousel-${name}-${index + 1}'`).join(', ')}]`;
  return `${shells}

<script type="module">
import { initCarousel } from './carousel.js';

${slideData}

for (const selector of ${selectors}) {
  const carousel = document.querySelector(selector);
  const wrapper = carousel.querySelector('[data-carousel-slides]');

  for (const slide of slides.slice(0, ${slideCount(name)})) {
    wrapper.insertAdjacentHTML('beforeend', \`
      <div class="swiper-slide">
        <article class="card card_accent color_\${slide.color}">
          <div class="card_body">
            <p class="typo_overline">\${slide.overline}</p>
            <h3 class="card_title">\${slide.title}</h3>
            <p class="typo_lead">\${slide.body}</p>
          </div>
        </article>
      </div>
    \`);
  }

}

initCarousel(document);
</script>`;
}

function gulpCarousel(config: Options, index: number) {
  const assignments = Object.entries(config).map(([key, value]) => `  ${key}: ${typeof value === 'string' ? `'${value}'` : value}`).join(',\n');
  return `{% include "components/miscellaneous/Carousel/carousel.njk" with {
  id: 'carousel-${index + 1}',
  slides: slides${assignments ? `,\n${assignments}` : ''}
} %}`;
}

function gulpExamples(name: Name, variants: Options[]) {
  const includes = name === 'thumbs'
    ? `{% include "components/miscellaneous/Carousel/carousel.njk" with { id: 'carousel-main', slides: slides, thumbs: '#carousel-thumbs', pagination: false } %}
{% include "components/miscellaneous/Carousel/carousel.njk" with { id: 'carousel-thumbs', slides: slides, slidesPerView: 4, spaceBetween: 8, pagination: false, navigation: false, thumbsControl: true, watchSlidesProgress: true } %}`
    : variants.map(gulpCarousel).join('\n\n');
  return `{% set slides = [] %}
{% for index in range(0, ${slideCount(name)}) %}
  {% set slides = (slides.push({
    id: index + 1,
    overline: 'FEATURED',
    title: '콘텐츠 ' + (index + 1),
    content: '캐러셀 예시 콘텐츠 ' + (index + 1) + '입니다.',
    color: ['primary', 'success', 'warning', 'info'][index % 4]
  }), slides) %}
{% endfor %}

${includes}`;
}

function propValue(key: string, value: string | number | boolean, vue = false) {
  if (value === true) return key.replace(/[A-Z]/g, (letter) => vue ? `-${letter.toLowerCase()}` : letter);
  if (value === false) return vue ? `:${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}="false"` : `${key}={false}`;
  const prop = vue ? key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) : key;
  return typeof value === 'number' ? (vue ? `:${prop}="${value}"` : `${prop}={${value}}`) : `${prop}="${value}"`;
}

const reactSlides = (count: number, compact = false) => `{slides.slice(0, ${count}).map((slide) => (
    <CarouselSlide key={slide.id}>
      <article className={\`card card_accent color_\${slide.color}\`}>
        <div className="card_body">
          <p className="typo_overline">{slide.overline}</p>
          <h3 className="card_title">{slide.title}</h3>
          <p className="${compact ? 'card_subtitle' : 'typo_lead'}">{slide.body}</p>
        </div>
      </article>
    </CarouselSlide>
  ))}`;

const vueSlides = (count: number, compact = false) => `<CarouselSlide v-for="slide in slides.slice(0, ${count})" :key="slide.id">
    <article :class="['card', 'card_accent', \`color_\${slide.color}\`]">
      <div class="card_body">
        <p class="typo_overline">{{ slide.overline }}</p>
        <h3 class="card_title">{{ slide.title }}</h3>
        <p class="${compact ? 'card_subtitle' : 'typo_lead'}">{{ slide.body }}</p>
      </div>
    </article>
  </CarouselSlide>`;

function componentCarousel(name: Name, config: Options, vue = false) {
  const props = Object.entries(config).map(([key, value]) => propValue(key, value, vue)).join(' ');
  return `<Carousel ${vue ? 'aria-label' : 'ariaLabel'}="콘텐츠 슬라이드"${props ? ` ${props}` : ''}>
  ${vue ? vueSlides(slideCount(name)) : reactSlides(slideCount(name))}
</Carousel>`;
}

function examples(name: Name): FrameworkExample[] {
  const variants = name === 'grid'
    ? [{ slidesPerView: 3, gridRows: 2, spaceBetween: 16 }, { slidesPerView: 3, slidesPerGroup: 6, gridRows: 2, spaceBetween: 16 }]
    : name === 'coverflowRise'
      ? [1, 1.5, 2].map((coverflowSides) => ({ effect: 'coverflow', coverflowStyle: 'rise', coverflowSides, spaceBetween: 16, loop: true, pagination: false }))
      : [options[name]];
  const reactMarkup = variants.map((config) => componentCarousel(name, config)).join('\n\n');
  const vueMarkup = variants.map((config) => componentCarousel(name, config, true)).join('\n\n');
  const reactBody = name === 'thumbs'
    ? `const [thumbs, setThumbs] = useState(null);
  return <div className="carousel_gallery">
    <Carousel ariaLabel="갤러리 메인" thumbs={thumbs} pagination={false}>${reactSlides(8)}</Carousel>
    <Carousel ariaLabel="썸네일" slidesPerView={4} pagination={false} navigation={false} thumbsControl watchSlidesProgress onSwiper={setThumbs}>${reactSlides(8, true)}</Carousel>
  </div>;`
    : variants.length > 1 ? `return <>\n${reactMarkup}\n</>;` : `return ${reactMarkup};`;
  const vueBody = name === 'thumbs'
    ? `<div class="carousel_gallery">
    <Carousel aria-label="갤러리 메인" :thumbs="thumbs" :pagination="false">${vueSlides(8)}</Carousel>
    <Carousel aria-label="썸네일" :slides-per-view="4" :pagination="false" :navigation="false" thumbs-control watch-slides-progress @swiper="thumbs = $event">${vueSlides(8, true)}</Carousel>
  </div>`
    : vueMarkup;
  const reactCode = `import { Carousel, CarouselSlide } from '@uxkm/react/carousel';${name === 'thumbs' ? "\nimport { useState } from 'react';" : ''}

${slideData}

export function Example() {
  ${reactBody}
}`;
  const vueCode = `<script setup>
${name === 'thumbs' ? "import { ref } from 'vue';\nconst thumbs = ref(null);\n" : ''}import { Carousel, CarouselSlide } from '@uxkm/vue/carousel';

${slideData}
</script>

<template>
  ${vueBody}
</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Carousel.html · ${name}`, code: htmlExamples(name, variants) },
    { id: 'gulp', label: 'Gulp', fileName: `carousel.njk · ${name}`, code: gulpExamples(name, variants) },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/carousel · ${name}`, code: vueCode },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/carousel · ${name}`, code: vueCode },
    { id: 'react', label: 'React', fileName: `@uxkm/react/carousel · ${name}`, code: reactCode },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/carousel · ${name}`, code: reactCode },
  ];
}

export const carouselFrameworkExamples = Object.fromEntries(names.map((name) => [name, examples(name)])) as Record<Name, FrameworkExample[]>;
