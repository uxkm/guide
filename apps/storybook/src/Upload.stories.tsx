import { assetUrl } from '@uxkm/assets/url';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import ActualUpload from '../../react/src/components/form/Upload/Upload.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';

const Upload = ActualUpload as React.ComponentType<any>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="demo-stack">{children}</div>;
const sampleFile = { name: '제품소개서.pdf', size: 1843200, type: 'application/pdf', status: 'done' };
const avatarSample = assetUrl('images/samples/avatar/avatar-sample.svg');
const sampleImage = (name: string) => ({
  name,
  size: 245760,
  type: 'image/svg+xml',
  status: 'done',
  url: avatarSample,
});

type UploadStoryArgs = {
  variant?: 'button' | 'drag' | 'list' | 'picture-card' | 'avatar';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  multiple?: boolean;
  fit?: boolean;
  error?: boolean;
  dragover?: boolean;
  buttonLabel?: string;
  title?: string;
  description?: string;
  hint?: string;
  removeLabel?: string;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  avatarSrc?: string;
  avatarAlt?: string;
};

function uploadPropsFromArgs(args: Record<string, unknown>) {
  const maxSize = typeof args.maxSize === 'number' && args.maxSize > 0 ? args.maxSize : undefined;
  const maxFiles = typeof args.maxFiles === 'number' && args.maxFiles > 0 ? args.maxFiles : undefined;
  return {
    variant: args.variant,
    size: args.size,
    disabled: args.disabled === true,
    multiple: args.multiple === true,
    fit: args.fit === true,
    error: args.error === true,
    dragover: args.dragover === true,
    buttonLabel: typeof args.buttonLabel === 'string' ? args.buttonLabel : undefined,
    title: typeof args.title === 'string' ? args.title : undefined,
    description: typeof args.description === 'string' ? args.description : undefined,
    hint: typeof args.hint === 'string' ? args.hint : undefined,
    removeLabel: typeof args.removeLabel === 'string' ? args.removeLabel : undefined,
    accept: typeof args.accept === 'string' && args.accept ? args.accept : undefined,
    avatarSrc: typeof args.avatarSrc === 'string' && args.avatarSrc ? args.avatarSrc : undefined,
    avatarAlt: typeof args.avatarAlt === 'string' ? args.avatarAlt : undefined,
    ...(maxSize != null ? { maxSize } : {}),
    ...(maxFiles != null ? { maxFiles } : {}),
  };
}

const uploadControlKeys = [
  'variant',
  'size',
  'buttonLabel',
  'title',
  'description',
  'hint',
  'accept',
  'maxSize',
  'maxFiles',
  'disabled',
  'multiple',
  'fit',
  'error',
  'dragover',
] as const;

const meta = {
  title: '폼/Upload',
  component: Upload,
  parameters: {
    layout: 'padded',
    controls: { include: [...uploadControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    variant: 'button',
    size: 'md',
    disabled: false,
    multiple: false,
    fit: false,
    error: false,
    dragover: false,
    buttonLabel: '파일 선택',
    title: '파일을 끌어다 놓거나 선택하세요',
    description: '',
    hint: '',
    accept: '',
    maxSize: 0,
    maxFiles: 0,
  },
  argTypes: {
    ...hiddenArgTypes,
    variant: {
      control: 'select',
      options: ['button', 'drag', 'list', 'picture-card', 'avatar'],
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    disabled: booleanControlArg,
    multiple: booleanControlArg,
    fit: booleanControlArg,
    error: booleanControlArg,
    dragover: booleanControlArg,
    buttonLabel: stringControlArg,
    title: stringControlArg,
    description: stringControlArg,
    hint: stringControlArg,
    removeLabel: { table: { disable: true } },
    accept: {
      ...stringControlArg,
      description: '허용 파일 형식. 비우면 제한 없음',
    },
    maxSize: {
      ...numberControlArg,
      description: '파일 크기 제한(byte). 0이면 제한 없음',
    },
    maxFiles: {
      ...numberControlArg,
      description: '최대 파일 개수. 0이면 제한 없음',
    },
    avatarSrc: { table: { disable: true } },
    avatarAlt: { table: { disable: true } },
    files: { table: { disable: true } },
    defaultFiles: { table: { disable: true } },
    trigger: { table: { disable: true } },
    cards: { table: { disable: true } },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onError: { table: { disable: true } },
  },
} satisfies Meta<UploadStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      <Upload {...uploadPropsFromArgs(args)} />
    </Demo>
  ),
};

export const Basic: Story = { name: '버튼 업로드', render: (args) => <Demo><Upload buttonLabel="파일 선택" /><Upload hint="PNG, JPG · 최대 5MB" trigger={<span className="btn btn_outline color_primary"><span className="btn_label">업로드</span></span>} /><Upload trigger={<><span className="btn btn_filled color_primary btn_sm"><span className="btn_label">Small</span></span><span className="btn btn_filled color_primary btn_lg"><span className="btn_label">Large</span></span></>} /><Upload disabled buttonLabel="비활성" /></Demo> };
export const Dropzone: Story = { name: '드래그 앤 드롭', render: (args) => <Demo><Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} description="PNG, JPG, PDF · 파일당 최대 5MB" hint="최대 3개까지 첨부할 수 있습니다." /><Upload variant="drag" fit dragover title="파일을 놓으세요" description="is-dragover 상태" /></Demo> };
export const List: Story = { name: '파일 목록', render: (args) => <Upload variant="list" fit multiple defaultFiles={[{ name: '프로젝트_제안서_v2.pdf', size: 2516582, status: 'uploading', progress: 60 }, sampleFile, { name: '대용량_영상.mp4', size: 12582912, status: 'error', error: '파일 크기가 10MB를 초과합니다.' }]} /> };
export const Cards: Story = { name: '사진 카드', render: (args) => <Upload variant="picture-card" multiple accept="image/*" maxFiles={5} buttonLabel="업로드" hint="최대 5장 · JPG, PNG" defaultFiles={[sampleImage('프로필-1.svg'), sampleImage('프로필-2.svg')]} /> };
export const Avatar: Story = { name: '아바타 업로드', render: (args) => <Upload variant="avatar" accept="image/*" avatarSrc={avatarSample} avatarAlt="프로필 사진" /> };
export const Size: Story = { name: '크기', render: (args) => <Demo>{(['sm', 'md', 'lg'] as const).map((size) => <Upload key={size} variant="drag" size={size} title={`${size.toUpperCase()} 업로드`} description="파일을 선택하세요." />)}</Demo> };
export const Width: Story = { name: '너비', render: (args) => <Demo><Upload variant="drag" title="전체 너비" /><Upload variant="drag" fit title="제한 너비" /></Demo> };
export const State: Story = { name: '상태', render: (args) => <Demo><Upload disabled hint="파일을 변경할 수 없습니다." defaultFiles={[sampleFile]} /><Upload variant="drag" error title="업로드 오류" description="허용되는 파일을 다시 선택해 주세요." /></Demo> };

function AttachmentForm() {
  const [files, setFiles] = useState<any[]>([]);
  return <form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}><div className="form_field"><p className="form_field-label" id="attachments-label">첨부 파일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></p><div aria-labelledby="attachments-label"><Upload files={files} onChange={setFiles} multiple accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} maxFiles={3} hint="PDF, DOC, DOCX · 파일당 최대 10MB" /></div>{!files.length && <p className="form_field-error" role="alert">파일을 한 개 이상 첨부해 주세요.</p>}</div><div className="form_actions"><button type="submit" className="btn btn_filled color_primary"><span className="btn_label">제출</span></button></div></form>;
}
export const Example: Story = { name: '조합 예시', render: (args) => <AttachmentForm /> };
