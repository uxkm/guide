import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import ActualSelect from '../../react/src/components/form/Select/Select.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';

const Select = ActualSelect as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) => <div className="form_field"><label className="form_field-label" htmlFor={id}>{label}</label>{children}{hint && <p className="form_field-hint">{hint}</p>}</div>;
const ImplicitSelect = ({ label, ...props }: { label: string; [key: string]: any }) => <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Select {...props} /></label>;
const RegionOptions = () => <><option value="seoul">서울</option><option value="busan">부산</option><option value="jeju">제주</option></>;

type SelectStoryArgs = {
  size?: 'sm' | 'md' | 'lg';
  nativeSize?: number;
  disabled?: boolean;
  error?: boolean;
  fit?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
};

function selectPropsFromArgs(args: Record<string, unknown>) {
  const nativeSize = typeof args.nativeSize === 'number' && args.nativeSize > 0 ? args.nativeSize : undefined;
  return {
    size: args.size,
    disabled: args.disabled === true,
    error: args.error === true,
    fit: args.fit === true,
    required: args.required === true,
    placeholder: typeof args.placeholder === 'string' ? args.placeholder : undefined,
    ...(nativeSize != null ? { nativeSize } : {}),
  };
}

function SelectPlayground({
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
    <Select
      {...selectPropsFromArgs(args)}
      id="select-playground"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        const next = event.target.value;
        setValue(next);
        updateArgs?.({ value: next });
      }}
    >
      <RegionOptions />
    </Select>
  );
}

const selectControlKeys = [
  'size',
  'placeholder',
  'value',
  'nativeSize',
  'disabled',
  'error',
  'fit',
  'required',
] as const;

const meta = {
  title: '폼/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    controls: { include: [...selectControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    size: 'md',
    disabled: false,
    error: false,
    fit: false,
    required: false,
    placeholder: '선택하세요',
    nativeSize: 0,
    value: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    nativeSize: {
      ...numberControlArg,
      description: '네이티브 size(표시 행 수). 0이면 기본 드롭다운',
    },
    disabled: booleanControlArg,
    error: booleanControlArg,
    fit: booleanControlArg,
    required: booleanControlArg,
    placeholder: stringControlArg,
    value: stringControlArg,
    defaultValue: { table: { disable: true } },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} satisfies Meta<SelectStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args, { updateArgs }) => (
    <Demo>
      <Field id="select-playground" label="지역">
        <SelectPlayground args={args} updateArgs={updateArgs} />
      </Field>
    </Demo>
  ),
};

export const Basic: Story = { name: '기본', render: (args) => <Demo><Field id="select-region" label="지역" hint="거주 지역을 선택해 주세요."><Select id="select-region" fit required placeholder="지역을 선택하세요"><RegionOptions /></Select></Field></Demo> };

export const Standalone: Story = { name: '단독 사용', render: (args) => <Demo><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="select-language">언어</label><Select id="select-language" defaultValue="ko"><option value="ko">한국어</option><option value="en">English</option></Select></div><ImplicitSelect label="정렬 기준" fit defaultValue="latest"><option value="latest">최신순</option><option value="popular">인기순</option></ImplicitSelect></Demo> };

export const Size: Story = { name: '크기', render: (args) => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Field key={size} id={`select-${size}`} label={size.toUpperCase()}><Select id={`select-${size}`} size={size} defaultValue="seoul"><RegionOptions /></Select></Field>)}</Demo> };

export const Width: Story = { name: '너비', render: (args) => <Demo><Field id="select-full" label="전체 너비"><Select id="select-full" defaultValue="seoul"><RegionOptions /></Select></Field><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-fit">제한 너비</label><Select id="select-fit" defaultValue="busan"><RegionOptions /></Select></div><ImplicitSelect label="제한 너비 단독 선택" fit defaultValue="jeju"><RegionOptions /></ImplicitSelect></Demo> };

export const Group: Story = { name: '옵션 그룹', render: (args) => <Demo><Field id="select-team" label="소속 팀"><Select id="select-team" placeholder="팀을 선택하세요"><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></Select></Field></Demo> };

export const Multiple: Story = { name: '다중 선택', render: (args) => <Demo><Field id="select-skills" label="관심 분야" hint="여러 항목을 선택할 수 있습니다."><Select id="select-skills" multiple nativeSize={4} defaultValue={['design', 'frontend']}><option value="design">UI 디자인</option><option value="frontend">프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></Select></Field></Demo> };

export const Required: Story = { name: '필수 필드', render: (args) => <Demo><div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-required">문의 유형<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Select id="select-required" required placeholder="문의 유형을 선택하세요"><option value="product">제품 문의</option><option value="account">계정 문의</option></Select><p className="form_field-hint">가장 가까운 유형을 선택해 주세요.</p></div></Demo> };

export const State: Story = { name: '상태', render: (args) => <Demo><Field id="select-default" label="기본"><Select id="select-default" defaultValue="seoul"><RegionOptions /></Select></Field><Field id="select-disabled" label="비활성"><Select id="select-disabled" defaultValue="busan" disabled><RegionOptions /></Select></Field><div className="form_field"><label className="form_field-label" htmlFor="select-error">에러</label><Select id="select-error" error required placeholder="지역을 선택하세요" aria-describedby="select-error-message"><RegionOptions /></Select><p id="select-error-message" className="form_field-error" role="alert">지역을 선택해 주세요.</p></div><div className="form_field"><label className="form_field-label" htmlFor="select-success">성공</label><Select id="select-success" className="is-success" defaultValue="jeju" aria-describedby="select-success-message"><RegionOptions /></Select><p id="select-success-message" className="form_field-success" role="status">배송 가능 지역입니다.</p></div></Demo> };

function ExampleForm() {
  const [region, setRegion] = useState('');
  return <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="form_field"><label className="form_field-label" htmlFor="delivery-region">배송 지역<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Select id="delivery-region" value={region} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setRegion(event.target.value)} required error={!region} placeholder="지역을 선택하세요" aria-describedby={!region ? 'delivery-region-error' : 'delivery-region-success'}><RegionOptions /></Select>{!region ? <p id="delivery-region-error" className="form_field-error" role="alert">배송 지역을 선택해 주세요.</p> : <p id="delivery-region-success" className="form_field-success" role="status">선택한 지역으로 배송할 수 있습니다.</p>}</div><div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">저장</span></button><button className="btn btn_ghost" type="button"><span className="btn_label">취소</span></button></div></form>;
}
export const Example: Story = { name: '조합 예시', render: (args) => <ExampleForm /> };
