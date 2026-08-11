import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualFormLayout, { FormActions as ActualFormActions, FormField as ActualFormField } from '../../react/src/components/form/FormLayout/FormLayout.jsx';

const FormLayout = ActualFormLayout as React.ComponentType<any>;
const FormField = ActualFormField as React.ComponentType<any>;
const FormActions = ActualFormActions as React.ComponentType<any>;

const meta = {
  title: '폼/Form Layout',
  component: FormLayout,
  parameters: { layout: 'fullscreen' },
  args: { layout: 'vertical', fit: true, compact: false, labelAlign: 'end', labelWidth: '' },
  argTypes: {
    layout: { control: 'select', options: ['vertical', 'horizontal', 'inline'] },
    labelAlign: { control: 'select', options: ['end', 'start'] },
    labelWidth: { control: 'select', options: ['', 'sm', 'lg'] }
  }
} satisfies Meta<typeof FormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Input = ({ id, type = 'text', placeholder, invalid = false, required = false }: { id: string; type?: string; placeholder?: string; invalid?: boolean; required?: boolean }) => <input id={id} className={`input${invalid ? ' is-error' : ''}`} type={type} placeholder={placeholder} required={required} aria-invalid={invalid || undefined} />;
const Fields = () => <>
  <FormField label="이름" htmlFor="form-name" required hint="실명을 입력해 주세요."><Input id="form-name" placeholder="홍길동" required /></FormField>
  <FormField label="이메일" htmlFor="form-email"><Input id="form-email" type="email" placeholder="name@example.com" /></FormField>
</>;
const ActionButtons = ({ submitLabel = '저장' }: { submitLabel?: string }) => <FormActions><button className="btn btn_filled color_primary" type="submit">{submitLabel}</button><button className="btn btn_ghost" type="button">취소</button></FormActions>;

export const Playground: Story = { render: (args) => <Demo><FormLayout {...args} onSubmit={(event: React.FormEvent) => event.preventDefault()}><Fields /><ActionButtons /></FormLayout></Demo> };
export const Vertical: Story = { name: '세로', render: () => <Demo><FormLayout fit onSubmit={(event: React.FormEvent) => event.preventDefault()}><Fields /><ActionButtons /></FormLayout></Demo> };
export const Horizontal: Story = { name: '가로', render: () => <Demo><FormLayout layout="horizontal" onSubmit={(event: React.FormEvent) => event.preventDefault()}><Fields /><ActionButtons /></FormLayout></Demo> };
export const HorizontalAlign: Story = { name: '가로 — 레이블 정렬·너비', render: () => <Demo><div className="demo-stack"><FormLayout layout="horizontal" labelWidth="sm" labelAlign="start"><FormField label="도시" htmlFor="align-city"><Input id="align-city" placeholder="서울" /></FormField><FormField label="우편번호" htmlFor="align-zip"><Input id="align-zip" placeholder="00000" /></FormField></FormLayout><FormLayout layout="horizontal" labelWidth="lg"><FormField label="회사명" htmlFor="align-company"><Input id="align-company" placeholder="UXKM" /></FormField><FormField label="부서" htmlFor="align-team"><Input id="align-team" placeholder="디자인팀" /></FormField></FormLayout></div></Demo> };
export const Inline: Story = { name: '인라인', render: () => <Demo><FormLayout layout="inline" onSubmit={(event: React.FormEvent) => event.preventDefault()}><FormField label="검색어" htmlFor="form-query"><Input id="form-query" placeholder="검색어" /></FormField><FormField label="상태" htmlFor="form-status"><select id="form-status" className="input"><option>전체</option><option>진행 중</option><option>완료</option></select></FormField><FormActions><button className="btn btn_filled color_primary" type="submit">검색</button></FormActions></FormLayout></Demo> };
export const Grid: Story = { name: '그리드', render: () => <Demo><FormLayout onSubmit={(event: React.FormEvent) => event.preventDefault()}><div className="grid grid_cols-1 grid_cols-md-2"><FormField label="이름" htmlFor="grid-name"><Input id="grid-name" /></FormField><FormField label="부서" htmlFor="grid-team"><Input id="grid-team" /></FormField></div><FormField label="이메일" htmlFor="grid-email"><Input id="grid-email" type="email" /></FormField><ActionButtons /></FormLayout></Demo> };
export const Width: Story = { name: '너비', render: () => <Demo><div className="demo-stack"><FormLayout><FormField label="기본 너비" htmlFor="width-default"><Input id="width-default" placeholder="부모 100%" /></FormField></FormLayout><FormLayout fit><FormField label="제한 너비" htmlFor="width-fit"><Input id="width-fit" placeholder="최대 320px" /></FormField></FormLayout><FormLayout layout="horizontal"><FormField label="가로 레이아웃" htmlFor="width-horizontal"><Input id="width-horizontal" placeholder="남은 공간을 채움" /></FormField></FormLayout></div></Demo> };
export const Actions: Story = { name: '액션 영역', render: () => <Demo><div className="demo-stack"><FormLayout onSubmit={(event: React.FormEvent) => event.preventDefault()}><FormField label="제목" htmlFor="actions-vertical"><Input id="actions-vertical" /></FormField><ActionButtons /></FormLayout><FormLayout layout="horizontal" onSubmit={(event: React.FormEvent) => event.preventDefault()}><FormField label="제목" htmlFor="actions-horizontal"><Input id="actions-horizontal" /></FormField><ActionButtons /></FormLayout></div></Demo> };
export const Example: Story = { name: '전체 예시', render: () => <Demo><FormLayout compact onSubmit={(event: React.FormEvent) => event.preventDefault()}><div className="grid grid_cols-1 grid_cols-md-2"><FormField label="아이디" htmlFor="example-id" required hint="영문·숫자 4~16자"><Input id="example-id" required /></FormField><FormField label="비밀번호" htmlFor="example-password" required><Input id="example-password" type="password" required /></FormField><FormField label="이름" htmlFor="example-name" required><Input id="example-name" required /></FormField><FormField label="이메일" htmlFor="example-email"><Input id="example-email" type="email" /></FormField><FormField className="grid_col-span-md-2" label="메모" htmlFor="example-memo"><textarea id="example-memo" className="textarea" rows={3} /></FormField></div><ActionButtons submitLabel="가입하기" /></FormLayout></Demo> };
