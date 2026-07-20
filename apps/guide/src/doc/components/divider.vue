<script>
export const docMeta = {
  title: 'Divider | HTML Components',
  activeNav: 'divider',
  pageTitle: 'Divider',
};
</script>

<script setup>
import Divider from '@uxkm/ui/components/Divider.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Space from '@uxkm/ui/components/Space.vue';
import {
  dividerClassColumns,
  dividerClasses,
  dividerPropColumns,
  dividerProps,
  dividerSlotColumns,
  dividerSlots,
  dividerTokenColumns,
  dividerTokens,
} from '@/doc/data/divider-api';
</script>

<template>
  <div class="page_intro">
    <h1>Divider</h1>
    <p class="lead">콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."
    stack
  >
    <p>위 콘텐츠</p>
    <Divider />
    <p>아래 콘텐츠</p>
  </DemoSection>

  <DemoSection
    heading-id="dashed-heading"
    title="점선"
    description="divider_dashed로 점선 스타일을 적용합니다."
    stack
  >
    <p>위 콘텐츠</p>
    <Divider dashed />
    <p>아래 콘텐츠</p>
  </DemoSection>

  <DemoSection
    heading-id="text-heading"
    title="텍스트 레이블"
    description="요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."
    stack
  >
    <Divider label="섹션 제목" />
    <Divider plain label="보조 설명" />
  </DemoSection>

  <DemoSection
    heading-id="orient-heading"
    title="레이블 정렬"
    description="divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."
    stack
  >
    <Divider orient="left" label="왼쪽" />
    <Divider label="가운데" />
    <Divider orient="right" label="오른쪽" />
  </DemoSection>

  <DemoSection
    heading-id="vertical-heading"
    title="세로"
    description="divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."
  >
    <Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="dividerPropColumns" :rows="dividerProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="dividerSlotColumns" :rows="dividerSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="dividerClassColumns" :rows="dividerClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="dividerTokenColumns" :rows="dividerTokens" code-column="name" />
  </ApiSection>
</template>
