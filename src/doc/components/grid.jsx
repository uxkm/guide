export const docMeta = {
  title: 'Grid | UXKM Guide',
  activeNav: 'grid',
  pageTitle: 'Grid',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Grid from '@/components/Grid.jsx';
import GridCol from '@/components/GridCol.jsx';
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

const basicLayoutCode = `import Grid from '@/components/Grid.jsx';
import GridCol from '@/components/GridCol.jsx';

export function BasicLayoutExample() {
  return (
    <Grid gap="sm">
      <GridCol as="header" span={12} className="grid_demo-cell">
        Header
      </GridCol>
      <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
        Sidebar
      </GridCol>
      <GridCol
        as="section"
        span={12}
        spanMd={9}
        className="grid_demo-cell"
        aria-label="Main content"
      >
        Main content
      </GridCol>
      <GridCol as="footer" span={12} className="grid_demo-cell">
        Footer
      </GridCol>
    </Grid>
  );
}`;

const contentLayoutCode = `import Grid from '@/components/Grid.jsx';
import GridCol from '@/components/GridCol.jsx';

export function ContentLayoutExample() {
  return (
    <Grid gap="sm">
      <GridCol as="header" span={12} className="grid_demo-cell">
        Header
      </GridCol>
      <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
        Sidebar
      </GridCol>
      <GridCol
        as="section"
        span={12}
        spanMd={9}
        className="grid_demo-cell"
        aria-label="Main content"
      >
        <h3>Main content</h3>
        <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Grid cols={1} colsLg={2} gap="sm">
          <article className="component_stub">
            <h4>Content section</h4>
            <p>주요 정보나 기능을 배치합니다.</p>
          </article>
          <article className="component_stub">
            <h4>Content section</h4>
            <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
          </article>
        </Grid>
      </GridCol>
      <GridCol as="footer" span={12} className="grid_demo-cell">
        Footer
      </GridCol>
    </Grid>
  );
}`;

const parentCode = `import Grid from '@/components/Grid.jsx';

export function ParentExample() {
  return (
    <>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>
  );
}`;

const twelveColumnsCode = `import Grid from '@/components/Grid.jsx';

export function TwelveColumnsExample() {
  return (
    <Grid itemSpan={1} gap="sm">
      <div className="grid_demo-cell">1</div>
      <div className="grid_demo-cell">2</div>
      <div className="grid_demo-cell">3</div>
      <div className="grid_demo-cell">4</div>
      <div className="grid_demo-cell">5</div>
      <div className="grid_demo-cell">6</div>
      <div className="grid_demo-cell">7</div>
      <div className="grid_demo-cell">8</div>
      <div className="grid_demo-cell">9</div>
      <div className="grid_demo-cell">10</div>
      <div className="grid_demo-cell">11</div>
      <div className="grid_demo-cell">12</div>
    </Grid>
  );
}`;

const equalCode = `import Grid from '@/components/Grid.jsx';

export function EqualExample() {
  return (
    <>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>
  );
}`;

const ratioCode = `import Grid from '@/components/Grid.jsx';

export function RatioExample() {
  return (
    <>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>
  );
}`;

const itemSpanCode = `import Grid from '@/components/Grid.jsx';

export function ItemSpanExample() {
  return (
    <>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>
  );
}`;

const childCode = `import Grid from '@/components/Grid.jsx';
import GridCol from '@/components/GridCol.jsx';

export function ChildExample() {
  return (
    <Grid>
      <GridCol span={8}>
        <div className="grid_demo-cell">span 8</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
    </Grid>
  );
}`;

const gapCode = `import Grid from '@/components/Grid.jsx';

export function GapExample() {
  return (
    <>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>
  );
}`;

const responsiveCode = `import Grid from '@/components/Grid.jsx';
import GridCol from '@/components/GridCol.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
      <Grid>
        <GridCol span={12} spanMd={8} spanLg={9}>
          <div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
        </GridCol>
        <GridCol span={12} spanMd={4} spanLg={3}>
          <div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
        </GridCol>
      </Grid>
    </>
  );
}`;

const autoCode = `import Grid from '@/components/Grid.jsx';

export function AutoExample() {
  return (
    <Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>
  );
}`;

export default function GridDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Grid</h1>
        <p className="lead">
          12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 <strong>부모 .grid</strong>에
          클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-layout-heading"
        title="기본 페이지 레이아웃"
        description="헤더와 푸터는 전체 12열을 사용하고, 본문 영역은 md 이상에서 사이드바 3열과 콘텐츠 9열로 나눕니다. 작은 화면에서는 모든 영역이 한 열로 쌓입니다."
        stack
        code={basicLayoutCode}
      >
        <Grid gap="sm">
          <GridCol as="header" span={12} className="grid_demo-cell">
            Header
          </GridCol>
          <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
            Sidebar
          </GridCol>
          <GridCol
            as="section"
            span={12}
            spanMd={9}
            className="grid_demo-cell"
            aria-label="Main content"
          >
            Main content
          </GridCol>
          <GridCol as="footer" span={12} className="grid_demo-cell">
            Footer
          </GridCol>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="content-layout-heading"
        title="콘텐츠가 있는 페이지 레이아웃"
        description="기본 페이지 레이아웃을 바탕으로 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."
        stack
        code={contentLayoutCode}
      >
        <Grid gap="sm">
          <GridCol as="header" span={12} className="grid_demo-cell">
            Header
          </GridCol>
          <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
            Sidebar
          </GridCol>
          <GridCol
            as="section"
            span={12}
            spanMd={9}
            className="grid_demo-cell"
            aria-label="Main content"
          >
            <h3>Main content</h3>
            <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
            <Grid cols={1} colsLg={2} gap="sm">
              <article className="component_stub">
                <h4>Content section</h4>
                <p>주요 정보나 기능을 배치합니다.</p>
              </article>
              <article className="component_stub">
                <h4>Content section</h4>
                <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
              </article>
            </Grid>
          </GridCol>
          <GridCol as="footer" span={12} className="grid_demo-cell">
            Footer
          </GridCol>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="parent-heading"
        title="부모 클래스로 제어"
        description="열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."
        stack
        code={parentCode}
      >
        <Grid cols={3}>
          <div className="grid_demo-cell">grid_cols-3</div>
          <div className="grid_demo-cell">grid_cols-3</div>
          <div className="grid_demo-cell">grid_cols-3</div>
        </Grid>
        <Grid ratio="2-1">
          <div className="grid_demo-cell">grid_ratio-2-1</div>
          <div className="grid_demo-cell">grid_ratio-2-1</div>
        </Grid>
        <Grid itemSpan={4}>
          <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
          <div className="grid_demo-cell">grid_item-span-4</div>
          <div className="grid_demo-cell">grid_item-span-4</div>
          <div className="grid_demo-cell">grid_item-span-4</div>
          <div className="grid_demo-cell">grid_item-span-4</div>
          <div className="grid_demo-cell">grid_item-span-4</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="twelve-columns-heading"
        title="12열 전체 활용"
        description="12열 시스템의 각 열을 하나씩 사용합니다. itemSpan={1}을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."
        stack
        code={twelveColumnsCode}
      >
        <Grid itemSpan={1} gap="sm">
          <div className="grid_demo-cell">1</div>
          <div className="grid_demo-cell">2</div>
          <div className="grid_demo-cell">3</div>
          <div className="grid_demo-cell">4</div>
          <div className="grid_demo-cell">5</div>
          <div className="grid_demo-cell">6</div>
          <div className="grid_demo-cell">7</div>
          <div className="grid_demo-cell">8</div>
          <div className="grid_demo-cell">9</div>
          <div className="grid_demo-cell">10</div>
          <div className="grid_demo-cell">11</div>
          <div className="grid_demo-cell">12</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="equal-heading"
        title="균등 열"
        description="grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."
        stack
        code={equalCode}
      >
        <Grid cols={2}>
          <div className="grid_demo-cell">cols 2</div>
          <div className="grid_demo-cell">cols 2</div>
        </Grid>
        <Grid cols={4}>
          <div className="grid_demo-cell">cols 4</div>
          <div className="grid_demo-cell">cols 4</div>
          <div className="grid_demo-cell">cols 4</div>
          <div className="grid_demo-cell">cols 4</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="ratio-heading"
        title="비율 열"
        description="grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."
        stack
        code={ratioCode}
      >
        <Grid ratio="1-2">
          <div className="grid_demo-cell">1 : 2</div>
          <div className="grid_demo-cell">1 : 2</div>
        </Grid>
        <Grid ratio="1-2-1">
          <div className="grid_demo-cell">1</div>
          <div className="grid_demo-cell">2</div>
          <div className="grid_demo-cell">1</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="item-span-heading"
        title="자식 일괄 span (12열)"
        description="모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."
        stack
        code={itemSpanCode}
      >
        <Grid itemSpan={6}>
          <div className="grid_demo-cell">span 6</div>
          <div className="grid_demo-cell">span 6</div>
          <div className="grid_demo-cell">span 6</div>
          <div className="grid_demo-cell">span 6</div>
        </Grid>
        <Grid itemSpan={3}>
          <div className="grid_demo-cell">span 3</div>
          <div className="grid_demo-cell">span 3</div>
          <div className="grid_demo-cell">span 3</div>
          <div className="grid_demo-cell">span 3</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="child-heading"
        title="자식별 span (혼합 레이아웃)"
        description="행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."
        stack
        code={childCode}
      >
        <Grid>
          <GridCol span={8}>
            <div className="grid_demo-cell">span 8</div>
          </GridCol>
          <GridCol span={4}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>
          <GridCol span={4}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>
          <GridCol span={4}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>
          <GridCol span={4}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="gap-heading"
        title="간격"
        description="grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."
        stack
        code={gapCode}
      >
        <Grid cols={3} gap="sm">
          <div className="grid_demo-cell">gap sm</div>
          <div className="grid_demo-cell">gap sm</div>
          <div className="grid_demo-cell">gap sm</div>
        </Grid>
        <Grid cols={3} gap="lg">
          <div className="grid_demo-cell">gap lg</div>
          <div className="grid_demo-cell">gap lg</div>
          <div className="grid_demo-cell">gap lg</div>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="responsive-heading"
        title="반응형"
        description="Grid의 colsMd · colsLg와 itemSpanMd · itemSpanLg로 전체 배치를, GridCol의 spanMd · spanLg로 자식별 배치를 제어합니다."
        stack
        code={responsiveCode}
      >
        <Grid cols={1} colsMd={2} colsLg={3}>
          <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
          <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
          <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        </Grid>
        <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
          <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
          <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
          <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        </Grid>
        <Grid>
          <GridCol span={12} spanMd={8} spanLg={9}>
            <div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
          </GridCol>
          <GridCol span={12} spanMd={4} spanLg={3}>
            <div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
          </GridCol>
        </Grid>
      </DemoSection>

      <DemoSection
        headingId="auto-heading"
        title="자동 배치"
        description="grid_auto-fit · grid_auto-fill은 부모에 지정합니다."
        stack
        code={autoCode}
      >
        <Grid autoFit>
          <div className="grid_demo-cell">auto-fit</div>
          <div className="grid_demo-cell">auto-fit</div>
          <div className="grid_demo-cell">auto-fit</div>
          <div className="grid_demo-cell">auto-fit</div>
          <div className="grid_demo-cell">auto-fit</div>
          <div className="grid_demo-cell">auto-fit</div>
        </Grid>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Grid Props">
        <ApiTable columns={gridPropColumns} rows={gridProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-col-props-heading" title="API · GridCol Props">
        <ApiTable columns={gridColPropColumns} rows={gridColProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Grid Children">
        <ApiTable columns={gridSlotColumns} rows={gridSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-col-children-heading" title="API · GridCol Children">
        <ApiTable columns={gridColSlotColumns} rows={gridColSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={gridClassColumns} rows={gridClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={gridTokenColumns} rows={gridTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
