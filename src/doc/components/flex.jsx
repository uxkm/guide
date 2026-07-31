export const docMeta = {
  title: 'Flex | UXKM Guide',
  activeNav: 'flex',
  pageTitle: 'Flex',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Flex from '@/components/Flex.jsx';
import FlexItem from '@/components/FlexItem.jsx';
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

const basicLayoutCode = `import Flex from '@/components/Flex.jsx';
import FlexItem from '@/components/FlexItem.jsx';

export function BasicLayoutExample() {
  return (
    <Flex wrap gap="sm">
      <FlexItem as="header" span={12} className="flex_demo-cell">
        Header
      </FlexItem>
      <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">
        Sidebar
      </FlexItem>
      <FlexItem as="section" span={12} spanMd={9} className="flex_demo-cell">
        Main content
      </FlexItem>
      <FlexItem as="footer" span={12} className="flex_demo-cell">
        Footer
      </FlexItem>
    </Flex>
  );
}`;

const contentLayoutCode = `import Flex from '@/components/Flex.jsx';
import FlexItem from '@/components/FlexItem.jsx';

export function ContentLayoutExample() {
  return (
    <Flex wrap gap="sm" align="stretch">
      <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem
        as="section"
        span={12}
        spanMd={9}
        className="flex_demo-cell"
        aria-label="Main content"
      >
        <h3>Main content</h3>
        <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex cols={1} colsLg={2} gap="sm">
          <article className="component_stub">
            <h4>Content section</h4>
            <p>주요 정보나 기능을 배치합니다.</p>
          </article>
          <article className="component_stub">
            <h4>Content section</h4>
            <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
          </article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
    </Flex>
  );
}`;

const parentCode = `import Flex from '@/components/Flex.jsx';

export function ParentExample() {
  return (
    <>
      <Flex cols={3}>
        <div className="flex_demo-cell">flex_cols-3</div>
        <div className="flex_demo-cell">flex_cols-3</div>
        <div className="flex_demo-cell">flex_cols-3</div>
      </Flex>
      <Flex ratio="2-1">
        <div className="flex_demo-cell">flex_ratio-2-1</div>
        <div className="flex_demo-cell">flex_ratio-2-1</div>
      </Flex>
      <Flex itemSpan={4}>
        <div className="flex_demo-cell">flex_items-span-4</div>
        <div className="flex_demo-cell">flex_items-span-4</div>
        <div className="flex_demo-cell">flex_items-span-4</div>
        <div className="flex_demo-cell">flex_items-span-4</div>
        <div className="flex_demo-cell">flex_items-span-4</div>
        <div className="flex_demo-cell">flex_items-span-4</div>
      </Flex>
    </>
  );
}`;

const twelveColumnsCode = `import Flex from '@/components/Flex.jsx';

export function TwelveColumnsExample() {
  return (
    <Flex itemSpan={1} gap="sm">
      <div className="flex_demo-cell">1</div>
      <div className="flex_demo-cell">2</div>
      <div className="flex_demo-cell">3</div>
      <div className="flex_demo-cell">4</div>
      <div className="flex_demo-cell">5</div>
      <div className="flex_demo-cell">6</div>
      <div className="flex_demo-cell">7</div>
      <div className="flex_demo-cell">8</div>
      <div className="flex_demo-cell">9</div>
      <div className="flex_demo-cell">10</div>
      <div className="flex_demo-cell">11</div>
      <div className="flex_demo-cell">12</div>
    </Flex>
  );
}`;

const equalCode = `import Flex from '@/components/Flex.jsx';

export function EqualExample() {
  return (
    <>
      <Flex cols={2}>
        <div className="flex_demo-cell">cols 2</div>
        <div className="flex_demo-cell">cols 2</div>
      </Flex>
      <Flex cols={4}>
        <div className="flex_demo-cell">cols 4</div>
        <div className="flex_demo-cell">cols 4</div>
        <div className="flex_demo-cell">cols 4</div>
        <div className="flex_demo-cell">cols 4</div>
      </Flex>
    </>
  );
}`;

const ratioCode = `import Flex from '@/components/Flex.jsx';

export function RatioExample() {
  return (
    <>
      <Flex ratio="1-2">
        <div className="flex_demo-cell">1 : 2</div>
        <div className="flex_demo-cell">1 : 2</div>
      </Flex>
      <Flex ratio="1-2-1">
        <div className="flex_demo-cell">1</div>
        <div className="flex_demo-cell">2</div>
        <div className="flex_demo-cell">1</div>
      </Flex>
    </>
  );
}`;

const itemSpanCode = `import Flex from '@/components/Flex.jsx';

export function ItemSpanExample() {
  return (
    <>
      <Flex itemSpan={6}>
        <div className="flex_demo-cell">span 6</div>
        <div className="flex_demo-cell">span 6</div>
        <div className="flex_demo-cell">span 6</div>
        <div className="flex_demo-cell">span 6</div>
      </Flex>
      <Flex itemSpan={3}>
        <div className="flex_demo-cell">span 3</div>
        <div className="flex_demo-cell">span 3</div>
        <div className="flex_demo-cell">span 3</div>
        <div className="flex_demo-cell">span 3</div>
      </Flex>
    </>
  );
}`;

const childCode = `import Flex from '@/components/Flex.jsx';
import FlexItem from '@/components/FlexItem.jsx';

export function ChildExample() {
  return (
    <Flex wrap>
      <FlexItem span={8} className="flex_demo-cell">span 8</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
    </Flex>
  );
}`;

const gapCode = `import Flex from '@/components/Flex.jsx';

export function GapExample() {
  return (
    <>
      <Flex cols={3} gap="sm">
        <div className="flex_demo-cell">gap sm</div>
        <div className="flex_demo-cell">gap sm</div>
        <div className="flex_demo-cell">gap sm</div>
      </Flex>
      <Flex cols={3} gap="lg">
        <div className="flex_demo-cell">gap lg</div>
        <div className="flex_demo-cell">gap lg</div>
        <div className="flex_demo-cell">gap lg</div>
      </Flex>
    </>
  );
}`;

const responsiveCode = `import Flex from '@/components/Flex.jsx';
import FlexItem from '@/components/FlexItem.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Flex cols={1} colsMd={2} colsLg={3}>
        <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
        <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
        <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
      </Flex>
      <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
      </Flex>
      <Flex wrap>
        <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">
          개별 span 12 → md 8 → lg 9
        </FlexItem>
        <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">
          개별 span 12 → md 4 → lg 3
        </FlexItem>
      </Flex>
    </>
  );
}`;

const autoCode = `import Flex from '@/components/Flex.jsx';

export function AutoExample() {
  return (
    <Flex autoFit>
      <div className="flex_demo-cell">auto-fit</div>
      <div className="flex_demo-cell">auto-fit</div>
      <div className="flex_demo-cell">auto-fit</div>
      <div className="flex_demo-cell">auto-fit</div>
      <div className="flex_demo-cell">auto-fit</div>
      <div className="flex_demo-cell">auto-fit</div>
    </Flex>
  );
}`;

export default function FlexDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Flex</h1>
        <p className="lead">
          CSS Flexbox 기반의 1차원 레이아웃 시스템입니다. Grid와 같은 방식으로 부모에서 균등
          배치·비율·간격·반응형 크기를 제어하고, 필요한 경우에만 FlexItem을 사용합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-layout-heading"
        title="기본 페이지 레이아웃"
        description="Grid 예시와 동일하게 헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다."
        stack
        code={basicLayoutCode}
      >
        <Flex wrap gap="sm">
          <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
          <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
          <FlexItem
            as="section"
            span={12}
            spanMd={9}
            className="flex_demo-cell"
            aria-label="Main content"
          >
            Main content
          </FlexItem>
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
          <FlexItem
            as="section"
            span={12}
            spanMd={9}
            className="flex_demo-cell"
            aria-label="Main content"
          >
            <h3>Main content</h3>
            <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
            <Flex cols={1} colsLg={2} gap="sm">
              <article className="component_stub">
                <h4>Content section</h4>
                <p>주요 정보나 기능을 배치합니다.</p>
              </article>
              <article className="component_stub">
                <h4>Content section</h4>
                <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
              </article>
            </Flex>
          </FlexItem>
          <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="parent-heading"
        title="부모 클래스로 제어"
        description="방향·비율·자식 일괄 span은 부모 Flex에 지정합니다."
        stack
        code={parentCode}
      >
        <Flex cols={3}>
          <div className="flex_demo-cell">flex_cols-3</div>
          <div className="flex_demo-cell">flex_cols-3</div>
          <div className="flex_demo-cell">flex_cols-3</div>
        </Flex>
        <Flex ratio="2-1">
          <div className="flex_demo-cell">flex_ratio-2-1</div>
          <div className="flex_demo-cell">flex_ratio-2-1</div>
        </Flex>
        <Flex itemSpan={4}>
          <div className="flex_demo-cell">flex_items-span-4</div>
          <div className="flex_demo-cell">flex_items-span-4</div>
          <div className="flex_demo-cell">flex_items-span-4</div>
          <div className="flex_demo-cell">flex_items-span-4</div>
          <div className="flex_demo-cell">flex_items-span-4</div>
          <div className="flex_demo-cell">flex_items-span-4</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="twelve-columns-heading"
        title="12열 전체 활용"
        description="12열 시스템의 각 열을 하나씩 사용합니다. itemSpan={1}을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다."
        stack
        code={twelveColumnsCode}
      >
        <Flex itemSpan={1} gap="sm">
          <div className="flex_demo-cell">1</div>
          <div className="flex_demo-cell">2</div>
          <div className="flex_demo-cell">3</div>
          <div className="flex_demo-cell">4</div>
          <div className="flex_demo-cell">5</div>
          <div className="flex_demo-cell">6</div>
          <div className="flex_demo-cell">7</div>
          <div className="flex_demo-cell">8</div>
          <div className="flex_demo-cell">9</div>
          <div className="flex_demo-cell">10</div>
          <div className="flex_demo-cell">11</div>
          <div className="flex_demo-cell">12</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="equal-heading"
        title="균등 항목"
        description="flex_cols-*로 동일 너비 항목 수를 지정합니다. gap을 제외한 공간을 정확히 균등 분할합니다."
        stack
        code={equalCode}
      >
        <Flex cols={2}>
          <div className="flex_demo-cell">cols 2</div>
          <div className="flex_demo-cell">cols 2</div>
        </Flex>
        <Flex cols={4}>
          <div className="flex_demo-cell">cols 4</div>
          <div className="flex_demo-cell">cols 4</div>
          <div className="flex_demo-cell">cols 4</div>
          <div className="flex_demo-cell">cols 4</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="ratio-heading"
        title="비율 항목"
        description="flex_ratio-*로 2~3개 항목의 grow 비율을 부모에서 지정합니다."
        stack
        code={ratioCode}
      >
        <Flex ratio="1-2">
          <div className="flex_demo-cell">1 : 2</div>
          <div className="flex_demo-cell">1 : 2</div>
        </Flex>
        <Flex ratio="1-2-1">
          <div className="flex_demo-cell">1</div>
          <div className="flex_demo-cell">2</div>
          <div className="flex_demo-cell">1</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="item-span-heading"
        title="자식 일괄 span (12단위)"
        description="모든 자식이 같은 너비일 때 itemSpan을 부모에 지정합니다. itemSpan={6}이면 한 줄에 2개씩 배치됩니다."
        stack
        code={itemSpanCode}
      >
        <Flex itemSpan={6}>
          <div className="flex_demo-cell">span 6</div>
          <div className="flex_demo-cell">span 6</div>
          <div className="flex_demo-cell">span 6</div>
          <div className="flex_demo-cell">span 6</div>
        </Flex>
        <Flex itemSpan={3}>
          <div className="flex_demo-cell">span 3</div>
          <div className="flex_demo-cell">span 3</div>
          <div className="flex_demo-cell">span 3</div>
          <div className="flex_demo-cell">span 3</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="child-heading"
        title="자식별 span (혼합 레이아웃)"
        description="항목마다 너비가 다를 때 FlexItem의 span을 사용합니다. 8+4, 4+4+4처럼 개별 제어할 수 있습니다."
        stack
        code={childCode}
      >
        <Flex wrap>
          <FlexItem span={8} className="flex_demo-cell">span 8</FlexItem>
          <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
          <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
          <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
          <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="gap-heading"
        title="간격"
        description="flex_gap-sm · flex_gap-lg · flex_gap-none은 부모에 지정합니다."
        stack
        code={gapCode}
      >
        <Flex cols={3} gap="sm">
          <div className="flex_demo-cell">gap sm</div>
          <div className="flex_demo-cell">gap sm</div>
          <div className="flex_demo-cell">gap sm</div>
        </Flex>
        <Flex cols={3} gap="lg">
          <div className="flex_demo-cell">gap lg</div>
          <div className="flex_demo-cell">gap lg</div>
          <div className="flex_demo-cell">gap lg</div>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="responsive-heading"
        title="반응형"
        description="Flex의 colsMd · colsLg와 itemSpanMd · itemSpanLg, FlexItem의 spanMd · spanLg로 반응형 배치를 제어합니다."
        stack
        code={responsiveCode}
      >
        <Flex cols={1} colsMd={2} colsLg={3}>
          <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
          <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
          <div className="flex_demo-cell">1 → md 2 → lg 3개</div>
        </Flex>
        <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
          <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
          <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
          <div className="flex_demo-cell">span 12 → md 6 → lg 4</div>
        </Flex>
        <Flex wrap>
          <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">
            개별 span 12 → md 8 → lg 9
          </FlexItem>
          <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">
            개별 span 12 → md 4 → lg 3
          </FlexItem>
        </Flex>
      </DemoSection>

      <DemoSection
        headingId="auto-heading"
        title="자동 배치"
        description="flex_auto-fit은 --flex-auto-min을 기준으로 항목을 자동 줄바꿈하고 남는 공간을 채웁니다."
        stack
        code={autoCode}
      >
        <Flex autoFit>
          <div className="flex_demo-cell">auto-fit</div>
          <div className="flex_demo-cell">auto-fit</div>
          <div className="flex_demo-cell">auto-fit</div>
          <div className="flex_demo-cell">auto-fit</div>
          <div className="flex_demo-cell">auto-fit</div>
          <div className="flex_demo-cell">auto-fit</div>
        </Flex>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Flex Props">
        <ApiTable columns={flexPropColumns} rows={flexProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-props-heading" title="API · FlexItem Props">
        <ApiTable columns={flexItemPropColumns} rows={flexItemProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Flex Children">
        <ApiTable columns={flexSlotColumns} rows={flexSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-children-heading" title="API · FlexItem Children">
        <ApiTable columns={flexItemSlotColumns} rows={flexItemSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업에서도 동일하게 조합합니다."
      >
        <ApiTable columns={flexClassColumns} rows={flexClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={flexTokenColumns} rows={flexTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
