import React, { useState } from 'react';
import Carousel from './Carousel.jsx';
import CarouselSlide from './CarouselSlide.jsx';
import Button from './Button.jsx';
import Link from './Link.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
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
  carouselPlaygroundSlides,
  carouselProgressSlides,
  carouselSpaceSlides,
  carouselThumbsSlides,
} from '@doc-data/carousel-demos';

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

const carouselDefaultArgs = {
  ariaLabel: '프로모션 슬라이드',
  demo: true,
  multi: false,
  dotsOutside: false,
  autoplayToggle: false,
  effect: '',
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
  gridFill: 'row',
  coverflowStyle: 'tilt',
  coverflowSides: 1.5,
  thumbsControl: false,
  watchSlidesProgress: false,
  freeMode: false,
};

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: carouselPropColumns, rows: carouselProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue 슬롯은 React children으로 대응합니다.',
    tables: [{ columns: carouselSlotColumns, rows: carouselSlots, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: carouselClassColumns, rows: carouselClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: carouselTokenColumns, rows: carouselTokens, codeColumn: 'name' }],
  },
];

export default {
  title: 'Components/기타/Carousel',
  id: 'components-carousel',
  component: Carousel,
  subcomponents: { CarouselSlide },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    demo: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    multi: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    dotsOutside: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    autoplayToggle: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    effect: {
      control: 'select',
      options: ['', 'fade', 'coverflow'],
      type: { name: 'enum', summary: "'' | 'fade' | 'coverflow'" },
    },
    coverflowStyle: {
      control: 'select',
      options: ['tilt', 'rise'],
      type: { name: 'enum', summary: "'tilt' | 'rise'" },
    },
    coverflowSides: {
      control: 'select',
      options: [1, 1.5, 2],
      type: { name: 'union', summary: "1 | 1.5 | 2 | 'auto'" },
    },
    autoplay: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    delay: { control: 'number', type: { name: 'number', summary: 'number' } },
    loop: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    initialSlide: { control: 'number', type: { name: 'number', summary: 'number' } },
    slidesPerView: {
      control: 'select',
      options: [1, 2, 3, 'auto'],
      type: { name: 'union', summary: "number | 'auto'" },
    },
    slidesPerGroup: { control: 'number', type: { name: 'number', summary: 'number' } },
    spaceBetween: { control: 'number', type: { name: 'number', summary: 'number' } },
    centered: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    pagination: {
      control: 'select',
      options: [true, false, 'fraction', 'progressbar', 'custom'],
      type: { name: 'union', summary: "boolean | 'fraction' | 'progressbar' | 'custom'" },
    },
    navigation: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    gridRows: { control: 'number', type: { name: 'number', summary: 'number' } },
    gridFill: {
      control: 'select',
      options: ['row', 'column'],
      type: { name: 'enum', summary: "'row' | 'column'" },
    },
    thumbsControl: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    watchSlidesProgress: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    freeMode: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  args: { ...carouselDefaultArgs },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: 'Carousel — Swiper 기반 슬라이드 캐러셀 React 포트입니다.',
      },
    },
  },
};

export const Default = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다.',
      },
      source: {
        code: `import Carousel from '@uxkm/ui-react/components/Carousel.jsx';
import CarouselSlide from '@uxkm/ui-react/components/CarouselSlide.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: (args) => (
    <Carousel {...args}>
      {carouselDefaultSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <DefaultSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  ),
};

export const Fade = {
  name: '페이드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: `<Carousel ariaLabel="페이드 슬라이드" effect="fade">
  {carouselFadeSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <FadeSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, effect: 'fade', ariaLabel: '페이드 슬라이드' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="페이드 슬라이드" effect="fade">
      {carouselFadeSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FadeSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Autoplay = {
  name: '자동 재생',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요.',
      },
      source: {
        code: `<Carousel
  ariaLabel="슬라이드 자동 재생"
  autoplay
  delay={4000}
  loop
  dotsOutside
>
  {carouselAutoplaySlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <AutoplaySlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: {
    ...carouselDefaultArgs,
    autoplay: true,
    loop: true,
    dotsOutside: true,
    ariaLabel: '슬라이드 자동 재생',
  },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="슬라이드 자동 재생" autoplay delay={4000} loop dotsOutside>
      {carouselAutoplaySlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <AutoplaySlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Loop = {
  name: '무한 루프',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'loop prop으로 슬라이드를 순환합니다.',
      },
      source: {
        code: `<Carousel ariaLabel="루프 슬라이드" loop>
  {carouselLoopSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <LoopSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, loop: true, ariaLabel: '루프 슬라이드' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="루프 슬라이드" loop>
      {carouselLoopSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <LoopSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Multi = {
  name: '슬라이드 per view',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'slidesPerView="auto"로 여러 카드가 동시에 보입니다.',
      },
      source: {
        code: `<Carousel
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
</Carousel>`,
        language: 'tsx',
      },
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
  render: withDocsCanvasRender(() => (
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
  )),
};

export const Space = {
  name: '슬라이드 간격',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'spaceBetween prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요.',
      },
      source: {
        code: `<Carousel ariaLabel="기본 간격" spaceBetween={12} loop>
  {carouselSpaceSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <SimpleSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, spaceBetween: 12, loop: true, ariaLabel: '기본 간격' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="기본 간격" spaceBetween={12} loop>
      {carouselSpaceSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Pagination = {
  name: '페이지네이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '화살표 없이 도트만 사용합니다.',
      },
      source: {
        code: `<Carousel ariaLabel="페이지네이션 슬라이드" loop navigation={false}>
  {carouselPaginationSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <SimpleSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, loop: true, navigation: false, ariaLabel: '페이지네이션 슬라이드' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="페이지네이션 슬라이드" loop navigation={false}>
      {carouselPaginationSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Fraction = {
  name: '분수 페이지네이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: `<Carousel ariaLabel="분수 페이지네이션 슬라이드" pagination="fraction">
  {carouselFractionSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <FractionSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, pagination: 'fraction', ariaLabel: '분수 페이지네이션 슬라이드' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="분수 페이지네이션 슬라이드" pagination="fraction">
      {carouselFractionSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FractionSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Progress = {
  name: '프로그레스 페이지네이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pagination="progressbar" prop으로 진행률 바를 표시합니다.',
      },
      source: {
        code: `<Carousel ariaLabel="프로그레스 페이지네이션" pagination="progressbar" loop>
  {carouselProgressSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <FractionSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, pagination: 'progressbar', loop: true, ariaLabel: '프로그레스 페이지네이션' },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="프로그레스 페이지네이션" pagination="progressbar" loop>
      {carouselProgressSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <FractionSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const CustomPagination = {
  name: '커스텀 페이지네이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pagination="custom" prop으로 번호 불릿을 표시합니다.',
      },
      source: {
        code: `<Carousel ariaLabel="커스텀 페이지네이션" pagination="custom" loop navigation={false}>
  {carouselCustomPaginationSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <SimpleSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  args: {
    ...carouselDefaultArgs,
    pagination: 'custom',
    loop: true,
    navigation: false,
    ariaLabel: '커스텀 페이지네이션',
  },
  render: withDocsCanvasRender(() => (
    <Carousel ariaLabel="커스텀 페이지네이션" pagination="custom" loop navigation={false}>
      {carouselCustomPaginationSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  )),
};

export const Grid = {
  name: '그리드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'gridRows prop으로 다행 그리드 레이아웃을 구성합니다. slidesPerGroup으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 slidesPerGroup={6}이 페이지 이동입니다.',
      },
      source: {
        code: `<Carousel ariaLabel="그리드 1장씩" slidesPerView={3} gridRows={2} spaceBetween={16}>
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
</Carousel>`,
        language: 'tsx',
      },
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
  render: withDocsCanvasRender(() => (
    <>
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
    </>
  )),
};

export const Coverflow = {
  name: '커버플로우',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflowSides={1}로 좌·우 1개씩 peek합니다.',
      },
      source: {
        code: `<Carousel
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
</Carousel>`,
        language: 'tsx',
      },
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
  render: withDocsCanvasRender(() => (
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
  )),
};

export const CoverflowRise = {
  name: '커버플로우 · 축소',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'coverflowStyle="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflowSides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.',
      },
      source: {
        code: `<Carousel
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
</Carousel>`,
        language: 'tsx',
      },
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
  render: withDocsCanvasRender(() => (
    <>
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
        <p className="typo_caption">{'coverflowSides={2} — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.'}</p>
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
    </>
  )),
};

export const ThumbsGallery = {
  name: '썸네일 갤러리',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '메인 캐러셀과 썸네일 캐러셀을 thumbs · onSwiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다.',
      },
      source: {
        code: `import { useState } from 'react';
import Carousel from '@uxkm/ui-react/components/Carousel.jsx';
import CarouselSlide from '@uxkm/ui-react/components/CarouselSlide.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...carouselDefaultArgs, pagination: false, ariaLabel: '갤러리 메인' },
  render: withDocsCanvasRender(() => <ThumbsGalleryDemo />),
};

export const Playground = {
  parameters: {
    controls: { disable: false },
    docs: {
      source: {
        code: `<Carousel ariaLabel="프로모션 슬라이드">
  {carouselPlaygroundSlides.map((slide) => (
    <CarouselSlide key={slide.title}>
      <SimpleSlideCard slide={slide} />
    </CarouselSlide>
  ))}
</Carousel>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => (
    <Carousel {...args}>
      {carouselPlaygroundSlides.map((slide) => (
        <CarouselSlide key={slide.title}>
          <SimpleSlideCard slide={slide} />
        </CarouselSlide>
      ))}
    </Carousel>
  ),
};
