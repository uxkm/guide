export const docMeta = {
  title: 'Flex | UXKM Guide',
  activeNav: 'flex',
  pageTitle: 'Flex',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';
import {
  flexClassColumns,
  flexClasses,
  flexItemPropColumns,
  flexItemProps,
  flexItemSlotColumns,
  flexItemSlots,
  flexPropColumns,
  flexProps,
  flexSlotColumns,
  flexSlots,
  flexTokenColumns,
  flexTokens,
} from '@/doc/data/flex-api';

const layoutCode = `import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';

export function PageLayout() {
  return (
    <Flex wrap gap="sm">
      <FlexItem as="header" span={12}>Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3}>Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9}>Main content</FlexItem>
      <FlexItem as="footer" span={12}>Footer</FlexItem>
    </Flex>
  );
}`;

const contentLayoutCode = `import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';

export function ContentLayoutExample() {
  return (
    <Flex wrap gap="sm" align="stretch">
      <FlexItem as="header" span={12}>Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3}>Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9}>
        <h3>Main content</h3>
        <Flex cols={1} colsLg={2} gap="sm">
          <article>Content section</article>
          <article>Content section</article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" span={12}>Footer</FlexItem>
    </Flex>
  );
}`;

const parentCode = `<Flex cols={3}>...</Flex>
<Flex ratio="2-1">...</Flex>
<Flex itemSpan={4}>...</Flex>`;

const twelveColumnsCode = `<Flex itemSpan={1} gap="sm">
  {/* 12 items */}
</Flex>`;

const equalCode = `<Flex cols={2}>...</Flex>
<Flex cols={4}>...</Flex>`;

const ratioCode = `<Flex ratio="1-2">...</Flex>
<Flex ratio="1-2-1">...</Flex>`;

const itemSpanCode = `<Flex itemSpan={6}>...</Flex>
<Flex itemSpan={3}>...</Flex>`;

const childCode = `<Flex wrap>
  <FlexItem span={8}>span 8</FlexItem>
  <FlexItem span={4}>span 4</FlexItem>
</Flex>`;

const gapCode = `<Flex cols={3} gap="sm">...</Flex>
<Flex cols={3} gap="lg">...</Flex>`;

const responsiveCode = `import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Flex cols={1} colsMd={2} colsLg={3}>...</Flex>
      <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>...</Flex>
      <Flex wrap>
        <FlexItem span={12} spanMd={8} spanLg={9}>Main</FlexItem>
        <FlexItem span={12} spanMd={4} spanLg={3}>Aside</FlexItem>
      </Flex>
    </>
  );
}`;

const autoCode = `<Flex autoFit>
  {/* items automatically wrap at --flex-auto-min */}
</Flex>`;

export default function FlexDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Flex</h1>
        <p className="lead">
          CSS Flexbox 기반의 1차원 레이아웃 시스템입니다. 부모에서 방향·간격·정렬·반응형 크기를
          제어하고, 개별 항목 제어가 필요할 때 FlexItem을 사용합니다.
        </p>
      </div>

      <DemoSection
        headingId="layout-heading"
        title="기본 페이지 레이아웃"
        description="작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눅니다."
        stack
        code={layoutCode}
      >
        <Flex wrap gap="sm">
          <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
          <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
          <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">Main content</FlexItem>
          <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="content-layout-heading"
        title="콘텐츠가 있는 페이지 레이아웃"
        description="기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."
        stack
        code={contentLayoutCode}
      >
        <Flex wrap gap="sm" align="stretch">
          <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
          <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
          <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">
            <h3>Main content</h3>
            <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
            <Flex cols={1} colsLg={2} gap="sm">
              <article className="component_stub">Content section</article>
              <article className="component_stub">Content section</article>
            </Flex>
          </FlexItem>
          <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="parent-heading"
        title="부모 클래스로 제어"
        description="균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다."
        stack
        code={parentCode}
      >
        <Flex cols={3}>
          {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>flex_cols-3</div>)}
        </Flex>
        <Flex ratio="2-1">
          <div className="flex_demo-cell">flex_ratio-2-1</div>
          <div className="flex_demo-cell">flex_ratio-2-1</div>
        </Flex>
        <Flex itemSpan={4}>
          {Array.from({ length: 6 }, (_, index) => <div className="flex_demo-cell" key={index}>flex_items-span-4</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="twelve-columns-heading"
        title="12열 전체 활용"
        description="itemSpan={1}을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."
        stack
        code={twelveColumnsCode}
      >
        <Flex itemSpan={1} gap="sm">
          {Array.from({ length: 12 }, (_, index) => <div className="flex_demo-cell" key={index}>{index + 1}</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="equal-heading"
        title="균등 항목"
        description="cols로 동일 너비 항목 수를 지정하여 gap을 제외한 공간을 균등 분할합니다."
        stack
        code={equalCode}
      >
        <Flex cols={2}>
          <div className="flex_demo-cell">cols 2</div><div className="flex_demo-cell">cols 2</div>
        </Flex>
        <Flex cols={4}>
          {Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>cols 4</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="ratio-heading"
        title="비율 항목"
        description="ratio로 2~3개 항목의 grow 비율을 부모에서 지정합니다."
        stack
        code={ratioCode}
      >
        <Flex ratio="1-2">
          <div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div>
        </Flex>
        <Flex ratio="1-2-1">
          <div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="item-span-heading"
        title="자식 일괄 span (12단위)"
        description="모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다."
        stack
        code={itemSpanCode}
      >
        <Flex itemSpan={6}>
          {Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>span 6</div>)}
        </Flex>
        <Flex itemSpan={3}>
          {Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>span 3</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="child-heading"
        title="자식별 span (혼합 레이아웃)"
        description="항목마다 너비가 다를 때 FlexItem의 span을 사용합니다."
        stack
        code={childCode}
      >
        <Flex wrap>
          <FlexItem span={8} className="flex_demo-cell">span 8</FlexItem>
          <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
          {Array.from({ length: 3 }, (_, index) => <FlexItem span={4} className="flex_demo-cell" key={index}>span 4</FlexItem>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="gap-heading"
        title="간격"
        description="gap으로 sm·lg·none 간격 변형을 부모에 지정합니다."
        stack
        code={gapCode}
      >
        <Flex cols={3} gap="sm">
          {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>gap sm</div>)}
        </Flex>
        <Flex cols={3} gap="lg">
          {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>gap lg</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="responsive-heading"
        title="반응형"
        description="Flex와 FlexItem의 md·lg prop으로 균등 항목, 자식 일괄 span, 개별 span을 제어합니다."
        stack
        code={responsiveCode}
      >
        <Flex cols={1} colsMd={2} colsLg={3} gap="sm">
          <article className="flex_demo-cell">Card 1</article>
          <article className="flex_demo-cell">Card 2</article>
          <article className="flex_demo-cell">Card 3</article>
        </Flex>
        <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
          {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>span 12 → md 6 → lg 4</div>)}
        </Flex>
        <Flex wrap>
          <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem>
          <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="auto-heading"
        title="자동 배치"
        description="autoFit은 --flex-auto-min을 기준으로 항목을 자동 줄바꿈하고 남는 공간을 채웁니다."
        stack
        code={autoCode}
      >
        <Flex autoFit>
          {Array.from({ length: 6 }, (_, index) => <div className="flex_demo-cell" key={index}>auto-fit</div>)}
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="alignment-heading"
        title="정렬과 비율"
        description="justify로 주축을 정렬하고 ratio나 equal로 항목 비율을 제어합니다."
        stack
        code={`<Flex justify="between" gap="sm">...</Flex>\n<Flex ratio="2-1" gap="sm">...</Flex>`}
      >
        <Flex justify="between" gap="sm">
          <div className="flex_demo-cell">Start</div>
          <div className="flex_demo-cell">End</div>
        </Flex>
        <Flex ratio="2-1" gap="sm">
          <div className="flex_demo-cell">2</div>
          <div className="flex_demo-cell">1</div>
        </Flex>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Flex Props">
        <ApiTable columns={flexPropColumns} rows={flexProps} codeColumn="name" />
      </ApiSection>
      <ApiSection headingId="api-item-props-heading" title="API · FlexItem Props">
        <ApiTable columns={flexItemPropColumns} rows={flexItemProps} codeColumn="name" />
      </ApiSection>
      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={flexSlotColumns} rows={flexSlots} codeColumn="name" />
        <ApiTable columns={flexItemSlotColumns} rows={flexItemSlots} codeColumn="name" />
      </ApiSection>
      <ApiSection headingId="api-classes-heading" title="클래스 · 속성">
        <ApiTable columns={flexClassColumns} rows={flexClasses} codeColumn="name" />
      </ApiSection>
      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={flexTokenColumns} rows={flexTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
