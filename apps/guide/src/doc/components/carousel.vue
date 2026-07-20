<script>
export const docMeta = {
  title: 'Carousel | HTML Components',
  activeNav: 'carousel',
  pageTitle: 'Carousel',
};
</script>

<script setup>
import { ref } from 'vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Carousel from '@uxkm/ui/components/Carousel.vue';
import CarouselSlide from '@uxkm/ui/components/CarouselSlide.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tag from '@uxkm/ui/components/Tag.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import {
  carouselClassColumns,
  carouselClasses,
  carouselPropColumns,
  carouselProps,
  carouselSlotColumns,
  carouselSlots,
  carouselTokenColumns,
  carouselTokens,
} from '@/doc/data/carousel-api';
import {
  carouselAutoplaySlides,
  carouselAutoplaySourceCode,
  carouselCoverflowSlides,
  carouselCoverflowSourceCode,
  carouselCoverflowRiseSourceCode,
  carouselCustomPaginationSlides,
  carouselCustomPaginationSourceCode,
  carouselDefaultSlides,
  carouselDefaultSourceCode,
  carouselFadeSlides,
  carouselFadeSourceCode,
  carouselFractionSlides,
  carouselFractionSourceCode,
  carouselGridSlides,
  carouselGridSourceCode,
  carouselLoopSlides,
  carouselLoopSourceCode,
  carouselMultiSlides,
  carouselMultiSourceCode,
  carouselPaginationSlides,
  carouselPaginationSourceCode,
  carouselProgressSlides,
  carouselProgressSourceCode,
  carouselSpaceSlides,
  carouselSpacingSourceCode,
  carouselThumbsSlides,
  carouselThumbsSourceCode,
} from '@/doc/data/carousel-demos';

const thumbsSwiper = ref(null);
</script>

<template>
  <div class="page_intro">
    <h1>Carousel</h1>
    <p class="lead">
      <a href="https://swiperjs.com/demos" class="link color_primary" target="_blank" rel="noopener noreferrer">Swiper</a>
      라이브러리 기반 슬라이드 컴포넌트입니다. 표준
      <code class="typo_code">swiper</code> ·
      <code class="typo_code">swiper-wrapper</code> ·
      <code class="typo_code">swiper-slide</code> 마크업을 사용하며, 슬라이드 콘텐츠는
      <code class="typo_code">Card</code> ·
      <code class="typo_code">Tag</code> ·
      <code class="typo_code">Button</code> 등 기존 컴포넌트를 조합합니다.
    </p>
  </div>

  <DemoSection
    heading-id="default-heading"
    title="기본"
    description="Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다."
    :code="carouselDefaultSourceCode"
  >
    <Carousel aria-label="프로모션 슬라이드">
      <CarouselSlide v-for="slide in carouselDefaultSlides" :key="slide.title">
        <Card class="card_borderless card_elevated">
          <template #media>
            <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <component
                  v-for="(part, index) in slide.iconParts"
                  :key="index"
                  :is="part.el"
                  v-bind="part.attrs"
                />
              </svg>
            </div>
          </template>
          <CardHeader>
            <div class="card_header-row">
              <h3 class="card_title">{{ slide.title }}</h3>
              <Tag v-bind="slide.tag" />
            </div>
          </CardHeader>
          <CardBody>{{ slide.body }}</CardBody>
          <CardFooter v-if="slide.footer">
            <Button variant="filled" color="primary" size="sm" :label="slide.footer.label" />
          </CardFooter>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="fade-heading"
    title="페이드"
    description='Swiper Effect fade 데모입니다. effect="fade" prop으로 페이드 전환을 적용합니다.'
    :code="carouselFadeSourceCode"
  >
    <Carousel aria-label="페이드 슬라이드" effect="fade">
      <CarouselSlide v-for="slide in carouselFadeSlides" :key="slide.title">
        <Card :class="slide.accentClass">
          <CardBody>
            <p class="typo_overline">{{ slide.overline }}</p>
            <h3 class="card_title">{{ slide.title }}</h3>
            <p class="typo_lead">{{ slide.lead }}</p>
          </CardBody>
          <CardFooter v-if="slide.footer" :between="slide.footer.type === 'between'">
            <Link
              v-if="slide.footer.link"
              :href="slide.footer.link.href"
              color="primary"
              size="sm"
              :label="slide.footer.link.label"
            />
            <Button
              v-if="slide.footer.button"
              :variant="slide.footer.button.variant"
              color="primary"
              size="sm"
              :label="slide.footer.button.label"
            />
          </CardFooter>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="autoplay-heading"
    title="자동 재생"
    description="autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요."
    :code="carouselAutoplaySourceCode"
  >
    <Carousel
      aria-label="슬라이드 자동 재생"
      autoplay
      :delay="4000"
      loop
      dots-outside
    >
      <CarouselSlide v-for="slide in carouselAutoplaySlides" :key="slide.title">
        <Card class="card_borderless card_elevated">
          <CardHeader>
            <div class="card_header-row">
              <h3 class="card_title">{{ slide.title }}</h3>
              <Badge v-if="slide.badge" v-bind="slide.badge" />
              <Tag v-else-if="slide.tag" v-bind="slide.tag" />
            </div>
          </CardHeader>
          <CardBody>{{ slide.body }}</CardBody>
          <CardFooter v-if="slide.footer">
            <Button
              v-if="slide.footer.type === 'button'"
              variant="filled"
              color="primary"
              size="sm"
              :label="slide.footer.label"
            />
          </CardFooter>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="loop-heading"
    title="무한 루프"
    description="loop prop으로 슬라이드를 순환합니다."
    :code="carouselLoopSourceCode"
  >
    <Carousel aria-label="루프 슬라이드" loop>
      <CarouselSlide v-for="slide in carouselLoopSlides" :key="slide.title">
        <Card variant="shadow">
          <CardHeader :title="slide.title" />
          <CardBody>{{ slide.body }}</CardBody>
          <CardFooter between>
            <strong>{{ slide.price }}</strong>
            <Tag v-bind="slide.tag" />
          </CardFooter>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="multi-heading"
    title="슬라이드 per view"
    description="slides-per-view=&quot;auto&quot;로 여러 카드가 동시에 보입니다."
    :code="carouselMultiSourceCode"
  >
    <Carousel aria-label="다중 슬라이드" multi slides-per-view="auto" :space-between="16" centered :navigation="false">
      <CarouselSlide v-for="slide in carouselMultiSlides" :key="slide.title">
        <Card variant="shadow">
          <CardBody>
            <Tag v-bind="slide.tag" />
            <h3 class="card_title">{{ slide.title }}</h3>
            <p class="card_subtitle">{{ slide.subtitle }}</p>
          </CardBody>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="space-heading"
    title="슬라이드 간격"
    description="space-between prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요. HTML 마크업은 data-swiper-space-between 속성을 사용합니다."
    :code="carouselSpacingSourceCode"
  >
    <Carousel aria-label="기본 간격" :space-between="12" loop>
      <CarouselSlide v-for="slide in carouselSpaceSlides" :key="slide.title">
        <Card variant="shadow">
          <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="pagination-heading"
    title="페이지네이션"
    description="화살표 없이 도트만 사용합니다."
    :code="carouselPaginationSourceCode"
  >
    <Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
      <CarouselSlide v-for="slide in carouselPaginationSlides" :key="slide.title">
        <Card variant="shadow">
          <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="fraction-heading"
    title="분수 페이지네이션"
    description='pagination="fraction" prop으로 현재/전체 슬라이드 번호를 표시합니다.'
    :code="carouselFractionSourceCode"
  >
    <Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
      <CarouselSlide v-for="slide in carouselFractionSlides" :key="slide.title">
        <Card :class="slide.accentClass">
          <CardBody>
            <h3 class="card_title">{{ slide.title }}</h3>
            <p class="typo_lead">{{ slide.lead }}</p>
          </CardBody>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="progress-heading"
    title="프로그레스 페이지네이션"
    description='pagination="progressbar" prop으로 진행률 바를 표시합니다.'
    :code="carouselProgressSourceCode"
  >
    <Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
      <CarouselSlide v-for="slide in carouselProgressSlides" :key="slide.title">
        <Card :class="slide.accentClass">
          <CardBody>
            <h3 class="card_title">{{ slide.title }}</h3>
            <p class="typo_lead">{{ slide.lead }}</p>
          </CardBody>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="custom-pagination-heading"
    title="커스텀 페이지네이션"
    description='pagination="custom" prop으로 번호 불릿을 표시합니다.'
    :code="carouselCustomPaginationSourceCode"
  >
    <Carousel
      aria-label="커스텀 페이지네이션"
      pagination="custom"
      loop
      :navigation="false"
    >
      <CarouselSlide v-for="slide in carouselCustomPaginationSlides" :key="slide.title">
        <Card variant="shadow">
          <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="grid-heading"
    title="그리드"
    description="grid-rows prop으로 다행 그리드 레이아웃을 구성합니다. slides-per-group으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 :slides-per-group=&quot;6&quot;이 페이지 이동입니다."
    stack
    :code="carouselGridSourceCode"
  >
    <div class="demo_preview-block">
      <h3 class="typo_overline">1장씩 이동</h3>
      <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
      <Carousel
        aria-label="그리드 1장씩"
        :slides-per-view="3"
        :grid-rows="2"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="slide.title">
          <Card variant="shadow">
            <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
          </Card>
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
        <CarouselSlide v-for="slide in carouselGridSlides" :key="`group-${slide.title}`">
          <Card variant="shadow">
            <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
          </Card>
        </CarouselSlide>
      </Carousel>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="coverflow-heading"
    title="커버플로우"
    description='effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflow-sides="1"로 좌·우 1개씩 peek합니다. loop로 첫·끝에서도 균형 있게 보입니다.'
    :code="carouselCoverflowSourceCode"
  >
    <Carousel
      aria-label="커버플로우 슬라이드"
      effect="coverflow"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
        <Card class="card_borderless card_elevated">
          <template #media>
            <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
              <span class="typo_overline">{{ slide.title }}</span>
            </div>
          </template>
          <CardHeader>
            <div class="card_header-row">
              <h3 class="card_title">{{ slide.title }}</h3>
              <Tag v-bind="slide.tag" />
            </div>
          </CardHeader>
          <CardBody>{{ slide.body }}</CardBody>
        </Card>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="coverflow-rise-heading"
    title="커버플로우 · 축소"
    description='coverflow-style="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflow-sides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.'
    stack
    :code="carouselCoverflowRiseSourceCode"
  >
    <div class="demo_preview-block">
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
          <Card class="card_borderless card_elevated">
            <template #media>
              <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
                <span class="typo_overline">{{ slide.title }}</span>
              </div>
            </template>
            <CardHeader>
              <div class="card_header-row">
                <h3 class="card_title">{{ slide.title }}</h3>
                <Tag v-bind="slide.tag" />
              </div>
            </CardHeader>
            <CardBody>{{ slide.body }}</CardBody>
          </Card>
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
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="`sides15-${slide.title}`">
          <Card class="card_borderless card_elevated">
            <template #media>
              <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
                <span class="typo_overline">{{ slide.title }}</span>
              </div>
            </template>
            <CardHeader>
              <div class="card_header-row">
                <h3 class="card_title">{{ slide.title }}</h3>
                <Tag v-bind="slide.tag" />
              </div>
            </CardHeader>
            <CardBody>{{ slide.body }}</CardBody>
          </Card>
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
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="`sides2-${slide.title}`">
          <Card class="card_borderless card_elevated">
            <template #media>
              <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
                <span class="typo_overline">{{ slide.title }}</span>
              </div>
            </template>
            <CardHeader>
              <div class="card_header-row">
                <h3 class="card_title">{{ slide.title }}</h3>
                <Tag v-bind="slide.tag" />
              </div>
            </CardHeader>
            <CardBody>{{ slide.body }}</CardBody>
          </Card>
        </CarouselSlide>
      </Carousel>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="thumbs-heading"
    title="썸네일 갤러리"
    description="메인 캐러셀과 썸네일 캐러셀을 thumbs · @swiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다."
    :code="carouselThumbsSourceCode"
  >
    <div class="carousel_gallery">
      <Carousel
        aria-label="갤러리 메인"
        :thumbs="thumbsSwiper"
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          <Card :class="slide.accentClass">
            <CardBody>
              <p class="typo_overline">{{ slide.mediaLabel }}</p>
              <h3 class="card_title">{{ slide.title }}</h3>
              <p class="typo_lead">{{ slide.body }}</p>
            </CardBody>
          </Card>
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
          <Card variant="shadow">
            <CardHeader :title="slide.thumbLabel" />
          </Card>
        </CarouselSlide>
      </Carousel>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="carouselPropColumns" :rows="carouselProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="carouselSlotColumns" :rows="carouselSlots" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      슬라이드 콘텐츠는
      <code class="typo_code">CarouselSlide</code>로 감싸
      <code class="typo_code">Card</code> 등 기존 컴포넌트를 배치합니다.
    </p>
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="carouselClassColumns" :rows="carouselClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="carouselTokenColumns" :rows="carouselTokens" code-column="name" />
  </ApiSection>
</template>
