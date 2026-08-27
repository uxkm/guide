import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e){let t=[`actions`,`search`,`responsive`].includes(e),n=[`brand`,`actions`].includes(e),r=e===`search`,i=e===`badge`,a=[`import { Navbar, NavbarItem, NavbarList } from '@uxkm/react/navbar';`,t&&`import Button from '@uxkm/react/button';`,n&&`import Icon from '@uxkm/react/icon';`,r&&`import Input from '@uxkm/react/input';`,i&&`import Badge from '@uxkm/react/badge';`].filter(Boolean).join(`
`),s=[`import { Navbar, NavbarItem, NavbarList } from '@uxkm/vue/navbar';`,t&&`import Button from '@uxkm/vue/button';`,n&&`import Icon from '@uxkm/vue/icon';`,r&&`import Input from '@uxkm/vue/input';`,i&&`import Badge from '@uxkm/vue/badge';`].filter(Boolean).join(`
`),l=`${a}\n\nexport function Example() { return <>${c[e]}</>; }`,u=`<script setup>\n${s}\n<\/script>\n<template>\n${ee[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Navbar.html · ${e}`,code:o[e]},{id:`gulp`,label:`Gulp`,fileName:`navbar.njk · ${e}`,code:o[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/navbar · ${e}`,code:u},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/navbar · ${e}`,code:u},{id:`react`,label:`React`,fileName:`@uxkm/react/navbar · ${e}`,code:l},{id:`next`,label:`Next`,fileName:`@uxkm/react/navbar · ${e}`,code:l}]}var n,r,i,a,o,s,c,l,u,ee,te;function ne(){return(ne=e((()=>{n=[`basic`,`brand`,`actions`,`search`,`size`,`variant`,`badge`,`responsive`],r=e=>`<ul class="navbar_list">${e.map(([e,t,n])=>`<li class="navbar_item"><a href="#" class="navbar_link${t?` is-active`:``}"${t?` aria-current="page"`:``}>${e}${n||``}</a></li>`).join(``)}</ul>`,i=(e,t,n={})=>{let r=n.id||`navbar-collapse`,i=n.responsive?`<button type="button" class="btn btn_ghost btn_icon-only navbar_toggle" data-navbar-toggle aria-expanded="false" aria-controls="${r}" aria-label="메뉴 열기"><svg class="icon icon_sm navbar_toggle-icon-open" data-component="Icon" data-icon="menu" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg><svg class="icon icon_sm navbar_toggle-icon-close" data-component="Icon" data-icon="close" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"></path></svg></button>`:``;return`<header class="navbar${n.classes?` ${n.classes}`:``}" data-component="Navbar"${n.responsive?` data-navbar`:``}><div class="navbar_container"><a href="#" class="navbar_brand">${n.icon||``}${e}</a>${i}<div class="navbar_collapse" id="${r}"><nav class="navbar_nav" aria-label="주요 메뉴">${t}</nav>${n.search?`<div class="navbar_search">${n.search}</div>`:``}${n.actions?`<div class="navbar_actions">${n.actions}</div>`:``}</div></div></header>`},a=(e,t=`outline`)=>`<button type="button" class="btn btn_${t}${t===`filled`?` color_primary`:``} btn_sm"><span class="btn_label">${e}</span></button>`,o={basic:i(`UXKM`,r([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])),brand:i(`HTML Components`,r([[`가이드`,!0],[`리소스`]]),{icon:`<svg class="icon navbar_brand-icon" data-component="Icon" data-icon="grid" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>`}),actions:i(`Dashboard`,r([[`개요`,!0],[`분석`],[`설정`]]),{actions:`<button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="알림"><svg class="icon" data-component="Icon" data-icon="bell" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4"></path></svg></button>${a(`로그인`)}${a(`가입`,`filled`)}`}),search:i(`Docs`,r([[`시작하기`],[`컴포넌트`,!0],[`패턴`]]),{search:`<input class="input input_sm" type="search" id="navbar-search-demo" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색">`,actions:a(`GitHub`,`filled`)}),size:[i(`Small`,r([[`메뉴`,!0]]),{classes:`navbar_sm`}),i(`Default`,r([[`메뉴`,!0]])),i(`Large`,r([[`메뉴`,!0]]),{classes:`navbar_lg`})].join(`

`),variant:[i(`Borderless`,r([[`홈`,!0],[`소개`]]),{classes:`navbar_borderless`}),i(`Dark Surface`,r([[`홈`,!0],[`소개`]]),{classes:`navbar_dark`}),`<div class="navbar_demo-scroll">${i(`Sticky`,r([[`고정`,!0]]),{classes:`navbar_sticky`})}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`].join(`

`),badge:i(`Inbox`,r([[`받은편지함`,!0],[`알림`,!1,`<span class="badge color_danger" data-component="Badge">3</span>`],[`보관함`]])),responsive:i(`Mobile`,r([[`홈`,!0],[`제품`],[`가격`],[`문의`]]),{responsive:!0,id:`navbar-responsive-demo`,actions:`${a(`로그인`)}${a(`시작하기`,`filled`)}`})},s=e=>`<NavbarList>${e.map(([e,t])=>`<NavbarItem label="${e}"${t?` active`:``} />`).join(``)}</NavbarList>`,c={basic:`<Navbar brand="UXKM" items={${s([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])}} />`,brand:`<Navbar brand="HTML Components" brandIcon={<Icon name="grid" className="navbar_brand-icon" />} items={${s([[`가이드`,!0],[`리소스`]])}} />`,actions:`<Navbar brand="Dashboard" items={${s([[`개요`,!0],[`분석`],[`설정`]])}} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} />`,search:`<Navbar brand="Docs" items={${s([[`시작하기`],[`컴포넌트`,!0],[`패턴`]])}} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" ariaLabel="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} />`,size:`<Navbar brand="Small" size="sm" items={${s([[`메뉴`,!0]])}} />\n<Navbar brand="Default" items={${s([[`메뉴`,!0]])}} />\n<Navbar brand="Large" size="lg" items={${s([[`메뉴`,!0]])}} />`,variant:`<Navbar brand="Borderless" borderless items={${s([[`홈`,!0],[`소개`]])}} />\n<Navbar brand="Dark Surface" dark items={${s([[`홈`,!0],[`소개`]])}} />\n<div className="navbar_demo-scroll"><Navbar brand="Sticky" sticky items={${s([[`고정`,!0]])}} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,badge:`<Navbar brand="Inbox" items={<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림" badge={<Badge color="danger" label="3" />} /><NavbarItem label="보관함" /></NavbarList>} />`,responsive:`<Navbar brand="Mobile" responsive collapseId="navbar-responsive-demo" items={${s([[`홈`,!0],[`제품`],[`가격`],[`문의`]])}} actions={<><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></>} />`},l=e=>`<NavbarList>${e.map(([e,t])=>`<NavbarItem label="${e}"${t?` active`:``} />`).join(``)}</NavbarList>`,u=(e,t,n=``)=>`<Navbar ${e}><template #items>${t}</template>${n}</Navbar>`,ee={basic:u(`brand="UXKM"`,l([[`홈`,!0],[`컴포넌트`],[`토큰`],[`접근성`]])),brand:u(`brand="HTML Components"`,l([[`가이드`,!0],[`리소스`]]),`<template #brand-icon><Icon name="grid" class="navbar_brand-icon" /></template>`),actions:u(`brand="Dashboard"`,l([[`개요`,!0],[`분석`],[`설정`]]),`<template #actions><Button variant="ghost" size="sm" icon-only aria-label="알림"><template #icon-before><Icon name="bell" /></template></Button><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></template>`),search:u(`brand="Docs"`,l([[`시작하기`],[`컴포넌트`,!0],[`패턴`]]),`<template #search><Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" /></template><template #actions><Button variant="filled" color="primary" size="sm" label="GitHub" /></template>`),size:`${u(`brand="Small" size="sm"`,l([[`메뉴`,!0]]))}\n${u(`brand="Default"`,l([[`메뉴`,!0]]))}\n${u(`brand="Large" size="lg"`,l([[`메뉴`,!0]]))}`,variant:`${u(`brand="Borderless" borderless`,l([[`홈`,!0],[`소개`]]))}\n${u(`brand="Dark Surface" dark`,l([[`홈`,!0],[`소개`]]))}\n<div class="navbar_demo-scroll">${u(`brand="Sticky" sticky`,l([[`고정`,!0]]))}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,badge:u(`brand="Inbox"`,`<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림"><template #badge><Badge color="danger" label="3" /></template></NavbarItem><NavbarItem label="보관함" /></NavbarList>`),responsive:u(`brand="Mobile" responsive collapse-id="navbar-responsive-demo"`,l([[`홈`,!0],[`제품`],[`가격`],[`문의`]]),`<template #actions><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></template>`)},te=Object.fromEntries(n.map(e=>[e,t(e)]))})))()}function re(e){let t=`Menu, MenuItem, MenuDivider, MenuGroup, MenuSubmenu`,n=[`icon`,`submenu`,`badge`,`layout`].includes(e),r=e===`badge`,i=[`import { ${t} } from '@uxkm/react/menu';`,n&&`import Icon from '@uxkm/react/icon';`,r&&`import Badge from '@uxkm/react/badge';`].filter(Boolean).join(`
`),a=[`import { ${t} } from '@uxkm/vue/menu';`,n&&`import Icon from '@uxkm/vue/icon';`,r&&`import Badge from '@uxkm/vue/badge';`].filter(Boolean).join(`
`),o=`${i}\n\nexport function Example() { return <>${ae[e]}</>; }`,s=`<script setup>\n${a}\n<\/script>\n<template>\n${oe[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Menu.html · ${e}`,code:g[e]},{id:`gulp`,label:`Gulp`,fileName:`menu.njk · ${e}`,code:g[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/menu · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/menu · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/menu · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/menu · ${e}`,code:o}]}var ie,d,f,p,m,h,g,_,v,ae,y,b,oe,se;function ce(){return(ce=e((()=>{ie=[`basic`,`horizontal`,`icon`,`submenu`,`group`,`disabled`,`badge`,`horizontalSubmenu`,`layout`,`variant`],d=e=>`<svg class="icon menu_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`grid`?`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`:e===`user`?`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`:e===`settings`?`M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z`:e===`home`?`m3 11 9-8 9 8M5 10v11h14V10`:e===`bell`?`M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4`:e===`mail`?`M3 5h18v14H3zM3 7l9 6 9-6`:`M4 3h12l4 4v14H4zM16 3v5h5`}"></path></svg>`,f=(e,t={})=>`<li class="menu_item${t.disabled?` is-disabled`:``}"><button type="button" class="menu_link${t.active?` is-active`:``}${t.disabled?` is-disabled`:``}"${t.active?` aria-current="page"`:``}${t.disabled?` aria-disabled="true"`:``}>${t.icon?d(t.icon):``}<span class="menu_label">${e}</span>${t.extra?`<span class="menu_extra">${t.extra}</span>`:``}</button></li>`,p=(e,t,n,r=!1,i)=>`<li class="menu_item menu_item-submenu" aria-expanded="${r}"><button type="button" class="menu_link" data-menu-submenu-toggle aria-expanded="${r}" aria-controls="${t}">${i?d(i):``}<span class="menu_label">${e}</span><svg class="icon menu_arrow" data-component="Icon" data-icon="chevron-down" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></button><ul id="${t}" class="menu_submenu">${n}</ul></li>`,m=(e,t,n=`menu_vertical menu_bordered`)=>`<nav class="menu ${n}" data-component="Menu" data-menu-selectable aria-label="${t}"><ul class="menu_list">${e}</ul></nav>`,h=(e,t=0)=>e.map((e,n)=>f(e,{active:n===t})).join(``),g={basic:m(h([`대시보드`,`분석`,`사용자`,`설정`]),`주요 메뉴`),horizontal:m(h([`개요`,`컴포넌트`,`토큰`,`접근성`]),`섹션 메뉴`,`menu_horizontal menu_bordered`),icon:m([[`대시보드`,`grid`],[`사용자`,`user`],[`문서`,`book`],[`설정`,`settings`]].map(([e,t],n)=>f(e,{icon:t,active:n===0})).join(``),`앱 메뉴`),submenu:m(f(`홈`,{active:!0,icon:`home`})+p(`컴포넌트`,`menu-sub-components`,h([`Button`,`Input`,`Card`],-1),!0,`grid`)+p(`패턴`,`menu-sub-patterns`,h([`폼 레이아웃`,`데이터 테이블`],-1),!1,`book`),`컴포넌트 메뉴`),group:m(`<li class="menu_group" role="presentation"><span class="menu_group-title">계정</span></li>`+f(`프로필`,{active:!0})+f(`보안`)+`<li class="menu_divider" role="separator"></li><li class="menu_group" role="presentation"><span class="menu_group-title">앱</span></li>`+f(`알림`)+f(`언어`)+`<li class="menu_divider" role="separator"></li>`+f(`로그아웃`),`설정 메뉴`),disabled:m(f(`조회`,{active:!0})+f(`편집`)+f(`삭제`,{disabled:!0})+f(`관리자 설정`,{disabled:!0}),`권한 메뉴`),badge:m(f(`받은편지함`,{active:!0,icon:`mail`,extra:`<span class="badge badge_count color_primary" data-component="Badge">12</span>`})+f(`알림`,{icon:`bell`,extra:`<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 알림"></span>`})+f(`메시지`,{icon:`mail`,extra:`<span class="badge color_default" data-component="Badge">Beta</span>`}),`알림 메뉴`),horizontalSubmenu:m(f(`홈`,{active:!0})+p(`컴포넌트`,`menu-sub-h-components`,h([`Button`,`Input`,`Select`],-1))+f(`토큰`)+f(`접근성`),`상단 메뉴`,`menu_horizontal menu_bordered`),layout:`<div class="menu_demo-row"><div class="menu_demo-sidebar">${m(f(`개요`,{active:!0,icon:`grid`})+p(`문서`,`menu-sub-sidebar`,h([`시작하기`,`컴포넌트`],-1),!0,`book`)+f(`설정`,{icon:`settings`}),`앱 사이드바`,`menu_vertical menu_bordered menu_compact`)}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:m(h([`항목 A`,`항목 B`,`항목 C`]),`컴팩트 메뉴`,`menu_vertical menu_bordered menu_compact`)+`
`+m(h([`항목 A`,`항목 B`,`항목 C`]),`다크 서피스 메뉴`,`menu_vertical menu_bordered menu_dark`)},_=(e,t=``)=>`<MenuItem label="${e}"${t?` ${t}`:``} />`,v=(e,t=`bordered`)=>`<Menu ${t}>${e}</Menu>`,ae={basic:v(_(`대시보드`,`active`)+_(`분석`)+_(`사용자`)+_(`설정`),`bordered ariaLabel="주요 메뉴"`),horizontal:v(_(`개요`,`active`)+_(`컴포넌트`)+_(`토큰`)+_(`접근성`),`mode="horizontal" bordered ariaLabel="섹션 메뉴"`),icon:v(_(`대시보드`,`active icon={<Icon name="grid" className="menu_icon" />}`)+_(`사용자`,`icon={<Icon name="user" className="menu_icon" />}`)+_(`문서`,`icon={<Icon name="book" className="menu_icon" />}`)+_(`설정`,`icon={<Icon name="settings" className="menu_icon" />}`),`bordered ariaLabel="앱 메뉴"`),submenu:v(_(`홈`,`active icon={<Icon name="home" className="menu_icon" />}`)+`<MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components" icon={<Icon name="grid" className="menu_icon" />}>`+_(`Button`)+_(`Input`)+_(`Card`)+`</MenuSubmenu><MenuSubmenu label="패턴" submenuId="menu-sub-patterns" icon={<Icon name="book" className="menu_icon" />}>`+_(`폼 레이아웃`)+_(`데이터 테이블`)+`</MenuSubmenu>`,`bordered ariaLabel="컴포넌트 메뉴"`),group:v(`<MenuGroup title="계정" />`+_(`프로필`,`active`)+_(`보안`)+`<MenuDivider /><MenuGroup title="앱" />`+_(`알림`)+_(`언어`)+`<MenuDivider />`+_(`로그아웃`),`bordered ariaLabel="설정 메뉴"`),disabled:v(_(`조회`,`active`)+_(`편집`)+_(`삭제`,`disabled`)+_(`관리자 설정`,`disabled`),`bordered ariaLabel="권한 메뉴"`),badge:v(_(`받은편지함`,`active icon={<Icon name="mail" className="menu_icon" />} extra={<Badge count color="primary" label="12" />}`)+_(`알림`,`icon={<Icon name="bell" className="menu_icon" />} extra={<Badge dotOnly color="danger" ariaLabel="새 알림" />}`)+_(`메시지`,`icon={<Icon name="mail" className="menu_icon" />} extra={<Badge color="default" label="Beta" />}`),`bordered ariaLabel="알림 메뉴"`),horizontalSubmenu:v(_(`홈`,`active`)+`<MenuSubmenu label="컴포넌트" submenuId="menu-sub-h-components">`+_(`Button`)+_(`Input`)+_(`Select`)+`</MenuSubmenu>`+_(`토큰`)+_(`접근성`),`mode="horizontal" bordered ariaLabel="상단 메뉴"`),layout:`<div className="menu_demo-row"><div className="menu_demo-sidebar">${v(_(`개요`,`active icon={<Icon name="grid" className="menu_icon" />}`)+`<MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar" icon={<Icon name="book" className="menu_icon" />}>`+_(`시작하기`)+_(`컴포넌트`)+`</MenuSubmenu>`+_(`설정`,`icon={<Icon name="settings" className="menu_icon" />}`),`bordered compact ariaLabel="앱 사이드바"`)}</div><div className="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:v(_(`항목 A`,`active`)+_(`항목 B`)+_(`항목 C`),`bordered compact ariaLabel="컴팩트 메뉴"`)+v(_(`항목 A`,`active`)+_(`항목 B`)+_(`항목 C`),`bordered dark ariaLabel="다크 서피스 메뉴"`)},y=(e,t=``,n=``,r=``)=>n||r?`<MenuItem label="${e}"${t?` ${t}`:``}>${n?`<template #icon><Icon name="${n}" class="menu_icon" /></template>`:``}${r?`<template #extra>${r}</template>`:``}</MenuItem>`:`<MenuItem label="${e}"${t?` ${t}`:``} />`,b=(e,t=`bordered`)=>`<Menu ${t}>${e}</Menu>`,oe={basic:b(y(`대시보드`,`active`)+y(`분석`)+y(`사용자`)+y(`설정`),`bordered aria-label="주요 메뉴"`),horizontal:b(y(`개요`,`active`)+y(`컴포넌트`)+y(`토큰`)+y(`접근성`),`mode="horizontal" bordered aria-label="섹션 메뉴"`),icon:b(y(`대시보드`,`active`,`grid`)+y(`사용자`,``,`user`)+y(`문서`,``,`book`)+y(`설정`,``,`settings`),`bordered aria-label="앱 메뉴"`),submenu:b(y(`홈`,`active`,`home`)+`<MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components"><template #icon><Icon name="grid" class="menu_icon" /></template>`+y(`Button`)+y(`Input`)+y(`Card`)+`</MenuSubmenu><MenuSubmenu label="패턴" submenu-id="menu-sub-patterns"><template #icon><Icon name="book" class="menu_icon" /></template>`+y(`폼 레이아웃`)+y(`데이터 테이블`)+`</MenuSubmenu>`,`bordered aria-label="컴포넌트 메뉴"`),group:b(`<MenuGroup title="계정" />`+y(`프로필`,`active`)+y(`보안`)+`<MenuDivider /><MenuGroup title="앱" />`+y(`알림`)+y(`언어`)+`<MenuDivider />`+y(`로그아웃`),`bordered aria-label="설정 메뉴"`),disabled:b(y(`조회`,`active`)+y(`편집`)+y(`삭제`,`disabled`)+y(`관리자 설정`,`disabled`),`bordered aria-label="권한 메뉴"`),badge:b(y(`받은편지함`,`active`,`mail`,`<Badge count color="primary" label="12" />`)+y(`알림`,``,`bell`,`<Badge dot-only color="danger" aria-label="새 알림" />`)+y(`메시지`,``,`mail`,`<Badge color="default" label="Beta" />`),`bordered aria-label="알림 메뉴"`),horizontalSubmenu:b(y(`홈`,`active`)+`<MenuSubmenu label="컴포넌트" submenu-id="menu-sub-h-components">`+y(`Button`)+y(`Input`)+y(`Select`)+`</MenuSubmenu>`+y(`토큰`)+y(`접근성`),`mode="horizontal" bordered aria-label="상단 메뉴"`),layout:`<div class="menu_demo-row"><div class="menu_demo-sidebar">${b(y(`개요`,`active`,`grid`)+`<MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar"><template #icon><Icon name="book" class="menu_icon" /></template>`+y(`시작하기`)+y(`컴포넌트`)+`</MenuSubmenu>`+y(`설정`,``,`settings`),`bordered compact aria-label="앱 사이드바"`)}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,variant:b(y(`항목 A`,`active`)+y(`항목 B`)+y(`항목 C`),`bordered compact aria-label="컴팩트 메뉴"`)+b(y(`항목 A`,`active`)+y(`항목 B`)+y(`항목 C`),`bordered dark aria-label="다크 서피스 메뉴"`)},se=Object.fromEntries(ie.map(e=>[e,re(e)]))})))()}function x(e,t,n={}){let r=n.classes||`tabs_line`,i=n.label||`탭`,a=t.map((t,n)=>`<button type="button" class="tabs_tab${n===0?` is-active`:``}${t.disabled?` is-disabled`:``}" role="tab" id="${e}-tab-${n}" aria-selected="${n===0}" aria-controls="${e}-panel-${n}"${n?` tabindex="-1"`:``}${t.disabled?` aria-disabled="true" disabled`:``}>${t.icon?fe(t.icon):``}<span class="tabs_label">${t.label}</span>${t.badge?`<span class="tabs_badge">${t.badge}</span>`:``}</button>`).join(``),o=t.map((t,n)=>`<div class="tabs_panel${n===0?` is-active`:``}" role="tabpanel" id="${e}-panel-${n}" aria-labelledby="${e}-tab-${n}"${n?` hidden`:``}>${t.content}</div>`).join(``),s=n.nav?`<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="prev" aria-label="이전 탭">‹</button>`:``,c=n.nav?`<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="next" aria-label="다음 탭">›</button>`:``;return`<div class="tabs ${r}" data-component="Tabs" data-tabs><div class="tabs_bar">${s}<div class="tabs_list-wrap${n.nav?` tabs_scroll-viewport`:``}"><div class="tabs_list" role="tablist" aria-label="${i}">${a}</div></div>${c}${n.extra?`<div class="tabs_extra">${n.extra}</div>`:``}</div><div class="tabs_panels">${o}</div></div>`}function le(e){return e===`dynamic`?`<Tabs mode="dynamic" :items="items" aria-label="동적 탭"><template #panel="{ value }"><p>{{ value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.' }}</p></template></Tabs>`:e===`icon`?`<Tabs aria-label="대시보드 섹션"><TabPanel label="대시보드" active><template #icon><Icon name="grid" class="tabs_icon" /></template>대시보드 콘텐츠</TabPanel><TabPanel label="사용자"><template #icon><Icon name="user" class="tabs_icon" /></template>사용자 콘텐츠</TabPanel><TabPanel label="문서"><template #icon><Icon name="book" class="tabs_icon" /></template>문서 콘텐츠</TabPanel></Tabs>`:e===`badge`?`<Tabs aria-label="알림 센터"><TabPanel label="전체" active>전체 알림 목록</TabPanel><TabPanel label="읽지 않음"><template #badge><Badge count color="primary" label="12" /></template>읽지 않은 알림</TabPanel><TabPanel label="중요"><template #badge><Badge dot-only color="danger" aria-label="새 중요 알림" /></template>중요 알림</TabPanel></Tabs>`:e===`extra`?`<Tabs aria-label="파일 보기"><template #extra><Button variant="filled" color="primary" size="sm" label="새 파일" /></template>${T(`내 파일`,`내 파일 목록`,`active`)}${T(`공유됨`,`공유된 파일 목록`)}${T(`최근`,`최근 파일 목록`)}</Tabs>`:D[e].replaceAll(`ariaLabel=`,`aria-label=`).replaceAll(`className=`,`class=`)}function ue(e){let t=e===`icon`,n=e===`badge`,r=e===`extra`,i=[`import { Tabs, TabPanel, TabMenu } from '@uxkm/react/tabs';`,t&&`import Icon from '@uxkm/react/icon';`,n&&`import Badge from '@uxkm/react/badge';`,r&&`import Button from '@uxkm/react/button';`].filter(Boolean).join(`
`),a=[`import { Tabs, TabPanel, TabMenu } from '@uxkm/vue/tabs';`,t&&`import Icon from '@uxkm/vue/icon';`,n&&`import Badge from '@uxkm/vue/badge';`,r&&`import Button from '@uxkm/vue/button';`,e===`dynamic`&&`const items = [{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }];`].filter(Boolean).join(`
`),o=`${i}\n\nexport function Example() { return <>${D[e]}</>; }`,s=`<script setup>\n${a}\n<\/script>\n<template>\n${le(e)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Tabs.html · ${e}`,code:w[e]},{id:`gulp`,label:`Gulp`,fileName:`tabs.njk · ${e}`,code:w[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/tabs · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tabs · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/tabs · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/tabs · ${e}`,code:o}]}var de,fe,S,C,w,T,E,D,pe;function me(){return(me=e((()=>{de=[`basic`,`dynamic`,`indicator`,`equal`,`layoutScroll`,`card`,`pill`,`size`,`icon`,`badge`,`extra`,`scroll`,`disabled`,`vertical`],fe=e=>`<svg class="icon tabs_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`grid`?`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`:e===`user`?`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`:`M4 3h12l4 4v14H4zM16 3v5h5`}"></path></svg>`,S=[{label:`개요`,content:`<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>`},{label:`팀`,content:`<p>팀 구성원과 역할을 표시합니다.</p>`},{label:`활동`,content:`<p>최근 활동 로그와 타임라인을 보여줍니다.</p>`}],C=[[`홈`,`홈 패널`],[`제품 소개`,`제품 패널`],[`솔루션`,`솔루션 패널`],[`가격 정책`,`가격 패널`],[`고객 사례`,`고객 사례 패널`],[`리소스 센터`,`리소스 패널`],[`기술 지원`,`지원 패널`]].map(([e,t])=>({label:e,content:t})),w={basic:x(`basic`,S,{label:`프로젝트 정보`}),dynamic:x(`dynamic`,S,{classes:`tabs_line tabs_dynamic`,label:`동적 탭`}),indicator:x(`slide-line`,S,{classes:`tabs_line tabs_equal tabs_indicator-slide`,label:`슬라이드 라인 탭`})+`

`+x(`slide-pill`,[{label:`목록`,content:`필 스킨에서 배경 인디케이터가 이동합니다.`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{classes:`tabs_pill tabs_equal tabs_indicator-slide`,label:`슬라이드 필 탭`}),equal:x(`equal-line`,[...S,{label:`설정`,content:`프로젝트 설정을 관리합니다.`}],{classes:`tabs_line tabs_equal`,label:`균등 분할 탭`})+`

`+x(`equal-pill`,[`일간`,`주간`,`월간`,`연간`].map(e=>({label:e,content:`${e} 통계`})),{classes:`tabs_pill tabs_equal tabs_indicator-slide`,label:`균등 분할 필 탭`}),layoutScroll:x(`nav-scroll`,C,{classes:`tabs_line tabs_scroll-nav tabs_demo-narrow`,label:`네비 스크롤 탭`,nav:!0}),card:x(`card`,[{label:`프로필`,content:`<p>이름, 아바타, 소개 문구를 수정합니다.</p>`},{label:`보안`,content:`<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>`},{label:`알림`,content:`<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>`}],{classes:`tabs_card`,label:`계정 설정`}),pill:x(`pill`,[{label:`목록`,content:`목록 뷰 콘텐츠`},{label:`그리드`,content:`그리드 뷰 콘텐츠`},{label:`보드`,content:`보드 뷰 콘텐츠`}],{classes:`tabs_pill`,label:`보기 모드`}),size:x(`small`,[{label:`Small A`,content:`Small 탭 패널`},{label:`Small B`,content:`Small 탭 패널 B`}],{classes:`tabs_line tabs_sm`,label:`Small 탭`})+`

`+x(`large`,[{label:`Large A`,content:`Large 탭 패널`},{label:`Large B`,content:`Large 탭 패널 B`}],{classes:`tabs_line tabs_lg`,label:`Large 탭`}),icon:x(`icon`,[{label:`대시보드`,content:`대시보드 콘텐츠`,icon:`grid`},{label:`사용자`,content:`사용자 콘텐츠`,icon:`user`},{label:`문서`,content:`문서 콘텐츠`,icon:`book`}],{label:`대시보드 섹션`}),badge:x(`badge`,[{label:`전체`,content:`전체 알림 목록`},{label:`읽지 않음`,content:`읽지 않은 알림`,badge:`<span class="badge badge_count color_primary" data-component="Badge">12</span>`},{label:`중요`,content:`중요 알림`,badge:`<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 중요 알림"></span>`}],{label:`알림 센터`}),extra:x(`extra`,[{label:`내 파일`,content:`내 파일 목록`},{label:`공유됨`,content:`공유된 파일 목록`},{label:`최근`,content:`최근 파일 목록`}],{label:`파일 보기`,extra:`<button type="button" class="btn btn_filled color_primary btn_sm">새 파일</button>`}),scroll:x(`scroll`,C.map(e=>({...e,label:e.label.replace(` 소개`,``).replace(` 정책`,``).replace(` 센터`,``).replace(`기술 `,``)})),{classes:`tabs_line tabs_scrollable tabs_demo-narrow`,label:`긴 탭 목록`}),disabled:x(`disabled`,[{label:`공개`,content:`공개 콘텐츠`},{label:`팀`,content:`팀 전용 콘텐츠`},{label:`관리자`,content:`관리자 전용 콘텐츠`,disabled:!0}],{label:`권한별 탭`}),vertical:x(`vertical-line`,[{label:`일반`,content:`일반 설정 패널`},{label:`보안`,content:`보안 설정 패널`},{label:`결제`,content:`결제 설정 패널`}],{classes:`tabs_line tabs_vertical`,label:`수직 라인 탭`})+`

`+x(`vertical-card`,[{label:`문서`,content:`문서 관리 패널`},{label:`미디어`,content:`미디어 관리 패널`},{label:`아카이브`,content:`아카이브 패널`}],{classes:`tabs_card tabs_vertical`,label:`수직 카드 탭`})},T=(e,t,n=``)=>`<TabPanel label="${e}"${n?` ${n}`:``}>${t}</TabPanel>`,E=T(`개요`,`<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>`,`active`)+T(`팀`,`<p>팀 구성원과 역할을 표시합니다.</p>`)+T(`활동`,`<p>최근 활동 로그와 타임라인을 보여줍니다.</p>`),D={basic:`<Tabs ariaLabel="프로젝트 정보">${E}</Tabs>`,dynamic:`<Tabs mode="dynamic" items={[{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }]} ariaLabel="동적 탭" panel={({ value }) => <p>{value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.'}</p>} />`,indicator:`<Tabs indicator="slide" layout="equal" ariaLabel="슬라이드 라인 탭">${E}</Tabs>\n<Tabs variant="pill" indicator="slide" layout="equal" ariaLabel="슬라이드 필 탭">${T(`목록`,`필 스킨에서 배경 인디케이터가 이동합니다.`,`active`)}${T(`그리드`,`그리드 뷰 콘텐츠`)}${T(`보드`,`보드 뷰 콘텐츠`)}</Tabs>`,equal:`<Tabs layout="equal" ariaLabel="균등 분할 탭">${E}${T(`설정`,`프로젝트 설정을 관리합니다.`)}</Tabs>\n<Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">${[`일간`,`주간`,`월간`,`연간`].map((e,t)=>T(e,`${e} 통계`,t===0?`active`:``)).join(``)}</Tabs>`,layoutScroll:`<Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">${C.map((e,t)=>T(e.label,e.content,t===0?`active`:``)).join(``)}</Tabs>`,card:`<Tabs variant="card" ariaLabel="계정 설정">${T(`프로필`,`<p>이름, 아바타, 소개 문구를 수정합니다.</p>`,`active`)}${T(`보안`,`<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>`)}${T(`알림`,`<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>`)}</Tabs>`,pill:`<Tabs variant="pill" ariaLabel="보기 모드">${T(`목록`,`목록 뷰 콘텐츠`,`active`)}${T(`그리드`,`그리드 뷰 콘텐츠`)}${T(`보드`,`보드 뷰 콘텐츠`)}</Tabs>`,size:`<Tabs size="sm" ariaLabel="Small 탭">${T(`Small A`,`Small 탭 패널`,`active`)}${T(`Small B`,`Small 탭 패널 B`)}</Tabs>\n<Tabs size="lg" ariaLabel="Large 탭">${T(`Large A`,`Large 탭 패널`,`active`)}${T(`Large B`,`Large 탭 패널 B`)}</Tabs>`,icon:`<Tabs ariaLabel="대시보드 섹션">${T(`대시보드`,`대시보드 콘텐츠`,`active icon={<Icon name="grid" className="tabs_icon" />}`)}${T(`사용자`,`사용자 콘텐츠`,`icon={<Icon name="user" className="tabs_icon" />}`)}${T(`문서`,`문서 콘텐츠`,`icon={<Icon name="book" className="tabs_icon" />}`)}</Tabs>`,badge:`<Tabs ariaLabel="알림 센터">${T(`전체`,`전체 알림 목록`,`active`)}${T(`읽지 않음`,`읽지 않은 알림`,`badge={<Badge count color="primary" label="12" />}`)}${T(`중요`,`중요 알림`,`badge={<Badge dotOnly color="danger" ariaLabel="새 중요 알림" />}`)}</Tabs>`,extra:`<Tabs ariaLabel="파일 보기" extra={<Button variant="filled" color="primary" size="sm" label="새 파일" />}>${T(`내 파일`,`내 파일 목록`,`active`)}${T(`공유됨`,`공유된 파일 목록`)}${T(`최근`,`최근 파일 목록`)}</Tabs>`,scroll:`<Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">${[`홈`,`제품`,`솔루션`,`가격`,`고객 사례`,`리소스`,`지원`].map((e,t)=>T(e,`${e} 패널`,t===0?`active`:``)).join(``)}</Tabs>`,disabled:`<Tabs ariaLabel="권한별 탭">${T(`공개`,`공개 콘텐츠`,`active`)}${T(`팀`,`팀 전용 콘텐츠`)}${T(`관리자`,`관리자 전용 콘텐츠`,`disabled`)}</Tabs>`,vertical:`<Tabs vertical ariaLabel="수직 라인 탭">${T(`일반`,`일반 설정 패널`,`active`)}${T(`보안`,`보안 설정 패널`)}${T(`결제`,`결제 설정 패널`)}</Tabs>\n<Tabs vertical variant="card" ariaLabel="수직 카드 탭">${T(`문서`,`문서 관리 패널`,`active`)}${T(`미디어`,`미디어 관리 패널`)}${T(`아카이브`,`아카이브 패널`)}</Tabs>`},pe=Object.fromEntries(de.map(e=>[e,ue(e)]))})))()}function he(e){let t=e===`icon`||e===`ellipsis`,n=e===`ellipsis`,r=[`import { Breadcrumb, BreadcrumbItem${n?`, BreadcrumbEllipsis`:``} } from '@uxkm/react/breadcrumb';`,t&&`import Icon from '@uxkm/react/icon';`,n&&`import { useState } from 'react';`].filter(Boolean).join(`
`),i=[`import { Breadcrumb, BreadcrumbItem${n?`, BreadcrumbEllipsis`:``} } from '@uxkm/vue/breadcrumb';`,t&&`import Icon from '@uxkm/vue/icon';`,n&&`import { ref } from 'vue';`].filter(Boolean).join(`
`),a=e===`separator`||e===`size`?`
const items = (last) => [{ label: '홈', href: '#' }, { label: '가이드', href: '#' }, { label: last, current: true }];`:``,o=n?`${r}\n\nexport function Example() { ${ve[e]} }`:`${r}${a}\n\nexport function Example() { return <>${ve[e]}</>; }`,s=`<script setup>\n${`${i}${a}${n?`
const expanded = ref(false);`:``}`}\n<\/script>\n<template>\n${ye[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Breadcrumb.html · ${e}`,code:_e[e]},{id:`gulp`,label:`Gulp`,fileName:`breadcrumb.njk · ${e}`,code:_e[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/breadcrumb · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/breadcrumb · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/breadcrumb · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/breadcrumb · ${e}`,code:o}]}var ge,O,k,A,_e,ve,ye,be;function xe(){return(xe=e((()=>{ge=[`basic`,`separator`,`icon`,`size`,`ellipsis`,`state`],O=(e,t={})=>`<li class="breadcrumb_item${t.current?` is-current`:``}"${t.current?` aria-current="page"`:``}${t.hidden?` data-breadcrumb-hidden hidden`:``}>${t.current?`<span class="breadcrumb_current">${e}</span>`:t.disabled?`<span class="breadcrumb_link is-disabled" aria-disabled="true">${e}</span>`:`<a class="breadcrumb_link${t.icon?` breadcrumb_link-icon`:``}" href="${t.href||`#`}"${t.icon?` aria-label="홈"`:``}>${t.icon?`<svg class="icon breadcrumb_icon" data-component="Icon" data-icon="home" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"></path></svg>`:e}</a>`}</li>`,k=(e,t=``,n=`경로`)=>`<nav class="breadcrumb${t}" aria-label="${n}" data-component="Breadcrumb"><ol class="breadcrumb_list">${e}</ol></nav>`,A=e=>O(`홈`)+O(`가이드`)+O(e,{current:!0}),_e={basic:k(O(`홈`)+O(`컴포넌트`)+O(`Breadcrumb`,{current:!0})),separator:[k(A(`Chevron`),``,`경로 — chevron`),k(A(`Slash`),` breadcrumb_sep-slash`,`경로 — slash`),k(A(`Dot`),` breadcrumb_sep-dot`,`경로 — dot`)].join(`

`),icon:k(O(``,{icon:!0})+O(`설정`)+O(`계정`)+O(`프로필`,{current:!0})),size:[k(A(`Small`),` breadcrumb_sm`,`경로 — small`),k(A(`Medium`),``,`경로 — medium`),k(A(`Large`),` breadcrumb_lg`,`경로 — large`)].join(`

`),ellipsis:k(O(``,{icon:!0})+O(`제품`,{hidden:!0})+O(`디자인 시스템`,{hidden:!0})+`<li class="breadcrumb_item"><button type="button" class="breadcrumb_ellipsis" data-breadcrumb-ellipsis aria-label="숨겨진 경로 보기" aria-expanded="false">…</button></li>`+O(`컴포넌트`)+O(`Breadcrumb`,{current:!0}),``,`긴 경로`),state:[k(O(`홈`)+O(`삭제된 페이지`,{disabled:!0})+O(`현재 페이지`,{current:!0}),``,`경로 — 비활성`),k(O(`홈`)+O(`프로젝트 관리 및 협업 도구 설정`)+O(`사용자 권한 및 역할 기반 접근 제어`,{current:!0}),` breadcrumb_sep-slash`,`경로 — 긴 레이블`)].join(`

`)},ve={basic:`<Breadcrumb items={[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]} />`,separator:`<Breadcrumb ariaLabel="경로 — chevron" items={items('Chevron')} />
<Breadcrumb separator="slash" ariaLabel="경로 — slash" items={items('Slash')} />
<Breadcrumb separator="dot" ariaLabel="경로 — dot" items={items('Dot')} />`,icon:`<Breadcrumb><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,size:`<Breadcrumb size="sm" ariaLabel="경로 — small" items={items('Small')} />
<Breadcrumb ariaLabel="경로 — medium" items={items('Medium')} />
<Breadcrumb size="lg" ariaLabel="경로 — large" items={items('Large')} />`,ellipsis:`const [expanded, setExpanded] = useState(false);
return <Breadcrumb ariaLabel="긴 경로"><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem>{expanded && <><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></>}<BreadcrumbEllipsis expanded={expanded} label={expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'} onClick={() => setExpanded(!expanded)} /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>;`,state:`<Breadcrumb ariaLabel="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>
<Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`},ye={basic:`<Breadcrumb :items="[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]" />`,separator:`<Breadcrumb aria-label="경로 — chevron" :items="items('Chevron')" />
<Breadcrumb separator="slash" aria-label="경로 — slash" :items="items('Slash')" />
<Breadcrumb separator="dot" aria-label="경로 — dot" :items="items('Dot')" />`,icon:`<Breadcrumb><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,size:`<Breadcrumb size="sm" aria-label="경로 — small" :items="items('Small')" />
<Breadcrumb aria-label="경로 — medium" :items="items('Medium')" />
<Breadcrumb size="lg" aria-label="경로 — large" :items="items('Large')" />`,ellipsis:`<Breadcrumb aria-label="긴 경로"><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><template v-if="expanded"><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></template><BreadcrumbEllipsis :expanded="expanded" :label="expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'" @click="expanded = !expanded" /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>`,state:`<Breadcrumb aria-label="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>
<Breadcrumb separator="slash" aria-label="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`},be=Object.fromEntries(ge.map(e=>[e,he(e)]))})))()}function Se(e){let t=`import { useState } from 'react';\nimport Pagination from '@uxkm/react/pagination';\n\nexport function Example() { ${Ee(e)} return <>${we[e]}</>; }`,n=`<script setup>\nimport { ref } from 'vue';\nimport Pagination from '@uxkm/vue/pagination';\n${Oe(e)}\n<\/script>\n<template>\n${De[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Pagination.html · ${e}`,code:P[e]},{id:`gulp`,label:`Gulp`,fileName:`pagination.njk · ${e}`,code:P[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/pagination · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/pagination · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/pagination · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/pagination · ${e}`,code:t}]}var Ce,j,M,N,P,we,Te,Ee,De,Oe,ke;function Ae(){return(Ae=e((()=>{Ce=[`basic`,`minimal`,`size`,`round`,`ellipsis`,`simple`,`toolbar`,`align`,`state`],j=e=>`<svg class="icon icon_sm pagination_icon" data-component="Icon" data-icon="chevron-${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`left`?`m15 6-6 6 6 6`:`m9 6 6 6-6 6`}"></path></svg>`,M=(e,t,n,r=``)=>`<nav class="pagination${r}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${e}" data-total="${t}" data-page-size="${n}"><ul class="pagination_list" data-pagination-list><li class="pagination_item"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${j(`left`)}</button></li><li class="pagination_item" data-pagination-next-item><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${j(`right`)}</button></li></ul></nav>`,N=(e,t,n,r=``)=>`<nav class="pagination pagination_simple${r}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${e}" data-total="${t}" data-page-size="${n}"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${j(`left`)}</button><span class="pagination_simple-text" aria-live="polite"><span class="pagination_simple-current">${e}</span> / <span class="pagination_simple-total">${Math.ceil(t/n)}</span></span><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${j(`right`)}</button></nav>`,P={basic:M(1,50,10),minimal:M(4,50,10,` pagination_minimal`),size:[M(1,20,10,` pagination_sm`),M(1,20,10),M(1,20,10,` pagination_lg`)].join(`

`),round:M(7,80,10,` pagination_round`),ellipsis:M(10,500,10),simple:[N(3,120,10),N(1,120,10,` pagination_minimal`)].join(`

`),toolbar:`<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end">${M(5,128,10,` pagination_minimal`)}<label class="pagination_jumper">이동<input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지">페이지</label></div></div>`,align:[M(1,20,10),M(1,20,10,` pagination_align-center`),M(1,20,10,` pagination_align-end`)].join(`

`),state:[M(1,30,10),M(10,100,10)].join(`

`)},we={basic:`<Pagination current={current} total={50} pageSize={10} onChange={setCurrent} />`,minimal:`<Pagination current={current} total={50} pageSize={10} minimal onChange={setCurrent} />`,size:`<Pagination current={small} total={20} pageSize={10} size="sm" onChange={setSmall} />
<Pagination current={medium} total={20} pageSize={10} onChange={setMedium} />
<Pagination current={large} total={20} pageSize={10} size="lg" onChange={setLarge} />`,round:`<Pagination current={current} total={80} pageSize={10} round onChange={setCurrent} />`,ellipsis:`<Pagination current={current} total={500} pageSize={10} onChange={setCurrent} />`,simple:`<Pagination simple current={current} total={120} pageSize={10} onChange={setCurrent} />
<Pagination simple minimal current={minimal} total={120} pageSize={10} onChange={setMinimal} />`,toolbar:`<div className="pagination_wrap"><span className="pagination_total">총 128건</span><div className="pagination_wrap-end"><Pagination current={current} total={128} pageSize={10} minimal onChange={setCurrent} /><label className="pagination_jumper">이동<input type="number" className="pagination_jumper-input" value={current} min={1} max={13} aria-label="이동할 페이지" onChange={(event) => setCurrent(Math.min(13, Math.max(1, Number(event.target.value))))} />페이지</label></div></div>`,align:`<Pagination current={start} total={20} pageSize={10} onChange={setStart} />
<Pagination current={center} total={20} pageSize={10} className="pagination_align-center" onChange={setCenter} />
<Pagination current={end} total={20} pageSize={10} className="pagination_align-end" onChange={setEnd} />`,state:`<Pagination current={first} total={30} pageSize={10} onChange={setFirst} />
<Pagination current={last} total={100} pageSize={10} onChange={setLast} />`},Te={basic:`1`,minimal:`4`,size:`1`,round:`7`,ellipsis:`10`,simple:`3`,toolbar:`5`,align:`1`,state:`1`},Ee=e=>e===`size`?`const [small, setSmall] = useState(1); const [medium, setMedium] = useState(1); const [large, setLarge] = useState(1);`:e===`simple`?`const [current, setCurrent] = useState(3); const [minimal, setMinimal] = useState(1);`:e===`align`?`const [start, setStart] = useState(1); const [center, setCenter] = useState(1); const [end, setEnd] = useState(1);`:e===`state`?`const [first, setFirst] = useState(1); const [last, setLast] = useState(10);`:`const [current, setCurrent] = useState(${Te[e]});`,De={basic:`<Pagination v-model:current="current" :total="50" :page-size="10" />`,minimal:`<Pagination v-model:current="current" :total="50" :page-size="10" minimal />`,size:`<Pagination v-model:current="small" :total="20" :page-size="10" size="sm" />
<Pagination v-model:current="medium" :total="20" :page-size="10" />
<Pagination v-model:current="large" :total="20" :page-size="10" size="lg" />`,round:`<Pagination v-model:current="current" :total="80" :page-size="10" round />`,ellipsis:`<Pagination v-model:current="current" :total="500" :page-size="10" />`,simple:`<Pagination v-model:current="current" simple :total="120" :page-size="10" />
<Pagination v-model:current="minimalPage" simple minimal :total="120" :page-size="10" />`,toolbar:`<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end"><Pagination v-model:current="current" :total="128" :page-size="10" minimal /><label class="pagination_jumper">이동<input v-model.number="current" type="number" class="pagination_jumper-input" min="1" max="13" aria-label="이동할 페이지" />페이지</label></div></div>`,align:`<Pagination v-model:current="start" :total="20" :page-size="10" />
<Pagination v-model:current="center" :total="20" :page-size="10" class="pagination_align-center" />
<Pagination v-model:current="end" :total="20" :page-size="10" class="pagination_align-end" />`,state:`<Pagination v-model:current="first" :total="30" :page-size="10" />
<Pagination v-model:current="last" :total="100" :page-size="10" />`},Oe=e=>e===`size`?`const small = ref(1); const medium = ref(1); const large = ref(1);`:e===`simple`?`const current = ref(3); const minimalPage = ref(1);`:e===`align`?`const start = ref(1); const center = ref(1); const end = ref(1);`:e===`state`?`const first = ref(1); const last = ref(10);`:`const current = ref(${Te[e]});`,ke=Object.fromEntries(Ce.map(e=>[e,Se(e)]))})))()}function je(e){let t=e===`icon`,n=e===`navigable`,r=`${n?`import { useState } from 'react';
`:``}import { Steps, StepsItem } from '@uxkm/react/steps';${t?`
import Icon from '@uxkm/react/icon';`:``}\n\nexport function Example() { ${n?`const [current, setCurrent] = useState(2); `:``}return <>${H[e]}</>; }`,i=`<script setup>\n${n?`import { ref } from 'vue';
`:``}import { Steps, StepsItem } from '@uxkm/vue/steps';${t?`
import Icon from '@uxkm/vue/icon';`:``}${n?`
const current = ref(2);`:``}\n<\/script>\n<template>\n${U[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Steps.html · ${e}`,code:z[e]},{id:`gulp`,label:`Gulp`,fileName:`steps.njk · ${e}`,code:z[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/steps · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/steps · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/steps · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/steps · ${e}`,code:r}]}var F,I,L,R,z,B,V,Me,H,Ne,U,Pe;function Fe(){return(Fe=e((()=>{F=[`basic`,`simple`,`vertical`,`dot`,`icon`,`navigable`,`error`,`align`,`size`,`state`],I={basic:[[`장바구니`,`상품 확인`,`finished`],[`배송 정보`,`주소 입력`,`finished`],[`결제`,`결제 수단 선택`,`active`],[`완료`,`주문 확인`,`wait`]],simple:[[`이메일 인증`,``,`finished`],[`프로필 설정`,``,`active`],[`완료`,``,`wait`]],vertical:[[`기본 정보`,`프로젝트 이름과 설명을 입력합니다.`,`finished`],[`팀 구성`,`멤버를 초대하고 역할을 지정합니다.`,`active`],[`저장소 연결`,`Git 저장소를 연동합니다.`,`wait`],[`검토 및 생성`,`설정을 확인하고 프로젝트를 만듭니다.`,`wait`]],dot:[[`주문 접수`,`6월 20일 09:12`,`finished`],[`배송 준비`,`6월 20일 14:30`,`finished`],[`배송 중`,`예상 도착 6월 21일`,`active`],[`배송 완료`,`대기 중`,`wait`]],icon:[[`계정 생성`,`이메일 인증 완료`,`finished`,`user`],[`팀 초대`,`동료를 초대하세요`,`active`,`mail`],[`첫 프로젝트`,`프로젝트를 만드세요`,`wait`,`grid`]],navigable:[[`환경`,`개발 · 스테이징`,`finished`],[`알림`,`수신 채널 설정`,`active`],[`확인`,`설정 검토`,`wait`]],error:[[`주문 확인`,`상품 및 수량 확인`,`finished`],[`결제 실패`,`카드 승인이 거절되었습니다`,`error`],[`완료`,`주문 접수`,`wait`]],align:[[`기획`,`요구사항 정의`,`finished`],[`개발`,`기능 구현`,`finished`],[`QA`,`품질 검증`,`active`],[`출시`,`프로덕션 배포`,`wait`]],size:[[`1단계`,``,`finished`],[`2단계`,``,`active`],[`3단계`,``,`wait`]],state:[[`is-finished`,`완료된 단계`,`finished`],[`is-active`,`현재 진행 단계`,`active`],[`is-wait`,`아직 도달하지 않은 단계`,`wait`],[`is-error`,`오류가 발생한 단계`,`error`]]},L=e=>`<svg class="icon steps_icon" data-component="Icon" data-icon="${e}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${e===`check`?`m5 12 4 4L19 6`:e===`close`?`m6 6 12 12M18 6 6 18`:e===`user`?`M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 21a8 8 0 0 1 16 0`:e===`mail`?`M3 5h18v14H3zM3 7l9 6 9-6`:`M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z`}"></path></svg>`,R=(e,t=``,n=`진행 단계`,r=!1)=>`<ol class="steps${t}${r?` steps_navigable`:``}" aria-label="${n}" data-component="Steps" data-steps>${e.map(([t,n,i,a],o)=>{let s=`<span class="steps_head"><span class="steps_indicator" aria-hidden="true">${a?L(a):i===`finished`?L(`check`):i===`error`?L(`close`):`<span class="steps_index">${o+1}</span>`}</span>${o<e.length-1?`<span class="steps_tail" aria-hidden="true"></span>`:``}</span>`,c=`<span class="steps_content"><span class="steps_title">${t}</span>${n?`<span class="steps_desc">${n}</span>`:``}</span>`;return`<li class="steps_item is-${i}" data-step-index="${o+1}"${i===`active`&&!r?` aria-current="step"`:``}>${r?`<button type="button" class="steps_trigger"${i===`wait`?` disabled`:``}${i===`active`?` aria-current="step"`:``}>${s}${c}</button>`:`${s}${c}`}</li>`}).join(``)}</ol>`,z={basic:R(I.basic,``,`주문 진행 단계`),simple:R(I.simple,``,`회원가입 단계`),vertical:R(I.vertical,` steps_vertical steps_demo-narrow`,`프로젝트 생성 단계`),dot:R(I.dot,` steps_dot`,`배송 추적 단계`),icon:R(I.icon,` steps_icon-style`,`온보딩 단계`),navigable:R(I.navigable,``,`설정 마법사 — 탐색 가능`,!0),error:R(I.error,``,`결제 단계 — 오류`),align:R(I.align,` steps_align-center`,`출시 단계`),size:`${R(I.size,` steps_sm`,`Small 단계`)}\n${R([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]],` steps_lg`,`Large 단계`)}`,state:I.state.map(e=>R([e],``,`상태 예시 — ${e[0]}`)).join(`
`)},B=(e,t=!1)=>e.map(([e,n,r,i])=>`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}"${t&&i?` icon={<Icon name="${i}" className="steps_icon" />}`:``} />`).join(``),V=(e,t=!1)=>e.map(([e,n,r,i])=>t&&i?`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}"><template #icon><Icon name="${i}" class="steps_icon" /></template></StepsItem>`:`<StepsItem title="${e}"${n?` description="${n}"`:``} status="${r}" />`).join(``),Me={basic:`ariaLabel="주문 진행 단계"`,simple:`ariaLabel="회원가입 단계"`,vertical:`direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계"`,dot:`dot ariaLabel="배송 추적 단계"`,icon:`iconStyle ariaLabel="온보딩 단계"`,navigable:`current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"`,error:`ariaLabel="결제 단계 — 오류"`,align:`align="center" ariaLabel="출시 단계"`,size:`size="sm" ariaLabel="Small 단계"`,state:`ariaLabel="상태 요약"`},H=Object.fromEntries(F.map(e=>[e,`<Steps ${Me[e]}>${B(I[e],e===`icon`)}</Steps>`])),H.navigable=`<Steps current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`,H.size=`<Steps size="sm" ariaLabel="Small 단계">${B(I.size)}</Steps>\n<Steps size="lg" ariaLabel="Large 단계">${B([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]])}</Steps>`,H.state=I.state.map(e=>`<Steps ariaLabel="상태 예시 — ${e[0]}">${B([e])}</Steps>`).join(`
`),Ne=e=>e.replaceAll(`ariaLabel=`,`aria-label=`).replaceAll(`className=`,`class=`).replace(`iconStyle`,`icon-style`),U=Object.fromEntries(F.map(e=>[e,`<Steps ${Ne(Me[e].replace(`current={current} navigable onChange={setCurrent}`,`v-model:current="current" navigable`))}>${V(I[e],e===`icon`)}</Steps>`])),U.navigable=`<Steps v-model:current="current" navigable aria-label="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`,U.size=`<Steps size="sm" aria-label="Small 단계">${V(I.size)}</Steps>\n<Steps size="lg" aria-label="Large 단계">${V([[`요구사항`,`범위 및 일정 확정`,`finished`],[`디자인`,`UI 키트 제작`,`active`],[`개발`,`구현 및 테스트`,`wait`]])}</Steps>`,U.state=I.state.map(e=>`<Steps aria-label="상태 예시 — ${e[0]}">${V([e])}</Steps>`).join(`
`),Pe=Object.fromEntries(F.map(e=>[e,je(e)]))})))()}function Ie(e){let t=e===`select`,n=`${t?`import { useState } from 'react';
`:``}import Dropdown from '@uxkm/react/dropdown';\nimport Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\nimport { Menu, MenuItem, MenuGroup, MenuDivider } from '@uxkm/react/menu';${e===`example`?`
import Avatar from '@uxkm/react/avatar';
import Badge from '@uxkm/react/badge';`:``}\n\nexport function Example(){ ${t?`const [region,setRegion]=useState('서울특별시'); const [sort,setSort]=useState('최신순'); `:``}return <>${ze[e]}</>; }`,r=`<script setup>\n${t?`import { ref } from 'vue';
`:``}import Dropdown from '@uxkm/vue/dropdown';\nimport Button from '@uxkm/vue/button';\nimport Icon from '@uxkm/vue/icon';\nimport { Menu, MenuItem, MenuGroup, MenuDivider } from '@uxkm/vue/menu';${e===`example`?`
import Avatar from '@uxkm/vue/avatar';
import Badge from '@uxkm/vue/badge';`:``}${t?`
const region=ref('서울특별시'); const sort=ref('최신순');`:``}\n<\/script>\n<template>\n${Be[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Dropdown.html · ${e}`,code:K[e]},{id:`gulp`,label:`Gulp`,fileName:`dropdown.njk · ${e}`,code:K[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/dropdown · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/dropdown · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/dropdown · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/dropdown · ${e}`,code:n}]}var Le,W,Re,G,K,q,J,ze,Y,X,Be,Ve;function He(){return(He=e((()=>{Le=[`basic`,`open`,`trigger`,`select`,`placement`,`menu`,`scroll`,`disabled`,`example`],W=(e,t=``)=>`<nav class="menu menu_vertical menu_compact" aria-label="메뉴"><ul class="menu_list">${e.map(e=>`<li class="menu_item"><button type="button" class="menu_link${e===t?` is-active`:``}"${e===t?` aria-current="page"`:``}><span class="menu_label">${e}</span></button></li>`).join(``)}</ul></nav>`,Re=`<svg class="icon" data-component="Icon" data-icon="chevron-down" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>`,G=(e,t,n={})=>`<div class="dropdown${n.classes||``}" data-component="Dropdown" data-dropdown><button type="button" class="btn ${n.trigger||`btn_outline color_default`} dropdown_trigger" aria-haspopup="menu" aria-expanded="${n.classes?.includes(`is-open`)?`true`:`false`}"${n.disabled?` disabled`:``}><span class="btn_label">${e}</span>${Re}</button><div class="dropdown_menu${n.style?` dropdown_menu-scrollable`:``}" role="menu" aria-hidden="${n.classes?.includes(`is-open`)?`false`:`true`}"${n.style?` style="${n.style}"`:``}>${t}</div></div>`,K={basic:G(`작업`,W([`복사`,`이동`,`공유`])),open:G(`카테고리`,W([`전체`,`디자인`,`개발`,`마케팅`],`전체`),{classes:` is-open`,trigger:`btn_filled color_primary`}),trigger:[G(`Filled`,W([`항목 1`,`항목 2`]),{trigger:`btn_filled color_primary`}),G(`Outline`,W([`항목 1`,`항목 2`])),G(`Ghost`,W([`항목 1`,`항목 2`]),{trigger:`btn_ghost color_default`}),G(`Text`,W([`항목 1`,`항목 2`]),{trigger:`btn_text color_primary`}),G(`더보기`,W([`편집`,`복제`,`삭제`]),{trigger:`btn_ghost color_default btn_icon-only`})].join(`
`),select:`${G(`서울특별시`,W([`서울특별시`,`부산광역시`,`대구광역시`],`서울특별시`),{classes:` dropdown_fit`,trigger:`btn_select color_default`})}\n${G(`최신순`,W([`최신순`,`인기순`,`가격 낮은순`],`최신순`),{trigger:`btn_select btn_select-text color_default`})}`,placement:`${G(`왼쪽 정렬`,W([`항목 A`,`항목 B`]))}\n${G(`오른쪽 정렬`,W([`항목 A`,`항목 B`]),{classes:` dropdown_placement-end`})}\n${G(`위로 열기`,W([`위쪽 패널`,`항목 2`]),{classes:` dropdown_placement-top`})}`,menu:G(`계정`,`<nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴"><ul class="menu_list"><li class="menu_group"><span class="menu_group-title">계정</span></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">프로필</span></button></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">보안</span></button></li><li class="menu_divider" role="separator"></li><li class="menu_item"><button class="menu_link color_danger" type="button"><span class="menu_label">로그아웃</span></button></li></ul></nav>`,{classes:` is-open`}),scroll:`${G(`도시 선택`,W([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`]),{classes:` is-open`,style:`--dropdown-max-visible-items: 4;`})}\n${G(`넓은 패널`,W([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),{classes:` is-open`,style:`--dropdown-max-visible-items: 4; width: 18rem;`})}`,disabled:`${G(`비활성 드롭다운`,W([`항목`]),{classes:` is-disabled`,disabled:!0})}\n${G(`일부 비활성`,`<nav class="menu menu_vertical menu_compact"><ul class="menu_list"><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">조회</span></button></li><li class="menu_item"><button class="menu_link" type="button"><span class="menu_label">편집</span></button></li><li class="menu_item is-disabled"><span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">삭제</span></span></li><li class="menu_item is-disabled"><span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">관리자 설정</span></span></li></ul></nav>`,{classes:` is-open`})}`,example:`<div class="dropdown_demo-toolbar"><button type="button" class="btn btn_ghost color_default btn_sm"><span class="btn_label">알림 <span class="badge badge_count badge_sm color_danger" data-component="Badge">2</span></span></button>${G(`김가이드`,W([`내 프로필`,`내 문서`,`로그아웃`]),{classes:` dropdown_placement-end`,trigger:`btn_ghost color_default btn_sm`})}</div>`},q=(e,t=``)=>`<Menu compact>${e.map(e=>`<MenuItem label="${e}"${e===t?` active`:``} />`).join(``)}</Menu>`,J=(e,t,n=``,r=`variant="outline"`)=>`<Dropdown ${n} triggerContent={<Button ${r} label="${e}" iconAfter={<Icon name="chevron-down" />} />}>${t}</Dropdown>`,ze={basic:J(`작업`,q([`복사`,`이동`,`공유`])),open:J(`카테고리`,q([`전체`,`디자인`,`개발`,`마케팅`],`전체`),`open`,`variant="filled" color="primary"`),trigger:[J(`Filled`,q([`항목 1`,`항목 2`]),``,`variant="filled" color="primary"`),J(`Outline`,q([`항목 1`,`항목 2`])),J(`Ghost`,q([`항목 1`,`항목 2`]),``,`variant="ghost"`),J(`Text`,q([`항목 1`,`항목 2`]),``,`variant="text" color="primary"`),`<Dropdown triggerContent={<Button variant="ghost" iconOnly ariaLabel="더보기" iconBefore={<Icon name="menu" />} />}>${q([`편집`,`복제`,`삭제`])}</Dropdown>`].join(`
`),select:`<Dropdown fit onSelect={setRegion} triggerContent={<Button variant="select" label={region} />}>${q([`서울특별시`,`부산광역시`,`대구광역시`])}</Dropdown>\n<Dropdown onSelect={setSort} triggerContent={<Button variant="select" selectText label={sort} />}>${q([`최신순`,`인기순`,`가격 낮은순`])}</Dropdown>`,placement:`${J(`왼쪽 정렬`,q([`항목 A`,`항목 B`]))}\n${J(`오른쪽 정렬`,q([`항목 A`,`항목 B`]),`placement="end"`)}\n${J(`위로 열기`,q([`위쪽 패널`,`항목 2`]),`placement="top"`,`variant="ghost"`)}`,menu:`<Dropdown open triggerContent={<Button variant="outline" label="계정" iconAfter={<Icon name="chevron-down" />} />}><Menu compact><MenuGroup title="계정" /><MenuItem label="프로필" icon={<Icon name="user" className="menu_icon" />} /><MenuItem label="보안" icon={<Icon name="settings" className="menu_icon" />} /><MenuDivider /><MenuItem label="로그아웃" color="danger" /></Menu></Dropdown>`,scroll:`${J(`도시 선택`,q([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`]),`open maxVisibleItems={4}`)}\n${J(`넓은 패널`,q([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),`open maxVisibleItems={4} menuWidth={18}`)}`,disabled:`${J(`비활성 드롭다운`,q([`항목`]),`disabled`,`variant="outline" disabled`)}\n<Dropdown open triggerContent={<Button variant="outline" label="일부 비활성" /> }><Menu compact><MenuItem label="조회" /><MenuItem label="편집" /><MenuItem label="삭제" disabled /><MenuItem label="관리자 설정" disabled /></Menu></Dropdown>`,example:`<div className="dropdown_demo-toolbar"><Button variant="ghost" size="sm" iconBefore={<Icon name="bell" />}>알림 <Badge count size="sm" color="danger" label="2" /></Button><Dropdown placement="end" triggerContent={<Button variant="ghost" size="sm" iconAfter={<Icon name="chevron-down" />}><Avatar size="sm" color="primary" initials="김" ariaHidden /> 김가이드</Button>}>${q([`내 프로필`,`내 문서`,`로그아웃`])}</Dropdown></div>`},Y=(e,t=``)=>`<Menu compact>${e.map(e=>`<MenuItem label="${e}"${e===t?` active`:``} />`).join(``)}</Menu>`,X=(e,t,n=``,r=`variant="outline"`)=>`<Dropdown ${n}><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" ${r} label="${e}"><template #icon-after><Icon name="chevron-down" /></template></Button></template>${t}</Dropdown>`,Be={basic:X(`작업`,Y([`복사`,`이동`,`공유`])),open:X(`카테고리`,Y([`전체`,`디자인`,`개발`,`마케팅`],`전체`),`open`,`variant="filled" color="primary"`),trigger:[X(`Filled`,Y([`항목 1`,`항목 2`]),``,`variant="filled" color="primary"`),X(`Outline`,Y([`항목 1`,`항목 2`])),X(`Ghost`,Y([`항목 1`,`항목 2`]),``,`variant="ghost"`),X(`Text`,Y([`항목 1`,`항목 2`]),``,`variant="text" color="primary"`),`<Dropdown><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="ghost" icon-only aria-label="더보기"><template #icon-before><Icon name="menu" /></template></Button></template>${Y([`편집`,`복제`,`삭제`])}</Dropdown>`].join(`
`),select:`<Dropdown fit @select="region = $event"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="select" :label="region" /></template>${Y([`서울특별시`,`부산광역시`,`대구광역시`])}</Dropdown>\n<Dropdown @select="sort = $event"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="select" select-text :label="sort" /></template>${Y([`최신순`,`인기순`,`가격 낮은순`])}</Dropdown>`,placement:`${X(`왼쪽 정렬`,Y([`항목 A`,`항목 B`]))}\n${X(`오른쪽 정렬`,Y([`항목 A`,`항목 B`]),`placement="end"`)}\n${X(`위로 열기`,Y([`위쪽 패널`,`항목 2`]),`placement="top"`,`variant="ghost"`)}`,menu:`<Dropdown open><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" label="계정"><template #icon-after><Icon name="chevron-down" /></template></Button></template><Menu compact><MenuGroup title="계정" /><MenuItem label="프로필"><template #icon><Icon name="user" class="menu_icon" /></template></MenuItem><MenuItem label="보안"><template #icon><Icon name="settings" class="menu_icon" /></template></MenuItem><MenuDivider /><MenuItem label="로그아웃" color="danger" /></Menu></Dropdown>`,scroll:`${X(`도시 선택`,Y([`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`]),`open :max-visible-items="4"`)}\n${X(`넓은 패널`,Y([`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`]),`open :max-visible-items="4" :menu-width="18"`)}`,disabled:`${X(`비활성 드롭다운`,Y([`항목`]),`disabled`,`variant="outline" disabled`)}\n<Dropdown open><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" label="일부 비활성" /></template><Menu compact><MenuItem label="조회" /><MenuItem label="편집" /><MenuItem label="삭제" disabled /><MenuItem label="관리자 설정" disabled /></Menu></Dropdown>`,example:`<div class="dropdown_demo-toolbar"><Button variant="ghost" size="sm"><template #icon-before><Icon name="bell" /></template>알림 <Badge count size="sm" color="danger" label="2" /></Button><Dropdown placement="end"><template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="ghost" size="sm"><Avatar size="sm" color="primary" initials="김" aria-hidden /> 김가이드<template #icon-after><Icon name="chevron-down" /></template></Button></template>${Y([`내 프로필`,`내 문서`,`로그아웃`])}</Dropdown></div>`},Ve=Object.fromEntries(Le.map(e=>[e,Ie(e)]))})))()}var Ue;function We(){return(We=e((()=>{Ue=`<!-- Navbar 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`{# Navbar 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# navbar 클래스에 크기·테마·고정·반응형 변형과 브랜드·토글·접힘 영역을 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<header
  class="navbar{% if size == 'sm' or size == 'lg' %} navbar_{{ size }}{% endif %}{% if borderless %} navbar_borderless{% endif %}{% if dark %} navbar_dark{% endif %}{% if sticky %} navbar_sticky{% endif %}"
  data-component="Navbar"{% if responsive %}
  data-navbar{% endif %}
>
  <div class="navbar_container">
    {# 브랜드 영역은 사이트 식별용 링크입니다. #}
    <a href="#" class="navbar_brand"
      >{% if brandIcon %}{{ brandIcon | safe }}{% endif %}{{ brand | default('UXKM') }}</a
    >
    {# 반응형일 때만 접힘 메뉴 토글 버튼을 렌더합니다. #}
    {% if responsive %}<button
      type="button"
      class="btn btn_ghost btn_icon-only navbar_toggle"
      data-navbar-toggle
      aria-expanded="false"
      aria-controls="{{ collapseId | default('navbar-collapse') }}"
      aria-label="메뉴 열기"
    >
      {{ icon('menu', 'icon_sm navbar_toggle-icon-open') }}{{ icon('close', 'icon_sm navbar_toggle-icon-close') }}</button
    >{% endif %}
    {# 접힘 영역에 주요 메뉴, 검색, 액션을 배치합니다. #}
    <div class="navbar_collapse" id="{{ collapseId | default('navbar-collapse') }}">
      <nav class="navbar_nav" aria-label="주요 메뉴">{{ items | safe }}</nav>
      {% if search %}
      <div class="navbar_search">{{ search | safe }}</div>
      {% endif %}{% if actions %}
      <div class="navbar_actions">{{ actions | safe }}</div>
      {% endif %}
    </div>
  </div>
</header>
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`/**
 * Navbar 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 Navbar 크기입니다.

export function Navbar({
  brand, // 브랜드 영역에 표시할 기본 텍스트입니다.
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
  // ariaLabel, brand 문자열, 기본값을 순서로 접근 가능한 이름을 결정합니다.
  const accessibleName = ariaLabel || (typeof brand === 'string' && brand) || '사이트';

  return (
    <header
      {...props}
      className={classes}
      aria-label={props.role === 'presentation' ? undefined : accessibleName}
      data-component="Navbar"
      data-navbar={responsive || undefined}
    >
      <div className="navbar_container">
        <a href="#" className="navbar_brand" onClick={(event) => event.preventDefault()}>
          {brandContent ?? (
            <>
              {brandIcon}
              {brand}
            </>
          )}
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
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`/**
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
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`/**
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
`})))()}var $e;function et(){return(et=e((()=>{$e=`<!--
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
      <a href="#" class="navbar_brand" @click.prevent
        ><slot name="brand"><slot name="brand-icon" />{{ brand }}</slot></a
      >
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
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`<!--
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
`})))()}var rt;function it(){return(it=e((()=>{rt=`<!--
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
`})))()}var at;function ot(){return(ot=e((()=>{at=`<!-- Menu 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var st;function ct(){return(ct=e((()=>{st=`{# Menu 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# menu 클래스에 배치·테두리·밀집·어두운 변형과 선택 가능 속성(data-menu-selectable)을 함께 둡니다. #}
<nav
  class="menu menu_{{ mode | default('vertical') }}{% if bordered %} menu_bordered{% endif %}{% if compact %} menu_compact{% endif %}{% if dark %} menu_dark{% endif %}"
  data-component="Menu"
  data-menu-selectable
  aria-label="{{ ariaLabel | default('메뉴') }}"
>
  {# 메뉴 항목·서브메뉴·구분선 HTML을 목록에 주입합니다. #}
  <ul class="menu_list">
    {{ items | safe }}
  </ul>
</nav>
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`/**
 * Menu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
const modes = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 메뉴 배치 모드입니다.

export function Menu({
  mode = 'vertical', // 메뉴의 배치 방향을 지정합니다.
  bordered = false, // 외곽 테두리를 표시할지 여부입니다.
  compact = false, // 항목 간격을 줄인 밀집 레이아웃인지 여부입니다.
  dark = false, // 어두운 배경 테마를 적용할지 여부입니다.
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
  function handleClick(event) {
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
    onClick?.(event);
  }

  return (
    <nav
      {...props}
      className={classes}
      data-component="Menu"
      data-menu-selectable
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <ul className="menu_list">{children}</ul>
    </nav>
  );
}

export default Menu;
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`/**
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
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`/**
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
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`/**
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
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`/**
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
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`<!--
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
function selectItem(event) {
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
    data-menu-selectable
    :aria-label="ariaLabel"
    @click="selectItem"
  >
    <ul class="menu_list">
      <slot />
    </ul>
  </nav>
</template>
`})))()}var xt;function St(){return(St=e((()=>{xt=`<!--
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
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`<!--
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
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`<!--
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
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`<!--
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
`})))()}var kt;function At(){return(At=e((()=>{kt=`<!-- Tabs 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`{# Tabs 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# tabs 클래스에 변형·크기·레이아웃·인디케이터와 탭 목록·패널을 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<div
  class="tabs tabs_{{ variant | default('line') }}{% if size == 'sm' or size == 'lg' %} tabs_{{ size }}{% endif %}{% if layout == 'equal' %} tabs_equal{% endif %}{% if layout == 'scroll' and not vertical %} tabs_scroll-nav{% endif %}{% if vertical %} tabs_vertical{% endif %}{% if scrollable and layout != 'scroll' %} tabs_scrollable{% endif %}{% if indicator == 'slide' %} tabs_indicator-slide{% endif %}"
  data-component="Tabs"
  data-tabs
>
  <div class="tabs_bar">
    {# 스크롤 레이아웃일 때만 이전·다음 내비게이션 버튼을 둡니다. #}
    {% if layout == 'scroll' and not vertical %}<button
      type="button"
      class="btn btn_outline color_default btn_sm btn_icon-only tabs_nav tabs_nav_prev"
      data-tabs-scroll="prev"
      aria-label="이전 탭"
      hidden
    >
      {{ icon('arrow-left') }}</button
    >{% endif %}
    <div class="tabs_list-wrap{% if layout == 'scroll' and not vertical %} tabs_scroll-viewport{% endif %}">
      {# role=tablist 안에 탭 버튼과 선택적 슬라이드 인디케이터를 둡니다. #}
      <div
        class="tabs_list"
        role="tablist"
        aria-label="{{ ariaLabel | default('탭') }}"
        aria-orientation="{% if vertical %}vertical{% else %}horizontal{% endif %}"
      >
        {% if indicator == 'slide' %}<span class="tabs_indicator" aria-hidden="true"></span
        >{% endif %}{{ tabs | safe }}
      </div>
    </div>
    {% if layout == 'scroll' and not vertical %}<button
      type="button"
      class="btn btn_outline color_default btn_sm btn_icon-only tabs_nav tabs_nav_next"
      data-tabs-scroll="next"
      aria-label="다음 탭"
      hidden
    >
      {{ icon('chevron') }}</button
    >{% endif %}{% if extra %}
    <div class="tabs_extra">{{ extra | safe }}</div>
    {% endif %}
  </div>
  {# 각 탭에 대응하는 패널 콘텐츠를 배치합니다. #}
  <div class="tabs_panels">{{ panels | safe }}</div>
</div>
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`/**
 * Tabs 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import {
  Children,
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
  const scrollTabIntoView = (key) => {
    const list = listRef.current;
    const index = source.findIndex((item) => item.key === key);
    const tab = index < 0 ? null : document.getElementById(\`\${uid}-tab-\${index}\`);
    if (!scrollNav || !list || !tab) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    const max = list.scrollWidth - list.clientWidth;
    list.scrollTo({
      left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)),
      behavior: 'smooth',
    });
  };

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

  // 방향키·Home·End로 활성 가능 탭 사이를 이동합니다.
  const keyDown = (event, index) => {
    const enabled = source
      .map((item, itemIndex) => ({ ...item, itemIndex }))
      .filter((item) => !item.disabled);
    const current = enabled.findIndex((item) => item.itemIndex === index);
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
        return (
          <Button
            key={item.key}
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
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`/**
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
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`/**
 * TabPanel 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabPanel() {
  // Tabs가 children을 읽어 패널로 구성하므로 자체 DOM은 렌더하지 않습니다.
  return null;
}
TabPanel.tabsType = 'panel'; // Tabs가 패널형 자식으로 구분할 때 사용합니다.
export default TabPanel;
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`/**
 * TabMenu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabMenu() {
  // Tabs가 children을 읽어 메뉴형으로 구성하므로 자체 DOM은 렌더하지 않습니다.
  return null;
}
TabMenu.tabsType = 'menu'; // Tabs가 메뉴형 자식으로 구분할 때 사용합니다.
export default TabMenu;
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`<!--
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
});
const emit = defineEmits(['update:modelValue']); // 선택 탭이 바뀔 때 부모로 전달합니다.

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
  if (!scrollNav.value || !list || !element) return;
  const listRect = list.getBoundingClientRect();
  const tabRect = element.getBoundingClientRect();
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

// 방향키·Home·End로 활성 가능 탭 사이를 이동합니다.
function keydown(event, index) {
  const enabled = tabs.value
    .map((tab, itemIndex) => ({ ...tab, itemIndex }))
    .filter((tab) => !tab.disabled);
  const current = enabled.findIndex((tab) => tab.itemIndex === index);
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
          /><Button
            v-for="(tab, index) in tabs"
            :id="tab.id"
            :key="tab.key"
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
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`<!--
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
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`<!--
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
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`<!--
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
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`<!-- Breadcrumb 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`{# Breadcrumb 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# breadcrumb 클래스에 구분 기호·크기 변형과 경로 항목 목록을 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<nav
  class="breadcrumb{% if separator == 'slash' or separator == 'dot' %} breadcrumb_sep-{{ separator }}{% endif %}{% if size == 'sm' or size == 'lg' %} breadcrumb_{{ size }}{% endif %}"
  aria-label="{{ ariaLabel | default('경로') }}"
  data-component="Breadcrumb"
>
  <ol class="breadcrumb_list">
    {# 항목은 링크·현재·비활성·말줄임 중 하나로 렌더합니다. #}
    {% for item in items %}
    <li
      class="breadcrumb_item{% if item.current or (loop.last and item.current != false) %} is-current{% endif %}"{% if item.current or (loop.last and item.current != false) %}
      aria-current="page"{% endif %}{% if item.hidden %}
      data-breadcrumb-hidden
      hidden{% endif %}
    >
      {% if item.ellipsis %}<button
        type="button"
        class="breadcrumb_ellipsis"
        data-breadcrumb-ellipsis
        aria-label="숨겨진 경로 보기"
        aria-expanded="false"
      >
        …</button
      >{% elif item.current or (loop.last and item.current != false) %}<span class="breadcrumb_current"
        >{{ item.label }}</span
      >{% elif item.disabled %}<span class="breadcrumb_link is-disabled" aria-disabled="true"
        >{{ item.label }}</span
      >{% else %}<a
        class="breadcrumb_link{% if item.icon %} breadcrumb_link-icon{% endif %}"
        href="{{ item.href | default('#') }}"{% if item.ariaLabel %}
        aria-label="{{ item.ariaLabel }}"{% endif %}
        >{% if item.icon %}{{ icon(item.icon, 'breadcrumb_icon') }}{% else %}{{ item.label }}{% endif %}</a
      >{% endif %}
    </li>
    {% endfor %}
  </ol>
</nav>
`})))()}var $t;function en(){return(en=e((()=>{$t=`/**
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
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`/**
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
`})))()}var rn;function an(){return(an=e((()=>{rn=`/**
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
`})))()}var on;function sn(){return(sn=e((()=>{on=`<!--
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
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`<!--
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
`})))()}var un;function dn(){return(dn=e((()=>{un=`<!--
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
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`<!-- Pagination 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`{# Pagination 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# pagination 클래스에 단순·최소·크기·둥근 변형과 data-current·data-total을 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<nav
  class="pagination{% if simple %} pagination_simple{% endif %}{% if minimal %} pagination_minimal{% endif %}{% if size == 'sm' or size == 'lg' %} pagination_{{ size }}{% endif %}{% if round %} pagination_round{% endif %}{% if align == 'center' or align == 'end' %} pagination_align-{{ align }}{% endif %}"
  aria-label="{{ ariaLabel | default('페이지 이동') }}"
  data-component="Pagination"
  data-pagination
  data-current="{{ current | default(1) }}"
  data-total="{{ total | default(1) }}"
  data-page-size="{{ pageSize | default(10) }}"
>
  {# 단순형은 이전/다음·현재/전체 텍스트만, 아니면 번호 목록을 둡니다. #}
  {% if simple %}<button
    type="button"
    class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev"
    data-pagination-prev
    aria-label="이전 페이지"
  >
    {{ icon('chevron-left', 'pagination_icon') }}</button
  ><span class="pagination_simple-text" aria-live="polite"
    ><span class="pagination_simple-current">{{ current | default(1) }}</span> /
    <span class="pagination_simple-total"></span></span
  ><button
    type="button"
    class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next"
    data-pagination-next
    aria-label="다음 페이지"
  >
    {{ icon('chevron-right', 'pagination_icon') }}</button
  >{% else %}
  <ul class="pagination_list" data-pagination-list>
    <li class="pagination_item">
      <button
        type="button"
        class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev"
        data-pagination-prev
        aria-label="이전 페이지"
      >
        {{ icon('chevron-left', 'pagination_icon') }}
      </button>
    </li>
    <li class="pagination_item" data-pagination-next-item>
      <button
        type="button"
        class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next"
        data-pagination-next
        aria-label="다음 페이지"
      >
        {{ icon('chevron-right', 'pagination_icon') }}
      </button>
    </li>
  </ul>
  {% endif %}
</nav>
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`/**
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
                <Button
                  variant="text"
                  color="default"
                  ripple={false}
                  className={['pagination_link', page === active && 'is-active']
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={page === active ? 'page' : undefined}
                  ariaLabel={\`\${page}페이지\${page === active ? ', 현재 페이지' : ''}\`}
                  onClick={() => goTo(page)}
                >
                  {page}
                </Button>
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
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`<!--
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
        ><Button
          v-else
          variant="text"
          color="default"
          :ripple="false"
          :class="['pagination_link', page === active && 'is-active']"
          :aria-current="page === active ? 'page' : undefined"
          :aria-label="\`\${page}페이지\${page === active ? ', 현재 페이지' : ''}\`"
          @click="goTo(page)"
          >{{ page }}</Button
        >
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
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`<!-- Steps 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`{# Steps 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# steps 클래스에 방향·크기·점형·탐색 변형과 finished·active·wait 상태를 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<ol
  class="steps{% if direction == 'vertical' %} steps_vertical{% endif %}{% if size == 'sm' or size == 'lg' %} steps_{{ size }}{% endif %}{% if dot %} steps_dot{% endif %}{% if iconStyle %} steps_icon-style{% endif %}{% if navigable %} steps_navigable{% endif %}{% if align == 'center' %} steps_align-center{% endif %}"
  aria-label="{{ ariaLabel | default('진행 단계') }}"
  data-component="Steps"
  data-steps
>
  {# 각 단계는 인디케이터·연결선·제목·설명으로 구성합니다. #}
  {% for item in items %}{% set status = item.status | default('wait') %}
  <li
    class="steps_item is-{{ status }}"
    data-step-index="{{ loop.index }}"{% if status == 'error' %}
    data-step-fixed="error"{% endif %}{% if status == 'active' and not navigable %}
    aria-current="step"{% endif %}
  >
    {# 탐색 가능하면 버튼으로 감싸고, wait 상태는 비활성화합니다. #}
    {% if navigable %}<button
      type="button"
      class="steps_trigger"{% if status == 'wait' %}
      disabled{% endif %}{% if status == 'active' %}
      aria-current="step"{% endif %}
    >
      {% endif %}<span class="steps_head"
        ><span class="steps_indicator" aria-hidden="true"
          >{% if item.icon %}{{ icon(item.icon, 'steps_icon') }}{% elif status == 'finished' %}{{ icon('check', 'steps_icon') }}{% elif status == 'error' %}{{ icon('close', 'steps_icon') }}{% else %}<span
            class="steps_index"
            >{{ loop.index }}</span
          >{% endif %}</span
        >{% if not loop.last %}<span class="steps_tail" aria-hidden="true"></span
        >{% endif %}</span
      ><span class="steps_content"
        ><span class="steps_title">{{ item.title }}</span
        >{% if item.description %}<span class="steps_desc">{{ item.description }}</span
        >{% endif %}</span
      >{% if navigable %}</button
    >{% endif %}
  </li>
  {% endfor %}
</ol>
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`/**
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
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`/**
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
`})))()}var On;function kn(){return(kn=e((()=>{On=`<!--
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
`})))()}var An;function jn(){return(jn=e((()=>{An=`<!--
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
`})))()}var Mn;function Nn(){return(Nn=e((()=>{Mn=`<!-- Dropdown 원본 구현: 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다. -->
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
`})))()}var Pn;function Fn(){return(Fn=e((()=>{Pn=`{# Dropdown 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# dropdown 클래스에 열림·비활성·배치·맞춤 변형과 트리거·메뉴를 함께 둡니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
{% set menuId = id | default('dropdown-menu') %}
<div
  class="dropdown{% if open %} is-open{% endif %}{% if disabled %} is-disabled{% endif %}{% if placement == 'end' or placement == 'top' %} dropdown_placement-{{ placement }}{% endif %}{% if fit %} dropdown_fit{% endif %}"
  data-component="Dropdown"
  data-dropdown{% if closeOnSelect == false %}
  data-dropdown-close-on-select="false"{% endif %}
>
  {# 사용자 트리거가 없으면 기본 outline 버튼을 렌더합니다. #}
  {% if trigger %}{{ trigger | safe }}{% else %}<button
    type="button"
    class="btn btn_{{ triggerVariant | default('outline') }} color_{{ triggerColor | default('default') }} dropdown_trigger"
    aria-haspopup="{{ haspopup | default('menu') }}"
    aria-expanded="{% if open %}true{% else %}false{% endif %}"
    aria-controls="{{ menuId }}"{% if disabled %}
    disabled{% endif %}
  >
    <span class="btn_label">{{ triggerLabel | default('메뉴') }}</span
    >{{ icon('chevron-down') }}</button
  >{% endif %}
  {# 메뉴 패널은 aria-hidden과 선택적 스크롤·너비 스타일을 둡니다. #}
  <div
    id="{{ menuId }}"
    class="dropdown_menu{% if maxVisibleItems %} dropdown_menu-scrollable{% endif %}"
    role="menu"
    aria-hidden="{% if open %}false{% else %}true{% endif %}"{% if maxVisibleItems or menuWidth or menuMinWidth %}
    style="{% if maxVisibleItems %}--dropdown-max-visible-items: {{ maxVisibleItems }};{% endif %}{% if menuWidth %} width: {{ menuWidth }};{% endif %}{% if menuMinWidth %} min-width: {{ menuMinWidth }};{% endif %}"{% endif %}
  >
    {{ menu | safe }}
  </div>
</div>
`})))()}var In;function Ln(){return(Ln=e((()=>{In=`/**
 * Dropdown 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = new Set(['start', 'end', 'top']); // 지원하는 메뉴 배치입니다.
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
  const resolvedPlacement = placements.has(placement) ? placement : 'start'; // 검증된 배치입니다.

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
`})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`<!--
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
`})))()}function Z(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/navigation/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/navigation/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/navigation/${e}/${e}*.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}*.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/navigation/${e}/${e}*.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}*.jsx`,code:n.react}]}function Q(e,t,n){return Object.fromEntries(Object.entries(t).map(([t,r])=>[t,[...r,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · ${e} · ${t}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${n(t)}`}]]))}function Bn(e,t,n={}){let r=n.current?` aria-current="page"`:``;return`<w2:textbox id="${e}" class="navbar_link${n.current?` is-active`:``}" tagname="a" href="${n.href??`#`}" label="${t}"${r}></w2:textbox>`}function Vn(e){let t=`<w2:group id="navbarList" class="navbar_list" tagname="ul" role="list">
  ${Bn(`navHome`,`홈`,{current:!0}).replaceAll(`
`,`
  `)}
  ${Bn(`navDocs`,`문서`).replaceAll(`
`,`
  `)}
  ${Bn(`navComponents`,`컴포넌트`).replaceAll(`
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
</w2:group>`}function Hn(e){let t=[`menu`,(e===`horizontal`||e===`horizontalSubmenu`)&&`menu_horizontal`,e===`variant`&&`menu_bordered`].filter(Boolean).join(` `),n=(e,t,n={})=>`<w2:textbox id="${e}" class="menu_item${n.current?` is-active`:``}${n.disabled?` is-disabled`:``}" tagname="a" href="#" label="${t}"${n.current?` aria-current="page"`:``}${n.disabled?` aria-disabled="true"`:``}></w2:textbox>`;return e===`submenu`||e===`horizontalSubmenu`?`<w2:group id="menu${e}" class="${t}" role="menu">
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
</w2:group>`}function Un(e){let t={basic:`tabs`,dynamic:`tabs`,indicator:`tabs tabs_indicator-slide`,equal:`tabs tabs_equal`,layoutScroll:`tabs tabs_scroll`,card:`tabs tabs_card`,pill:`tabs tabs_pill`,size:`tabs tabs_sm`,icon:`tabs`,badge:`tabs`,extra:`tabs`,scroll:`tabs tabs_scroll`,disabled:`tabs`,vertical:`tabs tabs_vertical`},n=(e,t,n=!1,r=!1)=>`<xf:trigger id="${e}" type="button" class="tabs_tab${n?` is-active`:``}" role="tab" aria-selected="${n}" aria-controls="${e}Panel"${r?` disabled="true"`:``} ev:onclick="scwin.tabs_select">
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
</w2:group>`}function Wn(e){let t=e===`size`?` breadcrumb_sm`:``,n=(e,t,n=!1)=>n?`<w2:textbox id="${e}" class="breadcrumb_item is-current" tagname="span" aria-current="page" label="${t}"></w2:textbox>`:`<w2:textbox id="${e}" class="breadcrumb_item" tagname="a" href="#" label="${t}"></w2:textbox>`,r=`<w2:textbox id="bcSep" class="breadcrumb_separator" aria-hidden="true" label="/"></w2:textbox>`;return e===`ellipsis`?`<w2:group id="breadcrumbEllipsis" class="breadcrumb" tagname="nav" aria-label="경로">
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
</w2:group>`}function Gn(e){let t={basic:`pagination`,minimal:`pagination pagination_minimal`,size:`pagination pagination_sm`,round:`pagination pagination_round`,ellipsis:`pagination`,simple:`pagination pagination_simple`,toolbar:`pagination`,align:`pagination pagination_center`,state:`pagination`},n=(e,t,n=!1,r=!1)=>`<xf:trigger id="${e}" type="button" class="pagination_item${n?` is-active`:``}"${n?` aria-current="page"`:``}${r?` disabled="true"`:``} ev:onclick="scwin.pagination_goto">
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
</w2:group>`}function Kn(e){let t={basic:`steps`,simple:`steps steps_simple`,vertical:`steps steps_vertical`,dot:`steps steps_dot`,icon:`steps`,navigable:`steps`,error:`steps`,align:`steps steps_center`,size:`steps steps_sm`,state:`steps`},n=(e,t,n=`wait`)=>`<w2:group id="${e}" class="steps_item is-${n}"${n===`current`?` aria-current="step"`:``}>
  <w2:textbox id="${e}Marker" class="steps_marker" aria-hidden="true" label="${n===`done`?`✓`:n===`error`?`!`:``}"></w2:textbox>
  <w2:textbox id="${e}Title" class="steps_title" label="${t}"></w2:textbox>
</w2:group>`,r=e===`error`?`error`:`wait`;return`<w2:group id="steps${e}" class="${t[e]??`steps`}">
  ${n(`steps${e}1`,`정보 입력`,`done`)}
  ${n(`steps${e}2`,`확인`,`current`)}
  ${n(`steps${e}3`,`완료`,r)}
</w2:group>`}function qn(e){let t=e===`open`||e===`example`?` is-open`:``;return`<w2:group id="dropdown${e}" class="dropdown${t}">
  <xf:trigger id="dropdown${e}Trigger" type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="${t?`true`:`false`}" aria-controls="dropdown${e}Panel"${e===`disabled`?` disabled="true"`:``} ev:onclick="scwin.dropdown_toggle">
    <xf:label><![CDATA[${e===`select`?`옵션 선택`:`메뉴 열기`}]]></xf:label>
  </xf:trigger>
  <w2:group id="dropdown${e}Panel" class="dropdown_panel${e===`scroll`?` dropdown_scroll`:``}" role="menu">
    <w2:textbox id="dropdown${e}Item1" class="menu_item" tagname="button" role="menuitem" label="프로필"></w2:textbox>
    <w2:textbox id="dropdown${e}Item2" class="menu_item" tagname="button" role="menuitem" label="설정"></w2:textbox>
    <w2:textbox id="dropdown${e}Item3" class="menu_item" tagname="button" role="menuitem" label="로그아웃"></w2:textbox>
  </w2:group>
</w2:group>`}var $,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr;function cr(){return(cr=e((()=>{ne(),ce(),me(),xe(),Ae(),Fe(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),$=(...e)=>e.join(`

`),Jn=Z(`Navbar`,`navbar`,{html:Ue,gulp:Ge,react:$(qe,`<!-- NavbarList.jsx -->\n${Ye}`,`<!-- NavbarItem.jsx -->\n${Ze}`),vue:$($e,`<!-- NavbarList.vue -->\n${tt}`,`<!-- NavbarItem.vue -->\n${rt}`)}),Yn=Z(`Menu`,`menu`,{html:at,gulp:st,react:$(lt,`<!-- MenuItem.jsx -->\n${dt}`,`<!-- MenuSubmenu.jsx -->\n${pt}`,`<!-- MenuGroup.jsx -->\n${ht}`,`<!-- MenuDivider.jsx -->\n${_t}`),vue:$(yt,`<!-- MenuItem.vue -->\n${xt}`,`<!-- MenuSubmenu.vue -->\n${Ct}`,`<!-- MenuGroup.vue -->\n${Tt}`,`<!-- MenuDivider.vue -->\n${Dt}`)}),Xn=Z(`Tabs`,`tabs`,{html:kt,gulp:jt,react:$(Nt,`<!-- TabsTab.jsx -->\n${Ft}`,`<!-- TabPanel.jsx -->\n${Lt}`,`<!-- TabMenu.jsx -->\n${zt}`),vue:$(Vt,`<!-- TabsTab.vue -->\n${Ut}`,`<!-- TabPanel.vue -->\n${Gt}`,`<!-- TabMenu.vue -->\n${qt}`)}),Zn=Z(`Breadcrumb`,`breadcrumb`,{html:Yt,gulp:Zt,react:$($t,`<!-- BreadcrumbItem.jsx -->\n${tn}`,`<!-- BreadcrumbEllipsis.jsx -->\n${rn}`),vue:$(on,`<!-- BreadcrumbItem.vue -->\n${cn}`,`<!-- BreadcrumbEllipsis.vue -->\n${un}`)}),Qn=Z(`Pagination`,`pagination`,{html:fn,gulp:mn,react:gn,vue:vn}),$n=Z(`Steps`,`steps`,{html:bn,gulp:Sn,react:$(wn,`<!-- StepsItem.jsx -->\n${En}`),vue:$(On,`<!-- StepsItem.vue -->\n${An}`)}),er=Z(`Dropdown`,`dropdown`,{html:Mn,gulp:Pn,react:In,vue:Rn}),tr=Q(`Navbar`,te,Vn),nr=Q(`Menu`,se,Hn),rr=Q(`Tabs`,pe,Un),ir=Q(`Breadcrumb`,be,Wn),ar=Q(`Pagination`,ke,Gn),or=Q(`Steps`,Pe,Kn),sr=Q(`Dropdown`,Ve,qn)})))()}export{cr as a,Jn as c,ar as d,$n as f,rr as h,sr as i,tr as l,Xn as m,ir as n,Yn as o,or as p,er as r,nr as s,Zn as t,Qn as u};