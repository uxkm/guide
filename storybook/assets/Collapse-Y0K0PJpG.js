import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Collapse.stories-_1tsGqbU.js";import{i as f,r as p}from"./react-DSvVgjCn.js";import{c as m,r as h,u as g}from"./blocks-CkHyEh4O.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-D9Q6nkXJ.js";function x(e,t,n={}){return`<div class="collapse_group collapse_${n.variant??`bordered`}${n.size&&n.size!==`md`?` collapse_${n.size}`:``}" data-component="Collapse" data-collapse${`${n.accordion?` data-collapse-accordion`:``}${n.effect?` data-effect="${n.effect}"`:``}`}>
${t.map((t,n)=>{let r=`collapse-${e}-${n+1}`;return`  <div class="collapse_panel${t.open?` is-open`:``}${t.disabled?` is-disabled`:``}">
    <div class="collapse_header">
      <button type="button" class="btn btn_text collapse_trigger" id="${r}-trigger" aria-expanded="${t.open?`true`:`false`}" aria-controls="${r}-body"${t.disabled?` disabled`:``}>
        <span class="collapse_label">${t.label}</span>${t.extra?`\n        <span class="collapse_extra">${t.extra}</span>`:``}
        ${E}
      </button>
    </div>
    <div class="collapse_body" id="${r}-body" role="region" aria-labelledby="${r}-trigger"${t.open?``:` hidden`}>
      <div class="collapse_content"><p>${t.content}</p></div>
    </div>
  </div>`}).join(`
`)}
</div>`}function S(e,t={}){let n=[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.accordion&&`accordion`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `);return`<Collapse${n?` ${n}`:``}>
  ${e.map(e=>`<CollapsePanel label="${e.label}"${e.open?` open`:``}${e.disabled?` disabled`:``} content="${e.content}"${e.extra?` extra="${e.extra}"`:``} />`).join(`
  `)}
</Collapse>`}function C(e,t={}){let n=[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.accordion&&`accordion`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `);return`<Collapse${n?` ${n}`:``}>
  ${e.map(e=>e.extra?`<CollapsePanel label="${e.label}"${e.open?` open`:``} content="${e.content}">\n    <template #extra>${e.extra}</template>\n  </CollapsePanel>`:`<CollapsePanel label="${e.label}"${e.open?` open`:``}${e.disabled?` disabled`:``} content="${e.content}" />`).join(`
  `)}
</Collapse>`}function w(e){let t=`import { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/react/collapse';\n\nexport function Example() {\n  return (<>\n    ${A[e]}\n  </>);\n}`,n=`<script setup>\nimport { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/vue/collapse';\n<\/script>\n\n<template>\n  ${j[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Collapse.html · ${e}`,code:k[e]},{id:`gulp`,label:`Gulp`,fileName:`collapse.njk · ${e}`,code:k[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/collapse · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/collapse · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/collapse · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/collapse · ${e}`,code:t}]}var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{T=[`standalone`,`basic`,`accordion`,`skin`,`extra`,`disabled`,`size`,`slide`],E=`<svg class="collapse_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>`,D=[{label:`배송 정보`,open:!0,content:`평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`},{label:`결제 수단`,content:`신용카드, 계좌이체, 간편결제를 지원합니다.`},{label:`교환·반품 안내`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`}],O=[{label:`알림 설정`,open:!0,content:`이메일·푸시·SMS 알림 수신 여부를 설정합니다.`},{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}],k={standalone:`<p>주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>
<button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger aria-expanded="false" aria-controls="collapse-order">
  <span class="btn_label">주문 상세 보기</span>
</button>
<div class="collapse" id="collapse-order" hidden style="margin-top: var(--space-sm)">
  <div class="collapse_inner"><p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p></div>
</div>`,basic:x(`basic`,D),accordion:x(`accordion`,O,{accordion:!0}),skin:`${x(`ghost`,[{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n\n${x(`card`,[{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:x(`extra`,[{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:x(`disabled`,[{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${x(`small`,[{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n\n${x(`large`,[{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:x(`slide`,D.slice(0,2),{effect:`slide`})},A={standalone:`<CollapseExternal triggerLabel="주문 상세 보기" lead={<p>주문이 접수되었습니다.</p>}>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,basic:S(D),accordion:S(O,{accordion:!0}),skin:`${S([{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n${S([{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:S([{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:S([{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${S([{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n${S([{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:`${S(D.slice(0,2),{effect:`slide`})}\n<CollapseExternal triggerLabel="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`},j={standalone:`<CollapseExternal trigger-label="주문 상세 보기">
  <template #lead><p>주문이 접수되었습니다.</p></template>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,basic:C(D),accordion:C(O,{accordion:!0}),skin:`${C([{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n${C([{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:C([{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:C([{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${C([{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n${C([{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:`${C(D.slice(0,2),{effect:`slide`})}\n<CollapseExternal trigger-label="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`},M=Object.fromEntries(T.map(e=>[e,w(e)]))})))()}var P,F,I;function L(){return(L=e((()=>{P=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],F=(e,t)=>({title:e,tables:[{columns:P,rows:t}]}),I=[F(`Collapse API`,[{name:`variant`,type:`'bordered' | 'ghost' | 'card'`,default:`'bordered'`,description:`패널 그룹의 외형을 선택합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트리거와 본문 여백 크기입니다.`},{name:`accordion`,type:`boolean`,default:`false`,description:`한 번에 하나의 패널만 열 수 있습니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),F(`CollapsePanel API`,[{name:`label`,type:`string`,default:`''`,description:`기본 트리거 제목입니다.`},{name:`title · #title`,type:`ReactNode · slot`,default:`label`,description:`아이콘·배지 등 커스텀 제목 콘텐츠입니다.`},{name:`content · children · default slot`,type:`string · node`,default:`—`,description:`패널 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`패널을 비활성화하고 키보드 탐색에서 제외합니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`제목 오른쪽의 보조 정보입니다.`}]),F(`CollapseExternal API`,[{name:`triggerLabel`,type:`string`,default:`''`,description:`외부 트리거 버튼 텍스트입니다.`},{name:`lead · #lead`,type:`ReactNode · slot`,default:`—`,description:`트리거 위 안내 콘텐츠입니다.`},{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`접히는 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`boxed`,type:`boolean`,default:`true`,description:`본문에 패딩·테두리·배경을 적용합니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),F(`HTML 속성 · 키보드`,[{name:`data-collapse`,type:`attribute`,default:`—`,description:`HTML/Gulp 패널 그룹을 초기화합니다.`},{name:`data-collapse-trigger`,type:`attribute`,default:`—`,description:`aria-controls 대상인 독립 접힘 영역을 제어합니다.`},{name:`data-collapse-accordion`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 단일 열기 모드를 사용합니다.`},{name:`ArrowUp · ArrowDown · Home · End`,type:`key`,default:`—`,description:`활성 패널 트리거 사이에서 포커스를 이동합니다.`},{name:`aria-expanded · aria-controls`,type:`attribute`,default:`—`,description:`트리거 상태와 연결 패널을 제공합니다.`}]),F(`디자인 토큰`,[{name:`--collapse-trigger-padding-y · --collapse-trigger-padding-x`,type:`length`,default:`0.875rem · space-lg`,description:`트리거 여백입니다.`},{name:`--collapse-content-padding-y · --collapse-content-padding-x`,type:`length`,default:`space-lg`,description:`패널 본문 여백입니다.`},{name:`--collapse-icon-size`,type:`length`,default:`1rem`,description:`펼침 아이콘 크기입니다.`},{name:`--collapse-slide-duration · --collapse-slide-easing`,type:`time · easing`,default:`0.28s · ease`,description:`슬라이드 전환 설정입니다.`}])]})))()}function R(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...f(),...e.components};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(m,{of:c}),`
`,(0,B.jsx)(t.h1,{id:`collapse`,children:`Collapse`}),`
`,(0,B.jsx)(t.p,{children:`콘텐츠 영역을 접었다 펼 수 있는 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나 패널 그룹으로 여러 섹션을 구성할 수 있습니다.`}),`
`,(0,B.jsx)(t.h2,{id:`외부-트리거`,children:`외부 트리거`}),`
`,(0,B.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.standalone}),`
`,(0,B.jsx)(t.h2,{id:`패널-그룹`,children:`패널 그룹`}),`
`,(0,B.jsx)(h,{of:o,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.basic}),`
`,(0,B.jsx)(t.h2,{id:`단일-열기`,children:`단일 열기`}),`
`,(0,B.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.accordion}),`
`,(0,B.jsx)(t.h2,{id:`스킨`,children:`스킨`}),`
`,(0,B.jsx)(h,{of:l,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.skin}),`
`,(0,B.jsx)(t.h2,{id:`보조-정보`,children:`보조 정보`}),`
`,(0,B.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.extra}),`
`,(0,B.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,B.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.disabled}),`
`,(0,B.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,B.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.size}),`
`,(0,B.jsx)(t.h2,{id:`슬라이드`,children:`슬라이드`}),`
`,(0,B.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,B.jsx)(y,{examples:M.slide}),`
`,(0,B.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,B.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,B.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,B.jsx)(t.code,{children:`aria-controls`}),`, `,(0,B.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 패널 그룹에서는 `,(0,B.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,B.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,B.jsx)(t.code,{children:`Home`}),`, `,(0,B.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동합니다.`]}),`
`,(0,B.jsx)(b,{sections:I})]})}function z(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,B.jsx)(t,{...e,children:(0,B.jsx)(R,{...e})}):R(e)}var B;function V(){return(V=e((()=>{B=t(),p(),g(),_(),v(),N(),L(),d()})))()}V();export{z as default};