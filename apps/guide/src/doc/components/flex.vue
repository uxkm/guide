<script>
export const docMeta = {
  title: 'Flex | HTML Components',
  activeNav: 'flex',
  pageTitle: 'Flex',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
import {
  flexClassColumns,
  flexClasses,
  flexItemProps,
  flexItemSlots,
  flexPropColumns,
  flexProps,
  flexSlotColumns,
  flexSlots,
  flexTokenColumns,
  flexTokens,
} from '@/doc/data/flex-api';

const basicLayoutCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap gap="sm">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell">Main content</FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`;

const contentLayoutCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap gap="sm">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
      <h3>Main content</h3>
      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
      <Flex :cols="1" :cols-lg="2" gap="sm">
        <article class="component_stub"><h4>Content section</h4><p>주요 정보나 기능을 배치합니다.</p></article>
        <article class="component_stub"><h4>Content section</h4><p>관련 정보나 보조 콘텐츠를 배치합니다.</p></article>
      </Flex>
    </FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`;

const parentCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
  <Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
  <Flex :item-span="4"><div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div></Flex>
</template>`;

const twelveColumnsCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :item-span="1" gap="sm">
    <div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div>
  </Flex>
</template>`;

const equalCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
  <Flex :cols="4"><div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div></Flex>
</template>`;

const ratioCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex ratio="1-2"><div class="flex_demo-cell">1 : 2</div><div class="flex_demo-cell">1 : 2</div></Flex>
  <Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>
</template>`;

const itemSpanCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :item-span="6"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div></Flex>
  <Flex :item-span="3"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div></Flex>
</template>`;

const childCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
import FlexItem from '@uxkm/ui/components/FlexItem.vue';
<\/script>

<template>
  <Flex wrap>
    <FlexItem :span="8"><div class="flex_demo-cell">span 8</div></FlexItem>
    <FlexItem :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
    <FlexItem v-for="item in 3" :key="item" :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
  </Flex>
</template>`;

const gapCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="3" gap="sm"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div></Flex>
  <Flex :cols="3" gap="lg"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div></Flex>
</template>`;

const responsiveCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex :cols="1" :cols-md="2" :cols-lg="3"><div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
  <Flex :item-span="12" :item-span-md="6" :item-span-lg="4"><div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>
</template>`;

const autoCode = `<script setup>
import Flex from '@uxkm/ui/components/Flex.vue';
<\/script>

<template>
  <Flex auto-fit><div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div></Flex>
</template>`;
</script>

<template>
  <div class="page_intro">
    <h1>Flex</h1>
    <p class="lead">CSS Flexbox 기반의 1차원 레이아웃 시스템입니다. Grid와 같은 방식으로 부모에서 균등 배치·비율·간격·반응형 크기를 제어하고, 필요한 경우에만 FlexItem을 사용합니다.</p>
  </div>

  <DemoSection heading-id="basic-layout-heading" title="기본 페이지 레이아웃" description="Grid 예시와 동일하게 헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다." stack :code="basicLayoutCode">
    <Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell" aria-label="Main content">Main content</FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>
  </DemoSection>

  <DemoSection heading-id="content-layout-heading" title="콘텐츠가 있는 페이지 레이아웃" description="기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다." stack :code="contentLayoutCode">
    <Flex wrap gap="sm">
      <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" :span="12" :span-md="9" class="flex_demo-cell">
        <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex :cols="1" :cols-lg="2" gap="sm">
          <article class="component_stub"><h4>Content section</h4><p>주요 정보나 기능을 배치합니다.</p></article>
          <article class="component_stub"><h4>Content section</h4><p>관련 정보나 보조 콘텐츠를 배치합니다.</p></article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
    </Flex>
  </DemoSection>

  <DemoSection heading-id="parent-heading" title="부모 클래스로 제어" description="방향·비율·자식 일괄 span은 부모 Flex에 지정합니다." stack :code="parentCode">
    <Flex :cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
    <Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
    <Flex :item-span="4"><div v-for="item in 6" :key="item" class="flex_demo-cell">flex_items-span-4</div></Flex>
  </DemoSection>

  <DemoSection heading-id="twelve-columns-heading" title="12열 전체 활용" description="12열 시스템의 각 열을 하나씩 사용합니다. itemSpan=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다." stack :code="twelveColumnsCode">
    <Flex :item-span="1" gap="sm"><div v-for="item in 12" :key="item" class="flex_demo-cell">{{ item }}</div></Flex>
  </DemoSection>

  <DemoSection heading-id="equal-heading" title="균등 항목" description="flex_cols-*로 동일 너비 항목 수를 지정합니다. gap을 제외한 공간을 정확히 균등 분할합니다." stack :code="equalCode">
    <Flex :cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
    <Flex :cols="4"><div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div></Flex>
  </DemoSection>

  <DemoSection heading-id="ratio-heading" title="비율 항목" description="flex_ratio-*로 2~3개 항목의 grow 비율을 부모에서 지정합니다." stack :code="ratioCode">
    <Flex ratio="1-2"><div class="flex_demo-cell">1 : 2</div><div class="flex_demo-cell">1 : 2</div></Flex>
    <Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>
  </DemoSection>

  <DemoSection heading-id="item-span-heading" title="자식 일괄 span (12단위)" description="모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다. itemSpan=6이면 한 줄에 2개씩 배치됩니다." stack :code="itemSpanCode">
    <Flex :item-span="6"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div></Flex>
    <Flex :item-span="3"><div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div></Flex>
  </DemoSection>

  <DemoSection heading-id="child-heading" title="자식별 span (혼합 레이아웃)" description="항목마다 너비가 다를 때 FlexItem의 span을 사용합니다. 8+4, 4+4+4처럼 개별 제어할 수 있습니다." stack :code="childCode">
    <Flex wrap>
      <FlexItem :span="8"><div class="flex_demo-cell">span 8</div></FlexItem>
      <FlexItem :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
      <FlexItem v-for="item in 3" :key="item" :span="4"><div class="flex_demo-cell">span 4</div></FlexItem>
    </Flex>
  </DemoSection>

  <DemoSection heading-id="gap-heading" title="간격" description="flex_gap-sm · flex_gap-lg · flex_gap-none은 부모에 지정합니다." stack :code="gapCode">
    <Flex :cols="3" gap="sm"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div></Flex>
    <Flex :cols="3" gap="lg"><div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div></Flex>
  </DemoSection>

  <DemoSection heading-id="responsive-heading" title="반응형" description="flex_cols-md-* · flex_items-span-md-* · flex_items-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다." stack :code="responsiveCode">
    <Flex :cols="1" :cols-md="2" :cols-lg="3"><div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
    <Flex :item-span="12" :item-span-md="6" :item-span-lg="4"><div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>
  </DemoSection>

  <DemoSection heading-id="auto-heading" title="자동 배치" description="flex_auto-fit은 --flex-auto-min을 최소 너비로 사용해 항목 수를 자동 조절합니다." stack :code="autoCode">
    <Flex auto-fit><div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div></Flex>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Flex Props"><ApiTable :columns="flexPropColumns" :rows="flexProps" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-item-props-heading" title="API · FlexItem Props"><ApiTable :columns="flexPropColumns" :rows="flexItemProps" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-slots-heading" title="API · Flex Slots"><ApiTable :columns="flexSlotColumns" :rows="flexSlots" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-item-slots-heading" title="API · FlexItem Slots"><ApiTable :columns="flexSlotColumns" :rows="flexItemSlots" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-classes-heading" title="클래스 · 속성" description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업에서도 동일하게 조합합니다."><ApiTable :columns="flexClassColumns" :rows="flexClasses" code-column="name" /></ApiSection>
  <ApiSection heading-id="tokens-heading" title="디자인 토큰"><ApiTable :columns="flexTokenColumns" :rows="flexTokens" code-column="name" /></ApiSection>
</template>
