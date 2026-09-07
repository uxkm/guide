import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t,n={}){return`<div class="accordion accordion_${n.variant||`bordered`}${n.size&&n.size!==`md`?` accordion_${n.size}`:``}" data-component="Accordion" data-accordion${`${n.multiple?` data-accordion-multiple`:``}${n.effect?` data-effect="${n.effect}"`:``}`}>
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
</div>`}function n(e){let t=[`label="${e.label}"`,e.open&&`open`,e.disabled&&`disabled`,`content="${e.content}"`];if(e.extra){let n=e.extra.startsWith(`<span`)?`extra={<span className="badge badge_count color_danger badge_sm">3</span>}`:`extra="${e.extra}"`;t.push(n)}return`<AccordionItem ${t.filter(Boolean).join(` `)} />`}function r(e,t={}){return`<Accordion ${[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.multiple&&`multiple`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `)}>\n  ${e.map(n).join(`
  `)}\n</Accordion>`}function i(e){let t=[`label="${e.label}"`,e.open&&`open`,e.disabled&&`disabled`,`content="${e.content}"`].filter(Boolean).join(` `);return e.extra?`<AccordionItem ${t}>\n  <template #extra>${e.extra.startsWith(`<span`)?`<span class="badge badge_count color_danger badge_sm">3</span>`:e.extra}</template>\n</AccordionItem>`:`<AccordionItem ${t} />`}function a(e,t={}){return`<Accordion ${[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.multiple&&`multiple`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `)}>\n  ${e.map(i).join(`
  `)}\n</Accordion>`}function o(e,t,n={}){let r=t.some(e=>e.extra?.startsWith(`<span`)),i=r?`
{% from "components/data-display/Badge/badge.njk" import badge %}`:``,a=r?`

{% set inquiryBadge %}{{ badge(count=true, color='danger', size='sm', label='3') }}{% endset %}`:``,o=[`id='accordion-${e}'`,n.variant&&`variant='${n.variant}'`,n.size&&`size='${n.size}'`,n.multiple&&`multiple=true`,n.effect&&`effect='${n.effect}'`].filter(Boolean).join(`, `),s=t.map((t,n)=>`  {% call accordionItem(id='accordion-${e}-${n+1}', label='${t.label}'${t.open?`, open=true`:``}${t.disabled?`, disabled=true`:``}${t.extra?`, extra=${t.extra.startsWith(`<span`)?`inquiryBadge`:`'${t.extra}'`}`:``}) %}<p>${t.content}</p>{% endcall %}`).join(`
`);return`${p}${i}${a}

{% call accordion(${o}) %}
${s}
{% endcall %}`}function s(e){let t=`import { Accordion, AccordionItem } from '@uxkm/react/accordion';\n\nexport function Example() {\n  return (\n    <>\n      ${d[e]}\n    </>\n  );\n}`,n=`<script setup>\nimport { Accordion, AccordionItem } from '@uxkm/vue/accordion';\n<\/script>\n\n<template>\n  ${f[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Accordion.html · ${e}`,code:u[e]},{id:`gulp`,label:`Gulp`,fileName:`accordion.njk · ${e}`,code:m[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/accordion · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/accordion · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/accordion · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/accordion · ${e}`,code:t}]}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{c=[`basic`,`multiple`,`flush`,`bordered`,`extra`,`custom`,`disabled`,`size`,`slide`],l={basic:{options:{variant:`card`},items:[{label:`배송은 얼마나 걸리나요?`,content:`평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.`},{label:`교환·반품은 어떻게 하나요?`,open:!0,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.`},{label:`해외 배송이 가능한가요?`,content:`현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.`}]},multiple:{options:{multiple:!0},items:[{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`},{label:`개인정보`,open:!0,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}]},flush:{options:{variant:`flush`},items:[{label:`일반`,open:!0,content:`언어, 시간대, 테마 등 기본 환경 설정입니다.`},{label:`접근성`,content:`고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.`},{label:`고급`,content:`개발자 도구와 실험 기능을 켜거나 끕니다.`}]},bordered:{options:{variant:`bordered`},items:[{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`},{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}]},extra:{items:[{label:`미해결 문의`,open:!0,content:`답변이 필요한 고객 문의 3건이 있습니다.`,extra:`<span class="badge badge_count color_danger badge_sm">3</span>`},{label:`처리 완료`,content:`최근 일주일간 완료된 문의 12건입니다.`,extra:`지난 7일`}]},disabled:{items:[{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]},slide:{options:{variant:`card`,effect:`slide`},items:[{label:`배송 안내`,open:!0,content:`평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.`},{label:`교환·반품`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`},{label:`고객센터`,content:`1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.`}]}},u={},d={},f={},c.forEach(e=>{if(e===`custom`){u.custom=`<div class="accordion accordion_card" data-component="Accordion" data-accordion>
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
</div>`,d.custom=`<Accordion variant="card">
  <AccordionItem title={<><strong>프로 요금제</strong> <span className="tag tag_outline color_primary tag_sm">추천</span></>} open>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`,f.custom=`<Accordion variant="card">
  <AccordionItem open>
    <template #title><strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span></template>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`;return}if(e===`size`){let e=[{label:`Small`,open:!0,content:`작은 아코디언 — 좁은 패딩.`}],n=[{label:`Large`,open:!0,content:`큰 아코디언 — 넓은 패딩과 큰 글자.`}];u.size=`${t(`size-sm`,e,{size:`sm`})}\n\n${t(`size-lg`,n,{size:`lg`})}`,d.size=`${r(e,{size:`sm`})}\n${r(n,{size:`lg`})}`,f.size=`${a(e,{size:`sm`})}\n${a(n,{size:`lg`})}`;return}let{items:n,options:i}=l[e];u[e]=t(e,n,i),d[e]=r(n,i),f[e]=a(n,i)}),p=`{% from "components/miscellaneous/Accordion/accordion.njk" import accordion, accordionItem %}`,m={},c.forEach(e=>{if(e===`custom`){m.custom=`${p}
{% from "components/data-display/Tag/tag.njk" import tag %}

{% set customTitle %}<strong>프로 요금제</strong> {{ tag(variant='outline', color='primary', size='sm', label='추천') }}{% endset %}
{% call accordion(id='accordion-custom', variant='card') %}
  {% call accordionItem(id='accordion-custom-1', title=customTitle, open=true) %}
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  {% endcall %}
{% endcall %}`;return}if(e===`size`){m.size=o(`size-sm`,[{label:`Small`,open:!0,content:`작은 아코디언 — 좁은 패딩.`}],{size:`sm`})+`

`+o(`size-lg`,[{label:`Large`,open:!0,content:`큰 아코디언 — 넓은 패딩과 큰 글자.`}],{size:`lg`});return}let{items:t,options:n}=l[e];m[e]=o(e,t,n)}),h=Object.fromEntries(c.map(e=>[e,s(e)]))})))()}function _(e,t,n={}){return`<div class="collapse_group collapse_${n.variant??`bordered`}${n.size&&n.size!==`md`?` collapse_${n.size}`:``}" data-component="Collapse" data-collapse${`${n.accordion?` data-collapse-accordion`:``}${n.effect?` data-effect="${n.effect}"`:``}`}>
${t.map((t,n)=>{let r=`collapse-${e}-${n+1}`;return`  <div class="collapse_panel${t.open?` is-open`:``}${t.disabled?` is-disabled`:``}">
    <div class="collapse_header">
      <button type="button" class="btn btn_text collapse_trigger" id="${r}-trigger" aria-expanded="${t.open?`true`:`false`}" aria-controls="${r}-body"${t.disabled?` disabled`:``}>
        <span class="collapse_label">${t.label}</span>${t.extra?`\n        <span class="collapse_extra">${t.extra}</span>`:``}
        ${ne}
      </button>
    </div>
    <div class="collapse_body" id="${r}-body" role="region" aria-labelledby="${r}-trigger"${t.open?``:` hidden`}>
      <div class="collapse_content"><p>${t.content}</p></div>
    </div>
  </div>`}).join(`
`)}
</div>`}function v(e,t={}){let n=[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.accordion&&`accordion`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `);return`<Collapse${n?` ${n}`:``}>
  ${e.map(e=>`<CollapsePanel label="${e.label}"${e.open?` open`:``}${e.disabled?` disabled`:``} content="${e.content}"${e.extra?` extra="${e.extra}"`:``} />`).join(`
  `)}
</Collapse>`}function y(e,t={}){let n=[t.variant&&`variant="${t.variant}"`,t.size&&`size="${t.size}"`,t.accordion&&`accordion`,t.effect&&`effect="${t.effect}"`].filter(Boolean).join(` `);return`<Collapse${n?` ${n}`:``}>
  ${e.map(e=>e.extra?`<CollapsePanel label="${e.label}"${e.open?` open`:``} content="${e.content}">\n    <template #extra>${e.extra}</template>\n  </CollapsePanel>`:`<CollapsePanel label="${e.label}"${e.open?` open`:``}${e.disabled?` disabled`:``} content="${e.content}" />`).join(`
  `)}
</Collapse>`}function b(e,t,n={}){let r=[`id='collapse-${e}'`,n.variant&&`variant='${n.variant}'`,n.size&&`size='${n.size}'`,n.accordion&&`accordion=true`,n.effect&&`effect='${n.effect}'`].filter(Boolean).join(`, `),i=t.map((t,n)=>`  {% call collapsePanel(id='collapse-${e}-${n+1}', label='${t.label}'${t.open?`, open=true`:``}${t.disabled?`, disabled=true`:``}${t.extra?`, extra='${t.extra}'`:``}) %}<p>${t.content}</p>{% endcall %}`).join(`
`);return`${w}

{% call collapse(${r}) %}
${i}
{% endcall %}`}function ee(e){let t=`import { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/react/collapse';\n\nexport function Example() {\n  return (<>\n    ${E[e]}\n  </>);\n}`,n=`<script setup>\nimport { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/vue/collapse';\n<\/script>\n\n<template>\n  ${D[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Collapse.html · ${e}`,code:C[e]},{id:`gulp`,label:`Gulp`,fileName:`collapse.njk · ${e}`,code:T[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/collapse · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/collapse · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/collapse · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/collapse · ${e}`,code:t}]}var te,ne,x,S,C,w,T,E,D,re;function ie(){return(ie=e((()=>{te=[`standalone`,`basic`,`accordion`,`skin`,`extra`,`disabled`,`size`,`slide`],ne=`<svg class="collapse_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>`,x=[{label:`배송 정보`,open:!0,content:`평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`},{label:`결제 수단`,content:`신용카드, 계좌이체, 간편결제를 지원합니다.`},{label:`교환·반품 안내`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`}],S=[{label:`알림 설정`,open:!0,content:`이메일·푸시·SMS 알림 수신 여부를 설정합니다.`},{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`},{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`}],C={standalone:`<p>주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>
<button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger aria-expanded="false" aria-controls="collapse-order">
  <span class="btn_label">주문 상세 보기</span>
</button>
<div class="collapse" id="collapse-order" hidden style="margin-top: var(--space-sm)">
  <div class="collapse_inner"><p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p></div>
</div>`,basic:_(`basic`,x),accordion:_(`accordion`,S,{accordion:!0}),skin:`${_(`ghost`,[{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n\n${_(`card`,[{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:_(`extra`,[{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:_(`disabled`,[{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${_(`small`,[{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n\n${_(`large`,[{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:_(`slide`,x.slice(0,2),{effect:`slide`})},w=`{% from "components/miscellaneous/Collapse/collapse.njk" import collapse, collapsePanel, collapseExternal %}`,T={standalone:`${w}

{% call collapseExternal(id='collapse-order', triggerLabel='주문 상세 보기', lead='<p>주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>') %}
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
{% endcall %}`,basic:b(`basic`,x),accordion:b(`accordion`,S,{accordion:!0}),skin:b(`ghost`,[{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})+`

`+b(`card`,[{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`}),extra:b(`extra`,[{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:b(`disabled`,[{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:b(`small`,[{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})+`

`+b(`large`,[{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`}),slide:b(`slide`,x.slice(0,2),{effect:`slide`})+`\n\n${w}

{% call collapseExternal(id='collapse-slide-external', triggerLabel='상세 보기', effect='slide') %}
  <p>외부 영역도 슬라이드됩니다.</p>
{% endcall %}`},E={standalone:`<CollapseExternal triggerLabel="주문 상세 보기" lead={<p>주문이 접수되었습니다.</p>}>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,basic:v(x),accordion:v(S,{accordion:!0}),skin:`${v([{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n${v([{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:v([{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:v([{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${v([{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n${v([{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:`${v(x.slice(0,2),{effect:`slide`})}\n<CollapseExternal triggerLabel="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`},D={standalone:`<CollapseExternal trigger-label="주문 상세 보기">
  <template #lead><p>주문이 접수되었습니다.</p></template>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,basic:y(x),accordion:y(S,{accordion:!0}),skin:`${y([{label:`Ghost`,open:!0,content:`배경만 강조하는 고스트 스킨입니다.`}],{variant:`ghost`})}\n${y([{label:`Card`,open:!0,content:`패널마다 카드 형태로 분리됩니다.`},{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`}],{variant:`card`})}`,extra:y([{label:`진행 중`,open:!0,content:`현재 처리 중인 요청 3건입니다.`,extra:`3건`},{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,extra:`지난 7일`}]),disabled:y([{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`},{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`}]),size:`${y([{label:`Small`,open:!0,content:`작은 콜랩스 — 좁은 패딩.`}],{size:`sm`})}\n${y([{label:`Large`,open:!0,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`}],{size:`lg`})}`,slide:`${y(x.slice(0,2),{effect:`slide`})}\n<CollapseExternal trigger-label="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`},re=Object.fromEntries(te.map(e=>[e,ee(e)]))})))()}function ae(e){return[e.effect&&`data-swiper-effect="${e.effect}"`,e.coverflowStyle&&`data-swiper-coverflow-style="${e.coverflowStyle}"`,e.coverflowSides&&`data-swiper-coverflow-sides="${e.coverflowSides}"`,e.autoplay&&`data-swiper-autoplay`,e.delay&&`data-swiper-delay="${e.delay}"`,e.loop&&`data-swiper-loop`,e.initialSlide&&`data-swiper-initial-slide="${e.initialSlide}"`,e.centered&&`data-swiper-centered`,e.slidesPerView&&`data-swiper-slides-per-view="${e.slidesPerView}"`,e.slidesPerGroup&&`data-swiper-slides-per-group="${e.slidesPerGroup}"`,e.spaceBetween&&`data-swiper-space-between="${e.spaceBetween}"`,typeof e.pagination==`string`&&`data-swiper-pagination="${e.pagination}"`,e.gridRows&&`data-swiper-grid-rows="${e.gridRows}"`].filter(Boolean).join(` `)}function oe(e){return[`carousel`,e.multi&&`carousel_multi`,e.effect===`coverflow`&&`carousel_coverflow`,e.coverflowStyle===`rise`&&`carousel_coverflow-rise`,Number(e.gridRows)>1&&`carousel_grid`,e.pagination===`custom`&&`carousel_pagination-custom`,e.pagination===`progressbar`&&`carousel_pagination-progress`].filter(Boolean).join(` `)}function O(e,t,n=``,r=``,i=`<div class="swiper-wrapper" data-carousel-slides></div>`){return`<div id="${t}" class="${oe(e)}${r}" data-component="Carousel">
  <div class="swiper" data-swiper ${ae(e)}${n?` ${n}`:``} role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드">
    ${i}
    ${e.navigation===!1?``:`<div class="swiper-button-prev" aria-label="이전 슬라이드" data-ripple="surface"></div>
    <div class="swiper-button-next" aria-label="다음 슬라이드" data-ripple="surface"></div>`}
    ${e.pagination===!1?``:`<div class="swiper-pagination"></div>`}
  </div>
</div>`}function se(e,t){if(e==="default")return O(M.default,`carousel-default`,``,``,I);let n=e===`thumbs`?`<div id="carousel-gallery" class="carousel_gallery">
  ${O({pagination:!1},`carousel-main`,`data-swiper-thumbs="#carousel-thumbs-swiper"`)}
  ${O({slidesPerView:4,spaceBetween:8,pagination:!1,navigation:!1},`carousel-thumbs`,`id="carousel-thumbs-swiper" data-swiper-watch-slides-progress`,` carousel_thumbs`)}
</div>`:t.map((t,n)=>O(t,`carousel-${e}-${n+1}`)).join(`

`),r=e===`thumbs`?`['#carousel-main', '#carousel-thumbs']`:`[${t.map((t,n)=>`'#carousel-${e}-${n+1}'`).join(`, `)}]`;return`${n}

${e===`fade`?`<script type="application/json" id="carousel-slides-data">
${P}
<\/script>`:``}

<script type="module">
import { initCarousel } from './carousel.js';
${e===`fade`?`const carouselSlides = JSON.parse(document.querySelector('#carousel-slides-data').textContent);`:`import { carouselSlides } from './data/carousel-slides.js';`}

for (const selector of ${r}) {
  const carousel = document.querySelector(selector);
  const wrapper = carousel.querySelector('[data-carousel-slides]');

  for (const slide of carouselSlides.slice(0, ${N(e)})) {
    wrapper.insertAdjacentHTML('beforeend', \`
      <div class="swiper-slide">
        <article class="card card_accent color_\${slide.color}">
          <div class="card_body">
            <p class="typo_overline">\${slide.overline}</p>
            <h3 class="card_title">\${slide.title}</h3>
            <p class="typo_lead">\${slide.body}</p>
          </div>
        </article>
      </div>
    \`);
  }

}

initCarousel(document);
<\/script>`}function ce(e,t=!1){return Array.from({length:e},(e,n)=>{let r=R[n%R.length];return`  {{ carouselSlide(overline='${r.overline}', title='${r.title}', content='${r.body}', color='${r.color}'${t?`, compact=true`:``}) }}`}).join(`
`)}function k(e,t,n,r=!1,i=`콘텐츠 슬라이드`){let a=Object.entries(e).map(([e,t])=>`${e}=${typeof t==`string`?`'${t}'`:t}`).join(`, `),o=[`id='${t}'`,`ariaLabel='${i}'`,a].filter(Boolean).join(`, `);return`${L}

{% call carousel(${o}) %}
${ce(n,r)}
{% endcall %}`}function le(e,t){return e===`thumbs`?`<div class="carousel_gallery">
  ${k({thumbs:`#carousel-thumbs-swiper`,pagination:!1},`carousel-main`,8,!1,`갤러리 메인`)}

  ${k({slidesPerView:4,spaceBetween:8,pagination:!1,navigation:!1,thumbsControl:!0,watchSlidesProgress:!0},`carousel-thumbs-swiper`,8,!0,`썸네일`)}
</div>`:t.map((t,n)=>k(t,`carousel-${e}-${n+1}`,N(e))).join(`

`)}function ue(e,t,n=!1){if(t===!0)return e.replace(/[A-Z]/g,e=>n?`-${e.toLowerCase()}`:e);if(t===!1)return n?`:${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}="false"`:`${e}={false}`;let r=n?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e;return typeof t==`number`?n?`:${r}="${t}"`:`${r}={${t}}`:`${r}="${t}"`}function A(e,t,n=!1){let r=Object.entries(t).map(([e,t])=>ue(e,t,n)).join(` `);return`<Carousel ${n?`aria-label`:`ariaLabel`}="콘텐츠 슬라이드"${r?` ${r}`:``}>
  ${e==="default"?n?H:V:n?B(N(e)):z(N(e))}
</Carousel>`}function de(e){let t=e===`grid`?[{slidesPerView:3,gridRows:2,spaceBetween:16},{slidesPerView:3,slidesPerGroup:6,gridRows:2,spaceBetween:16}]:e===`coverflowRise`?[1,1.5,2].map(e=>({effect:`coverflow`,coverflowStyle:`rise`,coverflowSides:e,spaceBetween:16,loop:!0,pagination:!1})):[M[e]],n=t.map(t=>A(e,t)).join(`

`),r=t.map(t=>A(e,t,!0)).join(`

`),i=e===`thumbs`?`const [thumbs, setThumbs] = useState(null);
  return <div className="carousel_gallery">
    <Carousel ariaLabel="갤러리 메인" thumbs={thumbs} pagination={false}>${z(8)}</Carousel>
    <Carousel ariaLabel="썸네일" slidesPerView={4} pagination={false} navigation={false} thumbsControl watchSlidesProgress onSwiper={setThumbs}>${z(8,!0)}</Carousel>
  </div>;`:t.length>1?`return <>\n${n}\n</>;`:`return ${n};`,a=e===`thumbs`?`<div class="carousel_gallery">
    <Carousel aria-label="갤러리 메인" :thumbs="thumbs" :pagination="false">${B(8)}</Carousel>
    <Carousel aria-label="썸네일" :slides-per-view="4" :pagination="false" :navigation="false" thumbs-control watch-slides-progress @swiper="thumbs = $event">${B(8,!0)}</Carousel>
  </div>`:r,o=`import { Carousel, CarouselSlide } from '@uxkm/react/carousel';${e===`thumbs`?`
import { useState } from 'react';`:``}${e==="default"||e===`fade`?``:`
import { carouselSlides } from './data/carousel-slides';`}${e===`fade`?`\n\n${F}`:``}

export function Example() {
  ${i}
}`,s=`<script setup>
${e===`thumbs`?`import { ref } from 'vue';
const thumbs = ref(null);
`:``}import { Carousel, CarouselSlide } from '@uxkm/vue/carousel';${e==="default"||e===`fade`?``:`
import { carouselSlides } from './data/carousel-slides';`}${e===`fade`?`\n\n${F}`:``}
<\/script>

<template>
  ${a}
</template>`;return[{id:`html`,label:`HTML`,fileName:`Carousel.html · ${e}`,code:se(e,t)},{id:`gulp`,label:`Gulp`,fileName:`carousel.njk · ${e}`,code:le(e,t)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/carousel · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/carousel · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/carousel · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/carousel · ${e}`,code:o}]}var j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{j=[`default`,`fade`,`autoplay`,`loop`,`multi`,`space`,`pagination`,`fraction`,`progress`,`custom`,`grid`,`coverflow`,`coverflowRise`,`thumbs`],M={default:{},fade:{effect:`fade`},autoplay:{autoplay:!0,delay:4e3,loop:!0,dotsOutside:!0},loop:{loop:!0},multi:{multi:!0,slidesPerView:`auto`,spaceBetween:16,centered:!0,navigation:!1},space:{spaceBetween:12,loop:!0},pagination:{loop:!0,navigation:!1},fraction:{pagination:`fraction`},progress:{pagination:`progressbar`,loop:!0},custom:{pagination:`custom`,loop:!0,navigation:!1},grid:{slidesPerView:3,slidesPerGroup:6,gridRows:2,spaceBetween:16},coverflow:{effect:`coverflow`,coverflowSides:1,spaceBetween:16,loop:!0,pagination:!1},coverflowRise:{effect:`coverflow`,coverflowStyle:`rise`,coverflowSides:2,spaceBetween:12,loop:!0,pagination:!1},thumbs:{}},N=e=>e===`grid`||e.startsWith(`coverflow`)||e===`thumbs`?12:e===`multi`||e===`custom`?4:3,P=`[
  { "id": 1, "overline": "이벤트", "title": "신규 가입 혜택", "body": "첫 주문 20% 할인 쿠폰을 드립니다.", "color": "primary" },
  { "id": 2, "overline": "혜택", "title": "무료 배송", "body": "3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.", "color": "success" },
  { "id": 3, "overline": "세일", "title": "시즌 세일", "body": "베스트셀러 상품을 최대 50% 할인합니다.", "color": "warning" }
]`,F=`const carouselSlides = ${P};`,I=`<div class="swiper-wrapper">
      <div class="swiper-slide"><article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article></div>
    </div>`,L=`{% from "components/miscellaneous/Carousel/carousel.njk" import carousel, carouselSlide %}`,R=[{overline:`이벤트`,title:`신규 가입 혜택`,body:`첫 주문 20% 할인 쿠폰을 드립니다.`,color:`primary`},{overline:`혜택`,title:`무료 배송`,body:`3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.`,color:`success`},{overline:`세일`,title:`시즌 세일`,body:`베스트셀러 상품을 최대 50% 할인합니다.`,color:`warning`}],z=(e,t=!1)=>`{carouselSlides.slice(0, ${e}).map((slide) => (
    <CarouselSlide key={slide.id}>
      <article className={\`card card_accent color_\${slide.color}\`}>
        <div className="card_body">
          <p className="typo_overline">{slide.overline}</p>
          <h3 className="card_title">{slide.title}</h3>
          <p className="${t?`card_subtitle`:`typo_lead`}">{slide.body}</p>
        </div>
      </article>
    </CarouselSlide>
  ))}`,B=(e,t=!1)=>`<CarouselSlide v-for="slide in carouselSlides.slice(0, ${e})" :key="slide.id">
    <article :class="['card', 'card_accent', \`color_\${slide.color}\`]">
      <div class="card_body">
        <p class="typo_overline">{{ slide.overline }}</p>
        <h3 class="card_title">{{ slide.title }}</h3>
        <p class="${t?`card_subtitle`:`typo_lead`}">{{ slide.body }}</p>
      </div>
    </article>
  </CarouselSlide>`,V=`<CarouselSlide>
    <article className="card card_accent color_primary"><div className="card_body"><p className="typo_overline">이벤트</p><h3 className="card_title">신규 가입 혜택</h3><p className="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_success"><div className="card_body"><p className="typo_overline">혜택</p><h3 className="card_title">무료 배송</h3><p className="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_warning"><div className="card_body"><p className="typo_overline">세일</p><h3 className="card_title">시즌 세일</h3><p className="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`,H=`<CarouselSlide>
    <article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`,U=Object.fromEntries(j.map(e=>[e,de(e)]))})))()}function fe(e){let t=K[e];return`<div id="affix-scroll" class="affix_demo-scroll">
  <div class="affix_demo-content">
    <p>스크롤하여 고정 동작을 확인하세요.</p>
    <div class="affix" data-affix${t.target?` data-target="${t.target}"`:``}${t.offsetTop?` data-offset-top="${t.offsetTop}"`:``}${t.offsetBottom===void 0?``:` data-offset-bottom="${t.offsetBottom}"`}>
      <div class="affix_placeholder" aria-hidden="true" hidden></div>
      <div class="affix_target affix_${t.skin}">${q(e)}</div>
    </div>
    <p>긴 콘텐츠가 이어집니다.</p>
  </div>
</div>`}function G(e,t=!1){let n=K[e];return`<Affix ${[n.target&&`target="${n.target}"`,n.offsetTop&&(t?`:offset-top="${n.offsetTop}"`:`offsetTop={${n.offsetTop}}`),n.offsetBottom!==void 0&&(t?`:offset-bottom="${n.offsetBottom}"`:`offsetBottom={${n.offsetBottom}}`),`skin="${n.skin}"`].filter(Boolean).join(` `)}>${q(e)}</Affix>`}function pe(e){let t=K[e],n=[t.target&&`target='${t.target}'`,t.offsetTop!==void 0&&`offsetTop=${t.offsetTop}`,t.offsetBottom!==void 0&&`offsetBottom=${t.offsetBottom}`,`skin='${t.skin}'`].filter(Boolean).join(`, `);return`${he}

<div id="affix-scroll" class="affix_demo-scroll">
  <div class="affix_demo-content">
    <p>스크롤하여 고정 동작을 확인하세요.</p>
    {% call affix(${n}) %}
      ${e===`anchor`?`<nav aria-label="설정 섹션">
      {{ link(href='#profile', label='프로필') }}
      {{ link(href='#security', color='muted', label='보안') }}
    </nav>`:`<span class="affix_bar-label">주문 액션</span>
    <div class="affix_bar-actions">{{ button(size='sm', label='확인') }}</div>`}
    {% endcall %}
    <p>긴 콘텐츠가 이어집니다.</p>
  </div>
</div>`}function me(e){let t=`import { Affix } from '@uxkm/react/affix';\n\nexport function Example() {\n  return ${G(e)};\n}`,n=`<script setup>\nimport { Affix } from '@uxkm/vue/affix';\n<\/script>\n\n<template>\n  ${G(e,!0)}\n</template>`,r=fe(e);return[{id:`html`,label:`HTML`,fileName:`Affix.html · ${e}`,code:r},{id:`gulp`,label:`Gulp`,fileName:`affix.njk · ${e}`,code:pe(e)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/affix · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/affix · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/affix · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/affix · ${e}`,code:t}]}var K,q,he,ge;function _e(){return(_e=e((()=>{K={basic:{target:`#affix-scroll`,skin:`bar`},offset:{target:`#affix-scroll`,offsetTop:12,skin:`bar`},anchor:{target:`#affix-scroll`,skin:`anchor`},bottom:{target:`#affix-scroll`,offsetBottom:0,skin:`bar`},window:{offsetTop:64,skin:`bar`}},q=e=>e===`anchor`?`<nav aria-label="설정 섹션"><a class="link color_primary" href="#profile">프로필</a><a class="link" href="#security">보안</a></nav>`:`<span class="affix_bar-label">주문 액션</span><div class="affix_bar-actions"><button class="btn btn_filled color_primary btn_sm">확인</button></div>`,he=`{% from "components/miscellaneous/Affix/affix.njk" import affix %}
{% from "components/basic/Button/button.njk" import button %}
{% from "components/basic/Link/link.njk" import link %}`,ge=Object.fromEntries(Object.keys(K).map(e=>[e,me(e)]))})))()}function ve(e,t){let n=e.target?.slice(1)||`page-${t}`;return`${e.target?`<div id="${n}" class="back_top_demo-scroll"><div class="back_top_demo-content"><p>긴 스크롤 콘텐츠입니다.</p></div></div>\n`:``}<div class="back_top${e.size&&e.size!==`md`?` back_top_${e.size}`:``}${e.color?` back_top_${e.color}`:``}" data-back-top${e.target?` data-target="${e.target}"`:``}${e.visibilityHeight&&e.visibilityHeight!==400?` data-visibility-height="${e.visibilityHeight}"`:``}><button type="button" class="btn btn_ghost back_top_btn" aria-label="맨 위로" data-ripple="surface">${Se}${e.label?`<span class="back_top_label">${e.label}</span>`:``}</button></div>`}function ye(e,t=!1){let n=[e.target&&`target="${e.target}"`,e.visibilityHeight&&(t?`:visibility-height="${e.visibilityHeight}"`:`visibilityHeight={${e.visibilityHeight}}`),e.size&&`size="${e.size}"`,e.color&&`color="${e.color}"`,e.label&&`label="${e.label}"`].filter(Boolean).join(` `);return`<BackTop${n?` ${n}`:``} />`}function be(e,t){let n=e.target?.slice(1)||`page-${t}`,r=[e.target&&`target='${e.target}'`,e.visibilityHeight!==void 0&&`visibilityHeight=${e.visibilityHeight}`,e.size&&`size='${e.size}'`,e.color&&`color='${e.color}'`,e.label&&`label='${e.label}'`].filter(Boolean).join(`, `);return`${Ce}

${e.target?`<div id="${n}" class="back_top_demo-scroll">
  <div class="back_top_demo-content"><p>긴 스크롤 콘텐츠입니다.</p></div>
</div>
`:``}{{ backTop(${r}) }}`}function xe(e){let t=J[e],n=t.map(ve).join(`

`),r=t.map(e=>ye(e)).join(`
  `),i=t.map(e=>ye(e,!0)).join(`
  `),a=`import { BackTop } from '@uxkm/react/back-top';\n\nexport function Example() {\n  return <>\n  ${r}\n  </>;\n}`,o=`<script setup>\nimport { BackTop } from '@uxkm/vue/back-top';\n<\/script>\n\n<template>\n  ${i}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`BackTop.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`back-top.njk · ${e}`,code:t.map(be).join(`

`)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/back-top · ${e}`,code:o},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/back-top · ${e}`,code:o},{id:`react`,label:`React`,fileName:`@uxkm/react/back-top · ${e}`,code:a},{id:`next`,label:`Next`,fileName:`@uxkm/react/back-top · ${e}`,code:a}]}var J,Se,Ce,we;function Te(){return(Te=e((()=>{J={basic:[{target:`#scroll-area`,visibilityHeight:80}],visibility:[{target:`#scroll-area`,visibilityHeight:200,color:`primary`}],size:[{target:`#scroll-sm`,visibilityHeight:60,size:`sm`},{target:`#scroll-lg`,visibilityHeight:60,size:`lg`,color:`ghost`}],custom:[{target:`#scroll-area`,visibilityHeight:100,color:`primary`,label:`TOP`}],window:[{color:`primary`}]},Se=`<svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 15 6-6 6 6"></path></svg>`,Ce=`{% from "components/miscellaneous/BackTop/back-top.njk" import backTop %}`,we=Object.fromEntries(Object.keys(J).map(e=>[e,xe(e)]))})))()}var Ee;function De(){return(De=e((()=>{Ee=`<!-- Accordion 원본 구현: 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다. -->
<!-- accordion 루트에 스킨 클래스와 data-accordion을 둡니다. -->
<div class="accordion accordion_card" data-component="Accordion" data-accordion>
  <!-- 각 항목은 accordion_item이며 열림 시 is-open을 붙입니다. -->
<div class="accordion_item">
    <!-- 트리거 헤딩과 패널 region을 짝짓습니다. -->
<div class="accordion_heading" role="heading" aria-level="3">
      <button
        type="button"
        class="btn btn_text accordion_trigger"
        id="accordion-basic-1"
        aria-expanded="false"
        aria-controls="accordion-basic-panel-1"
      >
        <span class="accordion_label">배송은 얼마나 걸리나요?</span>
        <svg
          class="accordion_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="accordion_panel"
      id="accordion-basic-panel-1"
      role="region"
      aria-labelledby="accordion-basic-1"
      hidden
    >
      <div class="accordion_content">
        <p>평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
      </div>
    </div>
  </div>
  <div class="accordion_item is-open">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button
        type="button"
        class="btn btn_text accordion_trigger"
        id="accordion-basic-2"
        aria-expanded="true"
        aria-controls="accordion-basic-panel-2"
      >
        <span class="accordion_label">교환·반품은 어떻게 하나요?</span>
        <svg
          class="accordion_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="accordion_panel"
      id="accordion-basic-panel-2"
      role="region"
      aria-labelledby="accordion-basic-2"
    >
      <div class="accordion_content">
        <p>
          수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가
          부과됩니다.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion_item">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button
        type="button"
        class="btn btn_text accordion_trigger"
        id="accordion-basic-3"
        aria-expanded="false"
        aria-controls="accordion-basic-panel-3"
      >
        <span class="accordion_label">해외 배송이 가능한가요?</span>
        <svg
          class="accordion_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="accordion_panel"
      id="accordion-basic-panel-3"
      role="region"
      aria-labelledby="accordion-basic-3"
      hidden
    >
      <div class="accordion_content">
        <p>
          현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.
        </p>
      </div>
    </div>
  </div>
</div>
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`{# Accordion 원본 구현: 아코디언과 개별 항목을 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro accordionItem(id, label='', title='', content='', open=false, disabled=false, extra='', ariaLevel=3, className='') %}
{%- set panelContent = caller() if caller else content -%}
<div class="accordion_item{% if open %} is-open{% endif %}{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className else '' }}">
  <div class="accordion_heading" role="heading" aria-level="{{ ariaLevel }}">
    <button
      type="button"
      class="btn btn_text accordion_trigger"
      id="{{ id }}-trigger"
      aria-expanded="{{ 'true' if open else 'false' }}"
      aria-controls="{{ id }}-panel"
      {% if disabled %}disabled{% endif %}
    >
      <span class="accordion_label">{% if title %}{{ title | safe }}{% else %}{{ label }}{% endif %}</span>
      {% if extra %}<span class="accordion_extra">{{ extra | safe }}</span>{% endif %}
      {{ Icon.icon(name='chevron-down', className='accordion_icon') }}
    </button>
  </div>
  <div
    class="accordion_panel"
    id="{{ id }}-panel"
    role="region"
    aria-labelledby="{{ id }}-trigger"
    {% if not open %}hidden{% endif %}
  >
    <div class="accordion_content">{{ panelContent | safe }}</div>
  </div>
</div>
{% endmacro %}

{% macro accordion(items=[], id='accordion', variant='bordered', size='md', multiple=false, effect='', ariaLevel=3, className='') %}
{%- set content = caller() if caller else '' -%}
{%- set resolvedVariant = variant if variant in ['bordered', 'card', 'flush'] else 'bordered' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<div
  class="accordion accordion_{{ resolvedVariant }}{% if resolvedSize != 'md' %} accordion_{{ resolvedSize }}{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Accordion"
  data-accordion
  {% if multiple %}data-accordion-multiple{% endif %}
  {% if effect == 'slide' %}data-effect="slide"{% endif %}
>
  {% if content %}
    {{ content | safe }}
  {% else %}
    {% for item in items %}
      {{ accordionItem(id=id + '-item-' + loop.index, label=item.label, title=item.title, content=item.content, open=item.open, disabled=item.disabled, extra=item.extra, ariaLevel=ariaLevel) }}
    {% endfor %}
  {% endif %}
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call accordion() %}
  {% call accordionItem(id='accordion-demo-1', label='배송은 얼마나 걸리나요?') %}평일 기준 2~3일 이내 출고됩니다.{% endcall %}
  {% call accordionItem(id='accordion-demo-2', label='교환·반품은 어떻게 하나요?', open=true) %}수령 후 7일 이내 신청할 수 있습니다.{% endcall %}
{% endcall %}
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`/**
 * Accordion 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useMemo, useRef } from 'react';

export const AccordionContext = createContext(null);

export function Accordion({
  children, // AccordionItem 자식들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'bordered', // bordered · flush · card 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  multiple = false, // 여러 항목을 동시에 열 수 있습니다.
  effect, // slide면 패널 높이 애니메이션을 사용합니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null);
  const itemsRef = useRef(new Map());
  const multipleRef = useRef(multiple);
  multipleRef.current = multiple;

  const registerItem = useCallback((item) => {
    itemsRef.current.set(item.id, item);
    return () => {
      itemsRef.current.delete(item.id);
    };
  }, []);

  const toggleItem = useCallback((id) => {
    const item = itemsRef.current.get(id);
    if (!item || item.disabled()) return;
    const willOpen = !item.isOpen();
    if (willOpen && !multipleRef.current) {
      itemsRef.current.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    item.setOpen(willOpen);
  }, []);

  const focusAdjacent = useCallback((id, key) => {
    const enabled = [...itemsRef.current.values()].filter((item) => !item.disabled());
    const index = enabled.findIndex((item) => item.id === id);
    let nextIndex = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    rootRef.current?.querySelector(\`#\${CSS.escape(enabled[nextIndex].id)}\`)?.focus();
    return true;
  }, []);

  const context = useMemo(
    () => ({ effect, focusAdjacent, registerItem, toggleItem }),
    [effect, focusAdjacent, registerItem, toggleItem],
  );
  const resolvedVariant = ['bordered', 'flush', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'accordion',
    \`accordion_\${resolvedVariant}\`,
    resolvedSize !== 'md' && \`accordion_\${resolvedSize}\`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AccordionContext.Provider value={context}>
      <div
        {...props}
        ref={rootRef}
        className={classes}
        data-accordion=""
        data-accordion-multiple={multiple ? '' : undefined}
        data-component="Accordion"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export default Accordion;
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`/**
 * AccordionItem 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { AccordionContext } from './Accordion.jsx';

export function AccordionItem({
  label, // 트리거 레이블입니다. title이 있으면 title을 우선합니다.
  title, // 트리거 제목입니다. 있으면 label보다 우선합니다.
  content, // children이 없을 때 본문으로 쓸 텍스트입니다.
  children, // 패널 본문 콘텐츠입니다.
  extra, // 트리거 오른쪽에 표시할 보조 텍스트입니다.
  open = false, // 초기 열림 상태입니다.
  disabled = false, // 항목을 비활성화합니다.
  headingLevel = 3, // heading의 aria-level입니다.
  className = '', // 항목 루트에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 항목 루트에 전달합니다.
}) {
  const accordion = useContext(AccordionContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = \`accordion-trigger-\${uid}\`;
  const panelId = \`accordion-panel-\${uid}\`;
  const panelRef = useRef(null);
  const stateRef = useRef(Boolean(open));
  const disabledRef = useRef(Boolean(disabled));
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  stateRef.current = isOpen;
  disabledRef.current = Boolean(disabled);

  useEffect(
    () =>
      accordion?.registerItem({
        id: triggerId,
        disabled: () => disabledRef.current,
        isOpen: () => stateRef.current,
        setOpen: setIsOpen,
      }),
    [accordion, triggerId],
  );

  useLayoutEffect(() => {
    if (accordion?.effect !== 'slide') return;
    setSlideRegionOpen(panelRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [accordion?.effect, isOpen]);

  function handleKeyDown(event) {
    if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['accordion_item', isOpen && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = accordion?.effect === 'slide';

  return (
    <div {...props} className={classes}>
      <div className="accordion_heading" role="heading" aria-level={headingLevel}>
        <Button
          id={triggerId}
          variant="text"
          color="default"
          className="accordion_trigger"
          expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => accordion?.toggleItem(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" className="accordion_icon" />}
        >
          <span className="accordion_label">{title ?? label}</span>
          {extra != null ? <span className="accordion_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={panelRef}
        id={panelId}
        className="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen}
      >
        <div className="accordion_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`<!--
  Accordion 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, provide, ref, toRef, useAttrs } from 'vue';

defineOptions({ name: 'UxkmAccordion', inheritAttrs: false });

const props = defineProps({
  variant: { type: String, default: 'bordered' }, // bordered · flush · card 스킨입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  multiple: Boolean, // 여러 항목을 동시에 열 수 있습니다.
  effect: String, // slide면 패널 높이 애니메이션을 사용합니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
const items = new Map();
const effect = toRef(props, 'effect');
const classes = computed(() =>
  [
    'accordion',
    \`accordion_\${['bordered', 'flush', 'card'].includes(props.variant) ? props.variant : 'bordered'}\`,
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && \`accordion_\${props.size}\`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerItem(item) {
  items.set(item.id, item);
  return () => items.delete(item.id);
}

function toggleItem(id) {
  const item = items.get(id);
  if (!item || item.disabled.value) return;
  const willOpen = !item.open.value;
  if (willOpen && !props.multiple) {
    items.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled.value) other.open.value = false;
    });
  }
  item.open.value = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...items.values()].filter((item) => !item.disabled.value);
  const index = enabled.findIndex((item) => item.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef.value?.querySelector(\`#\${CSS.escape(enabled[nextIndex].id)}\`)?.focus();
  return true;
}

provide('uxkmAccordion', { effect, focusAdjacent, registerItem, toggleItem });
<\/script>

<template>
  <div
    ref="rootRef"
    v-bind="restAttrs"
    :class="classes"
    data-component="Accordion"
    data-accordion
    :data-accordion-multiple="multiple ? '' : undefined"
    :data-effect="effect === 'slide' ? 'slide' : undefined"
  >
    <slot />
  </div>
</template>
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`<!--
  AccordionItem 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, ref, toRef, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmAccordionItem' });

const props = defineProps({
  label: { type: String, default: '' }, // 트리거 레이블입니다.
  content: String, // 본문 텍스트입니다.
  open: Boolean, // 초기 열림 상태입니다.
  disabled: Boolean, // 항목을 비활성화합니다.
  headingLevel: { type: Number, default: 3 }, // heading의 aria-level입니다.
  ripple: { type: Boolean, default: true }, // 트리거 버튼 리플 효과입니다.
});
const accordion = inject('uxkmAccordion', null);
const uid = useId().replaceAll(':', '');
const triggerId = \`accordion-trigger-\${uid}\`;
const panelId = \`accordion-panel-\${uid}\`;
const panelRef = ref(null);
const isOpen = ref(Boolean(props.open));
const disabled = toRef(props, 'disabled');
const slide = computed(() => accordion?.effect.value === 'slide');
const classes = computed(() =>
  ['accordion_item', isOpen.value && 'is-open', props.disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

watch(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(panelRef.value, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMounted(() => {
  unregister = accordion?.registerItem({ id: triggerId, open: isOpen, disabled });
  if (slide.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
onUnmounted(() => unregister?.());
<\/script>

<template>
  <div :class="classes">
    <div class="accordion_heading" role="heading" :aria-level="headingLevel">
      <Button
        :id="triggerId"
        variant="text"
        color="default"
        class="accordion_trigger"
        :expanded="isOpen"
        :aria-controls="panelId"
        :disabled="disabled"
        :ripple="ripple"
        @click="accordion?.toggleItem(triggerId)"
        @keydown="handleKeydown"
      >
        <span class="accordion_label"
          ><slot name="title">{{ label }}</slot></span
        >
        <span v-if="$slots.extra" class="accordion_extra"><slot name="extra" /></span>
        <template #icon-after><Icon name="chevron-down" class="accordion_icon" /></template>
      </Button>
    </div>
    <div
      :id="panelId"
      ref="panelRef"
      class="accordion_panel"
      role="region"
      :aria-labelledby="triggerId"
      :hidden="slide ? undefined : !isOpen"
    >
      <div class="accordion_content">
        <slot
          ><p v-if="content">{{ content }}</p></slot
        >
      </div>
    </div>
  </div>
</template>
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`<!-- Collapse 원본 구현: 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다. -->
<div class="collapse_group collapse_bordered" <!-- collapse_group 루트에 스킨과 data-collapse를 둡니다. -->
data-component="Collapse" data-collapse>
  <div class="<!-- 패널 헤더 트리거와 body region을 구성합니다. -->
collapse_panel is-open">
    <div class="collapse_header">
      <button
        type="button"
        class="btn btn_text collapse_trigger"
        id="collapse-basic-trigger-1"
        aria-expanded="true"
        aria-controls="collapse-basic-body-1"
      >
        <span class="collapse_label">배송 정보</span>
        <svg
          class="collapse_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="collapse_body"
      id="collapse-basic-body-1"
      role="region"
      aria-labelledby="collapse-basic-trigger-1"
    >
      <div class="collapse_content">
        <p>평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
      </div>
    </div>
  </div>
  <div class="collapse_panel">
    <div class="collapse_header">
      <button
        type="button"
        class="btn btn_text collapse_trigger"
        id="collapse-basic-trigger-2"
        aria-expanded="false"
        aria-controls="collapse-basic-body-2"
      >
        <span class="collapse_label">결제 수단</span>
        <svg
          class="collapse_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="collapse_body"
      id="collapse-basic-body-2"
      role="region"
      aria-labelledby="collapse-basic-trigger-2"
      hidden
    >
      <div class="collapse_content"><p>신용카드, 계좌이체, 간편결제를 지원합니다.</p></div>
    </div>
  </div>
  <div class="collapse_panel">
    <div class="collapse_header">
      <button
        type="button"
        class="btn btn_text collapse_trigger"
        id="collapse-basic-trigger-3"
        aria-expanded="false"
        aria-controls="collapse-basic-body-3"
      >
        <span class="collapse_label">교환·반품 안내</span>
        <svg
          class="collapse_icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div
      class="collapse_body"
      id="collapse-basic-body-3"
      role="region"
      aria-labelledby="collapse-basic-trigger-3"
      hidden
    >
      <div class="collapse_content"><p>수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p></div>
    </div>
  </div>
</div>
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`{# Collapse 원본 구현: 그룹 패널과 독립형 패널을 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}
{% import "components/basic/Button/button.njk" as Button %}

{% macro collapsePanel(id, label='', title='', content='', open=false, disabled=false, extra='', className='') %}
{%- set panelContent = caller() if caller else content -%}
<div class="collapse_panel{% if open %} is-open{% endif %}{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className else '' }}">
  <div class="collapse_header">
    <button
      type="button"
      class="btn btn_text collapse_trigger"
      id="{{ id }}-trigger"
      aria-expanded="{{ 'true' if open else 'false' }}"
      aria-controls="{{ id }}-body"
      {% if disabled %}disabled{% endif %}
    >
      <span class="collapse_label">{% if title %}{{ title | safe }}{% else %}{{ label }}{% endif %}</span>
      {% if extra %}<span class="collapse_extra">{{ extra | safe }}</span>{% endif %}
      {{ Icon.icon(name='chevron-down', className='collapse_icon') }}
    </button>
  </div>
  <div class="collapse_body" id="{{ id }}-body" role="region" aria-labelledby="{{ id }}-trigger" {% if not open %}hidden{% endif %}>
    <div class="collapse_content">{{ panelContent | safe }}</div>
  </div>
</div>
{% endmacro %}

{% macro collapse(items=[], id='collapse', variant='bordered', size='md', accordion=false, effect='', className='') %}
{%- set content = caller() if caller else '' -%}
{%- set resolvedVariant = variant if variant in ['bordered', 'ghost', 'card'] else 'bordered' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<div
  class="collapse_group collapse_{{ resolvedVariant }}{% if resolvedSize != 'md' %} collapse_{{ resolvedSize }}{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Collapse"
  data-collapse
  {% if accordion %}data-collapse-accordion{% endif %}
  {% if effect == 'slide' %}data-effect="slide"{% endif %}
>
  {% if content %}
    {{ content | safe }}
  {% else %}
    {% for item in items %}
      {{ collapsePanel(id=id + '-panel-' + loop.index, label=item.label, title=item.title, content=item.content, open=item.open, disabled=item.disabled, extra=item.extra) }}
    {% endfor %}
  {% endif %}
</div>
{% endmacro %}

{% macro collapseExternal(id='collapse-body', triggerLabel='상세 보기', lead='', open=false, effect='', boxed=true, className='') %}
{%- set panelContent = caller() if caller else '' -%}
{% if lead %}<div>{{ lead | safe }}</div>{% endif %}
{{ Button.button(
  variant='ghost', color='default', size='sm', label=triggerLabel,
  iconAfter='chevron-down', ripple=false, expanded=open,
  className='collapse_external-trigger',
  dataAttributes={ 'data-collapse-trigger': true, 'aria-controls': id }
) }}
<div
  class="collapse{% if open %} is-open{% endif %}{{ (' ' + className) if className else '' }}"
  id="{{ id }}"
  data-component="Collapse"
  data-collapse-external
  {% if effect == 'slide' %}data-effect="slide"{% endif %}
  {% if not open %}hidden{% endif %}
  {% if boxed %}style="margin-top: var(--space-sm)"{% endif %}
>
  <div{% if boxed %} class="collapse_inner"{% endif %}>{{ panelContent | safe }}</div>
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call collapse() %}
  {% call collapsePanel(id='collapse-demo-1', label='배송 정보', open=true) %}평일 기준 2~3일 이내 출고됩니다.{% endcall %}
  {% call collapsePanel(id='collapse-demo-2', label='결제 수단') %}신용카드와 간편결제를 지원합니다.{% endcall %}
{% endcall %}
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`/**
 * Collapse 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useMemo, useRef } from 'react';

export const CollapseContext = createContext(null);

export function Collapse({
  children, // CollapsePanel 자식들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'bordered', // bordered · ghost · card 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  accordion = false, // 한 번에 하나의 패널만 열리게 합니다.
  effect, // slide면 패널 높이 애니메이션을 사용합니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null);
  const panelsRef = useRef(new Map());
  const accordionRef = useRef(accordion);
  accordionRef.current = accordion;

  const registerPanel = useCallback((panel) => {
    panelsRef.current.set(panel.id, panel);
    return () => panelsRef.current.delete(panel.id);
  }, []);

  const togglePanel = useCallback((id) => {
    const panel = panelsRef.current.get(id);
    if (!panel || panel.disabled()) return;
    const willOpen = !panel.isOpen();
    if (willOpen && accordionRef.current) {
      panelsRef.current.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    panel.setOpen(willOpen);
  }, []);

  const focusAdjacent = useCallback((id, key) => {
    const enabled = [...panelsRef.current.values()].filter((panel) => !panel.disabled());
    const index = enabled.findIndex((panel) => panel.id === id);
    let nextIndex = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    rootRef.current?.querySelector(\`#\${CSS.escape(enabled[nextIndex].id)}\`)?.focus();
    return true;
  }, []);

  const context = useMemo(
    () => ({ effect, focusAdjacent, registerPanel, togglePanel }),
    [effect, focusAdjacent, registerPanel, togglePanel],
  );
  const resolvedVariant = ['bordered', 'ghost', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'collapse_group',
    \`collapse_\${resolvedVariant}\`,
    resolvedSize !== 'md' && \`collapse_\${resolvedSize}\`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <CollapseContext.Provider value={context}>
      <div
        {...props}
        ref={rootRef}
        className={classes}
        data-collapse=""
        data-collapse-accordion={accordion ? '' : undefined}
        data-component="Collapse"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

export default Collapse;
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`/**
 * CollapsePanel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { CollapseContext } from './Collapse.jsx';

export function CollapsePanel({
  label, // 트리거 레이블입니다. title이 있으면 title을 우선합니다.
  title, // 트리거 제목입니다. 있으면 label보다 우선합니다.
  content, // children이 없을 때 본문으로 쓸 텍스트입니다.
  children, // 패널 본문 콘텐츠입니다.
  extra, // 트리거 오른쪽에 표시할 보조 텍스트입니다.
  open = false, // 초기 열림 상태입니다.
  disabled = false, // 패널을 비활성화합니다.
  className = '', // 패널 루트에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 패널 루트에 전달합니다.
}) {
  const collapse = useContext(CollapseContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = \`collapse-trigger-\${uid}\`;
  const bodyId = \`collapse-body-\${uid}\`;
  const bodyRef = useRef(null);
  const stateRef = useRef(Boolean(open));
  const disabledRef = useRef(Boolean(disabled));
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  stateRef.current = isOpen;
  disabledRef.current = Boolean(disabled);

  useEffect(
    () =>
      collapse?.registerPanel({
        id: triggerId,
        disabled: () => disabledRef.current,
        isOpen: () => stateRef.current,
        setOpen: setIsOpen,
      }),
    [collapse, triggerId],
  );

  useLayoutEffect(() => {
    if (collapse?.effect !== 'slide') return;
    setSlideRegionOpen(bodyRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [collapse?.effect, isOpen]);

  function handleKeyDown(event) {
    if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = collapse?.effect === 'slide';

  return (
    <div {...props} className={classes}>
      <div className="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          color="default"
          className="collapse_trigger"
          expanded={isOpen}
          aria-controls={bodyId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => collapse?.togglePanel(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" className="collapse_icon" />}
        >
          <span className="collapse_label">{title ?? label}</span>
          {extra != null ? <span className="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={bodyRef}
        id={bodyId}
        className="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen}
      >
        <div className="collapse_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default CollapsePanel;
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`/**
 * CollapseExternal 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

export function CollapseExternal({
  triggerLabel, // 외부 트리거 버튼 텍스트입니다.
  lead, // 트리거 위에 표시할 선행 콘텐츠입니다.
  children, // 접히는 본문 콘텐츠입니다.
  open = false, // 초기 열림 상태입니다.
  effect, // slide면 높이 애니메이션을 사용합니다.
  boxed = true, // 본문을 collapse_inner로 감쌉니다.
  className = '', // 바깥 래퍼에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 바깥 래퍼에 전달합니다.
}) {
  const uid = useId().replaceAll(':', '');
  const panelId = \`collapse-external-\${uid}\`;
  const panelRef = useRef(null);
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  const slide = effect === 'slide';

  useLayoutEffect(() => {
    if (!slide) return;
    setSlideRegionOpen(panelRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [isOpen, slide]);

  return (
    <div {...props} className={className}>
      {lead != null ? <div>{lead}</div> : null}
      <Button
        variant="ghost"
        size="sm"
        expanded={isOpen}
        aria-controls={panelId}
        ripple={ripple}
        onClick={() => setIsOpen((value) => !value)}
        iconAfter={<Icon name="chevron-down" size="sm" />}
      >
        {triggerLabel}
      </Button>
      <div
        ref={panelRef}
        id={panelId}
        className={['collapse', isOpen && 'is-open'].filter(Boolean).join(' ')}
        data-effect={slide ? 'slide' : undefined}
        hidden={slide ? undefined : !isOpen}
        style={boxed ? { marginTop: 'var(--space-sm)' } : undefined}
      >
        <div className={boxed ? 'collapse_inner' : undefined}>{children}</div>
      </div>
    </div>
  );
}

export default CollapseExternal;
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`<!--
  Collapse 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, provide, ref, toRef, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCollapse', inheritAttrs: false });

const props = defineProps({
  variant: { type: String, default: 'bordered' }, // bordered · ghost · card 스킨입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  accordion: Boolean, // 한 번에 하나의 패널만 열리게 합니다.
  effect: String, // slide면 패널 높이 애니메이션을 사용합니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
const panels = new Map();
const effect = toRef(props, 'effect');
const classes = computed(() =>
  [
    'collapse_group',
    \`collapse_\${['bordered', 'ghost', 'card'].includes(props.variant) ? props.variant : 'bordered'}\`,
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && \`collapse_\${props.size}\`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function registerPanel(panel) {
  panels.set(panel.id, panel);
  return () => panels.delete(panel.id);
}

function togglePanel(id) {
  const panel = panels.get(id);
  if (!panel || panel.disabled.value) return;
  const willOpen = !panel.open.value;
  if (willOpen && props.accordion) {
    panels.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled.value) other.open.value = false;
    });
  }
  panel.open.value = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...panels.values()].filter((panel) => !panel.disabled.value);
  const index = enabled.findIndex((panel) => panel.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef.value?.querySelector(\`#\${CSS.escape(enabled[nextIndex].id)}\`)?.focus();
  return true;
}

provide('uxkmCollapse', { effect, focusAdjacent, registerPanel, togglePanel });
<\/script>

<template>
  <div
    ref="rootRef"
    v-bind="restAttrs"
    :class="classes"
    data-component="Collapse"
    data-collapse
    :data-collapse-accordion="accordion ? '' : undefined"
    :data-effect="effect === 'slide' ? 'slide' : undefined"
  >
    <slot />
  </div>
</template>
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`<!--
  CollapsePanel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, ref, toRef, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmCollapsePanel' });

const props = defineProps({
  label: { type: String, default: '' }, // 트리거 레이블입니다.
  content: String, // 본문 텍스트입니다.
  open: Boolean, // 초기 열림 상태입니다.
  disabled: Boolean, // 패널을 비활성화합니다.
  ripple: { type: Boolean, default: true }, // 트리거 버튼 리플 효과입니다.
});
const collapse = inject('uxkmCollapse', null);
const uid = useId().replaceAll(':', '');
const triggerId = \`collapse-trigger-\${uid}\`;
const bodyId = \`collapse-body-\${uid}\`;
const bodyRef = ref(null);
const isOpen = ref(Boolean(props.open));
const disabled = toRef(props, 'disabled');
const slide = computed(() => collapse?.effect.value === 'slide');
const classes = computed(() =>
  ['collapse_panel', isOpen.value && 'is-open', props.disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

watch(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(bodyRef.value, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMounted(() => {
  unregister = collapse?.registerPanel({ id: triggerId, open: isOpen, disabled });
  if (slide.value) {
    setSlideRegionOpen(bodyRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
onUnmounted(() => unregister?.());
<\/script>

<template>
  <div :class="classes">
    <div class="collapse_header">
      <Button
        :id="triggerId"
        variant="text"
        color="default"
        class="collapse_trigger"
        :expanded="isOpen"
        :aria-controls="bodyId"
        :disabled="disabled"
        :ripple="ripple"
        @click="collapse?.togglePanel(triggerId)"
        @keydown="handleKeydown"
      >
        <span class="collapse_label"
          ><slot name="title">{{ label }}</slot></span
        >
        <span v-if="$slots.extra" class="collapse_extra"><slot name="extra" /></span>
        <template #icon-after><Icon name="chevron-down" class="collapse_icon" /></template>
      </Button>
    </div>
    <div
      :id="bodyId"
      ref="bodyRef"
      class="collapse_body"
      role="region"
      :aria-labelledby="triggerId"
      :hidden="slide ? undefined : !isOpen"
    >
      <div class="collapse_content">
        <slot
          ><p v-if="content">{{ content }}</p></slot
        >
      </div>
    </div>
  </div>
</template>
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`<!--
  CollapseExternal 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onMounted, ref, useAttrs, useId, watch } from 'vue';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmCollapseExternal', inheritAttrs: false });

const props = defineProps({
  triggerLabel: { type: String, default: '' }, // 외부 트리거 버튼 텍스트입니다.
  open: Boolean, // 초기 열림 상태입니다.
  effect: String, // slide면 높이 애니메이션을 사용합니다.
  boxed: { type: Boolean, default: true }, // 본문을 collapse_inner로 감쌉니다.
  ripple: { type: Boolean, default: true }, // 트리거 버튼 리플 효과입니다.
});
const attrs = useAttrs();
const panelId = \`collapse-external-\${useId().replaceAll(':', '')}\`;
const panelRef = ref(null);
const isOpen = ref(Boolean(props.open));
const slide = computed(() => props.effect === 'slide');
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
let firstSlideSync = true;

watch(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(panelRef.value, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMounted(() => {
  if (slide.value) {
    setSlideRegionOpen(panelRef.value, isOpen.value, false);
    firstSlideSync = false;
  }
});
<\/script>

<template>
  <div v-bind="restAttrs" :class="attrs.class">
    <div v-if="$slots.lead"><slot name="lead" /></div>
    <Button
      variant="ghost"
      size="sm"
      :expanded="isOpen"
      :aria-controls="panelId"
      :ripple="ripple"
      @click="isOpen = !isOpen"
    >
      {{ triggerLabel }}
      <template #icon-after><Icon name="chevron-down" size="sm" /></template>
    </Button>
    <div
      :id="panelId"
      ref="panelRef"
      class="collapse"
      :class="{ 'is-open': isOpen }"
      :data-effect="slide ? 'slide' : undefined"
      :hidden="slide ? undefined : !isOpen"
      :style="boxed ? { marginTop: 'var(--space-sm)' } : undefined"
    >
      <div :class="boxed ? 'collapse_inner' : undefined"><slot /></div>
    </div>
  </div>
</template>
`})))()}var et;function tt(){return(tt=e((()=>{et=`<!-- Carousel 원본 구현: 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다. -->
<div class="carousel carousel_demo" <!-- carousel 루트 안에 swiper 트랙·내비·페이지네이션을 둡니다. -->
data-component="Carousel">
  <div
    class="swiper"
    data-swiper
    role="region"
    aria-roledescription="carousel"
    aria-label="프로모션 슬라이드"
  >
    <div class="<!-- swiper-slide 자식들이 트랙에 배치됩니다. -->
swiper-wrapper">
      <div class="swiper-slide">
        <article class="card card_accent color_primary">
          <div class="card_body">
            <p class="typo_overline">이벤트</p>
            <h3 class="card_title">신규 가입 혜택</h3>
            <p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p>
          </div>
        </article>
      </div>
      <div class="swiper-slide">
        <article class="card card_accent color_success">
          <div class="card_body">
            <p class="typo_overline">혜택</p>
            <h3 class="card_title">무료 배송</h3>
            <p class="typo_lead">3만 원 이상 구매 시 무료 배송됩니다.</p>
          </div>
        </article>
      </div>
      <div class="swiper-slide">
        <article class="card card_accent color_warning">
          <div class="card_body">
            <p class="typo_overline">세일</p>
            <h3 class="card_title">시즌 세일</h3>
            <p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p>
          </div>
        </article>
      </div>
    </div>
    <div class="swiper-button-prev" aria-label="이전 슬라이드" data-ripple="surface"></div>
    <div class="swiper-button-next" aria-label="다음 슬라이드" data-ripple="surface"></div>
    <div class="swiper-pagination"></div>
  </div>
</div>
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`{# Carousel 원본 구현: 슬라이드·탐색·페이지네이션을 호출형 macro로 구성합니다. #}
{% import "components/basic/Button/button.njk" as Button %}
{% import "components/basic/Icon/icon.njk" as Icon %}
{% import "components/data-display/Card/card.njk" as Card %}

{% macro carouselSlide(overline='슬라이드', title='', content='', body='', color='primary', html='', compact=false, className='') %}
{%- set slideContent = caller() if caller else html -%}
<div class="swiper-slide{{ (' ' + className) if className else '' }}">
  {% if slideContent %}
    {{ slideContent | safe }}
  {% else %}
    {% call Card.card(accent=true, color=color) %}
      {% call Card.cardBody() %}
        <p class="typo_overline">{{ overline }}</p>
        <h3 class="card_title">{{ title }}</h3>
        <p class="{{ 'card_subtitle' if compact else 'typo_lead' }}">{{ content if content else body }}</p>
      {% endcall %}
    {% endcall %}
  {% endif %}
</div>
{% endmacro %}

{% macro carouselNavigation() %}
{{ Button.button(variant='ghost', color='default', iconOnly=true, ripple='surface', ariaLabel='이전 슬라이드', className='swiper-button-prev') }}
{{ Button.button(variant='ghost', color='default', iconOnly=true, ripple='surface', ariaLabel='다음 슬라이드', className='swiper-button-next') }}
{% endmacro %}

{% macro carouselPagination(className='') %}<div class="swiper-pagination{{ (' ' + className) if className else '' }}"></div>{% endmacro %}

{% macro carouselAutoplayToggle(playing=true) %}
{% set pauseIcon %}
  {% call Icon.icon(className='carousel_toggle-icon carousel_toggle-icon-pause') %}<rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" />{% endcall %}
{% endset %}
{% call Button.button(variant='ghost', color='default', iconOnly=true, ripple='surface', ariaLabel=('슬라이드 정지' if playing else '슬라이드 재생'), className='carousel_toggle', dataAttributes={ 'data-carousel-autoplay-toggle': true, 'aria-pressed': ('true' if playing else 'false') }) %}
  {{ pauseIcon | safe }}
  {% call Icon.icon(className='carousel_toggle-icon carousel_toggle-icon-play') %}<path d="M8 5v14l11-7z" />{% endcall %}
{% endcall %}
{% endmacro %}

{% macro carousel(slides=[], id='carousel', slideLimit=false, size='md', multi=false, dotsOutside=false, effect='', coverflowStyle='tilt', coverflowSides=1.5, autoplay=false, autoplayToggle=false, delay=4000, loop=false, initialSlide=false, centered=false, slidesPerView=false, slidesPerGroup=false, spaceBetween=false, pagination=true, navigation=true, gridRows=false, gridFill='row', thumbs='', thumbsControl=false, watchSlidesProgress=false, ariaLabel='콘텐츠 슬라이드', className='') %}
{%- set slideContent = caller() if caller else '' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<div
  class="carousel carousel_demo{% if resolvedSize != 'md' %} carousel_{{ resolvedSize }}{% endif %}{% if multi %} carousel_multi{% endif %}{% if dotsOutside %} carousel_dots-outside{% endif %}{% if effect == 'coverflow' %} carousel_coverflow{% if coverflowStyle == 'rise' %} carousel_coverflow-rise{% endif %}{% endif %}{% if gridRows and gridRows > 1 %} carousel_grid{% endif %}{% if pagination == 'custom' %} carousel_pagination-custom{% endif %}{% if pagination == 'progressbar' %} carousel_pagination-progress{% endif %}{% if thumbsControl %} carousel_thumbs{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Carousel"
>
  <div
    id="{{ id }}"
    class="swiper"
    data-swiper
    role="region"
    aria-roledescription="carousel"
    aria-label="{{ ariaLabel }}"
    {% if effect %}data-swiper-effect="{{ effect }}"{% endif %}
    {% if effect == 'coverflow' %}data-swiper-coverflow-style="{{ coverflowStyle }}" data-swiper-coverflow-sides="{{ coverflowSides }}"{% endif %}
    {% if autoplay %}data-swiper-autoplay data-swiper-delay="{{ delay }}"{% endif %}
    {% if loop %}data-swiper-loop{% endif %}
    {% if initialSlide %}data-swiper-initial-slide="{{ initialSlide }}"{% endif %}
    {% if centered %}data-swiper-centered{% endif %}
    {% if slidesPerView %}data-swiper-slides-per-view="{{ slidesPerView }}"{% endif %}
    {% if slidesPerGroup %}data-swiper-slides-per-group="{{ slidesPerGroup }}"{% endif %}
    {% if spaceBetween %}data-swiper-space-between="{{ spaceBetween }}"{% endif %}
    {% if pagination and pagination != true %}data-swiper-pagination="{{ pagination }}"{% endif %}
    {% if gridRows and gridRows > 1 %}data-swiper-grid-rows="{{ gridRows }}" data-swiper-grid-fill="{{ gridFill }}"{% endif %}
    {% if thumbs %}data-swiper-thumbs="{{ thumbs }}"{% endif %}
    {% if watchSlidesProgress %}data-swiper-watch-slides-progress{% endif %}
  >
    <div class="swiper-wrapper">
      {% if slideContent %}
        {{ slideContent | safe }}
      {% else %}
        {% for slide in slides %}{% if not slideLimit or loop.index <= slideLimit %}{{ carouselSlide(overline=slide.overline, title=slide.title, content=slide.content, body=slide.body, color=slide.color | default('primary'), html=slide.html, compact=slide.compact) }}{% endif %}{% endfor %}
      {% endif %}
    </div>
    {% if navigation != false %}{{ carouselNavigation() }}{% endif %}
    {% if pagination != false and not dotsOutside %}{{ carouselPagination() }}{% endif %}
  </div>
  {% if pagination != false and dotsOutside %}{{ carouselPagination() }}{% endif %}
  {% if autoplay or autoplayToggle %}{{ carouselAutoplayToggle(playing=true) }}{% endif %}
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call carousel(id='carousel-demo') %}
  {{ carouselSlide(overline='이벤트', title='신규 가입 혜택', content='첫 주문 20% 할인 쿠폰을 드립니다.', color='primary') }}
  {{ carouselSlide(overline='혜택', title='무료 배송', content='3만 원 이상 구매 시 무료 배송됩니다.', color='success') }}
{% endcall %}
`})))()}var it;function at(){return(at=e((()=>{it=`/**
 * Carousel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const CarouselContext = createContext(null);

function resolveCoverflowSides(value) {
  if (Number(value) === 1) return 1;
  if (Number(value) === 2 || Number(value) === 2.5) return 2;
  return 1.5;
}

function coverflowLoopMinSlides(sides) {
  if (sides === 1) return 6;
  if (sides === 1.5) return 8;
  return 10;
}

export function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}

export function updateCoverflowStyles(
  root,
  element,
  isCoverflow,
  spaceBetween,
  coverflowSideCount,
) {
  if (!root || !element) return Number(spaceBetween) || 0;
  if (!isCoverflow) {
    root.style.removeProperty('--carousel-coverflow-gap');
    root.style.removeProperty('--carousel-coverflow-slide-width');
    return Number(spaceBetween) || 0;
  }
  const baseGap = Number(spaceBetween) || 0;
  const width = element.clientWidth || root.clientWidth;
  root.style.setProperty('--carousel-coverflow-gap', \`\${baseGap}px\`);
  if (!width) return baseGap;
  const slideWidth = (width - baseGap * 2) / 3;
  const effectiveGap = (width - slideWidth) / (2 * coverflowSideCount) - slideWidth;
  root.style.setProperty(
    '--carousel-coverflow-slide-width',
    \`\${Math.round(slideWidth * 100) / 100}px\`,
  );
  return Math.round(effectiveGap * 100) / 100;
}

export function Carousel({
  ariaLabel = '콘텐츠 슬라이드', // 캐러셀 영역의 접근성 이름입니다.
  children, // CarouselSlide 자식들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // 루트 인라인 스타일입니다.
  size = 'md', // sm · md · lg 높이·간격 크기입니다.
  multi = false, // 다중 슬라이드 보기 클래스를 적용합니다.
  dotsOutside = false, // 페이지네이션을 트랙 밖에 둡니다.
  autoplayToggle = false, // 자동재생 토글 버튼을 표시합니다.
  effect, // fade · coverflow 등 Swiper 효과입니다.
  autoplay = false, // 자동재생을 켭니다.
  delay = 4000, // 자동재생 간격(ms)입니다.
  loop = false, // 끝에서 처음으로 순환합니다.
  initialSlide = 0, // 처음 보여줄 슬라이드 인덱스입니다.
  slidesPerView = 1, // 한 화면에 보일 슬라이드 수입니다.
  slidesPerGroup = 1, // 한 번에 넘길 슬라이드 수입니다.
  spaceBetween = 0, // 슬라이드 사이 간격(px)입니다.
  centered = false, // 활성 슬라이드를 가운데 정렬합니다.
  pagination = true, // 페이지네이션 표시 여부·유형입니다.
  navigation = true, // 이전·다음 버튼을 표시합니다.
  gridRows = 1, // 그리드 행 수입니다. 1보다 크면 그리드 모드입니다.
  gridFill = 'row', // 그리드 채움 방향입니다.
  coverflowStyle = 'tilt', // coverflow 시각 스타일(tilt · rise)입니다.
  coverflowSides = 1.5, // coverflow 옆면 노출 수입니다.
  coverflowEffect, // coverflowEffect Swiper 옵션을 덮어씁니다.
  thumbs = null, // 썸네일 연동용 Swiper 인스턴스입니다.
  thumbsControl = false, // 클릭 시 해당 슬라이드로 이동하는 썸네일 모드입니다.
  watchSlidesProgress = false, // 슬라이드 진행도를 감시합니다.
  freeMode = false, // 자유 스크롤 모드를 켭니다.
  onSwiper, // Swiper 인스턴스 생성 콜백입니다.
  ripple = true, // 내비·토글 버튼 리플 효과입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null);
  const swiperRef = useRef(null);
  const instanceRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplay));
  const isCoverflow = effect === 'coverflow';
  const isGrid = gridRows > 1;
  const coverflowSideCount = resolveCoverflowSides(coverflowSides);
  const resolvedSlidesPerView =
    isCoverflow || multi || slidesPerView === 'auto' ? 'auto' : slidesPerView;
  const showPagination = pagination !== false;
  const showNavigation = navigation !== false;
  const updateCoverflowLayout = useCallback(
    () =>
      updateCoverflowStyles(
        rootRef.current,
        swiperRef.current,
        isCoverflow,
        spaceBetween,
        coverflowSideCount,
      ),
    [coverflowSideCount, isCoverflow, spaceBetween],
  );

  useEffect(() => {
    if (swiperRef.current) {
      const slideCount = swiperRef.current.querySelectorAll(
        ':scope > .swiper-wrapper > .swiper-slide',
      ).length;
      if (slideCount === 0) return undefined;
      const canLoop = (() => {
        if (!loop || isGrid || slideCount < 2) return false;
        if (isCoverflow) return slideCount >= coverflowLoopMinSlides(coverflowSideCount);
        if (resolvedSlidesPerView === 'auto') return slideCount >= 4;
        return (
          slideCount >=
          Math.max(2, Math.ceil(Number(resolvedSlidesPerView) || 1) + 1 + (centered ? 1 : 0))
        );
      })();
      const startIndex = normalizeInitialSlide(initialSlide, slideCount, canLoop);
      instanceRef.current?.destroy(true, true);
      const paginationEl =
        rootRef.current?.querySelector(':scope > .swiper-pagination') ??
        swiperRef.current.querySelector('.swiper-pagination');
      const resolvedSpaceBetween = updateCoverflowLayout();
      const config = {
        initialSlide: startIndex,
        slidesPerView: resolvedSlidesPerView,
        slidesPerGroup,
        spaceBetween: resolvedSpaceBetween,
        centeredSlides: centered || isCoverflow,
        loop: canLoop,
        grabCursor: true,
        keyboard: { enabled: true },
        observer: true,
        observeParents: true,
        watchSlidesProgress: Boolean(watchSlidesProgress || thumbsControl || isCoverflow),
      };
      if (showNavigation)
        config.navigation = {
          prevEl: swiperRef.current.querySelector('.swiper-button-prev'),
          nextEl: swiperRef.current.querySelector('.swiper-button-next'),
        };
      if (showPagination)
        config.pagination = {
          el: paginationEl,
          clickable: true,
          type: pagination === 'fraction' || pagination === 'progressbar' ? pagination : 'bullets',
          ...(pagination === 'custom'
            ? {
                renderBullet: (index, bulletClass) =>
                  \`<span class="\${bulletClass}">\${index + 1}</span>\`,
              }
            : {}),
        };
      if (autoplay) config.autoplay = { delay, disableOnInteraction: false };
      if (isGrid) config.grid = { rows: gridRows, fill: gridFill === 'column' ? 'column' : 'row' };
      if (freeMode) config.freeMode = true;
      if (thumbsControl) config.slideToClickedSlide = true;
      if (thumbs && !thumbs.destroyed) config.thumbs = { swiper: thumbs };
      if (effect === 'fade')
        Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
      if (isCoverflow)
        Object.assign(config, {
          effect: 'coverflow',
          coverflowEffect: {
            ...(coverflowStyle === 'rise'
              ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
              : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true }),
            ...coverflowEffect,
          },
        });
      if (isCoverflow && canLoop)
        Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });
      const instance = new Swiper(swiperRef.current, config);
      instanceRef.current = instance;
      setIsPlaying(Boolean(autoplay));
      onSwiper?.(instance);
      const frame = window.requestAnimationFrame(() => {
        if (instance.destroyed) return;
        instance.update();
        if (canLoop && typeof instance.slideToLoop === 'function')
          instance.slideToLoop(startIndex, 0, false);
      });
      return () => {
        window.cancelAnimationFrame(frame);
        instance.destroy(true, true);
        if (instanceRef.current === instance) instanceRef.current = null;
      };
    }
  }, [
    autoplay,
    centered,
    coverflowEffect,
    coverflowSideCount,
    coverflowStyle,
    delay,
    effect,
    freeMode,
    gridFill,
    gridRows,
    initialSlide,
    isCoverflow,
    isGrid,
    loop,
    navigation,
    onSwiper,
    pagination,
    resolvedSlidesPerView,
    showNavigation,
    showPagination,
    slidesPerGroup,
    thumbs,
    thumbsControl,
    updateCoverflowLayout,
    watchSlidesProgress,
  ]);

  useEffect(() => {
    if (rootRef.current && typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        const gap = updateCoverflowLayout();
        const swiper = instanceRef.current;
        if (!swiper || swiper.destroyed) return;
        swiper.params.spaceBetween = gap;
        swiper.update();
      });
      observer.observe(rootRef.current);
      return () => observer.disconnect();
    }
  }, [updateCoverflowLayout]);

  function toggleAutoplay() {
    const autoplayApi = instanceRef.current?.autoplay;
    if (!autoplayApi) return;
    if (autoplayApi.running) autoplayApi.stop();
    else autoplayApi.start();
    setIsPlaying(autoplayApi.running);
  }

  const classes = [
    'carousel',
    'carousel_demo',
    multi && 'carousel_multi',
    dotsOutside && 'carousel_dots-outside',
    isCoverflow && 'carousel_coverflow',
    isCoverflow && coverflowStyle === 'rise' && 'carousel_coverflow-rise',
    isCoverflow &&
      \`carousel_coverflow-sides-\${coverflowSideCount === 1.5 ? '15' : coverflowSideCount}\`,
    isGrid && 'carousel_grid',
    pagination === 'custom' && 'carousel_pagination-custom',
    pagination === 'progressbar' && 'carousel_pagination-progress',
    thumbsControl && 'carousel_thumbs',
    size !== 'md' && ['sm', 'lg'].includes(size) && \`carousel_\${size}\`,
    (autoplay || autoplayToggle) && !isPlaying && 'is-autoplay-paused',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const context = useMemo(() => ({}), []);

  return (
    <CarouselContext.Provider value={context}>
      <div {...props} ref={rootRef} className={classes} style={style} data-component="Carousel">
        <div
          ref={swiperRef}
          className="swiper"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          data-swiper=""
          data-swiper-effect={effect || undefined}
          data-swiper-space-between={spaceBetween || undefined}
        >
          <div className="swiper-wrapper">{children}</div>
          {showNavigation ? (
            <div
              className="swiper-button-prev"
              aria-label="이전 슬라이드"
              data-ripple={ripple ? 'surface' : 'false'}
            />
          ) : null}
          {showNavigation ? (
            <div
              className="swiper-button-next"
              aria-label="다음 슬라이드"
              data-ripple={ripple ? 'surface' : 'false'}
            />
          ) : null}
          {showPagination && !dotsOutside ? <div className="swiper-pagination" /> : null}
        </div>
        {showPagination && dotsOutside ? <div className="swiper-pagination" /> : null}
        {autoplay || autoplayToggle ? (
          <button
            type="button"
            className="carousel_toggle"
            data-carousel-autoplay-toggle=""
            data-ripple={ripple ? 'surface' : 'false'}
            aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
            aria-pressed={isPlaying}
            onClick={toggleAutoplay}
          >
            <svg
              className="carousel_toggle-icon carousel_toggle-icon-pause"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
            <svg
              className="carousel_toggle-icon carousel_toggle-icon-play"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : null}
      </div>
    </CarouselContext.Provider>
  );
}

export default Carousel;
`})))()}var ot;function st(){return(st=e((()=>{ot=`/**
 * CarouselSlide 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export function CarouselSlide({
  children, // 슬라이드 내부 콘텐츠입니다.
  className = '', // swiper-slide과 함께 적용할 클래스입니다.
  ...props // 나머지 속성을 슬라이드 루트에 전달합니다.
}) {
  return (
    <div {...props} className={['swiper-slide', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

export default CarouselSlide;
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`<!--
  Carousel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

defineOptions({ name: 'UxkmCarousel', inheritAttrs: false });

const props = defineProps({
  ariaLabel: { type: String, default: '콘텐츠 슬라이드' }, // 캐러셀 영역의 접근성 이름입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  multi: Boolean, // 다중 슬라이드 보기입니다.
  dotsOutside: Boolean, // 페이지네이션을 트랙 밖에 둡니다.
  autoplayToggle: Boolean, // 자동재생 토글 버튼을 표시합니다.
  effect: String, // fade · coverflow 등 Swiper 효과입니다.
  autoplay: Boolean, // 자동재생을 켭니다.
  delay: { type: Number, default: 4000 }, // 자동재생 간격(ms)입니다.
  loop: Boolean, // 순환 재생입니다.
  initialSlide: { type: Number, default: 0 }, // 초기 슬라이드 인덱스입니다.
  slidesPerView: { type: [Number, String], default: 1 }, // 한 화면 슬라이드 수입니다.
  slidesPerGroup: { type: Number, default: 1 }, // 한 번에 넘길 슬라이드 수입니다.
  spaceBetween: { type: Number, default: 0 }, // 슬라이드 간격(px)입니다.
  centered: Boolean, // 활성 슬라이드 가운데 정렬입니다.
  pagination: { type: [Boolean, String], default: true }, // 페이지네이션 표시 여부·유형입니다.
  navigation: { type: Boolean, default: true }, // 이전·다음 버튼을 표시합니다.
  gridRows: { type: Number, default: 1 }, // 그리드 행 수입니다.
  gridFill: { type: String, default: 'row' }, // 그리드 채움 방향입니다.
  coverflowStyle: { type: String, default: 'tilt' }, // coverflow 시각 스타일입니다.
  coverflowSides: { type: [Number, String], default: 1.5 }, // coverflow 옆면 노출 수입니다.
  coverflowEffect: Object, // coverflowEffect Swiper 옵션을 덮어씁니다.
  thumbs: Object, // 썸네일 연동용 Swiper 인스턴스입니다.
  thumbsControl: Boolean, // 썸네일 클릭 이동 모드입니다.
  watchSlidesProgress: Boolean, // 슬라이드 진행도 감시입니다.
  freeMode: Boolean, // 자유 스크롤 모드입니다.
  ripple: { type: Boolean, default: true }, // 내비·토글 리플 효과입니다.
});
const emit = defineEmits(['swiper']);
const attrs = useAttrs();
const rootRef = ref(null);
const swiperRef = ref(null);
const instance = ref(null);
const isPlaying = ref(Boolean(props.autoplay));
let resizeObserver = null;
const isCoverflow = computed(() => props.effect === 'coverflow');
const isGrid = computed(() => props.gridRows > 1);
const coverflowSides = computed(() =>
  Number(props.coverflowSides) === 1
    ? 1
    : Number(props.coverflowSides) === 2 || Number(props.coverflowSides) === 2.5
      ? 2
      : 1.5,
);
const resolvedSlidesPerView = computed(() =>
  isCoverflow.value || props.multi || props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView,
);
const canLoop = computed(() => {
  const count = swiperRef.value?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!props.loop || isGrid.value || count < 2) return false;
  if (isCoverflow.value)
    return count >= (coverflowSides.value === 1 ? 6 : coverflowSides.value === 1.5 ? 8 : 10);
  if (resolvedSlidesPerView.value === 'auto') return count >= 4;
  return (
    count >=
    Math.max(2, Math.ceil(Number(resolvedSlidesPerView.value) || 1) + 1 + (props.centered ? 1 : 0))
  );
});
function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}
function updateCoverflowLayout() {
  const root = rootRef.value;
  const element = swiperRef.value;
  if (!root || !element) return Number(props.spaceBetween) || 0;
  if (!isCoverflow.value) {
    root.style.removeProperty('--carousel-coverflow-gap');
    root.style.removeProperty('--carousel-coverflow-slide-width');
    return Number(props.spaceBetween) || 0;
  }
  const baseGap = Number(props.spaceBetween) || 0;
  const width = element.clientWidth || root.clientWidth;
  root.style.setProperty('--carousel-coverflow-gap', \`\${baseGap}px\`);
  if (!width) return baseGap;
  const slideWidth = (width - baseGap * 2) / 3;
  const effectiveGap = (width - slideWidth) / (2 * coverflowSides.value) - slideWidth;
  root.style.setProperty(
    '--carousel-coverflow-slide-width',
    \`\${Math.round(slideWidth * 100) / 100}px\`,
  );
  return Math.round(effectiveGap * 100) / 100;
}
const classes = computed(() =>
  [
    'carousel',
    'carousel_demo',
    props.multi && 'carousel_multi',
    props.dotsOutside && 'carousel_dots-outside',
    isCoverflow.value && 'carousel_coverflow',
    isCoverflow.value && props.coverflowStyle === 'rise' && 'carousel_coverflow-rise',
    isCoverflow.value &&
      \`carousel_coverflow-sides-\${coverflowSides.value === 1.5 ? '15' : coverflowSides.value}\`,
    isGrid.value && 'carousel_grid',
    props.pagination === 'custom' && 'carousel_pagination-custom',
    props.pagination === 'progressbar' && 'carousel_pagination-progress',
    props.thumbsControl && 'carousel_thumbs',
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && \`carousel_\${props.size}\`,
    (props.autoplay || props.autoplayToggle) && !isPlaying.value && 'is-autoplay-paused',
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const configKeys = computed(() => [
  props.autoplay,
  props.centered,
  props.coverflowEffect,
  props.coverflowSides,
  props.coverflowStyle,
  props.delay,
  props.effect,
  props.freeMode,
  props.gridFill,
  props.gridRows,
  props.initialSlide,
  props.loop,
  props.multi,
  props.navigation,
  props.pagination,
  props.slidesPerGroup,
  props.slidesPerView,
  props.spaceBetween,
  props.thumbs,
  props.thumbsControl,
  props.watchSlidesProgress,
]);

function destroy() {
  instance.value?.destroy(true, true);
  instance.value = null;
}

async function init() {
  await nextTick();
  const element = swiperRef.value;
  const count = element?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!element || !count) return;
  destroy();
  const paginationEl =
    rootRef.value?.querySelector(':scope > .swiper-pagination') ??
    element.querySelector('.swiper-pagination');
  const startIndex = normalizeInitialSlide(props.initialSlide, count, canLoop.value);
  const resolvedSpaceBetween = updateCoverflowLayout();
  const config = {
    initialSlide: startIndex,
    slidesPerView: resolvedSlidesPerView.value,
    slidesPerGroup: props.slidesPerGroup,
    spaceBetween: resolvedSpaceBetween,
    centeredSlides: props.centered || isCoverflow.value,
    loop: canLoop.value,
    grabCursor: true,
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
    watchSlidesProgress: props.watchSlidesProgress || props.thumbsControl || isCoverflow.value,
  };
  if (props.navigation)
    config.navigation = {
      prevEl: element.querySelector('.swiper-button-prev'),
      nextEl: element.querySelector('.swiper-button-next'),
    };
  if (props.pagination)
    config.pagination = {
      el: paginationEl,
      clickable: true,
      type: ['fraction', 'progressbar'].includes(props.pagination) ? props.pagination : 'bullets',
      ...(props.pagination === 'custom'
        ? {
            renderBullet: (index, bulletClass) =>
              \`<span class="\${bulletClass}">\${index + 1}</span>\`,
          }
        : {}),
    };
  if (props.autoplay) config.autoplay = { delay: props.delay, disableOnInteraction: false };
  if (isGrid.value)
    config.grid = { rows: props.gridRows, fill: props.gridFill === 'column' ? 'column' : 'row' };
  if (props.freeMode) config.freeMode = true;
  if (props.thumbsControl) config.slideToClickedSlide = true;
  if (props.thumbs && !props.thumbs.destroyed) config.thumbs = { swiper: props.thumbs };
  if (props.effect === 'fade')
    Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
  if (isCoverflow.value)
    Object.assign(config, {
      effect: 'coverflow',
      coverflowEffect: {
        ...(props.coverflowStyle === 'rise'
          ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
          : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true }),
        ...props.coverflowEffect,
      },
    });
  if (isCoverflow.value && canLoop.value)
    Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });
  instance.value = new Swiper(element, config);
  isPlaying.value = Boolean(props.autoplay);
  emit('swiper', instance.value);
  window.requestAnimationFrame(() => {
    const swiper = instance.value;
    if (!swiper || swiper.destroyed) return;
    swiper.update();
    if (canLoop.value && typeof swiper.slideToLoop === 'function')
      swiper.slideToLoop(startIndex, 0, false);
  });
}

function toggleAutoplay() {
  if (!instance.value?.autoplay) return;
  if (instance.value.autoplay.running) instance.value.autoplay.stop();
  else instance.value.autoplay.start();
  isPlaying.value = instance.value.autoplay.running;
}

watch(configKeys, init, { flush: 'post' });
onMounted(() => {
  init();
  if (typeof ResizeObserver !== 'undefined' && rootRef.value) {
    resizeObserver = new ResizeObserver(() => {
      const gap = updateCoverflowLayout();
      if (!instance.value || instance.value.destroyed) return;
      instance.value.params.spaceBetween = gap;
      instance.value.update();
    });
    resizeObserver.observe(rootRef.value);
  }
});
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  destroy();
});
defineExpose({ swiper: instance });
<\/script>

<template>
  <div ref="rootRef" v-bind="restAttrs" :class="classes" data-component="Carousel">
    <div
      ref="swiperRef"
      class="swiper"
      role="region"
      aria-roledescription="carousel"
      :aria-label="ariaLabel"
      data-swiper
      :data-swiper-effect="effect || undefined"
      :data-swiper-space-between="spaceBetween || undefined"
    >
      <div class="swiper-wrapper"><slot /></div>
      <div
        v-if="navigation"
        class="swiper-button-prev"
        aria-label="이전 슬라이드"
        :data-ripple="ripple ? 'surface' : 'false'"
      />
      <div
        v-if="navigation"
        class="swiper-button-next"
        aria-label="다음 슬라이드"
        :data-ripple="ripple ? 'surface' : 'false'"
      />
      <div v-if="pagination && !dotsOutside" class="swiper-pagination" />
    </div>
    <div v-if="pagination && dotsOutside" class="swiper-pagination" />
    <button
      v-if="autoplay || autoplayToggle"
      type="button"
      class="carousel_toggle"
      data-carousel-autoplay-toggle
      :data-ripple="ripple ? 'surface' : 'false'"
      :aria-label="isPlaying ? '슬라이드 정지' : '슬라이드 재생'"
      :aria-pressed="isPlaying"
      @click="toggleAutoplay"
    >
      <svg
        class="carousel_toggle-icon carousel_toggle-icon-pause"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
      <svg
        class="carousel_toggle-icon carousel_toggle-icon-play"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
</template>
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`<!--
  CarouselSlide 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
defineOptions({ name: 'UxkmCarouselSlide' }); // 컴포넌트 표시 이름을 등록합니다.
<\/script>

<template>
    <!-- swiper-slide 루트에 슬라이드 콘텐츠를 둡니다. -->
  <div class="swiper-slide"><slot /></div>
</template>
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`<!-- Affix 원본 구현: 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다. -->
<div id="affix-scroll-basic" class="affix_demo-scroll">
  <div class="affix_demo-content">
    <p>스크롤하면 주문 액션 바가 상단에 고정됩니다.</p>
    <p>배송지와 결제 정보를 확인하세요.</p>
    <div class="affix" <!-- affix 루트·placeholder·target 구조를 둡니다. -->
data-component="Affix" data-affix data-target="#affix-scroll-basic">
      <div class="affix_placeholder" aria-hidden="true" hidden></div>
      <div class="<!-- 스크롤 시 고정될 콘텐츠 영역입니다. -->
affix_target affix_bar">
        <span class="affix_bar-label">주문 #ORD-2024-0815</span>
        <div class="affix_bar-actions">
          <button type="button" class="btn btn_outline btn_sm">취소</button
          ><button type="button" class="btn btn_filled color_primary btn_sm">결제</button>
        </div>
      </div>
    </div>
    <p>상품 정보 · 배송비 · 요청 사항</p>
    <p>교환·반품 안내</p>
    <p>고객센터 · FAQ</p>
    <p>관련 상품 · 최근 본 상품</p>
  </div>
</div>
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`{# Affix 원본 구현: 고정 대상 콘텐츠를 호출형 macro로 구성합니다. #}
{% macro affix(content='', target='', offsetTop='unset', offsetBottom='unset', skin='', interactive=true, className='') %}
{%- set affixContent = caller() if caller else content -%}
{%- set resolvedSkin = skin if skin in ['bar', 'anchor'] else '' -%}
<div
  class="affix{{ (' ' + className) if className else '' }}"
  data-component="Affix"
  {% if interactive %}data-affix{% endif %}
  {% if target %}data-target="{{ target }}"{% endif %}
  {% if offsetTop != 'unset' %}data-offset-top="{{ offsetTop }}"{% endif %}
  {% if offsetBottom != 'unset' %}data-offset-bottom="{{ offsetBottom }}"{% endif %}
>
  <div class="affix_placeholder" aria-hidden="true" hidden></div>
  <div class="affix_target{% if resolvedSkin %} affix_{{ resolvedSkin }}{% endif %}">
    {{ affixContent | safe }}
  </div>
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call affix(skin='bar') %}<span class="affix_bar-label">고정 영역</span>{% endcall %}
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`/**
 * Affix 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useEffect, useMemo, useRef } from 'react';
import { initAffix } from '@uxkm/html/affix';

const skins = ['', 'bar', 'anchor'];

export function Affix({
  target, // 고정 기준이 되는 스크롤 컨테이너 선택자입니다.
  offsetTop = 0, // 상단 고정 오프셋(px)입니다.
  offsetBottom, // 하단 고정 오프셋(px)입니다.
  skin = '', // bar · anchor 스킨입니다.
  interactive = true, // 스크롤 고정을 활성화합니다.
  children, // 고정될 콘텐츠입니다.
  className = '', // affix 루트에 추가할 클래스입니다.
  style, // 루트 인라인 스타일입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null);
  const resolvedSkin = skins.includes(skin) ? skin : '';
  const targetClass = useMemo(
    () => ['affix_target', resolvedSkin && \`affix_\${resolvedSkin}\`].filter(Boolean).join(' '),
    [resolvedSkin],
  );
  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initAffix(rootRef.current);
  }, [interactive, offsetBottom, offsetTop, target]);
  return (
    <div
      {...props}
      ref={rootRef}
      className={['affix', className].filter(Boolean).join(' ')}
      style={style}
      data-component="Affix"
      data-affix={interactive ? '' : undefined}
      data-target={target || undefined}
      data-offset-top={Number(offsetTop) !== 0 ? offsetTop : undefined}
      data-offset-bottom={
        offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== ''
          ? offsetBottom
          : undefined
      }
    >
      <div className="affix_placeholder" aria-hidden="true" hidden />
      <div className={targetClass}>{children}</div>
    </div>
  );
}

export default Affix;
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`<!--
  Affix 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { initAffix } from '@uxkm/html/affix';

defineOptions({ name: 'UxkmAffix', inheritAttrs: false });
const props = defineProps({
  target: String, // 고정 기준 스크롤 컨테이너 선택자입니다.
  offsetTop: { type: [Number, String], default: 0 }, // 상단 고정 오프셋(px)입니다.
  offsetBottom: [Number, String], // 하단 고정 오프셋(px)입니다.
  skin: { type: String, default: '', validator: (value) => ['', 'bar', 'anchor'].includes(value) }, // bar · anchor 스킨입니다.
  interactive: { type: Boolean, default: true }, // 스크롤 고정을 활성화합니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
let cleanup = null;
const classes = computed(() => ['affix', attrs.class].filter(Boolean));
const targetClasses = computed(() =>
  ['affix_target', props.skin && \`affix_\${props.skin}\`].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const dataAttrs = computed(() => ({
  'data-affix': props.interactive ? '' : undefined,
  'data-target': props.target || undefined,
  'data-offset-top': Number(props.offsetTop) !== 0 ? String(props.offsetTop) : undefined,
  'data-offset-bottom':
    props.offsetBottom !== undefined && props.offsetBottom !== null && props.offsetBottom !== ''
      ? String(props.offsetBottom)
      : undefined,
}));
function init() {
  cleanup?.();
  cleanup = props.interactive && rootRef.value ? initAffix(rootRef.value) : null;
}
onMounted(init);
watch(() => [props.interactive, props.target, props.offsetTop, props.offsetBottom], init, {
  flush: 'post',
});
onBeforeUnmount(() => cleanup?.());
<\/script>

<template>
  <div
    ref="rootRef"
    v-bind="{ ...restAttrs, ...dataAttrs }"
    :class="classes"
    data-component="Affix"
  >
    <div class="affix_placeholder" aria-hidden="true" hidden />
    <div :class="targetClasses"><slot /></div>
  </div>
</template>
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`<!-- BackTop 원본 구현: 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다. -->
<div class="back_top_demo-wrap">
  <div id="back-top-scroll" class="back_top_demo-scroll">
    <div class="back_top_demo-content">
      <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
      <p>상품 설명 · 리뷰 · 배송 안내</p>
      <p>교환·반품 · 문의처</p>
    </div>
  </div>
  <div
    class="back_top back_top_primary"
    <!-- back_top 루트와 맨 위로 버튼을 둡니다. -->
data-component="BackTop"
    data-back-top
    data-target="#back-top-scroll"
    data-visibility-height="80"
  >
    <button
      type="button"
      class="btn btn_ghost <!-- 클릭 시 스크롤을 올리는 트리거 버튼입니다. -->
back_top_btn"
      aria-label="맨 위로"
      data-ripple="surface"
    >
      <svg
        class="back_top_icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  </div>
</div>
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`{# BackTop 원본 구현: 상단 이동 제어를 Button·Icon 컴포넌트로 구성합니다. #}
{% import "components/basic/Button/button.njk" as Button %}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro backTop(target='', visibilityHeight=400, size='md', color='', label='', ariaLabel='맨 위로', interactive=true, className='') %}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
{%- set resolvedColor = color if color in ['primary', 'ghost'] else '' -%}
{% set backTopIcon %}
  {% call Icon.icon(className='back_top_icon') %}<path d="m6 15 6-6 6 6" />{% endcall %}
{% endset %}
<div
  class="back_top{% if resolvedSize != 'md' %} back_top_{{ resolvedSize }}{% endif %}{% if resolvedColor %} back_top_{{ resolvedColor }}{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="BackTop"
  {% if interactive %}data-back-top{% endif %}
  {% if target %}data-target="{{ target }}"{% endif %}
  {% if visibilityHeight != 400 %}data-visibility-height="{{ visibilityHeight }}"{% endif %}
>
  {{ Button.button(
    variant='ghost', color='default', label=label,
    iconOnly=(not label), iconBeforeSlot=backTopIcon,
    ripple='surface', ariaLabel=ariaLabel,
    labelClassName='back_top_label',
    className='back_top_btn'
  ) }}
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ backTop(interactive=false) }}
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`/**
 * BackTop 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { initBackTop } from '@uxkm/html/back-top';

const arrow = (
  <svg
    className="back_top_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);
export function BackTop({
  target, // 스크롤을 올릴 컨테이너 선택자입니다. 없으면 body 포털입니다.
  visibilityHeight = 400, // 버튼이 나타나기 시작하는 스크롤 높이입니다.
  size = 'md', // sm · md · lg 크기입니다.
  color = '', // primary · ghost 색상 변형입니다.
  label, // 아이콘 아래 표시할 텍스트입니다.
  ariaLabel = '맨 위로', // 버튼의 접근성 이름입니다.
  interactive = true, // 스크롤 감지·이동을 활성화합니다.
  ripple = true, // 버튼 리플 효과입니다.
  children, // 기본 화살표·label 대신 쓸 커스텀 콘텐츠입니다.
  className = '', // 루트에 추가할 클래스입니다.
  style, // 루트 인라인 스타일입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null);
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const resolvedColor = ['', 'primary', 'ghost'].includes(color) ? color : '';
  const classes = useMemo(
    () =>
      [
        'back_top',
        resolvedSize !== 'md' && \`back_top_\${resolvedSize}\`,
        resolvedColor && \`back_top_\${resolvedColor}\`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [className, resolvedColor, resolvedSize],
  );
  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initBackTop(rootRef.current);
  }, [interactive, target, visibilityHeight]);
  const node = (
    <div
      {...props}
      ref={rootRef}
      className={classes}
      style={style}
      data-component="BackTop"
      data-back-top={interactive ? '' : undefined}
      data-target={target || undefined}
      data-visibility-height={Number(visibilityHeight) !== 400 ? visibilityHeight : undefined}
    >
      <button
        type="button"
        className="btn btn_ghost back_top_btn"
        aria-label={ariaLabel}
        data-ripple={ripple ? 'surface' : 'false'}
      >
        {children ?? (
          <>
            {arrow}
            {label ? <span className="back_top_label">{label}</span> : null}
          </>
        )}
      </button>
    </div>
  );
  return !target && typeof document !== 'undefined' ? createPortal(node, document.body) : node;
}
export default BackTop;
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`<!--
  BackTop 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { initBackTop } from '@uxkm/html/back-top';
defineOptions({ name: 'UxkmBackTop', inheritAttrs: false });
const props = defineProps({
  target: String, // 스크롤 대상 컨테이너 선택자입니다.
  visibilityHeight: { type: [Number, String], default: 400 }, // 버튼이 나타나기 시작하는 스크롤 높이입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  color: { type: String, default: '' }, // primary · ghost 색상 변형입니다.
  label: String, // 아이콘 아래 텍스트입니다.
  ariaLabel: { type: String, default: '맨 위로' }, // 버튼 접근성 이름입니다.
  interactive: { type: Boolean, default: true }, // 스크롤 감지·이동을 활성화합니다.
  ripple: { type: Boolean, default: true }, // 버튼 리플 효과입니다.
});
const attrs = useAttrs();
const rootRef = ref(null);
let cleanup = null;
const classes = computed(() =>
  [
    'back_top',
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && \`back_top_\${props.size}\`,
    ['primary', 'ghost'].includes(props.color) && \`back_top_\${props.color}\`,
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
function init() {
  cleanup?.();
  cleanup = props.interactive && rootRef.value ? initBackTop(rootRef.value) : null;
}
onMounted(init);
watch(() => [props.interactive, props.target, props.visibilityHeight], init, { flush: 'post' });
onBeforeUnmount(() => cleanup?.());
<\/script>
<template>
  <Teleport to="body" :disabled="Boolean(target)">
    <div
      ref="rootRef"
      v-bind="restAttrs"
      :class="classes"
      data-component="BackTop"
      :data-back-top="interactive ? '' : undefined"
      :data-target="target || undefined"
      :data-visibility-height="Number(visibilityHeight) !== 400 ? visibilityHeight : undefined"
    >
      <button
        type="button"
        class="btn btn_ghost back_top_btn"
        :aria-label="ariaLabel"
        :data-ripple="ripple ? 'surface' : 'false'"
      >
        <slot
          ><svg
            class="back_top_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="m6 15 6-6 6 6" /></svg
          ><span v-if="label" class="back_top_label">{{ label }}</span></slot
        >
      </button>
    </div>
  </Teleport>
</template>
`})))()}function Y(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/miscellaneous/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/miscellaneous/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/miscellaneous/${e}/${e}*.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}*.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/miscellaneous/${e}/${e}*.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}*.jsx`,code:n.react}]}function X(e,t,n){return Object.fromEntries(Object.entries(t).map(([t,r])=>[t,[...r,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · ${e} · ${t}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${n(t)}`}]]))}function Ot(e,t,n,r={}){let i=!!r.open,a=r.disabled?` disabled="true"`:``;return`<w2:group id="${e}" class="accordion_item${i?` is-open`:``}">
  <w2:group id="${e}Heading" class="accordion_heading" role="heading" aria-level="3">
    <xf:trigger id="${e}Trigger" type="button" class="btn btn_text accordion_trigger" aria-expanded="${i}" aria-controls="${e}Panel"${a} ev:onclick="scwin.accordion_toggle">
      <xf:label><![CDATA[${t}]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:group id="${e}Panel" class="accordion_panel" role="region" aria-labelledby="${e}Trigger"${i?``:` style="display:none;"`}>
    <w2:textbox id="${e}Content" class="accordion_content" tagname="p" label="${n}"></w2:textbox>
  </w2:group>
</w2:group>`}function kt(e){return`<w2:group id="accordion${e}" class="${{basic:`accordion accordion_card`,multiple:`accordion accordion_card`,flush:`accordion accordion_flush`,bordered:`accordion accordion_bordered`,extra:`accordion accordion_card`,custom:`accordion accordion_card`,disabled:`accordion accordion_card`,size:`accordion accordion_card accordion_sm`,slide:`accordion accordion_card`}[e]??`accordion accordion_card`}" data-accordion-multiple="${e===`multiple`}">
  ${Ot(`acc${e}1`,`배송은 얼마나 걸리나요?`,`평일 기준 2~3일 이내 출고됩니다.`,{open:!0}).replaceAll(`
`,`
  `)}
  ${Ot(`acc${e}2`,`교환·반품은 어떻게 하나요?`,`수령 후 7일 이내 신청할 수 있습니다.`,{disabled:e===`disabled`}).replaceAll(`
`,`
  `)}
</w2:group>`}function At(e,t,n,r={}){let i=!!r.open,a=r.disabled?` disabled="true"`:``;return`<w2:group id="${e}" class="collapse_panel${i?` is-open`:``}">
  <w2:group id="${e}Header" class="collapse_header">
    <xf:trigger id="${e}Trigger" type="button" class="btn btn_text collapse_trigger" aria-expanded="${i}" aria-controls="${e}Body"${a} ev:onclick="scwin.collapse_toggle">
      <xf:label><![CDATA[${t}]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:group id="${e}Body" class="collapse_body" role="region" aria-labelledby="${e}Trigger"${i?``:` style="display:none;"`}>
    <w2:textbox id="${e}Content" class="collapse_content" tagname="p" label="${n}"></w2:textbox>
  </w2:group>
</w2:group>`}function jt(e){return e===`standalone`?`<w2:group id="collapseStandalone">
  <xf:trigger id="collapseStandaloneTrigger" type="button" class="btn btn_outline" aria-expanded="false" aria-controls="collapseStandaloneBody" ev:onclick="scwin.collapse_external_toggle">
    <xf:label><![CDATA[상세 정보 보기]]></xf:label>
  </xf:trigger>
  <w2:group id="collapseStandaloneBody" class="collapse_external-body" style="display:none;">
    <w2:textbox id="collapseStandaloneText" tagname="p" label="외부 트리거로 제어하는 접힘 영역입니다."></w2:textbox>
  </w2:group>
</w2:group>`:`<w2:group id="collapse${e}" class="${{basic:`collapse_group collapse_bordered`,accordion:`collapse_group collapse_bordered`,skin:`collapse_group collapse_ghost`,extra:`collapse_group collapse_bordered`,disabled:`collapse_group collapse_bordered`,size:`collapse_group collapse_bordered collapse_sm`,slide:`collapse_group collapse_bordered`}[e]??`collapse_group collapse_bordered`}" data-collapse-accordion="${e===`accordion`}">
  ${At(`col${e}1`,`배송 정보`,`평일 기준 2~3일 이내 출고됩니다.`,{open:!0}).replaceAll(`
`,`
  `)}
  ${At(`col${e}2`,`결제 안내`,`카드·계좌이체를 지원합니다.`,{disabled:e===`disabled`}).replaceAll(`
`,`
  `)}
</w2:group>`}function Mt(e){let t={default:``,fade:` data-swiper-effect="fade"`,autoplay:` data-swiper-autoplay="true"`,loop:` data-swiper-loop="true"`,multi:` data-swiper-slides-per-view="auto"`,space:` data-swiper-space-between="16"`,pagination:``,fraction:` data-swiper-pagination="fraction"`,progress:` data-swiper-pagination="progressbar"`,custom:` data-swiper-pagination="custom"`,grid:` data-swiper-grid-rows="2"`,coverflow:` data-swiper-effect="coverflow"`,coverflowRise:` data-swiper-effect="coverflow" data-swiper-coverflow-style="rise"`,thumbs:` data-swiper-thumbs="#carouselThumbs"`},n=(e,t)=>`<w2:group id="${e}" class="swiper-slide">
  <w2:textbox id="${e}Title" class="card_title" label="${t}"></w2:textbox>
</w2:group>`;return`<w2:group id="carousel${e}" class="carousel" role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드"${t[e]??``}>
  <w2:group id="carousel${e}Wrapper" class="swiper-wrapper">
    ${n(`carousel${e}1`,`슬라이드 1`).replaceAll(`
`,`
    `)}
    ${n(`carousel${e}2`,`슬라이드 2`).replaceAll(`
`,`
    `)}
    ${n(`carousel${e}3`,`슬라이드 3`).replaceAll(`
`,`
    `)}
  </w2:group>
  <xf:trigger id="carousel${e}Prev" type="button" class="carousel_nav carousel_prev" aria-label="이전 슬라이드" ev:onclick="scwin.carousel_prev">
    <xf:label><![CDATA[이전]]></xf:label>
  </xf:trigger>
  <xf:trigger id="carousel${e}Next" type="button" class="carousel_nav carousel_next" aria-label="다음 슬라이드" ev:onclick="scwin.carousel_next">
    <xf:label><![CDATA[다음]]></xf:label>
  </xf:trigger>
</w2:group>`}function Nt(e){let t=e===`offset`?`64`:`0`,n=e===`bottom`?`16`:``,r=e===`anchor`?` affix_anchor`:e===`bottom`||e===`basic`?` affix_bar`:``;return`<w2:group id="affixScroll${e}" class="affix_demo-scroll">
  <w2:group id="affix${e}" class="affix" data-affix="true" data-target="${e===`window`?`window`:`#affixScroll${e}`}" data-offset-top="${t}"${n?` data-offset-bottom="${n}"`:``}>
    <w2:group id="affix${e}Target" class="affix_target${r}"${e===`anchor`?` tagname="nav" aria-label="섹션 바로가기"`:``}>
      <w2:textbox id="affix${e}Label" class="affix_bar-label" label="${e===`anchor`?`섹션`:`고정 액션 바`}"></w2:textbox>
      <xf:trigger id="affix${e}Action" type="button" class="btn btn_filled btn_sm color_primary">
        <xf:label><![CDATA[확인]]></xf:label>
      </xf:trigger>
    </w2:group>
  </w2:group>
</w2:group>`}function Pt(e){return`<w2:group id="backTopWrap${e}" class="back_top_demo-wrap">
  <w2:group id="backTopScroll" class="back_top_demo-scroll"></w2:group>
  <w2:group id="backTop${e}" class="back_top back_top_primary${e===`size`?` back_top_sm`:``}" data-back-top="true" data-target="${e===`window`?`window`:`#backTopScroll`}" data-visibility-height="${e===`visibility`?`200`:`80`}">
    <xf:trigger id="backTop${e}Btn" type="button" class="btn btn_ghost back_top_btn" aria-label="맨 위로" ev:onclick="scwin.back_top_scroll">
      <xf:label><![CDATA[${e===`custom`?`맨 위로`:`↑`}]]></xf:label>
    </xf:trigger>
  </w2:group>
</w2:group>`}var Z,Q,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut;function $(){return($=e((()=>{g(),ie(),W(),_e(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),Z=(...e)=>e.join(`

`),Q=Y(`Accordion`,`accordion`,{html:Ee,gulp:Oe,react:Z(Ae,`<!-- AccordionItem.jsx -->\n${Me}`),vue:Z(Pe,`<!-- AccordionItem.vue -->\n${Ie}`)}),Ft=Y(`Collapse`,`collapse`,{html:Re,gulp:Be,react:Z(He,`<!-- CollapsePanel.jsx -->\n${We}`,`<!-- CollapseExternal.jsx -->\n${Ke}`),vue:Z(Je,`<!-- CollapsePanel.vue -->\n${Xe}`,`<!-- CollapseExternal.vue -->\n${Qe}`)}),It=Y(`Carousel`,`carousel`,{html:et,gulp:nt,react:Z(it,`<!-- CarouselSlide.jsx -->\n${ot}`),vue:Z(ct,`<!-- CarouselSlide.vue -->\n${ut}`)}),Lt=Y(`Affix`,`affix`,{html:ft,gulp:mt,react:gt,vue:vt}),Rt=Y(`BackTop`,`back-top`,{html:bt,gulp:St,react:wt,vue:Et}),zt=X(`Accordion`,h,kt),Bt=X(`Collapse`,re,jt),Vt=X(`Carousel`,U,Mt),Ht=X(`Affix`,ge,Nt),Ut=X(`BackTop`,we,Pt)})))()}export{Rt as a,Vt as c,$ as d,Ht as i,Ft as l,zt as n,Ut as o,Lt as r,It as s,Q as t,Bt as u};