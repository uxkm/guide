import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as ee,r as te,s as ne,t as re,u as ie}from"./Card.stories-CoUFpZ_g.js";import{i as d,r as ae}from"./react-pLZlIR__.js";import{c as oe,r as f,u as se}from"./blocks-B4JiLJlK.js";import{i as ce,n as le,r as p,t as ue}from"./ComponentApiDocs-DwOtyIDn.js";function m(e,t){return e.match(RegExp(`\\b${t}="([^"]*)"`))?.[1]??``}function h(e){return`'${e.replaceAll(`\\`,`\\\\`).replaceAll(`'`,`\\'`)}'`}function de(e,t,n){let r=[],i=new Set(n.filter(e=>e!==`card`)),a=e=>i.delete(e);a(`card_shadow`)?r.push(`variant='shadow'`):a(`card_elevated`)?r.push(`variant='elevated'`):a(`card_ghost`)?r.push(`variant='flat'`):a(`card_borderless`)&&r.push(`variant='borderless'`);for(let e of[`sm`,`lg`,`compact`])a(`card_${e}`)&&r.push(`size='${e}'`);a(`card_horizontal`)&&r.push(`horizontal=true`),a(`card_hover`)&&r.push(`hoverable=true`),a(`card_accent`)&&r.push(`accent=true`),a(`is-disabled`)&&r.push(`disabled=true`);let o=[...i].find(e=>e.startsWith(`color_`));o&&(i.delete(o),r.push(`color='${o.slice(6)}'`));let s=m(t,`href`),c=m(t,`role`),l=m(t,`tabindex`),u=m(t,`style`);return e===`a`&&!s&&r.push(`tag='a'`),s&&r.push(`href=${h(s)}`),c&&r.push(`role=${h(c)}`),l&&r.push(`tabIndex=${h(l)}`),u&&r.push(`style=${h(u)}`),(s||c===`link`||c===`button`)&&i.has(`card_clickable`)&&i.delete(`card_clickable`),i.size&&r.push(`className=${h([...i].join(` `))}`),r.join(`, `)}function fe(e,t=``){let n=[],r=new Set(m(e,`class`).split(/\s+/).filter(Boolean));r.delete(`btn`);let i=[`filled`,`outline`,`ghost`,`text`,`select`].find(e=>r.delete(`btn_${e}`)),a=[...r].find(e=>e.startsWith(`color_`)),o=[`sm`,`lg`].find(e=>r.delete(`btn_${e}`));i&&n.push(`variant='${i}'`),a&&(r.delete(a),n.push(`color='${a.slice(6)}'`)),o&&n.push(`size='${o}'`);for(let[e,t]of Object.entries({"btn_icon-only":`iconOnly`,btn_round:`round`,btn_block:`block`,btn_fit:`fit`}))r.delete(e)&&n.push(`${t}=true`);let s=m(e,`aria-label`);return s&&n.push(`ariaLabel=${h(s)}`),/\bdisabled(?:\s|$)/.test(e)&&n.push(`disabled=true`),r.size&&n.push(`className=${h([...r].join(` `))}`),t&&n.push(`label=${h(t)}`),n.join(`, `)}function pe(e){return e.replace(/<button\b([^>]*)>\s*<span class="btn_label">([^<]*)<\/span>\s*<\/button>/g,(e,t,n)=>`{{ button(${fe(t,n)}) }}`).replace(/<button\b([^>]*)>([\s\S]*?)<\/button>/g,(e,t,n)=>{let r=fe(t);return/<circle cx="12" cy="12" r="1"\/>/.test(n)&&/<circle cx="19" cy="12" r="1"\/>/.test(n)?`{{ button(${r}${r?`, `:``}iconBefore='more') }}`:`{% call button(${r}) %}${n.trim()}{% endcall %}`})}function g(e,t){let n=/<\/?div\b[^>]*>/g;n.lastIndex=t;let r=0,i;for(;i=n.exec(e);)if(r+=i[0].startsWith(`</div`)?-1:1,r===0)return n.lastIndex;return-1}function me(e){let t=e.indexOf(`<div class="card_header">`);if(t<0)return e;let n=g(e,t);if(n<0)return e;let r=e.slice(t,n);if(!r.includes(`class="avatar `))return e;let i=r.indexOf(`<div class="card_header-main">`),a=g(r,i),o=r.indexOf(`<div class="card_extra">`,a),s=g(r,o);if(i<0||a<0||o<0||s<0)return e;let c=r.slice(i+30,a-6),l=`{% set cardHeaderExtra %}${r.slice(o+24,s-6)}{% endset %}{% call cardHeader(extra=cardHeaderExtra) %}${c}{% endcall %}`;return e.slice(0,t)+l+e.slice(n)}function he(e){return e.replace(/<span class="avatar(?:\s+color_(\w+))?"(?:\s+aria-hidden="true")?>([^<]*)<\/span>/g,(e,t,n)=>`{{ avatar(${t?`color='${t}', `:``}initials=${h(n)}, ariaHidden=true) }}`).replace(/<span class="tag(?:\s+tag_(sm|lg))?(?:\s+color_(\w+))?">([^<]*)<\/span>/g,(e,t,n,r)=>`{{ tag(${[t?`size='${t}'`:``,n?`color='${n}'`:``,`label=${h(r)}`].filter(Boolean).join(`, `)}) }}`)}function ge(e){let t=e.replace(/\s*(\{%\s*call\b[^%]*%\})\s*/g,`
$1
`).replace(/\s*(\{%\s*endcall\s*%\})\s*/g,`
$1
`).replace(/\s*(\{%\s*set\s+\w+\s*%\})\s*/g,`
$1
`).replace(/\s*(\{%\s*endset\s*%\})\s*/g,`
$1
`).replace(/\s*(\{\{\s*(?:cardHeader|button|avatar|tag)\([^)]*\)\s*\}\})\s*/g,`
$1
`).replace(/>\s*</g,`>
<`).replace(/(<\/[A-Za-z][\w:-]*>)\s*(?=[^<{\s])/g,`$1
`).split(`
`).map(e=>e.trim()).filter(Boolean),n=[],r=0;for(let e of t){let t=/^\{%\s*endcall\s*%\}$/.test(e),i=/^\{%\s*endset\s*%\}$/.test(e),a=/^<\//.test(e);if((t||i||a)&&(r=Math.max(0,r-1)),n.push(`${`  `.repeat(r)}${e}`),/^\{%\s*(?:call\b|set\s+\w+\s*%\})/.test(e)){r+=1;continue}let o=e.match(/^<([A-Za-z][\w:-]*)\b/)?.[1]?.toLowerCase(),s=o&&[`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`source`,`track`,`wbr`].includes(o),c=/^<([A-Za-z][\w:-]*)\b[^>]*>.*<\/\1>$/.test(e);o&&!s&&!c&&!/\/>$/.test(e)&&(r+=1)}return n.join(`
`)}function _e(e){let t=[],n=he(me(pe(e))).replace(/<div class="card_header"><div class="card_header-main"><h3 class="card_title">([^<]*)<\/h3>(?:<p class="card_subtitle">([^<]*)<\/p>)?<\/div><\/div>/g,(e,t,n)=>`{{ cardHeader(title=${h(t)}${n?`, subtitle=${h(n)}`:``}) }}`).replace(/<div class="card_header"><h3 class="card_title">([^<]*)<\/h3><\/div>/g,(e,t)=>`{{ cardHeader(title=${h(t)}) }}`).replace(/<(\/)?(article|a|div)\b([^>]*)>/g,(e,n,r,i)=>{if(n)return t.pop()?.macro?`{% endcall %}`:e;let a=m(i,`class`).split(/\s+/).filter(Boolean);if(a.includes(`card`)&&(r===`article`||r===`a`)){let e=de(r,i,a);return t.push({tag:r,macro:!0}),`{% call card(${e}) %}`}if(r===`div`&&a.includes(`card_deck`)){let e=a.find(e=>/^card_deck-[23]$/.test(e)),n=e?`columns=${e.slice(-1)}`:``;return t.push({tag:r,macro:!0}),`{% call cardDeck(${n}) %}`}if(r===`div`&&a.length===1&&a[0]===`card_body`)return t.push({tag:r,macro:!0}),`{% call cardBody() %}`;if(r===`div`&&a.includes(`card_footer`)){let e=a.includes(`card_footer-between`);return t.push({tag:r,macro:!0}),`{% call cardFooter(${e?`between=true`:``}) %}`}if(r===`div`&&a.includes(`tag_group`)){let e=a.includes(`tag_group-tight`);return t.push({tag:r,macro:!0}),`{% call tagGroup(${e?`tight=true`:``}) %}`}return t.push({tag:r,macro:!1}),e});return`${[ve,n.includes(`button(`)?ye:``,n.includes(`avatar(`)?be:``,n.includes(`tag(`)||n.includes(`tagGroup(`)?xe:``].filter(Boolean).join(`
`)}\n\n${ge(n)}`}function _(e,t,n,r){let i=`import { Card, CardBody, CardFooter, CardHeader } from '@uxkm/react/card';\nimport Avatar from '@uxkm/react/avatar';\nimport Button from '@uxkm/react/button';\nimport Stat from '@uxkm/react/stat';\nimport { Tag, TagGroup } from '@uxkm/react/tag';\n\nexport function Example() {\n  return (\n${n}\n  );\n}`,a=`<script setup>\nimport { Card, CardBody, CardFooter, CardHeader } from '@uxkm/vue/card';\nimport Avatar from '@uxkm/vue/avatar';\nimport Button from '@uxkm/vue/button';\nimport Stat from '@uxkm/vue/stat';\nimport { Tag, TagGroup } from '@uxkm/vue/tag';\n<\/script>\n\n<template>\n${r}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Card/Card.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Card/card.njk · ${e}`,code:_e(t)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/card · ${e}`,code:a},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/card · ${e}`,code:a},{id:`react`,label:`React`,fileName:`@uxkm/react/card · ${e}`,code:i},{id:`next`,label:`Next`,fileName:`@uxkm/react/card · ${e}`,code:i}]}var ve,ye,be,xe,v,y,b,x,S,C;function w(){return(w=e((()=>{ve=`{% from "components/data-display/Card/card.njk" import card, cardHeader, cardBody, cardFooter, cardDeck %}`,ye=`{% from "components/basic/Button/button.njk" import button %}`,be=`{% from "components/data-display/Avatar/avatar.njk" import avatar %}`,xe=`{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}`,v=`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,y=`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,b=`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,x=`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,S=`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,C={basic:_(`basic`,`<article class="card" style="max-width: 360px; width: 100%;">
  <div class="card_header"><div class="card_header-main"><h3 class="card_title">카드 제목</h3><p class="card_subtitle">부제목 또는 메타 정보</p></div></div>
  <div class="card_body">카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</div>
  <div class="card_footer"><button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">확인</span></button><button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button></div>
</article>`,`    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter><Button variant="filled" color="primary" size="sm" label="확인" /><Button variant="ghost" size="sm" label="취소" /></CardFooter>
    </Card>`,`  <Card style="max-width: 360px; width: 100%;">
    <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
    <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
    <CardFooter><Button variant="filled" color="primary" size="sm" label="확인" /><Button variant="ghost" size="sm" label="취소" /></CardFooter>
  </Card>`),simple:_(`simple`,`<article class="card card_shadow card_compact" style="max-width: 280px; width: 100%;"><div class="card_body"><p class="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</div></article>
<article class="card card_compact" style="max-width: 280px; width: 100%;"><div class="card_body">컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</div></article>`,`    <>
      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody><p className="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</CardBody></Card>
      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody></Card>
    </>`,`  <Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;"><CardBody><p class="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</CardBody></Card>
  <Card size="compact" style="max-width: 280px; width: 100%;"><CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody></Card>`),skin:_(`skin`,`<div class="card_deck card_deck-2">
  <article class="card"><div class="card_body">기본 — 테두리 · 그림자</div></article>
  <article class="card card_shadow"><div class="card_body">Shadow — 그림자</div></article>
  <article class="card card_elevated"><div class="card_body">Elevated — 강한 그림자</div></article>
  <article class="card card_ghost"><div class="card_body">Ghost — 투명 배경</div></article>
</div>`,`    <div className="card_deck card_deck-2">
      <Card><CardBody>기본 — 테두리 · 그림자</CardBody></Card>
      <Card variant="shadow"><CardBody>Shadow — 그림자</CardBody></Card>
      <Card className="card_elevated"><CardBody>Elevated — 강한 그림자</CardBody></Card>
      <Card variant="flat"><CardBody>Ghost — 투명 배경</CardBody></Card>
    </div>`,`  <div class="card_deck card_deck-2">
    <Card><CardBody>기본 — 테두리 · 그림자</CardBody></Card>
    <Card variant="shadow"><CardBody>Shadow — 그림자</CardBody></Card>
    <Card class="card_elevated"><CardBody>Elevated — 강한 그림자</CardBody></Card>
    <Card variant="flat"><CardBody>Ghost — 투명 배경</CardBody></Card>
  </div>`),size:_(`size`,`<div class="card_deck card_deck-2">
  <article class="card card_sm"><div class="card_header"><h3 class="card_title">Small</h3></div><div class="card_body">작은 카드 — 좁은 패딩과 작은 제목.</div></article>
  <article class="card"><div class="card_header"><h3 class="card_title">Medium</h3></div><div class="card_body">기본 크기 카드입니다.</div></article>
  <article class="card card_lg"><div class="card_header"><h3 class="card_title">Large</h3></div><div class="card_body">큰 카드 — 넓은 패딩과 큰 제목.</div></article>
</div>`,`    <div className="card_deck card_deck-2">
      <Card size="sm"><CardHeader title="Small" /><CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody></Card>
      <Card><CardHeader title="Medium" /><CardBody>기본 크기 카드입니다.</CardBody></Card>
      <Card size="lg"><CardHeader title="Large" /><CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody></Card>
    </div>`,`  <div class="card_deck card_deck-2">
    <Card size="sm"><CardHeader title="Small" /><CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody></Card>
    <Card><CardHeader title="Medium" /><CardBody>기본 크기 카드입니다.</CardBody></Card>
    <Card size="lg"><CardHeader title="Large" /><CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody></Card>
  </div>`),accent:_(`accent`,`<div class="card_deck card_deck-2">
  <article class="card card_accent color_primary"><div class="card_body"><p class="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</div></article>
  <article class="card card_accent color_success"><div class="card_body"><p class="card_title">성공</p>작업이 정상적으로 완료되었습니다.</div></article>
  <article class="card card_accent color_warning"><div class="card_body"><p class="card_title">주의</p>저장 공간이 부족합니다.</div></article>
  <article class="card card_accent color_danger"><div class="card_body"><p class="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</div></article>
</div>`,`    <div className="card_deck card_deck-2">
      <Card className="card_accent color_primary"><CardBody><p className="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</CardBody></Card>
      <Card className="card_accent color_success"><CardBody><p className="card_title">성공</p>작업이 정상적으로 완료되었습니다.</CardBody></Card>
      <Card className="card_accent color_warning"><CardBody><p className="card_title">주의</p>저장 공간이 부족합니다.</CardBody></Card>
      <Card className="card_accent color_danger"><CardBody><p className="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</CardBody></Card>
    </div>`,`  <div class="card_deck card_deck-2">
    <Card class="card_accent color_primary"><CardBody><p class="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</CardBody></Card>
    <Card class="card_accent color_success"><CardBody><p class="card_title">성공</p>작업이 정상적으로 완료되었습니다.</CardBody></Card>
    <Card class="card_accent color_warning"><CardBody><p class="card_title">주의</p>저장 공간이 부족합니다.</CardBody></Card>
    <Card class="card_accent color_danger"><CardBody><p class="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</CardBody></Card>
  </div>`),media:_(`media`,`<article class="card card_hover card_shadow" style="max-width: 320px; width: 100%;">\n  <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${v}</div>\n  <div class="card_header"><div class="card_header-main"><div class="card_header-row"><h3 class="card_title">프로젝트 Alpha</h3><span class="tag tag_sm color_primary">진행 중</span></div><p class="card_subtitle">업데이트 · 2일 전</p></div></div>\n  <div class="card_body">디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</div>\n  <div class="card_footer card_footer-between"><span class="color_muted size_sm">3명 참여</span><button type="button" class="btn btn_text color_primary btn_sm"><span class="btn_label">자세히</span></button></div>\n</article>`,`    <Card hoverable variant="shadow" style={{ maxWidth: 320, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${v.replaceAll(`class=`,`className=`).replace(`stroke-width=`,`strokeWidth=`)}</div>}>\n      <CardHeader><div className="card_header-row"><h3 className="card_title">프로젝트 Alpha</h3><Tag size="sm" color="primary" label="진행 중" /></div><p className="card_subtitle">업데이트 · 2일 전</p></CardHeader>\n      <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>\n      <CardFooter between><span className="color_muted size_sm">3명 참여</span><Button variant="text" color="primary" size="sm" label="자세히" /></CardFooter>\n    </Card>`,`  <Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">\n    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${v}</div></template>\n    <CardHeader><div class="card_header-row"><h3 class="card_title">프로젝트 Alpha</h3><Tag size="sm" color="primary" label="진행 중" /></div><p class="card_subtitle">업데이트 · 2일 전</p></CardHeader>\n    <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>\n    <CardFooter between><span class="color_muted size_sm">3명 참여</span><Button variant="text" color="primary" size="sm" label="자세히" /></CardFooter>\n  </Card>`),horizontal:_(`horizontal`,`<article class="card card_horizontal card_shadow" style="max-width: 480px; width: 100%;">\n  <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${y}</div>\n  <div class="card_inner"><div class="card_header"><h3 class="card_title">가이드 문서</h3></div><div class="card_body">HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</div><div class="card_footer"><a href="#" class="link color_primary size_sm">문서 보기</a></div></div>\n</article>`,`    <Card className="card_horizontal" variant="shadow" style={{ maxWidth: 480, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${y.replaceAll(`class=`,`className=`).replace(`stroke-width=`,`strokeWidth=`)}</div>}>\n      <div className="card_inner"><CardHeader title="가이드 문서" /><CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody><CardFooter><a href="#" className="link color_primary size_sm" onClick={(event) => event.preventDefault()}>문서 보기</a></CardFooter></div>\n    </Card>`,`  <Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">\n    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${y}</div></template>\n    <div class="card_inner"><CardHeader title="가이드 문서" /><CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody><CardFooter><a href="#" class="link color_primary size_sm" @click.prevent>문서 보기</a></CardFooter></div>\n  </Card>`),iconStat:_(`iconStat`,`<div class="card_deck">\n  <article class="card card_shadow card_hover"><div class="card_body"><span class="card_icon color_primary" aria-hidden="true">${b}</span><h3 class="card_title">빠른 성능</h3><p class="card_subtitle">가벼운 번들, 빠른 로딩</p></div></article>\n  <article class="card card_shadow card_hover"><div class="card_body"><span class="card_icon color_success" aria-hidden="true">${x}</span><h3 class="card_title">접근성</h3><p class="card_subtitle">WCAG 2.2 AA 기준</p></div></article>\n  <article class="card card_shadow"><div class="card_body"><div class="stat"><span class="stat_label">월간 활성 사용자</span><span class="stat_value">24.5K</span><span class="stat_desc color_success">+18.2%</span></div></div></article>\n</div>`,`    <div className="card_deck">\n      <Card variant="shadow" hoverable><CardBody><span className="card_icon color_primary" aria-hidden="true">${b.replaceAll(`class=`,`className=`).replace(`stroke-width=`,`strokeWidth=`)}</span><h3 className="card_title">빠른 성능</h3><p className="card_subtitle">가벼운 번들, 빠른 로딩</p></CardBody></Card>\n      <Card variant="shadow" hoverable><CardBody><span className="card_icon color_success" aria-hidden="true">${x.replaceAll(`class=`,`className=`).replace(`stroke-width=`,`strokeWidth=`)}</span><h3 className="card_title">접근성</h3><p className="card_subtitle">WCAG 2.2 AA 기준</p></CardBody></Card>\n      <Card variant="shadow"><CardBody><Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trendColor="success" /></CardBody></Card>\n    </div>`,`  <div class="card_deck">\n    <Card variant="shadow" hoverable><CardBody><span class="card_icon color_primary" aria-hidden="true">${b}</span><h3 class="card_title">빠른 성능</h3><p class="card_subtitle">가벼운 번들, 빠른 로딩</p></CardBody></Card>\n    <Card variant="shadow" hoverable><CardBody><span class="card_icon color_success" aria-hidden="true">${x}</span><h3 class="card_title">접근성</h3><p class="card_subtitle">WCAG 2.2 AA 기준</p></CardBody></Card>\n    <Card variant="shadow"><CardBody><Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trend-color="success" /></CardBody></Card>\n  </div>`),profile:_(`profile`,`<article class="card card_shadow" style="max-width: 320px; width: 100%;">\n  <div class="card_header"><div class="card_header-main"><div class="card_header-row"><span class="avatar color_primary" aria-hidden="true">홍</span><div><h3 class="card_title">홍길동</h3><p class="card_subtitle">프론트엔드 개발자</p></div></div></div><div class="card_extra"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="더 보기">${S}</button></div></div>\n  <div class="card_body"><div class="tag_group tag_group-tight"><span class="tag tag_sm color_primary">React</span><span class="tag tag_sm color_primary">TypeScript</span><span class="tag tag_sm color_default">SCSS</span></div></div>\n  <div class="card_footer card_footer-between"><span class="color_muted size_sm">서울 · 온라인</span><button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">팔로우</span></button></div>\n</article>`,`    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>\n      <CardHeader extra={<Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={${S.replaceAll(`class=`,`className=`).replace(`stroke-width=`,`strokeWidth=`)}} />}><div className="card_header-row"><Avatar color="primary" initials="홍" ariaHidden /><div><h3 className="card_title">홍길동</h3><p className="card_subtitle">프론트엔드 개발자</p></div></div></CardHeader>\n      <CardBody><TagGroup tight><Tag size="sm" color="primary" label="React" /><Tag size="sm" color="primary" label="TypeScript" /><Tag size="sm" color="default" label="SCSS" /></TagGroup></CardBody>\n      <CardFooter between><span className="color_muted size_sm">서울 · 온라인</span><Button variant="outline" color="primary" size="sm" label="팔로우" /></CardFooter>\n    </Card>`,`  <Card variant="shadow" style="max-width: 320px; width: 100%;">\n    <CardHeader><template #extra><Button variant="ghost" size="sm" icon-only aria-label="더 보기">${S}</Button></template><div class="card_header-row"><Avatar color="primary" initials="홍" aria-hidden /><div><h3 class="card_title">홍길동</h3><p class="card_subtitle">프론트엔드 개발자</p></div></div></CardHeader>\n    <CardBody><TagGroup tight><Tag size="sm" color="primary" label="React" /><Tag size="sm" color="primary" label="TypeScript" /><Tag size="sm" color="default" label="SCSS" /></TagGroup></CardBody>\n    <CardFooter between><span class="color_muted size_sm">서울 · 온라인</span><Button variant="outline" color="primary" size="sm" label="팔로우" /></CardFooter>\n  </Card>`),clickable:_(`clickable`,`<div class="card_deck card_deck-2">
  <a href="#" class="card card_clickable card_hover"><div class="card_body"><h3 class="card_title">링크 카드</h3><p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></div></a>
  <article class="card card_clickable card_hover card_shadow" tabindex="0" role="link"><div class="card_body"><h3 class="card_title">인터랙티브 카드</h3><p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></div></article>
</div>`,`    <div className="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable className="card_clickable" onClick={(event) => event.preventDefault()}><CardBody><h3 className="card_title">링크 카드</h3><p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></CardBody></Card>
      <Card hoverable variant="shadow" className="card_clickable" tabIndex={0} role="link"><CardBody><h3 className="card_title">인터랙티브 카드</h3><p className="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></CardBody></Card>
    </div>`,`  <div class="card_deck card_deck-2">
    <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent><CardBody><h3 class="card_title">링크 카드</h3><p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></CardBody></Card>
    <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link"><CardBody><h3 class="card_title">인터랙티브 카드</h3><p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></CardBody></Card>
  </div>`),disabled:_(`disabled`,`<article class="card is-disabled" style="max-width: 280px; width: 100%;"><div class="card_body"><h3 class="card_title">비활성 카드</h3><p class="card_subtitle">현재 이용할 수 없습니다.</p></div></article>`,`    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}><CardBody><h3 className="card_title">비활성 카드</h3><p className="card_subtitle">현재 이용할 수 없습니다.</p></CardBody></Card>`,`  <Card class="is-disabled" style="max-width: 280px; width: 100%;"><CardBody><h3 class="card_title">비활성 카드</h3><p class="card_subtitle">현재 이용할 수 없습니다.</p></CardBody></Card>`),grid:_(`grid`,`<div class="card_deck">
  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature A</h3></div><div class="card_body">빠른 성능과 가벼운 번들 크기.</div></article>
  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature B</h3></div><div class="card_body">접근성을 고려한 마크업 구조.</div></article>
  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature C</h3></div><div class="card_body">Pure SCSS로 커스터마이즈 가능.</div></article>
</div>`,`    <div className="card_deck">
      <Card hoverable><CardHeader title="Feature A" /><CardBody>빠른 성능과 가벼운 번들 크기.</CardBody></Card>
      <Card hoverable><CardHeader title="Feature B" /><CardBody>접근성을 고려한 마크업 구조.</CardBody></Card>
      <Card hoverable><CardHeader title="Feature C" /><CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody></Card>
    </div>`,`  <div class="card_deck">
    <Card hoverable><CardHeader title="Feature A" /><CardBody>빠른 성능과 가벼운 번들 크기.</CardBody></Card>
    <Card hoverable><CardHeader title="Feature B" /><CardBody>접근성을 고려한 마크업 구조.</CardBody></Card>
    <Card hoverable><CardHeader title="Feature C" /><CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody></Card>
  </div>`)}})))()}var T;function E(){return(E=e((()=>{T=`<!-- Card 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Card · 기본: card_header · card_body · card_footer 구조로 콘텐츠를 나눕니다. -->
<article class="card" style="max-width: 360px; width: 100%">
  <div class="card_header">
    <div class="card_header-main">
      <h3 class="card_title">카드 제목</h3>
      <p class="card_subtitle">부제목 또는 메타 정보</p>
    </div>
  </div>
  <div class="card_body">카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</div>
  <div class="card_footer">
    <button type="button" class="btn btn_filled color_primary btn_sm">
      <span class="btn_label">확인</span>
    </button>
    <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
  </div>
</article>

<!-- Card · 간단: header나 footer 없이 body만 사용하는 단순 카드입니다. -->
<article class="card card_shadow card_compact" style="max-width: 280px; width: 100%">
  <div class="card_body">
    <p class="card_title">알림</p>
    새로운 메시지가 도착했습니다. 확인해 주세요.
  </div>
</article>

<article class="card card_compact" style="max-width: 280px; width: 100%">
  <div class="card_body">컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</div>
</article>

<!-- Card · 스킨: 기본은 테두리·그림자가 적용됩니다. card_shadow · card_ghost · card_elevated로 외형을 조절합니다. -->
<div class="card_deck card_deck-2">
  <article class="card">
    <div class="card_body">기본 — 테두리 · 그림자</div>
  </article>
  <article class="card card_shadow">
    <div class="card_body">Shadow — 그림자</div>
  </article>
  <article class="card card_elevated">
    <div class="card_body">Elevated — 강한 그림자</div>
  </article>
  <article class="card card_ghost">
    <div class="card_body">Ghost — 투명 배경</div>
  </article>
</div>
<!-- Card · 크기: card_sm · card_lg · card_compact로 패딩과 제목 크기를 조절합니다. -->
<div class="card_deck card_deck-2">
  <article class="card card_sm">
    <div class="card_header">
      <h3 class="card_title">Small</h3>
    </div>
    <div class="card_body">작은 카드 — 좁은 패딩과 작은 제목.</div>
  </article>
  <article class="card">
    <div class="card_header">
      <h3 class="card_title">Medium</h3>
    </div>
    <div class="card_body">기본 크기 카드입니다.</div>
  </article>
  <article class="card card_lg">
    <div class="card_header">
      <h3 class="card_title">Large</h3>
    </div>
    <div class="card_body">큰 카드 — 넓은 패딩과 큰 제목.</div>
  </article>
</div>

<!-- Card · 강조 테두리: card_accent와 color_*로 왼쪽 강조선을 적용합니다. -->
<div class="card_deck card_deck-2">
  <article class="card card_accent color_primary">
    <div class="card_body">
      <p class="card_title">정보</p>
      시스템 업데이트가 예정되어 있습니다.
    </div>
  </article>
  <article class="card card_accent color_success">
    <div class="card_body">
      <p class="card_title">성공</p>
      작업이 정상적으로 완료되었습니다.
    </div>
  </article>
  <article class="card card_accent color_warning">
    <div class="card_body">
      <p class="card_title">주의</p>
      저장 공간이 부족합니다.
    </div>
  </article>
  <article class="card card_accent color_danger">
    <div class="card_body">
      <p class="card_title">오류</p>
      연결에 실패했습니다. 다시 시도해 주세요.
    </div>
  </article>
</div>

<!-- Card · 미디어: card_media로 상단 이미지·썸네일 영역을 추가합니다. -->
<article class="card card_hover card_shadow" style="max-width: 320px; width: 100%">
  <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
    <svg
      class="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  </div>
  <div class="card_header">
    <div class="card_header-main">
      <div class="card_header-row">
        <h3 class="card_title">프로젝트 Alpha</h3>
        <span class="tag tag_sm color_primary">진행 중</span>
      </div>
      <p class="card_subtitle">업데이트 · 2일 전</p>
    </div>
  </div>
  <div class="card_body">디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</div>
  <div class="card_footer card_footer-between">
    <span class="color_muted size_sm">3명 참여</span>
    <button type="button" class="btn btn_text color_primary btn_sm">
      <span class="btn_label">자세히</span>
    </button>
  </div>
</article>

<!-- Card · 가로: card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다. -->
<article class="card card_horizontal card_shadow" style="max-width: 480px; width: 100%">
  <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
    <svg
      class="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  </div>
  <div class="card_inner">
    <div class="card_header">
      <h3 class="card_title">가이드 문서</h3>
    </div>
    <div class="card_body">HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</div>
    <div class="card_footer">
      <a href="#" class="link color_primary size_sm">문서 보기</a>
    </div>
  </div>
</article>

<!-- Card · 아이콘 · 통계: card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다. -->
<div class="card_deck">
  <article class="card card_shadow card_hover">
    <div class="card_body">
      <span class="card_icon color_primary" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </span>
      <h3 class="card_title">빠른 성능</h3>
      <p class="card_subtitle">가벼운 번들, 빠른 로딩</p>
    </div>
  </article>
  <article class="card card_shadow card_hover">
    <div class="card_body">
      <span class="card_icon color_success" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </span>
      <h3 class="card_title">접근성</h3>
      <p class="card_subtitle">WCAG 2.2 AA 기준</p>
    </div>
  </article>
  <article class="card card_shadow">
    <div class="card_body">
      <div class="stat">
        <span class="stat_label">월간 활성 사용자</span>
        <span class="stat_value">24.5K</span>
        <span class="stat_desc color_success">+18.2%</span>
      </div>
    </div>
  </article>
</div>

<!-- Card · 프로필: card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다. -->
<article class="card card_shadow" style="max-width: 320px; width: 100%">
  <div class="card_header">
    <div class="card_header-main">
      <div class="card_header-row">
        <span class="avatar color_primary" aria-hidden="true">홍</span>
        <div>
          <h3 class="card_title">홍길동</h3>
          <p class="card_subtitle">프론트엔드 개발자</p>
        </div>
      </div>
    </div>
    <div class="card_extra">
      <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="더 보기">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </button>
    </div>
  </div>
  <div class="card_body">
    <div class="tag_group tag_group-tight">
      <span class="tag tag_sm color_primary">React</span>
      <span class="tag tag_sm color_primary">TypeScript</span>
      <span class="tag tag_sm color_default">SCSS</span>
    </div>
  </div>
  <div class="card_footer card_footer-between">
    <span class="color_muted size_sm">서울 · 온라인</span>
    <button type="button" class="btn btn_outline color_primary btn_sm">
      <span class="btn_label">팔로우</span>
    </button>
  </div>
</article>

<!-- Card · 클릭 가능: a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. card_hover와 함께 사용합니다. -->
<div class="card_deck card_deck-2">
  <a href="#" class="card card_clickable card_hover">
    <div class="card_body">
      <h3 class="card_title">링크 카드</h3>
      <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
    </div>
  </a>
  <article class="card card_clickable card_hover card_shadow" tabindex="0" role="link">
    <div class="card_body">
      <h3 class="card_title">인터랙티브 카드</h3>
      <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
    </div>
  </article>
</div>

<!-- Card · 비활성: is-disabled로 비활성 상태를 표시합니다. -->
<article class="card is-disabled" style="max-width: 280px; width: 100%">
  <div class="card_body">
    <h3 class="card_title">비활성 카드</h3>
    <p class="card_subtitle">현재 이용할 수 없습니다.</p>
  </div>
</article>

<!-- Card · 카드 그리드: card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다. -->
<div class="card_deck">
  <article class="card card_hover">
    <div class="card_header">
      <h3 class="card_title">Feature A</h3>
    </div>
    <div class="card_body">빠른 성능과 가벼운 번들 크기.</div>
  </article>
  <article class="card card_hover">
    <div class="card_header">
      <h3 class="card_title">Feature B</h3>
    </div>
    <div class="card_body">접근성을 고려한 마크업 구조.</div>
  </article>
  <article class="card card_hover">
    <div class="card_header">
      <h3 class="card_title">Feature C</h3>
    </div>
    <div class="card_body">Pure SCSS로 커스터마이즈 가능.</div>
  </article>
</div>
`})))()}var D;function O(){return(O=e((()=>{D=`{# Card 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 내부 영역을 macro로 구성합니다. #}
{# card · cardHeader · cardBody · cardFooter · cardDeck macro를 조합해 카드를 렌더링합니다. #}
{% import "components/basic/Button/button.njk" as Button %}

{% macro card(
  tag = '',
  href = '',
  type = 'button',
  title = '',
  subtitle = '',
  header = '',
  extra = '',
  media = '',
  size = 'md',
  variant = 'bordered',
  horizontal = false,
  compact = false,
  hoverable = false,
  accent = false,
  color = '',
  disabled = false,
  ripple = '',
  className = '',
  style = '',
  role = '',
  tabIndex = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = '' -%}
{%- endif -%}
{%- set root = tag if tag else ('a' if href else 'article') -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg', 'compact'] else 'md' -%}
{%- set resolvedVariant = variant if variant in ['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost'] else 'bordered' -%}
{%- set variantClass = 'card_ghost' if resolvedVariant == 'flat' else (('card_' + resolvedVariant) if resolvedVariant not in ['bordered', 'default'] else '') -%}
{%- set interactive = root == 'a' or root == 'button' or role == 'link' or role == 'button' -%}
{%- set classes =
  'card'
  + ((' ' + variantClass) if variantClass else '')
  + ((' card_' + resolvedSize) if resolvedSize != 'md' else '')
  + (' card_horizontal' if horizontal else '')
  + (' card_compact' if compact and resolvedSize != 'compact' else '')
  + (' card_hover' if hoverable else '')
  + (' card_accent' if accent else '')
  + ((' color_' + color) if color else '')
  + (' card_clickable' if interactive else '')
  + (' is-disabled' if disabled else '')
  + ((' ' + className) if className else '')
-%}
<{{ root }}
  class="{{ classes }}"
  data-component="Card"
  {% if root == 'button' %}type="{{ type }}"{% endif %}
  {% if root == 'a' and href and not disabled %}href="{{ href }}"{% endif %}
  {% if root == 'button' and disabled %}disabled{% endif %}
  {% if interactive and disabled %}aria-disabled="true"{% endif %}
  {% if role %}role="{{ role }}"{% endif %}
  {% if tabIndex != '' %}tabindex="{{ -1 if interactive and disabled else tabIndex }}"{% elif interactive and disabled %}tabindex="-1"{% endif %}
  {% if ripple != '' %}data-ripple="{{ 'true' if ripple else 'false' }}"{% endif %}
  {% if style %}style="{{ style }}"{% endif %}
>
  {%- if media %}{{ media | safe }}{%- endif -%}
  {%- if title or subtitle or header or extra %}
  <div class="card_header">
    <div class="card_header-main">
      {%- if header -%}{{ header | safe }}
      {%- else -%}
        {%- if title %}<h3 class="card_title">{{ title }}</h3>{% endif -%}
        {%- if subtitle %}<p class="card_subtitle">{{ subtitle }}</p>{% endif -%}
      {%- endif -%}
    </div>
    {%- if extra %}<div class="card_extra">{{ extra | safe }}</div>{% endif -%}
  </div>
  {%- endif -%}
  {{ content | safe }}
</{{ root }}>
{% endmacro %}

{% macro cardHeader(title = '', subtitle = '', extra = '', className = '') %}
{%- if caller -%}{%- set content = caller() -%}{%- else -%}{%- set content = '' -%}{%- endif -%}
<div class="card_header{{ (' ' + className) if className else '' }}">
  <div class="card_header-main">
    {%- if content %}{{ content | safe }}
    {%- else -%}
      {%- if title %}<h3 class="card_title">{{ title }}</h3>{% endif -%}
      {%- if subtitle %}<p class="card_subtitle">{{ subtitle }}</p>{% endif -%}
    {%- endif -%}
  </div>
  {%- if extra %}<div class="card_extra">{{ extra | safe }}</div>{% endif -%}
</div>
{% endmacro %}

{% macro cardBody(className = '') %}
<div class="card_body{{ (' ' + className) if className else '' }}">{% if caller %}{{ caller() | safe }}{% endif %}</div>
{% endmacro %}

{% macro cardFooter(between = false, className = '') %}
<div class="card_footer{{ ' card_footer-between' if between else '' }}{{ (' ' + className) if className else '' }}">{% if caller %}{{ caller() | safe }}{% endif %}</div>
{% endmacro %}

{% macro cardDeck(columns = '', className = '') %}
{%- set resolvedColumns = columns if columns == 2 or columns == '2' or columns == 3 or columns == '3' else '' -%}
<div class="card_deck{{ (' card_deck-' + resolvedColumns) if resolvedColumns else '' }}{{ (' ' + className) if className else '' }}" data-component="CardDeck">{% if caller %}{{ caller() | safe }}{% endif %}</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call card(style='max-width: 360px; width: 100%') %}
  {{ cardHeader(title='카드 제목', subtitle='부제목 또는 메타 정보') }}
  {% call cardBody() %}카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.{% endcall %}
  {% call cardFooter() %}
    {{ Button.button(variant='filled', color='primary', size='sm', label='확인') }}
    {{ Button.button(variant='ghost', size='sm', label='취소') }}
  {% endcall %}
{% endcall %}
`})))()}var k;function A(){return(A=e((()=>{k=`/**
 * Card 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기와 스킨은 각각 md와 bordered로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);
const VALID_VARIANTS = new Set([
  'bordered',
  'default',
  'shadow',
  'flat',
  'borderless',
  'elevated',
  'ghost',
]);

// 루트 의미, 내부 영역, 외형, 상호작용 상태를 하나의 Card API로 조합합니다.
export function Card({
  as, // tag보다 우선하는 루트 요소입니다.
  tag, // 루트 태그 이름입니다.
  children, // 본문 영역에 배치할 콘텐츠입니다.
  title, // 헤더 제목입니다.
  subtitle, // 헤더 부제입니다.
  header, // 내장 제목 대신 쓸 커스텀 헤더입니다.
  extra, // 헤더 우측 보조 콘텐츠입니다.
  media, // 상단 미디어 영역입니다.
  href, // 링크로 동작할 때 이동할 주소입니다.
  size = 'md', // 카드 크기입니다.
  variant = 'bordered', // 카드 스킨 변형입니다.
  horizontal = false, // 가로 레이아웃 여부입니다.
  compact = false, // 조밀한 패딩 여부입니다.
  hoverable = false, // 호버 강조 스타일 여부입니다.
  accent = false, // 액센트 강조 스타일 여부입니다.
  color, // color_* 공통 색상 클래스입니다.
  disabled = false, // 비활성 상태입니다.
  ripple, // 클릭 리플 효과 여부입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 클릭 시 호출되는 콜백입니다.
  type = 'button', // button 루트의 type입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // href는 링크, onClick은 버튼, 나머지는 기본 article 루트를 선택합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const interactive = Boolean(href || onClick);
  const Root = as || tag || (href ? 'a' : onClick ? 'button' : 'article');
  const variantClass =
    resolvedVariant === 'flat'
      ? 'card_ghost'
      : ['default', 'bordered'].includes(resolvedVariant)
        ? ''
        : \`card_\${resolvedVariant}\`;
  // 외형·레이아웃·상태를 card_* · color_* · is-* 공통 클래스로 변환합니다.
  const classes = [
    'card',
    variantClass,
    resolvedSize !== 'md' && \`card_\${resolvedSize}\`,
    horizontal && 'card_horizontal',
    compact && 'card_compact',
    hoverable && 'card_hover',
    accent && 'card_accent',
    color && \`color_\${color}\`,
    interactive && 'card_clickable',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  // 명시적인 헤더 데이터가 있을 때만 내장 header 구조를 렌더링합니다.
  const hasBuiltInHeader = title != null || subtitle != null || header != null || extra != null;

  // 비활성 Card는 링크 이동과 사용자 클릭 이벤트를 모두 차단합니다.
  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  // 루트 종류에 맞춰 href · disabled · aria-disabled · tabIndex를 구분해 전달합니다.
  return (
    <Root
      {...props}
      className={classes}
      data-component="Card"
      data-ripple={ripple == null ? undefined : String(ripple)}
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      aria-disabled={interactive && disabled ? true : undefined}
      tabIndex={interactive && disabled ? -1 : props.tabIndex}
      onClick={interactive ? handleClick : undefined}
      type={Root === 'button' ? type : undefined}
    >
      {media}
      {hasBuiltInHeader ? (
        <div className="card_header">
          <div className="card_header-main">
            {header ?? (
              <>
                {title != null ? <h3 className="card_title">{title}</h3> : null}
                {subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}
              </>
            )}
          </div>
          {extra != null ? <div className="card_extra">{extra}</div> : null}
        </div>
      ) : null}
      {children}
    </Root>
  );
}

export function CardHeader({
  children, // 제목·부제 대신 사용할 헤더 본문입니다.
  title, // 헤더 제목입니다.
  subtitle, // 헤더 부제입니다.
  extra, // 헤더 우측 액션 영역입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // children이 있으면 제목·부제 조합보다 우선하고 extra는 별도 액션 영역에 둡니다.
  const classes = ['card_header', className].filter(Boolean).join(' ');
  return (
    <div {...props} className={classes}>
      <div className="card_header-main">
        {children ?? (
          <>
            {title != null ? <h3 className="card_title">{title}</h3> : null}
            {subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}
          </>
        )}
      </div>
      {extra != null ? <div className="card_extra">{extra}</div> : null}
    </div>
  );
}

export function CardBody({
  children, // 카드 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 본문 콘텐츠와 사용자 정의 속성을 card_body 영역에 전달합니다.
  const classes = ['card_body', className].filter(Boolean).join(' ');
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

export function CardFooter({
  children, // 푸터 콘텐츠입니다.
  between = false, // 양끝 정렬 변형 여부입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // between은 푸터 콘텐츠를 양끝 정렬하는 변형 클래스입니다.
  const classes = ['card_footer', between && 'card_footer-between', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

export function CardDeck({
  children, // 덱에 배치할 Card들입니다.
  columns, // 고정 열 수(2 또는 3)입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // columns는 지원하는 2·3열만 고정하고 나머지는 자동 반응형 그리드를 사용합니다.
  const resolvedColumns = [2, 3].includes(Number(columns)) ? Number(columns) : null;
  const classes = ['card_deck', resolvedColumns && \`card_deck-\${resolvedColumns}\`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <div {...props} className={classes} data-component="CardDeck">
      {children}
    </div>
  );
}

export default Card;
`})))()}var j;function M(){return(M=e((()=>{j=`<!--
  Card 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, getCurrentInstance, useAttrs, useSlots } from 'vue';

// class와 클릭 핸들러를 분리해 최외곽 동적 루트에 직접 전달합니다.
defineOptions({ name: 'UxkmCard', inheritAttrs: false });
// 루트 의미, 내부 영역, 외형과 상호작용 상태를 prop으로 받습니다.
const props = defineProps({
  as: String, // tag보다 우선하는 루트 요소입니다.
  tag: String, // 루트 태그 이름입니다.
  title: [String, Number], // 헤더 제목입니다.
  subtitle: [String, Number], // 헤더 부제입니다.
  href: String, // 있으면 a 루트로 렌더링합니다.
  size: { // sm · md · lg · compact 크기입니다.
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'compact'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  variant: { // 카드 스킨 변형입니다.
    type: String,
    default: 'bordered',
    validator: (value) =>
      ['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  horizontal: Boolean, // 가로 레이아웃입니다.
  compact: Boolean, // 조밀한 패딩입니다.
  hoverable: Boolean, // 호버 강조 스타일입니다.
  accent: Boolean, // 액센트 강조 스타일입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 클릭 리플 효과입니다.
});
const attrs = useAttrs();
const slots = useSlots();
const instance = getCurrentInstance();
const emit = defineEmits(['click']);
// href는 링크, click listener는 버튼, 나머지는 기본 article 루트를 선택합니다.
const interactive = computed(() => Boolean(props.href || instance?.vnode.props?.onClick));
const rootTag = computed(
  () => props.as || props.tag || (props.href ? 'a' : interactive.value ? 'button' : 'article'),
);
const variantClass = computed(() =>
  props.variant === 'flat'
    ? 'card_ghost'
    : ['default', 'bordered'].includes(props.variant)
      ? ''
      : \`card_\${props.variant}\`,
);
// prop을 card_* · color_* · is-* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'card',
    variantClass.value,
    props.size !== 'md' && \`card_\${props.size}\`,
    props.horizontal && 'card_horizontal',
    props.compact && 'card_compact',
    props.hoverable && 'card_hover',
    props.accent && 'card_accent',
    props.color && \`color_\${props.color}\`,
    interactive.value && 'card_clickable',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);
// class와 onClick은 중복 전달하지 않고 계산된 class와 emit 처리에 연결합니다.
const rootAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});
const hasBuiltInHeader = computed(
  () => props.title != null || props.subtitle != null || slots.header || slots.extra,
);
// 비활성 Card는 링크 이동과 사용자 클릭 이벤트를 모두 차단합니다.
function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}
<\/script>

<template>
  <!-- 루트 종류에 맞춰 href · disabled · aria-disabled · tabindex를 구분해 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Card"
    :data-ripple="ripple == null ? undefined : String(ripple)"
    :type="rootTag === 'button' ? 'button' : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :aria-disabled="interactive && disabled ? 'true' : undefined"
    :tabindex="interactive && disabled ? -1 : undefined"
    @click="interactive ? handleClick($event) : undefined"
  >
    <!-- media와 내장 header는 값이나 slot이 있을 때만 필요한 구조를 렌더링합니다. -->
    <slot name="media" />
    <div v-if="hasBuiltInHeader" class="card_header">
      <div class="card_header-main">
        <slot name="header"
          ><h3 v-if="title != null" class="card_title">{{ title }}</h3>
          <p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot
        >
      </div>
      <div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div>
    </div>
    <slot />
  </component>
</template>
`})))()}var N;function P(){return(P=e((()=>{N=`<!--
  CardBody 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardBody', inheritAttrs: false });
const attrs = useAttrs();
// class를 제외한 전달 속성은 body 루트에 적용하고 사용자 class는 별도로 병합합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- 본문 slot을 공통 card_body 영역에 렌더링합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div v-bind="rootAttrs" class="card_body" :class="attrs.class"><slot /></div>
</template>
`})))()}var F;function I(){return(I=e((()=>{F=`<!--
  CardDeck 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCardDeck', inheritAttrs: false });
const props = defineProps({
  columns: { type: [String, Number], default: undefined }, // 고정 열 수(2 또는 3)입니다.
});
const attrs = useAttrs();
// columns는 지원하는 2·3열만 고정하고 나머지는 자동 반응형 그리드를 사용합니다.
const classes = computed(() =>
  [
    'card_deck',
    [2, 3].includes(Number(props.columns)) && \`card_deck-\${Number(props.columns)}\`,
    attrs.class,
  ].filter(Boolean),
);
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- 관련 Card 목록을 하나의 반응형 deck으로 묶습니다. -->
  <div v-bind="rootAttrs" :class="classes" data-component="CardDeck"><slot /></div>
</template>
`})))()}var L;function Se(){return(Se=e((()=>{L=`<!--
  CardFooter 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardFooter', inheritAttrs: false });
const props = defineProps({
  between: Boolean, // 양끝 정렬 변형 여부입니다.
});
const attrs = useAttrs();
// between과 사용자 class를 푸터 변형 클래스에 합칩니다.
const classes = computed(() =>
  ['card_footer', props.between && 'card_footer-between', attrs.class].filter(Boolean),
);
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- 푸터 slot을 기본 또는 양끝 정렬 레이아웃으로 렌더링합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div v-bind="rootAttrs" :class="classes"><slot /></div>
</template>
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`<!--
  CardHeader 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardHeader', inheritAttrs: false });
defineProps({
  title: [String, Number], // 헤더 제목입니다.
  subtitle: [String, Number], // 헤더 부제입니다.
});
const attrs = useAttrs();
// class를 제외한 전달 속성은 header 루트에 적용하고 사용자 class는 별도로 병합합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>
<!-- 기본 slot이 제목·부제보다 우선하고 extra slot은 별도 액션 영역에 배치합니다. -->
<template>
  <!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div v-bind="rootAttrs" class="card_header" :class="attrs.class">
    <div class="card_header-main">
      <slot
        ><h3 v-if="title != null" class="card_title">{{ title }}</h3>
        <p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot
      >
    </div>
    <div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div>
  </div>
</template>
`})))()}function R(e,t,n,r=`span`){return`<w2:textbox id="${e}" tagname="${r}"${n?` class="${n}"`:``} label="${t}"></w2:textbox>`}function z(e,t,n,r=``){return`<w2:group id="${e}" class="${t}"${r?` ${r}`:``}>\n${K(n)}\n</w2:group>`}function B(e,t,n=``,r=``){return z(e,`card${n?` ${n}`:``}`,t,`tagname="article"${r?` ${r}`:``}`)}function V(e,t){return z(e,`card_body`,t)}function H(e,t,n){let r=[R(`${e}Title`,t,`card_title`,`h3`),n?R(`${e}Subtitle`,n,`card_subtitle`,`p`):``].filter(Boolean).join(`
`);return z(e,`card_header`,z(`${e}Main`,`card_header-main`,r))}function U(e,t,n){return`<xf:trigger id="${e}" type="button" class="${n}" ev:onclick="scwin.cardAction_onclick">\n  <xf:label><![CDATA[${t}]]></xf:label>\n</xf:trigger>`}function W(e,t,n){return z(e,`card_deck${n?` card_deck-${n}`:``}`,t.join(`
`))}var G,Te,K,Ee,q;function De(){return(De=e((()=>{w(),E(),O(),A(),M(),P(),I(),Se(),we(),G=[j,`<!-- CardHeader.vue -->\n${Ce}`,`<!-- CardBody.vue -->\n${N}`,`<!-- CardFooter.vue -->\n${L}`,`<!-- CardDeck.vue -->\n${F}`].join(`

`),Te=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Card/Card.html`,code:T},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Card/card.njk`,code:D},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Card/Card*.vue`,code:G},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/card → Card*.vue`,code:G},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Card/Card.jsx`,code:k},{id:`next`,label:`Next`,fileName:`@uxkm/react/card → Card.jsx`,code:k}],K=(e,t=2)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),Ee={basic:B(`cardBasic`,[H(`cardBasicHeader`,`카드 제목`,`부제목 또는 메타 정보`),V(`cardBasicBody`,R(`cardBasicContent`,`카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.`)),z(`cardBasicFooter`,`card_footer`,[U(`cardBasicConfirm`,`확인`,`btn btn_filled color_primary btn_sm`),U(`cardBasicCancel`,`취소`,`btn btn_ghost btn_sm`)].join(`
`))].join(`
`)),simple:[B(`cardSimpleAlert`,V(`cardSimpleAlertBody`,`${R(`cardSimpleAlertTitle`,`알림`,`card_title`,`p`)}\n${R(`cardSimpleAlertText`,`새로운 메시지가 도착했습니다. 확인해 주세요.`)}`),`card_shadow card_compact`),B(`cardSimpleCompact`,V(`cardSimpleCompactBody`,R(`cardSimpleCompactText`,`컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.`)),`card_compact`)].join(`
`),skin:W(`cardSkinExample`,[B(`cardSkinDefault`,V(`cardSkinDefaultBody`,R(`cardSkinDefaultText`,`기본 — 테두리 · 그림자`))),B(`cardSkinShadow`,V(`cardSkinShadowBody`,R(`cardSkinShadowText`,`Shadow — 그림자`)),`card_shadow`),B(`cardSkinElevated`,V(`cardSkinElevatedBody`,R(`cardSkinElevatedText`,`Elevated — 강한 그림자`)),`card_elevated`),B(`cardSkinGhost`,V(`cardSkinGhostBody`,R(`cardSkinGhostText`,`Ghost — 투명 배경`)),`card_ghost`)],2),size:W(`cardSizeExample`,[B(`cardSmall`,`${H(`cardSmallHeader`,`Small`)}\n${V(`cardSmallBody`,R(`cardSmallText`,`작은 카드 — 좁은 패딩과 작은 제목.`))}`,`card_sm`),B(`cardMedium`,`${H(`cardMediumHeader`,`Medium`)}\n${V(`cardMediumBody`,R(`cardMediumText`,`기본 크기 카드입니다.`))}`),B(`cardLarge`,`${H(`cardLargeHeader`,`Large`)}\n${V(`cardLargeBody`,R(`cardLargeText`,`큰 카드 — 넓은 패딩과 큰 제목.`))}`,`card_lg`)],2),accent:W(`cardAccentExample`,[B(`cardAccentInfo`,V(`cardAccentInfoBody`,`${R(`cardAccentInfoTitle`,`정보`,`card_title`,`p`)}\n${R(`cardAccentInfoText`,`시스템 업데이트가 예정되어 있습니다.`)}`),`card_accent color_primary`),B(`cardAccentSuccess`,V(`cardAccentSuccessBody`,`${R(`cardAccentSuccessTitle`,`성공`,`card_title`,`p`)}\n${R(`cardAccentSuccessText`,`작업이 정상적으로 완료되었습니다.`)}`),`card_accent color_success`),B(`cardAccentWarning`,V(`cardAccentWarningBody`,`${R(`cardAccentWarningTitle`,`주의`,`card_title`,`p`)}\n${R(`cardAccentWarningText`,`저장 공간이 부족합니다.`)}`),`card_accent color_warning`),B(`cardAccentDanger`,V(`cardAccentDangerBody`,`${R(`cardAccentDangerTitle`,`오류`,`card_title`,`p`)}\n${R(`cardAccentDangerText`,`연결에 실패했습니다. 다시 시도해 주세요.`)}`),`card_accent color_danger`)],2),media:`<!-- 썸네일 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->\n${B(`cardMedia`,[z(`cardMediaThumbnail`,`card_media`,`<w2:image id="cardMediaImage" class="card_media-image" src="/images/samples/card/project.svg" alt="프로젝트 썸네일"></w2:image>`),H(`cardMediaHeader`,`프로젝트 Alpha`,`업데이트 · 2일 전`),V(`cardMediaBody`,R(`cardMediaText`,`디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.`)),z(`cardMediaFooter`,`card_footer card_footer-between`,`${R(`cardMediaMembers`,`3명 참여`,`color_muted size_sm`)}\n${U(`cardMediaDetail`,`자세히`,`btn btn_text color_primary btn_sm`)}`)].join(`
`),`card_hover card_shadow`)}`,horizontal:`<!-- 썸네일 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->\n${B(`cardHorizontal`,[z(`cardHorizontalMedia`,`card_media`,`<w2:image id="cardHorizontalImage" class="card_media-image" src="/images/samples/card/document.svg" alt="문서 썸네일"></w2:image>`),z(`cardHorizontalInner`,`card_inner`,`${H(`cardHorizontalHeader`,`가이드 문서`)}\n${V(`cardHorizontalBody`,R(`cardHorizontalText`,`HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.`))}\n${z(`cardHorizontalFooter`,`card_footer`,`<w2:anchor id="cardHorizontalLink" class="link color_primary size_sm" href="#"><xf:label><![CDATA[문서 보기]]></xf:label></w2:anchor>`)}`)].join(`
`),`card_horizontal card_shadow`)}`,iconStat:`<!-- 아이콘 경로는 프로젝트 이미지 또는 CSS background-image 리소스에 연결합니다. -->\n${W(`cardIconStatExample`,[B(`cardPerformance`,V(`cardPerformanceBody`,`${z(`cardPerformanceIcon`,`card_icon color_primary`,`<w2:image id="cardPerformanceImage" class="icon" src="/images/icons/bolt.svg" alt=""></w2:image>`,`aria-hidden="true"`)}\n${R(`cardPerformanceTitle`,`빠른 성능`,`card_title`,`h3`)}\n${R(`cardPerformanceSubtitle`,`가벼운 번들, 빠른 로딩`,`card_subtitle`,`p`)}`),`card_shadow card_hover`),B(`cardAccessibility`,V(`cardAccessibilityBody`,`${z(`cardAccessibilityIcon`,`card_icon color_success`,`<w2:image id="cardAccessibilityImage" class="icon" src="/images/icons/shield.svg" alt=""></w2:image>`,`aria-hidden="true"`)}\n${R(`cardAccessibilityTitle`,`접근성`,`card_title`,`h3`)}\n${R(`cardAccessibilitySubtitle`,`WCAG 2.2 AA 기준`,`card_subtitle`,`p`)}`),`card_shadow`),B(`cardMonthlyUsers`,V(`cardMonthlyUsersBody`,z(`cardMonthlyUsersStat`,`stat`,`${R(`cardMonthlyUsersLabel`,`월간 활성 사용자`,`stat_label`)}\n${R(`cardMonthlyUsersValue`,`24.5K`,`stat_value`)}\n${R(`cardMonthlyUsersTrend`,`+18.2%`,`stat_desc color_success`)}`)),`card_shadow`)])}`,profile:B(`cardProfile`,[z(`cardProfileHeader`,`card_header`,`${z(`cardProfileMain`,`card_header-main`,`${R(`cardProfileAvatar`,`홍`,`avatar color_primary`)}\n${R(`cardProfileName`,`홍길동`,`card_title`,`h3`)}\n${R(`cardProfileRole`,`프론트엔드 개발자`,`card_subtitle`,`p`)}`)}\n${z(`cardProfileExtra`,`card_extra`,U(`cardProfileMore`,`더 보기`,`btn btn_ghost btn_icon-only btn_sm`))}`),V(`cardProfileBody`,z(`cardProfileTags`,`tag_group tag_group-tight`,`${R(`cardProfileReact`,`React`,`tag tag_sm color_primary`)}\n${R(`cardProfileTypeScript`,`TypeScript`,`tag tag_sm color_primary`)}\n${R(`cardProfileScss`,`SCSS`,`tag tag_sm color_default`)}`)),z(`cardProfileFooter`,`card_footer card_footer-between`,`${R(`cardProfileStatus`,`서울 · 온라인`,`color_muted size_sm`)}\n${U(`cardProfileFollow`,`팔로우`,`btn btn_outline color_primary btn_sm`)}`)].join(`
`),`card_shadow`),clickable:W(`cardClickableExample`,[`<w2:anchor id="cardClickableLink" class="card card_clickable card_hover" href="#">\n${K(V(`cardClickableLinkBody`,`${R(`cardClickableLinkTitle`,`링크 카드`,`card_title`,`h3`)}\n${R(`cardClickableLinkSubtitle`,`클릭하면 상세 페이지로 이동합니다.`,`card_subtitle`,`p`)}`))}\n</w2:anchor>`,B(`cardClickableAction`,V(`cardClickableActionBody`,`${R(`cardClickableActionTitle`,`인터랙티브 카드`,`card_title`,`h3`)}\n${R(`cardClickableActionSubtitle`,`키보드와 클릭으로 상세 동작을 실행합니다.`,`card_subtitle`,`p`)}`),`card_clickable card_hover card_shadow`,`role="link" tabindex="0" ev:onclick="scwin.card_onclick"`)],2),disabled:B(`cardDisabled`,V(`cardDisabledBody`,`${R(`cardDisabledTitle`,`비활성 카드`,`card_title`,`h3`)}\n${R(`cardDisabledSubtitle`,`현재 이용할 수 없습니다.`,`card_subtitle`,`p`)}`),`is-disabled`,`aria-disabled="true"`),grid:W(`cardGridExample`,[B(`cardFeatureA`,`${H(`cardFeatureAHeader`,`Feature A`)}\n${V(`cardFeatureABody`,R(`cardFeatureAText`,`빠른 성능과 가벼운 번들 크기.`))}`,`card_hover`),B(`cardFeatureB`,`${H(`cardFeatureBHeader`,`Feature B`)}\n${V(`cardFeatureBBody`,R(`cardFeatureBText`,`접근성을 고려한 마크업 구조.`))}`,`card_hover`),B(`cardFeatureC`,`${H(`cardFeatureCHeader`,`Feature C`)}\n${V(`cardFeatureCBody`,R(`cardFeatureCText`,`Pure SCSS로 커스터마이즈 가능.`))}`,`card_hover`)])},q=Object.fromEntries(Object.entries(C).map(([e,t])=>[e,[...t,{id:`websquare`,label:`WebSquare`,fileName:`Card.xml · ${e}`,code:Ee[e]}]]))})))()}var Oe,J,Y,X,Z,ke,Ae;function je(){return(je=e((()=>{Oe=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],J=(e,t,n)=>({title:e,description:n,tables:[{columns:Oe,rows:t}]}),Y=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),X=[{name:`variant`,type:`'bordered' | 'shadow' | 'flat'`,default:`bordered`,description:`카드 스킨. flat은 card_ghost`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'compact'`,default:`md`,description:`card_sm · card_lg · card_compact`},{name:`hoverable`,type:`boolean`,default:`false`,description:`호버 시 높임 효과`},{name:`title`,type:`string | number`,default:`—`,description:`CardHeader 없이 사용하는 내장 헤더 제목`},{name:`subtitle`,type:`string | number`,default:`—`,description:`내장 헤더 부제`},{name:`tag · as`,type:`ElementType · string`,default:`article`,description:`루트 HTML 태그`},{name:`media`,type:`ReactNode`,default:`—`,description:`상단 미디어 영역`},{name:`header`,type:`ReactNode`,default:`—`,description:`내장 헤더 콘텐츠`},{name:`extra`,type:`ReactNode`,default:`—`,description:`내장 헤더 우측 액션`},{name:`ripple`,type:`boolean`,default:`false`,description:`클릭 파장 효과`}],Z=[{name:`title`,type:`string | number`,default:`—`,description:`제목 (card_title)`},{name:`subtitle`,type:`string | number`,default:`—`,description:`부제 (card_subtitle)`},{name:`extra`,type:`ReactNode · slot`,default:`—`,description:`헤더 우측 액션 (card_extra)`},{name:`children · default`,type:`ReactNode · slot`,default:`—`,description:`title·subtitle를 대체하는 헤더 메인 콘텐츠`}],ke=[{name:`w2:group`,type:`component`,default:`—`,description:`Card와 header · body · footer · media · deck 내부 영역을 구성합니다.`},{name:`w2:textbox`,type:`component`,default:`—`,description:`제목·부제·본문·메타 텍스트를 label과 tagname으로 표시합니다.`},{name:`w2:image`,type:`component`,default:`—`,description:`카드 미디어와 아이콘의 프로젝트 정적 리소스를 표시합니다.`},{name:`w2:anchor`,type:`component`,default:`—`,description:`URL로 이동하는 링크 Card 또는 카드 내부 링크를 구성합니다.`},{name:`xf:trigger + xf:label`,type:`component`,default:`—`,description:`화면 동작을 실행하는 카드 액션을 구성합니다.`},{name:`class`,type:`string`,default:`card`,description:`card_* · color_* · is-disabled 공통 클래스를 조합합니다.`},{name:`role · aria-label · aria-disabled · tabindex`,type:`state`,default:`—`,description:`인터랙티브 Card, 미디어, 비활성 상태의 접근성 의미를 지정합니다.`},{name:`ev:onclick`,type:`event`,default:`—`,description:`클릭 가능한 Card와 내부 액션을 scwin 함수에 연결합니다.`},{name:`DataList · w2:generator`,type:`binding`,default:`선택`,description:`반복 Card 목록과 카드 데이터를 화면 데이터에 연결합니다.`}],Ae=[J(`React · Next.js API · Card Props`,X,"Next.js는 `@uxkm/react/card`를 재사용합니다."),J(`React · Next.js API · CardHeader Props`,Z),J(`React · Next.js API · CardBody Props`,[{name:`children`,type:`ReactNode`,default:`—`,description:`카드 본문`}]),J(`React · Next.js API · CardFooter Props`,[{name:`between`,type:`boolean`,default:`false`,description:`양끝 정렬 (card_footer-between)`},{name:`children`,type:`ReactNode`,default:`—`,description:`카드 하단 액션`}]),J(`React · Next.js API · CardDeck Props`,[{name:`columns`,type:`2 | 3`,default:`auto-fill`,description:`고정 반응형 열 수`},{name:`children`,type:`ReactNode`,default:`—`,description:`Card 목록`}]),J(`Vue · Nuxt API · Card Props`,Y(X.filter(e=>![`media`,`header`,`extra`].includes(e.name))),"Nuxt는 `@uxkm/vue/card`를 재사용합니다."),J(`Vue · Nuxt API · Card Slots`,[{name:`media`,type:`slot`,default:`—`,description:`상단 미디어 영역`},{name:`header`,type:`slot`,default:`—`,description:`title·subtitle를 대체하는 내장 헤더 콘텐츠`},{name:`extra`,type:`slot`,default:`—`,description:`내장 헤더 우측 액션`},{name:`default`,type:`slot`,default:`—`,description:`CardHeader · CardBody · CardFooter 등`}]),J(`Vue · Nuxt API · CardHeader Props / Slots`,Y(Z)),J(`Vue · Nuxt API · CardBody / CardFooter`,[{name:`CardBody default`,type:`slot`,default:`—`,description:`카드 본문`},{name:`CardFooter between`,type:`boolean`,default:`false`,description:`푸터 양끝 정렬`},{name:`CardFooter default`,type:`slot`,default:`—`,description:`카드 하단 액션`}]),J(`HTML · Gulp · 공통 클래스`,[{name:`card · card_inner · card_header · card_body · card_footer`,type:`class`,default:`—`,description:`카드와 주요 내부 영역`},{name:`card_title · card_subtitle · card_extra · card_media`,type:`class`,default:`—`,description:`제목·보조·미디어 파트`},{name:`card_sm · card_lg · card_compact · card_horizontal`,type:`class`,default:`—`,description:`크기와 레이아웃`},{name:`card_borderless · card_shadow · card_elevated · card_ghost`,type:`class`,default:`—`,description:`표면 스킨`},{name:`card_hover · card_clickable · card_accent · is-disabled`,type:`class`,default:`—`,description:`동작과 상태`},{name:`card_deck · card_deck-2 · card_deck-3`,type:`class`,default:`—`,description:`반응형 카드 그룹`}]),J(`WebSquare API · XML`,ke,`Card는 화면 XML의 group·textbox·image에 공통 구조 클래스를 적용하고 링크와 액션의 의미를 구분합니다.`),J(`공통 API · 디자인 토큰`,[{name:`--card-padding · --card-padding-sm · --card-padding-lg`,type:`length`,default:`var(--space-lg) · var(--space-md) · var(--space-xl)`,description:`크기별 내부 여백`},{name:`--card-radius · --card-shadow · --card-shadow-md`,type:`length · shadow`,default:`—`,description:`모서리와 그림자`},{name:`--card-media-ratio · --card-horizontal-media-width`,type:`ratio · length`,default:`16 / 9 · 7.5rem`,description:`미디어 비율과 가로형 너비`}])]})))()}function Me(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...d(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(oe,{of:te}),`
`,(0,Q.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,Q.jsx)(t.p,{children:`콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/card`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/card`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 카드와 내부 영역을 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`, 텍스트를 `,(0,Q.jsx)(t.code,{children:`w2:textbox`}),`, 카드 액션을 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),` 또는 `,(0,Q.jsx)(t.code,{children:`w2:anchor`}),`로 구성합니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,Q.jsx)(t.code,{children:`w2`}),`, `,(0,Q.jsx)(t.code,{children:`xf`}),`, `,(0,Q.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`Card`}),`, `,(0,Q.jsx)(t.code,{children:`CardHeader`}),`, `,(0,Q.jsx)(t.code,{children:`CardBody`}),`, `,(0,Q.jsx)(t.code,{children:`CardFooter`}),`, `,(0,Q.jsx)(t.code,{children:`CardDeck`}),` 자체의 실제 원본 구현입니다. React와 Vue는 prop·slot을 루트 의미, 내부 구조, 공통 클래스와 접근성 상태로 변환합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`variant`}),`·`,(0,Q.jsx)(t.code,{children:`size`}),`·`,(0,Q.jsx)(t.code,{children:`horizontal`}),`·`,(0,Q.jsx)(t.code,{children:`compact`}),`·`,(0,Q.jsx)(t.code,{children:`hoverable`}),`·`,(0,Q.jsx)(t.code,{children:`accent`}),`는 대응 `,(0,Q.jsx)(t.code,{children:`card_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`href`}),`가 있으면 링크, 클릭 핸들러가 있으면 버튼, 그 외에는 기본 `,(0,Q.jsx)(t.code,{children:`article`}),` 루트를 사용합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`비활성 인터랙티브 Card는 기본 동작을 차단하고 `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`와 `,(0,Q.jsx)(t.code,{children:`tabIndex=-1`}),`을 적용합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`media`}),`, 내장 header, `,(0,Q.jsx)(t.code,{children:`CardHeader`}),`·`,(0,Q.jsx)(t.code,{children:`CardBody`}),`·`,(0,Q.jsx)(t.code,{children:`CardFooter`}),`를 조합해 필요한 구조만 렌더링합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`CardDeck`}),`은 자동 반응형 그리드를 제공하며 `,(0,Q.jsx)(t.code,{children:`columns`}),`로 2열 또는 3열 클래스를 선택합니다.`]}),`
`]}),`
`,(0,Q.jsx)(p,{examples:Te,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`Card는 별도 WFrame을 불러오는 컴포넌트가 아니라 화면 XML의 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`에 `,(0,Q.jsx)(t.code,{children:`card`}),`와 변형 클래스를 적용하는 구조입니다. Header·Body·Footer·Media도 중첩 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`으로 구성하고 텍스트는 `,(0,Q.jsx)(t.code,{children:`w2:textbox`}),`의 `,(0,Q.jsx)(t.code,{children:`tagname`}),`으로 제목과 본문의 의미를 유지합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`URL 이동 Card는 `,(0,Q.jsx)(t.code,{children:`w2:anchor`}),`, 화면 동작 Card와 내부 버튼은 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),` 또는 `,(0,Q.jsx)(t.code,{children:`ev:onclick`}),`을 사용합니다. 비활성 Card는 이벤트를 연결하지 않고 `,(0,Q.jsx)(t.code,{children:`is-disabled`}),`와 접근성 상태를 함께 적용합니다. 반복 카드 목록은 DataList와 `,(0,Q.jsx)(t.code,{children:`w2:generator`}),`로 만들 수 있습니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_header`}),` · `,(0,Q.jsx)(t.code,{children:`card_body`}),` · `,(0,Q.jsx)(t.code,{children:`card_footer`}),` 구조를 가집니다.`]}),`
`,(0,Q.jsx)(f,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.basic}),`
`,(0,Q.jsx)(t.h2,{id:`간단`,children:`간단`}),`
`,(0,Q.jsx)(t.p,{children:`header나 footer 없이 body만 사용하는 단순 카드입니다.`}),`
`,(0,Q.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.simple}),`
`,(0,Q.jsx)(t.h2,{id:`스킨`,children:`스킨`}),`
`,(0,Q.jsx)(t.p,{children:`기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다.`}),`
`,(0,Q.jsx)(f,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.skin}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsx)(t.p,{children:`size로 패딩과 제목 크기를 조절합니다.`}),`
`,(0,Q.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.size}),`
`,(0,Q.jsx)(t.h2,{id:`강조-테두리`,children:`강조 테두리`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_accent`}),`와 `,(0,Q.jsx)(t.code,{children:`color_*`}),`로 왼쪽 강조선을 적용합니다.`]}),`
`,(0,Q.jsx)(f,{of:re,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.accent}),`
`,(0,Q.jsx)(t.h2,{id:`미디어`,children:`미디어`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_media`}),`로 상단 이미지·썸네일 영역을 추가합니다.`]}),`
`,(0,Q.jsx)(f,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.media}),`
`,(0,Q.jsx)(t.h2,{id:`가로`,children:`가로`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_horizontal`}),`로 미디어와 콘텐츠를 나란히 배치합니다. `,(0,Q.jsx)(t.code,{children:`card_inner`}),`로 본문을 감쌉니다.`]}),`
`,(0,Q.jsx)(f,{of:ne,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.horizontal}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--통계`,children:`아이콘 · 통계`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_icon`}),` · `,(0,Q.jsx)(t.code,{children:`card_stat`}),`으로 기능 소개·지표 카드를 구성합니다.`]}),`
`,(0,Q.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.iconStat}),`
`,(0,Q.jsx)(t.h2,{id:`프로필`,children:`프로필`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_avatar`}),` · `,(0,Q.jsx)(t.code,{children:`card_extra`}),`로 사용자·엔티티 정보 카드를 만듭니다.`]}),`
`,(0,Q.jsx)(f,{of:ie,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.profile}),`
`,(0,Q.jsx)(t.h2,{id:`클릭-가능`,children:`클릭 가능`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`a`}),` 태그 또는 `,(0,Q.jsx)(t.code,{children:`card_clickable`}),`로 전체 카드를 링크·버튼으로 만듭니다. `,(0,Q.jsx)(t.code,{children:`card_hover`}),`와 함께 사용합니다.`]}),`
`,(0,Q.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.clickable}),`
`,(0,Q.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`is-disabled`}),`로 비활성 상태를 표시합니다.`]}),`
`,(0,Q.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.disabled}),`
`,(0,Q.jsx)(t.h2,{id:`카드-그리드`,children:`카드 그리드`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`card_deck`}),`으로 여러 카드를 그리드로 배치합니다. `,(0,Q.jsx)(t.code,{children:`card_deck-2`}),` · `,(0,Q.jsx)(t.code,{children:`card_deck-3`}),`로 열 수를 조절합니다.`]}),`
`,(0,Q.jsx)(f,{of:u,sourceState:`none`}),`
`,(0,Q.jsx)(p,{examples:q.grid}),`
`,(0,Q.jsx)(ue,{sections:Ae})]})}function Ne(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Me,{...e})}):Me(e)}var Q;function $(){return($=e((()=>{Q=t(),ae(),se(),ce(),le(),De(),je(),c()})))()}$();export{Ne as default};