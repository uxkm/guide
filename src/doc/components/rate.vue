<script>
export const docMeta = {
  title: 'Rate | HTML Components',
  activeNav: 'rate',
  pageTitle: 'Rate',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@/components/FormLayout.vue';
import Rate from '@/components/Rate.vue';
import {
  rateClassColumns,
  rateClasses,
  rateEventColumns,
  rateEvents,
  ratePropColumns,
  rateProps,
  rateTokenColumns,
  rateTokens,
} from '@/doc/data/rate-api';
</script>

<template>
  <div class="page_intro">
  <h1>Rate</h1>
  <p class="lead">별점·만족도를 선택하는 Rate 컴포넌트입니다. <code>fieldset</code>과 <code>input type="radio"</code>로 폼 값을 전달하며, <strong>rate_allow-half</strong>로 반별, <strong>rate_clearable</strong>로 선택 해제를 지원합니다.</p>
</div>

  <DemoSection
    heading-id="type-heading"
    title="유형"
    description="접근 가능한 이름 지정 방식별 예시입니다. <code>legend</code> · <code>aria-labelledby</code> · <code>aria-label</code>을 상황에 맞게 사용합니다."
    stack
  >
    <Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
    <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
    <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
  </DemoSection>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."
  >
    <Rate legend="배송 속도" :value="3" name="rate-basic" />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."
  >
    <Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
    <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
    <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."
    stack
  >
    <Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
    <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
    <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />
  </DemoSection>

  <DemoSection
    heading-id="half-heading"
    title="반별"
    description="<code>rate_allow-half</code>를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 <code>rate_input-half</code>와 <code>rate_star-half</code> 버튼을 배치합니다."
  >
    <Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
    <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="clear-heading"
    title="선택 해제"
    description="<code>rate_clearable</code>을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다."
  >
    <Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />
  </DemoSection>

  <DemoSection
    heading-id="readonly-heading"
    title="읽기 전용"
    description="<code>is-readonly</code>로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."
    stack
  >
    <Rate readonly allow-half :value="4.5" />
    <Rate readonly size="sm" :value="2" />
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="비활성·오류(is-error) 상태를 지원합니다."
    stack
  >
    <Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
    <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
    <p class="form_field-error">별점을 선택해 주세요.</p>
  </DemoSection>

  <DemoSection
    heading-id="form-heading"
    title="폼 레이아웃"
    description="form_field · form_vertical과 함께 사용합니다."
    stack
  >
    <FormLayout layout="vertical" fit>
      <div class="form_field">
        <span class="form_field-label" id="rate-form-label">상품 만족도</span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="ratePropColumns" :rows="rateProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="rateEventColumns" :rows="rateEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="rateClassColumns" :rows="rateClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="rateTokenColumns" :rows="rateTokens" code-column="name" />
  </ApiSection>
</template>
