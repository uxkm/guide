<script>
export const docMeta = {
  title: 'Upload | HTML Components',
  activeNav: 'upload',
  pageTitle: 'Upload',
};
</script>

<script setup>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import { avatarSample } from '@images';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Upload from '@/components/Upload.vue';
import {
  uploadClassColumns,
  uploadClasses,
  uploadPropColumns,
  uploadProps,
  uploadSlotColumns,
  uploadSlots,
  uploadTokenColumns,
  uploadTokens,
} from '@/doc/data/upload-api';
</script>

<template>
  <div class="page_intro">
    <h1>Upload</h1>
    <p class="lead">
      파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다.
      <code>upload_input</code>은 시각적으로 숨기고 <code>label.upload_trigger</code> ·
      <code>label.upload_dropzone</code>으로 트리거합니다.
      버튼형 트리거는 <code>button</code> 대신 <code>span.btn</code>으로 스킨을 적용합니다.
    </p>
  </div>

  <DemoSection
    heading-id="button-heading"
    title="버튼 업로드"
    description="<code>label.upload_trigger</code> 안에 <code>span.btn</code>으로 버튼 스킨을 적용합니다. <code>button</code> 요소는 label 안에 넣지 않습니다."
    stack
  >
    <Upload variant="button">
      <template #trigger>
        <span class="btn btn_filled color_primary"><span class="btn_label">파일 선택</span></span>
      </template>
    </Upload>

    <Upload variant="button" hint="PNG, JPG · 최대 5MB">
      <template #trigger>
        <span class="btn btn_outline color_primary"><span class="btn_label">업로드</span></span>
      </template>
    </Upload>

    <Upload variant="button">
      <template #trigger>
        <span class="btn btn_filled color_primary btn_sm"><span class="btn_label">Small</span></span>
        <span class="btn btn_filled color_primary btn_lg"><span class="btn_label">Large</span></span>
      </template>
    </Upload>

    <Upload variant="button" disabled>
      <template #trigger>
        <span class="btn btn_filled color_primary is-disabled"><span class="btn_label">비활성</span></span>
      </template>
    </Upload>
  </DemoSection>

  <DemoSection
    heading-id="dropzone-heading"
    title="드래그 앤 드롭"
    description="<code>upload_dropzone</code>으로 클릭·드래그 영역을 만듭니다. <code>multiple</code> · <code>accept</code> 속성으로 파일 제한을 지정합니다."
    stack
  >
    <Upload variant="drag" fit multiple>
      <template #trigger>
        <span class="upload_dropzone-icon" aria-hidden="true">
          <Icon name="upload" size="xl" />
        </span>
        <span class="upload_dropzone-title">파일을 여기에 끌어다 놓거나 클릭하세요</span>
        <span class="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
      </template>
    </Upload>

    <Upload variant="drag" fit dragover>
      <template #trigger>
        <span class="upload_dropzone-icon" aria-hidden="true">
          <Icon name="upload" size="xl" />
        </span>
        <span class="upload_dropzone-title">파일을 놓으세요</span>
        <span class="upload_dropzone-desc">is-dragover 상태</span>
      </template>
    </Upload>
  </DemoSection>

  <DemoSection
    heading-id="list-heading"
    title="파일 목록"
    description="<code>upload_list</code> · <code>upload_item</code>으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 <code>upload_progress-bar</code>의 <code>style=&quot;width: …&quot;</code> 또는 CSS 변수로 제어합니다."
    stack
  >
    <Upload variant="button" fit multiple>
      <template #trigger>
        <span class="btn btn_filled color_primary"><span class="btn_label">파일 추가</span></span>
      </template>
      <template #default>
        <List class="upload_list">
          <ListItem class="upload_item is-uploading">
            <span class="upload_item-icon" aria-hidden="true">
              <Icon name="file" />
            </span>
            <div class="upload_item-body">
              <span class="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
              <div class="upload_progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="업로드 진행률">
                <span class="upload_progress-bar" style="width: 60%" />
              </div>
              <span class="upload_item-meta">2.4 MB · 60%</span>
            </div>
            <Button variant="text" color="danger" icon-only class="upload_item-action" aria-label="업로드 취소">
              <template #icon-before>
                <Icon name="close" />
              </template>
            </Button>
          </ListItem>

          <ListItem class="upload_item is-done">
            <span class="upload_item-icon" aria-hidden="true">
              <Icon name="file" />
            </span>
            <div class="upload_item-body">
              <span class="upload_item-name text_ellipsis">디자인_가이드.zip</span>
              <span class="upload_item-meta">업로드 완료 · 8.1 MB</span>
            </div>
            <Button variant="text" color="danger" icon-only class="upload_item-action" aria-label="파일 삭제">
              <template #icon-before>
                <Icon name="trash" />
              </template>
            </Button>
          </ListItem>

          <ListItem class="upload_item is-error">
            <span class="upload_item-icon" aria-hidden="true">
              <Icon name="file" color="danger" />
            </span>
            <div class="upload_item-body">
              <span class="upload_item-name text_ellipsis">대용량_영상.mp4</span>
              <div class="upload_progress" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="업로드 진행률">
                <span class="upload_progress-bar" style="width: 42%" />
              </div>
              <span class="upload_item-meta">파일 크기가 10MB를 초과합니다.</span>
            </div>
            <Button variant="text" color="danger" icon-only class="upload_item-action" aria-label="파일 삭제">
              <template #icon-before>
                <Icon name="trash" />
              </template>
            </Button>
          </ListItem>
        </List>
      </template>
    </Upload>
  </DemoSection>

  <DemoSection
    heading-id="card-heading"
    title="사진 카드"
    description="<code>upload_cards</code> 그리드에 미리보기 카드와 <code>upload_card-trigger</code>를 배치합니다. 호버 시 <code>upload_card-actions</code> 오버레이가 표시됩니다."
  >
    <Upload variant="picture-card" accept="image/*" hint="최대 5장 · JPG, PNG">
      <template #trigger>
        <Icon name="plus" size="lg" />
        <span>업로드</span>
      </template>
      <template #cards>
        <div class="upload_card">
          <img class="upload_card-image" :src="avatarSample" alt="미리보기 1" />
          <div class="upload_card-actions">
            <Button variant="ghost" icon-only size="sm" aria-label="미리보기">
              <template #icon-before>
                <Icon name="eye" />
              </template>
            </Button>
            <Button variant="ghost" icon-only size="sm" aria-label="삭제">
              <template #icon-before>
                <Icon name="trash" />
              </template>
            </Button>
          </div>
        </div>

        <div class="upload_card">
          <img class="upload_card-image" :src="avatarSample" alt="미리보기 2" />
          <div class="upload_card-actions">
            <Button variant="ghost" icon-only size="sm" aria-label="미리보기">
              <template #icon-before>
                <Icon name="eye" />
              </template>
            </Button>
            <Button variant="ghost" icon-only size="sm" aria-label="삭제">
              <template #icon-before>
                <Icon name="trash" />
              </template>
            </Button>
          </div>
        </div>
      </template>
    </Upload>
  </DemoSection>

  <DemoSection
    heading-id="avatar-heading"
    title="아바타 업로드"
    description="<code>upload_avatar</code>로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다."
  >
    <Upload variant="avatar" accept="image/*" input-id="upload-avatar">
      <template #trigger>
        <Avatar size="xl" :src="avatarSample" alt="프로필 사진" />
        <span class="upload_avatar-overlay" aria-hidden="true">
          <Icon name="upload" size="lg" />
        </span>
      </template>
    </Upload>
  </DemoSection>

  <DemoSection
    heading-id="form-heading"
    title="폼 필드"
    description="<code>form_field</code>와 조합해 레이블·힌트·오류 메시지를 표시합니다."
    stack
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="upload-form-attach">첨부파일</label>
      <Upload variant="drag" fit multiple input-id="upload-form-attach">
        <template #trigger>
          <span class="upload_dropzone-icon" aria-hidden="true">
            <Icon name="upload" size="xl" />
          </span>
          <span class="upload_dropzone-title">파일을 선택하세요</span>
          <span class="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
        </template>
      </Upload>
      <p class="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="upload-form-error">증빙 서류</label>
      <Upload variant="drag" fit error input-id="upload-form-error">
        <template #trigger>
          <span class="upload_dropzone-icon" aria-hidden="true">
            <Icon name="upload" size="xl" />
          </span>
          <span class="upload_dropzone-title">필수 서류를 업로드하세요</span>
          <span class="upload_dropzone-desc">is-error 상태</span>
        </template>
      </Upload>
      <p class="form_field-error" id="upload-form-error-msg">첨부파일은 필수입니다.</p>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="uploadPropColumns" :rows="uploadProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="uploadSlotColumns" :rows="uploadSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="uploadClassColumns" :rows="uploadClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="uploadTokenColumns" :rows="uploadTokens" code-column="name" />
  </ApiSection>
</template>
