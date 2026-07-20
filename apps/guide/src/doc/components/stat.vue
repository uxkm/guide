<script>
export const docMeta = {
  title: 'Stat | HTML Components',
  activeNav: 'stat',
  pageTitle: 'Stat',
};
</script>

<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Stat from '@uxkm/ui/components/Stat.vue';
import {
  statClassColumns,
  statClasses,
  statPropColumns,
  statProps,
  statSlotColumns,
  statSlots,
  statTokenColumns,
  statTokens,
} from '@/doc/data/stat-api';
</script>

<template>
  <div class="page_intro">
    <h1>Stat</h1>
    <p class="lead">핵심 수치와 지표를 강조하여 표시하는 통계 컴포넌트입니다. 대시보드·요약 카드·KPI 영역에 사용합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="title · value · description으로 지표를 구성합니다."
  >
    <Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trend-color="success"
    />
  </DemoSection>

  <DemoSection
    heading-id="prefix-heading"
    title="접두 · 접미"
    description="prefix · suffix로 통화·단위를 표시합니다."
  >
    <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />

    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />

    <Stat title="평균 응답 시간" value="128" suffix="ms" />
  </DemoSection>

  <DemoSection
    heading-id="trend-heading"
    title="추세"
    description="trend로 증감 방향을 아이콘과 함께 표시합니다."
  >
    <Stat
      title="월간 매출"
      prefix="₩"
      value="4.2M"
      trend="+8.2%"
      trend-color="success"
      description="전월 대비"
      card
      shadow
    />

    <Stat
      title="이탈률"
      value="2.4"
      suffix="%"
      trend="+0.3%p"
      trend-color="danger"
      card
      shadow
    >
      <template #trend-icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </template>
    </Stat>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size로 수치 스케일을 조절합니다."
  >
    <Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />
  </DemoSection>

  <DemoSection
    heading-id="layout-heading"
    title="레이아웃"
    description="stat_horizontal · stat_inline · stat_row로 배치를 변경합니다."
    stack
  >
    <Stat class="stat_horizontal" card title="활성 세션" value="342" />

    <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />

    <Stat class="stat_row" card shadow>
      <span class="stat_icon-wrap color_primary" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">팀 멤버</span>
        <span class="stat_value">48</span>
        <span class="stat_desc color_success">4명 신규 합류</span>
      </div>
    </Stat>
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘"
    description="stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다."
  >
    <Stat card>
      <span class="stat_icon color_primary">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </span>
      <span class="stat_label">다운로드</span>
      <span class="stat_value">2,847</span>
      <span class="stat_desc color_success">+24%</span>
    </Stat>

    <Stat class="stat_row" card>
      <span class="stat_icon-wrap color_success" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">완료율</span>
        <div class="stat_value-row">
          <span class="stat_value">94</span>
          <span class="stat_suffix">%</span>
        </div>
      </div>
    </Stat>
  </DemoSection>

  <DemoSection
    heading-id="skin-heading"
    title="스킨"
    description="card · shadow · stat_borderless · stat_accent로 외형을 조절합니다."
  >
    <div class="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card class="stat_borderless" title="Borderless" value="456" />
      <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="그룹"
    description="stat_group으로 여러 지표를 그리드로 배치합니다."
    stack
  >
    <div class="stat_group">
      <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
      <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
      <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
      <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
    </div>

    <div class="stat_group stat_group-4 stat_group-divider stat_card stat_shadow" style="padding: var(--space-lg);">
      <Stat title="방문" value="24.5K" />
      <Stat title="페이지뷰" value="89.2K" />
      <Stat title="전환" value="1,842" />
      <Stat title="매출" value="₩12M" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="context-heading"
    title="카드 혼합"
    description="card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다."
  >
    <Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div class="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trend-color="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trend-color="success" />
          <Stat title="환불" value="42" description="+3건" trend-color="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span class="color_muted size_sm">실시간 갱신</span>
        <a href="#" class="link color_primary size_sm" @click.prevent>상세 보기</a>
      </CardFooter>
    </Card>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="statPropColumns" :rows="statProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="statSlotColumns" :rows="statSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="statClassColumns" :rows="statClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="statTokenColumns" :rows="statTokens" code-column="name" />
  </ApiSection>
</template>
