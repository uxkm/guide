import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import ActualUpload from '../../react/src/components/form/Upload/Upload.jsx';

const Upload = ActualUpload as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const sampleFile = { name: '제품소개서.pdf', size: 1843200, type: 'application/pdf', status: 'done' };
const avatarSample = '/images/avatar-sample.svg';
const sampleImage = (name: string) => ({
  name,
  size: 245760,
  type: 'image/svg+xml',
  status: 'done',
  url: avatarSample,
});

const meta = { title: '폼/Upload', component: Upload, parameters: { layout: 'padded' }, args: { variant: 'button', size: 'md', disabled: false, multiple: false, fit: false }, argTypes: { variant: { control: 'select', options: ['button', 'drag', 'list', 'picture-card', 'avatar'] }, size: { control: 'select', options: ['sm', 'md', 'lg'] } } } satisfies Meta<typeof Upload>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '버튼 업로드', render: () => <Demo><Upload buttonLabel="파일 선택" /><Upload hint="PNG, JPG · 최대 5MB" trigger={<span className="btn btn_outline color_primary"><span className="btn_label">업로드</span></span>} /><Upload trigger={<><span className="btn btn_filled color_primary btn_sm"><span className="btn_label">Small</span></span><span className="btn btn_filled color_primary btn_lg"><span className="btn_label">Large</span></span></>} /><Upload disabled buttonLabel="비활성" /></Demo> };
export const Dropzone: Story = { name: '드래그 앤 드롭', render: () => <Demo><Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} description="PNG, JPG, PDF · 파일당 최대 5MB" hint="최대 3개까지 첨부할 수 있습니다." /><Upload variant="drag" fit dragover title="파일을 놓으세요" description="is-dragover 상태" /></Demo> };
export const List: Story = { name: '파일 목록', render: () => <Upload variant="list" fit multiple defaultFiles={[{ name: '프로젝트_제안서_v2.pdf', size: 2516582, status: 'uploading', progress: 60 }, sampleFile, { name: '대용량_영상.mp4', size: 12582912, status: 'error', error: '파일 크기가 10MB를 초과합니다.' }]} /> };
export const Cards: Story = { name: '사진 카드', render: () => <Upload variant="picture-card" multiple accept="image/*" maxFiles={5} buttonLabel="업로드" hint="최대 5장 · JPG, PNG" defaultFiles={[sampleImage('프로필-1.svg'), sampleImage('프로필-2.svg')]} /> };
export const Avatar: Story = { name: '아바타 업로드', render: () => <Upload variant="avatar" accept="image/*" avatarSrc={avatarSample} avatarAlt="프로필 사진" /> };
export const Size: Story = { name: '크기', render: () => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Upload key={size} variant="drag" size={size} title={`${size.toUpperCase()} 업로드`} description="파일을 선택하세요." />)}</Demo> };
export const Width: Story = { name: '너비', render: () => <Demo><Upload variant="drag" title="전체 너비" /><Upload variant="drag" fit title="제한 너비" /></Demo> };
export const State: Story = { name: '상태', render: () => <Demo><Upload disabled hint="파일을 변경할 수 없습니다." defaultFiles={[sampleFile]} /><Upload variant="drag" error title="업로드 오류" description="허용되는 파일을 다시 선택해 주세요." /></Demo> };

function AttachmentForm() {
  const [files, setFiles] = useState<any[]>([]);
  return <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="form_field"><p className="form_field-label" id="attachments-label">첨부 파일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></p><div aria-labelledby="attachments-label"><Upload files={files} onChange={setFiles} multiple accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} maxFiles={3} hint="PDF, DOC, DOCX · 파일당 최대 10MB" /></div>{!files.length && <p className="form_field-error" role="alert">파일을 한 개 이상 첨부해 주세요.</p>}</div><div className="form_actions"><button type="submit" className="btn btn_filled color_primary"><span className="btn_label">제출</span></button></div></form>;
}
export const Example: Story = { name: '조합 예시', render: () => <AttachmentForm /> };
