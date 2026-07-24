import React, { useState } from 'react';
import Button from './Button.jsx';
import DatePicker from './DatePicker.jsx';
import Input from './Input.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  DemoCalendar,
  DemoCalendarGroup,
  juneRangePanel,
} from '../storybook/date-picker-demo-panel.jsx';
import {
  datePickerClassColumns,
  datePickerClasses,
  datePickerPropColumns,
  datePickerProps,
  datePickerTokenColumns,
  datePickerTokens,
} from '@doc-data/date-picker-api';

const datePickerChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const datePickerChildren = [
  {
    name: 'panel',
    description: '캘린더 패널 콘텐츠 (Vue #panel 슬롯 대응)',
  },
  {
    name: 'children',
    description: 'panel prop 대체. Calendar 등 패널 콘텐츠',
  },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: panel-wide, input-id)와 동일한 의미입니다.',
    tables: [{ columns: datePickerPropColumns, rows: datePickerProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue #panel 슬롯에 대응하는 React panel·children prop입니다.',
    tables: [{ columns: datePickerChildColumns, rows: datePickerChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: datePickerClassColumns, rows: datePickerClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: datePickerTokenColumns, rows: datePickerTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  size: 'md',
  disabled: false,
  error: false,
  success: false,
  open: false,
  placeholder: '날짜를 선택하세요',
  value: '2024-06-18',
  fit: true,
  block: false,
  inline: false,
  clearable: false,
  panelWide: false,
  inputId: 'dp-playground',
  ariaLabel: '날짜 선택',
};

const { juneDays: rangeJuneDays, julyDays: rangeJulyDays } = juneRangePanel();

export default {
  title: 'Components/폼/DatePicker',
  id: 'components-date-picker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    error: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    success: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    open: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    placeholder: { control: 'text', type: { name: 'string', summary: 'string' } },
    value: { control: 'text', type: { name: 'string', summary: 'string' } },
    fit: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    inline: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    clearable: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    panelWide: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    inputId: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
    docs: {
      description: {
        component:
          '읽기 전용 입력과 캘린더 버튼으로 날짜를 고르는 트리거입니다. 패널에는 Calendar 등을 조합합니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <DatePicker
      {...args}
      onClear={() => updateArgs({ value: '' })}
      onCalendarClick={() => updateArgs({ open: !args.open })}
      panel={
        args.open || args.inline ? (
          <DemoCalendar
            noHeader
            compact
            borderless
            weekends
            ariaLabel="2024년 6월"
            selected={18}
            today={15}
          />
        ) : null
      }
    />
  ),
};

export const Type = {
  name: '유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </>,
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </>,
  ),
};

export const Open = {
  name: '패널 열림',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </div>,
  ),
};

export const Footer = {
  name: '푸터 액션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </div>,
  ),
};

export const Range = {
  name: '기간 선택',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </div>,
  ),
};

export const RangePanel = {
  name: '이중 캘린더 패널',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </div>,
  ),
};

export const Inline = {
  name: '인라인',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function InlineExample() {
  return (
    <DatePicker inline>
      {/* Calendar panel */}
    </DatePicker>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    />,
  ),
};

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

export const Clear = {
  name: '값 초기화',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<ClearDemo />),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다.',
      },
      source: {
        code: `import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </>,
  ),
};

export const Example = {
  name: '조합 예시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'form_inline과 date_picker_range를 조합한 검색 필터 폼입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

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
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
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
    </form>,
  ),
};
