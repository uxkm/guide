export const docMeta = {
  title: 'Slider | UXKM Guide',
  activeNav: 'slider',
  pageTitle: 'Slider',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import Slider from '@/components/Slider.jsx';
import {
  sliderChildColumns,
  sliderChildren,
  sliderClassColumns,
  sliderClasses,
  sliderEventColumns,
  sliderEvents,
  sliderPropColumns,
  sliderProps,
  sliderTokenColumns,
  sliderTokens,
} from '@/doc/data/slider-api';

const typeCode = `import Slider from '@/components/Slider.jsx';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        defaultValue={40}
        showValue
      />
      <Slider className="slider_fit" defaultValue={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        defaultValue={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        defaultValue={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        defaultValue={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
      </p>
    </>
  );
}`;
const basicCode = `import Slider from '@/components/Slider.jsx';

export function BasicExample() {
  return <Slider className="slider_fit" defaultValue={30} aria-label="기본 슬라이더" />;
}`;
const labelCode = `import Slider from '@/components/Slider.jsx';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" defaultValue={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        defaultValue={40}
        data-slider-suffix="%"
        showValue
      />
    </>
  );
}`;
const sizeCode = `import Slider from '@/components/Slider.jsx';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        defaultValue={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        defaultValue={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        defaultValue={70}
        showValue
      />
    </>
  );
}`;
const widthCode = `import Slider from '@/components/Slider.jsx';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        defaultValue={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        defaultValue={65}
        showValue
      />
    </>
  );
}`;
const stepCode = `import Slider from '@/components/Slider.jsx';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" defaultValue={50} step={10} showValue />
  );
}`;
const stepperCode = `import Slider from '@/components/Slider.jsx';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        defaultValue={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        defaultValue={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        defaultValue={30}
        showValue
        disabled
      />
    </>
  );
}`;
const colorCode = `import Slider from '@/components/Slider.jsx';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        defaultValue={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        defaultValue={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        defaultValue={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        defaultValue={80}
        showValue
      />
    </>
  );
}`;
const stateCode = `import Slider from '@/components/Slider.jsx';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" defaultValue={50} showValue />
      <Slider className="slider_fit" label="비활성" defaultValue={30} disabled showValue />
    </>
  );
}`;
const formCode = `import FormLayout from '@/components/FormLayout.jsx';
import Slider from '@/components/Slider.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" defaultValue={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            defaultValue={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" defaultValue={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>
  );
}`;

export default function SliderDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Slider</h1>
        <p className="lead">범위 값을 선택하는 Slider 컴포넌트입니다. 네이티브 <code>input type=&quot;range&quot;</code>를 기반으로 하며, 모바일에서는 <strong>slider_stepper</strong>로 증감 버튼을 제공해 드래그와 동일하게 <code>step</code> 단위로 값을 조절할 수 있습니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 `label for` 또는 `aria-labelledby`를, 레이블 없이 아이콘·단독 UI만 있으면 `aria-label`을 사용합니다. 보조 설명은 `aria-describedby`, 스크린 리더용 값 표현은 `aria-valuetext`와 `output`을 조합합니다."
          code={typeCode}
        >
<>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        defaultValue={40}
        showValue
      />
      <Slider className="slider_fit" defaultValue={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        defaultValue={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        defaultValue={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        defaultValue={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적
        output은 <code>aria-hidden=&quot;true&quot;</code>로 중복 낭독을 줄일 수 있습니다.
      </p>
    </>
        </DemoSection>
        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다."
          code={basicCode}
        >
<Slider className="slider_fit" defaultValue={30} aria-label="기본 슬라이더" />
        </DemoSection>
        <DemoSection
          headingId="label-heading"
          title="레이블 · 값 표시"
          description="slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다."
          code={labelCode}
        >
<>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" defaultValue={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        defaultValue={40}
        data-slider-suffix="%"
        showValue
      />
    </>
        </DemoSection>
        <DemoSection
          headingId="size-heading"
          title="크기"
          description="slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다."
          code={sizeCode}
        >
<>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        defaultValue={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        defaultValue={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        defaultValue={70}
        showValue
      />
    </>
        </DemoSection>
        <DemoSection
          headingId="width-heading"
          title="너비"
          description="기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다."
          code={widthCode}
        >
<>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        defaultValue={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        defaultValue={65}
        showValue
      />
    </>
        </DemoSection>
        <DemoSection
          headingId="step-heading"
          title="간격 · 눈금"
          description="step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다."
          code={stepCode}
        >
<Slider className="slider_fit" label="step=10" defaultValue={50} step={10} showValue />
        </DemoSection>
        <DemoSection
          headingId="stepper-heading"
          title="스텝 버튼"
          description="모바일(768px 이하)에서 range 드래그가 어려운 경우 `slider_stepper`를 추가합니다. `slider_control` 안에 `slider_step-decrease` · `slider_input` · `slider_step-increase` 순으로 배치하며, 버튼 클릭 시 `step`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 `slider_stepper_always`를 함께 사용합니다."
          stack
          code={stepperCode}
        >
<>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        defaultValue={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        defaultValue={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        defaultValue={30}
        showValue
        disabled
      />
    </>
        </DemoSection>
        <DemoSection
          headingId="color-heading"
          title="색상"
          description="color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다."
          code={colorCode}
        >
<>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        defaultValue={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        defaultValue={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        defaultValue={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        defaultValue={80}
        showValue
      />
    </>
        </DemoSection>
        <DemoSection
          headingId="state-heading"
          title="상태"
          description="비활성·오류(is-error) 상태를 지원합니다."
          code={stateCode}
        >
<>
      <Slider className="slider_fit" label="기본" defaultValue={50} showValue />
      <Slider className="slider_fit" label="비활성" defaultValue={30} disabled showValue />
    </>
        </DemoSection>
        <DemoSection
          headingId="form-heading"
          title="폼 레이아웃"
          description="form_field · form_vertical · form_horizontal과 함께 사용합니다."
          stack
          code={formCode}
        >
<>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" defaultValue={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            defaultValue={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" defaultValue={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>
        </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={sliderPropColumns} rows={sliderProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={sliderChildColumns} rows={sliderChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-events-heading" title="API · Events">
        <ApiTable columns={sliderEventColumns} rows={sliderEvents} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={sliderClassColumns} rows={sliderClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={sliderTokenColumns} rows={sliderTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
