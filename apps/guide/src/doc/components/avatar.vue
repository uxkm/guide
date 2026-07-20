<script>
export const docMeta = {
  title: 'Avatar | HTML Components',
  activeNav: 'avatar',
  pageTitle: 'Avatar',
};
</script>

<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import { avatarSample } from '@images';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import {
  avatarClassColumns,
  avatarClasses,
  avatarGroupPropColumns,
  avatarGroupProps,
  avatarGroupSlotColumns,
  avatarGroupSlots,
  avatarPropColumns,
  avatarProps,
  avatarSlotColumns,
  avatarSlots,
  avatarTokenColumns,
  avatarTokens,
} from '@/doc/data/avatar-api';
</script>

<template>
  <div class="page_intro">
    <h1>Avatar</h1>
    <p class="lead">사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."
  >
    <Avatar :src="avatarSample" alt="홍길동" />
    <Avatar color="primary" initials="홍" aria-hidden />
    <Avatar color="default" aria-hidden>
      <template #icon>
        <Icon name="user" class="avatar_icon" />
      </template>
    </Avatar>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."
  >
    <Avatar size="sm" color="primary" initials="A" aria-hidden />
    <Avatar color="primary" initials="B" aria-hidden />
    <Avatar size="lg" color="primary" initials="C" aria-hidden />
    <Avatar size="xl" color="primary" initials="D" aria-hidden />
  </DemoSection>

  <DemoSection
    heading-id="shape-heading"
    title="형태"
    description="기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."
  >
    <Avatar color="primary" initials="원" aria-hidden />
    <Avatar square color="primary" initials="각" aria-hidden />
    <Avatar square :src="avatarSample" alt="홍길동" />
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."
  >
    <Avatar color="default" initials="D" aria-hidden />
    <Avatar color="primary" initials="P" aria-hidden />
    <Avatar color="success" initials="S" aria-hidden />
    <Avatar color="warning" initials="W" aria-hidden />
    <Avatar color="danger" initials="E" aria-hidden />
  </DemoSection>

  <DemoSection
    heading-id="badge-heading"
    title="상태 배지"
    description="avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."
  >
    <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
    <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
    <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="그룹"
    description="avatar_group으로 여러 아바타를 겹쳐 표시합니다."
    stack
  >
    <AvatarGroup aria-label="팀 멤버 4명">
      <Avatar color="primary" initials="김" aria-hidden />
      <Avatar color="success" initials="이" aria-hidden />
      <Avatar color="warning" initials="박" aria-hidden />
      <Avatar color="danger" initials="최" aria-hidden />
    </AvatarGroup>

    <AvatarGroup aria-label="팀 멤버 3명">
      <Avatar :src="avatarSample" alt="홍길동" />
      <Avatar color="primary" initials="홍" aria-hidden />
      <Avatar color="default" aria-hidden>
        <template #icon>
          <Icon name="plus" class="avatar_icon" />
        </template>
      </Avatar>
    </AvatarGroup>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Avatar Props">
    <ApiTable :columns="avatarPropColumns" :rows="avatarProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-group-props-heading" title="API · AvatarGroup Props">
    <ApiTable :columns="avatarGroupPropColumns" :rows="avatarGroupProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Avatar Slots">
    <ApiTable :columns="avatarSlotColumns" :rows="avatarSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-group-slots-heading" title="API · AvatarGroup Slots">
    <ApiTable :columns="avatarGroupSlotColumns" :rows="avatarGroupSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="avatarClassColumns" :rows="avatarClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="avatarTokenColumns" :rows="avatarTokens" code-column="name" />
  </ApiSection>
</template>
