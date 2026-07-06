<script>
export const docMeta = {
  title: 'Popover | HTML Components',
  activeNav: 'popover',
  pageTitle: 'Popover',
};
</script>

<script setup>
import Button from '@/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
import Popover from '@/components/Popover.vue';
import Textarea from '@/components/Textarea.vue';
import {
  popoverClassColumns,
  popoverClasses,
  popoverPropColumns,
  popoverProps,
  popoverSlotColumns,
  popoverSlots,
  popoverTokenColumns,
  popoverTokens,
  markupCode,
} from '@/doc/data/popover-api';
</script>

<template>
  <div class="page_intro">
  <h1>Popover</h1>
  <p class="lead">클릭·호버로 트리거 옆에 떠 있는 정보 패널 컴포넌트입니다. 짧은 설명·확인·간단한 폼 등 Dropdown보다 풍부한 콘텐츠를 표시할 때 사용하며, <code class="typo_code">aria-haspopup="dialog"</code> · <code class="typo_code">role="dialog"</code>로 접근성을 보장합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="Popover와 #trigger 슬롯으로 트리거와 패널을 구성합니다. panel-label을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다."
  >
    <Popover panel-label="안내">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
      </template>
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="no-label-heading"
    title="라벨 없음"
    description="panel-label을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다."
  >
    <Popover>
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
      </template>
      <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="open-heading"
    title="열린 상태"
    description="open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded=&quot;true&quot;를 함께 지정합니다."
  >
    <Popover open panel-label="열린 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="filled" color="primary" label="열림" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다."
  >
    <Popover size="sm" open panel-label="작은 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
    </Popover>

    <Popover open panel-label="기본 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Medium" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>기본 크기 패널입니다.</p>
    </Popover>

    <Popover size="lg" open panel-label="큰 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="lg" label="Large" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="offset-heading"
    title="간격"
    description="offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔패널 사이에 적용됩니다."
    stack
  >
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="popover_row">
      <Popover offset="none" open panel-label="none">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>간격 없음</p>
      </Popover>

      <Popover offset="sm" open panel-label="sm">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>좁은 간격</p>
      </Popover>

      <Popover open panel-label="md">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>기본 간격</p>
      </Popover>

      <Popover offset="lg" open panel-label="lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>넓은 간격</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="popover_demo-placement" style="min-height: 12rem;">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" offset-top="lg" open panel-label="offset-top lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>위쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" offset-left="lg" open panel-label="offset-left lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>왼쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover offset-bottom="lg" open panel-label="offset-bottom lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>아래쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" offset-right="lg" open panel-label="offset-right lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>오른쪽 간격</p>
        </Popover>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="title-heading"
    title="제목"
    description="title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다."
  >
    <Popover title="배송 안내">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
      </template>
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="푸터"
    description="#footer 슬롯·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다."
  >
    <Popover title="항목 삭제">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
      </template>
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
      </template>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="hover-heading"
    title="호버 트리거"
    description="trigger=&quot;hover&quot;로 마우스 오버·포커스 시 패널을 표시합니다. data-popover-trigger=&quot;hover&quot;와 동일하며, 짧은 설명·용어 정의에 적합합니다."
  >
    <p>
      결제 시
      <Popover trigger="hover" panel-label="에스크로 설명">
        <template #trigger>
          <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
        </template>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>
      서비스를 이용할 수 있습니다.
    </p>
  </DemoSection>

  <DemoSection
    heading-id="trigger-heading"
    title="트리거 유형"
    description="Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
    stack
  >
    <div class="popover_row">
      <Popover panel-label="Button 트리거">
        <template #trigger>
          <Button class="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
        </template>
        <p>버튼 트리거 예시입니다.</p>
      </Popover>

      <Popover panel-label="Link 트리거">
        <template #trigger>
          <Link class="popover_trigger" label="Link 트리거" aria-haspopup="dialog" />
        </template>
        <p>링크 스타일 트리거입니다.</p>
      </Popover>

      <Popover panel-label="추가 정보">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" icon-only aria-label="정보" aria-haspopup="dialog">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
        <p>아이콘 전용 트리거입니다.</p>
      </Popover>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="placement-heading"
    title="배치"
    description="placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. popover_placement-* 클래스와 대응되며, 기본은 트리거 아래·왼쪽 정렬입니다."
    stack
  >
    <div class="popover_demo-placement">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" panel-label="위쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
          </template>
          <p>트리거 위 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" panel-label="왼쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 왼쪽</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover placement="bottom-center" panel-label="아래쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />
          </template>
          <p>트리거 아래 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" panel-label="오른쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 오른쪽</p>
        </Popover>
      </div>
    </div>

    <div class="popover_row" style="width: 100%; justify-content: space-between;">
      <Popover placement="top" panel-label="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 왼쪽 정렬</p>
      </Popover>

      <Popover panel-label="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>기본 배치</p>
      </Popover>

      <Popover placement="end" panel-label="오른쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 오른쪽 정렬</p>
      </Popover>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="form-heading"
    title="폼"
    description="Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다."
  >
    <Popover title="빠른 메모">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
      </template>
      <div class="form_field">
        <label class="form_label" for="popover-memo-input">내용</label>
        <Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" />
      </div>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close />
      </template>
    </Popover>
  </DemoSection>

  <DemoSection
    heading-id="arrow-anchor-heading"
    title="화살표 기준"
    description="arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 패널·화살표를 독립 조합합니다. target은 패널 CSS·화살표 JS, mixed는 패널·화살표 모두 JS로 트리거 기준 배치합니다."
    stack
  >
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open panel-label="content">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="target">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="target" arrow-target-align="left" panel-label="left">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 왼쪽을 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" arrow-target-align="right" panel-label="right">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 오른쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="popover_row" style="align-items: center;">
      <Popover placement="left" open arrow-anchor="target" arrow-target-align="top" panel-label="top">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 위쪽을 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" arrow-target-align="bottom" panel-label="bottom">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 아래쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" panel-label="가운데 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" panel-label="가운데 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널·화살표 모두 트리거 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" panel-label="가운데 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 왼쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" arrow-target-align="left" panel-label="왼쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-label="왼쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" arrow-target-align="right" panel-label="왼쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 오른쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" panel-label="오른쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" panel-label="오른쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" panel-label="오른쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="no-arrow-heading"
    title="화살표 없음"
    description="no-arrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다."
  >
    <Popover no-arrow panel-label="화살표 없는 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
      </template>
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>
  </DemoSection>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p><code class="typo_code">Popover</code> 컴포넌트로 트리거·패널·접근성 속성을 조합합니다. <code class="typo_code">trigger</code> · <code class="typo_code">placement</code> · <code class="typo_code">title</code> prop과 <code class="typo_code">#trigger</code> · <code class="typo_code">#footer</code> 슬롯으로 데모와 동일하게 구성할 수 있습니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="popoverPropColumns" :rows="popoverProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="popoverSlotColumns" :rows="popoverSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="popoverClassColumns" :rows="popoverClasses" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      닫기: 닫기 버튼 · 바깥 클릭 · <code class="typo_code">data-popover-close</code> · <kbd>Esc</kbd>.
      클릭 트리거는 패널 우측 상단에 닫기 버튼이 기본 제공됩니다.
      열릴 때 다른 Popover는 자동으로 닫힙니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="popoverTokenColumns" :rows="popoverTokens" code-column="name" />
  </ApiSection>
</template>
