<script>
export const docMeta = {
  title: 'Date Picker | HTML Components',
  activeNav: 'date-picker',
  pageTitle: 'Date Picker',
};
</script>

<script setup>
import CalendarGroup from '@uxkm/ui/components/CalendarGroup.vue';
import Calendar from '@uxkm/ui/components/Calendar.vue';
import CalendarFooter from '@uxkm/ui/components/CalendarFooter.vue';
import CalendarHeader from '@uxkm/ui/components/CalendarHeader.vue';
import CalendarMonth from '@uxkm/ui/components/CalendarMonth.vue';
import CalendarWeekdays from '@uxkm/ui/components/CalendarWeekdays.vue';
import DatePicker from '@uxkm/ui/components/DatePicker.vue';
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Input from '@uxkm/ui/components/Input.vue';
import { juneDualDays, julyDualDays } from '@uxkm/ui/data/calendar-demo';
import {
  datePickerClassColumns,
  datePickerClasses,
  datePickerPropColumns,
  datePickerProps,
  datePickerSlotColumns,
  datePickerSlots,
  datePickerTokenColumns,
  datePickerTokens,
} from '@/doc/data/date-picker-api';

const rangeJuneDays = juneDualDays();
const rangeJulyDays = julyDualDays();
</script>

<template>
  <div class="page_intro">
  <h1>Date Picker</h1>
  <p class="lead">날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 <code>&lt;input type="date"&gt;</code>와 커스텀 트리거·캘린더 패널 <code>date_picker</code> 두 가지 유형을 제공합니다. Calendar 컴포넌트와 조합해 팝오버·인라인·기간 선택 UI를 구성합니다.</p>
</div>

  <DemoSection
    heading-id="type-heading"
    title="유형"
    description="네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다."
    stack
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
      <Input id="dp-type-native" type="date" />
      <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
      <DatePicker input-id="dp-type-custom" placeholder="날짜를 선택하세요" fit aria-label="날짜 선택" />
      <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."
  >
    <div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-basic">예약 날짜</label>
          <DatePicker input-id="dp-basic" value="2024-06-18" fit />
          <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
        </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."
    stack
  >
    <div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-size-sm">Small</label>
          <DatePicker input-id="dp-size-sm" size="sm" value="2024-06-18" fit />
        </div>
        <div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-size-md">Medium</label>
          <DatePicker input-id="dp-size-md" value="2024-06-18" fit />
        </div>
        <div class="form_field form_field_fit">
          <label class="form_field-label" for="dp-size-lg">Large</label>
          <DatePicker input-id="dp-size-lg" size="lg" value="2024-06-18" fit />
        </div>
  </DemoSection>

  <DemoSection
    heading-id="open-heading"
    title="패널 열림"
    description="is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다."
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-open">날짜</label>
      <DatePicker input-id="dp-open" value="2024-06-18" fit open>
        <template #panel>
          <Calendar no-header compact borderless aria-label="2024년 6월" weekends>
            <template #weekdays>
              <CalendarWeekdays />
            </template>
            <CalendarMonth :selected="18" :today="15" weekends />
          </Calendar>
        </template>
      </DatePicker>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="푸터 액션"
    description="calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-footer">일정 날짜</label>
      <DatePicker input-id="dp-footer" value="2024-06-18" fit open>
        <template #panel>
          <Calendar compact borderless aria-label="2024년 6월" weekends>
            <template #header>
              <CalendarHeader title="2024년 6월" />
            </template>
            <template #weekdays>
              <CalendarWeekdays />
            </template>
            <CalendarMonth :selected="18" :today="15" weekends />
            <template #footer>
              <CalendarFooter />
            </template>
          </Calendar>
        </template>
      </DatePicker>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="range-heading"
    title="기간 선택"
    description="date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."
  >
    <div class="form_field">
      <span class="form_field-label" id="dp-range-label">조회 기간</span>
      <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" aria-label="시작일" />
        <span class="date_picker_sep" aria-hidden="true">~</span>
        <DatePicker value="2024-06-18" aria-label="종료일" />
      </div>
      <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="range-panel-heading"
    title="이중 캘린더 패널"
    description="date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."
  >
    <div class="form_field">
      <span class="form_field-label" id="dp-range-panel-label">숙박 기간</span>
      <DatePicker
        block
        open
        panel-wide
        input-id="dp-range-panel-label"
        value="2024-06-10 ~ 2024-07-06"
        aria-label="숙박 기간"
        style="max-width: 20rem;"
      >
        <template #panel>
          <CalendarGroup>
            <Calendar compact borderless aria-label="2024년 6월">
              <CalendarHeader title="2024년 6월" :show-next="false" />
              <CalendarWeekdays />
              <CalendarMonth :days="rangeJuneDays" />
            </Calendar>
            <Calendar compact borderless aria-label="2024년 7월">
              <CalendarHeader title="2024년 7월" :show-prev="false" />
              <CalendarWeekdays />
              <CalendarMonth :days="rangeJulyDays" />
            </Calendar>
          </CalendarGroup>
        </template>
      </DatePicker>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="inline-heading"
    title="인라인"
    description="date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."
  >
    <DatePicker inline>
      <template #panel>
        <Calendar compact aria-label="2024년 6월" weekends>
          <template #header>
            <CalendarHeader title="2024년 6월" />
          </template>
          <template #weekdays>
            <CalendarWeekdays />
          </template>
          <CalendarMonth :selected="18" :today="15" weekends />
        </Calendar>
      </template>
    </DatePicker>
  </DemoSection>

  <DemoSection
    heading-id="clear-heading"
    title="값 초기화"
    description="date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-clear">필터 날짜</label>
      <DatePicker input-id="dp-clear" value="2024-06-18" fit clearable />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."
    stack
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-placeholder">플레이스홀더</label>
      <DatePicker input-id="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-disabled">비활성</label>
      <DatePicker input-id="dp-state-disabled" value="2024-06-18" fit disabled />
      <p class="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-error">에러</label>
      <DatePicker
        input-id="dp-state-error"
        placeholder="날짜를 선택하세요"
        fit
        error
        :aria-invalid="true"
        aria-describedby="dp-state-error-msg"
      />
      <p class="form_field-error" id="dp-state-error-msg" role="alert">날짜를 선택해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-success">성공</label>
      <DatePicker
        input-id="dp-state-success"
        value="2024-06-18"
        fit
        success
        :aria-invalid="false"
        aria-describedby="dp-state-success-msg"
      />
      <p class="form_field-success" id="dp-state-success-msg" role="status">예약 가능한 날짜입니다.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="조합 예시"
    description="form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."
  >
    <form class="form form_inline" action="#" method="get">
      <div class="form_field">
        <label class="form_field-label" for="dp-example-keyword">키워드</label>
        <Input id="dp-example-keyword" type="search" placeholder="검색어" style="min-width: 10rem;" />
      </div>
      <div class="form_field">
        <span class="form_field-label" id="dp-example-range-label">기간</span>
        <div class="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
          <DatePicker size="sm" placeholder="시작일" aria-label="시작일" style="min-width: 9rem;" />
          <span class="date_picker_sep" aria-hidden="true">~</span>
          <DatePicker placeholder="종료일" aria-label="종료일" style="min-width: 9rem;" />
        </div>
      </div>
      <div class="form_actions">
        <Button type="submit" variant="filled" color="primary" label="검색" />
        <Button type="reset" variant="ghost" label="초기화" />
      </div>
    </form>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="datePickerPropColumns" :rows="datePickerProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      <code class="typo_code">panel</code> 슬롯에 <code class="typo_code">Calendar</code> 컴포넌트를 배치합니다.
      날짜 선택 로직은 앱에서 구현합니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="datePickerSlotColumns" :rows="datePickerSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="datePickerClassColumns" :rows="datePickerClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="datePickerTokenColumns" :rows="datePickerTokens" code-column="name" />
  </ApiSection>
</template>
