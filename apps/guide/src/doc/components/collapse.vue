<script>
export const docMeta = {
  title: 'Collapse | HTML Components',
  activeNav: 'collapse',
  pageTitle: 'Collapse',
};
</script>

<script setup>
import CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
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
} from '@/doc/data/collapse-api';
</script>

<template>
  <div class="page_intro">
    <h1>Collapse</h1>
    <p class="lead">
      콘텐츠 영역을 접었다 펼 수 있는 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나, 패널 그룹으로
      여러 섹션을 구성할 수 있습니다.
      <code class="typo_code">aria-expanded</code> ·
      <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.
    </p>
  </div>

  <DemoSection
    heading-id="standalone-heading"
    title="외부 트리거"
    description="CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."
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
    heading-id="basic-heading"
    title="패널 그룹"
    description="collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."
  >
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        open
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
  >
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="skin-heading"
    title="스킨"
    description="collapse_ghost · collapse_card로 외형을 조절합니다."
    stack
  >
    <Collapse variant="ghost" narrow>
      <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
      />
    </Collapse>

    <Collapse variant="card" narrow>
      <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
      <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
    </Collapse>
  </DemoSection>

  <DemoSection
    heading-id="extra-heading"
    title="보조 텍스트"
    description="extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."
  >
    <Collapse narrow>
      <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
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
  >
    <Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
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
  >
    <Collapse size="sm" narrow>
      <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
    </Collapse>

    <Collapse size="lg" narrow>
      <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
    </Collapse>
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
</template>
