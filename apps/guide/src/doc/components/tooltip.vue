<script>
export const docMeta = {
  title: 'Tooltip | HTML Components',
  activeNav: 'tooltip',
  pageTitle: 'Tooltip',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
import {
  tooltipClassColumns,
  tooltipClasses,
  tooltipPropColumns,
  tooltipProps,
  tooltipSlotColumns,
  tooltipSlots,
  tooltipTokenColumns,
  tooltipTokens,
  markupCode,
} from '@/doc/data/tooltip-api';
</script>

<template>
  <div class="page_intro">
  <h1>Tooltip</h1>
  <p class="lead">호버·포커스 시 트리거 근처에 짧은 설명을 띄우는 Tooltip 컴포넌트입니다. 용어 정의·아이콘 버튼 보조 설명·비활성 요소 이유 안내 등에 사용하며, <code class="typo_code">role="tooltip"</code> · <code class="typo_code">aria-describedby</code>로 접근성을 보장합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="Tooltip과 #trigger 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다. data-tooltip · aria-describedby로 JS·접근성을 연동합니다."
  >
    <Tooltip content="짧은 도움말 텍스트입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="마우스 오버" />
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="slot-heading"
    title="슬롯"
    description="content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다. tooltip_bubble 안에 직접 본문을 배치합니다."
  >
    <Tooltip>
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="슬롯 예시" />
      </template>
      짧은 도움말 텍스트입니다.
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="open-heading"
    title="열린 상태"
    description="open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."
  >
    <Tooltip open content="정적 데모용 열린 상태입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="filled" color="primary" label="열림" />
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다. tooltip_sm · tooltip_lg 클래스와 대응됩니다."
  >
    <Tooltip size="sm" open content="작은 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="Small" />
      </template>
    </Tooltip>

    <Tooltip open content="기본 크기 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="Medium" />
      </template>
    </Tooltip>

    <Tooltip size="lg" open content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="lg" label="Large" />
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="offset-heading"
    title="간격"
    description="offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔말풍선 사이에 적용됩니다."
    stack
  >
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="tooltip_row">
      <Tooltip offset="none" open content="간격 없음">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="none" />
        </template>
      </Tooltip>

      <Tooltip offset="sm" open content="좁은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="sm" />
        </template>
      </Tooltip>

      <Tooltip open content="기본 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="md" />
        </template>
      </Tooltip>

      <Tooltip offset="lg" open content="넓은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="lg" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="tooltip_demo-placement" style="min-height: 12rem;">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" offset-top="lg" open content="위쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" offset-left="lg" open content="왼쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip offset-bottom="lg" open content="아래쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" offset-right="lg" open content="오른쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="inline-heading"
    title="인라인"
    description="문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."
  >
    <p>
      결제 시
      <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="에스크로" />
        </template>
      </Tooltip>
      서비스를 이용할 수 있습니다.
    </p>
  </DemoSection>

  <DemoSection
    heading-id="trigger-heading"
    title="트리거 유형"
    description="Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
    stack
  >
    <div class="tooltip_row">
      <Tooltip content="버튼 트리거 예시입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="filled" color="primary" label="Button" />
        </template>
      </Tooltip>

      <Tooltip content="링크 스타일 트리거입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="Link 트리거" />
        </template>
      </Tooltip>

      <Tooltip content="아이콘 전용 트리거입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" icon-only aria-label="정보">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
      </Tooltip>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="click-heading"
    title="클릭 트리거"
    description="trigger=&quot;click&quot;으로 클릭 시 말풍선을 토글합니다. data-tooltip-trigger=&quot;click&quot;과 동일하며, 접근성을 위해 tooltip_close 닫기 버튼이 기본 제공됩니다."
  >
    <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="클릭하여 보기" />
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="placement-heading"
    title="배치"
    description="placement prop(top · top-start · top-end · start · end · left · right)으로 말풍선 위치를 조정합니다. tooltip_placement-* 클래스와 대응되며, 기본은 트리거 아래·가운데 정렬입니다."
    stack
  >
    <div class="tooltip_demo-placement">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" content="트리거 위">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" content="트리거 왼쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip content="트리거 아래 · 가운데">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" content="트리거 오른쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>

    <div class="tooltip_row" style="width: 100%; justify-content: space-between;">
      <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="위 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 오른쪽" />
        </template>
      </Tooltip>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="inverse-heading"
    title="역색"
    description="inverse prop으로 어두운 배경의 말풍선을 표시합니다. tooltip_inverse 클래스와 대응됩니다."
  >
    <Tooltip inverse content="어두운 배경의 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성 트리거"
    description="비활성 버튼은 tooltip_trigger span으로 감싸 pointer-events가 막힌 요소에도 설명을 제공합니다."
  >
    <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
      <template #trigger>
        <span class="tooltip_trigger" tabindex="0">
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      </template>
    </Tooltip>
  </DemoSection>

  <DemoSection
    heading-id="arrow-anchor-heading"
    title="화살표 기준"
    description="arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 말풍선·화살표를 독립 조합합니다. target은 말풍선 CSS·화살표 JS, mixed는 말풍선·화살표 모두 JS로 트리거 기준 배치합니다."
    stack
  >
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="tooltip_row" style="align-items: center;">
      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="top" content="트리거 위쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="bottom" content="트리거 아래쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="no-arrow-heading"
    title="화살표 없음"
    description="no-arrow prop으로 tooltip_arrow를 숨깁니다. tooltip_no-arrow 클래스와 대응됩니다."
  >
    <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="화살표 없음" />
      </template>
    </Tooltip>
  </DemoSection>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p>Tooltip 컴포넌트로 트리거와 말풍선을 감쌉니다. content prop 또는 default 슬롯으로 텍스트를 넣고, trigger · placement · inverse prop과 #trigger 슬롯으로 데모와 동일하게 구성할 수 있습니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="tooltipPropColumns" :rows="tooltipProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="tooltipSlotColumns" :rows="tooltipSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="tooltipClassColumns" :rows="tooltipClasses" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      닫기: tooltip_close · 바깥 클릭 · data-tooltip-close · Esc.
      클릭 트리거는 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="tooltipTokenColumns" :rows="tooltipTokens" code-column="name" />
  </ApiSection>
</template>
