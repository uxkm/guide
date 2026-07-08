export const docMeta = {
  title: 'Grid | HTML Components',
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

export default function GridDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Grid</h1>
          <p className="lead">
            12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 <strong>부모 .grid</strong>에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다.
          </p>
        </div>

        <DemoSection
          headingId="parent-heading"
          title="부모 클래스로 제어"
          description="열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."
          stack
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
          headingId="equal-heading"
          title="균등 열"
          description="grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."
          stack
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
        >
          <Grid>
            <GridCol span={8}><div className="grid_demo-cell">span 8</div></GridCol>
            <GridCol span={4}><div className="grid_demo-cell">span 4</div></GridCol>
            <GridCol span={4}><div className="grid_demo-cell">span 4</div></GridCol>
            <GridCol span={4}><div className="grid_demo-cell">span 4</div></GridCol>
            <GridCol span={4}><div className="grid_demo-cell">span 4</div></GridCol>
          </Grid>
        </DemoSection>

        <DemoSection
          headingId="gap-heading"
          title="간격"
          description="grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."
          stack
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
          title="반응형 (부모)"
          description="grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."
          stack
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
        </DemoSection>

        <DemoSection
          headingId="auto-heading"
          title="자동 배치"
          description="grid_auto-fit · grid_auto-fill은 부모에 지정합니다."
          stack
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

        <ApiSection headingId="api-slots-heading" title="API · Grid Slots">
          <ApiTable columns={gridSlotColumns} rows={gridSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-col-slots-heading" title="API · GridCol Slots">
          <ApiTable columns={gridColSlotColumns} rows={gridColSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={gridClassColumns} rows={gridClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={gridTokenColumns} rows={gridTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
