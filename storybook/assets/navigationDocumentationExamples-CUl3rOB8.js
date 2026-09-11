import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e){return e===`basic`?`${d}

${ne(`UXKM`,[[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])}`:e===`brand`?`${d}

${ne(`HTML Components`,[[`가이드`,!0],[`리소스`]],`brandIconName='grid'`)}`:e===`brandImage`?`${d}

${ne(``,[[`가이드`,!0],[`리소스`]],`brandSrc='/images/brand/uxkm_logo_hand.svg', brandAlt='UXKM'`)}`:e===`brandBackground`?`${d}

${ne(`UXKM`,[[`가이드`,!0],[`리소스`]],`brandBackground='/images/brand/uxkm_logo_hand.svg', brandAlt='UXKM'`)}`:e===`actions`?`${d}
{% from "components/basic/Button/button.njk" import button %}

{% set items %}
  ${f([[`개요`,!0],[`분석`],[`설정`]]).replaceAll(`
`,`
  `)}
{% endset %}
{% set actions %}
  {{ button(variant='ghost', color='', size='sm', iconOnly=true, iconBefore='bell', ariaLabel='알림') }}
  {{ button(variant='outline', size='sm', label='로그인') }}
  {{ button(size='sm', label='가입') }}
{% endset %}
{{ navbar(brand='Dashboard', items=items, actions=actions) }}`:e===`search`?`${d}
{% from "components/basic/Button/button.njk" import button %}
{% from "components/form/Input/input.njk" import input %}

{% set items %}
  ${f([[`시작하기`],[`컴포넌트`,!0],[`패턴`]]).replaceAll(`
`,`
  `)}
{% endset %}
{% set search %}
  {{ input(
    id='navbar-search-demo',
    type='search',
    size='sm',
    placeholder='문서 검색…',
    ariaLabel='문서 검색'
  ) }}
{% endset %}
{% set actions %}{{ button(size='sm', label='GitHub') }}{% endset %}
{{ navbar(brand='Docs', items=items, search=search, actions=actions) }}`:e===`size`?`${d}

{% set items %}${f([[`메뉴`,!0]])}{% endset %}
{{ navbar(brand='Small', size='sm', items=items) }}
{{ navbar(brand='Default', items=items) }}
{{ navbar(brand='Large', size='lg', items=items) }}`:e===`variant`?`${d}

{% set standardItems %}${f([[`홈`,!0],[`소개`]])}{% endset %}
{{ navbar(brand='Borderless', borderless=true, items=standardItems) }}
{{ navbar(brand='Dark Surface', dark=true, items=standardItems) }}

<div class="navbar_demo-scroll">
  {% set stickyItems %}${f([[`고정`,!0]])}{% endset %}
  {{ navbar(brand='Sticky', sticky=true, items=stickyItems) }}
  <div class="navbar-scroll-content">
    <p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
    <p>콘텐츠 영역 예시입니다.</p>
    <p>추가 콘텐츠…</p>
    <p>추가 콘텐츠…</p>
  </div>
</div>`:e===`badge`?`${d}
{% from "components/data-display/Badge/badge.njk" import badge %}

{% set noticeBadge %}{{ badge(color='danger', label='3') }}{% endset %}
{% set items %}
  {% call navbarList() %}
    {{ navbarItem(label='받은편지함', active=true) }}
    {{ navbarItem(label='알림', badge=noticeBadge) }}
    {{ navbarItem(label='보관함') }}
  {% endcall %}
{% endset %}
{{ navbar(brand='Inbox', items=items) }}`:`${d}
{% from "components/basic/Button/button.njk" import button %}

{% set items %}
  ${f([[`홈`,!0],[`제품`],[`가격`],[`문의`]]).replaceAll(`
`,`
  `)}
{% endset %}
{% set actions %}
  {{ button(variant='outline', size='sm', label='로그인') }}
  {{ button(size='sm', label='시작하기') }}
{% endset %}
{{ navbar(
  brand='Mobile',
  responsive=true,
  collapseId='navbar-responsive-demo',
  items=items,
  actions=actions
) }}`}function n(e){let n=[`actions`,`search`,`responsive`].includes(e),r=[`brand`,`actions`].includes(e),i=e===`search`,a=e===`badge`,o=[`import { Navbar, NavbarItem, NavbarList } from '@uxkm/react/navbar';`,n&&`import Button from '@uxkm/react/button';`,r&&`import Icon from '@uxkm/react/icon';`,i&&`import Input from '@uxkm/react/input';`,a&&`import Badge from '@uxkm/react/badge';`].filter(Boolean).join(`
`),c=[`import { Navbar, NavbarItem, NavbarList } from '@uxkm/vue/navbar';`,n&&`import Button from '@uxkm/vue/button';`,r&&`import Icon from '@uxkm/vue/icon';`,i&&`import Input from '@uxkm/vue/input';`,a&&`import Badge from '@uxkm/vue/badge';`].filter(Boolean).join(`
`),l=`${o}\n\nexport function Example() { return <>${ee[e]}</>; }`,u=`<script setup>\n${c}\n<\/script>\n<template>\n${te[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Navbar.html · ${e}`,code:s[e]},{id:`gulp`,label:`Gulp`,fileName:`navbar.njk · ${e}`,code:t(e)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/navbar · ${e}`,code:u},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/navbar · ${e}`,code:u},{id:`react`,label:`React`,fileName:`@uxkm/react/navbar · ${e}`,code:l},{id:`next`,label:`Next`,fileName:`@uxkm/react/navbar · ${e}`,code:l}]}var r,i,a,o,s,c,ee,l,u,te,d,f,ne,re;function ie(){return(ie=e((()=>{r=[`basic`,`brand`,`brandImage`,`brandBackground`,`actions`,`search`,`size`,`variant`,`badge`,`responsive`],i=e=>`<ul class="navbar_list">${e.map(([e,t,n])=>`<li class="navbar_item"><a href="#" class="navbar_link${t?` is-active`:``}"${t?` aria-current="page"`:``}>${e}${n||``}</a></li>`).join(``)}</ul>`,a=(e,t,n={})=>{let r=n.id||`navbar-collapse`,i=n.responsive?`<button type="button" class="btn btn_ghost btn_icon-only navbar_toggle" data-navbar-toggle aria-expanded="false" aria-controls="${r}" aria-label="메뉴 열기"><svg class="icon icon_sm navbar_toggle-icon-open" data-component="Icon" data-icon="menu" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg><svg class="icon icon_sm navbar_toggle-icon-close" data-component="Icon" data-icon="close" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"></path></svg></button>`:``,a=n.brandBackground?`<a href="#" class="navbar_brand navbar_brand-bg" style="--navbar-brand-bg-image: url('${n.brandBackground}')" aria-label="${n.brandAlt||e}"><span class="navbar_brand-sr">${e}</span></a>`:n.brandSrc?`<a href="#" class="navbar_brand"><img class="navbar_brand-image" src="${n.brandSrc}" alt="${n.brandAlt||e}" />${e?`<span class="navbar_brand-text">${e}</span>`:``}</a>`:`<a href="#" class="navbar_brand">${n.icon||``}${e}</a>`;return`<header class="navbar${n.classes?` ${n.classes}`:``}" data-component="Navbar"${n.responsive?` data-navbar`:``}><div class="navbar_container">${a}${i}<div class="navbar_collapse" id="${r}"><nav class="navbar_nav" aria-label="주요 메뉴">${t}</nav>${n.search?`<div class="navbar_search">${n.search}</div>`:``}${n.actions?`<div class="navbar_actions">${n.actions}</div>`:``}</div></div></header>`},o=(e,t=`outline`)=>`<button type="button" class="btn btn_${t}${t===`filled`?` color_primary`:``} btn_sm"><span class="btn_label">${e}</span></button>`,s={basic:a(`UXKM`,i([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])),brand:a(`HTML Components`,i([[`가이드`,!0],[`리소스`]]),{icon:`<svg class="icon navbar_brand-icon" data-component="Icon" data-icon="grid" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>`}),brandImage:a(``,i([[`가이드`,!0],[`리소스`]]),{brandSrc:`/images/brand/uxkm_logo_hand.svg`,brandAlt:`UXKM`}),brandBackground:a(`UXKM`,i([[`가이드`,!0],[`리소스`]]),{brandBackground:`/images/brand/uxkm_logo_hand.svg`,brandAlt:`UXKM`}),actions:a(`Dashboard`,i([[`개요`,!0],[`분석`],[`설정`]]),{actions:`<button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="알림"><svg class="icon" data-component="Icon" data-icon="bell" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4"></path></svg></button>${o(`로그인`)}${o(`가입`,`filled`)}`}),search:a(`Docs`,i([[`시작하기`],[`컴포넌트`,!0],[`패턴`]]),{search:`<input class="input input_sm" type="search" id="navbar-search-demo" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색">`,actions:o(`GitHub`,`filled`)}),size:[a(`Small`,i([[`메뉴`,!0]]),{classes:`navbar_sm`}),a(`Default`,i([[`메뉴`,!0]])),a(`Large`,i([[`메뉴`,!0]]),{classes:`navbar_lg`})].join(`

`),variant:[a(`Borderless`,i([[`홈`,!0],[`소개`]]),{classes:`navbar_borderless`}),a(`Dark Surface`,i([[`홈`,!0],[`소개`]]),{classes:`navbar_dark`}),`<div class="navbar_demo-scroll">${a(`Sticky`,i([[`고정`,!0]]),{classes:`navbar_sticky`})}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`].join(`

`),badge:a(`Inbox`,i([[`받은편지함`,!0],[`알림`,!1,`<span class="badge color_danger" data-component="Badge">3</span>`],[`보관함`]])),responsive:a(`Mobile`,i([[`홈`,!0],[`제품`],[`가격`],[`문의`]]),{responsive:!0,id:`navbar-responsive-demo`,actions:`${o(`로그인`)}${o(`시작하기`,`filled`)}`})},c=e=>`<NavbarList>${e.map(([e,t])=>`<NavbarItem label="${e}"${t?` active`:``} />`).join(``)}</NavbarList>`,ee={basic:`<Navbar brand="UXKM" items={${c([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])}} />`,brand:`<Navbar brand="HTML Components" brandIcon={<Icon name="grid" className="navbar_brand-icon" />} items={${c([[`가이드`,!0],[`리소스`]])}} />`,brandImage:`<Navbar brandSrc="/images/brand/uxkm_logo_hand.svg" brandAlt="UXKM" ariaLabel="UXKM" items={${c([[`가이드`,!0],[`리소스`]])}} />`,brandBackground:`<Navbar brandBackground="/images/brand/uxkm_logo_hand.svg" ariaLabel="UXKM" items={${c([[`가이드`,!0],[`리소스`]])}} />`,actions:`<Navbar brand="Dashboard" items={${c([[`개요`,!0],[`분석`],[`설정`]])}} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} />`,search:`<Navbar brand="Docs" items={${c([[`시작하기`],[`컴포넌트`,!0],[`패턴`]])}} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" ariaLabel="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} />`,size:`<Navbar brand="Small" size="sm" items={${c([[`메뉴`,!0]])}} />\n<Navbar brand="Default" items={${c([[`메뉴`,!0]])}} />\n<Navbar brand="Large" size="lg" items={${c([[`메뉴`,!0]])}} />`,variant:`<Navbar brand="Borderless" borderless items={${c([[`홈`,!0],[`소개`]])}} />\n<Navbar brand="Dark Surface" dark items={${c([[`홈`,!0],[`소개`]])}} />\n<div className="navbar_demo-scroll"><Navbar brand="Sticky" sticky items={${c([[`고정`,!0]])}} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,badge:`<Navbar brand="Inbox" items={<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림" badge={<Badge color="danger" label="3" />} /><NavbarItem label="보관함" /></NavbarList>} />`,responsive:`<Navbar brand="Mobile" responsive collapseId="navbar-responsive-demo" items={${c([[`홈`,!0],[`제품`],[`가격`],[`문의`]])}} actions={<><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></>} />`},l=e=>`<NavbarList>${e.map(([e,t])=>`<NavbarItem label="${e}"${t?` active`:``} />`).join(``)}</NavbarList>`,u=(e,t,n=``)=>`<Navbar ${e}><template #items>${t}</template>${n}</Navbar>`,te={basic:u(`brand="UXKM"`,l([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])),brand:u(`brand="HTML Components"`,l([[`가이드`,!0],[`리소스`]]),`<template #brand-icon><Icon name="grid" class="navbar_brand-icon" /></template>`),brandImage:u(`brand-src="/images/brand/uxkm_logo_hand.svg" brand-alt="UXKM" aria-label="UXKM"`,l([[`가이드`,!0],[`리소스`]])),brandBackground:u(`brand-background="/images/brand/uxkm_logo_hand.svg" aria-label="UXKM"`,l([[`가이드`,!0],[`리소스`]])),actions:u(`brand="Dashboard"`,l([[`개요`,!0],[`분석`],[`설정`]]),`<template #actions><Button variant="ghost" size="sm" icon-only aria-label="알림"><template #icon-before><Icon name="bell" /></template></Button><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></template>`),search:u(`brand="Docs"`,l([[`시작하기`],[`컴포넌트`,!0],[`패턴`]]),`<template #search><Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" /></template><template #actions><Button variant="filled" color="primary" size="sm" label="GitHub" /></template>`),size:`${u(`brand="Small" size="sm"`,l([[`메뉴`,!0]]))}\n${u(`brand="Default"`,l([[`메뉴`,!0]]))}\n${u(`brand="Large" size="lg"`,l([[`메뉴`,!0]]))}`,variant:`${u(`brand="Borderless" borderless`,l([[`홈`,!0],[`소개`]]))}\n${u(`brand="Dark Surface" dark`,l([[`홈`,!0],[`소개`]]))}\n<div class="navbar_demo-scroll">${u(`brand="Sticky" sticky`,l([[`고정`,!0]]))}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,badge:u(`brand="Inbox"`,`<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림"><template #badge><Badge color="danger" label="3" /></template></NavbarItem><NavbarItem label="보관함" /></NavbarList>`),responsive:u(`brand="Mobile" responsive collapse-id="navbar-responsive-demo"`,l([[`홈`,!0],[`제품`],[`가격`],[`문의`]]),`<template #actions><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></template>`)},d=`{% from "components/navigation/Navbar/navbar.njk" import navbar, navbarList, navbarItem %}`,f=e=>`{% call navbarList() %}
${e.map(([e,t,n])=>`  {{ navbarItem(label='${e}'${t?`, active=true`:``}${n?`, badge=${n}`:``}) }}`).join(`
`)}
{% endcall %}`,ne=(e,t,n=``)=>`{% set items %}
  ${f(t).replaceAll(`
`,`
  `)}
{% endset %}
{{ navbar(brand='${e}', items=items${n?`, ${n}`:``}) }}`,re=Object.fromEntries(r.map(e=>[e,n(e)]))})))()}function ae(e){let t=e=>e.map((e,t)=>S(e,t===0?`active=true`:``)).join(`
`);if(e===`basic`)return`${x}

${C(t([`대시보드`,`분석`,`사용자`,`설정`]),`bordered=true, ariaLabel='주요 메뉴'`)}`;if(e===`horizontal`)return`${x}

${C(t([`개요`,`컴포넌트`,`토큰`,`접근성`]),`mode='horizontal', bordered=true, ariaLabel='섹션 메뉴'`)}`;if(e===`icon`)return`${x}

${C([S(`대시보드`,`active=true, icon='grid'`),S(`사용자`,`icon='user'`),S(`문서`,`icon='book'`),S(`설정`,`icon='settings'`)].join(`
`),`bordered=true, ariaLabel='앱 메뉴'`)}`;if(e===`submenu`){let e=[`Button`,`Input`,`Card`].map(e=>S(e)).join(`
`),t=[`폼 레이아웃`,`데이터 테이블`].map(e=>S(e)).join(`
`);return`${x}

${C([S(`홈`,`active=true, icon='home'`),fe(`컴포넌트`,`menu-sub-components`,e,`expanded=true, icon='grid'`),fe(`패턴`,`menu-sub-patterns`,t,`icon='book'`)].join(`
`),`bordered=true, ariaLabel='컴포넌트 메뉴'`)}`}if(e===`group`)return`${x}

{% call menu(bordered=true, ariaLabel='설정 메뉴') %}
  {{ menuGroup(title='계정') }}
  {{ menuItem(label='프로필', active=true) }}
  {{ menuItem(label='보안') }}
  {{ menuDivider() }}
  {{ menuGroup(title='앱') }}
  {{ menuItem(label='알림') }}
  {{ menuItem(label='언어') }}
  {{ menuDivider() }}
  {{ menuItem(label='로그아웃') }}
{% endcall %}`;if(e===`disabled`)return`${x}

${C([S(`조회`,`active=true`),S(`편집`),S(`삭제`,`disabled=true`),S(`관리자 설정`,`disabled=true`)].join(`
`),`bordered=true, ariaLabel='권한 메뉴'`)}`;if(e===`badge`)return`${x}
{% from "components/data-display/Badge/badge.njk" import badge %}

{% set inboxBadge %}{{ badge(count=true, color='primary', label='12') }}{% endset %}
{% set noticeBadge %}{{ badge(dotOnly=true, color='danger', ariaLabel='새 알림') }}{% endset %}
{% set betaBadge %}{{ badge(color='default', label='Beta') }}{% endset %}

{% call menu(bordered=true, ariaLabel='알림 메뉴') %}
  {{ menuItem(label='받은편지함', active=true, icon='mail', extra=inboxBadge) }}
  {{ menuItem(label='알림', icon='bell', extra=noticeBadge) }}
  {{ menuItem(label='메시지', icon='mail', extra=betaBadge) }}
{% endcall %}`;if(e===`horizontalSubmenu`){let e=[`Button`,`Input`,`Select`].map(e=>S(e)).join(`
`);return`${x}

{% call menu(mode='horizontal', bordered=true, ariaLabel='상단 메뉴') %}
  {{ menuItem(label='홈', active=true) }}
  ${fe(`컴포넌트`,`menu-sub-h-components`,e).replaceAll(`
`,`
  `)}
  {{ menuItem(label='토큰') }}
  {{ menuItem(label='접근성') }}
{% endcall %}`}if(e===`layout`){let e=[`시작하기`,`컴포넌트`].map(e=>S(e)).join(`
`);return`${x}

<div class="menu_demo-row">
  <div class="menu_demo-sidebar">
    {% call menu(bordered=true, compact=true, ariaLabel='앱 사이드바') %}
      {{ menuItem(label='개요', active=true, icon='grid') }}
      ${fe(`문서`,`menu-sub-sidebar`,e,`expanded=true, icon='book'`).replaceAll(`
`,`
      `)}
      {{ menuItem(label='설정', icon='settings') }}
    {% endcall %}
  </div>
  <div class="menu_demo-content">
    <p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
  </div>
</div>`}return`${x}

${C(t([`항목 A`,`항목 B`,`항목 C`]),`bordered=true, compact=true, ariaLabel='컴팩트 메뉴'`)}

${C(t([`항목 A`,`항목 B`,`항목 C`]),`bordered=true, dark=true, ariaLabel='다크 서피스 메뉴'`)}`}function oe(e){let t=`Menu, MenuItem, MenuDivider, MenuGroup, MenuSubmenu`,n=[`icon`,`submenu`,`badge`,`layout`].includes(e),r=e===`badge`,i=[`import { ${t} } from '@uxkm/react/menu';`,n&&`import Icon from '@uxkm/react/icon';`,r&&`import Badge from '@uxkm/react/badge';`].filter(Boolean).join(`
`),a=[`import { ${t} } from '@uxkm/vue/menu';`,n&&`import Icon from '@uxkm/vue/icon';`,r&&`import Badge from '@uxkm/vue/badge';`].filter(Boolean).join(`
`),o=`${i}\n\nexport function Example() { return <>${ue[e]}</>; }`,s=`<script setup>\n${a}\n<\/script>\n<template>\n${de[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Menu.html · ${e}`,code:le[e]},{id:`gulp`,label:`Gulp`,fileName:`menu.njk · ${e}`,code:ae(e)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/menu · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/menu · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/menu · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/menu · ${e}`,code:o}]}var se,ce,p,m,h,g,le,_,v,ue,y,b,de,x,S,C,fe,pe;function me(){return(me=e((()=>{se=[`basic`,`horizontal`,`icon`,`submenu`,`group`,`disabled`,`badge`,`horizontalSubmenu`,`layout`,`variant`],ce=e=>`<svg class="icon menu_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`grid`?`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`:e===`user`?`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`:e===`settings`?`M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z`:e===`home`?`m3 11 9-8 9 8M5 10v11h14V10`:e===`bell`?`M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4`:e===`mail`?`M3 5h18v14H3zM3 7l9 6 9-6`:`M4 3h12l4 4v14H4zM16 3v5h5`}"></path></svg>`,p=(e,t={})=>`<li class="menu_item${t.disabled?` is-disabled`:``}"><button type="button" class="menu_link${t.active?` is-active`:``}${t.disabled?` is-disabled`:``}"${t.active?` aria-current="page"`:``}${t.disabled?` aria-disabled="true"`:``}>${t.icon?ce(t.icon):``}<span class="menu_label">${e}</span>${t.extra?`<span class="menu_extra">${t.extra}</span>`:``}</button></li>`,m=(e,t,n,r=!1,i)=>`<li class="menu_item menu_item-submenu" aria-expanded="${r}"><button type="button" class="menu_link" data-menu-submenu-toggle aria-expanded="${r}" aria-controls="${t}">${i?ce(i):``}<span class="menu_label">${e}</span><svg class="icon menu_arrow" data-component="Icon" data-icon="chevron-down" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></button><ul id="${t}" class="menu_submenu">${n}</ul></li>`,h=(e,t,n=`menu_vertical menu_bordered`)=>`<nav class="menu ${n}" data-component="Menu" data-menu-selectable aria-label="${t}"><ul class="menu_list">${e}</ul></nav>`,g=(e,t=0)=>e.map((e,n)=>p(e,{active:n===t})).join(``),le={basic:h(g([`대시보드`,`분석`,`사용자`,`설정`]),`주요 메뉴`),horizontal:h(g([`개요`,`컴포넌트`,`토큰`,`접근성`]),`섹션 메뉴`,`menu_horizontal menu_bordered`),icon:h([[`대시보드`,`grid`],[`사용자`,`user`],[`문서`,`book`],[`설정`,`settings`]].map(([e,t],n)=>p(e,{icon:t,active:n===0})).join(``),`앱 메뉴`),submenu:h(p(`홈`,{active:!0,icon:`home`})+m(`컴포넌트`,`menu-sub-components`,g([`Button`,`Input`,`Card`],-1),!0,`grid`)+m(`패턴`,`menu-sub-patterns`,g([`폼 레이아웃`,`데이터 테이블`],-1),!1,`book`),`컴포넌트 메뉴`),group:h(`<li class="menu_group" role="presentation"><span class="menu_group-title">계정</span></li>`+p(`프로필`,{active:!0})+p(`보안`)+`<li class="menu_divider" role="separator"></li><li class="menu_group" role="presentation"><span class="menu_group-title">앱</span></li>`+p(`알림`)+p(`언어`)+`<li class="menu_divider" role="separator"></li>`+p(`로그아웃`),`설정 메뉴`),disabled:h(p(`조회`,{active:!0})+p(`편집`)+p(`삭제`,{disabled:!0})+p(`관리자 설정`,{disabled:!0}),`권한 메뉴`),badge:h(p(`받은편지함`,{active:!0,icon:`mail`,extra:`<span class="badge badge_count color_primary" data-component="Badge">12</span>`})+p(`알림`,{icon:`bell`,extra:`<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 알림"></span>`})+p(`메시지`,{icon:`mail`,extra:`<span class="badge color_default" data-component="Badge">Beta</span>`}),`알림 메뉴`),horizontalSubmenu:h(p(`홈`,{active:!0})+m(`컴포넌트`,`menu-sub-h-components`,g([`Button`,`Input`,`Select`],-1))+p(`토큰`)+p(`접근성`),`상단 메뉴`,`menu_horizontal menu_bordered`),layout:`<div class="menu_demo-row"><div class="menu_demo-sidebar">${h(p(`개요`,{active:!0,icon:`grid`})+m(`문서`,`menu-sub-sidebar`,g([`시작하기`,`컴포넌트`],-1),!0,`book`)+p(`설정`,{icon:`settings`}),`앱 사이드바`,`menu_vertical menu_bordered menu_compact`)}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:h(g([`항목 A`,`항목 B`,`항목 C`]),`컴팩트 메뉴`,`menu_vertical menu_bordered menu_compact`)+`
`+h(g([`항목 A`,`항목 B`,`항목 C`]),`다크 서피스 메뉴`,`menu_vertical menu_bordered menu_dark`)},_=(e,t=``)=>`<MenuItem label="${e}"${t?` ${t}`:``} />`,v=(e,t=`bordered`)=>`<Menu ${t}>${e}</Menu>`,ue={basic:v(_(`대시보드`,`active`)+_(`분석`)+_(`사용자`)+_(`설정`),`bordered ariaLabel="주요 메뉴"`),horizontal:v(_(`개요`,`active`)+_(`컴포넌트`)+_(`토큰`)+_(`접근성`),`mode="horizontal" bordered ariaLabel="섹션 메뉴"`),icon:v(_(`대시보드`,`active icon={<Icon name="grid" className="menu_icon" />}`)+_(`사용자`,`icon={<Icon name="user" className="menu_icon" />}`)+_(`문서`,`icon={<Icon name="book" className="menu_icon" />}`)+_(`설정`,`icon={<Icon name="settings" className="menu_icon" />}`),`bordered ariaLabel="앱 메뉴"`),submenu:v(_(`홈`,`active icon={<Icon name="home" className="menu_icon" />}`)+`<MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components" icon={<Icon name="grid" className="menu_icon" />}>`+_(`Button`)+_(`Input`)+_(`Card`)+`</MenuSubmenu><MenuSubmenu label="패턴" submenuId="menu-sub-patterns" icon={<Icon name="book" className="menu_icon" />}>`+_(`폼 레이아웃`)+_(`데이터 테이블`)+`</MenuSubmenu>`,`bordered ariaLabel="컴포넌트 메뉴"`),group:v(`<MenuGroup title="계정" />`+_(`프로필`,`active`)+_(`보안`)+`<MenuDivider /><MenuGroup title="앱" />`+_(`알림`)+_(`언어`)+`<MenuDivider />`+_(`로그아웃`),`bordered ariaLabel="설정 메뉴"`),disabled:v(_(`조회`,`active`)+_(`편집`)+_(`삭제`,`disabled`)+_(`관리자 설정`,`disabled`),`bordered ariaLabel="권한 메뉴"`),badge:v(_(`받은편지함`,`active icon={<Icon name="mail" className="menu_icon" />} extra={<Badge count color="primary" label="12" />}`)+_(`알림`,`icon={<Icon name="bell" className="menu_icon" />} extra={<Badge dotOnly color="danger" ariaLabel="새 알림" />}`)+_(`메시지`,`icon={<Icon name="mail" className="menu_icon" />} extra={<Badge color="default" label="Beta" />}`),`bordered ariaLabel="알림 메뉴"`),horizontalSubmenu:v(_(`홈`,`active`)+`<MenuSubmenu label="컴포넌트" submenuId="menu-sub-h-components">`+_(`Button`)+_(`Input`)+_(`Select`)+`</MenuSubmenu>`+_(`토큰`)+_(`접근성`),`mode="horizontal" bordered ariaLabel="상단 메뉴"`),layout:`<div className="menu_demo-row"><div className="menu_demo-sidebar">${v(_(`개요`,`active icon={<Icon name="grid" className="menu_icon" />}`)+`<MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar" icon={<Icon name="book" className="menu_icon" />}>`+_(`시작하기`)+_(`컴포넌트`)+`</MenuSubmenu>`+_(`설정`,`icon={<Icon name="settings" className="menu_icon" />}`),`bordered compact ariaLabel="앱 사이드바"`)}</div><div className="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:v(_(`항목 A`,`active`)+_(`항목 B`)+_(`항목 C`),`bordered compact ariaLabel="컴팩트 메뉴"`)+v(_(`항목 A`,`active`)+_(`항목 B`)+_(`항목 C`),`bordered dark ariaLabel="다크 서피스 메뉴"`)},y=(e,t=``,n=``,r=``)=>n||r?`<MenuItem label="${e}"${t?` ${t}`:``}>${n?`<template #icon><Icon name="${n}" class="menu_icon" /></template>`:``}${r?`<template #extra>${r}</template>`:``}</MenuItem>`:`<MenuItem label="${e}"${t?` ${t}`:``} />`,b=(e,t=`bordered`)=>`<Menu ${t}>${e}</Menu>`,de={basic:b(y(`대시보드`,`active`)+y(`분석`)+y(`사용자`)+y(`설정`),`bordered aria-label="주요 메뉴"`),horizontal:b(y(`개요`,`active`)+y(`컴포넌트`)+y(`토큰`)+y(`접근성`),`mode="horizontal" bordered aria-label="섹션 메뉴"`),icon:b(y(`대시보드`,`active`,`grid`)+y(`사용자`,``,`user`)+y(`문서`,``,`book`)+y(`설정`,``,`settings`),`bordered aria-label="앱 메뉴"`),submenu:b(y(`홈`,`active`,`home`)+`<MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components"><template #icon><Icon name="grid" class="menu_icon" /></template>`+y(`Button`)+y(`Input`)+y(`Card`)+`</MenuSubmenu><MenuSubmenu label="패턴" submenu-id="menu-sub-patterns"><template #icon><Icon name="book" class="menu_icon" /></template>`+y(`폼 레이아웃`)+y(`데이터 테이블`)+`</MenuSubmenu>`,`bordered aria-label="컴포넌트 메뉴"`),group:b(`<MenuGroup title="계정" />`+y(`프로필`,`active`)+y(`보안`)+`<MenuDivider /><MenuGroup title="앱" />`+y(`알림`)+y(`언어`)+`<MenuDivider />`+y(`로그아웃`),`bordered aria-label="설정 메뉴"`),disabled:b(y(`조회`,`active`)+y(`편집`)+y(`삭제`,`disabled`)+y(`관리자 설정`,`disabled`),`bordered aria-label="권한 메뉴"`),badge:b(y(`받은편지함`,`active`,`mail`,`<Badge count color="primary" label="12" />`)+y(`알림`,``,`bell`,`<Badge dot-only color="danger" aria-label="새 알림" />`)+y(`메시지`,``,`mail`,`<Badge color="default" label="Beta" />`),`bordered aria-label="알림 메뉴"`),horizontalSubmenu:b(y(`홈`,`active`)+`<MenuSubmenu label="컴포넌트" submenu-id="menu-sub-h-components">`+y(`Button`)+y(`Input`)+y(`Select`)+`</MenuSubmenu>`+y(`토큰`)+y(`접근성`),`mode="horizontal" bordered aria-label="상단 메뉴"`),layout:`<div class="menu_demo-row"><div class="menu_demo-sidebar">${b(y(`개요`,`active`,`grid`)+`<MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar"><template #icon><Icon name="book" class="menu_icon" /></template>`+y(`시작하기`)+y(`컴포넌트`)+`</MenuSubmenu>`+y(`설정`,``,`settings`),`bordered compact aria-label="앱 사이드바"`)}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:b(y(`항목 A`,`active`)+y(`항목 B`)+y(`항목 C`),`bordered compact aria-label="컴팩트 메뉴"`)+b(y(`항목 A`,`active`)+y(`항목 B`)+y(`항목 C`),`bordered dark aria-label="다크 서피스 메뉴"`)},x=`{% from "components/navigation/Menu/menu.njk" import menu, menuItem, menuSubmenu, menuGroup, menuDivider %}`,S=(e,t=``)=>`{{ menuItem(label='${e}'${t?`, ${t}`:``}) }}`,C=(e,t)=>`{% call menu(${t}) %}
  ${e.replaceAll(`
`,`
  `)}
{% endcall %}`,fe=(e,t,n,r=``)=>`{% call menuSubmenu(label='${e}', id='${t}'${r?`, ${r}`:``}) %}
  ${n.replaceAll(`
`,`
  `)}
{% endcall %}`,pe=Object.fromEntries(se.map(e=>[e,oe(e)]))})))()}function w(e,t,n={}){let r=n.classes||`tabs_line`,i=n.label||`탭`,a=t.map((t,n)=>{let r=`<button type="button" class="tabs_tab${n===0?` is-active`:``}${t.disabled?` is-disabled`:``}" role="tab" id="${e}-tab-${n}" aria-selected="${n===0}" aria-controls="${e}-panel-${n}"${n?` tabindex="-1"`:``}${t.disabled?` aria-disabled="true" disabled`:``}>${t.icon?ve(t.icon):``}<span class="tabs_label">${t.label}</span>${t.badge?`<span class="tabs_badge">${t.badge}</span>`:``}</button>`;return t.closable?`<span class="tabs_item${n===0?` is-active`:``}">${r}<button type="button" class="tabs_close" data-tabs-close aria-label="${t.label} 닫기" tabindex="-1">${ve(`close`)}</button></span>`:r}).join(``),o=t.map((t,n)=>`<div class="tabs_panel${n===0?` is-active`:``}" role="tabpanel" id="${e}-panel-${n}" aria-labelledby="${e}-tab-${n}"${n?` hidden`:``}>${t.content}</div>`).join(``),s=n.nav?`<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="prev" aria-label="이전 탭">‹</button>`:``,c=n.nav?`<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="next" aria-label="다음 탭">›</button>`:``;return`<div class="tabs ${r}" data-component="Tabs" data-tabs><div class="tabs_bar">${s}<div class="tabs_list-wrap${n.nav?` tabs_scroll-viewport`:``}"><div class="tabs_list" role="tablist" aria-label="${i}">${a}</div></div>${c}${n.extra?`<div class="tabs_extra">${n.extra}</div>`:``}</div><div class="tabs_panels">${o}</div></div>`}function T(e,t,n={}){let r=t.map((t,n)=>{let r=t.badge?`, badge=${t.label===`읽지 않음`?`unreadBadge`:`importantBadge`}`:``;return`  {{ tab(id='${e}-tab-${n}', panelId='${e}-panel-${n}', label='${t.label}'${n===0?`, active=true`:``}${t.disabled?`, disabled=true`:``}${t.closable?`, closable=true`:``}${t.icon?`, icon='${t.icon}'`:``}${r}) }}`}).join(`
`),i=t.map((t,n)=>`  {% call tabPanel(id='${e}-panel-${n}', tabId='${e}-tab-${n}'${n===0?`, active=true`:``}) %}${t.content}{% endcall %}`).join(`
`),a=[`tabs=tabItems`,`panels=tabPanels`,n.variant&&`variant='${n.variant}'`,n.size&&`size='${n.size}'`,n.layout&&`layout='${n.layout}'`,n.vertical&&`vertical=true`,n.scrollable&&`scrollable=true`,n.indicator&&`indicator='${n.indicator}'`,n.mode&&`mode='${n.mode}'`,n.ariaLabel&&`ariaLabel='${n.ariaLabel}'`,n.className&&`className='${n.className}'`,n.extra&&`extra=${n.extra}`].filter(Boolean).join(`, `);return`${Se}${n.imports?`\n${n.imports}`:``}${n.prelude?`\n\n${n.prelude}`:``}

{% set tabItems %}
${r}
{% endset %}
{% set tabPanels %}
${i}
{% endset %}
{{ tabs(${a}) }}`}function he(e){return e===`dynamic`?`<Tabs mode="dynamic" :items="items" aria-label="동적 탭"><template #panel="{ value }"><p>{{ value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.' }}</p></template></Tabs>`:e===`icon`?`<Tabs aria-label="대시보드 섹션"><TabPanel label="대시보드" active><template #icon><Icon name="grid" class="tabs_icon" /></template>대시보드 콘텐츠</TabPanel><TabPanel label="사용자"><template #icon><Icon name="user" class="tabs_icon" /></template>사용자 콘텐츠</TabPanel><TabPanel label="문서"><template #icon><Icon name="book" class="tabs_icon" /></template>문서 콘텐츠</TabPanel></Tabs>`:e===`badge`?`<Tabs aria-label="알림 센터"><TabPanel label="전체" active>전체 알림 목록</TabPanel><TabPanel label="읽지 않음"><template #badge><Badge count color="primary" label="12" /></template>읽지 않은 알림</TabPanel><TabPanel label="중요"><template #badge><Badge dot-only color="danger" aria-label="새 중요 알림" /></template>중요 알림</TabPanel></Tabs>`:e===`extra`?`<Tabs aria-label="파일 보기"><template #extra><Button variant="filled" color="primary" size="sm" label="새 파일" /></template>${O(`내 파일`,`내 파일 목록`,`active`)}${O(`공유됨`,`공유된 파일 목록`)}${O(`최근`,`최근 파일 목록`)}</Tabs>`:e===`example`?`<div class="tabs_demo-editable">
  <div class="tabs_demo-editable-side">
    <label class="tabs_demo-editable-limit">
      <span>최대 탭 개수</span>
      <input class="input input_sm" type="number" min="1" :max="catalog.length" v-model.number="maxTabs" />
      <span>현재 {{ openKeys.length }}/{{ maxTabs }}</span>
    </label>
    <Menu bordered compact :selectable="false" aria-label="예시 추가 메뉴">
      <MenuGroup title="예시 추가" />
      <MenuItem
        v-for="page in catalog"
        :key="page.key"
        :label="page.label"
        :active="openKeys.includes(page.key) && active === page.key"
        @click="addTab(page.key)"
      />
    </Menu>
  </div>
  <Tabs variant="card" mode="dynamic" layout="scroll" class="tabs_demo-editable-tabs" v-model="active" :items="items" @close="closeTab">
    <template #panel="{ item }">{{ item?.content }}</template>
    <template #extra>
      <div class="tabs_demo-editable-controls">
        <Button variant="outline" size="sm" icon-only aria-label="이전 탭" @click="switchTab(-1)"><template #icon-before><Icon name="chevron-left" /></template></Button>
        <Dropdown placement="end">
          <template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" size="sm" icon-only aria-label="열린 탭 목록"><template #icon-before><Icon name="menu" /></template></Button></template>
          <Menu compact :selectable="false" aria-label="열린 탭 목차">
            <MenuItem v-for="page in pages" :key="page.key" :label="\`- \${page.label}\`" :active="page.key === active" @click="active = page.key" />
          </Menu>
        </Dropdown>
        <Button variant="outline" size="sm" icon-only aria-label="다음 탭" @click="switchTab(1)"><template #icon-before><Icon name="chevron-right" /></template></Button>
      </div>
    </template>
  </Tabs>
  <Modal :open="limitOpen" size="sm" title="알림" @close="limitOpen = false">
    <p>탭은 최대 {{ maxTabs }}개까지 열 수 있습니다. 새 탭을 열려면 기존 탭을 닫아 주세요.</p>
    <template #footer><Button color="primary" label="확인" @click="limitOpen = false" /></template>
  </Modal>
</div>`:Te[e].replaceAll(`ariaLabel=`,`aria-label=`).replaceAll(`className=`,`class=`)}function ge(e){let t=e===`icon`||e===`example`,n=e===`badge`,r=e===`extra`||e===`example`,i=[`import { Tabs, TabPanel, TabMenu } from '@uxkm/react/tabs';`,t&&`import Icon from '@uxkm/react/icon';`,n&&`import Badge from '@uxkm/react/badge';`,r&&`import Button from '@uxkm/react/button';`,e===`example`&&`import { useState } from 'react';
import Dropdown from '@uxkm/react/dropdown';
import { Menu, MenuItem, MenuGroup } from '@uxkm/react/menu';
import Modal from '@uxkm/react/modal';`].filter(Boolean).join(`
`),a=[`import { Tabs, TabPanel, TabMenu } from '@uxkm/vue/tabs';`,t&&`import Icon from '@uxkm/vue/icon';`,n&&`import Badge from '@uxkm/vue/badge';`,r&&`import Button from '@uxkm/vue/button';`,e===`dynamic`&&`const items = [{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }];`,e===`example`&&`import { ref, computed } from 'vue';
import Dropdown from '@uxkm/vue/dropdown';
import { Menu, MenuItem, MenuGroup } from '@uxkm/vue/menu';
import Modal from '@uxkm/vue/modal';
const catalog = [{ key: 'style', label: 'UI/UX 스타일 가이드', body: '스타일 가이드 예시 화면입니다.' }, { key: 'progress', label: 'UI 진행 현황', body: 'UI 진행 현황 예시 화면입니다.' }, { key: 'layout', label: '레이아웃 유형', body: '레이아웃 유형 예시 화면입니다.' }, { key: 'form', label: '폼 유형', body: '폼 유형 예시 화면입니다.' }, { key: 'chart', label: '차트 유형', body: '차트 유형 예시 화면입니다.' }];
const maxTabs = ref(4);
const openKeys = ref(['style', 'progress', 'layout']);
const active = ref('layout');
const limitOpen = ref(false);
const pages = computed(() => openKeys.value.map((key) => catalog.find((page) => page.key === key)).filter(Boolean));
const items = computed(() => pages.value.map((page) => ({ key: page.key, label: page.label, closable: true, content: page.body })));
function addTab(key) { if (openKeys.value.includes(key)) { active.value = key; return; } if (openKeys.value.length >= maxTabs.value) { limitOpen.value = true; return; } openKeys.value.push(key); active.value = key; }
function closeTab(key) { if (openKeys.value.length <= 1) return; const index = openKeys.value.indexOf(key); openKeys.value = openKeys.value.filter((item) => item !== key); if (key === active.value) active.value = openKeys.value[index - 1] ?? openKeys.value.at(-1) ?? ''; }
function switchTab(direction) { const next = openKeys.value[openKeys.value.indexOf(active.value) + direction]; if (next) active.value = next; }`].filter(Boolean).join(`
`),o=e===`example`?`${i}\n\n${Te.example}\n\nexport function Example() { return <EditableTabsExample />; }`:`${i}\n\nexport function Example() { return <>${Te[e]}</>; }`,s=`<script setup>\n${a}\n<\/script>\n<template>\n${he(e)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Tabs.html · ${e}`,code:xe[e]},{id:`gulp`,label:`Gulp`,fileName:`tabs.njk · ${e}`,code:Ce[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/tabs · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tabs · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/tabs · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/tabs · ${e}`,code:o}]}var _e,ve,ye,be,E,D,xe,Se,Ce,O,we,Te,Ee;function De(){return(De=e((()=>{_e=[`basic`,`dynamic`,`indicator`,`equal`,`layoutScroll`,`card`,`pill`,`size`,`icon`,`badge`,`extra`,`scroll`,`disabled`,`vertical`,`example`],ve=e=>`<svg class="icon tabs_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`grid`?`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`:e===`user`?`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`:e===`close`?`m6 6 12 12M18 6 6 18`:`M4 3h12l4 4v14H4zM16 3v5h5`}"></path></svg>`,ye=[{label:`UI/UX 스타일 가이드`,content:`<h3>타이틀</h3><p>스타일 가이드 예시 화면입니다.</p>`,closable:!0},{label:`UI 진행 현황`,content:`<h3>타이틀</h3><p>UI 진행 현황 예시 화면입니다.</p>`,closable:!0},{label:`레이아웃 유형`,content:`<h3>타이틀</h3><p>레이아웃 유형 예시 화면입니다.</p>`,closable:!0}],be=`<div class="tabs_demo-editable-controls"><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="이전 탭">‹</button><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="열린 탭 목록" aria-haspopup="menu">≡</button><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="다음 탭">›</button></div>`,E=[{label:`개요`,content:`<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>`},{label:`팀`,content:`<p>팀 구성원과 역할을 표시합니다.</p>`},{label:`활동`,content:`<p>최근 활동 로그와 타임라인을 보여줍니다.</p>`}],D=[[`홈`,`홈 패널`],[`제품 소개`,`제품 패널`],[`솔루션`,`솔루션 패널`],[`가격 정책`,`가격 패널`],[`고객 사례`,`고객 사례 패널`],[`리소스 센터`,`리소스 패널`],[`기술 지원`,`지원 패널`]].map(([e,t])=>({label:e,content:t})),xe={basic:w(`basic`,E,{label:`프로젝트 정보`}),dynamic:w(`dynamic`,E,{classes:`tabs_line tabs_dynamic`,label:`동적 탭`}),indicator:w(`slide-line`,E,{classes:`tabs_line tabs_equal tabs_indicator-slide`,label:`슬라이드 라인 탭`})+`

`+w(`slide-pill`,[{label:`목록`,content:`필 스킨에서 배경 인디케이터가 이동합니다.`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{classes:`tabs_pill tabs_equal tabs_indicator-slide`,label:`슬라이드 필 탭`}),equal:w(`equal-line`,[...E,{label:`설정`,content:`프로젝트 설정을 관리합니다.`}],{classes:`tabs_line tabs_equal`,label:`균등 분할 탭`})+`

`+w(`equal-pill`,[`일간`,`주간`,`월간`,`연간`].map(e=>({label:e,content:`${e} 통계`})),{classes:`tabs_pill tabs_equal tabs_indicator-slide`,label:`균등 분할 필 탭`}),layoutScroll:w(`nav-scroll`,D,{classes:`tabs_line tabs_scroll-nav tabs_demo-narrow`,label:`네비 스크롤 탭`,nav:!0}),card:w(`card`,[{label:`프로필`,content:`<p>이름, 아바타, 소개 문구를 수정합니다.</p>`},{label:`보안`,content:`<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>`},{label:`알림`,content:`<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>`}],{classes:`tabs_card`,label:`계정 설정`}),pill:w(`pill`,[{label:`목록`,content:`목록 뷰 콘텐츠`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{classes:`tabs_pill`,label:`보기 모드`}),size:w(`small`,[{label:`Small A`,content:`Small 탭 패널`},{label:`Small B`,content:`Small 탭 패널 B`}],{classes:`tabs_line tabs_sm`,label:`Small 탭`})+`

`+w(`large`,[{label:`Large A`,content:`Large 탭 패널`},{label:`Large B`,content:`Large 탭 패널 B`}],{classes:`tabs_line tabs_lg`,label:`Large 탭`}),icon:w(`icon`,[{label:`대시보드`,content:`대시보드 콘텐츠`,icon:`grid`},{label:`사용자`,content:`사용자 콘텐츠`,icon:`user`},{label:`문서`,content:`문서 콘텐츠`,icon:`book`}],{label:`대시보드 섹션`}),badge:w(`badge`,[{label:`전체`,content:`전체 알림 목록`},{label:`읽지 않음`,content:`읽지 않은 알림`,badge:`<span class="badge badge_count color_primary" data-component="Badge">12</span>`},{label:`중요`,content:`중요 알림`,badge:`<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 중요 알림"></span>`}],{label:`알림 센터`}),extra:w(`extra`,[{label:`내 파일`,content:`내 파일 목록`},{label:`공유됨`,content:`공유된 파일 목록`},{label:`최근`,content:`최근 파일 목록`}],{label:`파일 보기`,extra:`<button type="button" class="btn btn_filled color_primary btn_sm">새 파일</button>`}),scroll:w(`scroll`,D.map(e=>({...e,label:e.label.replace(` 소개`,``).replace(` 정책`,``).replace(` 센터`,``).replace(`기술 `,``)})),{classes:`tabs_line tabs_scrollable tabs_demo-narrow`,label:`긴 탭 목록`}),disabled:w(`disabled`,[{label:`공개`,content:`공개 콘텐츠`},{label:`팀`,content:`팀 전용 콘텐츠`},{label:`관리자`,content:`관리자 전용 콘텐츠`,disabled:!0}],{label:`권한별 탭`}),vertical:w(`vertical-line`,[{label:`일반`,content:`일반 설정 패널`},{label:`보안`,content:`보안 설정 패널`},{label:`결제`,content:`결제 설정 패널`}],{classes:`tabs_line tabs_vertical`,label:`수직 라인 탭`})+`

`+w(`vertical-card`,[{label:`문서`,content:`문서 관리 패널`},{label:`미디어`,content:`미디어 관리 패널`},{label:`아카이브`,content:`아카이브 패널`}],{classes:`tabs_card tabs_vertical`,label:`수직 카드 탭`}),example:`<div class="tabs_demo-editable">
  <nav class="menu menu_vertical menu_bordered menu_compact" aria-label="예시 추가 메뉴">
    <ul class="menu_list">
      <li class="menu_group"><span class="menu_group-title">예시 추가</span></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">UI/UX 스타일 가이드</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">UI 진행 현황</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link is-active"><span class="menu_label">레이아웃 유형</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">폼 유형</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">차트 유형</span></button></li>
    </ul>
  </nav>
  ${w(`editable`,ye,{classes:`tabs_card tabs_scroll-nav tabs_demo-editable-tabs`,label:`열린 예시 탭`,extra:be,nav:!0})}
</div>`},Se=`{% from "components/navigation/Tabs/tabs.njk" import tabs, tab, tabPanel %}`,Ce={basic:T(`basic`,E,{ariaLabel:`프로젝트 정보`}),dynamic:T(`dynamic`,E,{mode:`dynamic`,ariaLabel:`동적 탭`}),indicator:T(`slide-line`,E,{layout:`equal`,indicator:`slide`,ariaLabel:`슬라이드 라인 탭`})+`

`+T(`slide-pill`,[{label:`목록`,content:`필 스킨에서 배경 인디케이터가 이동합니다.`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{variant:`pill`,layout:`equal`,indicator:`slide`,ariaLabel:`슬라이드 필 탭`}),equal:T(`equal-line`,[...E,{label:`설정`,content:`프로젝트 설정을 관리합니다.`}],{layout:`equal`,ariaLabel:`균등 분할 탭`})+`

`+T(`equal-pill`,[`일간`,`주간`,`월간`,`연간`].map(e=>({label:e,content:`${e} 통계`})),{variant:`pill`,layout:`equal`,indicator:`slide`,ariaLabel:`균등 분할 필 탭`}),layoutScroll:T(`nav-scroll`,D,{layout:`scroll`,className:`tabs_demo-narrow`,ariaLabel:`네비 스크롤 탭`}),card:T(`card`,[{label:`프로필`,content:`<p>이름, 아바타, 소개 문구를 수정합니다.</p>`},{label:`보안`,content:`<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>`},{label:`알림`,content:`<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>`}],{variant:`card`,ariaLabel:`계정 설정`}),pill:T(`pill`,[{label:`목록`,content:`목록 뷰 콘텐츠`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{variant:`pill`,ariaLabel:`보기 모드`}),size:T(`small`,[{label:`Small A`,content:`Small 탭 패널`},{label:`Small B`,content:`Small 탭 패널 B`}],{size:`sm`,ariaLabel:`Small 탭`})+`

`+T(`large`,[{label:`Large A`,content:`Large 탭 패널`},{label:`Large B`,content:`Large 탭 패널 B`}],{size:`lg`,ariaLabel:`Large 탭`}),icon:T(`icon`,[{label:`대시보드`,content:`대시보드 콘텐츠`,icon:`grid`},{label:`사용자`,content:`사용자 콘텐츠`,icon:`user`},{label:`문서`,content:`문서 콘텐츠`,icon:`book`}],{ariaLabel:`대시보드 섹션`}),badge:T(`badge`,[{label:`전체`,content:`전체 알림 목록`},{label:`읽지 않음`,content:`읽지 않은 알림`,badge:`badge`},{label:`중요`,content:`중요 알림`,badge:`badge`}],{ariaLabel:`알림 센터`,imports:`{% from "components/data-display/Badge/badge.njk" import badge %}`,prelude:`{% set unreadBadge %}{{ badge(count=true, color='primary', label='12') }}{% endset %}
{% set importantBadge %}{{ badge(dotOnly=true, color='danger', ariaLabel='새 중요 알림') }}{% endset %}`}),extra:T(`extra`,[{label:`내 파일`,content:`내 파일 목록`},{label:`공유됨`,content:`공유된 파일 목록`},{label:`최근`,content:`최근 파일 목록`}],{ariaLabel:`파일 보기`,imports:`{% from "components/basic/Button/button.njk" import button %}`,prelude:`{% set tabsExtra %}{{ button(variant='filled', color='primary', size='sm', label='새 파일') }}{% endset %}`,extra:`tabsExtra`}),scroll:T(`scroll`,D.map(e=>({...e,label:e.label.replace(` 소개`,``).replace(` 정책`,``).replace(` 센터`,``).replace(`기술 `,``)})),{scrollable:!0,className:`tabs_demo-narrow`,ariaLabel:`긴 탭 목록`}),disabled:T(`disabled`,[{label:`공개`,content:`공개 콘텐츠`},{label:`팀`,content:`팀 전용 콘텐츠`},{label:`관리자`,content:`관리자 전용 콘텐츠`,disabled:!0}],{ariaLabel:`권한별 탭`}),vertical:T(`vertical-line`,[{label:`일반`,content:`일반 설정 패널`},{label:`보안`,content:`보안 설정 패널`},{label:`결제`,content:`결제 설정 패널`}],{vertical:!0,ariaLabel:`수직 라인 탭`})+`

`+T(`vertical-card`,[{label:`문서`,content:`문서 관리 패널`},{label:`미디어`,content:`미디어 관리 패널`},{label:`아카이브`,content:`아카이브 패널`}],{variant:`card`,vertical:!0,ariaLabel:`수직 카드 탭`}),example:`{% from "components/navigation/Menu/menu.njk" import menu, menuItem, menuGroup %}
{% from "components/basic/Button/button.njk" import button %}

{% set tabsExtra %}
  <div class="tabs_demo-editable-controls">
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='chevron-left', ariaLabel='이전 탭', className='tabs_nav') }}
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='menu', ariaLabel='열린 탭 목록', className='tabs_nav') }}
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='chevron-right', ariaLabel='다음 탭', className='tabs_nav') }}
  </div>
{% endset %}

<div class="tabs_demo-editable">
  {% call menu(mode='vertical', bordered=true, compact=true, selectable=false, ariaLabel='예시 추가 메뉴') %}
    {{ menuGroup(title='예시 추가') }}
    {{ menuItem(label='UI/UX 스타일 가이드') }}
    {{ menuItem(label='UI 진행 현황') }}
    {{ menuItem(label='레이아웃 유형', active=true) }}
    {{ menuItem(label='폼 유형') }}
    {{ menuItem(label='차트 유형') }}
  {% endcall %}
${T(`editable`,ye,{variant:`card`,layout:`scroll`,className:`tabs_demo-editable-tabs`,ariaLabel:`열린 예시 탭`,extra:`tabsExtra`})}
</div>`},O=(e,t,n=``)=>`<TabPanel label="${e}"${n?` ${n}`:``}>${t}</TabPanel>`,we=O(`개요`,`<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>`,`active`)+O(`팀`,`<p>팀 구성원과 역할을 표시합니다.</p>`)+O(`활동`,`<p>최근 활동 로그와 타임라인을 보여줍니다.</p>`),Te={basic:`<Tabs ariaLabel="프로젝트 정보">${we}</Tabs>`,dynamic:`<Tabs mode="dynamic" items={[{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }]} ariaLabel="동적 탭" panel={({ value }) => <p>{value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.'}</p>} />`,indicator:`<Tabs indicator="slide" layout="equal" ariaLabel="슬라이드 라인 탭">${we}</Tabs>\n<Tabs variant="pill" indicator="slide" layout="equal" ariaLabel="슬라이드 필 탭">${O(`목록`,`필 스킨에서 배경 인디케이터가 이동합니다.`,`active`)}${O(`그리드`,`그리드 뷰 콘텐츠`)}${O(`보드`,`보드 뷰 콘텐츠`)}</Tabs>`,equal:`<Tabs layout="equal" ariaLabel="균등 분할 탭">${we}${O(`설정`,`프로젝트 설정을 관리합니다.`)}</Tabs>\n<Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">${[`일간`,`주간`,`월간`,`연간`].map((e,t)=>O(e,`${e} 통계`,t===0?`active`:``)).join(``)}</Tabs>`,layoutScroll:`<Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">${D.map((e,t)=>O(e.label,e.content,t===0?`active`:``)).join(``)}</Tabs>`,card:`<Tabs variant="card" ariaLabel="계정 설정">${O(`프로필`,`<p>이름, 아바타, 소개 문구를 수정합니다.</p>`,`active`)}${O(`보안`,`<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>`)}${O(`알림`,`<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>`)}</Tabs>`,pill:`<Tabs variant="pill" ariaLabel="보기 모드">${O(`목록`,`목록 뷰 콘텐츠`,`active`)}${O(`그리드`,`그리드 뷰 콘텐츠`)}${O(`보드`,`보드 뷰 콘텐츠`)}</Tabs>`,size:`<Tabs size="sm" ariaLabel="Small 탭">${O(`Small A`,`Small 탭 패널`,`active`)}${O(`Small B`,`Small 탭 패널 B`)}</Tabs>\n<Tabs size="lg" ariaLabel="Large 탭">${O(`Large A`,`Large 탭 패널`,`active`)}${O(`Large B`,`Large 탭 패널 B`)}</Tabs>`,icon:`<Tabs ariaLabel="대시보드 섹션">${O(`대시보드`,`대시보드 콘텐츠`,`active icon={<Icon name="grid" className="tabs_icon" />}`)}${O(`사용자`,`사용자 콘텐츠`,`icon={<Icon name="user" className="tabs_icon" />}`)}${O(`문서`,`문서 콘텐츠`,`icon={<Icon name="book" className="tabs_icon" />}`)}</Tabs>`,badge:`<Tabs ariaLabel="알림 센터">${O(`전체`,`전체 알림 목록`,`active`)}${O(`읽지 않음`,`읽지 않은 알림`,`badge={<Badge count color="primary" label="12" />}`)}${O(`중요`,`중요 알림`,`badge={<Badge dotOnly color="danger" ariaLabel="새 중요 알림" />}`)}</Tabs>`,extra:`<Tabs ariaLabel="파일 보기" extra={<Button variant="filled" color="primary" size="sm" label="새 파일" />}>${O(`내 파일`,`내 파일 목록`,`active`)}${O(`공유됨`,`공유된 파일 목록`)}${O(`최근`,`최근 파일 목록`)}</Tabs>`,scroll:`<Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">${[`홈`,`제품`,`솔루션`,`가격`,`고객 사례`,`리소스`,`지원`].map((e,t)=>O(e,`${e} 패널`,t===0?`active`:``)).join(``)}</Tabs>`,disabled:`<Tabs ariaLabel="권한별 탭">${O(`공개`,`공개 콘텐츠`,`active`)}${O(`팀`,`팀 전용 콘텐츠`)}${O(`관리자`,`관리자 전용 콘텐츠`,`disabled`)}</Tabs>`,vertical:`<Tabs vertical ariaLabel="수직 라인 탭">${O(`일반`,`일반 설정 패널`,`active`)}${O(`보안`,`보안 설정 패널`)}${O(`결제`,`결제 설정 패널`)}</Tabs>\n<Tabs vertical variant="card" ariaLabel="수직 카드 탭">${O(`문서`,`문서 관리 패널`,`active`)}${O(`미디어`,`미디어 관리 패널`)}${O(`아카이브`,`아카이브 패널`)}</Tabs>`,example:`function EditableTabsExample({ maxTabs: maxTabsProp = 4 } = {}) {
  const catalog = [
    { key: 'style', label: 'UI/UX 스타일 가이드', body: '스타일 가이드 예시 화면입니다.' },
    { key: 'progress', label: 'UI 진행 현황', body: 'UI 진행 현황 예시 화면입니다.' },
    { key: 'layout', label: '레이아웃 유형', body: '레이아웃 유형 예시 화면입니다.' },
    { key: 'form', label: '폼 유형', body: '폼 유형 예시 화면입니다.' },
    { key: 'chart', label: '차트 유형', body: '차트 유형 예시 화면입니다.' },
  ];
  const [maxTabs, setMaxTabs] = useState(maxTabsProp);
  const [openKeys, setOpenKeys] = useState(['style', 'progress', 'layout']);
  const [active, setActive] = useState('layout');
  const [limitOpen, setLimitOpen] = useState(false);
  const pages = openKeys.map((key) => catalog.find((page) => page.key === key)).filter(Boolean);
  const items = pages.map((page) => ({ key: page.key, label: page.label, closable: true, content: <p>{page.body}</p> }));
  const addTab = (key) => {
    if (openKeys.includes(key)) { setActive(key); return; }
    if (openKeys.length >= maxTabs) { setLimitOpen(true); return; }
    setOpenKeys((keys) => [...keys, key]);
    setActive(key);
  };
  const closeTab = (key) => {
    setOpenKeys((keys) => {
      if (keys.length <= 1) return keys;
      const index = keys.indexOf(key);
      const nextKeys = keys.filter((item) => item !== key);
      if (key === active) setActive(keys[index - 1] ?? nextKeys.at(-1) ?? '');
      return nextKeys;
    });
  };
  const switchTab = (direction) => {
    const next = openKeys[openKeys.indexOf(active) + direction];
    if (next) setActive(next);
  };
  return (
    <div className="tabs_demo-editable">
      <div className="tabs_demo-editable-side">
        <label className="tabs_demo-editable-limit">
          <span>최대 탭 개수</span>
          <input className="input input_sm" type="number" min={1} max={catalog.length} value={maxTabs} onChange={(event) => setMaxTabs(Number(event.target.value) || 1)} />
          <span>현재 {openKeys.length}/{maxTabs}</span>
        </label>
        <Menu bordered compact selectable={false} ariaLabel="예시 추가 메뉴">
          <MenuGroup title="예시 추가" />
          {catalog.map((page) => (
            <MenuItem
              key={page.key}
              label={page.label}
              active={openKeys.includes(page.key) && active === page.key}
              onClick={() => addTab(page.key)}
            />
          ))}
        </Menu>
      </div>
      <div className="tabs_demo-editable-main">
        <Tabs
          variant="card"
          mode="dynamic"
          layout="scroll"
          className="tabs_demo-editable-tabs"
          value={active}
          onChange={setActive}
          onClose={closeTab}
          items={items}
          panel={({ item }) => item?.content}
          extra={
            <div className="tabs_demo-editable-controls">
              <Button variant="outline" size="sm" iconOnly ariaLabel="이전 탭" iconBefore={<Icon name="chevron-left" />} onClick={() => switchTab(-1)} />
              <Dropdown placement="end" triggerContent={<Button variant="outline" size="sm" iconOnly ariaLabel="열린 탭 목록" iconBefore={<Icon name="menu" />} />}>
                <Menu compact selectable={false} ariaLabel="열린 탭 목차">
                  {pages.map((page) => (
                    <MenuItem key={page.key} label={\`- \${page.label}\`} active={page.key === active} onClick={() => setActive(page.key)} />
                  ))}
                </Menu>
              </Dropdown>
              <Button variant="outline" size="sm" iconOnly ariaLabel="다음 탭" iconBefore={<Icon name="chevron-right" />} onClick={() => switchTab(1)} />
            </div>
          }
        />
      </div>
      <Modal open={limitOpen} size="sm" title="알림" onClose={() => setLimitOpen(false)} footer={<Button color="primary" label="확인" onClick={() => setLimitOpen(false)} />}>
        <p>탭은 최대 {maxTabs}개까지 열 수 있습니다. 새 탭을 열려면 기존 탭을 닫아 주세요.</p>
      </Modal>
    </div>
  );
}`},Ee=Object.fromEntries(_e.map(e=>[e,ge(e)]))})))()}function Oe(e){let t=e===`icon`||e===`ellipsis`,n=e===`ellipsis`,r=[`import { Breadcrumb, BreadcrumbItem${n?`, BreadcrumbEllipsis`:``} } from '@uxkm/react/breadcrumb';`,t&&`import Icon from '@uxkm/react/icon';`,n&&`import { useState } from 'react';`].filter(Boolean).join(`
`),i=[`import { Breadcrumb, BreadcrumbItem${n?`, BreadcrumbEllipsis`:``} } from '@uxkm/vue/breadcrumb';`,t&&`import Icon from '@uxkm/vue/icon';`,n&&`import { ref } from 'vue';`].filter(Boolean).join(`
`),a=e===`separator`||e===`size`?`
const items = (last) => [{ label: '홈', href: '#' }, { label: '가이드', href: '#' }, { label: last, current: true }];`:``,o=n?`${r}\n\nexport function Example() { ${Ne[e]} }`:`${r}${a}\n\nexport function Example() { return <>${Ne[e]}</>; }`,s=`<script setup>\n${`${i}${a}${n?`
const expanded = ref(false);`:``}`}\n<\/script>\n<template>\n${Pe[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Breadcrumb.html · ${e}`,code:Ae[e]},{id:`gulp`,label:`Gulp`,fileName:`breadcrumb.njk · ${e}`,code:Me[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/breadcrumb · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/breadcrumb · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/breadcrumb · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/breadcrumb · ${e}`,code:o}]}var ke,k,A,j,Ae,M,je,Me,Ne,Pe,Fe;function Ie(){return(Ie=e((()=>{ke=[`basic`,`separator`,`icon`,`size`,`ellipsis`,`state`],k=(e,t={})=>`<li class="breadcrumb_item${t.current?` is-current`:``}"${t.current?` aria-current="page"`:``}${t.hidden?` data-breadcrumb-hidden hidden`:``}>${t.current?`<span class="breadcrumb_current">${e}</span>`:t.disabled?`<span class="breadcrumb_link is-disabled" aria-disabled="true">${e}</span>`:`<a class="breadcrumb_link${t.icon?` breadcrumb_link-icon`:``}" href="${t.href||`#`}"${t.icon?` aria-label="홈"`:``}>${t.icon?`<svg class="icon breadcrumb_icon" data-component="Icon" data-icon="home" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"></path></svg>`:e}</a>`}</li>`,A=(e,t=``,n=`경로`)=>`<nav class="breadcrumb${t}" aria-label="${n}" data-component="Breadcrumb"><ol class="breadcrumb_list">${e}</ol></nav>`,j=e=>k(`홈`)+k(`가이드`)+k(e,{current:!0}),Ae={basic:A(k(`홈`)+k(`컴포넌트`)+k(`Breadcrumb`,{current:!0})),separator:[A(j(`Chevron`),``,`경로 — chevron`),A(j(`Slash`),` breadcrumb_sep-slash`,`경로 — slash`),A(j(`Dot`),` breadcrumb_sep-dot`,`경로 — dot`)].join(`

`),icon:A(k(``,{icon:!0})+k(`설정`)+k(`계정`)+k(`프로필`,{current:!0})),size:[A(j(`Small`),` breadcrumb_sm`,`경로 — small`),A(j(`Medium`),``,`경로 — medium`),A(j(`Large`),` breadcrumb_lg`,`경로 — large`)].join(`

`),ellipsis:A(k(``,{icon:!0})+k(`제품`,{hidden:!0})+k(`디자인 시스템`,{hidden:!0})+`<li class="breadcrumb_item"><button type="button" class="breadcrumb_ellipsis" data-breadcrumb-ellipsis aria-label="숨겨진 경로 보기" aria-expanded="false">…</button></li>`+k(`컴포넌트`)+k(`Breadcrumb`,{current:!0}),``,`긴 경로`),state:[A(k(`홈`)+k(`삭제된 페이지`,{disabled:!0})+k(`현재 페이지`,{current:!0}),``,`경로 — 비활성`),A(k(`홈`)+k(`프로젝트 관리 및 협업 도구 설정`)+k(`사용자 권한 및 역할 기반 접근 제어`,{current:!0}),` breadcrumb_sep-slash`,`경로 — 긴 레이블`)].join(`

`)},M=`{% from "components/navigation/Breadcrumb/breadcrumb.njk" import breadcrumb, breadcrumbItem, breadcrumbEllipsis %}`,je=e=>`{% call breadcrumb() %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='가이드') }}
  {{ breadcrumbItem(label='${e}', current=true) }}
{% endcall %}`,Me={basic:`${M}

{% call breadcrumb() %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='컴포넌트') }}
  {{ breadcrumbItem(label='Breadcrumb', current=true) }}
{% endcall %}`,separator:`${M}

${je(`Chevron`)}

{% call breadcrumb(separator='slash', ariaLabel='경로 — slash') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='가이드') }}
  {{ breadcrumbItem(label='Slash', current=true) }}
{% endcall %}

{% call breadcrumb(separator='dot', ariaLabel='경로 — dot') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='가이드') }}
  {{ breadcrumbItem(label='Dot', current=true) }}
{% endcall %}`,icon:`${M}

{% call breadcrumb() %}
  {{ breadcrumbItem(icon='home', ariaLabel='홈') }}
  {{ breadcrumbItem(label='설정') }}
  {{ breadcrumbItem(label='계정') }}
  {{ breadcrumbItem(label='프로필', current=true) }}
{% endcall %}`,size:`${M}

{% call breadcrumb(size='sm', ariaLabel='경로 — small') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='가이드') }}
  {{ breadcrumbItem(label='Small', current=true) }}
{% endcall %}

${je(`Medium`)}

{% call breadcrumb(size='lg', ariaLabel='경로 — large') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='가이드') }}
  {{ breadcrumbItem(label='Large', current=true) }}
{% endcall %}`,ellipsis:`${M}

{% call breadcrumb(ariaLabel='긴 경로') %}
  {{ breadcrumbItem(icon='home', ariaLabel='홈') }}
  {{ breadcrumbItem(label='제품', hidden=true) }}
  {{ breadcrumbItem(label='디자인 시스템', hidden=true) }}
  {{ breadcrumbEllipsis() }}
  {{ breadcrumbItem(label='컴포넌트') }}
  {{ breadcrumbItem(label='Breadcrumb', current=true) }}
{% endcall %}`,state:`${M}

{% call breadcrumb(ariaLabel='경로 — 비활성') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='삭제된 페이지', disabled=true) }}
  {{ breadcrumbItem(label='현재 페이지', current=true) }}
{% endcall %}

{% call breadcrumb(separator='slash', ariaLabel='경로 — 긴 레이블') %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='프로젝트 관리 및 협업 도구 설정') }}
  {{ breadcrumbItem(label='사용자 권한 및 역할 기반 접근 제어', current=true) }}
{% endcall %}`},Ne={basic:`<Breadcrumb items={[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]} />`,separator:`<Breadcrumb ariaLabel="경로 — chevron" items={items('Chevron')} />
<Breadcrumb separator="slash" ariaLabel="경로 — slash" items={items('Slash')} />
<Breadcrumb separator="dot" ariaLabel="경로 — dot" items={items('Dot')} />`,icon:`<Breadcrumb><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,size:`<Breadcrumb size="sm" ariaLabel="경로 — small" items={items('Small')} />
<Breadcrumb ariaLabel="경로 — medium" items={items('Medium')} />
<Breadcrumb size="lg" ariaLabel="경로 — large" items={items('Large')} />`,ellipsis:`const [expanded, setExpanded] = useState(false);
return <Breadcrumb ariaLabel="긴 경로"><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem>{expanded && <><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></>}<BreadcrumbEllipsis expanded={expanded} label={expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'} onClick={() => setExpanded(!expanded)} /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>;`,state:`<Breadcrumb ariaLabel="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>
<Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`},Pe={basic:`<Breadcrumb :items="[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]" />`,separator:`<Breadcrumb aria-label="경로 — chevron" :items="items('Chevron')" />
<Breadcrumb separator="slash" aria-label="경로 — slash" :items="items('Slash')" />
<Breadcrumb separator="dot" aria-label="경로 — dot" :items="items('Dot')" />`,icon:`<Breadcrumb><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,size:`<Breadcrumb size="sm" aria-label="경로 — small" :items="items('Small')" />
<Breadcrumb aria-label="경로 — medium" :items="items('Medium')" />
<Breadcrumb size="lg" aria-label="경로 — large" :items="items('Large')" />`,ellipsis:`<Breadcrumb aria-label="긴 경로"><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><template v-if="expanded"><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></template><BreadcrumbEllipsis :expanded="expanded" :label="expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'" @click="expanded = !expanded" /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>`,state:`<Breadcrumb aria-label="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>
<Breadcrumb separator="slash" aria-label="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`},Fe=Object.fromEntries(ke.map(e=>[e,Oe(e)]))})))()}function Le(e){let t=`import { useState } from 'react';\nimport Pagination from '@uxkm/react/pagination';\n\nexport function Example() { ${Ge(e)} return <>${Ue[e]}</>; }`,n=`<script setup>\nimport { ref } from 'vue';\nimport Pagination from '@uxkm/vue/pagination';\n${qe(e)}\n<\/script>\n<template>\n${Ke[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Pagination.html · ${e}`,code:Ve[e]},{id:`gulp`,label:`Gulp`,fileName:`pagination.njk · ${e}`,code:He[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/pagination · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/pagination · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/pagination · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/pagination · ${e}`,code:t}]}var Re,ze,N,Be,Ve,P,He,Ue,We,Ge,Ke,qe,Je;function Ye(){return(Ye=e((()=>{Re=[`basic`,`minimal`,`size`,`round`,`ellipsis`,`simple`,`toolbar`,`align`,`state`],ze=e=>`<svg class="icon icon_sm pagination_icon" data-component="Icon" data-icon="chevron-${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`left`?`m15 6-6 6 6 6`:`m9 6 6 6-6 6`}"></path></svg>`,N=(e,t,n,r=``)=>`<nav class="pagination${r}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${e}" data-total="${t}" data-page-size="${n}"><ul class="pagination_list" data-pagination-list><li class="pagination_item"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${ze(`left`)}</button></li><li class="pagination_item" data-pagination-next-item><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${ze(`right`)}</button></li></ul></nav>`,Be=(e,t,n,r=``)=>`<nav class="pagination pagination_simple${r}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${e}" data-total="${t}" data-page-size="${n}"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${ze(`left`)}</button><span class="pagination_simple-text" aria-live="polite"><span class="pagination_simple-current">${e}</span> / <span class="pagination_simple-total">${Math.ceil(t/n)}</span></span><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${ze(`right`)}</button></nav>`,Ve={basic:N(1,50,10),minimal:N(4,50,10,` pagination_minimal`),size:[N(1,20,10,` pagination_sm`),N(1,20,10),N(1,20,10,` pagination_lg`)].join(`

`),round:N(7,80,10,` pagination_round`),ellipsis:N(10,500,10),simple:[Be(3,120,10),Be(1,120,10,` pagination_minimal`)].join(`

`),toolbar:`<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end">${N(5,128,10,` pagination_minimal`)}<label class="pagination_jumper">이동<input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지">페이지</label></div></div>`,align:[N(1,20,10),N(1,20,10,` pagination_align-center`),N(1,20,10,` pagination_align-end`)].join(`

`),state:[N(1,30,10),N(10,100,10)].join(`

`)},P=`{% from "components/navigation/Pagination/pagination.njk" import pagination, paginationJumper, paginationToolbar %}`,He={basic:`${P}\n\n{{ pagination(current=1, total=50, pageSize=10) }}`,minimal:`${P}\n\n{{ pagination(current=4, total=50, pageSize=10, minimal=true) }}`,size:`${P}\n\n{{ pagination(current=1, total=20, pageSize=10, size='sm') }}\n\n{{ pagination(current=1, total=20, pageSize=10) }}\n\n{{ pagination(current=1, total=20, pageSize=10, size='lg') }}`,round:`${P}\n\n{{ pagination(current=7, total=80, pageSize=10, round=true) }}`,ellipsis:`${P}\n\n{{ pagination(current=10, total=500, pageSize=10) }}`,simple:`${P}\n\n{{ pagination(current=3, total=120, pageSize=10, simple=true) }}\n\n{{ pagination(current=1, total=120, pageSize=10, simple=true, minimal=true) }}`,toolbar:`${P}

{% call paginationToolbar(totalLabel='총 128건') %}
  {{ pagination(current=5, total=128, pageSize=10, minimal=true) }}
  {{ paginationJumper(current=5, total=128, pageSize=10) }}
{% endcall %}`,align:`${P}\n\n{{ pagination(current=1, total=20, pageSize=10) }}\n\n{{ pagination(current=1, total=20, pageSize=10, align='center') }}\n\n{{ pagination(current=1, total=20, pageSize=10, align='end') }}`,state:`${P}\n\n{{ pagination(current=1, total=30, pageSize=10) }}\n\n{{ pagination(current=10, total=100, pageSize=10) }}`},Ue={basic:`<Pagination current={current} total={50} pageSize={10} onChange={setCurrent} />`,minimal:`<Pagination current={current} total={50} pageSize={10} minimal onChange={setCurrent} />`,size:`<Pagination current={small} total={20} pageSize={10} size="sm" onChange={setSmall} />
<Pagination current={medium} total={20} pageSize={10} onChange={setMedium} />
<Pagination current={large} total={20} pageSize={10} size="lg" onChange={setLarge} />`,round:`<Pagination current={current} total={80} pageSize={10} round onChange={setCurrent} />`,ellipsis:`<Pagination current={current} total={500} pageSize={10} onChange={setCurrent} />`,simple:`<Pagination simple current={current} total={120} pageSize={10} onChange={setCurrent} />
<Pagination simple minimal current={minimal} total={120} pageSize={10} onChange={setMinimal} />`,toolbar:`<div className="pagination_wrap"><span className="pagination_total">총 128건</span><div className="pagination_wrap-end"><Pagination current={current} total={128} pageSize={10} minimal onChange={setCurrent} /><label className="pagination_jumper">이동<input type="number" className="pagination_jumper-input" value={current} min={1} max={13} aria-label="이동할 페이지" onChange={(event) => setCurrent(Math.min(13, Math.max(1, Number(event.target.value))))} />페이지</label></div></div>`,align:`<Pagination current={start} total={20} pageSize={10} onChange={setStart} />
<Pagination current={center} total={20} pageSize={10} className="pagination_align-center" onChange={setCenter} />
<Pagination current={end} total={20} pageSize={10} className="pagination_align-end" onChange={setEnd} />`,state:`<Pagination current={first} total={30} pageSize={10} onChange={setFirst} />
<Pagination current={last} total={100} pageSize={10} onChange={setLast} />`},We={basic:`1`,minimal:`4`,size:`1`,round:`7`,ellipsis:`10`,simple:`3`,toolbar:`5`,align:`1`,state:`1`},Ge=e=>e===`size`?`const [small, setSmall] = useState(1); const [medium, setMedium] = useState(1); const [large, setLarge] = useState(1);`:e===`simple`?`const [current, setCurrent] = useState(3); const [minimal, setMinimal] = useState(1);`:e===`align`?`const [start, setStart] = useState(1); const [center, setCenter] = useState(1); const [end, setEnd] = useState(1);`:e===`state`?`const [first, setFirst] = useState(1); const [last, setLast] = useState(10);`:`const [current, setCurrent] = useState(${We[e]});`,Ke={basic:`<Pagination v-model:current="current" :total="50" :page-size="10" />`,minimal:`<Pagination v-model:current="current" :total="50" :page-size="10" minimal />`,size:`<Pagination v-model:current="small" :total="20" :page-size="10" size="sm" />
<Pagination v-model:current="medium" :total="20" :page-size="10" />
<Pagination v-model:current="large" :total="20" :page-size="10" size="lg" />`,round:`<Pagination v-model:current="current" :total="80" :page-size="10" round />`,ellipsis:`<Pagination v-model:current="current" :total="500" :page-size="10" />`,simple:`<Pagination v-model:current="current" simple :total="120" :page-size="10" />
<Pagination v-model:current="minimalPage" simple minimal :total="120" :page-size="10" />`,toolbar:`<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end"><Pagination v-model:current="current" :total="128" :page-size="10" minimal /><label class="pagination_jumper">이동<input v-model.number="current" type="number" class="pagination_jumper-input" min="1" max="13" aria-label="이동할 페이지" />페이지</label></div></div>`,align:`<Pagination v-model:current="start" :total="20" :page-size="10" />
<Pagination v-model:current="center" :total="20" :page-size="10" class="pagination_align-center" />
<Pagination v-model:current="end" :total="20" :page-size="10" class="pagination_align-end" />`,state:`<Pagination v-model:current="first" :total="30" :page-size="10" />
<Pagination v-model:current="last" :total="100" :page-size="10" />`},qe=e=>e===`size`?`const small = ref(1); const medium = ref(1); const large = ref(1);`:e===`simple`?`const current = ref(3); const minimalPage = ref(1);`:e===`align`?`const start = ref(1); const center = ref(1); const end = ref(1);`:e===`state`?`const first = ref(1); const last = ref(10);`:`const current = ref(${We[e]});`,Je=Object.fromEntries(Re.map(e=>[e,Le(e)]))})))()}function Xe(e){let t=e===`icon`,n=e===`navigable`,r=`${n?`import { useState } from 'react';
`:``}import { Steps, StepsItem } from '@uxkm/react/steps';${t?`
import Icon from '@uxkm/react/icon';`:``}\n\nexport function Example() { ${n?`const [current, setCurrent] = useState(2); `:``}return <>${B[e]}</>; }`,i=`<script setup>\n${n?`import { ref } from 'vue';
`:``}import { Steps, StepsItem } from '@uxkm/vue/steps';${t?`
import Icon from '@uxkm/vue/icon';`:``}${n?`
const current = ref(2);`:``}\n<\/script>\n<template>\n${V[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Steps.html · ${e}`,code:$e[e]},{id:`gulp`,label:`Gulp`,fileName:`steps.njk · ${e}`,code:tt[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/steps · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/steps · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/steps · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/steps · ${e}`,code:r}]}var Ze,F,Qe,I,$e,et,L,tt,R,z,nt,B,rt,V,it;function at(){return(at=e((()=>{Ze=[`basic`,`simple`,`vertical`,`dot`,`icon`,`navigable`,`error`,`align`,`size`,`state`],F={basic:[[`장바구니`,`상품 확인`,`finished`],[`배송 정보`,`주소 입력`,`finished`],[`결제`,`결제 수단 선택`,`active`],[`완료`,`주문 확인`,`wait`]],simple:[[`이메일 인증`,``,`finished`],[`프로필 설정`,``,`active`],[`완료`,``,`wait`]],vertical:[[`기본 정보`,`프로젝트 이름과 설명을 입력합니다.`,`finished`],[`팀 구성`,`멤버를 초대하고 역할을 지정합니다.`,`active`],[`저장소 연결`,`Git 저장소를 연동합니다.`,`wait`],[`검토 및 생성`,`설정을 확인하고 프로젝트를 만듭니다.`,`wait`]],dot:[[`주문 접수`,`6월 20일 09:12`,`finished`],[`배송 준비`,`6월 20일 14:30`,`finished`],[`배송 중`,`예상 도착 6월 21일`,`active`],[`배송 완료`,`대기 중`,`wait`]],icon:[[`계정 생성`,`이메일 인증 완료`,`finished`,`user`],[`팀 초대`,`동료를 초대하세요`,`active`,`mail`],[`첫 프로젝트`,`프로젝트를 만드세요`,`wait`,`grid`]],navigable:[[`환경`,`개발 · 스테이징`,`finished`],[`알림`,`수신 채널 설정`,`active`],[`확인`,`설정 검토`,`wait`]],error:[[`주문 확인`,`상품 및 수량 확인`,`finished`],[`결제 실패`,`카드 승인이 거절되었습니다`,`error`],[`완료`,`주문 접수`,`wait`]],align:[[`기획`,`요구사항 정의`,`finished`],[`개발`,`기능 구현`,`finished`],[`QA`,`품질 검증`,`active`],[`출시`,`프로덕션 배포`,`wait`]],size:[[`1단계`,``,`finished`],[`2단계`,``,`active`],[`3단계`,``,`wait`]],state:[[`is-finished`,`완료된 단계`,`finished`],[`is-active`,`현재 진행 단계`,`active`],[`is-wait`,`아직 도달하지 않은 단계`,`wait`],[`is-error`,`오류가 발생한 단계`,`error`]]},Qe=e=>`<svg class="icon steps_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`check`?`m5 12 4 4L19 6`:e===`close`?`m6 6 12 12M18 6 6 18`:e===`user`?`M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 21a8 8 0 0 1 16 0`:e===`mail`?`M3 5h18v14H3zM3 7l9 6 9-6`:`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`}"></path></svg>`,I=(e,t=``,n=`진행 단계`,r=!1)=>`<ol class="steps${t}${r?` steps_navigable`:``}" aria-label="${n}" data-component="Steps" data-steps>${e.map(([t,n,i,a],o)=>{let s=`<span class="steps_head"><span class="steps_indicator" aria-hidden="true">${a?Qe(a):i===`finished`?Qe(`check`):i===`error`?Qe(`close`):`<span class="steps_index">${o+1}</span>`}</span>${o<e.length-1?`<span class="steps_tail" aria-hidden="true"></span>`:``}</span>`,c=`<span class="steps_content"><span class="steps_title">${t}</span>${n?`<span class="steps_desc">${n}</span>`:``}</span>`;return`<li class="steps_item is-${i}" data-step-index="${o+1}"${i===`active`&&!r?` aria-current="step"`:``}>${r?`<button type="button" class="steps_trigger"${i===`wait`?` disabled`:``}${i===`active`?` aria-current="step"`:``}>${s}${c}</button>`:`${s}${c}`}</li>`}).join(``)}</ol>`,$e={basic:I(F.basic,``,`주문 진행 단계`),simple:I(F.simple,``,`회원가입 단계`),vertical:I(F.vertical,` steps_vertical steps_demo-narrow`,`프로젝트 생성 단계`),dot:I(F.dot,` steps_dot`,`배송 추적 단계`),icon:I(F.icon,` steps_icon-style`,`온보딩 단계`),navigable:I(F.navigable,``,`설정 마법사 — 탐색 가능`,!0),error:I(F.error,``,`결제 단계 — 오류`),align:I(F.align,` steps_align-center`,`출시 단계`),size:`${I(F.size,` steps_sm`,`Small 단계`)}\n${I([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]],` steps_lg`,`Large 단계`)}`,state:F.state.map(e=>I([e],``,`상태 예시 — ${e[0]}`)).join(`
`)},et=`{% from "components/navigation/Steps/steps.njk" import steps, step %}`,L=(e,t={})=>{let n=[t.direction&&`direction='${t.direction}'`,t.size&&`size='${t.size}'`,t.dot&&`dot=true`,t.iconStyle&&`iconStyle=true`,t.navigable&&`navigable=true`,t.align&&`align='${t.align}'`,t.ariaLabel&&`ariaLabel='${t.ariaLabel}'`,t.className&&`className='${t.className}'`].filter(Boolean).join(`, `),r=e.map(([n,r,i,a],o)=>`  {{ step(title='${n}'${r?`, description='${r}'`:``}, status='${i}', index=${o+1}${o===e.length-1?`, last=true`:``}${t.navigable?`, navigable=true`:``}${a?`, icon='${a}'`:``}) }}`).join(`
`);return`${et}

{% call steps(${n}) %}
${r}
{% endcall %}`},tt={basic:L(F.basic,{ariaLabel:`주문 진행 단계`}),simple:L(F.simple,{ariaLabel:`회원가입 단계`}),vertical:L(F.vertical,{direction:`vertical`,className:`steps_demo-narrow`,ariaLabel:`프로젝트 생성 단계`}),dot:L(F.dot,{dot:!0,ariaLabel:`배송 추적 단계`}),icon:L(F.icon,{iconStyle:!0,ariaLabel:`온보딩 단계`}),navigable:L(F.navigable,{navigable:!0,ariaLabel:`설정 마법사 — 탐색 가능`}),error:L(F.error,{ariaLabel:`결제 단계 — 오류`}),align:L(F.align,{align:`center`,ariaLabel:`출시 단계`}),size:L(F.size,{size:`sm`,ariaLabel:`Small 단계`})+`

`+L([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]],{size:`lg`,ariaLabel:`Large 단계`}),state:F.state.map(e=>L([e],{ariaLabel:`상태 예시 — ${e[0]}`})).join(`

`)},R=(e,t=!1)=>e.map(([e,n,r,i])=>`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}"${t&&i?` icon={<Icon name="${i}" className="steps_icon" />}`:``} />`).join(``),z=(e,t=!1)=>e.map(([e,n,r,i])=>t&&i?`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}"><template #icon><Icon name="${i}" class="steps_icon" /></template></StepsItem>`:`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}" />`).join(``),nt={basic:`ariaLabel="주문 진행 단계"`,simple:`ariaLabel="회원가입 단계"`,vertical:`direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계"`,dot:`dot ariaLabel="배송 추적 단계"`,icon:`iconStyle ariaLabel="온보딩 단계"`,navigable:`current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"`,error:`ariaLabel="결제 단계 — 오류"`,align:`align="center" ariaLabel="출시 단계"`,size:`size="sm" ariaLabel="Small 단계"`,state:`ariaLabel="상태 요약"`},B=Object.fromEntries(Ze.map(e=>[e,`<Steps ${nt[e]}>${R(F[e],e===`icon`)}</Steps>`])),B.navigable=`<Steps current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`,B.size=`<Steps size="sm" ariaLabel="Small 단계">${R(F.size)}</Steps>\n<Steps size="lg" ariaLabel="Large 단계">${R([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]])}</Steps>`,B.state=F.state.map(e=>`<Steps ariaLabel="상태 예시 — ${e[0]}">${R([e])}</Steps>`).join(`
`),rt=e=>e.replaceAll(`ariaLabel=`,`aria-label=`).replaceAll(`className=`,`class=`).replace(`iconStyle`,`icon-style`),V=Object.fromEntries(Ze.map(e=>[e,`<Steps ${rt(nt[e].replace(`current={current} navigable onChange={setCurrent}`,`v-model:current="current" navigable`))}>${z(F[e],e===`icon`)}</Steps>`])),V.navigable=`<Steps v-model:current="current" navigable aria-label="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`,V.size=`<Steps size="sm" aria-label="Small 단계">${z(F.size)}</Steps>\n<Steps size="lg" aria-label="Large 단계">${z([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]])}</Steps>`,V.state=F.state.map(e=>`<Steps aria-label="상태 예시 — ${e[0]}">${z([e])}</Steps>`).join(`
`),it=Object.fromEntries(Ze.map(e=>[e,Xe(e)]))})))()}function ot(e){let t=e===`select`,n=`${t?`import { useState } from 'react';
`:``}import Dropdown from '@uxkm/react/dropdown';\nimport Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\nimport { Menu, MenuItem, MenuGroup, MenuDivider } from '@uxkm/react/menu';${e===`example`?`
import Avatar from '@uxkm/react/avatar';
import Badge from '@uxkm/react/badge';`:``}\n\nexport function Example(){ ${t?`const [region,setRegion]=useState('서울특별시'); const [sort,setSort]=useState('최신순'); `:``}return <>${dt[e]}</>; }`,r=`<script setup>\n${t?`import { ref } from 'vue';
`:``}import Dropdown from '@uxkm/vue/dropdown';\nimport Button from '@uxkm/vue/button';\nimport Icon from '@uxkm/vue/icon';\nimport { Menu, MenuItem, MenuGroup, MenuDivider } from '@uxkm/vue/menu';${e===`example`?`
import Avatar from '@uxkm/vue/avatar';
import Badge from '@uxkm/vue/badge';`:``}${t?`
const region=ref('서울특별시'); const sort=ref('최신순');`:``}\n<\/script>\n<template>\n${ft[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Dropdown.html · ${e}`,code:lt[e]},{id:`gulp`,label:`Gulp`,fileName:`dropdown.njk · ${e}`,code:ut[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/dropdown · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/dropdown · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/dropdown · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/dropdown · ${e}`,code:n}]}var st,H,ct,U,lt,W,G,K,ut,q,J,dt,Y,X,ft,pt;function mt(){return(mt=e((()=>{st=[`basic`,`open`,`trigger`,`select`,`placement`,`menu`,`scroll`,`disabled`,`example`],H=(e,t=``)=>`<nav class="menu menu_vertical menu_compact" aria-label="메뉴"><ul class="menu_list">${e.map(e=>`<li class="menu_item"><button type="button" class="menu_link${e===t?` is-active`:``}"${e===t?` aria-current="page"`:``}><span class="menu_label">${e}</span></button></li>`).join(``)}</ul></nav>`,ct=`<svg class="icon" data-component="Icon" data-icon="chevron-down" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>`,U=(e,t,n={})=>`<div class="dropdown${n.classes||``}" data-component="Dropdown" data-dropdown><button type="button" class="btn ${n.trigger||`btn_outline color_default`} dropdown_trigger" aria-haspopup="menu" aria-expanded="${n.classes?.includes(`is-open`)?`true`:`false`}"${n.disabled?` disabled`:``}><span class="btn_label">${e}</span>${ct}</button><div class="dropdown_menu${n.style?` dropdown_menu-scrollable`:``}" role="menu" aria-hidden="${n.classes?.includes(`is-open`)?`false`:`true`}"${n.style?` style="${n.style}"`:``}>${t}</div></div>`,lt={basic:U(`작업`,H([`복사`,`이동`,`공유`])),open:U(`카테고리`,H([`전체`,`디자인`,`개발`,`마케팅`],`전체`),{classes:` is-open`,trigger:`btn_filled color_primary`}),trigger:[U(`Filled`,H([`항목 1`,`항목 2`]),{trigger:`btn_filled color_primary`}),U(`Outline`,H([`항목 1`,`항목 2`])),U(`Ghost`,H([`항목 1`,`항목 2`]),{trigger:`btn_ghost color_default`}),U(`Text`,H([`항목 1`,`항목 2`]),{trigger:`btn_text color_primary`}),U(`더보기`,H([`편집`,`복제`,`삭제`]),{trigger:`btn_ghost color_default btn_icon-only`})].join(`
`),select:`${U(`서울특별시`,H([`서울특별시`,`부산광역시`,`대구광역시`],`서울특별시`),{classes:` dropdown_fit`,trigger:`btn_select color_default`})}\n${U(`최신순`,H([`최신순`,`인기순`,`가격 낮은순`],`최신순`),{trigger:`btn_select btn_select-text color_default`})}`,placement:`${U(`왼쪽 정렬`,H([`항목 A`,`항목 B`]))}\n${U(`오른쪽 정렬`,H([`항목 A`,`항목 B`]),{classes:` dropdown_placement-end`})}\n${U(`위로 열기`,H([`위쪽 패널`,`항목 2`]),{classes:` dropdown_placement-top`})}`,menu:U(`계정`,`<nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴"><ul class="menu_list"><li class="menu_group"><span class="menu_group-title">계정</span></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">프로필</span></button></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">보안</span></button></li><li class="menu_divider" role="separator"></li><li class="menu_item"><button class="menu_link color_danger" type="button"><span class="menu_label">로그아웃</span></button></li></ul></nav>`,{classes:` is-open`}),scroll:`${U(`도시 선택`,H([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`]),{classes:` is-open`,style:`--dropdown-max-visible-items: 4;`})}\n${U(`넓은 패널`,H([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),{classes:` is-open`,style:`--dropdown-max-visible-items: 4; width: 18rem;`})}`,disabled:`${U(`비활성 드롭다운`,H([`항목`]),{classes:` is-disabled`,disabled:!0})}\n${U(`일부 비활성`,`<nav class="menu menu_vertical menu_compact"><ul class="menu_list"><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">조회</span></button></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">편집</span></button></li><li class="menu_item is-disabled"><span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">삭제</span></span></li><li class="menu_item is-disabled"><span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">관리자 설정</span></span></li></ul></nav>`,{classes:` is-open`})}`,example:`<div class="dropdown_demo-toolbar"><button type="button" class="btn btn_ghost color_default btn_sm"><span class="btn_label">알림 <span class="badge badge_count badge_sm color_danger" data-component="Badge">2</span></span></button>${U(`김가이드`,H([`내 프로필`,`내 문서`,`로그아웃`]),{classes:` dropdown_placement-end`,trigger:`btn_ghost color_default btn_sm`})}</div>`},W=`{% from "components/navigation/Dropdown/dropdown.njk" import dropdown, dropdownTrigger %}
{% from "components/navigation/Menu/menu.njk" import menu, menuItem, menuGroup, menuDivider %}`,G=(e,t=``)=>`{% call menu(compact=true) %}
${e.map(e=>`    {{ menuItem(label='${e}'${e===t?`, active=true`:``}) }}`).join(`
`)}
  {% endcall %}`,K=(e,t,n,r={})=>{let i=[`id='${e}'`,`triggerLabel='${t}'`,r.open&&`open=true`,r.disabled&&`disabled=true`,r.placement&&`placement='${r.placement}'`,r.fit&&`fit=true`,r.variant&&`triggerVariant='${r.variant}'`,r.color&&`triggerColor='${r.color}'`,r.selectText&&`triggerSelectText=true`,r.size&&`triggerSize='${r.size}'`,r.iconOnly&&`triggerIconOnly=true`,r.icon&&`triggerIcon='${r.icon}'`,r.maxVisibleItems&&`maxVisibleItems=${r.maxVisibleItems}`,r.menuWidth&&`menuWidth='${r.menuWidth}'`].filter(Boolean).join(`, `);return`${W}

{% call dropdown(${i}) %}
  ${n}
{% endcall %}`},ut={basic:K(`actions-menu`,`작업`,G([`복사`,`이동`,`공유`])),open:K(`category-menu`,`카테고리`,G([`전체`,`디자인`,`개발`,`마케팅`],`전체`),{open:!0,variant:`filled`,color:`primary`}),trigger:[K(`filled-menu`,`Filled`,G([`항목 1`,`항목 2`]),{variant:`filled`,color:`primary`}),K(`outline-menu`,`Outline`,G([`항목 1`,`항목 2`])),K(`ghost-menu`,`Ghost`,G([`항목 1`,`항목 2`]),{variant:`ghost`}),K(`text-menu`,`Text`,G([`항목 1`,`항목 2`]),{variant:`text`,color:`primary`}),K(`more-menu`,`더보기`,G([`편집`,`복제`,`삭제`]),{variant:`ghost`,iconOnly:!0,icon:`menu`})].join(`

`),select:K(`region-menu`,`서울특별시`,G([`서울특별시`,`부산광역시`,`대구광역시`],`서울특별시`),{fit:!0,variant:`select`})+`

`+K(`sort-menu`,`최신순`,G([`최신순`,`인기순`,`가격 낮은순`],`최신순`),{variant:`select`,selectText:!0}),placement:K(`start-menu`,`왼쪽 정렬`,G([`항목 A`,`항목 B`]))+`

`+K(`end-menu`,`오른쪽 정렬`,G([`항목 A`,`항목 B`]),{placement:`end`})+`

`+K(`top-menu`,`위로 열기`,G([`위쪽 패널`,`항목 2`]),{placement:`top`}),menu:`${W}

{% call dropdown(id='account-menu', triggerLabel='계정', open=true) %}
  {% call menu(compact=true, ariaLabel='계정 메뉴') %}
    {{ menuGroup(title='계정') }}
    {{ menuItem(label='프로필', icon='user') }}
    {{ menuItem(label='보안', icon='settings') }}
    {{ menuDivider() }}
    {{ menuItem(label='로그아웃', color='danger') }}
  {% endcall %}
{% endcall %}`,scroll:K(`city-menu`,`도시 선택`,G([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`]),{open:!0,maxVisibleItems:4})+`

`+K(`wide-menu`,`넓은 패널`,G([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),{open:!0,maxVisibleItems:4,menuWidth:`18rem`}),disabled:K(`disabled-menu`,`비활성 드롭다운`,G([`항목`]),{disabled:!0})+`\n\n${W}

{% call dropdown(id='partial-menu', triggerLabel='일부 비활성', open=true) %}
  {% call menu(compact=true) %}
    {{ menuItem(label='조회') }}
    {{ menuItem(label='편집') }}
    {{ menuItem(label='삭제', disabled=true) }}
    {{ menuItem(label='관리자 설정', disabled=true) }}
  {% endcall %}
{% endcall %}`,example:`${W}
{% from "components/basic/Button/button.njk" import button %}
{% from "components/data-display/Avatar/avatar.njk" import avatar %}
{% from "components/data-display/Badge/badge.njk" import badge %}

<div class="dropdown_demo-toolbar">
  {% call button(variant='ghost', size='sm', iconBefore='bell') %}
    알림 {{ badge(count=true, size='sm', color='danger', label='2') }}
  {% endcall %}

  {% set profileTrigger %}
    {% call dropdownTrigger(id='profile-menu', variant='ghost', size='sm', open=false) %}
      {{ avatar(size='sm', color='primary', initials='김', ariaHidden=true) }} 김가이드
    {% endcall %}
  {% endset %}
  {% call dropdown(id='profile-menu', placement='end', trigger=profileTrigger) %}
    ${G([`내 프로필`,`내 문서`,`로그아웃`])}
  {% endcall %}
</div>`},q=(e,t=``)=>`<Menu compact>${e.map(e=>`<MenuItem label="${e}"${e===t?` active`:``} />`).join(``)}</Menu>`,J=(e,t,n=``,r=`variant="outline"`)=>`<Dropdown ${n} triggerContent={<Button ${r} label="${e}" iconAfter={<Icon name="chevron-down" />} />}>${t}</Dropdown>`,dt={basic:J(`작업`,q([`복사`,`이동`,`공유`])),open:J(`카테고리`,q([`전체`,`디자인`,`개발`,`마케팅`],`전체`),`open`,`variant="filled" color="primary"`),trigger:[J(`Filled`,q([`항목 1`,`항목 2`]),``,`variant="filled" color="primary"`),J(`Outline`,q([`항목 1`,`항목 2`])),J(`Ghost`,q([`항목 1`,`항목 2`]),``,`variant="ghost"`),J(`Text`,q([`항목 1`,`항목 2`]),``,`variant="text" color="primary"`),`<Dropdown triggerContent={<Button variant="ghost" iconOnly ariaLabel="더보기" iconBefore={<Icon name="menu" />} />}>${q([`편집`,`복제`,`삭제`])}</Dropdown>`].join(`
`),select:`<Dropdown fit onSelect={setRegion} triggerContent={<Button variant="select" label={region} />}>${q([`서울특별시`,`부산광역시`,`대구광역시`])}</Dropdown>\n<Dropdown onSelect={setSort} triggerContent={<Button variant="select" selectText label={sort} />}>${q([`최신순`,`인기순`,`가격 낮은순`])}</Dropdown>`,placement:`${J(`왼쪽 정렬`,q([`항목 A`,`항목 B`]))}\n${J(`오른쪽 정렬`,q([`항목 A`,`항목 B`]),`placement="end"`)}\n${J(`위로 열기`,q([`위쪽 패널`,`항목 2`]),`placement="top"`,`variant="ghost"`)}`,menu:`<Dropdown open triggerContent={<Button variant="outline" label="계정" iconAfter={<Icon name="chevron-down" />} />}><Menu compact><MenuGroup title="계정" /><MenuItem label="프로필" icon={<Icon name="user" className="menu_icon" />} /><MenuItem label="보안" icon={<Icon name="settings" className="menu_icon" />} /><MenuDivider /><MenuItem label="로그아웃" color="danger" /></Menu></Dropdown>`,scroll:`${J(`도시 선택`,q([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`]),`open maxVisibleItems={4}`)}\n${J(`넓은 패널`,q([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),`open maxVisibleItems={4} menuWidth={18}`)}`,disabled:`${J(`비활성 드롭다운`,q([`항목`]),`disabled`,`variant="outline" disabled`)}\n<Dropdown open triggerContent={<Button variant="outline" label="일부 비활성" /> }><Menu compact><MenuItem label="조회" /><MenuItem label="편집" /><MenuItem label="삭제" disabled /><MenuItem label="관리자 설정" disabled /></Menu></Dropdown>`,example:`<div className="dropdown_demo-toolbar"><Button variant="ghost" size="sm" iconBefore={<Icon name="bell" />}>알림 <Badge count size="sm" color="danger" label="2" /></Button><Dropdown placement="end" triggerContent={<Button variant="ghost" size="sm" iconAfter={<Icon name="chevron-down" />}><Avatar size="sm" color="primary" initials="김" ariaHidden /> 김가이드</Button>}>${q([`내 프로필`,`내 문서`,`로그아웃`])}</Dropdown></div>`},Y=(e,t=``)=>`<Menu compact>${e.map(e=>`<MenuItem label="${e}"${e===t?` active`:``} />`).join(``)}</Menu>`,X=(e,t,n=``,r=`variant="outline"`)=>`<Dropdown ${n}><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" ${r} label="${e}"><template #icon-after><Icon name="chevron-down" /></template></Button></template>${t}</Dropdown>`,ft={basic:X(`작업`,Y([`복사`,`이동`,`공유`])),open:X(`카테고리`,Y([`전체`,`디자인`,`개발`,`마케팅`],`전체`),`open`,`variant="filled" color="primary"`),trigger:[X(`Filled`,Y([`항목 1`,`항목 2`]),``,`variant="filled" color="primary"`),X(`Outline`,Y([`항목 1`,`항목 2`])),X(`Ghost`,Y([`항목 1`,`항목 2`]),``,`variant="ghost"`),X(`Text`,Y([`항목 1`,`항목 2`]),``,`variant="text" color="primary"`),`<Dropdown><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="ghost" icon-only aria-label="더보기"><template #icon-before><Icon name="menu" /></template></Button></template>${Y([`편집`,`복제`,`삭제`])}</Dropdown>`].join(`
`),select:`<Dropdown fit @select="region = $event"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="select" :label="region" /></template>${Y([`서울특별시`,`부산광역시`,`대구광역시`])}</Dropdown>\n<Dropdown @select="sort = $event"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="select" select-text :label="sort" /></template>${Y([`최신순`,`인기순`,`가격 낮은순`])}</Dropdown>`,placement:`${X(`왼쪽 정렬`,Y([`항목 A`,`항목 B`]))}\n${X(`오른쪽 정렬`,Y([`항목 A`,`항목 B`]),`placement="end"`)}\n${X(`위로 열기`,Y([`위쪽 패널`,`항목 2`]),`placement="top"`,`variant="ghost"`)}`,menu:`<Dropdown open><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" label="계정"><template #icon-after><Icon name="chevron-down" /></template></Button></template><Menu compact><MenuGroup title="계정" /><MenuItem label="프로필"><template #icon><Icon name="user" class="menu_icon" /></template></MenuItem><MenuItem label="보안"><template #icon><Icon name="settings" class="menu_icon" /></template></MenuItem><MenuDivider /><MenuItem label="로그아웃" color="danger" /></Menu></Dropdown>`,scroll:`${X(`도시 선택`,Y([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`]),`open :max-visible-items="4"`)}\n${X(`넓은 패널`,Y([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),`open :max-visible-items="4" :menu-width="18"`)}`,disabled:`${X(`비활성 드롭다운`,Y([`항목`]),`disabled`,`variant="outline" disabled`)}\n<Dropdown open><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" label="일부 비활성" /></template><Menu compact><MenuItem label="조회" /><MenuItem label="편집" /><MenuItem label="삭제" disabled /><MenuItem label="관리자 설정" disabled /></Menu></Dropdown>`,example:`<div class="dropdown_demo-toolbar"><Button variant="ghost" size="sm"><template #icon-before><Icon name="bell" /></template>알림 <Badge count size="sm" color="danger" label="2" /></Button><Dropdown placement="end"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="ghost" size="sm"><Avatar size="sm" color="primary" initials="김" aria-hidden /> 김가이드<template #icon-after><Icon name="chevron-down" /></template></Button></template>${Y([`내 프로필`,`내 문서`,`로그아웃`])}</Dropdown></div>`},pt=Object.fromEntries(st.map(e=>[e,ot(e)]))})))()}var ht;function gt(){return(gt=e((()=>{ht=`<!-- Navbar 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- navbar 클래스에 반응형 접힘(data-navbar)과 브랜드·토글·메뉴 영역을 함께 둡니다. -->
<header class="navbar" data-component="Navbar" data-navbar>
  <div class="navbar_container">
    <!-- 브랜드 영역은 사이트 식별용 링크입니다. -->
    <a href="#" class="navbar_brand">UXKM</a>
    <!-- 좁은 화면에서 접힘 메뉴를 열고 닫는 토글 버튼입니다. -->
    <button
      type="button"
      class="btn btn_ghost btn_icon-only navbar_toggle"
      data-navbar-toggle
      aria-expanded="false"
      aria-controls="navbar-demo-collapse"
      aria-label="메뉴 열기"
    >
      <svg
        class="icon icon_sm navbar_toggle-icon-open"
        data-component="Icon"
        data-icon="menu"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path></svg
      ><svg
        class="icon icon_sm navbar_toggle-icon-close"
        data-component="Icon"
        data-icon="close"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18"></path>
      </svg>
    </button>
    <!-- 접힘 영역에 주요 내비게이션 목록을 배치합니다. -->
    <div class="navbar_collapse" id="navbar-demo-collapse">
      <nav class="navbar_nav" aria-label="주요 메뉴">
        <ul class="navbar_list">
          <li class="navbar_item">
            <a href="#" class="navbar_link is-active" aria-current="page">홈</a>
          </li>
          <li class="navbar_item"><a href="#" class="navbar_link">컴포넌트</a></li>
          <li class="navbar_item"><a href="#" class="navbar_link">접근성</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`{# Navbar 원본 구현: 브랜드·메뉴·검색·액션·반응형 토글을 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}
{% import "components/basic/Button/button.njk" as Button %}

{% macro navbarBrand(
  brand='UXKM',
  href='#',
  icon='',
  iconSlot='',
  src='',
  alt='',
  background='',
  className=''
) %}
<a
  href="{{ href }}"
  class="navbar_brand{% if background %} navbar_brand-bg{% endif %}{{ (' ' + className) if className else '' }}"
  {% if background %}style="--navbar-brand-bg-image: url('{{ background }}')" aria-label="{{ alt if alt else brand }}"{% endif %}
>
  {% if background %}
    <span class="navbar_brand-sr">{{ brand }}</span>
  {% elif src %}
    <img class="navbar_brand-image" src="{{ src }}" alt="{{ alt if alt else brand }}">
    {% if brand %}<span class="navbar_brand-text">{{ brand }}</span>{% endif %}
  {% else %}
    {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='navbar_brand-icon') }}{% endif %}
    {{ brand }}
  {% endif %}
</a>
{% endmacro %}

{% macro navbarItem(
  label='',
  href='#',
  active=false,
  disabled=false,
  icon='',
  iconSlot='',
  badge='',
  className=''
) %}
<li class="navbar_item{{ (' ' + className) if className else '' }}">
  <a
    href="{{ href if not disabled else '#' }}"
    class="navbar_link{% if active %} is-active{% endif %}{% if disabled %} is-disabled{% endif %}"
    {% if active %}aria-current="page"{% endif %}
    {% if disabled %}aria-disabled="true" tabindex="-1"{% endif %}
  >
    {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='navbar_link-icon') }}{% endif %}
    <span class="navbar_link-label">{{ label }}</span>
    {% if badge %}{{ badge | safe }}{% endif %}
  </a>
</li>
{% endmacro %}

{% macro navbarList(className='') %}
<ul class="navbar_list{{ (' ' + className) if className else '' }}">
  {% if caller %}{{ caller() | safe }}{% endif %}
</ul>
{% endmacro %}

{% macro navbarSearch(content='', className='') %}
{%- set search = caller() if caller else content -%}
<div class="navbar_search{{ (' ' + className) if className else '' }}">{{ search | safe }}</div>
{% endmacro %}

{% macro navbarActions(content='', className='') %}
{%- set actions = caller() if caller else content -%}
<div class="navbar_actions{{ (' ' + className) if className else '' }}">{{ actions | safe }}</div>
{% endmacro %}

{% macro navbarToggle(collapseId='navbar-collapse', open=false, openLabel='메뉴 열기', className='') %}
{% call Button.button(
  variant='ghost',
  color='',
  iconOnly=true,
  ripple=false,
  open=open,
  expanded=open,
  ariaLabel=openLabel,
  dataAttributes={'data-navbar-toggle': true, 'aria-controls': collapseId},
  className='navbar_toggle' + ((' ' + className) if className else '')
) %}
  {{ Icon.icon(name='menu', className='icon_sm navbar_toggle-icon-open') }}
  {{ Icon.icon(name='close', className='icon_sm navbar_toggle-icon-close') }}
{% endcall %}
{% endmacro %}

{% macro navbar(
  brand='UXKM',
  brandHref='#',
  brandIcon='',
  brandIconName='',
  brandSrc='',
  brandAlt='',
  brandBackground='',
  items='',
  search='',
  actions='',
  size='md',
  borderless=false,
  dark=false,
  sticky=false,
  responsive=false,
  open=false,
  collapseId='navbar-collapse',
  navLabel='주요 메뉴',
  className=''
) %}
{%- set navigation = caller() if caller else items -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<header
  class="navbar{% if resolvedSize != 'md' %} navbar_{{ resolvedSize }}{% endif %}{% if borderless %} navbar_borderless{% endif %}{% if dark %} navbar_dark{% endif %}{% if sticky %} navbar_sticky{% endif %}{% if open %} is-open{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Navbar"
  {% if responsive %}data-navbar{% endif %}
>
  <div class="navbar_container">
    {{ navbarBrand(
      brand=brand,
      href=brandHref,
      icon=brandIconName,
      iconSlot=brandIcon,
      src=brandSrc,
      alt=brandAlt,
      background=brandBackground
    ) }}
    {% if responsive %}{{ navbarToggle(collapseId=collapseId, open=open) }}{% endif %}
    <div class="navbar_collapse" id="{{ collapseId }}">
      <nav class="navbar_nav" aria-label="{{ navLabel }}">
        {{ navigation | safe }}
      </nav>
      {% if search %}{{ navbarSearch(content=search) }}{% endif %}
      {% if actions %}{{ navbarActions(content=actions) }}{% endif %}
    </div>
  </div>
</header>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% set demoItems %}
  {% call navbarList() %}
    {{ navbarItem(label='홈', active=true) }}
    {{ navbarItem(label='컴포넌트') }}
  {% endcall %}
{% endset %}
{{ navbar(items=demoItems) }}
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`/**
 * Navbar 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 Navbar 크기입니다.

export function Navbar({
  brand, // 브랜드 영역에 표시할 기본 텍스트입니다.
  brandSrc, // 브랜드 로고 이미지 URL입니다.
  brandAlt, // brandSrc 이미지의 대체 텍스트입니다.
  brandBackground, // CSS background-image로 표시할 브랜드 이미지 URL입니다.
  ariaLabel, // 헤더의 접근 가능한 이름을 지정합니다.
  size = 'md', // Navbar의 세로 크기를 지정합니다.
  borderless = false, // 하단 테두리를 제거할지 여부입니다.
  dark = false, // 어두운 배경 테마를 적용할지 여부입니다.
  sticky = false, // 스크롤 시 상단에 고정할지 여부입니다.
  responsive = false, // 좁은 화면에서 접힘 토글을 사용할지 여부입니다.
  collapseId, // 접힘 영역의 DOM id를 직접 지정합니다.
  brandContent, // 브랜드 영역을 완전히 대체할 사용자 정의 콘텐츠입니다.
  brandIcon, // 브랜드 텍스트 앞에 표시할 아이콘입니다.
  items, // 네비게이션 목록으로 렌더할 미리 구성한 항목입니다.
  search, // 접힘 영역 안에 배치할 검색 UI입니다.
  actions, // 접힘 영역 안에 배치할 액션 버튼 영역입니다.
  children, // NavbarList/NavbarItem 등 자식 네비게이션 항목입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, role 등 나머지 속성을 헤더 요소에 전달합니다.
}) {
  // React id의 콜론을 제거해 CSS/aria 연결용 안전한 식별자를 만듭니다.
  const reactId = useId().replaceAll(':', '');
  const targetId = collapseId || \`navbar-collapse-\${reactId}\`; // 접힘 영역의 최종 id입니다.
  const [open, setOpen] = useState(false); // 반응형 메뉴의 열림 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기 값입니다.

  // 크기, 테마, 고정, 열림 상태 클래스를 조합합니다.
  const classes = [
    'navbar', // Navbar 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedSize !== 'md' && \`navbar_\${resolvedSize}\`, // 기본 md가 아닐 때 크기 변형입니다.
    borderless && 'navbar_borderless', // 테두리 없는 변형입니다.
    dark && 'navbar_dark', // 어두운 테마 변형입니다.
    sticky && 'navbar_sticky', // 상단 고정 변형입니다.
    open && 'is-open', // 반응형 메뉴가 열린 상태입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // items가 있으면 우선하고, 없으면 children을 목록으로 감쌉니다.
  const navItems = items ?? (children ? <ul className="navbar_list">{children}</ul> : null);
  const brandLabel = typeof brand === 'string' ? brand : '';
  // ariaLabel, brandAlt, brand 문자열, 기본값을 순서로 접근 가능한 이름을 결정합니다.
  const accessibleName = ariaLabel || brandAlt || brandLabel || '사이트';
  const brandLinkClass = ['navbar_brand', brandBackground && 'navbar_brand-bg'].filter(Boolean).join(' ');
  const brandLinkStyle = brandBackground
    ? { '--navbar-brand-bg-image': \`url("\${brandBackground}")\` }
    : undefined;
  const brandLinkAriaLabel = brandBackground && !brandLabel ? accessibleName : undefined;

  const defaultBrand = brandBackground ? (
    brandLabel ? <span className="navbar_brand-sr">{brandLabel}</span> : null
  ) : (
    <>
      {brandSrc ? (
        <img className="navbar_brand-image" src={brandSrc} alt={brandAlt ?? brandLabel} />
      ) : (
        brandIcon
      )}
      {brandSrc ? (brandLabel ? <span className="navbar_brand-text">{brandLabel}</span> : null) : brand}
    </>
  );

  return (
    <header
      {...props}
      className={classes}
      aria-label={props.role === 'presentation' ? undefined : accessibleName}
      data-component="Navbar"
      data-navbar={responsive || undefined}
    >
      <div className="navbar_container">
        <a
          href="#"
          className={brandLinkClass}
          style={brandLinkStyle}
          aria-label={brandLinkAriaLabel}
          onClick={(event) => event.preventDefault()}
        >
          {brandContent ?? defaultBrand}
        </a>
        {responsive && (
          <Button
            variant="ghost"
            iconOnly
            className="navbar_toggle"
            ariaLabel={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls={targetId}
            onClick={() => setOpen((value) => !value)}
            iconBefore={
              <>
                <Icon name="menu" size="sm" className="navbar_toggle-icon-open" />
                <Icon name="close" size="sm" className="navbar_toggle-icon-close" />
              </>
            }
          />
        )}
        <div className="navbar_collapse" id={targetId}>
          <nav className="navbar_nav" aria-label={\`\${accessibleName} 주요 메뉴\`}>
            {navItems}
          </nav>
          {search && <div className="navbar_search">{search}</div>}
          {actions && <div className="navbar_actions">{actions}</div>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
`})))()}var xt;function St(){return(St=e((()=>{xt=`/**
 * NavbarList 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function NavbarList({
  children, // 목록에 배치할 NavbarItem 등 자식입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 ul에 전달합니다.
}) {
  // navbar_list 클래스와 사용자 정의 클래스를 조합합니다.
  return (
    <ul {...props} className={['navbar_list', className].filter(Boolean).join(' ')}>
      {children}
    </ul>
  );
}
export default NavbarList;
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`/**
 * NavbarItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function NavbarItem({
  label, // 링크에 표시할 기본 텍스트입니다.
  href = '#', // 항목이 가리키는 대상 주소입니다.
  active = false, // 현재 페이지 항목인지 여부입니다.
  badge, // 링크 텍스트 옆에 표시할 배지입니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 링크 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  return (
    <li {...props} className={['navbar_item', className].filter(Boolean).join(' ')}>
      <a
        href={href}
        // 활성 상태면 is-active 클래스를 함께 적용합니다.
        className={['navbar_link', active && 'is-active'].filter(Boolean).join(' ')}
        aria-current={active ? 'page' : undefined}
        onClick={(event) => {
          // 데모용으로 기본 이동을 막고 사용자 콜백만 호출합니다.
          event.preventDefault();
          onClick?.(event);
        }}
      >
        {children ?? label}
        {badge}
      </a>
    </li>
  );
}
export default NavbarItem;
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`<!--
  Navbar 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Navbar 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmNavbar', inheritAttrs: false });

// 브랜드, 크기, 테마, 고정, 반응형 접힘 설정을 prop으로 받습니다.
const props = defineProps({
  brand: String, // 브랜드 영역에 표시할 기본 텍스트입니다.
  brandSrc: String, // 브랜드 로고 이미지 URL입니다.
  brandAlt: String, // brandSrc 이미지의 대체 텍스트입니다.
  brandBackground: String, // CSS background-image로 표시할 브랜드 이미지 URL입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // Navbar의 세로 크기를 지정합니다.
  borderless: Boolean, // 하단 테두리를 제거할지 여부입니다.
  dark: Boolean, // 어두운 배경 테마를 적용할지 여부입니다.
  sticky: Boolean, // 스크롤 시 상단에 고정할지 여부입니다.
  responsive: Boolean, // 좁은 화면에서 접힘 토글을 사용할지 여부입니다.
  collapseId: String, // 접힘 영역의 DOM id를 직접 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const open = ref(false); // 반응형 메뉴의 열림 상태입니다.
const targetId = props.collapseId || \`navbar-collapse-\${Math.random().toString(36).slice(2, 9)}\`; // 접힘 영역의 최종 id입니다.

// 크기, 테마, 고정, 열림 상태 클래스를 조합합니다.
const classes = computed(() =>
  [
    'navbar', // Navbar 레이아웃을 활성화하는 필수 클래스입니다.
    props.size !== 'md' && \`navbar_\${props.size}\`, // 기본 md가 아닐 때 크기 변형입니다.
    props.borderless && 'navbar_borderless', // 테두리 없는 변형입니다.
    props.dark && 'navbar_dark', // 어두운 테마 변형입니다.
    props.sticky && 'navbar_sticky', // 상단 고정 변형입니다.
    open.value && 'is-open', // 반응형 메뉴가 열린 상태입니다.
    ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

const brandLinkClass = computed(() =>
  ['navbar_brand', props.brandBackground && 'navbar_brand-bg'].filter(Boolean).join(' '),
);
const brandLinkStyle = computed(() =>
  props.brandBackground ? { '--navbar-brand-bg-image': \`url("\${props.brandBackground}")\` } : undefined,
);
const brandLinkAriaLabel = computed(() =>
  props.brandBackground && !props.brand ? props.brandAlt || props.brand || '사이트' : undefined,
);
<\/script>

<template>
  <!-- 헤더 루트에 속성과 클래스를 연결하고 브랜드·토글·접힘 영역을 배치합니다. -->
  <header
    v-bind="attrs"
    :class="classes"
    data-component="Navbar"
    :data-navbar="responsive || undefined"
  >
    <div class="navbar_container">
      <!-- 브랜드 링크는 데모용으로 기본 이동을 막습니다. -->
      <a
        href="#"
        :class="brandLinkClass"
        :style="brandLinkStyle"
        :aria-label="brandLinkAriaLabel"
        @click.prevent
      >
        <slot name="brand">
          <template v-if="brandBackground">
            <span v-if="brand" class="navbar_brand-sr">{{ brand }}</span>
          </template>
          <template v-else-if="brandSrc">
            <img class="navbar_brand-image" :src="brandSrc" :alt="brandAlt ?? brand ?? ''" />
            <span v-if="brand" class="navbar_brand-text">{{ brand }}</span>
          </template>
          <template v-else>
            <slot name="brand-icon" />
            {{ brand }}
          </template>
        </slot>
      </a>
      <Button
        v-if="responsive"
        variant="ghost"
        icon-only
        class="navbar_toggle"
        :aria-expanded="open"
        :aria-controls="targetId"
        :aria-label="open ? '메뉴 닫기' : '메뉴 열기'"
        @click="open = !open"
        ><template #icon-before
          ><Icon name="menu" size="sm" class="navbar_toggle-icon-open" /><Icon
            name="close"
            size="sm"
            class="navbar_toggle-icon-close" /></template
      ></Button>
      <!-- 접힘 영역에 주요 메뉴, 검색, 액션을 배치합니다. -->
      <div :id="targetId" class="navbar_collapse">
        <nav class="navbar_nav" aria-label="주요 메뉴">
          <slot name="items"
            ><ul v-if="$slots.default" class="navbar_list">
              <slot /></ul
          ></slot>
        </nav>
        <div v-if="$slots.search" class="navbar_search"><slot name="search" /></div>
        <div v-if="$slots.actions" class="navbar_actions"><slot name="actions" /></div>
      </div>
    </div>
  </header>
</template>
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`<!--
  NavbarList 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarList' }); // 컴포넌트 표시 이름을 등록합니다.
<\/script>
<template>
  <!-- NavbarItem 등 자식을 담는 목록 루트입니다. -->
  <ul class="navbar_list">
    <slot />
  </ul>
</template>
`})))()}var kt;function At(){return(At=e((()=>{kt=`<!--
  NavbarItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmNavbarItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 활성 상태를 prop으로 받습니다.
defineProps({
  label: String, // 링크에 표시할 기본 텍스트입니다.
  href: { type: String, default: '#' }, // 항목이 가리키는 대상 주소입니다.
  active: Boolean, // 현재 페이지 항목인지 여부입니다.
});
defineEmits(['click']); // 링크 클릭 시 부모로 전달하는 이벤트입니다.
<\/script>
<template>
  <!-- 활성 상태를 링크 클래스와 aria-current에 반영합니다. -->
  <li class="navbar_item">
    <a
      :href="href"
      :class="['navbar_link', active && 'is-active']"
      :aria-current="active ? 'page' : undefined"
      @click.prevent="$emit('click', $event)"
      ><slot>{{ label }}</slot
      ><slot name="badge"
    /></a>
  </li>
</template>
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`<!-- Menu 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- menu 클래스에 세로 배치·테두리 변형과 선택 가능 속성(data-menu-selectable)을 함께 둡니다. -->
<nav
  class="menu menu_vertical menu_bordered"
  data-component="Menu"
  data-menu-selectable
  aria-label="컴포넌트 메뉴"
>
  <ul class="menu_list">
    <!-- 현재 페이지 항목은 is-active와 aria-current를 함께 둡니다. -->
    <li class="menu_item">
      <button type="button" class="menu_link is-active" aria-current="page">
        <span class="menu_label">홈</span>
      </button>
    </li>
    <!-- 서브메뉴는 aria-expanded와 aria-controls로 하위 목록을 연결합니다. -->
    <li class="menu_item menu_item-submenu" aria-expanded="true">
      <button
        type="button"
        class="menu_link"
        data-menu-submenu-toggle
        aria-expanded="true"
        aria-controls="menu-components"
      >
        <span class="menu_label">컴포넌트</span
        ><svg
          class="icon menu_arrow"
          data-component="Icon"
          data-icon="chevron-down"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <ul id="menu-components" class="menu_submenu">
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">Button</span></button>
        </li>
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">Input</span></button>
        </li>
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">Card</span></button>
        </li>
      </ul>
    </li>
  </ul>
</nav>
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`{# Menu 원본 구현: 메뉴·항목·서브메뉴·그룹·구분선을 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}
{% import "components/basic/Button/button.njk" as Button %}

{% macro menuItem(
  label='',
  href='',
  active=false,
  disabled=false,
  icon='',
  iconSlot='',
  extra='',
  color='',
  value='',
  className=''
) %}
{%- set root = 'a' if href else 'button' -%}
<li class="menu_item{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className else '' }}">
  <{{ root }}
    class="menu_link{% if active %} is-active{% endif %}{% if disabled %} is-disabled{% endif %}{% if color %} color_{{ color }}{% endif %}"
    {% if root == 'button' %}type="button"{% if disabled %} disabled{% endif %}{% else %}href="{{ href if not disabled else '#' }}"{% endif %}
    {% if active %}aria-current="page"{% endif %}
    {% if value %}data-value="{{ value }}"{% endif %}
    {% if disabled %}aria-disabled="true"{% if root == 'a' %} tabindex="-1"{% endif %}{% endif %}
  >
    {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='menu_icon') }}{% endif %}
    <span class="menu_label">{{ label }}</span>
    {% if extra %}<span class="menu_extra">{{ extra | safe }}</span>{% endif %}
  </{{ root }}>
</li>
{% endmacro %}

{% macro menuSubmenu(
  label='',
  id='menu-submenu',
  expanded=false,
  icon='',
  iconSlot='',
  disabled=false,
  className=''
) %}
{%- set content = caller() if caller else '' -%}
<li
  class="menu_item menu_item-submenu{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className else '' }}"
  aria-expanded="{{ 'true' if expanded else 'false' }}"
>
  {% call Button.button(
    variant='text',
    color='',
    ripple=false,
    expanded=expanded,
    disabled=disabled,
    dataAttributes={'data-menu-submenu-toggle': true, 'aria-controls': id},
    className='menu_link' + (' is-disabled' if disabled else '')
  ) %}
    {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='menu_icon') }}{% endif %}
    <span class="menu_label">{{ label }}</span>
    {{ Icon.icon(name='chevron-down', className='menu_arrow') }}
  {% endcall %}
  <ul id="{{ id }}" class="menu_submenu">
    {{ content | safe }}
  </ul>
</li>
{% endmacro %}

{% macro menuGroup(title='', className='') %}
<li class="menu_group{{ (' ' + className) if className else '' }}" role="presentation">
  <span class="menu_group-title">{{ title }}</span>
</li>
{% endmacro %}

{% macro menuDivider(className='') %}
<li class="menu_divider{{ (' ' + className) if className else '' }}" role="separator"></li>
{% endmacro %}

{% macro menu(
  mode='vertical',
  bordered=false,
  compact=false,
  dark=false,
  selectable=true,
  ariaLabel='메뉴',
  className=''
) %}
{%- set content = caller() if caller else '' -%}
{%- set resolvedMode = mode if mode in ['vertical', 'horizontal'] else 'vertical' -%}
<nav
  class="menu menu_{{ resolvedMode }}{% if bordered %} menu_bordered{% endif %}{% if compact %} menu_compact{% endif %}{% if dark %} menu_dark{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Menu"
  {% if selectable %}data-menu-selectable{% endif %}
  aria-label="{{ ariaLabel }}"
>
  <ul class="menu_list">
    {{ content | safe }}
  </ul>
</nav>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call menu(bordered=true, ariaLabel='주요 메뉴') %}
  {{ menuItem(label='대시보드', active=true) }}
  {{ menuItem(label='분석') }}
  {{ menuItem(label='설정') }}
{% endcall %}
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`/**
 * Menu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
const modes = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 메뉴 배치 모드입니다.

export function Menu({
  mode = 'vertical', // 메뉴의 배치 방향을 지정합니다.
  bordered = false, // 외곽 테두리를 표시할지 여부입니다.
  compact = false, // 항목 간격을 줄인 밀집 레이아웃인지 여부입니다.
  dark = false, // 어두운 배경 테마를 적용할지 여부입니다.
  selectable = true, // 클릭 시 DOM으로 활성 항목을 자동 갱신할지 여부입니다.
  ariaLabel, // 내비게이션의 접근 가능한 이름을 지정합니다.
  children, // MenuItem, MenuSubmenu 등 메뉴 자식입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 메뉴 영역 클릭 시 추가로 호출할 콜백입니다.
  ...props // id, role 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedMode = modes.has(mode) ? mode : 'vertical'; // 검증된 배치 모드입니다.

  // 모드와 시각 변형 클래스를 조합합니다.
  const classes = [
    'menu', // Menu 레이아웃을 활성화하는 필수 클래스입니다.
    \`menu_\${resolvedMode}\`, // 세로·가로·인라인 배치 클래스입니다.
    bordered && 'menu_bordered', // 테두리 변형입니다.
    compact && 'menu_compact', // 밀집 간격 변형입니다.
    dark && 'menu_dark', // 어두운 테마 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 비활성·서브메뉴가 아닌 링크 클릭 시 활성 상태를 단일 선택으로 갱신합니다.
  // selectable=false이면 MenuItem의 active prop만 사용합니다.
  function handleClick(event) {
    if (selectable) {
      const link = event.target.closest('.menu_link');
      if (
        link &&
        !link.classList.contains('is-disabled') &&
        !link.parentElement?.classList.contains('menu_item-submenu')
      ) {
        event.currentTarget.querySelectorAll('.menu_link.is-active').forEach((item) => {
          item.classList.remove('is-active');
          item.removeAttribute('aria-current');
        });
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    }
    onClick?.(event);
  }

  return (
    <nav
      {...props}
      className={classes}
      data-component="Menu"
      {...(selectable ? { 'data-menu-selectable': true } : {})}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <ul className="menu_list">{children}</ul>
    </nav>
  );
}

export default Menu;
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`/**
 * MenuItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuItem({
  label, // 항목에 표시할 기본 텍스트입니다.
  href, // 지정 시 앵커로 렌더할 대상 주소입니다.
  active = false, // 현재 선택된 항목인지 여부입니다.
  disabled = false, // 상호작용을 막을지 여부입니다.
  color, // 링크 텍스트에 적용할 색상 토큰입니다.
  icon, // 레이블 앞에 표시할 아이콘입니다.
  extra, // 레이블 뒤에 표시할 보조 콘텐츠입니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 항목 활성화 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
  const Tag = href && !disabled ? 'a' : disabled ? 'span' : 'button';

  // 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
  const linkClasses = [
    'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
    active && 'is-active', // 현재 선택 상태입니다.
    disabled && 'is-disabled', // 비활성 상태입니다.
    color && \`color_\${color}\`, // 색상 토큰 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  return (
    <li
      {...props}
      className={['menu_item', disabled && 'is-disabled', className].filter(Boolean).join(' ')}
    >
      <Tag
        className={linkClasses}
        href={Tag === 'a' ? href : undefined}
        type={Tag === 'button' ? 'button' : undefined}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        onClick={(event) => {
          // 앵커는 데모용으로 기본 이동을 막고, 활성 항목만 콜백을 호출합니다.
          if (Tag === 'a') event.preventDefault();
          if (!disabled) onClick?.(event);
        }}
      >
        {icon}
        {(children ?? label) != null && <span className="menu_label">{children ?? label}</span>}
        {extra != null && <span className="menu_extra">{extra}</span>}
      </Tag>
    </li>
  );
}
export default MenuItem;
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`/**
 * MenuSubmenu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { useEffect, useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

export function MenuSubmenu({
  label, // 서브메뉴 트리거에 표시할 텍스트입니다.
  expanded = false, // 초기·제어용 펼침 상태입니다.
  submenuId, // 서브메뉴 목록의 DOM id를 직접 지정합니다.
  icon, // 트리거 앞에 표시할 아이콘입니다.
  children, // 하위 MenuItem 등 서브메뉴 항목입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // React id의 콜론을 제거해 aria-controls 연결용 식별자를 만듭니다.
  const generatedId = useId().replaceAll(':', '');
  const id = submenuId || \`menu-sub-\${generatedId}\`; // 서브메뉴 목록의 최종 id입니다.
  const [open, setOpen] = useState(Boolean(expanded)); // 현재 펼침 상태입니다.

  // 외부 expanded prop이 바뀌면 내부 열림 상태를 동기화합니다.
  useEffect(() => setOpen(Boolean(expanded)), [expanded]);

  return (
    <li
      {...props}
      className={['menu_item', 'menu_item-submenu', className].filter(Boolean).join(' ')}
      aria-expanded={open}
    >
      <Button
        variant="text"
        className="menu_link"
        expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        iconBefore={icon}
        iconAfter={<Icon name="chevron-down" className="menu_arrow" />}
      >
        <span className="menu_label">{label}</span>
      </Button>
      <ul id={id} className="menu_submenu">
        {children}
      </ul>
    </li>
  );
}
export default MenuSubmenu;
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`/**
 * MenuGroup 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuGroup({
  title, // 그룹을 구분하는 제목 텍스트입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // 그룹 제목만 표시하는 비상호작용 목록 항목입니다.
  return (
    <li {...props} className={['menu_group', className].filter(Boolean).join(' ')}>
      <span className="menu_group-title">{title}</span>
    </li>
  );
}
export default MenuGroup;
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`/**
 * MenuDivider 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuDivider(props) { // className 등 나머지 속성을 li에 전달합니다.
  // 장식용 구분선이므로 보조 기술에서 숨깁니다.
  return (
    <li
      {...props}
      className={['menu_divider', props.className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}
export default MenuDivider;
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`<!--
  Menu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Menu 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmMenu', inheritAttrs: false });

// 배치 모드와 시각 변형, 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
    validator: (value) => ['vertical', 'horizontal', 'inline'].includes(value),
  }, // 메뉴의 배치 방향을 지정합니다.
  bordered: Boolean, // 외곽 테두리를 표시할지 여부입니다.
  compact: Boolean, // 항목 간격을 줄인 밀집 레이아웃인지 여부입니다.
  dark: Boolean, // 어두운 배경 테마를 적용할지 여부입니다.
  selectable: {
    type: Boolean,
    default: true,
  }, // 클릭 시 DOM으로 활성 항목을 자동 갱신할지 여부입니다.
  ariaLabel: String, // 내비게이션의 접근 가능한 이름을 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 모드와 시각 변형 클래스를 조합합니다.
const classes = computed(() =>
  [
    'menu', // Menu 레이아웃을 활성화하는 필수 클래스입니다.
    \`menu_\${props.mode}\`, // 세로·가로·인라인 배치 클래스입니다.
    props.bordered && 'menu_bordered', // 테두리 변형입니다.
    props.compact && 'menu_compact', // 밀집 간격 변형입니다.
    props.dark && 'menu_dark', // 어두운 테마 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 비활성·서브메뉴가 아닌 링크 클릭 시 활성 상태를 단일 선택으로 갱신합니다.
// selectable=false이면 MenuItem의 active만 사용합니다.
function selectItem(event) {
  if (!props.selectable) return;
  const link = event.target.closest?.('.menu_link');
  if (
    !link ||
    link.classList.contains('is-disabled') ||
    link.parentElement?.classList.contains('menu_item-submenu')
  )
    return;
  event.currentTarget.querySelectorAll('.menu_link.is-active').forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('aria-current');
  });
  link.classList.add('is-active');
  link.setAttribute('aria-current', 'page');
}
<\/script>

<template>
  <!-- 선택 가능 메뉴 루트에 속성과 클릭 처리를 연결합니다. -->
  <nav
    v-bind="attrs"
    :class="classes"
    data-component="Menu"
    :data-menu-selectable="selectable ? true : undefined"
    :aria-label="ariaLabel"
    @click="selectItem"
  >
    <ul class="menu_list">
      <slot />
    </ul>
  </nav>
</template>
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`<!--
  MenuItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';

// 레이블, 주소, 활성·비활성, 색상 상태를 prop으로 받습니다.
const props = defineProps({
  label: String, // 항목에 표시할 기본 텍스트입니다.
  href: String, // 지정 시 앵커로 렌더할 대상 주소입니다.
  active: Boolean, // 현재 선택된 항목인지 여부입니다.
  disabled: Boolean, // 상호작용을 막을지 여부입니다.
  color: String, // 링크 텍스트에 적용할 색상 토큰입니다.
});
defineEmits(['click']); // 항목 클릭 시 부모로 전달하는 이벤트입니다.

// href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
const tag = computed(() =>
  props.href && !props.disabled ? 'a' : props.disabled ? 'span' : 'button',
);

// 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
const classes = computed(() =>
  [
    'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
    props.active && 'is-active', // 현재 선택 상태입니다.
    props.disabled && 'is-disabled', // 비활성 상태입니다.
    props.color && \`color_\${props.color}\`, // 색상 토큰 클래스입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
<\/script>
<template>
  <!-- 상태별 태그로 아이콘·레이블·보조 콘텐츠를 렌더합니다. -->
  <li :class="['menu_item', disabled && 'is-disabled']">
    <component
      :is="tag"
      :class="classes"
      :href="tag === 'a' ? href : undefined"
      :type="tag === 'button' ? 'button' : undefined"
      :aria-current="active ? 'page' : undefined"
      :aria-disabled="disabled || undefined"
      @click="tag === 'a' ? $event.preventDefault() : undefined"
      ><slot name="icon" /><span v-if="label || $slots.default" class="menu_label"
        ><slot>{{ label }}</slot></span
      ><span v-if="$slots.extra" class="menu_extra"><slot name="extra" /></span
    ></component>
  </li>
</template>
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`<!--
  MenuSubmenu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, ref, useId, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 레이블, 펼침 상태, 서브메뉴 id를 prop으로 받습니다.
const props = defineProps({
  label: String, // 서브메뉴 트리거에 표시할 텍스트입니다.
  expanded: Boolean, // 초기·제어용 펼침 상태입니다.
  submenuId: String, // 서브메뉴 목록의 DOM id를 직접 지정합니다.
});
const open = ref(Boolean(props.expanded)); // 현재 펼침 상태입니다.

// 외부 expanded prop이 바뀌면 내부 열림 상태를 동기화합니다.
watch(
  () => props.expanded,
  (value) => {
    open.value = Boolean(value);
  },
);
const generatedId = useId().replaceAll(':', ''); // aria-controls 연결용 식별자입니다.
const id = computed(() => props.submenuId || \`menu-sub-\${generatedId}\`); // 서브메뉴 목록의 최종 id입니다.
<\/script>
<template>
  <!-- 트리거 버튼으로 하위 목록을 펼치거나 접습니다. -->
  <li class="menu_item menu_item-submenu" :aria-expanded="open">
    <Button
      variant="text"
      class="menu_link"
      :expanded="open"
      :aria-controls="id"
      @click="open = !open"
      ><template v-if="$slots.icon" #icon-before><slot name="icon" /></template
      ><span class="menu_label">{{ label }}</span
      ><template #icon-after><Icon name="chevron-down" class="menu_arrow" /></template
    ></Button>
    <ul :id="id" class="menu_submenu">
      <slot />
    </ul>
  </li>
</template>
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`<!--
  MenuGroup 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmMenuGroup' }); // 컴포넌트 표시 이름을 등록합니다.

// 그룹 제목을 prop으로 받습니다.
defineProps({
  title: { type: String, required: true }, // 그룹을 구분하는 제목 텍스트입니다.
});
<\/script>
<template>
  <!-- 그룹 제목만 표시하는 비상호작용 목록 항목입니다. -->
  <li class="menu_group" role="presentation">
    <span class="menu_group-title">{{ title }}</span>
  </li>
</template>
`})))()}var $t;function en(){return(en=e((()=>{$t=`<!--
  MenuDivider 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmMenuDivider' }); // 컴포넌트 표시 이름을 등록합니다.
<\/script>
<template>
  <!-- 장식용 구분선이므로 separator 역할만 둡니다. -->
  <li class="menu_divider" role="separator" />
</template>
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`<!-- Tabs 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- tabs 클래스에 line 변형과 data-tabs를 두고 탭 목록·패널을 연결합니다. -->
<div class="tabs tabs_line" data-component="Tabs" data-tabs>
  <div class="tabs_bar">
    <div class="tabs_list-wrap">
      <!-- role=tablist 안에서 각 탭 버튼을 aria-controls로 패널과 연결합니다. -->
      <div class="tabs_list" role="tablist" aria-label="프로젝트 정보">
        <button
          type="button"
          class="tabs_tab is-active"
          role="tab"
          id="project-tab-1"
          aria-selected="true"
          aria-controls="project-panel-1"
        >
          <span class="tabs_label">개요</span></button
        ><button
          type="button"
          class="tabs_tab"
          role="tab"
          id="project-tab-2"
          aria-selected="false"
          aria-controls="project-panel-2"
          tabindex="-1"
        >
          <span class="tabs_label">팀</span></button
        ><button
          type="button"
          class="tabs_tab"
          role="tab"
          id="project-tab-3"
          aria-selected="false"
          aria-controls="project-panel-3"
          tabindex="-1"
        >
          <span class="tabs_label">활동</span>
        </button>
      </div>
    </div>
  </div>
  <!-- 활성 패널만 is-active로 보이고 나머지는 hidden으로 숨깁니다. -->
  <div class="tabs_panels">
    <div
      class="tabs_panel is-active"
      role="tabpanel"
      id="project-panel-1"
      aria-labelledby="project-tab-1"
    >
      <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>
    </div>
    <div
      class="tabs_panel"
      role="tabpanel"
      id="project-panel-2"
      aria-labelledby="project-tab-2"
      hidden
    >
      <p>팀 구성원과 역할을 표시합니다.</p>
    </div>
    <div
      class="tabs_panel"
      role="tabpanel"
      id="project-panel-3"
      aria-labelledby="project-tab-3"
      hidden
    >
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </div>
  </div>
</div>
`})))()}var rn;function an(){return(an=e((()=>{rn=`{# Tabs 원본 구현: 탭·패널·스크롤 제어를 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}
{% import "components/basic/Button/button.njk" as Button %}

{% macro tab(id, panelId, label='', active=false, disabled=false, closable=false, closeLabel='', icon='', iconSlot='', badge='', className='') %}
{% if closable %}
<span class="tabs_item{% if active %} is-active{% endif %}{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className else '' }}">
{% endif %}
<button
  type="button"
  class="tabs_tab{% if active %} is-active{% endif %}{% if disabled %} is-disabled{% endif %}{{ (' ' + className) if className and not closable else '' }}"
  role="tab"
  id="{{ id }}"
  aria-selected="{{ 'true' if active else 'false' }}"
  aria-controls="{{ panelId }}"
  {% if not active %}tabindex="-1"{% endif %}
  {% if disabled %}aria-disabled="true" disabled{% endif %}
>
  {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='tabs_icon') }}{% endif %}
  <span class="tabs_label">{{ label }}</span>
  {% if badge %}<span class="tabs_badge">{{ badge | safe }}</span>{% endif %}
</button>
{% if closable %}
  <button type="button" class="tabs_close" data-tabs-close aria-label="{{ closeLabel or (label ~ ' 닫기') }}"{% if disabled %} disabled{% endif %} tabindex="-1">{{ Icon.icon(name='close', className='tabs_close-icon') }}</button>
</span>
{% endif %}
{% endmacro %}

{% macro tabPanel(id, tabId, active=false, content='', className='') %}
{%- set panelContent = caller() if caller else content -%}
<div
  class="tabs_panel{% if active %} is-active{% endif %}{{ (' ' + className) if className else '' }}"
  role="tabpanel"
  id="{{ id }}"
  aria-labelledby="{{ tabId }}"
  {% if not active %}hidden{% endif %}
>{{ panelContent | safe }}</div>
{% endmacro %}

{% macro tabs(tabs='', panels='', variant='line', size='md', layout='default', vertical=false, scrollable=false, indicator='', ariaLabel='탭', extra='', mode='', className='') %}
{%- set resolvedVariant = variant if variant in ['line', 'card', 'pill'] else 'line' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<div
  class="tabs tabs_{{ resolvedVariant }}{% if resolvedSize != 'md' %} tabs_{{ resolvedSize }}{% endif %}{% if mode == 'dynamic' %} tabs_dynamic{% endif %}{% if layout == 'equal' %} tabs_equal{% endif %}{% if layout == 'scroll' and not vertical %} tabs_scroll-nav{% endif %}{% if vertical %} tabs_vertical{% endif %}{% if scrollable and layout != 'scroll' %} tabs_scrollable{% endif %}{% if indicator == 'slide' %} tabs_indicator-slide{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Tabs"
  data-tabs
>
  <div class="tabs_bar">
    {% if layout == 'scroll' and not vertical %}
      {{ Button.button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='arrow-left', ripple=false, hidden=true, ariaLabel='이전 탭', className='tabs_nav tabs_nav_prev', dataAttributes={ 'data-tabs-scroll': 'prev' }) }}
    {% endif %}
    <div class="tabs_list-wrap{% if layout == 'scroll' and not vertical %} tabs_scroll-viewport{% endif %}">
      <div class="tabs_list" role="tablist" aria-label="{{ ariaLabel }}" aria-orientation="{{ 'vertical' if vertical else 'horizontal' }}">
        {% if indicator == 'slide' %}<span class="tabs_indicator" aria-hidden="true"></span>{% endif %}
        {{ tabs | safe }}
      </div>
    </div>
    {% if layout == 'scroll' and not vertical %}
      {{ Button.button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='chevron', ripple=false, hidden=true, ariaLabel='다음 탭', className='tabs_nav tabs_nav_next', dataAttributes={ 'data-tabs-scroll': 'next' }) }}
    {% endif %}
    {% if extra %}<div class="tabs_extra">{{ extra | safe }}</div>{% endif %}
  </div>
  <div class="tabs_panels">{{ panels | safe }}</div>
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% set demoTabs %}
  {{ tab(id='demo-tab-1', panelId='demo-panel-1', label='개요', active=true) }}
  {{ tab(id='demo-tab-2', panelId='demo-panel-2', label='활동') }}
{% endset %}
{% set demoPanels %}
  {% call tabPanel(id='demo-panel-1', tabId='demo-tab-1', active=true) %}개요 패널{% endcall %}
  {% call tabPanel(id='demo-panel-2', tabId='demo-tab-2') %}활동 패널{% endcall %}
{% endset %}
{{ tabs(tabs=demoTabs, panels=demoPanels) }}
`})))()}var on;function sn(){return(sn=e((()=>{on=`/**
 * Tabs 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import {
  Children,
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

// 모드·변형·크기·레이아웃·인디케이터가 지원하는 값만 CSS 클래스로 전달합니다.
const valid = {
  mode: new Set(['panels', 'dynamic']), // 패널 고정·동적 콘텐츠 모드입니다.
  variant: new Set(['line', 'card', 'pill']), // 탭 시각 스타일입니다.
  size: new Set(['sm', 'md', 'lg']), // 탭 크기입니다.
  layout: new Set(['auto', 'equal', 'scroll']), // 탭 목록 배치 방식입니다.
  indicator: new Set(['static', 'slide']), // 활성 표시줄 동작입니다.
};
const EMPTY_ITEMS = []; // items 기본값으로 공유하는 빈 배열입니다.

export function Tabs({
  mode = 'panels', // 패널 고정 또는 동적 콘텐츠 모드를 선택합니다.
  value, // 제어형으로 현재 선택된 탭 키입니다.
  defaultValue, // 비제어형 초기 선택 탭 키입니다.
  onChange, // 선택 탭이 바뀔 때 호출할 콜백입니다.
  variant = 'line', // 탭의 시각 스타일을 지정합니다.
  size = 'md', // 탭의 크기를 지정합니다.
  layout = 'auto', // 탭 목록의 너비·스크롤 배치를 지정합니다.
  vertical = false, // 세로 방향 탭 목록인지 여부입니다.
  scrollable = false, // auto 레이아웃에서 가로 스크롤을 허용할지 여부입니다.
  ariaLabel, // 탭 목록의 접근 가능한 이름을 지정합니다.
  indicator = 'static', // 활성 표시줄의 정적·슬라이드 동작을 선택합니다.
  items = EMPTY_ITEMS, // 선언형으로 전달할 탭 항목 배열입니다.
  panel, // dynamic 모드에서 활성 탭 콘텐츠를 계산하는 렌더 함수입니다.
  extra, // 탭 바 오른쪽에 배치할 보조 콘텐츠입니다.
  closable = false, // 모든 탭에 닫기 버튼을 표시할지 여부입니다.
  onClose, // 탭 닫기 버튼 클릭 시 호출할 콜백입니다.
  children, // TabsTab/TabPanel 등 자식으로 구성한 탭입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트에 전달합니다.
}) {
  const uid = useId().replaceAll(':', ''); // aria id 연결에 쓰는 안전한 접두사입니다.
  const listRef = useRef(null); // 탭 목록 DOM을 가리키는 참조입니다.

  // children에서 탭 메타데이터와 패널 콘텐츠를 추출합니다.
  const childItems = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .map((child, index) => ({
          key: child.props.value ?? \`tab-\${index}\`,
          label: child.props.label,
          active: child.props.active,
          disabled: child.props.disabled,
          closable: child.props.closable,
          closeLabel: child.props.closeLabel,
          icon: child.props.icon,
          badge: child.props.badge,
          content: child.props.children,
          menuOnly: child.type?.tabsType === 'menu',
        })),
    [children],
  );

  // items 배열이 있으면 우선하고, 없으면 children 기반 목록을 사용합니다.
  const source = useMemo(
    () =>
      items.length
        ? items.map((item, index) => ({
            ...item,
            key: item.key ?? item.value ?? \`tab-\${index}\`,
            content: item.content,
          }))
        : childItems,
    [childItems, items],
  );

  // 활성 표시된 항목을 우선하고, 없으면 첫 활성 가능 항목을 고릅니다.
  const firstKey =
    source.find((item) => item.active && !item.disabled)?.key ??
    source.find((item) => !item.disabled)?.key;
  const [internal, setInternal] = useState(defaultValue ?? firstKey); // 비제어형 선택 상태입니다.
  const selected = value ?? internal; // 제어·비제어를 합친 최종 선택 키입니다.

  // 비제어형에서 현재 선택이 목록에서 사라지면 기본 키로 되돌립니다.
  useEffect(() => {
    if (value == null && !source.some((item) => item.key === internal && !item.disabled))
      setInternal(firstKey);
  }, [firstKey, internal, source, value]);

  const resolvedMode = valid.mode.has(mode) ? mode : 'panels'; // 검증된 모드입니다.
  const resolvedVariant = valid.variant.has(variant) ? variant : 'line'; // 검증된 시각 스타일입니다.
  const resolvedSize = valid.size.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedLayout = valid.layout.has(layout) ? layout : 'auto'; // 검증된 레이아웃입니다.
  const resolvedIndicator = valid.indicator.has(indicator) ? indicator : 'static'; // 검증된 인디케이터입니다.
  const scrollNav = resolvedLayout === 'scroll' && !vertical; // 가로 스크롤 내비게이션 사용 여부입니다.

  // 변형·크기·방향·스크롤·모드·인디케이터 클래스를 조합합니다.
  const classes = [
    'tabs', // Tabs 레이아웃을 활성화하는 필수 클래스입니다.
    \`tabs_\${resolvedVariant}\`, // line·card·pill 시각 변형입니다.
    resolvedSize !== 'md' && \`tabs_\${resolvedSize}\`, // 기본 md가 아닐 때 크기 변형입니다.
    vertical && 'tabs_vertical', // 세로 방향 변형입니다.
    resolvedLayout === 'equal' && 'tabs_equal', // 동일 너비 탭 변형입니다.
    scrollNav && 'tabs_scroll-nav', // 스크롤 내비게이션 변형입니다.
    scrollable && resolvedLayout === 'auto' && 'tabs_scrollable', // auto에서 가로 스크롤 허용입니다.
    resolvedMode === 'dynamic' && 'tabs_dynamic', // 동적 패널 모드 변형입니다.
    resolvedIndicator === 'slide' && 'tabs_indicator-slide', // 슬라이드 인디케이터 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  const [indicatorStyle, setIndicatorStyle] = useState(null); // 슬라이드 인디케이터의 위치·크기입니다.
  const [scrollState, setScrollState] = useState({ overflow: false, prev: false, next: false }); // 스크롤 버튼 상태입니다.

  // 활성 탭 위치와 스크롤 가능 여부를 측정해 시각 상태를 갱신합니다.
  const updateVisualState = useCallback(() => {
    const list = listRef.current;
    if (list) {
      if (resolvedIndicator === 'slide') {
        const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
        if (activeTab) {
          const listRect = list.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          const left = tabRect.left - listRect.left + list.scrollLeft;
          const top = tabRect.top - listRect.top + list.scrollTop;
          const thickness = 2;
          setIndicatorStyle(
            vertical
              ? {
                  width: \`\${thickness}px\`,
                  height: \`\${tabRect.height}px\`,
                  transform: \`translate3d(\${left + tabRect.width - thickness}px, \${top}px, 0)\`,
                }
              : resolvedVariant === 'pill'
                ? {
                    width: \`\${tabRect.width}px\`,
                    height: \`\${tabRect.height}px\`,
                    transform: \`translate3d(\${left}px, \${top}px, 0)\`,
                  }
                : {
                    width: \`\${tabRect.width}px\`,
                    height: \`\${thickness}px\`,
                    transform: \`translate3d(\${left}px, \${top + tabRect.height - thickness}px, 0)\`,
                  },
          );
        }
      } else setIndicatorStyle(null);
      const max = list.scrollWidth - list.clientWidth;
      setScrollState({
        overflow: scrollNav && max > 1,
        prev: scrollNav && list.scrollLeft > 1,
        next: scrollNav && list.scrollLeft < max - 1,
      });
    }
  }, [resolvedIndicator, resolvedVariant, scrollNav, vertical]);

  // 선택·크기 변화 시 인디케이터와 스크롤 상태를 다시 계산합니다.
  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const schedule = () => requestAnimationFrame(updateVisualState);
      schedule();
      list.addEventListener('scroll', updateVisualState, { passive: true });
      const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
      observer?.observe(list);
      list.querySelectorAll('.tabs_tab').forEach((tab) => observer?.observe(tab));
      return () => {
        list.removeEventListener('scroll', updateVisualState);
        observer?.disconnect();
      };
    }
  }, [source, selected, updateVisualState]);

  // 선택된 탭이 스크롤 뷰포트 중앙 근처에 오도록 이동합니다.
  const scrollTabIntoView = useCallback(
    (key) => {
      const list = listRef.current;
      const index = source.findIndex((item) => item.key === key);
      const tab = index < 0 ? null : document.getElementById(\`\${uid}-tab-\${index}\`);
      const target = tab?.closest('.tabs_item') ?? tab;
      if (!scrollNav || !list || !target) return;
      const listRect = list.getBoundingClientRect();
      const tabRect = target.getBoundingClientRect();
      const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
      const max = list.scrollWidth - list.clientWidth;
      list.scrollTo({
        left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)),
        behavior: 'smooth',
      });
    },
    [scrollNav, source, uid],
  );

  // 제어형 value 변경(이전·다음 버튼 등)에도 탭 클릭과 동일하게 스크롤을 맞춥니다.
  useEffect(() => {
    if (!scrollNav || selected == null) return undefined;
    const frame = requestAnimationFrame(() => {
      updateVisualState();
      scrollTabIntoView(selected);
    });
    return () => cancelAnimationFrame(frame);
  }, [scrollNav, selected, scrollTabIntoView, updateVisualState]);

  // 비활성 탭이 아니면 선택 상태를 갱신하고 시각·스크롤을 맞춥니다.
  const select = (key) => {
    const target = source.find((item) => item.key === key);
    if (target && !target.disabled) {
      if (value == null) setInternal(key);
      onChange?.(key);
      requestAnimationFrame(() => {
        updateVisualState();
        scrollTabIntoView(key);
      });
    }
  };

  // 탭이 2개 이상일 때만 닫기 가능합니다. 목록 갱신은 호출 측에서 처리합니다.
  const canCloseItem = (item) =>
    source.length > 1 && Boolean(closable || item?.closable) && !item?.disabled;

  const closeTab = (key, event) => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    const target = source.find((item) => item.key === key);
    if (target && canCloseItem(target)) onClose?.(key, event);
  };

  // 방향키·Home·End로 활성 가능 탭 사이를 이동하고, Delete로 닫습니다.
  const keyDown = (event, index) => {
    const item = source[index];
    if ((event.key === 'Delete' || event.key === 'Backspace') && canCloseItem(item)) {
      event.preventDefault();
      closeTab(item.key, event);
      return;
    }
    const enabled = source
      .map((entry, itemIndex) => ({ ...entry, itemIndex }))
      .filter((entry) => !entry.disabled);
    const current = enabled.findIndex((entry) => entry.itemIndex === index);
    let next = current;
    if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight'))
      next = (current + 1) % enabled.length;
    else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft'))
      next = (current - 1 + enabled.length) % enabled.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = enabled.length - 1;
    else return;
    event.preventDefault();
    select(enabled[next].key);
    requestAnimationFrame(() =>
      document.getElementById(\`\${uid}-tab-\${enabled[next].itemIndex}\`)?.focus(),
    );
  };

  const activeIndex = Math.max(
    0,
    source.findIndex((item) => item.key === selected),
  ); // 현재 선택 탭의 인덱스입니다.
  const activeItem = source[activeIndex]; // 현재 선택 탭 데이터입니다.
  // dynamic 모드면 panel 함수 결과를, 아니면 항목 content를 사용합니다.
  const panelContent =
    resolvedMode === 'dynamic' && typeof panel === 'function'
      ? panel({ item: activeItem, value: selected })
      : activeItem?.content;

  const tabsList = (
    <div
      ref={listRef}
      className="tabs_list"
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
    >
      {resolvedIndicator === 'slide' && indicatorStyle && (
        <span className="tabs_indicator" aria-hidden="true" style={indicatorStyle} />
      )}
      {source.map((item, index) => {
        const active = item.key === selected;
        const itemClosable = canCloseItem(item);
        const closeLabel = item.closeLabel || \`\${item.label ?? '탭'} 닫기\`;
        const tabButton = (
          <Button
            id={\`\${uid}-tab-\${index}\`}
            variant="text"
            color="default"
            fit
            ripple={false}
            className={['tabs_tab', active && 'is-active', item.disabled && 'is-disabled']
              .filter(Boolean)
              .join(' ')}
            role="tab"
            aria-selected={active}
            aria-controls={\`\${uid}-panel-\${resolvedMode === 'dynamic' ? 'dynamic' : index}\`}
            ariaDisabled={item.disabled || false}
            disabled={item.disabled || false}
            tabIndex={active ? 0 : -1}
            label={item.label ?? ''}
            iconBefore={item.icon ? <span className="tabs_icon">{item.icon}</span> : undefined}
            iconAfter={item.badge ? <span className="tabs_badge">{item.badge}</span> : undefined}
            onClick={() => select(item.key)}
            onKeyDown={(event) => keyDown(event, index)}
          />
        );
        if (!itemClosable) return <Fragment key={item.key}>{tabButton}</Fragment>;
        return (
          <span
            key={item.key}
            className={[
              'tabs_item',
              active && 'is-active',
              item.disabled && 'is-disabled',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {tabButton}
            <button
              type="button"
              className="tabs_close"
              aria-label={closeLabel}
              disabled={item.disabled || false}
              tabIndex={-1}
              onClick={(event) => closeTab(item.key, event)}
            >
              <Icon name="close" className="tabs_close-icon" />
            </button>
          </span>
        );
      })}
    </div>
  );

  // 스크롤 내비게이션 버튼을 눌러 목록을 좌우로 이동시킵니다.
  const scrollBy = (direction) =>
    listRef.current?.scrollBy({
      left: direction * Math.max((listRef.current?.clientWidth ?? 160) * 0.75, 120),
      behavior: 'smooth',
    });

  return (
    <div {...props} className={classes} data-component="Tabs" data-tabs>
      <div className="tabs_bar">
        {scrollState.overflow && (
          <Button
            variant="outline"
            color="default"
            size="sm"
            iconOnly
            className="tabs_nav tabs_nav_prev"
            ariaLabel="이전 탭"
            disabled={!scrollState.prev}
            iconBefore={<Icon name="arrow-left" />}
            onClick={() => scrollBy(-1)}
          />
        )}
        <div
          className={['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport']
            .filter(Boolean)
            .join(' ')}
        >
          {tabsList}
        </div>
        {scrollState.overflow && (
          <Button
            variant="outline"
            color="default"
            size="sm"
            iconOnly
            className="tabs_nav tabs_nav_next"
            ariaLabel="다음 탭"
            disabled={!scrollState.next}
            iconBefore={<Icon name="chevron" />}
            onClick={() => scrollBy(1)}
          />
        )}
        {extra && <div className="tabs_extra">{extra}</div>}
      </div>
      <div className="tabs_panels">
        {resolvedMode === 'dynamic' ? (
          <div
            id={\`\${uid}-panel-dynamic\`}
            className="tabs_panel is-active"
            role="tabpanel"
            aria-labelledby={\`\${uid}-tab-\${activeIndex}\`}
          >
            {panelContent}
          </div>
        ) : (
          source.map((item, index) => (
            <div
              key={item.key}
              id={\`\${uid}-panel-\${index}\`}
              className={['tabs_panel', item.key === selected && 'is-active']
                .filter(Boolean)
                .join(' ')}
              role="tabpanel"
              aria-labelledby={\`\${uid}-tab-\${index}\`}
              hidden={item.key !== selected}
            >
              {item.content}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tabs;
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`/**
 * TabsTab 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabsTab({
  active = false, // 현재 선택된 탭인지 여부입니다.
  disabled = false, // 탭 선택을 막을지 여부입니다.
  children, // 탭 버튼 안에 표시할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 button에 전달합니다.
}) {
  // 활성·비활성 상태를 탭 버튼 클래스에 반영합니다.
  return (
    <button
      {...props}
      type="button"
      className={['tabs_tab', active && 'is-active', disabled && 'is-disabled', className]
        .filter(Boolean)
        .join(' ')}
      role="tab"
      aria-selected={active}
      disabled={disabled || undefined}
    >
      {children}
    </button>
  );
}
export default TabsTab;
`})))()}var un;function dn(){return(dn=e((()=>{un=`/**
 * TabPanel 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabPanel() {
  // Tabs가 children을 읽어 패널로 구성하므로 자체 DOM은 렌더하지 않습니다.
  return null;
}
TabPanel.tabsType = 'panel'; // Tabs가 패널형 자식으로 구분할 때 사용합니다.
export default TabPanel;
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`/**
 * TabMenu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabMenu() {
  // Tabs가 children을 읽어 메뉴형으로 구성하므로 자체 DOM은 렌더하지 않습니다.
  return null;
}
TabMenu.tabsType = 'menu'; // Tabs가 메뉴형 자식으로 구분할 때 사용합니다.
export default TabMenu;
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`<!--
  Tabs 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  useAttrs,
  useId,
  watch,
  watchEffect,
} from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Tabs 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmTabs', inheritAttrs: false });

// 모드, 선택 값, 시각·레이아웃·인디케이터와 항목을 prop으로 받습니다.
const props = defineProps({
  mode: { type: String, default: 'panels' }, // 패널 고정 또는 동적 콘텐츠 모드를 선택합니다.
  modelValue: [String, Number], // 제어형으로 현재 선택된 탭 키입니다.
  variant: { type: String, default: 'line' }, // 탭의 시각 스타일을 지정합니다.
  size: { type: String, default: 'md' }, // 탭의 크기를 지정합니다.
  layout: { type: String, default: 'auto' }, // 탭 목록의 너비·스크롤 배치를 지정합니다.
  vertical: Boolean, // 세로 방향 탭 목록인지 여부입니다.
  scrollable: Boolean, // auto 레이아웃에서 가로 스크롤을 허용할지 여부입니다.
  ariaLabel: String, // 탭 목록의 접근 가능한 이름을 지정합니다.
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 탭 항목 배열입니다.
  indicator: { type: String, default: 'static' }, // 활성 표시줄의 정적·슬라이드 동작을 선택합니다.
  closable: Boolean, // 모든 탭에 닫기 버튼을 표시할지 여부입니다.
});
const emit = defineEmits(['update:modelValue', 'close']); // 선택·닫기 이벤트를 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const uid = useId().replaceAll(':', ''); // aria id 연결에 쓰는 안전한 접두사입니다.
const listRef = ref(null); // 탭 목록 DOM을 가리키는 참조입니다.
const indicatorStyle = ref(null); // 슬라이드 인디케이터의 위치·크기입니다.
const scrollState = ref({ overflow: false, prev: false, next: false }); // 스크롤 버튼 상태입니다.
const registered = ref([]); // TabPanel/TabMenu가 등록한 탭 목록입니다.
const internal = ref(undefined); // 비제어형 선택 상태입니다.
const selected = computed(() => props.modelValue ?? internal.value); // 제어·비제어를 합친 최종 선택 키입니다.

// items가 있으면 우선하고, 없으면 등록된 자식 탭을 사용합니다.
const tabs = computed(() =>
  props.items.length
    ? props.items.map((item, index) => ({
        ...item,
        id: \`\${uid}-tab-\${index}\`,
        panelId: \`\${uid}-panel-\${index}\`,
        key: item.key ?? item.value ?? \`tab-\${index}\`,
      }))
    : registered.value,
);
const scrollNav = computed(() => props.layout === 'scroll' && !props.vertical); // 가로 스크롤 내비게이션 사용 여부입니다.

// 변형·크기·방향·스크롤·모드·인디케이터 클래스를 조합합니다.
const classes = computed(() =>
  [
    'tabs', // Tabs 레이아웃을 활성화하는 필수 클래스입니다.
    \`tabs_\${props.variant}\`, // line·card·pill 시각 변형입니다.
    props.size !== 'md' && \`tabs_\${props.size}\`, // 기본 md가 아닐 때 크기 변형입니다.
    props.vertical && 'tabs_vertical', // 세로 방향 변형입니다.
    props.layout === 'equal' && 'tabs_equal', // 동일 너비 탭 변형입니다.
    scrollNav.value && 'tabs_scroll-nav', // 스크롤 내비게이션 변형입니다.
    props.scrollable && props.layout === 'auto' && 'tabs_scrollable', // auto에서 가로 스크롤 허용입니다.
    props.mode === 'dynamic' && 'tabs_dynamic', // 동적 패널 모드 변형입니다.
    props.indicator === 'slide' && 'tabs_indicator-slide', // 슬라이드 인디케이터 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

const activeIndex = computed(() =>
  Math.max(
    0,
    tabs.value.findIndex((tab) => tab.key === selected.value),
  ),
); // 현재 선택 탭의 인덱스입니다.

// 자식 탭을 등록하거나 동일 id를 갱신합니다.
function registerTab(tab) {
  registered.value = [...registered.value.filter((item) => item.id !== tab.id), tab];
}
// 언마운트된 자식 탭을 목록에서 제거합니다.
function unregisterTab(id) {
  registered.value = registered.value.filter((item) => item.id !== id);
}

// 선택된 탭이 스크롤 뷰포트 중앙 근처에 오도록 이동합니다.
function scrollTabIntoView(key) {
  const list = listRef.value;
  const tab = tabs.value.find((item) => item.key === key);
  const element = tab ? document.getElementById(tab.id) : null;
  const target = element?.closest('.tabs_item') ?? element;
  if (!scrollNav.value || !list || !target) return;
  const listRect = list.getBoundingClientRect();
  const tabRect = target.getBoundingClientRect();
  const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
  const max = list.scrollWidth - list.clientWidth;
  list.scrollTo({
    left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)),
    behavior: 'smooth',
  });
}

// 비활성 탭이 아니면 선택 상태를 갱신하고 시각·스크롤을 맞춥니다.
function select(key) {
  const tab = tabs.value.find((item) => item.key === key);
  if (!tab || tab.disabled) return;
  internal.value = key;
  emit('update:modelValue', key);
  nextTick(() =>
    requestAnimationFrame(() => {
      updateVisualState();
      scrollTabIntoView(key);
    }),
  );
}
function isActive(key) {
  return selected.value === key;
}

// 현재 선택이 목록에서 사라지면 활성·첫 활성 가능 키로 되돌립니다.
watchEffect(() => {
  if (!tabs.value.length) return;
  if (!tabs.value.some((tab) => tab.key === selected.value && !tab.disabled))
    internal.value =
      tabs.value.find((tab) => tab.active && !tab.disabled)?.key ??
      tabs.value.find((tab) => !tab.disabled)?.key;
});

// 제어형 v-model 변경(이전·다음 버튼 등)에도 탭 클릭과 동일하게 스크롤을 맞춥니다.
watch(
  selected,
  (key) => {
    if (!scrollNav.value || key == null) return;
    nextTick(() =>
      requestAnimationFrame(() => {
        updateVisualState();
        scrollTabIntoView(key);
      }),
    );
  },
  { flush: 'post' },
);

// 탭이 2개 이상일 때만 닫기 가능합니다.
function canCloseItem(tab) {
  return tabs.value.length > 1 && Boolean(props.closable || tab?.closable) && !tab?.disabled;
}

// 닫기 가능한 탭이면 close 이벤트를 부모로 전달합니다.
function closeTab(key, event) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const tab = tabs.value.find((item) => item.key === key);
  if (tab && canCloseItem(tab)) emit('close', key, event);
}

// 방향키·Home·End로 활성 가능 탭 사이를 이동하고, Delete로 닫습니다.
function keydown(event, index) {
  const tab = tabs.value[index];
  if ((event.key === 'Delete' || event.key === 'Backspace') && canCloseItem(tab)) {
    event.preventDefault();
    closeTab(tab.key, event);
    return;
  }
  const enabled = tabs.value
    .map((entry, itemIndex) => ({ ...entry, itemIndex }))
    .filter((entry) => !entry.disabled);
  const current = enabled.findIndex((entry) => entry.itemIndex === index);
  let next = current;
  if (event.key === (props.vertical ? 'ArrowDown' : 'ArrowRight'))
    next = (current + 1) % enabled.length;
  else if (event.key === (props.vertical ? 'ArrowUp' : 'ArrowLeft'))
    next = (current - 1 + enabled.length) % enabled.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = enabled.length - 1;
  else return;
  event.preventDefault();
  select(enabled[next].key);
  requestAnimationFrame(() => document.getElementById(enabled[next].id)?.focus());
}

// 활성 탭 위치와 스크롤 가능 여부를 측정해 시각 상태를 갱신합니다.
function updateVisualState() {
  const list = listRef.value;
  if (!list) return;
  if (props.indicator === 'slide') {
    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    if (activeTab) {
      const listRect = list.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const left = tabRect.left - listRect.left + list.scrollLeft;
      const top = tabRect.top - listRect.top + list.scrollTop;
      const thickness = 2;
      indicatorStyle.value = props.vertical
        ? {
            width: \`\${thickness}px\`,
            height: \`\${tabRect.height}px\`,
            transform: \`translate3d(\${left + tabRect.width - thickness}px, \${top}px, 0)\`,
          }
        : props.variant === 'pill'
          ? {
              width: \`\${tabRect.width}px\`,
              height: \`\${tabRect.height}px\`,
              transform: \`translate3d(\${left}px, \${top}px, 0)\`,
            }
          : {
              width: \`\${tabRect.width}px\`,
              height: \`\${thickness}px\`,
              transform: \`translate3d(\${left}px, \${top + tabRect.height - thickness}px, 0)\`,
            };
    }
  } else indicatorStyle.value = null;
  const max = list.scrollWidth - list.clientWidth;
  scrollState.value = {
    overflow: scrollNav.value && max > 1,
    prev: scrollNav.value && list.scrollLeft > 1,
    next: scrollNav.value && list.scrollLeft < max - 1,
  };
}
function scheduleVisualUpdate() {
  nextTick(() => requestAnimationFrame(updateVisualState));
}

// 스크롤 내비게이션 버튼을 눌러 목록을 좌우로 이동시킵니다.
function scrollBy(direction) {
  const list = listRef.value;
  list?.scrollBy({
    left: direction * Math.max((list?.clientWidth ?? 160) * 0.75, 120),
    behavior: 'smooth',
  });
}

let resizeObserver;
onMounted(() => {
  resizeObserver =
    typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleVisualUpdate);
  if (listRef.value) {
    resizeObserver?.observe(listRef.value);
    listRef.value.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserver?.observe(tab));
  }
  scheduleVisualUpdate();
});
onBeforeUnmount(() => resizeObserver?.disconnect());

// 선택·레이아웃 변화 후 인디케이터와 스크롤 상태를 다시 계산합니다.
watch(
  [tabs, selected, () => props.indicator, () => props.variant, () => props.vertical, scrollNav],
  scheduleVisualUpdate,
  { flush: 'post' },
);
provide('tabsContext', { registerTab, unregisterTab, select, isActive }); // 자식 탭이 등록·선택에 쓰입니다.

// 함수형 슬롯(아이콘·배지)을 렌더하기 위한 헬퍼입니다.
const SlotRenderer = (slotProps) => slotProps.render?.();
SlotRenderer.props = ['render'];
<\/script>

<template>
  <!-- 탭 바와 패널 영역을 루트에 연결합니다. -->
  <div v-bind="attrs" :class="classes" data-component="Tabs" data-tabs>
    <div class="tabs_bar">
      <Button
        v-if="scrollState.overflow"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_prev"
        aria-label="이전 탭"
        :disabled="!scrollState.prev"
        @click="scrollBy(-1)"
        ><template #icon-before><Icon name="arrow-left" /></template
      ></Button>
      <div :class="['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport']">
        <div
          ref="listRef"
          class="tabs_list"
          role="tablist"
          :aria-label="ariaLabel"
          :aria-orientation="vertical ? 'vertical' : 'horizontal'"
          @scroll.passive="updateVisualState"
        >
          <span
            v-if="indicator === 'slide' && indicatorStyle"
            class="tabs_indicator"
            aria-hidden="true"
            :style="indicatorStyle"
          />
          <template v-for="(tab, index) in tabs" :key="tab.key">
            <span
              v-if="tabs.length > 1 && (closable || tab.closable)"
              :class="[
                'tabs_item',
                tab.key === selected && 'is-active',
                tab.disabled && 'is-disabled',
              ]"
            >
              <Button
                :id="tab.id"
                variant="text"
                color="default"
                fit
                :ripple="false"
                :class="[
                  'tabs_tab',
                  tab.key === selected && 'is-active',
                  tab.disabled && 'is-disabled',
                ]"
                role="tab"
                :aria-selected="tab.key === selected"
                :aria-controls="mode === 'dynamic' ? \`\${uid}-panel-dynamic\` : tab.panelId"
                :aria-disabled="tab.disabled || undefined"
                :disabled="tab.disabled || undefined"
                :tabindex="tab.key === selected ? 0 : -1"
                :label="tab.label || ''"
                @click="select(tab.key)"
                @keydown="keydown($event, index)"
                ><template v-if="tab.icon" #icon-before
                  ><span class="tabs_icon"><SlotRenderer :render="tab.icon" /></span></template
                ><template v-if="tab.badge" #icon-after
                  ><span class="tabs_badge"><SlotRenderer :render="tab.badge" /></span></template
              ></Button>
              <button
                type="button"
                class="tabs_close"
                :aria-label="tab.closeLabel || \`\${tab.label || '탭'} 닫기\`"
                :disabled="tab.disabled || undefined"
                tabindex="-1"
                @click="closeTab(tab.key, $event)"
              >
                <Icon name="close" class="tabs_close-icon" />
              </button>
            </span>
            <Button
              v-else
              :id="tab.id"
              variant="text"
              color="default"
              fit
              :ripple="false"
              :class="[
                'tabs_tab',
                tab.key === selected && 'is-active',
                tab.disabled && 'is-disabled',
              ]"
              role="tab"
              :aria-selected="tab.key === selected"
              :aria-controls="mode === 'dynamic' ? \`\${uid}-panel-dynamic\` : tab.panelId"
              :aria-disabled="tab.disabled || undefined"
              :disabled="tab.disabled || undefined"
              :tabindex="tab.key === selected ? 0 : -1"
              :label="tab.label || ''"
              @click="select(tab.key)"
              @keydown="keydown($event, index)"
              ><template v-if="tab.icon" #icon-before
                ><span class="tabs_icon"><SlotRenderer :render="tab.icon" /></span></template
              ><template v-if="tab.badge" #icon-after
                ><span class="tabs_badge"><SlotRenderer :render="tab.badge" /></span></template
            ></Button>
          </template>
        </div>
      </div>
      <Button
        v-if="scrollState.overflow"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_next"
        aria-label="다음 탭"
        :disabled="!scrollState.next"
        @click="scrollBy(1)"
        ><template #icon-before><Icon name="chevron" /></template
      ></Button>
      <div v-if="$slots.extra" class="tabs_extra"><slot name="extra" /></div>
    </div>
    <div class="tabs_panels">
      <div
        v-if="mode === 'dynamic'"
        :id="\`\${uid}-panel-dynamic\`"
        class="tabs_panel is-active"
        role="tabpanel"
        :aria-labelledby="\`\${uid}-tab-\${activeIndex}\`"
      >
        <slot name="panel" :item="tabs[activeIndex]" :value="selected">{{
          tabs[activeIndex]?.content
        }}</slot>
      </div>
      <slot v-else />
    </div>
  </div>
</template>
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`<!--
  TabsTab 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
// 활성·비활성 상태를 prop으로 받습니다.
defineProps({
  active: Boolean, // 현재 선택된 탭인지 여부입니다.
  disabled: Boolean, // 탭 선택을 막을지 여부입니다.
});
<\/script>
<template>
  <!-- 활성·비활성 상태를 탭 버튼 클래스에 반영합니다. -->
  <button
    type="button"
    :class="['tabs_tab', active && 'is-active', disabled && 'is-disabled']"
    role="tab"
    :aria-selected="active"
    :disabled="disabled || undefined"
  >
    <slot />
  </button>
</template>
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`<!--
  TabPanel 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, useId, useSlots } from 'vue';

// 레이블, 키, 활성·비활성 상태를 prop으로 받습니다.
const props = defineProps({
  label: { type: String, required: true }, // 탭 버튼에 표시할 텍스트입니다.
  value: [String, Number], // 탭을 식별하는 선택 키입니다.
  active: Boolean, // 초기·단독 사용 시 활성 여부입니다.
  disabled: Boolean, // 탭 선택을 막을지 여부입니다.
  closable: Boolean, // 이 탭에 닫기 버튼을 표시할지 여부입니다.
  closeLabel: String, // 닫기 버튼의 접근 가능한 이름입니다.
});
const slots = useSlots(); // 아이콘·배지 슬롯을 등록에 전달합니다.
const tabs = inject('tabsContext', null); // 부모 Tabs의 등록·선택 API입니다.
const localId = useId().replaceAll(':', ''); // id·키 생성용 접두사입니다.
const tabId = \`tab-\${localId}\`; // 탭 버튼과 연결할 id입니다.
const panelId = \`panel-\${localId}\`; // 패널 요소 id입니다.
const key = props.value ?? localId; // 선택에 쓰는 최종 키입니다.
const activeNow = computed(() => tabs?.isActive(key) ?? props.active); // 현재 활성 여부입니다.

// 마운트 시 부모 Tabs에 탭 메타데이터를 등록합니다.
onMounted(() =>
  tabs?.registerTab({
    id: tabId,
    panelId,
    key,
    label: props.label,
    active: props.active,
    disabled: props.disabled,
    closable: props.closable,
    closeLabel: props.closeLabel,
    icon: slots.icon,
    badge: slots.badge,
  }),
);
onUnmounted(() => tabs?.unregisterTab(tabId)); // 언마운트 시 등록을 해제합니다.
<\/script>
<template>
  <!-- 활성 패널만 보이도록 hidden과 클래스를 동기화합니다. -->
  <div
    :id="panelId"
    :class="['tabs_panel', activeNow && 'is-active']"
    role="tabpanel"
    :aria-labelledby="tabId"
    :hidden="!activeNow || undefined"
  >
    <slot />
  </div>
</template>
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`<!--
  TabMenu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { inject, onMounted, onUnmounted, useId, useSlots } from 'vue';

// 레이블, 키, 활성·비활성 상태를 prop으로 받습니다.
const props = defineProps({
  label: { type: String, required: true }, // 탭 버튼에 표시할 텍스트입니다.
  value: [String, Number], // 탭을 식별하는 선택 키입니다.
  active: Boolean, // 초기 활성 여부입니다.
  disabled: Boolean, // 탭 선택을 막을지 여부입니다.
});
const slots = useSlots(); // 아이콘·배지 슬롯을 등록에 전달합니다.
const tabs = inject('tabsContext', null); // 부모 Tabs의 등록 API입니다.
const localId = useId().replaceAll(':', ''); // id·키 생성용 접두사입니다.
const id = \`tab-\${localId}\`; // 등록에 쓰는 탭 id입니다.
const key = props.value ?? localId; // 선택에 쓰는 최종 키입니다.

// 패널 없이 메뉴형 탭으로만 등록합니다.
onMounted(() =>
  tabs?.registerTab({
    id,
    panelId: null,
    key,
    label: props.label,
    active: props.active,
    disabled: props.disabled,
    icon: slots.icon,
    badge: slots.badge,
    menuOnly: true,
  }),
);
onUnmounted(() => tabs?.unregisterTab(id)); // 언마운트 시 등록을 해제합니다.
<\/script>
<template>
  <!-- 실제 패널은 없고 등록용 숨김 슬롯만 둡니다. -->
  <span hidden><slot /></span>
</template>
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`<!-- Breadcrumb 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- breadcrumb 클래스와 aria-label로 경로 내비게이션을 표시합니다. -->
<nav class="breadcrumb" aria-label="경로" data-component="Breadcrumb">
  <ol class="breadcrumb_list">
    <!-- 이전 경로는 링크로, 현재 페이지는 is-current와 aria-current로 표시합니다. -->
    <li class="breadcrumb_item"><a class="breadcrumb_link" href="#">홈</a></li>
    <li class="breadcrumb_item"><a class="breadcrumb_link" href="#">컴포넌트</a></li>
    <li class="breadcrumb_item is-current" aria-current="page">
      <span class="breadcrumb_current">Breadcrumb</span>
    </li>
  </ol>
</nav>
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`{# Breadcrumb 원본 구현: 경로·항목·말줄임을 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro breadcrumbItem(
  label='',
  href='#',
  current=false,
  disabled=false,
  icon='',
  iconSlot='',
  ariaLabel='',
  hidden=false,
  className=''
) %}
<li
  class="breadcrumb_item{% if current %} is-current{% endif %}{{ (' ' + className) if className else '' }}"
  {% if current %}aria-current="page"{% endif %}
  {% if hidden %}data-breadcrumb-hidden hidden{% endif %}
>
  {% if current %}
    <span class="breadcrumb_current">{{ label }}</span>
  {% elif disabled %}
    <span class="breadcrumb_link is-disabled" aria-disabled="true">{{ label }}</span>
  {% else %}
    <a
      class="breadcrumb_link{% if icon or iconSlot %} breadcrumb_link-icon{% endif %}"
      href="{{ href }}"
      {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
    >
      {% if iconSlot %}{{ iconSlot | safe }}{% elif icon %}{{ Icon.icon(name=icon, className='breadcrumb_icon') }}{% else %}{{ label }}{% endif %}
    </a>
  {% endif %}
</li>
{% endmacro %}

{% macro breadcrumbEllipsis(expanded=false, label='', className='') %}
<li class="breadcrumb_item{{ (' ' + className) if className else '' }}">
  <button
    type="button"
    class="breadcrumb_ellipsis"
    data-breadcrumb-ellipsis
    aria-label="{{ label if label else ('숨겨진 경로 접기' if expanded else '숨겨진 경로 보기') }}"
    aria-expanded="{{ 'true' if expanded else 'false' }}"
  >…</button>
</li>
{% endmacro %}

{% macro breadcrumb(
  items=[],
  separator='chevron',
  size='md',
  ariaLabel='경로',
  className=''
) %}
{%- set content = caller() if caller else '' -%}
{%- set resolvedSeparator = separator if separator in ['chevron', 'slash', 'dot'] else 'chevron' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<nav
  class="breadcrumb{% if resolvedSeparator != 'chevron' %} breadcrumb_sep-{{ resolvedSeparator }}{% endif %}{% if resolvedSize != 'md' %} breadcrumb_{{ resolvedSize }}{% endif %}{{ (' ' + className) if className else '' }}"
  aria-label="{{ ariaLabel }}"
  data-component="Breadcrumb"
>
  <ol class="breadcrumb_list">
    {% if content %}
      {{ content | safe }}
    {% else %}
      {% for item in items %}
        {% set itemCurrent = item.current or (loop.last and item.current != false) %}
        {% if item.ellipsis %}
          {{ breadcrumbEllipsis(expanded=item.expanded, label=item.ariaLabel) }}
        {% else %}
          {{ breadcrumbItem(
            label=item.label,
            href=item.href | default('#'),
            current=itemCurrent,
            disabled=item.disabled,
            icon=item.icon,
            iconSlot=item.iconSlot,
            ariaLabel=item.ariaLabel,
            hidden=item.hidden
          ) }}
        {% endif %}
      {% endfor %}
    {% endif %}
  </ol>
</nav>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call breadcrumb() %}
  {{ breadcrumbItem(label='홈') }}
  {{ breadcrumbItem(label='컴포넌트') }}
  {{ breadcrumbItem(label='Breadcrumb', current=true) }}
{% endcall %}
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`/**
 * Breadcrumb 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Children, isValidElement } from 'react';
import BreadcrumbItem from './BreadcrumbItem.jsx';

const separators = new Set(['chevron', 'slash', 'dot']); // 지원하는 구분 기호입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 경로 크기입니다.

export function Breadcrumb({
  items = [], // 선언형으로 전달할 경로 항목 배열입니다.
  ariaLabel = '경로', // 내비게이션의 접근 가능한 이름을 지정합니다.
  separator = 'chevron', // 항목 사이에 표시할 구분 기호를 선택합니다.
  size = 'md', // 경로 텍스트의 크기를 지정합니다.
  children, // BreadcrumbItem 등 자식으로 구성한 경로입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedSeparator = separators.has(separator) ? separator : 'chevron'; // 검증된 구분 기호입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.

  // 구분 기호·크기 변형 클래스를 조합합니다.
  const classes = [
    'breadcrumb', // Breadcrumb 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedSeparator !== 'chevron' && \`breadcrumb_sep-\${resolvedSeparator}\`, // 기본 chevron이 아닐 때 구분 기호입니다.
    resolvedSize !== 'md' && \`breadcrumb_\${resolvedSize}\`, // 기본 md가 아닐 때 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // items가 있으면 BreadcrumbItem으로 매핑하고, 없으면 유효한 children을 사용합니다.
  const content = items.length
    ? items.map((item, index) => (
        <BreadcrumbItem
          key={item.key ?? \`\${item.label}-\${index}\`}
          {...item}
          current={item.current ?? index === items.length - 1}
        />
      ))
    : Children.toArray(children).filter(isValidElement);

  return (
    <nav {...props} className={classes} aria-label={ariaLabel} data-component="Breadcrumb">
      <ol className="breadcrumb_list">{content}</ol>
    </nav>
  );
}

export default Breadcrumb;
`})))()}var On;function kn(){return(kn=e((()=>{On=`/**
 * BreadcrumbItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function BreadcrumbItem({
  label, // 경로 항목에 표시할 기본 텍스트입니다.
  href, // 지정 시 링크로 렌더할 대상 주소입니다.
  current = false, // 현재 페이지 항목인지 여부입니다.
  disabled = false, // 링크 이동을 막을지 여부입니다.
  icon = false, // true면 아이콘형 링크, 노드면 앞에 표시할 아이콘입니다.
  ariaLabel, // 링크의 접근 가능한 이름을 지정합니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 링크 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // children이 없으면 아이콘·레이블 조합으로 콘텐츠를 구성합니다.
  const content =
    children ??
    (icon && icon !== true ? (
      <>
        {icon}
        {label}
      </>
    ) : (
      label
    ));

  // 아이콘·비활성 상태를 링크 클래스에 반영합니다.
  const linkClasses = ['breadcrumb_link', icon && 'breadcrumb_link-icon', disabled && 'is-disabled']
    .filter(Boolean)
    .join(' ');

  // 현재·비활성·링크 여부에 따라 내부 요소를 선택합니다.
  let inner = content;
  if (href && !current && !disabled)
    inner = (
      <a className={linkClasses} href={href} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  else if (disabled)
    inner = (
      <span className={linkClasses} aria-disabled="true">
        {content}
      </span>
    );
  else if (current) inner = <span className="breadcrumb_current">{content}</span>;

  return (
    <li
      {...props}
      className={['breadcrumb_item', current && 'is-current', className].filter(Boolean).join(' ')}
      aria-current={current ? 'page' : undefined}
    >
      {inner}
    </li>
  );
}

export default BreadcrumbItem;
`})))()}var An;function jn(){return(jn=e((()=>{An=`/**
 * BreadcrumbEllipsis 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function BreadcrumbEllipsis({
  expanded = false, // 숨겨진 경로가 펼쳐진 상태인지 여부입니다.
  label = '숨겨진 경로 보기', // 말줄임 버튼의 접근 가능한 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children = '…', // 버튼 안에 표시할 말줄임 기호입니다.
  ...props // id, onClick 등 나머지 속성을 button에 전달합니다.
}) {
  // 중간 경로를 접어 두는 말줄임 버튼입니다.
  return (
    <li className="breadcrumb_item">
      <button
        {...props}
        type="button"
        className={['breadcrumb_ellipsis', className].filter(Boolean).join(' ')}
        aria-label={label}
        aria-expanded={expanded}
        data-breadcrumb-ellipsis
      >
        {children}
      </button>
    </li>
  );
}

export default BreadcrumbEllipsis;
`})))()}var Mn;function Nn(){return(Nn=e((()=>{Mn=`<!--
  Breadcrumb 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

// 속성을 계산된 Breadcrumb 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmBreadcrumb', inheritAttrs: false });

// 항목 배열, 접근성 이름, 구분 기호, 크기를 prop으로 받습니다.
const props = defineProps({
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 경로 항목 배열입니다.
  ariaLabel: { type: String, default: '경로' }, // 내비게이션의 접근 가능한 이름을 지정합니다.
  separator: { type: String, default: 'chevron' }, // 항목 사이에 표시할 구분 기호를 선택합니다.
  size: { type: String, default: 'md' }, // 경로 텍스트의 크기를 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const separator = computed(() =>
  ['chevron', 'slash', 'dot'].includes(props.separator) ? props.separator : 'chevron',
); // 검증된 구분 기호입니다.
const size = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.

// 구분 기호·크기 변형 클래스를 조합합니다.
const classes = computed(() =>
  [
    'breadcrumb', // Breadcrumb 레이아웃을 활성화하는 필수 클래스입니다.
    separator.value !== 'chevron' && \`breadcrumb_sep-\${separator.value}\`, // 기본 chevron이 아닐 때 구분 기호입니다.
    size.value !== 'md' && \`breadcrumb_\${size.value}\`, // 기본 md가 아닐 때 크기 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
<\/script>
<template>
  <!-- items가 있으면 BreadcrumbItem으로 매핑하고, 없으면 기본 slot을 사용합니다. -->
  <nav v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Breadcrumb">
    <ol class="breadcrumb_list">
      <template v-if="items.length"
        ><BreadcrumbItem
          v-for="(item, index) in items"
          :key="item.key ?? \`\${item.label}-\${index}\`"
          v-bind="item"
          :current="item.current ?? index === items.length - 1" /></template
      ><slot v-else />
    </ol>
  </nav>
</template>
`})))()}var Pn;function Fn(){return(Fn=e((()=>{Pn=`<!--
  BreadcrumbItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmBreadcrumbItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 현재·비활성, 아이콘, 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  label: String, // 경로 항목에 표시할 기본 텍스트입니다.
  href: String, // 지정 시 링크로 렌더할 대상 주소입니다.
  current: Boolean, // 현재 페이지 항목인지 여부입니다.
  disabled: Boolean, // 링크 이동을 막을지 여부입니다.
  icon: Boolean, // 아이콘형 링크 스타일을 적용할지 여부입니다.
  ariaLabel: String, // 링크의 접근 가능한 이름을 지정합니다.
});

// 아이콘·비활성 상태를 링크 클래스에 반영합니다.
const linkClasses = computed(() =>
  ['breadcrumb_link', props.icon && 'breadcrumb_link-icon', props.disabled && 'is-disabled'].filter(
    Boolean,
  ),
);
<\/script>
<template>
  <!-- 현재·비활성·링크 여부에 따라 내부 요소를 선택합니다. -->
  <li
    :class="['breadcrumb_item', current && 'is-current']"
    :aria-current="current ? 'page' : undefined"
  >
    <a
      v-if="href && !current && !disabled"
      :class="linkClasses"
      :href="href"
      :aria-label="ariaLabel"
      ><slot>{{ label }}</slot></a
    ><span v-else-if="disabled" :class="linkClasses" aria-disabled="true"
      ><slot>{{ label }}</slot></span
    ><span v-else-if="current" class="breadcrumb_current"
      ><slot>{{ label }}</slot></span
    ><slot v-else>{{ label }}</slot>
  </li>
</template>
`})))()}var In;function Ln(){return(Ln=e((()=>{In=`<!--
  BreadcrumbEllipsis 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmBreadcrumbEllipsis' }); // 컴포넌트 표시 이름을 등록합니다.

// 펼침 상태와 접근 가능한 이름을 prop으로 받습니다.
defineProps({
  expanded: Boolean, // 숨겨진 경로가 펼쳐진 상태인지 여부입니다.
  label: { type: String, default: '숨겨진 경로 보기' }, // 말줄임 버튼의 접근 가능한 이름입니다.
});
defineEmits(['click']); // 말줄임 버튼 클릭 시 부모로 전달합니다.
<\/script>
<template>
  <!-- 중간 경로를 접어 두는 말줄임 버튼입니다. -->
  <li class="breadcrumb_item">
    <button
      type="button"
      class="breadcrumb_ellipsis"
      :aria-label="label"
      :aria-expanded="expanded"
      data-breadcrumb-ellipsis
      @click="$emit('click', $event)"
    >
      <slot>…</slot>
    </button>
  </li>
</template>
`})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`<!-- Pagination 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- pagination 클래스에 data-current·data-total·data-page-size로 페이지 상태를 둡니다. -->
<nav
  class="pagination"
  aria-label="페이지 이동"
  data-component="Pagination"
  data-pagination
  data-current="1"
  data-total="50"
  data-page-size="10"
>
  <!-- 스크립트가 번호 링크를 채우고 이전·다음 버튼으로 페이지를 이동합니다. -->
  <ul class="pagination_list" data-pagination-list>
    <li class="pagination_item">
      <button
        type="button"
        class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev"
        data-pagination-prev
        aria-label="이전 페이지"
        disabled
      >
        <svg
          class="icon icon_sm pagination_icon"
          data-component="Icon"
          data-icon="chevron-left"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m15 6-6 6 6 6"></path>
        </svg>
      </button>
    </li>
    <li class="pagination_item" data-pagination-next-item>
      <button
        type="button"
        class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next"
        data-pagination-next
        aria-label="다음 페이지"
      >
        <svg
          class="icon icon_sm pagination_icon"
          data-component="Icon"
          data-icon="chevron-right"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m9 6 6 6-6 6"></path>
        </svg>
      </button>
    </li>
  </ul>
</nav>
`})))()}var Bn;function Vn(){return(Vn=e((()=>{Bn=`{# Pagination 원본 구현: 페이지 이동·툴바·점프 입력을 호출형 macro로 구성합니다. #}
{% import "components/basic/Button/button.njk" as Button %}

{% macro paginationButton(direction='prev', disabled=false) %}
{%- set isPrevious = direction == 'prev' -%}
{% if isPrevious %}
  {{ Button.button(variant='ghost', color='default', size='sm', iconOnly=true, iconBefore='chevron-left', ripple=false, disabled=disabled, ariaLabel='이전 페이지', className='pagination_btn pagination_prev', dataAttributes={ 'data-pagination-prev': true }) }}
{% else %}
  {{ Button.button(variant='ghost', color='default', size='sm', iconOnly=true, iconBefore='chevron-right', ripple=false, disabled=disabled, ariaLabel='다음 페이지', className='pagination_btn pagination_next', dataAttributes={ 'data-pagination-next': true }) }}
{% endif %}
{% endmacro %}

{% macro pagination(current=1, total=1, pageSize=10, simple=false, minimal=false, size='md', round=false, align='start', ariaLabel='페이지 이동', className='') %}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
{%- set totalPages = (total / pageSize) | round(0, 'ceil') -%}
<nav
  class="pagination{% if simple %} pagination_simple{% endif %}{% if minimal %} pagination_minimal{% endif %}{% if resolvedSize != 'md' %} pagination_{{ resolvedSize }}{% endif %}{% if round %} pagination_round{% endif %}{% if align in ['center', 'end'] %} pagination_align-{{ align }}{% endif %}{{ (' ' + className) if className else '' }}"
  aria-label="{{ ariaLabel }}"
  data-component="Pagination"
  data-pagination
  data-current="{{ current }}"
  data-total="{{ total }}"
  data-page-size="{{ pageSize }}"
>
  {% if simple %}
    {{ paginationButton(direction='prev', disabled=current <= 1) }}
    <span class="pagination_simple-text" aria-live="polite">
      <span class="pagination_simple-current">{{ current }}</span> /
      <span class="pagination_simple-total">{{ totalPages }}</span>
    </span>
    {{ paginationButton(direction='next', disabled=current >= totalPages) }}
  {% else %}
    <ul class="pagination_list" data-pagination-list>
      <li class="pagination_item">{{ paginationButton(direction='prev', disabled=current <= 1) }}</li>
      <li class="pagination_item" data-pagination-next-item>{{ paginationButton(direction='next', disabled=current >= totalPages) }}</li>
    </ul>
  {% endif %}
</nav>
{% endmacro %}

{% macro paginationJumper(current=1, total=1, pageSize=10, label='이동', ariaLabel='이동할 페이지') %}
{%- set totalPages = (total / pageSize) | round(0, 'ceil') -%}
<label class="pagination_jumper">
  {{ label }}
  <input type="number" class="pagination_jumper-input" value="{{ current }}" min="1" max="{{ totalPages }}" aria-label="{{ ariaLabel }}">
  페이지
</label>
{% endmacro %}

{% macro paginationToolbar(totalLabel='', className='') %}
<div class="pagination_wrap{{ (' ' + className) if className else '' }}">
  {% if totalLabel %}<span class="pagination_total">{{ totalLabel }}</span>{% endif %}
  <div class="pagination_wrap-end">{{ caller() | safe }}</div>
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ pagination(current=1, total=50, pageSize=10) }}
`})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`/**
 * Pagination 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { useMemo } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 페이지네이션 크기입니다.

// 전체 페이지 수와 현재 페이지를 바탕으로 표시할 번호·말줄임 목록을 만듭니다.
export function buildPaginationPages(totalPages, current) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', totalPages];
  if (current >= totalPages - 3)
    return [
      1,
      'ellipsis-start',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', totalPages];
}

export function Pagination({
  current = 1, // 현재 선택된 페이지 번호입니다.
  total = 1, // 전체 항목 수입니다.
  pageSize = 10, // 페이지당 항목 수입니다.
  simple = false, // 이전/다음과 현재/전체 텍스트만 표시할지 여부입니다.
  minimal = false, // 시각적으로 더 간결한 변형인지 여부입니다.
  size = 'md', // 컨트롤의 크기를 지정합니다.
  round = false, // 둥근 버튼 형태를 사용할지 여부입니다.
  ariaLabel = '페이지 이동', // 내비게이션의 접근 가능한 이름을 지정합니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 페이지가 바뀔 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const totalPages = Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize))); // 계산된 전체 페이지 수입니다.
  const active = Math.min(totalPages, Math.max(1, current)); // 범위 안으로 보정한 현재 페이지입니다.
  const pages = useMemo(() => buildPaginationPages(totalPages, active), [active, totalPages]); // 표시할 페이지 토큰입니다.

  // 단순·최소·크기·둥근 변형 클래스를 조합합니다.
  const classes = [
    'pagination', // Pagination 레이아웃을 활성화하는 필수 클래스입니다.
    simple && 'pagination_simple', // 단순 텍스트형 변형입니다.
    minimal && 'pagination_minimal', // 최소형 변형입니다.
    resolvedSize !== 'md' && \`pagination_\${resolvedSize}\`, // 기본 md가 아닐 때 크기 변형입니다.
    round && 'pagination_round', // 둥근 버튼 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 범위 안의 페이지로만 이동하고 동일 페이지면 콜백을 생략합니다.
  const goTo = (page) => {
    const next = Math.min(totalPages, Math.max(1, page));
    if (next !== active) onChange?.(next);
  };

  // 이전·다음 화살표 버튼을 공통으로 렌더합니다.
  const arrow = (direction) => (
    <Button
      variant="ghost"
      color="default"
      size="sm"
      iconOnly
      ripple={false}
      className={\`pagination_btn pagination_\${direction}\`}
      ariaLabel={direction === 'prev' ? '이전 페이지' : '다음 페이지'}
      disabled={direction === 'prev' ? active <= 1 : active >= totalPages}
      iconBefore={
        <Icon
          name={direction === 'prev' ? 'chevron-left' : 'chevron-right'}
          size="sm"
          className="pagination_icon"
        />
      }
      onClick={() => goTo(active + (direction === 'prev' ? -1 : 1))}
    />
  );

  return (
    <nav
      {...props}
      className={classes}
      aria-label={ariaLabel}
      data-component="Pagination"
      data-current={active}
      data-total-pages={totalPages}
    >
      {simple ? (
        <>
          {arrow('prev')}
          <span className="pagination_simple-text" aria-live="polite">
            <span className="pagination_simple-current">{active}</span>
            {' / '}
            <span className="pagination_simple-total">{totalPages}</span>
          </span>
          {arrow('next')}
        </>
      ) : (
        <ul className="pagination_list">
          <li className="pagination_item">{arrow('prev')}</li>
          {pages.map((page, index) =>
            typeof page === 'string' ? (
              <li key={\`\${page}-\${index}\`} className="pagination_item">
                <span className="pagination_ellipsis" aria-hidden="true">
                  …
                </span>
              </li>
            ) : (
              <li key={page} className="pagination_item">
                <button
                  type="button"
                  className={['pagination_link', page === active && 'is-active']
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={page === active ? 'page' : undefined}
                  aria-label={\`\${page}페이지\${page === active ? ', 현재 페이지' : ''}\`}
                  onClick={() => goTo(page)}
                >
                  {page}
                </button>
              </li>
            ),
          )}
          <li className="pagination_item">{arrow('next')}</li>
        </ul>
      )}
    </nav>
  );
}

export default Pagination;
`})))()}var Wn;function Gn(){return(Gn=e((()=>{Wn=`<!--
  Pagination 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Pagination 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmPagination', inheritAttrs: false });

// 현재 페이지, 전체 수, 크기, 단순·최소·둥근 변형을 prop으로 받습니다.
const props = defineProps({
  current: { type: Number, default: 1 }, // 현재 선택된 페이지 번호입니다.
  total: { type: Number, default: 1 }, // 전체 항목 수입니다.
  pageSize: { type: Number, default: 10 }, // 페이지당 항목 수입니다.
  simple: Boolean, // 이전/다음과 현재/전체 텍스트만 표시할지 여부입니다.
  minimal: Boolean, // 시각적으로 더 간결한 변형인지 여부입니다.
  size: { type: String, default: 'md' }, // 컨트롤의 크기를 지정합니다.
  round: Boolean, // 둥근 버튼 형태를 사용할지 여부입니다.
  ariaLabel: { type: String, default: '페이지 이동' }, // 내비게이션의 접근 가능한 이름을 지정합니다.
});
const emit = defineEmits(['update:current', 'change']); // 페이지 변경을 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const totalPages = computed(() =>
  Math.max(1, Math.ceil(Math.max(0, props.total) / Math.max(1, props.pageSize))),
); // 계산된 전체 페이지 수입니다.
const active = computed(() => Math.min(totalPages.value, Math.max(1, props.current))); // 범위 안으로 보정한 현재 페이지입니다.
const resolvedSize = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.

// 단순·최소·크기·둥근 변형 클래스를 조합합니다.
const classes = computed(() =>
  [
    'pagination', // Pagination 레이아웃을 활성화하는 필수 클래스입니다.
    props.simple && 'pagination_simple', // 단순 텍스트형 변형입니다.
    props.minimal && 'pagination_minimal', // 최소형 변형입니다.
    resolvedSize.value !== 'md' && \`pagination_\${resolvedSize.value}\`, // 기본 md가 아닐 때 크기 변형입니다.
    props.round && 'pagination_round', // 둥근 버튼 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 전체 페이지 수와 현재 페이지를 바탕으로 표시할 번호·말줄임 목록을 만듭니다.
const pages = computed(() => {
  const count = totalPages.value;
  const current = active.value;
  if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', count];
  if (current >= count - 3)
    return [1, 'ellipsis-start', count - 4, count - 3, count - 2, count - 1, count];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', count];
});

// 범위 안의 페이지로만 이동하고 동일 페이지면 이벤트를 생략합니다.
function goTo(page) {
  const next = Math.min(totalPages.value, Math.max(1, page));
  if (next === active.value) return;
  emit('update:current', next);
  emit('change', next);
}
<\/script>
<template>
  <!-- 단순형 또는 번호 목록형으로 페이지 이동 컨트롤을 렌더합니다. -->
  <nav
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    data-component="Pagination"
    :data-current="active"
    :data-total-pages="totalPages"
  >
    <template v-if="simple"
      ><Button
        variant="ghost"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        class="pagination_btn pagination_prev"
        aria-label="이전 페이지"
        :disabled="active <= 1"
        @click="goTo(active - 1)"
        ><template #icon-before
          ><Icon name="chevron-left" size="sm" class="pagination_icon" /></template></Button
      ><span class="pagination_simple-text" aria-live="polite"
        ><span class="pagination_simple-current">{{ active }}</span> /
        <span class="pagination_simple-total">{{ totalPages }}</span></span
      ><Button
        variant="ghost"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        class="pagination_btn pagination_next"
        aria-label="다음 페이지"
        :disabled="active >= totalPages"
        @click="goTo(active + 1)"
        ><template #icon-before
          ><Icon name="chevron-right" size="sm" class="pagination_icon" /></template></Button
    ></template>
    <ul v-else class="pagination_list">
      <li class="pagination_item">
        <Button
          variant="ghost"
          color="default"
          size="sm"
          icon-only
          :ripple="false"
          class="pagination_btn pagination_prev"
          aria-label="이전 페이지"
          :disabled="active <= 1"
          @click="goTo(active - 1)"
          ><template #icon-before
            ><Icon name="chevron-left" size="sm" class="pagination_icon" /></template
        ></Button>
      </li>
      <li v-for="(page, index) in pages" :key="\`\${page}-\${index}\`" class="pagination_item">
        <span v-if="typeof page === 'string'" class="pagination_ellipsis" aria-hidden="true">…</span
        ><button
          v-else
          type="button"
          :class="['pagination_link', page === active && 'is-active']"
          :aria-current="page === active ? 'page' : undefined"
          :aria-label="\`\${page}페이지\${page === active ? ', 현재 페이지' : ''}\`"
          @click="goTo(page)"
        >
          {{ page }}
        </button>
      </li>
      <li class="pagination_item">
        <Button
          variant="ghost"
          color="default"
          size="sm"
          icon-only
          :ripple="false"
          class="pagination_btn pagination_next"
          aria-label="다음 페이지"
          :disabled="active >= totalPages"
          @click="goTo(active + 1)"
          ><template #icon-before
            ><Icon name="chevron-right" size="sm" class="pagination_icon" /></template
        ></Button>
      </li>
    </ul>
  </nav>
</template>
`})))()}var Kn;function qn(){return(qn=e((()=>{Kn=`<!-- Steps 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- steps 클래스에 finished·active·wait 상태 클래스로 진행 단계를 표시합니다. -->
<ol class="steps" aria-label="주문 진행 단계" data-component="Steps" data-steps>
  <!-- 완료 단계는 체크 아이콘과 연결선(steps_tail)을 둡니다. -->
  <li class="steps_item is-finished" data-step-index="1">
    <div class="steps_head">
      <span class="steps_indicator" aria-hidden="true"
        ><svg
          class="icon steps_icon"
          data-component="Icon"
          data-icon="check"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m5 12 4 4L19 6"></path></svg></span
      ><span class="steps_tail" aria-hidden="true"></span>
    </div>
    <div class="steps_content">
      <p class="steps_title">장바구니</p>
      <p class="steps_desc">상품 확인</p>
    </div>
  </li>
  <!-- 현재 단계는 aria-current="step"과 is-active를 함께 둡니다. -->
  <li class="steps_item is-active" data-step-index="2" aria-current="step">
    <div class="steps_head">
      <span class="steps_indicator" aria-hidden="true"><span class="steps_index">2</span></span
      ><span class="steps_tail" aria-hidden="true"></span>
    </div>
    <div class="steps_content">
      <p class="steps_title">결제</p>
      <p class="steps_desc">결제 수단 선택</p>
    </div>
  </li>
  <!-- 대기 단계는 번호 인디케이터만 표시하고 연결선을 생략합니다. -->
  <li class="steps_item is-wait" data-step-index="3">
    <div class="steps_head">
      <span class="steps_indicator" aria-hidden="true"><span class="steps_index">3</span></span>
    </div>
    <div class="steps_content">
      <p class="steps_title">완료</p>
      <p class="steps_desc">주문 확인</p>
    </div>
  </li>
</ol>
`})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`{# Steps 원본 구현: 단계 목록과 개별 단계를 호출형 macro로 구성합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro step(title='', description='', status='wait', index=1, last=false, navigable=false, icon='', iconSlot='', className='') %}
{%- set resolvedStatus = status if status in ['finished', 'active', 'wait', 'error'] else 'wait' -%}
<li
  class="steps_item is-{{ resolvedStatus }}{{ (' ' + className) if className else '' }}"
  data-step-index="{{ index }}"
  {% if resolvedStatus == 'error' %}data-step-fixed="error"{% endif %}
  {% if resolvedStatus == 'active' and not navigable %}aria-current="step"{% endif %}
>
  {% if navigable %}
    <button
      type="button"
      class="steps_trigger"
      {% if resolvedStatus == 'wait' %}disabled{% endif %}
      {% if resolvedStatus == 'active' %}aria-current="step"{% endif %}
    >
  {% endif %}
  <span class="steps_head">
    <span class="steps_indicator" aria-hidden="true">
      {% if iconSlot %}{{ iconSlot | safe }}
      {% elif icon %}{{ Icon.icon(name=icon, className='steps_icon') }}
      {% elif resolvedStatus == 'finished' %}{{ Icon.icon(name='check', className='steps_icon') }}
      {% elif resolvedStatus == 'error' %}{{ Icon.icon(name='close', className='steps_icon') }}
      {% else %}<span class="steps_index">{{ index }}</span>{% endif %}
    </span>
    {% if not last %}<span class="steps_tail" aria-hidden="true"></span>{% endif %}
  </span>
  <span class="steps_content">
    <span class="steps_title">{{ title }}</span>
    {% if description %}<span class="steps_desc">{{ description }}</span>{% endif %}
  </span>
  {% if navigable %}</button>{% endif %}
</li>
{% endmacro %}

{% macro steps(items=[], direction='horizontal', size='md', dot=false, iconStyle=false, navigable=false, align='start', ariaLabel='진행 단계', className='') %}
{%- set content = caller() if caller else '' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
<ol
  class="steps{% if direction == 'vertical' %} steps_vertical{% endif %}{% if resolvedSize != 'md' %} steps_{{ resolvedSize }}{% endif %}{% if dot %} steps_dot{% endif %}{% if iconStyle %} steps_icon-style{% endif %}{% if navigable %} steps_navigable{% endif %}{% if align == 'center' %} steps_align-center{% endif %}{{ (' ' + className) if className else '' }}"
  aria-label="{{ ariaLabel }}"
  data-component="Steps"
  data-steps
>
  {% if content %}
    {{ content | safe }}
  {% else %}
    {% for item in items %}
      {{ step(title=item.title, description=item.description, status=item.status | default('wait'), index=loop.index, last=loop.last, navigable=navigable, icon=item.icon, iconSlot=item.iconSlot) }}
    {% endfor %}
  {% endif %}
</ol>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call steps() %}
  {{ step(title='계정', status='finished', index=1) }}
  {{ step(title='프로필', status='active', index=2) }}
  {{ step(title='완료', status='wait', index=3, last=true) }}
{% endcall %}
`})))()}var Xn;function Zn(){return(Zn=e((()=>{Xn=`/**
 * Steps 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Children, cloneElement, isValidElement } from 'react';
import StepsItem from './StepsItem.jsx';

const directions = new Set(['horizontal', 'vertical']); // 지원하는 진행 방향입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 단계 크기입니다.

export function Steps({
  current, // 현재 활성 단계 번호(1부터)입니다.
  direction = 'horizontal', // 가로 또는 세로 배치를 선택합니다.
  size = 'md', // 단계 표시의 크기를 지정합니다.
  dot = false, // 점형 인디케이터를 사용할지 여부입니다.
  iconStyle = false, // 아이콘 강조 스타일을 사용할지 여부입니다.
  navigable = false, // 완료·활성 단계를 클릭으로 이동할지 여부입니다.
  align = '', // center면 제목을 가운데 정렬합니다.
  ariaLabel, // 단계 목록의 접근 가능한 이름을 지정합니다.
  items = [], // 선언형으로 전달할 단계 항목 배열입니다.
  children, // StepsItem 등 자식으로 구성한 단계입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 탐색 가능한 단계에서 이동할 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 ol에 전달합니다.
}) {
  const resolvedDirection = directions.has(direction) ? direction : 'horizontal'; // 검증된 방향입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.

  // 방향·크기·점형·아이콘·탐색·정렬 클래스를 조합합니다.
  const classes = [
    'steps', // Steps 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedDirection === 'vertical' && 'steps_vertical', // 세로 방향 변형입니다.
    resolvedSize !== 'md' && \`steps_\${resolvedSize}\`, // 기본 md가 아닐 때 크기 변형입니다.
    dot && 'steps_dot', // 점형 인디케이터 변형입니다.
    iconStyle && 'steps_icon-style', // 아이콘 강조 변형입니다.
    navigable && 'steps_navigable', // 클릭 탐색 가능 변형입니다.
    align === 'center' && 'steps_align-center', // 가운데 정렬 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // items가 있으면 StepsItem으로 매핑하고, 없으면 유효한 children을 사용합니다.
  const source = items.length
    ? items.map((item) => <StepsItem key={item.key ?? item.title} {...item} />)
    : Children.toArray(children).filter(isValidElement);

  return (
    <ol {...props} className={classes} aria-label={ariaLabel} data-component="Steps" data-steps>
      {source.map((child, index) => {
        const step = index + 1; // 1부터 시작하는 단계 번호입니다.
        // 명시 status가 없으면 current와의 비교로 finished·active·wait를 정합니다.
        const status =
          child.props.status ??
          (current == null
            ? 'wait'
            : step < current
              ? 'finished'
              : step === current
                ? 'active'
                : 'wait');
        return cloneElement(child, {
          index: child.props.index ?? step,
          status,
          isLast: index === source.length - 1,
          navigable,
          onClick:
            status === 'wait'
              ? undefined
              : (event) => {
                  child.props.onClick?.(event);
                  if (status !== 'active') onChange?.(step);
                },
        });
      })}
    </ol>
  );
}

export default Steps;
`})))()}var Qn;function $n(){return($n=e((()=>{Qn=`/**
 * StepsItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.jsx';

const statuses = new Set(['finished', 'active', 'wait', 'error']); // 지원하는 단계 상태입니다.

export function StepsItem({
  title, // 단계 제목 텍스트입니다.
  description, // 제목 아래 보조 설명입니다.
  status = 'wait', // finished·active·wait·error 중 현재 상태입니다.
  index = 0, // 인디케이터에 표시할 단계 번호입니다.
  isLast = false, // 마지막 단계여서 연결선을 숨길지 여부입니다.
  navigable = false, // 버튼으로 감싸 클릭 탐색을 허용할지 여부입니다.
  icon, // 상태 기본 아이콘 대신 사용할 사용자 정의 인디케이터입니다.
  completeIcon, // 완료 상태에서 사용할 아이콘입니다.
  errorIcon, // 오류 상태에서 사용할 아이콘입니다.
  children, // 기본 머리·본문 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 탐색 가능 단계에서 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  const resolved = statuses.has(status) ? status : 'wait'; // 검증된 상태입니다.

  // 사용자 아이콘이 없으면 상태별 기본 인디케이터를 선택합니다.
  const indicator =
    icon ??
    (resolved === 'finished' ? (
      (completeIcon ?? <Icon name="check" className="steps_icon" />)
    ) : resolved === 'error' ? (
      (errorIcon ?? <Icon name="close" className="steps_icon" />)
    ) : (
      <span className="steps_index">{index}</span>
    ));

  // 탐색 가능 모드에서 쓰는 머리와 연결선입니다.
  const head = (
    <span className="steps_head">
      <span className="steps_indicator" aria-hidden="true">
        {indicator}
      </span>
      {!isLast && <span className="steps_tail" aria-hidden="true" />}
    </span>
  );

  // 탐색 가능 모드에서 쓰는 제목·설명입니다.
  const content = (
    <span className="steps_content">
      <span className="steps_title">{title}</span>
      {description != null && <span className="steps_desc">{description}</span>}
    </span>
  );

  return (
    <li
      {...props}
      className={['steps_item', \`is-\${resolved}\`, className].filter(Boolean).join(' ')}
      aria-current={!navigable && resolved === 'active' ? 'step' : undefined}
    >
      {navigable ? (
        <button
          type="button"
          className="steps_trigger"
          disabled={resolved === 'wait'}
          aria-current={resolved === 'active' ? 'step' : undefined}
          onClick={onClick}
        >
          {head}
          {content}
        </button>
      ) : (
        (children ?? (
          <>
            <div className="steps_head">
              <span className="steps_indicator" aria-hidden="true">
                {indicator}
              </span>
              {!isLast && <span className="steps_tail" aria-hidden="true" />}
            </div>
            <div className="steps_content">
              <p className="steps_title">{title}</p>
              {description != null && <p className="steps_desc">{description}</p>}
            </div>
          </>
        ))
      )}
    </li>
  );
}
export default StepsItem;
`})))()}var er;function tr(){return(tr=e((()=>{er=`<!--
  Steps 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, provide, ref, useAttrs } from 'vue';
import StepsItem from './StepsItem.vue';

// 속성을 계산된 Steps 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSteps', inheritAttrs: false });

// 현재 단계, 방향, 크기, 시각·탐색 변형과 항목을 prop으로 받습니다.
const props = defineProps({
  current: Number, // 현재 활성 단계 번호(1부터)입니다.
  direction: { type: String, default: 'horizontal' }, // 가로 또는 세로 배치를 선택합니다.
  size: { type: String, default: 'md' }, // 단계 표시의 크기를 지정합니다.
  dot: Boolean, // 점형 인디케이터를 사용할지 여부입니다.
  iconStyle: Boolean, // 아이콘 강조 스타일을 사용할지 여부입니다.
  navigable: Boolean, // 완료·활성 단계를 클릭으로 이동할지 여부입니다.
  align: { type: String, default: '' }, // center면 제목을 가운데 정렬합니다.
  ariaLabel: String, // 단계 목록의 접근 가능한 이름을 지정합니다.
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 단계 항목 배열입니다.
});
const emit = defineEmits(['update:current', 'change']); // 탐색 가능 단계에서 이동을 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const registry = new Map(); // 등록된 StepsItem id 집합입니다.
const order = ref([]); // 등록 순서를 반영한 id 목록입니다.
const direction = computed(() =>
  ['horizontal', 'vertical'].includes(props.direction) ? props.direction : 'horizontal',
); // 검증된 방향입니다.
const size = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.

// 방향·크기·점형·아이콘·탐색·정렬 클래스를 조합합니다.
const classes = computed(() =>
  [
    'steps', // Steps 레이아웃을 활성화하는 필수 클래스입니다.
    direction.value === 'vertical' && 'steps_vertical', // 세로 방향 변형입니다.
    size.value !== 'md' && \`steps_\${size.value}\`, // 기본 md가 아닐 때 크기 변형입니다.
    props.dot && 'steps_dot', // 점형 인디케이터 변형입니다.
    props.iconStyle && 'steps_icon-style', // 아이콘 강조 변형입니다.
    props.navigable && 'steps_navigable', // 클릭 탐색 가능 변형입니다.
    props.align === 'center' && 'steps_align-center', // 가운데 정렬 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 자식 단계를 등록하거나 동일 id를 유지합니다.
function register(id) {
  if (!registry.has(id)) registry.set(id, true);
  order.value = [...registry.keys()];
}
// 언마운트된 자식 단계를 목록에서 제거합니다.
function unregister(id) {
  registry.delete(id);
  order.value = [...registry.keys()];
}
function indexOf(id) {
  return order.value.indexOf(id) + 1; // 1부터 시작하는 단계 번호입니다.
}

// 명시 status가 없으면 current와의 비교로 finished·active·wait를 정합니다.
function statusFor(index, explicit) {
  return (
    explicit ??
    (props.current == null
      ? 'wait'
      : index < props.current
        ? 'finished'
        : index === props.current
          ? 'active'
          : 'wait')
  );
}

// 탐색 가능하고 wait·active가 아닐 때만 현재 단계를 갱신합니다.
function select(index, status) {
  if (!props.navigable || status === 'wait' || status === 'active') return;
  emit('update:current', index);
  emit('change', index);
}

// 자식 StepsItem이 번호·상태·탐색에 쓰는 컨텍스트입니다.
provide('stepsContext', {
  navigable: computed(() => props.navigable),
  register,
  unregister,
  indexOf,
  isLast: (id) => order.value.indexOf(id) === order.value.length - 1,
  statusFor,
  select,
});
<\/script>
<template>
  <!-- items가 있으면 StepsItem으로 매핑하고, 없으면 기본 slot을 사용합니다. -->
  <ol v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Steps" data-steps>
    <template v-if="items.length"
      ><StepsItem
        v-for="(item, index) in items"
        :key="item.key ?? item.title"
        v-bind="item"
        :index="item.index ?? index + 1"
        :is-last="index === items.length - 1" /></template
    ><slot v-else />
  </ol>
</template>
`})))()}var nr;function rr(){return(rr=e((()=>{nr=`<!--
  StepsItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, useId, useSlots } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmStepsItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 제목, 설명, 상태, 번호, 마지막 여부를 prop으로 받습니다.
const props = defineProps({
  title: { type: String, required: true }, // 단계 제목 텍스트입니다.
  description: String, // 제목 아래 보조 설명입니다.
  status: String, // finished·active·wait·error 중 명시 상태입니다.
  index: Number, // 인디케이터에 표시할 단계 번호입니다.
  isLast: Boolean, // 마지막 단계여서 연결선을 숨길지 여부입니다.
});
const slots = useSlots(); // 아이콘·제목·설명 슬롯 존재 여부를 확인합니다.
const steps = inject('stepsContext', null); // 부모 Steps의 등록·상태 API입니다.
const id = useId().replaceAll(':', ''); // 등록에 쓰는 고유 id입니다.
onMounted(() => steps?.register(id)); // 마운트 시 부모에 등록합니다.
onUnmounted(() => steps?.unregister(id)); // 언마운트 시 등록을 해제합니다.
const stepIndex = computed(() => props.index ?? steps?.indexOf(id) ?? 0); // 최종 단계 번호입니다.
const resolvedStatus = computed(() => {
  const value = steps?.statusFor(stepIndex.value, props.status) ?? props.status ?? 'wait';
  return ['finished', 'active', 'wait', 'error'].includes(value) ? value : 'wait';
}); // 검증된 상태입니다.
const last = computed(() => props.isLast ?? steps?.isLast(id) ?? false); // 마지막 단계 여부입니다.
const navigable = computed(() => steps?.navigable?.value ?? false); // 클릭 탐색 가능 여부입니다.
function select() {
  steps?.select(stepIndex.value, resolvedStatus.value); // 부모에 단계 이동을 요청합니다.
}
<\/script>
<template>
  <!-- 탐색 가능하면 버튼, 아니면 정적 머리·본문을 렌더합니다. -->
  <li
    :class="['steps_item', \`is-\${resolvedStatus}\`]"
    :aria-current="!navigable && resolvedStatus === 'active' ? 'step' : undefined"
  >
    <button
      v-if="navigable"
      type="button"
      class="steps_trigger"
      :disabled="resolvedStatus === 'wait'"
      :aria-current="resolvedStatus === 'active' ? 'step' : undefined"
      @click="select"
    >
      <span class="steps_head"
        ><span class="steps_indicator" aria-hidden="true"
          ><slot name="icon"
            ><Icon v-if="resolvedStatus === 'finished'" name="check" class="steps_icon" /><Icon
              v-else-if="resolvedStatus === 'error'"
              name="close"
              class="steps_icon"
            /><span v-else class="steps_index">{{ stepIndex }}</span></slot
          ></span
        ><span v-if="!last" class="steps_tail" aria-hidden="true" /></span
      ><span class="steps_content"
        ><span class="steps_title"
          ><slot name="title">{{ title }}</slot></span
        ><span v-if="description || slots.description" class="steps_desc"
          ><slot name="description">{{ description }}</slot></span
        ></span
      ></button
    ><slot v-else
      ><div class="steps_head">
        <span class="steps_indicator" aria-hidden="true"
          ><slot name="icon"
            ><Icon v-if="resolvedStatus === 'finished'" name="check" class="steps_icon" /><Icon
              v-else-if="resolvedStatus === 'error'"
              name="close"
              class="steps_icon"
            /><span v-else class="steps_index">{{ stepIndex }}</span></slot
          ></span
        ><span v-if="!last" class="steps_tail" aria-hidden="true" />
      </div>
      <div class="steps_content">
        <p class="steps_title">
          <slot name="title">{{ title }}</slot>
        </p>
        <p v-if="description || slots.description" class="steps_desc">
          <slot name="description">{{ description }}</slot>
        </p>
      </div></slot
    >
  </li>
</template>
`})))()}var ir;function ar(){return(ar=e((()=>{ir=`<!-- Dropdown 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
<!-- dropdown 클래스에 트리거와 메뉴를 두고 aria-expanded·aria-controls로 연결합니다. -->
<div class="dropdown" data-component="Dropdown" data-dropdown>
  <!-- 트리거 버튼은 메뉴 열림 상태를 aria-expanded로 알립니다. -->
  <button
    type="button"
    class="btn btn_outline color_default dropdown_trigger"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-controls="dropdown-basic-menu"
  >
    <span class="btn_label">작업</span
    ><svg
      class="icon"
      data-component="Icon"
      data-icon="chevron-down"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>
  <!-- 메뉴 패널은 닫힌 동안 aria-hidden으로 숨깁니다. -->
  <div id="dropdown-basic-menu" class="dropdown_menu" role="menu" aria-hidden="true">
    <nav class="menu menu_vertical menu_compact" aria-label="작업 메뉴">
      <ul class="menu_list">
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">복사</span></button>
        </li>
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">이동</span></button>
        </li>
        <li class="menu_item">
          <button type="button" class="menu_link"><span class="menu_label">공유</span></button>
        </li>
      </ul>
    </nav>
  </div>
</div>
`})))()}var or;function sr(){return(sr=e((()=>{or=`{# Dropdown 원본 구현: 트리거와 메뉴 패널을 호출형 macro로 구성합니다. #}
{% import "components/basic/Button/button.njk" as Button %}

{% macro dropdownTrigger(label='메뉴', id='dropdown-menu', variant='outline', color='default', size='md', iconOnly=false, iconBefore='', selectText=false, disabled=false, open=false, className='') %}
{%- set content = caller() if caller else label -%}
{% call Button.button(
  variant=variant,
  color=color,
  size=size,
  label=label,
  iconOnly=iconOnly,
  iconBefore=iconBefore,
  iconAfter=('' if variant == 'select' or iconOnly else 'chevron-down'),
  ripple=false,
  selectText=selectText,
  selectCaret=(variant == 'select'),
  disabled=disabled,
  ariaLabel=(label if iconOnly else ''),
  haspopup='menu',
  expanded=open,
  className='dropdown_trigger' + ((' ' + className) if className else ''),
  dataAttributes={ 'aria-controls': id }
) %}{{ content | safe }}{% endcall %}
{% endmacro %}

{% macro dropdown(id='dropdown-menu', open=false, disabled=false, placement='start', fit=false, closeOnSelect=true, trigger='', triggerLabel='메뉴', triggerVariant='outline', triggerColor='default', triggerSize='md', triggerIconOnly=false, triggerIcon='', triggerSelectText=false, maxVisibleItems=false, menuWidth='', menuMinWidth='', ariaLabel='', className='') %}
{%- set menuContent = caller() if caller else '' -%}
<div
  class="dropdown{% if open %} is-open{% endif %}{% if disabled %} is-disabled{% endif %}{% if placement in ['end', 'top'] %} dropdown_placement-{{ placement }}{% endif %}{% if fit %} dropdown_fit{% endif %}{{ (' ' + className) if className else '' }}"
  data-component="Dropdown"
  data-dropdown
  {% if closeOnSelect == false %}data-dropdown-close-on-select="false"{% endif %}
  {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
>
  {% if trigger %}
    {{ trigger | safe }}
  {% else %}
    {{ dropdownTrigger(label=triggerLabel, id=id, variant=triggerVariant, color=triggerColor, size=triggerSize, iconOnly=triggerIconOnly, iconBefore=triggerIcon, selectText=triggerSelectText, disabled=disabled, open=open) }}
  {% endif %}
  <div
    id="{{ id }}"
    class="dropdown_menu{% if maxVisibleItems %} dropdown_menu-scrollable{% endif %}"
    role="menu"
    aria-hidden="{{ 'false' if open else 'true' }}"
    {% if maxVisibleItems or menuWidth or menuMinWidth %}style="{% if maxVisibleItems %}--dropdown-max-visible-items: {{ maxVisibleItems }};{% endif %}{% if menuWidth %} width: {{ menuWidth }};{% endif %}{% if menuMinWidth %} min-width: {{ menuMinWidth }};{% endif %}"{% endif %}
  >
    {{ menuContent | safe }}
  </div>
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% from "components/navigation/Menu/menu.njk" import menu, menuItem %}
{% call dropdown(triggerLabel='작업') %}
  {% call menu(compact=true) %}
    {{ menuItem(label='복사') }}
    {{ menuItem(label='이동') }}
    {{ menuItem(label='공유') }}
  {% endcall %}
{% endcall %}
`})))()}var cr;function lr(){return(lr=e((()=>{cr=`/**
 * Dropdown 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 *
 * @param {boolean} [open] 제어형으로 메뉴 열림 상태입니다.
 * @param {boolean} [defaultOpen=false] 비제어형 초기 열림 상태입니다.
 * @param {boolean} [disabled=false] 트리거와 메뉴 상호작용을 막을지 여부입니다.
 * @param {'start'|'end'|'top'} [placement='start'] 메뉴가 트리거 기준으로 열리는 위치입니다.
 * @param {boolean} [fit=false] 메뉴 너비를 트리거에 맞출지 여부입니다.
 * @param {number} [maxVisibleItems] 스크롤 전에 보일 최대 항목 수입니다.
 * @param {number} [menuWidth] 메뉴의 고정 너비입니다. 숫자는 rem입니다.
 * @param {number} [menuMinWidth] 메뉴의 최소 너비입니다. 숫자는 rem입니다.
 * @param {import('react').ReactNode} [triggerContent] 기본 버튼 대신 사용할 사용자 정의 트리거입니다.
 * @param {string} [triggerLabel='메뉴'] 기본 트리거 버튼에 표시할 텍스트입니다.
 * @param {import('react').ReactNode} [children] 메뉴 안에 배치할 Menu 등 콘텐츠입니다.
 * @param {boolean} [closeOnSelect=true] 항목 선택 후 메뉴를 닫을지 여부입니다.
 * @param {(open: boolean) => void} [onOpenChange] 열림 상태가 바뀔 때 호출할 콜백입니다.
 * @param {(value: string, event: Event) => void} [onSelect] 메뉴 항목이 선택될 때 호출할 콜백입니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = ['start', 'end', 'top']; // 지원하는 메뉴 배치입니다.
const cssSize = (value) => (typeof value === 'number' ? \`\${value}rem\` : value); // 숫자면 rem 단위로 변환합니다.

export function Dropdown({
  open, // 제어형으로 메뉴 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  disabled = false, // 트리거와 메뉴 상호작용을 막을지 여부입니다.
  placement = 'start', // 메뉴가 트리거 기준으로 열리는 위치를 지정합니다.
  fit = false, // 메뉴 너비를 트리거에 맞출지 여부입니다.
  maxVisibleItems, // 스크롤 전에 보일 최대 항목 수입니다.
  menuWidth, // 메뉴의 고정 너비입니다.
  menuMinWidth, // 메뉴의 최소 너비입니다.
  triggerContent, // 기본 버튼 대신 사용할 사용자 정의 트리거입니다.
  triggerLabel = '메뉴', // 기본 트리거 버튼에 표시할 텍스트입니다.
  children, // 메뉴 안에 배치할 Menu 등 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeOnSelect = true, // 항목 선택 후 메뉴를 닫을지 여부입니다.
  onOpenChange, // 열림 상태가 바뀔 때 호출할 콜백입니다.
  onSelect, // 메뉴 항목이 선택될 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null); // 바깥 클릭 판별용 루트 참조입니다.
  const id = \`dropdown-menu-\${useId().replaceAll(':', '')}\`; // 메뉴와 트리거를 연결하는 id입니다.
  const [internal, setInternal] = useState(defaultOpen); // 비제어형 열림 상태입니다.
  const controlled = open !== undefined; // 제어형 사용 여부입니다.
  const visible = controlled ? open : internal; // 최종 표시 상태입니다.
  const resolvedPlacement = placements.includes(placement) ? placement : 'start'; // 검증된 배치입니다.

  // 비활성 상태면 무시하고, 비제어형이면 내부 상태를 갱신한 뒤 콜백을 호출합니다.
  const setOpen = (next) => {
    if (disabled) return;
    if (!controlled) setInternal(next);
    onOpenChange?.(next);
  };

  // 활성 메뉴 항목 중 지정 위치로 포커스를 이동합니다.
  const focusItem = (position = 0) =>
    requestAnimationFrame(() => {
      const items = [
        ...(rootRef.current?.querySelectorAll(
          '.dropdown_menu .menu_link:not(.is-disabled):not([aria-disabled="true"])',
        ) ?? []),
      ];
      items.at(position)?.focus();
    });

  // 메뉴가 열린 동안 바깥 클릭과 Escape로 닫습니다.
  useEffect(() => {
    if (!visible) return undefined;
    const outside = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        rootRef.current?.querySelector('.dropdown_trigger')?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [visible]);

  // 사용자 트리거와 기본 버튼이 공유하는 열림·키보드 props입니다.
  const triggerProps = {
    className: ['dropdown_trigger', triggerContent?.props?.className].filter(Boolean).join(' '),
    haspopup: triggerContent?.props?.haspopup ?? 'menu',
    expanded: visible,
    'aria-controls': id,
    disabled: disabled || triggerContent?.props?.disabled,
    onClick: (event) => {
      triggerContent?.props?.onClick?.(event);
      setOpen(!visible);
    },
    onKeyDown: (event) => {
      triggerContent?.props?.onKeyDown?.(event);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (!visible) setOpen(true);
        focusItem(0);
      }
    },
  };

  // 유효한 트리거 요소면 복제하고, 없으면 기본 outline 버튼을 사용합니다.
  const trigger = isValidElement(triggerContent) ? (
    cloneElement(triggerContent, triggerProps)
  ) : (
    <Button
      {...triggerProps}
      variant="outline"
      label={triggerLabel}
      iconAfter={<Icon name="chevron-down" />}
    />
  );

  // 보이는 항목 수와 너비 관련 CSS 변수를 메뉴에 전달합니다.
  const menuStyle = {
    ...(maxVisibleItems != null ? { '--dropdown-max-visible-items': maxVisibleItems } : {}),
    ...(menuWidth != null ? { width: cssSize(menuWidth) } : {}),
    ...(menuMinWidth != null ? { minWidth: cssSize(menuMinWidth) } : {}),
  };

  // 화살표·Home·End·Tab으로 메뉴 항목 포커스를 이동하거나 닫습니다.
  const menuKeyDown = (event) => {
    const items = [
      ...event.currentTarget.querySelectorAll(
        '.menu_link:not(.is-disabled):not([aria-disabled="true"])',
      ),
    ];
    const current = items.indexOf(document.activeElement);
    let next = current;
    if (event.key === 'ArrowDown') next = (current + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else if (event.key === 'Tab') {
      setOpen(false);
      return;
    } else return;
    event.preventDefault();
    items[next]?.focus();
  };

  // 활성 메뉴 링크 클릭 시 선택 콜백을 호출하고 필요하면 닫습니다.
  const menuClick = (event) => {
    const item = event.target.closest('.menu_link');
    if (
      !item ||
      item.classList.contains('is-disabled') ||
      item.getAttribute('aria-disabled') === 'true'
    )
      return;
    onSelect?.(item.dataset.value ?? item.textContent?.trim(), event);
    if (closeOnSelect) {
      setOpen(false);
      requestAnimationFrame(() => rootRef.current?.querySelector('.dropdown_trigger')?.focus());
    }
  };

  return (
    <div
      {...props}
      ref={rootRef}
      className={[
        'dropdown', // Dropdown 루트를 활성화하는 필수 클래스입니다.
        visible && 'is-open', // 메뉴가 열린 상태입니다.
        disabled && 'is-disabled', // 비활성 상태입니다.
        resolvedPlacement === 'end' && 'dropdown_placement-end', // 끝쪽 배치 변형입니다.
        resolvedPlacement === 'top' && 'dropdown_placement-top', // 위쪽 배치 변형입니다.
        fit && 'dropdown_fit', // 트리거 너비에 맞추는 변형입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ')}
      data-component="Dropdown"
      data-dropdown
    >
      {trigger}
      <div
        id={id}
        className={['dropdown_menu', maxVisibleItems != null && 'dropdown_menu-scrollable']
          .filter(Boolean)
          .join(' ')}
        style={menuStyle}
        aria-hidden={!visible}
        onClick={menuClick}
        onKeyDown={menuKeyDown}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
`})))()}var ur;function dr(){return(dr=e((()=>{ur=`<!--
  Dropdown 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useId } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Dropdown 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDropdown', inheritAttrs: false });

// 열림 상태, 배치, 너비, 트리거 레이블, 선택 후 닫힘을 prop으로 받습니다.
const props = defineProps({
  open: { type: Boolean, default: undefined }, // 제어형으로 메뉴 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  disabled: Boolean, // 트리거와 메뉴 상호작용을 막을지 여부입니다.
  placement: { type: String, default: 'start' }, // 메뉴가 트리거 기준으로 열리는 위치를 지정합니다.
  fit: Boolean, // 메뉴 너비를 트리거에 맞출지 여부입니다.
  maxVisibleItems: Number, // 스크롤 전에 보일 최대 항목 수입니다.
  menuWidth: [String, Number], // 메뉴의 고정 너비입니다.
  menuMinWidth: [String, Number], // 메뉴의 최소 너비입니다.
  triggerLabel: { type: String, default: '메뉴' }, // 기본 트리거 버튼에 표시할 텍스트입니다.
  closeOnSelect: { type: Boolean, default: true }, // 항목 선택 후 메뉴를 닫을지 여부입니다.
});
const emit = defineEmits(['update:open', 'openChange', 'select']); // 열림·선택 이벤트를 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const rootRef = ref(null); // 바깥 클릭 판별용 루트 참조입니다.
const internal = ref(props.defaultOpen); // 비제어형 열림 상태입니다.
const menuId = \`dropdown-menu-\${useId().replaceAll(':', '')}\`; // 메뉴와 트리거를 연결하는 id입니다.
const visible = computed(() => (props.open === undefined ? internal.value : props.open)); // 최종 표시 상태입니다.

// 열림·비활성·배치·맞춤 클래스를 조합합니다.
const classes = computed(() =>
  [
    'dropdown', // Dropdown 루트를 활성화하는 필수 클래스입니다.
    visible.value && 'is-open', // 메뉴가 열린 상태입니다.
    props.disabled && 'is-disabled', // 비활성 상태입니다.
    props.placement === 'end' && 'dropdown_placement-end', // 끝쪽 배치 변형입니다.
    props.placement === 'top' && 'dropdown_placement-top', // 위쪽 배치 변형입니다.
    props.fit && 'dropdown_fit', // 트리거 너비에 맞추는 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 보이는 항목 수와 너비 관련 CSS 변수를 메뉴에 전달합니다.
const menuStyle = computed(() => ({
  ...(props.maxVisibleItems != null
    ? { '--dropdown-max-visible-items': props.maxVisibleItems }
    : {}),
  ...(props.menuWidth != null
    ? { width: typeof props.menuWidth === 'number' ? \`\${props.menuWidth}rem\` : props.menuWidth }
    : {}),
  ...(props.menuMinWidth != null
    ? {
        minWidth:
          typeof props.menuMinWidth === 'number' ? \`\${props.menuMinWidth}rem\` : props.menuMinWidth,
      }
    : {}),
}));

// 비활성 상태면 무시하고, 비제어형이면 내부 상태를 갱신한 뒤 이벤트를 보냅니다.
function setOpen(next) {
  if (props.disabled) return;
  if (props.open === undefined) internal.value = next;
  emit('update:open', next);
  emit('openChange', next);
}

// 활성 메뉴 항목 중 지정 위치로 포커스를 이동합니다.
function focusItem(position = 0) {
  nextTick(() =>
    requestAnimationFrame(() => {
      const items = [
        ...(rootRef.value?.querySelectorAll(
          '.dropdown_menu .menu_link:not(.is-disabled):not([aria-disabled="true"])',
        ) ?? []),
      ];
      items.at(position)?.focus();
    }),
  );
}

// 아래 화살표로 메뉴를 열고 첫 항목에 포커스합니다.
function triggerKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (!visible.value) setOpen(true);
    focusItem(0);
  }
}

// 화살표·Home·End·Tab으로 메뉴 항목 포커스를 이동하거나 닫습니다.
function menuKeydown(event) {
  const items = [
    ...event.currentTarget.querySelectorAll(
      '.menu_link:not(.is-disabled):not([aria-disabled="true"])',
    ),
  ];
  const current = items.indexOf(document.activeElement);
  let next = current;
  if (event.key === 'ArrowDown') next = (current + 1) % items.length;
  else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = items.length - 1;
  else if (event.key === 'Tab') {
    setOpen(false);
    return;
  } else return;
  event.preventDefault();
  items[next]?.focus();
}

// 활성 메뉴 링크 클릭 시 선택 이벤트를 보내고 필요하면 닫습니다.
function menuClick(event) {
  const item = event.target.closest('.menu_link');
  if (
    !item ||
    item.classList.contains('is-disabled') ||
    item.getAttribute('aria-disabled') === 'true'
  )
    return;
  emit('select', item.dataset.value ?? item.textContent?.trim(), event);
  if (props.closeOnSelect) {
    setOpen(false);
    nextTick(() => rootRef.value?.querySelector('.dropdown_trigger')?.focus());
  }
}

// 메뉴가 열린 동안 바깥 클릭과 Escape로 닫습니다.
function outside(event) {
  if (visible.value && !rootRef.value?.contains(event.target)) setOpen(false);
}
function escape(event) {
  if (visible.value && event.key === 'Escape') {
    setOpen(false);
    rootRef.value?.querySelector('.dropdown_trigger')?.focus();
  }
}
onMounted(() => {
  document.addEventListener('pointerdown', outside);
  document.addEventListener('keydown', escape);
});
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', outside);
  document.removeEventListener('keydown', escape);
});

// 기본 트리거와 슬롯 트리거가 공유하는 열림·키보드 props입니다.
const triggerProps = computed(() => ({
  class: 'dropdown_trigger',
  haspopup: 'menu',
  expanded: visible.value,
  'aria-controls': menuId,
  disabled: props.disabled,
  onClick: () => setOpen(!visible.value),
  onKeydown: triggerKeydown,
}));
<\/script>
<template>
  <!-- 트리거와 메뉴를 루트에 연결하고 키보드·클릭 처리를 붙입니다. -->
  <div v-bind="attrs" ref="rootRef" :class="classes" data-component="Dropdown" data-dropdown>
    <slot
      name="trigger"
      :open="visible"
      :toggle="() => setOpen(!visible)"
      :trigger-props="triggerProps"
      ><Button v-bind="triggerProps" variant="outline" :label="triggerLabel"
        ><template #icon-after><Icon name="chevron-down" /></template></Button
    ></slot>
    <div
      :id="menuId"
      :class="['dropdown_menu', maxVisibleItems != null && 'dropdown_menu-scrollable']"
      :style="menuStyle"
      role="menu"
      :aria-hidden="!visible"
      @click="menuClick"
      @keydown="menuKeydown"
    >
      <slot />
    </div>
  </div>
</template>
`})))()}function Z(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/navigation/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/navigation/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/navigation/${e}/${e}*.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}*.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/navigation/${e}/${e}*.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}*.jsx`,code:n.react}]}function Q(e,t,n){return Object.fromEntries(Object.entries(t).map(([t,r])=>[t,[...r,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · ${e} · ${t}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${n(t)}`}]]))}function fr(e,t,n={}){let r=n.current?` aria-current="page"`:``;return`<w2:textbox id="${e}" class="navbar_link${n.current?` is-active`:``}" tagname="a" href="${n.href??`#`}" label="${t}"${r}></w2:textbox>`}function pr(e){let t=`<w2:group id="navbarList" class="navbar_list" tagname="ul" role="list">
  ${fr(`navHome`,`홈`,{current:!0}).replaceAll(`
`,`
  `)}
  ${fr(`navDocs`,`문서`).replaceAll(`
`,`
  `)}
  ${fr(`navComponents`,`컴포넌트`).replaceAll(`
`,`
  `)}
</w2:group>`,n=`<w2:group id="navbarActions" class="navbar_actions">
  <xf:trigger id="navbarLogin" type="button" class="btn btn_ghost btn_sm">
    <xf:label><![CDATA[로그인]]></xf:label>
  </xf:trigger>
</w2:group>`,r={basic:`navbar`,brand:`navbar`,actions:`navbar`,search:`navbar`,size:`navbar navbar_sm`,variant:`navbar navbar_bordered`,badge:`navbar`,responsive:`navbar navbar_responsive`},i={basic:t,brand:t,actions:`${t}\n${n}`,search:`${t}\n<w2:group id="navbarSearch" class="navbar_search">
  <xf:input id="navbarSearchInput" class="input input_sm" type="search" placeholder="검색" aria-label="검색"></xf:input>
</w2:group>`,size:t,variant:t,badge:`${t}\n${n}`,responsive:`${t}\n${n}`};return`<w2:group id="navbar${e}" class="${r[e]??`navbar`}" tagname="header">
  <w2:textbox id="navbarBrand" class="navbar_brand" tagname="a" href="/" label="UXKM"></w2:textbox>
  ${(i[e]??t).replaceAll(`
`,`
  `)}
</w2:group>`}function mr(e){let t=[`menu`,(e===`horizontal`||e===`horizontalSubmenu`)&&`menu_horizontal`,e===`variant`&&`menu_bordered`].filter(Boolean).join(` `),n=(e,t,n={})=>`<w2:textbox id="${e}" class="menu_item${n.current?` is-active`:``}${n.disabled?` is-disabled`:``}" tagname="a" href="#" label="${t}"${n.current?` aria-current="page"`:``}${n.disabled?` aria-disabled="true"`:``}></w2:textbox>`;return e===`submenu`||e===`horizontalSubmenu`?`<w2:group id="menu${e}" class="${t}" role="menu">
  ${n(`menuHome`,`홈`,{current:!0})}
  <w2:group id="menuSub" class="menu_submenu">
    <xf:trigger id="menuSubTrigger" type="button" class="menu_item" aria-haspopup="true" aria-expanded="false" ev:onclick="scwin.menu_toggle">
      <xf:label><![CDATA[더보기]]></xf:label>
    </xf:trigger>
    <w2:group id="menuSubPanel" class="menu_submenu-panel" role="menu">
      ${n(`menuSubA`,`하위 항목 A`)}
      ${n(`menuSubB`,`하위 항목 B`)}
    </w2:group>
  </w2:group>
</w2:group>`:e===`group`?`<w2:group id="menuGroup" class="menu" role="menu">
  <w2:textbox id="menuGroupLabel" class="menu_group-label" label="계정"></w2:textbox>
  ${n(`menuProfile`,`프로필`)}
  ${n(`menuSettings`,`설정`)}
  <w2:textbox id="menuDivider" class="menu_divider" aria-hidden="true" label=""></w2:textbox>
  ${n(`menuLogout`,`로그아웃`)}
</w2:group>`:`<w2:group id="menu${e}" class="${t}" role="menu">
  ${n(`menuHome`,`홈`,{current:!0})}
  ${n(`menuDocs`,`문서`)}
  ${n(`menuDisabled`,`비활성`,{disabled:e===`disabled`})}
</w2:group>`}function hr(e){let t={basic:`tabs`,dynamic:`tabs`,indicator:`tabs tabs_indicator-slide`,equal:`tabs tabs_equal`,layoutScroll:`tabs tabs_scroll`,card:`tabs tabs_card`,pill:`tabs tabs_pill`,size:`tabs tabs_sm`,icon:`tabs`,badge:`tabs`,extra:`tabs`,scroll:`tabs tabs_scroll`,disabled:`tabs`,vertical:`tabs tabs_vertical`,example:`tabs tabs_card`},n=(e,t,n=!1,r=!1)=>`<xf:trigger id="${e}" type="button" class="tabs_tab${n?` is-active`:``}" role="tab" aria-selected="${n}" aria-controls="${e}Panel"${r?` disabled="true"`:``} ev:onclick="scwin.tabs_select">
  <xf:label><![CDATA[${t}]]></xf:label>
</xf:trigger>`;return`<w2:group id="tabs${e}" class="${t[e]??`tabs`}">
  <w2:group id="tabs${e}List" class="tabs_list" role="tablist">
    ${n(`tabs${e}A`,`개요`,!0)}
    ${n(`tabs${e}B`,`상세`)}
    ${n(`tabs${e}C`,`설정`,!1,e===`disabled`)}
  </w2:group>
  <w2:group id="tabs${e}APanel" class="tabs_panel is-active" role="tabpanel">
    <w2:textbox id="tabs${e}Body" tagname="p" label="선택된 탭 패널 내용입니다."></w2:textbox>
  </w2:group>
</w2:group>`}function gr(e){let t=e===`size`?` breadcrumb_sm`:``,n=(e,t,n=!1)=>n?`<w2:textbox id="${e}" class="breadcrumb_item is-current" tagname="span" aria-current="page" label="${t}"></w2:textbox>`:`<w2:textbox id="${e}" class="breadcrumb_item" tagname="a" href="#" label="${t}"></w2:textbox>`,r=`<w2:textbox id="bcSep" class="breadcrumb_separator" aria-hidden="true" label="/"></w2:textbox>`;return e===`ellipsis`?`<w2:group id="breadcrumbEllipsis" class="breadcrumb" tagname="nav" aria-label="경로">
  <w2:group id="breadcrumbList" class="breadcrumb_list" tagname="ol">
    ${n(`bcHome`,`홈`)}
    ${r}
    <xf:trigger id="bcEllipsis" type="button" class="breadcrumb_ellipsis" aria-label="중간 경로 펼치기" ev:onclick="scwin.breadcrumb_expand">
      <xf:label><![CDATA[…]]></xf:label>
    </xf:trigger>
    ${r}
    ${n(`bcCurrent`,`현재 페이지`,!0)}
  </w2:group>
</w2:group>`:`<w2:group id="breadcrumb${e}" class="breadcrumb${t}" tagname="nav" aria-label="경로">
  <w2:group id="breadcrumb${e}List" class="breadcrumb_list" tagname="ol">
    ${n(`bc${e}Home`,`홈`)}
    ${r}
    ${n(`bc${e}Docs`,`문서`)}
    ${r}
    ${n(`bc${e}Current`,`현재 페이지`,!0)}
  </w2:group>
</w2:group>`}function _r(e){let t={basic:`pagination`,minimal:`pagination pagination_minimal`,size:`pagination pagination_sm`,round:`pagination pagination_round`,ellipsis:`pagination`,simple:`pagination pagination_simple`,toolbar:`pagination`,align:`pagination pagination_center`,state:`pagination`},n=(e,t,n=!1,r=!1)=>`<xf:trigger id="${e}" type="button" class="pagination_item${n?` is-active`:``}"${n?` aria-current="page"`:``}${r?` disabled="true"`:``} ev:onclick="scwin.pagination_goto">
  <xf:label><![CDATA[${t}]]></xf:label>
</xf:trigger>`;return e===`simple`?`<w2:group id="paginationSimple" class="${t.simple}" role="navigation" aria-label="페이지">
  <xf:trigger id="paginationPrev" type="button" class="pagination_prev" ev:onclick="scwin.pagination_prev">
    <xf:label><![CDATA[이전]]></xf:label>
  </xf:trigger>
  <w2:textbox id="paginationStatus" class="pagination_status" label="3 / 12"></w2:textbox>
  <xf:trigger id="paginationNext" type="button" class="pagination_next" ev:onclick="scwin.pagination_next">
    <xf:label><![CDATA[다음]]></xf:label>
  </xf:trigger>
</w2:group>`:`<w2:group id="pagination${e}" class="${t[e]??`pagination`}" role="navigation" aria-label="페이지">
  ${n(`pg${e}Prev`,`이전`,!1,e===`state`)}
  ${n(`pg${e}1`,`1`)}
  ${n(`pg${e}2`,`2`,!0)}
  ${n(`pg${e}3`,`3`)}
  ${e===`ellipsis`?`<w2:textbox id="pgEllipsis" class="pagination_ellipsis" aria-hidden="true" label="…"></w2:textbox>`:``}
  ${n(`pg${e}Next`,`다음`)}
</w2:group>`}function vr(e){let t={basic:`steps`,simple:`steps steps_simple`,vertical:`steps steps_vertical`,dot:`steps steps_dot`,icon:`steps`,navigable:`steps`,error:`steps`,align:`steps steps_center`,size:`steps steps_sm`,state:`steps`},n=(e,t,n=`wait`)=>`<w2:group id="${e}" class="steps_item is-${n}"${n===`current`?` aria-current="step"`:``}>
  <w2:textbox id="${e}Marker" class="steps_marker" aria-hidden="true" label="${n===`done`?`✓`:n===`error`?`!`:``}"></w2:textbox>
  <w2:textbox id="${e}Title" class="steps_title" label="${t}"></w2:textbox>
</w2:group>`,r=e===`error`?`error`:`wait`;return`<w2:group id="steps${e}" class="${t[e]??`steps`}">
  ${n(`steps${e}1`,`정보 입력`,`done`)}
  ${n(`steps${e}2`,`확인`,`current`)}
  ${n(`steps${e}3`,`완료`,r)}
</w2:group>`}function yr(e){let t=e===`open`||e===`example`?` is-open`:``;return`<w2:group id="dropdown${e}" class="dropdown${t}">
  <xf:trigger id="dropdown${e}Trigger" type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="${t?`true`:`false`}" aria-controls="dropdown${e}Panel"${e===`disabled`?` disabled="true"`:``} ev:onclick="scwin.dropdown_toggle">
    <xf:label><![CDATA[${e===`select`?`옵션 선택`:`메뉴 열기`}]]></xf:label>
  </xf:trigger>
  <w2:group id="dropdown${e}Panel" class="dropdown_panel${e===`scroll`?` dropdown_scroll`:``}" role="menu">
    <w2:textbox id="dropdown${e}Item1" class="menu_item" tagname="button" role="menuitem" label="프로필"></w2:textbox>
    <w2:textbox id="dropdown${e}Item2" class="menu_item" tagname="button" role="menuitem" label="설정"></w2:textbox>
    <w2:textbox id="dropdown${e}Item3" class="menu_item" tagname="button" role="menuitem" label="로그아웃"></w2:textbox>
  </w2:group>
</w2:group>`}var $,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{ie(),me(),De(),Ie(),Ye(),at(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),rr(),ar(),sr(),lr(),dr(),$=(...e)=>e.join(`

`),br=Z(`Navbar`,`navbar`,{html:ht,gulp:_t,react:$(yt,`<!-- NavbarList.jsx -->\n${xt}`,`<!-- NavbarItem.jsx -->\n${Ct}`),vue:$(Tt,`<!-- NavbarList.vue -->\n${Dt}`,`<!-- NavbarItem.vue -->\n${kt}`)}),xr=Z(`Menu`,`menu`,{html:jt,gulp:Nt,react:$(Ft,`<!-- MenuItem.jsx -->\n${Lt}`,`<!-- MenuSubmenu.jsx -->\n${zt}`,`<!-- MenuGroup.jsx -->\n${Vt}`,`<!-- MenuDivider.jsx -->\n${Ut}`),vue:$(Gt,`<!-- MenuItem.vue -->\n${qt}`,`<!-- MenuSubmenu.vue -->\n${Yt}`,`<!-- MenuGroup.vue -->\n${Zt}`,`<!-- MenuDivider.vue -->\n${$t}`)}),Sr=Z(`Tabs`,`tabs`,{html:tn,gulp:rn,react:$(on,`<!-- TabsTab.jsx -->\n${cn}`,`<!-- TabPanel.jsx -->\n${un}`,`<!-- TabMenu.jsx -->\n${fn}`),vue:$(mn,`<!-- TabsTab.vue -->\n${gn}`,`<!-- TabPanel.vue -->\n${vn}`,`<!-- TabMenu.vue -->\n${bn}`)}),Cr=Z(`Breadcrumb`,`breadcrumb`,{html:Sn,gulp:wn,react:$(En,`<!-- BreadcrumbItem.jsx -->\n${On}`,`<!-- BreadcrumbEllipsis.jsx -->\n${An}`),vue:$(Mn,`<!-- BreadcrumbItem.vue -->\n${Pn}`,`<!-- BreadcrumbEllipsis.vue -->\n${In}`)}),wr=Z(`Pagination`,`pagination`,{html:Rn,gulp:Bn,react:Hn,vue:Wn}),Tr=Z(`Steps`,`steps`,{html:Kn,gulp:Jn,react:$(Xn,`<!-- StepsItem.jsx -->\n${Qn}`),vue:$(er,`<!-- StepsItem.vue -->\n${nr}`)}),Er=Z(`Dropdown`,`dropdown`,{html:ir,gulp:or,react:cr,vue:ur}),Dr=Q(`Navbar`,re,pr),Or=Q(`Menu`,pe,mr),kr=Q(`Tabs`,Ee,hr),Ar=Q(`Breadcrumb`,Fe,gr),jr=Q(`Pagination`,Je,_r),Mr=Q(`Steps`,it,vr),Nr=Q(`Dropdown`,pt,yr)})))()}export{Pr as a,br as c,jr as d,Tr as f,kr as h,Nr as i,Dr as l,Sr as m,Ar as n,xr as o,Mr as p,Er as r,Or as s,Cr as t,wr as u};