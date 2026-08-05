<script>
export const docMeta = {
  title: 'Collapse | UXKM Guide',
  activeNav: 'collapse',
  pageTitle: 'Collapse',
};
</script>

<script setup>
import { ref } from 'vue';
import CollapseExternal from '@/components/CollapseExternal.vue';
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
import Link from '@/components/Link.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import {
  collapseClassColumns,
  collapseClasses,
  collapseExternalPropColumns,
  collapseExternalProps,
  collapseExternalSlots,
  collapsePropColumns,
  collapseProps,
  collapsePanelPropColumns,
  collapsePanelProps,
  collapsePanelSlots,
  collapseSlotColumns,
  collapseSlots,
  collapseTokenColumns,
  collapseTokens,
} from '@/doc/data/collapse-api';

const shippingOpen = ref(true);

const standaloneCode = `<script setup>
import CollapseExternal from '@/components/CollapseExternal.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <CollapseExternal trigger-label="주문 상세 보기" narrow>
    <template #lead>
      <p style="margin: 0 0 var(--space-md)">
        주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
      </p>
    </template>
    <List
    variant="definition"
    layout="inline"
    block
    size="compact"
    inline-label-width="auto"
    inline-gap="1rem"
    >
    <ListItem title="주문번호" description="ORD-2024-0815" />
    <ListItem title="결제금액" description="₩42,000" />
    <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
  </List>
  </CollapseExternal>
</template>`;

const linksCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="관련 가이드" default-open>
      <p style="margin: 0">
        <Link href="/getting-started" label="시작하기" />
        ·
        <Link href="/components/button" label="Button" />
      </p>
    </CollapsePanel>
    <CollapsePanel
      label="교환·반품 안내"
      content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다."
    />
  </Collapse>
</template>`;

const basicCode = `<script setup>
import { ref } from 'vue';
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';

const shippingOpen = ref(true);
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel
    label="배송 정보"
    v-model:open="shippingOpen"
    content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
    />
    <CollapsePanel
    label="결제 수단"
    content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
    />
    <CollapsePanel
    label="교환·반품 안내"
    content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
    />
  </Collapse>
</template>`;

const accordionCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow accordion>
    <CollapsePanel label="알림 설정" default-open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
    <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Collapse>
</template>`;

const skinCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse variant="ghost" narrow>
    <CollapsePanel
    label="Ghost"
    default-open
    content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
    />
  </Collapse>
  <Collapse variant="card" narrow>
    <CollapsePanel label="Card" default-open content="패널마다 카드 형태로 분리됩니다." />
    <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
  </Collapse>
</template>`;

const extraCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="진행 중" default-open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
      <template #extra>3건</template>
    </CollapsePanel>
    <CollapsePanel
    label="처리 완료"
    content="최근 일주일간 완료된 요청 12건입니다."
    extra-code="지난 7일"
    >
    <template #extra>지난 7일</template>
  </CollapsePanel>
  </Collapse>
</template>`;

const disabledCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="공개 문서" default-open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <CollapsePanel
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </Collapse>
</template>`;

const sizeCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse size="sm" narrow>
    <CollapsePanel label="Small" default-open content="작은 콜랩스 — 좁은 패딩." />
  </Collapse>
  <Collapse size="lg" narrow>
    <CollapsePanel label="Large" default-open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
  </Collapse>
</template>`;

const slideCode = `<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
import CollapseExternal from '@/components/CollapseExternal.vue';
<\/script>

<template>
  <Collapse narrow effect="slide">
    <CollapsePanel
    label="배송 정보"
    default-open
    content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
    />
    <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
  </Collapse>
  <CollapseExternal trigger-label="상세 보기" narrow effect="slide">
    <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
  </CollapseExternal>
</template>`;

</script>

<template>
  <div class="page_intro">
    <h1>Collapse</h1>
    <p class="lead">
      콘텐츠 영역을 접었다 펼 수 있는 Nuxt 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나, 패널 그룹으로
      여러 섹션을 구성할 수 있습니다.
      <code class="typo_code">aria-expanded</code> ·
      <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.
    </p>
  </div>

  <DemoSection
    heading-id="standalone-heading"
    title="외부 트리거"
    description="CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."
    :code="standaloneCode"
  >
    <CollapseExternal trigger-label="주문 상세 보기" narrow>
      <template #lead>
        <p style="margin: 0 0 var(--space-md)">
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
      </template>
      <List
        variant="definition"
        layout="inline"
        block
        size="compact"
        inline-label-width="auto"
        inline-gap="1rem"
      >
        <ListItem title="주문번호" description="ORD-2024-0815" />
        <ListItem title="결제금액" description="₩42,000" />
        <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
      </List>
    </CollapseExternal>
  </DemoSection>

  <DemoSection
    heading-id="links-heading"
    title="패널 내 링크"
    description="패널 본문에 Link를 배치해 관련 문서로 이동할 수 있습니다."
    :code="linksCode"
  >
    <Collapse narrow>
      <CollapsePanel label="관련 가이드" default-open>
        <p style="margin: 0">
          <Link href="/getting-started" label="시작하기" />
          ·
          <Link href="/components/button" label="Button" />
          ·
          <Link href="/components/dropdown" label="Dropdown" />
        </p>
      </CollapsePanel>
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다."
      />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="basic-heading"
    title="패널 그룹"
    description="collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."
    :code="basicCode"
  >
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        v-model:open="shippingOpen"
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
      />
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="accordion-heading"
    title="아코디언 모드"
    description="accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."
    :code="accordionCode"
  >
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" default-open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="skin-heading"
    title="스킨"
    description="collapse_ghost · collapse_card로 외형을 조절합니다."
    stack
    :code="skinCode"
  >
    <Collapse variant="ghost" narrow>
      <CollapsePanel
        label="Ghost"
        default-open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
      />
    </Collapse>

    <Collapse variant="card" narrow>
      <CollapsePanel label="Card" default-open content="패널마다 카드 형태로 분리됩니다." />
      <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="extra-heading"
    title="보조 텍스트"
    description="extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."
    :code="extraCode"
  >
    <Collapse narrow>
      <CollapsePanel label="진행 중" default-open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
        <template #extra>3건</template>
      </CollapsePanel>
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extra-code="지난 7일"
      >
        <template #extra>지난 7일</template>
      </CollapsePanel>
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."
    :code="disabledCode"
  >
    <Collapse narrow>
      <CollapsePanel label="공개 문서" default-open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size prop으로 트리거와 본문 패딩을 조절합니다."
    stack
    :code="sizeCode"
  >
    <Collapse size="sm" narrow>
      <CollapsePanel label="Small" default-open content="작은 콜랩스 — 좁은 패딩." />
    </Collapse>

    <Collapse size="lg" narrow>
      <CollapsePanel label="Large" default-open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="slide-heading"
    title="슬라이드"
    description='effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.'
    stack
    :code="slideCode"
  >
    <div class="demo_preview-block">
      <h3 class="typo_overline">패널 그룹</h3>
      <Collapse narrow effect="slide">
        <CollapsePanel
          label="배송 정보"
          default-open
          content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
        />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
      </Collapse>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">외부 트리거</h3>
      <CollapseExternal trigger-label="상세 보기" narrow effect="slide">
        <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
      </CollapseExternal>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-external-props-heading" title="API · CollapseExternal Props">
    <ApiTable :columns="collapseExternalPropColumns" :rows="collapseExternalProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-external-slots-heading" title="API · CollapseExternal Slots">
    <ApiTable :columns="collapseSlotColumns" :rows="collapseExternalSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-collapse-props-heading" title="API · Collapse Props">
    <ApiTable :columns="collapsePropColumns" :rows="collapseProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-collapse-slots-heading" title="API · Collapse Slots">
    <ApiTable :columns="collapseSlotColumns" :rows="collapseSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-panel-props-heading" title="API · CollapsePanel Props">
    <ApiTable :columns="collapsePanelPropColumns" :rows="collapsePanelProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-panel-slots-heading" title="API · CollapsePanel Slots">
    <ApiTable :columns="collapseSlotColumns" :rows="collapsePanelSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="collapseClassColumns" :rows="collapseClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="collapseTokenColumns" :rows="collapseTokens" code-column="name" />
  </ApiSection>
</template>
