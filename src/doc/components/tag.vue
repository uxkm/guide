<script>
export const docMeta = {
  title: 'Tag | HTML Components',
  activeNav: 'tag',
  pageTitle: 'Tag',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Tag from '@/components/Tag.vue';
import TagGroup from '@/components/TagGroup.vue';
import {
  tagClassColumns,
  tagClasses,
  tagGroupPropColumns,
  tagGroupProps,
  tagGroupSlotColumns,
  tagGroupSlots,
  tagPropColumns,
  tagProps,
  tagSlotColumns,
  tagSlots,
  tagTokenColumns,
  tagTokens,
} from '@/doc/data/tag-api';
</script>

<template>
  <div class="page_intro">
    <h1>Tag</h1>
    <p class="lead">카테고리, 필터, 선택 항목을 표시하는 태그 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본 (Filled)"
    description="연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
  >
    <Tag color="default" label="Default" />
    <Tag color="primary" label="Primary" />
    <Tag color="success" label="Success" />
    <Tag color="warning" label="Warning" />
    <Tag color="danger" label="Danger" />
    <Tag color="info" label="Info" />
  </DemoSection>

  <DemoSection
    heading-id="solid-heading"
    title="솔리드"
    description="tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다."
  >
    <Tag variant="solid" color="default" label="Default" />
    <Tag variant="solid" color="primary" label="Primary" />
    <Tag variant="solid" color="success" label="Success" />
    <Tag variant="solid" color="warning" label="Warning" />
    <Tag variant="solid" color="danger" label="Danger" />
    <Tag variant="solid" color="info" label="Info" />
  </DemoSection>

  <DemoSection
    heading-id="outline-heading"
    title="아웃라인"
    description="tag_outline으로 배경 없이 테두리만 표시합니다."
  >
    <Tag variant="outline" color="default" label="Default" />
    <Tag variant="outline" color="primary" label="Primary" />
    <Tag variant="outline" color="success" label="Success" />
    <Tag variant="outline" color="warning" label="Warning" />
    <Tag variant="outline" color="danger" label="Danger" />
    <Tag variant="outline" color="info" label="Info" />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다."
    stack
  >
    <TagGroup tight>
      <Tag size="sm" color="primary" label="Small" />
      <Tag color="primary" label="Medium" />
      <Tag size="lg" color="primary" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="outline" color="success" label="Small" />
      <Tag variant="outline" color="success" label="Medium" />
      <Tag size="lg" variant="outline" color="success" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="solid" color="danger" label="Small" />
      <Tag variant="solid" color="danger" label="Medium" />
      <Tag size="lg" variant="solid" color="danger" label="Large" />
    </TagGroup>
  </DemoSection>

  <DemoSection
    heading-id="round-heading"
    title="둥근"
    description="tag_round로 pill 형태의 모서리를 적용합니다."
  >
    <Tag round color="primary" label="Filled" />
    <Tag round variant="outline" color="primary" label="Outline" />
    <Tag round variant="solid" color="primary" label="Solid" />
    <Tag round variant="borderless" color="default" label="Borderless" />
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘"
    description="tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다."
  >
    <Tag color="primary" label="Design">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      </template>
    </Tag>
    <Tag variant="outline" color="success" label="Verified">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      </template>
    </Tag>
    <Tag variant="solid" color="danger" label="Error">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </template>
    </Tag>
    <Tag size="sm" round color="default" label="User">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </Tag>
  </DemoSection>

  <DemoSection
    heading-id="close-heading"
    title="닫기 가능"
    description="tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다."
    stack
  >
    <TagGroup tight>
      <Tag closable color="primary" label="React" close-label="React 태그 제거" />
      <Tag closable variant="outline" color="default" label="Svelte" close-label="Svelte 태그 제거" />
      <Tag closable variant="solid" color="danger" label="Deprecated" close-label="Deprecated 태그 제거" />
    </TagGroup>
    <TagGroup tight>
      <Tag closable round color="success" label="Frontend" close-label="Frontend 태그 제거">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          </svg>
        </template>
      </Tag>
    </TagGroup>
  </DemoSection>

  <DemoSection
    heading-id="checkable-heading"
    title="선택 가능"
    description="tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다."
    stack
  >
    <TagGroup aria-label="카테고리 필터">
      <Tag checkable selected color="default" label="전체" />
      <Tag checkable color="default" label="UI" />
      <Tag checkable color="default" label="UX" />
      <Tag checkable color="default" label="개발" />
    </TagGroup>

    <TagGroup aria-label="상태 필터">
      <Tag checkable round selected color="primary" label="진행 중" />
      <Tag checkable round selected color="success" label="완료" />
      <Tag checkable round color="warning" label="보류" />
      <Tag checkable round color="danger" label="취소" />
    </TagGroup>

    <TagGroup tight>
      <Tag checkable size="sm" selected color="default" label="S" />
      <Tag checkable size="sm" color="default" label="M" />
      <Tag checkable size="sm" color="default" label="L" />
      <Tag checkable size="sm" color="default" label="XL" />
    </TagGroup>
  </DemoSection>

  <DemoSection
    heading-id="add-heading"
    title="추가"
    description="tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다."
  >
    <Tag add round label="태그 추가">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </template>
    </Tag>
    <Tag add size="sm" label="+ New Tag" />
    <Tag add size="lg" round label="+ 카테고리 추가" />
  </DemoSection>

  <DemoSection
    heading-id="link-heading"
    title="링크"
    description="a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다."
  >
    <Tag href="#" color="primary" label="문서 보기" />
    <Tag href="#" variant="outline" color="primary" label="가이드" />
    <Tag href="#" variant="solid" color="primary" label="바로가기" />
    <Tag href="#" round variant="outline" color="success" label="외부 링크">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </template>
    </Tag>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다."
  >
    <Tag disabled color="primary" label="Filled" />
    <Tag disabled variant="outline" color="success" label="Outline" />
    <Tag disabled variant="solid" color="danger" label="Solid" />
    <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
    <Tag add disabled label="태그 추가 (비활성)" />
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="그룹"
    description="tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다."
    stack
  >
    <TagGroup>
      <Tag color="primary" label="HTML" />
      <Tag color="primary" label="CSS" />
      <Tag color="primary" label="JavaScript" />
      <Tag color="default" label="TypeScript" />
      <Tag color="success" label="SCSS" />
    </TagGroup>

    <div>
      <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
      <TagGroup tight>
        <Tag closable round color="primary" label="React" close-label="React 태그 제거" />
        <Tag closable round color="primary" label="Next.js" close-label="Next.js 태그 제거" />
        <Tag add round size="sm" label="+ 추가" />
      </TagGroup>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Tag Props">
    <ApiTable :columns="tagPropColumns" :rows="tagProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      <code class="typo_code">closable</code> 태그는 <code class="typo_code">@close</code> 이벤트를 발생시킵니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-group-props-heading" title="API · TagGroup Props">
    <ApiTable :columns="tagGroupPropColumns" :rows="tagGroupProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Tag Slots">
    <ApiTable :columns="tagSlotColumns" :rows="tagSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-group-slots-heading" title="API · TagGroup Slots">
    <ApiTable :columns="tagGroupSlotColumns" :rows="tagGroupSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="tagClassColumns" :rows="tagClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="tagTokenColumns" :rows="tagTokens" code-column="name" />
  </ApiSection>
</template>
