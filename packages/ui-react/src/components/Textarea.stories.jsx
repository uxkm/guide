import React from 'react';
import Button from './Button.jsx';
import FormLayout from './FormLayout.jsx';
import Input from './Input.jsx';
import Textarea from './Textarea.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  textareaClassColumns,
  textareaClasses,
  textareaEventColumns,
  textareaEvents,
  textareaPropColumns,
  textareaProps,
  textareaTokenColumns,
  textareaTokens,
} from '@doc-data/textarea-api';

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 model-value는 value · onChange로 다룹니다.',
    tables: [{ columns: textareaPropColumns, rows: textareaProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Events',
    description: 'Vue update:modelValue는 React onChange(event)에 대응합니다.',
    tables: [{ columns: textareaEventColumns, rows: textareaEvents, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: textareaClassColumns, rows: textareaClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: textareaTokenColumns, rows: textareaTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  size: 'md',
  disabled: false,
  error: false,
  placeholder: '입력하세요',
  block: false,
  rows: 3,
  value: '',
};

export default {
  title: 'Components/폼/Textarea',
  id: 'components-textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    error: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    placeholder: { control: 'text', type: { name: 'string', summary: 'string' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    rows: { control: 'number', type: { name: 'number', summary: 'number' } },
    value: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '다행 텍스트 입력을 위한하는 Textarea 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <Textarea {...args} onChange={(event) => updateArgs({ value: event.target.value })} />
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '레이블과 힌트 텍스트가 포함된 폼 필드입니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-bio">
        자기소개
      </label>
      <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
      <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-bio">
        자기소개
      </label>
      <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
      <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>,
  ),
};

export const Standalone = {
  name: '단독 사용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StandaloneExample() {
  return (
    <>
      <Textarea rows={3} placeholder="플레이스홀더" />
      <Textarea rows={3} value="입력된 내용이 여기에 표시됩니다." />
      <Textarea rows={3} placeholder="비활성" disabled />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Textarea rows={3} placeholder="플레이스홀더" />
      <Textarea rows={3} value="입력된 내용이 여기에 표시됩니다." />
      <Textarea rows={3} placeholder="비활성" disabled />
    </>,
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
          'textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-sm">
          Small
        </label>
        <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-md">
          Medium
        </label>
        <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-lg">
          Large
        </label>
        <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
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
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-sm">
          Small
        </label>
        <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-md">
          Medium
        </label>
        <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-lg">
          Large
        </label>
        <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
      </div>
    </>,
  ),
};

export const Width = {
  name: '너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-width-full">
          전체 너비
        </label>
        <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-width-fit">
          제한 너비
        </label>
        <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-width-full">
          전체 너비
        </label>
        <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-width-fit">
          제한 너비
        </label>
        <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
    </>,
  ),
};

export const Rows = {
  name: '행 수',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RowsExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-2">
          2행
        </label>
        <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-3">
          3행
        </label>
        <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-5">
          5행
        </label>
        <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-8">
          8행
        </label>
        <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
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
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-2">
          2행
        </label>
        <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-3">
          3행
        </label>
        <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-5">
          5행
        </label>
        <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-8">
          8행
        </label>
        <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
      </div>
    </>,
  ),
};

export const Resize = {
  name: '리사이즈',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ResizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-none">
          기본 (리사이즈 없음)
        </label>
        <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
        <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-vertical">
          세로
        </label>
        <Textarea
          id="textarea-resize-vertical"
          className="textarea_resize_vertical"
          rows={3}
          placeholder="textarea_resize_vertical"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-horizontal">
          가로
        </label>
        <Textarea
          id="textarea-resize-horizontal"
          className="textarea_resize_horizontal"
          rows={3}
          placeholder="textarea_resize_horizontal"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-both">
          양방향
        </label>
        <Textarea
          id="textarea-resize-both"
          className="textarea_resize_both"
          rows={3}
          placeholder="textarea_resize_both"
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
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-none">
          기본 (리사이즈 없음)
        </label>
        <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
        <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-vertical">
          세로
        </label>
        <Textarea
          id="textarea-resize-vertical"
          className="textarea_resize_vertical"
          rows={3}
          placeholder="textarea_resize_vertical"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-horizontal">
          가로
        </label>
        <Textarea
          id="textarea-resize-horizontal"
          className="textarea_resize_horizontal"
          rows={3}
          placeholder="textarea_resize_horizontal"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-both">
          양방향
        </label>
        <Textarea
          id="textarea-resize-both"
          className="textarea_resize_both"
          rows={3}
          placeholder="textarea_resize_both"
        />
      </div>
    </>,
  ),
};

export const Required = {
  name: '필수 필드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'required 속성과 form_field-required로 필수 입력을 표시합니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RequiredExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-content">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-content"
          rows={4}
          placeholder="문의 내용을 입력해 주세요"
          required
          aria-required="true"
        />
        <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-memo">
          메모
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-memo"
          size="sm"
          rows={2}
          placeholder="필수 메모"
          required
          aria-required="true"
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
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-content">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-content"
          rows={4}
          placeholder="문의 내용을 입력해 주세요"
          required
          aria-required="true"
        />
        <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-memo">
          메모
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-memo"
          size="sm"
          rows={2}
          placeholder="필수 메모"
          required
          aria-required="true"
        />
      </div>
    </>,
  ),
};

export const Count = {
  name: '글자 수 카운터',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`textarea_wrap textarea_show-count`로 textarea 우측 하단에 현재 글자 수를 표시합니다. `maxLength`와 함께 사용하면 `0/200` 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 `form_field-hint`로 글자 수 안내 문구를 함께 제공합니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function CountExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-count-basic">
        메모
      </label>
      <div className="textarea_wrap textarea_show-count">
        <Textarea
          id="textarea-count-basic"
          rows={4}
          maxLength={200}
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
        />
        <span
          className="textarea_count"
          id="textarea-count-basic-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="textarea_count_visual" aria-hidden="true">
            0/200
          </span>
          <span className="textarea_count_announcer">0자 입력, 최대 200자</span>
        </span>
      </div>
      <p className="form_field-hint" id="textarea-count-basic-hint">
        200자 이내로 작성해 주세요.
      </p>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-count-basic">
          메모
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-count-basic"
            rows={4}
            maxLength={200}
            placeholder="내용을 입력하세요"
            aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
          />
          <span
            className="textarea_count"
            id="textarea-count-basic-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              0/200
            </span>
            <span className="textarea_count_announcer">0자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-basic-hint">
          200자 이내로 작성해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-count-sm">
          Small + 카운터
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-count-sm"
            size="sm"
            rows={3}
            maxLength={100}
            placeholder="textarea_sm"
            aria-describedby="textarea-count-sm-hint textarea-count-sm-count"
          />
          <span
            className="textarea_count"
            id="textarea-count-sm-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              0/100
            </span>
            <span className="textarea_count_announcer">0자 입력, 최대 100자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-sm-hint">
          100자 이내로 작성해 주세요.
        </p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-count-fit">
          제한 너비 + 카운터
        </label>
        <div className="textarea_wrap textarea_show-count textarea_wrap_fit">
          <Textarea
            id="textarea-count-fit"
            rows={3}
            maxLength={200}
            placeholder="textarea_wrap_fit"
            value="입력된 내용이 있습니다."
            aria-describedby="textarea-count-fit-hint textarea-count-fit-count"
          />
          <span
            className="textarea_count"
            id="textarea-count-fit-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              12/200
            </span>
            <span className="textarea_count_announcer">12자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-fit-hint">
          200자 이내로 작성해 주세요.
        </p>
      </div>
    </>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.',
      },
      source: {
        code: `import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-default">
          기본
        </label>
        <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-disabled">
          비활성
        </label>
        <Textarea
          id="textarea-state-disabled"
          rows={3}
          value="수정할 수 없는 내용입니다."
          disabled
        />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-error">
          에러
        </label>
        <Textarea
          id="textarea-state-error"
          rows={3}
          error
          value="짧음"
          aria-describedby="textarea-state-error-msg"
        />
        <p className="form_field-error" id="textarea-state-error-msg" role="alert">
          10자 이상 입력해 주세요.
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
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-default">
          기본
        </label>
        <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-disabled">
          비활성
        </label>
        <Textarea
          id="textarea-state-disabled"
          rows={3}
          value="수정할 수 없는 내용입니다."
          disabled
        />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-error">
          에러
        </label>
        <Textarea
          id="textarea-state-error"
          rows={3}
          error
          value="짧음"
          aria-describedby="textarea-state-error-msg"
        />
        <p className="form_field-error" id="textarea-state-error-msg" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
    </>,
  ),
};

export const Example = {
  name: '조합 예시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxLength로 접근성을 보완합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-subject">
          제목
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="textarea-ex-subject"
          size="sm"
          value="서비스 이용 문의"
          required
          aria-required="true"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-body">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-body"
            size="sm"
            rows={5}
            maxLength={500}
            required
            error
            value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          />
          <span
            className="textarea_count is-limit"
            id="textarea-ex-body-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              6/500
            </span>
            <span className="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-body-limit">
          500자 이내로 작성해 주세요.
        </p>
        <p className="form_field-hint" id="textarea-ex-body-hint">
          구체적인 상황을 알려주시면 빠르게 답변드립니다.
        </p>
        <p className="form_field-error" id="textarea-ex-body-error" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-subject">
          제목
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="textarea-ex-subject"
          size="sm"
          value="서비스 이용 문의"
          required
          aria-required="true"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-body">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-body"
            size="sm"
            rows={5}
            maxLength={500}
            required
            error
            value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          />
          <span
            className="textarea_count is-limit"
            id="textarea-ex-body-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              6/500
            </span>
            <span className="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-body-limit">
          500자 이내로 작성해 주세요.
        </p>
        <p className="form_field-hint" id="textarea-ex-body-hint">
          구체적인 상황을 알려주시면 빠르게 답변드립니다.
        </p>
        <p className="form_field-error" id="textarea-ex-body-error" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-memo">
          추가 메모
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-memo"
            size="sm"
            className="textarea_resize_vertical is-success"
            rows={3}
            maxLength={200}
            value="참고할 내용이 있습니다."
            aria-invalid="false"
            aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"
          />
          <span
            className="textarea_count"
            id="textarea-ex-memo-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              14/200
            </span>
            <span className="textarea_count_announcer">14자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-memo-hint">
          200자 이내로 작성해 주세요.
        </p>
        <p className="form_field-success" id="textarea-ex-memo-success" role="status">
          선택 항목이 정상적으로 저장되었습니다.
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>,
  ),
};
