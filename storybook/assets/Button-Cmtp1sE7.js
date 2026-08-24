import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as ee,u as _,v}from"./Button.stories-BbceLs7E.js";import{i as y,r as b}from"./react-DSvVgjCn.js";import{c as x,r as S,u as C}from"./blocks-CkHyEh4O.js";import{i as w,n as T,r as E,t as te}from"./ComponentApiDocs-D9Q6nkXJ.js";function D(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function O(e){return`<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
${(I[e]??I.plus).replace(/></g,`>
<`).split(`
`).map(e=>`  ${e}`).join(`
`)}
</svg>`}function k(e){let t=D(e),n=String(t.variant??`filled`),r=String(t.color??`primary`),i=[`btn`,`btn_${n}`];n!==`ghost`&&i.push(`color_${r}`);for(let[e,n]of[[`size`,`btn_${t.size}`],[`select-text`,`btn_select-text`],[`placeholder`,`btn_select-placeholder`],[`round`,`btn_round`],[`vertical`,`btn_vertical`],[`icon-only`,`btn_icon-only`],[`block`,`btn_block`],[`grow`,t.grow===`2`?`btn_grow-2`:`btn_grow`],[`fit`,`btn_fit`],[`aria-disabled`,`is-disabled`],[`loading`,`is-loading`],[`open`,`is-open`],[`error`,`is-error`]])t[e]&&i.push(n);let a=String(t.tag??`button`),o=t[`icon-only`]?``:`<span class="btn_label">${String(t.label??``)}</span>`,s=t[`icon-before`]?O(String(t[`icon-before`])):``,c=t[`icon-after`]?O(String(t[`icon-after`])):``,l=t.loading?`<span class="btn_spinner" aria-hidden="true"></span>`:``,u=n===`select`?O(`chevron`):``,d=!!(t.disabled||t[`aria-disabled`]||t.loading),f=a===`div`||a===`a`&&!t.href;return`<${a} ${[`class="${i.join(` `)}"`,`data-ripple="true"`,a===`button`?`type="button"`:``,t.href?`href="${t.href}"`:``,t.role?`role="${t.role}"`:f?`role="button"`:``,f?`tabindex="${d?-1:0}"`:``,t[`aria-label`]?`aria-label="${t[`aria-label`]}"`:``,t.haspopup?`aria-haspopup="${t.haspopup}"`:``,t.open?`aria-expanded="true"`:``,t.error||t.invalid?`aria-invalid="true"`:``,t.loading?`aria-busy="true"`:``,t[`aria-disabled`]||a!==`button`&&t.disabled?`aria-disabled="true"`:``,a===`button`&&t.disabled?`disabled`:``].filter(Boolean).join(` `)}>
${[l,s,o,c,u].filter(Boolean).flatMap(e=>e.split(`
`)).map(e=>`  ${e}`).join(`
`)}
</${a}>`}function A(e){return e.replace(/^([ \t]*)<Button\s+([^>]*?)\s*\/>/gm,(e,t,n)=>k(n).split(`
`).map(e=>`${t}${e}`).join(`
`))}function j(e){return e.replace(/class=/g,`className=`).replace(/([\w-]+)="([^"]*)"/g,(e,t,n)=>t===`icon-before`?`iconBefore={<Icon name="${n}" />}`:t===`icon-after`?`iconAfter={<Icon name="${n}" />}`:t===`aria-label`?`ariaLabel="${n}"`:`${t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}="${n}"`).replace(/\b(icon-only|select-text|aria-disabled)\b/g,e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()))}function M(e){return e.replace(/<Button\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=D(t),r=n[`icon-before`],i=n[`icon-after`],a=Object.entries(n).filter(([e])=>e!==`icon-before`&&e!==`icon-after`).map(([e,t])=>t===!0||F.has(e)&&t===`true`?e:`${e}="${t}"`).join(` `);return!r&&!i?`<Button ${a} />`:[`<Button ${a}>`,r?`  <template #icon-before><Icon name="${r}" /></template>`:``,i?`  <template #icon-after><Icon name="${i}" /></template>`:``,`</Button>`].filter(Boolean).join(`
`)})}function N(e){let t=P[e],n=A(t),r=M(t),i=j(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Button/Button.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Button/button.njk · ${e}`,code:`{# Button · ${e} #}\n${n}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${e}`,code:`${L}\n\n<template>\n${r.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${e}`,code:`${L}\n\n<template>\n${r.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${e}`,code:`import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${i.split(`
`).map(e=>`      ${e}`).join(`
`)}\n    </>\n  );\n}`},{id:`next`,label:`Next`,fileName:`@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${e}`,code:`import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${i.split(`
`).map(e=>`      ${e}`).join(`
`)}\n    </>\n  );\n}`}]}var P,F,I,L,R;function z(){return(z=e((()=>{P={basic:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="Filled Primary" />
  <Button variant="filled" color="default" label="Filled Default" />
  <Button variant="outline" color="primary" label="Outline" />
  <Button variant="ghost" label="Ghost" />
  <Button variant="text" color="primary" label="Text" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="text" color="muted" label="Text Muted" />
  <Button variant="text" color="danger" label="Text Danger" />
</div>`,select:`<div class="btn_row btn_row-wrap">
  <Button variant="select" label="서울특별시" haspopup="listbox" />
  <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
  <Button variant="select" open label="카테고리" haspopup="listbox" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="select" size="sm" label="Small" />
  <Button variant="select" label="Medium" />
  <Button variant="select" size="lg" label="Large" />
  <Button variant="select" disabled label="비활성" />
  <Button variant="select" error invalid label="필수 선택" />
</div>
<Button variant="select" block label="전체 너비 셀렉트 트리거" />
<div class="btn_row btn_row-wrap">
  <Button variant="select" select-text label="최신순" />
  <Button variant="select" select-text placeholder label="정렬 기준" />
  <Button variant="select" select-text open label="필터" />
  <Button variant="select" select-text size="sm" label="Small" />
  <Button variant="select" select-text disabled label="비활성" />
</div>`,text:`<div class="btn_row btn_row-wrap">
  <Button variant="text" color="primary" label="Primary" />
  <Button variant="text" color="muted" label="Muted" />
  <Button variant="text" color="danger" label="Danger" />
  <Button variant="text" color="success" label="Success" />
  <Button variant="text" color="warning" label="Warning" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" color="danger" label="삭제" icon-before="trash" />
  <Button variant="text" color="success" label="완료" icon-before="check" />
  <Button variant="text" color="warning" label="주의" icon-after="warning" />
  <Button variant="text" color="muted" label="자세히" icon-after="chevron" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="더 보기" />
  <Button variant="text" label="링크 복사" />
  <Button variant="text" label="취소" />
  <Button variant="text" label="건너뛰기" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="추가" icon-before="plus" />
  <Button variant="text" label="다운로드" icon-before="download" />
  <Button variant="text" label="링크 열기" icon-before="external" />
  <Button variant="text" label="설정" icon-before="settings" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="다음" icon-after="chevron" />
  <Button variant="text" label="전체 보기" icon-after="chevron" />
  <Button variant="text" label="삭제" icon-after="trash" />
  <Button variant="text" label="새로고침" icon-after="refresh" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" size="sm" label="Small" />
  <Button variant="text" label="Medium" />
  <Button variant="text" size="lg" label="Large" />
  <Button variant="text" size="sm" label="추가" icon-before="plus" />
  <Button variant="text" size="lg" label="다음" icon-after="chevron" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" icon-only aria-label="검색" icon-before="search" />
  <Button variant="text" icon-only aria-label="편집" icon-before="edit" />
  <Button variant="text" icon-only size="sm" aria-label="닫기" icon-before="close" />
  <Button variant="text" disabled label="비활성" />
  <Button variant="text" aria-disabled label="is-disabled" icon-after="chevron" />
</div>
<Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />`,iconText:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="추가" icon-before="plus" />
  <Button variant="filled" color="default" label="다운로드" icon-before="download" />
  <Button variant="outline" color="primary" label="새 항목" icon-before="plus" />
</div>`,vertical:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" vertical label="홈" icon-before="home" />
  <Button variant="filled" color="default" vertical label="검색" icon-before="search" />
  <Button variant="ghost" vertical label="마이" icon-before="user" />
  <Button variant="text" color="primary" vertical label="추가" icon-before="plus" />
  <Button variant="outline" color="primary" vertical label="다운로드" icon-before="download" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" vertical size="sm" label="추가" icon-before="plus" />
  <Button variant="filled" color="primary" vertical label="추가" icon-before="plus" />
  <Button variant="filled" color="primary" vertical size="lg" label="추가" icon-before="plus" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" vertical round label="가이드" icon-before="book" />
  <Button variant="filled" color="primary" vertical round label="즐겨찾기" icon-before="star" />
  <Button variant="ghost" vertical disabled label="삭제" icon-before="trash" />
  <Button variant="filled" color="primary" vertical loading label="저장 중" />
</div>`,verticalEqual:`<div class="btn_row-equal">
  <Button variant="text" color="primary" vertical label="홈" icon-before="home" />
  <Button variant="text" color="primary" vertical label="카테고리" icon-before="grid" />
  <Button variant="filled" color="primary" vertical label="장바구니" icon-before="cart" />
  <Button variant="text" color="primary" vertical label="마이" icon-before="user" />
</div>`,textIcon:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="다음" icon-after="chevron" />
  <Button variant="filled" color="default" label="자세히 보기" icon-after="external" />
  <Button variant="text" color="primary" label="링크 이동" icon-after="chevron" />
</div>`,iconOnly:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only aria-label="추가" icon-before="plus" />
  <Button variant="filled" color="default" icon-only aria-label="설정" icon-before="settings" />
  <Button variant="ghost" icon-only aria-label="검색" icon-before="search" />
  <Button variant="outline" color="primary" icon-only aria-label="편집" icon-before="edit" />
  <Button variant="filled" color="danger" icon-only aria-label="삭제" icon-before="trash" />
  <Button variant="filled" color="primary" icon-only disabled aria-label="추가" icon-before="plus" />
</div>`,iconSize:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)" icon-before="plus" />
  <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)" icon-before="download" />
  <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)" icon-before="download" />
  <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)" icon-before="download" />
</div>`,colors:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="outline" color="primary" label="Outline" />
</div>`,sizes:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" size="sm" label="Small" />
  <Button variant="filled" color="primary" label="Medium" />
  <Button variant="filled" color="primary" size="lg" label="Large" />
</div>`,round:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round label="Primary" />
  <Button variant="filled" color="default" round label="Default" />
  <Button variant="ghost" round label="Ghost" />
  <Button variant="outline" color="primary" round label="Outline" />
  <Button variant="filled" color="success" round label="Success" />
  <Button variant="filled" color="danger" round label="Danger" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round size="sm" label="Small" />
  <Button variant="filled" color="primary" round label="Medium" />
  <Button variant="filled" color="primary" round size="lg" label="Large" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round label="추가" icon-before="plus" />
  <Button variant="filled" color="default" round label="다음" icon-after="chevron" />
  <Button variant="text" color="primary" round label="더 보기" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round icon-only aria-label="추가" icon-before="plus" />
  <Button variant="filled" color="default" round icon-only aria-label="설정" icon-before="settings" />
  <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색" icon-before="search" />
  <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제" icon-before="trash" />
</div>
<div class="btn_group btn_group-round btn_group-fit">
  <Button variant="filled" color="default" label="일" />
  <Button variant="filled" color="default" label="주" />
  <Button variant="filled" color="primary" label="월" />
  <Button variant="filled" color="default" label="년" />
</div>`,width:`<Button variant="filled" color="primary" block label="전체 너비 버튼" />
<div class="btn_row-equal">
  <Button variant="filled" color="default" label="취소" />
  <Button variant="filled" color="primary" label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="취소" />
  <Button variant="filled" color="primary" grow label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="옵션 A" />
  <Button variant="filled" color="default" grow label="옵션 B" />
  <Button variant="filled" color="primary" grow label="옵션 C" />
</div>
<div class="btn_row btn_row-wrap btn_row-start">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" fit label="취소" />
  <Button variant="filled" color="primary" fit label="저장" />
</div>
<div class="btn_row btn_row-wrap btn_row-end">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" fit label="취소" />
  <Button variant="filled" color="primary" fit label="저장" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" grow label="임시 저장" />
  <Button variant="filled" color="primary" grow label="제출" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="본문 영역" />
  <Button variant="filled" color="primary" fit label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow="2" label="2배 너비" />
  <Button variant="filled" color="primary" grow label="1배 너비" />
</div>
<Button variant="filled" color="primary" block label="전체 너비 다운로드" icon-before="download" />`,states:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" disabled label="Primary" />
  <Button variant="filled" color="default" disabled label="Default" />
  <Button variant="outline" color="primary" disabled label="Outline" />
  <Button variant="ghost" disabled label="Ghost" />
  <Button variant="text" color="primary" disabled label="Text" />
  <Button variant="filled" color="danger" disabled label="Danger" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
  <Button variant="filled" color="default" aria-disabled label="is-disabled" />
  <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" loading label="저장 중" />
  <Button variant="filled" color="default" loading label="처리 중" />
  <Button variant="outline" color="primary" loading label="업로드 중" />
  <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
</div>
<Button variant="filled" color="primary" block loading label="전체 너비 로딩" />`,groups:`<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" size="sm" label="Left" />
  <Button variant="filled" color="default" size="sm" label="Middle" />
  <Button variant="filled" color="default" size="sm" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" size="lg" label="Left" />
  <Button variant="filled" color="default" size="lg" label="Middle" />
  <Button variant="filled" color="default" size="lg" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-center">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-end">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-block">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="primary" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-block">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="로그인" />
  <Button variant="filled" color="default" block label="회원가입" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="결제하기" />
  <Button variant="text" color="primary" label="쿠폰 적용" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="다운로드" icon-before="download" />
  <p class="btn_stack-text">최신 버전 v2.0 · <a href="#release">릴리스 노트</a></p>
</div>`,tags:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="button" />
  <Button tag="a" href="#" variant="outline" color="primary" label="a + href" />
  <Button tag="div" variant="ghost" label="div → role=button" />
  <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
</div>`},F=new Set([`round`,`vertical`,`icon-only`,`block`,`grow`,`fit`,`disabled`,`loading`,`open`,`error`,`invalid`,`placeholder`,`select-text`,`aria-disabled`]),I={plus:`<path d="M12 5v14M5 12h14"></path>`,download:`<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>`,trash:`<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6"></path>`,check:`<path d="m5 12 4 4L19 6"></path>`,warning:`<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>`,chevron:`<path d="m9 6 6 6-6 6"></path>`,search:`<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>`,edit:`<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path><path d="m13.5 6.5 4 4"></path>`,close:`<path d="m6 6 12 12M18 6 6 18"></path>`,settings:`<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z"></path>`,home:`<path d="m3 11 9-8 9 8"></path><path d="M5 10v11h14V10M10 21v-7h4v7"></path>`,user:`<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>`,grid:`<rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect>`,cart:`<path d="M3 4h2l2 11h10l3-8H6"></path><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle>`,star:`<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>`,external:`<path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v7H4V6h7"></path>`,refresh:`<path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2 5"></path>`,book:`<path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z"></path><path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z"></path>`},L=`<script setup>
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
<\/script>`,R=Object.fromEntries(Object.keys(P).map(e=>[e,N(e)]))})))()}var B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{B=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],V=[{name:`variant`,type:`'filled' | 'outline' | 'ghost' | 'text' | 'select'`,default:`filled`,description:`버튼 스킨. select는 셀렉트 박스형 트리거입니다.`},{name:`color`,type:`'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'`,default:`primary`,description:`색상 변형. text 스킨에서는 텍스트 톤으로 사용합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`버튼 크기입니다.`},{name:`label`,type:`string`,default:`Button`,description:`버튼 텍스트. children 또는 default 슬롯이 있으면 해당 콘텐츠가 우선합니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`클릭 위치에서 시작하는 파장 효과를 활성화합니다. false이면 data-ripple="false"를 렌더링합니다.`},{name:`round`,type:`boolean`,default:`false`,description:`pill(캡슐) 형태의 모서리를 적용합니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`아이콘 위·텍스트 아래의 세로 배치를 적용합니다.`},{name:`iconOnly`,vueName:`icon-only`,type:`boolean`,default:`false`,description:`아이콘만 표시합니다. aria-label을 함께 지정해야 합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100%로 확장합니다.`},{name:`grow`,type:`boolean | '2'`,default:`false`,description:`flex 비율로 분배합니다. 2는 다른 grow 버튼의 두 배 너비입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비를 유지합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`네이티브 disabled를 적용하거나 비활성 상호작용을 차단합니다.`},{name:`ariaDisabled`,vueName:`aria-disabled`,type:`boolean`,default:`false`,description:`is-disabled와 aria-disabled를 적용하고 상호작용을 차단합니다.`},{name:`loading`,type:`boolean`,default:`false`,description:`스피너와 aria-busy를 표시하고 중복 상호작용을 차단합니다.`},{name:`open`,type:`boolean`,default:`false`,description:`셀렉트·팝오버 트리거의 열림 상태를 표시합니다.`},{name:`error`,type:`boolean`,default:`false`,description:`오류 상태 클래스와 aria-invalid를 적용합니다.`},{name:`placeholder`,type:`boolean`,default:`false`,description:`셀렉트 미선택 placeholder 스타일을 적용합니다.`},{name:`selectText`,vueName:`select-text`,type:`boolean`,default:`false`,description:`배경과 테두리가 없는 셀렉트 텍스트 형태를 사용합니다.`},{name:`selectCaret`,vueName:`select-caret`,type:`boolean`,default:`false`,description:`select 이외의 스킨에도 드롭다운 캐럿을 표시합니다.`},{name:`type`,type:`'button' | 'submit' | 'reset'`,default:`button`,description:`button 루트의 네이티브 type 속성입니다.`},{name:`tag`,type:`'button' | 'a' | 'div'`,default:`button`,description:`렌더링할 루트 HTML 태그입니다.`},{name:`href`,type:`string`,default:`—`,description:`tag가 a일 때 사용할 링크 주소입니다.`},{name:`role`,type:`string`,default:`자동`,description:`루트의 접근성 역할. href 없는 a와 div에는 button이 자동 적용됩니다.`},{name:`tabIndex`,vueName:`tabindex`,type:`number | string`,default:`자동`,description:`수동 Tab 순서. 비활성인 비-button 루트에는 -1이 적용됩니다.`},{name:`ariaLabel`,vueName:`aria-label`,type:`string`,default:`—`,description:`접근성 라벨. iconOnly 사용 시 필수입니다.`},{name:`haspopup`,type:`boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,default:`—`,description:`aria-haspopup으로 전달할 팝업 유형입니다.`},{name:`expanded`,type:`boolean`,default:`open 값`,description:`aria-expanded를 직접 지정합니다. 생략하면 open 값을 사용합니다.`},{name:`invalid`,type:`boolean`,default:`false`,description:`폼 오류의 aria-invalid를 적용합니다.`}],H=[...V.map(({vueName:e,...t})=>t),{name:`children`,type:`ReactNode`,default:`—`,description:`label을 대체하는 콘텐츠. iconOnly일 때 아이콘 콘텐츠로도 사용합니다.`},{name:`iconBefore`,type:`ReactNode`,default:`—`,description:`텍스트 앞에 렌더링할 아이콘입니다.`},{name:`iconAfter`,type:`ReactNode`,default:`—`,description:`텍스트 뒤에 렌더링할 아이콘입니다.`},{name:`className`,type:`string`,default:`''`,description:`루트 요소에 추가할 클래스 이름입니다.`},{name:`onClick`,type:`(event) => void`,default:`—`,description:`활성 상태에서 전달되는 클릭 이벤트 핸들러입니다.`},{name:`onKeyDown`,type:`(event) => void`,default:`—`,description:`활성 상태에서 전달되는 키보드 이벤트 핸들러입니다.`}],U=V.map(({vueName:e,...t})=>({...t,name:e??t.name})),W=[{name:`default`,type:`slot`,default:`label`,description:`label을 대체하는 콘텐츠. icon-only일 때 아이콘 콘텐츠로도 사용합니다.`},{name:`icon-before`,type:`named slot`,default:`—`,description:`텍스트 앞에 렌더링할 아이콘입니다.`},{name:`icon-after`,type:`named slot`,default:`—`,description:`텍스트 뒤에 렌더링할 아이콘입니다.`}],G=[{name:`click`,type:`MouseEvent`,default:`—`,description:`활성 상태에서 발생합니다.`},{name:`keydown`,type:`KeyboardEvent`,default:`—`,description:`활성 상태에서 발생합니다. button 의미를 보완하는 루트에서는 Enter와 Space도 처리합니다.`}],K=[{name:`class`,type:`string`,default:`—`,description:`btn과 스킨·색상·크기·상태 클래스를 직접 조합합니다.`},{name:`data-ripple`,type:`'true' | 'false'`,default:`true 권장`,description:`클릭 파장 효과를 활성화하거나 비활성화합니다.`},{name:`data-no-ripple`,type:`boolean attribute`,default:`—`,description:`지정한 컨테이너 아래의 ripple 효과를 모두 비활성화합니다.`},{name:`type`,type:`'button' | 'submit' | 'reset'`,default:`button 권장`,description:`button 요소의 동작을 지정합니다.`},{name:`disabled`,type:`boolean attribute`,default:`—`,description:`button 요소를 네이티브 방식으로 비활성화합니다.`},{name:`href`,type:`URL`,default:`—`,description:`a 요소를 버튼 스타일 링크로 사용할 때 지정합니다.`},{name:`role`,type:`'button' | 'link'`,default:`네이티브 의미`,description:`div 또는 href 없는 a를 사용할 때 의미를 명시합니다.`},{name:`tabindex`,type:`number`,default:`네이티브 순서`,description:`비네이티브 인터랙션 요소의 키보드 포커스를 관리합니다.`},{name:`aria-label`,type:`string`,default:`—`,description:`아이콘만 있는 버튼의 접근 가능한 이름입니다.`},{name:`aria-disabled`,type:`'true' | 'false'`,default:`false`,description:`disabled를 사용할 수 없는 루트의 비활성 상태입니다. 이벤트 차단도 직접 구현해야 합니다.`},{name:`aria-busy`,type:`'true' | 'false'`,default:`false`,description:`로딩 처리 중임을 보조 기술에 전달합니다.`},{name:`aria-haspopup`,type:`'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,default:`—`,description:`버튼이 여는 팝업 유형입니다.`},{name:`aria-expanded`,type:`'true' | 'false'`,default:`—`,description:`팝업의 열림 상태입니다.`},{name:`aria-invalid`,type:`'true' | 'false'`,default:`false`,description:`폼 트리거의 오류 상태입니다.`}],q=[{name:`btn`,description:`루트 구조 클래스`},{name:`btn_filled · btn_outline · btn_ghost · btn_text`,description:`버튼 스킨`},{name:`btn_select · btn_select-text`,description:`셀렉트 박스형·텍스트형 트리거`},{name:`btn_sm · btn_lg`,description:`크기 변형`},{name:`btn_round · btn_vertical · btn_icon-only`,description:`모양과 콘텐츠 배치`},{name:`btn_block · btn_grow · btn_grow-2 · btn_fit`,description:`너비 레이아웃`},{name:`icon · btn_label · btn_spinner`,description:`내부 파트`},{name:`btn_row · btn_group · btn_stack`,description:`버튼 묶음 컨테이너`},{name:`is-disabled · is-loading · is-open · is-error`,description:`상태 클래스`},{name:`data-ripple · data-ripple="false" · data-no-ripple`,description:`클릭 파장 활성·개별 비활성·하위 전체 비활성`},{name:`color_primary · color_danger …`,description:`스킨과 조합하는 색상 유틸리티`}],J=[{name:`--btn-padding-y · --btn-padding-x · --btn-font-size`,default:`0.5rem · 1rem · var(--text-size-base)`,description:`기본(md) 패딩·타이포`},{name:`--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm`,default:`0.3rem · 0.75rem · var(--text-size-sm)`,description:`sm 크기`},{name:`--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg`,default:`0.65rem · 1.25rem · var(--text-size-lg)`,description:`lg 크기`},{name:`--btn-font-weight · --btn-line-height`,default:`600 · 1.4`,description:`타이포 두께·줄높이`},{name:`--btn-border-width · --btn-gap`,default:`1px · var(--space-sm)`,description:`테두리·내부 간격`},{name:`--btn-icon-size · --btn-icon-size-lg`,default:`1em · 1.25em`,description:`아이콘 크기`},{name:`--btn-icon-only-padding · --btn-icon-only-padding-sm · --btn-icon-only-padding-lg`,default:`0.5rem · 0.35rem · 0.65rem`,description:`아이콘 버튼 패딩`},{name:`--btn-vertical-min-width`,default:`4.5rem`,description:`세로 배치 최소 너비`},{name:`--btn-select-min-width · --btn-select-max-width`,default:`10rem · 320px`,description:`셀렉트 트리거 너비`},{name:`--btn-spinner-size · --btn-spinner-duration`,default:`1em · 0.6s`,description:`로딩 스피너`},{name:`--btn-group-overlap`,default:`-1px`,description:`그룹 버튼 테두리 겹침`}],Y=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/button`을 재사용합니다. React JSX에서는 camelCase prop과 children을 사용합니다.",tables:[{columns:B,rows:H}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/button`을 재사용합니다. Vue 템플릿에서는 복합어 prop을 kebab-case로 작성합니다.",tables:[{columns:B,rows:U}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:B,rows:W}]},{title:`Vue · Nuxt API · Events`,tables:[{columns:B,rows:G}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp 템플릿은 별도 Button props API를 제공하지 않습니다. 아래 네이티브 속성과 공통 OOCSS 클래스를 마크업에 직접 적용하고, 비네이티브 루트의 키보드·비활성 동작은 사용하는 쪽에서 구현합니다.`,tables:[{columns:B,rows:K}]},{title:`공통 API · 클래스`,description:`모든 프레임워크가 동일한 OOCSS 클래스 계약을 사용합니다.`,tables:[{columns:B,rows:q}]},{title:`공통 API · 디자인 토큰`,description:`모든 프레임워크에서 같은 CSS 변수로 Button 스타일을 조정합니다.`,tables:[{columns:B,rows:J}]}]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...y(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(x,{of:f}),`
`,(0,Q.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,Q.jsx)(t.p,{children:`클릭·키보드 입력으로 사용자 액션이나 링크 이동을 실행하는 컴포넌트입니다. 스킨·색상·크기·아이콘·상태를 props와 유틸리티 클래스로 조합합니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/button`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/button`}),`으로 제공합니다. Nuxt와 Next.js 예시는 같은 구현을 재사용하므로 코드 탭의 경로도 실제 공통 소스를 가리킵니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`기본-유형`,children:`기본 유형`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_filled`}),` · `,(0,Q.jsx)(t.code,{children:`btn_outline`}),` · `,(0,Q.jsx)(t.code,{children:`btn_ghost`}),` · `,(0,Q.jsx)(t.code,{children:`btn_text`}),` 네 가지 기본 스킨을 제공합니다.`]}),`
`,(0,Q.jsx)(S,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.basic}),`
`,(0,Q.jsx)(t.h2,{id:`셀렉트-박스형`,children:`셀렉트 박스형`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_select`}),` 클래스로 셀렉트 박스처럼 표시합니다. `,(0,Q.jsx)(t.code,{children:`btn_select-text`}),`는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 `,(0,Q.jsx)(t.code,{children:`aria-haspopup`}),`과 `,(0,Q.jsx)(t.code,{children:`aria-expanded`}),`를 지정합니다.`]}),`
`,(0,Q.jsx)(S,{of:_,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.select}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트-버튼`,children:`텍스트 버튼`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_text`}),` 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.`]}),`
`,(0,Q.jsx)(S,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.text}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트`,children:`아이콘 + 텍스트`}),`
`,(0,Q.jsxs)(t.p,{children:[`아이콘과 함께 사용하는 텍스트도 `,(0,Q.jsx)(t.code,{children:`btn_label`}),` 클래스로 감쌉니다.`]}),`
`,(0,Q.jsx)(S,{of:g,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.iconText}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트-세로`,children:`아이콘 + 텍스트 (세로)`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_vertical`}),` 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.`]}),`
`,(0,Q.jsx)(S,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.vertical}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트-세로--균등-배분`,children:`아이콘 + 텍스트 (세로) · 균등 배분`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_vertical`}),`과 `,(0,Q.jsx)(t.code,{children:`btn_row-equal`}),`을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.`]}),`
`,(0,Q.jsx)(S,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.verticalEqual}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트--아이콘`,children:`텍스트 + 아이콘`}),`
`,(0,Q.jsxs)(t.p,{children:[`텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 `,(0,Q.jsx)(t.code,{children:`btn_label`}),`로 감쌉니다.`]}),`
`,(0,Q.jsx)(S,{of:m,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.textIcon}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-버튼`,children:`아이콘 버튼`}),`
`,(0,Q.jsxs)(t.p,{children:[`텍스트 없이 아이콘만 표시합니다. `,(0,Q.jsx)(t.code,{children:`btn_icon-only`}),`와 함께 사용하며, 접근성을 위해 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 반드시 지정합니다.`]}),`
`,(0,Q.jsx)(S,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.iconOnly}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-버튼-크기`,children:`아이콘 버튼 크기`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_sm`}),`, medium, `,(0,Q.jsx)(t.code,{children:`btn_lg`}),` 세 가지 크기를 지원합니다.`]}),`
`,(0,Q.jsx)(S,{of:p,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.iconSize}),`
`,(0,Q.jsx)(t.h2,{id:`색상-변형`,children:`색상 변형`}),`
`,(0,Q.jsx)(t.p,{children:`상황에 맞는 색상 변형을 사용합니다.`}),`
`,(0,Q.jsx)(S,{of:h,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.colors}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 지원합니다.`}),`
`,(0,Q.jsx)(S,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`라운드`,children:`라운드`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_round`}),` 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. `,(0,Q.jsx)(t.code,{children:`btn_icon-only`}),`와 조합하면 원형 아이콘 버튼이 됩니다.`]}),`
`,(0,Q.jsx)(S,{of:u,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.round}),`
`,(0,Q.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,Q.jsxs)(t.p,{children:[`부모 영역 기준으로 너비를 조절합니다. `,(0,Q.jsx)(t.code,{children:`btn_block`}),`은 가로 전체, `,(0,Q.jsx)(t.code,{children:`btn_row-equal`}),`은 부모 100% 너비에서 버튼을 균등 분배, `,(0,Q.jsx)(t.code,{children:`btn_grow`}),`는 비율 분배, `,(0,Q.jsx)(t.code,{children:`btn_fit`}),`은 콘텐츠 너비를 유지합니다.`]}),`
`,(0,Q.jsx)(S,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.width}),`
`,(0,Q.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,Q.jsxs)(t.p,{children:[`disabled, `,(0,Q.jsx)(t.code,{children:`is-disabled`}),`, `,(0,Q.jsx)(t.code,{children:`is-loading`}),` 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.`]}),`
`,(0,Q.jsx)(S,{of:o,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.states}),`
`,(0,Q.jsx)(t.h2,{id:`버튼-그룹`,children:`버튼 그룹`}),`
`,(0,Q.jsxs)(t.p,{children:[`가로·세로 방향으로 버튼을 묶습니다. `,(0,Q.jsx)(t.code,{children:`btn_group-fit`}),`은 콘텐츠 크기 맞춤, `,(0,Q.jsx)(t.code,{children:`btn_group-block`}),`은 전체 너비 균등 분배, `,(0,Q.jsx)(t.code,{children:`btn_group-align-start`}),`·`,(0,Q.jsx)(t.code,{children:`center`}),`·`,(0,Q.jsx)(t.code,{children:`end`}),`로 그룹 정렬을 지정합니다.`]}),`
`,(0,Q.jsx)(S,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.groups}),`
`,(0,Q.jsx)(t.h2,{id:`루트-태그`,children:`루트 태그`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`tag`}),` prop으로 `,(0,Q.jsx)(t.code,{children:`button`}),` · `,(0,Q.jsx)(t.code,{children:`a`}),` · `,(0,Q.jsx)(t.code,{children:`div`}),`를 선택합니다. `,(0,Q.jsx)(t.code,{children:`div`}),`와 `,(0,Q.jsx)(t.code,{children:`href`}),` 없는 `,(0,Q.jsx)(t.code,{children:`a`}),`에는 키보드 접근을 위해 `,(0,Q.jsx)(t.code,{children:`role`}),`과 `,(0,Q.jsx)(t.code,{children:`tabindex=0`}),`을 자동 적용합니다.`]}),`
`,(0,Q.jsx)(S,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(E,{examples:R.tags}),`
`,(0,Q.jsx)(te,{sections:Y})]})}function ne(e={}){let{wrapper:t}={...y(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),b(),C(),w(),T(),z(),X(),v()})))()}$();export{ne as default};