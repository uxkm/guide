import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Upload.stories-CZ82poKq.js";import{i as p,r as m}from"./react-DSvVgjCn.js";import{c as h,r as g,u as _}from"./blocks-CkHyEh4O.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-D9Q6nkXJ.js";function S(e,t){let n=e===`example`,r=`${n?`import { useState } from 'react';
`:``}import Upload from '@uxkm/react/upload';\n\nexport function Example() {${n?`
  const [files, setFiles] = useState([]);`:``}\n  return (\n${T(t.react,4)}\n  );\n}`,i=`<script setup>\n${n?`import { ref } from 'vue';
`:``}import Upload from '@uxkm/vue/upload';${n?`
const files = ref([]);`:``}\n<\/script>\n\n<template>\n${T(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Upload.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`upload.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/upload · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/upload · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/upload · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/upload · ${e}`,code:r}]}var C,w,T,E;function D(){return(D=e((()=>{C=(e,t=``)=>`<input id="${e}" class="upload_input" type="file" tabindex="-1"${t}>`,w={basic:{html:`<div class="upload" data-component="Upload"><label class="upload_trigger" for="upload-basic" tabindex="0">${C(`upload-basic`)}<span class="btn btn_filled color_primary"><span class="btn_label">파일 선택</span></span></label><p class="upload_hint">PDF 또는 문서 파일을 첨부해 주세요.</p><ul class="upload_list" data-upload-list></ul></div>`,react:`<Upload buttonLabel="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />`,vue:`<Upload button-label="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />`},dropzone:{html:`<div class="upload upload_fit" data-component="Upload" data-max-size="5242880" data-max-files="3"><label class="upload_dropzone" for="upload-drop" tabindex="0">${C(`upload-drop`,` accept="image/png,image/jpeg,.pdf" multiple`)}<span class="upload_dropzone-title">파일을 끌어다 놓거나 선택하세요</span><span class="upload_dropzone-desc">PNG, JPG, PDF · 파일당 최대 5MB</span></label><p class="form_field-error" data-upload-error hidden></p><ul class="upload_list" data-upload-list></ul></div>`,react:`<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} />`,vue:`<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" :max-size="5 * 1024 * 1024" :max-files="3" />`},list:{html:`<div class="upload upload_fit" data-component="Upload"><ul class="upload_list"><li class="upload_item is-uploading"><span class="upload_item-body"><span class="upload_item-name">프로젝트_제안서_v2.pdf</span><span class="upload_progress" role="progressbar" aria-valuenow="60"><span class="upload_progress-bar" style="width:60%"></span></span><span class="upload_item-meta">2.4 MB · 60%</span></span></li><li class="upload_item is-done">업로드 완료</li><li class="upload_item is-error">업로드 오류</li></ul></div>`,react:`<Upload variant="list" defaultFiles={[{ name: '제안서.pdf', size: 2516582, status: 'uploading', progress: 60 }]} />`,vue:`<Upload variant="list" :default-files="[{ name: '제안서.pdf', size: 2516582, status: 'uploading', progress: 60 }]" />`},cards:{html:`<div class="upload" data-component="Upload"><div class="upload_cards"><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 1"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 1 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 2"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 2 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><label class="upload_card upload_card-trigger" for="upload-cards" tabindex="0">${C(`upload-cards`,` accept="image/*" multiple`)}<svg class="icon icon_lg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg><span>업로드</span></label></div></div>`,react:`<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  maxFiles={5}
  buttonLabel="업로드"
  defaultFiles={[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]}
/>`,vue:`<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  :max-files="5"
  button-label="업로드"
  :default-files="[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]"
/>`},avatar:{html:`<div class="upload" data-component="Upload"><label class="upload_avatar" for="upload-avatar">${C(`upload-avatar`,` accept="image/*"`)}<span class="avatar avatar_xl"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 사진"></span><span class="upload_avatar-overlay" aria-hidden="true"><svg class="icon icon_lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="m16 6-4-4-4 4M12 2v13"></path></svg></span></label></div>`,react:`<Upload variant="avatar" accept="image/*" avatarSrc="/images/samples/avatar/avatar-sample.svg" avatarAlt="프로필 사진" />`,vue:`<Upload variant="avatar" accept="image/*" avatar-src="/images/samples/avatar/avatar-sample.svg" avatar-alt="프로필 사진" />`},size:{html:[`sm`,`md`,`lg`].map(e=>`<div class="upload${e===`md`?``:` upload_${e}`}" data-component="Upload"><label class="upload_dropzone" for="upload-${e}">${C(`upload-${e}`)}<span class="upload_dropzone-title">${e.toUpperCase()} 업로드</span></label></div>`).join(`
`),react:`<>{['sm', 'md', 'lg'].map((size) => <Upload key={size} variant="drag" size={size} />)}</>`,vue:`<Upload v-for="size in ['sm', 'md', 'lg']" :key="size" variant="drag" :size="size" />`},width:{html:`<div class="upload" data-component="Upload">
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
</div>`,react:`<>
  <Upload variant="drag" title="기본 너비 업로드" />
  <Upload variant="drag" fit title="전체 너비 업로드" />
</>`,vue:`<Upload variant="drag" title="기본 너비 업로드" />
<Upload variant="drag" fit title="전체 너비 업로드" />`},state:{html:`<div class="upload is-disabled" data-component="Upload"><label class="upload_trigger">${C(`upload-disabled`,` disabled`)}<span class="btn">파일 선택</span></label></div>\n<div class="upload" data-component="Upload"><label class="upload_dropzone is-error">업로드 오류</label></div>`,react:`<><Upload disabled /><Upload variant="drag" error title="업로드 오류" /></>`,vue:`<Upload disabled />
<Upload variant="drag" error title="업로드 오류" />`},example:{html:`<form class="form form_vertical form_fit"><div class="form_field"><p class="form_field-label">첨부 파일</p><div class="upload" data-component="Upload" data-max-size="10485760" data-max-files="3">${C(`attachments`,` accept=".pdf,.doc,.docx" multiple`)}<ul class="upload_list" data-upload-list></ul></div></div></form>`,react:`<Upload files={files} onChange={setFiles} multiple accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} maxFiles={3} />`,vue:`<Upload v-model="files" multiple accept=".pdf,.doc,.docx" :max-size="10 * 1024 * 1024" :max-files="3" />`}},T=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),E=Object.fromEntries(Object.entries(w).map(([e,t])=>[e,S(e,t)]))})))()}var O,k,A;function j(){return(j=e((()=>{O=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],k=(e,t,n)=>({title:e,description:n,tables:[{columns:O,rows:t}]}),A=[k(`React · Next.js API`,[{name:`variant`,type:`'button' | 'drag' | 'list' | 'picture-card' | 'avatar'`,default:`'button'`,description:`다른 프레임워크 브랜치와 동일한 업로드 UI 유형입니다.`},{name:`files · defaultFiles`,type:`UploadFile[]`,default:`[]`,description:`제어 파일 목록과 초기 목록입니다.`},{name:`multiple · accept`,type:`boolean · string`,default:`false · —`,description:`다중 선택과 허용 파일 형식입니다.`},{name:`maxSize · maxFiles`,type:`number`,default:`—`,description:`바이트 단위 파일 크기와 개수 제한입니다.`},{name:`size · fit · disabled · error · dragover`,type:`string · boolean`,default:`'md' · false`,description:`크기, 너비, 상태 옵션입니다.`},{name:`inputId · trigger · cards`,type:`string · ReactNode`,default:`—`,description:`파일 input ID와 사용자 정의 트리거·카드 콘텐츠입니다.`},{name:`onChange`,type:`(files: File[]) => void`,default:`—`,description:`선택 또는 삭제 후 호출됩니다.`},{name:`onError`,type:`(message: string) => void`,default:`—`,description:`파일 검증 실패 시 호출됩니다.`}],`Next.js는 @uxkm/react/upload를 재사용합니다.`),k(`Vue · Nuxt API`,[{name:`v-model`,type:`UploadFile[]`,default:`[]`,description:`파일 목록과 update:modelValue 이벤트입니다.`},{name:`variant · size`,type:`string`,default:`'button' · 'md'`,description:`button, drag, list, picture-card, avatar 유형과 크기입니다.`},{name:`trigger · cards · default slot`,type:`slot`,default:`—`,description:`트리거, 사진 카드, 파일 목록 콘텐츠입니다.`},{name:`multiple · accept · max-size · max-files`,type:`boolean · string · number`,default:`false · —`,description:`파일 선택 및 검증 조건입니다.`},{name:`@change · @error`,type:`event`,default:`—`,description:`파일 변경과 검증 오류 이벤트입니다.`}],`Nuxt는 @uxkm/vue/upload를 재사용합니다.`),k(`HTML · Gulp`,[{name:`upload_trigger · upload_dropzone · upload_cards`,type:`class`,default:`—`,description:`업로드 UI 구조입니다.`},{name:`data-max-size · data-max-files`,type:`number`,default:`—`,description:`파일 크기와 개수 제한입니다.`},{name:`change`,type:`CustomEvent`,default:`—`,description:`detail.files로 선택 파일 목록을 제공합니다.`},{name:`uploaderror`,type:`CustomEvent`,default:`—`,description:`detail.message로 검증 오류를 제공합니다.`},{name:`is-dragover · is-error · is-disabled`,type:`class`,default:`—`,description:`드래그와 상태 클래스입니다.`}]),k(`디자인 토큰`,[{name:`--upload-max-width · --upload-gap`,type:`length`,default:`입력 너비 · space-sm`,description:`컨테이너 너비와 간격입니다.`},{name:`--upload-dropzone-padding · --upload-dropzone-icon-size`,type:`length`,default:`크기별 값`,description:`드롭존의 여백과 아이콘 크기입니다.`},{name:`--upload-card-size`,type:`length`,default:`6.5rem`,description:`사진 카드 크기입니다.`},{name:`--upload-progress-height`,type:`length`,default:`4px`,description:`진행률 표시 높이입니다.`}])]})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...p(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{of:o}),`
`,(0,P.jsx)(t.h1,{id:`upload`,children:`Upload`}),`
`,(0,P.jsx)(t.p,{children:`파일 선택, 드래그앤드롭, 사진 카드 업로드를 제공하는 폼 컴포넌트입니다. 파일 형식·크기·개수를 클라이언트에서 검증하고 선택 목록을 개별 삭제할 수 있습니다.`}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(t.p,{children:`버튼으로 파일 선택기를 열고 선택된 파일명, 크기와 상태를 목록으로 표시합니다.`}),`
`,(0,P.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.basic}),`
`,(0,P.jsx)(t.h2,{id:`드래그-앤-드롭`,children:`드래그 앤 드롭`}),`
`,(0,P.jsx)(t.p,{children:`드롭존 전체를 파일 선택 레이블로 사용하며 드래그 상태와 검증 오류를 시각적으로 전달합니다.`}),`
`,(0,P.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.dropzone}),`
`,(0,P.jsx)(t.h2,{id:`파일-목록`,children:`파일 목록`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`upload_list`}),`와 `,(0,P.jsx)(t.code,{children:`upload_item`}),`으로 업로드 중, 완료, 오류 상태와 진행률을 표시합니다.`]}),`
`,(0,P.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.list}),`
`,(0,P.jsx)(t.h2,{id:`사진-카드`,children:`사진 카드`}),`
`,(0,P.jsx)(t.p,{children:`이미지 파일은 미리보기 카드로 표시하고 카드별 삭제 동작을 제공합니다.`}),`
`,(0,P.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.cards}),`
`,(0,P.jsx)(t.h2,{id:`아바타-업로드`,children:`아바타 업로드`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`upload_avatar`}),`를 Avatar 컴포넌트와 조합해 프로필 이미지 변경 UI를 제공합니다.`]}),`
`,(0,P.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.avatar}),`
`,(0,P.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,P.jsx)(t.p,{children:`드롭존의 여백과 아이콘 크기를 small, medium, large로 조정합니다.`}),`
`,(0,P.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.size}),`
`,(0,P.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,P.jsxs)(t.p,{children:[`기본은 부모 너비를 사용하고 `,(0,P.jsx)(t.code,{children:`upload_fit`}),`은 입력 필드 최대 너비로 제한합니다.`]}),`
`,(0,P.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.width}),`
`,(0,P.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,P.jsx)(t.p,{children:`disabled와 error 상태는 컨트롤과 오류 설명을 함께 제공합니다.`}),`
`,(0,P.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.state}),`
`,(0,P.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,P.jsx)(t.p,{children:`필수 첨부, 파일 형식, 크기와 개수 제한을 제출 폼에 조합합니다. 서버에서는 파일 내용과 형식을 다시 검증해야 합니다.`}),`
`,(0,P.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(b,{examples:E.example}),`
`,(0,P.jsx)(x,{sections:A})]})}function N(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),m(),_(),v(),y(),D(),j(),i()})))()}F();export{N as default};