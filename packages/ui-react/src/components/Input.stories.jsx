import React from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Input from './Input.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  inputClassColumns,
  inputClasses,
  inputEventColumns,
  inputEvents,
  inputPropColumns,
  inputProps,
  inputTokenColumns,
  inputTokens,
} from '@doc-data/input-api';

const inputChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const inputChildren = [
  { name: 'prefix', description: '앞쪽 애드온 (Vue #prefix 슬롯 → input_group-addon)' },
  { name: 'suffix', description: '뒤쪽 애드온 (Vue #suffix 슬롯 → input_group-addon)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 model-value는 value · defaultValue · onChange로 다룹니다.',
    tables: [{ columns: inputPropColumns, rows: inputProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue 슬롯(prefix · suffix)에 대응하는 React prop입니다.',
    tables: [{ columns: inputChildColumns, rows: inputChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · Events',
    description: 'Vue update:modelValue는 React onChange에 대응합니다.',
    tables: [{ columns: inputEventColumns, rows: inputEvents, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: inputClassColumns, rows: inputClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: inputTokenColumns, rows: inputTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  size: 'md',
  disabled: false,
  error: false,
  placeholder: '입력하세요',
  type: 'text',
  block: false,
  value: '',
};

function ClearButton({ hidden = true }) {
  return (
    <Button
      className="input_clear"
      variant="text"
      color="muted"
      ripple={false}
      ariaLabel="입력 지우기"
      iconOnly
      hidden={hidden}
      iconBefore={<Icon name="close" />}
    />
  );
}

export default {
  title: 'Components/폼/Input',
  id: 'components-input',
  component: Input,
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      type: {
        name: 'enum',
        summary: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
      },
    },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    value: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '텍스트·숫자·검색 등 한 줄 입력을 위한 필드 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <Input
      {...args}
      onChange={(event) => updateArgs({ value: event.target.value })}
    />
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '레이블과 힌트 텍스트가 포함된 폼 필드입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="input-name">
        이름
      </label>
      <div className="input_clearable">
        <Input id="input-name" placeholder="이름을 입력하세요" />
        <Button
          className="input_clear"
          variant="text"
          color="muted"
          ripple={false}
          ariaLabel="입력 지우기"
          iconOnly
          hidden
          iconBefore={<Icon name="close" />}
        />
      </div>
      <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="form_field">
      <label className="form_field-label" htmlFor="input-name">
        이름
      </label>
      <div className="input_clearable">
        <Input id="input-name" placeholder="이름을 입력하세요" />
        <ClearButton />
      </div>
      <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
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
          'form_field 래퍼 없이 `input_field`로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 `label.form_field-label` + `htmlFor`를, 아이콘만 있는 검색창·툴바 등에는 `label.input_group`으로 input을 감싸고 `input_group-label_hidden`으로 이름을 제공합니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function StandaloneExample() {
  return (
    <>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-placeholder">
          검색어
        </label>
        <div className="input_clearable">
          <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
          {/* ClearButton */}
        </div>
      </div>
      <Input
        type="search"
        placeholder="검색어를 입력하세요"
        aria-label="검색"
        prefix={<Icon name="search" size="sm" />}
      />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-placeholder">
          검색어
        </label>
        <div className="input_clearable">
          <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
          <ClearButton />
        </div>
      </div>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-value">
          닉네임
        </label>
        <div className="input_clearable">
          <Input id="input-standalone-value" defaultValue="입력된 값" />
          <ClearButton hidden={false} />
        </div>
      </div>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-disabled">
          코드
        </label>
        <Input id="input-standalone-disabled" placeholder="비활성" disabled />
      </div>
      <Input
        type="search"
        placeholder="검색어를 입력하세요"
        aria-label="검색"
        prefix={<Icon name="search" size="sm" />}
      />
      <p className="form_field-hint">
        아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에
        보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.
      </p>
    </>,
  ),
};

export const Type = {
  name: '입력 타입',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class="input"은 모든 타입에 공통으로 사용합니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-text">
          텍스트
        </label>
        <Input id="input-type-text" placeholder="일반 텍스트" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-password">
          비밀번호
        </label>
        <Input
          id="input-type-password"
          type="password"
          placeholder="8자 이상"
          autoComplete="new-password"
        />
      </div>
      {/* email · tel · url · search · number · date · time */}
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
        <label className="form_field-label" htmlFor="input-type-text">
          텍스트
        </label>
        <Input id="input-type-text" placeholder="일반 텍스트" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-password">
          비밀번호
        </label>
        <Input
          id="input-type-password"
          type="password"
          placeholder="8자 이상"
          autoComplete="new-password"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-email">
          이메일
        </label>
        <Input
          id="input-type-email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-tel">
          전화번호
        </label>
        <Input
          id="input-type-tel"
          type="tel"
          placeholder="010-0000-0000"
          autoComplete="tel"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-url">
          URL
        </label>
        <Input id="input-type-url" type="url" placeholder="https://example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-search">
          검색
        </label>
        <Input id="input-type-search" type="search" placeholder="키워드 검색" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-number">
          숫자
        </label>
        <Input id="input-type-number" type="number" placeholder="0" min={0} max={100} step={1} />
        <p className="form_field-hint">0~100 사이 정수</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-date">
          날짜
        </label>
        <Input id="input-type-date" type="date" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-time">
          시간
        </label>
        <Input id="input-type-time" type="time" />
      </div>
    </>,
  ),
};

export const Kind = {
  name: '입력 종류',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function KindExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="input-kind-card-1">
        카드번호
      </label>
      <div
        className="input_split"
        role="group"
        aria-labelledby="input-kind-card-1"
        data-input-split=""
        data-input-numeric=""
      >
        <Input
          id="input-kind-card-1"
          inputMode="numeric"
          maxLength={4}
          autoComplete="cc-number"
          aria-label="카드번호 1~4자리"
          placeholder="0000"
        />
        {/* … */}
      </div>
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
        <label className="form_field-label" htmlFor="input-kind-card-1">
          카드번호
        </label>
        <div
          className="input_split"
          role="group"
          aria-labelledby="input-kind-card-1"
          data-input-split=""
          data-input-numeric=""
        >
          <Input
            id="input-kind-card-1"
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-number"
            aria-label="카드번호 1~4자리"
            placeholder="0000"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-number"
            aria-label="카드번호 5~8자리"
            placeholder="0000"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            type="password"
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-number"
            aria-label="카드번호 9~12자리"
            placeholder="0000"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            type="password"
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-number"
            aria-label="카드번호 13~16자리"
            placeholder="0000"
          />
        </div>
        <p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
      </div>
      <div className="input_row">
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-kind-exp-mm">
            유효기간
          </label>
          <div
            className="input_split"
            role="group"
            aria-label="카드 유효기간"
            data-input-split=""
            data-input-numeric=""
          >
            <Input
              id="input-kind-exp-mm"
              inputMode="numeric"
              maxLength={2}
              autoComplete="cc-exp-month"
              aria-label="월(MM)"
              placeholder="MM"
            />
            <span className="input_split_sep" aria-hidden="true">
              /
            </span>
            <Input
              inputMode="numeric"
              maxLength={2}
              autoComplete="cc-exp-year"
              aria-label="년(YY)"
              placeholder="YY"
            />
          </div>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-kind-cvc">
            CVC
          </label>
          <Input
            id="input-kind-cvc"
            type="password"
            inputMode="numeric"
            maxLength={3}
            autoComplete="cc-csc"
            placeholder="000"
            aria-describedby="input-kind-cvc-hint"
          />
          <p className="form_field-hint" id="input-kind-cvc-hint">
            카드 뒷면 3자리
          </p>
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" id="input-kind-otp-label">
          인증번호 (OTP)
        </label>
        <div
          className="input_otp"
          role="group"
          aria-labelledby="input-kind-otp-label"
          data-input-otp=""
        >
          <Input inputMode="numeric" maxLength={1} autoComplete="one-time-code" aria-label="인증번호 1자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 2자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 3자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 4자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 5자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 6자리" />
        </div>
        <p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-phone">
          휴대폰 번호
        </label>
        <div className="input_group">
          <span className="input_group-addon">+82</span>
          <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autoComplete="tel" />
          <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-sms-code">
          휴대폰 인증번호
        </label>
        <div className="input_group">
          <Input
            id="input-kind-sms-code"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            placeholder="6자리 인증번호"
            aria-describedby="input-kind-sms-hint"
          />
          <span className="input_group-addon" aria-hidden="true">
            03:00
          </span>
          <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
        </div>
        <p className="form_field-hint" id="input-kind-sms-hint">
          인증번호가 오지 않으면 재요청해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-rrn-1">
          주민등록번호
        </label>
        <div
          className="input_split"
          role="group"
          aria-labelledby="input-kind-rrn-1"
          data-input-split=""
          data-input-numeric=""
        >
          <Input
            id="input-kind-rrn-1"
            inputMode="numeric"
            maxLength={6}
            aria-label="주민등록번호 앞 6자리"
            placeholder="000000"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            type="password"
            inputMode="numeric"
            maxLength={7}
            aria-label="주민등록번호 뒤 7자리"
            placeholder="0000000"
          />
        </div>
        <p className="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-biz-1">
          사업자등록번호
        </label>
        <div
          className="input_split"
          role="group"
          aria-labelledby="input-kind-biz-1"
          data-input-split=""
          data-input-numeric=""
        >
          <Input
            id="input-kind-biz-1"
            inputMode="numeric"
            maxLength={3}
            aria-label="사업자등록번호 앞 3자리"
            placeholder="000"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            inputMode="numeric"
            maxLength={2}
            aria-label="사업자등록번호 중간 2자리"
            placeholder="00"
          />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input
            inputMode="numeric"
            maxLength={5}
            aria-label="사업자등록번호 뒤 5자리"
            placeholder="00000"
          />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-account-bank">
          계좌번호
        </label>
        <div className="input_group">
          <select id="input-kind-account-bank" className="input" aria-label="은행 선택">
            <option>은행 선택</option>
            <option>국민은행</option>
            <option>신한은행</option>
            <option>우리은행</option>
          </select>
          <Input inputMode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-zip">
          우편번호
        </label>
        <div className="input_group">
          <Input
            id="input-kind-zip"
            inputMode="numeric"
            maxLength={5}
            placeholder="00000"
            autoComplete="postal-code"
            aria-label="우편번호"
          />
          <Button variant="outline" size="sm" type="button" label="주소 검색" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-amount">
          결제 금액
        </label>
        <Input
          id="input-kind-amount"
          inputMode="numeric"
          placeholder="0"
          aria-label="결제 금액"
          prefix="₩"
          suffix="원"
        />
        <p className="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
      </div>
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
          'input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-sm">
          Small
        </label>
        <Input id="input-size-sm" size="sm" placeholder="input_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-md">
          Medium
        </label>
        <Input id="input-size-md" placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-lg">
          Large
        </label>
        <Input id="input-size-lg" size="lg" placeholder="input_lg" />
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
        <label className="form_field-label" htmlFor="input-size-sm">
          Small
        </label>
        <Input id="input-size-sm" size="sm" placeholder="input_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-md">
          Medium
        </label>
        <Input id="input-size-md" placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-lg">
          Large
        </label>
        <Input id="input-size-lg" size="lg" placeholder="input_lg" />
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
          '크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-md">
          전체 너비 — Medium
        </label>
        <Input id="input-width-full-md" placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-md">
          제한 너비 — Medium
        </label>
        <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
      </div>
      <Input
        className="input_fit"
        placeholder="input_group input_fit — Medium"
        aria-label="아이디"
        prefix="@"
      />
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
        <label className="form_field-label" htmlFor="input-width-full-sm">
          전체 너비 — Small
        </label>
        <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-md">
          전체 너비 — Medium
        </label>
        <Input id="input-width-full-md" placeholder="width: 100%" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-lg">
          전체 너비 — Large
        </label>
        <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-sm">
          제한 너비 — Small
        </label>
        <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-md">
          제한 너비 — Medium
        </label>
        <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-lg">
          제한 너비 — Large
        </label>
        <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-sm">
          input_field_fit — Small
        </label>
        <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-md">
          input_field_fit — Medium
        </label>
        <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-lg">
          input_field_fit — Large
        </label>
        <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
      </div>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-width-form-fit">
            form_fit
          </label>
          <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
        </div>
      </form>
      <Input
        className="input_fit"
        size="sm"
        placeholder="input_group input_fit — Small"
        aria-label="아이디"
        prefix="@"
      />
      <Input
        className="input_fit"
        placeholder="input_group input_fit — Medium"
        aria-label="아이디"
        prefix="@"
      />
    </>,
  ),
};

export const Group = {
  name: 'Input Group',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다.',
      },
      source: {
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function GroupExample() {
  return (
    <>
      <Input placeholder="example.com" aria-label="도메인" prefix="https://" />
      <Input placeholder="username" aria-label="사용자명" prefix="@" />
      <Input type="number" placeholder="금액" aria-label="금액" suffix="원" />
      <Input type="number" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="KRW" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Input placeholder="example.com" aria-label="도메인" prefix="https://" />
      <Input placeholder="username" aria-label="사용자명" prefix="@" />
      <Input type="number" placeholder="금액" aria-label="금액" suffix="원" />
      <Input type="number" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="KRW" />
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
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function RequiredExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-required-email">
          이메일
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="input-required-email"
          type="email"
          placeholder="name@example.com"
          required
          aria-required="true"
        />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
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
        <label className="form_field-label" htmlFor="input-required-email">
          이메일
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="input-required-email"
          type="email"
          placeholder="name@example.com"
          required
          aria-required="true"
        />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-required-name">
          이름
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
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
        code: `import Input from '@uxkm/ui-react/components/Input.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-default">
          기본
        </label>
        <Input id="input-state-default" placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-disabled">
          비활성
        </label>
        <Input id="input-state-disabled" defaultValue="수정할 수 없음" disabled />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-error">
          에러
        </label>
        <Input
          id="input-state-error"
          type="email"
          error
          defaultValue="invalid-email"
          aria-describedby="input-state-error-msg"
        />
        <p className="form_field-error" id="input-state-error-msg" role="alert">
          올바른 이메일 형식이 아닙니다.
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
        <label className="form_field-label" htmlFor="input-state-default">
          기본
        </label>
        <Input id="input-state-default" placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-disabled">
          비활성
        </label>
        <Input id="input-state-disabled" defaultValue="수정할 수 없음" disabled />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-error">
          에러
        </label>
        <Input
          id="input-state-error"
          type="email"
          error
          defaultValue="invalid-email"
          aria-describedby="input-state-error-msg"
        />
        <p className="form_field-error" id="input-state-error-msg" role="alert">
          올바른 이메일 형식이 아닙니다.
        </p>
      </div>
    </>,
  ),
};

export const Clearable = {
  name: '입력 삭제',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`input_clearable` 래퍼로 값이 있을 때 우측에 지우기 버튼을 표시합니다. `readonly` · `disabled` 상태에서는 버튼이 나타나지 않습니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ClearableExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="input-clear-text">
        텍스트
      </label>
      <div className="input_clearable">
        <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
        <Button
          className="input_clear"
          variant="text"
          color="muted"
          ripple={false}
          ariaLabel="입력 지우기"
          iconOnly
          hidden
          iconBefore={<Icon name="close" />}
        />
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-text">
          텍스트
        </label>
        <div className="input_clearable">
          <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
          <ClearButton />
        </div>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-search">
          검색
        </label>
        <div className="input_group">
          <span className="input_group-addon" aria-hidden="true">
            <Icon name="search" size="sm" />
          </span>
          <span className="input_clearable">
            <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
            <ClearButton />
          </span>
        </div>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-readonly">
          읽기 전용 (삭제 버튼 없음)
        </label>
        <div className="input_clearable">
          <Input id="input-clear-readonly" defaultValue="수정 불가" readOnly />
          <ClearButton />
        </div>
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
          '유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role="alert" · role="status"로 스크린 리더에 피드백을 전달합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_vertical form_compact" noValidate aria-labelledby="example-heading">
      <div className="alert color_error" role="alert" id="input-ex-form-error">
        <div>
          <Icon name="x-circle" className="alert_icon" />
        </div>
        <div className="alert_body">
          <div className="alert_title">입력 내용을 확인해 주세요</div>
          <p className="alert_desc">
            비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.
          </p>
        </div>
      </div>
      {/* fields … */}
    </form>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <form className="form form_vertical form_compact" noValidate aria-labelledby="example-heading">
      <div className="alert color_error" role="alert" id="input-ex-form-error">
        <div>
          <Icon name="x-circle" className="alert_icon" />
        </div>
        <div className="alert_body">
          <div className="alert_title">입력 내용을 확인해 주세요</div>
          <p className="alert_desc">비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.</p>
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-id">
          아이디
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="input-ex-id"
          size="sm"
          className="is-success"
          defaultValue="uxkm_user"
          required
          aria-required="true"
          autoComplete="username"
          aria-invalid="false"
          aria-describedby="input-ex-id-hint input-ex-id-success"
          prefix="@"
        />
        <p className="form_field-hint" id="input-ex-id-hint">
          영문·숫자 4~16자
        </p>
        <p className="form_field-success" id="input-ex-id-success" role="status">
          사용 가능한 아이디입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-pw">
          비밀번호
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="input-ex-pw"
          type="password"
          size="sm"
          error
          defaultValue="1234"
          required
          aria-required="true"
          autoComplete="current-password"
          aria-invalid="true"
          aria-describedby="input-ex-pw-error"
        />
        <p className="form_field-error" id="input-ex-pw-error" role="alert">
          8자 이상, 영문·숫자·특수문자를 포함해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-email">
          이메일
        </label>
        <Input
          id="input-ex-email"
          type="email"
          size="sm"
          error
          defaultValue="user@"
          aria-invalid="true"
          aria-describedby="input-ex-email-error"
          autoComplete="email"
        />
        <p className="form_field-error" id="input-ex-email-error" role="alert">
          올바른 이메일 주소를 입력해 주세요. (예: name@example.com)
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </form>,
  ),
};
