<script>
export const docMeta = {
  title: 'Alert | HTML Components',
  activeNav: 'alert',
  pageTitle: 'Alert',
};
</script>

<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Link from '@uxkm/ui/components/Link.vue';
import {
  alertClassColumns,
  alertClasses,
  alertEventColumns,
  alertEvents,
  alertPropColumns,
  alertProps,
  alertSlotColumns,
  alertSlots,
  alertTokenColumns,
  alertTokens,
} from '@/doc/data/alert-api';
</script>

<template>
  <div class="page_intro">
  <h1>Alert</h1>
  <p class="lead">중요한 정보나 피드백을 사용자에게 전달하는 알림 컴포넌트입니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다."
    stack
  >
    <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
    <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
    <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
    <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
  </DemoSection>

  <DemoSection
    heading-id="desc-only-heading"
    title="설명만"
    description="제목 없이 alert_desc만으로 짧은 메시지를 표시합니다."
    stack
  >
    <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
    <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
  </DemoSection>

  <DemoSection
    heading-id="no-icon-heading"
    title="아이콘 없음"
    description="alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다."
    stack
  >
    <Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
    <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="alert_sm · alert_lg로 스케일을 조절합니다."
    stack
  >
    <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
    <Alert color="info" title="Medium" description="기본 크기입니다." />
    <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
  </DemoSection>

  <DemoSection
    heading-id="close-heading"
    title="닫기 가능"
    description="alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다."
    stack
  >
    <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
    <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
  </DemoSection>

  <DemoSection
    heading-id="actions-heading"
    title="액션"
    description="alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다."
    stack
  >
    <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
      <template #actions>
        <div class="alert_actions">
          <Button variant="filled" color="danger" size="sm" label="다시 시도" />
          <Button variant="ghost" size="sm" label="취소" />
        </div>
      </template>
    </Alert>

    <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
      <template #actions>
        <div class="alert_actions">
          <Link href="#" size="sm" label="약관 보기" />
          <Button variant="text" color="primary" size="sm" label="동의하기" />
        </div>
      </template>
    </Alert>
  </DemoSection>

  <DemoSection
    heading-id="banner-heading"
    title="배너"
    description="alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다."
    stack
  >
    <Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
  </DemoSection>

  <DemoSection
    heading-id="context-heading"
    title="문맥 속 사용"
    description="폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다."
    stack
  >
    <Alert color="info" title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link href="#" size="sm" label="릴리스 노트 보기" />
    </Alert>

    <form class="form_layout" novalidate>
      <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />

      <div class="form_field">
        <label class="form_label" for="alert-ex-email">이메일</label>
        <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
      </div>
    </form>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="alertPropColumns" :rows="alertProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="alertSlotColumns" :rows="alertSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="alertEventColumns" :rows="alertEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="alertClassColumns" :rows="alertClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="alertTokenColumns" :rows="alertTokens" code-column="name" />
  </ApiSection>
</template>
