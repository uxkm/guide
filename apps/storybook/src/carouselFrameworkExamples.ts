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

const slideCount = (name: Name) => name === 'grid' || name.startsWith('coverflow') || name === 'thumbs' ? 12 : name === 'multi' || name === 'custom' ? 4 : 3;

const inlineSlidesJson = `[
  { "id": 1, "overline": "이벤트", "title": "신규 가입 혜택", "body": "첫 주문 20% 할인 쿠폰을 드립니다.", "color": "primary" },
  { "id": 2, "overline": "혜택", "title": "무료 배송", "body": "3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.", "color": "success" },
  { "id": 3, "overline": "세일", "title": "시즌 세일", "body": "베스트셀러 상품을 최대 50% 할인합니다.", "color": "warning" }
]`;

const inlineSlidesScript = `const carouselSlides = ${inlineSlidesJson};`;

function htmlAttrs(config: Options) {
  return [config.effect && `data-swiper-effect="${config.effect}"`, config.coverflowStyle && `data-swiper-coverflow-style="${config.coverflowStyle}"`, config.coverflowSides && `data-swiper-coverflow-sides="${config.coverflowSides}"`, config.autoplay && 'data-swiper-autoplay', config.delay && `data-swiper-delay="${config.delay}"`, config.loop && 'data-swiper-loop', config.initialSlide && `data-swiper-initial-slide="${config.initialSlide}"`, config.centered && 'data-swiper-centered', config.slidesPerView && `data-swiper-slides-per-view="${config.slidesPerView}"`, config.slidesPerGroup && `data-swiper-slides-per-group="${config.slidesPerGroup}"`, config.spaceBetween && `data-swiper-space-between="${config.spaceBetween}"`, typeof config.pagination === 'string' && `data-swiper-pagination="${config.pagination}"`, config.gridRows && `data-swiper-grid-rows="${config.gridRows}"`].filter(Boolean).join(' ');
}

function htmlClasses(config: Options) {
  return ['carousel', config.multi && 'carousel_multi', config.effect === 'coverflow' && 'carousel_coverflow', config.coverflowStyle === 'rise' && 'carousel_coverflow-rise', Number(config.gridRows) > 1 && 'carousel_grid', config.pagination === 'custom' && 'carousel_pagination-custom', config.pagination === 'progressbar' && 'carousel_pagination-progress'].filter(Boolean).join(' ');
}

const directHtmlSlides = `<div class="swiper-wrapper">
      <div class="swiper-slide"><article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article></div>
    </div>`;

function htmlShell(config: Options, id: string, swiperAttrs = '', extraClass = '', slidesMarkup = '<div class="swiper-wrapper" data-carousel-slides></div>') {
  return `<div id="${id}" class="${htmlClasses(config)}${extraClass}" data-component="Carousel">
  <div class="swiper" data-swiper ${htmlAttrs(config)}${swiperAttrs ? ` ${swiperAttrs}` : ''} role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드">
    ${slidesMarkup}
    ${config.navigation === false ? '' : '<div class="swiper-button-prev" aria-label="이전 슬라이드" data-ripple="surface"></div>\n    <div class="swiper-button-next" aria-label="다음 슬라이드" data-ripple="surface"></div>'}
    ${config.pagination === false ? '' : '<div class="swiper-pagination"></div>'}
  </div>
</div>`;
}

function htmlExamples(name: Name, variants: Options[]) {
  if (name === 'default') return htmlShell(options.default, 'carousel-default', '', '', directHtmlSlides);
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

${name === 'fade' ? `<script type="application/json" id="carousel-slides-data">
${inlineSlidesJson}
</script>` : ''}

<script type="module">
import { initCarousel } from './carousel.js';
${name === 'fade' ? "const carouselSlides = JSON.parse(document.querySelector('#carousel-slides-data').textContent);" : "import { carouselSlides } from './data/carousel-slides.js';"}

for (const selector of ${selectors}) {
  const carousel = document.querySelector(selector);
  const wrapper = carousel.querySelector('[data-carousel-slides]');

  for (const slide of carouselSlides.slice(0, ${slideCount(name)})) {
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

const gulpCarouselImport = `{% from "components/miscellaneous/Carousel/carousel.njk" import carousel, carouselSlide %}`;
const gulpSlideData = [
  { overline: '이벤트', title: '신규 가입 혜택', body: '첫 주문 20% 할인 쿠폰을 드립니다.', color: 'primary' },
  { overline: '혜택', title: '무료 배송', body: '3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.', color: 'success' },
  { overline: '세일', title: '시즌 세일', body: '베스트셀러 상품을 최대 50% 할인합니다.', color: 'warning' },
];
function gulpSlides(count: number, compact = false) {
  return Array.from({ length: count }, (_, index) => {
    const slide = gulpSlideData[index % gulpSlideData.length];
    return `  {{ carouselSlide(overline='${slide.overline}', title='${slide.title}', content='${slide.body}', color='${slide.color}'${compact ? ', compact=true' : ''}) }}`;
  }).join('\n');
}
function gulpCarousel(config: Options, id: string, limit: number, compact = false, ariaLabel = '콘텐츠 슬라이드') {
  const configArgs = Object.entries(config).map(([key, value]) => `${key}=${typeof value === 'string' ? `'${value}'` : value}`).join(', ');
  const args = [`id='${id}'`, `ariaLabel='${ariaLabel}'`, configArgs].filter(Boolean).join(', ');
  return `${gulpCarouselImport}

{% call carousel(${args}) %}
${gulpSlides(limit, compact)}
{% endcall %}`;
}

function gulpExamples(name: Name, variants: Options[]) {
  if (name === 'thumbs') return `<div class="carousel_gallery">
  ${gulpCarousel({ thumbs: '#carousel-thumbs-swiper', pagination: false }, 'carousel-main', 8, false, '갤러리 메인')}

  ${gulpCarousel({ slidesPerView: 4, spaceBetween: 8, pagination: false, navigation: false, thumbsControl: true, watchSlidesProgress: true }, 'carousel-thumbs-swiper', 8, true, '썸네일')}
</div>`;
  return variants.map((config, index) => gulpCarousel(config, `carousel-${name}-${index + 1}`, slideCount(name))).join('\n\n');
}

function propValue(key: string, value: string | number | boolean, vue = false) {
  if (value === true) return key.replace(/[A-Z]/g, (letter) => vue ? `-${letter.toLowerCase()}` : letter);
  if (value === false) return vue ? `:${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}="false"` : `${key}={false}`;
  const prop = vue ? key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) : key;
  return typeof value === 'number' ? (vue ? `:${prop}="${value}"` : `${prop}={${value}}`) : `${prop}="${value}"`;
}

const reactSlides = (count: number, compact = false) => `{carouselSlides.slice(0, ${count}).map((slide) => (
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

const vueSlides = (count: number, compact = false) => `<CarouselSlide v-for="slide in carouselSlides.slice(0, ${count})" :key="slide.id">
    <article :class="['card', 'card_accent', \`color_\${slide.color}\`]">
      <div class="card_body">
        <p class="typo_overline">{{ slide.overline }}</p>
        <h3 class="card_title">{{ slide.title }}</h3>
        <p class="${compact ? 'card_subtitle' : 'typo_lead'}">{{ slide.body }}</p>
      </div>
    </article>
  </CarouselSlide>`;

const directReactSlides = `<CarouselSlide>
    <article className="card card_accent color_primary"><div className="card_body"><p className="typo_overline">이벤트</p><h3 className="card_title">신규 가입 혜택</h3><p className="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_success"><div className="card_body"><p className="typo_overline">혜택</p><h3 className="card_title">무료 배송</h3><p className="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_warning"><div className="card_body"><p className="typo_overline">세일</p><h3 className="card_title">시즌 세일</h3><p className="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`;

const directVueSlides = `<CarouselSlide>
    <article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`;

function componentCarousel(name: Name, config: Options, vue = false) {
  const props = Object.entries(config).map(([key, value]) => propValue(key, value, vue)).join(' ');
  return `<Carousel ${vue ? 'aria-label' : 'ariaLabel'}="콘텐츠 슬라이드"${props ? ` ${props}` : ''}>
  ${name === 'default' ? (vue ? directVueSlides : directReactSlides) : (vue ? vueSlides(slideCount(name)) : reactSlides(slideCount(name)))}
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
  const reactCode = `import { Carousel, CarouselSlide } from '@uxkm/react/carousel';${name === 'thumbs' ? "\nimport { useState } from 'react';" : ''}${name === 'default' || name === 'fade' ? '' : "\nimport { carouselSlides } from './data/carousel-slides';"}${name === 'fade' ? `\n\n${inlineSlidesScript}` : ''}

export function Example() {
  ${reactBody}
}`;
  const vueCode = `<script setup>
${name === 'thumbs' ? "import { ref } from 'vue';\nconst thumbs = ref(null);\n" : ''}import { Carousel, CarouselSlide } from '@uxkm/vue/carousel';${name === 'default' || name === 'fade' ? '' : "\nimport { carouselSlides } from './data/carousel-slides';"}${name === 'fade' ? `\n\n${inlineSlidesScript}` : ''}
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
