export const docMeta = {
  title: 'Skeleton | UXKM Guide',
  activeNav: 'skeleton',
  pageTitle: 'Skeleton',
};

import Skeleton from '@/components/Skeleton.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  skeletonChildColumns,
  skeletonChildren,
  skeletonClassColumns,
  skeletonClasses,
  skeletonPropColumns,
  skeletonProps,
  skeletonTokenColumns,
  skeletonTokens,
  markupCode,
} from '@/doc/data/skeleton-api';

const basicCode = `import Skeleton from '@/components/Skeleton.jsx';

export function BasicExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>
  );
}`;
const shapeCode = `import Skeleton from '@/components/Skeleton.jsx';

export function ShapeExample() {
  return (
    <>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`;
const cardDemoCode = `import Skeleton from '@/components/Skeleton.jsx';

export function CardExample() {
  return (
    <div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
          </div>
        </Skeleton>
      </div>
    </div>
  );
}`;
const staticCode = `import Skeleton from '@/components/Skeleton.jsx';

export function StaticExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>
  );
}`;

export default function SkeletonDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Skeleton</h1>
        <p className="lead">
          콘텐츠가 로드되기 전 레이아웃을 미리 보여 주는 Skeleton 컴포넌트입니다. 텍스트·아바타·이미지·
          버튼 형태와 조합 레이아웃을 지원하며 <code className="typo_code">role=&quot;status&quot;</code> ·
          <code className="typo_code">aria-busy</code> · <code className="typo_code">aria-label</code>로 접근성을 보장합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="`skeleton`에 `skeleton_text` · `skeleton_title` 형태 클래스를 조합합니다."
        code={basicCode}
      >
<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>
      </DemoSection>
      <DemoSection
        headingId="shape-heading"
        title="형태"
        description="아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."
        code={shapeCode}
      >
<>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>
      </DemoSection>
      <DemoSection
        headingId="card-heading"
        title="카드"
        description="카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."
        code={cardDemoCode}
      >
<div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span
              className="skeleton skeleton_button"
              aria-hidden="true"
              style={{ width: '4rem' }}
            />
          </div>
        </Skeleton>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="static-heading"
        title="정적"
        description="`skeleton_static`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. `prefers-reduced-motion` 환경에서도 애니메이션이 비활성화됩니다."
        code={staticCode}
      >
<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          스켈레톤 그룹에 <code className="typo_code">role=&quot;status&quot;</code>와
          <code className="typo_code">aria-busy=&quot;true&quot;</code>를 지정하고, 장식용 막대에는
          <code className="typo_code">aria-hidden=&quot;true&quot;</code>를 추가합니다.
          실제 콘텐츠가 로드되면 스켈레톤을 제거하고 <code className="typo_code">aria-busy=&quot;false&quot;</code>로
          변경합니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={skeletonPropColumns} rows={skeletonProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={skeletonChildColumns} rows={skeletonChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={skeletonClassColumns} rows={skeletonClasses} codeColumn="name" />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          전체 영역 스피너·오버레이는 <a href="spin.html">Spin</a> 컴포넌트를,
          빈 상태 UI는 Empty 컴포넌트를 사용하세요.
        </p>
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={skeletonTokenColumns} rows={skeletonTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
