/** Carousel 가이드·Storybook 공통 데모 슬라이드 데이터 */

export const carouselDefaultSlides = [
  {
    title: '신규 가입 혜택',
    mediaLabel: '신규 가입 혜택',
    iconParts: [
      { el: 'path', attrs: { d: 'M20 12v10H4V12' } },
      { el: 'path', attrs: { d: 'M2 7h20v5H2z' } },
      { el: 'path', attrs: { d: 'M12 22V7' } },
    ],
    tag: { variant: 'solid', color: 'primary', label: '이벤트' },
    body: '지금 가입하면 첫 주문 20% 할인 쿠폰을 드립니다.',
    footer: { type: 'button', label: '혜택 받기' },
  },
  {
    title: '무료 배송',
    mediaLabel: '무료 배송',
    iconParts: [
      { el: 'rect', attrs: { x: 1, y: 3, width: 15, height: 13 } },
      { el: 'polygon', attrs: { points: '16 8 20 8 23 11 23 16 16 16 16 8' } },
    ],
    tag: { variant: 'solid', color: 'success', label: '혜택' },
    body: '3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.',
  },
  {
    title: '시즌 세일',
    mediaLabel: '시즌 세일',
    iconParts: [{ el: 'path', attrs: { d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' } }],
    tag: { variant: 'solid', color: 'warning', label: '세일' },
    body: '베스트셀러 상품 최대 50% 할인. 이번 주말까지 진행됩니다.',
  },
];

export const carouselFadeSlides = [
  {
    overline: '업데이트',
    title: '디자인 시스템 v2',
    lead: '새로운 토큰과 컴포넌트로 일관된 UI를 구축하세요.',
    accentClass: 'card_accent color_primary card_elevated',
    footer: {
      type: 'between',
      link: { href: '#', label: '자세히 보기' },
      button: { label: '시작하기', variant: 'filled' },
    },
  },
  {
    overline: '테마',
    title: '다크 모드 지원',
    lead: '라이트·다크 테마를 자동으로 전환합니다.',
    accentClass: 'card_accent color_info card_elevated',
    footer: { type: 'button', label: '미리보기', variant: 'outline' },
  },
  {
    overline: '접근성',
    title: '접근성 우선',
    lead: '키보드·스와이프·ARIA 속성을 기본 제공합니다.',
    accentClass: 'card_accent color_success card_elevated',
  },
];

export const carouselAutoplaySlides = [
  {
    title: '오늘의 추천',
    badge: { color: 'primary', dot: true, label: 'HOT' },
    body: '인기 상품을 슬라이드 전환으로 자동 재생합니다.',
    footer: { type: 'button', label: '보러 가기' },
  },
  {
    title: '타임 세일',
    tag: { size: 'sm', color: 'warning', label: '24h' },
    body: '한정 수량 특가. 슬라이드로 넘기며 확인하세요.',
  },
  {
    title: '신규 입고',
    tag: { size: 'sm', color: 'success', label: 'NEW' },
    body: '이번 주 새로 들어온 상품을 만나보세요.',
  },
];

export const carouselLoopSlides = [
  {
    title: '무선 이어폰 Pro',
    body: '노이즈 캔슬링과 30시간 배터리.',
    price: '₩189,000',
    tag: { size: 'sm', color: 'primary', label: '신상품' },
  },
  {
    title: '스마트 워치 S3',
    body: '건강 모니터링과 GPS 추적.',
    price: '₩329,000',
    tag: { size: 'sm', color: 'success', label: '베스트' },
  },
  {
    title: '휴대용 스피커 Mini',
    body: '방수 IPX7 · 12시간 재생.',
    price: '₩79,000',
    tag: { size: 'sm', color: 'warning', label: '할인' },
  },
];

export const carouselMultiSlides = [
  {
    title: '프론트엔드',
    subtitle: '컴포넌트 기반 UI',
    tag: { size: 'sm', color: 'primary', label: 'React' },
  },
  {
    title: '백엔드',
    subtitle: 'REST · GraphQL',
    tag: { size: 'sm', color: 'success', label: 'API' },
  },
  {
    title: '디자인',
    subtitle: '토큰 · 시스템',
    tag: { size: 'sm', color: 'warning', label: 'Design' },
  },
  {
    title: '접근성',
    subtitle: 'WCAG 2.2',
    tag: { size: 'sm', color: 'info', label: 'A11y' },
  },
];

export const carouselSpaceSlides = [
  { title: '슬라이드 A', subtitle: '12px 간격' },
  { title: '슬라이드 B', subtitle: '카드 조합' },
  { title: '슬라이드 C', subtitle: '스와이프 지원' },
];

export const carouselPaginationSlides = [
  { title: '슬라이드 1', subtitle: '터치·스와이프로 전환합니다.' },
  { title: '슬라이드 2', subtitle: '도트를 클릭해 이동할 수 있습니다.' },
  { title: '슬라이드 3', subtitle: 'grab cursor가 적용됩니다.' },
];

export const carouselFractionSlides = [
  {
    title: '1 / 3',
    lead: '분수 형식으로 진행 상태를 표시합니다.',
    accentClass: 'card_accent color_primary card_elevated',
  },
  {
    title: '2 / 3',
    lead: '내비게이션 화살표와 함께 사용할 수 있습니다.',
    accentClass: 'card_accent color_info card_elevated',
  },
  {
    title: '3 / 3',
    lead: 'Swiper 공식 API를 그대로 따릅니다.',
    accentClass: 'card_accent color_success card_elevated',
  },
];

export const carouselProgressSlides = [
  {
    title: '프로그레스 바',
    lead: 'pagination="progressbar"로 진행률을 표시합니다.',
    accentClass: 'card_accent color_primary card_elevated',
  },
  {
    title: '하단 인디케이터',
    lead: '슬라이드 하단에 진행 바가 채워집니다.',
    accentClass: 'card_accent color_info card_elevated',
  },
  {
    title: '터치·스와이프',
    lead: '스와이프와 함께 진행 상태가 갱신됩니다.',
    accentClass: 'card_accent color_success card_elevated',
  },
];

export const carouselCustomPaginationSlides = [
  { title: '슬라이드 1', subtitle: '번호 불릿으로 이동합니다.' },
  { title: '슬라이드 2', subtitle: '커스텀 renderBullet을 사용합니다.' },
  { title: '슬라이드 3', subtitle: '활성 번호가 강조됩니다.' },
  { title: '슬라이드 4', subtitle: '접근성 라벨과 함께 사용하세요.' },
];

export const carouselGridSlides = [
  { title: '그리드 A', subtitle: '페이지 1 · 상품 목록' },
  { title: '그리드 B', subtitle: '페이지 1 · 카탈로그' },
  { title: '그리드 C', subtitle: '페이지 1 · 갤러리' },
  { title: '그리드 D', subtitle: '페이지 1 · 포트폴리오' },
  { title: '그리드 E', subtitle: '페이지 1 · 추천' },
  { title: '그리드 F', subtitle: '페이지 1 · 신상품' },
  { title: '그리드 G', subtitle: '페이지 2 · 베스트' },
  { title: '그리드 H', subtitle: '페이지 2 · 특가' },
  { title: '그리드 I', subtitle: '페이지 2 · 이벤트' },
  { title: '그리드 J', subtitle: '페이지 2 · 컬렉션' },
  { title: '그리드 K', subtitle: '페이지 2 · 시즌' },
  { title: '그리드 L', subtitle: '페이지 2 · 인기' },
  { title: '그리드 M', subtitle: '페이지 3 · 디지털' },
  { title: '그리드 N', subtitle: '페이지 3 · 리빙' },
  { title: '그리드 O', subtitle: '페이지 3 · 패션' },
  { title: '그리드 P', subtitle: '페이지 3 · 뷰티' },
  { title: '그리드 Q', subtitle: '페이지 3 · 스포츠' },
  { title: '그리드 R', subtitle: '페이지 3 · 키즈' },
];

export const carouselCoverflowSlides = [
  {
    title: '커버플로우 1',
    mediaLabel: '커버플로우 1',
    tag: { size: 'sm', color: 'primary', label: 'Featured' },
    body: '중앙 슬라이드가 돋보이는 3D 효과입니다.',
  },
  {
    title: '커버플로우 2',
    mediaLabel: '커버플로우 2',
    tag: { size: 'sm', color: 'success', label: 'Popular' },
    body: '좌우 슬라이드가 회전·깊이감으로 배치됩니다.',
  },
  {
    title: '커버플로우 3',
    mediaLabel: '커버플로우 3',
    tag: { size: 'sm', color: 'warning', label: 'New' },
    body: 'effect="coverflow"·loop로 끝단에서도 좌우가 균형 있게 보입니다.',
  },
  {
    title: '커버플로우 4',
    mediaLabel: '커버플로우 4',
    tag: { size: 'sm', color: 'info', label: 'Pick' },
    body: 'coverflow-sides로 좌·우 노출 개수를 조절합니다.',
  },
  {
    title: '커버플로우 5',
    mediaLabel: '커버플로우 5',
    tag: { size: 'sm', color: 'primary', label: 'Best' },
    body: '상품·앨범 갤러리 UI에 적합합니다.',
  },
  {
    title: '커버플로우 6',
    mediaLabel: '커버플로우 6',
    tag: { size: 'sm', color: 'success', label: 'Sale' },
    body: 'loop 시 첫·끝 슬라이드에서도 이전·다음이 함께 보입니다.',
  },
  {
    title: '커버플로우 7',
    mediaLabel: '커버플로우 7',
    tag: { size: 'sm', color: 'warning', label: 'Hot' },
    body: '활성 슬라이드는 항상 가운데에 정렬됩니다.',
  },
  {
    title: '커버플로우 8',
    mediaLabel: '커버플로우 8',
    tag: { size: 'sm', color: 'info', label: 'More' },
    body: '슬라이드를 충분히 두어 loop·peek가 안정적으로 동작합니다.',
  },
  {
    title: '커버플로우 9',
    mediaLabel: '커버플로우 9',
    tag: { size: 'sm', color: 'primary', label: 'Extra' },
    body: 'coverflow-sides는 크기를 유지한 채 간격으로 peek만 조절합니다.',
  },
  {
    title: '커버플로우 10',
    mediaLabel: '커버플로우 10',
    tag: { size: 'sm', color: 'success', label: 'Extra' },
    body: '여유 슬라이드로 첫·끝 로드에서도 좌우 peek가 유지됩니다.',
  },
  {
    title: '커버플로우 11',
    mediaLabel: '커버플로우 11',
    tag: { size: 'sm', color: 'warning', label: 'Extra' },
    body: 'sides=2 loop에 필요한 최소 장수를 맞춥니다.',
  },
  {
    title: '커버플로우 12',
    mediaLabel: '커버플로우 12',
    tag: { size: 'sm', color: 'info', label: 'Extra' },
    body: '시작 슬라이드는 항상 1번(가운데)부터 보입니다.',
  },
];

export const carouselThumbsSlides = [
  {
    title: '갤러리 1',
    mediaLabel: '갤러리 메인 1',
    thumbLabel: '썸네일 1',
    body: '메인 슬라이드와 하단 썸네일이 양방향 연동됩니다.',
    accentClass: 'card_accent color_primary card_elevated',
  },
  {
    title: '갤러리 2',
    mediaLabel: '갤러리 메인 2',
    thumbLabel: '썸네일 2',
    body: '썸네일을 클릭하면 메인 슬라이드가 이동합니다.',
    accentClass: 'card_accent color_info card_elevated',
  },
  {
    title: '갤러리 3',
    mediaLabel: '갤러리 메인 3',
    thumbLabel: '썸네일 3',
    body: 'thumbs prop과 @swiper 이벤트로 연결합니다.',
    accentClass: 'card_accent color_success card_elevated',
  },
  {
    title: '갤러리 4',
    mediaLabel: '갤러리 메인 4',
    thumbLabel: '썸네일 4',
    body: 'thumbs-control로 썸네일 캐러셀을 구성합니다.',
    accentClass: 'card_accent color_warning card_elevated',
  },
  {
    title: '갤러리 5',
    mediaLabel: '갤러리 메인 5',
    thumbLabel: '썸네일 5',
    body: '한 화면에 4개만 보이므로 스와이프로 추가 썸네일을 확인할 수 있습니다.',
    accentClass: 'card_accent color_danger card_elevated',
  },
  {
    title: '갤러리 6',
    mediaLabel: '갤러리 메인 6',
    thumbLabel: '썸네일 6',
    body: '메인 전환 시 활성 썸네일이 따라 이동합니다.',
    accentClass: 'card_accent color_primary card_elevated',
  },
  {
    title: '갤러리 7',
    mediaLabel: '갤러리 메인 7',
    thumbLabel: '썸네일 7',
    body: '썸네일 영역을 스와이프해 이동을 확인해 보세요.',
    accentClass: 'card_accent color_info card_elevated',
  },
  {
    title: '갤러리 8',
    mediaLabel: '갤러리 메인 8',
    thumbLabel: '썸네일 8',
    body: 'slides-per-view보다 많은 썸네일로 가로 스크롤이 생깁니다.',
    accentClass: 'card_accent color_success card_elevated',
  },
];

export const carouselPlaygroundSlides = [
  { title: '슬라이드 1', subtitle: 'Controls로 속성을 조절해 보세요.' },
  { title: '슬라이드 2', subtitle: '두 번째 슬라이드' },
  { title: '슬라이드 3', subtitle: '세 번째 슬라이드' },
];

const demoImport = `import {
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
} from '@/doc/data/carousel-demos';`;

const componentImports = `import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tag from '@uxkm/ui/components/Tag.vue';`;

const scriptSetupPrefix = `<script setup>
import Carousel from '@uxkm/ui/components/Carousel.vue';
import CarouselSlide from '@uxkm/ui/components/CarouselSlide.vue';
${componentImports}
${demoImport}
</script>

`;

export const carouselDefaultSlideTemplate = `<Card class="card_borderless card_elevated">
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
</Card>`;

export const carouselFadeSlideTemplate = `<Card :class="slide.accentClass">
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
</Card>`;

export const carouselAutoplaySlideTemplate = `<Card class="card_borderless card_elevated">
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
    <Link
      v-else-if="slide.footer.type === 'link'"
      :href="slide.footer.href"
      color="primary"
      size="sm"
      :label="slide.footer.label"
    />
  </CardFooter>
</Card>`;

export const carouselLoopSlideTemplate = `<Card variant="shadow">
  <CardHeader :title="slide.title" />
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter between>
    <strong>{{ slide.price }}</strong>
    <Tag v-bind="slide.tag" />
  </CardFooter>
</Card>`;

export const carouselMultiSlideTemplate = `<Card variant="shadow">
  <CardBody>
    <Tag v-bind="slide.tag" />
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="card_subtitle">{{ slide.subtitle }}</p>
  </CardBody>
</Card>`;

export const carouselSimpleSlideTemplate = `<Card variant="shadow">
  <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
</Card>`;

export const carouselFractionSlideTemplate = `<Card :class="slide.accentClass">
  <CardBody>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.lead }}</p>
  </CardBody>
</Card>`;

export const carouselCoverflowSlideTemplate = `<Card class="card_borderless card_elevated">
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
</Card>`;

export const carouselThumbsMainSlideTemplate = `<Card :class="slide.accentClass">
  <CardBody>
    <p class="typo_overline">{{ slide.mediaLabel }}</p>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.body }}</p>
  </CardBody>
</Card>`;

export const carouselThumbsControlSlideTemplate = `<Card variant="shadow">
  <CardHeader :title="slide.thumbLabel" />
</Card>`;

function wrapCarouselSlide(slidesVar, slideTemplate) {
  return `<CarouselSlide v-for="slide in ${slidesVar}" :key="slide.title">
      ${slideTemplate}
    </CarouselSlide>`;
}

export const carouselDefaultSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="프로모션 슬라이드">
    ${wrapCarouselSlide('carouselDefaultSlides', carouselDefaultSlideTemplate)}
  </Carousel>
</template>`;

export const carouselFadeSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="페이드 슬라이드" effect="fade">
    ${wrapCarouselSlide('carouselFadeSlides', carouselFadeSlideTemplate)}
  </Carousel>
</template>`;

export const carouselAutoplaySourceCode = `${scriptSetupPrefix}<template>
  <Carousel
    aria-label="슬라이드 자동 재생"
    autoplay
    :delay="4000"
    loop
    dots-outside
  >
    ${wrapCarouselSlide('carouselAutoplaySlides', carouselAutoplaySlideTemplate)}
  </Carousel>
</template>`;

export const carouselLoopSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="루프 슬라이드" loop>
    ${wrapCarouselSlide('carouselLoopSlides', carouselLoopSlideTemplate)}
  </Carousel>
</template>`;

export const carouselMultiSourceCode = `${scriptSetupPrefix}<template>
  <Carousel
    aria-label="다중 슬라이드"
    multi
    slides-per-view="auto"
    :space-between="16"
    centered
    :navigation="false"
  >
    ${wrapCarouselSlide('carouselMultiSlides', carouselMultiSlideTemplate)}
  </Carousel>
</template>`;

export const carouselSpacingSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="기본 간격" :space-between="12" loop>
    ${wrapCarouselSlide('carouselSpaceSlides', carouselSimpleSlideTemplate)}
  </Carousel>
</template>`;

export const carouselPaginationSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
    ${wrapCarouselSlide('carouselPaginationSlides', carouselSimpleSlideTemplate)}
  </Carousel>
</template>`;

export const carouselFractionSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
    ${wrapCarouselSlide('carouselFractionSlides', carouselFractionSlideTemplate)}
  </Carousel>
</template>`;

export const carouselProgressSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
    ${wrapCarouselSlide('carouselProgressSlides', carouselFractionSlideTemplate)}
  </Carousel>
</template>`;

export const carouselCustomPaginationSourceCode = `${scriptSetupPrefix}<template>
  <Carousel
    aria-label="커스텀 페이지네이션"
    pagination="custom"
    loop
    :navigation="false"
  >
    ${wrapCarouselSlide('carouselCustomPaginationSlides', carouselSimpleSlideTemplate)}
  </Carousel>
</template>`;

export const carouselGridSourceCode = `${scriptSetupPrefix}<template>
  <div class="demo_preview-block">
    <h3 class="typo_overline">1장씩 이동</h3>
    <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
    <Carousel
      aria-label="그리드 1장씩"
      :slides-per-view="3"
      :grid-rows="2"
      :space-between="16"
    >
      ${wrapCarouselSlide('carouselGridSlides', carouselSimpleSlideTemplate)}
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
      ${wrapCarouselSlide('carouselGridSlides', carouselSimpleSlideTemplate)}
    </Carousel>
  </div>
</template>`;

export const carouselCoverflowSourceCode = `${scriptSetupPrefix}<template>
  <Carousel
    aria-label="커버플로우 슬라이드"
    effect="coverflow"
    :coverflow-sides="1"
    :space-between="16"
    loop
    :pagination="false"
  >
    ${wrapCarouselSlide('carouselCoverflowSlides', carouselCoverflowSlideTemplate)}
  </Carousel>
</template>`;

export const carouselCoverflowRiseSourceCode = `${scriptSetupPrefix}<template>
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
      ${wrapCarouselSlide('carouselCoverflowSlides', carouselCoverflowSlideTemplate)}
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
      ${wrapCarouselSlide('carouselCoverflowSlides', carouselCoverflowSlideTemplate)}
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
      ${wrapCarouselSlide('carouselCoverflowSlides', carouselCoverflowSlideTemplate)}
    </Carousel>
  </div>
</template>`;

const thumbsScriptSetup = `<script setup>
import { ref } from 'vue';
import Carousel from '@uxkm/ui/components/Carousel.vue';
import CarouselSlide from '@uxkm/ui/components/CarouselSlide.vue';
${componentImports}
import { carouselThumbsSlides } from '@/doc/data/carousel-demos';

const thumbsSwiper = ref(null);
</script>

`;

export const carouselThumbsSourceCode = `${thumbsScriptSetup}<template>
  <div class="carousel_gallery">
    <Carousel
      aria-label="갤러리 메인"
      :thumbs="thumbsSwiper"
      :pagination="false"
    >
      ${wrapCarouselSlide('carouselThumbsSlides', carouselThumbsMainSlideTemplate)}
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
      ${wrapCarouselSlide('carouselThumbsSlides', carouselThumbsControlSlideTemplate)}
    </Carousel>
  </div>
</template>`;

export const carouselPlaygroundSourceCode = `${scriptSetupPrefix}<template>
  <Carousel aria-label="프로모션 슬라이드">
    ${wrapCarouselSlide('carouselPlaygroundSlides', carouselSimpleSlideTemplate)}
  </Carousel>
</template>`;

export const carouselSlideComponents = [
  'Badge',
  'Button',
  'Card',
  'CardBody',
  'CardFooter',
  'CardHeader',
  'Carousel',
  'CarouselSlide',
  'Link',
  'Tag',
];
