<script>
export const docMeta = {
  title: 'Steps | HTML Components',
  activeNav: 'steps',
  pageTitle: 'Steps',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
import {
  stepsClassColumns,
  stepsClasses,
  stepsItemPropColumns,
  stepsItemProps,
  stepsPropColumns,
  stepsProps,
  stepsSlotColumns,
  stepsSlots,
  stepsTokenColumns,
  stepsTokens,
} from '@/doc/data/steps-api';
</script>

<template>
  <div class="page_intro">
  <h1>Steps</h1>
  <p class="lead">다단계 프로세스·마법사·주문 흐름을 단계별로 표시하는 컴포넌트입니다. <code class="typo_code">ol</code> 시맨틱 구조와 <code class="typo_code">aria-current="step"</code>으로 접근성을 지원합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다."
  >
    <Steps aria-label="주문 진행 단계">
      <StepsItem title="장바구니" description="상품 확인" status="finished" />
      <StepsItem title="배송 정보" description="주소 입력" status="finished" />
      <StepsItem title="결제" description="결제 수단 선택" status="active" />
      <StepsItem title="완료" description="주문 확인" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="simple-heading"
    title="간단"
    description="제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다."
  >
    <Steps aria-label="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="vertical-heading"
    title="세로형"
    description="steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다."
  >
    <Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
      <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
      <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
      <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
      <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="dot-heading"
    title="도트"
    description="steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다."
  >
    <Steps dot aria-label="배송 추적 단계">
      <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
      <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
      <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
      <StepsItem title="배송 완료" description="대기 중" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘"
    description="steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다."
  >
    <Steps icon-style aria-label="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="navigable-heading"
    title="탐색 가능"
    description="steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다."
  >
    <Steps navigable aria-label="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="error-heading"
    title="오류"
    description="is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다."
  >
    <Steps aria-label="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="align-heading"
    title="가운데 정렬"
    description="steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다."
  >
    <Steps align="center" aria-label="출시 단계">
      <StepsItem title="기획" description="요구사항 정의" status="finished" />
      <StepsItem title="개발" description="기능 구현" status="finished" />
      <StepsItem title="QA" description="품질 검증" status="active" />
      <StepsItem title="출시" description="프로덕션 배포" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다."
    stack
  >
    <Steps size="sm" aria-label="Small 단계">
      <StepsItem title="1단계" status="finished" />
      <StepsItem title="2단계" status="active" />
      <StepsItem title="3단계" status="wait" />
    </Steps>

    <Steps size="lg" aria-label="Large 단계">
      <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
      <StepsItem title="디자인" description="UI 키트 제작" status="active" />
      <StepsItem title="개발" description="구현 및 테스트" status="wait" />
    </Steps>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태 요약"
    description="각 상태 클래스의 시각적 의미입니다. 현재 단계에는 <code class=&quot;typo_code&quot;>aria-current=&quot;step&quot;</code>을 함께 지정합니다."
    stack
  >
    <Steps aria-label="상태 예시 — 완료">
      <StepsItem title="is-finished" description="완료된 단계" status="finished" />
    </Steps>

    <Steps aria-label="상태 예시 — 진행 중">
      <StepsItem title="is-active" description="현재 진행 단계" status="active" />
    </Steps>

    <Steps aria-label="상태 예시 — 대기">
      <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
    </Steps>

    <Steps aria-label="상태 예시 — 오류">
      <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
    </Steps>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Steps Props">
    <ApiTable :columns="stepsPropColumns" :rows="stepsProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-props-heading" title="API · StepsItem Props">
    <ApiTable :columns="stepsItemPropColumns" :rows="stepsItemProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="stepsSlotColumns" :rows="stepsSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="stepsClassColumns" :rows="stepsClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="stepsTokenColumns" :rows="stepsTokens" code-column="name" />
  </ApiSection>
</template>
