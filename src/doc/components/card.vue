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
  cardBodySlots,
  cardPropColumns,
  cardProps,
  cardSlotColumns,
  cardSlots,
  cardTokenColumns,
  cardTokens,
} from '@/doc/data/card-api';
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
    heading-id="icon-heading"
    title="아이콘 · 통계"
    description="card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."
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
      <CardFooter between>
        <span class="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>
  </DemoSection>

  <DemoSection
    heading-id="clickable-heading"
    title="클릭 가능"
    description="a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다."
  >
    <div class="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent>
        <CardBody>
          <h3 class="card_title">링크 카드</h3>
          <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link">
        <CardBody>
          <h3 class="card_title">인터랙티브 카드</h3>
          <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="is-disabled로 비활성 상태를 표시합니다."
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
