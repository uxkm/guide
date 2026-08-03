import React from 'react';
import Flex from './Flex.jsx';
import FlexItem from './FlexItem.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
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
} from '@doc-data/flex-api';

const apiSections = [
  { title: 'API · Flex Props', tables: [{ columns: flexPropColumns, rows: flexProps, codeColumn: 'name' }] },
  { title: 'API · FlexItem Props', tables: [{ columns: flexItemPropColumns, rows: flexItemProps, codeColumn: 'name' }] },
  {
    title: 'API · Children',
    tables: [
      { columns: flexSlotColumns, rows: flexSlots, codeColumn: 'name' },
      { columns: flexItemSlotColumns, rows: flexItemSlots, codeColumn: 'name' },
    ],
  },
  { title: '클래스 · 속성', tables: [{ columns: flexClassColumns, rows: flexClasses, codeColumn: 'name' }] },
  { title: '디자인 토큰', tables: [{ columns: flexTokenColumns, rows: flexTokens, codeColumn: 'name' }] },
];

const cells = (
  <>
    <div className="flex_demo-cell">1</div>
    <div className="flex_demo-cell">2</div>
    <div className="flex_demo-cell">3</div>
  </>
);

export default {
  title: 'Components/레이아웃/Flex',
  id: 'components-flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    ratio: { control: 'select', options: ['1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'] },
    gap: { control: 'select', options: ['', 'sm', 'lg', 'none'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
  },
  parameters: {
    layout: 'padded',
    apiSections,
    docs: { description: { component: 'CSS Flexbox 기반으로 방향·간격·정렬·반응형 항목 크기를 제어하는 레이아웃 컴포넌트입니다.' } },
  },
};

export const Playground = {
  args: { direction: 'row', cols: 3, gap: 'sm', align: 'stretch', wrap: false, equal: false, autoFit: false },
  render: (_args, context) => <Flex {...context.args}>{cells}</Flex>,
};

export const PageLayout = {
  name: '기본 페이지 레이아웃',
  parameters: {
    demoPreview: { stack: true },
    docs: {
      description: { story: '작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눅니다.' },
      source: { language: 'tsx', code: `import Flex from '@uxkm/ui-react/components/Flex.jsx';
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
}` },
    },
  },
  render: withDocsCanvasRender(
    <Flex wrap gap="sm">
      <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">Main content</FlexItem>
      <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
    </Flex>,
  ),
};

export const ContentLayout = {
  name: '콘텐츠가 있는 페이지 레이아웃',
  parameters: {
    demoPreview: { stack: true },
    docs: { description: { story: 'Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.' } },
  },
  render: withDocsCanvasRender(
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
    </Flex>,
  ),
};

export const Parent = {
  name: '부모 클래스로 제어',
  parameters: { demoPreview: { stack: true }, docs: { description: { story: '균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다.' } } },
  render: withDocsCanvasRender(
    <>
      <Flex cols={3}>
        {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>flex_cols-3</div>)}
      </Flex>
      <Flex ratio="2-1">
        <div className="flex_demo-cell">flex_ratio-2-1</div><div className="flex_demo-cell">flex_ratio-2-1</div>
      </Flex>
      <Flex itemSpan={4}>
        {Array.from({ length: 6 }, (_, index) => <div className="flex_demo-cell" key={index}>flex_items-span-4</div>)}
      </Flex>
    </>,
  ),
};

export const TwelveColumns = {
  name: '12열 전체 활용',
  parameters: { demoPreview: { stack: true }, docs: { description: { story: 'itemSpan={1}로 12개 항목이 한 행을 채웁니다.' } } },
  render: withDocsCanvasRender(
    <Flex itemSpan={1} gap="sm">
      {Array.from({ length: 12 }, (_, index) => <div className="flex_demo-cell" key={index}>{index + 1}</div>)}
    </Flex>,
  ),
};

export const Equal = {
  name: '균등 항목',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <>
      <Flex cols={2}><div className="flex_demo-cell">cols 2</div><div className="flex_demo-cell">cols 2</div></Flex>
      <Flex cols={4}>{Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>cols 4</div>)}</Flex>
    </>,
  ),
};

export const Ratio = {
  name: '비율 항목',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <>
      <Flex ratio="1-2"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div></Flex>
      <Flex ratio="1-2-1"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div></Flex>
    </>,
  ),
};

export const ItemSpan = {
  name: '자식 일괄 span (12단위)',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <>
      <Flex itemSpan={6}>{Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>span 6</div>)}</Flex>
      <Flex itemSpan={3}>{Array.from({ length: 4 }, (_, index) => <div className="flex_demo-cell" key={index}>span 3</div>)}</Flex>
    </>,
  ),
};

export const ChildSpan = {
  name: '자식별 span (혼합 레이아웃)',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <Flex wrap>
      <FlexItem span={8} className="flex_demo-cell">span 8</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
      {Array.from({ length: 3 }, (_, index) => <FlexItem span={4} className="flex_demo-cell" key={index}>span 4</FlexItem>)}
    </Flex>,
  ),
};

export const Gap = {
  name: '간격',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <>
      <Flex cols={3} gap="sm">{Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>gap sm</div>)}</Flex>
      <Flex cols={3} gap="lg">{Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>gap lg</div>)}</Flex>
    </>,
  ),
};

export const Responsive = {
  name: '반응형',
  parameters: { demoPreview: { stack: true }, docs: { description: { story: 'Flex와 FlexItem의 md·lg prop으로 반응형 배치를 제어합니다.' } } },
  render: withDocsCanvasRender(
    <>
      <Flex cols={1} colsMd={2} colsLg={3} gap="sm">
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
      </Flex>
      <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        {Array.from({ length: 3 }, (_, index) => <div className="flex_demo-cell" key={index}>span 12 → md 6 → lg 4</div>)}
      </Flex>
      <Flex wrap>
        <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem>
        <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem>
      </Flex>
    </>,
  ),
};

export const Auto = {
  name: '자동 배치',
  parameters: { demoPreview: { stack: true }, docs: { description: { story: 'autoFit은 --flex-auto-min을 기준으로 줄바꿈하고 남는 공간을 채웁니다.' } } },
  render: withDocsCanvasRender(
    <Flex autoFit>
      {Array.from({ length: 6 }, (_, index) => <div className="flex_demo-cell" key={index}>auto-fit</div>)}
    </Flex>,
  ),
};

export const AlignmentAndRatio = {
  name: '정렬과 비율',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(
    <>
      <Flex justify="between" gap="sm">
        <div className="flex_demo-cell">Start</div><div className="flex_demo-cell">End</div>
      </Flex>
      <Flex ratio="2-1" gap="sm">
        <div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div>
      </Flex>
    </>,
  ),
};
