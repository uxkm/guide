import Badge from './Badge.vue';
import { withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import CardFooter from './CardFooter.vue';
import CardHeader from './CardHeader.vue';
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';
import Link from './Link.vue';
import Tag from './Tag.vue';
import { ref } from 'vue';
import { formatVueSourceCode } from '@/utils/format-vue-source-code';
import {
  carouselClassColumns,
  carouselClasses,
  carouselPropColumns,
  carouselProps,
  carouselSlotColumns,
  carouselSlots,
  carouselTokenColumns,
  carouselTokens,
} from '@doc-data/carousel-api';
import {
  carouselAutoplaySlideTemplate,
  carouselAutoplaySlides,
  carouselAutoplaySourceCode,
  carouselCoverflowSlideTemplate,
  carouselCoverflowSlides,
  carouselCoverflowSourceCode,
  carouselCoverflowRiseSourceCode,
  carouselCustomPaginationSlides,
  carouselCustomPaginationSourceCode,
  carouselDefaultSlideTemplate,
  carouselDefaultSlides,
  carouselDefaultSourceCode,
  carouselFadeSlideTemplate,
  carouselFadeSlides,
  carouselFadeSourceCode,
  carouselFractionSlideTemplate,
  carouselFractionSlides,
  carouselFractionSourceCode,
  carouselGridSlides,
  carouselGridSourceCode,
  carouselLoopSlideTemplate,
  carouselLoopSlides,
  carouselLoopSourceCode,
  carouselMultiSlideTemplate,
  carouselMultiSlides,
  carouselMultiSourceCode,
  carouselPaginationSlides,
  carouselPaginationSourceCode,
  carouselPlaygroundSlides,
  carouselPlaygroundSourceCode,
  carouselProgressSlides,
  carouselProgressSourceCode,
  carouselSimpleSlideTemplate,
  carouselSpaceSlides,
  carouselSpacingSourceCode,
  carouselThumbsControlSlideTemplate,
  carouselThumbsMainSlideTemplate,
  carouselThumbsSlides,
  carouselThumbsSourceCode,
} from '@doc-data/carousel-demos';

const slideComponents = {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  CarouselSlide,
  Link,
  Tag,
};

function vueSource(code) {
  return {
    code: formatVueSourceCode(code),
    language: 'vue',
  };
}

const carouselDefaultArgs = {
  ariaLabel: "프로모션 슬라이드",
  demo: true,
  multi: false,
  dotsOutside: false,
  autoplayToggle: false,
  effect: "",
  autoplay: false,
  delay: 4000,
  loop: false,
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  centered: false,
  pagination: true,
  navigation: true,
  gridRows: 1,
  gridFill: "row",
  coverflowStyle: "tilt",
  coverflowSides: 1.5,
  thumbsControl: false,
  watchSlidesProgress: false,
  freeMode: false,
};

function renderCarouselCanvas(slides, slideTemplate) {
  return (args) => ({
    components: slideComponents,
    setup() {
      return { args: storyArgsRef(context), slides };
    },
    template: `<Carousel v-bind="args">
      <CarouselSlide v-for="slide in slides" :key="slide.title">
        ${slideTemplate}
      </CarouselSlide>
    </Carousel>`,
  });
}

const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: carouselPropColumns, rows: carouselProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: carouselSlotColumns, rows: carouselSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: carouselClassColumns, rows: carouselClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: carouselTokenColumns, rows: carouselTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/기타/Carousel',
  id: 'components-carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    demo: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    multi: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    dotsOutside: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    autoplayToggle: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    effect: { control: 'select', options: ["","fade","coverflow"], type: { name: 'enum', summary: "'' | 'fade' | 'coverflow'" } },
    coverflowStyle: { control: 'select', options: ["tilt","rise"], type: { name: 'enum', summary: "'tilt' | 'rise'" } },
    coverflowSides: { control: 'select', options: [1, 1.5, 2], type: { name: 'union', summary: "1 | 1.5 | 2 | 'auto'" } },
    autoplay: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    delay: { control: 'number', type: { name: 'number', summary: "number" }},
    loop: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    initialSlide: { control: 'number', type: { name: 'number', summary: "number" }},
    slidesPerView: { control: 'select', options: [1, 2, 3, "auto"], type: { name: 'union', summary: "number | 'auto'" } },
    slidesPerGroup: { control: 'number', type: { name: 'number', summary: "number" }},
    spaceBetween: { control: 'number', type: { name: 'number', summary: "number" }},
    centered: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    pagination: { control: 'select', options: [true, false, "fraction", "progressbar", "custom"], type: { name: 'union', summary: "boolean | 'fraction' | 'progressbar' | 'custom'" } },
    navigation: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    gridRows: { control: 'number', type: { name: 'number', summary: "number" }},
    gridFill: { control: 'select', options: ["row", "column"], type: { name: 'enum', summary: "'row' | 'column'" } },
    thumbsControl: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    watchSlidesProgress: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    freeMode: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
  },
  args: {
    ariaLabel: "프로모션 슬라이드",
    demo: true,
    multi: false,
    dotsOutside: false,
    autoplayToggle: false,
    effect: "",
    coverflowStyle: "tilt",
    coverflowSides: 1.5,
    autoplay: false,
    delay: 4000,
    loop: false,
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centered: false,
    pagination: true,
    navigation: true,
    gridRows: 1,
    gridFill: "row",
    thumbsControl: false,
    watchSlidesProgress: false,
    freeMode: false,
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Default = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다.",
      },
      source: vueSource(carouselDefaultSourceCode),
    },
  },
  render: (_args, context) => ({
    components: slideComponents,
    setup() {
      return { args: storyArgsRef(context), carouselDefaultSlides };
    },
    template: `<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselDefaultSlides" :key="slide.title">
        ${carouselDefaultSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  }),
};


export const Fade = {
  name: "페이드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: vueSource(carouselFadeSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, effect: 'fade', ariaLabel: '페이드 슬라이드' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselFadeSlides };
    },
    template: `<Carousel aria-label="페이드 슬라이드" effect="fade">
      <CarouselSlide v-for="slide in carouselFadeSlides" :key="slide.title">
        ${carouselFadeSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Autoplay = {
  name: "자동 재생",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요.",
      },
      source: vueSource(carouselAutoplaySourceCode),
    },
  },
  args: { ...carouselDefaultArgs, autoplay: true, loop: true, dotsOutside: true, ariaLabel: '슬라이드 자동 재생' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselAutoplaySlides };
    },
    template: `<Carousel
      aria-label="슬라이드 자동 재생"
      autoplay
      :delay="4000"
      loop
      dots-outside
    >
      <CarouselSlide v-for="slide in carouselAutoplaySlides" :key="slide.title">
        ${carouselAutoplaySlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Loop = {
  name: "무한 루프",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "loop prop으로 슬라이드를 순환합니다.",
      },
      source: vueSource(carouselLoopSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, loop: true, ariaLabel: '루프 슬라이드' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselLoopSlides };
    },
    template: `<Carousel aria-label="루프 슬라이드" loop>
      <CarouselSlide v-for="slide in carouselLoopSlides" :key="slide.title">
        ${carouselLoopSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Multi = {
  name: "슬라이드 per view",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "slides-per-view=&quot;auto&quot;로 여러 카드가 동시에 보입니다.",
      },
      source: vueSource(carouselMultiSourceCode),
    },
  },
  args: {
    ...carouselDefaultArgs,
    multi: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    centered: true,
    navigation: false,
    ariaLabel: '다중 슬라이드',
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselMultiSlides };
    },
    template: `<Carousel aria-label="다중 슬라이드" multi slides-per-view="auto" :space-between="16" centered :navigation="false">
      <CarouselSlide v-for="slide in carouselMultiSlides" :key="slide.title">
        ${carouselMultiSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Space = {
  name: "슬라이드 간격",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "space-between prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요.",
      },
      source: vueSource(carouselSpacingSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, spaceBetween: 12, loop: true, ariaLabel: '기본 간격' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselSpaceSlides };
    },
    template: `<Carousel aria-label="기본 간격" :space-between="12" loop>
      <CarouselSlide v-for="slide in carouselSpaceSlides" :key="slide.title">
        ${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Pagination = {
  name: "페이지네이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "화살표 없이 도트만 사용합니다.",
      },
      source: vueSource(carouselPaginationSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, loop: true, navigation: false, ariaLabel: '페이지네이션 슬라이드' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselPaginationSlides };
    },
    template: `<Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
      <CarouselSlide v-for="slide in carouselPaginationSlides" :key="slide.title">
        ${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Fraction = {
  name: "분수 페이지네이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: vueSource(carouselFractionSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, pagination: 'fraction', ariaLabel: '분수 페이지네이션 슬라이드' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselFractionSlides };
    },
    template: `<Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
      <CarouselSlide v-for="slide in carouselFractionSlides" :key="slide.title">
        ${carouselFractionSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Progress = {
  name: "프로그레스 페이지네이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pagination="progressbar" prop으로 진행률 바를 표시합니다.',
      },
      source: vueSource(carouselProgressSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, pagination: 'progressbar', loop: true, ariaLabel: '프로그레스 페이지네이션' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselProgressSlides };
    },
    template: `<Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
      <CarouselSlide v-for="slide in carouselProgressSlides" :key="slide.title">
        ${carouselFractionSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const CustomPagination = {
  name: "커스텀 페이지네이션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pagination="custom" prop으로 번호 불릿을 표시합니다.',
      },
      source: vueSource(carouselCustomPaginationSourceCode),
    },
  },
  args: {
    ...carouselDefaultArgs,
    pagination: 'custom',
    loop: true,
    navigation: false,
    ariaLabel: '커스텀 페이지네이션',
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselCustomPaginationSlides };
    },
    template: `<Carousel
      aria-label="커스텀 페이지네이션"
      pagination="custom"
      loop
      :navigation="false"
    >
      <CarouselSlide v-for="slide in carouselCustomPaginationSlides" :key="slide.title">
        ${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const Grid = {
  name: "그리드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "grid-rows prop으로 다행 그리드 레이아웃을 구성합니다. slides-per-group으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 :slides-per-group=\"6\"이 페이지 이동입니다.",
      },
      source: vueSource(carouselGridSourceCode),
    },
  },
  args: {
    ...carouselDefaultArgs,
    slidesPerView: 3,
    gridRows: 2,
    slidesPerGroup: 6,
    spaceBetween: 16,
    ariaLabel: '그리드 그룹 이동',
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselGridSlides };
    },
    template: `<div class="demo_preview-block">
      <h3 class="typo_overline">1장씩 이동</h3>
      <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
      <Carousel
        aria-label="그리드 1장씩"
        :slides-per-view="3"
        :grid-rows="2"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="slide.title">
          ${carouselSimpleSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">그룹 이동</h3>
      <p class="typo_caption">:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.</p>
      <Carousel
        aria-label="그리드 그룹 이동"
        :slides-per-view="3"
        :grid-rows="2"
        :slides-per-group="6"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="'group-' + slide.title">
          ${carouselSimpleSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>`,
  })),
};


export const Coverflow = {
  name: "커버플로우",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflow-sides="1"로 좌·우 1개씩 peek합니다.',
      },
      source: vueSource(carouselCoverflowSourceCode),
    },
  },
  args: {
    ...carouselDefaultArgs,
    effect: 'coverflow',
    coverflowStyle: 'tilt',
    coverflowSides: 1,
    spaceBetween: 16,
    initialSlide: 0,
    loop: true,
    pagination: false,
    ariaLabel: '커버플로우 슬라이드',
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselCoverflowSlides };
    },
    template: `<Carousel
      aria-label="커버플로우 슬라이드"
      effect="coverflow"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
        ${carouselCoverflowSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  })),
};


export const CoverflowRise = {
  name: "커버플로우 · 축소",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'coverflow-style="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflow-sides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.',
      },
      source: vueSource(carouselCoverflowRiseSourceCode),
    },
  },
  args: {
    ...carouselDefaultArgs,
    effect: 'coverflow',
    coverflowStyle: 'rise',
    coverflowSides: 1.5,
    spaceBetween: 16,
    initialSlide: 0,
    loop: true,
    pagination: false,
    ariaLabel: '커버플로우 축소 좌우 1.5',
  },
  argTypes: {
    coverflowSides: {
      control: 'select',
      options: [1, 1.5, 2],
      type: { name: 'union', summary: "1 | 1.5 | 2 | 'auto'" },
    },
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return { carouselCoverflowSlides };
    },
    template: `<div class="demo_preview-block">
      <h3 class="typo_overline">좌우 1개씩</h3>
      <p class="typo_caption">:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
          ${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 약 1.5개 (기본)</h3>
      <p class="typo_caption">:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1.5"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1.5"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides15-' + slide.title">
          ${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 2개씩</h3>
      <p class="typo_caption">:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 2"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="2"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides2-' + slide.title">
          ${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>`,
  })),
};


export const ThumbsGallery = {
  name: "썸네일 갤러리",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "메인 캐러셀과 썸네일 캐러셀을 thumbs · @swiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다.",
      },
      source: vueSource(carouselThumbsSourceCode),
    },
  },
  args: { ...carouselDefaultArgs, pagination: false, ariaLabel: '갤러리 메인' },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      const thumbsSwiper = ref(null);
      return { carouselThumbsSlides, thumbsSwiper };
    },
    template: `<div class="carousel_gallery">
      <Carousel
        aria-label="갤러리 메인"
        :thumbs="thumbsSwiper"
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          ${carouselThumbsMainSlideTemplate}
        </CarouselSlide>
      </Carousel>
      <Carousel
        aria-label="갤러리 썸네일"
        thumbs-control
        :slides-per-view="4"
        :space-between="8"
        :navigation="false"
        :pagination="false"
        @swiper="(swiper) => (thumbsSwiper = swiper)"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          ${carouselThumbsControlSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>`,
  })),
};


export const Playground = {
  parameters: {
    controls: { disable: false },
    docs: {
      source: vueSource(carouselPlaygroundSourceCode),
    },
  },
  render: (_args, context) => ({
    components: slideComponents,
    setup() {
      return { args: storyArgsRef(context), carouselPlaygroundSlides };
    },
    template: `<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselPlaygroundSlides" :key="slide.title">
        ${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>`,
  }),
};


