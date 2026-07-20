import Upload from './Upload.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Avatar from './Avatar.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import List from './List.vue';
import ListItem from './ListItem.vue';
import { avatarSample } from '@images';
import {
  uploadClassColumns,
  uploadClasses,
  uploadPropColumns,
  uploadProps,
  uploadSlotColumns,
  uploadSlots,
  uploadTokenColumns,
  uploadTokens,
} from '@doc-data/upload-api';
const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: uploadPropColumns, rows: uploadProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: uploadSlotColumns, rows: uploadSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: uploadClassColumns, rows: uploadClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: uploadTokenColumns, rows: uploadTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/폼/Upload',
  id: 'components-upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ["button","drag","list","picture-card","avatar"], type: { name: 'enum', summary: "'button' | 'drag' | 'list' | 'picture-card' | 'avatar'" }},
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    fit: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    multiple: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    accept: { control: 'text', type: { name: 'string', summary: "string" }},
    inputId: { control: 'text', type: { name: 'string', summary: "string" }},
    hint: { control: 'text', type: { name: 'string', summary: "string" }},
    dragover: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    error: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    variant: "button",
    disabled: false,
    fit: false,
    size: "md",
    multiple: false,
    accept: "값",
    inputId: "값",
    hint: "값",
    dragover: false,
    error: false,
  },
  render: (_args, context) => ({
    components: { Upload },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Upload v-bind="args">
      <template #trigger>
        <span class="btn btn_outline color_primary">
          <span class="btn_label">파일 선택</span>
        </span>
      </template>
    </Upload>`,
  }),
};


export const ButtonDemo = {
  name: "버튼 업로드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`label.upload_trigger` 안에 `span.btn`으로 버튼 스킨을 적용합니다. `button` 요소는 label 안에 넣지 않습니다.",
      },
      source: {
        code: "<script setup>\nimport Upload from '@uxkm/ui/components/Upload.vue';\n</script>\n\n<template>\n  <Upload variant=\"button\">\n    <template #trigger>\n      <span class=\"btn btn_filled color_primary\">\n        <span class=\"btn_label\">파일 선택</span>\n      </span>\n    </template>\n  </Upload>\n  <Upload variant=\"button\" hint=\"PNG, JPG · 최대 5MB\">\n    <template #trigger>\n      <span class=\"btn btn_outline color_primary\">\n        <span class=\"btn_label\">업로드</span>\n      </span>\n    </template>\n  </Upload>\n  <Upload variant=\"button\">\n    <template #trigger>\n      <span class=\"btn btn_filled color_primary btn_sm\">\n        <span class=\"btn_label\">Small</span>\n      </span>\n      <span class=\"btn btn_filled color_primary btn_lg\">\n        <span class=\"btn_label\">Large</span>\n      </span>\n    </template>\n  </Upload>\n  <Upload variant=\"button\" disabled>\n    <template #trigger>\n      <span class=\"btn btn_filled color_primary is-disabled\">\n        <span class=\"btn_label\">비활성</span>\n      </span>\n    </template>\n  </Upload>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  size: "md",
  accept: "값",
  inputId: "값",
  hint: "값"
},
  render: withDocsCanvasRender(() => ({
    components: { Upload },
    template: `        <Upload variant="button">
        <template #trigger>
        <span class="btn btn_filled color_primary">
        <span class="btn_label">파일 선택</span>
        </span>
        </template>
        </Upload>
        <Upload variant="button" hint="PNG, JPG · 최대 5MB">
        <template #trigger>
        <span class="btn btn_outline color_primary">
        <span class="btn_label">업로드</span>
        </span>
        </template>
        </Upload>
        <Upload variant="button">
        <template #trigger>
        <span class="btn btn_filled color_primary btn_sm">
        <span class="btn_label">Small</span>
        </span>
        <span class="btn btn_filled color_primary btn_lg">
        <span class="btn_label">Large</span>
        </span>
        </template>
        </Upload>
        <Upload variant="button" disabled>
        <template #trigger>
        <span class="btn btn_filled color_primary is-disabled">
        <span class="btn_label">비활성</span>
        </span>
        </template>
        </Upload>`,
  })),
};


export const Dropzone = {
  name: "드래그 앤 드롭",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`upload_dropzone`으로 클릭·드래그 영역을 만듭니다. `multiple` · `accept` 속성으로 파일 제한을 지정합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Upload from '@uxkm/ui/components/Upload.vue';\n</script>\n\n<template>\n  <Upload variant=\"drag\" fit multiple>\n    <template #trigger>\n      <span class=\"upload_dropzone-icon\" aria-hidden=\"true\">\n        <Icon name=\"upload\" size=\"xl\" />\n      </span>\n      <span class=\"upload_dropzone-title\">파일을 여기에 끌어다 놓거나 클릭하세요</span>\n      <span class=\"upload_dropzone-desc\">단일 또는 다중 파일 · 최대 10MB</span>\n    </template>\n  </Upload>\n  <Upload variant=\"drag\" fit dragover>\n    <template #trigger>\n      <span class=\"upload_dropzone-icon\" aria-hidden=\"true\">\n        <Icon name=\"upload\" size=\"xl\" />\n      </span>\n      <span class=\"upload_dropzone-title\">파일을 놓으세요</span>\n      <span class=\"upload_dropzone-desc\">is-dragover 상태</span>\n    </template>\n  </Upload>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  disabled: false,
  fit: false,
  size: "md",
  multiple: false,
  accept: "값",
  inputId: "값",
  hint: "값",
  dragover: false,
  error: false
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Upload },
    template: `        <Upload variant="drag" fit multiple>
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
        </Upload>`,
  })),
};


export const ListDemo = {
  name: "파일 목록",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`upload_list` · `upload_item`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 `upload_progress-bar`의 `style=\"width: …\"` 또는 CSS 변수로 제어합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\nimport Upload from '@uxkm/ui/components/Upload.vue';\n</script>\n\n<template>\n  <Upload variant=\"button\" fit multiple>\n    <template #trigger>\n      <span class=\"btn btn_filled color_primary\">\n        <span class=\"btn_label\">파일 추가</span>\n      </span>\n    </template>\n    <template #default>\n      <List class=\"upload_list\">\n        <ListItem class=\"upload_item is-uploading\">\n          <span class=\"upload_item-icon\" aria-hidden=\"true\">\n            <Icon name=\"file\" />\n          </span>\n          <div class=\"upload_item-body\">\n            <span class=\"upload_item-name text_ellipsis\">프로젝트_제안서_v2.pdf</span>\n            <div class=\"upload_progress\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"업로드 진행률\">\n              <span class=\"upload_progress-bar\" style=\"width: 60%\" />\n            </div>\n            <span class=\"upload_item-meta\">2.4 MB · 60%</span>\n          </div>\n          <Button variant=\"text\" color=\"danger\" icon-only class=\"upload_item-action\" aria-label=\"업로드 취소\">\n            <template #icon-before>\n              <Icon name=\"close\" />\n            </template>\n          </Button>\n        </ListItem>\n        <ListItem class=\"upload_item is-done\">\n          <span class=\"upload_item-icon\" aria-hidden=\"true\">\n            <Icon name=\"file\" />\n          </span>\n          <div class=\"upload_item-body\">\n            <span class=\"upload_item-name text_ellipsis\">디자인_가이드.zip</span>\n            <span class=\"upload_item-meta\">업로드 완료 · 8.1 MB</span>\n          </div>\n          <Button variant=\"text\" color=\"danger\" icon-only class=\"upload_item-action\" aria-label=\"파일 삭제\">\n            <template #icon-before>\n              <Icon name=\"trash\" />\n            </template>\n          </Button>\n        </ListItem>\n        <ListItem class=\"upload_item is-error\">\n          <span class=\"upload_item-icon\" aria-hidden=\"true\">\n            <Icon name=\"file\" color=\"danger\" />\n          </span>\n          <div class=\"upload_item-body\">\n            <span class=\"upload_item-name text_ellipsis\">대용량_영상.mp4</span>\n            <div class=\"upload_progress\" role=\"progressbar\" aria-valuenow=\"42\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"업로드 진행률\">\n              <span class=\"upload_progress-bar\" style=\"width: 42%\" />\n            </div>\n            <span class=\"upload_item-meta\">파일 크기가 10MB를 초과합니다.</span>\n          </div>\n          <Button variant=\"text\" color=\"danger\" icon-only class=\"upload_item-action\" aria-label=\"파일 삭제\">\n            <template #icon-before>\n              <Icon name=\"trash\" />\n            </template>\n          </Button>\n        </ListItem>\n      </List>\n    </template>\n  </Upload>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  disabled: false,
  fit: false,
  size: "md",
  multiple: false,
  accept: "값",
  inputId: "값",
  hint: "값",
  dragover: false,
  error: false
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon, List, ListItem, Upload },
    template: `        <Upload variant="button" fit multiple>
        <template #trigger>
        <span class="btn btn_filled color_primary">
        <span class="btn_label">파일 추가</span>
        </span>
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
        </Upload>`,
  })),
};


export const Card = {
  name: "사진 카드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`upload_cards` 그리드에 미리보기 카드와 `upload_card-trigger`를 배치합니다. 호버 시 `upload_card-actions` 오버레이가 표시됩니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Upload from '@uxkm/ui/components/Upload.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <Upload variant=\"picture-card\" accept=\"image/*\" hint=\"최대 5장 · JPG, PNG\">\n    <template #trigger>\n      <Icon name=\"plus\" size=\"lg\" />\n      <span>업로드</span>\n    </template>\n    <template #cards>\n      <div class=\"upload_card\">\n        <img class=\"upload_card-image\" :src=\"avatarSample\" alt=\"미리보기 1\" />\n        <div class=\"upload_card-actions\">\n          <Button variant=\"ghost\" icon-only size=\"sm\" aria-label=\"미리보기\">\n            <template #icon-before>\n              <Icon name=\"eye\" />\n            </template>\n          </Button>\n          <Button variant=\"ghost\" icon-only size=\"sm\" aria-label=\"삭제\">\n            <template #icon-before>\n              <Icon name=\"trash\" />\n            </template>\n          </Button>\n        </div>\n      </div>\n      <div class=\"upload_card\">\n        <img class=\"upload_card-image\" :src=\"avatarSample\" alt=\"미리보기 2\" />\n        <div class=\"upload_card-actions\">\n          <Button variant=\"ghost\" icon-only size=\"sm\" aria-label=\"미리보기\">\n            <template #icon-before>\n              <Icon name=\"eye\" />\n            </template>\n          </Button>\n          <Button variant=\"ghost\" icon-only size=\"sm\" aria-label=\"삭제\">\n            <template #icon-before>\n              <Icon name=\"trash\" />\n            </template>\n          </Button>\n        </div>\n      </div>\n    </template>\n  </Upload>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  disabled: false,
  fit: false,
  size: "md",
  multiple: false,
  accept: "값",
  inputId: "값",
  hint: "값",
  dragover: false,
  error: false
},
  render: withDocsCanvasRender(() => ({
    components: { Button, Icon, Upload },
    setup() {
      return { avatarSample };
    },
    template: `        <Upload variant="picture-card" accept="image/*" hint="최대 5장 · JPG, PNG">
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
        </Upload>`,
  })),
};


export const AvatarDemo = {
  name: "아바타 업로드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "`upload_avatar`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Upload from '@uxkm/ui/components/Upload.vue';\nimport { avatarSample } from '@images';\n</script>\n\n<template>\n  <Upload variant=\"avatar\" accept=\"image/*\" input-id=\"upload-avatar\">\n    <template #trigger>\n      <Avatar size=\"xl\" :src=\"avatarSample\" alt=\"프로필 사진\" />\n      <span class=\"upload_avatar-overlay\" aria-hidden=\"true\">\n        <Icon name=\"upload\" size=\"lg\" />\n      </span>\n    </template>\n  </Upload>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  disabled: false,
  fit: false,
  size: "md",
  multiple: false,
  accept: "값",
  inputId: "값",
  hint: "값",
  dragover: false,
  error: false
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, Icon, Upload },
    setup() {
      return { avatarSample };
    },
    template: `        <Upload variant="avatar" accept="image/*" input-id="upload-avatar">
        <template #trigger>
        <Avatar size="xl" :src="avatarSample" alt="프로필 사진" />
        <span class="upload_avatar-overlay" aria-hidden="true">
        <Icon name="upload" size="lg" />
        </span>
        </template>
        </Upload>`,
  })),
};


export const Form = {
  name: "폼 필드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "`form_field`와 조합해 레이블·힌트·오류 메시지를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport Upload from '@uxkm/ui/components/Upload.vue';\n</script>\n\n<template>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"upload-form-attach\">첨부파일</label>\n    <Upload variant=\"drag\" fit multiple input-id=\"upload-form-attach\">\n      <template #trigger>\n        <span class=\"upload_dropzone-icon\" aria-hidden=\"true\">\n          <Icon name=\"upload\" size=\"xl\" />\n        </span>\n        <span class=\"upload_dropzone-title\">파일을 선택하세요</span>\n        <span class=\"upload_dropzone-desc\">PDF, DOCX · 최대 3개</span>\n      </template>\n    </Upload>\n    <p class=\"form_field-hint\">제출 전 파일명을 확인해 주세요.</p>\n  </div>\n  <div class=\"form_field form_field_fit\">\n    <label class=\"form_field-label\" for=\"upload-form-error\">증빙 서류</label>\n    <Upload variant=\"drag\" fit error input-id=\"upload-form-error\">\n      <template #trigger>\n        <span class=\"upload_dropzone-icon\" aria-hidden=\"true\">\n          <Icon name=\"upload\" size=\"xl\" />\n        </span>\n        <span class=\"upload_dropzone-title\">필수 서류를 업로드하세요</span>\n        <span class=\"upload_dropzone-desc\">is-error 상태</span>\n      </template>\n    </Upload>\n    <p class=\"form_field-error\" id=\"upload-form-error-msg\">첨부파일은 필수입니다.</p>\n  </div>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  variant: "button",
  disabled: false,
  fit: false,
  size: "md",
  multiple: false,
  accept: "값",
  inputId: "값",
  hint: "값",
  dragover: false,
  error: false
},
  render: withDocsCanvasRender(() => ({
    components: { Icon, Upload },
    template: `        <div class="form_field form_field_fit">
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
        </div>`,
  })),
};

