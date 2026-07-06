<script>
export const docMeta = {
  title: 'Carousel | HTML Components',
  activeNav: 'carousel',
  pageTitle: 'Carousel',
};
</script>

<script setup>
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';
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
} from '@/doc/data/carousel-api';
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
      <code class="typo_code">card</code> ·
      <code class="typo_code">tag</code> ·
      <code class="typo_code">btn</code> 등 기존 컴포넌트를 조합합니다.
    </p>
  </div>

  <DemoSection
    heading-id="default-heading"
    title="기본"
    description="Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다."
  >
    <Carousel aria-label="프로모션 슬라이드">
      <CarouselSlide>
        <article class="card card_borderless card_elevated">
          <div class="card_media card_media-placeholder" role="img" aria-label="신규 가입 혜택">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M20 12v10H4V12" /><path d="M2 7h20v5H2z" /><path d="M12 22V7" />
            </svg>
          </div>
          <div class="card_header">
            <div class="card_header-main">
              <div class="card_header-row">
                <h3 class="card_title">신규 가입 혜택</h3>
                <span class="tag tag_solid color_primary">이벤트</span>
              </div>
            </div>
          </div>
          <div class="card_body">지금 가입하면 첫 주문 20% 할인 쿠폰을 드립니다.</div>
          <div class="card_footer">
            <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">혜택 받기</span></button>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_borderless card_elevated">
          <div class="card_media card_media-placeholder" role="img" aria-label="무료 배송">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            </svg>
          </div>
          <div class="card_header">
            <div class="card_header-main">
              <div class="card_header-row">
                <h3 class="card_title">무료 배송</h3>
                <span class="tag tag_solid color_success">혜택</span>
              </div>
            </div>
          </div>
          <div class="card_body">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_borderless card_elevated">
          <div class="card_media card_media-placeholder" role="img" aria-label="시즌 세일">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            </svg>
          </div>
          <div class="card_header">
            <div class="card_header-main">
              <div class="card_header-row">
                <h3 class="card_title">시즌 세일</h3>
                <span class="tag tag_solid color_warning">세일</span>
              </div>
            </div>
          </div>
          <div class="card_body">베스트셀러 상품 최대 50% 할인. 이번 주말까지 진행됩니다.</div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="fade-heading"
    title="페이드"
    description='Swiper Effect fade 데모입니다. effect="fade" prop으로 페이드 전환을 적용합니다.'
  >
    <Carousel aria-label="페이드 슬라이드" effect="fade">
      <CarouselSlide>
        <article class="card card_accent color_primary card_elevated">
          <div class="card_body">
            <p class="typo_overline">업데이트</p>
            <h3 class="card_title">디자인 시스템 v2</h3>
            <p class="typo_lead">새로운 토큰과 컴포넌트로 일관된 UI를 구축하세요.</p>
          </div>
          <div class="card_footer card_footer-between">
            <a href="#" class="link color_primary size_sm">자세히 보기</a>
            <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">시작하기</span></button>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_accent color_info card_elevated">
          <div class="card_body">
            <p class="typo_overline">테마</p>
            <h3 class="card_title">다크 모드 지원</h3>
            <p class="typo_lead">라이트·다크 테마를 자동으로 전환합니다.</p>
          </div>
          <div class="card_footer">
            <button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">미리보기</span></button>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_accent color_success card_elevated">
          <div class="card_body">
            <p class="typo_overline">접근성</p>
            <h3 class="card_title">접근성 우선</h3>
            <p class="typo_lead">키보드·스와이프·ARIA 속성을 기본 제공합니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="autoplay-heading"
    title="자동 재생"
    description="Autoplay 데모입니다. 기본 슬라이드 전환과 effect=&quot;fade&quot; 페이드 전환을 모두 지원하며, autoplay-toggle prop으로 재생·정지를 제어합니다."
    stack
  >
    <div class="demo_preview-block">
      <h3 class="typo_overline">슬라이드</h3>
      <p class="typo_caption">기본 슬라이드 전환. effect prop을 생략합니다.</p>
      <Carousel
        aria-label="슬라이드 자동 재생"
        autoplay
        :delay="4000"
        loop
        dots-outside
        autoplay-toggle
      >
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">오늘의 추천</h3>
                  <span class="badge color_primary badge_dot">HOT</span>
                </div>
              </div>
            </div>
            <div class="card_body">인기 상품을 슬라이드 전환으로 자동 재생합니다.</div>
            <div class="card_footer">
              <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">보러 가기</span></button>
            </div>
          </article>
        </CarouselSlide>
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">타임 세일</h3>
                  <span class="tag tag_sm color_warning">24h</span>
                </div>
              </div>
            </div>
            <div class="card_body">한정 수량 특가. 슬라이드로 넘기며 확인하세요.</div>
          </article>
        </CarouselSlide>
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">신규 입고</h3>
                  <span class="tag tag_sm color_success">NEW</span>
                </div>
              </div>
            </div>
            <div class="card_body">이번 주 새로 들어온 상품을 만나보세요.</div>
          </article>
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">페이드</h3>
      <p class="typo_caption">effect="fade" prop으로 페이드 전환을 적용합니다.</p>
      <Carousel
        aria-label="페이드 자동 재생"
        autoplay
        :delay="4000"
        loop
        effect="fade"
        dots-outside
        autoplay-toggle
      >
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">봄맞이 컬렉션</h3>
                  <span class="badge color_primary badge_dot">NEW</span>
                </div>
              </div>
            </div>
            <div class="card_body">새 시즌 의류와 액세서리를 만나보세요.</div>
            <div class="card_footer">
              <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">컬렉션 보기</span></button>
            </div>
          </article>
        </CarouselSlide>
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">라이브 쇼핑</h3>
                  <span class="badge color_danger badge_dot">LIVE</span>
                </div>
              </div>
            </div>
            <div class="card_body">매주 금요일 저녁 8시, 실시간 할인 혜택을 확인하세요.</div>
          </article>
        </CarouselSlide>
        <CarouselSlide>
          <article class="card card_borderless card_elevated">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <h3 class="card_title">멤버십 혜택</h3>
                  <span class="tag tag_sm color_primary">VIP</span>
                </div>
              </div>
            </div>
            <div class="card_body">등급별 적립·할인 혜택으로 더 많이 절약하세요.</div>
            <div class="card_footer">
              <a href="#" class="link color_primary size_sm">멤버십 안내</a>
            </div>
          </article>
        </CarouselSlide>
      </Carousel>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="loop-heading"
    title="무한 루프"
    description="loop prop으로 슬라이드를 순환합니다."
  >
    <Carousel aria-label="루프 슬라이드" loop>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_header"><h3 class="card_title">무선 이어폰 Pro</h3></div>
          <div class="card_body">노이즈 캔슬링과 30시간 배터리.</div>
          <div class="card_footer card_footer-between">
            <strong>₩189,000</strong>
            <span class="tag tag_sm color_primary">신상품</span>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_header"><h3 class="card_title">스마트 워치 S3</h3></div>
          <div class="card_body">건강 모니터링과 GPS 추적.</div>
          <div class="card_footer card_footer-between">
            <strong>₩329,000</strong>
            <span class="tag tag_sm color_success">베스트</span>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_header"><h3 class="card_title">휴대용 스피커 Mini</h3></div>
          <div class="card_body">방수 IPX7 · 12시간 재생.</div>
          <div class="card_footer card_footer-between">
            <strong>₩79,000</strong>
            <span class="tag tag_sm color_warning">할인</span>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="multi-heading"
    title="슬라이드 per view"
    description="slides-per-view=&quot;auto&quot;로 여러 카드가 동시에 보입니다."
  >
    <Carousel aria-label="다중 슬라이드" multi slides-per-view="auto" :space-between="16" centered :navigation="false">
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <span class="tag tag_sm color_primary">React</span>
            <h3 class="card_title">프론트엔드</h3>
            <p class="card_subtitle">컴포넌트 기반 UI</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <span class="tag tag_sm color_success">API</span>
            <h3 class="card_title">백엔드</h3>
            <p class="card_subtitle">REST · GraphQL</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <span class="tag tag_sm color_warning">Design</span>
            <h3 class="card_title">디자인</h3>
            <p class="card_subtitle">토큰 · 시스템</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <span class="tag tag_sm color_info">A11y</span>
            <h3 class="card_title">접근성</h3>
            <p class="card_subtitle">WCAG 2.2</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="space-heading"
    title="간격"
    description="space-between prop으로 슬라이드 간격을 지정합니다."
  >
    <Carousel aria-label="간격 슬라이드" :space-between="12" loop>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body"><h3 class="card_title">슬라이드 A</h3><p class="card_subtitle">12px 간격</p></div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body"><h3 class="card_title">슬라이드 B</h3><p class="card_subtitle">카드 조합</p></div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body"><h3 class="card_title">슬라이드 C</h3><p class="card_subtitle">스와이프 지원</p></div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="pagination-heading"
    title="페이지네이션"
    description="화살표 없이 도트만 사용합니다."
  >
    <Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <h3 class="card_title">슬라이드 1</h3>
            <p class="card_subtitle">터치·스와이프로 전환합니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <h3 class="card_title">슬라이드 2</h3>
            <p class="card_subtitle">도트를 클릭해 이동할 수 있습니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_shadow">
          <div class="card_body">
            <h3 class="card_title">슬라이드 3</h3>
            <p class="card_subtitle">grab cursor가 적용됩니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <DemoSection
    heading-id="fraction-heading"
    title="분수 페이지네이션"
    description='pagination="fraction" prop으로 현재/전체 슬라이드 번호를 표시합니다.'
  >
    <Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
      <CarouselSlide>
        <article class="card card_accent color_primary card_elevated">
          <div class="card_body">
            <h3 class="card_title">1 / 3</h3>
            <p class="typo_lead">분수 형식으로 진행 상태를 표시합니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_accent color_info card_elevated">
          <div class="card_body">
            <h3 class="card_title">2 / 3</h3>
            <p class="typo_lead">내비게이션 화살표와 함께 사용할 수 있습니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article class="card card_accent color_success card_elevated">
          <div class="card_body">
            <h3 class="card_title">3 / 3</h3>
            <p class="typo_lead">Swiper 공식 API를 그대로 따릅니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="carouselPropColumns" :rows="carouselProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="carouselSlotColumns" :rows="carouselSlots" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      슬라이드 콘텐츠는
      <code class="typo_code">CarouselSlide</code>로 감싸
      <code class="typo_code">card</code> 등 기존 컴포넌트를 배치합니다.
    </p>
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="carouselClassColumns" :rows="carouselClasses" code-column="name" />
  </ApiSection>
</template>
