import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useRef, useState } from 'react';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualInput from '../../react/src/components/form/Input/Input.jsx';

const Input = ActualInput as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) => <div className="form_field"><label className="form_field-label" htmlFor={id}>{label}</label>{children}{hint && <p className="form_field-hint">{hint}</p>}</div>;

function ButtonClearable({ defaultValue = '', prefix, suffix, wrapperClassName = '', label, ...props }: { defaultValue?: string; prefix?: React.ReactNode; suffix?: React.ReactNode; wrapperClassName?: string; label?: string; [key: string]: any }) {
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef<HTMLElement>(null);
  const generatedId = useId();
  const inputId = props.id ?? (label ? `input-${generatedId.replace(/:/g, '')}` : undefined);
  const inactive = props.disabled || props.readOnly;
  const hasAddon = prefix != null || suffix != null;
  const input = <span ref={!hasAddon ? rootRef : undefined} className={['input_clearable', value && !inactive && 'is-filled', !hasAddon && wrapperClassName].filter(Boolean).join(' ')}>
    <Input {...props} id={inputId} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
    <Button
      className="input_clear"
      variant="text"
      color="muted"
      ripple={false}
      ariaLabel="입력 지우기"
      iconOnly
      hidden={!value || inactive}
      iconBefore={<Icon name="close" />}
      onClick={() => {
        if (inactive) return;
        setValue('');
        requestAnimationFrame(() => rootRef.current?.querySelector('input')?.focus());
      }}
    />
  </span>;

  const control = !hasAddon ? input : <div ref={rootRef as React.RefObject<HTMLDivElement>} className={['input_group', wrapperClassName].filter(Boolean).join(' ')}>{prefix != null && <span className="input_group-addon" aria-hidden="true">{prefix}</span>}{input}{suffix != null && <span className="input_group-addon">{suffix}</span>}</div>;
  return <>{label && <label className="input_group-label_hidden" htmlFor={inputId}>{label}</label>}{control}</>;
}

function ImplicitInput({ label, ...props }: { label: string; [key: string]: any }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Input {...props} /></label>;
}

const meta = {
  title: '폼/Input',
  component: Input,
  parameters: { layout: 'padded' },
  args: { size: 'md', disabled: false, error: false, placeholder: '입력하세요', type: 'text', block: false, value: undefined },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'] }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '기본', render: () => <Demo><Field id="input-name" label="이름" hint="2~20자 이내로 입력해 주세요."><ButtonClearable id="input-name" placeholder="이름을 입력하세요" /></Field></Demo> };

export const Standalone: Story = { name: '단독 사용', render: () => <Demo>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-search">검색어</label><ButtonClearable id="input-search" placeholder="플레이스홀더" /></div>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-nickname">닉네임</label><ButtonClearable id="input-nickname" defaultValue="입력된 값" /></div>
  <ButtonClearable type="search" label="검색" placeholder="검색어를 입력하세요" prefix={<Icon name="search" />} />
</Demo> };

export const Type: Story = { name: '입력 타입', render: () => <Demo>
  {[['text', '텍스트'], ['password', '비밀번호'], ['email', '이메일'], ['tel', '전화번호'], ['url', 'URL'], ['search', '검색'], ['number', '숫자'], ['date', '날짜'], ['time', '시간']].map(([type, label]) => <Field key={type} id={`input-type-${type}`} label={label}>{['text', 'password', 'email', 'tel', 'url', 'search'].includes(type) ? <ButtonClearable id={`input-type-${type}`} type={type} placeholder={type === 'email' ? 'name@example.com' : label} /> : <Input id={`input-type-${type}`} type={type} placeholder={label} />}</Field>)}
</Demo> };

export const Kind: Story = { name: '입력 종류', render: () => <Demo>
  <div className="form_field"><p className="form_field-label" id="card-label">카드번호</p><div className="input_split" role="group" aria-labelledby="card-label">{[1, 2, 3, 4].map((part) => <span key={part} className="display_contents">{part > 1 && <span className="input_split_sep" aria-hidden="true">-</span>}<ImplicitInput label={`카드번호 ${part}번째 묶음`} type={part > 2 ? 'password' : 'text'} inputMode="numeric" maxLength={4} placeholder="0000" /></span>)}</div><p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
  <div className="form_field"><p className="form_field-label" id="otp-label">인증번호 (OTP)</p><div className="input_otp" role="group" aria-labelledby="otp-label">{[1, 2, 3, 4, 5, 6].map((part) => <ImplicitInput key={part} label={`인증번호 ${part}자리`} inputMode="numeric" maxLength={1} />)}</div><p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
  <Field id="phone" label="휴대폰 번호"><div className="input_group"><span className="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div></Field>
  <Field id="amount" label="결제 금액"><ButtonClearable id="amount" inputMode="numeric" placeholder="0" prefix="₩" suffix="원" /></Field>
</Demo> };

export const Size: Story = { name: '크기', render: () => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Field key={size} id={`input-${size}`} label={size.toUpperCase()}><ButtonClearable id={`input-${size}`} size={size} placeholder={size === 'md' ? '기본 크기' : `input_${size}`} /></Field>)}</Demo> };

export const Width: Story = { name: '너비', render: () => <Demo>
  <Field id="input-full" label="전체 너비"><ButtonClearable id="input-full" placeholder="width: 100%" /></Field>
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="input-fit">제한 너비</label><ButtonClearable id="input-fit" placeholder="최대 320px" /></div>
  <ButtonClearable wrapperClassName="input_fit" label="아이디" placeholder="애드온 그룹 최대 320px" prefix="@" />
</Demo> };

export const Group: Story = { name: 'Input Group', render: () => <Demo><ButtonClearable label="도메인" placeholder="example.com" prefix="https://" /><ButtonClearable label="사용자명" placeholder="username" prefix="@" /><ButtonClearable label="결제 금액" inputMode="numeric" placeholder="0" prefix="₩" suffix="KRW" /></Demo> };

export const Required: Story = { name: '필수 필드', render: () => <Demo><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="required-email">이메일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><ButtonClearable id="required-email" type="email" placeholder="name@example.com" required aria-required="true" /><p className="form_field-hint">업무용 이메일을 입력해 주세요.</p></div></Demo> };

export const State: Story = { name: '상태', render: () => <Demo><Field id="state-default" label="기본"><ButtonClearable id="state-default" placeholder="입력 가능" /></Field><Field id="state-disabled" label="비활성"><ButtonClearable id="state-disabled" defaultValue="수정할 수 없음" disabled /></Field><Field id="state-readonly" label="읽기 전용"><ButtonClearable id="state-readonly" defaultValue="읽기만 가능" readOnly /></Field><div className="form_field"><label className="form_field-label" htmlFor="state-error">에러</label><ButtonClearable id="state-error" error defaultValue="invalid-email" aria-describedby="state-error-message" /><p className="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p></div><div className="form_field"><label className="form_field-label" htmlFor="state-success">성공</label><ButtonClearable id="state-success" className="is-success" defaultValue="uxkm_user" aria-describedby="state-success-message" /><p className="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p></div></Demo> };

function ClearableDemo() { return <Demo><ButtonClearable label="텍스트" defaultValue="지울 수 있는 값" /><ButtonClearable label="검색" type="search" defaultValue="검색어" prefix={<Icon name="search" />} /><ButtonClearable label="읽기 전용" defaultValue="수정 불가" readOnly /></Demo>; }
export const Clearable: Story = { name: '입력 삭제', render: () => <ClearableDemo /> };

export const Example: Story = { name: '조합 예시', render: () => <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div><div className="form_field"><label className="form_field-label" htmlFor="login-id">아이디</label><ButtonClearable id="login-id" className="is-success" defaultValue="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" /><p id="login-id-success" className="form_field-success" role="status">사용 가능한 아이디입니다.</p></div><div className="form_field"><label className="form_field-label" htmlFor="login-password">비밀번호</label><ButtonClearable id="login-password" type="password" error defaultValue="1234" aria-describedby="login-password-error" /><p id="login-password-error" className="form_field-error" role="alert">8자 이상 입력해 주세요.</p></div><div className="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div></form> };
