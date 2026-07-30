export const docMeta = {
  title: 'Spin | UXKM Guide',
  activeNav: 'spin',
  pageTitle: 'Spin',
};

import Button from '@/components/Button.jsx';
import Spin from '@/components/Spin.jsx';
import SpinWrap from '@/components/SpinWrap.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  spinChildColumns,
  spinChildren,
  spinClassColumns,
  spinClasses,
  spinPropColumns,
  spinProps,
  spinTokenColumns,
  spinTokens,
  spinWrapChildColumns,
  spinWrapChildren,
  spinWrapPropColumns,
  spinWrapProps,
  markupCode,
} from '@/doc/data/spin-api';

const basicCode = `import Spin from '@/components/Spin.jsx';

export function BasicExample() {
  return <Spin />;
}`;
const sizeCode = `import Spin from '@/components/Spin.jsx';

export function SizeExample() {
  return (
    <>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>
  );
}`;
const colorCode = `import Spin from '@/components/Spin.jsx';

export function ColorExample() {
  return (
    <>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>
  );
}`;
const tipCode = `import Spin from '@/components/Spin.jsx';

export function TipExample() {
  return (
    <>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>
  );
}`;
const inlineCode = `import Button from '@/components/Button.jsx';
import Spin from '@/components/Spin.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </>
  );
}`;
const blockCode = `import Spin from '@/components/Spin.jsx';

export function BlockExample() {
  return (
    <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
  );
}`;
const overlayCode = `import SpinWrap from '@/components/SpinWrap.jsx';

export function OverlayExample() {
  return (
    <>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>
  );
}`;

export default function SpinDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Spin</h1>
        <p className="lead">
          로딩·처리 중 상태를 표시하는 Spin 컴포넌트입니다. 인라인 스피너, 설명 텍스트, 컨테이너
          오버레이를 지원하며 <code className="typo_code">role=&quot;status&quot;</code> ·
          <code className="typo_code">aria-busy</code> · <code className="typo_code">aria-label</code>로
          접근성을 보장합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="`spin` · `spin_indicator`로 회전 스피너를 표시합니다."
        code={basicCode}
      >
<Spin />
      </DemoSection>
      <DemoSection
        headingId="size-heading"
        title="크기"
        description="`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다."
        code={sizeCode}
      >
<>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>
      </DemoSection>
      <DemoSection
        headingId="color-heading"
        title="색상"
        description="공통 `color_*` 클래스로 의미를 표현합니다."
        code={colorCode}
      >
<>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>
      </DemoSection>
      <DemoSection
        headingId="tip-heading"
        title="설명 텍스트"
        description="`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다."
        code={tipCode}
      >
<>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>
      </DemoSection>
      <DemoSection
        headingId="inline-heading"
        title="인라인"
        description="`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."
        stack
        code={inlineCode}
      >
<>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button
        variant="filled"
        color="primary"
        loading
        disabled
        aria-busy="true"
        label="제출 중…"
      />
    </>
      </DemoSection>
      <DemoSection
        headingId="block-heading"
        title="블록 정렬"
        description="`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다."
        stack
        code={blockCode}
      >
<Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
      </DemoSection>
      <DemoSection
        headingId="overlay-heading"
        title="컨테이너 오버레이"
        description="`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."
        stack
        code={overlayCode}
      >
<>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>
              차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를
              덮습니다.
            </p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          독립 스피너는 <code className="typo_code">role=&quot;status&quot;</code>와
          <code className="typo_code">aria-busy=&quot;true&quot;</code>를 지정합니다. 오버레이는
          <code className="typo_code">spin_wrap</code>에 <code className="typo_code">is-loading</code>을
          토글합니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Spin Props">
        <ApiTable columns={spinPropColumns} rows={spinProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-wrap-props-heading" title="API · SpinWrap Props">
        <ApiTable columns={spinWrapPropColumns} rows={spinWrapProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-spin-children-heading" title="API · Spin Children">
        <ApiTable columns={spinChildColumns} rows={spinChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-wrap-children-heading" title="API · SpinWrap Children">
        <ApiTable columns={spinWrapChildColumns} rows={spinWrapChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={spinClassColumns} rows={spinClasses} codeColumn="name" />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          버튼 내부 로딩은 <code className="typo_code">.btn.is-loading</code> +
          <code className="typo_code">.btn_spinner</code>를 사용합니다. 독립 스피너·영역 오버레이는
          이 Spin 컴포넌트를 사용하세요.
        </p>
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={spinTokenColumns} rows={spinTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
