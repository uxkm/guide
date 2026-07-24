/**
 * 컴포넌트 가이드 사이드바 네비게이션
 */
(function () {
  const NAV_GROUPS = [
    {
      title: '시작하기',
      items: [
        { label: '소개', href: 'index.html', slug: 'intro' },
        { label: '설치 및 사용', href: 'getting-started.html', slug: 'getting-started' },
      ],
    },
    {
      title: '레이아웃',
      items: [
        { label: 'Container', href: 'components/container.html', slug: 'container' },
        { label: 'Grid', href: 'components/grid.html', slug: 'grid' },
        { label: 'Divider', href: 'components/divider.html', slug: 'divider' },
        { label: 'Space', href: 'components/space.html', slug: 'space' },
      ],
    },
    {
      title: '기본 요소',
      items: [
        { label: 'Button', href: 'components/button.html', slug: 'button' },
        { label: 'Typography', href: 'components/typography.html', slug: 'typography' },
        { label: 'Icon', href: 'components/icon.html', slug: 'icon' },
        { label: 'Link', href: 'components/link.html', slug: 'link' },
      ],
    },
    {
      title: '데이터 표시',
      items: [
        { label: 'Avatar', href: 'components/avatar.html', slug: 'avatar' },
        { label: 'Badge', href: 'components/badge.html', slug: 'badge' },
        { label: 'Tag', href: 'components/tag.html', slug: 'tag' },
        { label: 'Card', href: 'components/card.html', slug: 'card' },
        { label: 'Table', href: 'components/table.html', slug: 'table' },
        { label: 'List', href: 'components/list.html', slug: 'list' },
        { label: 'Stat', href: 'components/stat.html', slug: 'stat' },
        { label: 'Calendar', href: 'components/calendar.html', slug: 'calendar' },
        { label: 'Timeline', href: 'components/timeline.html', slug: 'timeline' },
        { label: 'Tree', href: 'components/tree.html', slug: 'tree' },
      ],
    },
    {
      title: '폼',
      items: [
        { label: 'Form Layout', href: 'components/form-layout.html', slug: 'form-layout' },
        { label: 'Input', href: 'components/input.html', slug: 'input' },
        { label: 'Textarea', href: 'components/textarea.html', slug: 'textarea' },
        { label: 'Select', href: 'components/select.html', slug: 'select' },
        { label: 'Checkbox', href: 'components/checkbox.html', slug: 'checkbox' },
        { label: 'Radio', href: 'components/radio.html', slug: 'radio' },
        { label: 'Switch', href: 'components/switch.html', slug: 'switch' },
        { label: 'Slider', href: 'components/slider.html', slug: 'slider' },
        { label: 'Rate', href: 'components/rate.html', slug: 'rate' },
        { label: 'Date Picker', href: 'components/date-picker.html', slug: 'date-picker' },
        { label: 'Upload', href: 'components/upload.html', slug: 'upload' },
      ],
    },
    {
      title: '피드백',
      items: [
        { label: 'Alert', href: 'components/alert.html', slug: 'alert' },
        { label: 'Modal', href: 'components/modal.html', slug: 'modal' },
        { label: 'Drawer', href: 'components/drawer.html', slug: 'drawer' },
        { label: 'Popover', href: 'components/popover.html', slug: 'popover' },
        { label: 'Tooltip', href: 'components/tooltip.html', slug: 'tooltip' },
        { label: 'Progress', href: 'components/progress.html', slug: 'progress' },
        { label: 'Spin', href: 'components/spin.html', slug: 'spin' },
        { label: 'Skeleton', href: 'components/skeleton.html', slug: 'skeleton' },
        { label: 'Empty', href: 'components/empty.html', slug: 'empty' },
      ],
    },
    {
      title: '네비게이션',
      items: [
        { label: 'Navbar', href: 'components/navbar.html', slug: 'navbar' },
        { label: 'Menu', href: 'components/menu.html', slug: 'menu' },
        { label: 'Tabs', href: 'components/tabs.html', slug: 'tabs' },
        { label: 'Breadcrumb', href: 'components/breadcrumb.html', slug: 'breadcrumb' },
        { label: 'Pagination', href: 'components/pagination.html', slug: 'pagination' },
        { label: 'Steps', href: 'components/steps.html', slug: 'steps' },
        { label: 'Dropdown', href: 'components/dropdown.html', slug: 'dropdown' },
      ],
    },
    {
      title: '기타',
      items: [
        { label: 'Accordion', href: 'components/accordion.html', slug: 'accordion' },
        { label: 'Collapse', href: 'components/collapse.html', slug: 'collapse' },
        { label: 'Carousel', href: 'components/carousel.html', slug: 'carousel' },
        { label: 'Offcanvas', href: 'components/offcanvas.html', slug: 'offcanvas' },
        { label: 'Affix', href: 'components/affix.html', slug: 'affix' },
        { label: 'Back Top', href: 'components/back-top.html', slug: 'back-top' },
      ],
    },
  ];

  const STORAGE_NAV_GROUPS = 'guide-nav-groups';
  const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';
  const DESKTOP_BREAKPOINT = 1024;

  function getBasePath() {
    const path = window.location.pathname;
    return path.includes('/components/') ? '..' : '.';
  }

  function resolveHref(href, base) {
    if (href.startsWith('http') || href.startsWith('../')) return href;
    return base + '/' + href.replace(/^\.\//, '');
  }

  function getCurrentSlug() {
    return document.body.dataset.activeNav || '';
  }

  function isDesktop() {
    return window.innerWidth > DESKTOP_BREAKPOINT;
  }

  function readNavGroupState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_NAV_GROUPS) || '{}');
    } catch (e) {
      return {};
    }
  }

  function saveNavGroupState(state) {
    try {
      localStorage.setItem(STORAGE_NAV_GROUPS, JSON.stringify(state));
    } catch (e) {}
  }

  function renderChevron() {
    return (
      '<svg class="guide_nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<path d="M6 9l6 6 6-6"/>' +
      '</svg>'
    );
  }

  function renderSidebar() {
    const base = getBasePath();
    const currentSlug = getCurrentSlug();
    const savedGroups = readNavGroupState();

    const groupsHtml = NAV_GROUPS.map(function (group, index) {
      const groupId = 'group-' + index;
      const hasActive = group.items.some(function (item) {
        return item.slug === currentSlug;
      });
      const isExpanded = savedGroups[groupId] !== undefined ? savedGroups[groupId] : true;
      const expanded = hasActive || isExpanded;

      const itemsHtml = group.items.map(function (item) {
        const href = resolveHref(item.href, base);
        const isActive = item.slug === currentSlug;
        const badge = item.comingSoon
          ? '<span class="guide_nav-badge">준비중</span>'
          : '';
        const classes = [
          'guide_nav-link',
          isActive ? 'is-active' : '',
          item.comingSoon ? 'is-disabled' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          '<li><a class="' +
          classes +
          '" href="' +
          (item.comingSoon ? '#' : href) +
          '">' +
          '<span>' +
          item.label +
          '</span>' +
          badge +
          '</a></li>'
        );
      }).join('');

      return (
        '<div class="guide_nav-group' +
        (expanded ? '' : ' is-collapsed') +
        '" data-nav-group="' +
        groupId +
        '">' +
        '<button type="button" class="guide_nav-heading" aria-expanded="' +
        (expanded ? 'true' : 'false') +
        '" aria-controls="nav-list-' +
        groupId +
        '">' +
        '<span class="guide_nav-heading-text">' +
        group.title +
        '</span>' +
        renderChevron() +
        '</button>' +
        '<ul class="guide_nav-list" id="nav-list-' +
        groupId +
        '">' +
        itemsHtml +
        '</ul>' +
        '</div>'
      );
    }).join('');

    return (
      '<aside class="guide_sidebar" id="guide-sidebar" aria-label="컴포넌트 메뉴">' +
      '<div class="guide_sidebar-brand">' +
      '<a class="guide_sidebar-back" href="' +
      (base === '..' ? '../..' : '..') +
      '/index.html">← UXKM Guide</a>' +
      '<div class="guide_sidebar-title">HTML Components</div>' +
      '<p class="guide_sidebar-desc">Pure HTML · SCSS</p>' +
      '</div>' +
      '<nav class="guide_nav">' +
      groupsHtml +
      '</nav>' +
      '</aside>' +
      '<div class="guide_overlay" id="guide-overlay" aria-hidden="true"></div>'
    );
  }

  function setNavGroupExpanded(group, heading, expanded) {
    group.classList.toggle('is-collapsed', !expanded);
    heading.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function initNavGroups() {
    const savedGroups = readNavGroupState();

    document.querySelectorAll('.guide_nav-group').forEach(function (group) {
      const groupId = group.dataset.navGroup;
      const heading = group.querySelector('.guide_nav-heading');
      const hasActive = group.querySelector('.guide_nav-link.is-active');

      if (hasActive) {
        setNavGroupExpanded(group, heading, true);
        savedGroups[groupId] = true;
      }

      heading.addEventListener('click', function () {
        const expanded = heading.getAttribute('aria-expanded') === 'true';
        const nextExpanded = !expanded;

        setNavGroupExpanded(group, heading, nextExpanded);
        savedGroups[groupId] = nextExpanded;
        saveNavGroupState(savedGroups);
      });
    });

    saveNavGroupState(savedGroups);
  }

  function scrollActiveNavToTop() {
    const nav = document.querySelector('.guide_nav');
    const activeLink = document.querySelector('.guide_nav-link.is-active');

    if (!nav || !activeLink) return;

    requestAnimationFrame(function () {
      const topPadding =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--space-md')) || 16;
      const navTop = nav.getBoundingClientRect().top;
      const linkTop = activeLink.getBoundingClientRect().top;
      nav.scrollTop = Math.max(0, nav.scrollTop + linkTop - navTop - topPadding);
    });
  }

  function setSidebarCollapsed(collapsed, persist) {
    const layout = document.querySelector('.guide_layout');
    const headerToggle = document.getElementById('guide-sidebar-toggle');

    if (!layout) return;

    layout.classList.toggle('is-sidebar-collapsed', collapsed);

    if (headerToggle) {
      headerToggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      headerToggle.setAttribute('aria-label', collapsed ? '사이드바 펼치기' : '사이드바 접기');
    }

    if (persist && isDesktop()) {
      try {
        localStorage.setItem(STORAGE_SIDEBAR_COLLAPSED, collapsed ? '1' : '0');
      } catch (e) {}
    }
  }

  function initSidebarCollapse() {
    const layout = document.querySelector('.guide_layout');
    const headerToggle = document.getElementById('guide-sidebar-toggle');

    if (!layout) return;

    let collapsed = false;
    try {
      collapsed = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
    } catch (e) {}

    if (isDesktop()) {
      setSidebarCollapsed(collapsed, false);
    }

    function toggleSidebar() {
      if (!isDesktop()) return;
      setSidebarCollapsed(!layout.classList.contains('is-sidebar-collapsed'), true);
    }

    if (headerToggle) {
      headerToggle.addEventListener('click', toggleSidebar);
    }

    window.addEventListener('resize', function () {
      if (!isDesktop()) {
        layout.classList.remove('is-sidebar-collapsed');
        return;
      }

      try {
        const stored = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
        setSidebarCollapsed(stored, false);
      } catch (e) {
        setSidebarCollapsed(false, false);
      }
    });
  }

  function initMobileNav() {
    const sidebar = document.getElementById('guide-sidebar');
    const overlay = document.getElementById('guide-overlay');
    const menuBtn = document.getElementById('guide-menu-btn');

    if (!sidebar || !menuBtn) return;

    function open() {
      sidebar.classList.add('is-open');
      overlay.classList.add('is-visible');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      sidebar.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', function () {
      sidebar.classList.contains('is-open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    sidebar.querySelectorAll('.guide_nav-link:not(.is-disabled)').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!isDesktop()) close();
      });
    });
  }

  function init() {
    const mount = document.getElementById('guide-sidebar-mount');
    if (!mount) return;

    mount.outerHTML = renderSidebar();
    initNavGroups();
    scrollActiveNavToTop();
    initSidebarCollapse();
    initMobileNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GuideNav = { NAV_GROUPS: NAV_GROUPS };
})();
