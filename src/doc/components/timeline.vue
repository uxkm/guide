<script>
export const docMeta = {
  title: 'Timeline | HTML Components',
  activeNav: 'timeline',
  pageTitle: 'Timeline',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Tag from '@/components/Tag.vue';
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
import {
  timelineClassColumns,
  timelineClasses,
  timelineItemPropColumns,
  timelineItemProps,
  timelineItemSlots,
  timelinePropColumns,
  timelineProps,
  timelineSlotColumns,
  timelineSlots,
  timelineTokenColumns,
  timelineTokens,
} from '@/doc/data/timeline-api';
</script>

<template>
  <div class="page_intro">
  <h1>Timeline</h1>
  <p class="lead">시간 순서에 따른 이벤트·활동을 표시하는 타임라인 컴포넌트입니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다."
    stack
  >
    <Timeline>
      <TimelineItem
        color="primary"
        time="2024-06-01 10:00"
        datetime="2024-06-01"
        title="프로젝트 킥오프"
        description="팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다."
      />
      <TimelineItem
        color="success"
        time="2024-06-10 14:30"
        datetime="2024-06-10"
        title="1차 릴리스 완료"
        description="MVP 기능이 프로덕션에 배포되었습니다."
      />
      <TimelineItem
        color="warning"
        time="2024-06-15 09:00"
        datetime="2024-06-15"
        title="성능 이슈 발견"
        description="대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다."
      />
      <TimelineItem
        color="danger"
        time="2024-06-18 16:00"
        datetime="2024-06-18"
        title="긴급 패치 배포"
        description="인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다."
      />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="simple-heading"
    title="간단"
    description="제목만 표시하는 간결한 타임라인입니다."
    stack
  >
    <Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="outline-heading"
    title="아웃라인 도트"
    description="timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다."
    stack
  >
    <Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
      <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘 도트"
    description="timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다."
    stack
  >
    <Timeline icon icon-size="sm">
      <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
      <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
      <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
      <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="card-heading"
    title="카드형"
    description="timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다."
    stack
  >
    <Timeline card>
      <TimelineItem color="primary" time="2024-06-20 09:00" datetime="2024-06-20" title="디자인 시스템 v2.0 릴리스" description="타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.">
        <template #meta>
          <Tag color="primary" label="Release" />
          <Tag color="default" label="Design" />
        </template>
      </TimelineItem>
      <TimelineItem color="success" time="2024-06-22 14:00" datetime="2024-06-22" title="접근성 감사 완료" description="WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.">
        <template #meta>
          <Tag color="success" label="Passed" />
          <Tag color="default" label="A11y" />
        </template>
      </TimelineItem>
      <TimelineItem color="info" time="2024-06-25 11:30" datetime="2024-06-25" title="문서 업데이트 예정" description="Button · Timeline 컴포넌트 가이드가 추가됩니다.">
        <template #meta>
          <Tag color="info" label="Docs" />
        </template>
      </TimelineItem>
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="label-heading"
    title="날짜 레이블"
    description="timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다."
    stack
  >
    <Timeline label-col>
      <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
      <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
      <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
      <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="alternate-heading"
    title="좌우 교차"
    description="timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다."
    stack
  >
    <Timeline alternate>
      <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
      <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
      <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
      <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="horizontal-heading"
    title="가로형"
    description="timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다."
    stack
  >
    <Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다."
    stack
  >
    <div>
      <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Small</p>
      <Timeline size="sm">
        <TimelineItem color="primary" title="알림 발송" time="10:30" />
        <TimelineItem color="success" title="수신 확인" time="10:31" />
      </Timeline>
    </div>

    <div>
      <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Large</p>
      <Timeline size="lg">
        <TimelineItem color="primary" title="연간 컨퍼런스" description="2024 UX 디자인 서밋 참가" time="2024-11-15" datetime="2024-11-15" />
        <TimelineItem color="success" title="워크숍 진행" description="디자인 토큰 실습 세션" time="2024-11-16" datetime="2024-11-16" />
      </Timeline>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다."
    stack
  >
    <Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Timeline Props">
    <ApiTable :columns="timelinePropColumns" :rows="timelineProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-props-heading" title="API · TimelineItem Props">
    <ApiTable :columns="timelineItemPropColumns" :rows="timelineItemProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Timeline Slots">
    <ApiTable :columns="timelineSlotColumns" :rows="timelineSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-slots-heading" title="API · TimelineItem Slots">
    <ApiTable :columns="timelineSlotColumns" :rows="timelineItemSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="timelineClassColumns" :rows="timelineClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="timelineTokenColumns" :rows="timelineTokens" code-column="name" />
  </ApiSection>
</template>
