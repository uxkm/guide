import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { expect, within } from 'storybook/test';

import ActualDatePicker from '../../react/src/components/form/DatePicker/DatePicker.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const DatePicker = ActualDatePicker as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) => <div className="form_field"><label className="form_field-label" htmlFor={id}>{label}</label>{children}{hint && <p className="form_field-hint">{hint}</p>}</div>;

type DatePickerStoryArgs = {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  clearable?: boolean;
  fit?: boolean;
  block?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  min?: string;
  max?: string;
  locale?: string;
  panelAlign?: 'start' | 'end';
};

function datePickerPropsFromArgs(args: Record<string, unknown>) {
  const min = typeof args.min === 'string' && args.min ? args.min : undefined;
  const max = typeof args.max === 'string' && args.max ? args.max : undefined;
  return {
    size: args.size,
    disabled: args.disabled === true,
    error: args.error === true,
    success: args.success === true,
    clearable: args.clearable !== false,
    fit: args.fit === true,
    block: args.block === true,
    required: args.required === true,
    placeholder: typeof args.placeholder === 'string' ? args.placeholder : undefined,
    locale: typeof args.locale === 'string' && args.locale ? args.locale : undefined,
    panelAlign: args.panelAlign === 'end' ? 'end' : 'start',
    ...(min ? { min } : {}),
    ...(max ? { max } : {}),
  };
}

function DatePickerPlayground({
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

  return (
    <DatePicker
      {...datePickerPropsFromArgs(args)}
      id="date-playground"
      value={value}
      onChange={(next: string) => {
        setValue(next);
        updateArgs?.({ value: next });
      }}
    />
  );
}

const datePickerControlKeys = [
  'size',
  'placeholder',
  'value',
  'min',
  'max',
  'panelAlign',
  'disabled',
  'error',
  'success',
  'clearable',
  'fit',
  'block',
  'required',
] as const;

const meta = {
  title: '폼/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
    controls: { include: [...datePickerControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    size: 'md',
    disabled: false,
    error: false,
    success: false,
    clearable: true,
    fit: false,
    block: false,
    required: false,
    placeholder: '날짜를 선택하세요',
    panelAlign: 'start',
    value: '',
    min: '',
    max: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    panelAlign: {
      control: 'select',
      options: ['start', 'end'],
      type: 'string',
    },
    disabled: booleanControlArg,
    error: booleanControlArg,
    success: booleanControlArg,
    clearable: booleanControlArg,
    fit: booleanControlArg,
    block: booleanControlArg,
    required: booleanControlArg,
    placeholder: stringControlArg,
    value: {
      ...stringControlArg,
      description: 'YYYY-MM-DD',
    },
    min: {
      ...stringControlArg,
      description: '최소 날짜 YYYY-MM-DD. 비우면 제한 없음',
    },
    max: {
      ...stringControlArg,
      description: '최대 날짜 YYYY-MM-DD. 비우면 제한 없음',
    },
    locale: { table: { disable: true } },
    name: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} satisfies Meta<DatePickerStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args, { updateArgs }) => (
    <Field id="date-playground" label="날짜">
      <DatePickerPlayground args={args} updateArgs={updateArgs} />
    </Field>
  ),
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('combobox', { name: '날짜 선택' });
    await userEvent.click(canvas.getByRole('button', { name: '달력 열기' }));
    const panel = canvas.getByRole('dialog', { name: '날짜 선택' });
    await userEvent.click(within(panel).getByRole('button', { name: '오늘' }));
    await expect(input).not.toHaveValue('');
  },
};

export const Basic: Story = { name: '기본', render: (args) => <Field id="date-basic" label="예약일" hint="달력에서 날짜를 선택해 주세요."><DatePicker id="date-basic" fit defaultValue="2024-06-15" /></Field> };
export const Size: Story = { name: '크기', render: (args) => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Field key={size} id={`date-${size}`} label={size.toUpperCase()}><DatePicker id={`date-${size}`} size={size} defaultValue="2024-06-15" /></Field>)}</Demo> };
export const Width: Story = { name: '너비', render: (args) => <Demo><Field id="date-full" label="전체 너비"><DatePicker id="date-full" block defaultValue="2024-06-15" /></Field><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="date-fit">제한 너비</label><DatePicker id="date-fit" fit defaultValue="2024-06-15" /></div></Demo> };
export const Limits: Story = { name: '선택 범위', render: (args) => <Field id="date-limits" label="프로모션 기간"><DatePicker id="date-limits" defaultValue="2024-06-15" min="2024-06-10" max="2024-06-20" /><p className="form_field-hint">2024년 6월 10일부터 20일까지만 선택할 수 있습니다.</p></Field> };
export const State: Story = { name: '상태', render: (args) => <Demo><Field id="date-disabled" label="비활성"><DatePicker id="date-disabled" disabled defaultValue="2024-06-15" /></Field><div className="form_field"><label className="form_field-label" htmlFor="date-error">에러</label><DatePicker id="date-error" error aria-describedby="date-error-message" /><p id="date-error-message" className="form_field-error" role="alert">날짜를 선택해 주세요.</p></div><div className="form_field"><label className="form_field-label" htmlFor="date-success">성공</label><DatePicker id="date-success" success defaultValue="2024-06-15" aria-describedby="date-success-message" /><p id="date-success-message" className="form_field-success" role="status">예약 가능한 날짜입니다.</p></div></Demo> };

function ControlledExample() {
  const [date, setDate] = useState('');
  return <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="form_field"><label className="form_field-label" htmlFor="visit-date">방문일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><DatePicker id="visit-date" name="visitDate" value={date} onChange={setDate} required error={!date} aria-describedby={!date ? 'visit-date-error' : 'visit-date-success'} />{!date ? <p id="visit-date-error" className="form_field-error" role="alert">방문일을 선택해 주세요.</p> : <p id="visit-date-success" className="form_field-success" role="status">{date}로 선택했습니다.</p>}</div><div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">예약</span></button></div></form>;
}
export const Example: Story = { name: '조합 예시', render: (args) => <ControlledExample /> };
