import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,v as m,wt as h}from"./CCnt5OSV.js";import{N as g,l as _,t as v}from"./DkmWXf_S.js";import{n as y,t as b}from"./D01l-9yr.js";import{t as x}from"./D5AUKneU.js";import{t as S}from"./gHQDdAlU.js";import{t as C}from"./DD3RWXAt.js";import{r as w,t as T}from"./D6IbhUhQ.js";import{t as E}from"./Kdlvr--h.js";import{t as D}from"./DOBgEly8.js";import{n as O,t as k}from"./B1RpTY2w2.js";var A=[`id`,`disabled`,`multiple`,`accept`,`aria-invalid`],j={key:1,"data-demo-slot":`hint`},M={key:0,class:`upload_hint`},N={key:2,"data-demo-slot":`default`},P={key:3,class:`upload_cards`,"data-demo-slot":`cards`},F=Object.assign({inheritAttrs:!1},{__name:`Upload`,props:{ripple:b,variant:{type:String,default:`button`,validator:e=>[`button`,`drag`,`list`,`picture-card`,`avatar`].includes(e)},disabled:Boolean,fit:Boolean,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},multiple:Boolean,accept:String,inputId:String,hint:String,dragover:Boolean,error:Boolean},emits:[`change`],setup(i,{emit:a}){let s=new Set([`button`,`drag`,`list`,`picture-card`,`avatar`]),m=new Set([`sm`,`md`,`lg`]),_=i,{rippleAttrs:v,childRippleAttrs:b}=y(_,{mode:`container`}),x=a,S=t(),C=r(),w=u(null),T=p(()=>s.has(_.variant)?_.variant:`button`),E=p(()=>m.has(_.size)?_.size:`md`);g(_,w,C);let D=p(()=>{let e=[`upload`];return _.fit&&e.push(`upload_fit`),E.value===`sm`&&e.push(`upload_sm`),E.value===`lg`&&e.push(`upload_lg`),_.disabled&&e.push(`is-disabled`),C.class&&e.push(C.class),e}),O=p(()=>{let{class:e,...t}=C;return t}),k=p(()=>T.value===`drag`?[`upload_dropzone`,_.dragover?`is-dragover`:``,_.error?`is-error`:``].filter(Boolean):T.value===`picture-card`?[`upload_card`,`upload_card-trigger`]:T.value===`avatar`?[`upload_avatar`]:[`upload_trigger`]),F=p(()=>T.value!==`list`),I=p(()=>T.value===`button`||T.value===`drag`),L=p(()=>T.value===`list`||!!S.default),R=p(()=>T.value===`picture-card`);function z(e){x(`change`,e)}return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:w},f(v),{class:D.value}),[F.value?(n(),l(`label`,c({key:0},f(b),{class:k.value,"data-demo-slot":`trigger`}),[o(`input`,c({id:i.inputId,type:`file`,class:`upload_input`,tabindex:`-1`,disabled:i.disabled,multiple:i.multiple||void 0,accept:i.accept,"aria-invalid":i.error?`true`:void 0},O.value,{onChange:z}),null,16,A),e(t.$slots,`trigger`)],16)):d(``,!0),I.value?(n(),l(`div`,j,[e(t.$slots,`hint`,{},()=>[i.hint?(n(),l(`p`,M,h(i.hint),1)):d(``,!0)])])):d(``,!0),L.value?(n(),l(`div`,N,[e(t.$slots,`default`)])):d(``,!0),R.value?(n(),l(`div`,P,[e(t.$slots,`cards`)])):d(``,!0)],16))}}),I=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],L=[{name:`variant`,type:`'button' | 'drag' | 'list' | 'picture-card' | 'avatar'`,default:`button`,description:`업로드 UI 유형`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`upload_sm · upload_lg`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 (is-disabled)`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비 (upload_fit)`},{name:`multiple`,type:`boolean`,default:`false`,description:`다중 파일 선택`},{name:`accept`,type:`string`,default:`—`,description:`input accept 속성`},{name:`input-id`,type:`string`,default:`—`,description:`file input id`},{name:`hint`,type:`string`,default:`—`,description:`button·drag variant 힌트 텍스트`},{name:`dragover`,type:`boolean`,default:`false`,description:`드래그 오버 상태 (is-dragover)`},{name:`error`,type:`boolean`,default:`false`,description:`오류 (is-error)`},w],R=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],z=[{name:`trigger`,description:`업로드 트리거 UI (button·drag·picture-card·avatar)`},{name:`hint`,description:`힌트 텍스트 (hint prop 대체)`},{name:`default`,description:`파일 목록 (list variant)`},{name:`cards`,description:`이미지 카드 그리드 (picture-card)`}],B=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],V=[{name:`change`,description:`파일 선택 변경 시. 네이티브 input change 이벤트 전달`}],H=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],U=[{name:`upload`,description:`루트`},{name:`upload_sm · upload_lg · upload_fit`,description:`크기·너비`},{name:`upload_trigger · upload_dropzone · upload_input`,description:`button·drag 트리거`},{name:`upload_card · upload_cards · upload_avatar`,description:`picture-card·avatar`},{name:`upload_list · upload_item · upload_item-info`,description:`목록 variant`},{name:`upload_hint · upload_progress`,description:`힌트·진행률`},{name:`is-dragover · is-error · is-disabled`,description:`상태`},...T],W=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],G=[{name:`--upload-max-width`,default:`var(--input-max-width)`,description:`최대 너비`},{name:`--upload-dropzone-padding · --upload-dropzone-icon-size`,default:`—`,description:`드롭존`},{name:`--upload-card-size · --upload-list-gap`,default:`6.5rem · var(--space-xs)`,description:`카드·목록`}],K={class:`upload_dropzone-icon`,"aria-hidden":`true`},ee={class:`upload_dropzone-icon`,"aria-hidden":`true`},q={class:`upload_item-icon`,"aria-hidden":`true`},J={class:`upload_item-icon`,"aria-hidden":`true`},Y={class:`upload_item-icon`,"aria-hidden":`true`},X={class:`upload_card`},Z=[`src`],Q={class:`upload_card-actions`},$={class:`upload_card`},te=[`src`],ne={class:`upload_card-actions`},re={class:`upload_avatar-overlay`,"aria-hidden":`true`},ie={class:`form_field form_field_fit`},ae={class:`upload_dropzone-icon`,"aria-hidden":`true`},oe={class:`form_field form_field_fit`},se={class:`upload_dropzone-icon`,"aria-hidden":`true`},ce={title:`Upload | HTML Components`,activeNav:`upload`,pageTitle:`Upload`},le={__name:`upload`,setup(e){return(e,t)=>(n(),l(s,null,[t[21]||=m(`<div class="page_intro"><h1>Upload</h1><p class="lead"> 파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다. <code>upload_input</code>은 시각적으로 숨기고 <code>label.upload_trigger</code> · <code>label.upload_dropzone</code>으로 트리거합니다. 버튼형 트리거는 <code>button</code> 대신 <code>span.btn</code>으로 스킨을 적용합니다. 파일 입력은 비제어 방식으로 동작하며 선택 결과는 <code>change</code> 이벤트에서 처리합니다. </p></div>`,1),a(C,{"heading-id":`button-heading`,title:`버튼 업로드`,description:`<code>label.upload_trigger</code> 안에 <code>span.btn</code>으로 버튼 스킨을 적용합니다. <code>button</code> 요소는 label 안에 넣지 않습니다.`,stack:``,code:`<script setup>
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[a(F,{variant:`button`},{trigger:i(()=>[...t[0]||=[o(`span`,{class:`btn btn_filled color_primary`},[o(`span`,{class:`btn_label`},`파일 선택`)],-1)]]),_:1}),a(F,{variant:`button`,hint:`PNG, JPG · 최대 5MB`},{trigger:i(()=>[...t[1]||=[o(`span`,{class:`btn btn_outline color_primary`},[o(`span`,{class:`btn_label`},`업로드`)],-1)]]),_:1}),a(F,{variant:`button`},{trigger:i(()=>[...t[2]||=[o(`span`,{class:`btn btn_filled color_primary btn_sm`},[o(`span`,{class:`btn_label`},`Small`)],-1),o(`span`,{class:`btn btn_filled color_primary btn_lg`},[o(`span`,{class:`btn_label`},`Large`)],-1)]]),_:1}),a(F,{variant:`button`,disabled:``},{trigger:i(()=>[...t[3]||=[o(`span`,{class:`btn btn_filled color_primary is-disabled`},[o(`span`,{class:`btn_label`},`비활성`)],-1)]]),_:1})]),_:1}),a(C,{"heading-id":`dropzone-heading`,title:`드래그 앤 드롭`,description:`<code>upload_dropzone</code>으로 클릭·드래그 영역을 만듭니다. <code>multiple</code> · <code>accept</code> 속성으로 파일 제한을 지정합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[a(F,{variant:`drag`,fit:``,multiple:``},{trigger:i(()=>[o(`span`,K,[a(x,{name:`upload`,size:`xl`})]),t[4]||=o(`span`,{class:`upload_dropzone-title`},`파일을 여기에 끌어다 놓거나 클릭하세요`,-1),t[5]||=o(`span`,{class:`upload_dropzone-desc`},`단일 또는 다중 파일 · 최대 10MB`,-1)]),_:1}),a(F,{variant:`drag`,fit:``,dragover:``},{trigger:i(()=>[o(`span`,ee,[a(x,{name:`upload`,size:`xl`})]),t[6]||=o(`span`,{class:`upload_dropzone-title`},`파일을 놓으세요`,-1),t[7]||=o(`span`,{class:`upload_dropzone-desc`},`is-dragover 상태`,-1)]),_:1})]),_:1}),a(C,{"heading-id":`list-heading`,title:`파일 목록`,description:`<code>upload_list</code> · <code>upload_item</code>으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 <code>upload_progress-bar</code>의 <code>style="width: …"</code> 또는 CSS 변수로 제어합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[a(F,{variant:`button`,fit:``,multiple:``},{trigger:i(()=>[...t[8]||=[o(`span`,{class:`btn btn_filled color_primary`},[o(`span`,{class:`btn_label`},`파일 추가`)],-1)]]),default:i(()=>[a(O,{class:`upload_list`},{default:i(()=>[a(k,{class:`upload_item is-uploading`},{default:i(()=>[o(`span`,q,[a(x,{name:`file`})]),t[9]||=o(`div`,{class:`upload_item-body`},[o(`span`,{class:`upload_item-name text_ellipsis`},`프로젝트_제안서_v2.pdf`),o(`div`,{class:`upload_progress`,role:`progressbar`,"aria-valuenow":`60`,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-label":`업로드 진행률`},[o(`span`,{class:`upload_progress-bar`,style:{width:`60%`}})]),o(`span`,{class:`upload_item-meta`},`2.4 MB · 60%`)],-1),a(S,{variant:`text`,color:`danger`,"icon-only":``,class:`upload_item-action`,"aria-label":`업로드 취소`},{"icon-before":i(()=>[a(x,{name:`close`})]),_:1})]),_:1}),a(k,{class:`upload_item is-done`},{default:i(()=>[o(`span`,J,[a(x,{name:`file`})]),t[10]||=o(`div`,{class:`upload_item-body`},[o(`span`,{class:`upload_item-name text_ellipsis`},`디자인_가이드.zip`),o(`span`,{class:`upload_item-meta`},`업로드 완료 · 8.1 MB`)],-1),a(S,{variant:`text`,color:`danger`,"icon-only":``,class:`upload_item-action`,"aria-label":`파일 삭제`},{"icon-before":i(()=>[a(x,{name:`trash`})]),_:1})]),_:1}),a(k,{class:`upload_item is-error`},{default:i(()=>[o(`span`,Y,[a(x,{name:`file`,color:`danger`})]),t[11]||=o(`div`,{class:`upload_item-body`},[o(`span`,{class:`upload_item-name text_ellipsis`},`대용량_영상.mp4`),o(`div`,{class:`upload_progress`,role:`progressbar`,"aria-valuenow":`42`,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-label":`업로드 진행률`},[o(`span`,{class:`upload_progress-bar`,style:{width:`42%`}})]),o(`span`,{class:`upload_item-meta`},`파일 크기가 10MB를 초과합니다.`)],-1),a(S,{variant:`text`,color:`danger`,"icon-only":``,class:`upload_item-action`,"aria-label":`파일 삭제`},{"icon-before":i(()=>[a(x,{name:`trash`})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{"heading-id":`card-heading`,title:`사진 카드`,description:`<code>upload_cards</code> 그리드에 미리보기 카드와 <code>upload_card-trigger</code>를 배치합니다. 호버 시 <code>upload_card-actions</code> 오버레이가 표시됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[a(F,{variant:`picture-card`,accept:`image/*`,hint:`최대 5장 · JPG, PNG`},{trigger:i(()=>[a(x,{name:`plus`,size:`lg`}),t[12]||=o(`span`,null,`업로드`,-1)]),cards:i(()=>[o(`div`,X,[o(`img`,{class:`upload_card-image`,src:f(D),alt:`미리보기 1`},null,8,Z),o(`div`,Q,[a(S,{variant:`ghost`,"icon-only":``,size:`sm`,"aria-label":`미리보기`},{"icon-before":i(()=>[a(x,{name:`eye`})]),_:1}),a(S,{variant:`ghost`,"icon-only":``,size:`sm`,"aria-label":`삭제`},{"icon-before":i(()=>[a(x,{name:`trash`})]),_:1})])]),o(`div`,$,[o(`img`,{class:`upload_card-image`,src:f(D),alt:`미리보기 2`},null,8,te),o(`div`,ne,[a(S,{variant:`ghost`,"icon-only":``,size:`sm`,"aria-label":`미리보기`},{"icon-before":i(()=>[a(x,{name:`eye`})]),_:1}),a(S,{variant:`ghost`,"icon-only":``,size:`sm`,"aria-label":`삭제`},{"icon-before":i(()=>[a(x,{name:`trash`})]),_:1})])])]),_:1})]),_:1}),a(C,{"heading-id":`avatar-heading`,title:`아바타 업로드`,description:`<code>upload_avatar</code>로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import Icon from '@/components/Icon.vue';
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[a(F,{variant:`avatar`,accept:`image/*`,"input-id":`upload-avatar`},{trigger:i(()=>[a(E,{size:`xl`,src:f(D),alt:`프로필 사진`},null,8,[`src`]),o(`span`,re,[a(x,{name:`upload`,size:`lg`})])]),_:1})]),_:1}),a(C,{"heading-id":`form-heading`,title:`폼 필드`,description:`<code>form_field</code>와 조합해 레이블·힌트·오류 메시지를 표시합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Upload from '@/components/Upload.vue';
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
</template>`},{default:i(()=>[o(`div`,ie,[t[15]||=o(`label`,{class:`form_field-label`,for:`upload-form-attach`},`첨부파일`,-1),a(F,{variant:`drag`,fit:``,multiple:``,"input-id":`upload-form-attach`},{trigger:i(()=>[o(`span`,ae,[a(x,{name:`upload`,size:`xl`})]),t[13]||=o(`span`,{class:`upload_dropzone-title`},`파일을 선택하세요`,-1),t[14]||=o(`span`,{class:`upload_dropzone-desc`},`PDF, DOCX · 최대 3개`,-1)]),_:1}),t[16]||=o(`p`,{class:`form_field-hint`},`제출 전 파일명을 확인해 주세요.`,-1)]),o(`div`,oe,[t[19]||=o(`label`,{class:`form_field-label`,for:`upload-form-error`},`증빙 서류`,-1),a(F,{variant:`drag`,fit:``,error:``,"input-id":`upload-form-error`},{trigger:i(()=>[o(`span`,se,[a(x,{name:`upload`,size:`xl`})]),t[17]||=o(`span`,{class:`upload_dropzone-title`},`필수 서류를 업로드하세요`,-1),t[18]||=o(`span`,{class:`upload_dropzone-desc`},`is-error 상태`,-1)]),_:1}),t[20]||=o(`p`,{class:`form_field-error`,id:`upload-form-error-msg`},`첨부파일은 필수입니다.`,-1)])]),_:1}),a(_,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(v,{columns:f(I),rows:f(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(v,{columns:f(R),rows:f(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-events-heading`,title:`API · Events`},{default:i(()=>[a(v,{columns:f(B),rows:f(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(v,{columns:f(H),rows:f(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(v,{columns:f(W),rows:f(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{le as default,ce as docMeta};