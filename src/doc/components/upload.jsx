export const docMeta = {
  title: 'Upload | UXKM Guide',
  activeNav: 'upload',
  pageTitle: 'Upload',
};

import { avatarSample } from '@images';
import Avatar from '@/components/Avatar.jsx';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Upload from '@/components/Upload.jsx';
import {
  uploadChildColumns,
  uploadChildren,
  uploadClassColumns,
  uploadClasses,
  uploadPropColumns,
  uploadProps,
  uploadTokenColumns,
  uploadTokens,
} from '@/doc/data/upload-api';

const buttonCode = `import Upload from '@/components/Upload.jsx';

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
    </>
  );
}`;
const dropzoneCode = `import Icon from '@/components/Icon.jsx';
import Upload from '@/components/Upload.jsx';

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
}`;
const listCode = `import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import Upload from '@/components/Upload.jsx';

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
}`;
const cardCode = `import { avatarSample } from '@images';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import Upload from '@/components/Upload.jsx';

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
}`;
const avatarCode = `import { avatarSample } from '@images';
import Avatar from '@/components/Avatar.jsx';
import Icon from '@/components/Icon.jsx';
import Upload from '@/components/Upload.jsx';

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
}`;
const formCode = `import Icon from '@/components/Icon.jsx';
import Upload from '@/components/Upload.jsx';

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
}`;

export default function UploadDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Upload</h1>
        <p className="lead">
          파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다.
          <code>upload_input</code>은 시각적으로 숨기고 <code>label.upload_trigger</code> ·
          <code>label.upload_dropzone</code>으로 트리거합니다.
          버튼형 트리거는 <code>button</code> 대신 <code>span.btn</code>으로 스킨을 적용합니다.
        </p>
      </div>

      <DemoSection
        headingId="button-heading"
        title="버튼 업로드"
        description="`label.upload_trigger` 안에 `span.btn`으로 버튼 스킨을 적용합니다. `button` 요소는 label 안에 넣지 않습니다."
        stack
        code={buttonCode}
      >
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
    </>
      </DemoSection>

      <DemoSection
        headingId="dropzone-heading"
        title="드래그 앤 드롭"
        description="`upload_dropzone`으로 클릭·드래그 영역을 만듭니다. `multiple` · `accept` 속성으로 파일 제한을 지정합니다."
        stack
        code={dropzoneCode}
      >
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
    </>
      </DemoSection>

      <DemoSection
        headingId="list-heading"
        title="파일 목록"
        description="`upload_list` · `upload_item`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 `upload_progress-bar`의 `style={{ width: … }}`로 제어합니다. (List 컴포넌트 포팅 전까지 OOCSS 마크업을 사용합니다.)"
        stack
        code={listCode}
      >
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
    </Upload>
      </DemoSection>

      <DemoSection
        headingId="card-heading"
        title="사진 카드"
        description="`upload_cards` 그리드에 미리보기 카드와 `upload_card-trigger`를 배치합니다. 호버 시 `upload_card-actions` 오버레이가 표시됩니다."
        code={cardCode}
      >
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
    />
      </DemoSection>

      <DemoSection
        headingId="avatar-heading"
        title="아바타 업로드"
        description="`upload_avatar`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다."
        code={avatarCode}
      >
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
      </DemoSection>

      <DemoSection
        headingId="form-heading"
        title="폼 필드"
        description="`form_field`와 조합해 레이블·힌트·오류 메시지를 표시합니다."
        stack
        code={formCode}
      >
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
    </>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={uploadPropColumns} rows={uploadProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={uploadChildColumns} rows={uploadChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={uploadClassColumns} rows={uploadClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={uploadTokenColumns} rows={uploadTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
