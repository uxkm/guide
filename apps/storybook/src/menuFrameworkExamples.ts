import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'horizontal', 'icon', 'submenu', 'group', 'disabled', 'badge', 'horizontalSubmenu', 'layout', 'variant'] as const;
type Name = (typeof names)[number];

const iconHtml = (name: string) => `<svg class="icon menu_icon" data-component="Icon" data-icon="${name}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${name === 'grid' ? 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z' : name === 'user' ? 'M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0' : name === 'settings' ? 'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z' : name === 'home' ? 'm3 11 9-8 9 8M5 10v11h14V10' : name === 'bell' ? 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4' : name === 'mail' ? 'M3 5h18v14H3zM3 7l9 6 9-6' : 'M4 3h12l4 4v14H4zM16 3v5h5'}"></path></svg>`;
const itemHtml = (label: string, options: { active?: boolean; disabled?: boolean; icon?: string; extra?: string } = {}) => `<li class="menu_item${options.disabled ? ' is-disabled' : ''}"><button type="button" class="menu_link${options.active ? ' is-active' : ''}${options.disabled ? ' is-disabled' : ''}"${options.active ? ' aria-current="page"' : ''}${options.disabled ? ' aria-disabled="true"' : ''}>${options.icon ? iconHtml(options.icon) : ''}<span class="menu_label">${label}</span>${options.extra ? `<span class="menu_extra">${options.extra}</span>` : ''}</button></li>`;
const submenuHtml = (label: string, id: string, children: string, expanded = false, icon?: string) => `<li class="menu_item menu_item-submenu" aria-expanded="${expanded}"><button type="button" class="menu_link" data-menu-submenu-toggle aria-expanded="${expanded}" aria-controls="${id}">${icon ? iconHtml(icon) : ''}<span class="menu_label">${label}</span><svg class="icon menu_arrow" data-component="Icon" data-icon="chevron-down" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></button><ul id="${id}" class="menu_submenu">${children}</ul></li>`;
const menuHtml = (content: string, label: string, classes = 'menu_vertical menu_bordered') => `<nav class="menu ${classes}" data-component="Menu" data-menu-selectable aria-label="${label}"><ul class="menu_list">${content}</ul></nav>`;
const four = (labels: string[], active = 0) => labels.map((label, index) => itemHtml(label, { active: index === active })).join('');
const html: Record<Name, string> = {
  basic: menuHtml(four(['대시보드', '분석', '사용자', '설정']), '주요 메뉴'),
  horizontal: menuHtml(four(['개요', '컴포넌트', '토큰', '접근성']), '섹션 메뉴', 'menu_horizontal menu_bordered'),
  icon: menuHtml([['대시보드', 'grid'], ['사용자', 'user'], ['문서', 'book'], ['설정', 'settings']].map(([label, icon], index) => itemHtml(label, { icon, active: index === 0 })).join(''), '앱 메뉴'),
  submenu: menuHtml(itemHtml('홈', { active: true, icon: 'home' }) + submenuHtml('컴포넌트', 'menu-sub-components', four(['Button', 'Input', 'Card'], -1), true, 'grid') + submenuHtml('패턴', 'menu-sub-patterns', four(['폼 레이아웃', '데이터 테이블'], -1), false, 'book'), '컴포넌트 메뉴'),
  group: menuHtml('<li class="menu_group" role="presentation"><span class="menu_group-title">계정</span></li>' + itemHtml('프로필', { active: true }) + itemHtml('보안') + '<li class="menu_divider" role="separator"></li><li class="menu_group" role="presentation"><span class="menu_group-title">앱</span></li>' + itemHtml('알림') + itemHtml('언어') + '<li class="menu_divider" role="separator"></li>' + itemHtml('로그아웃'), '설정 메뉴'),
  disabled: menuHtml(itemHtml('조회', { active: true }) + itemHtml('편집') + itemHtml('삭제', { disabled: true }) + itemHtml('관리자 설정', { disabled: true }), '권한 메뉴'),
  badge: menuHtml(itemHtml('받은편지함', { active: true, icon: 'mail', extra: '<span class="badge badge_count color_primary" data-component="Badge">12</span>' }) + itemHtml('알림', { icon: 'bell', extra: '<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 알림"></span>' }) + itemHtml('메시지', { icon: 'mail', extra: '<span class="badge color_default" data-component="Badge">Beta</span>' }), '알림 메뉴'),
  horizontalSubmenu: menuHtml(itemHtml('홈', { active: true }) + submenuHtml('컴포넌트', 'menu-sub-h-components', four(['Button', 'Input', 'Select'], -1)) + itemHtml('토큰') + itemHtml('접근성'), '상단 메뉴', 'menu_horizontal menu_bordered'),
  layout: `<div class="menu_demo-row"><div class="menu_demo-sidebar">${menuHtml(itemHtml('개요', { active: true, icon: 'grid' }) + submenuHtml('문서', 'menu-sub-sidebar', four(['시작하기', '컴포넌트'], -1), true, 'book') + itemHtml('설정', { icon: 'settings' }), '앱 사이드바', 'menu_vertical menu_bordered menu_compact')}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,
  variant: menuHtml(four(['항목 A', '항목 B', '항목 C']), '컴팩트 메뉴', 'menu_vertical menu_bordered menu_compact') + '\n' + menuHtml(four(['항목 A', '항목 B', '항목 C']), '다크 서피스 메뉴', 'menu_vertical menu_bordered menu_dark'),
};

const ri = (label: string, options = '') => `<MenuItem label="${label}"${options ? ` ${options}` : ''} />`;
const rm = (children: string, props = 'bordered') => `<Menu ${props}>${children}</Menu>`;
const react: Record<Name, string> = {
  basic: rm(ri('대시보드', 'active') + ri('분석') + ri('사용자') + ri('설정'), 'bordered ariaLabel="주요 메뉴"'),
  horizontal: rm(ri('개요', 'active') + ri('컴포넌트') + ri('토큰') + ri('접근성'), 'mode="horizontal" bordered ariaLabel="섹션 메뉴"'),
  icon: rm(ri('대시보드', 'active icon={<Icon name="grid" className="menu_icon" />}') + ri('사용자', 'icon={<Icon name="user" className="menu_icon" />}') + ri('문서', 'icon={<Icon name="book" className="menu_icon" />}') + ri('설정', 'icon={<Icon name="settings" className="menu_icon" />}'), 'bordered ariaLabel="앱 메뉴"'),
  submenu: rm(ri('홈', 'active icon={<Icon name="home" className="menu_icon" />}') + '<MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components" icon={<Icon name="grid" className="menu_icon" />}>' + ri('Button') + ri('Input') + ri('Card') + '</MenuSubmenu><MenuSubmenu label="패턴" submenuId="menu-sub-patterns" icon={<Icon name="book" className="menu_icon" />}>' + ri('폼 레이아웃') + ri('데이터 테이블') + '</MenuSubmenu>', 'bordered ariaLabel="컴포넌트 메뉴"'),
  group: rm('<MenuGroup title="계정" />' + ri('프로필', 'active') + ri('보안') + '<MenuDivider /><MenuGroup title="앱" />' + ri('알림') + ri('언어') + '<MenuDivider />' + ri('로그아웃'), 'bordered ariaLabel="설정 메뉴"'),
  disabled: rm(ri('조회', 'active') + ri('편집') + ri('삭제', 'disabled') + ri('관리자 설정', 'disabled'), 'bordered ariaLabel="권한 메뉴"'),
  badge: rm(ri('받은편지함', 'active icon={<Icon name="mail" className="menu_icon" />} extra={<Badge count color="primary" label="12" />}') + ri('알림', 'icon={<Icon name="bell" className="menu_icon" />} extra={<Badge dotOnly color="danger" ariaLabel="새 알림" />}') + ri('메시지', 'icon={<Icon name="mail" className="menu_icon" />} extra={<Badge color="default" label="Beta" />}'), 'bordered ariaLabel="알림 메뉴"'),
  horizontalSubmenu: rm(ri('홈', 'active') + '<MenuSubmenu label="컴포넌트" submenuId="menu-sub-h-components">' + ri('Button') + ri('Input') + ri('Select') + '</MenuSubmenu>' + ri('토큰') + ri('접근성'), 'mode="horizontal" bordered ariaLabel="상단 메뉴"'),
  layout: `<div className="menu_demo-row"><div className="menu_demo-sidebar">${rm(ri('개요', 'active icon={<Icon name="grid" className="menu_icon" />}') + '<MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar" icon={<Icon name="book" className="menu_icon" />}>' + ri('시작하기') + ri('컴포넌트') + '</MenuSubmenu>' + ri('설정', 'icon={<Icon name="settings" className="menu_icon" />}'), 'bordered compact ariaLabel="앱 사이드바"')}</div><div className="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,
  variant: rm(ri('항목 A', 'active') + ri('항목 B') + ri('항목 C'), 'bordered compact ariaLabel="컴팩트 메뉴"') + rm(ri('항목 A', 'active') + ri('항목 B') + ri('항목 C'), 'bordered dark ariaLabel="다크 서피스 메뉴"'),
};

const vi = (label: string, attrs = '', icon = '', extra = '') => icon || extra ? `<MenuItem label="${label}"${attrs ? ` ${attrs}` : ''}>${icon ? `<template #icon><Icon name="${icon}" class="menu_icon" /></template>` : ''}${extra ? `<template #extra>${extra}</template>` : ''}</MenuItem>` : `<MenuItem label="${label}"${attrs ? ` ${attrs}` : ''} />`;
const vm = (children: string, props = 'bordered') => `<Menu ${props}>${children}</Menu>`;
const vue: Record<Name, string> = {
  basic: vm(vi('대시보드', 'active') + vi('분석') + vi('사용자') + vi('설정'), 'bordered aria-label="주요 메뉴"'),
  horizontal: vm(vi('개요', 'active') + vi('컴포넌트') + vi('토큰') + vi('접근성'), 'mode="horizontal" bordered aria-label="섹션 메뉴"'),
  icon: vm(vi('대시보드', 'active', 'grid') + vi('사용자', '', 'user') + vi('문서', '', 'book') + vi('설정', '', 'settings'), 'bordered aria-label="앱 메뉴"'),
  submenu: vm(vi('홈', 'active', 'home') + '<MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components"><template #icon><Icon name="grid" class="menu_icon" /></template>' + vi('Button') + vi('Input') + vi('Card') + '</MenuSubmenu><MenuSubmenu label="패턴" submenu-id="menu-sub-patterns"><template #icon><Icon name="book" class="menu_icon" /></template>' + vi('폼 레이아웃') + vi('데이터 테이블') + '</MenuSubmenu>', 'bordered aria-label="컴포넌트 메뉴"'),
  group: vm('<MenuGroup title="계정" />' + vi('프로필', 'active') + vi('보안') + '<MenuDivider /><MenuGroup title="앱" />' + vi('알림') + vi('언어') + '<MenuDivider />' + vi('로그아웃'), 'bordered aria-label="설정 메뉴"'),
  disabled: vm(vi('조회', 'active') + vi('편집') + vi('삭제', 'disabled') + vi('관리자 설정', 'disabled'), 'bordered aria-label="권한 메뉴"'),
  badge: vm(vi('받은편지함', 'active', 'mail', '<Badge count color="primary" label="12" />') + vi('알림', '', 'bell', '<Badge dot-only color="danger" aria-label="새 알림" />') + vi('메시지', '', 'mail', '<Badge color="default" label="Beta" />'), 'bordered aria-label="알림 메뉴"'),
  horizontalSubmenu: vm(vi('홈', 'active') + '<MenuSubmenu label="컴포넌트" submenu-id="menu-sub-h-components">' + vi('Button') + vi('Input') + vi('Select') + '</MenuSubmenu>' + vi('토큰') + vi('접근성'), 'mode="horizontal" bordered aria-label="상단 메뉴"'),
  layout: `<div class="menu_demo-row"><div class="menu_demo-sidebar">${vm(vi('개요', 'active', 'grid') + '<MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar"><template #icon><Icon name="book" class="menu_icon" /></template>' + vi('시작하기') + vi('컴포넌트') + '</MenuSubmenu>' + vi('설정', '', 'settings'), 'bordered compact aria-label="앱 사이드바"')}</div><div class="menu_demo-content"><p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p></div></div>`,
  variant: vm(vi('항목 A', 'active') + vi('항목 B') + vi('항목 C'), 'bordered compact aria-label="컴팩트 메뉴"') + vm(vi('항목 A', 'active') + vi('항목 B') + vi('항목 C'), 'bordered dark aria-label="다크 서피스 메뉴"'),
};

const gulpImports = `{% from "components/navigation/Menu/menu.njk" import menu, menuItem, menuSubmenu, menuGroup, menuDivider %}`;
const gulpItem = (label: string, options = '') => `{{ menuItem(label='${label}'${options ? `, ${options}` : ''}) }}`;
const gulpMenu = (content: string, options: string) => `{% call menu(${options}) %}
  ${content.replaceAll('\n', '\n  ')}
{% endcall %}`;
const gulpSubmenu = (label: string, id: string, content: string, options = '') => `{% call menuSubmenu(label='${label}', id='${id}'${options ? `, ${options}` : ''}) %}
  ${content.replaceAll('\n', '\n  ')}
{% endcall %}`;

function gulpCode(key: Name) {
  const simpleItems = (labels: string[]) => labels.map((label, index) => gulpItem(label, index === 0 ? 'active=true' : '')).join('\n');
  if (key === 'basic') return `${gulpImports}

${gulpMenu(simpleItems(['대시보드', '분석', '사용자', '설정']), "bordered=true, ariaLabel='주요 메뉴'")}`;
  if (key === 'horizontal') return `${gulpImports}

${gulpMenu(simpleItems(['개요', '컴포넌트', '토큰', '접근성']), "mode='horizontal', bordered=true, ariaLabel='섹션 메뉴'")}`;
  if (key === 'icon') return `${gulpImports}

${gulpMenu([
  gulpItem('대시보드', "active=true, icon='grid'"),
  gulpItem('사용자', "icon='user'"),
  gulpItem('문서', "icon='book'"),
  gulpItem('설정', "icon='settings'"),
].join('\n'), "bordered=true, ariaLabel='앱 메뉴'")}`;
  if (key === 'submenu') {
    const components = ['Button', 'Input', 'Card'].map((label) => gulpItem(label)).join('\n');
    const patterns = ['폼 레이아웃', '데이터 테이블'].map((label) => gulpItem(label)).join('\n');
    return `${gulpImports}

${gulpMenu([
  gulpItem('홈', "active=true, icon='home'"),
  gulpSubmenu('컴포넌트', 'menu-sub-components', components, "expanded=true, icon='grid'"),
  gulpSubmenu('패턴', 'menu-sub-patterns', patterns, "icon='book'"),
].join('\n'), "bordered=true, ariaLabel='컴포넌트 메뉴'")}`;
  }
  if (key === 'group') return `${gulpImports}

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
{% endcall %}`;
  if (key === 'disabled') return `${gulpImports}

${gulpMenu([
  gulpItem('조회', 'active=true'),
  gulpItem('편집'),
  gulpItem('삭제', 'disabled=true'),
  gulpItem('관리자 설정', 'disabled=true'),
].join('\n'), "bordered=true, ariaLabel='권한 메뉴'")}`;
  if (key === 'badge') return `${gulpImports}
{% from "components/data-display/Badge/badge.njk" import badge %}

{% set inboxBadge %}{{ badge(count=true, color='primary', label='12') }}{% endset %}
{% set noticeBadge %}{{ badge(dotOnly=true, color='danger', ariaLabel='새 알림') }}{% endset %}
{% set betaBadge %}{{ badge(color='default', label='Beta') }}{% endset %}

{% call menu(bordered=true, ariaLabel='알림 메뉴') %}
  {{ menuItem(label='받은편지함', active=true, icon='mail', extra=inboxBadge) }}
  {{ menuItem(label='알림', icon='bell', extra=noticeBadge) }}
  {{ menuItem(label='메시지', icon='mail', extra=betaBadge) }}
{% endcall %}`;
  if (key === 'horizontalSubmenu') {
    const children = ['Button', 'Input', 'Select'].map((label) => gulpItem(label)).join('\n');
    return `${gulpImports}

{% call menu(mode='horizontal', bordered=true, ariaLabel='상단 메뉴') %}
  {{ menuItem(label='홈', active=true) }}
  ${gulpSubmenu('컴포넌트', 'menu-sub-h-components', children).replaceAll('\n', '\n  ')}
  {{ menuItem(label='토큰') }}
  {{ menuItem(label='접근성') }}
{% endcall %}`;
  }
  if (key === 'layout') {
    const documents = ['시작하기', '컴포넌트'].map((label) => gulpItem(label)).join('\n');
    return `${gulpImports}

<div class="menu_demo-row">
  <div class="menu_demo-sidebar">
    {% call menu(bordered=true, compact=true, ariaLabel='앱 사이드바') %}
      {{ menuItem(label='개요', active=true, icon='grid') }}
      ${gulpSubmenu('문서', 'menu-sub-sidebar', documents, "expanded=true, icon='book'").replaceAll('\n', '\n      ')}
      {{ menuItem(label='설정', icon='settings') }}
    {% endcall %}
  </div>
  <div class="menu_demo-content">
    <p>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
  </div>
</div>`;
  }
  return `${gulpImports}

${gulpMenu(simpleItems(['항목 A', '항목 B', '항목 C']), "bordered=true, compact=true, ariaLabel='컴팩트 메뉴'")}

${gulpMenu(simpleItems(['항목 A', '항목 B', '항목 C']), "bordered=true, dark=true, ariaLabel='다크 서피스 메뉴'")}`;
}

function examples(key: Name): FrameworkExample[] {
  const allImports = `Menu, MenuItem, MenuDivider, MenuGroup, MenuSubmenu`;
  const needsIcon = ['icon', 'submenu', 'badge', 'layout'].includes(key);
  const needsBadge = key === 'badge';
  const reactImports = [`import { ${allImports} } from '@uxkm/react/menu';`, needsIcon && `import Icon from '@uxkm/react/icon';`, needsBadge && `import Badge from '@uxkm/react/badge';`].filter(Boolean).join('\n');
  const vueImports = [`import { ${allImports} } from '@uxkm/vue/menu';`, needsIcon && `import Icon from '@uxkm/vue/icon';`, needsBadge && `import Badge from '@uxkm/vue/badge';`].filter(Boolean).join('\n');
  const reactCode = `${reactImports}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\n${vueImports}\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Menu.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `menu.njk · ${key}`, code: gulpCode(key) }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/menu · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/menu · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/menu · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/menu · ${key}`, code: reactCode }];
}
export const menuFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
