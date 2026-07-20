<script>
export const docMeta = {
  title: 'Slider | HTML Components',
  activeNav: 'slider',
  pageTitle: 'Slider',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Slider from '@uxkm/ui/components/Slider.vue';
import {
  sliderClassColumns,
  sliderClasses,
  sliderEventColumns,
  sliderEvents,
  sliderPropColumns,
  sliderProps,
  sliderSlotColumns,
  sliderSlots,
  sliderTokenColumns,
  sliderTokens,
} from '@/doc/data/slider-api';
</script>

<template>
  <div class="page_intro">
  <h1>Slider</h1>
  <p class="lead">범위 값을 선택하는 Slider 컴포넌트입니다. 네이티브 <code>input type="range"</code>를 기반으로 하며, 모바일에서는 <strong>slider_stepper</strong>로 증감 버튼을 제공해 드래그와 동일하게 <code>step</code> 단위로 값을 조절할 수 있습니다.</p>
</div>

  <DemoSection
    heading-id="type-heading"
    title="유형"
    description="접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 <code>label for</code> 또는 <code>aria-labelledby</code>를, 레이블 없이 아이콘·단독 UI만 있으면 <code>aria-label</code>을 사용합니다. 보조 설명은 <code>aria-describedby</code>, 스크린 리더용 값 표현은 <code>aria-valuetext</code>와 <code>output</code>을 조합합니다."
  >
    <Slider
      id="slider-type-label"
      class="slider_fit"
      label="label + for — 기본"
      :value="40"
      show-value
    />
    <Slider
      class="slider_fit"
      :value="55"
      aria-label="단독 슬라이더 — aria-label"
    />
    <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
    <Slider
      id="slider-type-labelledby"
      class="slider_fit"
      label="aria-labelledby — 외부 레이블"
      :value="16"
      :min="12"
      :max="24"
      :step="1"
      aria-describedby="slider-type-labelledby-hint"
      data-slider-valuetext-suffix="픽셀"
      show-value
    />
    <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
    <Slider
      id="slider-type-describedby"
      class="slider_fit"
      label="aria-describedby — 보조 설명"
      :value="70"
      aria-describedby="slider-type-describedby-hint"
      data-slider-suffix="%"
      data-slider-valuetext-suffix="퍼센트"
      show-value
    />
    <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
    <Slider
      id="slider-type-valuetext"
      class="slider_fit"
      label="aria-valuetext — 읽기 쉬운 값"
      :value="3"
      :min="1"
      :max="5"
      :step="1"
      data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
      show-value
    />
    <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다."
  >
    <Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />
  </DemoSection>

  <DemoSection
    heading-id="label-heading"
    title="레이블 · 값 표시"
    description="slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다."
  >
    <Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
    <Slider
      id="slider-brightness"
      class="slider_fit"
      label="밝기"
      :value="40"
      data-slider-suffix="%"
      show-value
    />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다."
  >
    <Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
    <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
    <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다."
  >
    <Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
    <Slider
      id="slider-width-block"
      class="slider_block"
      style="max-width: 480px;"
      label="slider_block — 전체 너비"
      :value="65"
      show-value
    />
  </DemoSection>

  <DemoSection
    heading-id="step-heading"
    title="간격 · 눈금"
    description="step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다."
  >
    <Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />
  </DemoSection>

  <DemoSection
    heading-id="stepper-heading"
    title="스텝 버튼"
    description="모바일(768px 이하)에서 range 드래그가 어려운 경우 <code>slider_stepper</code>를 추가합니다. <code>slider_control</code> 안에 <code>slider_step-decrease</code> · <code>slider_input</code> · <code>slider_step-increase</code> 순으로 배치하며, 버튼 클릭 시 <code>step</code>만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 <code>slider_stepper_always</code>를 함께 사용합니다."
    stack
  >
    <Slider
      class="slider_fit"
      stepper
      label="볼륨 — slider_stepper"
      :value="60"
      show-value
      decrease-label="볼륨 줄이기"
      increase-label="볼륨 늘리기"
      hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
    />

    <Slider
      class="slider_fit"
      stepper
      stepper-always
      label="밝기 — slider_stepper_always"
      :value="40"
      :step="5"
      value-suffix="%"
      show-value
      decrease-label="밝기 줄이기"
      increase-label="밝기 늘리기"
      hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
    />

    <Slider
      class="slider_fit"
      stepper
      label="비활성"
      :value="30"
      show-value
      disabled
    />
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다."
  >
    <Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
    <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
    <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
    <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="비활성·오류(is-error) 상태를 지원합니다."
  >
    <Slider class="slider_fit" label="기본" :value="50" show-value />
    <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />
  </DemoSection>

  <DemoSection
    heading-id="form-heading"
    title="폼 레이아웃"
    description="form_field · form_vertical · form_horizontal과 함께 사용합니다."
    stack
  >
    <FormLayout layout="vertical" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-opacity">불투명도</label>
        <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
        <p class="form_field-hint">0~100% 사이 값</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
        <Slider
          id="slider-form-zoom"
          label="현재 값"
          :value="125"
          :min="50"
          :max="200"
          :step="25"
          data-slider-suffix="%"
          show-value
        />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal" fit>
      <div class="form_field">
        <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
        <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
        <p class="form_field-hint">1~10px</p>
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="sliderPropColumns" :rows="sliderProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="sliderSlotColumns" :rows="sliderSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="sliderEventColumns" :rows="sliderEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="sliderClassColumns" :rows="sliderClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="sliderTokenColumns" :rows="sliderTokens" code-column="name" />
  </ApiSection>
</template>
