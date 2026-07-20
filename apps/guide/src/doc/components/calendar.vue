<script>
export const docMeta = {
  title: 'Calendar | HTML Components',
  activeNav: 'calendar',
  pageTitle: 'Calendar',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarNav from '@uxkm/ui/components/CalendarNav.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import CalendarWheel from '@uxkm/ui/components/CalendarWheel.vue';
import CalendarWheelColumn from '@uxkm/ui/components/CalendarWheelColumn.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import {
  calendarClassColumns,
  calendarClasses,
  calendarDayPropColumns,
  calendarDayProps,
  calendarFooterSlots,
  calendarGridPropColumns,
  calendarGridProps,
  calendarGridSlots,
  calendarGroupSlots,
  calendarHeaderPropColumns,
  calendarHeaderProps,
  calendarHeaderSlots,
  calendarMonthPropColumns,
  calendarMonthProps,
  calendarNavPropColumns,
  calendarNavProps,
  calendarPropColumns,
  calendarProps,
  calendarSlotColumns,
  calendarSlots,
  calendarTokenColumns,
  calendarTokens,
  calendarWeekdaysPropColumns,
  calendarWeekdaysProps,
  calendarWheelColumnPropColumns,
  calendarWheelColumnProps,
  calendarWheelPropColumns,
  calendarWheelProps,
  calendarWheelSlots,
} from '@/doc/data/calendar-api';
import {
  disabledPartialDays,
  EVENT_DAYS,
  juneDualDays,
  JUNE_WEEK_DAYS,
  JUNE_WEEK_LABEL,
  julyDualDays,
} from '@uxkm/ui/data/calendar-demo';

const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();
const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });
const wheelYears = Array.from({ length: 11 }, (_, i) => `${2019 + i}년`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const wheelDays = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
</script>

<template>
  <div class="page_intro">
    <h1>Calendar</h1>
    <p class="lead">날짜를 월·주 단위 그리드, 세로 일정 목록, iOS 스타일 휠(년·월·일)로 표시하는 캘린더 컴포넌트입니다. 다양한 레이아웃과 단일·범위 선택을 지원합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다."
  >
    <Calendar aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="no-header-heading"
    title="헤더 없음"
    description="calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다."
  >
    <Calendar no-header aria-label="2024년 6월">
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="minimal-heading"
    title="날짜만"
    description="calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다."
  >
    <Calendar minimal compact borderless aria-label="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="week-heading"
    title="주간"
    description="calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다."
    stack
  >
    <Calendar week shadow :aria-label="`2024년 ${JUNE_WEEK_LABEL}`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarWeekdays />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>

    <Calendar week compact borderless :aria-label="`2024년 ${JUNE_WEEK_LABEL} (컴팩트)`">
      <CalendarNav :label="JUNE_WEEK_LABEL" />
      <CalendarMonth week :days="JUNE_WEEK_DAYS" />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="wheel-heading"
    title="휠 (iOS 스타일)"
    description="calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다."
    stack
  >
    <CalendarWheel
      shadow
      title="날짜 선택"
      cancel-label="취소"
      confirm-label="완료"
      aria-label="날짜 휠 선택"
    >
      <CalendarWheelColumn
        label="년"
        :items="wheelYears"
        selected="2024년"
        prev-label="이전 년"
        next-label="다음 년"
      />
      <CalendarWheelColumn
        label="월"
        :items="wheelMonths"
        selected="6월"
        prev-label="이전 월"
        next-label="다음 월"
      />
      <CalendarWheelColumn
        label="일"
        :items="wheelDays"
        selected="15일"
        prev-label="이전 일"
        next-label="다음 일"
      />
    </CalendarWheel>

    <CalendarWheel borderless footer aria-label="날짜 휠 선택 (하단 버튼)" :toolbar="false">
      <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" prev-label="이전 년" next-label="다음 년" />
      <CalendarWheelColumn label="월" :items="['6월']" selected="6월" prev-label="이전 월" next-label="다음 월" />
      <CalendarWheelColumn label="일" :items="['15일']" selected="15일" prev-label="이전 일" next-label="다음 일" />
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" />
        <Button variant="filled" color="primary" size="sm" label="확인" />
      </template>
    </CalendarWheel>

    <CalendarGroup class="calendar_group-center">
      <CalendarWheel shadow title="년도" aria-label="년도 선택">
        <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" prev-label="이전 년" next-label="다음 년" />
      </CalendarWheel>
      <CalendarWheel shadow title="년·월" aria-label="년·월 선택" :toolbar="true">
        <template #toolbar>
          <span class="calendar_wheel-title">년·월</span>
        </template>
        <CalendarWheelColumn label="년" :items="['2024년']" selected="2024년" :show-steps="false" />
        <CalendarWheelColumn label="월" :items="['6월']" selected="6월" :show-steps="false" />
      </CalendarWheel>
      <CalendarWheel shadow title="월·일" aria-label="월·일 선택" :toolbar="true">
        <template #toolbar>
          <span class="calendar_wheel-title">월·일</span>
        </template>
        <CalendarWheelColumn label="월" :items="['6월']" selected="6월" :show-steps="false" />
        <CalendarWheelColumn label="일" :items="['15일']" selected="15일" :show-steps="false" />
      </CalendarWheel>
    </CalendarGroup>
  </DemoSection>

  <DemoSection
    heading-id="range-heading"
    title="범위 선택"
    description="is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다."
  >
    <Calendar aria-label="2024년 6월 범위 선택">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :range-start="10" :range-end="18" />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="event-heading"
    title="이벤트 마커"
    description="has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다."
  >
    <Calendar weekends aria-label="2024년 6월 이벤트">
      <template #header>
        <CalendarHeader title="2024년 6월" :show-nav="false" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :events="EVENT_DAYS" weekends />
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="skin-heading"
    title="스킨"
    description="calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다."
  >
    <CalendarGroup>
      <Calendar borderless aria-label="Borderless">
        <template #header>
          <CalendarHeader title="Borderless" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
      </Calendar>
      <Calendar ghost aria-label="Ghost">
        <template #header>
          <CalendarHeader title="Ghost" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
      </Calendar>
      <Calendar shadow aria-label="Shadow">
        <template #header>
          <CalendarHeader title="Shadow" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="8" :selected="10" />
      </Calendar>
    </CalendarGroup>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다."
  >
    <CalendarGroup>
      <Calendar size="sm" aria-label="Small">
        <template #header>
          <CalendarHeader title="Small" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
      </Calendar>
      <Calendar compact aria-label="Compact">
        <template #header>
          <CalendarHeader title="Compact" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
      </Calendar>
      <Calendar size="lg" aria-label="Large">
        <template #header>
          <CalendarHeader title="Large" :show-nav="false" />
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :partial="14" :today="7" :selected="9" />
      </Calendar>
    </CalendarGroup>
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="푸터"
    description="calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다."
  >
    <Calendar shadow aria-label="2024년 6월 푸터 포함">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
      <template #footer>
        <CalendarFooter />
      </template>
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="dual-heading"
    title="이중 패널"
    description="calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다."
  >
    <CalendarGroup>
      <Calendar compact shadow weekends aria-label="2024년 6월">
        <template #header>
          <div class="calendar_header">
            <Button variant="ghost" size="sm" icon-only aria-label="이전 달">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </template>
            </Button>
            <span class="calendar_title">2024년 6월</span>
          </div>
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJuneDays" weekends />
      </Calendar>
      <Calendar compact shadow weekends aria-label="2024년 7월">
        <template #header>
          <div class="calendar_header">
            <span class="calendar_title">2024년 7월</span>
            <Button variant="ghost" size="sm" icon-only aria-label="다음 달">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </template>
            </Button>
          </div>
        </template>
        <template #weekdays>
          <CalendarWeekdays />
        </template>
        <CalendarMonth :days="dualJulyDays" weekends />
      </Calendar>
    </CalendarGroup>
  </DemoSection>

  <DemoSection
    heading-id="agenda-heading"
    title="세로 일정"
    description="calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다."
    stack
  >
    <Calendar agenda shadow role="feed" aria-label="2024년 6월 일정">
      <template #header>
        <CalendarHeader title="6월 14일 ~ 20일" prev-label="이전 주" next-label="다음 주" />
      </template>
      <ol class="calendar_agenda-list">
        <li class="calendar_agenda-day">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">금</span>
            <span class="calendar_agenda-daynum">14</span>
          </div>
          <div class="calendar_agenda-body">
            <ul class="calendar_agenda-events">
              <li class="calendar_agenda-event color_primary">
                <span class="calendar_agenda-event-time">14:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">디자인 리뷰</span>
                  <span class="calendar_agenda-event-desc">컴포넌트 가이드 UI 시안 검토</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="calendar_agenda-day is-saturday is-today" aria-current="date">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">토</span>
            <span class="calendar_agenda-daynum">15</span>
          </div>
          <div class="calendar_agenda-body">
            <ul class="calendar_agenda-events">
              <li class="calendar_agenda-event color_success">
                <span class="calendar_agenda-event-time">09:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">팀 스탠드업</span>
                  <span class="calendar_agenda-event-desc">주간 진행 상황 공유</span>
                </div>
              </li>
              <li class="calendar_agenda-event color_warning">
                <span class="calendar_agenda-event-time">15:30</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">QA 일정 점검</span>
                  <span class="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span>
                  <div class="calendar_agenda-event-meta">
                    <span class="tag tag_sm color_warning">진행 중</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="calendar_agenda-day is-sunday is-empty">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">일</span>
            <span class="calendar_agenda-daynum">16</span>
          </div>
          <div class="calendar_agenda-body">
            <p class="calendar_agenda-empty">일정 없음</p>
          </div>
        </li>
        <li class="calendar_agenda-day is-selected" aria-selected="true">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">월</span>
            <span class="calendar_agenda-daynum">17</span>
          </div>
          <div class="calendar_agenda-body">
            <ul class="calendar_agenda-events">
              <li class="calendar_agenda-event color_primary">
                <span class="calendar_agenda-event-time">10:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">기획 회의</span>
                  <span class="calendar_agenda-event-desc">3분기 로드맵 논의</span>
                </div>
              </li>
              <li class="calendar_agenda-event color_info">
                <span class="calendar_agenda-event-time">13:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">점심 미팅</span>
                  <span class="calendar_agenda-event-desc">파트너사 담당자</span>
                </div>
              </li>
              <li class="calendar_agenda-event color_danger">
                <span class="calendar_agenda-event-time">18:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">배포 마감</span>
                  <span class="calendar_agenda-event-desc">v2.4.0 릴리스</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="calendar_agenda-day">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">화</span>
            <span class="calendar_agenda-daynum">18</span>
          </div>
          <div class="calendar_agenda-body">
            <ul class="calendar_agenda-events">
              <li class="calendar_agenda-event color_success">
                <span class="calendar_agenda-event-time">종일</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">워크숍</span>
                  <span class="calendar_agenda-event-desc">디자인 시스템 심화 과정</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </Calendar>

    <Calendar agenda borderless class="calendar_agenda_compact" role="feed" aria-label="2024년 6월 15일 일정 (컴팩트)">
      <template #header>
        <CalendarHeader title="6월 15일 (토)" :show-nav="false" />
      </template>
      <ol class="calendar_agenda-list">
        <li class="calendar_agenda-day is-saturday is-today" aria-current="date">
          <div class="calendar_agenda-date">
            <span class="calendar_agenda-weekday">토</span>
            <span class="calendar_agenda-daynum">15</span>
          </div>
          <div class="calendar_agenda-body">
            <ul class="calendar_agenda-events">
              <li class="calendar_agenda-event color_primary">
                <span class="calendar_agenda-event-time">09:00</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">팀 스탠드업</span>
                  <span class="calendar_agenda-event-desc">15분 · Zoom</span>
                </div>
              </li>
              <li class="calendar_agenda-event color_warning">
                <span class="calendar_agenda-event-time">15:30</span>
                <div class="calendar_agenda-event-main">
                  <span class="calendar_agenda-event-title">QA 점검</span>
                  <span class="calendar_agenda-event-desc">회의실 B</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </Calendar>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다."
    stack
  >
    <Calendar readonly aria-label="읽기 전용 캘린더">
      <template #header>
        <CalendarHeader title="읽기 전용" :show-nav="false" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :partial="14" :today="7" :selected="9" readonly />
    </Calendar>

    <Calendar disabled aria-label="비활성 캘린더">
      <template #header>
        <CalendarHeader title="비활성" :show-nav="false" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth :days="disabledDays" />
    </Calendar>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Calendar Props">
    <ApiTable :columns="calendarPropColumns" :rows="calendarProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-header-props-heading" title="API · CalendarHeader Props">
    <ApiTable :columns="calendarHeaderPropColumns" :rows="calendarHeaderProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-nav-props-heading" title="API · CalendarNav Props">
    <ApiTable :columns="calendarNavPropColumns" :rows="calendarNavProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-weekdays-props-heading" title="API · CalendarWeekdays Props">
    <ApiTable :columns="calendarWeekdaysPropColumns" :rows="calendarWeekdaysProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-month-props-heading" title="API · CalendarMonth Props">
    <ApiTable :columns="calendarMonthPropColumns" :rows="calendarMonthProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      <code class="typo_code">CalendarMonth</code>는 <code class="typo_code">CalendarGrid</code> + <code class="typo_code">CalendarDay</code>를 묶는 편의 컴포넌트입니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-grid-props-heading" title="API · CalendarGrid Props">
    <ApiTable :columns="calendarGridPropColumns" :rows="calendarGridProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-day-props-heading" title="API · CalendarDay Props">
    <ApiTable :columns="calendarDayPropColumns" :rows="calendarDayProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wheel-props-heading" title="API · CalendarWheel Props">
    <ApiTable :columns="calendarWheelPropColumns" :rows="calendarWheelProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-wheel-col-props-heading" title="API · CalendarWheelColumn Props">
    <ApiTable :columns="calendarWheelColumnPropColumns" :rows="calendarWheelColumnProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Calendar Slots">
    <ApiTable :columns="calendarSlotColumns" :rows="calendarSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-header-slots-heading" title="API · CalendarHeader · Footer · Group Slots">
    <ApiTable :columns="calendarSlotColumns" :rows="calendarHeaderSlots" code-column="name" />
    <ApiTable :columns="calendarSlotColumns" :rows="calendarFooterSlots" code-column="name" style="margin-top: var(--space-md);" />
    <ApiTable :columns="calendarSlotColumns" :rows="calendarGroupSlots" code-column="name" style="margin-top: var(--space-md);" />
  </ApiSection>

  <ApiSection heading-id="api-grid-slots-heading" title="API · CalendarGrid · CalendarWheel Slots">
    <ApiTable :columns="calendarSlotColumns" :rows="calendarGridSlots" code-column="name" />
    <ApiTable :columns="calendarSlotColumns" :rows="calendarWheelSlots" code-column="name" style="margin-top: var(--space-md);" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="calendarClassColumns" :rows="calendarClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="calendarTokenColumns" :rows="calendarTokens" code-column="name" />
  </ApiSection>
</template>
