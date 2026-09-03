import { useState } from 'react';
import {
  ariaLabelArg,
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
} from './shared/storyArgTypes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualCarousel from '../../react/src/components/miscellaneous/Carousel/Carousel.jsx';
import ActualCarouselSlide from '../../react/src/components/miscellaneous/Carousel/CarouselSlide.jsx';
import { carouselSlides, type CarouselSlideData } from './data/carouselSlides';

const Carousel = ActualCarousel as React.ComponentType<any>;
const CarouselSlide = ActualCarouselSlide as React.ComponentType<any>;

const slides = carouselSlides.slice(0, 3);
const manySlides = carouselSlides;

function SlideCard({ slide, compact = false }: { slide: CarouselSlideData; compact?: boolean }) {
  return (
    <article className={`card card_accent color_${slide.color ?? 'primary'} card_elevated`}>
      <div className="card_body">
        <p className="typo_overline">{slide.overline ?? '슬라이드'}</p>
        <h3 className="card_title">{slide.title}</h3>
        <p className={compact ? 'card_subtitle' : 'typo_lead'}>{slide.body}</p>
      </div>
    </article>
  );
}

function Slides({ data = slides, compact = false }: { data?: CarouselSlideData[]; compact?: boolean }) {
  return (
    <>
      {data.map((slide) => (
        <CarouselSlide key={slide.id}>
          <SlideCard slide={slide} compact={compact} />
        </CarouselSlide>
      ))}
    </>
  );
}

function ThumbsDemo() {
  const [thumbs, setThumbs] = useState<any>(null);
  return (
    <div className="carousel_gallery">
      <Carousel ariaLabel="갤러리 메인" thumbs={thumbs} pagination={false}>
        <Slides data={manySlides.slice(0, 8)} />
      </Carousel>
      <Carousel
        ariaLabel="갤러리 썸네일"
        className="carousel_thumbs"
        slidesPerView={4}
        spaceBetween={8}
        pagination={false}
        navigation={false}
        thumbsControl
        watchSlidesProgress
        onSwiper={setThumbs}
      >
        <Slides data={manySlides.slice(0, 8)} compact />
      </Carousel>
    </div>
  );
}

const carouselControlKeys = [
  'ariaLabel',
  'size',
  'effect',
  'autoplay',
  'delay',
  'autoplayToggle',
  'loop',
  'initialSlide',
  'slidesPerView',
  'slidesPerGroup',
  'spaceBetween',
  'multi',
  'centered',
  'pagination',
  'navigation',
  'dotsOutside',
  'gridRows',
  'gridFill',
  'coverflowStyle',
  'coverflowSides',
  'freeMode',
  'ripple',
] as const;

function mapCarouselArgs(args: Record<string, unknown>) {
  const {
    effect,
    pagination,
    slidesPerView,
    thumbs: _thumbs,
    coverflowEffect: _coverflowEffect,
    onSwiper: _onSwiper,
    children: _children,
    style: _style,
    ...rest
  } = args;

  const paginationValue =
    pagination === false || pagination === 'false'
      ? false
      : pagination === true || pagination === 'true' || pagination == null || pagination === ''
        ? true
        : pagination;

  const perView =
    slidesPerView === 'auto'
      ? 'auto'
      : typeof slidesPerView === 'number' && Number.isFinite(slidesPerView)
        ? slidesPerView
        : Number(slidesPerView) || 1;

  return {
    ...rest,
    ...(typeof effect === 'string' && effect ? { effect } : {}),
    pagination: paginationValue,
    slidesPerView: perView,
  };
}

type CarouselStoryArgs = {
  ariaLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  effect?: '' | 'fade' | 'coverflow';
  autoplay?: boolean;
  delay?: number;
  autoplayToggle?: boolean;
  loop?: boolean;
  initialSlide?: number;
  slidesPerView?: number | 'auto';
  slidesPerGroup?: number;
  spaceBetween?: number;
  multi?: boolean;
  centered?: boolean;
  pagination?: boolean | 'fraction' | 'progressbar' | 'custom' | 'true' | 'false';
  navigation?: boolean;
  dotsOutside?: boolean;
  gridRows?: number;
  gridFill?: 'row' | 'column';
  coverflowStyle?: 'tilt' | 'rise';
  coverflowSides?: number;
  freeMode?: boolean;
  ripple?: boolean;
};

const meta = {
  title: '기타/Carousel',
  component: Carousel,
  subcomponents: { CarouselSlide },
  parameters: {
    layout: 'padded',
    controls: { include: [...carouselControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  decorators: [(Story) => <div className="carousel-story-demo"><Story /></div>],
  args: {
    ariaLabel: '플레이그라운드',
    size: 'md',
    effect: '',
    autoplay: false,
    delay: 4000,
    autoplayToggle: false,
    loop: false,
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    multi: false,
    centered: false,
    pagination: true,
    navigation: true,
    dotsOutside: false,
    gridRows: 1,
    gridFill: 'row',
    coverflowStyle: 'tilt',
    coverflowSides: 1.5,
    freeMode: false,
    ripple: true,
  },
  argTypes: {
    ...hiddenArgTypes,
    ariaLabel: { ...ariaLabelArg, description: '캐러셀 영역의 접근성 이름' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    effect: {
      control: 'select',
      options: ['', 'fade', 'coverflow'],
      labels: { '': '없음', fade: 'fade', coverflow: 'coverflow' },
      type: 'string',
      description: '전환 효과',
    },
    autoplay: booleanControlArg,
    delay: {
      ...numberControlArg,
      description: '자동 재생 간격 (ms)',
      if: { arg: 'autoplay', eq: true },
    },
    autoplayToggle: booleanControlArg,
    loop: booleanControlArg,
    initialSlide: numberControlArg,
    slidesPerView: {
      control: 'select',
      options: [1, 2, 3, 4, 'auto'],
      type: 'number',
      description: '한 화면에 보일 슬라이드 수',
    },
    slidesPerGroup: numberControlArg,
    spaceBetween: {
      ...numberControlArg,
      description: '슬라이드 간격 (px)',
    },
    multi: booleanControlArg,
    centered: booleanControlArg,
    pagination: {
      control: 'select',
      options: [true, false, 'fraction', 'progressbar', 'custom'],
      labels: {
        true: '점',
        false: '숨김',
        fraction: '분수',
        progressbar: '프로그레스',
        custom: '번호',
      },
      type: 'string',
    },
    navigation: booleanControlArg,
    dotsOutside: booleanControlArg,
    gridRows: {
      ...numberControlArg,
      description: '2 이상이면 그리드',
    },
    gridFill: {
      control: 'select',
      options: ['row', 'column'],
      type: 'string',
      if: { arg: 'gridRows', gt: 1 },
    },
    coverflowStyle: {
      control: 'select',
      options: ['tilt', 'rise'],
      type: 'string',
      if: { arg: 'effect', eq: 'coverflow' },
    },
    coverflowSides: {
      control: 'select',
      options: [1, 1.5, 2],
      type: 'number',
      if: { arg: 'effect', eq: 'coverflow' },
    },
    freeMode: booleanControlArg,
    ripple: booleanControlArg,
    thumbs: { control: false, table: { disable: true } },
    thumbsControl: { control: false, table: { disable: true } },
    watchSlidesProgress: { control: false, table: { disable: true } },
    coverflowEffect: { control: false, table: { disable: true } },
    onSwiper: { control: false, table: { disable: true } },
  },
} satisfies Meta<CarouselStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Carousel {...mapCarouselArgs(args)}>
      <Slides data={manySlides.slice(0, 8)} />
    </Carousel>
  ),
};
export const Default: Story = { name: '기본', render: (args) => <Carousel {...mapCarouselArgs(args)} ariaLabel="프로모션 슬라이드"><Slides /></Carousel> };
export const Fade: Story = { name: '페이드', render: () => <Carousel ariaLabel="페이드 슬라이드" effect="fade"><Slides /></Carousel> };
export const Autoplay: Story = { name: '자동 재생', render: () => <Carousel ariaLabel="자동 재생 슬라이드" autoplay delay={4000} loop dotsOutside><Slides /></Carousel> };
export const Loop: Story = { name: '무한 루프', render: () => <Carousel ariaLabel="루프 슬라이드" loop><Slides /></Carousel> };
export const Multi: Story = { name: '슬라이드 per view', render: () => <Carousel ariaLabel="다중 슬라이드" multi slidesPerView="auto" spaceBetween={16} centered navigation={false}><Slides data={manySlides.slice(0, 4)} compact /></Carousel> };
export const Space: Story = { name: '슬라이드 간격', render: () => <Carousel ariaLabel="간격이 있는 슬라이드" spaceBetween={12} loop><Slides /></Carousel> };
export const Pagination: Story = { name: '페이지네이션', render: () => <Carousel ariaLabel="페이지네이션 슬라이드" loop navigation={false}><Slides /></Carousel> };
export const Fraction: Story = { name: '분수 페이지네이션', render: () => <Carousel ariaLabel="분수 페이지네이션" pagination="fraction"><Slides /></Carousel> };
export const Progress: Story = { name: '프로그레스 페이지네이션', render: () => <Carousel ariaLabel="프로그레스 페이지네이션" pagination="progressbar" loop><Slides /></Carousel> };
export const CustomPagination: Story = { name: '커스텀 페이지네이션', render: () => <Carousel ariaLabel="번호 페이지네이션" pagination="custom" loop navigation={false}><Slides data={manySlides.slice(0, 4)} /></Carousel> };
export const Grid: Story = { name: '그리드', render: () => <div className="carousel-story-stack">
  <div className="carousel-story-block"><h3 className="typo_overline">1장씩 이동</h3><p className="typo_caption">slidesPerGroup 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p><Carousel ariaLabel="그리드 1장씩" slidesPerView={3} gridRows={2} spaceBetween={16}><Slides data={manySlides} compact /></Carousel></div>
  <div className="carousel-story-block"><h3 className="typo_overline">그룹 이동</h3><p className="typo_caption">slidesPerGroup=6 — 한 화면(2행 × 3열) 단위로 이동합니다.</p><Carousel ariaLabel="그리드 그룹 이동" slidesPerView={3} slidesPerGroup={6} gridRows={2} spaceBetween={16}><Slides data={manySlides} compact /></Carousel></div>
</div> };
export const Coverflow: Story = { name: '커버플로우', render: () => <Carousel ariaLabel="커버플로우 슬라이드" effect="coverflow" coverflowSides={1} spaceBetween={16} loop pagination={false}><Slides data={manySlides} compact /></Carousel> };
export const CoverflowRise: Story = { name: '커버플로우 · 축소', render: () => <div className="carousel-story-stack">
  <div className="carousel-story-block"><h3 className="typo_overline">좌우 1개씩</h3><p className="typo_caption">coverflowSides=1 — 슬라이드 크기 기준, 좌·우에 1개씩 표시합니다.</p><Carousel ariaLabel="커버플로우 축소 좌우 1" effect="coverflow" coverflowStyle="rise" coverflowSides={1} spaceBetween={16} loop pagination={false}><Slides data={manySlides} compact /></Carousel></div>
  <div className="carousel-story-block"><h3 className="typo_overline">좌우 약 1.5개 (기본)</h3><p className="typo_caption">coverflowSides=1.5 — 크기는 동일하고 간격으로 좌·우 약 1.5개를 표시합니다.</p><Carousel ariaLabel="커버플로우 축소 좌우 1.5" effect="coverflow" coverflowStyle="rise" coverflowSides={1.5} spaceBetween={16} loop pagination={false}><Slides data={manySlides} compact /></Carousel></div>
  <div className="carousel-story-block"><h3 className="typo_overline">좌우 2개씩</h3><p className="typo_caption">coverflowSides=2 — 크기는 동일하고 간격으로 좌·우 2개씩 표시합니다.</p><Carousel ariaLabel="커버플로우 축소 좌우 2" effect="coverflow" coverflowStyle="rise" coverflowSides={2} spaceBetween={16} loop pagination={false}><Slides data={manySlides} compact /></Carousel></div>
</div> };
export const ThumbsGallery: Story = { name: '썸네일 갤러리', render: () => <ThumbsDemo /> };
