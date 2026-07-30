export const docMeta = {
  title: 'Date Picker | UXKM Guide',
  activeNav: 'date-picker',
  pageTitle: 'Date Picker',
};

import React, { useState } from 'react';
import Button from '@/components/Button.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import Input from '@/components/Input.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  DemoCalendar,
  DemoCalendarGroup,
  juneRangePanel,
} from '@/components/date-picker-demo-panel.jsx';
import {
  datePickerChildColumns,
  datePickerChildren,
  datePickerClassColumns,
  datePickerClasses,
  datePickerPropColumns,
  datePickerProps,
  datePickerTokenColumns,
  datePickerTokens,
} from '@/doc/data/date-picker-api';

const { juneDays: rangeJuneDays, julyDays: rangeJulyDays } = juneRangePanel();

function ClearDemo() {
  const [value, setValue] = useState('2024-06-18');
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-clear">
        필터 날짜
      </label>
      <DatePicker
        inputId="dp-clear"
        value={value}
        fit
        clearable
        onClear={() => setValue('')}
      />
    </div>
  );
}

const typeCode = `import DatePicker from '@/components/DatePicker.jsx';
import Input from '@/components/Input.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-native">
          네이티브 — input type="date"
        </label>
        <Input id="dp-type-native" type="date" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-custom">
          커스텀 — date_picker
        </label>
        <DatePicker
          inputId="dp-type-custom"
          placeholder="날짜를 선택하세요"
          fit
          ariaLabel="날짜 선택"
        />
      </div>
    </>
  );
}`;
const basicCode = `import DatePicker from '@/components/DatePicker.jsx';

export function BasicExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>
  );
}`;
const sizeCode = `import DatePicker from '@/components/DatePicker.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-sm">
          Small
        </label>
        <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-md">
          Medium
        </label>
        <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-lg">
          Large
        </label>
        <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>
    </>
  );
}`;
const openCode = `import DatePicker from '@/components/DatePicker.jsx';
// Calendar 계열은 React 마이그레이션 후 panel에 조합합니다.

export function OpenExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-open">
        날짜
      </label>
      <DatePicker inputId="dp-open" value="2024-06-18" fit open>
        {/* Calendar panel */}
      </DatePicker>
    </div>
  );
}`;
const footerCode = `import DatePicker from '@/components/DatePicker.jsx';

export function FooterExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-footer">
        일정 날짜
      </label>
      <DatePicker inputId="dp-footer" value="2024-06-18" fit open>
        {/* Calendar + CalendarFooter */}
      </DatePicker>
    </div>
  );
}`;
const rangeCode = `import DatePicker from '@/components/DatePicker.jsx';

export function RangeExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="dp-range-label">
        조회 기간
      </span>
      <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" ariaLabel="시작일" />
        <span className="date_picker_sep" aria-hidden="true">
          ~
        </span>
        <DatePicker value="2024-06-18" ariaLabel="종료일" />
      </div>
    </div>
  );
}`;
const rangePanelCode = `import DatePicker from '@/components/DatePicker.jsx';

export function RangePanelExample() {
  return (
    <DatePicker
      block
      open
      panelWide
      value="2024-06-10 ~ 2024-07-06"
      ariaLabel="숙박 기간"
      style={{ maxWidth: '20rem' }}
    >
      {/* CalendarGroup + dual Calendar */}
    </DatePicker>
  );
}`;
const inlineCode = `import DatePicker from '@/components/DatePicker.jsx';

export function InlineExample() {
  return (
    <DatePicker inline>
      {/* Calendar panel */}
    </DatePicker>
  );
}`;
const clearCode = `import DatePicker from '@/components/DatePicker.jsx';
import { useState } from 'react';

export function ClearExample() {
  const [value, setValue] = useState('2024-06-18');
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-clear">
        필터 날짜
      </label>
      <DatePicker
        inputId="dp-clear"
        value={value}
        fit
        clearable
        onClear={() => setValue('')}
      />
    </div>
  );
}`;
const stateCode = `import DatePicker from '@/components/DatePicker.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-placeholder">
          플레이스홀더
        </label>
        <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-error">
          에러
        </label>
        <DatePicker
          inputId="dp-state-error"
          placeholder="날짜를 선택하세요"
          fit
          error
          ariaInvalid
          aria-describedby="dp-state-error-msg"
        />
        <p className="form_field-error" id="dp-state-error-msg" role="alert">
          날짜를 선택해 주세요.
        </p>
      </div>
    </>
  );
}`;
const exampleCode = `import Button from '@/components/Button.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import Input from '@/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_inline" action="#" method="get">
      <div className="form_field">
        <label className="form_field-label" htmlFor="dp-example-keyword">
          키워드
        </label>
        <Input
          id="dp-example-keyword"
          type="search"
          placeholder="검색어"
          style={{ minWidth: '10rem' }}
        />
      </div>
      <div className="form_field">
        <span className="form_field-label" id="dp-example-range-label">
          기간
        </span>
        <div
          className="date_picker_range"
          role="group"
          aria-labelledby="dp-example-range-label"
        >
          <DatePicker
            size="sm"
            placeholder="시작일"
            ariaLabel="시작일"
            style={{ minWidth: '9rem' }}
          />
          <span className="date_picker_sep" aria-hidden="true">
            ~
          </span>
          <DatePicker placeholder="종료일" ariaLabel="종료일" style={{ minWidth: '9rem' }} />
        </div>
      </div>
      <div className="form_actions">
        <Button type="submit" variant="filled" color="primary" label="검색" />
        <Button type="reset" variant="ghost" label="초기화" />
      </div>
    </form>
  );
}`;

export default function DatePickerDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Date Picker</h1>
        <p className="lead">날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 <code>&lt;input type=&quot;date&quot;&gt;</code>와 커스텀 트리거·캘린더 패널 <code>date_picker</code> 두 가지 유형을 제공합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="네이티브 input type=&quot;date&quot;는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다."
          stack
          code={typeCode}
        >
<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-native">
          네이티브 — input type="date"
        </label>
        <Input id="dp-type-native" type="date" />
        <p className="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-custom">
          커스텀 — date_picker
        </label>
        <DatePicker
          inputId="dp-type-custom"
          placeholder="날짜를 선택하세요"
          fit
          ariaLabel="날짜 선택"
        />
        <p className="form_field-hint">
          커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.
        </p>
      </div>
    </>
        </DemoSection>
        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."
          code={basicCode}
        >
<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>
        </DemoSection>
        <DemoSection
          headingId="size-heading"
          title="크기"
          description="date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."
          stack
          code={sizeCode}
        >
<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-sm">
          Small
        </label>
        <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-md">
          Medium
        </label>
        <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-lg">
          Large
        </label>
        <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>
    </>
        </DemoSection>
        <DemoSection
          headingId="open-heading"
          title="패널 열림"
          description="is-open 클래스와 aria-expanded=&quot;true&quot;로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다."
          code={openCode}
        >
<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-open">
        날짜
      </label>
      <DatePicker
        inputId="dp-open"
        value="2024-06-18"
        fit
        open
        panel={
          <DemoCalendar
            noHeader
            compact
            borderless
            weekends
            ariaLabel="2024년 6월"
            selected={18}
            today={15}
          />
        }
      />
    </div>
        </DemoSection>
        <DemoSection
          headingId="footer-heading"
          title="푸터 액션"
          description="calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."
          code={footerCode}
        >
<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-footer">
        일정 날짜
      </label>
      <DatePicker
        inputId="dp-footer"
        value="2024-06-18"
        fit
        open
        panel={
          <DemoCalendar
            compact
            borderless
            weekends
            ariaLabel="2024년 6월"
            title="2024년 6월"
            selected={18}
            today={15}
            showFooter
          />
        }
      />
    </div>
        </DemoSection>
        <DemoSection
          headingId="range-heading"
          title="기간 선택"
          description="date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."
          code={rangeCode}
        >
<div className="form_field">
      <span className="form_field-label" id="dp-range-label">
        조회 기간
      </span>
      <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" ariaLabel="시작일" />
        <span className="date_picker_sep" aria-hidden="true">
          ~
        </span>
        <DatePicker value="2024-06-18" ariaLabel="종료일" />
      </div>
      <p className="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>
        </DemoSection>
        <DemoSection
          headingId="range-panel-heading"
          title="이중 캘린더 패널"
          description="date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."
          code={rangePanelCode}
        >
<div className="form_field">
      <span className="form_field-label" id="dp-range-panel-label">
        숙박 기간
      </span>
      <DatePicker
        block
        open
        panelWide
        inputId="dp-range-panel-label"
        value="2024-06-10 ~ 2024-07-06"
        ariaLabel="숙박 기간"
        style={{ maxWidth: '20rem' }}
        panel={
          <DemoCalendarGroup>
            <DemoCalendar
              compact
              borderless
              ariaLabel="2024년 6월"
              title="2024년 6월"
              showNext={false}
              days={rangeJuneDays}
            />
            <DemoCalendar
              compact
              borderless
              ariaLabel="2024년 7월"
              title="2024년 7월"
              showPrev={false}
              days={rangeJulyDays}
            />
          </DemoCalendarGroup>
        }
      />
    </div>
        </DemoSection>
        <DemoSection
          headingId="inline-heading"
          title="인라인"
          description="date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."
          code={inlineCode}
        >
<DatePicker
      inline
      panel={
        <DemoCalendar
          compact
          weekends
          ariaLabel="2024년 6월"
          title="2024년 6월"
          selected={18}
          today={15}
        />
      }
    />
        </DemoSection>
        <DemoSection
          headingId="clear-heading"
          title="값 초기화"
          description="date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."
          code={clearCode}
        >
<ClearDemo />
        </DemoSection>
        <DemoSection
          headingId="state-heading"
          title="상태"
          description="is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."
          stack
          code={stateCode}
        >
<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-placeholder">
          플레이스홀더
        </label>
        <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-disabled">
          비활성
        </label>
        <DatePicker inputId="dp-state-disabled" value="2024-06-18" fit disabled />
        <p className="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-error">
          에러
        </label>
        <DatePicker
          inputId="dp-state-error"
          placeholder="날짜를 선택하세요"
          fit
          error
          ariaInvalid
          aria-describedby="dp-state-error-msg"
        />
        <p className="form_field-error" id="dp-state-error-msg" role="alert">
          날짜를 선택해 주세요.
        </p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-success">
          성공
        </label>
        <DatePicker
          inputId="dp-state-success"
          value="2024-06-18"
          fit
          success
          ariaInvalid={false}
          aria-describedby="dp-state-success-msg"
        />
        <p className="form_field-success" id="dp-state-success-msg" role="status">
          예약 가능한 날짜입니다.
        </p>
      </div>
    </>
        </DemoSection>
        <DemoSection
          headingId="example-heading"
          title="조합 예시"
          description="form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."
          code={exampleCode}
        >
<form className="form form_inline" action="#" method="get">
      <div className="form_field">
        <label className="form_field-label" htmlFor="dp-example-keyword">
          키워드
        </label>
        <Input
          id="dp-example-keyword"
          type="search"
          placeholder="검색어"
          style={{ minWidth: '10rem' }}
        />
      </div>
      <div className="form_field">
        <span className="form_field-label" id="dp-example-range-label">
          기간
        </span>
        <div className="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
          <DatePicker
            size="sm"
            placeholder="시작일"
            ariaLabel="시작일"
            style={{ minWidth: '9rem' }}
          />
          <span className="date_picker_sep" aria-hidden="true">
            ~
          </span>
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

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={datePickerChildColumns} rows={datePickerChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={datePickerClassColumns} rows={datePickerClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={datePickerTokenColumns} rows={datePickerTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
