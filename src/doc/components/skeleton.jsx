export const docMeta = {
  title: 'Skeleton | HTML Components',
  activeNav: 'skeleton',
  pageTitle: 'Skeleton',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import Skeleton from '@/components/Skeleton.jsx';
import {
  skeletonClassColumns,
  skeletonClasses,
  skeletonPropColumns,
  skeletonProps,
  skeletonSlotColumns,
  skeletonSlots,
  skeletonTokenColumns,
  skeletonTokens,
  markupCode,
} from '@/doc/data/skeleton-api';

export default function SkeletonDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Skeleton</h1>
        <p className="lead">콘텐츠가 로드되기 전 레이아웃을 미리 보여 주는 Skeleton 컴포넌트입니다. 텍스트·아바타·이미지·버튼 형태와 조합 레이아웃을 지원하며 <code className="typo_code">role="status"</code> · <code className="typo_code">aria-busy</code> · <code className="typo_code">aria-label</code>로 접근성을 보장합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="<code class=&quot;typo_code&quot;>skeleton</code>에 <code class=&quot;typo_code&quot;>skeleton_text</code> · <code class=&quot;typo_code&quot;>skeleton_title</code> 형태 클래스를 조합합니다."
        >
          <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
            <Skeleton paragraph={3} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="shape-heading"
          title="형태"
          description="아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."
        >
          <Skeleton avatar paragraph={0} />
          <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
        </DemoSection>

        <section className="section" aria-labelledby="size-heading">
          <div className="demo_section-header">
              <h2 id="size-heading">크기</h2>
              <p><code className="typo_code">skeleton_sm</code> · <code className="typo_code">skeleton</code>(기본) · <code className="typo_code">skeleton_lg</code> 세 가지 스케일을 지원합니다. 그룹 루트에 지정하면 하위 형태에 일괄 적용됩니다.</p>
            </div>

            <div className="demo_section-preview demo_section-preview-start" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
              <div className="skeleton_group skeleton_sm" role="status" aria-live="polite" aria-busy="true" aria-label="Small 로딩">
                <span className="skeleton skeleton_title" aria-hidden={true} />
                <span className="skeleton skeleton_text" aria-hidden={true} />
              </div>

              <div className="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="기본 로딩" style={{ marginTop: 'var(--space-md)' }}>
                <span className="skeleton skeleton_title" aria-hidden={true} />
                <span className="skeleton skeleton_text" aria-hidden={true} />
              </div>

              <div className="skeleton_group skeleton_lg" role="status" aria-live="polite" aria-busy="true" aria-label="Large 로딩" style={{ marginTop: 'var(--space-md)' }}>
                <span className="skeleton skeleton_title" aria-hidden={true} />
                <span className="skeleton skeleton_text" aria-hidden={true} />
              </div>
            </div>
        </section>

        <section className="section" aria-labelledby="row-heading">
          <div className="demo_section-header">
              <h2 id="row-heading">아바타 + 텍스트</h2>
              <p><code className="typo_code">skeleton_row</code> · <code className="typo_code">skeleton_row-body</code>로 목록·피드 항목 레이아웃을 구성합니다.</p>
            </div>

            <div className="demo_section-preview demo_section-preview-start" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
              <div className="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="목록 로딩 중">
                <div className="skeleton_row">
                  <span className="skeleton skeleton_circle" aria-hidden={true} />
                  <div className="skeleton_row-body">
                    <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden={true} />
                    <span className="skeleton skeleton_text skeleton_w-md" aria-hidden={true} />
                  </div>
                </div>
                <div className="skeleton_row">
                  <span className="skeleton skeleton_circle" aria-hidden={true} />
                  <div className="skeleton_row-body">
                    <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden={true} />
                    <span className="skeleton skeleton_text skeleton_w-sm" aria-hidden={true} />
                  </div>
                </div>
                <div className="skeleton_row">
                  <span className="skeleton skeleton_circle" aria-hidden={true} />
                  <div className="skeleton_row-body">
                    <span className="skeleton skeleton_text skeleton_w-md" aria-hidden={true} />
                    <span className="skeleton skeleton_text skeleton_w-md" aria-hidden={true} />
                  </div>
                </div>
              </div>
            </div>
        </section>

        <DemoSection
          headingId="card-heading"
          title="카드"
          description="카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."
        >
          <Card
            variant="shadow"
            style={{ maxWidth: '360px', width: '100%' }}
            role="status"
            ariaLive="polite"
            ariaBusy="true"
            ariaLabel="카드 콘텐츠 로딩 중"
          >
            <CardBody>
              <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
                <span className="skeleton skeleton_image" aria-hidden={true} />
                <span className="skeleton skeleton_title skeleton_w-md" aria-hidden={true} />
                <span className="skeleton skeleton_text" aria-hidden={true} />
                <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden={true} />
                <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
                  <span className="skeleton skeleton_button" aria-hidden={true} />
                  <span className="skeleton skeleton_button" aria-hidden={true} style={{ width: '4rem' }} />
                </div>
              </Skeleton>
            </CardBody>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="static-heading"
          title="정적"
          description="<code class=&quot;typo_code&quot;>skeleton_static</code>을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. <code class=&quot;typo_code&quot;>prefers-reduced-motion</code> 환경에서도 애니메이션이 비활성화됩니다."
        >
          <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
            <Skeleton active={false} paragraph={3} />
          </div>
        </DemoSection>

        <section className="section" aria-labelledby="usage-heading">
          <h2 id="usage-heading">마크업</h2>
            <p>스켈레톤 그룹에 <code className="typo_code">role="status"</code>와 <code className="typo_code">aria-busy="true"</code>를 지정하고, 장식용 막대에는 <code className="typo_code">aria-hidden="true"</code>를 추가합니다. 실제 콘텐츠가 로드되면 스켈레톤을 제거하고 <code className="typo_code">aria-busy="false"</code>로 변경합니다.</p>

            <GuideCodeBlock>{markupCode }</GuideCodeBlock>
        </section>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={skeletonPropColumns} rows={skeletonProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={skeletonSlotColumns} rows={skeletonSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={skeletonClassColumns} rows={skeletonClasses} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            전체 영역 스피너·오버레이는 <a href="spin.html">Spin</a> 컴포넌트를, 빈 상태 UI는 Empty 컴포넌트를 사용하세요.
          </p>
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={skeletonTokenColumns} rows={skeletonTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
