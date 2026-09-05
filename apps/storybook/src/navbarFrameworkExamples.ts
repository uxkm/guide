import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'brand', 'brandImage', 'brandBackground', 'actions', 'search', 'size', 'variant', 'badge', 'responsive'] as const;
type Name = (typeof names)[number];

const itemsHtml = (items: Array<[string, boolean?, string?]>) => `<ul class="navbar_list">${items.map(([label, active, badge]) => `<li class="navbar_item"><a href="#" class="navbar_link${active ? ' is-active' : ''}"${active ? ' aria-current="page"' : ''}>${label}${badge || ''}</a></li>`).join('')}</ul>`;
const navbarHtml = (brand: string, items: string, options: { classes?: string; icon?: string; brandSrc?: string; brandAlt?: string; brandBackground?: string; actions?: string; search?: string; responsive?: boolean; id?: string } = {}) => {
  const id = options.id || 'navbar-collapse';
  const toggle = options.responsive ? `<button type="button" class="btn btn_ghost btn_icon-only navbar_toggle" data-navbar-toggle aria-expanded="false" aria-controls="${id}" aria-label="메뉴 열기"><svg class="icon icon_sm navbar_toggle-icon-open" data-component="Icon" data-icon="menu" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg><svg class="icon icon_sm navbar_toggle-icon-close" data-component="Icon" data-icon="close" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"></path></svg></button>` : '';
  const brandLink = options.brandBackground
    ? `<a href="#" class="navbar_brand navbar_brand-bg" style="--navbar-brand-bg-image: url('${options.brandBackground}')" aria-label="${options.brandAlt || brand}"><span class="navbar_brand-sr">${brand}</span></a>`
    : options.brandSrc
      ? `<a href="#" class="navbar_brand"><img class="navbar_brand-image" src="${options.brandSrc}" alt="${options.brandAlt || brand}" />${brand ? `<span class="navbar_brand-text">${brand}</span>` : ''}</a>`
      : `<a href="#" class="navbar_brand">${options.icon || ''}${brand}</a>`;
  return `<header class="navbar${options.classes ? ` ${options.classes}` : ''}" data-component="Navbar"${options.responsive ? ' data-navbar' : ''}><div class="navbar_container">${brandLink}${toggle}<div class="navbar_collapse" id="${id}"><nav class="navbar_nav" aria-label="주요 메뉴">${items}</nav>${options.search ? `<div class="navbar_search">${options.search}</div>` : ''}${options.actions ? `<div class="navbar_actions">${options.actions}</div>` : ''}</div></div></header>`;
};
const buttonHtml = (label: string, variant = 'outline') => `<button type="button" class="btn btn_${variant}${variant === 'filled' ? ' color_primary' : ''} btn_sm"><span class="btn_label">${label}</span></button>`;
const standard = itemsHtml([['홈', true], ['컴포넌트'], ['토큰'], ['접근성']]);
const html: Record<Name, string> = {
  basic: navbarHtml('UXKM', standard),
  brand: navbarHtml('HTML Components', itemsHtml([['가이드', true], ['리소스']]), { icon: '<svg class="icon navbar_brand-icon" data-component="Icon" data-icon="grid" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>' }),
  brandImage: navbarHtml('', itemsHtml([['가이드', true], ['리소스']]), { brandSrc: '/images/brand/uxkm_logo_hand.svg', brandAlt: 'UXKM' }),
  brandBackground: navbarHtml('UXKM', itemsHtml([['가이드', true], ['리소스']]), { brandBackground: '/images/brand/uxkm_logo_hand.svg', brandAlt: 'UXKM' }),
  actions: navbarHtml('Dashboard', itemsHtml([['개요', true], ['분석'], ['설정']]), { actions: `<button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="알림"><svg class="icon" data-component="Icon" data-icon="bell" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4"></path></svg></button>${buttonHtml('로그인')}${buttonHtml('가입', 'filled')}` }),
  search: navbarHtml('Docs', itemsHtml([['시작하기'], ['컴포넌트', true], ['패턴']]), { search: '<input class="input input_sm" type="search" id="navbar-search-demo" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색">', actions: buttonHtml('GitHub', 'filled') }),
  size: [navbarHtml('Small', itemsHtml([['메뉴', true]]), { classes: 'navbar_sm' }), navbarHtml('Default', itemsHtml([['메뉴', true]])), navbarHtml('Large', itemsHtml([['메뉴', true]]), { classes: 'navbar_lg' })].join('\n\n'),
  variant: [navbarHtml('Borderless', itemsHtml([['홈', true], ['소개']]), { classes: 'navbar_borderless' }), navbarHtml('Dark Surface', itemsHtml([['홈', true], ['소개']]), { classes: 'navbar_dark' }), `<div class="navbar_demo-scroll">${navbarHtml('Sticky', itemsHtml([['고정', true]]), { classes: 'navbar_sticky' })}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`].join('\n\n'),
  badge: navbarHtml('Inbox', itemsHtml([['받은편지함', true], ['알림', false, '<span class="badge color_danger" data-component="Badge">3</span>'], ['보관함']])),
  responsive: navbarHtml('Mobile', itemsHtml([['홈', true], ['제품'], ['가격'], ['문의']]), { responsive: true, id: 'navbar-responsive-demo', actions: `${buttonHtml('로그인')}${buttonHtml('시작하기', 'filled')}` }),
};

const menuReact = (entries: Array<[string, boolean?]>) => `<NavbarList>${entries.map(([label, active]) => `<NavbarItem label="${label}"${active ? ' active' : ''} />`).join('')}</NavbarList>`;
const react: Record<Name, string> = {
  basic: `<Navbar brand="UXKM" items={${menuReact([['홈', true], ['컴포넌트'], ['토큰'], ['접근성']])}} />`,
  brand: `<Navbar brand="HTML Components" brandIcon={<Icon name="grid" className="navbar_brand-icon" />} items={${menuReact([['가이드', true], ['리소스']])}} />`,
  brandImage: `<Navbar brandSrc="/images/brand/uxkm_logo_hand.svg" brandAlt="UXKM" ariaLabel="UXKM" items={${menuReact([['가이드', true], ['리소스']])}} />`,
  brandBackground: `<Navbar brandBackground="/images/brand/uxkm_logo_hand.svg" ariaLabel="UXKM" items={${menuReact([['가이드', true], ['리소스']])}} />`,
  actions: `<Navbar brand="Dashboard" items={${menuReact([['개요', true], ['분석'], ['설정']])}} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} />`,
  search: `<Navbar brand="Docs" items={${menuReact([['시작하기'], ['컴포넌트', true], ['패턴']])}} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" ariaLabel="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} />`,
  size: `<Navbar brand="Small" size="sm" items={${menuReact([['메뉴', true]])}} />\n<Navbar brand="Default" items={${menuReact([['메뉴', true]])}} />\n<Navbar brand="Large" size="lg" items={${menuReact([['메뉴', true]])}} />`,
  variant: `<Navbar brand="Borderless" borderless items={${menuReact([['홈', true], ['소개']])}} />\n<Navbar brand="Dark Surface" dark items={${menuReact([['홈', true], ['소개']])}} />\n<div className="navbar_demo-scroll"><Navbar brand="Sticky" sticky items={${menuReact([['고정', true]])}} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,
  badge: `<Navbar brand="Inbox" items={<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림" badge={<Badge color="danger" label="3" />} /><NavbarItem label="보관함" /></NavbarList>} />`,
  responsive: `<Navbar brand="Mobile" responsive collapseId="navbar-responsive-demo" items={${menuReact([['홈', true], ['제품'], ['가격'], ['문의']])}} actions={<><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></>} />`,
};

const menuVue = (entries: Array<[string, boolean?]>) => `<NavbarList>${entries.map(([label, active]) => `<NavbarItem label="${label}"${active ? ' active' : ''} />`).join('')}</NavbarList>`;
const vueNavbar = (attrs: string, menu: string, slots = '') => `<Navbar ${attrs}><template #items>${menu}</template>${slots}</Navbar>`;
const vue: Record<Name, string> = {
  basic: vueNavbar('brand="UXKM"', menuVue([['홈', true], ['컴포넌트'], ['토큰'], ['접근성']])),
  brand: vueNavbar('brand="HTML Components"', menuVue([['가이드', true], ['리소스']]), '<template #brand-icon><Icon name="grid" class="navbar_brand-icon" /></template>'),
  brandImage: vueNavbar('brand-src="/images/brand/uxkm_logo_hand.svg" brand-alt="UXKM" aria-label="UXKM"', menuVue([['가이드', true], ['리소스']])),
  brandBackground: vueNavbar('brand-background="/images/brand/uxkm_logo_hand.svg" aria-label="UXKM"', menuVue([['가이드', true], ['리소스']])),
  actions: vueNavbar('brand="Dashboard"', menuVue([['개요', true], ['분석'], ['설정']]), '<template #actions><Button variant="ghost" size="sm" icon-only aria-label="알림"><template #icon-before><Icon name="bell" /></template></Button><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></template>'),
  search: vueNavbar('brand="Docs"', menuVue([['시작하기'], ['컴포넌트', true], ['패턴']]), '<template #search><Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" /></template><template #actions><Button variant="filled" color="primary" size="sm" label="GitHub" /></template>'),
  size: `${vueNavbar('brand="Small" size="sm"', menuVue([['메뉴', true]]))}\n${vueNavbar('brand="Default"', menuVue([['메뉴', true]]))}\n${vueNavbar('brand="Large" size="lg"', menuVue([['메뉴', true]]))}`,
  variant: `${vueNavbar('brand="Borderless" borderless', menuVue([['홈', true], ['소개']]))}\n${vueNavbar('brand="Dark Surface" dark', menuVue([['홈', true], ['소개']]))}\n<div class="navbar_demo-scroll">${vueNavbar('brand="Sticky" sticky', menuVue([['고정', true]]))}<div class="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div>`,
  badge: vueNavbar('brand="Inbox"', '<NavbarList><NavbarItem label="받은편지함" active /><NavbarItem label="알림"><template #badge><Badge color="danger" label="3" /></template></NavbarItem><NavbarItem label="보관함" /></NavbarList>'),
  responsive: vueNavbar('brand="Mobile" responsive collapse-id="navbar-responsive-demo"', menuVue([['홈', true], ['제품'], ['가격'], ['문의']]), '<template #actions><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></template>'),
};

const gulpImports = `{% from "components/navigation/Navbar/navbar.njk" import navbar, navbarList, navbarItem %}`;
const gulpItems = (items: Array<[string, boolean?, string?]>) => `{% call navbarList() %}
${items.map(([label, active, badge]) => `  {{ navbarItem(label='${label}'${active ? ', active=true' : ''}${badge ? `, badge=${badge}` : ''}) }}`).join('\n')}
{% endcall %}`;
const gulpNavbar = (brand: string, items: Array<[string, boolean?, string?]>, options = '') => `{% set items %}
  ${gulpItems(items).replaceAll('\n', '\n  ')}
{% endset %}
{{ navbar(brand='${brand}', items=items${options ? `, ${options}` : ''}) }}`;

function gulpCode(key: Name) {
  if (key === 'basic') return `${gulpImports}

${gulpNavbar('UXKM', [['홈', true], ['컴포넌트'], ['토큰'], ['접근성']])}`;
  if (key === 'brand') return `${gulpImports}

${gulpNavbar('HTML Components', [['가이드', true], ['리소스']], "brandIconName='grid'")}`;
  if (key === 'brandImage') return `${gulpImports}

${gulpNavbar('', [['가이드', true], ['리소스']], "brandSrc='/images/brand/uxkm_logo_hand.svg', brandAlt='UXKM'")}`;
  if (key === 'brandBackground') return `${gulpImports}

${gulpNavbar('UXKM', [['가이드', true], ['리소스']], "brandBackground='/images/brand/uxkm_logo_hand.svg', brandAlt='UXKM'")}`;
  if (key === 'actions') return `${gulpImports}
{% from "components/basic/Button/button.njk" import button %}

{% set items %}
  ${gulpItems([['개요', true], ['분석'], ['설정']]).replaceAll('\n', '\n  ')}
{% endset %}
{% set actions %}
  {{ button(variant='ghost', color='', size='sm', iconOnly=true, iconBefore='bell', ariaLabel='알림') }}
  {{ button(variant='outline', size='sm', label='로그인') }}
  {{ button(size='sm', label='가입') }}
{% endset %}
{{ navbar(brand='Dashboard', items=items, actions=actions) }}`;
  if (key === 'search') return `${gulpImports}
{% from "components/basic/Button/button.njk" import button %}
{% from "components/form/Input/input.njk" import input %}

{% set items %}
  ${gulpItems([['시작하기'], ['컴포넌트', true], ['패턴']]).replaceAll('\n', '\n  ')}
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
{{ navbar(brand='Docs', items=items, search=search, actions=actions) }}`;
  if (key === 'size') return `${gulpImports}

{% set items %}${gulpItems([['메뉴', true]])}{% endset %}
{{ navbar(brand='Small', size='sm', items=items) }}
{{ navbar(brand='Default', items=items) }}
{{ navbar(brand='Large', size='lg', items=items) }}`;
  if (key === 'variant') return `${gulpImports}

{% set standardItems %}${gulpItems([['홈', true], ['소개']])}{% endset %}
{{ navbar(brand='Borderless', borderless=true, items=standardItems) }}
{{ navbar(brand='Dark Surface', dark=true, items=standardItems) }}

<div class="navbar_demo-scroll">
  {% set stickyItems %}${gulpItems([['고정', true]])}{% endset %}
  {{ navbar(brand='Sticky', sticky=true, items=stickyItems) }}
  <div class="navbar-scroll-content">
    <p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
    <p>콘텐츠 영역 예시입니다.</p>
    <p>추가 콘텐츠…</p>
    <p>추가 콘텐츠…</p>
  </div>
</div>`;
  if (key === 'badge') return `${gulpImports}
{% from "components/data-display/Badge/badge.njk" import badge %}

{% set noticeBadge %}{{ badge(color='danger', label='3') }}{% endset %}
{% set items %}
  {% call navbarList() %}
    {{ navbarItem(label='받은편지함', active=true) }}
    {{ navbarItem(label='알림', badge=noticeBadge) }}
    {{ navbarItem(label='보관함') }}
  {% endcall %}
{% endset %}
{{ navbar(brand='Inbox', items=items) }}`;
  return `${gulpImports}
{% from "components/basic/Button/button.njk" import button %}

{% set items %}
  ${gulpItems([['홈', true], ['제품'], ['가격'], ['문의']]).replaceAll('\n', '\n  ')}
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
) }}`;
}

function examples(key: Name): FrameworkExample[] {
  const needsButton = ['actions', 'search', 'responsive'].includes(key);
  const needsIcon = ['brand', 'actions'].includes(key);
  const needsInput = key === 'search';
  const needsBadge = key === 'badge';
  const reactImports = [`import { Navbar, NavbarItem, NavbarList } from '@uxkm/react/navbar';`, needsButton && `import Button from '@uxkm/react/button';`, needsIcon && `import Icon from '@uxkm/react/icon';`, needsInput && `import Input from '@uxkm/react/input';`, needsBadge && `import Badge from '@uxkm/react/badge';`].filter(Boolean).join('\n');
  const vueImports = [`import { Navbar, NavbarItem, NavbarList } from '@uxkm/vue/navbar';`, needsButton && `import Button from '@uxkm/vue/button';`, needsIcon && `import Icon from '@uxkm/vue/icon';`, needsInput && `import Input from '@uxkm/vue/input';`, needsBadge && `import Badge from '@uxkm/vue/badge';`].filter(Boolean).join('\n');
  const reactCode = `${reactImports}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\n${vueImports}\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Navbar.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `navbar.njk · ${key}`, code: gulpCode(key) }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/navbar · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/navbar · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/navbar · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/navbar · ${key}`, code: reactCode }];
}
export const navbarFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
