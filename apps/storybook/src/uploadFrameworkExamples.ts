import type { FrameworkExample } from './FrameworkCode';
type Source = { html: string; react: string; vue: string };
const input = (id: string, attrs = '') => `<input id="${id}" class="upload_input" type="file" tabindex="-1"${attrs}>`;
const sources: Record<string, Source> = {
  basic: { html: `<div class="upload" data-component="Upload"><label class="upload_trigger" for="upload-basic" tabindex="0">${input('upload-basic')}<span class="btn btn_filled color_primary"><span class="btn_label">파일 선택</span></span></label><p class="upload_hint">PDF 또는 문서 파일을 첨부해 주세요.</p><ul class="upload_list" data-upload-list></ul></div>`, react: '<Upload buttonLabel="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />', vue: '<Upload button-label="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />' },
  dropzone: { html: `<div class="upload upload_fit" data-component="Upload" data-max-size="5242880" data-max-files="3"><label class="upload_dropzone" for="upload-drop" tabindex="0">${input('upload-drop', ' accept="image/png,image/jpeg,.pdf" multiple')}<span class="upload_dropzone-title">파일을 끌어다 놓거나 선택하세요</span><span class="upload_dropzone-desc">PNG, JPG, PDF · 파일당 최대 5MB</span></label><p class="form_field-error" data-upload-error hidden></p><ul class="upload_list" data-upload-list></ul></div>`, react: '<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} />', vue: '<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" :max-size="5 * 1024 * 1024" :max-files="3" />' },
  list: { html: `<div class="upload upload_fit" data-component="Upload"><ul class="upload_list"><li class="upload_item is-uploading"><span class="upload_item-body"><span class="upload_item-name">프로젝트_제안서_v2.pdf</span><span class="upload_progress" role="progressbar" aria-valuenow="60"><span class="upload_progress-bar" style="width:60%"></span></span><span class="upload_item-meta">2.4 MB · 60%</span></span></li><li class="upload_item is-done">업로드 완료</li><li class="upload_item is-error">업로드 오류</li></ul></div>`, react: '<Upload variant="list" defaultFiles={[{ name: \'제안서.pdf\', size: 2516582, status: \'uploading\', progress: 60 }]} />', vue: '<Upload variant="list" :default-files="[{ name: \'제안서.pdf\', size: 2516582, status: \'uploading\', progress: 60 }]" />' },
  cards: { html: `<div class="upload" data-component="Upload"><div class="upload_cards"><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 1"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 1 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 2"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 2 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><label class="upload_card upload_card-trigger" for="upload-cards" tabindex="0">${input('upload-cards', ' accept="image/*" multiple')}<svg class="icon icon_lg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg><span>업로드</span></label></div></div>`, react: `<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  maxFiles={5}
  buttonLabel="업로드"
  defaultFiles={[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]}
/>`, vue: `<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  :max-files="5"
  button-label="업로드"
  :default-files="[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]"
/>` },
  avatar: { html: `<div class="upload" data-component="Upload"><label class="upload_avatar" for="upload-avatar">${input('upload-avatar', ' accept="image/*"')}<span class="avatar avatar_xl"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 사진"></span><span class="upload_avatar-overlay" aria-hidden="true"><svg class="icon icon_lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="m16 6-4-4-4 4M12 2v13"></path></svg></span></label></div>`, react: '<Upload variant="avatar" accept="image/*" avatarSrc="/images/samples/avatar/avatar-sample.svg" avatarAlt="프로필 사진" />', vue: '<Upload variant="avatar" accept="image/*" avatar-src="/images/samples/avatar/avatar-sample.svg" avatar-alt="프로필 사진" />' },
  size: { html: ['sm', 'md', 'lg'].map((size) => `<div class="upload${size === 'md' ? '' : ` upload_${size}`}" data-component="Upload"><label class="upload_dropzone" for="upload-${size}">${input(`upload-${size}`)}<span class="upload_dropzone-title">${size.toUpperCase()} 업로드</span></label></div>`).join('\n'), react: `<>{['sm', 'md', 'lg'].map((size) => <Upload key={size} variant="drag" size={size} />)}</>`, vue: `<Upload v-for="size in ['sm', 'md', 'lg']" :key="size" variant="drag" :size="size" />` },
  width: {
    html: `<div class="upload" data-component="Upload">
  <label class="upload_dropzone" for="upload-default-width" tabindex="0">
    <input id="upload-default-width" class="upload_input" type="file" tabindex="-1">
    <span class="upload_dropzone-title">기본 너비 업로드</span>
    <span class="upload_dropzone-desc">파일을 끌어다 놓거나 선택하세요.</span>
  </label>
  <ul class="upload_list" data-upload-list></ul>
</div>

<div class="upload upload_fit" data-component="Upload">
  <label class="upload_dropzone" for="upload-fit-width" tabindex="0">
    <input id="upload-fit-width" class="upload_input" type="file" tabindex="-1">
    <span class="upload_dropzone-title">전체 너비 업로드</span>
    <span class="upload_dropzone-desc">파일을 끌어다 놓거나 선택하세요.</span>
  </label>
  <ul class="upload_list" data-upload-list></ul>
</div>`,
    react: `<>
  <Upload variant="drag" title="기본 너비 업로드" />
  <Upload variant="drag" fit title="전체 너비 업로드" />
</>`,
    vue: `<Upload variant="drag" title="기본 너비 업로드" />
<Upload variant="drag" fit title="전체 너비 업로드" />`,
  },
  state: { html: `<div class="upload is-disabled" data-component="Upload"><label class="upload_trigger">${input('upload-disabled', ' disabled')}<span class="btn">파일 선택</span></label></div>\n<div class="upload" data-component="Upload"><label class="upload_dropzone is-error">업로드 오류</label></div>`, react: '<><Upload disabled /><Upload variant="drag" error title="업로드 오류" /></>', vue: '<Upload disabled />\n<Upload variant="drag" error title="업로드 오류" />' },
  example: { html: `<form class="form form_vertical form_fit"><div class="form_field"><p class="form_field-label">첨부 파일</p><div class="upload" data-component="Upload" data-max-size="10485760" data-max-files="3">${input('attachments', ' accept=".pdf,.doc,.docx" multiple')}<ul class="upload_list" data-upload-list></ul></div></div></form>`, react: '<Upload files={files} onChange={setFiles} multiple accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} maxFiles={3} />', vue: '<Upload v-model="files" multiple accept=".pdf,.doc,.docx" :max-size="10 * 1024 * 1024" :max-files="3" />' }
};
const indent = (value: string, spaces: number) => value.split('\n').map((line) => `${' '.repeat(spaces)}${line}`).join('\n');
function examples(key: string, source: Source): FrameworkExample[] {
  const stateful = key === 'example';
  const react = `${stateful ? "import { useState } from 'react';\n" : ''}import Upload from '@uxkm/react/upload';\n\nexport function Example() {${stateful ? '\n  const [files, setFiles] = useState([]);' : ''}\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\n${stateful ? "import { ref } from 'vue';\n" : ''}import Upload from '@uxkm/vue/upload';${stateful ? '\nconst files = ref([]);' : ''}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Upload.html · ${key}`, code: source.html }, { id: 'gulp', label: 'Gulp', fileName: `upload.njk · ${key}`, code: source.html }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/upload · ${key}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/upload · ${key}`, code: vue }, { id: 'react', label: 'React', fileName: `@uxkm/react/upload · ${key}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/upload · ${key}`, code: react }];
}
export const uploadFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
