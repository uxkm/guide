<script>
export const docMeta = {
  title: 'Card | HTML Components',
  activeNav: 'card',
  pageTitle: 'Card',
};
</script>

<script setup>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Stat from '@/components/Stat.vue';
import Tag from '@/components/Tag.vue';
import {
  cardClassColumns,
  cardClasses,
  cardFooterPropColumns,
  cardFooterProps,
  cardFooterSlots,
  cardHeaderPropColumns,
  cardHeaderProps,
  cardHeaderSlots,
  cardBodyPropColumns,
  cardBodyProps,
  cardBodySlots,
  cardPropColumns,
  cardProps,
  cardSlotColumns,
  cardSlots,
  cardTokenColumns,
  cardTokens,
} from '@/doc/data/card-api';

const basicCode = `<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <Card style="max-width: 360px; width: 100%;">
    <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
    <CardBody>
      카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
    </CardBody>
    <CardFooter>
      <Button variant="filled" color="primary" size="sm" label="확인" />
      <Button variant="ghost" size="sm" label="취소" />
    </CardFooter>
  </Card>
</template>`;

const simpleCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;">
    <CardBody>
      <p class="card_title">알림</p>
      새로운 메시지가 도착했습니다. 확인해 주세요.
    </CardBody>
  </Card>
  <Card size="compact" style="max-width: 280px; width: 100%;">
    <CardBody>
      컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
    </CardBody>
  </Card>
</template>`;

const skinCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card>
      <CardBody>기본 — 테두리 · 그림자</CardBody>
    </Card>
    <Card variant="shadow">
      <CardBody>Shadow — 그림자</CardBody>
    </Card>
    <Card class="card_elevated">
      <CardBody>Elevated — 강한 그림자</CardBody>
    </Card>
    <Card variant="flat">
      <CardBody>Ghost — 투명 배경</CardBody>
    </Card>
  </div>
</template>`;

const sizeCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card size="sm">
      <CardHeader title="Small" />
      <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
    </Card>
    <Card>
      <CardHeader title="Medium" />
      <CardBody>기본 크기 카드입니다.</CardBody>
    </Card>
    <Card size="lg">
      <CardHeader title="Large" />
      <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
    </Card>
  </div>
</template>`;

const accentCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card class="card_accent color_primary">
      <CardBody>
        <p class="card_title">정보</p>
        시스템 업데이트가 예정되어 있습니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_success">
      <CardBody>
        <p class="card_title">성공</p>
        작업이 정상적으로 완료되었습니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_warning">
      <CardBody>
        <p class="card_title">주의</p>
        저장 공간이 부족합니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_danger">
      <CardBody>
        <p class="card_title">오류</p>
        연결에 실패했습니다. 다시 시도해 주세요.
      </CardBody>
    </Card>
  </div>
</template>`;

const mediaCode = `<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">
    <template #media>
      <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
    </template>
    <CardHeader>
      <div class="card_header-row">
        <h3 class="card_title">프로젝트 Alpha</h3>
        <Tag size="sm" color="primary" label="진행 중" />
      </div>
      <p class="card_subtitle">업데이트 · 2일 전</p>
    </CardHeader>
    <CardBody>
      디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.
    </CardBody>
    <CardFooter between>
      <span class="color_muted size_sm">3명 참여</span>
      <Button variant="text" color="primary" size="sm" label="자세히" />
    </CardFooter>
  </Card>
</template>`;

const horizontalCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">
    <template #media>
      <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      </div>
    </template>
    <div class="card_inner">
      <CardHeader title="가이드 문서" />
      <CardBody>
        HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.
      </CardBody>
      <CardFooter>
        <a href="#" class="link color_primary size_sm" @click.prevent>문서 보기</a>
      </CardFooter>
    </div>
  </Card>
</template>`;

const webzineCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card layout="webzine" variant="shadow" title="도시를 바꾸는 작은 디자인" subtitle="Design Journal · 2026.07.31">
    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="웹진 대표 이미지" /></template>
    <CardBody>일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.</CardBody>
  </Card>
</template>`;

const newsListCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_news-list">
    <Card layout="news" title="디자인 시스템 업데이트" subtitle="제품 소식 · 10분 전">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="업데이트 뉴스 이미지" /></template>
      <CardBody>접근성 토큰과 컴포넌트 API가 개선되었습니다.</CardBody>
    </Card>
    <Card layout="news" media-position="right" title="새로운 가이드 공개" subtitle="가이드 · 1시간 전">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="가이드 뉴스 이미지" /></template>
      <CardBody>콘텐츠 작성과 레이아웃 원칙을 확인하세요.</CardBody>
    </Card>
  </div>
</template>`;

const mediaPositionCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card media-position="left" :media-divider="false" title="이미지 좌측 · 구분선 없음">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="좌측 배치 이미지" /></template>
      <CardBody>미디어 다음에 콘텐츠를 배치합니다.</CardBody>
    </Card>
    <Card media-position="right" :media-divider="false" title="이미지 우측 · 구분선 없음">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="우측 배치 이미지" /></template>
      <CardBody>콘텐츠 다음에 미디어를 배치합니다.</CardBody>
    </Card>
  </div>
</template>`;

const productListCode = `<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
<\/script>

<template>
  <div class="card_product-list">
    <Card layout="product" :media-divider="false" title="라이트 러닝 재킷" subtitle="무료 배송">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="라이트 러닝 재킷 상품 이미지" /></template>
      <CardBody :line-clamp="2">가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.</CardBody>
      <CardFooter justify="between">
        <p class="card_price"><data value="89000">89,000원</data><del class="card_price-original">109,000원</del></p>
        <Button variant="filled" size="sm" label="담기" />
      </CardFooter>
    </Card>
    <Card layout="product" :media-divider="false" title="데일리 백팩" subtitle="오늘 출발">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="데일리 백팩 상품 이미지" /></template>
      <CardBody :line-clamp="1">노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.</CardBody>
      <CardFooter justify="between">
        <p class="card_price"><data value="64000">64,000원</data></p>
        <Button variant="outline" size="sm" label="상세보기" />
      </CardFooter>
    </Card>
  </div>
</template>`;

const lineClampCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';

const description = '디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다.';
<\/script>

<template>
  <div class="card_deck card_deck-3">
    <Card><CardHeader title="한 줄 말줄임" /><CardBody :line-clamp="1">{{ description }}</CardBody></Card>
    <Card><CardHeader title="두 줄 말줄임" /><CardBody :line-clamp="2">{{ description }}</CardBody></Card>
    <Card><CardHeader title="세 줄 말줄임" /><CardBody :line-clamp="3">{{ description }}</CardBody></Card>
  </div>
</template>`;

const clampDescription = '디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다. 구성 요소와 사용 원칙을 하나의 언어로 정리하면 디자이너와 개발자가 같은 기준으로 협업할 수 있으며, 새로운 기능을 추가할 때도 품질을 안정적으로 유지할 수 있습니다.';

const iconCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card variant="shadow" hoverable>
      <CardBody>
        <span class="card_icon color_primary" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </span>
        <h3 class="card_title">빠른 성능</h3>
        <p class="card_subtitle">가벼운 번들, 빠른 로딩</p>
      </CardBody>
    </Card>
    <Card variant="shadow" hoverable>
      <CardBody>
        <span class="card_icon color_success" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <h3 class="card_title">접근성</h3>
        <p class="card_subtitle">WCAG 2.2 AA 기준</p>
      </CardBody>
    </Card>
    <Card variant="shadow">
      <CardBody>
        <Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trend-color="success" />
      </CardBody>
    </Card>
  </div>
</template>`;

const profileCode = `<script setup>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Card variant="shadow" style="max-width: 320px; width: 100%;">
    <CardHeader>
      <div class="card_header-row">
        <Avatar color="primary" initials="홍" aria-hidden />
        <div>
          <h3 class="card_title">홍길동</h3>
          <p class="card_subtitle">프론트엔드 개발자</p>
        </div>
      </div>
      <template #extra>
        <Button variant="ghost" size="sm" icon-only aria-label="더 보기">
          <template #icon-before>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </template>
        </Button>
      </template>
    </CardHeader>
    <CardBody>
      <div class="tag_group tag_group-tight">
        <Tag size="sm" color="primary" label="React" />
        <Tag size="sm" color="primary" label="TypeScript" />
        <Tag size="sm" color="default" label="SCSS" />
      </div>
    </CardBody>
    <CardFooter ratio="2:1">
      <span class="color_muted size_sm">서울 · 온라인</span>
      <Button variant="outline" color="primary" size="sm" label="팔로우" />
    </CardFooter>
  </Card>
</template>`;

const clickableCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card as="a" href="#" hoverable class="card_clickable" @click.prevent>
      <CardBody>
        <h3 class="card_title">링크 카드</h3>
        <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
      </CardBody>
    </Card>
    <Card as="button" type="button" hoverable variant="shadow" class="card_clickable">
      <CardBody>
        <h3 class="card_title">버튼 카드</h3>
        <p class="card_subtitle">네이티브 button으로 키보드 동작을 지원합니다.</p>
      </CardBody>
    </Card>
  </div>
</template>`;

const footerLayoutCode = `<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card><CardBody>단일 액션</CardBody><CardFooter full justify="center"><Button variant="filled" label="전체 너비 액션" /></CardFooter></Card>
    <Card><CardBody>균등 분할</CardBody><CardFooter ratio="1:1" flush><Button variant="ghost" label="취소" /><Button variant="filled" label="확인" /></CardFooter></Card>
    <Card><CardBody>상황별 비율</CardBody><CardFooter ratio="1:2"><Button variant="ghost" label="이전" /><Button variant="filled" label="다음 단계" /></CardFooter></Card>
  </div>
</template>`;

const disabledCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card class="is-disabled" style="max-width: 280px; width: 100%;">
    <CardBody>
      <h3 class="card_title">비활성 카드</h3>
      <p class="card_subtitle">현재 이용할 수 없습니다.</p>
    </CardBody>
  </Card>
</template>`;

const gridCode = `<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card hoverable>
      <CardHeader title="Feature A" />
      <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
    </Card>
    <Card hoverable>
      <CardHeader title="Feature B" />
      <CardBody>접근성을 고려한 마크업 구조.</CardBody>
    </Card>
    <Card hoverable>
      <CardHeader title="Feature C" />
      <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
    </Card>
  </div>
</template>`;

</script>

<template>
  <div class="page_intro">
    <h1>Card</h1>
    <p class="lead">콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="card_header · card_body · card_footer 구조를 가집니다."
    :code="basicCode"
  >
    <Card style="max-width: 360px; width: 100%;">
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>
        카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
      </CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="simple-heading"
    title="간단"
    description="header나 footer 없이 body만 사용하는 단순 카드입니다."
    :code="simpleCode"
  >
    <Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        <p class="card_title">알림</p>
        새로운 메시지가 도착했습니다. 확인해 주세요.
      </CardBody>
    </Card>

    <Card size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
      </CardBody>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="skin-heading"
    title="스킨"
    description="기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다."
    :code="skinCode"
  >
    <div class="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card class="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size로 패딩과 제목 크기를 조절합니다."
    :code="sizeCode"
  >
    <div class="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="accent-heading"
    title="강조 테두리"
    description="card_accent와 color_*로 왼쪽 강조선을 적용합니다."
    :code="accentCode"
  >
    <div class="card_deck card_deck-2">
      <Card class="card_accent color_primary">
        <CardBody>
          <p class="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
      <Card class="card_accent color_success">
        <CardBody>
          <p class="card_title">성공</p>
          작업이 정상적으로 완료되었습니다.
        </CardBody>
      </Card>
      <Card class="card_accent color_warning">
        <CardBody>
          <p class="card_title">주의</p>
          저장 공간이 부족합니다.
        </CardBody>
      </Card>
      <Card class="card_accent color_danger">
        <CardBody>
          <p class="card_title">오류</p>
          연결에 실패했습니다. 다시 시도해 주세요.
        </CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="media-heading"
    title="미디어"
    description="card_media로 상단 이미지·썸네일 영역을 추가합니다."
    :code="mediaCode"
  >
    <Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </template>
      <CardHeader>
        <div class="card_header-row">
          <h3 class="card_title">프로젝트 Alpha</h3>
          <Tag size="sm" color="primary" label="진행 중" />
        </div>
        <p class="card_subtitle">업데이트 · 2일 전</p>
      </CardHeader>
      <CardBody>
        디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.
      </CardBody>
      <CardFooter between>
        <span class="color_muted size_sm">3명 참여</span>
        <Button variant="text" color="primary" size="sm" label="자세히" />
      </CardFooter>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="horizontal-heading"
    title="가로"
    description="card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다."
    :code="horizontalCode"
  >
    <Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
          </svg>
        </div>
      </template>
      <div class="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>
          HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.
        </CardBody>
        <CardFooter>
          <a href="#" class="link color_primary size_sm" @click.prevent>문서 보기</a>
        </CardFooter>
      </div>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="webzine-heading"
    title="웹진형"
    description="layout=&quot;webzine&quot;은 넓은 상단 이미지와 강조된 제목·본문으로 에디토리얼 콘텐츠를 구성합니다."
    :code="webzineCode"
  >
    <Card layout="webzine" variant="shadow" title="도시를 바꾸는 작은 디자인" subtitle="Design Journal · 2026.07.31" style="max-width: 680px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="웹진 대표 이미지">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
        </div>
      </template>
      <CardBody>일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.</CardBody>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="news-list-heading"
    title="뉴스 리스트형"
    description="layout=&quot;news&quot;는 밀도 높은 가로형 뉴스 항목을 만듭니다. 기본 이미지는 좌측이며 mediaPosition으로 우측 배치도 가능합니다."
    :code="newsListCode"
    stack
  >
    <div class="card_news-list">
      <Card layout="news" title="디자인 시스템 업데이트" subtitle="제품 소식 · 10분 전">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="업데이트 뉴스 이미지" /></template>
        <CardBody>접근성 토큰과 컴포넌트 API가 개선되었습니다.</CardBody>
      </Card>
      <Card layout="news" media-position="right" title="새로운 가이드 공개" subtitle="가이드 · 1시간 전">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="가이드 뉴스 이미지" /></template>
        <CardBody>콘텐츠 작성과 레이아웃 원칙을 확인하세요.</CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="media-position-heading"
    title="이미지 좌측 · 우측"
    description="mediaPosition을 left 또는 right로 지정하면 Card가 미디어와 콘텐츠 래퍼를 자동으로 구성합니다. mediaDivider=false로 이미지 경계선을 제거할 수 있습니다."
    :code="mediaPositionCode"
    stack
  >
    <div class="card_deck card_deck-2">
      <Card media-position="left" :media-divider="false" title="이미지 좌측 · 구분선 없음">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="좌측 배치 이미지" /></template>
        <CardBody>미디어 다음에 콘텐츠를 배치합니다.</CardBody>
      </Card>
      <Card media-position="right" :media-divider="false" title="이미지 우측 · 구분선 없음">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="우측 배치 이미지" /></template>
        <CardBody>콘텐츠 다음에 미디어를 배치합니다.</CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="product-list-heading"
    title="상품 리스트형"
    description="layout=&quot;product&quot;는 상품 이미지·설명·가격·액션을 밀도 높은 가로 목록으로 구성합니다."
    :code="productListCode"
    stack
  >
    <div class="card_product-list">
      <Card layout="product" :media-divider="false" title="라이트 러닝 재킷" subtitle="무료 배송">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="라이트 러닝 재킷 상품 이미지" /></template>
        <CardBody :line-clamp="2">가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.</CardBody>
        <CardFooter justify="between">
          <p class="card_price"><data value="89000">89,000원</data><del class="card_price-original"><data value="109000">109,000원</data></del></p>
          <Button variant="filled" size="sm" label="담기" />
        </CardFooter>
      </Card>
      <Card layout="product" :media-divider="false" title="데일리 백팩" subtitle="오늘 출발">
        <template #media><div class="card_media card_media-placeholder" role="img" aria-label="데일리 백팩 상품 이미지" /></template>
        <CardBody :line-clamp="1">노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.</CardBody>
        <CardFooter justify="between">
          <p class="card_price"><data value="64000">64,000원</data></p>
          <Button variant="outline" size="sm" label="상세보기" />
        </CardFooter>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="line-clamp-heading"
    title="내용 말줄임"
    description="CardBody의 lineClamp로 내용 영역을 1줄·2줄·3줄까지 표시한 뒤 말줄임 처리합니다."
    :code="lineClampCode"
    stack
  >
    <div class="card_deck card_deck-3">
      <Card><CardHeader title="한 줄 말줄임" /><CardBody :line-clamp="1">{{ clampDescription }}</CardBody></Card>
      <Card><CardHeader title="두 줄 말줄임" /><CardBody :line-clamp="2">{{ clampDescription }}</CardBody></Card>
      <Card><CardHeader title="세 줄 말줄임" /><CardBody :line-clamp="3">{{ clampDescription }}</CardBody></Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘 · 통계"
    description="card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."
    :code="iconCode"
  >
    <div class="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span class="card_icon color_primary" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <h3 class="card_title">빠른 성능</h3>
          <p class="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
      <Card variant="shadow" hoverable>
        <CardBody>
          <span class="card_icon color_success" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <h3 class="card_title">접근성</h3>
          <p class="card_subtitle">WCAG 2.2 AA 기준</p>
        </CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>
          <Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trend-color="success" />
        </CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="profile-heading"
    title="프로필"
    description="card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다."
    :code="profileCode"
  >
    <Card variant="shadow" style="max-width: 320px; width: 100%;">
      <CardHeader>
        <div class="card_header-row">
          <Avatar color="primary" initials="홍" aria-hidden />
          <div>
            <h3 class="card_title">홍길동</h3>
            <p class="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
        <template #extra>
          <Button variant="ghost" size="sm" icon-only aria-label="더 보기">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
              </svg>
            </template>
          </Button>
        </template>
      </CardHeader>
      <CardBody>
        <div class="tag_group tag_group-tight">
          <Tag size="sm" color="primary" label="React" />
          <Tag size="sm" color="primary" label="TypeScript" />
          <Tag size="sm" color="default" label="SCSS" />
        </div>
      </CardBody>
      <CardFooter ratio="2:1">
        <span class="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="footer-layout-heading"
    title="푸터 레이아웃"
    description="justify로 좌·중앙·우·양끝 정렬하고, full로 단일 항목을 100% 확장합니다. ratio는 1:1 · 1:2 · 2:1 분할을, flush는 패딩 제거를 적용합니다."
    :code="footerLayoutCode"
    stack
  >
    <div class="card_deck">
      <Card><CardBody>단일 액션</CardBody><CardFooter full justify="center"><Button variant="filled" label="전체 너비 액션" /></CardFooter></Card>
      <Card><CardBody>균등 분할</CardBody><CardFooter ratio="1:1" flush><Button variant="ghost" label="취소" /><Button variant="filled" label="확인" /></CardFooter></Card>
      <Card><CardBody>상황별 비율</CardBody><CardFooter ratio="1:2"><Button variant="ghost" label="이전" /><Button variant="filled" label="다음 단계" /></CardFooter></Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="clickable-heading"
    title="클릭 가능"
    description="as로 링크 또는 네이티브 button을 지정해 카드 전체를 올바른 링크·버튼으로 만듭니다."
    :code="clickableCode"
  >
    <div class="card_deck card_deck-2">
      <Card as="a" href="#" hoverable class="card_clickable" @click.prevent>
        <CardBody>
          <h3 class="card_title">링크 카드</h3>
          <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card as="button" type="button" hoverable variant="shadow" class="card_clickable">
        <CardBody>
          <h3 class="card_title">버튼 카드</h3>
          <p class="card_subtitle">네이티브 button으로 키보드 동작을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="is-disabled로 비활성 상태를 표시합니다."
    :code="disabledCode"
  >
    <Card class="is-disabled" style="max-width: 280px; width: 100%;">
      <CardBody>
        <h3 class="card_title">비활성 카드</h3>
        <p class="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="grid-heading"
    title="카드 그리드"
    description="card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다."
    stack
    :code="gridCode"
  >
    <div class="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Card Props">
    <ApiTable :columns="cardPropColumns" :rows="cardProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-header-props-heading" title="API · CardHeader Props">
    <ApiTable :columns="cardHeaderPropColumns" :rows="cardHeaderProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-body-props-heading" title="API · CardBody Props">
    <ApiTable :columns="cardBodyPropColumns" :rows="cardBodyProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-footer-props-heading" title="API · CardFooter Props">
    <ApiTable :columns="cardFooterPropColumns" :rows="cardFooterProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Card Slots">
    <ApiTable :columns="cardSlotColumns" :rows="cardSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-header-slots-heading" title="API · CardHeader Slots">
    <ApiTable :columns="cardSlotColumns" :rows="cardHeaderSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-body-slots-heading" title="API · CardBody Slots">
    <ApiTable :columns="cardSlotColumns" :rows="cardBodySlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-footer-slots-heading" title="API · CardFooter Slots">
    <ApiTable :columns="cardSlotColumns" :rows="cardFooterSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="cardClassColumns" :rows="cardClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="cardTokenColumns" :rows="cardTokens" code-column="name" />
  </ApiSection>
</template>
