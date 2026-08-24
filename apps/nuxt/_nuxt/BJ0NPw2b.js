import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,wt as m,xt as h,y as g}from"./CCnt5OSV.js";import{T as _,l as v,t as y}from"./DkmWXf_S.js";import{n as b,t as x}from"./D01l-9yr.js";import{t as S}from"./D5AUKneU.js";import{t as C}from"./gHQDdAlU.js";import{t as w}from"./DD3RWXAt.js";import{l as T,t as E}from"./D6IbhUhQ.js";import{t as D}from"./BYqKyl8G2.js";var O=[`id`,`data-modal-backdrop`,`aria-labelledby`,`hidden`],k={class:`modal_dialog`},A={key:0,class:`modal_header`,"data-demo-slot":`header`},j=[`id`],M={class:`modal_body`,"data-demo-slot":`default`},N=Object.assign({inheritAttrs:!1},{__name:`Modal`,props:{ripple:x,id:{type:String,required:!0},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`,`fullscreen`].includes(e)},scrollable:Boolean,backdrop:{type:Boolean,default:!0},title:String,open:Boolean,footerAlign:{type:String,default:`end`,validator:e=>[`start`,`center`,`end`,`between`,`even`].includes(e)},footerRatio:{type:String,default:`1-1`,validator:e=>[`1-1`,`1-2`,`2-1`].includes(e)},footerNoPadBottom:Boolean},setup(s){let g=new Set([`sm`,`md`,`lg`,`fullscreen`]),v=s,{rippleAttrs:y}=b(v),x=t(),w=r(),T=u(null),E=p(()=>`${v.id}-title`),D=p(()=>g.has(v.size)?v.size:`md`);_(()=>({...v,size:D.value}),T,w);let N=p(()=>!!(x.header||v.title)),P=p(()=>w[`aria-labelledby`]?w[`aria-labelledby`]:!x.header&&v.title?E.value:void 0),F=p(()=>typeof w.class==`string`&&w.class.includes(`modal_demo-static`)),I=p(()=>{let e=[`modal`];return D.value===`sm`&&e.push(`modal_sm`),D.value===`lg`&&e.push(`modal_lg`),D.value===`fullscreen`&&e.push(`modal_fullscreen`),v.scrollable&&e.push(`modal_scrollable`),v.open&&e.push(`is-open`),w.class&&e.push(w.class),e}),L=p(()=>{let e=[`modal_footer`];return v.footerAlign&&v.footerAlign!==`end`&&e.push(`modal_footer-${v.footerAlign}`),v.footerAlign===`even`&&v.footerRatio&&v.footerRatio!==`1-1`&&e.push(`modal_footer-even-${v.footerRatio}`),v.footerNoPadBottom&&e.push(`modal_footer-no-pad-b`),e}),R=p(()=>{let{class:e,"aria-labelledby":t,...n}=w;return n});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:T,id:s.id,class:I.value,"data-modal":``,"data-modal-backdrop":s.backdrop?void 0:`false`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":P.value,tabindex:`-1`,hidden:F.value||s.open?void 0:!0},R.value),[r[0]||=o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`},null,-1),o(`div`,k,[N.value?(n(),l(`div`,A,[e(t.$slots,`header`,{},()=>[o(`div`,{class:`modal_title`,id:E.value,role:`heading`,"aria-level":`2`},m(s.title),9,j)]),a(C,c({variant:`ghost`,"icon-only":``,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},f(y)),{"icon-before":i(()=>[a(S,{name:`close`,size:`sm`,class:`modal_close-icon`})]),_:1},16)])):d(``,!0),o(`div`,M,[e(t.$slots,`default`)]),t.$slots.footer?(n(),l(`div`,{key:1,class:h(L.value),"data-demo-slot":`footer`},[e(t.$slots,`footer`)],2)):d(``,!0)])],16,O))}}),P=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`id`,type:`string`,default:`—`,description:`루트 id (필수, data-modal-trigger 연결)`},{name:`title`,type:`string`,default:`—`,description:`기본 헤더 제목 (modal_title)`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'fullscreen'`,default:`md`,description:`modal_sm · modal_lg · modal_fullscreen`},{name:`scrollable`,type:`boolean`,default:`false`,description:`본문 스크롤 (modal_scrollable)`},{name:`backdrop`,type:`boolean`,default:`true`,description:`백드롭 표시 (false → data-modal-backdrop="false")`},{name:`open`,type:`boolean`,default:`false`,description:`열림 상태 (is-open, hidden 해제)`},{name:`footer-align`,type:`'start' | 'center' | 'end' | 'between' | 'even'`,default:`end`,description:`푸터 정렬 (modal_footer-start · center · between · even). between은 modal_footer-group으로 좌·우 묶음`},{name:`footer-ratio`,type:`'1-1' | '1-2' | '2-1'`,default:`1-1`,description:`균등 정렬(even) 좌·우 비율 (modal_footer-even-1-2 · even-2-1)`},{name:`footer-no-pad-bottom`,type:`boolean`,default:`false`,description:`푸터 하단 패딩 제거 (modal_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거`},T],I=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],L=[{name:`header`,description:`헤더 (title 대체, aria-labelledby 또는 aria-label 별도 지정)`},{name:`default`,description:`본문 (modal_body)`},{name:`footer`,description:`하단 액션 (modal_footer)`}],R=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],z=[{name:`modal · modal_backdrop · modal_dialog`,description:`루트·백드롭·대화상자`},{name:`modal_header · modal_title · modal_close · modal_body · modal_footer`,description:`구조 파트`},{name:`modal_footer-start · modal_footer-center · modal_footer-end · modal_footer-between · modal_footer-even`,description:`푸터 정렬 (기본 end)`},{name:`modal_footer-even-1-2 · modal_footer-even-2-1`,description:`균등 정렬 좌·우 비율 (기본 1:1)`},{name:`modal_footer-no-pad-b`,description:`푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)`},{name:`modal_footer-group`,description:`병합 정렬용 좌·우 버튼 묶음`},{name:`modal_sm · modal_lg · modal_fullscreen · modal_scrollable`,description:`크기·스크롤`},{name:`data-modal · data-modal-trigger · data-modal-close`,description:`JS 연동 속성`},{name:`is-open · is-stack-covered · hidden`,description:`열림·중첩 하위(백드롭 숨김)·닫힘 상태`},{name:`role="dialog" · aria-modal="true"`,description:`접근성 시맨틱`},...E],B=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],V=[{name:`--modal-z-index`,default:`300`,description:`레이어 순서`},{name:`--modal-width · --modal-width-sm · --modal-width-lg`,default:`32rem · 24rem · 48rem`,description:`대화상자 너비`},{name:`--modal-bg · --modal-radius · --modal-shadow`,default:`—`,description:`배경·모서리·그림자`}],H=`<!-- 트리거 -->
<button type="button" data-modal-trigger="#modal-1"
  aria-controls="modal-1" aria-expanded="false">
  모달 열기
</button>

<!-- Modal -->
<div class="modal" id="modal-1" data-modal
  role="dialog" aria-modal="true" aria-labelledby="modal-1-title"
  tabindex="-1" hidden>
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog">
    <div class="modal_header">
      <h2 class="modal_title" id="modal-1-title">제목</h2>
      <button type="button" class="modal_close"
        data-modal-close aria-label="닫기">…</button>
    </div>
    <div class="modal_body">본문</div>
    <div class="modal_footer">
      <button type="button" class="btn btn_ghost" data-modal-close>취소</button>
      <button type="button" class="btn btn_filled color_primary" data-modal-close>확인</button>
    </div>
  </div>
</div>

<!-- 푸터 정렬: start · center · end · between · even -->
<!-- 균등 비율: modal_footer-even · modal_footer-even-1-2 · modal_footer-even-2-1 -->
<!-- 하단 패딩 없음: modal_footer-no-pad-b (+ even 권장) -->
<div class="modal_footer modal_footer-even modal_footer-no-pad-b">
  <button type="button" class="btn btn_ghost" data-modal-close>취소</button>
  <button type="button" class="btn btn_filled color_primary" data-modal-close>확인</button>
</div>

<!-- 옵션: 백드롭 없음 (Vue) -->
<Modal id="modal-plain" :backdrop="false" …>…</Modal>

<!-- 옵션: 백드롭 없음 (HTML) -->
<div class="modal" id="modal-plain" data-modal
  data-modal-backdrop="false" …>…</div>

<!-- 옵션: 스크롤 본문 -->
<div class="modal modal_scrollable" id="modal-long" data-modal …>…</div>`,U={class:`modal_demo-frame`},W={class:`modal_demo-row`},G={class:`modal_demo-stack`},K={class:`modal_demo-frame modal_demo-frame-compact`},q={class:`modal_demo-frame modal_demo-frame-compact`},J={class:`modal_demo-frame modal_demo-frame-compact`},Y={class:`modal_demo-frame modal_demo-frame-compact`},X={class:`modal_footer-group`},Z={class:`modal_footer-group`},Q={class:`modal_demo-frame modal_demo-frame-compact`},$={class:`modal_footer-group`},ee={class:`modal_footer-group`},te={class:`modal_demo-frame modal_demo-frame-compact`},ne={class:`modal_demo-frame modal_demo-frame-compact`},re={class:`modal_demo-frame modal_demo-frame-compact`},ie={class:`modal_demo-frame modal_demo-frame-compact`},ae={class:`section`,"aria-labelledby":`usage-heading`},oe={title:`Modal | HTML Components`,activeNav:`modal`,pageTitle:`Modal`},se={__name:`modal`,setup(e){return(e,t)=>(n(),l(s,null,[t[21]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Modal`),o(`p`,{class:`lead`},[g(`화면 중앙에 표시되는 대화상자 컴포넌트입니다. 확인·폼·상세 보기 등 사용자의 집중이 필요한 작업에 사용하며, `),o(`code`,{class:`typo_code`},`role="dialog"`),g(` · `),o(`code`,{class:`typo_code`},`aria-modal`),g(`로 접근성을 보장합니다.`)])],-1),a(w,{"heading-id":`basic-heading`,title:`기본`,description:`data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`filled`,color:`primary`,label:`모달 열기`,"data-modal-trigger":`#modal-basic`,"aria-controls":`modal-basic`})]),_:1}),a(w,{"heading-id":`open-heading`,title:`열린 상태`,description:`open prop으로 is-open 클래스를 추가하고 hidden을 해제합니다. 문서 미리보기에서는 modal_demo-frame 안에서 열린 모습을 확인합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Modal id="modal-open" title="알림" open>
    <p>열린 상태의 Modal입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[o(`div`,U,[t[1]||=o(`div`,{class:`modal_demo-content`},[o(`p`,null,`open prop으로 대화상자가 열린 상태를 미리 보여 줍니다.`)],-1),a(N,{id:`modal-open`,title:`알림`,open:``,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[0]||=o(`p`,null,`열린 상태의 Modal입니다. 백드롭·헤더·푸터 구성을 한눈에 확인할 수 있습니다.`,-1)]),_:1})])]),_:1}),a(w,{"heading-id":`size-heading`,title:`크기`,description:`modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <div class="modal_demo-row">
    <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
    <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
    <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
    <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
  </div>
  <Modal id="modal-size-sm" size="sm" title="Small">
    <p>좁은 너비</p>
  </Modal>
  <Modal id="modal-size-default" title="Default">
    <p>기본 너비 32rem</p>
  </Modal>
  <Modal id="modal-size-lg" size="lg" title="Large">
    <p>넓은 너비</p>
  </Modal>
  <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
    <p>뷰포트 전체</p>
  </Modal>
</template>`},{default:i(()=>[o(`div`,W,[a(C,{variant:`outline`,size:`sm`,label:`Small`,"data-modal-trigger":`#modal-size-sm`,"aria-controls":`modal-size-sm`}),a(C,{variant:`outline`,label:`Default`,"data-modal-trigger":`#modal-size-default`,"aria-controls":`modal-size-default`}),a(C,{variant:`outline`,size:`lg`,label:`Large`,"data-modal-trigger":`#modal-size-lg`,"aria-controls":`modal-size-lg`}),a(C,{variant:`outline`,label:`Fullscreen`,"data-modal-trigger":`#modal-size-fullscreen`,"aria-controls":`modal-size-fullscreen`})])]),_:1}),a(w,{"heading-id":`footer-heading`,title:`헤더·푸터`,description:`modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  <Modal id="modal-footer" title="새 항목 추가">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`filled`,color:`primary`,label:`새 항목 추가`,"data-modal-trigger":`#modal-footer`,"aria-controls":`modal-footer`})]),_:1}),a(w,{"heading-id":`footer-align-heading`,title:`푸터 정렬`,description:`footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 modal_footer-group으로 좌·우에 1~2개씩 묶습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start">
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 가운데 -->
  <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center">
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 우측 (기본) -->
  <Modal id="modal-footer-end" title="우측 정렬">
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 병합: 좌 1 / 우 2 -->
  <Modal id="modal-footer-between" title="병합 정렬" footer-align="between">
    <p>footer-align="between" + modal_footer-group</p>
    <template #footer>
      <div class="modal_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-modal-close />
      </div>
      <div class="modal_footer-group">
        <Button variant="ghost" label="취소" data-modal-close />
        <Button variant="filled" color="primary" label="확인" data-modal-close />
      </div>
    </template>
  </Modal>

  <!-- 균등 1:1 -->
  <Modal id="modal-footer-even" title="균등 1:1" footer-align="even">
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 1:2 -->
  <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2">
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 2:1 -->
  <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1">
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 하단 패딩 없음 + 균등 -->
  <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`,stack:``},{default:i(()=>[o(`div`,G,[o(`div`,K,[a(N,{id:`modal-footer-start`,title:`좌측 정렬`,"footer-align":`start`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[2]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="start"`)],-1)]),_:1})]),o(`div`,q,[a(N,{id:`modal-footer-center`,title:`가운데 정렬`,"footer-align":`center`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[3]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="center"`)],-1)]),_:1})]),o(`div`,J,[a(N,{id:`modal-footer-end`,title:`우측 정렬`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[4]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="end"`),g(` (기본)`)],-1)]),_:1})]),o(`div`,Y,[a(N,{id:`modal-footer-between`,title:`병합 정렬`,"footer-align":`between`,class:`modal_demo-static`},{footer:i(()=>[o(`div`,X,[a(C,{variant:`ghost`,color:`danger`,label:`삭제`,"data-modal-close":``})]),o(`div`,Z,[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})])]),default:i(()=>[t[5]||=o(`p`,null,[o(`code`,{class:`typo_code`},`between`),g(` — 좌 1 / 우 2`)],-1)]),_:1})]),o(`div`,Q,[a(N,{id:`modal-footer-between-2`,title:`병합 정렬`,"footer-align":`between`,class:`modal_demo-static`},{footer:i(()=>[o(`div`,$,[a(C,{variant:`ghost`,label:`도움말`,"data-modal-close":``}),a(C,{variant:`ghost`,color:`danger`,label:`삭제`,"data-modal-close":``})]),o(`div`,ee,[a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})])]),default:i(()=>[t[6]||=o(`p`,null,[o(`code`,{class:`typo_code`},`between`),g(` — 좌 2 / 우 1`)],-1)]),_:1})]),o(`div`,te,[a(N,{id:`modal-footer-even`,title:`균등 1:1`,"footer-align":`even`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[7]||=o(`p`,null,[o(`code`,{class:`typo_code`},`even`),g(` · `),o(`code`,{class:`typo_code`},`footer-ratio="1-1"`)],-1)]),_:1})]),o(`div`,ne,[a(N,{id:`modal-footer-even-1-2`,title:`균등 1:2`,"footer-align":`even`,"footer-ratio":`1-2`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[8]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-ratio="1-2"`),g(` — 좌 1 / 우 2`)],-1)]),_:1})]),o(`div`,re,[a(N,{id:`modal-footer-even-2-1`,title:`균등 2:1`,"footer-align":`even`,"footer-ratio":`2-1`,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[9]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-ratio="2-1"`),g(` — 좌 2 / 우 1`)],-1)]),_:1})]),o(`div`,ie,[a(N,{id:`modal-footer-no-pad`,title:`하단 패딩 없음`,"footer-align":`even`,"footer-no-pad-bottom":``,class:`modal_demo-static`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[10]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-no-pad-bottom`),g(` + even`)],-1)]),_:1})])])]),_:1}),a(w,{"heading-id":`confirm-heading`,title:`확인 대화상자`,description:`삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  <Modal id="modal-confirm" size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc">
    <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="danger" label="삭제" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`filled`,color:`danger`,label:`삭제`,"data-modal-trigger":`#modal-confirm`,"aria-controls":`modal-confirm`})]),_:1}),a(w,{"heading-id":`form-heading`,title:`폼`,description:`입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  <Modal id="modal-form" title="프로필 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`outline`,label:`프로필 편집`,"data-modal-trigger":`#modal-form`,"aria-controls":`modal-form`})]),_:1}),a(w,{"heading-id":`scroll-heading`,title:`스크롤 본문`,description:`modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  <Modal id="modal-scroll" scrollable title="이용 약관">
    <p>긴 본문…</p>
    <template #footer>
      <Button variant="ghost" label="거부" data-modal-close />
      <Button variant="filled" color="primary" label="동의" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`ghost`,label:`이용 약관 보기`,"data-modal-trigger":`#modal-scroll`,"aria-controls":`modal-scroll`})]),_:1}),a(w,{"heading-id":`nested-heading`,title:`중첩 Modal`,description:`열린 Modal 안에서 다른 Modal을 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 대화상자부터 닫습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
  <Modal id="modal-nested-1" title="1단계 Modal">
    <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-modal-close />
      <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
    </template>
  </Modal>
  <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
    <p>중첩된 Modal입니다. 닫으면 1단계 백드롭이 다시 표시됩니다.</p>
    <template #footer>
      <Button variant="filled" color="primary" label="완료" data-modal-close />
    </template>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`ghost`,label:`중첩 예시 열기`,"data-modal-trigger":`#modal-nested-1`,"aria-controls":`modal-nested-1`})]),_:1}),a(w,{"heading-id":`no-backdrop-heading`,title:`백드롭 없음`,description:`:backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
  </Modal>
</template>`},{default:i(()=>[a(C,{variant:`ghost`,label:`백드롭 없이 열기`,"data-modal-trigger":`#modal-no-backdrop`,"aria-controls":`modal-no-backdrop`})]),_:1}),a(N,{id:`modal-basic`,title:`알림`},{footer:i(()=>[a(C,{variant:`ghost`,label:`취소`,"data-modal-close":``}),a(C,{variant:`filled`,color:`primary`,label:`확인`,"data-modal-close":``})]),default:i(()=>[t[11]||=o(`p`,null,[g(`Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, `),o(`kbd`,null,`Esc`),g(` 키로 닫을 수 있습니다.`)],-1)]),_:1}),a(N,{id:`modal-size-sm`,size:`sm`,title:`Small`},{default:i(()=>[...t[12]||=[o(`p`,null,[o(`code`,{class:`typo_code`},`modal_sm`),g(` — 확인·간단한 알림에 적합한 좁은 너비입니다.`)],-1)]]),_:1}),a(N,{id:`modal-size-default`,title:`Default`},{default:i(()=>[...t[13]||=[o(`p`,null,`기본 너비 32rem`,-1)]]),_:1}),a(N,{id:`modal-size-lg`,size:`lg`,title:`Large`},{default:i(()=>[...t[14]||=[o(`p`,null,[o(`code`,{class:`typo_code`},`modal_lg`),g(` — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다.`)],-1)]]),_:1}),t[22]||=o(`div`,{class:`modal modal_fullscreen`,id:`modal-size-fullscreen`,"data-modal":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-size-fullscreen-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`}),o(`div`,{class:`modal_dialog`},[o(`div`,{class:`modal_header`},[o(`h2`,{class:`modal_title`,id:`modal-size-fullscreen-title`},`Fullscreen`),o(`button`,{type:`button`,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},[o(`svg`,{class:`modal_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`modal_body`},[o(`p`,null,[o(`code`,{class:`typo_code`},`modal_fullscreen`),g(` — 뷰포트 전체를 사용하는 대화상자입니다. 모바일 상세 화면·에디터 등에 적합합니다.`)])]),o(`div`,{class:`modal_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`닫기`)])])])],-1),t[23]||=o(`div`,{class:`modal`,id:`modal-footer`,"data-modal":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-footer-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`}),o(`div`,{class:`modal_dialog`},[o(`div`,{class:`modal_header`},[o(`h2`,{class:`modal_title`,id:`modal-footer-title`},`새 항목 추가`),o(`button`,{type:`button`,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},[o(`svg`,{class:`modal_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`modal_body`},[o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`modal-item-name`},`이름`),o(`input`,{class:`input`,type:`text`,id:`modal-item-name`,placeholder:`항목 이름`})]),o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`modal-item-desc`},`설명`),o(`textarea`,{class:`textarea`,id:`modal-item-desc`,rows:`3`,placeholder:`간단한 설명`})])]),o(`div`,{class:`modal_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`취소`)]),o(`button`,{type:`button`,class:`btn btn_filled color_primary`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`저장`)])])])],-1),t[24]||=o(`div`,{class:`modal modal_sm`,id:`modal-confirm`,"data-modal":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-confirm-title`,"aria-describedby":`modal-confirm-desc`,tabindex:`-1`,hidden:``},[o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`}),o(`div`,{class:`modal_dialog`},[o(`div`,{class:`modal_header`},[o(`h2`,{class:`modal_title`,id:`modal-confirm-title`},`항목 삭제`),o(`button`,{type:`button`,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},[o(`svg`,{class:`modal_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`modal_body`},[o(`p`,{id:`modal-confirm-desc`},`이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?`)]),o(`div`,{class:`modal_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`취소`)]),o(`button`,{type:`button`,class:`btn btn_filled color_error`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`삭제`)])])])],-1),t[25]||=o(`div`,{class:`modal`,id:`modal-form`,"data-modal":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-form-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`}),o(`div`,{class:`modal_dialog`},[o(`div`,{class:`modal_header`},[o(`h2`,{class:`modal_title`,id:`modal-form-title`},`프로필 편집`),o(`button`,{type:`button`,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},[o(`svg`,{class:`modal_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`modal_body`},[o(`div`,{class:`form_layout form_layout-vertical`},[o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`modal-profile-name`},`이름`),o(`input`,{class:`input`,type:`text`,id:`modal-profile-name`,value:`홍길동`})]),o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`modal-profile-email`},`이메일`),o(`input`,{class:`input`,type:`email`,id:`modal-profile-email`,value:`hong@example.com`})]),o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`modal-profile-bio`},`소개`),o(`textarea`,{class:`textarea`,id:`modal-profile-bio`,rows:`3`,placeholder:`자기소개를 입력하세요`})])])]),o(`div`,{class:`modal_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`취소`)]),o(`button`,{type:`button`,class:`btn btn_filled color_primary`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`저장`)])])])],-1),t[26]||=o(`div`,{class:`modal modal_scrollable`,id:`modal-scroll`,"data-modal":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-scroll-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`modal_backdrop`,"data-modal-close":``,"aria-hidden":`true`}),o(`div`,{class:`modal_dialog`},[o(`div`,{class:`modal_header`},[o(`h2`,{class:`modal_title`,id:`modal-scroll-title`},`이용 약관`),o(`button`,{type:`button`,class:`modal_close`,"data-modal-close":``,"aria-label":`닫기`},[o(`svg`,{class:`modal_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`modal_body`},[o(`p`,null,`제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.`),o(`p`,null,`제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① "서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다. ② "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.`),o(`p`,null,`제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.`),o(`p`,null,`제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타 회사가 정하는 서비스.`),o(`p`,null,`제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.`),o(`p`,null,`제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.`),o(`p`,null,`제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.`),o(`p`,null,`제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.`),o(`p`,null,`제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.`),o(`p`,null,`제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.`)]),o(`div`,{class:`modal_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`거부`)]),o(`button`,{type:`button`,class:`btn btn_filled color_primary`,"data-modal-close":``},[o(`span`,{class:`btn_label`},`동의`)])])])],-1),a(N,{id:`modal-no-backdrop`,size:`sm`,title:`백드롭 없음`,backdrop:!1},{default:i(()=>[...t[15]||=[o(`p`,null,[g(`본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 `),o(`kbd`,null,`Esc`),g(`로 닫으세요.`)],-1)]]),_:1}),a(N,{id:`modal-nested-1`,title:`1단계 Modal`},{footer:i(()=>[a(C,{variant:`ghost`,label:`닫기`,"data-modal-close":``}),a(C,{variant:`outline`,label:`2단계 열기`,"data-modal-trigger":`#modal-nested-2`,"aria-controls":`modal-nested-2`})]),default:i(()=>[t[16]||=o(`p`,null,`다음 단계 Modal을 열어 중첩 동작을 확인하세요.`,-1)]),_:1}),a(N,{id:`modal-nested-2`,size:`sm`,title:`2단계 Modal`},{footer:i(()=>[a(C,{variant:`filled`,color:`primary`,label:`완료`,"data-modal-close":``})]),default:i(()=>[t[17]||=o(`p`,null,[g(`중첩된 Modal입니다. `),o(`kbd`,null,`Esc`),g(`를 누르면 이 대화상자부터 닫힙니다.`)],-1)]),_:1}),o(`section`,ae,[t[18]||=o(`h2`,{id:`usage-heading`},`마크업`,-1),t[19]||=o(`p`,null,[g(`트리거 버튼과 Modal 루트를 `),o(`code`,{class:`typo_code`},`id`),g(` · `),o(`code`,{class:`typo_code`},`aria-controls`),g(`로 연결합니다. 기본은 닫힌 상태(`),o(`code`,{class:`typo_code`},`hidden`),g(`)이며, 클릭 이벤트로 열립니다.`)],-1),a(D,null,{default:i(()=>[g(m(f(H)),1)]),_:1})]),a(v,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(y,{columns:f(P),rows:f(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(v,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(y,{columns:f(I),rows:f(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(v,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(y,{columns:f(R),rows:f(z),"code-column":`name`},null,8,[`columns`,`rows`]),t[20]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[g(` 닫기: 백드롭 클릭 · `),o(`code`,{class:`typo_code`},`data-modal-close`),g(` · `),o(`kbd`,null,`Esc`),g(`. 열릴 때 포커스는 닫기 버튼으로 이동하고, 닫힐 때 트리거로 복원됩니다. 중첩 시 `),o(`kbd`,null,`Esc`),g(`는 최상위 대화상자부터 닫습니다. `)],-1)]),_:1}),a(v,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(y,{columns:f(B),rows:f(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{se as default,oe as docMeta};