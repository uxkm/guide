<script>
export const docMeta = {
  title: 'Spin | HTML Components',
  activeNav: 'spin',
  pageTitle: 'Spin',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Spin from '@uxkm/ui/components/Spin.vue';
import SpinWrap from '@uxkm/ui/components/SpinWrap.vue';
import {
  spinClassColumns,
  spinClasses,
  spinPropColumns,
  spinProps,
  spinSlotColumns,
  spinSlots,
  spinTokenColumns,
  spinTokens,
  spinWrapPropColumns,
  spinWrapProps,
  spinWrapSlotColumns,
  spinWrapSlots,
  markupCode,
} from '@/doc/data/spin-api';
</script>

<template>
  <div class="page_intro">
  <h1>Spin</h1>
  <p class="lead">로딩·처리 중 상태를 표시하는 Spin 컴포넌트입니다. 인라인 스피너, 설명 텍스트, 컨테이너 오버레이를 지원하며 <code class="typo_code">role="status"</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code>로 접근성을 보장합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="<code class=&quot;typo_code&quot;>spin</code> · <code class=&quot;typo_code&quot;>spin_indicator</code>로 회전 스피너를 표시합니다."
  >
    <Spin />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="<code class=&quot;typo_code&quot;>spin_sm</code> · <code class=&quot;typo_code&quot;>spin</code>(기본) · <code class=&quot;typo_code&quot;>spin_lg</code> 세 가지 크기를 지원합니다."
  >
    <Spin size="sm" />
    <Spin />
    <Spin size="lg" />
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."
  >
    <Spin color="primary" aria-label="Primary 로딩" />
    <Spin color="success" aria-label="Success 로딩" />
    <Spin color="warning" aria-label="Warning 로딩" />
    <Spin color="danger" aria-label="Danger 로딩" />
  </DemoSection>

  <DemoSection
    heading-id="tip-heading"
    title="설명 텍스트"
    description="<code class=&quot;typo_code&quot;>spin_tip</code>으로 스피너 아래에 로딩 메시지를 표시합니다."
  >
    <Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
    <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />
  </DemoSection>

  <DemoSection
    heading-id="inline-heading"
    title="인라인"
    description="<code class=&quot;typo_code&quot;>spin_inline</code>으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."
    stack
  >
    <p>
      <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
    </p>

    <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
  </DemoSection>

  <DemoSection
    heading-id="block-heading"
    title="블록 정렬"
    description="<code class=&quot;typo_code&quot;>spin_block</code>은 부모 너비 안에서 스피너를 가운데 정렬합니다."
    stack
  >
    <Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />
  </DemoSection>

  <DemoSection
    heading-id="overlay-heading"
    title="컨테이너 오버레이"
    description="<code class=&quot;typo_code&quot;>spin_wrap</code>에 <code class=&quot;typo_code&quot;>is-loading</code>을 지정하면 콘텐츠 위에 <code class=&quot;typo_code&quot;>spin_overlay</code>가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."
    stack
  >
    <SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
      <Card variant="shadow">
        <CardHeader title="대시보드" />
        <CardBody>
          <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>

    <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
      <Card variant="shadow">
        <CardHeader title="블러 효과" />
        <CardBody>
          <p><code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>
  </DemoSection>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p>독립 스피너는 <code class="typo_code">role="status"</code>와 <code class="typo_code">aria-busy="true"</code>를 지정합니다. 오버레이는 <code class="typo_code">spin_wrap</code>에 <code class="typo_code">is-loading</code>을 토글합니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Spin Props">
    <ApiTable :columns="spinPropColumns" :rows="spinProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wrap-props-heading" title="API · SpinWrap Props">
    <ApiTable :columns="spinWrapPropColumns" :rows="spinWrapProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Spin Slots">
    <ApiTable :columns="spinSlotColumns" :rows="spinSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wrap-slots-heading" title="API · SpinWrap Slots">
    <ApiTable :columns="spinWrapSlotColumns" :rows="spinWrapSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="spinClassColumns" :rows="spinClasses" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      버튼 내부 로딩은 <code class="typo_code">.btn.is-loading</code> + <code class="typo_code">.btn_spinner</code>를 사용합니다.
      독립 스피너·영역 오버레이는 이 Spin 컴포넌트를 사용하세요.
    </p>
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="spinTokenColumns" :rows="spinTokens" code-column="name" />
  </ApiSection>

</template>
