<script>
export const docMeta = {
  title: 'Grid | HTML Components',
  activeNav: 'grid',
  pageTitle: 'Grid',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Grid from '@/components/Grid.vue';
import GridCol from '@/components/GridCol.vue';
import {
  gridClassColumns,
  gridClasses,
  gridColPropColumns,
  gridColProps,
  gridColSlotColumns,
  gridColSlots,
  gridPropColumns,
  gridProps,
  gridSlotColumns,
  gridSlots,
  gridTokenColumns,
  gridTokens,
} from '@/doc/data/grid-api';

const basicLayoutCode = `<template>
  <Grid gap="sm">
    <GridCol as="header" :span="12" class="grid_demo-cell">
      Header
    </GridCol>
    <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
      Sidebar
    </GridCol>
    <GridCol
      as="section"
      :span="12"
      :span-md="9"
      class="grid_demo-cell"
      aria-label="Main content"
    >
      Main content
    </GridCol>
    <GridCol as="footer" :span="12" class="grid_demo-cell">
      Footer
    </GridCol>
  </Grid>
</template>`;

const contentLayoutCode = `<template>
  <Grid gap="sm">
    <GridCol as="header" :span="12" class="grid_demo-cell">
      Header
    </GridCol>
    <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
      Sidebar
    </GridCol>
    <GridCol
      as="section"
      :span="12"
      :span-md="9"
      class="grid_demo-cell"
      aria-label="Main content"
    >
      <h3>Main content</h3>
      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
      <Grid :cols="1" :cols-lg="2" gap="sm">
        <article class="component_stub">
          <h4>Content section</h4>
          <p>주요 정보나 기능을 배치합니다.</p>
        </article>
        <article class="component_stub">
          <h4>Content section</h4>
          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
        </article>
      </Grid>
    </GridCol>
    <GridCol as="footer" :span="12" class="grid_demo-cell">
      Footer
    </GridCol>
  </Grid>
</template>`;

const parentCode = `<template>
  <Grid :cols="3">
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
  </Grid>
  <Grid ratio="2-1">
    <div class="grid_demo-cell">grid_ratio-2-1</div>
    <div class="grid_demo-cell">grid_ratio-2-1</div>
  </Grid>
  <Grid :item-span="4">
    <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
  </Grid>
</template>`;

const twelveColumnsCode = `<template>
  <Grid :item-span="1" gap="sm">
    <div class="grid_demo-cell">1</div>
    <div class="grid_demo-cell">2</div>
    <div class="grid_demo-cell">3</div>
    <div class="grid_demo-cell">4</div>
    <div class="grid_demo-cell">5</div>
    <div class="grid_demo-cell">6</div>
    <div class="grid_demo-cell">7</div>
    <div class="grid_demo-cell">8</div>
    <div class="grid_demo-cell">9</div>
    <div class="grid_demo-cell">10</div>
    <div class="grid_demo-cell">11</div>
    <div class="grid_demo-cell">12</div>
  </Grid>
</template>`;

const equalCode = `<template>
  <Grid :cols="2">
    <div class="grid_demo-cell">cols 2</div>
    <div class="grid_demo-cell">cols 2</div>
  </Grid>
  <Grid :cols="4">
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
  </Grid>
</template>`;

const ratioCode = `<template>
  <Grid ratio="1-2">
    <div class="grid_demo-cell">1 : 2</div>
    <div class="grid_demo-cell">1 : 2</div>
  </Grid>
  <Grid ratio="1-2-1">
    <div class="grid_demo-cell">1</div>
    <div class="grid_demo-cell">2</div>
    <div class="grid_demo-cell">1</div>
  </Grid>
</template>`;

const itemSpanCode = `<template>
  <Grid :item-span="6">
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
  </Grid>
  <Grid :item-span="3">
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
  </Grid>
</template>`;

const childCode = `<template>
  <Grid>
    <GridCol :span="8">
      <div class="grid_demo-cell">span 8</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
  </Grid>
</template>`;

const gapCode = `<template>
  <Grid :cols="3" gap="sm">
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
  </Grid>
  <Grid :cols="3" gap="lg">
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
  </Grid>
</template>`;

const responsiveCode = `<template>
  <Grid :cols="1" :cols-md="2" :cols-lg="3">
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
  </Grid>
  <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
  </Grid>
  <Grid>
    <GridCol :span="12" :span-md="8" :span-lg="9">
      <div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
    </GridCol>
    <GridCol :span="12" :span-md="4" :span-lg="3">
      <div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
    </GridCol>
  </Grid>
</template>`;

const autoCode = `<template>
  <Grid auto-fit>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
  </Grid>
</template>`;
</script>

<template>
  <div class="page_intro">
    <h1>Grid</h1>
    <p class="lead">
      12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 <strong>부모 .grid</strong>에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다.
    </p>
  </div>

  <DemoSection
    heading-id="basic-layout-heading"
    title="기본 페이지 레이아웃"
    description="헤더와 푸터는 전체 12열을 사용하고, 본문 영역은 md 이상에서 사이드바 3열과 콘텐츠 9열로 나눕니다. 작은 화면에서는 모든 영역이 한 열로 쌓입니다."
    stack
    :code="basicLayoutCode"
  >
    <Grid gap="sm">
      <GridCol as="header" :span="12" class="grid_demo-cell">
        Header
      </GridCol>
      <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
        Sidebar
      </GridCol>
      <GridCol
        as="section"
        :span="12"
        :span-md="9"
        class="grid_demo-cell"
        aria-label="Main content"
      >
        Main content
      </GridCol>
      <GridCol as="footer" :span="12" class="grid_demo-cell">
        Footer
      </GridCol>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="content-layout-heading"
    title="콘텐츠가 있는 페이지 레이아웃"
    description="기본 페이지 레이아웃을 바탕으로 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."
    stack
    :code="contentLayoutCode"
  >
    <Grid gap="sm">
      <GridCol as="header" :span="12" class="grid_demo-cell">
        Header
      </GridCol>
      <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
        Sidebar
      </GridCol>
      <GridCol
        as="section"
        :span="12"
        :span-md="9"
        class="grid_demo-cell"
        aria-label="Main content"
      >
        <h3>Main content</h3>
        <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Grid :cols="1" :cols-lg="2" gap="sm">
          <article class="component_stub">
            <h4>Content section</h4>
            <p>주요 정보나 기능을 배치합니다.</p>
          </article>
          <article class="component_stub">
            <h4>Content section</h4>
            <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
          </article>
        </Grid>
      </GridCol>
      <GridCol as="footer" :span="12" class="grid_demo-cell">
        Footer
      </GridCol>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="parent-heading"
    title="부모 클래스로 제어"
    description="열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."
    stack
    :code="parentCode"
  >
    <Grid :cols="3">
      <div class="grid_demo-cell">grid_cols-3</div>
      <div class="grid_demo-cell">grid_cols-3</div>
      <div class="grid_demo-cell">grid_cols-3</div>
    </Grid>
    <Grid ratio="2-1">
      <div class="grid_demo-cell">grid_ratio-2-1</div>
      <div class="grid_demo-cell">grid_ratio-2-1</div>
    </Grid>
    <Grid :item-span="4">
      <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="twelve-columns-heading"
    title="12열 전체 활용"
    description="12열 시스템의 각 열을 하나씩 사용합니다. item-span=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."
    stack
    :code="twelveColumnsCode"
  >
    <Grid :item-span="1" gap="sm">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">3</div>
      <div class="grid_demo-cell">4</div>
      <div class="grid_demo-cell">5</div>
      <div class="grid_demo-cell">6</div>
      <div class="grid_demo-cell">7</div>
      <div class="grid_demo-cell">8</div>
      <div class="grid_demo-cell">9</div>
      <div class="grid_demo-cell">10</div>
      <div class="grid_demo-cell">11</div>
      <div class="grid_demo-cell">12</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="equal-heading"
    title="균등 열"
    description="grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."
    stack
    :code="equalCode"
  >
    <Grid :cols="2">
      <div class="grid_demo-cell">cols 2</div>
      <div class="grid_demo-cell">cols 2</div>
    </Grid>
    <Grid :cols="4">
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="ratio-heading"
    title="비율 열"
    description="grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."
    stack
    :code="ratioCode"
  >
    <Grid ratio="1-2">
      <div class="grid_demo-cell">1 : 2</div>
      <div class="grid_demo-cell">1 : 2</div>
    </Grid>
    <Grid ratio="1-2-1">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">1</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="item-span-heading"
    title="자식 일괄 span (12열)"
    description="모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."
    stack
    :code="itemSpanCode"
  >
    <Grid :item-span="6">
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
    </Grid>
    <Grid :item-span="3">
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="child-heading"
    title="자식별 span (혼합 레이아웃)"
    description="행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."
    stack
    :code="childCode"
  >
    <Grid>
      <GridCol :span="8"><div class="grid_demo-cell">span 8</div></GridCol>
      <GridCol :span="4"><div class="grid_demo-cell">span 4</div></GridCol>
      <GridCol :span="4"><div class="grid_demo-cell">span 4</div></GridCol>
      <GridCol :span="4"><div class="grid_demo-cell">span 4</div></GridCol>
      <GridCol :span="4"><div class="grid_demo-cell">span 4</div></GridCol>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="gap-heading"
    title="간격"
    description="grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."
    stack
    :code="gapCode"
  >
    <Grid :cols="3" gap="sm">
      <div class="grid_demo-cell">gap sm</div>
      <div class="grid_demo-cell">gap sm</div>
      <div class="grid_demo-cell">gap sm</div>
    </Grid>
    <Grid :cols="3" gap="lg">
      <div class="grid_demo-cell">gap lg</div>
      <div class="grid_demo-cell">gap lg</div>
      <div class="grid_demo-cell">gap lg</div>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="responsive-heading"
    title="반응형"
    description="Grid의 cols-md · cols-lg와 item-span-md · item-span-lg로 전체 배치를, GridCol의 span-md · span-lg로 자식별 배치를 제어합니다."
    stack
    :code="responsiveCode"
  >
    <Grid :cols="1" :cols-md="2" :cols-lg="3">
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    </Grid>
    <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    </Grid>
    <Grid>
      <GridCol :span="12" :span-md="8" :span-lg="9">
        <div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
      </GridCol>
      <GridCol :span="12" :span-md="4" :span-lg="3">
        <div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
      </GridCol>
    </Grid>
  </DemoSection>

  <DemoSection
    heading-id="auto-heading"
    title="자동 배치"
    description="grid_auto-fit · grid_auto-fill은 부모에 지정합니다."
    stack
    :code="autoCode"
  >
    <Grid auto-fit>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
    </Grid>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Grid Props">
    <ApiTable :columns="gridPropColumns" :rows="gridProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-col-props-heading" title="API · GridCol Props">
    <ApiTable :columns="gridColPropColumns" :rows="gridColProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Grid Slots">
    <ApiTable :columns="gridSlotColumns" :rows="gridSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-col-slots-heading" title="API · GridCol Slots">
    <ApiTable :columns="gridColSlotColumns" :rows="gridColSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="gridClassColumns" :rows="gridClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="gridTokenColumns" :rows="gridTokens" code-column="name" />
  </ApiSection>
</template>
