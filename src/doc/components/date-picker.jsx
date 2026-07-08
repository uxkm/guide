export const docMeta = {
  title: 'Date Picker | HTML Components',
  activeNav: 'date-picker',
  pageTitle: 'Date Picker',
};

import CalendarGroup from '@/components/CalendarGroup.jsx';
import Calendar from '@/components/Calendar.jsx';
import CalendarFooter from '@/components/CalendarFooter.jsx';
import CalendarHeader from '@/components/CalendarHeader.jsx';
import CalendarMonth from '@/components/CalendarMonth.jsx';
import CalendarWeekdays from '@/components/CalendarWeekdays.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Input from '@/components/Input.jsx';
import { juneDualDays, julyDualDays } from '@/data/calendar-demo';
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

export default function DatePickerDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Date Picker</h1>
        <p className="lead">날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 <code>&lt;input type="date"&gt;</code>와 커스텀 트리거·캘린더 패널 <code>date_picker</code> 두 가지 유형을 제공합니다. Calendar 컴포넌트와 조합해 팝오버·인라인·기간 선택 UI를 구성합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다."
          stack
        >
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-type-native">네이티브 — input type="date"</label>
            <Input id="dp-type-native" type="date" />
            <p className="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-type-custom">커스텀 — date_picker</label>
            <DatePicker inputId="dp-type-custom" placeholder="날짜를 선택하세요" fit ariaLabel="날짜 선택" />
            <p className="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."
        >
          <div className="form_field form_field_fit">
                <label className="form_field-label" htmlFor="dp-basic">예약 날짜</label>
                <DatePicker inputId="dp-basic" value="2024-06-18" fit />
                <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
              </div>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."
          stack
        >
          <div className="form_field form_field_fit">
                <label className="form_field-label" htmlFor="dp-size-sm">Small</label>
                <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
              </div>
              <div className="form_field form_field_fit">
                <label className="form_field-label" htmlFor="dp-size-md">Medium</label>
                <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
              </div>
              <div className="form_field form_field_fit">
                <label className="form_field-label" htmlFor="dp-size-lg">Large</label>
                <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
              </div>
        </DemoSection>

        <DemoSection
          headingId="open-heading"
          title="패널 열림"
          description="is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다."
        >
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-open">날짜</label>
            <DatePicker inputId="dp-open" value="2024-06-18" fit open panel={(
              <>
                <Calendar noHeader compact borderless ariaLabel="2024년 6월" weekends weekdays={(
                  <>
                    <CalendarWeekdays />
                  </>
                )}>
                  <CalendarMonth selected={18} today={15} weekends />
                </Calendar>
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="footer-heading"
          title="푸터 액션"
          description="calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."
        >
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-footer">일정 날짜</label>
            <DatePicker inputId="dp-footer" value="2024-06-18" fit open panel={(
              <>
                <Calendar compact borderless ariaLabel="2024년 6월" weekends header={(
                  <>
                    <CalendarHeader title="2024년 6월" />
                  </>
                )} weekdays={(
                  <>
                    <CalendarWeekdays />
                  </>
                )} footer={(
                  <>
                    <CalendarFooter />
                  </>
                )}>
                  <CalendarMonth selected={18} today={15} weekends />
                </Calendar>
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="range-heading"
          title="기간 선택"
          description="date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."
        >
          <div className="form_field">
            <span className="form_field-label" id="dp-range-label">조회 기간</span>
            <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
              <DatePicker value="2024-06-10" ariaLabel="시작일" />
              <span className="date_picker_sep" aria-hidden={true}>~</span>
              <DatePicker value="2024-06-18" ariaLabel="종료일" />
            </div>
            <p className="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="range-panel-heading"
          title="이중 캘린더 패널"
          description="date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."
        >
          <div className="form_field">
            <span className="form_field-label" id="dp-range-panel-label">숙박 기간</span>
            <DatePicker
              block
              open
              panelWide
              inputId="dp-range-panel-label"
              value="2024-06-10 ~ 2024-07-06"
              ariaLabel="숙박 기간"
              style={{ maxWidth: '20rem' }}
              panel={(
                <>
                  <CalendarGroup>
                    <Calendar compact borderless ariaLabel="2024년 6월">
                      <CalendarHeader title="2024년 6월" showNext={false} />
                      <CalendarWeekdays />
                      <CalendarMonth days={rangeJuneDays} />
                    </Calendar>
                    <Calendar compact borderless ariaLabel="2024년 7월">
                      <CalendarHeader title="2024년 7월" showPrev={false} />
                      <CalendarWeekdays />
                      <CalendarMonth days={rangeJulyDays} />
                    </Calendar>
                  </CalendarGroup>
                </>
              )}
            />
          </div>
        </DemoSection>

        <DemoSection
          headingId="inline-heading"
          title="인라인"
          description="date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."
        >
          <DatePicker inline panel={(
            <>
              <Calendar compact ariaLabel="2024년 6월" weekends header={(
                <>
                  <CalendarHeader title="2024년 6월" />
                </>
              )} weekdays={(
                <>
                  <CalendarWeekdays />
                </>
              )}>
                <CalendarMonth selected={18} today={15} weekends />
              </Calendar>
            </>
          )} />
        </DemoSection>

        <DemoSection
          headingId="clear-heading"
          title="값 초기화"
          description="date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."
        >
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-clear">필터 날짜</label>
            <DatePicker inputId="dp-clear" value="2024-06-18" fit clearable />
          </div>
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."
          stack
        >
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-state-placeholder">플레이스홀더</label>
            <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-state-disabled">비활성</label>
            <DatePicker inputId="dp-state-disabled" value="2024-06-18" fit disabled />
            <p className="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-state-error">에러</label>
            <DatePicker
              inputId="dp-state-error"
              placeholder="날짜를 선택하세요"
              fit
              error
              ariaInvalid={true}
              ariaDescribedby="dp-state-error-msg"
            />
            <p className="form_field-error" id="dp-state-error-msg" role="alert">날짜를 선택해 주세요.</p>
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="dp-state-success">성공</label>
            <DatePicker
              inputId="dp-state-success"
              value="2024-06-18"
              fit
              success
              ariaInvalid={false}
              ariaDescribedby="dp-state-success-msg"
            />
            <p className="form_field-success" id="dp-state-success-msg" role="status">예약 가능한 날짜입니다.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="example-heading"
          title="조합 예시"
          description="form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."
        >
          <form className="form form_inline" action="#" method="get">
            <div className="form_field">
              <label className="form_field-label" htmlFor="dp-example-keyword">키워드</label>
              <Input id="dp-example-keyword" type="search" placeholder="검색어" style={{ minWidth: '10rem' }} />
            </div>
            <div className="form_field">
              <span className="form_field-label" id="dp-example-range-label">기간</span>
              <div className="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
                <DatePicker size="sm" placeholder="시작일" ariaLabel="시작일" style={{ minWidth: '9rem' }} />
                <span className="date_picker_sep" aria-hidden={true}>~</span>
                <DatePicker placeholder="종료일" ariaLabel="종료일" style={{ minWidth: '9rem' }} />
              </div>
            </div>
            <div className="form_actions">
              <Button type="submit" variant="filled" color="primary" label="검색" />
              <Button type="reset" variant="ghost" label="초기화" />
            </div>
          </form>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={datePickerPropColumns} rows={datePickerProps} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            <code className="typo_code">panel</code> 슬롯에 <code className="typo_code">Calendar</code> 컴포넌트를 배치합니다.
            날짜 선택 로직은 앱에서 구현합니다.
          </p>
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={datePickerSlotColumns} rows={datePickerSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={datePickerClassColumns} rows={datePickerClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={datePickerTokenColumns} rows={datePickerTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
