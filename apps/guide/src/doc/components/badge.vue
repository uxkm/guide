<script>
export const docMeta = {
  title: 'Badge | HTML Components',
  activeNav: 'badge',
  pageTitle: 'Badge',
};
</script>

<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import BadgeWrap from '@uxkm/ui/components/BadgeWrap.vue';
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import {
  badgeClassColumns,
  badgeClasses,
  badgePropColumns,
  badgeProps,
  badgeSlotColumns,
  badgeSlots,
  badgeTokenColumns,
  badgeTokens,
  badgeWrapPropColumns,
  badgeWrapProps,
  badgeWrapSlotColumns,
  badgeWrapSlots,
} from '@/doc/data/badge-api';
</script>

<template>
  <div class="page_intro">
    <h1>Badge</h1>
    <p class="lead">상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
  >
    <Badge color="default" label="Default" />
    <Badge color="primary" label="Primary" />
    <Badge color="success" label="Success" />
    <Badge color="warning" label="Warning" />
    <Badge color="danger" label="Danger" />
    <Badge color="info" label="Info" />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="badge_sm · badge_lg로 스케일을 조절합니다."
  >
    <Badge size="sm" color="primary" label="Small" />
    <Badge color="primary" label="Medium" />
    <Badge size="lg" color="primary" label="Large" />
  </DemoSection>

  <DemoSection
    heading-id="dot-heading"
    title="Dot 배지"
    description="badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."
  >
    <Badge dot color="primary" label="Online" />
    <Badge dot color="success" label="Active" />
    <Badge dot color="warning" label="Away" />
    <Badge dot color="danger" label="Offline" />
  </DemoSection>

  <DemoSection
    heading-id="count-heading"
    title="카운트"
    description="badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."
  >
    <Badge count color="danger" label="3" />
    <Badge count color="primary" label="12" />
    <Badge count color="success" label="99+" />
    <Badge count size="sm" color="danger" label="5" />
    <Badge count size="lg" color="primary" label="New" />
  </DemoSection>

  <DemoSection
    heading-id="wrap-heading"
    title="겹침 표시"
    description="badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."
  >
    <BadgeWrap>
      <Button variant="filled" color="primary" label="알림" />
      <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
    </BadgeWrap>

    <BadgeWrap>
      <Button variant="ghost" icon-only aria-label="메시지">
        <template #icon-before>
          <Icon>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </Icon>
        </template>
      </Button>
      <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
    </BadgeWrap>

    <BadgeWrap>
      <Avatar color="primary" initials="홍" aria-hidden />
      <Badge dot-only color="success" aria-label="온라인" />
    </BadgeWrap>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Badge Props">
    <ApiTable :columns="badgePropColumns" :rows="badgeProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wrap-props-heading" title="API · BadgeWrap Props">
    <ApiTable :columns="badgeWrapPropColumns" :rows="badgeWrapProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Badge Slots">
    <ApiTable :columns="badgeSlotColumns" :rows="badgeSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wrap-slots-heading" title="API · BadgeWrap Slots">
    <ApiTable :columns="badgeWrapSlotColumns" :rows="badgeWrapSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="badgeClassColumns" :rows="badgeClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="badgeTokenColumns" :rows="badgeTokens" code-column="name" />
  </ApiSection>
</template>
