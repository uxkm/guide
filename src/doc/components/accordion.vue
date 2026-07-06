<script>
export const docMeta = {
  title: 'Accordion | HTML Components',
  activeNav: 'accordion',
  pageTitle: 'Accordion',
};
</script>

<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import {
  accordionClassColumns,
  accordionClasses,
  accordionItemPropColumns,
  accordionItemProps,
  accordionItemSlots,
  accordionPropColumns,
  accordionProps,
  accordionSlotColumns,
} from '@/doc/data/accordion-api';
</script>

<template>
  <div class="page_intro">
    <h1>Accordion</h1>
    <p class="lead">
      여러 섹션을 접었다 펼 수 있는 아코디언 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며,
      <code class="typo_code">aria-expanded</code> ·
      <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.
    </p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="accordion_bordered가 기본 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."
  >
    <Accordion narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        open
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="multiple-heading"
    title="다중 열기"
    description="multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."
  >
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="flush-heading"
    title="플러시"
    description="accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."
  >
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="card-heading"
    title="카드"
    description="accordion_card로 각 항목을 독립 카드로 분리합니다. 대시보드·위젯 그룹에 사용합니다."
  >
    <Accordion variant="card" narrow multiple>
      <AccordionItem label="프로젝트 개요" open content="목표, 일정, 이해관계자 정보를 요약합니다." />
      <AccordionItem label="최근 활동" content="커밋, 댓글, 파일 변경 이력을 표시합니다." />
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="extra-heading"
    title="보조 정보"
    description="extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."
  >
    <Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extra-code='<span class="badge badge_count color_danger badge_sm">3</span>'
      >
        <template #extra>
          <span class="badge badge_count color_danger badge_sm">3</span>
        </template>
      </AccordionItem>
      <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extra-code="지난 7일"
      >
        <template #extra>지난 7일</template>
      </AccordionItem>
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."
  >
    <Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size prop으로 트리거와 본문 패딩을 조절합니다."
    stack
  >
    <Accordion size="sm" narrow>
      <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
    </Accordion>

    <Accordion size="lg" narrow>
      <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
    </Accordion>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Accordion Props">
    <ApiTable :columns="accordionPropColumns" :rows="accordionProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-props-heading" title="API · AccordionItem Props">
    <ApiTable :columns="accordionItemPropColumns" :rows="accordionItemProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · AccordionItem Slots">
    <ApiTable :columns="accordionSlotColumns" :rows="accordionItemSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="accordionClassColumns" :rows="accordionClasses" code-column="name" />
  </ApiSection>
</template>
