import React from 'react';
import Container from './Container.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import { renderContainerPlayground } from '../storybook/container-story-renders.jsx';
import {
  containerClassColumns,
  containerClasses,
  containerPropColumns,
  containerProps,
  containerTokenColumns,
  containerTokens,
} from '@doc-data/container-api';

const containerChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const containerChildren = [
  { name: 'children', description: '컨테이너 내부 콘텐츠 (Vue default 슬롯 대응)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: containerPropColumns, rows: containerProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: containerChildColumns, rows: containerChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: containerClassColumns, rows: containerClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: containerTokenColumns, rows: containerTokens, codeColumn: 'name' }],
  },
];

const sizeArgType = {
  control: { type: 'select' },
  options: ['', 'sm', 'md', 'lg', 'xl'],
  labels: {
    '': '기본',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  },
  description: '고정 최대 너비 변형. 기본값은 container 기본 max-width(72rem)입니다.',
  type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'xl'" },
};

const fluidWithSizeArgType = {
  control: 'boolean',
  if: { arg: 'size', truthy: true },
  description:
    '선택한 size의 max-width 제한을 해제합니다. size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다.',
  type: { name: 'boolean', summary: 'boolean' },
};

const playgroundArgs = {
  fluid: false,
  size: 'lg',
};

export default {
  title: 'Components/레이아웃/Container',
  id: 'components-container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    fluid: fluidWithSizeArgType,
    size: sizeArgType,
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: renderContainerPlayground('container'),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다.',
      },
      source: {
        code: `import Container from '@uxkm/ui-react/components/Container.jsx';

export function BasicExample() {
  return (
    <Container>
      <div className="container_demo-fill">container — 기본 최대 너비</div>
    </Container>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Container>
      <div className="container_demo-fill">container — 기본 최대 너비</div>
    </Container>,
  ),
};

export const Fluid = {
  name: 'Fluid',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다.',
      },
      source: {
        code: `import Container from '@uxkm/ui-react/components/Container.jsx';

export function FluidExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Container fluid>
      <div className="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다.',
      },
      source: {
        code: `import Container from '@uxkm/ui-react/components/Container.jsx';

export function SizeExample() {
  return (
    <>
      <Container size="sm">
        <div className="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div className="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div className="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div className="container_demo-fill">container_xl (80rem)</div>
      </Container>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Container size="sm">
        <div className="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div className="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div className="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div className="container_demo-fill">container_xl (80rem)</div>
      </Container>
    </>,
  ),
};

export const Nested = {
  name: '중첩 사용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다.',
      },
      source: {
        code: `import Container from '@uxkm/ui-react/components/Container.jsx';

export function NestedExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill" style={{ marginBottom: 'var(--space-md)' }}>
        바깥 — fluid
      </div>
      <Container size="md">
        <div className="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Container fluid>
      <div className="container_demo-fill" style={{ marginBottom: 'var(--space-md)' }}>
        바깥 — fluid
      </div>
      <Container size="md">
        <div className="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>,
  ),
};
