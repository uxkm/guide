<script>
export const docMeta = {
  title: 'Space | HTML Components',
  activeNav: 'space',
  pageTitle: 'Space',
};
</script>

<script setup>
import Button from '@/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Divider from '@/components/Divider.vue';
import Space from '@/components/Space.vue';
import {
  spaceClassColumns,
  spaceClasses,
  spacePropColumns,
  spaceProps,
  spaceSlotColumns,
  spaceSlots,
  spaceTokenColumns,
  spaceTokens,
} from '@/doc/data/space-api';
</script>

<template>
  <div class="page_intro">
    <h1>Space</h1>
    <p class="lead">자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다."
  >
    <Space>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>
  </DemoSection>

  <DemoSection
    heading-id="vertical-heading"
    title="세로"
    description="space_vertical로 세로 방향 배치를 지정합니다."
  >
    <Space vertical>
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>
  </DemoSection>

  <DemoSection
    heading-id="gap-heading"
    title="간격"
    description="space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다."
    stack
  >
    <Space gap="xs">
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
    </Space>
    <Space gap="sm">
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
    </Space>
    <Space>
      <div class="space_demo-box">md (기본)</div>
      <div class="space_demo-box">md</div>
      <div class="space_demo-box">md</div>
    </Space>
    <Space gap="lg">
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
    </Space>
    <Space gap="xl">
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
    </Space>
  </DemoSection>

  <DemoSection
    heading-id="wrap-heading"
    title="줄바꿈"
    description="space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다."
    stack
  >
    <Space block wrap>
      <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
    </Space>
  </DemoSection>

  <DemoSection
    heading-id="align-heading"
    title="정렬"
    description="space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다."
    stack
  >
    <Space
      block
      align="center"
      style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">align center</div>
      <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
      <div class="space_demo-box">align center</div>
    </Space>
    <Space
      block
      justify="between"
      style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
    >
      <div class="space_demo-box">justify between</div>
      <div class="space_demo-box">양 끝</div>
    </Space>
  </DemoSection>

  <DemoSection
    heading-id="combo-heading"
    title="조합 예시"
    description="버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다."
  >
    <Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="spacePropColumns" :rows="spaceProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="spaceSlotColumns" :rows="spaceSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="spaceClassColumns" :rows="spaceClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="spaceTokenColumns" :rows="spaceTokens" code-column="name" />
  </ApiSection>
</template>
