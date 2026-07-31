export const docMeta = {
  title: 'Rate | UXKM Guide',
  activeNav: 'rate',
  pageTitle: 'Rate',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import Rate from '@/components/Rate.jsx';
import {
  rateChildColumns,
  rateChildren,
  rateClassColumns,
  rateClasses,
  rateEventColumns,
  rateEvents,
  ratePropColumns,
  rateProps,
  rateTokenColumns,
  rateTokens,
} from '@/doc/data/rate-api';

const typeCode = `import Rate from '@/components/Rate.jsx';

export function TypeExample() {
  return (
    <>
      <Rate legend="legend — 상품 만족도" defaultValue={3} name="rate-type-legend" />
      <Rate defaultValue={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate
        legend="aria-label — 단독"
        name="rate-type-aria"
        aria-label="별점 5점 만점"
      />
    </>
  );
}`;
const basicCode = `import Rate from '@/components/Rate.jsx';

export function BasicExample() {
  return <Rate legend="배송 속도" defaultValue={3} name="rate-basic" />;
}`;
const sizeCode = `import Rate from '@/components/Rate.jsx';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" defaultValue={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" defaultValue={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" defaultValue={3} name="rate-size-lg" />
    </>
  );
}`;
const colorCode = `import Rate from '@/components/Rate.jsx';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" defaultValue={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" defaultValue={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" defaultValue={2} name="rate-color-danger" />
    </>
  );
}`;
const halfCode = `import Rate from '@/components/Rate.jsx';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" defaultValue={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}`;
const clearCode = `import Rate from '@/components/Rate.jsx';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" defaultValue={4} name="rate-clear" />;
}`;
const readonlyCode = `import Rate from '@/components/Rate.jsx';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`;
const stateCode = `import Rate from '@/components/Rate.jsx';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" defaultValue={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`;
const formCode = `import FormLayout from '@/components/FormLayout.jsx';
import Rate from '@/components/Rate.jsx';

export function FormExample() {
  return (
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  );
}`;

export default function RateDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Rate</h1>
        <p className="lead">별점·만족도를 선택하는 Rate 컴포넌트입니다. <code>fieldset</code>과 <code>input type=&quot;radio&quot;</code>로 폼 값을 전달하며, <strong>rate_allow-half</strong>로 반별, <strong>rate_clearable</strong>로 선택 해제를 지원합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다."
          stack
          code={typeCode}
        >
<>
      <Rate legend="legend — 상품 만족도" defaultValue={3} name="rate-type-legend" />
      <Rate defaultValue={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
    </>
        </DemoSection>
        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."
          code={basicCode}
        >
<Rate legend="배송 속도" defaultValue={3} name="rate-basic" />
        </DemoSection>
        <DemoSection
          headingId="size-heading"
          title="크기"
          description="rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."
          code={sizeCode}
        >
<>
      <Rate size="sm" legend="Small — rate_sm" defaultValue={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" defaultValue={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" defaultValue={3} name="rate-size-lg" />
    </>
        </DemoSection>
        <DemoSection
          headingId="color-heading"
          title="색상"
          description="기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."
          stack
          code={colorCode}
        >
<>
      <Rate className="color_primary" legend="Primary" defaultValue={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" defaultValue={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" defaultValue={2} name="rate-color-danger" />
    </>
        </DemoSection>
        <DemoSection
          headingId="half-heading"
          title="반별"
          description="`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`를 배치합니다."
          code={halfCode}
        >
<>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" defaultValue={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
        </DemoSection>
        <DemoSection
          headingId="clear-heading"
          title="선택 해제"
          description="`rate_clearable`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다."
          code={clearCode}
        >
<Rate clearable legend="만족도 — rate_clearable" defaultValue={4} name="rate-clear" />
        </DemoSection>
        <DemoSection
          headingId="readonly-heading"
          title="읽기 전용"
          description="`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."
          stack
          code={readonlyCode}
        >
<>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
        </DemoSection>
        <DemoSection
          headingId="state-heading"
          title="상태"
          description="비활성·오류(is-error) 상태를 지원합니다."
          stack
          code={stateCode}
        >
<>
      <Rate disabled legend="비활성" defaultValue={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
        </DemoSection>
        <DemoSection
          headingId="form-heading"
          title="폼 레이아웃"
          description="form_field · form_vertical과 함께 사용합니다."
          stack
          code={formCode}
        >
<FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
        </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={ratePropColumns} rows={rateProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={rateChildColumns} rows={rateChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-events-heading" title="API · Events">
        <ApiTable columns={rateEventColumns} rows={rateEvents} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={rateClassColumns} rows={rateClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={rateTokenColumns} rows={rateTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
