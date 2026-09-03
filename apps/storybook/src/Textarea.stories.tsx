import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import ActualTextarea from '../../react/src/components/form/Textarea/Textarea.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';

const Textarea = ActualTextarea as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) => <div className="form_field"><label className="form_field-label" htmlFor={id}>{label}</label>{children}{hint && <p className="form_field-hint">{hint}</p>}</div>;
const ImplicitTextarea = ({ label, ...props }: { label: string; [key: string]: any }) => <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Textarea {...props} /></label>;

type TextareaStoryArgs = {
  size?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  disabled?: boolean;
  error?: boolean;
  fit?: boolean;
  showCount?: boolean;
  clearable?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  value?: string;
  maxLength?: number;
};

function textareaPropsFromArgs(args: Record<string, unknown>) {
  const maxLength = typeof args.maxLength === 'number' && args.maxLength > 0 ? args.maxLength : undefined;
  const rows = typeof args.rows === 'number' && args.rows > 0 ? args.rows : 4;
  return {
    size: args.size,
    resize: args.resize,
    disabled: args.disabled === true,
    error: args.error === true,
    fit: args.fit === true,
    showCount: args.showCount === true,
    clearable: args.clearable === true,
    readOnly: args.readOnly === true,
    required: args.required === true,
    placeholder: typeof args.placeholder === 'string' ? args.placeholder : undefined,
    rows,
    ...(maxLength != null ? { maxLength } : {}),
  };
}

function TextareaPlayground({
  args,
  updateArgs,
}: {
  args: Record<string, unknown>;
  updateArgs?: (patch: Record<string, unknown>) => void;
}) {
  const argsValue = typeof args.value === 'string' ? args.value : '';
  const [value, setValue] = useState(argsValue);

  useEffect(() => {
    setValue(argsValue);
  }, [argsValue]);

  const setValueState = (next: string) => {
    setValue(next);
    updateArgs?.({ value: next });
  };

  return (
    <Textarea
      {...textareaPropsFromArgs(args)}
      id="textarea-playground"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValueState(event.target.value)}
      onClear={() => setValueState('')}
    />
  );
}

const textareaControlKeys = [
  'size',
  'resize',
  'placeholder',
  'value',
  'rows',
  'maxLength',
  'disabled',
  'error',
  'fit',
  'showCount',
  'clearable',
  'readOnly',
  'required',
] as const;

const meta = {
  title: '폼/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    controls: { include: [...textareaControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    size: 'md',
    resize: 'none',
    disabled: false,
    error: false,
    fit: false,
    showCount: false,
    clearable: false,
    readOnly: false,
    required: false,
    placeholder: '내용을 입력하세요',
    rows: 4,
    maxLength: 0,
    value: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      type: 'string',
    },
    disabled: booleanControlArg,
    error: booleanControlArg,
    fit: booleanControlArg,
    showCount: booleanControlArg,
    clearable: booleanControlArg,
    readOnly: booleanControlArg,
    required: booleanControlArg,
    placeholder: stringControlArg,
    value: stringControlArg,
    rows: {
      ...numberControlArg,
      description: '표시 행 수',
    },
    maxLength: {
      ...numberControlArg,
      description: '최대 글자 수. 0이면 제한 없음',
    },
    defaultValue: { table: { disable: true } },
    className: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onClear: { table: { disable: true } },
  },
} satisfies Meta<TextareaStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args, { updateArgs }) => (
    <Demo>
      <TextareaPlayground args={args} updateArgs={updateArgs} />
    </Demo>
  ),
};

export const Basic: Story = { name: '기본', render: (args) => <Demo><Field id="textarea-message" label="메시지" hint="문의 내용을 자세히 작성해 주세요."><Textarea id="textarea-message" rows={4} placeholder="메시지를 입력하세요" /></Field></Demo> };

export const Standalone: Story = { name: '단독 사용', render: (args) => <Demo><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="textarea-note">메모</label><Textarea id="textarea-note" rows={3} placeholder="메모를 입력하세요" /></div><ImplicitTextarea label="추가 요청사항" rows={3} placeholder="추가 요청사항" /></Demo> };

export const Size: Story = { name: '크기', render: (args) => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Field key={size} id={`textarea-${size}`} label={size.toUpperCase()}><Textarea id={`textarea-${size}`} size={size} rows={3} placeholder={size === 'md' ? '기본 크기' : `textarea_${size}`} /></Field>)}</Demo> };

export const Width: Story = { name: '너비', render: (args) => <Demo><Field id="textarea-full" label="전체 너비"><Textarea id="textarea-full" rows={3} placeholder="width: 100%" /></Field><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-fit">제한 너비</label><Textarea id="textarea-fit" rows={3} placeholder="최대 320px" /></div><Field id="textarea-wrap-fit" label="카운터 제한 너비"><Textarea id="textarea-wrap-fit" fit showCount maxLength={100} rows={3} /></Field></Demo> };

export const Resize: Story = { name: '크기 조절', render: (args) => <Demo>{(['none', 'vertical', 'horizontal', 'both'] as const).map((resize) => <Field key={resize} id={`textarea-resize-${resize}`} label={resize}><Textarea id={`textarea-resize-${resize}`} resize={resize} rows={3} defaultValue={`${resize} 방향 크기 조절`} /></Field>)}</Demo> };

export const Required: Story = { name: '필수 필드', render: (args) => <Demo><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-required">문의 내용<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Textarea id="textarea-required" rows={4} required aria-required="true" placeholder="문의 내용을 입력하세요" /><p className="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div></Demo> };

export const State: Story = { name: '상태', render: (args) => <Demo><Field id="textarea-default" label="기본"><Textarea id="textarea-default" rows={3} placeholder="입력 가능" /></Field><Field id="textarea-disabled" label="비활성"><Textarea id="textarea-disabled" rows={3} defaultValue="수정할 수 없음" disabled /></Field><Field id="textarea-readonly" label="읽기 전용"><Textarea id="textarea-readonly" rows={3} defaultValue="읽기만 가능" readOnly /></Field><div className="form_field"><label className="form_field-label" htmlFor="textarea-error">에러</label><Textarea id="textarea-error" rows={3} error defaultValue="너무 짧은 내용" aria-describedby="textarea-error-message" /><p id="textarea-error-message" className="form_field-error" role="alert">10자 이상 입력해 주세요.</p></div><div className="form_field"><label className="form_field-label" htmlFor="textarea-success">성공</label><Textarea id="textarea-success" rows={3} className="is-success" defaultValue="등록할 수 있는 내용입니다." aria-describedby="textarea-success-message" /><p id="textarea-success-message" className="form_field-success" role="status">입력 내용이 확인되었습니다.</p></div></Demo> };

export const Count: Story = { name: '글자 수', render: (args) => <Demo><div className="form_field"><label className="form_field-label" htmlFor="textarea-count">자기소개</label><Textarea id="textarea-count" rows={5} maxLength={200} showCount aria-describedby="textarea-count-hint" placeholder="자기소개를 입력하세요" /><p id="textarea-count-hint" className="form_field-hint">200자 이내로 작성해 주세요.</p></div><Field id="textarea-count-filled" label="작성 중"><Textarea id="textarea-count-filled" size="sm" rows={3} maxLength={30} showCount defaultValue="입력한 글자 수를 확인할 수 있습니다." /></Field></Demo> };

export const Clearable: Story = { name: '입력 삭제', render: (args) => <Demo><Field id="textarea-clear" label="메모"><Textarea id="textarea-clear" rows={4} clearable defaultValue="지울 수 있는 내용" /></Field><Field id="textarea-clear-count" label="자기소개"><Textarea id="textarea-clear-count" rows={4} clearable showCount maxLength={200} defaultValue="글자 수와 지우기를 함께 사용합니다." /></Field><Field id="textarea-clear-readonly" label="읽기 전용"><Textarea id="textarea-clear-readonly" rows={3} clearable readOnly defaultValue="수정 불가" /></Field></Demo> };

export const Example: Story = { name: '조합 예시', render: (args) => <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="form_field"><label className="form_field-label" htmlFor="review">후기<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Textarea id="review" rows={6} showCount maxLength={300} error defaultValue="좋아요" required aria-describedby="review-error" /><p id="review-error" className="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p></div><div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">등록</span></button><button className="btn btn_ghost" type="button"><span className="btn_label">취소</span></button></div></form> };
