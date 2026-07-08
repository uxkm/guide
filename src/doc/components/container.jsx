export const docMeta = {
  title: 'Container | HTML Components',
  activeNav: 'container',
  pageTitle: 'Container',
};

import Container from '@/components/Container.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  containerClassColumns,
  containerClasses,
  containerPropColumns,
  containerProps,
  containerSlotColumns,
  containerSlots,
  containerTokenColumns,
  containerTokens,
} from '@/doc/data/container-api';

export default function ContainerDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Container</h1>
          <p className="lead">콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."
          stack
        >
          <Container>
            <div className="container_demo-fill">container — 기본 최대 너비</div>
          </Container>
        </DemoSection>

        <DemoSection
          headingId="fluid-heading"
          title="Fluid"
          description="container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."
          stack
        >
          <Container fluid>
            <div className="container_demo-fill">container container_fluid — 전체 너비</div>
          </Container>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."
          stack
        >
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
        </DemoSection>

        <DemoSection
          headingId="nested-heading"
          title="중첩 사용"
          description="페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."
          stack
        >
          <Container fluid>
            <div className="container_demo-fill" style={{ marginBottom: 'var(--space-md)' }}>바깥 — fluid</div>
            <Container size="md">
              <div className="container_demo-fill">안쪽 — md</div>
            </Container>
          </Container>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={containerPropColumns} rows={containerProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={containerSlotColumns} rows={containerSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={containerClassColumns} rows={containerClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={containerTokenColumns} rows={containerTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
