import{B as e,G as t,H as n,L as r,R as i,U as a,W as o,Y as s,b as c,d as l,f as ee,i as u,k as d,m as f,nt as p,st as m,u as h,wt as g,xt as _,y as v}from"./CCnt5OSV.js";import{F as y,l as b,t as x,v as S}from"./DkmWXf_S.js";import{t as C}from"./gHQDdAlU.js";import{t as w}from"./DD3RWXAt.js";import{t as T}from"./Cuo-DXMr2.js";import{t as E}from"./Bt5d3dz_2.js";import{n as D,t as O}from"./C7HWqCQD.js";var k=[`id`],A={class:`textarea_count_visual`,"aria-hidden":`true`},j={class:`textarea_count_announcer`},M=Object.assign({inheritAttrs:!1},{__name:`TextareaShowCount`,props:{tag:{type:String,default:`div`},countId:String},setup(c){let u=c,f=a(),m=t(),v=p(null),b=o(),x=p(0),C=p(0),w=h(()=>u.tag||`div`),T=h(()=>u.countId||`${b}-count`),E=h(()=>C.value>0&&x.value>=C.value),O=h(()=>C.value>0?`${x.value}/${C.value}`:String(x.value)),M=h(()=>{if(C.value<=0)return`${x.value}자 입력`;let e=E.value?`, 글자 수 제한에 도달했습니다`:``;return`${x.value}자 입력, 최대 ${C.value}자${e}`});function N(e,t){x.value=String(e??``).length,C.value=Number(t)>0?Number(t):0}i(D,{countId:T,updateCount:N});let P=y(`TextareaShowCount`,{defaults:{tag:`div`},skipProps:[`tag`],selfClosing:!1});S(P,u,m,v,f);let F=h(()=>[`textarea_wrap`,`textarea_show-count`,f.class]),I=h(()=>{let{class:e,...t}=f;return t});return(t,i)=>(r(),ee(n(w.value),d({ref_key:`rootRef`,ref:v,class:F.value},I.value),{default:s(()=>[e(t.$slots,`default`),l(`span`,{id:T.value,class:_([`textarea_count`,{"is-limit":E.value}]),role:`status`,"aria-live":`polite`,"aria-atomic":`true`},[l(`span`,A,g(O.value),1),l(`span`,j,g(M.value),1)],10,k)]),_:3},16,[`class`]))}}),N=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],P=[{name:`model-value`,type:`string`,default:`—`,description:`v-model 바인딩 값`},{name:`rows`,type:`number | string`,default:`3`,description:`textarea rows 속성`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`textarea_sm · textarea_lg`},{name:`placeholder`,type:`string`,default:`—`,description:`placeholder 속성`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`error`,type:`boolean`,default:`false`,description:`오류 상태 (is-error)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100% (textarea_block)`}],F=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],I=[{name:`default`,description:`초기 텍스트 (model-value 대체)`}],L=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],R=[{name:`textarea`,description:`텍스트영역 루트`},{name:`textarea_sm · textarea_lg · textarea_block`,description:`크기·너비`},{name:`textarea_wrap · textarea_show-count · textarea_count`,description:`TextareaShowCount 글자 수 카운터 구조`},{name:`is-error · is-disabled`,description:`상태`}],z=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],B=[{name:`update:modelValue`,description:`입력 값 변경 시 (v-model)`}],V=[{name:`count-id`,type:`string`,default:`자동 생성`,description:`카운터 ID. Textarea의 aria-describedby에 자동 병합`},{name:`tag`,type:`string`,default:`div`,description:`래퍼 HTML 태그`}],H=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`--textarea-min-height`,default:`5rem`,description:`최소 높이`},{name:`--textarea-count-inset-x · --textarea-count-inset-y`,default:`0.75rem · 0.5rem`,description:`글자 수 카운터 위치`}],W={class:`form_field`},te={class:`form_field`},G={class:`form_field`},K={class:`form_field`},q={class:`form_field`},J={class:`form_field form_field_fit`},Y={class:`form_field`},X={class:`form_field`},Z={class:`form_field`},Q={class:`form_field`},ne={class:`form_field`},re={class:`form_field`},ie={class:`form_field`},ae={class:`form_field`},oe={class:`form_field`},se={class:`form_field`},ce={class:`form_field`},le={class:`form_field`},ue={class:`form_field form_field_fit`},de={class:`form_field`},fe={class:`form_field`},pe={class:`form_field`},$={class:`form_field`},me={class:`form_field`},he={class:`form_field`},ge={class:`form_actions`},_e={title:`Textarea | HTML Components`,activeNav:`textarea`,pageTitle:`Textarea`},ve={__name:`textarea`,setup(e){return(e,t)=>(r(),f(u,null,[t[38]||=l(`div`,{class:`page_intro`},[l(`h1`,null,`Textarea`),l(`p`,{class:`lead`},`여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.`)],-1),c(w,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 힌트 텍스트가 포함된 폼 필드입니다.`,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-bio">자기소개</label>
    <Textarea id="textarea-bio" :rows="4" placeholder="간단한 자기소개를 입력하세요" />
    <p class="form_field-hint">500자 이내로 작성해 주세요.</p>
  </div>
</template>`},{default:s(()=>[l(`div`,W,[t[0]||=l(`label`,{class:`form_field-label`,for:`textarea-bio`},`자기소개`,-1),c(O,{id:`textarea-bio`,rows:4,placeholder:`간단한 자기소개를 입력하세요`}),t[1]||=l(`p`,{class:`form_field-hint`},`500자 이내로 작성해 주세요.`,-1)])]),_:1}),c(w,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <Textarea :rows="3" placeholder="플레이스홀더" />
  <Textarea :rows="3" model-value="입력된 내용이 여기에 표시됩니다." />
  <Textarea :rows="3" placeholder="비활성" disabled />
</template>`},{default:s(()=>[c(O,{rows:3,placeholder:`플레이스홀더`}),c(O,{rows:3,"model-value":`입력된 내용이 여기에 표시됩니다.`}),c(O,{rows:3,placeholder:`비활성`,disabled:``})]),_:1}),c(w,{"heading-id":`size-heading`,title:`크기`,description:`textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-size-sm">Small</label>
    <Textarea id="textarea-size-sm" size="sm" :rows="3" placeholder="textarea_sm" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-size-md">Medium</label>
    <Textarea id="textarea-size-md" :rows="3" placeholder="기본 크기" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-size-lg">Large</label>
    <Textarea id="textarea-size-lg" size="lg" :rows="3" placeholder="textarea_lg" />
  </div>
</template>`},{default:s(()=>[l(`div`,te,[t[2]||=l(`label`,{class:`form_field-label`,for:`textarea-size-sm`},`Small`,-1),c(O,{id:`textarea-size-sm`,size:`sm`,rows:3,placeholder:`textarea_sm`})]),l(`div`,G,[t[3]||=l(`label`,{class:`form_field-label`,for:`textarea-size-md`},`Medium`,-1),c(O,{id:`textarea-size-md`,rows:3,placeholder:`기본 크기`})]),l(`div`,K,[t[4]||=l(`label`,{class:`form_field-label`,for:`textarea-size-lg`},`Large`,-1),c(O,{id:`textarea-size-lg`,size:`lg`,rows:3,placeholder:`textarea_lg`})])]),_:1}),c(w,{"heading-id":`width-heading`,title:`너비`,description:`크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-width-full">전체 너비</label>
    <Textarea id="textarea-width-full" :rows="3" placeholder="width: 100%" />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="textarea-width-fit">제한 너비</label>
    <Textarea id="textarea-width-fit" :rows="3" placeholder="form_field_fit — 최대 320px" />
  </div>
  <Textarea class="textarea_fit" :rows="3" placeholder="textarea_fit 단독 — 최대 320px" />
</template>`},{default:s(()=>[l(`div`,q,[t[5]||=l(`label`,{class:`form_field-label`,for:`textarea-width-full`},`전체 너비`,-1),c(O,{id:`textarea-width-full`,rows:3,placeholder:`width: 100%`})]),l(`div`,J,[t[6]||=l(`label`,{class:`form_field-label`,for:`textarea-width-fit`},`제한 너비`,-1),c(O,{id:`textarea-width-fit`,rows:3,placeholder:`form_field_fit — 최대 320px`})]),c(O,{class:`textarea_fit`,rows:3,placeholder:`textarea_fit 단독 — 최대 320px`})]),_:1}),c(w,{"heading-id":`rows-heading`,title:`행 수`,description:`HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-rows-2">2행</label>
    <Textarea id="textarea-rows-2" :rows="2" placeholder='rows="2"' />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-rows-3">3행</label>
    <Textarea id="textarea-rows-3" :rows="3" placeholder='rows="3" — 기본 권장' />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-rows-5">5행</label>
    <Textarea id="textarea-rows-5" :rows="5" placeholder='rows="5"' />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-rows-8">8행</label>
    <Textarea id="textarea-rows-8" :rows="8" placeholder='rows="8" — 긴 본문용' />
  </div>
</template>`},{default:s(()=>[l(`div`,Y,[t[7]||=l(`label`,{class:`form_field-label`,for:`textarea-rows-2`},`2행`,-1),c(O,{id:`textarea-rows-2`,rows:2,placeholder:`rows="2"`})]),l(`div`,X,[t[8]||=l(`label`,{class:`form_field-label`,for:`textarea-rows-3`},`3행`,-1),c(O,{id:`textarea-rows-3`,rows:3,placeholder:`rows="3" — 기본 권장`})]),l(`div`,Z,[t[9]||=l(`label`,{class:`form_field-label`,for:`textarea-rows-5`},`5행`,-1),c(O,{id:`textarea-rows-5`,rows:5,placeholder:`rows="5"`})]),l(`div`,Q,[t[10]||=l(`label`,{class:`form_field-label`,for:`textarea-rows-8`},`8행`,-1),c(O,{id:`textarea-rows-8`,rows:8,placeholder:`rows="8" — 긴 본문용`})])]),_:1}),c(w,{"heading-id":`resize-heading`,title:`리사이즈`,description:`textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-resize-none">기본 (리사이즈 없음)</label>
    <Textarea id="textarea-resize-none" :rows="3" placeholder="class 없음 — 기본" />
    <p class="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-resize-vertical">세로</label>
    <Textarea id="textarea-resize-vertical" class="textarea_resize_vertical" :rows="3" placeholder="textarea_resize_vertical" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-resize-horizontal">가로</label>
    <Textarea id="textarea-resize-horizontal" class="textarea_resize_horizontal" :rows="3" placeholder="textarea_resize_horizontal" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-resize-both">양방향</label>
    <Textarea id="textarea-resize-both" class="textarea_resize_both" :rows="3" placeholder="textarea_resize_both" />
  </div>
</template>`},{default:s(()=>[l(`div`,ne,[t[11]||=l(`label`,{class:`form_field-label`,for:`textarea-resize-none`},`기본 (리사이즈 없음)`,-1),c(O,{id:`textarea-resize-none`,rows:3,placeholder:`class 없음 — 기본`}),t[12]||=l(`p`,{class:`form_field-hint`},`고정 높이가 필요한 폼에 사용합니다.`,-1)]),l(`div`,re,[t[13]||=l(`label`,{class:`form_field-label`,for:`textarea-resize-vertical`},`세로`,-1),c(O,{id:`textarea-resize-vertical`,class:`textarea_resize_vertical`,rows:3,placeholder:`textarea_resize_vertical`})]),l(`div`,ie,[t[14]||=l(`label`,{class:`form_field-label`,for:`textarea-resize-horizontal`},`가로`,-1),c(O,{id:`textarea-resize-horizontal`,class:`textarea_resize_horizontal`,rows:3,placeholder:`textarea_resize_horizontal`})]),l(`div`,ae,[t[15]||=l(`label`,{class:`form_field-label`,for:`textarea-resize-both`},`양방향`,-1),c(O,{id:`textarea-resize-both`,class:`textarea_resize_both`,rows:3,placeholder:`textarea_resize_both`})])]),_:1}),c(w,{"heading-id":`required-heading`,title:`필수 필드`,description:`required 속성과 form_field-required로 필수 입력을 표시합니다.`,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-required-content">
      문의 내용<span class="form_field-required" aria-hidden="true">*</span>
    </label>
    <Textarea id="textarea-required-content" :rows="4" placeholder="문의 내용을 입력해 주세요" required aria-required="true" />
    <p class="form_field-hint">최소 10자 이상 입력해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-required-memo">
      메모<span class="form_field-required" aria-hidden="true">*</span>
    </label>
    <Textarea id="textarea-required-memo" size="sm" :rows="2" placeholder="필수 메모" required aria-required="true" />
  </div>
</template>`},{default:s(()=>[l(`div`,oe,[t[16]||=l(`label`,{class:`form_field-label`,for:`textarea-required-content`},[v(` 문의 내용`),l(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),c(O,{id:`textarea-required-content`,rows:4,placeholder:`문의 내용을 입력해 주세요`,required:``,"aria-required":`true`}),t[17]||=l(`p`,{class:`form_field-hint`},`최소 10자 이상 입력해 주세요.`,-1)]),l(`div`,se,[t[18]||=l(`label`,{class:`form_field-label`,for:`textarea-required-memo`},[v(` 메모`),l(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),c(O,{id:`textarea-required-memo`,size:`sm`,rows:2,placeholder:`필수 메모`,required:``,"aria-required":`true`})])]),_:1}),c(w,{"heading-id":`count-heading`,title:`글자 수 카운터`,description:`<code>TextareaShowCount</code>로 textarea 우측 하단에 현재 글자 수를 표시합니다. <code>maxlength</code>와 함께 사용하면 <code>0/200</code> 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터 ID는 textarea의 <code>aria-describedby</code>에 자동으로 연결되며, 스크린 리더에는 현재·최대 글자 수를 음성 안내합니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
import TextareaShowCount from '@/components/TextareaShowCount.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-count-basic">메모</label>
    <TextareaShowCount count-id="textarea-count-basic-count">
      <Textarea
        id="textarea-count-basic"
        :rows="4"
        maxlength="200"
        placeholder="내용을 입력하세요"
        aria-describedby="textarea-count-basic-hint"
      />
    </TextareaShowCount>
    <p class="form_field-hint" id="textarea-count-basic-hint">200자 이내로 작성해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-count-sm">Small + 카운터</label>
    <TextareaShowCount count-id="textarea-count-sm-count">
      <Textarea
        id="textarea-count-sm"
        size="sm"
        :rows="3"
        maxlength="100"
        placeholder="textarea_sm"
        aria-describedby="textarea-count-sm-hint"
      />
    </TextareaShowCount>
    <p class="form_field-hint" id="textarea-count-sm-hint">100자 이내로 작성해 주세요.</p>
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="textarea-count-fit">제한 너비 + 카운터</label>
    <TextareaShowCount class="textarea_wrap_fit" count-id="textarea-count-fit-count">
      <Textarea
        id="textarea-count-fit"
        :rows="3"
        maxlength="200"
        placeholder="textarea_wrap_fit"
        model-value="입력된 내용이 있습니다."
        aria-describedby="textarea-count-fit-hint"
      />
    </TextareaShowCount>
    <p class="form_field-hint" id="textarea-count-fit-hint">200자 이내로 작성해 주세요.</p>
  </div>
</template>`},{default:s(()=>[l(`div`,ce,[t[19]||=l(`label`,{class:`form_field-label`,for:`textarea-count-basic`},`메모`,-1),c(M,{"count-id":`textarea-count-basic-count`},{default:s(()=>[c(O,{id:`textarea-count-basic`,rows:4,maxlength:`200`,placeholder:`내용을 입력하세요`,"aria-describedby":`textarea-count-basic-hint`})]),_:1}),t[20]||=l(`p`,{class:`form_field-hint`,id:`textarea-count-basic-hint`},`200자 이내로 작성해 주세요.`,-1)]),l(`div`,le,[t[21]||=l(`label`,{class:`form_field-label`,for:`textarea-count-sm`},`Small + 카운터`,-1),c(M,{"count-id":`textarea-count-sm-count`},{default:s(()=>[c(O,{id:`textarea-count-sm`,size:`sm`,rows:3,maxlength:`100`,placeholder:`textarea_sm`,"aria-describedby":`textarea-count-sm-hint`})]),_:1}),t[22]||=l(`p`,{class:`form_field-hint`,id:`textarea-count-sm-hint`},`100자 이내로 작성해 주세요.`,-1)]),l(`div`,ue,[t[23]||=l(`label`,{class:`form_field-label`,for:`textarea-count-fit`},`제한 너비 + 카운터`,-1),c(M,{class:`textarea_wrap_fit`,"count-id":`textarea-count-fit-count`},{default:s(()=>[c(O,{id:`textarea-count-fit`,rows:3,maxlength:`200`,placeholder:`textarea_wrap_fit`,"model-value":`입력된 내용이 있습니다.`,"aria-describedby":`textarea-count-fit-hint`})]),_:1}),t[24]||=l(`p`,{class:`form_field-hint`,id:`textarea-count-fit-hint`},`200자 이내로 작성해 주세요.`,-1)])]),_:1}),c(w,{"heading-id":`state-heading`,title:`상태`,description:`disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.`,stack:``,code:`<script setup>
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="textarea-state-default">기본</label>
    <Textarea id="textarea-state-default" :rows="3" placeholder="입력 가능" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-state-disabled">비활성</label>
    <Textarea id="textarea-state-disabled" :rows="3" model-value="수정할 수 없는 내용입니다." disabled />
    <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="textarea-state-error">에러</label>
    <Textarea id="textarea-state-error" :rows="3" error model-value="짧음" aria-describedby="textarea-state-error-msg" />
    <p class="form_field-error" id="textarea-state-error-msg" role="alert">10자 이상 입력해 주세요.</p>
  </div>
</template>`},{default:s(()=>[l(`div`,de,[t[25]||=l(`label`,{class:`form_field-label`,for:`textarea-state-default`},`기본`,-1),c(O,{id:`textarea-state-default`,rows:3,placeholder:`입력 가능`})]),l(`div`,fe,[t[26]||=l(`label`,{class:`form_field-label`,for:`textarea-state-disabled`},`비활성`,-1),c(O,{id:`textarea-state-disabled`,rows:3,"model-value":`수정할 수 없는 내용입니다.`,disabled:``}),t[27]||=l(`p`,{class:`form_field-hint`},`disabled 속성으로 편집을 막습니다.`,-1)]),l(`div`,pe,[t[28]||=l(`label`,{class:`form_field-label`,for:`textarea-state-error`},`에러`,-1),c(O,{id:`textarea-state-error`,rows:3,error:``,"model-value":`짧음`,"aria-describedby":`textarea-state-error-msg`}),t[29]||=l(`p`,{class:`form_field-error`,id:`textarea-state-error-msg`,role:`alert`},`10자 이상 입력해 주세요.`,-1)])]),_:1}),c(w,{"heading-id":`example-heading`,title:`조합 예시`,description:`문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxlength로 접근성을 보완합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import TextareaShowCount from '@/components/TextareaShowCount.vue';
<\/script>

<template>
  <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
    <div class="form_field">
      <label class="form_field-label" for="textarea-ex-subject">
        제목<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Input id="textarea-ex-subject" size="sm" model-value="서비스 이용 문의" required aria-required="true" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-ex-body">
        문의 내용<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <TextareaShowCount count-id="textarea-ex-body-count">
        <Textarea
          id="textarea-ex-body"
          size="sm"
          :rows="5"
          maxlength="500"
          required
          error
          model-value="너무 짧아요"
          aria-required="true"
          aria-invalid="true"
          aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error"
        />
      </TextareaShowCount>
      <p class="form_field-hint" id="textarea-ex-body-limit">500자 이내로 작성해 주세요.</p>
      <p class="form_field-hint" id="textarea-ex-body-hint">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>
      <p class="form_field-error" id="textarea-ex-body-error" role="alert">10자 이상 입력해 주세요.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-ex-memo">추가 메모</label>
      <TextareaShowCount count-id="textarea-ex-memo-count">
        <Textarea
          id="textarea-ex-memo"
          size="sm"
          class="textarea_resize_vertical is-success"
          :rows="3"
          maxlength="200"
          model-value="참고할 내용이 있습니다."
          aria-invalid="false"
          aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success"
        />
      </TextareaShowCount>
      <p class="form_field-hint" id="textarea-ex-memo-hint">200자 이내로 작성해 주세요.</p>
      <p class="form_field-success" id="textarea-ex-memo-success" role="status">선택 항목이 정상적으로 저장되었습니다.</p>
    </div>
    <div class="form_actions">
      <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
      <Button variant="ghost" size="sm" type="button" label="취소" />
    </div>
  </FormLayout>
</template>`},{default:s(()=>[c(T,{layout:`vertical`,compact:``,novalidate:``,"aria-labelledby":`example-heading`},{default:s(()=>[l(`div`,$,[t[30]||=l(`label`,{class:`form_field-label`,for:`textarea-ex-subject`},[v(` 제목`),l(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),c(E,{id:`textarea-ex-subject`,size:`sm`,"model-value":`서비스 이용 문의`,required:``,"aria-required":`true`})]),l(`div`,me,[t[31]||=l(`label`,{class:`form_field-label`,for:`textarea-ex-body`},[v(` 문의 내용`),l(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),c(M,{"count-id":`textarea-ex-body-count`},{default:s(()=>[c(O,{id:`textarea-ex-body`,size:`sm`,rows:5,maxlength:`500`,required:``,error:``,"model-value":`너무 짧아요`,"aria-required":`true`,"aria-invalid":`true`,"aria-describedby":`textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error`})]),_:1}),t[32]||=l(`p`,{class:`form_field-hint`,id:`textarea-ex-body-limit`},`500자 이내로 작성해 주세요.`,-1),t[33]||=l(`p`,{class:`form_field-hint`,id:`textarea-ex-body-hint`},`구체적인 상황을 알려주시면 빠르게 답변드립니다.`,-1),t[34]||=l(`p`,{class:`form_field-error`,id:`textarea-ex-body-error`,role:`alert`},`10자 이상 입력해 주세요.`,-1)]),l(`div`,he,[t[35]||=l(`label`,{class:`form_field-label`,for:`textarea-ex-memo`},`추가 메모`,-1),c(M,{"count-id":`textarea-ex-memo-count`},{default:s(()=>[c(O,{id:`textarea-ex-memo`,size:`sm`,class:`textarea_resize_vertical is-success`,rows:3,maxlength:`200`,"model-value":`참고할 내용이 있습니다.`,"aria-invalid":`false`,"aria-describedby":`textarea-ex-memo-hint textarea-ex-memo-success`})]),_:1}),t[36]||=l(`p`,{class:`form_field-hint`,id:`textarea-ex-memo-hint`},`200자 이내로 작성해 주세요.`,-1),t[37]||=l(`p`,{class:`form_field-success`,id:`textarea-ex-memo-success`,role:`status`},`선택 항목이 정상적으로 저장되었습니다.`,-1)]),l(`div`,ge,[c(C,{variant:`filled`,color:`primary`,size:`sm`,type:`submit`,label:`문의하기`}),c(C,{variant:`ghost`,size:`sm`,type:`button`,label:`취소`})])]),_:1})]),_:1}),c(b,{"heading-id":`api-props-heading`,title:`API · Props`},{default:s(()=>[c(x,{columns:m(N),rows:m(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(b,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:s(()=>[c(x,{columns:m(F),rows:m(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(b,{"heading-id":`api-events-heading`,title:`API · Events`},{default:s(()=>[c(x,{columns:m(z),rows:m(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(b,{"heading-id":`api-show-count-heading`,title:`API · TextareaShowCount`,description:`Textarea를 기본 슬롯에 하나 배치하면 값과 maxlength를 기준으로 카운터를 자동 갱신합니다.`},{default:s(()=>[c(x,{columns:m(N),rows:m(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(b,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:s(()=>[c(x,{columns:m(L),rows:m(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(b,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:s(()=>[c(x,{columns:m(H),rows:m(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ve as default,_e as docMeta};