export const docMeta = {
  title: 'Carousel | UXKM Guide',
  activeNav: 'carousel',
  pageTitle: 'Carousel',
};

import React, { useState } from 'react';
import Button from '@/components/Button.jsx';
import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';
import Link from '@/components/Link.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  carouselChildColumns,
  carouselChildren,
  carouselClassColumns,
  carouselClasses,
  carouselPropColumns,
  carouselProps,
  carouselTokenColumns,
  carouselTokens,
} from '@/doc/data/carousel-api';
import {
  carouselAutoplaySlides,
  carouselCoverflowSlides,
  carouselCustomPaginationSlides,
  carouselDefaultSlides,
  carouselFadeSlides,
  carouselFractionSlides,
  carouselGridSlides,
  carouselLoopSlides,
  carouselMultiSlides,
  carouselPaginationSlides,
  carouselProgressSlides,
  carouselSpaceSlides,
  carouselThumbsSlides,
} from '@/doc/data/carousel-demos';

function tagClass(tag) {
  if (!tag) return '';
  const classes = ['tag', `color_${tag.color || 'primary'}`];
  if (tag.variant === 'solid') classes.push('tag_solid');
  if (tag.variant === 'outline') classes.push('tag_outline');
  if (tag.variant === 'borderless') classes.push('tag_borderless');
  if (tag.size === 'sm') classes.push('tag_sm');
  if (tag.size === 'lg') classes.push('tag_lg');
  return classes.join(' ');
}

function badgeClass(badge) {
  if (!badge) return '';
  const classes = ['badge', `color_${badge.color || 'primary'}`];
  if (badge.size === 'sm') classes.push('badge_sm');
  if (badge.size === 'lg') classes.push('badge_lg');
  if (badge.dot) classes.push('badge_dot');
  if (badge.count) classes.push('badge_count');
  return classes.join(' ');
}

function DefaultSlideCard({ slide }) {
  return (
    <article className="card card_borderless card_elevated">
      <div className="card_media card_media-placeholder" role="img" aria-label={slide.mediaLabel}>
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {slide.iconParts.map((part, index) =>
            React.createElement(part.el, { key: index, ...part.attrs }),
          )}
        </svg>
      </div>
      <div className="card_header">
        <div className="card_header-row">
          <h3 className="card_title">{slide.title}</h3>
          <span className={tagClass(slide.tag)}>{slide.tag.label}</span>
        </div>
      </div>
      <div className="card_body">{slide.body}</div>
      {slide.footer ? (
        <div className="card_footer">
          <Button variant="filled" color="primary" size="sm" label={slide.footer.label} />
        </div>
      ) : null}
    </article>
  );
}

function FadeSlideCard({ slide }) {
  return (
    <article className={`card ${slide.accentClass}`}>
      <div className="card_body">
        <p className="typo_overline">{slide.overline}</p>
        <h3 className="card_title">{slide.title}</h3>
        <p className="typo_lead">{slide.lead}</p>
      </div>
      {slide.footer ? (
        <div className={`card_footer${slide.footer.type === 'between' ? ' card_footer-between' : ''}`}>
          {slide.footer.link ? (
            <Link
              href={slide.footer.link.href}
              color="primary"
              size="sm"
              label={slide.footer.link.label}
            />
          ) : null}
          {slide.footer.button ? (
            <Button
              variant={slide.footer.button.variant}
              color="primary"
              size="sm"
              label={slide.footer.button.label}
            />
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function AutoplaySlideCard({ slide }) {
  return (
    <article className="card card_borderless card_elevated">
      <div className="card_header">
        <div className="card_header-row">
          <h3 className="card_title">{slide.title}</h3>
          {slide.badge ? (
            <span className={badgeClass(slide.badge)}>{slide.badge.label}</span>
          ) : slide.tag ? (
            <span className={tagClass(slide.tag)}>{slide.tag.label}</span>
          ) : null}
        </div>
      </div>
      <div className="card_body">{slide.body}</div>
      {slide.footer ? (
        <div className="card_footer">
          {slide.footer.type === 'button' ? (
            <Button variant="filled" color="primary" size="sm" label={slide.footer.label} />
          ) : slide.footer.type === 'link' ? (
            <Link href={slide.footer.href} color="primary" size="sm" label={slide.footer.label} />
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function LoopSlideCard({ slide }) {
  return (
    <article className="card card_shadow">
      <div className="card_header">
        <div className="card_header-main">
          <h3 className="card_title">{slide.title}</h3>
        </div>
      </div>
      <div className="card_body">{slide.body}</div>
      <div className="card_footer card_footer-between">
        <strong>{slide.price}</strong>
        <span className={tagClass(slide.tag)}>{slide.tag.label}</span>
      </div>
    </article>
  );
}

function MultiSlideCard({ slide }) {
  return (
    <article className="card card_shadow">
      <div className="card_body">
        <span className={tagClass(slide.tag)}>{slide.tag.label}</span>
        <h3 className="card_title">{slide.title}</h3>
        <p className="card_subtitle">{slide.subtitle}</p>
      </div>
    </article>
  );
}

function SimpleSlideCard({ slide }) {
  return (
    <article className="card card_shadow">
      <div className="card_header">
        <div className="card_header-main">
          <h3 className="card_title">{slide.title}</h3>
          {slide.subtitle ? <p className="card_subtitle">{slide.subtitle}</p> : null}
        </div>
      </div>
    </article>
  );
}

function FractionSlideCard({ slide }) {
  return (
    <article className={`card ${slide.accentClass}`}>
      <div className="card_body">
        <h3 className="card_title">{slide.title}</h3>
        <p className="typo_lead">{slide.lead}</p>
      </div>
    </article>
  );
}

function CoverflowSlideCard({ slide }) {
  return (
    <article className="card card_borderless card_elevated">
      <div className="card_media card_media-placeholder" role="img" aria-label={slide.mediaLabel}>
        <span className="typo_overline">{slide.title}</span>
      </div>
      <div className="card_header">
        <div className="card_header-row">
          <h3 className="card_title">{slide.title}</h3>
          <span className={tagClass(slide.tag)}>{slide.tag.label}</span>
        </div>
      </div>
      <div className="card_body">{slide.body}</div>
    </article>
  );
}

function ThumbsMainSlideCard({ slide }) {
  return (
    <article className={`card ${slide.accentClass}`}>
      <div className="card_body">
        <p className="typo_overline">{slide.mediaLabel}</p>
        <h3 className="card_title">{slide.title}</h3>
        <p className="typo_lead">{slide.body}</p>
      </div>
    </article>
  );
}

function ThumbsControlSlideCard({ slide }) {
  return (
    <article className="card card_shadow">
      <div className="card_header">
        <div className="card_header-main">
          <h3 className="card_title">{slide.thumbLabel}</h3>
        </div>
      </div>
    </article>
  );
}

function ThumbsGalleryDemo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="carousel_gallery">
      <Carousel ariaLabel="갤러리 메인" thumbs={thumbsSwiper} pagination={false}>
        {carouselThumbsSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <ThumbsMainSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
      <Carousel
        ariaLabel="갤러리 썸네일"
        thumbsControl
        slidesPerView={4}
        spaceBetween={8}
        navigation={false}
        pagination={false}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
      >
        {carouselThumbsSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <ThumbsControlSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}

const defaultCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function DefaultExample() {
  return (
    <Carousel ariaLabel="프로모션 슬라이드">
      {carouselDefaultSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <DefaultSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const fadeCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function FadeExample() {
  return (
    <Carousel ariaLabel="페이드 슬라이드" effect="fade">
      {carouselFadeSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FadeSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const autoplayCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function AutoplayExample() {
  return (
    <>
      <Carousel
        ariaLabel="슬라이드 자동 재생"
        autoplay
        delay={4000}
        loop
        dotsOutside
        autoplayToggle
      >
        {carouselAutoplaySlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <AutoplaySlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>

      <Carousel
        ariaLabel="페이드 자동 재생"
        autoplay
        delay={4000}
        loop
        effect="fade"
        dotsOutside
        autoplayToggle
      >
        {carouselAutoplaySlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <AutoplaySlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
    </>
  );
}`;

const loopCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function LoopExample() {
  return (
    <Carousel ariaLabel="루프 슬라이드" loop>
      {carouselLoopSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <LoopSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const multiCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function MultiExample() {
  return (
    <Carousel
      ariaLabel="다중 슬라이드"
      multi
      slidesPerView="auto"
      spaceBetween={16}
      centered
      navigation={false}
    >
      {carouselMultiSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <MultiSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const spaceCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function SpaceExample() {
  return (
    <Carousel ariaLabel="기본 간격" spaceBetween={12} loop>
      {carouselSpaceSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const paginationCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function PaginationExample() {
  return (
    <Carousel ariaLabel="페이지네이션 슬라이드" loop navigation={false}>
      {carouselPaginationSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const fractionCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function FractionExample() {
  return (
    <Carousel ariaLabel="분수 페이지네이션 슬라이드" pagination="fraction">
      {carouselFractionSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FractionSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const progressCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function ProgressExample() {
  return (
    <Carousel ariaLabel="프로그레스 페이지네이션" pagination="progressbar" loop>
      {carouselProgressSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FractionSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const customPaginationCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function CustomPaginationExample() {
  return (
    <Carousel ariaLabel="커스텀 페이지네이션" pagination="custom" loop navigation={false}>
      {carouselCustomPaginationSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const gridCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function GridExample() {
  return (
    <>
      <Carousel ariaLabel="그리드 1장씩" slidesPerView={3} gridRows={2} spaceBetween={16}>
        {carouselGridSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <SimpleSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>

      <Carousel
        ariaLabel="그리드 그룹 이동"
        slidesPerView={3}
        gridRows={2}
        slidesPerGroup={6}
        spaceBetween={16}
      >
        {carouselGridSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <SimpleSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
    </>
  );
}`;

const coverflowCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function CoverflowExample() {
  return (
    <Carousel
      ariaLabel="커버플로우 슬라이드"
      effect="coverflow"
      coverflowSides={1}
      spaceBetween={16}
      loop
      pagination={false}
    >
      {carouselCoverflowSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <CoverflowSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}`;

const coverflowRiseCode = `import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function CoverflowRiseExample() {
  return (
    <>
      <Carousel
        ariaLabel="커버플로우 축소 좌우 1"
        effect="coverflow"
        coverflowStyle="rise"
        coverflowSides={1}
        spaceBetween={16}
        loop
        pagination={false}
      >
        {carouselCoverflowSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <CoverflowSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>

      <Carousel
        ariaLabel="커버플로우 축소 좌우 1.5"
        effect="coverflow"
        coverflowStyle="rise"
        coverflowSides={1.5}
        spaceBetween={16}
        loop
        pagination={false}
      >
        {carouselCoverflowSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <CoverflowSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>

      <Carousel
        ariaLabel="커버플로우 축소 좌우 2"
        effect="coverflow"
        coverflowStyle="rise"
        coverflowSides={2}
        spaceBetween={16}
        loop
        pagination={false}
      >
        {carouselCoverflowSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <CoverflowSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
    </>
  );
}`;

const thumbsCode = `import { useState } from 'react';
import Carousel from '@/components/Carousel.jsx';
import CarouselSlide from '@/components/CarouselSlide.jsx';

export function ThumbsGalleryExample() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="carousel_gallery">
      <Carousel ariaLabel="갤러리 메인" thumbs={thumbsSwiper} pagination={false}>
        {carouselThumbsSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <ThumbsMainSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
      <Carousel
        ariaLabel="갤러리 썸네일"
        thumbsControl
        slidesPerView={4}
        spaceBetween={8}
        navigation={false}
        pagination={false}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
      >
        {carouselThumbsSlides.map((slide) => (
          <CarouselSlide key={slide.title}>
            <ThumbsControlSlideCard slide={slide} />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}`;

export default function CarouselDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Carousel</h1>
        <p className="lead">
          <a
            href="https://swiperjs.com/demos"
            className="link color_primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swiper
          </a>
          라이브러리 기반 슬라이드 컴포넌트입니다. 표준{' '}
          <code className="typo_code">swiper</code> ·{' '}
          <code className="typo_code">swiper-wrapper</code> ·{' '}
          <code className="typo_code">swiper-slide</code> 마크업을 사용하며, 슬라이드 콘텐츠는{' '}
          <code className="typo_code">card</code> · <code className="typo_code">tag</code> ·{' '}
          <code className="typo_code">btn</code> 등 기존 컴포넌트를 조합합니다.
        </p>
      </div>

      <DemoSection
        headingId="default-heading"
        title="기본"
        description="Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다."
        code={defaultCode}
      >
        <Carousel ariaLabel="프로모션 슬라이드">
          {carouselDefaultSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <DefaultSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="fade-heading"
        title="페이드"
        description='effect="fade" prop으로 페이드 전환을 적용합니다.'
        code={fadeCode}
      >
        <Carousel ariaLabel="페이드 슬라이드" effect="fade">
          {carouselFadeSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <FadeSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="autoplay-heading"
        title="자동 재생"
        description="autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 기본 슬라이드 전환과 effect=&quot;fade&quot; 페이드 전환을 모두 지원합니다."
        code={autoplayCode}
        stack
      >
        <div className="demo_preview-block">
          <h3 className="typo_overline">슬라이드</h3>
          <p className="typo_caption">기본 슬라이드 전환. effect prop을 생략합니다.</p>
          <Carousel
            ariaLabel="슬라이드 자동 재생"
            autoplay
            delay={4000}
            loop
            dotsOutside
            autoplayToggle
          >
            {carouselAutoplaySlides.map((slide) => (
              <CarouselSlide key={slide.title}>
                <AutoplaySlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
        <div className="demo_preview-block">
          <h3 className="typo_overline">페이드</h3>
          <p className="typo_caption">effect=&quot;fade&quot; prop으로 페이드 전환을 적용합니다.</p>
          <Carousel
            ariaLabel="페이드 자동 재생"
            autoplay
            delay={4000}
            loop
            effect="fade"
            dotsOutside
            autoplayToggle
          >
            {carouselAutoplaySlides.map((slide) => (
              <CarouselSlide key={`fade-${slide.title}`}>
                <AutoplaySlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </DemoSection>

      <DemoSection
        headingId="loop-heading"
        title="무한 루프"
        description="loop prop으로 슬라이드를 순환합니다."
        code={loopCode}
      >
        <Carousel ariaLabel="루프 슬라이드" loop>
          {carouselLoopSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <LoopSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="multi-heading"
        title="슬라이드 per view"
        description='slidesPerView="auto"로 여러 카드가 동시에 보입니다.'
        code={multiCode}
      >
        <Carousel
          ariaLabel="다중 슬라이드"
          multi
          slidesPerView="auto"
          spaceBetween={16}
          centered
          navigation={false}
        >
          {carouselMultiSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <MultiSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="space-heading"
        title="간격"
        description="spaceBetween prop으로 슬라이드 간격을 지정합니다."
        code={spaceCode}
      >
        <Carousel ariaLabel="간격 슬라이드" spaceBetween={12} loop>
          {carouselSpaceSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <SimpleSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="pagination-heading"
        title="페이지네이션"
        description="화살표 없이 도트만 사용합니다."
        code={paginationCode}
      >
        <Carousel ariaLabel="페이지네이션 슬라이드" loop navigation={false}>
          {carouselPaginationSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <SimpleSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="fraction-heading"
        title="분수 페이지네이션"
        description='pagination="fraction" prop으로 현재/전체 슬라이드 번호를 표시합니다.'
        code={fractionCode}
      >
        <Carousel ariaLabel="분수 페이지네이션 슬라이드" pagination="fraction">
          {carouselFractionSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <FractionSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="progress-heading"
        title="프로그레스 페이지네이션"
        description='pagination="progressbar" prop으로 진행률 바를 표시합니다.'
        code={progressCode}
      >
        <Carousel ariaLabel="프로그레스 페이지네이션" pagination="progressbar" loop>
          {carouselProgressSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <FractionSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="custom-pagination-heading"
        title="커스텀 페이지네이션"
        description='pagination="custom" prop으로 번호 불릿을 표시합니다.'
        code={customPaginationCode}
      >
        <Carousel ariaLabel="커스텀 페이지네이션" pagination="custom" loop navigation={false}>
          {carouselCustomPaginationSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <SimpleSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="grid-heading"
        title="그리드"
        description="gridRows prop으로 다행 그리드 레이아웃을 구성합니다. slidesPerGroup으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다."
        code={gridCode}
        stack
      >
        <div className="demo_preview-block">
          <h3 className="typo_overline">1장씩 이동</h3>
          <p className="typo_caption">
            slidesPerGroup 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.
          </p>
          <Carousel ariaLabel="그리드 1장씩" slidesPerView={3} gridRows={2} spaceBetween={16}>
            {carouselGridSlides.map((slide) => (
              <CarouselSlide key={slide.title}>
                <SimpleSlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
        <div className="demo_preview-block">
          <h3 className="typo_overline">그룹 이동</h3>
          <p className="typo_caption">
            {'slidesPerGroup={6} — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.'}
          </p>
          <Carousel
            ariaLabel="그리드 그룹 이동"
            slidesPerView={3}
            gridRows={2}
            slidesPerGroup={6}
            spaceBetween={16}
          >
            {carouselGridSlides.map((slide) => (
              <CarouselSlide key={`group-${slide.title}`}>
                <SimpleSlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </DemoSection>

      <DemoSection
        headingId="coverflow-heading"
        title="커버플로우"
        description='effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflowSides={1}로 좌·우 1개씩 peek합니다.'
        code={coverflowCode}
      >
        <Carousel
          ariaLabel="커버플로우 슬라이드"
          effect="coverflow"
          coverflowSides={1}
          spaceBetween={16}
          loop
          pagination={false}
        >
          {carouselCoverflowSlides.map((slide) => (
            <CarouselSlide key={slide.title}>
              <CoverflowSlideCard slide={slide} />
            </CarouselSlide>
          ))}
        </Carousel>
      </DemoSection>

      <DemoSection
        headingId="coverflow-rise-heading"
        title="커버플로우 · 축소"
        description='coverflowStyle="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflowSides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.'
        code={coverflowRiseCode}
        stack
      >
        <div className="demo_preview-block">
          <h3 className="typo_overline">좌우 1개씩</h3>
          <p className="typo_caption">{'coverflowSides={1} — 슬라이드 크기 기준. 좌·우에 1개씩.'}</p>
          <Carousel
            ariaLabel="커버플로우 축소 좌우 1"
            effect="coverflow"
            coverflowStyle="rise"
            coverflowSides={1}
            spaceBetween={16}
            loop
            pagination={false}
          >
            {carouselCoverflowSlides.map((slide) => (
              <CarouselSlide key={slide.title}>
                <CoverflowSlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
        <div className="demo_preview-block">
          <h3 className="typo_overline">좌우 약 1.5개 (기본)</h3>
          <p className="typo_caption">
            {'coverflowSides={1.5} — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.'}
          </p>
          <Carousel
            ariaLabel="커버플로우 축소 좌우 1.5"
            effect="coverflow"
            coverflowStyle="rise"
            coverflowSides={1.5}
            spaceBetween={16}
            loop
            pagination={false}
          >
            {carouselCoverflowSlides.map((slide) => (
              <CarouselSlide key={`sides15-${slide.title}`}>
                <CoverflowSlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
        <div className="demo_preview-block">
          <h3 className="typo_overline">좌우 2개씩</h3>
          <p className="typo_caption">
            {'coverflowSides={2} — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.'}
          </p>
          <Carousel
            ariaLabel="커버플로우 축소 좌우 2"
            effect="coverflow"
            coverflowStyle="rise"
            coverflowSides={2}
            spaceBetween={16}
            loop
            pagination={false}
          >
            {carouselCoverflowSlides.map((slide) => (
              <CarouselSlide key={`sides2-${slide.title}`}>
                <CoverflowSlideCard slide={slide} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </DemoSection>

      <DemoSection
        headingId="thumbs-heading"
        title="썸네일 갤러리"
        description="메인 캐러셀과 썸네일 캐러셀을 thumbs · onSwiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다."
        code={thumbsCode}
      >
        <ThumbsGalleryDemo />
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={carouselPropColumns} rows={carouselProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={carouselChildColumns} rows={carouselChildren} codeColumn="name" />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          슬라이드 콘텐츠는 <code className="typo_code">CarouselSlide</code>로 감싸{' '}
          <code className="typo_code">card</code> 등 기존 컴포넌트를 배치합니다.
        </p>
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={carouselClassColumns} rows={carouselClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={carouselTokenColumns} rows={carouselTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
