import{k as Q,l as W,u as Y,a as aa,a8 as na,c as l,p as b,s as y,d as ea,r as u,f as r,g,o as s,t as ta,i as la,_ as p,Z as sa,$ as oa,q as X}from"./iframe-CAswI7Qe.js";import{w as o,s as ra}from"./story-renders-DjeoaiCa.js";import{_ as pa}from"./Avatar-DQfzxAyR.js";import{a as V}from"./avatar-sample-Dq40Sw96.js";import{h as ia,a as ua}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const da=["id","disabled","multiple","accept","aria-invalid"],ma={key:1,"data-demo-slot":"hint"},ca={key:0,class:"upload_hint"},Ca={key:2,"data-demo-slot":"default"},fa={key:3,class:"upload_cards","data-demo-slot":"cards"},t=Object.assign({inheritAttrs:!1},{__name:"Upload",props:{ripple:Q,variant:{type:String,default:"button",validator:a=>["button","drag","list","picture-card","avatar"].includes(a)},disabled:Boolean,fit:Boolean,size:{type:String,default:"md",validator:a=>["sm","md","lg"].includes(a)},multiple:Boolean,accept:String,inputId:String,hint:String,dragover:Boolean,error:Boolean},setup(a){const n=a,{rippleAttrs:j,childRippleAttrs:q}=W(n,{mode:"container"});Y();const i=aa(),B=la(null);na(n,B,i);const H=g(()=>{const e=["upload"];return n.fit&&e.push("upload_fit"),n.size==="sm"&&e.push("upload_sm"),n.size==="lg"&&e.push("upload_lg"),n.disabled&&e.push("is-disabled"),i.class&&e.push(i.class),e}),Z=g(()=>{const{class:e,...D}=i;return D}),K=g(()=>n.variant==="drag"?["upload_dropzone",n.dragover?"is-dragover":"",n.error?"is-error":""].filter(Boolean):n.variant==="picture-card"?["upload_card","upload_card-trigger"]:n.variant==="avatar"?["upload_avatar"]:["upload_trigger"]);return(e,D)=>(s(),l("div",b({ref_key:"rootRef",ref:B},y(j),{class:H.value}),[a.variant!=="list"?(s(),l("label",b({key:0},y(q),{class:K.value,"data-demo-slot":"trigger"}),[ea("input",b({id:a.inputId,type:"file",class:"upload_input",tabindex:"-1",disabled:a.disabled,multiple:a.multiple||void 0,accept:a.accept,"aria-invalid":a.error?"true":void 0},Z.value),null,16,da),u(e.$slots,"trigger")],16)):r("",!0),a.variant==="button"||a.variant==="drag"?(s(),l("div",ma,[u(e.$slots,"hint",{},()=>[a.hint?(s(),l("p",ca,ta(a.hint),1)):r("",!0)])])):r("",!0),a.variant==="list"||e.$slots.default?(s(),l("div",Ca,[u(e.$slots,"default")])):r("",!0),a.variant==="picture-card"?(s(),l("div",fa,[u(e.$slots,"cards")])):r("",!0)],16))}}),va=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_a=[{name:"variant",type:"'button' | 'drag' | 'list' | 'picture-card' | 'avatar'",default:"button",description:"업로드 UI 유형"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"upload_sm · upload_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 (upload_fit)"},{name:"multiple",type:"boolean",default:"false",description:"다중 파일 선택"},{name:"accept",type:"string",default:"—",description:"input accept 속성"},{name:"input-id",type:"string",default:"—",description:"file input id"},{name:"hint",type:"string",default:"—",description:"button·drag variant 힌트 텍스트"},{name:"dragover",type:"boolean",default:"false",description:"드래그 오버 상태 (is-dragover)"},{name:"error",type:"boolean",default:"false",description:"오류 (is-error)"},ia],ba=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ga=[{name:"trigger",description:"업로드 트리거 UI (button·drag·picture-card·avatar)"},{name:"hint",description:"힌트 텍스트 (hint prop 대체)"},{name:"default",description:"파일 목록 (list variant)"},{name:"cards",description:"이미지 카드 그리드 (picture-card)"}],Ba=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Da=[{name:"upload",description:"루트"},{name:"upload_sm · upload_lg · upload_fit",description:"크기·너비"},{name:"upload_trigger · upload_dropzone · upload_input",description:"button·drag 트리거"},{name:"upload_card · upload_cards · upload_avatar",description:"picture-card·avatar"},{name:"upload_list · upload_item · upload_item-info",description:"목록 variant"},{name:"upload_hint · upload_progress",description:"힌트·진행률"},{name:"is-dragover · is-error · is-disabled",description:"상태"},...ua],ya=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ia=[{name:"--upload-max-width",default:"var(--input-max-width)",description:"최대 너비"},{name:"--upload-dropzone-padding · --upload-dropzone-icon-size",default:"—",description:"드롭존"},{name:"--upload-card-size · --upload-list-gap",default:"6.5rem · var(--space-xs)",description:"카드·목록"}],ha=[{title:"API · Props",tables:[{columns:va,rows:_a,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ba,rows:ga,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ba,rows:Da,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ya,rows:Ia,codeColumn:"name"}]}],La={title:"Components/폼/Upload",id:"components-upload",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["button","drag","list","picture-card","avatar"],type:{name:"enum",summary:"'button' | 'drag' | 'list' | 'picture-card' | 'avatar'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},accept:{control:"text",type:{name:"string",summary:"string"}},inputId:{control:"text",type:{name:"string",summary:"string"}},hint:{control:"text",type:{name:"string",summary:"string"}},dragover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ha}},d={parameters:{controls:{disable:!1}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:(a,n)=>({components:{Upload:t},setup(){return{args:ra(n)}},template:`<Upload v-bind="args">
      <template #trigger>
        <span class="btn btn_outline color_primary">
          <span class="btn_label">파일 선택</span>
        </span>
      </template>
    </Upload>`})},m={name:"버튼 업로드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`label.upload_trigger` 안에 `span.btn`으로 버튼 스킨을 적용합니다. `button` 요소는 label 안에 넣지 않습니다."},source:{code:`<script setup>
import Upload from '@uxkm/ui/components/Upload.vue';
<\/script>

<template>
  <Upload variant="button">
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
  </Upload>
</template>`,language:"vue"}}},args:{variant:"button",size:"md",accept:"값",inputId:"값",hint:"값"},render:o(()=>({components:{Upload:t},template:`        <Upload variant="button">
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
        </Upload>`}))},c={name:"드래그 앤 드롭",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`upload_dropzone`으로 클릭·드래그 영역을 만듭니다. `multiple` · `accept` 속성으로 파일 제한을 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Upload from '@uxkm/ui/components/Upload.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:o(()=>({components:{Icon:p,Upload:t},template:`        <Upload variant="drag" fit multiple>
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
        </Upload>`}))},C={name:"파일 목록",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'`upload_list` · `upload_item`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 `upload_progress-bar`의 `style="width: …"` 또는 CSS 변수로 제어합니다.'},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
import Upload from '@uxkm/ui/components/Upload.vue';
<\/script>

<template>
  <Upload variant="button" fit multiple>
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
  </Upload>
</template>`,language:"vue"}}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:o(()=>({components:{Button:X,Icon:p,List:oa,ListItem:sa,Upload:t},template:`        <Upload variant="button" fit multiple>
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
        </Upload>`}))},f={name:"사진 카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`upload_cards` 그리드에 미리보기 카드와 `upload_card-trigger`를 배치합니다. 호버 시 `upload_card-actions` 오버레이가 표시됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Upload from '@uxkm/ui/components/Upload.vue';
import { avatarSample } from '@images';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:o(()=>({components:{Button:X,Icon:p,Upload:t},setup(){return{avatarSample:V}},template:`        <Upload variant="picture-card" accept="image/*" hint="최대 5장 · JPG, PNG">
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
        </Upload>`}))},v={name:"아바타 업로드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`upload_avatar`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Upload from '@uxkm/ui/components/Upload.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Upload variant="avatar" accept="image/*" input-id="upload-avatar">
    <template #trigger>
      <Avatar size="xl" :src="avatarSample" alt="프로필 사진" />
      <span class="upload_avatar-overlay" aria-hidden="true">
        <Icon name="upload" size="lg" />
      </span>
    </template>
  </Upload>
</template>`,language:"vue"}}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:o(()=>({components:{Avatar:pa,Icon:p,Upload:t},setup(){return{avatarSample:V}},template:`        <Upload variant="avatar" accept="image/*" input-id="upload-avatar">
        <template #trigger>
        <Avatar size="xl" :src="avatarSample" alt="프로필 사진" />
        <span class="upload_avatar-overlay" aria-hidden="true">
        <Icon name="upload" size="lg" />
        </span>
        </template>
        </Upload>`}))},_={name:"폼 필드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`form_field`와 조합해 레이블·힌트·오류 메시지를 표시합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Upload from '@uxkm/ui/components/Upload.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"값",inputId:"값",hint:"값",dragover:!1,error:!1},render:o(()=>({components:{Icon:p,Upload:t},template:`        <div class="form_field form_field_fit">
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
        </div>`}))};var I,h,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
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
  render: (_args, context) => ({
    components: {
      Upload
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Upload v-bind="args">
      <template #trigger>
        <span class="btn btn_outline color_primary">
          <span class="btn_label">파일 선택</span>
        </span>
      </template>
    </Upload>\`
  })
}`,...(U=(h=d.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var z,A,x;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "버튼 업로드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`label.upload_trigger\` 안에 \`span.btn\`으로 버튼 스킨을 적용합니다. \`button\` 요소는 label 안에 넣지 않습니다."
      },
      source: {
        code: "<script setup>\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\n<\/script>\\n\\n<template>\\n  <Upload variant=\\"button\\">\\n    <template #trigger>\\n      <span class=\\"btn btn_filled color_primary\\">\\n        <span class=\\"btn_label\\">파일 선택</span>\\n      </span>\\n    </template>\\n  </Upload>\\n  <Upload variant=\\"button\\" hint=\\"PNG, JPG · 최대 5MB\\">\\n    <template #trigger>\\n      <span class=\\"btn btn_outline color_primary\\">\\n        <span class=\\"btn_label\\">업로드</span>\\n      </span>\\n    </template>\\n  </Upload>\\n  <Upload variant=\\"button\\">\\n    <template #trigger>\\n      <span class=\\"btn btn_filled color_primary btn_sm\\">\\n        <span class=\\"btn_label\\">Small</span>\\n      </span>\\n      <span class=\\"btn btn_filled color_primary btn_lg\\">\\n        <span class=\\"btn_label\\">Large</span>\\n      </span>\\n    </template>\\n  </Upload>\\n  <Upload variant=\\"button\\" disabled>\\n    <template #trigger>\\n      <span class=\\"btn btn_filled color_primary is-disabled\\">\\n        <span class=\\"btn_label\\">비활성</span>\\n      </span>\\n    </template>\\n  </Upload>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "button",
    size: "md",
    accept: "값",
    inputId: "값",
    hint: "값"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Upload
    },
    template: \`        <Upload variant="button">
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
        </Upload>\`
  }))
}`,...(x=(A=m.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var k,E,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "드래그 앤 드롭",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`upload_dropzone\`으로 클릭·드래그 영역을 만듭니다. \`multiple\` · \`accept\` 속성으로 파일 제한을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\n<\/script>\\n\\n<template>\\n  <Upload variant=\\"drag\\" fit multiple>\\n    <template #trigger>\\n      <span class=\\"upload_dropzone-icon\\" aria-hidden=\\"true\\">\\n        <Icon name=\\"upload\\" size=\\"xl\\" />\\n      </span>\\n      <span class=\\"upload_dropzone-title\\">파일을 여기에 끌어다 놓거나 클릭하세요</span>\\n      <span class=\\"upload_dropzone-desc\\">단일 또는 다중 파일 · 최대 10MB</span>\\n    </template>\\n  </Upload>\\n  <Upload variant=\\"drag\\" fit dragover>\\n    <template #trigger>\\n      <span class=\\"upload_dropzone-icon\\" aria-hidden=\\"true\\">\\n        <Icon name=\\"upload\\" size=\\"xl\\" />\\n      </span>\\n      <span class=\\"upload_dropzone-title\\">파일을 놓으세요</span>\\n      <span class=\\"upload_dropzone-desc\\">is-dragover 상태</span>\\n    </template>\\n  </Upload>\\n</template>",
        language: 'vue'
      }
    }
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
    components: {
      Icon,
      Upload
    },
    template: \`        <Upload variant="drag" fit multiple>
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
        </Upload>\`
  }))
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,w,P;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "파일 목록",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`upload_list\` · \`upload_item\`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 \`upload_progress-bar\`의 \`style=\\"width: …\\"\` 또는 CSS 변수로 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\n<\/script>\\n\\n<template>\\n  <Upload variant=\\"button\\" fit multiple>\\n    <template #trigger>\\n      <span class=\\"btn btn_filled color_primary\\">\\n        <span class=\\"btn_label\\">파일 추가</span>\\n      </span>\\n    </template>\\n    <template #default>\\n      <List class=\\"upload_list\\">\\n        <ListItem class=\\"upload_item is-uploading\\">\\n          <span class=\\"upload_item-icon\\" aria-hidden=\\"true\\">\\n            <Icon name=\\"file\\" />\\n          </span>\\n          <div class=\\"upload_item-body\\">\\n            <span class=\\"upload_item-name text_ellipsis\\">프로젝트_제안서_v2.pdf</span>\\n            <div class=\\"upload_progress\\" role=\\"progressbar\\" aria-valuenow=\\"60\\" aria-valuemin=\\"0\\" aria-valuemax=\\"100\\" aria-label=\\"업로드 진행률\\">\\n              <span class=\\"upload_progress-bar\\" style=\\"width: 60%\\" />\\n            </div>\\n            <span class=\\"upload_item-meta\\">2.4 MB · 60%</span>\\n          </div>\\n          <Button variant=\\"text\\" color=\\"danger\\" icon-only class=\\"upload_item-action\\" aria-label=\\"업로드 취소\\">\\n            <template #icon-before>\\n              <Icon name=\\"close\\" />\\n            </template>\\n          </Button>\\n        </ListItem>\\n        <ListItem class=\\"upload_item is-done\\">\\n          <span class=\\"upload_item-icon\\" aria-hidden=\\"true\\">\\n            <Icon name=\\"file\\" />\\n          </span>\\n          <div class=\\"upload_item-body\\">\\n            <span class=\\"upload_item-name text_ellipsis\\">디자인_가이드.zip</span>\\n            <span class=\\"upload_item-meta\\">업로드 완료 · 8.1 MB</span>\\n          </div>\\n          <Button variant=\\"text\\" color=\\"danger\\" icon-only class=\\"upload_item-action\\" aria-label=\\"파일 삭제\\">\\n            <template #icon-before>\\n              <Icon name=\\"trash\\" />\\n            </template>\\n          </Button>\\n        </ListItem>\\n        <ListItem class=\\"upload_item is-error\\">\\n          <span class=\\"upload_item-icon\\" aria-hidden=\\"true\\">\\n            <Icon name=\\"file\\" color=\\"danger\\" />\\n          </span>\\n          <div class=\\"upload_item-body\\">\\n            <span class=\\"upload_item-name text_ellipsis\\">대용량_영상.mp4</span>\\n            <div class=\\"upload_progress\\" role=\\"progressbar\\" aria-valuenow=\\"42\\" aria-valuemin=\\"0\\" aria-valuemax=\\"100\\" aria-label=\\"업로드 진행률\\">\\n              <span class=\\"upload_progress-bar\\" style=\\"width: 42%\\" />\\n            </div>\\n            <span class=\\"upload_item-meta\\">파일 크기가 10MB를 초과합니다.</span>\\n          </div>\\n          <Button variant=\\"text\\" color=\\"danger\\" icon-only class=\\"upload_item-action\\" aria-label=\\"파일 삭제\\">\\n            <template #icon-before>\\n              <Icon name=\\"trash\\" />\\n            </template>\\n          </Button>\\n        </ListItem>\\n      </List>\\n    </template>\\n  </Upload>\\n</template>",
        language: 'vue'
      }
    }
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
    components: {
      Button,
      Icon,
      List,
      ListItem,
      Upload
    },
    template: \`        <Upload variant="button" fit multiple>
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
        </Upload>\`
  }))
}`,...(P=(w=C.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var F,M,G;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "사진 카드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`upload_cards\` 그리드에 미리보기 카드와 \`upload_card-trigger\`를 배치합니다. 호버 시 \`upload_card-actions\` 오버레이가 표시됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Upload variant=\\"picture-card\\" accept=\\"image/*\\" hint=\\"최대 5장 · JPG, PNG\\">\\n    <template #trigger>\\n      <Icon name=\\"plus\\" size=\\"lg\\" />\\n      <span>업로드</span>\\n    </template>\\n    <template #cards>\\n      <div class=\\"upload_card\\">\\n        <img class=\\"upload_card-image\\" :src=\\"avatarSample\\" alt=\\"미리보기 1\\" />\\n        <div class=\\"upload_card-actions\\">\\n          <Button variant=\\"ghost\\" icon-only size=\\"sm\\" aria-label=\\"미리보기\\">\\n            <template #icon-before>\\n              <Icon name=\\"eye\\" />\\n            </template>\\n          </Button>\\n          <Button variant=\\"ghost\\" icon-only size=\\"sm\\" aria-label=\\"삭제\\">\\n            <template #icon-before>\\n              <Icon name=\\"trash\\" />\\n            </template>\\n          </Button>\\n        </div>\\n      </div>\\n      <div class=\\"upload_card\\">\\n        <img class=\\"upload_card-image\\" :src=\\"avatarSample\\" alt=\\"미리보기 2\\" />\\n        <div class=\\"upload_card-actions\\">\\n          <Button variant=\\"ghost\\" icon-only size=\\"sm\\" aria-label=\\"미리보기\\">\\n            <template #icon-before>\\n              <Icon name=\\"eye\\" />\\n            </template>\\n          </Button>\\n          <Button variant=\\"ghost\\" icon-only size=\\"sm\\" aria-label=\\"삭제\\">\\n            <template #icon-before>\\n              <Icon name=\\"trash\\" />\\n            </template>\\n          </Button>\\n        </div>\\n      </div>\\n    </template>\\n  </Upload>\\n</template>",
        language: 'vue'
      }
    }
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
    components: {
      Button,
      Icon,
      Upload
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`        <Upload variant="picture-card" accept="image/*" hint="최대 5장 · JPG, PNG">
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
        </Upload>\`
  }))
}`,...(G=(M=f.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var R,$,N;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "아바타 업로드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`upload_avatar\`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Upload variant=\\"avatar\\" accept=\\"image/*\\" input-id=\\"upload-avatar\\">\\n    <template #trigger>\\n      <Avatar size=\\"xl\\" :src=\\"avatarSample\\" alt=\\"프로필 사진\\" />\\n      <span class=\\"upload_avatar-overlay\\" aria-hidden=\\"true\\">\\n        <Icon name=\\"upload\\" size=\\"lg\\" />\\n      </span>\\n    </template>\\n  </Upload>\\n</template>",
        language: 'vue'
      }
    }
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
    components: {
      Avatar,
      Icon,
      Upload
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`        <Upload variant="avatar" accept="image/*" input-id="upload-avatar">
        <template #trigger>
        <Avatar size="xl" :src="avatarSample" alt="프로필 사진" />
        <span class="upload_avatar-overlay" aria-hidden="true">
        <Icon name="upload" size="lg" />
        </span>
        </template>
        </Upload>\`
  }))
}`,...(N=($=v.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var J,O,T;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "폼 필드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`form_field\`와 조합해 레이블·힌트·오류 메시지를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Upload from '@uxkm/ui/components/Upload.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"upload-form-attach\\">첨부파일</label>\\n    <Upload variant=\\"drag\\" fit multiple input-id=\\"upload-form-attach\\">\\n      <template #trigger>\\n        <span class=\\"upload_dropzone-icon\\" aria-hidden=\\"true\\">\\n          <Icon name=\\"upload\\" size=\\"xl\\" />\\n        </span>\\n        <span class=\\"upload_dropzone-title\\">파일을 선택하세요</span>\\n        <span class=\\"upload_dropzone-desc\\">PDF, DOCX · 최대 3개</span>\\n      </template>\\n    </Upload>\\n    <p class=\\"form_field-hint\\">제출 전 파일명을 확인해 주세요.</p>\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"upload-form-error\\">증빙 서류</label>\\n    <Upload variant=\\"drag\\" fit error input-id=\\"upload-form-error\\">\\n      <template #trigger>\\n        <span class=\\"upload_dropzone-icon\\" aria-hidden=\\"true\\">\\n          <Icon name=\\"upload\\" size=\\"xl\\" />\\n        </span>\\n        <span class=\\"upload_dropzone-title\\">필수 서류를 업로드하세요</span>\\n        <span class=\\"upload_dropzone-desc\\">is-error 상태</span>\\n      </template>\\n    </Upload>\\n    <p class=\\"form_field-error\\" id=\\"upload-form-error-msg\\">첨부파일은 필수입니다.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
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
    components: {
      Icon,
      Upload
    },
    template: \`        <div class="form_field form_field_fit">
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
        </div>\`
  }))
}`,...(T=(O=_.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const Sa=["Playground","ButtonDemo","Dropzone","ListDemo","Card","AvatarDemo","Form"];export{v as AvatarDemo,m as ButtonDemo,f as Card,c as Dropzone,_ as Form,C as ListDemo,d as Playground,Sa as __namedExportsOrder,La as default};
