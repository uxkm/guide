import React from 'react';
import { avatarSample } from '@images';
import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Upload from './Upload.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  uploadClassColumns,
  uploadClasses,
  uploadPropColumns,
  uploadProps,
  uploadTokenColumns,
  uploadTokens,
} from '@doc-data/upload-api';

const uploadChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const uploadChildren = [
  { name: 'trigger', description: '업로드 트리거 UI (button·drag·picture-card·avatar)' },
  { name: 'hint', description: '힌트 텍스트 또는 커스텀 노드 (button·drag)' },
  { name: 'children', description: '파일 목록 등 (Vue default 슬롯 대응)' },
  { name: 'cards', description: '이미지 카드 그리드 (picture-card)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 input-id · picture-card는 inputId · picture-card로 다룹니다.',
    tables: [{ columns: uploadPropColumns, rows: uploadProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue 슬롯에 대응하는 React prop·children입니다.',
    tables: [{ columns: uploadChildColumns, rows: uploadChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: uploadClassColumns, rows: uploadClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: uploadTokenColumns, rows: uploadTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  variant: 'button',
  disabled: false,
  fit: false,
  size: 'md',
  multiple: false,
  accept: '',
  inputId: '',
  hint: '',
  dragover: false,
  error: false,
};

export default {
  title: 'Components/폼/Upload',
  id: 'components-upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['button', 'drag', 'list', 'picture-card', 'avatar'],
      type: {
        name: 'enum',
        summary: "'button' | 'drag' | 'list' | 'picture-card' | 'avatar'",
      },
    },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    fit: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    multiple: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    accept: { control: 'text', type: { name: 'string', summary: 'string' } },
    inputId: { control: 'text', type: { name: 'string', summary: 'string' } },
    hint: { control: 'text', type: { name: 'string', summary: 'string' } },
    dragover: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    error: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '파일 업로드 UI를 구성하는 Upload 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Upload
      {...args}
      trigger={
        <span className="btn btn_outline color_primary">
          <span className="btn_label">파일 선택</span>
        </span>
      }
    />
  ),
};

export const ButtonDemo = {
  name: '버튼 업로드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`label.upload_trigger` 안에 `span.btn`으로 버튼 스킨을 적용합니다. `button` 요소는 label 안에 넣지 않습니다.',
      },
      source: {
        code: `import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ButtonExample() {
  return (
    <>
      <Upload
        variant="button"
        trigger={
          <span className="btn btn_filled color_primary">
            <span className="btn_label">파일 선택</span>
          </span>
        }
      />
      <Upload
        variant="button"
        hint="PNG, JPG · 최대 5MB"
        trigger={
          <span className="btn btn_outline color_primary">
            <span className="btn_label">업로드</span>
          </span>
        }
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
      <Upload
        variant="button"
        trigger={
          <span className="btn btn_filled color_primary">
            <span className="btn_label">파일 선택</span>
          </span>
        }
      />
      <Upload
        variant="button"
        hint="PNG, JPG · 최대 5MB"
        trigger={
          <span className="btn btn_outline color_primary">
            <span className="btn_label">업로드</span>
          </span>
        }
      />
      <Upload
        variant="button"
        trigger={
          <>
            <span className="btn btn_filled color_primary btn_sm">
              <span className="btn_label">Small</span>
            </span>
            <span className="btn btn_filled color_primary btn_lg">
              <span className="btn_label">Large</span>
            </span>
          </>
        }
      />
      <Upload
        variant="button"
        disabled
        trigger={
          <span className="btn btn_filled color_primary is-disabled">
            <span className="btn_label">비활성</span>
          </span>
        }
      />
    </>,
  ),
};

export const Dropzone = {
  name: '드래그 앤 드롭',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`upload_dropzone`으로 클릭·드래그 영역을 만듭니다. `multiple` · `accept` 속성으로 파일 제한을 지정합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function DropzoneExample() {
  return (
    <Upload
      variant="drag"
      fit
      multiple
      trigger={
        <>
          <span className="upload_dropzone-icon" aria-hidden="true">
            <Icon name="upload" size="xl" />
          </span>
          <span className="upload_dropzone-title">
            파일을 여기에 끌어다 놓거나 클릭하세요
          </span>
          <span className="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
        </>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Upload
        variant="drag"
        fit
        multiple
        trigger={
          <>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">
              파일을 여기에 끌어다 놓거나 클릭하세요
            </span>
            <span className="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
          </>
        }
      />
      <Upload
        variant="drag"
        fit
        dragover
        trigger={
          <>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">파일을 놓으세요</span>
            <span className="upload_dropzone-desc">is-dragover 상태</span>
          </>
        }
      />
    </>,
  ),
};

export const ListDemo = {
  name: '파일 목록',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`upload_list` · `upload_item`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 `upload_progress-bar`의 `style={{ width: … }}`로 제어합니다. (List 컴포넌트 포팅 전까지 OOCSS 마크업을 사용합니다.)',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ListExample() {
  return (
    <Upload
      variant="button"
      fit
      multiple
      trigger={
        <span className="btn btn_filled color_primary">
          <span className="btn_label">파일 추가</span>
        </span>
      }
    >
      <ul className="list upload_list">
        <li className="list_item upload_item is-uploading">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div
              className="upload_progress"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="업로드 진행률"
            >
              <span className="upload_progress-bar" style={{ width: '60%' }} />
            </div>
            <span className="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="업로드 취소"
            iconBefore={<Icon name="close" />}
          />
        </li>
      </ul>
    </Upload>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Upload
      variant="button"
      fit
      multiple
      trigger={
        <span className="btn btn_filled color_primary">
          <span className="btn_label">파일 추가</span>
        </span>
      }
    >
      <ul className="list upload_list">
        <li className="list_item upload_item is-uploading">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div
              className="upload_progress"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="업로드 진행률"
            >
              <span className="upload_progress-bar" style={{ width: '60%' }} />
            </div>
            <span className="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="업로드 취소"
            iconBefore={<Icon name="close" />}
          />
        </li>
        <li className="list_item upload_item is-done">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">디자인_가이드.zip</span>
            <span className="upload_item-meta">업로드 완료 · 8.1 MB</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="파일 삭제"
            iconBefore={<Icon name="trash" />}
          />
        </li>
        <li className="list_item upload_item is-error">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" color="danger" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">대용량_영상.mp4</span>
            <div
              className="upload_progress"
              role="progressbar"
              aria-valuenow={42}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="업로드 진행률"
            >
              <span className="upload_progress-bar" style={{ width: '42%' }} />
            </div>
            <span className="upload_item-meta">파일 크기가 10MB를 초과합니다.</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="파일 삭제"
            iconBefore={<Icon name="trash" />}
          />
        </li>
      </ul>
    </Upload>,
  ),
};

export const Card = {
  name: '사진 카드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`upload_cards` 그리드에 미리보기 카드와 `upload_card-trigger`를 배치합니다. 호버 시 `upload_card-actions` 오버레이가 표시됩니다.',
      },
      source: {
        code: `import { avatarSample } from '@images';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function CardExample() {
  return (
    <Upload
      variant="picture-card"
      accept="image/*"
      hint="최대 5장 · JPG, PNG"
      trigger={
        <>
          <Icon name="plus" size="lg" />
          <span>업로드</span>
        </>
      }
      cards={
        <>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 1" />
            <div className="upload_card-actions">
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="미리보기"
                iconBefore={<Icon name="eye" />}
              />
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="삭제"
                iconBefore={<Icon name="trash" />}
              />
            </div>
          </div>
        </>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Upload
      variant="picture-card"
      accept="image/*"
      hint="최대 5장 · JPG, PNG"
      trigger={
        <>
          <Icon name="plus" size="lg" />
          <span>업로드</span>
        </>
      }
      cards={
        <>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 1" />
            <div className="upload_card-actions">
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="미리보기"
                iconBefore={<Icon name="eye" />}
              />
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="삭제"
                iconBefore={<Icon name="trash" />}
              />
            </div>
          </div>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 2" />
            <div className="upload_card-actions">
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="미리보기"
                iconBefore={<Icon name="eye" />}
              />
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="삭제"
                iconBefore={<Icon name="trash" />}
              />
            </div>
          </div>
        </>
      }
    />,
  ),
};

export const AvatarDemo = {
  name: '아바타 업로드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '`upload_avatar`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다.',
      },
      source: {
        code: `import { avatarSample } from '@images';
import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function AvatarExample() {
  return (
    <Upload
      variant="avatar"
      accept="image/*"
      inputId="upload-avatar"
      trigger={
        <>
          <Avatar size="xl" src={avatarSample} alt="프로필 사진" />
          <span className="upload_avatar-overlay" aria-hidden="true">
            <Icon name="upload" size="lg" />
          </span>
        </>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Upload
      variant="avatar"
      accept="image/*"
      inputId="upload-avatar"
      trigger={
        <>
          <Avatar size="xl" src={avatarSample} alt="프로필 사진" />
          <span className="upload_avatar-overlay" aria-hidden="true">
            <Icon name="upload" size="lg" />
          </span>
        </>
      }
    />,
  ),
};

export const Form = {
  name: '폼 필드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '`form_field`와 조합해 레이블·힌트·오류 메시지를 표시합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function FormExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="upload-form-attach">
        첨부파일
      </label>
      <Upload
        variant="drag"
        fit
        multiple
        inputId="upload-form-attach"
        trigger={
          <>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">파일을 선택하세요</span>
            <span className="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
          </>
        }
      />
      <p className="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
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
        <label className="form_field-label" htmlFor="upload-form-attach">
          첨부파일
        </label>
        <Upload
          variant="drag"
          fit
          multiple
          inputId="upload-form-attach"
          trigger={
            <>
              <span className="upload_dropzone-icon" aria-hidden="true">
                <Icon name="upload" size="xl" />
              </span>
              <span className="upload_dropzone-title">파일을 선택하세요</span>
              <span className="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
            </>
          }
        />
        <p className="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="upload-form-error">
          증빙 서류
        </label>
        <Upload
          variant="drag"
          fit
          error
          inputId="upload-form-error"
          trigger={
            <>
              <span className="upload_dropzone-icon" aria-hidden="true">
                <Icon name="upload" size="xl" />
              </span>
              <span className="upload_dropzone-title">필수 서류를 업로드하세요</span>
              <span className="upload_dropzone-desc">is-error 상태</span>
            </>
          }
        />
        <p className="form_field-error" id="upload-form-error-msg">
          첨부파일은 필수입니다.
        </p>
      </div>
    </>,
  ),
};
