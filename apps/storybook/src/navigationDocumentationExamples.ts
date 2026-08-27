import type { FrameworkExample } from './FrameworkCode';
import { navbarFrameworkExamples as navbarBaseExamples } from './navbarFrameworkExamples';
import { menuFrameworkExamples as menuBaseExamples } from './menuFrameworkExamples';
import { tabsFrameworkExamples as tabsBaseExamples } from './tabsFrameworkExamples';
import { breadcrumbFrameworkExamples as breadcrumbBaseExamples } from './breadcrumbFrameworkExamples';
import { paginationFrameworkExamples as paginationBaseExamples } from './paginationFrameworkExamples';
import { stepsFrameworkExamples as stepsBaseExamples } from './stepsFrameworkExamples';
import { dropdownFrameworkExamples as dropdownBaseExamples } from './dropdownFrameworkExamples';

import navbarHtml from '../../html/src/components/navigation/Navbar/Navbar.html?raw';
import navbarGulp from '../../gulp/src/components/navigation/Navbar/navbar.njk?raw';
import navbarReact from '../../react/src/components/navigation/Navbar/Navbar.jsx?raw';
import navbarListReact from '../../react/src/components/navigation/Navbar/NavbarList.jsx?raw';
import navbarItemReact from '../../react/src/components/navigation/Navbar/NavbarItem.jsx?raw';
import navbarVue from '../../vue/src/components/navigation/Navbar/Navbar.vue?raw';
import navbarListVue from '../../vue/src/components/navigation/Navbar/NavbarList.vue?raw';
import navbarItemVue from '../../vue/src/components/navigation/Navbar/NavbarItem.vue?raw';
import menuHtml from '../../html/src/components/navigation/Menu/Menu.html?raw';
import menuGulp from '../../gulp/src/components/navigation/Menu/menu.njk?raw';
import menuReact from '../../react/src/components/navigation/Menu/Menu.jsx?raw';
import menuItemReact from '../../react/src/components/navigation/Menu/MenuItem.jsx?raw';
import menuSubmenuReact from '../../react/src/components/navigation/Menu/MenuSubmenu.jsx?raw';
import menuGroupReact from '../../react/src/components/navigation/Menu/MenuGroup.jsx?raw';
import menuDividerReact from '../../react/src/components/navigation/Menu/MenuDivider.jsx?raw';
import menuVue from '../../vue/src/components/navigation/Menu/Menu.vue?raw';
import menuItemVue from '../../vue/src/components/navigation/Menu/MenuItem.vue?raw';
import menuSubmenuVue from '../../vue/src/components/navigation/Menu/MenuSubmenu.vue?raw';
import menuGroupVue from '../../vue/src/components/navigation/Menu/MenuGroup.vue?raw';
import menuDividerVue from '../../vue/src/components/navigation/Menu/MenuDivider.vue?raw';
import tabsHtml from '../../html/src/components/navigation/Tabs/Tabs.html?raw';
import tabsGulp from '../../gulp/src/components/navigation/Tabs/tabs.njk?raw';
import tabsReact from '../../react/src/components/navigation/Tabs/Tabs.jsx?raw';
import tabsTabReact from '../../react/src/components/navigation/Tabs/TabsTab.jsx?raw';
import tabPanelReact from '../../react/src/components/navigation/Tabs/TabPanel.jsx?raw';
import tabMenuReact from '../../react/src/components/navigation/Tabs/TabMenu.jsx?raw';
import tabsVue from '../../vue/src/components/navigation/Tabs/Tabs.vue?raw';
import tabsTabVue from '../../vue/src/components/navigation/Tabs/TabsTab.vue?raw';
import tabPanelVue from '../../vue/src/components/navigation/Tabs/TabPanel.vue?raw';
import tabMenuVue from '../../vue/src/components/navigation/Tabs/TabMenu.vue?raw';
import breadcrumbHtml from '../../html/src/components/navigation/Breadcrumb/Breadcrumb.html?raw';
import breadcrumbGulp from '../../gulp/src/components/navigation/Breadcrumb/breadcrumb.njk?raw';
import breadcrumbReact from '../../react/src/components/navigation/Breadcrumb/Breadcrumb.jsx?raw';
import breadcrumbItemReact from '../../react/src/components/navigation/Breadcrumb/BreadcrumbItem.jsx?raw';
import breadcrumbEllipsisReact from '../../react/src/components/navigation/Breadcrumb/BreadcrumbEllipsis.jsx?raw';
import breadcrumbVue from '../../vue/src/components/navigation/Breadcrumb/Breadcrumb.vue?raw';
import breadcrumbItemVue from '../../vue/src/components/navigation/Breadcrumb/BreadcrumbItem.vue?raw';
import breadcrumbEllipsisVue from '../../vue/src/components/navigation/Breadcrumb/BreadcrumbEllipsis.vue?raw';
import paginationHtml from '../../html/src/components/navigation/Pagination/Pagination.html?raw';
import paginationGulp from '../../gulp/src/components/navigation/Pagination/pagination.njk?raw';
import paginationReact from '../../react/src/components/navigation/Pagination/Pagination.jsx?raw';
import paginationVue from '../../vue/src/components/navigation/Pagination/Pagination.vue?raw';
import stepsHtml from '../../html/src/components/navigation/Steps/Steps.html?raw';
import stepsGulp from '../../gulp/src/components/navigation/Steps/steps.njk?raw';
import stepsReact from '../../react/src/components/navigation/Steps/Steps.jsx?raw';
import stepsItemReact from '../../react/src/components/navigation/Steps/StepsItem.jsx?raw';
import stepsVue from '../../vue/src/components/navigation/Steps/Steps.vue?raw';
import stepsItemVue from '../../vue/src/components/navigation/Steps/StepsItem.vue?raw';
import dropdownHtml from '../../html/src/components/navigation/Dropdown/Dropdown.html?raw';
import dropdownGulp from '../../gulp/src/components/navigation/Dropdown/dropdown.njk?raw';
import dropdownReact from '../../react/src/components/navigation/Dropdown/Dropdown.jsx?raw';
import dropdownVue from '../../vue/src/components/navigation/Dropdown/Dropdown.vue?raw';

type ExampleMap = Record<string, FrameworkExample[]>;

function componentExamples(
  component: string,
  slug: string,
  sources: { html: string; gulp: string; react: string; vue: string },
): FrameworkExample[] {
  return [
    {
      id: 'html',
      label: 'HTML',
      fileName: `apps/html/src/components/navigation/${component}/${component}.html`,
      code: sources.html,
    },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/navigation/${component}/${slug}.njk`,
      code: sources.gulp,
    },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `apps/vue/src/components/navigation/${component}/${component}*.vue`,
      code: sources.vue,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/${slug} → ${component}*.vue`,
      code: sources.vue,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `apps/react/src/components/navigation/${component}/${component}*.jsx`,
      code: sources.react,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/${slug} → ${component}*.jsx`,
      code: sources.react,
    },
  ];
}

function withWebSquare<T extends ExampleMap>(
  component: string,
  examples: T,
  code: (key: string) => string,
): T {
  return Object.fromEntries(
    Object.entries(examples).map(([key, values]) => [
      key,
      [
        ...values,
        {
          id: 'websquare',
          label: 'WebSquare',
          fileName: `WebSquare 화면 XML · ${component} · ${key}`,
          code: `<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${code(key)}`,
        },
      ],
    ]),
  ) as T;
}

const joinSources = (...parts: string[]) => parts.join('\n\n');

export const navbarComponentExamples = componentExamples('Navbar', 'navbar', {
  html: navbarHtml,
  gulp: navbarGulp,
  react: joinSources(
    navbarReact,
    `<!-- NavbarList.jsx -->\n${navbarListReact}`,
    `<!-- NavbarItem.jsx -->\n${navbarItemReact}`,
  ),
  vue: joinSources(
    navbarVue,
    `<!-- NavbarList.vue -->\n${navbarListVue}`,
    `<!-- NavbarItem.vue -->\n${navbarItemVue}`,
  ),
});
export const menuComponentExamples = componentExamples('Menu', 'menu', {
  html: menuHtml,
  gulp: menuGulp,
  react: joinSources(
    menuReact,
    `<!-- MenuItem.jsx -->\n${menuItemReact}`,
    `<!-- MenuSubmenu.jsx -->\n${menuSubmenuReact}`,
    `<!-- MenuGroup.jsx -->\n${menuGroupReact}`,
    `<!-- MenuDivider.jsx -->\n${menuDividerReact}`,
  ),
  vue: joinSources(
    menuVue,
    `<!-- MenuItem.vue -->\n${menuItemVue}`,
    `<!-- MenuSubmenu.vue -->\n${menuSubmenuVue}`,
    `<!-- MenuGroup.vue -->\n${menuGroupVue}`,
    `<!-- MenuDivider.vue -->\n${menuDividerVue}`,
  ),
});
export const tabsComponentExamples = componentExamples('Tabs', 'tabs', {
  html: tabsHtml,
  gulp: tabsGulp,
  react: joinSources(
    tabsReact,
    `<!-- TabsTab.jsx -->\n${tabsTabReact}`,
    `<!-- TabPanel.jsx -->\n${tabPanelReact}`,
    `<!-- TabMenu.jsx -->\n${tabMenuReact}`,
  ),
  vue: joinSources(
    tabsVue,
    `<!-- TabsTab.vue -->\n${tabsTabVue}`,
    `<!-- TabPanel.vue -->\n${tabPanelVue}`,
    `<!-- TabMenu.vue -->\n${tabMenuVue}`,
  ),
});
export const breadcrumbComponentExamples = componentExamples('Breadcrumb', 'breadcrumb', {
  html: breadcrumbHtml,
  gulp: breadcrumbGulp,
  react: joinSources(
    breadcrumbReact,
    `<!-- BreadcrumbItem.jsx -->\n${breadcrumbItemReact}`,
    `<!-- BreadcrumbEllipsis.jsx -->\n${breadcrumbEllipsisReact}`,
  ),
  vue: joinSources(
    breadcrumbVue,
    `<!-- BreadcrumbItem.vue -->\n${breadcrumbItemVue}`,
    `<!-- BreadcrumbEllipsis.vue -->\n${breadcrumbEllipsisVue}`,
  ),
});
export const paginationComponentExamples = componentExamples('Pagination', 'pagination', {
  html: paginationHtml,
  gulp: paginationGulp,
  react: paginationReact,
  vue: paginationVue,
});
export const stepsComponentExamples = componentExamples('Steps', 'steps', {
  html: stepsHtml,
  gulp: stepsGulp,
  react: joinSources(stepsReact, `<!-- StepsItem.jsx -->\n${stepsItemReact}`),
  vue: joinSources(stepsVue, `<!-- StepsItem.vue -->\n${stepsItemVue}`),
});
export const dropdownComponentExamples = componentExamples('Dropdown', 'dropdown', {
  html: dropdownHtml,
  gulp: dropdownGulp,
  react: dropdownReact,
  vue: dropdownVue,
});

function navItem(id: string, label: string, options: { current?: boolean; href?: string } = {}) {
  const current = options.current ? ' aria-current="page"' : '';
  return `<w2:textbox id="${id}" class="navbar_link${options.current ? ' is-active' : ''}" tagname="a" href="${options.href ?? '#'}" label="${label}"${current}></w2:textbox>`;
}

function navbarWebSquare(key: string) {
  const brand = `<w2:textbox id="navbarBrand" class="navbar_brand" tagname="a" href="/" label="UXKM"></w2:textbox>`;
  const list = `<w2:group id="navbarList" class="navbar_list" tagname="ul" role="list">
  ${navItem('navHome', '홈', { current: true }).replaceAll('\n', '\n  ')}
  ${navItem('navDocs', '문서').replaceAll('\n', '\n  ')}
  ${navItem('navComponents', '컴포넌트').replaceAll('\n', '\n  ')}
</w2:group>`;
  const search = `<w2:group id="navbarSearch" class="navbar_search">
  <xf:input id="navbarSearchInput" class="input input_sm" type="search" placeholder="검색" aria-label="검색"></xf:input>
</w2:group>`;
  const actions = `<w2:group id="navbarActions" class="navbar_actions">
  <xf:trigger id="navbarLogin" type="button" class="btn btn_ghost btn_sm">
    <xf:label><![CDATA[로그인]]></xf:label>
  </xf:trigger>
</w2:group>`;
  const classes: Record<string, string> = {
    basic: 'navbar',
    brand: 'navbar',
    actions: 'navbar',
    search: 'navbar',
    size: 'navbar navbar_sm',
    variant: 'navbar navbar_bordered',
    badge: 'navbar',
    responsive: 'navbar navbar_responsive',
  };
  const extras: Record<string, string> = {
    basic: list,
    brand: list,
    actions: `${list}\n${actions}`,
    search: `${list}\n${search}`,
    size: list,
    variant: list,
    badge: `${list}\n${actions}`,
    responsive: `${list}\n${actions}`,
  };
  return `<w2:group id="navbar${key}" class="${classes[key] ?? 'navbar'}" tagname="header">
  ${brand}
  ${(extras[key] ?? list).replaceAll('\n', '\n  ')}
</w2:group>`;
}

function menuWebSquare(key: string) {
  const horizontal = key === 'horizontal' || key === 'horizontalSubmenu';
  const rootClass = [
    'menu',
    horizontal && 'menu_horizontal',
    key === 'variant' && 'menu_bordered',
  ]
    .filter(Boolean)
    .join(' ');
  const item = (id: string, label: string, opts: { current?: boolean; disabled?: boolean } = {}) =>
    `<w2:textbox id="${id}" class="menu_item${opts.current ? ' is-active' : ''}${opts.disabled ? ' is-disabled' : ''}" tagname="a" href="#" label="${label}"${opts.current ? ' aria-current="page"' : ''}${opts.disabled ? ' aria-disabled="true"' : ''}></w2:textbox>`;
  if (key === 'submenu' || key === 'horizontalSubmenu') {
    return `<w2:group id="menu${key}" class="${rootClass}" role="menu">
  ${item('menuHome', '홈', { current: true })}
  <w2:group id="menuSub" class="menu_submenu">
    <xf:trigger id="menuSubTrigger" type="button" class="menu_item" aria-haspopup="true" aria-expanded="false" ev:onclick="scwin.menu_toggle">
      <xf:label><![CDATA[더보기]]></xf:label>
    </xf:trigger>
    <w2:group id="menuSubPanel" class="menu_submenu-panel" role="menu">
      ${item('menuSubA', '하위 항목 A')}
      ${item('menuSubB', '하위 항목 B')}
    </w2:group>
  </w2:group>
</w2:group>`;
  }
  if (key === 'group') {
    return `<w2:group id="menuGroup" class="menu" role="menu">
  <w2:textbox id="menuGroupLabel" class="menu_group-label" label="계정"></w2:textbox>
  ${item('menuProfile', '프로필')}
  ${item('menuSettings', '설정')}
  <w2:textbox id="menuDivider" class="menu_divider" aria-hidden="true" label=""></w2:textbox>
  ${item('menuLogout', '로그아웃')}
</w2:group>`;
  }
  return `<w2:group id="menu${key}" class="${rootClass}" role="menu">
  ${item('menuHome', '홈', { current: true })}
  ${item('menuDocs', '문서')}
  ${item('menuDisabled', '비활성', { disabled: key === 'disabled' })}
</w2:group>`;
}

function tabsWebSquare(key: string) {
  const classes: Record<string, string> = {
    basic: 'tabs',
    dynamic: 'tabs',
    indicator: 'tabs tabs_indicator-slide',
    equal: 'tabs tabs_equal',
    layoutScroll: 'tabs tabs_scroll',
    card: 'tabs tabs_card',
    pill: 'tabs tabs_pill',
    size: 'tabs tabs_sm',
    icon: 'tabs',
    badge: 'tabs',
    extra: 'tabs',
    scroll: 'tabs tabs_scroll',
    disabled: 'tabs',
    vertical: 'tabs tabs_vertical',
  };
  const tab = (id: string, label: string, selected = false, disabled = false) =>
    `<xf:trigger id="${id}" type="button" class="tabs_tab${selected ? ' is-active' : ''}" role="tab" aria-selected="${selected}" aria-controls="${id}Panel"${disabled ? ' disabled="true"' : ''} ev:onclick="scwin.tabs_select">
  <xf:label><![CDATA[${label}]]></xf:label>
</xf:trigger>`;
  return `<w2:group id="tabs${key}" class="${classes[key] ?? 'tabs'}">
  <w2:group id="tabs${key}List" class="tabs_list" role="tablist">
    ${tab(`tabs${key}A`, '개요', true)}
    ${tab(`tabs${key}B`, '상세')}
    ${tab(`tabs${key}C`, '설정', false, key === 'disabled')}
  </w2:group>
  <w2:group id="tabs${key}APanel" class="tabs_panel is-active" role="tabpanel">
    <w2:textbox id="tabs${key}Body" tagname="p" label="선택된 탭 패널 내용입니다."></w2:textbox>
  </w2:group>
</w2:group>`;
}

function breadcrumbWebSquare(key: string) {
  const sizeClass = key === 'size' ? ' breadcrumb_sm' : '';
  const item = (id: string, label: string, current = false) =>
    current
      ? `<w2:textbox id="${id}" class="breadcrumb_item is-current" tagname="span" aria-current="page" label="${label}"></w2:textbox>`
      : `<w2:textbox id="${id}" class="breadcrumb_item" tagname="a" href="#" label="${label}"></w2:textbox>`;
  const sep = `<w2:textbox id="bcSep" class="breadcrumb_separator" aria-hidden="true" label="/"></w2:textbox>`;
  if (key === 'ellipsis') {
    return `<w2:group id="breadcrumbEllipsis" class="breadcrumb" tagname="nav" aria-label="경로">
  <w2:group id="breadcrumbList" class="breadcrumb_list" tagname="ol">
    ${item('bcHome', '홈')}
    ${sep}
    <xf:trigger id="bcEllipsis" type="button" class="breadcrumb_ellipsis" aria-label="중간 경로 펼치기" ev:onclick="scwin.breadcrumb_expand">
      <xf:label><![CDATA[…]]></xf:label>
    </xf:trigger>
    ${sep}
    ${item('bcCurrent', '현재 페이지', true)}
  </w2:group>
</w2:group>`;
  }
  return `<w2:group id="breadcrumb${key}" class="breadcrumb${sizeClass}" tagname="nav" aria-label="경로">
  <w2:group id="breadcrumb${key}List" class="breadcrumb_list" tagname="ol">
    ${item(`bc${key}Home`, '홈')}
    ${sep}
    ${item(`bc${key}Docs`, '문서')}
    ${sep}
    ${item(`bc${key}Current`, '현재 페이지', true)}
  </w2:group>
</w2:group>`;
}

function paginationWebSquare(key: string) {
  const classes: Record<string, string> = {
    basic: 'pagination',
    minimal: 'pagination pagination_minimal',
    size: 'pagination pagination_sm',
    round: 'pagination pagination_round',
    ellipsis: 'pagination',
    simple: 'pagination pagination_simple',
    toolbar: 'pagination',
    align: 'pagination pagination_center',
    state: 'pagination',
  };
  const page = (id: string, label: string, current = false, disabled = false) =>
    `<xf:trigger id="${id}" type="button" class="pagination_item${current ? ' is-active' : ''}"${current ? ' aria-current="page"' : ''}${disabled ? ' disabled="true"' : ''} ev:onclick="scwin.pagination_goto">
  <xf:label><![CDATA[${label}]]></xf:label>
</xf:trigger>`;
  if (key === 'simple') {
    return `<w2:group id="paginationSimple" class="${classes.simple}" role="navigation" aria-label="페이지">
  <xf:trigger id="paginationPrev" type="button" class="pagination_prev" ev:onclick="scwin.pagination_prev">
    <xf:label><![CDATA[이전]]></xf:label>
  </xf:trigger>
  <w2:textbox id="paginationStatus" class="pagination_status" label="3 / 12"></w2:textbox>
  <xf:trigger id="paginationNext" type="button" class="pagination_next" ev:onclick="scwin.pagination_next">
    <xf:label><![CDATA[다음]]></xf:label>
  </xf:trigger>
</w2:group>`;
  }
  return `<w2:group id="pagination${key}" class="${classes[key] ?? 'pagination'}" role="navigation" aria-label="페이지">
  ${page(`pg${key}Prev`, '이전', false, key === 'state')}
  ${page(`pg${key}1`, '1')}
  ${page(`pg${key}2`, '2', true)}
  ${page(`pg${key}3`, '3')}
  ${key === 'ellipsis' ? '<w2:textbox id="pgEllipsis" class="pagination_ellipsis" aria-hidden="true" label="…"></w2:textbox>' : ''}
  ${page(`pg${key}Next`, '다음')}
</w2:group>`;
}

function stepsWebSquare(key: string) {
  const classes: Record<string, string> = {
    basic: 'steps',
    simple: 'steps steps_simple',
    vertical: 'steps steps_vertical',
    dot: 'steps steps_dot',
    icon: 'steps',
    navigable: 'steps',
    error: 'steps',
    align: 'steps steps_center',
    size: 'steps steps_sm',
    state: 'steps',
  };
  const step = (
    id: string,
    title: string,
    status: 'done' | 'current' | 'wait' | 'error' = 'wait',
  ) => `<w2:group id="${id}" class="steps_item is-${status}"${status === 'current' ? ' aria-current="step"' : ''}>
  <w2:textbox id="${id}Marker" class="steps_marker" aria-hidden="true" label="${status === 'done' ? '✓' : status === 'error' ? '!' : ''}"></w2:textbox>
  <w2:textbox id="${id}Title" class="steps_title" label="${title}"></w2:textbox>
</w2:group>`;
  const thirdStatus = key === 'error' ? 'error' : 'wait';
  return `<w2:group id="steps${key}" class="${classes[key] ?? 'steps'}">
  ${step(`steps${key}1`, '정보 입력', 'done')}
  ${step(`steps${key}2`, '확인', 'current')}
  ${step(`steps${key}3`, '완료', thirdStatus)}
</w2:group>`;
}

function dropdownWebSquare(key: string) {
  const open = key === 'open' || key === 'example' ? ' is-open' : '';
  const disabled = key === 'disabled' ? ' disabled="true"' : '';
  return `<w2:group id="dropdown${key}" class="dropdown${open}">
  <xf:trigger id="dropdown${key}Trigger" type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="${open ? 'true' : 'false'}" aria-controls="dropdown${key}Panel"${disabled} ev:onclick="scwin.dropdown_toggle">
    <xf:label><![CDATA[${key === 'select' ? '옵션 선택' : '메뉴 열기'}]]></xf:label>
  </xf:trigger>
  <w2:group id="dropdown${key}Panel" class="dropdown_panel${key === 'scroll' ? ' dropdown_scroll' : ''}" role="menu">
    <w2:textbox id="dropdown${key}Item1" class="menu_item" tagname="button" role="menuitem" label="프로필"></w2:textbox>
    <w2:textbox id="dropdown${key}Item2" class="menu_item" tagname="button" role="menuitem" label="설정"></w2:textbox>
    <w2:textbox id="dropdown${key}Item3" class="menu_item" tagname="button" role="menuitem" label="로그아웃"></w2:textbox>
  </w2:group>
</w2:group>`;
}

export const navbarFrameworkExamples = withWebSquare('Navbar', navbarBaseExamples, navbarWebSquare);
export const menuFrameworkExamples = withWebSquare('Menu', menuBaseExamples, menuWebSquare);
export const tabsFrameworkExamples = withWebSquare('Tabs', tabsBaseExamples, tabsWebSquare);
export const breadcrumbFrameworkExamples = withWebSquare(
  'Breadcrumb',
  breadcrumbBaseExamples,
  breadcrumbWebSquare,
);
export const paginationFrameworkExamples = withWebSquare(
  'Pagination',
  paginationBaseExamples,
  paginationWebSquare,
);
export const stepsFrameworkExamples = withWebSquare('Steps', stepsBaseExamples, stepsWebSquare);
export const dropdownFrameworkExamples = withWebSquare(
  'Dropdown',
  dropdownBaseExamples,
  dropdownWebSquare,
);
