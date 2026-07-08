export const docMeta = {
  title: 'Progress | HTML Components',
  activeNav: 'progress',
  pageTitle: 'Progress',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import Progress from '@/components/Progress.jsx';
import ProgressCircle from '@/components/ProgressCircle.jsx';
import {
  progressCirclePropColumns,
  progressCircleProps,
  progressClassColumns,
  progressClasses,
  progressPropColumns,
  progressProps,
  progressSlotColumns,
  progressSlots,
  progressTokenColumns,
  progressTokens,
  markupCode,
} from '@/doc/data/progress-api';

export default function ProgressDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Progress</h1>
        <p className="lead">작업 진행률을 시각적으로 표시하는 Progress 컴포넌트입니다. 선형·원형, 색상·크기 변형, 줄무늬·불확정 상태를 지원하며 <code className="typo_code">role="progressbar"</code> · <code className="typo_code">aria-valuenow</code>로 접근성을 보장합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="<code class=&quot;typo_code&quot;>progress</code> · <code class=&quot;typo_code&quot;>progress_track</code> · <code class=&quot;typo_code&quot;>progress_bar</code>로 트랙과 채움 막대를 구성합니다. <code class=&quot;typo_code&quot;>progress_bar</code>의 <code class=&quot;typo_code&quot;>style=&quot;width: …&quot;</code> 또는 CSS 변수로 진행률을 제어합니다."
          stack
        >
          <Progress percent={0} />
          <Progress percent={30} />
          <Progress percent={60} />
          <Progress percent={100} status="success" />
        </DemoSection>

        <DemoSection
          headingId="label-heading"
          title="레이블 · 값"
          description="<code class=&quot;typo_code&quot;>progress_header</code>에 <code class=&quot;typo_code&quot;>progress_label</code> · <code class=&quot;typo_code&quot;>progress_value</code>를 함께 배치합니다."
          stack
        >
          <Progress percent={42} show-info label="파일 업로드" ariaLabel="파일 업로드 진행률" />
          <Progress percent={67} show-info label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."
          stack
        >
          <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
          <Progress percent={100} color="success" ariaLabel="Success 진행률" />
          <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
          <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="<code class=&quot;typo_code&quot;>progress_sm</code> · <code class=&quot;typo_code&quot;>progress</code>(기본) · <code class=&quot;typo_code&quot;>progress_lg</code> 세 가지 높이를 지원합니다."
          stack
        >
          <Progress size="sm" percent={40} />
          <Progress percent={55} />
          <Progress size="lg" percent={70} />
        </DemoSection>

        <DemoSection
          headingId="striped-heading"
          title="줄무늬 · 애니메이션"
          description="<code class=&quot;typo_code&quot;>progress_striped</code>로 줄무늬 패턴을, <code class=&quot;typo_code&quot;>progress_animated</code>와 함께 사용하면 흐르는 애니메이션을 적용합니다."
          stack
        >
          <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
          <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
        </DemoSection>

        <DemoSection
          headingId="indeterminate-heading"
          title="불확정"
          description="진행률을 알 수 없을 때 <code class=&quot;typo_code&quot;>is-indeterminate</code>를 사용합니다. <code class=&quot;typo_code&quot;>aria-valuenow</code>를 생략하거나 <code class=&quot;typo_code&quot;>aria-busy=&quot;true&quot;</code>를 함께 지정합니다."
          stack
        >
          <Progress indeterminate color="primary" ariaLabel="처리 중" />
          <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
        </DemoSection>

        <DemoSection
          headingId="inside-heading"
          title="바 안 텍스트"
          description="<code class=&quot;typo_code&quot;>progress_inside</code>로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."
          stack
        >
          <Progress percent={25} inside />
          <Progress percent={80} inside size="lg" color="success" />
        </DemoSection>

        <DemoSection
          headingId="circle-heading"
          title="원형"
          description="<code class=&quot;typo_code&quot;>progress_circle</code>로 원형 진행률을 표시합니다. <code class=&quot;typo_code&quot;>style=&quot;--progress-percent: …&quot;</code>로 채움 비율을 지정합니다."
        >
          <ProgressCircle percent={25} />
          <ProgressCircle percent={68} color="success" />
          <ProgressCircle percent={50} size="sm" color="warning" />
          <ProgressCircle percent={90} size="lg" color="danger" />
        </DemoSection>

        <DemoSection
          headingId="width-heading"
          title="너비"
          description="<code class=&quot;typo_code&quot;>progress_fit</code>은 최대 너비를 제한하고, <code class=&quot;typo_code&quot;>progress_block</code>은 부모 너비 전체를 사용합니다."
          stack
        >
          <Progress percent={50} show-info label="progress_fit" />
          <Progress percent={72} block show-info label="progress_block — 전체 너비" />
        </DemoSection>

        <section className="section" aria-labelledby="usage-heading">
          <h2 id="usage-heading">마크업</h2>
            <p>선형 Progress는 <code className="typo_code">progress_track</code>에 <code className="typo_code">role="progressbar"</code>를 지정하고, <code className="typo_code">progress_bar</code>의 <code className="typo_code">style="width: …"</code>로 진행률을 제어합니다. 원형은 <code className="typo_code">--progress-percent</code> CSS 변수를 사용합니다.</p>

            <GuideCodeBlock>{markupCode }</GuideCodeBlock>
        </section>

        <ApiSection headingId="api-props-heading" title="API · Progress Props">
          <ApiTable columns={progressPropColumns} rows={progressProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-circle-props-heading" title="API · ProgressCircle Props">
          <ApiTable columns={progressCirclePropColumns} rows={progressCircleProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={progressSlotColumns} rows={progressSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={progressClassColumns} rows={progressClasses} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            진행률은 <code className="typo_code">progress_bar</code>의 <code className="typo_code">width</code> 또는 JS로 업데이트합니다.
            시각적 값과 <code className="typo_code">aria-valuenow</code>를 함께 맞춰 주세요.
          </p>
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={progressTokenColumns} rows={progressTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
