import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Popover.stories-CznhHBjS.js";import{i as _,r as v}from"./react-DSvVgjCn.js";import{c as y,r as b,u as x}from"./blocks-CkHyEh4O.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-D9Q6nkXJ.js";function E(e){let t=j[e];if(e===`hover`)return`import Popover from '@uxkm/react/popover';
import Link from '@uxkm/react/link';

export function HoverExample() {
  return (
    <p>결제 시 <Popover trigger="hover" panelLabel="에스크로 설명" triggerContent={<Link label="에스크로" />}>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>
  );
}`;if(e===`form`)return`import Popover from '@uxkm/react/popover';
import Button from '@uxkm/react/button';
import Textarea from '@uxkm/react/textarea';

export function FormExample() {
  return (
    <Popover title="빠른 메모" triggerContent={<Button variant="outline" label="메모 추가" />} footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></>}>
      <div className="form_field"><label className="form_label" htmlFor="popover-memo-input">내용</label><Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" /></div>
    </Popover>
  );
}`;let n=t.props?.includes(`title=`)?``:t.heading?`panelLabel="${t.heading}" `:``,r=e===`footer`?` footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></>}`:``;return`import Popover from '@uxkm/react/popover';\nimport Button from '@uxkm/react/button';\n\nexport function ${e[0].toUpperCase()+e.slice(1)}Example() {\n  return (\n    <Popover ${t.props?`${t.props} `:``}${n}triggerContent={<Button variant="outline" ${t.button||``} label="${t.label}" />}${r}>\n      <p>${t.body}</p>\n    </Popover>\n  );\n}`}function D(e){let t=j[e];if(e===`hover`)return`<script setup>
import Popover from '@uxkm/vue/popover';
import Link from '@uxkm/vue/link';
<\/script>

<template>
  <p>결제 시 <Popover trigger="hover" panel-label="에스크로 설명"><template #trigger><Link label="에스크로" /></template>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>
</template>`;if(e===`form`)return`<script setup>
import Popover from '@uxkm/vue/popover';
import Button from '@uxkm/vue/button';
import Textarea from '@uxkm/vue/textarea';
<\/script>

<template>
  <Popover title="빠른 메모">
    <template #trigger><Button variant="outline" label="메모 추가" /></template>
    <div class="form_field"><label class="form_label" for="popover-memo-input">내용</label><Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" /></div>
    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></template>
  </Popover>
</template>`;let n=(t.props||``).replace(`defaultOpen`,`default-open`).replace(`arrowAnchor`,`arrow-anchor`).replace(`noArrow`,`no-arrow`),r=n.includes(`title=`)?``:t.heading?`panel-label="${t.heading}" `:``,i=e===`footer`?`
    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></template>`:``;return`<script setup>\nimport Popover from '@uxkm/vue/popover';\nimport Button from '@uxkm/vue/button';\n<\/script>\n\n<template>\n  <Popover ${n?`${n} `:``}${r.trim()}>\n    <template #trigger><Button variant="outline" ${t.button||``} label="${t.label}" /></template>\n    <p>${t.body}</p>${i}\n  </Popover>\n</template>`}function O(e){let t=j[e],n=[`popover`,e===`open`&&`is-open`,e===`size`&&`popover_sm`,e===`offset`&&`popover_offset-lg`,e===`placement`&&`popover_placement-top-center`,e===`arrowAnchor`&&`popover_arrow-anchor-target`,e===`noArrow`&&`popover_no-arrow`].filter(Boolean).join(` `),r=e===`footer`?`
    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_danger btn_sm">삭제</button></div>`:e===`form`?`
    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_primary btn_sm">저장</button></div>`:``,i=e===`form`?`<label class="form_label" for="popover-memo-input">내용</label><textarea id="popover-memo-input" class="textarea" rows="3" placeholder="메모를 입력하세요"></textarea>`:`<p>${t.body}</p>`;return`<div class="${n}" data-popover${e===`hover`?` data-popover-trigger="hover"`:``}>\n  <button class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="${e===`open`}">${t.label}</button>\n  <div class="popover_panel" role="dialog"${t.heading?` aria-label="${t.heading}"`:``}>\n    ${e===`noArrow`?``:`<span class="popover_arrow" aria-hidden="true"></span>`}\n    ${t.heading?`<div class="popover_title">${t.heading}</div>`:``}\n    <div class="popover_body">${i}</div>${r}\n  </div>\n</div>`}function k(e){let t=O(e),n=D(e),r=E(e);return[{id:`html`,label:`HTML`,fileName:`Popover.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`popover.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/popover · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/popover · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/popover · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/popover · ${e}`,code:r}]}var A,j,M;function N(){return(N=e((()=>{A=[`basic`,`noLabel`,`open`,`size`,`offset`,`title`,`footer`,`hover`,`trigger`,`placement`,`form`,`arrowAnchor`,`noArrow`],j={basic:{label:`Popover 열기`,heading:`안내`,body:`트리거를 클릭하면 이 패널이 표시됩니다.`},noLabel:{label:`라벨 없음`,body:`짧은 안내 문구만 필요할 때 사용합니다.`},open:{label:`열림`,heading:`열린 Popover`,body:`정적 데모용 열린 상태입니다.`,props:`open`,button:`variant="filled" color="primary"`},size:{label:`Small`,heading:`작은 Popover`,body:`작은 패널입니다.`,props:`size="sm"`,button:`size="sm"`},offset:{label:`lg`,heading:`lg`,body:`넓은 간격`,props:`offset="lg"`,button:`size="sm"`},title:{label:`도움말`,heading:`배송 안내`,body:`평일 오후 2시 이전 주문은 당일 출고됩니다.`,props:`title="배송 안내"`,button:`variant="ghost"`},footer:{label:`삭제 확인`,heading:`항목 삭제`,body:`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`,props:`title="항목 삭제"`},hover:{label:`에스크로`,heading:`에스크로 설명`,body:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`,props:`trigger="hover"`},trigger:{label:`Button`,heading:`Button 트리거`,body:`버튼 트리거 예시입니다.`,button:`variant="filled" color="primary"`},placement:{label:`위`,heading:`위쪽 가운데 배치`,body:`트리거 위 · 가운데`,props:`placement="top-center"`,button:`size="sm"`},form:{label:`메모 추가`,heading:`빠른 메모`,body:`내용`,props:`title="빠른 메모"`},arrowAnchor:{label:`S`,heading:`target`,body:`화살표가 트리거 중앙을 가리킵니다.`,props:`arrowAnchor="target"`,button:`size="sm"`},noArrow:{label:`화살표 없음`,heading:`화살표 없는 Popover`,body:`화살표가 표시되지 않는 패널입니다.`,props:`noArrow`,button:`variant="ghost"`}},M=Object.fromEntries(A.map(e=>[e,k(e)]))})))()}var P,F,I;function L(){return(L=e((()=>{P=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],F=(e,t,n)=>({title:e,description:n,tables:[{columns:P,rows:t}]}),I=[F(`React · Next.js API`,[{name:`open · defaultOpen · onOpenChange`,type:`boolean · function`,default:`— · false · —`,description:`제어·비제어 열림 상태와 변경 이벤트입니다.`},{name:`triggerContent · trigger`,type:`ReactNode · 'click' | 'hover'`,default:`— · 'click'`,description:`트리거 콘텐츠와 작동 방식입니다.`},{name:`placement`,type:`'top' | 'top-center' | 'bottom' | 'bottom-center' | 'left' | 'right' | 'end'`,default:`'bottom'`,description:`트리거 기준 배치입니다.`},{name:`size · offset`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`패널 크기와 간격입니다.`},{name:`offsetTop · offsetRight · offsetBottom · offsetLeft`,type:`'none' | 'sm' | 'md' | 'lg'`,default:`'md'`,description:`방향별 간격을 개별 지정합니다.`},{name:`arrowAnchor · panelAlign · arrowTargetAlign`,type:`string`,default:`'content' · 'start' · 'center'`,description:`패널과 화살표의 정렬 기준입니다.`},{name:`title · panelLabel · children · footer`,type:`ReactNode`,default:`—`,description:`제목, 접근성 라벨, 본문, 푸터입니다.`},{name:`noArrow · closable · disabled`,type:`boolean`,default:`false · 자동 · false`,description:`화살표, 닫기 버튼, 비활성 옵션입니다.`}],`Next.js는 @uxkm/react/popover를 재사용합니다.`),F(`Vue · Nuxt API`,[{name:`open · default-open · trigger`,type:`boolean · string`,default:`false · 'click'`,description:`열림 상태와 트리거 방식입니다.`},{name:`offset-top · offset-right · offset-bottom · offset-left`,type:`string`,default:`'md'`,description:`방향별 간격을 개별 지정합니다.`},{name:`arrow-anchor · panel-align · arrow-target-align`,type:`string`,default:`'content' · 'start' · 'center'`,description:`패널과 화살표의 정렬 기준입니다.`},{name:`trigger · default · footer`,type:`slot`,default:`—`,description:`트리거, 본문, 푸터 슬롯입니다.`}],`Nuxt는 @uxkm/vue/popover를 재사용합니다.`),F(`HTML · Gulp`,[{name:`popover · popover_trigger · popover_panel`,type:`class`,default:`—`,description:`루트, 트리거, 패널입니다.`},{name:`data-popover · data-popover-close`,type:`attribute`,default:`—`,description:`열기와 닫기 동작입니다.`}]),F(`디자인 토큰`,[{name:`--popover-min-width · --popover-max-width`,type:`length`,default:`10rem · 20rem`,description:`패널 너비입니다.`},{name:`--popover-offset · --z-popover`,type:`length · number`,default:`space-sm · 110`,description:`간격과 레이어입니다.`}])]})))()}function R(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{of:i}),`
`,(0,B.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,B.jsx)(t.p,{children:`트리거 주변에 보조 정보나 짧은 작업 패널을 표시합니다. 패널은 전체 브라우저 DOM에 렌더링되며 트리거 좌표를 유지합니다.`}),`
`,(0,B.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,B.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.basic}),`
`,(0,B.jsx)(t.h2,{id:`라벨-없음`,children:`라벨 없음`}),`
`,(0,B.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.noLabel}),`
`,(0,B.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,B.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.open}),`
`,(0,B.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,B.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.size}),`
`,(0,B.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,B.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.offset}),`
`,(0,B.jsx)(t.h2,{id:`제목`,children:`제목`}),`
`,(0,B.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.title}),`
`,(0,B.jsx)(t.h2,{id:`푸터`,children:`푸터`}),`
`,(0,B.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.footer}),`
`,(0,B.jsx)(t.h2,{id:`호버-트리거`,children:`호버 트리거`}),`
`,(0,B.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.hover}),`
`,(0,B.jsx)(t.h2,{id:`트리거-유형`,children:`트리거 유형`}),`
`,(0,B.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.trigger}),`
`,(0,B.jsx)(t.h2,{id:`배치`,children:`배치`}),`
`,(0,B.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.placement}),`
`,(0,B.jsx)(t.h2,{id:`폼`,children:`폼`}),`
`,(0,B.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.form}),`
`,(0,B.jsx)(t.h2,{id:`화살표-기준`,children:`화살표 기준`}),`
`,(0,B.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.arrowAnchor}),`
`,(0,B.jsx)(t.h2,{id:`화살표-없음`,children:`화살표 없음`}),`
`,(0,B.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.noArrow}),`
`,(0,B.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,B.jsxs)(t.p,{children:[`트리거는 `,(0,B.jsx)(t.code,{children:`aria-haspopup`}),`, `,(0,B.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,B.jsx)(t.code,{children:`aria-controls`}),`를 제공하며 Esc와 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,B.jsx)(T,{sections:I})]})}function z(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,B.jsx)(t,{...e,children:(0,B.jsx)(R,{...e})}):R(e)}var B;function V(){return(V=e((()=>{B=t(),v(),x(),S(),C(),N(),L(),o()})))()}V();export{z as default};