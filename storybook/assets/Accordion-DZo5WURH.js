import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Accordion.stories-CBOuRpnZ.js";import{i as p,r as m}from"./react-DSvVgjCn.js";import{c as h,r as g,u as _}from"./blocks-CkHyEh4O.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-D9Q6nkXJ.js";function S(e,t,n={}){return`<div class="accordion accordion_${n.variant||`bordered`}${n.size&&n.size!==`md`?` accordion_${n.size}`:``}" data-component="Accordion" data-accordion${`${n.multiple?` data-accordion-multiple`:``}${n.effect?` data-effect="${n.effect}"`:``}`}>
${t.map((t,n)=>{let r=`accordion-${e}-trigger-${n+1}`,i=`accordion-${e}-panel-${n+1}`;return`<div class="accordion_item${t.open?` is-open`:``}${t.disabled?` is-disabled`:``}">
  <div class="accordion_heading" role="heading" aria-level="3">
    <button type="button" class="btn btn_text accordion_trigger" id="${r}" aria-expanded="${!!t.open}" aria-controls="${i}"${t.disabled?` disabled`:``}>
      <span class="accordion_label">${t.label}</span>
      ${t.extra?`<span class="accordion_extra">${t.extra}</span>\n      `:``}<svg class="accordion_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
    </button>
  </div>
  <div class="accordion_panel" id="${i}" role="region" aria-labelledby="${r}"${t.open?``:` hidden`}>
    <div class="accordion_content"><p>${t.content}</p></div>
  </div>
</div>`}).join(`
`)}
</div>`}function C(e){let t=[`label="${e.label}"`,e.open&&`open`,e.disabled&&`disabled`,`content="${e.content}"`];if(e.extra){let n=e.extra.startsWith(`<span`)?`extra={<span className="badge badge_count color_danger badge_sm">3</span>}`:`extra="${e.extra}"`;t.push(n)}return`<AccordionItem ${t.filter(Boolean).join(` `)} />`}function w(e,t={}){return`<Accordion ${[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.multiple&&`multiple`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `)}>\n  ${e.map(C).join(`
  `)}\n</Accordion>`}function T(e){let t=[`label="${e.label}"`,e.open&&`open`,e.disabled&&`disabled`,`content="${e.content}"`].filter(Boolean).join(` `);return e.extra?`<AccordionItem ${t}>\n  <template #extra>${e.extra.startsWith(`<span`)?`<span class="badge badge_count color_danger badge_sm">3</span>`:e.extra}</template>\n</AccordionItem>`:`<AccordionItem ${t} />`}function E(e,t={}){return`<Accordion ${[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.multiple&&`multiple`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `)}>\n  ${e.map(T).join(`
  `)}\n</Accordion>`}function D(e){let t=`import { Accordion, AccordionItem } from '@uxkm/react/accordion';\n\nexport function Example() {\n  return (\n    <>\n      ${j[e]}\n    </>\n  );\n}`,n=`<script setup>\nimport { Accordion, AccordionItem } from '@uxkm/vue/accordion';\n<\/script>\n\n<template>\n  ${M[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Accordion.html · ${e}`,code:A[e]},{id:`gulp`,label:`Gulp`,fileName:`accordion.njk · ${e}`,code:e===`custom`?N:A[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/accordion · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/accordion · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/accordion · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/accordion · ${e}`,code:t}]}var O,k,A,j,M,N,P;function F(){return(F=e((()=>{O=[`basic`,`multiple`,`flush`,`bordered`,`extra`,`custom`,`disabled`,`size`,`slide`],k={basic:{options:{variant:`card`},items:[{label:`배송은 얼마나 걸리나요?`,content:`평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.`},{label:`교환·반품은 어떻게 하나요?`,open:!0,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.`},{label:`해외 배송이 가능한가요?`,content:`현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.`}]},multiple:{options:{multiple:!0},items:[{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`},{label:`개인정보`,open:!0,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}]},flush:{options:{variant:`flush`},items:[{label:`일반`,open:!0,content:`언어, 시간대, 테마 등 기본 환경 설정입니다.`},{label:`접근성`,content:`고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.`},{label:`고급`,content:`개발자 도구와 실험 기능을 켜거나 끕니다.`}]},bordered:{options:{variant:`bordered`},items:[{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`},{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}]},extra:{items:[{label:`미해결 문의`,open:!0,content:`답변이 필요한 고객 문의 3건이 있습니다.`,extra:`<span class="badge badge_count color_danger badge_sm">3</span>`},{label:`처리 완료`,content:`최근 일주일간 완료된 문의 12건입니다.`,extra:`지난 7일`}]},disabled:{items:[{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]},slide:{options:{variant:`card`,effect:`slide`},items:[{label:`배송 안내`,open:!0,content:`평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.`},{label:`교환·반품`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`},{label:`고객센터`,content:`1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.`}]}},A={},j={},M={},O.forEach(e=>{if(e===`custom`){A.custom=`<div class="accordion accordion_card" data-component="Accordion" data-accordion>
  <div class="accordion_item is-open">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button type="button" class="btn btn_text accordion_trigger" id="accordion-custom-trigger-1" aria-expanded="true" aria-controls="accordion-custom-panel-1">
        <span class="accordion_label"><strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span></span>
        <svg class="accordion_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    </div>
    <div class="accordion_panel" id="accordion-custom-panel-1" role="region" aria-labelledby="accordion-custom-trigger-1">
      <div class="accordion_content"><div><p>제목과 본문에 원하는 마크업을 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div></div>
    </div>
  </div>
</div>`,j.custom=`<Accordion variant="card">
  <AccordionItem title={<><strong>프로 요금제</strong> <span className="tag tag_outline color_primary tag_sm">추천</span></>} open>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`,M.custom=`<Accordion variant="card">
  <AccordionItem open>
    <template #title><strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span></template>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`;return}if(e===`size`){let e=[{label:`Small`,open:!0,content:`작은 아코디언 — 좁은 패딩.`}],t=[{label:`Large`,open:!0,content:`큰 아코디언 — 넓은 패딩과 큰 글자.`}];A.size=`${S(`size-sm`,e,{size:`sm`})}\n\n${S(`size-lg`,t,{size:`lg`})}`,j.size=`${w(e,{size:`sm`})}\n${w(t,{size:`lg`})}`,M.size=`${E(e,{size:`sm`})}\n${E(t,{size:`lg`})}`;return}let{items:t,options:n}=k[e];A[e]=S(e,t,n),j[e]=w(t,n),M[e]=E(t,n)}),N=`{% set items = [{
  title: '<strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span>',
  content: '<div><p>제목과 본문에 원하는 마크업을 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>',
  open: true
}] %}
{% set variant = 'card' %}
{% include 'components/miscellaneous/Accordion/accordion.njk' %}`,P=Object.fromEntries(O.map(e=>[e,D(e)]))})))()}var I,L,R;function z(){return(z=e((()=>{I=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],L=(e,t)=>({title:e,tables:[{columns:I,rows:t}]}),R=[L(`Accordion API`,[{name:`variant`,type:`'bordered' | 'flush' | 'card'`,default:`'bordered'`,description:`항목의 외형을 선택합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트리거와 본문 여백 크기입니다.`},{name:`multiple`,type:`boolean`,default:`false`,description:`여러 패널을 동시에 열 수 있습니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),L(`AccordionItem API`,[{name:`label`,type:`string`,default:`''`,description:`기본 트리거 제목입니다.`},{name:`title · #title`,type:`ReactNode · slot`,default:`label`,description:`아이콘·배지 등 커스텀 제목 콘텐츠입니다.`},{name:`content · children · default slot`,type:`string · node`,default:`—`,description:`패널 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`항목을 비활성화하고 키보드 탐색에서 제외합니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`제목 오른쪽의 배지 또는 보조 정보입니다.`},{name:`headingLevel`,type:`number`,default:`3`,description:`헤딩의 aria-level입니다.`}]),L(`HTML 속성 · 키보드`,[{name:`data-accordion-multiple`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 다중 열기 모드를 사용합니다.`},{name:`data-effect="slide"`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 슬라이드 효과를 사용합니다.`},{name:`ArrowUp · ArrowDown`,type:`key`,default:`—`,description:`이전·다음 활성 트리거로 포커스를 이동합니다.`},{name:`Home · End`,type:`key`,default:`—`,description:`첫 번째·마지막 활성 트리거로 이동합니다.`},{name:`aria-expanded · aria-controls`,type:`attribute`,default:`—`,description:`트리거 상태와 연결 패널을 제공합니다.`}]),L(`디자인 토큰`,[{name:`--accordion-trigger-padding-y · --accordion-trigger-padding-x`,type:`length`,default:`0.875rem · space-lg`,description:`트리거 여백입니다.`},{name:`--accordion-content-padding-y · --accordion-content-padding-x`,type:`length`,default:`space-lg`,description:`패널 본문 여백입니다.`},{name:`--accordion-icon-size`,type:`length`,default:`1rem`,description:`펼침 아이콘 크기입니다.`},{name:`--accordion-slide-duration · --accordion-slide-easing`,type:`time · easing`,default:`0.28s · ease`,description:`슬라이드 전환 설정입니다.`}])]})))()}function B(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...p(),...e.components};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(h,{of:d}),`
`,(0,H.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,H.jsx)(t.p,{children:`여러 섹션을 접었다 펼 수 있는 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며 단일 또는 다중 열기와 키보드 탐색을 지원합니다.`}),`
`,(0,H.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,H.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.basic}),`
`,(0,H.jsx)(t.h2,{id:`다중-열기`,children:`다중 열기`}),`
`,(0,H.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.multiple}),`
`,(0,H.jsx)(t.h2,{id:`플러시`,children:`플러시`}),`
`,(0,H.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.flush}),`
`,(0,H.jsx)(t.h2,{id:`보더`,children:`보더`}),`
`,(0,H.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.bordered}),`
`,(0,H.jsx)(t.h2,{id:`보조-정보`,children:`보조 정보`}),`
`,(0,H.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.extra}),`
`,(0,H.jsx)(t.h2,{id:`슬롯-커스텀`,children:`슬롯 커스텀`}),`
`,(0,H.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.custom}),`
`,(0,H.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,H.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.disabled}),`
`,(0,H.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,H.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.size}),`
`,(0,H.jsx)(t.h2,{id:`슬라이드`,children:`슬라이드`}),`
`,(0,H.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,H.jsx)(b,{examples:P.slide}),`
`,(0,H.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,H.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,H.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,H.jsx)(t.code,{children:`aria-controls`}),`, `,(0,H.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. `,(0,H.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,H.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,H.jsx)(t.code,{children:`Home`}),`, `,(0,H.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동하며 비활성 항목은 건너뜁니다.`]}),`
`,(0,H.jsx)(x,{sections:R})]})}function V(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,H.jsx)(t,{...e,children:(0,H.jsx)(B,{...e})}):B(e)}var H;function U(){return(U=e((()=>{H=t(),m(),_(),v(),y(),F(),z(),i()})))()}U();export{V as default};